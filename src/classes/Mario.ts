import { Character } from "../interfaces/Character";

export class Mario implements Character{
    name:string;
    life:number;
    constructor(){
        this.name="its_me_mario";
        this.life=3;
    }
    render(){
        console.log("$");
    }
    jump(){
        console.log("jump");
    }
}