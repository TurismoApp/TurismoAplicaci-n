import { Injectable, EventEmitter } from '@angular/core';
import { Activity } from '~/models/activity.model';
import * as appSettings from "tns-core-modules/application-settings";

@Injectable({
    providedIn: "root"
})
export class DetailService {
    ActivityDelete = new EventEmitter<Activity[]>();
    
    construcor() {

    }

    public static SaveActivity(activity: Activity[]) {
        appSettings.setString("activity", JSON.stringify(activity));
    }

    public static GetListActivity() {
        const Existactivity = appSettings.getString("activity");
        return Existactivity == null ? [] : JSON.parse(Existactivity);
    }

    public static ValidateStateActivity(activity: Activity, ListActivity: Activity[]) {
        let Existactivity = ListActivity.find(item => item.id === activity.id);
        return !Existactivity ? false : true;

    }

    public static DeleteActivity(activity: Activity, ListActivity: Activity[]) {
        ListActivity = ListActivity.filter(item => item.id !== activity.id);
        this.SaveActivity(ListActivity);
    }

    public static DeteleData(activity: Activity) {
        const activ = this.GetListActivity();
        this.ValidateStateActivity(activity, activ) ? this.DeleteActivity(activity, activ) : console.log(false);
    }
}