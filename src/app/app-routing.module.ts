import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { ListActivitiesComponent } from "./list-activities/list-activities.component";
import { DetailsActivityComponent } from "./details-activity/details-activity.component";
import { MapComponent } from "./map-component/Map.component";
import { DiaryActivityComponent } from "./diary-activity/diary-activity.component";
import { PlacesInterestComponent } from './places-interest/places-interest.component';

const routes: Routes = [
    { path: "", redirectTo: "listActivity", pathMatch: "full" },
    { path: "listActivity", component: ListActivitiesComponent },
    { path: "detailsActivity", component: DetailsActivityComponent },
    { path: "mapComponent", component: MapComponent },
    { path: "mapComponent/:savePosition", component: MapComponent },
    { path: "diaryActivity", component: DiaryActivityComponent },
    { path: "places", component: PlacesInterestComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
