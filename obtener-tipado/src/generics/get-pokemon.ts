import axios from 'axios';//*data es el que brinda toda la informacion de la api(IMPORTANTEEEEEE)
import { Pokemon } from '../interfaces';
import { Move } from '../interfaces/pokemon';

export const getPokemon = async( pokemonId: number )=> {//*lo que se espera que se retorne es una Promise
    const resp = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    return resp.data;//*solo funciona con el data(es el que brinda toda la informacion de la api)
}

export const getPokemon1 = async( pokemonId: number ): Promise<Move[]>=> {//*Puedes especificar exactamente el tipo de promise. En este caso importamos Move de la interface Pokemon
    const resp = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    return resp.data.moves;//*ahora solo retorna el tipo Move[]
    //! return resp.data.name;//*si retornamos otro tipo nos saldrá error
}

