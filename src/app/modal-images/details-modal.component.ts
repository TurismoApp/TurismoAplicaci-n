import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';
import { Activity } from '~/models/activity.model';

@Component({
    selector: 'images-modal',
    template: `
<StackLayout>
    <AbsoluteLayout width="100%" height="100" class="actionBarSupler">
    <GridLayout rows="auto" columns="auto, *" top="40" width="100%">
        <button row="0" col="0" text="&#xf00d;" class="fa botonExit"  (tap)="close()"></button>
        <Label row="0" col="1" text="Imagenes" class="R-thin titleBar"></Label>
    </GridLayout>
    </AbsoluteLayout>
    <Pager loaded="onPageLoaded" width="auto" height="auto" [items]="images" selectedIndex="0">
        <ng-template let-i="index" let-item="item">
            <Image [src]="item" width="100%" height="100%" stretch="aspectFit" loadMode="async"></Image>
        </ng-template>
    </Pager>
</StackLayout>
        `,
    styleUrls: ['./details-modal.component.css']

})
export class imagesModalComponent implements OnInit {

    images: string[];
    constructor(private _ModalParam: ModalDialogParams) { }

    ngOnInit(): void {
        this.images = JSON.parse(this._ModalParam.context.data);
    }

    close() {
        this._ModalParam.closeCallback();
    }
}
