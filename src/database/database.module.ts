import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "../users/user.entity";
import { UserService } from "../users/user.service";
import { UserController } from "../users/user.controller";

console.log('MONGODB_URI:', process.env.MONGODB_URI);

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class DatabaseModule { }