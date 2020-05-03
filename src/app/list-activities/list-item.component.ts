import { Component, Input } from "@angular/core";

@Component({
    selector: 'ns-list-item',
    template: `
        <GridLayout androidElevation="5" rows="*,auto" columns="*" class="activityCard">
            <Image row="0" col="0" src="{{ imageUrl }}" width="100%"
                height="100%" stretch="aspectFill" class="imageActivity"></Image>
            <GridLayout row="1" col="0" rows="*,*" columns="*, auto" class="descriptionGrid">
                <Label [(ngModel)]="title" row="0" col="0" class="title R-light" textWrap="true"></Label>
                <Label text="{{ dateStart }} - {{ dateEnd }}" row="1" col="0" class="dates R-thin" textWrap="true"></Label>
                <label text="&#xf073;" row="0" rowSpan="2" col="1" class="fa calendarIcon"></label>
            </GridLayout>
        </GridLayout>
    `,
    styleUrls: ['./list-activities.component.css'],
})

export class listItem {
    @Input() id: number;
    @Input() title: string;
    @Input() dateStart: Date;
    @Input() dateEnd: Date;
    @Input() imageUrl: string;

    constructor() {}

}