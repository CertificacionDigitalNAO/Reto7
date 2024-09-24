/* Ejemplos con implementaciones de los tipos de colección en TypeScript */

/** ====================================================================================================
 * Un Array es una estructura de datos que permite almacenar una colección de elementos del mismo tipo.
 * En TypeScript, se pueden definir arrays de tipos específicos, como `string`, `number`, `boolean`, o incluso `any` para permitir múltiples tipos.
 */

/**
 * Array de strings que almacena nombres de frutas.
 * @type {string[]}
 */
let frutas: string[] = ['Manzana', 'Pera', 'Naranja'];

/**
 * Array de números que almacena una secuencia de números.
 * @type {number[]}
 */
let numeros: number[] = [1, 2, 3, 4, 5];

/**
 * Array de booleanos que almacena valores verdaderos y falsos.
 * @type {boolean[]}
 */
let booleanos: boolean[] = [true, false];

/**
 * Array mixto que almacena elementos de diferentes tipos.
 * @type {any[]}
 */
let mixto: any[] = ['manzana', 1, true];

/**
 * Itera sobre el array de frutas y imprime cada elemento en la consola.
 * @function
 */
function imprimirFrutas(): void {
    for (let i = 0; i < frutas.length; i++) {
        console.log(`Elemento ${i} del array: ${frutas[i]}`);
    }
}

// Llamada a la función para imprimir los elementos del array de frutas
imprimirFrutas();

/** ====================================================================================================
 * Una Tupla es un tipo de dato que permite almacenar un conjunto de valores de diferentes tipos en un orden específico.
 * En este ejemplo, la tupla `usuario` almacena un `string` (nombre) y un `number` (edad).
 */

/**
 * Tupla que representa un usuario con un nombre y una edad.
 * @type {[string, number]}
 */
let usuario: [string, number] = ['Juan', 30];

/**
 * Imprime la información del usuario en la consola.
 * @function
 */
function imprimirUsuario(usuario: [string, number]): void {
    console.log(`Nombre de usuario: ${usuario[0]} | Edad: ${usuario[1]} años`);
}

// Llamada a la función para imprimir la información del usuario
imprimirUsuario(usuario);

/** ====================================================================================================
 * Un Set es una colección de valores únicos. A diferencia de los arrays, los sets no permiten elementos duplicados.
 * Los Sets no tienen índices para acceder a los elementos, a diferencia de los arrays.
 * Los sets tienen métodos específicos como add, delete, y has para manipular los elementos.
 */

/**
 * Set de números que almacena una colección de números únicos.
 * Aunque el array inicial contiene duplicados, el Set eliminará automáticamente los duplicados.
 * @type {Set<number>}
 */
let numerosSet: Set<number> = new Set([1, 2, 3, 4, 5, 5, 6]);

/**
 * Añade un nuevo número al set.
 * @param {number} numero - El número a añadir al set.
 */
function agregarNumero(numero: number): void {
    numerosSet.add(numero);
}

/**
 * Elimina un número del set.
 * @param {number} numero - El número a eliminar del set.
 */
function eliminarNumero(numero: number): void {
    numerosSet.delete(numero);
}

/**
 * Verifica si un número está en el set.
 * @param {number} numero - El número a verificar.
 * @returns {boolean} - `true` si el número está en el set, `false` en caso contrario.
 */
function contieneNumero(numero: number): boolean {
    return numerosSet.has(numero);
}

/**
 * Imprime todos los números del set en la consola.
 * @function
 */
function imprimirNumerosSet(): void {
    numerosSet.forEach(numero => {
        console.log(numero);
    });
}

// Ejemplos de uso
agregarNumero(7);
eliminarNumero(3);
console.log(contieneNumero(4)); // true
imprimirNumerosSet(); // 1, 2, 4, 5, 6, 7

/** ====================================================================================================
 * Un Map es una colección de pares clave-valor donde las claves pueden ser de cualquier tipo.
 * A diferencia de los objetos, los Maps mantienen el orden de inserción de los elementos y permiten claves de cualquier tipo.
 */

/**
 * Mapa que almacena las capitales de varios países.
 * @type {Map<string, string>}
 */
let capitalPais: Map<string, string> = new Map();
capitalPais.set('España', 'Madrid');
capitalPais.set('Francia', 'París');
capitalPais.set('Italia', 'Roma');
capitalPais.set('Alemania', 'Berlín');
capitalPais.set('México', 'Ciudad de México');

/**
 * Imprime las capitales de los países en la consola.
 * @function
 */
function imprimirCapitales(): void {
    capitalPais.forEach((capital, pais) => {
        console.log(`La capital de ${pais} es: ${capital}`);
    });
}

// Llamada a la función para imprimir las capitales
imprimirCapitales();