import Enemy from "./Enemy.js";

export default class Worm extends Enemy {
  constructor(game) {
    super(game);
    this.spriteWidth = 229;
    this.spriteHeight = 171;
    this.width = this.spriteWidth * 0.5;
    this.height = this.spriteHeight * 0.5;
    this.x = this.game.width;
    this.y = this.game.height - this.height;
    this.image = worm;
    this.vx = Math.random() * 0.1 + 0.1;
  }
}
