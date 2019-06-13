export default class Ball {
    constructor(game) {
        this.gameWidth = game.Width;
        this.gameHeight = game.Height;
        this.radius = 30;
        this.color = 'blue';
        this.speed = 2;
        this.position = {
            x: 250,
            y: 150
        };
        console.log(this);

    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update(deltaTime) {
        this.position.x += this.speed;

        if (this.position.x > this.gameWidth + this.radius) {
            this.position.x = this.gameWidth - this.gameWidth - this.radius;
        }

    }

}
