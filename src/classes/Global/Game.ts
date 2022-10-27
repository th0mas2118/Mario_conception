import { Goomba } from "../Character/Goomba";
import { Mario } from "../Character/Mario";
import { Position } from "../Utils/Position";
import { World } from "./World";

export enum State {
    Idle,
    Running,
    Paused
}

export class Game {
    protected _state: State;
    protected _timer: number;
    protected _score: number;
    protected _world: World;

    start() {
        this._score = 0;
        this._timer = 0;
        this._state = State.Running;

        this._world = new World();

        let mario = new Mario(new Position(3, 6), this._world);
        this._world.characters.push(mario);
        this._world.characters.push(new Goomba(new Position(6, 6)));

        this._world.render();

        if (typeof window !== 'undefined') {
            this.initControls(mario);
        }
    }

    pause() {
        if (this._state !== State.Running) return;

        this._state = State.Paused;
    }

    resume() {
        if (this._state !== State.Paused) return;

        this._state = State.Running;
    }

    initControls(playerCharacter: Mario) {
        window.addEventListener("DOMContentLoaded", e => {
            window.addEventListener("keyup", (e) => {
                if (this._state !== State.Running) return;

                if (e.key == "ArrowLeft") {
                    playerCharacter.move(-1, 0);
                    this._world.render();
                }
                if (e.key == "ArrowRight") {
                    playerCharacter.move(1, 0);
                    this._world.render();
                }
                if (e.key == " " || e.key == "Space") {
                    playerCharacter.jump();
                }
            })
        })
    }

    get state() {
        return this._state;
    }

    get timer() {
        return this._timer;
    }

    get score() {
        return this._score;
    }
}