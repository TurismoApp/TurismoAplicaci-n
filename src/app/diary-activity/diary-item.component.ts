import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Activity } from '~/models/activity.model';
import { DetailService } from './../../service/details-activity.service';

@Component({
  selector: 'ns-diary-activity',
  template: ` 
    <GridLayout pageTransition="slide" rows="auto " columns="auto, *, auto"  class="activityCard">
    <Image row="0" col="0" src="{{activity.images[0]}}" stretch="aspectFill" horizontalAlignment="left"  class="imageActivity"></Image>              
        <Label text="{{activity.title}}" row="0" col="1" class="title R-regular" textWrap="true"></Label>
        <Label text="{{ activity.dateStart  | date:'mediumDate' }} - {{ activity.dateEnd  | date:'mediumDate' }}" 
        row="0" col="1" verticalAlignment="bottom" class="dates R-light" textWrap="true"></Label>
        <button row="0" col="2" text="&#xf00d;" class="fa botonDelete" androidElevations="0" (tap)="DeleteActivity(activity)"></button>
    </GridLayout>
  `,
  styleUrls: ['./diary-activity.component.css']
})
export class DiaryItem {

  @Input() activity: Activity;
  constructor(private detailservice: DetailService) {

  }

  DeleteActivity(activity: Activity) {
    DetailService.DeteleData(activity);
    this.detailservice.ActivityDelete.emit(DetailService.GetListActivity());
  }


}