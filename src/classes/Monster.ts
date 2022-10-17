import { Character } from "../interfaces/Character";

export abstract class Monster implements Character{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    getName():string{
        return this.name;
    }
    render(){
    }
}