import { Explosions } from "./Classes/Explosion.js";

/**@type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 700;
const explosions = [];
let canvasPosition = canvas.getBoundingClientRect();

window.addEventListener("click", (e) => {
  createAnimation(e);
});

function createAnimation(e) {
  let positionX = e.x - canvasPosition.x;
  let positionY = e.y - canvasPosition.y;
  explosions.push(new Explosions(positionX, positionY));
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < explosions.length; ++i) {
    explosions[i].update();
    explosions[i].draw(ctx);
    if (explosions[i].frame > 5) {
      explosions.splice(i, 1);
      --i;
    }
  }
  requestAnimationFrame(animate);
}
animate();
