import { Injectable } from "@angular/core";
import { host } from "~/database/host.database";
import { Activity } from "~/models/activity.model";
import { HttpClient } from "@angular/common/http";
import { images } from "~/models/images.model";

const get = '/activitys';
const getImages = '/images/activity/'
@Injectable({
    providedIn: 'root'
})

export class listActivityService {

    constructor(
        private httpClient: HttpClient
    ) {}

    async getDataSource() {
      return this.httpClient.get(host + get);
    }

    async getImages(id: number) {
        return this.httpClient.get<images[]>(host + getImages + id);
    }
}