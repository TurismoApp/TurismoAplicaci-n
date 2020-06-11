import { Injectable } from "@angular/core";
import { ubications } from "~/models/ubications.model";
import * as appSettings from "tns-core-modules/application-settings";
import { HttpClient } from "@angular/common/http";
import { host } from "~/database/host.database";

const getActivityUbications = '/ubications/activity/';
@Injectable({
    providedIn: 'root'
})

export class ubicationService {
    
    constructor(
        private httpClient: HttpClient
    ) {}
    public static saveActualPosition(ubication: ubications) {
        appSettings.setString('actualUbication',JSON.stringify(ubication));
    }

    public static getActualPosition() {
        let ubication = appSettings.getString('actualUbication');
        return ubication == null ? null : <ubications>JSON.parse(ubication);
    }

    async getUbicationActivity(id: number) {
        return this.httpClient.get(host + getActivityUbications + id);
    }
}