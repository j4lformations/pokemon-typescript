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
exports.PokemonCasanier = void 0;
var PokemonTerrestre_1 = require("../abstract/PokemonTerrestre");
var PokemonCasanier = /** @class */ (function (_super) {
    __extends(PokemonCasanier, _super);
    function PokemonCasanier(nom, poids, nbPattes, taille, nbHeures) {
        var _this = _super.call(this, nom, poids, nbPattes, taille) || this;
        _this.nbHeures = nbHeures;
        return _this;
    }
    PokemonCasanier.prototype.toString = function () {
        var affichage = "je regarde la t\u00E9l\u00E9 ".concat(this.nbHeures, "h par jour.\n\n");
        return _super.prototype.toString.call(this) + affichage;
    };
    return PokemonCasanier;
}(PokemonTerrestre_1.PokemonTerrestre));
exports.PokemonCasanier = PokemonCasanier;
