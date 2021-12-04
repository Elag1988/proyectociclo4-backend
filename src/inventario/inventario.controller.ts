/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { CreateInventarioDTO } from './dto/create.inventario.dto';
import { InventarioService } from './inventario.service';

@Controller('inventario')
export class InventarioController {

    constructor(private readonly inventarioService: InventarioService) {}

    @Get()
        async getProducts(@Res() res) {
        const products = await this.inventarioService.getProducts();

        return res.status(HttpStatus.OK).send(products);

        }

    @Get('/:productId')
    async getProduct(@Res() res, @Param('productId') id) {
        const product = await this.inventarioService.getProductByID(id);
        
        if(!product) {
            throw new NotFoundException('El producto no existe. Revise el id!');
        }

        return res.status(HttpStatus.OK).send(product);
    }

    @Post('/create')

    async createProduct(@Res() res, @Body() createInventarioDTO: CreateInventarioDTO ) {
        const product = await this.inventarioService.createProduct(createInventarioDTO);
        return res.status(HttpStatus.CREATED).send( product);
    }

    @Put('/update/:productId')

    async updateStudent(@Res() res, @Body() createInventarioDTO: CreateInventarioDTO, @Param('productId') id) {

        const product = await this.inventarioService.updateProduct(id, createInventarioDTO);

        if(!product){
            throw new NotFoundException('El producto no existe. Revise el id!');
        }

        return res.status(HttpStatus.ACCEPTED).send(product);
    }

    @Delete('/delete/:productId')
    async deleteProduct(@Res() res, @Param('productId') id){
        
        const product = await this.inventarioService.deleteProduct(id);

        if(!product){
            throw new NotFoundException('El producto no existe. Revise el id!');
        }

        return res.status(HttpStatus.OK).send(product);

    }


}
