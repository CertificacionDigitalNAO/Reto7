import { ApiProperty } from "@nestjs/swagger";

/**
 * Data Transfer Object (DTO) para la creación de un usuario.
 * 
 * @class CreateUserDto
 */
export class CreateUserDto {
    /**
     * Nombre de usuario.
     * 
     * @type {string}
     */
    @ApiProperty({ description: 'Nombre de usuario' })
    readonly username: string;

    /**
     * Correo electrónico del usuario.
     * 
     * @type {string}
     */
    @ApiProperty({ description: 'Correo electrónico del usuario' })
    readonly email: string;

    /**
     * Contraseña del usuario.
     * 
     * @type {string}
     */
    @ApiProperty({ description: 'Contraseña del usuario' })
    readonly password: string;

    /**
     * Roles del usuario.
     * 
     * @type {string[]}
     */
    @ApiProperty({ description: 'Roles del usuario', isArray: true })
    readonly roles: string[];
}

/**
 * Data Transfer Object (DTO) para la actualización de un usuario.
 * 
 * @class UpdateUserDto
 */
export class UpdateUserDto {
    /**
     * Nombre de usuario.
     * 
     * @type {string}
     * @optional
     */
    @ApiProperty({ description: 'Nombre de usuario', required: false })
    readonly username?: string;

    /**
     * Correo electrónico del usuario.
     * 
     * @type {string}
     * @optional
     */
    @ApiProperty({ description: 'Correo electrónico del usuario', required: false })
    readonly email?: string;

    /**
     * Contraseña del usuario.
     * 
     * @type {string}
     * @optional
     */
    @ApiProperty({ description: 'Contraseña del usuario', required: false })
    readonly password?: string;

    /**
     * Roles del usuario.
     * 
     * @type {string[]}
     * @optional
     */
    @ApiProperty({ description: 'Roles del usuario', isArray: true, required: false })
    readonly roles?: string[];
}