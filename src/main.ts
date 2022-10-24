import { Goomba } from "./classes/Character/Goomba";
import { Mario } from "./classes/Character/Mario";
import { World } from "./classes/Global/World";
import { Position } from "./classes/Utils/Position";
import { Block } from "./classes/WorldElements/Block";
import { BreakableBlock } from "./classes/WorldElements/BreakableBlock";
import { LuckyBlock } from "./classes/WorldElements/LuckyBlock";

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

window.addEventListener("DOMContentLoaded",e=>{
    window.addEventListener("keyup",(e)=>{
        if(e.key=="ArrowLeft"){
            mario.move(-1,0)
        }
        if(e.key=="ArrowRight"){
            mario.move(1,0)
        }
        if(e.key==" " || e.key=="Space"){
            mario.jump()
        }
    })
})

export function view(){
    world.render()
}