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
exports.PokemonAquatique = void 0;
var Pokemon_1 = require("./Pokemon");
var PokemonAquatique = /** @class */ (function (_super) {
    __extends(PokemonAquatique, _super);
    function PokemonAquatique(nom, poids, nbNageoires) {
        var _this = _super.call(this, nom, poids) || this;
        _this.nbNageoires = nbNageoires;
        return _this;
    }
    PokemonAquatique.prototype.getNbNageoires = function () {
        return this.nbNageoires;
    };
    PokemonAquatique.prototype.toString = function () {
        var affichage = "J'ai ".concat(this.nbNageoires, " nageoires.\n\n");
        return _super.prototype.toString.call(this) + affichage;
    };
    return PokemonAquatique;
}(Pokemon_1.Pokemon));
exports.PokemonAquatique = PokemonAquatique;
