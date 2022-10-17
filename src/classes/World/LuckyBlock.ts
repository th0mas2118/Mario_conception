import { WorldElement } from "./WorldElement";

export class LuckyBlock extends WorldElement {
    constructor() {
        super();

        this.name = "Lucky Block";
        this.interactable = true;
        this.char = "?";
        this.breakable = false;
    }
}