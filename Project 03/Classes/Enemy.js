export default class Enemy {
  constructor(canvas) {
    this.image = new Image();
    this.image.src = "../Pictures/enemy4.png";
    this.canvas = canvas;
    this.speed = Math.random() * 4 + 1;
    this.spriteWidth = 213;
    this.spriteHeight = 213;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (this.canvas.width - this.width);
    this.y = Math.random() * (this.canvas.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    // this.angle = 0;
    // this.angleSpeed = Math.random() * 1.5 + 0.5;
    // this.curve = Math.random() * 200 + 50;
    this.newX = Math.random() * (this.canvas.width - this.width);
    this.newY = Math.random() * (this.canvas.height - this.height);
    this.interval = Math.floor(Math.random() * 200 + 50);
  }
  /** Methods */
  update(gameFrame) {
    // this.x -= this.speed;
    // this.y += this.curve * Math.sin(this.angle);
    // this.x =
    //   (this.canvas.width / 2) * Math.cos((this.angle * Math.PI) / 180) +
    //   (this.canvas.width / 2 - this.width / 2);
    // this.y =
    //   (this.canvas.height / 2) * Math.sin((this.angle * Math.PI) / 90) +
    //   (this.canvas.height / 2 - this.height / 2);
    // this.angle += this.angleSpeed;
    // this.x = 0;
    // this.y = 0;
    if (gameFrame % this.interval === 0) {
      this.newX = Math.random() * (this.canvas.width - this.width);
      this.newY = Math.random() * (this.canvas.height - this.height);
    }
    let dx = this.x - this.newX;
    let dy = this.y - this.newY;

    this.x -= dx / 70;
    this.y -= dy / 70;
    if (this.x + this.width < 0) {
      this.x = this.canvas.width;
    }
    // animate sprites
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : (this.frame += 1);
    }
  }
  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
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
