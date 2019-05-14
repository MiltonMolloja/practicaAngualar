import { Component, OnInit } from '@angular/core';
import { Moneda } from "./../../models/punto02/moneda";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-punto02',
  templateUrl: './punto02.component.html',
  styleUrls: ['./punto02.component.css']
})
export class Punto02Component implements OnInit {

  moneda: Moneda;
  valorCompraActual: number = null;
  valorVentaActual: number = null;
  montoMostrar: number = null;
  mostrarCargarValore: boolean = true;
  monedas: Array<Moneda>;

  constructor() {
    this.moneda = new Moneda();
    this.monedas = new Array<Moneda>();
  }

  ngOnInit() {
  }


  public convertirMoneda(formValor: NgForm) {
    if (formValor.valid == true) {
      this.moneda.valorCompra = this.valorCompraActual;
      this.moneda.valorVenta = this.valorVentaActual;
      if (this.moneda.tipoCambio) {
        this.moneda.montoEntregado = this.moneda.montoRecibido / this.valorCompraActual;
      } else {
        this.moneda.montoEntregado = this.moneda.montoRecibido / this.valorVentaActual;
      }
      //    console.log(this.moneda.montoEntregado);
      this.montoMostrar = this.moneda.montoEntregado;
      this.monedas.push(this.moneda);
      this.moneda = new Moneda();
    }
  }

  public grabarValores(formValor: NgForm) {
    console.log(formValor)
    if ((this.valorCompraActual != 0 && this.valorVentaActual != 0) &&
      (this.valorCompraActual != null && this.valorVentaActual != null)) {
      if (this.mostrarCargarValore) {
        this.mostrarCargarValore = false;
      } else {
        this.mostrarCargarValore = true;
      }

    }


    //this.monedas.push(this.moneda);
    //this.moneda = new Moneda();
  }

}
