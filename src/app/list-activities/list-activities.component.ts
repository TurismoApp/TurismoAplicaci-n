import { Component, OnInit } from '@angular/core';
import { Activity } from '~/models/activity.model';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { Observable } from 'tns-core-modules/ui/page/page';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { listActivityService } from '~/service/list-activity.service';
import { NotificationService } from '~/service/notification.service';
import { LocalNotifications } from "nativescript-local-notifications";
import { switchMap } from 'rxjs/internal/operators';
import { PageRoute } from 'nativescript-angular/router';
import { shcedules } from '~/models/schedules.model';
import { device } from "@nativescript/core/platform";

@Component({
	selector: 'ns-list-activities',
	templateUrl: './list-activities.component.html',
	styleUrls: ['./list-activities.component.css']
})

export class ListActivitiesComponent extends Observable implements OnInit {
	listShedules: Activity[] = [];

	private _sourceDataItems = new ObservableArray<Activity>();
	public idActivity: number = null;
	public schedulesActivitys: Activity[] = [];
	constructor(
		private pageRouter: ActivatedRoute,
		private listService: listActivityService,
		private pageLink: PageRoute,
		private router: Router,
	) {
		super();
		this.pageRouter.queryParams.subscribe((params: Activity[]) => {
			this.dataItems = new ObservableArray<Activity>();
			params ?
				this.dataItems.push(params) : null;
		});
		this.pageLink.activatedRoute.pipe(switchMap(activatedRoute => activatedRoute.params)).
			forEach(async (params) => {
				this.idActivity = params["Id"] ? params["Id"] : null;
			});
	}

	async ngOnInit() {
		if (this.idActivity != null) {
			(await this.listService.getChronograms(this.idActivity)).subscribe(async (Response: shcedules[]) => {
				if (Response.length > 0) {
					this.dataChronogram = new ObservableArray<Activity>();
					this.schedulesActivitys = [];
					Response.forEach(item => {
						this.schedulesActivitys.push(item.activityChild);
					});
					this.dataChronogram.push(this.schedulesActivitys);
				} else {
					this.alertMessage('Mensaje','Esta actividad no contiene otras actividades asociadas','OK');
					this.getDataSourceList();
				}
			});
		}
		else {
			this.getDataSourceList();
		}
	}

	get dataItems(): ObservableArray<Activity> {
		return this.get("_dataItems");
	}

	set dataItems(value: ObservableArray<Activity>) {
		this.set("_dataItems", value);
	}

	get dataChronogram(): ObservableArray<Activity> {
		return this.get("_dataChronogram");
	}

	set dataChronogram(value: ObservableArray<Activity>) {
		this.set("_dataChronogram", value);
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

	private async getDataSourceList() {
		await this.listService.getDataSource();
		this.dataItems = new ObservableArray<Activity>();
		this.dataItems.push(await this.listService.getListActivities());
	}

	private alertMessage(title: string, message: string, buttonText: string) {
		let options = {
			title: title,
			message: message,
			okButtonText: buttonText
		};
		alert(options);
	}
}
