import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { DetailsActivityComponent } from './details-activity/details-activity.component'
import { ListActivitiesComponent } from "./list-activities/list-activities.component";


const routes: Routes = [
    { path: "", redirectTo: "listActivity", pathMatch: "full"},
    { path: "listActivity", component: ListActivitiesComponent}  
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
