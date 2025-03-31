export default class Enemy {
  constructor(game) {
    this.game = game;
    this.markedForDeletion = false;
    this.frameX = 0;
    this.maxFrame = 5;
    this.frameInterval = 100;
    this.frameTimer = 0;
  }
  /** Methods */
  update(deltaTime) {
    this.x -= this.vx * deltaTime;

    // remove enemies
    if (this.x < 0 - this.width) {
      this.markedForDeletion = true;
    }
    if (this.frameTimer > this.frameInterval) {
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
      this.frameTimer = 0;
    } else {
      this.frameTimer += deltaTime;
    }
  }
  draw() {
    this.game.ctx.drawImage(
      this.image,
      this.frameX * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
