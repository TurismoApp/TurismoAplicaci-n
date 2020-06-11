import { Component, OnInit, ViewChild } from '@angular/core';
import { ubications } from '~/models/ubications.model';
import { ActivatedRoute } from '@angular/router';
import { PageRoute } from 'nativescript-angular/router';
import { switchMap } from "rxjs/internal/operators";
import { ubicationService } from '~/service/ubication.service';
import { place } from '~/models/place.model';
import { placeService } from '~/service/place.service';

const ALL_UBICATIONS: ubications[] = JSON.parse(`[
	{
		"id": 1,
		"idActivity": 9,
		"latitude": 10.454565,
		"longitude": -73.247078
	},
	{
		"id": 2,
		"idActivity": 6,
		"latitude": 10.437972,
		"longitude": -73.276145
	},
	{
		"id": 3,
		"idActivity": 20,
		"latitude": 10.441752,
		"longitude": -73.259246
	},
	{
		"id": 4,
		"idActivity": 24,
		"latitude": 10.477375,
		"longitude": -73.266961
	},
	{
		"id": 5,
		"idActivity": 8,
		"latitude": 10.454049,
		"longitude": -73.254385
	},
	{
		"id": 6,
		"idActivity": 1,
		"latitude": 10.445257,
		"longitude": -73.244731
	},
	{
		"id": 7,
		"idActivity": 14,
		"latitude": 10.504660,
		"longitude": -73.240601
	},
	{
		"id": 8,
		"idActivity": 4,
		"latitude": 10.473584,
		"longitude": -73.249042
	},
	{
		"id": 9,
		"idActivity": 12,
		"latitude": 10.478364,
		"longitude": -73.229131
	},
	{
		"id": 10,
		"idActivity": 2,
		"latitude": 10.464885,
		"longitude": -73.245902
	},
	{
		"id": 11,
		"idActivity": 22,
		"latitude": 10.477320,
		"longitude": -73.284135
	},
	{
		"id": 12,
		"idActivity": 8,
		"latitude": 10.494974,
		"longitude": -73.268163
	},
	{
		"id": 13,
		"idActivity": 22,
		"latitude": 10.487183,
		"longitude": -73.239629
	},
	{
		"id": 14,
		"idActivity": 3,
		"latitude": 10.501280,
		"longitude": -73.275431
	},
	{
		"id": 15,
		"idActivity": 27,
		"latitude": 10.490526,
		"longitude": -73.263253
	},
	{
		"id": 16,
		"idActivity": 1,
		"latitude": 10.451326,
		"longitude": -73.266295
	},
	{
		"id": 17,
		"idActivity": 20,
		"latitude": 10.450729,
		"longitude": -73.279489
	},
	{
		"id": 18,
		"idActivity": 24,
		"latitude": 10.491984,
		"longitude": -73.275380
	},
	{
		"id": 19,
		"idActivity": 11,
		"latitude": 10.482126,
		"longitude": -73.254364
	},
	{
		"id": 20,
		"idActivity": 8,
		"latitude": 10.501855,
		"longitude": -73.263523
	},
	{
		"id": 21,
		"idActivity": 6,
		"latitude": 10.442784,
		"longitude": -73.276847
	},
	{
		"id": 22,
		"idActivity": 27,
		"latitude": 10.515890,
		"longitude": -73.223650
	},
	{
		"id": 23,
		"idActivity": 19,
		"latitude": 10.515907,
		"longitude": -73.259057
	},
	{
		"id": 24,
		"idActivity": 8,
		"latitude": 10.468803,
		"longitude": -73.272996
	},
	{
		"id": 25,
		"idActivity": 19,
		"latitude": 10.429712,
		"longitude": -73.230930
	},
	{
		"id": 26,
		"idActivity": 15,
		"latitude": 10.511389,
		"longitude": -73.230805
	},
	{
		"id": 27,
		"idActivity": 18,
		"latitude": 10.510434,
		"longitude": -73.260046
	},
	{
		"id": 28,
		"idActivity": 13,
		"latitude": 10.459927,
		"longitude": -73.245097
	},
	{
		"id": 29,
		"idActivity": 13,
		"latitude": 10.448933,
		"longitude": -73.248028
	},
	{
		"id": 30,
		"idActivity": 13,
		"latitude": 10.463190,
		"longitude": -73.278934
	},
	{
		"id": 31,
		"idActivity": 17,
		"latitude": 10.468494,
		"longitude": -73.244454
	},
	{
		"id": 32,
		"idActivity": 3,
		"latitude": 10.486300,
		"longitude": -73.222673
	},
	{
		"id": 33,
		"idActivity": 13,
		"latitude": 10.495330,
		"longitude": -73.279890
	},
	{
		"id": 34,
		"idActivity": 24,
		"latitude": 10.430365,
		"longitude": -73.272485
	},
	{
		"id": 35,
		"idActivity": 15,
		"latitude": 10.486118,
		"longitude": -73.274917
	},
	{
		"id": 36,
		"idActivity": 23,
		"latitude": 10.468198,
		"longitude": -73.235621
	},
	{
		"id": 37,
		"idActivity": 10,
		"latitude": 10.434542,
		"longitude": -73.267273
	},
	{
		"id": 38,
		"idActivity": 14,
		"latitude": 10.467173,
		"longitude": -73.220358
	},
	{
		"id": 39,
		"idActivity": 16,
		"latitude": 10.466997,
		"longitude": -73.241219
	},
	{
		"id": 40,
		"idActivity": 11,
		"latitude": 10.516426,
		"longitude": -73.273618
	},
	{
		"id": 41,
		"idActivity": 25,
		"latitude": 10.515439,
		"longitude": -73.267466
	},
	{
		"id": 42,
		"idActivity": 11,
		"latitude": 10.472891,
		"longitude": -73.283175
	},
	{
		"id": 43,
		"idActivity": 20,
		"latitude": 10.460111,
		"longitude": -73.256323
	},
	{
		"id": 44,
		"idActivity": 3,
		"latitude": 10.476783,
		"longitude": -73.267924
	},
	{
		"id": 45,
		"idActivity": 25,
		"latitude": 10.451747,
		"longitude": -73.220909
	},
	{
		"id": 46,
		"idActivity": 11,
		"latitude": 10.431876,
		"longitude": -73.224906
	},
	{
		"id": 47,
		"idActivity": 14,
		"latitude": 10.516305,
		"longitude": -73.236587
	},
	{
		"id": 48,
		"idActivity": 20,
		"latitude": 10.500220,
		"longitude": -73.273873
	},
	{
		"id": 49,
		"idActivity": 9,
		"latitude": 10.502953,
		"longitude": -73.239029
	},
	{
		"id": 50,
		"idActivity": 19,
		"latitude": 10.461827,
		"longitude": -73.245130
	},
	{
		"id": 51,
		"idActivity": 2,
		"latitude": 10.497320,
		"longitude": -73.276884
	},
	{
		"id": 52,
		"idActivity": 27,
		"latitude": 10.464252,
		"longitude": -73.291778
	},
	{
		"id": 53,
		"idActivity": 5,
		"latitude": 10.503319,
		"longitude": -73.267893
	},
	{
		"id": 54,
		"idActivity": 4,
		"latitude": 10.489717,
		"longitude": -73.277423
	},
	{
		"id": 55,
		"idActivity": 12,
		"latitude": 10.432312,
		"longitude": -73.268180
	},
	{
		"id": 56,
		"idActivity": 24,
		"latitude": 10.438384,
		"longitude": -73.289502
	},
	{
		"id": 57,
		"idActivity": 13,
		"latitude": 10.501852,
		"longitude": -73.250038
	},
	{
		"id": 58,
		"idActivity": 7,
		"latitude": 10.508927,
		"longitude": -73.272214
	},
	{
		"id": 59,
		"idActivity": 19,
		"latitude": 10.450910,
		"longitude": -73.283176
	},
	{
		"id": 60,
		"idActivity": 11,
		"latitude": 10.482564,
		"longitude": -73.282422
	},
	{
		"id": 61,
		"idActivity": 19,
		"latitude": 10.502788,
		"longitude": -73.253656
	},
	{
		"id": 62,
		"idActivity": 27,
		"latitude": 10.494501,
		"longitude": -73.270973
	},
	{
		"id": 63,
		"idActivity": 20,
		"latitude": 10.494038,
		"longitude": -73.261843
	},
	{
		"id": 64,
		"idActivity": 2,
		"latitude": 10.471990,
		"longitude": -73.291216
	},
	{
		"id": 65,
		"idActivity": 12,
		"latitude": 10.434491,
		"longitude": -73.256955
	},
	{
		"id": 66,
		"idActivity": 5,
		"latitude": 10.502389,
		"longitude": -73.290472
	},
	{
		"id": 67,
		"idActivity": 4,
		"latitude": 10.495410,
		"longitude": -73.250734
	},
	{
		"id": 68,
		"idActivity": 24,
		"latitude": 10.508525,
		"longitude": -73.233000
	},
	{
		"id": 69,
		"idActivity": 5,
		"latitude": 10.475805,
		"longitude": -73.287837
	},
	{
		"id": 70,
		"idActivity": 26,
		"latitude": 10.470172,
		"longitude": -73.224305
	},
	{
		"id": 71,
		"idActivity": 2,
		"latitude": 10.448780,
		"longitude": -73.243561
	},
	{
		"id": 72,
		"idActivity": 1,
		"latitude": 10.489265,
		"longitude": -73.223797
	},
	{
		"id": 73,
		"idActivity": 11,
		"latitude": 10.481937,
		"longitude": -73.261798
	},
	{
		"id": 74,
		"idActivity": 2,
		"latitude": 10.479230,
		"longitude": -73.239222
	},
	{
		"id": 75,
		"idActivity": 22,
		"latitude": 10.478705,
		"longitude": -73.223582
	},
	{
		"id": 76,
		"idActivity": 16,
		"latitude": 10.449628,
		"longitude": -73.243729
	},
	{
		"id": 77,
		"idActivity": 2,
		"latitude": 10.508042,
		"longitude": -73.281654
	},
	{
		"id": 78,
		"idActivity": 24,
		"latitude": 10.436972,
		"longitude": -73.242221
	},
	{
		"id": 79,
		"idActivity": 9,
		"latitude": 10.463578,
		"longitude": -73.277138
	},
	{
		"id": 80,
		"idActivity": 18,
		"latitude": 10.483542,
		"longitude": -73.225379
	},
	{
		"id": 81,
		"idActivity": 23,
		"latitude": 10.512002,
		"longitude": -73.287584
	},
	{
		"id": 82,
		"idActivity": 7,
		"latitude": 10.443866,
		"longitude": -73.241059
	},
	{
		"id": 83,
		"idActivity": 8,
		"latitude": 10.484448,
		"longitude": -73.247750
	},
	{
		"id": 84,
		"idActivity": 21,
		"latitude": 10.508766,
		"longitude": -73.287090
	},
	{
		"id": 85,
		"idActivity": 17,
		"latitude": 10.434541,
		"longitude": -73.263904
	},
	{
		"id": 86,
		"idActivity": 20,
		"latitude": 10.515006,
		"longitude": -73.288298
	},
	{
		"id": 87,
		"idActivity": 17,
		"latitude": 10.480357,
		"longitude": -73.266224
	},
	{
		"id": 88,
		"idActivity": 4,
		"latitude": 10.452485,
		"longitude": -73.278676
	},
	{
		"id": 89,
		"idActivity": 20,
		"latitude": 10.500801,
		"longitude": -73.271757
	},
	{
		"id": 90,
		"idActivity": 24,
		"latitude": 10.432333,
		"longitude": -73.285386
	},
	{
		"id": 91,
		"idActivity": 19,
		"latitude": 10.514659,
		"longitude": -73.267504
	},
	{
		"id": 92,
		"idActivity": 24,
		"latitude": 10.441246,
		"longitude": -73.246366
	},
	{
		"id": 93,
		"idActivity": 26,
		"latitude": 10.504634,
		"longitude": -73.274838
	},
	{
		"id": 94,
		"idActivity": 1,
		"latitude": 10.485486,
		"longitude": -73.242146
	},
	{
		"id": 95,
		"idActivity": 18,
		"latitude": 10.477216,
		"longitude": -73.290213
	},
	{
		"id": 96,
		"idActivity": 3,
		"latitude": 10.455712,
		"longitude": -73.263031
	},
	{
		"id": 97,
		"idActivity": 18,
		"latitude": 10.476920,
		"longitude": -73.265523
	},
	{
		"id": 98,
		"idActivity": 25,
		"latitude": 10.473068,
		"longitude": -73.225114
	},
	{
		"id": 99,
		"idActivity": 23,
		"latitude": 10.507638,
		"longitude": -73.250882
	},
	{
		"id": 100,
		"idActivity": 15,
		"latitude": 10.489648,
		"longitude": -73.283348
	}
]`);

