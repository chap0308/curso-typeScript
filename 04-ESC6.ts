(function(){
    //* funcion antigua, tiene problemas( SECCION 7 - 51)

    function getNombre(){
        console.log("viejo getNombre");
    }

    //*nueva funcion, no tiene problemas

    const getName = () => {
        console.log("Holaaa")
    }

    getName();

    //*DESCTRUCTION

    type Avengers = {
        nick:string,
        ironman:string,
        vision:string,
        activo:boolean,
        poder:number
    }

    const avengers: Avengers={
        nick:"Samuel L. Jackson",
        ironman:"Robert Downey Jr",
        vision:"Paul Bettany",
        activo: true,
        poder: 1500.34324
    }

    const {poder, vision}=avengers;
    console.log(poder.toFixed(2), vision.toUpperCase());

    //*DESTRUCTION DE UN TYPE: forma más usada
    //* definiendo la funcion con un parametro(no existente)
    const printAvenger = ({nick, ironman}:Avengers) =>{//*no es un valor, es un parametro y se le puede hacer distruction
        console.log(`${nick} y ${ironman}`);
    }
    //*llamas la funcion con una variable(existente)
    printAvenger(avengers);

    const printAvenger1 = ({nick, ...resto}:Avengers) =>{//*tambien se puede aplicar el parametro resto con destruction
        console.log(`${nick} con un poder de ${resto.poder}`);
    }

    printAvenger1(avengers);

    //*tambien se puede hacer de esta manera
    const printAvenger2 = (avengers:{nick:string, vision:string}) =>{
        console.log(avengers.nick, avengers.vision);
    }

    //!const printAvenger3 = (avengers) =>{
    //!     console.log(avengers.nick, avengers.vision);//FALTA TIPEAR EL PARAMETRO
    //! }

    //*DESTRUCTION DE UN ARREGLO
    const avengersArr:[string,boolean,number,string,string]=["Cap. América",true,150.15,"enemigo","Bocky"];
    
    //* Si quieres saltarte un valor, pon una coma....
    const [capitan,ironman,daño, ,amigo]=avengersArr;//*PODEMOS NOMBRAR SU "KEY" DE CUALQUIER MANERA
    //*CONVIRTIENDO A OBJETO:
    console.log({capitan});
    console.log({ironman,daño,amigo});

    const [nombreCapitan, , ...resto] = avengersArr;
    console.log({nombreCapitan,resto});//*{nombreCapitan: 'Cap. América', resto: Array(3)}
    //?CREAS UN NUEVO ARRAY CON LOS VALORES RESTANTES
    console.log(resto);//*[150.15, 'enemigo', 'Bocky']

    //*FOR OF
    type DC={
        name:string,
        weapon:string
    }
    const robin:DC={
        name: "Robin",
        weapon: "pistola"
    }
    const batman:DC={
        name: "Batman",
        weapon: "batigancho"
    }
    const superman:DC={
        name: "Superman",
        weapon: "Capa"
    }
    const DCheroes:DC[]=[robin,batman,superman];
    //*NO ES RECOMENDADO LOS SIGUIENTES ARREGLOS PORQUE NO TIENEN EL MISMO TIPADO Y SERAN UN PROBLEMA CUANDO LOS ITERES, PERO IGUALMENTE SE PUEDEN TIPAR DE ESTAS DOS MANERAS
    const DCheroes1:(DC|boolean)[]=[robin,batman,superman,true];
    const DCheroes2:[DC,DC,DC,boolean] = [robin,batman,superman,true];

    for(const heroe of DCheroes){
        console.log(heroe.name);
    }

    //*SCOPE

    const numero:number = 10;

    if( numero >0 ){
    
        const numero:number = 10;//*El IF, crea un nuevo scope o ámbito de la variable, por lo que si es válido.
        console.log(numero);
    }
    console.log(numero);

})();

