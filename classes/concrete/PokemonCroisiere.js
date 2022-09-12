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
exports.PokemonCroisiere = void 0;
var PokemonAquatique_1 = require("../abstract/PokemonAquatique");
var PokemonCroisiere = /** @class */ (function (_super) {
    __extends(PokemonCroisiere, _super);
    function PokemonCroisiere() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PokemonCroisiere.prototype.getVitesse = function () {
        return (this.getPoids() / 25 * this.getNbNageoires()) / 2;
    };
    return PokemonCroisiere;
}(PokemonAquatique_1.PokemonAquatique));
exports.PokemonCroisiere = PokemonCroisiere;
