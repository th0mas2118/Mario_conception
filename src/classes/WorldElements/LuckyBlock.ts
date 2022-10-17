import { IInteractable } from "../../interfaces/IInteractable";
import { WorldElement } from "./WorldElement";

export class LuckyBlock extends WorldElement implements IInteractable {
    constructor(pos) {
        super(pos);

        this.name = "Lucky Block";
        this._char = "?";
    }

    interact(): void {
        console.log("Interaction avec " + this.name);
    }
}