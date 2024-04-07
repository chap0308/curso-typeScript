import powers from "./powers";

export const a:number=4;

export const variableB:string="hello";

export class Hero {
    constructor(
        public name: string,
        public powerId: number,
        public age: number
    ) {}

    get power():string { 
        return powers.find( power => power.id === this.powerId )?.desc || 'not found';//*tenemos que usar el "?" porque puede salir undifined y para asegurarnos usamos eso.
                                                                                    //*si id=3, entonces saldrá undifined
    }
}

export class Hero2 { }
export class Hero3 { }
export class Hero4 { }

export const PI = 3.1416;
export const miNombre = 'Fernando';