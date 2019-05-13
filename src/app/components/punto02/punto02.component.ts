import { Component, OnInit } from '@angular/core';
import { Moneda } from "./../../models/punto02/moneda";

@Component({
  selector: 'app-punto02',
  templateUrl: './punto02.component.html',
  styleUrls: ['./punto02.component.css']
})
export class Punto02Component implements OnInit {

  moneda: Moneda;
  valorCompraActual: number = 0;
  valorVentaActual: number = 0;
  montoMostrar: number = 0;
  mostrarCargarValore: boolean = true;
  monedas: Array<Moneda>;

  constructor() {
    this.moneda = new Moneda();
    this.monedas = new Array<Moneda>();
   }

  ngOnInit() {
  }


  public convertirMoneda(){
    this.moneda.valorCompra = this.valorCompraActual;
    this.moneda.valorVenta = this.valorVentaActual;
    if (this.moneda.tipoCambio) {
        this.moneda.montoEntregado =this.moneda.montoRecibido / this.valorCompraActual ;
    } else {
      this.moneda.montoEntregado = this.moneda.montoRecibido / this.valorVentaActual ;
    }
//    console.log(this.moneda.montoEntregado);
    this.montoMostrar = this.moneda.montoEntregado;
    this.monedas.push(this.moneda);
    this.moneda = new Moneda();
  }

  public grabarValores(){
    if(this.mostrarCargarValore){
      this.mostrarCargarValore = false;
    }else{
      this.mostrarCargarValore = true;
    }

    //this.monedas.push(this.moneda);
    //this.moneda = new Moneda();
  }

}
