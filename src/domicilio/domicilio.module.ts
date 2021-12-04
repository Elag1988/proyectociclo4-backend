/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DomicilioController } from './domicilio.controller';
import { DomicilioService } from './domicilio.service';
import { DomiciliosEntity } from './models/domicilio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DomiciliosEntity])],
  controllers: [DomicilioController],
  providers: [DomicilioService],
})
export class DomicilioModule {}
