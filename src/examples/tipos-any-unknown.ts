/**
 * Ejemplo de implementación de `any` y `unknown` en TypeScript.
 * 
 * `any` y `unknown` son tipos que permiten almacenar cualquier valor, pero tienen diferencias importantes:
 * - `any`: Desactiva todas las comprobaciones de tipo. Se puede asignar cualquier valor y se puede acceder a cualquier propiedad o método sin restricciones.
 * - `unknown`: Permite almacenar cualquier valor, pero requiere comprobaciones de tipo antes de acceder a propiedades o métodos específicos.
 */

/**
 * Variable de tipo `any`.
 * Se puede asignar cualquier valor y acceder a cualquier propiedad o método sin restricciones.
 * @type {any}
 */
let valor1: any;
valor1 = true;          // OK
valor1 = 42;            // OK
valor1 = "Hola Mundo";  // OK
valor1 = [];            // OK
valor1 = {};            // OK

/**
 * Variable de tipo `unknown`.
 * Se puede asignar cualquier valor, pero requiere comprobaciones de tipo antes de acceder a propiedades o métodos específicos.
 * @type {unknown}
 */
let valor2: unknown;
valor2 = true;          // OK
valor2 = 42;            // OK
valor2 = "Hola Mundo";  // OK

/**
 * Ejemplo de comprobación de tipo para una variable de tipo `unknown`.
 * Si `valor2` es de tipo `string`, se asigna a una variable de tipo `string`.
 */
if (typeof valor2 === "string") {
    /**
     * Variable de tipo `string` que almacena el valor de `valor2` después de la comprobación de tipo.
     * @type {string}
     */
    let str: string = valor2;  // OK
}