@Component({
	selector: 'ns-map-component',
	templateUrl: './Map.component.html',
	styleUrls: ['./Map.component.css']
})

export class MapComponent implements OnInit {

	@ViewChild('mapbox', { static: true }) mapBox: any;
	public sourcePoints: ubications[] = [];
	public placePoints: place[] = [];
	markersData: any[] = [];
	idStablish: number = 0;
	public savePosition: boolean = false;
	constructor(
		private pageRouter: ActivatedRoute,
		private pageLink: PageRoute,
		private placeservice: placeService
	) {
		this.pageLink.activatedRoute.pipe(switchMap(activatedRoute => activatedRoute.params)).
			forEach((params) => {
				this.idStablish = params["id"];
				this.savePosition = params["savePosition"];
			});
		this.pageRouter.queryParams.subscribe((params: ubications[]) => {
			params ?
				this.sourcePoints = params : null;
		});


	}

	ngOnInit() {
		ALL_UBICATIONS.forEach(item => {
			this.markersData.push(this.mapMarkersUbications(item));
		});
	}

	onMapReady(args: any) {
		// you can tap into the native MapView objects (MGLMapView for iOS and com.mapbox.mapboxsdk.maps.MapView for Android)
		this.mapBox = args.map;
		var nativeMapView = args.ios ? args.ios : args.android;
		//console.log("Mapbox onMapReady for " + (args.ios ? "iOS" : "Android") + ", native object received: " + nativeMapView);
		// .. or use the convenience methods exposed on args.map, for instance:
		if (this.idStablish > 0) {
			this.markersData = [];
			this.placeservice.getPlace(this.idStablish).subscribe(data => {
				data.forEach(element => {
					this.markersData.push(this.mapMarkersPlaces(element.ubications, element.name, element.direction))
				});
				args.map.addMarkers(this.markersData);
			});
		} else {
			this.savePosition ?
				args.map.showUserLocation = true :
				args.map.addMarkers(this.markersData);
		}
	}
	setViewToCity() {
		this.mapBox.setViewport({
			bounds: {
				north: 10.522902,
				east: -73.299268,
				south: 10.420950,
				west: -73.207309
			},
			animated: true
		});
	}

