import { Position } from "../Utils/Position";
import { ACharacter } from "./ACharacter";

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
        this.move(0,1)
        setTimeout(()=>{
            this.move(0,-1)
        },300)
    }
    addPiece(): void {
        this._nb_piece++;
    }
}