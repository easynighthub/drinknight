import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Event } from '../core/event.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-detalle',
  templateUrl: './home-detalle.component.html',
  styleUrls: ['./home-detalle.component.scss']
})
export class HomeDetalleComponent implements OnInit {

  private eventsCollection: AngularFirestoreCollection<Event>;

  events: Observable<Event[]>;

  selectedEvent: Event;

  constructor(
    private router: Router,
    private bd: AngularFirestore
  ) {
    this.eventsCollection = bd.collection<Event>('events');
    console.log(this.eventsCollection);
    this.events = this.eventsCollection.valueChanges();

console.log(bd.collection<Event>('events'));
 /*    bd.collection('events').add({
      name: 'Los Angeles',
      state: 'CA',
      country: 'USA'
  })
  .then(function() {
      console.log('Document successfully written!');
  })
  .catch(function(error) {
      console.error('Error writing document: ', error);
  }); */

    console.log(this.events);
   }

  ngOnInit() {
  }

  onSelect(event: Event): void {
    console.log(this.selectedEvent);
    this.selectedEvent = event;
    console.log(this.selectedEvent);

  }


}
