/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class LoginUserDTO{

    @IsNotEmpty() readonly username: string;
    @IsNotEmpty() readonly password: string;
}