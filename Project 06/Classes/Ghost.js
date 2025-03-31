import Enemy from "./Enemy.js";

export default class Ghost extends Enemy {
  constructor(game) {
    super(game);
    this.spriteWidth = 261;
    this.spriteHeight = 209;
    this.width = this.spriteWidth * 0.5;
    this.height = this.spriteHeight * 0.5;
    this.x = this.game.width;
    this.y = Math.random() * this.game.height * 0.6;
    this.image = ghost;
    this.vx = Math.random() * 0.2 + 0.1;
    this.angle = 0;
    this.curve = Math.random() * 3;
  }
  /** Methods */
  update(deltaTime) {
    super.update(deltaTime);
    this.y += Math.sin(this.angle) * this.curve;
    this.angle += 0.04;
  }
  draw() {
    this.game.ctx.save();
    this.game.ctx.globalAlpha = 0.5;
    super.draw();
    this.game.ctx.restore();
  }
}
