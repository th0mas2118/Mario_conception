import { Goomba } from "./classes/Character/Goomba";
import { Mario } from "./classes/Character/Mario";
import { World } from "./classes/Global/World";
import { Position } from "./classes/Utils/Position";
import { Block } from "./classes/WorldElements/Block";

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

world.render();

export default main;