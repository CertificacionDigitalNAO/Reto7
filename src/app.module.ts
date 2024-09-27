import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './ciclo-id2-api/database.module';
import { UserController } from './ciclo-id2-api/Controllers/user.controller';
import { UserService } from './ciclo-id2-api/Services/user.service';
import { UserSchema } from './ciclo-id2-api/Entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // Configuración de conexión a MongoDB
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), // Registro del esquema User
    DatabaseModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule { }