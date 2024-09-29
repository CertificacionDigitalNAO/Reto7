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
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    roles: string[];
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
    lastLogin?: Date;
    tokens: string[];
}

/**
 * Clase de usuario.
 * 
 * Implementa la interfaz de usuario y puede ser utilizada en tiempo de ejecución.
 * 
 * @class User
 */
export class User implements User {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    roles: string[];
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
    lastLogin?: Date;
    tokens: string[];
}