import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventarioController } from './inventario.controller';
import { InventarioService } from './inventario.service';
import { InventarioEntity } from './models/inventario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InventarioEntity])],
  controllers: [InventarioController],
  providers: [InventarioService],
})
export class InventarioModule {}
