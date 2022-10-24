import { IInteractable } from "../../interfaces/IInteractable.js";
import { WorldElement } from "./WorldElement.js";

export class BreakableBlock extends WorldElement implements IInteractable {
    constructor(pos) {
        super(pos);

        this.name = "BreakableBlock";
        this._char = "🟧";
    }

    interact(): void {
        console.log("Interaction avec " + this.name + ": Destruction");
    }
}