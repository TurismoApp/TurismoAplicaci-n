import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/common';
import { TNSPlayer } from "nativescript-audio";
import { songs } from '~/models/music.model';
let cancionTerminada = new EventEmitter<boolean>();
@Component({
	moduleId: module.id,
	selector: 'music-reproductor',
	templateUrl: './music-reproductor.component.html',
	styleUrls: ['./music-reproductor.component.css']
})

export class MusicReproductorComponent implements OnInit, OnDestroy {
	playerSong: AudioPlayer = null;
	title: string = "ii";
	image: string;
	duration: string;
	Song: songs;
	index: number;
	songs: any[] = [];
	constructor(
		private modalParams: ModalDialogParams
	) {
		cancionTerminada.subscribe((Response: boolean) => {
			this.index++;
			this.songs.length > 0 ? this.move(this.index) : null;
		});
	}

	async ngOnDestroy() {
		await this.playerSong.objectPlay().dispose();
		this.songs = [];
	}

	ngOnInit() {
		if (this.modalParams.context.song) {
			this.Song = <songs>this.modalParams.context.song;
			this.title = this.Song.name;
			this.image = this.Song.image;
			this.playerSong = new AudioPlayer(this.Song.song);
		} else {
			this.index = this.modalParams.context.index;
			this.songs = this.modalParams.context.songs;
			this.title = this.songs[this.index].title;
			this.image = this.modalParams.context.image;
			this.playerSong = new AudioPlayer(this.songs[this.index].preview);
		}

	}

	next() {
		this.index++;
		this.move(this.index);
	}

	async move(index: number) {
		await this.playerSong.objectPlay().dispose();
		this.title = this.songs[this.index].title;
		this.image = this.modalParams.context.image;
		this.playerSong = new AudioPlayer(this.songs[this.index].preview);
	}

	back() {
		this.index--;
		this.move(this.index);
	}

	play() {
		this.playerSong.togglePlay();
	}

	async close() {
		await this.playerSong.objectPlay().dispose();
		this.modalParams.closeCallback();
	}
}

export class AudioPlayer {
	private _player: TNSPlayer;
	public state: boolean = false;
	constructor(link: string) {
		this._player = new TNSPlayer();
		this._player.debug = true; // set true to enable TNSPlayer console logs for debugging.
		this._player
			.initFromFile({
				audioFile: link, // ~ = app directory
				loop: false,
				completeCallback: this._trackComplete.bind(this),
				errorCallback: this._trackError.bind(this)
			})
			.then(() => {
				this.togglePlay();
				this._player.getAudioTrackDuration().then(duration => {
				});
			});
	}

	public togglePlay() {
		if (this._player.isAudioPlaying()) {
			this._player.pause();
			this.state = false;
		} else {
			this._player.play();
			this.state = true;
		}
	}

	public objectPlay() {
		return this._player;
	}

	public async _trackComplete(args: any) {
		await this._player.dispose();
		this.state = false;
		cancionTerminada.emit(this.state);
	}

	private _trackError(args: any) {
		console.log('reference back to player:', args.player);
		console.log('the error:', args.error);
		// Android only: extra detail on error
		console.log('extra info on the error:', args.extra);
	}
}