import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto } from "./user.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const newUser = new this.userModel(createUserDto);
        return newUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findOne(id: string): Promise<User> {
        return this.userModel.findById(id).exec();
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    }

    async delete(id: string): Promise<User> {
        return this.userModel.findByIdAndDelete(id).exec();
    }

}