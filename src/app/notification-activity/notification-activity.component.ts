import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from "nativescript-local-notifications";
import { Router } from '@angular/router';

@Component({
  selector: 'ns-notification-activity',
  templateUrl: './notification-activity.component.html',
  styleUrls: ['./notification-activity.component.css']
})
export class NotificationActivityComponent implements OnInit {

  constructor(private router: Router) {
    LocalNotifications.addOnMessageReceivedCallback(notificationData => {
      this.router.navigateByUrl("mapComponent");
    });
  }

  ngOnInit(): void {
  }

  schedule(): void {
    LocalNotifications.schedule(
      [{
        id: 5,
        thumbnail: true,
        title: 'Actividad en progreso none1',
        body: 'Actividad ir de none',
        image: "https://cdn-images-1.medium.com/max/1200/1*c3cQvYJrVezv_Az0CoDcbA.jpeg",
        forceShowWhenInForeground: true,
        at: new Date(new Date().getTime() + 10 * 1000),
        actions: [
          {
            id: "input-richard",
            type: "button",
            title: "IR",
            placeholder: "Type to reply..",
            submitLabel: "Reply",
            launch: true,
            editable: true,
            ///choices: ["Red", "Yellow", "Green"] // TODO Android only, but yet to see it in action
          },
          {
            id: "input-richard",
            type: "button",
            title: "Aplazar",
            placeholder: "Type to reply..",
            submitLabel: "Reply",
            launch: true,
            editable: true,
            ///choices: ["Red", "Yellow", "Green"] // TODO Android only, but yet to see it in action
          }
        ]
      },
      {
        id: 6,
        thumbnail: true,
        title: 'Actividad en progreso none2',
        body: 'Actividad ir de none',
        image: "https://cdn-images-1.medium.com/max/1200/1*c3cQvYJrVezv_Az0CoDcbA.jpeg",
        forceShowWhenInForeground: true,
        at: new Date(new Date().getTime() + 5 * 1000),
        actions: []
      }])
      .then(() => {
        alert({
          title: "Notification scheduled",
          message: "ID: 5",
          okButtonText: "OK, thanks"
        });
      })
      .catch(error => console.log("doScheduleId5WithInput error: " + error));
  }




}
