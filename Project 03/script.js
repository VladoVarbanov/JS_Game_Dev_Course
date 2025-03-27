import Enemy from "./Classes/Enemy.js";

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);
const numberOfEnemies = 20;
const enemyArray = [];
let gameFrame = 0;

for (let i = 0; i < numberOfEnemies; i++) {
  enemyArray.push(new Enemy(canvas));
}

function animate(params) {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemyArray.forEach((enemy) => {
    enemy.update(gameFrame);
    enemy.draw(ctx);
  });
  gameFrame++;
  requestAnimationFrame(animate);
}
animate();
