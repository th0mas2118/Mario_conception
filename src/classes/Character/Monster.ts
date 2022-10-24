import { Position } from "../Utils/Position";
import { ACharacter } from "./ACharacter";

export abstract class Monster extends ACharacter {
    constructor(_Pos: Position) {
        super(_Pos);
    }
}