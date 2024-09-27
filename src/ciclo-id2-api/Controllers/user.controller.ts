import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { UserService } from '../Services/user.service';
import { CreateUserDto, UpdateUserDto } from "../Dto/user.dto";

/**
 * Controlador para manejar las operaciones relacionadas con los usuarios.
 * 
 * @class UserController
 */
@Controller('users')
export class UserController {
    /**
     * Constructor del controlador de usuarios.
     * 
     * @param {UserService} userService - El servicio de usuarios.
     */
    constructor(private readonly userService: UserService) { }

    /**
     * Obtiene todos los usuarios.
     * 
     * @returns {Promise<User[]>} Una promesa que resuelve con la lista de usuarios.
     */
    @Get()
    async findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.userService.findOne(id);
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.userService.delete(id);
    }
}