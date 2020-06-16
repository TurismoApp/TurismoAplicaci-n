import { place } from "./place.model";
import { Activity } from "./activity.model";

export class ubications {
    id?: number;
    idActivity: number;
    latitude: number;
    longitude: number
    inplace?: place;
    activityOwner?: Activity;
}