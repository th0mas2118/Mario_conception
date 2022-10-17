import { IRenderable } from "../../interfaces/IRenderable";
import { IMovable } from "../../interfaces/IMovable";
import { Position } from "../Utils/Position";

export abstract class ACharacter implements IRenderable, IMovable{
    protected _name:string;
    protected _position:Position;
    constructor(_Pos:Position){
        this._position=_Pos;
    }
    render(){
        return this._name;
    }
    move(x: number, y: number) {
        this._position.X+=x;
        this._position.Y+=y;
    }
    getName(){
        return this._name;
    }
    get position():Position{
        return this._position;
    }
}