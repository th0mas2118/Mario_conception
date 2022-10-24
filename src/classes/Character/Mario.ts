import { Position } from "../Utils/Position.js";
import { ACharacter } from "./ACharacter.js";

export class Mario extends ACharacter {
    _life: number;
    _nb_piece: number;
    constructor(_Pos: Position) {
        super(_Pos);
        this._name = "🦸‍♂️".slice(0, 2);
        this._life = 3;
        this._nb_piece = 0;
    }
    jump(): void {
        console.log("jump");
    }
    addPiece(): void {
        this._nb_piece++;
    }
}