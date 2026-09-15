const target = document.getElementById("target");
const gameArea = document.getElementById("gameArea");
const startBtn = document.getElementById("startBtn");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");

let score = 0;
let time = 30;
let timer;

startBtn.addEventListener("click", startGame);

target.addEventListener("click", () => {
  score++;
  scoreText.textContent = score;
  moveTarget();
});

function startGame() {
  score = 0;
  time = 30;

  scoreText.textContent = score;
  timeText.textContent = time;

  target.style.display = "block";
  startBtn.disabled = true;

  moveTarget();

  timer = setInterval(() => {
    time--;
    timeText.textContent = time;

    if (time === 0) {
      clearInterval(timer);
      target.style.display = "none";
      startBtn.disabled = false;
      startBtn.textContent = "Play Again";

      alert(`Game Over! Your score is ${score}`);
    }
  }, 1000);
}

function moveTarget() {
  const maxX = gameArea.clientWidth - target.offsetWidth;
  const maxY = gameArea.clientHeight - target.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  target.style.left = `${randomX}px`;
  target.style.top = `${randomY}px`;
}