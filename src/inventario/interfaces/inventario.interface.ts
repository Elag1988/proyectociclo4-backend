/* eslint-disable prettier/prettier */

export interface IInventario {
    
    readonly idProducto: number,
    readonly name: string,
    readonly photoUrl: string,
    readonly precioDeVenta: number,
    readonly preciodeCompra: number,
    readonly stock: number,
    readonly descuento: number
}