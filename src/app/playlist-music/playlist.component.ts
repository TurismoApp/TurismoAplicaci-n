/* import { Component, OnInit, ViewContainerRef, ChangeDetectorRef, ViewChild } from '@angular/core';
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer, SideDrawerLocation} from "nativescript-ui-sidedrawer";
import { songs, albums, artist } from '~/models/music.model';
import { MusicService } from '~/service/music.service';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/common';
import { MusicReproductorComponent } from './music-reproductor/music-reproductor.component';
import { Observable } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-playlist',
  providers: [MusicReproductorComponent],
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class playListComponent  implements OnInit{
  topCanciones: songs[] = [];
  topAlbumes: albums[] = [];
  topArtist: artist[] = [];
  constructor(
    private modalService: ModalDialogService,
    private _viewcontainer: ViewContainerRef,
    private musicService: MusicService,
    private _changeDetectionRef: ChangeDetectorRef
  ) {}

  @ViewChild(RadSideDrawerComponent, { static: false }) public drawerComponent: RadSideDrawerComponent;
  private drawer: RadSideDrawer;

  async ngOnInit() {
    await Promise.all([
      (await this.musicService.getTopSongs()).subscribe((Response: any ) => {
        this.topCanciones = <songs[]>Response.data;
      }, error => console.log(error)),
      (await this.musicService.getTopAlbums()).subscribe((Response: any ) => {
        this.topAlbumes = <albums[]>Response.data;
      }, error => console.log(error)),
      (await this.musicService.getTopArtist()).subscribe((Response: any ) => {
        this.topArtist = <artist[]>Response.data;
      }, error => console.log(error))
    ]);
  }
  
  viewSong(link: songs) {
    const options: ModalDialogOptions = {
      viewContainerRef: this._viewcontainer,
      fullscreen: true,
      context: {
        song: link
      }
    };
    this.modalService.showModal(MusicReproductorComponent, options);
  }
}
 */
import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef, ViewContainerRef } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer, SideDrawerLocation, DrawerTransitionBase, PushTransition, FadeTransition } from 'nativescript-ui-sidedrawer';
import { songs, albums, artist } from '~/models/music.model';
import { MusicService } from '~/service/music.service';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/common';
import { MusicReproductorComponent } from './music-reproductor/music-reproductor.component';
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import { Timestamp } from "rxjs/internal/operators/timestamp";
import { ItemEventData } from "nativescript-pager/pager.common";

@Component({
  moduleId: module.id,
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class playListComponent implements AfterViewInit, OnInit {
  private _sideDrawerTransition: DrawerTransitionBase;
  private _mainContentText: string;
  topCanciones: songs[] = [];
  topAlbumes: albums[] = [];
  topArtist: artist[] = [];
  image: string;
  source: any[] = []
  title: string;
  constructor(private modalService: ModalDialogService,
    private _viewcontainer: ViewContainerRef,
    private musicService: MusicService,
    private _changeDetectionRef: ChangeDetectorRef) {
  }

  @ViewChild(RadSideDrawerComponent, { static: false }) public drawerComponent: RadSideDrawerComponent;
  private drawer: RadSideDrawer;

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this.drawer.drawerLocation = SideDrawerLocation.Bottom;
    this.sideDrawerTransition = new FadeTransition();
    this._changeDetectionRef.detectChanges();
  }

  async  ngOnInit() {
    await Promise.all([
      (await this.musicService.getTopSongs()).subscribe((Response: any) => {
        this.topCanciones = <songs[]>Response.data;
      }, error => console.log(error)),
      (await this.musicService.getTopAlbums()).subscribe((Response: any) => {
        this.topAlbumes = <albums[]>Response.data;
      }, error => console.log(error)),
      (await this.musicService.getTopArtist()).subscribe((Response: any) => {
        this.topArtist = <artist[]>Response.data;
      }, error => console.log(error))
    ]);
  }

  get mainContentText() {
    return this._mainContentText;
  }

  set mainContentText(value: string) {
    this._mainContentText = value;
  }

  get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTransition;
  }

  set sideDrawerTransition(value: DrawerTransitionBase) {
    this._sideDrawerTransition = value;
  }

  async openDrawer(item: any) {
    this.title = <string>item.name;
    this.image = <string>item.image;
    if (item.tracks) {
      (await this.musicService.getList(item.tracks)).subscribe((Response: any) => {
        this.source = <any[]>Response.data;
        this.drawer.showDrawer();
      });
    }
    else {
      (await this.musicService.getList(item.songs)).subscribe((Response: any) => {
        this.source = <any[]>Response.data;
        this.drawer.showDrawer();
      });
    }
  }

  public onItemTap(event: ItemEventData) {
    const options: ModalDialogOptions = {
      viewContainerRef: this._viewcontainer,
      fullscreen: true,
      context: {
        songs: this.source,
        index: event.index,
        image: this.image
      }
    };
    this.modalService.showModal(MusicReproductorComponent, options);
  }

  public toTime(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? ":" : ":") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? ":" : ":") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? "" : "") : "";
    return hDisplay + mDisplay + sDisplay; 
}
  public onCloseDrawerTap() {
    this.drawer.closeDrawer();
  }

  viewSong(link: songs) {
    const options: ModalDialogOptions = {
      viewContainerRef: this._viewcontainer,
      fullscreen: true,
      context: {
        song: link
      }
    };
    this.modalService.showModal(MusicReproductorComponent, options);
  }
}
