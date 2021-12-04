/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginUserDTO } from './dto/login_user.dto';
import { UserDTO } from './dto/user.dto';
import { UserEntity } from './models/user.entity';
import * as bcrypt from "bcrypt";
import { CreateUserDTO } from './dto/create_user.dto';

@Injectable()
export class UserService {

    constructor(@InjectRepository(UserEntity) private readonly userRepository:Repository<UserEntity>) {}
        
        async findOneUser(options?: object): Promise<UserDTO>{

            const user = await this.userRepository.findOne(options);
            return this.userEntitytoUserDTO(user);

        }
    
        async findByLogin(loginUserDTO: LoginUserDTO): Promise<UserDTO> {

            const {username, password} = loginUserDTO;
            const user = await this.userRepository.findOne( { where: {username} } );

            if(!user) {
                throw new HttpException("User not found", HttpStatus.UNAUTHORIZED);
            }
            const comparePassword = await bcrypt.compare(password, user.password);

            if(!comparePassword) {
                throw new HttpException("Invalid Credentials", HttpStatus.UNAUTHORIZED);
            }


            return this.userEntitytoUserDTO(user);
        }

        async findByPayload( {username}: any ): Promise <UserDTO>{

            const user = this.findOneUser({where: {username}});
            return user;

        }

        async createUser(createUserDTO: CreateUserDTO): Promise <UserDTO> {

            const {username,password, email,nombreComercial, nit, tipoEstablecimiento} = createUserDTO

            const foundUser = await this.userRepository.findOne({where: { username }})

            if(foundUser) {
                throw new HttpException("User Already Exists", HttpStatus.BAD_REQUEST);
            }

            const user = await this.userRepository.create({username,password, email,nombreComercial, nit, tipoEstablecimiento});

            await this.userRepository.save(user);

            return this.userEntitytoUserDTO(user);
        }

        userEntitytoUserDTO(userEntity:UserEntity): UserDTO {

            const {id, username, email, nombreComercial, tipoEstablecimiento, updatedAt, active} = userEntity;
            const userDTO:UserDTO = {id, username, email,nombreComercial,tipoEstablecimiento,updatedAt,active};
            return userDTO;


        }    

}


