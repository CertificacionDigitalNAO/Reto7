import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus } from "@nestjs/common";
import { UserService } from '../Services/user.service';
import { CreateUserDto, UpdateUserDto } from "../Dto/user.dto";

/**
 * Controlador para manejar las operaciones relacionadas con los usuarios.
 * 
 * @class UserController
 */
@Controller('users') // Ruta base para las operaciones de usuario
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

    /**
     * Obtiene un usuario por su ID.
     * 
     * @param {string} id - El ID del usuario.
     * @returns {Promise<User>} Una promesa que resuelve con el usuario encontrado.
     */
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.userService.findOne(id);
    }

    /**
     * Crea un nuevo usuario.
     * 
     * @param {CreateUserDto} createUserDto - Los datos del usuario a crear.
     * @returns {Promise<User>} Una promesa que resuelve con el usuario creado.
     */
    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    /**
     * Actualiza un usuario existente.
     * 
     * @param {string} id - El ID del usuario a actualizar.
     * @param {UpdateUserDto} updateUserDto - Los nuevos datos del usuario.
     * @returns {Promise<User>} Una promesa que resuelve con el usuario actualizado.
     */
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto);
    }

    /**
     * Elimina un usuario por su ID.
     * 
     * @param {string} id - El ID del usuario a eliminar.
     * @returns {Promise<{ message: string }>} Una promesa que resuelve con un mensaje de confirmación.
     * @throws {HttpException} Si el usuario no es encontrado.
     */
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<{ message: string }> {
        const result = await this.userService.delete(id);
        if (!result) {
            throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
        }
        return { message: 'Usuario eliminado' };
    }
}