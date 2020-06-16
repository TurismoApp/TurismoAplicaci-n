import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { host } from '~/database/host.database';

const getSongs = '/Music/Canciones';
const getAlbums = '/Music/Albumes';
const getArtist = '/Music/Artistas';

@Injectable({providedIn: 'root'})
export class MusicService {
    constructor(private httpClient: HttpClient) { }
    
    async getTopSongs() {
        return this.httpClient.get(host + getSongs);
    }

    async getTopAlbums() {
        return this.httpClient.get(host + getAlbums);
    }

    async getTopArtist() {
        return this.httpClient.get(host + getArtist);
    }

    async getList(deezer: string) {
        return this.httpClient.get(deezer);
    }
}