import { Monster } from "./Monster";

class Goomba extends Monster{
    live:boolean;
    constructor(){
        super("%");
        this.live=true;
    }
}