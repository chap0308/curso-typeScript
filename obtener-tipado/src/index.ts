//? import  {a as variableA}  from "./export-import/Hero";//se puede hacer así, pero mejor es de la otra manera:
import  * as archivoHero  from "./export-import/Hero";
import powers, {Power, Power2} from './export-import/powers';//*tambien se puede importar interfaces
import { genericFunction, genericFunctionArrow } from "./generics/generics";
import { getPokemon } from "./generics/get-pokemon";
import {Villano, Heroe} from "./interfaces";//*importar todo de interfaces/index.ts



const ironman=new archivoHero.Hero('Ironman',3,50);
console.log(ironman.power);//* "no found"

const ironman1=new archivoHero.Hero('Ironman',2,50);
console.log(ironman1.power);//* "Drugs"

//*es como si archivoHero fuera un objeto y las propiedades serían los valores de su archivo.(CTRL+ESPACIO para ver los datos) 
console.log(archivoHero.a);
console.log(archivoHero.variableB);

//*ARRAY POR EXPORT DEFAULT
console.log(powers)

//*INTERFACE
const nuevoPower:Power={
    id:1,
    desc:'Nuevo power'
}
console.log(nuevoPower);

//*TYPE
const nuevoPower2:Power2={
    nombre:"gemas",
    debilidad:'las mismas gemas'
}
console.log(nuevoPower2);


type Power3 = {//*se puede exportar interfaces, pero de esta manera
    nombre: string;
    debilidad: string;
}

//*para entender el primer ejercicio

const powers3: Power3[] = [
    {
        nombre: "1",
        debilidad: 'Money'
    },
    {
        nombre: "2",
        debilidad: 'OTRO'
    },
    {
        nombre: "2",
        debilidad: 'Drugs'
    },
]

console.log(powers3.find( power => power.nombre === "2" ))//*{ nombre: '2', debilidad: 'OTRO' }
console.log(powers3.find( power => power.nombre === "2" )?.debilidad)//* "OTRO", SIEMPRE USAR EL "?" ya que puede salir undifined

//?EJEMPLO CON INTERFACES */SECCION 11 - 85

//*nos da varios resultados si no usamos el generic
// console.log(genericFunction(1.5))
// console.log(genericFunction('Hola'))
// console.log(genericFunction(new Date()))
// console.log(genericFunction(true))
// console.log(genericFunction([1,2,3,4,5]))
// console.log(genericFunction({nombre:'Juan', edad:30}))

//*usando generic:
const deadpool={
    nombre:'Deadpool',
    realName:'Wade Winston Wilson',
    dangerLevel:130
} 
//*solo acepta el parametro deadpool si tiene el tipado y las variables del generico <Heroe> o <Villano>
console.log(genericFunctionArrow<Heroe>(deadpool).realName);//*solo acepta nombre y realName, porque tiene que retornar un objeto de tipo Heroe
console.log(genericFunctionArrow<Villano>(deadpool).dangerLevel);//*solo acepta nombre y dangerLevel, porque tiene que retornar un objeto de tipo Villano

//?EJEMPLO DE POKEMON

getPokemon(4)
    .then(resp=>console.log(resp.base_experience))
    .catch(error=>console.log(error))
    .finally(()=>console.log('Finalizo'))

