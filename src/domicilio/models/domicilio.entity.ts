/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("domicilios")

export class DomiciliosEntity{
  
  @PrimaryGeneratedColumn()  
  idDomicilio: number;
  @Column({default:"Pepito Perez"})  
  cliente: string;
  @Column({default: "Calle F 123"})
  direccion: string;
  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  fechaEntrega:Date;
  @Column({default: "Por responder"})
  estadoPedido: string;
}