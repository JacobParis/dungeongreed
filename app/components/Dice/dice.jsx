export default class Dice {
    constructor(number, scale) {
        this.number = number;
        this.scale = scale;

        this.element = <li class="dice" />;
        this.element.innerHTML = this.getDiceSVG(number);
    }

    getDiceSVG(number) {
        switch (number) {
            case 1: return `<svg viewBox='0 0 76.5 76.5' width='${this.scale}%'><g transform='translate(113.25,-494.1)'><g transform='matrix(0.5,0,0,0.5,-406.5,374.7)'><rect x='588' y='240.4' width='150' height='150' ry='20' rx='20'  /><circle transform='translate(337.5,87.5)' cx='325' cy='227.4' r='12.5' /></g></g></svg>`;
            case 2: return `<svg viewBox='0 0 76.5 76.5' width='${this.scale}%'><g transform='translate(109.9,-505.1)'><g transform='matrix(0.5,0,0,0.5,-415.6,485.6)'><rect x='613' y='40.4' width='150' height='150' ry='20' rx='20'  /><circle transform='translate(326.5,-148.5)' cx='325' cy='227.4' r='12.5' class='s0' /><circle transform='translate(398.5,-76.5)' cx='325' cy='227.4' r='12.5' class='s0' /></g></g></svg>`;
            case 3: return `<svg viewBox='0 0 76.5 76.5' width='${this.scale}%'><g transform='translate(84.9,-515.5)'><g transform='matrix(0.5,0,0,0.5,-290.6,514.9)'><rect x='413' y='2.9' width='150' height='150' ry='20' rx='20'  /><circle transform='translate(126.5,-186)' cx='325' cy='227.4' r='12.5' class='s0' /><circle transform='translate(198.5,-114)' cx='325' cy='227.4' r='12.5' class='s0' /><circle transform='translate(162.5,-150)' cx='325' cy='227.4' r='12.5' class='s0' /></g></g></svg>`;
            case 4: return `<svg viewBox='0 0 76.5 76.5' width='${this.scale}%'><g transform='translate(90.7,-499.7)'><g transform='matrix(0.5,0,0,0.5,-302.7,367.8)'><rect x='425.5' y='265.4' width='150' height='150' ry='20' rx='20'  /><circle transform='translate(139,76.5)' cx='325' cy='227.4' r='12.5' class='s0' /><circle transform='translate(139,148.5)' cx='325' cy='227.4' r='12.5' class='s0' /><circle transform='translate(211,76.5)' cx='325' cy='227.4' r='12.5' class='s0' /><circle transform='translate(211,148.5)' cx='325' cy='227.4' r='12.5' class='s0' /></g></g></svg>`;
            case 5: return `<svg viewBox='0 0 76.5 76.5' width='${this.scale}%'><g transform='translate(89.2,-510.5)'><g transform='matrix(0.5,0,0,0.5,-194.9,372.3)'><rect x='213' y='277.9' width='150' height='150' ry='20' rx='20'  /><circle transform='translate(-73.5,89)' cx='325' cy='227.4' r='12.5' class='s0' /><circle transform='translate(-73.5,161)' cx='325' cy='227.4' r='12.5' class='s0' /><circle transform='translate(-1.5,89)' cx='325' cy='227.4' r='12.5' class='s0' /><circle transform='translate(-1.5,161)' cx='325' cy='227.4' r='12.5' class='s0' /><circle transform='translate(-37.5,125)' cx='325' cy='227.4' r='12.5' class='s0' /></g></g></svg>`;
            case 6: return `<svg viewBox='0 0 76.5 76.5' width='${this.scale}%'><g transform='translate(86.2,-500.6)'><g transform='matrix(0.5,0,0,0.5,-98.2,356.2)'><rect x='25.5' y='290.4' width='150' height='150' ry='20' rx='20'  /><circle transform='translate(-261,101.5)' cx='325' cy='227.4' r='12.5' class='s0' /><circle transform='translate(-261,173.5)' cx='325' cy='227.4' r='12.5' class='s0' /><circle transform='translate(-261,137.5)' cx='325' cy='227.4' r='12.5' class='s0' /><circle transform='translate(-189,101.5)' cx='325' cy='227.4' r='12.5' class='s0' /><circle transform='translate(-189,173.5)' cx='325' cy='227.4' r='12.5' class='s0' /><circle transform='translate(-189,137.5)' cx='325' cy='227.4' r='12.5' class='s0' /></g></g></svg>`;
        }
    }

    render() {
        return this.element;
    }
}