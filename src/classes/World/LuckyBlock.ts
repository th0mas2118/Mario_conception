import { WorldElement } from "./WorldElement";

export class LuckyBlock extends WorldElement {
    constructor(pos) {
        super(pos);

        this.name = "Lucky Block";
        this.char = "?";
    }
}