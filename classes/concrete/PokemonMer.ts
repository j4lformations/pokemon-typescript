import {PokemonAquatique} from "../abstract/PokemonAquatique";

export class PokemonMer extends PokemonAquatique {
    getVitesse(): number {
        return this.getPoids() / 25 * this.getNbNageoires();
    }
}