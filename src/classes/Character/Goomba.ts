import { Position } from "../Utils/Position.js";
import { Monster } from "./Monster.js";

export class Goomba extends Monster {
    _live: boolean;
    constructor(_Pos: Position) {
        super(_Pos)
        this._name = "🍄";
        this._live = true;
    }
}