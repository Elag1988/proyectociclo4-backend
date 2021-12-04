/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty } from "class-validator";

export class UserDTO{
    @IsNotEmpty() readonly id: string;
    @IsNotEmpty() readonly username: string;
    @IsNotEmpty() @IsEmail() readonly email: string;
    @IsNotEmpty() readonly nombreComercial: string;
    @IsNotEmpty() readonly tipoEstablecimiento: string;
    @IsNotEmpty() readonly updatedAt: Date;
    @IsNotEmpty() readonly active: boolean;


}