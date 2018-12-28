import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Event } from '../core/event.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



export interface Item {
  desc: string;
  img: string;
  name: string;
  price: number;
  title: string;
  uid: string;


}

@Component({
  selector: 'app-home-detalle',
  templateUrl: './home-detalle.component.html',
  styleUrls: ['./home-detalle.component.scss']
})
export class HomeDetalleComponent implements OnInit {

  private eventsCollection: AngularFirestoreCollection<Item>;

  events: Observable<Item[]>;

  selectedEvent: Event;

  constructor(
    private router: Router,
    private bd: AngularFirestore
  ) {
    this.eventsCollection = bd.collection<Item>('productos');
    console.log(this.eventsCollection);
    this.events = this.eventsCollection.valueChanges();

console.log(bd.collection<Event>('productos'));

/*     bd.collection('productos').add({
      desc: '250 Gr. de carne , con esquistos trozos de tocino y queso cheddar + una bebida de 350 cc. + una porción de papas fritas.',
      img: 'https://firebasestorage.googleapis.com/v0/b/sociallogin-7cfce.appspot.com/o/ImgProductos%2F41C43A4D-B832-4B23-9251-49719FA7D98A.png?alt=media&token=2931f803-bf7a-42a5-bb48-f95725302ae0',
      name: 'PROMOCION 1',
      price: 4500,
      title : '3 MEET'
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
