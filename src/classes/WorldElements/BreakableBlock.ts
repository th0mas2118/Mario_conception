import { IInteractable } from "../../interfaces/IInteractable";
import { WorldElement } from "./WorldElement";

export class BreakableBlock extends WorldElement implements IInteractable {
    constructor(pos) {
        super(pos);

        this.name = "Block";
        this._char = "□";
    }

    interact(): void {
        console.log("Interaction avec " + this.name + ": Destruction");
    }
}