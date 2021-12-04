/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInventarioDTO } from './dto/create.inventario.dto';
import { IInventario } from './interfaces/inventario.interface';
import { InventarioEntity } from './models/inventario.entity';

@Injectable()
export class InventarioService {

    constructor(@InjectRepository(InventarioEntity) private readonly inventarioRepository: Repository<IInventario>){}
    
    async getProducts(): Promise<IInventario[]> {
        const products = await this.inventarioRepository.find();
        return products;
    }

    async getProductByID(productId: string): Promise<IInventario>{
        const product = await this.inventarioRepository.findOne(productId);
        return product;
    }

    async createProduct(createInventarioDTO: CreateInventarioDTO): Promise<IInventario> {
        const product = this.inventarioRepository.save(createInventarioDTO);
        return product;
    }

    async updateProduct(productId: string , createInventarioDTO: CreateInventarioDTO): Promise<any> {
        const updateProduct = await this.inventarioRepository.update(productId, createInventarioDTO);
        return updateProduct;
    }

    async deleteProduct(productId: string): Promise<any> {
        const deleteProduct = await this.inventarioRepository.delete(productId);
        return deleteProduct;
    }

}
