import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { place } from '~/models/place.model';

@Injectable({
    providedIn: 'root'
})
export class placeService {
    place: any;
    constructor(private httpClient: HttpClient) { }

    getPlace(id: number) {
        return this.httpClient.get<place[]>('https://311f1684181c.ngrok.io' + '/places/' + id)
    }

}