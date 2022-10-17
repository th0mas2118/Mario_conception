import { WorldElement } from "./WorldElement";

export class BreakableBlock extends WorldElement {
    constructor() {
        super();

        this.name = "Block";
        this.interactable = true;
        this.char = "□";
        this.breakable = true;
    }
}