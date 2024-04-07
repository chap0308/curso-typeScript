function printToConsole( constructor: Function ) {
    console.log( constructor )
}

//*DECORADOR: es una funcion que se ejecuta en el momento de compilacion o transpilacion para expandir o añadir funcionalidades a un objeto

const printToConsoleConditional = ( print: boolean = false ):Function => {
    if ( print ) {
        return printToConsole;
    }else {
        return () => {}
    }
}
//* si lo mandamos a llamar nos saldrá la funcion tal y como está en el codigo


const bloquearPrototipo = function( constructor: Function ) {
    Object.seal( constructor )
    Object.seal( constructor.prototype )
}

function CheckValidPokemonId() {
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
        
        const originalMethod = descriptor.value;

        descriptor.value = ( id: number ) => {
            if( id < 1 || id > 800 ) {
                return console.error('El id del pokemon debe de estar entre 1 y 800')
            } else {
                return originalMethod(id)
            }
        }
        // descriptor.value = () => console.log('Hola mundo');

    }
}


function readonly( isWritable: boolean = true ):Function {
    return function(target: any, propertyKey: string ){
        
        const descriptor: PropertyDescriptor = {
            get() {
                console.log( this )
                return 'Fernando'
            },
            set( this, val ){
                // console.log(this, val )
                Object.defineProperty( this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }
        
        return descriptor;
    }
}




@bloquearPrototipo
@printToConsoleConditional( false )
export class Pokemon {

    @readonly(true)
    public publicApi: string = 'https://pokeapi.co'

    constructor(
        public name: string
    ){}


    @CheckValidPokemonId()
    savePokemonToDB( id: number ) {
        console.log(`Pokemon guardado en DB ${ id }`);
    }
}

//*ejecutar en el index.ts
//* import { Pokemon } from './decorators/pokemon-class';

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu'

// console.log(charmander.savePokemonToDB(50));
// charmander.savePokemonToDB(10);
charmander.publicApi = 'https://fernando-herrera.com';
console.log( charmander )
