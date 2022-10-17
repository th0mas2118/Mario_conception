import { Mario } from "./classes/Mario";
function main(): string {
    const hello: string = "Hello, World!";
    return hello;
}

const result: any = main();
//console.log(result);


import { World } from "./classes/Global/World";
import { Position } from "./classes/Utils/Position";
import { Block } from "./classes/WorldElements/Block";

let world = new World();

world.render();

export default main;