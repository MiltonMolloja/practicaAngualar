import { Component, OnInit } from '@angular/core';
import { Pasaje } from "./../../models/punto03/pasaje";

@Component({
  selector: 'app-punto03',
  templateUrl: './punto03.component.html',
  styleUrls: ['./punto03.component.css']
})
export class Punto03Component implements OnInit {

  pasaje: Pasaje;

  pasajes: Array<Pasaje>;

  constructor() {
    this.pasaje = new Pasaje();
    this.pasajes = new Array<Pasaje>();
  }

  ngOnInit() {
  }

  public calcularPrecio() {

    if (this.pasaje.tipoPasajero === "M") {
      this.pasaje.precioConDesc = this.pasaje.precioOriginal * 0.75;
    } else {
      if (this.pasaje.tipoPasajero === "J") {
        this.pasaje.precioConDesc = this.pasaje.precioOriginal * 0.50;
      } else {

        this.pasaje.precioConDesc = this.pasaje.precioOriginal;
      }
    }
  }

}
