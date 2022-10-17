export abstract class WorldElement {
    name: string;
    protected char: string;
    protected interactable: boolean;
    protected breakable: boolean;

    render(): string {
        return this.char;
    }

    interact(): void {
        if (!this.interactable) return;

        console.log("Interaction avec " + this.name);
    }
}