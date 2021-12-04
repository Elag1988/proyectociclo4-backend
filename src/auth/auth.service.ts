/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'; 
import { CreateUserDTO } from 'src/user/dto/create_user.dto';
import { LoginUserDTO } from 'src/user/dto/login_user.dto';
import { UserDTO } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { IJwtPayload } from './interfaces/jwt_payload.interfaces';
import { ILoginStatus } from './interfaces/login_status.interfaces';
import { IRegistrationStatus } from './interfaces/registration_status.interfaces';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

    async register( createUserDTO:CreateUserDTO): Promise<IRegistrationStatus>{

        let status: IRegistrationStatus = {
            sucess: true,
            message: "User Registered"
        };

        try {
            await this.userService.createUser(createUserDTO);
        }catch(err){
            status = {
            sucess: false,
            message: err
            }
        }
        return status;
    }

    async login(loginUserDTO: LoginUserDTO): Promise<ILoginStatus> {

        const user = await this.userService.findByLogin(loginUserDTO);

        const expiresIn = process.env.EXPIRES_IN;
        const accessToken = this.jwtService.sign(user);

        let token: ILoginStatus = { 
            username: user.username,
            accessToken,
            expiresIn
        }

        return token;

    }


    async validateUser(payload: IJwtPayload): Promise<UserDTO> {

        const user = await this.userService.findByPayload(payload);

        if(!user) {
            throw new HttpException("Invalid token", HttpStatus.UNAUTHORIZED);
        }

        return user;
    }



}
