import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { playListComponent } from "./playlist.component";
import { PlayListRoutingModule } from "./playlist.routing";
import { MusicBarComponent } from "./music-bar/music-bar.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { MusicReproductorComponent } from "./music-reproductor/music-reproductor.component";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { NativeScriptLocalizeModule } from "nativescript-localize/angular";

@NgModule({
    bootstrap: [
        playListComponent
    ],
    declarations: [
        playListComponent,
        MusicBarComponent,
        MusicReproductorComponent,
    ],
    imports: [
        PlayListRoutingModule,
        NativeScriptCommonModule,
        NativeScriptUISideDrawerModule,
        NativeScriptLocalizeModule
    ],
    providers: [],
    entryComponents: [MusicReproductorComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class playListModule {}