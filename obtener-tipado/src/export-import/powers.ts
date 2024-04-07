export interface Power {//*se puede exportar interfaces, pero de esta manera
    id: number;
    desc: string;
}
export type Power2 = {//*se puede exportar interfaces, pero de esta manera
    nombre: string;
    debilidad: string;
}

const powers: Power[] = [
    {
        id: 1,
        desc: 'Money'
    },
    {
        id: 2,
        desc: 'Drugs'
    },
]

export default powers