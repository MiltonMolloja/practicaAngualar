export class Encuesta {
  email: string;
  puntaje: number;

  Encuesta(email?: string, puntaje?: number){
    this.email = email;
    this.puntaje = puntaje;
  }
}
