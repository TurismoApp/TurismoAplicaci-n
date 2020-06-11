import { Component, OnInit, Input } from '@angular/core';
import { RadListView, LoadOnDemandListViewEventData } from 'nativescript-ui-listview';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { Observable } from 'tns-core-modules/ui/page/page';
import { DetailService } from '../../service/details-activity.service';
import { Activity } from '~/models/activity.model';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'ns-diaryactivity',
  templateUrl: './diary-activity.component.html',
  styleUrls: ['./diary-activity.component.css']
})
export class DiaryActivityComponent extends Observable implements OnInit {

  private _sourceDataItems = new ObservableArray<Activity>();

  @Input() activity: Activity;


  constructor(
    private detailservice: DetailService,
    private router: Router
  ) {
    super();
    this.dataItems = new ObservableArray<Activity>();
    this._sourceDataItems = DetailService.GetListActivity();
    this.detailservice.ActivityDelete.subscribe(Response => {
      this.dataItems = DetailService.GetListActivity();
      this._sourceDataItems = DetailService.GetListActivity(); 
    });
   
    this.addMoreItemsFromSource(this._sourceDataItems.length, null);
  }

  ngOnInit(): void {

  }

  get dataItems(): ObservableArray<Activity> {
    return this.get("_dataItems");
  }

  set dataItems(value: ObservableArray<Activity>) {
    this.set("_dataItems", value);
  }

  public addMoreItemsFromSource(chunkSize: number, listView: RadListView) {

    let newItems = this._sourceDataItems.splice(0, chunkSize);
    this.dataItems.push(newItems);

    if (listView) {
      // Call the optimized function for on-demand loading finished.
      // (with 0 because the ObservableArray has already
      // notified about the inserted items)
      listView.notifyAppendItemsOnDemandFinished(0, this._sourceDataItems.length === 0);
    }
  }

  public onLoadMoreItemsRequested(args: LoadOnDemandListViewEventData) {
    const that = new WeakRef(this);
    const listView: RadListView = args.object;
    if (this._sourceDataItems.length > 0) {
      setTimeout(function () {
        that.get().addMoreItemsFromSource(5, listView);
      }, 0);
      args.returnValue = true;
    } else {
      args.returnValue = false;
      listView.notifyAppendItemsOnDemandFinished(0, true);
    }
  }




}
