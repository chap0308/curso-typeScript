//** FUNCIONES GENERICAS: BASICAMENTE RECIBEN UN ARGUMENTO Y SU RETURN DEBE SER DEL MISMO TIPADO QUE EL ARGUMENTO. SECCION 11 - 84
//*puede ser cualquier letra o palabra, pero normalmente se usa la "T", con esto nuestra funcion se vuelve genérica
export function genericFunction<T>(argument: T): T {
    return argument;
}

export const genericFunctionArrow = <T>(argument: T) => argument;

//**A diferencia de la siguiente funcion, recibe un argumento de cualquier tipo y su retorno puede retornar cualquier tipado, el cual generaria errores */

export const printObject = (argument: any) => {
    console.log(argument);
}