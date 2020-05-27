import { Component, OnInit } from '@angular/core';
import { Activity } from '~/models/activity.model';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { Observable } from 'tns-core-modules/ui/page/page';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { listActivityService } from '~/service/list-activity.service';


@Component({
	selector: 'ns-list-activities',
	templateUrl: './list-activities.component.html',
	styleUrls: ['./list-activities.component.css']
})

export class ListActivitiesComponent extends Observable implements OnInit {


	private _sourceDataItems = new ObservableArray<Activity>();
	constructor(
		private pageRouter: ActivatedRoute,
		private listService: listActivityService,
		private router:Router,
	) {
		super();
		this.pageRouter.queryParams.subscribe((params: Activity[]) => {
			this.dataItems = new ObservableArray<Activity>();
			params ? 
			 this.dataItems.push(params) : null;
		});
	}
 
	async ngOnInit() {
		await this.listService.getDataSource();
		this.dataItems = new ObservableArray<Activity>();
		this.dataItems.push(await this.listService.getListActivities());
	}

	get dataItems(): ObservableArray<Activity> {
		return this.get("_dataItems");
	}

	set dataItems(value: ObservableArray<Activity>) {
		this.set("_dataItems", value);
	}

	onDetailActivity(item: Activity) {
        let navigationExtras: NavigationExtras = {
            queryParams: item
        };
        this.router.navigate(["detailsActivity"], navigationExtras);
    }

    stateActivity(item: Activity) {
        return item.state + '-state';
    }

	private saveDataInLocalStorage(message: MessageEvent) {
		console.log(message);
	}
}
