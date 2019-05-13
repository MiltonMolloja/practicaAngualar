export class Pasaje {
  precioOriginal: number;
  tipoPasajero: string;
  precioConDesc: number;

  Pasaje(precioOriginal?: number, tipoPasajero?: string, precioConDesc?: number){
    this.precioOriginal = precioOriginal;
    this.tipoPasajero = tipoPasajero;
    this.precioConDesc = precioConDesc;
  }
}
