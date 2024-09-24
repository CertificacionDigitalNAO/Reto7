/**
 * Ejemplo de implementación de la Unión e Intersección en TypeScript.
 * 
 * La unión permite que una variable pueda ser de uno de varios tipos especificados.
 */

/**
 * Tipo de unión que puede ser un `string` o un `number`.
 * @typedef {string | number} Union
 */
type Union = string | number;

/**
 * Función que acepta un parámetro de tipo `Union` y devuelve una cadena de texto.
 * @param {Union} valor - El valor que puede ser un `string` o un `number`.
 * @returns {string} - La representación en cadena del valor.
 */
function procesarUnion(valor: Union): string {
    if (typeof valor === 'string') {
        return `El valor de la unión es una cadena: ${valor}`;
    } else {
        return `El valor de la unión  es un número: ${valor}`;
    }
}

// Ejemplos de uso
console.log(procesarUnion("Hola Mundo")); // El valor es una cadena: Hola Mundo
console.log(procesarUnion(42));           // El valor es un número: 42

/**
 * La intersección permite combinar múltiples tipos en uno solo, requiriendo que una variable cumpla con todos los tipos especificados.
 */

/**
 * Tipo que representa una persona.
 * @typedef {Object} Persona
 * @property {string} nombre - El nombre de la persona.
 * @property {number} edad - La edad de la persona.
 */
type Persona = {
    nombre: string;
    edad: number;
};

/**
 * Tipo que representa un empleado.
 * @typedef {Object} Empleado
 * @property {number} idEmpleado - El ID del empleado.
 * @property {string} puesto - El puesto del empleado.
 */
type Empleado = {
    idEmpleado: number;
    puesto: string;
};

/**
 * Tipo de intersección que combina `Persona` y `Empleado`.
 * @typedef {Persona & Empleado} EmpleadoPersona
 */
type EmpleadoPersona = Persona & Empleado;

/**
 * Función que acepta un parámetro de tipo `EmpleadoPersona` y devuelve una cadena de texto.
 * @param {EmpleadoPersona} empleadoPersona - El objeto que combina `Persona` y `Empleado`.
 * @returns {string} - La representación en cadena del empleado persona.
 */
function procesarEmpleadoPersona(empleadoPersona: EmpleadoPersona): string {
    return `Empleado (Intersección): ${empleadoPersona.nombre}, Edad: ${empleadoPersona.edad}, ID: ${empleadoPersona.idEmpleado}, Puesto: ${empleadoPersona.puesto}`;
}

// Ejemplo de uso
const empleado: EmpleadoPersona = {
    nombre: "Juan Pérez",
    edad: 30,
    idEmpleado: 1234,
    puesto: "Desarrollador"
};

console.log(procesarEmpleadoPersona(empleado)); // Empleado: Juan Pérez, Edad: 30, ID: 1234, Puesto: Desarrollador