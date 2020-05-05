import { Component, OnInit } from '@angular/core';
import { Activity } from '~/models/activity.model';
@Component({
  selector: 'ns-details-activity',
  templateUrl: './details-activity.component.html',
  styleUrls: ['./details-activity.component.css']
})
export class DetailsActivityComponent implements OnInit {

  activity: Activity = JSON.parse(`{
    "id": 14,
    "title": "festival",
    "description": "enum lorem ipsum dolor",
    "images": [
        "https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
        "https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
        "https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
        "https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
        "https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
        "https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
        "https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
        "https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
        "https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
        "https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
        "https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg"
    ],
    "dateStart": "2032-11-24 10:50:03",
    "dateEnd": "2089-06-25 15:18:57",
    "state": "F",
    "idUbicación": 2
}`);

  constructor() { }

  ngOnInit(): void {
  }

}
