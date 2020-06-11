import { Injectable } from "@angular/core";
import { host } from "~/database/host.database";
import { Activity } from "~/models/activity.model";
import { HttpClient } from "@angular/common/http";
import { images } from "~/models/images.model";
import * as appSettings from "tns-core-modules/application-settings";

const get = '/activitys';
const getImages = '/images/activity/';
const getChro = '/schedules/Chronogram/';
@Injectable({
    providedIn: 'root'
})

export class listActivityService {

    constructor(
        private httpClient: HttpClient
    ) {}

    async getDataSource() {
      this.httpClient.get(host + get).subscribe((Response: Activity[]) => {
        appSettings.setString('listActivities', JSON.stringify(Response));
      }, error => console.log(error));
    }

    async getImages(id: number) {
        return this.httpClient.get<images[]>(host + getImages + id);
    }

    async getListActivities() {
        const list  = appSettings.getString('listActivities');
        return list != null ? <Activity[]>JSON.parse(list) : [];
    }

    async getChronograms( id: number) {
        return this.httpClient.get(host + getChro + id);
    }
}