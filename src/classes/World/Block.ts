import { WorldElement } from "./WorldElement";

export class Block extends WorldElement {
    constructor() {
        super();

        this.name = "Block";
        this.interactable = false;
        this.char = "□";
        this.breakable = false;
    }
}