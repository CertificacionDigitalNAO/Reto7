/**
 * Ejemplo de cómo utilizar los tipos primitivos en TypeScript.
 */

/**
 * Nombre del usuario.
 * @type {string}
 */
let nombre: string = 'Juan';

/**
 * Apellido paterno del usuario.
 * @type {string}
 */
let apellidoPaterno: string = 'Pérez';

/**
 * Apellido materno del usuario.
 * @type {string}
 */
let apellidoMaterno: string = 'Gómez';

/**
 * Edad del usuario.
 * @type {number}
 */
let edad: number = 25;

/**
 * Estado civil del usuario.
 * @type {boolean}
 */
let casado: boolean = false;

/**
 * Fecha de nacimiento del usuario.
 * @type {Date}
 */
let fechaNacimiento: Date = new Date(1999, 10, 3, 0, 0, 0, 0);

/**
 * Imprime la información del usuario en la consola.
 * @function
 */
function imprimirInformacionUsuario(): void {
    console.log(
        'El usuario se llama ' +
        nombre +
        ' ' +
        apellidoPaterno +
        ' ' +
        apellidoMaterno +
        ' y tiene ' +
        edad +
        ' años.' +
        ' ¿Está casado? ' +
        casado +
        ' y nació el ' +
        fechaNacimiento,
    );
}

// Llamada a la función para imprimir la información del usuario
imprimirInformacionUsuario();
