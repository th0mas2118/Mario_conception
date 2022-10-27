import { Game } from "./classes/Global/Game";

let game = new Game();

<<<<<<< HEAD
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

//VERSION NAVIATEUR
// window.addEventListener("DOMContentLoaded",e=>{
//     window.addEventListener("keyup",(e)=>{
//         if(e.key=="ArrowLeft"){
//             mario.move(-1,0)
//         }
//         if(e.key=="ArrowRight"){
//             mario.move(1,0)
//         }
//         if(e.key==" " || e.key=="Space"){
//             mario.jump()
//         }
//     })
// })

export function view(){
    world.render()
}
=======
game.start();
>>>>>>> main
