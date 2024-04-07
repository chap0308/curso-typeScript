(function(){

    const msg: string ="Hola mundo!!";

    //Aserciones: son una forma de hacer que el compilador sepa que tipo de dato es una variable
    const poder: any ='100';
    const largoDelPoder: number = (poder as string).length;//se le coloca el tipo de valor a la variable declarada como any
    console.log(largoDelPoder);

    //Arreglos: a diferencia con la tupla, tiene esta sintaxis
    const numbers1: (string | number | boolean)[] = [1,2,3,4,5,'6',7,8,9,10];
    const numbers: number[] = [1,2,3,4,5];
    

    let arr:any = [1,2,3,4,5,6,7,8,9,10]; //acepta cualquier tipo de dato, a pesar de ser un array u objeto
    //no es necesario colocarle [] despues del any

    const villains: string[] = ['Omega Rojo', 'Dormamu', 'Duende Verde'];

    villains.forEach(v => console.log(v.toUpperCase()));

    console.log(villains);

    

    //*tuples-tuplas: tipo de dato que contiene una coleccion de valores, pero estos valores pueden ser de diferentes tipos
    const hero: [string, number, number[]] = ['Dr Strange', 100, [3,4,5]];
    //*const hero: [string, number, Array<Number>] = ['Dr Strange', 100, [3,4,5]];
    //* const hero2: [string, number, (number|boolean)[]] = ['Dr Strange', 100, [3,4,5,true]];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = [2,4,5];

    console.log(hero);

    //*maneras de usar tuplas(se recomienda usar de esta manera)
    const DCheroes1:[string,string,number,boolean] = ["robin","batman",562,true];
    //*o tambien de esta manera(es más flexible)
    const DCheroes:(string|number|boolean)[]=["robin","batman",352,true];
    

    //enum: enumeracion de valores
    enum Color {
        Red = 'Rojo',
        Green = 'Verde',
        Blue = 'Azul'
        //Yellow = 'Amarillo'
        //Black = 'Negro'
    }
    //myColor es de tipo Color(asi se le declara)
    let myColor: Color = Color.Green;
    console.log(myColor);

    enum orden {
        min,//0
        medium,//toma el valor siguiente
        max//2
    }
    let orden1: orden = orden.max;
    console.log(orden1);//muestra 2

    enum AudioLevel {
        min = 1,
        medium,//toma el valor siguiente
        max = 10
    }
    //currentAudio es de tipo AudioLevel(asi se le declara)
    let currentAudio: AudioLevel = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);

    //void
    function returnNumber(): void {
    }

    const a = returnNumber();

    console.log(a)

    //never: indica que la funcion termina en un error(explota)
    const error = (message: string): (never | number) => {
        if(false){//cambiar a true para que se rompa
            throw new Error('Error');
        }
        
        return 1;
    }

    error('Error');
    console.log('Hola');

    //strictNullChecks: activa el chequeo de nulls
    // let isActive: boolean = null; // si se le considera null si es que ponemos stricNullCheks como false
    // Boolean puede tomar 4 valores en teoria: true, false, null, undefined
    // pero en el lenguaje TypeScript con el strictNullChecks se define que Boolean puede tomar solo 2 valores: true o false

})();