	saveYourPosition() {
		this.mapBox.getUserLocation().then(
			function (userLocation: any) {
				ubicationService.saveActualPosition({
					idActivity: null,
					latitude: userLocation.location.lat,
					longitude: userLocation.location.lng
				});
			}
		);
	}

	seeHogar() {
		if (ubicationService.getActualPosition() != null) {
			this.mapBox.removeMarkers();
			this.mapBox.addMarkers([{
				lat: ubicationService.getActualPosition().latitude,
				lng: ubicationService.getActualPosition().longitude,
				title: "Hogar",
				subtitle: "este es tu lugar de residencia actual, para cambiarlo presiona guardar",
				icon: 'res://mapmarker',
				selected: true, // es the callout show immediately when the marker is added (note: only 1 marker can be selected at a time)
				onCalloutTap: function () { console.log("'Nice location' marker callout tapped"); }
			}]);
			this.mapBox.animateCamera({
				// this is where we animate to
				target: {
					lat: ubicationService.getActualPosition().latitude,
					lng: ubicationService.getActualPosition().longitude
				},
				zoomLevel: 18, // Android
				altitude: 0, // iOS (meters from the ground)
				bearing: 0, // Where the camera is pointing, 0-360 (degrees)
				tilt: 10,
				duration: 5000 // default 10000 (milliseconds)
			});

		} else alert("No tienes tu hogar marcado");
	}
	mapMarkersUbications(ubication: ubications) {
		return {
			lat: ubication.latitude,
			lng: ubication.longitude,
			title: ubication.idActivity.toString(),
			subtitle: ubication.id.toString(),
			icon: 'res://mapmarker',
			selected: true, // es the callout show immediately when the marker is added (note: only 1 marker can be selected at a time)
			onCalloutTap: function () { console.log("'Nice location' marker callout tapped"); }
		}
	}
	
	mapMarkersPlaces(ubication: ubications, title: string, subtitle: string) {
		return {
			lat: ubication.latitude,
			lng: ubication.longitude,
			title: title,
			subtitle: subtitle,
			icon: 'res://mapmarker',
			selected: true, // es the callout show immediately when the marker is added (note: only 1 marker can be selected at a time)
			onCalloutTap: function () { console.log("'Nice location' marker callout tapped"); }
		}
	}
}