import { Position } from "../Utils/Position.js";
import { ACharacter } from "./ACharacter.js";

export abstract class Monster extends ACharacter {
    constructor(_Pos: Position) {
        super(_Pos);
    }
}