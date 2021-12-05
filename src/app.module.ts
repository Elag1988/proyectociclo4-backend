import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventarioModule } from './inventario/inventario.module';
import { DomicilioModule } from './domicilio/domicilio.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'b5s2izs98b61xg31i744-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'u3bbivuc1n9lkmeh',
      password: 'aPjo0RaJnaN8qO4cdwQd',
      database: 'b5s2izs98b61xg31i744',
      autoLoadEntities: true,
    }),
    InventarioModule,
    DomicilioModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
