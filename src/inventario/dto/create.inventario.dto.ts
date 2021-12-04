/* eslint-disable prettier/prettier */
import { IInventario } from "../interfaces/inventario.interface";
export class CreateInventarioDTO implements IInventario{

    readonly idProducto: number;
    readonly name: string;
    readonly photoUrl:string;
    readonly precioDeVenta: number;
    readonly preciodeCompra: number;
    readonly stock: number;
    readonly descuento: number;

}