"use strict";
exports.__esModule = true;
exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(nom, poids) {
        this.nom = nom;
        this.poids = poids;
    }
    Pokemon.prototype.getNom = function () {
        return this.nom;
    };
    Pokemon.prototype.getPoids = function () {
        return this.poids;
    };
    Pokemon.prototype.toString = function () {
        return "Je suis le Pokemon ".concat(this.nom, "\nMon poids est ").concat(this.poids, " kg\nMa vitesse est ").concat(this.getVitesse(), " km/h\n");
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
