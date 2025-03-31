import Ghost from "./Ghost.js";
import Spider from "./Spider.js";
import Worm from "./Worm.js";

export default class Game {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.enemies = [];
    this.enemyInterval = 500;
    this.enemyTimer = 0;
    this.enemyTypes = ["worm", "ghost", "spider"];
  }
  /** Methods */
  update(deltaTime) {
    this.enemies = this.enemies.filter((object) => !object.markedForDeletion);
    if (this.enemyTimer > this.enemyInterval) {
      this.#addNewEnemy();
      this.enemyTimer = 0;
      //   console.log(this.enemies);
    } else {
      this.enemyTimer += deltaTime;
    }
    this.enemies.forEach((object) => object.update(deltaTime));
  }
  draw() {
    this.enemies.forEach((object) => object.draw());
  }
  #addNewEnemy() {
    const randomEnemy =
      this.enemyTypes[Math.floor(Math.random() * this.enemyTypes.length)];
    if (randomEnemy === "worm") this.enemies.push(new Worm(this));
    else if (randomEnemy === "ghost") this.enemies.push(new Ghost(this));
    else if (randomEnemy === "spider") this.enemies.push(new Spider(this));

    // this.enemies.sort((a, b) => {
    //   return a.y - b.y;
    // });
  }
}
