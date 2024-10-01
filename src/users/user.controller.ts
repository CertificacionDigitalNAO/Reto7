import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus, BadRequestException, ConflictException, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { User } from './user.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

/**
 * Controlador para manejar las operaciones relacionadas con los usuarios.
 *
 * @class UserController
 */
@ApiTags('users') // Etiqueta para agrupar las operaciones de usuario en Swagger
@Controller('users') // Ruta base para las operaciones de usuario
export class UserController {
    /**
     * Constructor del controlador de usuarios.
     *
     * @param {UserService} userService - El servicio de usuarios.
     */
    constructor(private readonly userService: UserService) { }

    /** ===========================================================================================
     * Obtiene todos los usuarios.
     *
     * @returns {Promise<User[]>} Una promesa que resuelve con la lista de usuarios.
     */
    @UseGuards(JwtAuthGuard)
    @Get()
    @ApiOperation({ summary: 'Obtener todos los usuarios' })
    @ApiResponse({ status: 200, description: 'Lista de usuarios', type: [User] })
    @ApiResponse({ status: 500, description: 'Error interno del servidor' })
    async findAll(): Promise<User[]> {
        try {
            return await this.userService.findAll();
        } catch (error) {
            throw new HttpException(
                'Error al obtener los usuarios',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    /** ===========================================================================================
     * Obtiene un usuario por su ID.
     *
     * @param {string} id - El ID del usuario.
     * @returns {Promise<User>} Una promesa que resuelve con el usuario encontrado.
     * @throws {HttpException} Si el usuario no es encontrado.
     */
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    @ApiOperation({ summary: 'Obtener un usuario por ID' })
    @ApiParam({ name: 'id', description: 'ID del usuario' })
    @ApiResponse({ status: 200, description: 'Usuario encontrado', type: User })
    @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
    async findOne(@Param('id') id: string): Promise<User> {
        const result = await this.userService.findOne(id);
        if (!result) {
            throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
        }
        return result;
    }

    /** ===========================================================================================
     * Crea un nuevo usuario.
     *
     * @param {CreateUserDto} createUserDto - Los datos del usuario a crear.
     * @returns {Promise<User>} Una promesa que resuelve con el usuario creado.
     * @throws {BadRequestException} Si los datos son inválidos.
     * @throws {ConflictException} Si el usuario ya existe.
     */
    @UseGuards(JwtAuthGuard)
    @Post()
    @ApiOperation({ summary: 'Crear un nuevo usuario' })
    @ApiBody({ type: CreateUserDto })
    @ApiResponse({ status: 201, description: 'Usuario creado', type: User })
    @ApiResponse({ status: 400, description: 'Datos inválidos' })
    @ApiResponse({ status: 409, description: 'Usuario ya existe' })
    @ApiResponse({ status: 500, description: 'Error interno del servidor' })
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        try {
            // Validar datos
            if (!createUserDto.email || !createUserDto.password) {
                throw new BadRequestException('Datos inválidos');
            }

            // Verificar si el usuario ya existe por su email
            const existingUser = await this.userService.findByEmail(
                createUserDto.email,
            );
            if (existingUser) {
                throw new ConflictException('Usuario ya existe');
            }

            // Crear el nuevo usuario
            return await this.userService.create(createUserDto);
        } catch (error) {
            if (error instanceof ConflictException) {
                throw error;
            }
            throw new HttpException(
                'Error al crear el usuario',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    /** ===========================================================================================
     * Actualiza un usuario existente.
     *
     * @param {string} id - El ID del usuario a actualizar.
     * @param {UpdateUserDto} updateUserDto - Los nuevos datos del usuario.
     * @returns {Promise<User>} Una promesa que resuelve con el usuario actualizado.
     */
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    @ApiOperation({ summary: 'Actualizar un usuario existente' })
    @ApiParam({ name: 'id', description: 'ID del usuario' })
    @ApiBody({ type: UpdateUserDto })
    @ApiResponse({ status: 200, description: 'Usuario actualizado', type: User })
    @ApiResponse({ status: 400, description: 'Datos inválidos' })
    async update(
        @Param('id') id: string,
        @Body() updateUserDto: UpdateUserDto,
    ): Promise<User> {
        // Validar datos de entrada del usuario a actualizar (email y password)
        if (!updateUserDto.email || !updateUserDto.password) {
            throw new HttpException('Datos inválidos', HttpStatus.BAD_REQUEST);
        }

        // Actualizar el usuario
        const updatedUser = await this.userService.update(id, updateUserDto);
        if (!updatedUser) {
            throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
        }

        return updatedUser;
    }

    /**
     * Elimina un usuario por su ID.
     *
     * @param {string} id - El ID del usuario a eliminar.
     * @returns {Promise<{ message: string }>} Una promesa que resuelve con un mensaje de confirmación.
     * @throws {HttpException} Si el usuario no es encontrado.
     */
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar un usuario por ID' })
    @ApiParam({ name: 'id', description: 'ID del usuario' })
    @ApiResponse({ status: 200, description: 'Usuario eliminado', type: Object })
    @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
    async delete(@Param('id') id: string): Promise<{ message: string }> {
        const result = await this.userService.delete(id);
        if (!result) {
            throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
        }
        return { message: 'Usuario eliminado' };
    }
}