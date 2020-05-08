import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DetailsActivityComponent } from './details-activity/details-activity.component';
import { PagerModule } from 'nativescript-pager/angular';

import { imagesModalComponent } from "./modal-images/details-modal.component"
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        PagerModule,
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DetailsActivityComponent,
        imagesModalComponent
    ],
    entryComponents: [imagesModalComponent],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
