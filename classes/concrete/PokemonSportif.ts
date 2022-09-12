import {PokemonTerrestre} from "../abstract/PokemonTerrestre";

export class PokemonSportif extends PokemonTerrestre {
    constructor(nom: string, poids: number, nbPattes: number, taille: number, private frequenceCardiaque: number) {
        super(nom, poids, nbPattes, taille);
    }

    toString() {
        let affichage = `Ma frequence cardiaque est de ${this.frequenceCardiaque} pulsations par minute.\n\n`
        return super.toString() + affichage;
    }
}