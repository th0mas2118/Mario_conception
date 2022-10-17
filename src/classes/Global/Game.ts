export enum State {
    Idle,
    Running,
    Paused
}

export class Game {
    protected _state: State;
    protected _timer: number;
    protected _score: number;

    start() {
        this._score = 0;
        this._timer = 0;
        this._state = State.Running;
    }

    pause() {
        if (this._state !== State.Running) return;

        this._state = State.Paused;
    }

    resume() {
        if (this._state !== State.Paused) return;

        this._state = State.Running;
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