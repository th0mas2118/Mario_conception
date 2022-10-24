import { IRenderable } from "../../interfaces/IRenderable.js";
import { Position } from "../Utils/Position.js";

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