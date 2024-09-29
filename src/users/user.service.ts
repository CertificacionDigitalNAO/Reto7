import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto } from "./user.dto";

@Injectable()
export class UserService {
    /**
     * Constructor del servicio de usuarios.
     * 
     * @param {Model<User>} userModel - El modelo de usuario inyectado.
     */
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    /**
     * Crea un nuevo usuario.
     * 
     * @param {CreateUserDto} createUserDto - Los datos del usuario a crear.
     * @returns {Promise<User>} Una promesa que resuelve con el usuario creado.
     */
    async create(createUserDto: CreateUserDto): Promise<User> {
        const newUser = new this.userModel(createUserDto);
        return newUser.save();
    }

    /**
     * Obtiene todos los usuarios.
     * 
     * @returns {Promise<User[]>} Una promesa que resuelve con una lista de usuarios.
     */
    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    /**
     * Obtiene un usuario por su ID.
     * 
     * @param {string} id - El ID del usuario a obtener.
     * @returns {Promise<User>} Una promesa que resuelve con el usuario encontrado.
     */
    async findOne(id: string): Promise<User> {
        return this.userModel.findById(id).exec();
    }

    /**
     * Actualiza un usuario por su ID.
     * 
     * @param {string} id - El ID del usuario a actualizar.
     * @param {UpdateUserDto} updateUserDto - Los nuevos datos del usuario.
     * @returns {Promise<User>} Una promesa que resuelve con el usuario actualizado.
     */
    async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    }

    /**
     * Elimina un usuario por su ID.
     * 
     * @param {string} id - El ID del usuario a eliminar.
     * @returns {Promise<User>} Una promesa que resuelve con el usuario eliminado.
     */
    async delete(id: string): Promise<User> {
        return this.userModel.findByIdAndDelete(id).exec();
    }

    /**
     * Encuentra un usuario por su correo electrónico.
     * 
     * @param {string} email - El correo electrónico del usuario a encontrar.
     * @returns {Promise<User>} Una promesa que resuelve con el usuario encontrado.
     */
    async findByEmail(email: string): Promise<User> {
        return this.userModel.findOne({ email }).exec();
    }
}