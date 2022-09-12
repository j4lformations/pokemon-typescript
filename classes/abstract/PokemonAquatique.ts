import {Pokemon} from "./Pokemon";

export abstract class PokemonAquatique extends Pokemon {
    constructor(nom: string, poids: number, private nbNageoires: number) {
        super(nom, poids)
    }

    getNbNageoires() {
        return this.nbNageoires;
    }

    toString() {
        let affichage = `J'ai ${this.nbNageoires} nageoires.\n\n`;
        return super.toString() + affichage;
    }
}