/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { CreateDomicilioDTO } from './dto/create_domicilio.dto';
import { DomicilioService } from './domicilio.service';

@Controller('domicilio')
export class DomicilioController {

    constructor(private readonly domicilioService: DomicilioService) {}

    @Get()
        async getDomicilios(@Res() res) {
        const domicilios = await this.domicilioService.getDomicilios();

        return res.status(HttpStatus.OK).send(domicilios);

        }

    @Get('/:domicilioId')
        async getDomicilio(@Res() res, @Param('domicilioId') domicilioId) {
            const domicilio = await this.domicilioService.getDomicilioByID(domicilioId);
            
            if(!domicilio) {
                throw new NotFoundException('El domicilio no existe. Revise el id!');
            }
    
            return res.status(HttpStatus.OK).send(domicilio);
        }
    
    @Post('/create')
    
        async createDomicilio(@Res() res, @Body() createDomicilioDTO: CreateDomicilioDTO ) {
            const domicilio = await this.domicilioService.createDomicilio(createDomicilioDTO);
            return res.status(HttpStatus.CREATED).send(domicilio);
        }

    @Put('/update/:domicilioId')

        async updateDomicilio(@Res() res, @Body() createDomicilioDTO: CreateDomicilioDTO, @Param('domicilioId') domicilioId) {

            const domicilio = await this.domicilioService.updateDomicilio(domicilioId, createDomicilioDTO);

            if(!domicilio){
                throw new NotFoundException('El domicilio no existe. Revise el id!');
            }

            return res.status(HttpStatus.OK).send(domicilio);
        }

    @Delete('/delete/:domicilioId')
    async deleteProduct(@Res() res, @Param('domicilioId') id){
        
        const domicilio = await this.domicilioService.deleteDomicilio(id);

        if(!domicilio){
            throw new NotFoundException('El producto no existe. Revise el id!');
        }

        return res.status(HttpStatus.OK).send(domicilio);
    }

}
