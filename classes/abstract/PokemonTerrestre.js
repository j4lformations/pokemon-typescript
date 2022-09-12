"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.PokemonTerrestre = void 0;
var Pokemon_1 = require("./Pokemon");
var PokemonTerrestre = /** @class */ (function (_super) {
    __extends(PokemonTerrestre, _super);
    function PokemonTerrestre(nom, poids, nbPattes, taille) {
        var _this = _super.call(this, nom, poids) || this;
        _this.nbPattes = nbPattes;
        _this.taille = taille;
        return _this;
    }
    PokemonTerrestre.prototype.getVitesse = function () {
        return this.nbPattes * this.taille * 3;
    };
    PokemonTerrestre.prototype.toString = function () {
        var affichage = "J'ai ".concat(this.nbPattes, " pattes\nMa taille est de ").concat(this.taille, "m\n");
        return _super.prototype.toString.call(this) + affichage;
    };
    return PokemonTerrestre;
}(Pokemon_1.Pokemon));
exports.PokemonTerrestre = PokemonTerrestre;
