import { Component, Input, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Activity } from "~/models/activity.model";
import { Router, NavigationExtras } from "@angular/router";
import { Cache } from "tns-core-modules/ui/image-cache/image-cache";
import { ImageSource, fromNativeSource } from "tns-core-modules/image-source/image-source";

@Component({
    selector: 'ns-list-item',
    template: ` 
    <GridLayout (tap)="onDetailActivity()" pageTransition="slide" rows="*,auto" columns="*" class="activityCard">
    <Image row="0" col="0" src="{{activity.images[0]}}" decodeWidth="100%" decodeHeight="auto" stretch="aspectFit" class="imageActivity"></Image>
            <GridLayout row="1" col="0" rows="*,*" columns="*, auto" class="descriptionGrid"> 
                <Label text="{{activity.title}}" androidElevation="1" row="0" col="0" class="title R-regular" textWrap="true"></Label>
                <Label text="{{ activity.dateStart  | date:'mediumDate' }} - {{ activity.dateEnd  | date:'mediumDate' }}" row="1" col="0" class="dates R-light" textWrap="true"></Label>
                <label text="&#xf073;" row="0" rowSpan="2" col="1" class="fa calendarIcon {{ stateActivity() }}"></label>
            </GridLayout>
        </GridLayout>
    
    `,
    styleUrls: ['./list-activities.component.css'],
})

export class listItem {
    @Input() activity: Activity;
    constructor(
        private readonly router: Router
    ) {}

    onDetailActivity() {
        let navigationExtras: NavigationExtras = {
            queryParams: this.activity
        };
        this.router.navigate(["detailsActivity"], navigationExtras);
    }

    stateActivity() {
        return this.activity.state + '-state';
    }
}