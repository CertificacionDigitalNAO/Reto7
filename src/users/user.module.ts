import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema } from './user.entity';

/**
 * Módulo de usuarios.
 * 
 * Este módulo se encarga de gestionar las operaciones relacionadas con los usuarios,
 * incluyendo la configuración de Mongoose para el esquema de usuario, el controlador
 * y el servicio.
 * 
 * @module UserModule
 */
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), // Importa el módulo de Mongoose con el esquema de usuario
  ],
  controllers: [UserController], // Controladores del módulo
  providers: [UserService], // Proveedores del módulo
  exports: [UserService], // Exporta el servicio para que pueda ser inyectado en otros módulos
})
export class UserModule { }