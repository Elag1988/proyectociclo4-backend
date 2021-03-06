/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpException, HttpStatus, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDTO } from 'src/user/dto/create_user.dto';
import { LoginUserDTO } from 'src/user/dto/login_user.dto';
import { AuthService } from './auth.service';
import { IJwtPayload } from './interfaces/jwt_payload.interfaces';
import { ILoginStatus } from './interfaces/login_status.interfaces';
import { IRegistrationStatus } from './interfaces/registration_status.interfaces';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  @UsePipes(new ValidationPipe())
  public async register(@Body() createUserDTO: CreateUserDTO): Promise<IRegistrationStatus>  {
      
    const result: IRegistrationStatus = await this.authService.register(createUserDTO);

    console.log(result);

    if(!result.sucess) {
        throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  @Post("login")

  public async login(@Body() loginUserDTO:LoginUserDTO): Promise<ILoginStatus> {

    const result: ILoginStatus = await this.authService.login(loginUserDTO);
    return result

  }

  @Get("whoami")

  @UseGuards(AuthGuard())

  public async testAuth(@Req() req:any): Promise<IJwtPayload> {
    return req.user;
  }

}
