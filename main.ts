import {PokemonSportif} from "./classes/concrete/PokemonSportif";
import {PokemonCasanier} from "./classes/concrete/PokemonCasanier";
import {PokemonMer} from "./classes/concrete/PokemonMer";
import {PokemonCroisiere} from "./classes/concrete/PokemonCroisiere";

const pikachu = new PokemonSportif('Pikachu', 5.1, 2, 0.85, 120);
console.log(pikachu.toString());

const salameche = new PokemonCasanier('Salameche', 12, 2, 0.65, 8);
console.log(salameche.toString());

const rondoudou = new PokemonMer('Rondoudou', 45, 2);
console.log(rondoudou.toString());

const bulbizarre = new PokemonCroisiere('Bulbizarre', 15, 3);
console.log(bulbizarre.toString());
