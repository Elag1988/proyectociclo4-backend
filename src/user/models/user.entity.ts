/* eslint-disable prettier/prettier */
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcrypt";
@Entity("users")

export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique: true, nullable: false, default: "34"})
    username: string;

    @Column({nullable: false, default: "34"})
    password: string;

    @Column({nullable: false, default: "34"})
    email: string;

    @Column({nullable: false, default: "34"})
    nombreComercial: string;

    @Column({unique: true, nullable: false, default: "34"})
    nit: string;

    @Column({nullable: false, default: "34"})
    tipoEstablecimiento: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    updatedAt:Date;

    @Column({nullable: false, default: true})
    active: boolean;
    
    @BeforeInsert()
    async hassPassword(){
        this.password = await bcrypt.hash(this.password, 10)
    }






}
