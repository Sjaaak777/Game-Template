import Ball from './objects/ball';

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.Height = gameHeight;
        this.Width = gameWidth;
    }

    start() {
        this.ball = new Ball(this);
        this.gameObjects = [this.ball];
    }

    draw(ctx) {
        this.gameObjects.forEach(object => object.draw(ctx));

        let lines = 0;
        for (lines = 0; lines < this.Width; lines++) {
            ctx.beginPath();
            ctx.moveTo(0, lines);
            ctx.lineTo(this.Width, lines);
            ctx.stroke();
            lines++;
            lines++;
        }

    }

    update(deltaTime) {
        this.gameObjects.forEach(object => object.update(deltaTime));
    }

}