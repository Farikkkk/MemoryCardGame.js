import { confetti } from "./confetti.js";
import { canvas } from "./canvas.js";

document.addEventListener("DOMContentLoaded", () => {
  const resetBtn = document.querySelector(".reset-button");
  const game = document.querySelector(".game");
  const resultInfo = document.querySelector(".result");
  const timerEl = document.querySelector("#time");
  const buttonsDiv = document.querySelector(".buttons");
  const container = document.querySelector(".container");
  const timerContainer = document.querySelector(".timer");
  const diffucultyDiv = document.querySelector("h2");

  let shuffleEmojis;
  let timer;
  let time = 0;
  let timerStarted = false;
  let numberOfCards = 16;

  timerContainer.style.display = "none";
  resetBtn.style.display = "none";

  const emojis = [
    "😍",
    "❤️",
    "🌍",
    "🥑",
    "💰",
    "🎱",
    "🐒",
    "🍺",
    "💩",
    "👄",
    "🎄",
    "🏖️",
  ];

  function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }

  function startTimer() {
    time = 0;
    updateTimerDisplay();
    timer = setInterval(() => {
      time++;
      updateTimerDisplay();
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timer);
  }

  function updateTimerDisplay() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerEl.innerHTML = `${minutes < 10 ? "0" : ""} ${minutes} : ${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  }

  function createBoard() {
    game.innerHTML = "";
    timerStarted = false;
    shuffleEmojis = shuffleArray(
      emojis
        .slice(0, numberOfCards / 2)
        .concat(emojis.slice(0, numberOfCards / 2))
    );

    for (let i = 0; i < numberOfCards; i++) {
      let box = document.createElement("div");
      box.className = "item";
      box.innerHTML = shuffleEmojis[i];

      box.addEventListener("click", function () {
        if (!timerStarted) {
          startTimer();
          timerStarted = true;
        }
        if (
          this.classList.contains("boxOpen") ||
          this.classList.contains("boxMatch")
        ) {
          return;
        }
        this.classList.add("boxOpen");

        let openBoxes = document.querySelectorAll(".boxOpen:not(.boxMatch)");

        if (openBoxes.length > 1) {
          setTimeout(() => {
            if (openBoxes[0].innerHTML === openBoxes[1].innerHTML) {
              openBoxes[0].classList.add("boxMatch");
              openBoxes[1].classList.add("boxMatch");
            }
            openBoxes[0].classList.remove("boxOpen");
            openBoxes[1].classList.remove("boxOpen");

            if (
              document.querySelectorAll(".boxMatch").length === numberOfCards
            ) {
              setTimeout(() => {
                resultInfo.innerHTML = `Congratulations! You won!`;
                stopTimer();
                document.querySelector(".result").innerHTML += confetti; // Add confetti
              }, 100);
            }
          }, 500);
        }
      });
      game.appendChild(box);
    }
  }

  resetBtn.addEventListener("click", () => {
    window.location.reload();
    createBoard();
    stopTimer();
  });

  document.querySelectorAll(".card-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      numberOfCards = parseInt(e.target.dataset.cards);
      buttonsDiv.style.display = "none";
      diffucultyDiv.style.display = "none";
      timerContainer.style.display = "block";
      resetBtn.style.display = "block";
      container.style.display = "flex";
      createBoard();
    });
  });
});
