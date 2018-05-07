import Dice from './dice.js';

export default class CardDungeon {

    constructor(config) {
        

        this.title = <header class="dungeon-title"/>;
        this.image = <img class="dungeon-image" src="https://placekitten.com/250/250" width="250" height="250" />
        this.body = <p class="dungeon-body" />;
        this.def = <ul class="dungeon-stats-def" />;
        this.atk = <ul class="dungeon-stats-atk" />;
        this.footer = <footer class="dungeon-footer" />;

        this.container = (
            <section class="dungeon">
                {this.title}
                {this.image}
                
                <div class="dungeon-stats">
                    {this.def}
                    {this.atk}
                </div>
                {this.footer}
            </section>
        );

        this.toolbar = <span>Toolbar</span>;
        //if(config.color) this.setColor(config.color);
    }

    /**
     * Different modes for different situations
     * Alpha Mode when it is your turn
     * Beta Mode when it is someone else's turn
     * Gamma Mode when you are a spectator
     */
    alphaMode(data) {
        console.log(data);
        this.clearCard();

        this.title.innerText = data.title;
        this.body.innerText = data.body;
        this.footer.innerText = data.footer;

        this.createDice(this.def, data.stats.def);
        this.createDice(this.atk, data.stats.atk);

        this.show();
    }

    betaMode(data) {
        this.alphaMode(data);
    }

    createDice(container, stats) {
        for(let i of stats) {
            const die = new Dice(i);
            container.appendChild(die.element);
        }
    }

    clearCard() {
        this.title.innerText = "";
        this.body.innerText = "";
        this.footer.innerText = "";

        this.def.innerHTML = "";
        this.atk.innerHTML = "";
    }
    fade() {
        this.container.style.opacity = 0.5;
    }

    show() {
        this.container.style.opacity = 1;
    }

    disable() {
        this.fade();
    }
}