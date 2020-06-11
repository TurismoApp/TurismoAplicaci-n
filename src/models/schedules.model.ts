import { Activity } from "./activity.model";


export class shcedules {
    id?: number;
    idActivityParent: number;
    idActivityChild: number;
    activityChild = new Activity();
}