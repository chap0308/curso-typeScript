(function () {
    //* TIPADO DE OBJETOS
    //? TAMBIEN SE PUEDE USAR EL PARAMETRO OPCIONAL
    //? EL TIPADO DE UN METODO ES SIMILAR AL DE UNA FUNCION
    let flash: {name: string, edad?: number, poderes: string[], getNombre?: () => string} ={
        name: 'Barry Alen',
        edad: 24,
        poderes: ['Puede correr muy rapido', 'Viajar por el tiempo']
    }

    flash ={
        name: 'Clark Kent',
        // edad: 60,
        poderes: ['Puede volar', 'Super velocidad'],
        getNombre(){
            return this.name;
        }
    }

    console.log(flash);

    //* TYPES: los tipos sólo existen en TypeScript para brindarnos control sobre los objetos.
    //*crear nuestro tipos
    type Heroe = {
        //*EL ORDEN NO IMPORTA
        name: string//*puede terminar en , o ; o no
        edad?: number;
        poderes: (string|number)[],
        aptitudes?: string[],
        getNombre: () => string;
        atacar?: () => void;//?NO ES RECOMENDADO COLOCAR "?" A LOS METODOS, OCASIONAN ERRORES, ejemplo en 06-interface
        //*tambien se pueden declarar de esta manera, pero es menos usada
        getFullAddress?(id:number, zip:string, city:string): string;
        getFullAddress?(id:number, zip:string, city:string): Heroe;
        //*
    }

    let batman: Heroe = {
        name: 'Bruce Wayne',
        edad: 40,
        poderes: ['Puede correr muy rapido', 'Viajar por el tiempo'],
        getNombre(){
            return this.name;
        
        }
    }

    let superman: Heroe = {
        name: 'Clark Kent',
        // edad: 60,
        poderes: ['Puede volar', 'Super velocidad',2],
        getNombre(){
            return this.name;
        }
    }

    let myCustomVariable: (string|number|Heroe) = 'Hola';
    console.log(myCustomVariable);
    myCustomVariable = 20;
    console.log(myCustomVariable);
    myCustomVariable = {
        name: 'Bruce Wayne',
        edad: 40,
        poderes: ['Puede correr muy rapido', 'Viajar por el tiempo'],
        getNombre(){
            return this.name;
        }

    }
    console.log(typeof myCustomVariable);//*objeto, en javascript no existe el tipo Heroe

    //*TIPADO DE OBJETOS DENTRO DE ARRAYS
    type Villano = {
        nombre: string,
        poder: string,
        ataque?: () => void,
    }
    //*Más usado
    const villanos1: Villano[] = [{
        nombre:"Lex Luthor",
        poder:"no tiene",
        ataque(){
            console.log("Ataque");
        }
    },{
        nombre:"James Logan",
        poder:"Regeneración"
    }];

    const villanos2: {nombre: string, poder: string, ataque?: () => void}[] = [{
        nombre:"Lex Luthor",
        poder:"no tiene",
        ataque(){
            console.log("Ataque");
        }
    },{
        nombre:"James Logan",
        poder:"Regeneración"
    }];

    const villano3: Villano={
        nombre:"Thanos",
        poder:"gemas"
    };
    console.log(villanos1);

    //*ASIGNACION DE TIPOS A UNA VARIABLE
    //! let mutable: [string | string[] ];//esto sería una tupla
    let mystique: Villano | Heroe | Villano[] ;//* INTERESANTE, LLAMADO UNION DE TIPOS
    mystique = villano3;
    mystique = superman;
    mystique = villanos1;//* NO PUEDE SER Villanos solo, porque villanos1 es de tipo Villano[]

})();