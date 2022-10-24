import { WorldElement } from "./WorldElement";

export class Block extends WorldElement {
    constructor(pos) {
        super(pos);

        this.name = "Block";
        this._char = "🟫";
    }
}