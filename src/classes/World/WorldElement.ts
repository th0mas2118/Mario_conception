import { Position } from "../Utils/Position";

export abstract class WorldElement {
    name: string;
    position: Position;

    protected char: string;

    constructor(pos: Position) {
        this.position = pos;
    }

    render(): string {
        return this.char;
    }
}