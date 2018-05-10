import Dice from './dice.js';

export default class DiceToolbar {

    constructor() {

        this.redContainer = <ul class="dice-container" />
        this.whiteContainer = <ul class="dice-container" />

        this.element = <div class="toolbar dice-toolbar">{this.whiteContainer}</div>;
    }

    setWhiteDice(number) {
        if (number === this.whiteContainer.children.length) return;

        while (this.whiteContainer.children.length > number) {
             this.whiteContainer.removeChild(this.whiteContainer.children[0]);
        }

        while (this.whiteContainer.children.length < number) {
            const die = new Dice(6, 15);
            this.whiteContainer.appendChild(die.element);
        }
    }

    render() {
        return this.element;
    }
}