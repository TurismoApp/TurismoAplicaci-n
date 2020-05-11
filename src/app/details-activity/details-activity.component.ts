import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Activity } from '~/models/activity.model';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';
import { imagesModalComponent } from '../modal-images/details-modal.component';
import { ActivatedRoute, Router } from '@angular/router';
import { getString, setString } from 'tns-core-modules/application-settings';
import { DetailService } from '~/service/details-activity.service';

@Component({
  selector: 'ns-details-activity',
  providers: [imagesModalComponent],
  templateUrl: './details-activity.component.html',
  styleUrls: ['./details-activity.component.css']
})
export class DetailsActivityComponent implements OnInit {
  activity: Activity;
  listActivitySave: Activity[] = [];
  constructor(private _ModalService: ModalDialogService,
    private _viewcontainer: ViewContainerRef,
    private pageRoute: ActivatedRoute,
    private navigation: Router) {
  }

  ngOnInit(): void {
    this.activity = new Activity();
    this.listActivitySave = DetailService.GetListActivity();
    this.pageRoute.queryParams.subscribe((params: Activity) => {
      this.activity = params
    });
  }

  SaveDetailActivity(activity: Activity) {
    if (this.listActivitySave.length > 0) {
      let isactivity = this.listActivitySave.find(item => item.id === this.activity.id);
      !isactivity ? this.listActivitySave.push(activity) : null;
    } else {
      this.listActivitySave.push(activity);
    }

    DetailService.SaveActivity(this.listActivitySave);
  }

  validateState(activity: Activity) {
    return DetailService.ValidateStateActivity(activity, this.listActivitySave);
  }

  DeleteState(activity: Activity) {
    DetailService.DeleteActivity(activity, this.listActivitySave);
  }

  ActivityState(activity: Activity) {
    this.validateState(activity) ? this.DeleteState(activity) : this.SaveDetailActivity(activity);
    this.listActivitySave = DetailService.GetListActivity();
  }

  seeUbications(activity: Activity) {
    this.navigation.navigateByUrl("/mapComponent");
  }

  ShowModal() {
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
