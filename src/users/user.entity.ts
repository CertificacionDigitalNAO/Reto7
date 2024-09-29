import { Schema } from 'mongoose';

/**
 * Esquema de Usuario para MongoDB.
 * 
 * Define la estructura de los documentos de usuario en la base de datos.
 * 
 * @type {Schema}
 */
export const UserSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, match: /.+@.+\..+/ }, // Validación de formato de correo electrónico
    password: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    roles: { type: [String], required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true },
    lastLogin: { type: Date },
    tokens: { type: [String], default: [] },
});

/**
 * Interfaz de usuario.
 * 
 * Define la estructura de los objetos de usuario en la aplicación.
 * 
 * @interface User
 */
export interface User {
    /**
     * Nombre de usuario.
     * 
     * @type {string}
     */
    username: string;

    /**
     * Correo electrónico del usuario.
     * 
     * @type {string}
     */
    email: string;

    /**
     * Contraseña del usuario.
     * 
     * @type {string}
     */
    password: string;

    /**
     * Nombre del usuario.
     * 
     * @type {string}
     */
    firstName: string;

    /**
     * Apellido del usuario.
     * 
     * @type {string}
     */
    lastName: string;

    /**
     * Roles del usuario.
     * 
     * @type {string[]}
     */
    roles: string[];

    /**
     * Fecha de creación del usuario.
     * 
     * @type {Date}
     */
    createdAt: Date;

    /**
     * Fecha de última actualización del usuario.
     * 
     * @type {Date}
     */
    updatedAt: Date;

    /**
     * Indica si el usuario está activo.
     * 
     * @type {boolean}
     */
    isActive: boolean;

    /**
     * Fecha del último inicio de sesión del usuario.
     * 
     * @type {Date}
     * @optional
     */
    lastLogin?: Date;

    /**
     * Tokens de autenticación del usuario.
     * 
     * @type {string[]}
     */
    tokens: string[];
}