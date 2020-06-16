import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Activity } from '~/models/activity.model';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';
import { imagesModalComponent } from '../modal-images/details-modal.component';
import { ActivatedRoute, Router } from '@angular/router';
import { getString, setString } from 'tns-core-modules/application-settings';
import { DetailService } from '~/service/details-activity.service';
import { images } from '~/models/images.model';
import { listActivityService } from '~/service/list-activity.service';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { RouterExtensions } from 'nativescript-angular/router';

import { NotificationService } from '~/service/notification.service';
import { LocalNotifications } from "nativescript-local-notifications";


@Component({
  selector: 'ns-details-activity',
  providers: [imagesModalComponent],
  templateUrl: './details-activity.component.html',
  styleUrls: ['./details-activity.component.css']
})
export class DetailsActivityComponent implements OnInit {
  activity: Activity;
  imagenes: string[] = [];
  listActivitySave: Activity[] = [];
  id: number;
  constructor(private _ModalService: ModalDialogService,
    private _viewcontainer: ViewContainerRef,
    private pageRoute: ActivatedRoute, private routerExtensions: RouterExtensions,
    private navigation: Router,
    private listService: listActivityService) {
  }

  async ngOnInit() {
    this.listActivitySave = DetailService.GetListActivity();
    this.pageRoute.queryParams.subscribe(async (params: Activity) => {
      this.activity = new Activity();
      this.activity = params;
      (await this.listService.getImages(params.id)).subscribe(images => {
        this.imagenes = [];
        images.forEach(item => {
          this.imagenes.push(item.link);
        });
      });
    });

  }

  async SaveDetailActivity(activity: Activity) {
    for (let index = 0; index < this.imagenes.length; index++) {
      activity.images[index] = { idActivity: activity.id, link: this.imagenes[index] };
    }
    if (this.listActivitySave.length > 0) {
      let isactivity = this.listActivitySave.find(item => item.id === this.activity.id);
      !isactivity ? this.listActivitySave.push(activity) : null;
    } else {
      this.listActivitySave.push(activity);
    }
    DetailService.SaveActivity(this.listActivitySave);
    await NotificationService.GenerateShedules();
  }

  validateState(activity: Activity) {
    return DetailService.ValidateStateActivity(activity, this.listActivitySave);
  }

  async DeleteState(activity: Activity) {
    DetailService.DeleteActivity(activity, this.listActivitySave);
    await NotificationService.GenerateShedules();
  }

  ActivityState(activity: Activity) {
    this.validateState(activity) ? this.DeleteState(activity) : this.SaveDetailActivity(activity);
    this.listActivitySave = DetailService.GetListActivity();
  }

  seeUbications(activity: Activity) {
    this.navigation.navigateByUrl("mapComponent/ubicationActivity/" + activity.id);
  }

  seeChronograms(activity: Activity) {
    this.navigation.navigateByUrl("/listActivity/Chronograms/" + activity.id);  
  }

  ShowModal() {
    const options: ModalDialogOptions = {
      viewContainerRef: this._viewcontainer,
      fullscreen: true,
      context: {
        data: this.imagenes
      }
    };
    this._ModalService.showModal(imagesModalComponent, options);
  }

  goBack() {
    this.routerExtensions.backToPreviousPage();
  }
}
