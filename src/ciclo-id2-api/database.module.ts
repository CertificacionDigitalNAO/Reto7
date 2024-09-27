import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./Entities/user.entity";
import { UserService } from "./Services/user.service";
import { UserController } from "./Controllers/user.controller";

console.log('MONGODB_URI:', process.env.MONGODB_URI); // Agrega esta línea para verificar

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class DatabaseModule {}