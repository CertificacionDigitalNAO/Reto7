// Entidad de usuario para manejar los datos en MongoDB
import { Schema } from 'mongoose';

// Definición del esquema de usuario
export const UserSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, match: /.+@.+\..+/ },
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

// Definición de la interfaz de usuario
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