import { ACharacter } from "./ACharacter";

export class Mario extends ACharacter{
    life:number;
    nb_piece:number;
    constructor(){
        super("$");
        this.life=3;
        this.nb_piece=0;
    }
    jump():void{
        console.log("jump");
    }
    addPiece():void{
        this.nb_piece++;
    }
}