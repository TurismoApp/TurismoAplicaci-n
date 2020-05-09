import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Activity } from '~/models/activity.model';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';

import { imagesModalComponent } from '../modal-images/details-modal.component';
import { switchMap } from 'rxjs/internal/operators';
import { PageRoute } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ns-details-activity',
  providers: [imagesModalComponent],
  templateUrl: './details-activity.component.html',
  styleUrls: ['./details-activity.component.css']
})
export class DetailsActivityComponent implements OnInit {
  
  activity: Activity;
  constructor(private _ModalService: ModalDialogService,
    private _viewcontainer: ViewContainerRef,
    private pageRoute: ActivatedRoute) {
      
  }

  ngOnInit(): void {
    this.activity = new Activity();
    this.pageRoute.queryParams.subscribe((params: Activity) => {
      this.activity = params
    });
  }

  ShowModal() {
    console.log(JSON.stringify(this.activity.images));
    const options: ModalDialogOptions = {
      viewContainerRef: this._viewcontainer,
      fullscreen: true,
      context: {
        data: JSON.stringify(this.activity.images)
      }
    };
    this._ModalService.showModal(imagesModalComponent, options);
  }
}
