import { Injectable } from "@angular/core";
import { ubications } from "~/models/ubications.model";
import * as appSettings from "tns-core-modules/application-settings";

@Injectable({
    providedIn: 'root'
})

export class ubicationService {
    
    public static saveActualPosition(ubication: ubications) {
        appSettings.setString('actualUbication',JSON.stringify(ubication));
    }

    public static getActualPosition() {
        let ubication = appSettings.getString('actualUbication');
        return ubication == null ? null : <ubications>JSON.parse(ubication);
    }
}