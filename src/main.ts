import { Goomba } from "./classes/Character/Goomba.js";
import { Mario } from "./classes/Character/Mario.js";
import { World } from "./classes/Global/World.js";
import { Position } from "./classes/Utils/Position.js";
import { BreakableBlock } from "./classes/WorldElements/BreakableBlock.js";
import { LuckyBlock } from "./classes/WorldElements/LuckyBlock.js";

function main(): string {
    const hello: string = "Hello, World!";
    return hello;
}

const result: any = main();
//console.log(result);

let world = new World();
let mario = new Mario(new Position(3, 6));

world.characters.push(mario);
world.characters.push(new Goomba(new Position(6, 6)));

world.worldElements.push(new LuckyBlock(new Position(4, 3)));
world.worldElements.push(new BreakableBlock(new Position(6, 3)));
world.worldElements.push(new LuckyBlock(new Position(7, 3)));
world.worldElements.push(new BreakableBlock(new Position(8, 3)));
world.worldElements.push(new LuckyBlock(new Position(9, 3)));


world.render();

export default main;