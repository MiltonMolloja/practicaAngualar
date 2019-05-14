import { Component, OnInit } from '@angular/core';

import { Alumno } from "./../../models/alumno";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-punto01',
  templateUrl: './punto01.component.html',
  styleUrls: ['./punto01.component.css']
})
export class Punto01Component implements OnInit {

  alumno: Alumno;

  alumnos: Array<Alumno>;

  constructor(){
    this.alumno = new Alumno();
    this.alumnos = new Array<Alumno>();

  }

  ngOnInit() {
  }

  public calcularNotas( form: NgForm ){
    if (form.valid == true) {
    this.alumno.promedio =  (this.alumno.notaConcepto + this.alumno.notaEscrita + this.alumno.notaOral) / 3;
    if (this.alumno.promedio >= 7) {
        this.alumno.estado = "PROMOCIONADO";
    } else {
      if (this.alumno.promedio >= 5) {
        this.alumno.estado = "APROBADO";
      } else {
        this.alumno.estado = "DESAPROBADO";
      }
    }
    this.alumnos.push(this.alumno);
    //this.alumno = new Alumno();
  }
  }

  public clearAlumno(){
    this.alumno = new Alumno();
  }
}
