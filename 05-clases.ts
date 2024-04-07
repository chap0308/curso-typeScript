(function () {
    //*protected: solo puede ser usado por la misma clase y por las clases hijas
    //*private: solo puede ser usado por la misma clase

    //*FORMA CORTA DE CREAR UNA CLASE**//
    class Avenger {

        static avgAge: number=35;

        constructor(//*ya no es necesario colocarlo antes, solo los statics
            private nombre: string,
            private equipo: string,
            public nombreReal?: string,//*tambien se puede usar el operador "?" para que sea optional
            public puedePelear: boolean=true//siempre estará en todas las clases
        ) { }//*ya no es necesario colocar el this

        bio(): string {//*puedes o no colocarle public, no afecta. Pero si es recomendado que lo tenga.
            return `${this.nombre} (${this.equipo})`;
        }
        static getAvgAge(){
            return this.avgAge;
        }
        private getFullName(): string {
            return `${this.nombre} ${this.nombreReal}`;
        }
        protected getName():string{
            return this.nombre;
        }

    }
    //*en el caso de las interfaces si permite tener un duplicado con la clase pero no con los types. Tener en cuenta que agrega la propiedad propia a la clase, pero no significa que esté en el constructor
    interface Avenger {
        nuevoNombre: string;
    }
    //* en el caso de los types, no permiten tener un duplicado con la interface y con la clase
    // type Avenger = {
    //     nuevoNombre: string;
    // }

    //? LAS CLASES SON COMO LAS INTERFACES O TYPES */
    const suma = (avenger:Avenger):(string|undefined) =>{//*solo aceptan un parametro de tipo o clase o interface Avenger
        return avenger.nombreReal;
        //? return avenger.nuevoNombre;//se le agrega la propiedad si hay una interfaz con el mismo nombre de la clase
    }
    const variable:Avenger = new Avenger('Antman', 'Capitan');
    //* console.log(variable.nuevoNombre)//*undifined
    //? /////////////////////////////////////////

    //*notar que cuando no instanciamos completo nos puede salir así. Igualmente no será un error
    const antman = new Avenger('Antman', 'Capitan');
    
    console.log(antman);//*Avenger {avgAge: 35, nombre: 'Antman', equipo: 'Capitan', nombreReal: undefined, puedePelear: true}
    //*pero si instanciamos completo

    const antman1:Avenger = new Avenger('Antman', 'Capitan',"Scott Lang");
    console.log(antman1);//*Avenger {puedePelear: true, avgAge: 35, nombre: 'Antman', equipo: 'Capitan', nombreReal: 'Scott Lang', puedePelear: true }

    //?Para traer propiedades estaticas:
    console.log(Avenger.avgAge);//*llamamos a la clase directamente, no a la variable instanciada

    //*No podemos usar propiedades privadas fuera de la clase
    //! console.log(antman.nombre);

    //*LLAMAR METODOS
    console.log(antman.bio());//*Antman (Capitan)

    //*LLAMAR METODOS ESTATICOS
    console.log(Avenger.getAvgAge());//*35

    //**HERENCIA **//
    class Xmen extends Avenger {
        constructor(
            nombre: string,
            equipo: string,
            nombreReal: string
        ) {
            super(nombre, equipo, nombreReal);
        }
        getFullNameDesdeXmen(): string {
            //! return super.getFullName();//no podemos acceder a metodos privados
            return super.getName();//*si podemos acceder a metodos con protected
        }
        //*get->retorna y set->recibe un solo parametro
        get FullName(){
            return `${this.nombreReal}`;//*solo propiedades publicas o protegidas
        }
        set FullName(name:string){//*puede tener cualquier nombre el parametro
            if(name.length<3){
                throw new Error('El nombre debe tener mas de 3 caracteres');
            }

            this.nombreReal=name;
        }
    }

    const wolverine = new Xmen('Wolverine', 'Xmen', 'Logan');
    console.log(wolverine);//Xmen {nombre: 'Wolverine', equipo: 'Xmen', nombreReal: 'Logan', puedePelear: true}
    console.log(wolverine.getFullNameDesdeXmen());//Wolverine
    
    //*getters y setters, NO SE USA () para llamarlos
    wolverine.FullName = 'James Logan';//*SET, reemplaza al valor inicial instanciado
    //! wolverine.FullName = 'Ja';//saldria error por la condicion que pusimos en el set
    console.log(wolverine.FullName);//*GET, si no hubiera un set, obtendria el valor de la instancia

    //**ABSTRACT**//
    //*SOLO PUEDEN SER USADOS EN CLASES HIJAS, ES DECIR NO PUEDEN SER INSTANCIADOS

    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ){}
    }


    class Xmen1 extends Mutante {

        salvarMundo() {
            return 'Mundo a salvo!';
        }

    }

    class Villian extends Mutante {

        conquistarMundo() {
            return 'Mundo conquistado';
        }
    }

    //*solo pueden ser llamadas desde las clases hijas
    const wolverine1 = new Xmen1('Wolverine','Logan');
    const magneto = new Villian('Magneto','Magnus');
    
    //*solo usan sus propios metodos de las clases hijas
    console.log(wolverine1.salvarMundo());
    console.log(magneto.conquistarMundo());

    const printName = ( character: Mutante ):void => {//*solo acepta parametros de tipo Mutante(clase abstracta)
        console.log( character.realName );
    }

    printName( magneto );//*solo puede recibir un objeto de tipo Mutante
    
    

    //*Forma larga**//

    class Avenger2 {
        public readonly nombre: string;//?readonly no permite cambiar el valor despues de instanciarlo ni en la misma clase
        private equipo: string;
        public nombreReal?: string;
        public puedePelear: boolean=true;//*cuando inicializamos de esta manera y no es static, no es necesario colocarle en el constructor si es que quieres que tenga este valor
                                         //*siempre cuando se vaya a instanciar, además nunca podrías obtener ese valor ya que lo estarías reemplazando cuando lo instancies.
        static avgAge: number=35;

        constructor(nombre: string, equipo: string, nombreReal?: string) {//*tambien se puede usar el operador "?" para que sea optional
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
        }
        //*¿COMO LLAMAMOS UN METODO O PROPIEDAD PRIVADA?
        getNombre():string{
            return `${this.equipo} ${this.getFullName()}`;//*SI PODEMOS USAR METODOS Y PROPIEDADES PRIVADAS EN UN MISMO METODO
        }

        static getEnemigo():number{
            return Avenger2.avgAge+300;//*asi llamamos un valor de un metodo estatico
        }

        private getFullName(): string {
            return `${this.nombre} ${this.nombreReal}`;
        }
    }

    const falcon: Avenger2 = new Avenger2('Falcon', 'Capitan','Scott Lang');
    //! falcon.nombre = 'Falcon';//*no se puede cambiar el valor de una propiedad readonly
    console.log(falcon);

    //?llamar a una propiedad estatica
    console.log(Avenger2.avgAge);
    //?llamar un metodo estatico
    console.log(Avenger2.getEnemigo());
    //?llamar a un metodo y propiedad privada mediante un metodo publico
    //! console.log(falcon.getFullName());//*no podemos llamar directamente, pero si por un metodo publico que lo llame en la misma clase
    console.log(falcon.getNombre());
    

    

})();