export class Moneda {
  valorCompra: number;
  valorVenta: number;
  tipoCambio: boolean;
  montoRecibido: number;
  montoEntregado: number;

  Moneda(valorCompra?: number, valorVenta?: number, tipoCambio?: boolean, montoRecibido?: number,montoEntregado?: number){
    this.valorCompra = valorCompra;
    this.valorVenta = valorVenta;
    this.tipoCambio = tipoCambio;
    this.montoRecibido = montoRecibido;
    this.montoEntregado = montoEntregado;
  }

}
