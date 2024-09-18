/**
 * Enumeración de los días de la semana.
 * Las enumeraciones permiten definir un conjunto de valores con nombre.
 * Son útiles para representar un grupo de constantes relacionadas y mejorar la legibilidad del código.
 * @enum {number}
 */
enum DiasDeLaSemana {
    Lunes,
    Martes,
    Miércoles,
    Jueves,
    Viernes,
    Sábado,
    Domingo,
}

/**
 * Devuelve el nombre del día de la semana basado en el valor de la enumeración.
 * @param {DiasDeLaSemana} dia - El día de la semana.
 * @returns {string} El nombre del día.
 */
function obtenerDia(dia: DiasDeLaSemana): string {
    return DiasDeLaSemana[dia];
}

/**
 * Verifica si el día es un fin de semana.
 * @param {DiasDeLaSemana} dia - El día de la semana.
 * @returns {boolean} Verdadero si es fin de semana, falso en caso contrario.
 */
function esFinDeSemana(dia: DiasDeLaSemana): boolean {
    return dia === DiasDeLaSemana.Sábado || dia === DiasDeLaSemana.Domingo;
}

// Ejemplo de uso de las funciones
/**
 * Día de la semana actual.
 * @type {DiasDeLaSemana}
 */
const dia: DiasDeLaSemana = DiasDeLaSemana.Lunes;

console.log('Hoy es ' + obtenerDia(dia) + '.');

if (esFinDeSemana(dia)) {
    console.log('¡Es fin de semana!');
} else {
    console.log('¡A trabajar!');
}