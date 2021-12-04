/* eslint-disable prettier/prettier */

export interface IDomicilio {
    
    readonly idDomicilio: number,
    readonly cliente: string,
    readonly direccion: string,
    readonly fechaEntrega: Date,
    readonly estadoPedido: string
}