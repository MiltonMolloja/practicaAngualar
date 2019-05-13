export class Mensaje {
  remintente: string;
  destinatario: number;
  contenido: string;
  fecha: Date;

  Mensaje(remintente?: string, destinatario?: number, contenido?: string, fecha?: Date){
    this.remintente = remintente;
    this.destinatario = destinatario;
    this.contenido = contenido;
    this.fecha = fecha;
  }
}
