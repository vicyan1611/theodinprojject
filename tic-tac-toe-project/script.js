const Gameboard = (function () {
  const playerMark = "X";
  const computerMark = "O";
  let gameboard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const isWinner = (mark) => {
    let isWin = false;
    for (let i = 0; i < 3; ++i) {
      let cnt = 0;
      for (let j = 0; j < 3; ++j) if (gameboard[i][j] === mark) cnt++;
      if (cnt === 3) isWin = true;
    }
    for (let i = 0; i < 3; ++i) {
      let cnt = 0;
      for (let j = 0; j < 3; ++j) if (gameboard[j][i] === mark) cnt++;
      if (cnt === 3) isWin = true;
    }
    if (
      gameboard[0][0] === mark &&
      gameboard[1][1] === mark &&
      gameboard[2][2] === mark
    )
      isWin = true;
    if (
      gameboard[0][2] === mark &&
      gameboard[1][1] === mark &&
      gameboard[2][0] === mark
    )
      isWin = true;
    return isWin;
  };

  const isFullBoard = () => {
    // Row checking
    for (let i = 0; i < 3; ++i) {
      for (let j = 0; j < 3; ++j) {
        if (gameboard[i][j] === "") return false;
      }
    }
    return true;
  };

  const gameStatus = () => {
    if (isWinner(playerMark)) return { status: "end", result: "player" };
    if (isWinner(computerMark)) return { status: "end", result: "computer" };
    if (isFullBoard()) return { status: "end", result: "tie" };
    return { status: "continue", result: "" };
  };

  const playerPlay = (row, col) => {
    gameboard[row][col] = playerMark;
  };

  const computerPlay = () => {
    if (gameStatus().status === "end") return;
    let row = Math.floor(Math.random() * 3);
    let col = Math.floor(Math.random() * 3);
    while (gameboard[row][col] != "") {
      row = Math.floor(Math.random() * 3);
      col = Math.floor(Math.random() * 3);
    }
    gameboard[row][col] = computerMark;
    return { row, col };
  };

  return {
    computerPlay,
    playerPlay,
    gameStatus,
  };
})();

const displayController = (function () {
  const gamefield = document.querySelector(".gamefield");
  const resetButton = document.querySelector(".reset");

  resetButton.addEventListener("click", () => {
    location.reload();
  });

  const playerInput = (e) => {
    if (e.target.className !== "box") return;
    let image = document.createElement("img");
    image.src = "assets/check.svg";
    image.style.width = "80px";
    e.target.appendChild(image);
    let row = parseInt(e.target.id.slice(3, 4));
    let col = parseInt(e.target.id.slice(4, 5));
    Gameboard.playerPlay(row, col);
    handleGameStatus();
    computerInput();
  };

  gamefield.addEventListener("click", playerInput);

  const computerInput = () => {
    let image = document.createElement("img");
    image.src = "assets/circle.svg";
    image.style.width = "80px";
    let { row, col } = Gameboard.computerPlay();
    let box = document.querySelector("#box" + String(row) + String(col));
    box.append(image);
    handleGameStatus();
  };

  const handleGameStatus = () => {
    let { status, result } = Gameboard.gameStatus();
    if (status === "continue") return;
    let message = "";
    if (result === "tie") message = "It's a tie!";
    if (result === "player") message = "Player wins!";
    if (result === "computer") message = "Computer wins!";

    let announcement = document.querySelector(".announcement");
    announcement.textContent = message;
    gamefield.removeEventListener("click", playerInput);
  };

  return { computerInput, handleGameStatus };
})();
