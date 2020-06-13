import { Injectable } from '@angular/core';
import { Activity } from '~/models/activity.model';
import { LocalNotifications } from "nativescript-local-notifications";
import * as appSettings from "tns-core-modules/application-settings";

@Injectable({
    providedIn: "root"
})
export class NotificationService {

    constructor() {

    }

    public static async GenerateShedules() {
        try {
            let Shedules: any[] = [];
            await LocalNotifications.cancelAll();
            const ShedulesActivitys = appSettings.getString("activity");
            let activityArray: Activity[] = ShedulesActivitys == null ? [] : <Activity[]>JSON.parse(ShedulesActivitys);

            activityArray.length > 0 ? activityArray.forEach(item => {
                Shedules.push({
                    id: item.id,
                    thumbnail: true,
                    title: item.title,
                    body: item.description,
                    image: item.images[0].link,
                    forceShowWhenInForeground: true,
                    at: new Date(new Date(item.dateStart).getTime() + (10 * 1000)),
                    actions: []
                });
            }) : null;
            await LocalNotifications.schedule(Shedules);
        } catch (error) {
            console.log(error);
        }
    }

    public static getidShedules(id: number) {
        const ShedulesActivitys = appSettings.getString("activity");

        let activityArray: Activity[] = ShedulesActivitys == null ? [] : <Activity[]>JSON.parse(ShedulesActivitys);
        return activityArray.length > 0 ? activityArray.find(item => item.id == id) : null;
    }
}