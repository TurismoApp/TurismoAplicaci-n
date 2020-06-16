import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router'
import { placeService } from '~/service/place.service';
import { typePlace } from '~/types/places.type';
@Component({
  selector: 'ns-places-interest',
  templateUrl: './places-interest.component.html',
  styleUrls: ['./places-interest.component.css']
})
export class PlacesInterestComponent implements OnInit {


  constructor(private pageRoute: ActivatedRoute,
    private navigation: Router
  ) { }

  ngOnInit(): void {
  }

  UbicationsPlace(placetype: typePlace) {
    this.navigation.navigateByUrl("/mapComponent/places/" + placetype);
  }

}
