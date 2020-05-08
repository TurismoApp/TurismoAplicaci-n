import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { ListActivitiesComponent } from "./list-activities/list-activities.component";
import { DetailsActivityComponent } from "./details-activity/details-activity.component";


const routes: Routes = [
    { path: "", redirectTo: "listActivity", pathMatch: "full" },
    { path: "detailActivity/:details", component: DetailsActivityComponent },
    { path: "listActivity", component: ListActivitiesComponent },
    { path: "listActivity/:schedules", component: ListActivitiesComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
