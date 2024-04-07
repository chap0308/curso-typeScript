(function () {
    const hero: string = 'Flash';

    //* tipado de funciones, se le coloca despues del parentesis
    function saludar(nombre:string) :string{
        return `Hola ${nombre} - ${hero}`;
    } 

    //?Ambos dan el mismo resultado
    const saludo= saludar('Barry');//*más entendible
    console.log(saludo);

    const saludo1= saludar;
    console.log(saludo1('Barry'));//tambien funciona así, tiene más aceptaciones(mirar linea 65)

    //* Indicacion de como no usar:

    const activarBatiseñal = () => {
        return 'Batiseñal activada';
    }
    const valor= activarBatiseñal();
    //! const valor= activarBatiseñal;
    console.log(valor);

    //* TIPOS DE PARAMETROS EN FUNCIONES
    const contar = (heroes:any[]):number => {
        return heroes.length;
    }
    const superheroes = ['Flash', 'Arrow', 'Superman', 2,3,4,true,false];
    console.log(contar(superheroes));//8

    const contar1 = (heroes:(string|number)[]):number => {
        return heroes.length;
    }
    const superheroes1 = ['Flash', 'Arrow', 'Superman', 2,3,4];
    console.log(contar1(superheroes1));//6

    const contar2 = (heroes:string[]):number => {
        return heroes.length;
    }
    const superheroes2 = ['Flash', 'Arrow', 'Superman', 'Linterna Verde'];
    console.log(contar2(superheroes2));//4

    //*

    const fullName = (nombre: string, apellido: (string | boolean)): string => {
        return `${nombre} ${apellido}`;
    }
    const name = fullName('Barry', 'Allen');//*fullName('Barry', true);

    console.log(name);

    //*args-optional: colocar ? al final de la variable
    const fullName2 = (nombre: string, apellido?: string): string => {
        return `${nombre} ${apellido || "---" }`;
    }
    const name2 = fullName2('Barry');
    console.log(name2);

    //*args-default: colocar un valor por defecto
    const fullName3 = (nombre: string, apellido?: string, upper: boolean = false ): string => {//el argumento optional siempre debe ir al final para no tener errores
        if(upper){
            return `${nombre} ${apellido || "---" }`.toUpperCase();
        } else{
            return `${nombre} ${apellido || "---" }`;
        }
    }
    const name3 = fullName3('Barry', 'Allen', true);
    console.log(name3);

    //* parametros REST: colocar ... antes del nombre de la variable

    const fullName4 = ( firstName:string, ...restArgs: string[]): string => {
        return `${firstName} ${restArgs.join(' ')}`
    }
    console.log(fullName4('Iron man', 'Thor', 'Nick Fury', 'Spider-man'));

    let nombres: string[]=[];
    const fullName5 = ( firstName:string, ...restArgs: string[]): string[] => {
        nombres=[
            `${firstName} ${restArgs.join(' ')}`,
            `${firstName} ${restArgs.join(', ')}`
        ]
        return nombres;
    }
    console.log(fullName5('Barry', 'Allen', 'Banner', 'Batman'));
    //! console.log(fullName4('Barry', 'Allen', 3, true));

    //*caracteristicas de las funciones

    const addNumbers = (a: number, b: number):number => a+b;
    const greet = (name: string): string => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;

    //** TIPO FUNCTION **// Despues de los dos puntos ":" es el tipo de dato
    // * let myFunction: Function;//no es muy usada
    //* let myFunction: () => void;//*es una variable de tipo function que no retorna nada
    //* let myFunction: () => number;//asi deben ser declarados
    let myFunction: (y:number, z:number) => number;//*es una variable de tipo function que solo acepta dos paremetros de tipo number y que solo retorna un number

    // myFunction=10;
    // console.log(myFunction);

    //* Acá no funciona 
    //! myFunction=addNumbers(1,2);
    //! console.log(myFunction);

    myFunction=addNumbers;
    console.log(myFunction(1,2));

    // myFunction=greet('Barry');
    // console.log(myFunction);

    // myFunction=saveTheWorld();
    // console.log(myFunction);

    //*
    const noHaceNada = (numero:number, texto:string, booleano:boolean, arreglo:any[]):void => {}
    const noHaceNada1 = (numero:number, texto:string, booleano:boolean, arreglo:string[]) => {}
    const noHaceNada2 = (numero:number, texto:string, booleano:boolean, arreglo:(string|boolean)[]) => {}

    let noHaceNadaTampoco: (n:number, t:string, b:boolean, a:any[]) => void;

    noHaceNadaTampoco = noHaceNada;

})();