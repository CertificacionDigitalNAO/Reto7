import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "../users/user.entity";
import { UserService } from "../users/user.service";
import { UserController } from "../users/user.controller";

/**
 * Módulo de base de datos.
 * 
 * Este módulo se encarga de configurar la conexión a la base de datos MongoDB
 * y de definir los esquemas, controladores y servicios relacionados con los usuarios.
 * 
 * @module DatabaseModule
 */
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI), // Configura la conexión a MongoDB
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), // Define el esquema de usuario
  ],
  controllers: [UserController], // Controladores del módulo
  providers: [UserService], // Proveedores del módulo
})
export class DatabaseModule { }