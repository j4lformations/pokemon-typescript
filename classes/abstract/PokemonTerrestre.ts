import {Pokemon} from "./Pokemon";

export abstract class PokemonTerrestre extends Pokemon {
    protected constructor(nom: string, poids: number, private nbPattes: number, private taille: number) {
        super(nom, poids);
    }

    getVitesse(): number {
        return this.nbPattes * this.taille * 3;
    }
    toString(): string {
        let affichage = `J'ai ${this.nbPattes} pattes\nMa taille est de ${this.taille}m\n`;
        return super.toString() + affichage;
    }
}