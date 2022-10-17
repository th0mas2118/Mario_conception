import { IRenderable } from "../../interfaces/IRenderable";
import { Position } from "./Position";

export class Grid {
    protected _grid = [
        ['', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '']
    ]

    addToPosition(entity: IRenderable, position: Position) {
        this._grid[position.X][position.Y] = entity.render();
    }

    get grid() {
        return this._grid;
    }
}