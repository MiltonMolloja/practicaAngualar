export class Alumno {
  numeroLegajo: number;
  notaConcepto: number;
  notaEscrita: number;
  notaOral: number;
  promedio: number;
  estado: string;

  Alumno(numeroLegajo?: number, notaConcepto?: number, notaEscrita?: number,
     notaOral?: number, promedio?: number, estado?: string)
    {
      this.numeroLegajo = numeroLegajo;
      this.notaConcepto = notaConcepto;
      this.notaEscrita = notaEscrita;
      this.notaOral = notaOral;
      this.promedio = promedio;
      this.estado = estado;
  }

}
