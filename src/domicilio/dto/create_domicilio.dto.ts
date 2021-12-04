/* eslint-disable prettier/prettier */
import { IDomicilio } from "../interfaces/domicilio.interface";
export class CreateDomicilioDTO implements IDomicilio{

    readonly idDomicilio: number;
    readonly cliente: string;
    readonly direccion: string;
    readonly fechaEntrega: Date;
    readonly estadoPedido: string;
    
}