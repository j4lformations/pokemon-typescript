import {PokemonTerrestre} from "../abstract/PokemonTerrestre";

export class PokemonCasanier extends PokemonTerrestre {
    constructor(nom:string, poids: number, nbPattes: number, taille: number, private nbHeures: number) {
        super(nom, poids, nbPattes, taille);
    }

    toString() {
        let affichage = `je regarde la télé ${this.nbHeures}h par jour.\n\n`
        return super.toString() + affichage;
    }
}