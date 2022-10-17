import {ACharacter} from "./ACharacter";

export abstract class Monster extends ACharacter{
    constructor(name:string){
        super(name)
    }
}