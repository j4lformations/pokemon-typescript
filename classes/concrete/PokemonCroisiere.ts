import {PokemonAquatique} from "../abstract/PokemonAquatique";

export class PokemonCroisiere extends PokemonAquatique {

    getVitesse(): number {
        return (this.getPoids() / 25 * this.getNbNageoires()) / 2;
    }
}