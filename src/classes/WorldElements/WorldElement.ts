import { IRenderable } from "../../interfaces/IRenderable";
import { Position } from "../Utils/Position";

export abstract class WorldElement implements IRenderable {
    name: string;
    position: Position;

    protected _char: string;

    constructor(pos: Position) {
        this.position = pos;
    }

    render(): string {
        return this._char;
    }
}