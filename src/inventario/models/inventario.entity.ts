/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("inventario")

export class InventarioEntity{
  
  @PrimaryGeneratedColumn()  
  idProducto: number;
  @Column({default:"Ajiaco"})  
  nombre: string;
  @Column({default: "1"})
  precioDeVenta: number;
  @Column({default: "1"})
  precioDeCompra:number;
  @Column({default: "1"})
  stock: number;
  @Column({default: "1"})
  descuento: number;
  @Column({default:"https://t1.rg.ltmcdn.com/es/images/7/4/9/img_arroz_con_pollo_ecuatoriano_56947_orig.jpg"})  
  photoUrl: string;
}