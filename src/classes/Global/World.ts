import { ACharacter } from "../Character/ACharacter";
import { Grid } from "../Utils/Grid";
import { Position } from "../Utils/Position";
import { Block } from "../WorldElements/Block";
import { WorldElement } from "../WorldElements/WorldElement";

export class World {
    worldElements: WorldElement[] = [];
    characters: ACharacter[] = [];
    grid: Grid = new Grid();

    constructor() {
        this.addGround();
    }

    private addGround() {
        for (let y = 0; y < 2; y++) {
            for (let x = 0; x < 12; x++) {
                this.worldElements.push(new Block(new Position(x, 7 + y)));
            }
        }
    }

    render(): void {
        this.grid.reset();
        this.worldElements.forEach(x => this.grid.addToPosition(x, x.position));
        this.characters.forEach(x => this.grid.addToPosition(x, x.position));

        let grid = this.grid.grid;
        let finalString = "";

        grid.forEach(row => {
            row.forEach(column => {
                if (!column) {
                    finalString += "⬜️";
                }
                finalString += column;
            })

            finalString += "\n";
        })

        console.log(finalString);
    }
}