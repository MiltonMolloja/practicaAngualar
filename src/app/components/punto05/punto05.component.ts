import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';

import { Encuesta } from "./../../models/punto05/encuesta";


@Component({
  selector: 'app-punto05',
  templateUrl: './punto05.component.html',
  styleUrls: ['./punto05.component.css']
})

export class Punto05Component implements OnInit {

  encuesta: Encuesta;
  contNoSabe: number = 0;
  contMalo: number = 0;
  contRegular: number = 0;
  contBueno: number = 0;

  encuestas: Array<Encuesta>;

  constructor() {
    this.encuesta = new Encuesta();
    this.encuestas = new Array<Encuesta>();
   }

  ngOnInit() {
  }

  public enviarEcuesta( ngForm: NgForm  )
  {

    if( ngForm.valid == true  )
    {
      this.clasificarPuntaje();
    this.encuestas.push(this.encuesta);
    this.encuesta = new Encuesta();
    }//

  }

  public clasificarPuntaje(){
    if(this.encuesta.puntaje==0){
      this.contNoSabe++;
    }
    if(this.encuesta.puntaje==1){
      this.contMalo++;
    }
    if(this.encuesta.puntaje==2){
      this.contRegular++;
    }
    if(this.encuesta.puntaje==3){
      this.contBueno++;
    }
  }
}

export class NameEditorComponent {
  name = new FormControl('');
}
