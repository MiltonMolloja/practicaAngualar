import { Component, OnInit } from '@angular/core';
import { Mensaje } from "./../../models/punto04/mensaje";

@Component({
  selector: 'app-punto04',
  templateUrl: './punto04.component.html',
  styleUrls: ['./punto04.component.css']
})
export class Punto04Component implements OnInit {

  mensaje: Mensaje;
  maxTexto: number = 150;

  mensajes: Array<Mensaje>;

  constructor() {
    this.mensaje = new Mensaje();
    this.mensajes = new Array<Mensaje>();
  }

  ngOnInit() {
  }

  public enviarMensaje(){
    this.mensaje.fecha = new Date();
    this.mensajes.push(this.mensaje);
    //this.mensaje = new Mensaje();
  }

  public clearMensaje(){
    this.mensaje = new Mensaje();
  }



}
