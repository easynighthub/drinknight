import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';



export interface State {
  flag: string;
  name: string;
  population: string;
}


@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss']
})


export class VentaComponent implements OnInit {


  constructor() {
  }


  ngOnInit() {
  }

}
