import { IRenderable } from "../interfaces/IRenderable";
import { IMovable } from "../interfaces/IMovable";
import { Position } from "./Utils/Position";

export abstract class ACharacter implements IRenderable, IMovable{
    name:string;
    position:Position;
    constructor(name:string){
        this.name=name;
        this.position.X=0;
        this.position.Y=0;
    }
    render(){
        return this.name;
    }
    move(x: number, y: number) {
        this.position.X+=x;
        this.position.Y+=y;
    }
    getName(){
        return this.name;
    }
}