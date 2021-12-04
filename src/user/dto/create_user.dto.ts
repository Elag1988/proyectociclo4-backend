/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDTO{

    @IsNotEmpty() readonly username: string;
    @IsNotEmpty() readonly password: string;
    @IsNotEmpty() @IsEmail() readonly email: string;
    @IsNotEmpty() readonly nombreComercial: string;
    @IsNotEmpty() readonly nit: string;
    @IsNotEmpty() readonly tipoEstablecimiento: string;

}