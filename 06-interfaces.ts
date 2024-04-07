(function () {
    //*INTERFACES**/
    //*SON SIMILARES A LOS TYPES, PERO CON LA DIFERENCIA DE QUE LAS INTERFACES PUEDEN EXPANDIRSE
    interface Heroe {
        //*EL ORDEN NO IMPORTA
        name: string//*puede terminar en , o ; o no
        edad?: number;
        poderes: (string|number)[],
        aptitudes?: string[],
        getNombre: (id:number, zip:string, city:string) => string;
        atacar?: () => void;
        //*tambien se pueden declarar de esta manera, pero es menos usada
        getFullAddress?(id:number, zip:string, city:string): string;
        getFullAddress2?(id:number, zip:string, city:string): nuevainterface;
        //*
        nuevainterface?: nuevainterface;//*interfaz secundaria, debe ser declarada despues
    }
    interface nuevainterface{
        id:number,
        zip:string,
        city:string
    }
    //*tambien funciona con type
    //* type nuevainterface={
    //*     id:number,
    //*     zip:string,
    //*    city:string
    //* }

    //*INTERFACES CON OBJETOS
    let batman: Heroe = {
        name: 'Bruce Wayne',
        edad: 40,
        poderes: ['Puede correr muy rapido', 'Viajar por el tiempo'],
        getNombre(){
            return this.name;
        
        },
        nuevainterface:{
            id:1,
            zip:'12345',
            city:'New York'
        }
    }
    console.log(batman.nuevainterface);
    console.log(batman.nuevainterface?.city);

    let superman: Heroe = {
        name: 'Clark Kent',
        // edad: 60,
        poderes: ['Puede volar', 'Super velocidad',2],
        getNombre(id:number, zip:string, city:string){
            return `${id} ${zip} ${city} ${this.name}`;
        },
        getFullAddress(id:number, zip:string, city:string){
            return `${id} ${zip} ${city}`;
        }
    }
    console.log(superman.getNombre(1,'12345','New York'));    
    //? console.log(superman.getFullAddress(1,'12345','New York'));//es por esto que se deben colocar "?" en los metodos
    //! console.log(superman.getFullAddress!(1,'12345','New York'));//pero sí podemos usar el "!" si es que es un caso extremo, este operador hará que typescript "confie" en nosotros y permitirá que deje de salir error

    //*INTERFACES CON CLASES 
    //*tener en cuenta que se usa "implements" para colocar la interface
    class Persona implements Heroe{
        constructor(
            public name: string,
            public edad: number,
            public poderes: string[]
        ){}
        
        getNombre(id:number, zip:string, city:string){
            return `${id} ${zip} ${city} ${this.name}`;
        }
    }

    class Dos implements Heroe, nuevainterface{//*SE PUEDEN TENER MÁS DE UNA INTERFAZ EN UNA CLASE
        constructor(
            public name: string,
            public edad: number,
            public poderes: string[],
            public id:number,
            public zip:string,
            public city:string
        ){}
        
        getNombre(){
            return `${this.id} ${this.zip} ${this.city} ${this.name}`;
        }
    }

    //*INTERFACES CON FUNCIONES, no es muy común porque normalmente tipamos los datos cuando creamos la funcion
    interface addTwoNumbers{
        (a:number,b:number):number
        // (a:number[]):number
    }

    // let addNumbers:addTwoNumbers;
    const addNumbers: addTwoNumbers=(a:number,b:number)=>{
        return a+b;
    }
    console.log(addNumbers(1,2));
    
    //*NORMALMENTE:
    const addNumbers2 = (a:number,b:number):number=>{
        return a+b;
    }
    console.log(addNumbers2(5,6));

    //*UNION DE INTERFACES
    interface Carro{
        llantas:number;
        modelo:string;
    }
    
    interface Volvo extends Carro{
        seguro:boolean;
    }
    
    const volvo:Volvo = {
        llantas: 4,
        modelo:"sedan",
        seguro:true
        
    }
    console.log(volvo);

})()