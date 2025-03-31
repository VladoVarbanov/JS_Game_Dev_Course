import Enemy from "./Enemy.js";

export default class Spider extends Enemy {
  constructor(game) {
    super(game);
    this.spriteWidth = 310;
    this.spriteHeight = 175;
    this.width = this.spriteWidth * 0.5;
    this.height = this.spriteHeight * 0.5;
    this.x = Math.random() * this.game.width;
    this.y = 0 - this.height;
    this.image = spider;
    this.vx = 0;
    this.vy = Math.random() * 0.2 + 0.1;
    this.maxLength = Math.random() * this.game.height;
  }
  update(deltaTime) {
    super.update(deltaTime);
    // remove enemies
    if (this.y < 0 - this.height * 2) {
      this.markedForDeletion = true;
    }
    this.y += this.vy * deltaTime;
    if (this.y > this.maxLength) this.vy *= -1;
  }
  draw() {
    this.game.ctx.beginPath();
    this.game.ctx.moveTo(this.x + this.width / 2, 0);
    this.game.ctx.lineTo(this.x + this.width / 2, this.y + 10);
    this.game.ctx.stroke();
    super.draw();
  }
}
