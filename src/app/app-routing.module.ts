import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { ListActivitiesComponent } from "./list-activities/list-activities.component";
import { DetailsActivityComponent } from "./details-activity/details-activity.component";
import { DiaryActivityComponent } from "./diary-activity/diary-activity.component";

//deatyactivity
const routes: Routes = [
    { path: "", redirectTo: "listActivity", pathMatch: "full" },
    { path: "listActivity", component: ListActivitiesComponent },
    { path: "detailsActivity", component: DetailsActivityComponent },
    { path: "diaryactivity", component: DiaryActivityComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
