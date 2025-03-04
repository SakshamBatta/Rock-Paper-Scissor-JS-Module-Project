let playerScore = localStorage.getItem("playerScore")
  ? parseInt(localStorage.getItem("playerScore"))
  : 0;
let pcScore = localStorage.getItem("pcScore")
  ? parseInt(localStorage.getItem("pcScore"))
  : 0;

document.querySelector(".player-score-value").innerText = playerScore;
document.querySelector(".pc-score-value").innerText = pcScore;

document.getElementById("open-rules").addEventListener("click", function () {
  document.getElementById("rules-modal").style.display = "flex";
});

document.getElementById("close-rules").addEventListener("click", function () {
  document.getElementById("rules-modal").style.display = "none";
});

window.addEventListener("click", function (event) {
  let modal = document.getElementById("rules-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

function playGame(playerChoice) {
  const choices = ["rock", "paper", "scissor"];

  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (playerChoice === computerChoice) {
    document.querySelector(".game-container").style.display = "none";
    document.querySelector(".tie-up").style.display = "flex";

    const imageDiv = document.getElementById("playerImageDiv");
    imageDiv.classList.add(`player-${playerChoice}`);

    const imageId = document.getElementById("tie-player-image");
    imageId.src = `./assets/${playerChoice}.png`;

    const cpuImageDiv = document.getElementById("cpuImageDiv");
    cpuImageDiv.classList.add(`cpu-${computerChoice}`);

    const cpuImageId = document.getElementById("tie-cpu-image");
    cpuImageId.src = `./assets/${computerChoice}.png`;
    console.log(cpuImageId.src);
  } else if (
    (playerChoice === "rock" && computerChoice === "scissor") ||
    (playerChoice === "scissor" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    document.querySelector(".game-container").style.display = "none";
    document.querySelector(".result").style.display = "flex";

    const playerResultDiv = document.getElementById("playerWin");
    playerResultDiv.classList.add("radiant");

    const playerResult = document.getElementById("playerResult");
    playerResult.classList.add(`player-${playerChoice}`);

    const playerImg = document.getElementById("playerResultImg");

    playerImg.src = `./assets/${playerChoice}.png`;

    const pcResult = document.getElementById("cpuResult");
    pcResult.classList.add(`cpu-${computerChoice}`);

    const pcImg = document.getElementById("cpuResultImg");

    pcImg.src = `./assets/${computerChoice}.png`;

    document.querySelector(".result-title").innerHTML = "YOU WIN";
    playerScore++;
    localStorage.setItem("playerScore", playerScore);
    document.querySelector(".player-score-value").innerText = playerScore;
    document.querySelector(".next-btn").style.display = "block";
    document.querySelector(".rules-btn").classList.add("shift-btn-left");
  } else if (
    (computerChoice === "rock" && playerChoice === "scissor") ||
    (computerChoice === "scissor" && playerChoice === "paper") ||
    (computerChoice === "paper" && playerChoice === "rock")
  ) {
    document.querySelector(".game-container").style.display = "none";
    document.querySelector(".result").style.display = "flex";

    const playerResult = document.getElementById("playerResult");
    playerResult.classList.add(`player-${playerChoice}`);

    const playerImg = document.getElementById("playerResultImg");

    playerImg.src = `./assets/${playerChoice}.png`;

    const pcResult = document.getElementById("cpuResult");
    pcResult.classList.add(`cpu-${computerChoice}`);

    const cpuResultDiv = document.getElementById("cpuWin");
    cpuResultDiv.classList.add("radiant");

    const pcImg = document.getElementById("cpuResultImg");

    pcImg.src = `./assets/${computerChoice}.png`;

    document.querySelector(".result-title").innerHTML = "YOU LOST";

    pcScore++;
    localStorage.setItem("pcScore", pcScore);
    document.querySelector(".pc-score-value").innerHTML = pcScore;
  }
}

function nextButton() {
  document.querySelector(".heading-score").style.display = "none";
  document.querySelector(".result").style.display = "none";
  document.querySelector(".game-container").style.display = "none";
  document.querySelector(".rules-btn").classList.remove("shift-btn-left");
  document.querySelector(".main-section").style.display = "flex";
}

function restartGame() {
  document.querySelector(".result").style.display = "none";
  document.querySelector(".tie-up").style.display = "none";
  document.querySelector(".game-container").style.display = "flex";

  document.getElementById("playerWin").classList.remove("radiant");
  document.getElementById("cpuWin").classList.remove("radiant");

  document.getElementById("playerResult").className = "";
  document.getElementById("cpuResult").className = "";

  document.getElementById("playerImageDiv").className = "";
  document.getElementById("cpuImageDiv").className = "";

  const imageId = document.getElementById("tie-player-image");
  imageId.src = "";

  const cpuImageId = document.getElementById("tie-cpu-image");
  cpuImageId.src = "";

  const playerImg = document.getElementById("playerResultImg");
  playerImg.src = "";

  document.querySelector(".next-btn").style.display = "none";
  document.querySelector(".rules-btn").classList.remove("shift-btn-left");
  document.querySelector(".main-section").style.display = "none";
  document.querySelector(".heading-score").style.display = "flex";
  document.querySelector(".game-container").style.display = "flex";
}