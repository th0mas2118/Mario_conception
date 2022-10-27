import { World } from "../Global/World";
import { Position } from "../Utils/Position";
import { ACharacter } from "./ACharacter";

export class Mario extends ACharacter {
    _life: number;
    _nb_piece: number;
    _world: World;

    constructor(_Pos: Position, world) {
        super(_Pos);
        this._name = "🦸‍♂️".slice(0, 2);
        this._life = 3;
        this._nb_piece = 0;
        this._world = world;
    }

    jump(): void {
        this.move(0, 1)

        this._world.render();

        setTimeout(() => {
            this.move(0, -1)
            this._world.render();
        }, 300)
    }
    addPiece(): void {
        this._nb_piece++;
    }
}