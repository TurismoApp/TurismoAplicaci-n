import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { ListActivitiesComponent } from "./list-activities/list-activities.component";
import { DetailsActivityComponent } from "./details-activity/details-activity.component";
import { MapComponent } from "./map-component/Map.component";


const routes: Routes = [
    { path: "", redirectTo: "mapComponent", pathMatch: "full"},
    { path: "listActivity", component: ListActivitiesComponent},
    { path: "detailsActivity", component: DetailsActivityComponent  },
    { path: "mapComponent", component: MapComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
