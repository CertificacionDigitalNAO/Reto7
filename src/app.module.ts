import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './users/user.module'; // Importa el módulo de usuarios

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // Configuración de conexión a MongoDB
    MongooseModule.forRoot(process.env.MONGODB_URI),
    DatabaseModule,
    UserModule, // Importa el módulo de usuarios
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }