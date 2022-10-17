import { ACharacter } from "../Character/ACharacter";
import { Grid } from "../Utils/Grid";
import { WorldElement } from "../WorldElements/WorldElement";

export class World {
    worldElements: WorldElement[] = [];
    characters: ACharacter[] = [];
    grid: Grid = new Grid();

    render(): void {
        this.worldElements.forEach(x => this.grid.addToPosition(x, x.position));
        this.characters.forEach(x => this.grid.addToPosition(x, x.position));
        console.table(this.grid.grid);
    }
}