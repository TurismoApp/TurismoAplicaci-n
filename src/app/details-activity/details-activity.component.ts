import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Activity } from '~/models/activity.model';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';

import { ModalComponent } from '../../Modal/details-modal.component';

@Component({
  selector: 'ns-details-activity',
  providers: [ModalComponent],
  templateUrl: './details-activity.component.html',
  styleUrls: ['./details-activity.component.css']
})
export class DetailsActivityComponent implements OnInit {

  constructor(private _ModalService: ModalDialogService, private _viewcontainer: ViewContainerRef) { }

  activity: Activity = JSON.parse(`{
    "id": 14,
    "title": "festival",
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita placeat dolore totam, quos, quisquam sapiente ducimus velit sed exercitationem, quam dolores modi unde! Alias odit omnis rem voluptatibus repellendus nam placeat voluptates, dolorum, suscipit magni ad consequuntur enim vero unde! Asperiores suscipit eius alias dolores quos quisquam culpa enim provident quas velit, deleniti nam cum sed assumenda aliquam? Qui exercitationem odit deleniti numquam, temporibus dolorum aspernatur quo, iure voluptas repellat rem tenetur quasi fugiat quaerat iste laborum architecto corporis harum debitis itaque sed vitae perferendis. Laborum eum explicabo nulla labore architecto et tenetur magni minus sint ipsum, nemo rerum accusamus veritatis quod? Consectetur ex maiores quod error obcaecati fugit aspernatur eum sapiente sint! Culpa, debitis temporibus. Deserunt placeat nesciunt et, minima perferendis atque totam ipsa, ex harum pariatur consequatur cum optio enim culpa! Possimus quia ipsam commodi modi nobis perferendis cupiditate quam magni, eum tempore. Ipsum modi consequatur porro provident voluptatum tempora, placeat suscipit laboriosam omnis! Suscipit nam repellendus, ab ipsa assumenda in qui doloribus nihil. Qui quos laboriosam tempora aliquid minima, rerum saepe vel tenetur excepturi cum doloremque. Explicabo adipisci blanditiis, quis impedit voluptatibus accusantium cum dolore magnam voluptatum excepturi voluptate odio aliquid illo totam eaque facilis eius numquam quae nisi eveniet, consequuntur harum quia. Accusantium voluptates aliquid voluptas itaque quo ipsam distinctio impedit explicabo adipisci architecto. Laborum unde itaque sapiente a delectus culpa atque quia sint eos iusto odio et cum ea consectetur quaerat alias ut quibusdam rem voluptate repellat porro, ullam, natus similique! Assumenda error quibusdam quo ipsa consectetur aspernatur porro itaque rerum a ex natus fuga quas voluptate laboriosam laudantium sapiente hic iusto explicabo soluta saepe adipisci, accusantium fugiat nemo impedit! Modi a dolore eligendi ipsa rerum distinctio odio ea error, eum qui laborum sed nostrum nihil, nemo in beatae dolorum, temporibus incidunt omnis perferendis tenetur?",
    "images": [
        "https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
        "https://www.blogvallenato.com/wp-content/uploads/2019/11/afiche-festival-vallenato-2020-homenaje-a-jorge-o%C3%B1ate-y-rosendo-romero-478x600.jpg",
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



  ngOnInit(): void {
  }

  ShowModal() {
    const options: ModalDialogOptions = {
      viewContainerRef: this._viewcontainer,
      fullscreen: true,
      context: {}
    };
    this._ModalService.showModal(ModalComponent, options);
  }
}
