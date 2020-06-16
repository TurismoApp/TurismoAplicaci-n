import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { place } from '~/models/place.model';
import { host } from '~/database/host.database';

const getRute = '/places/';
@Injectable({
    providedIn: 'root'
})
export class placeService {
    place: any;
    constructor(private httpClient: HttpClient) { }

    getPlace(id: number) {
        return this.httpClient.get<place[]>(host + getRute + id);
    }

}