import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'crud_nest',
      autoLoadEntities: true,// LAS ENTIDADES CARGARAN AUTOMATICAMENTE
      synchronize: false,//IMPORTANTE: ESTO NO SE DEBE USAR EN PRODUCCION, PORQUE CADA VEZ QUE SE EJECUTE PERDERA LA INFORMACION DE LA BASE DE DATOS
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
