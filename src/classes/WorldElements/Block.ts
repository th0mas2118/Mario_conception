import { WorldElement } from "./WorldElement.js";

export class Block extends WorldElement {
    constructor(pos) {
        super(pos);

        this.name = "Block";
        this._char = "🟫";
    }
}