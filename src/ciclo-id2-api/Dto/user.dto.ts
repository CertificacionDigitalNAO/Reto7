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
    readonly username: string;

    /**
     * Correo electrónico del usuario.
     * 
     * @type {string}
     */
    readonly email: string;

    /**
     * Contraseña del usuario.
     * 
     * @type {string}
     */
    readonly password: string;

    /**
     * Roles del usuario.
     * 
     * @type {string[]}
     */
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
    readonly username?: string;

    /**
     * Correo electrónico del usuario.
     * 
     * @type {string}
     * @optional
     */
    readonly email?: string;

    /**
     * Contraseña del usuario.
     * 
     * @type {string}
     * @optional
     */
    readonly password?: string;

    /**
     * Roles del usuario.
     * 
     * @type {string[]}
     * @optional
     */
    readonly roles?: string[];
}