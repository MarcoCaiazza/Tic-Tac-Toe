const game = (() => {
  const gameBoard = () => {
    let board = [
      ["X", "", ""],
      ["", "", ""],
      ["", "", "O"],
    ];
    return board;
  };
  const Player = (name, icon) => {
    const getName = () => name;
    const getIcon = () => icon;
  };
  const displayController = () => {};

  const gameBoardArray = () => {
    let board = gameBoard();
    let cellElements = document.querySelectorAll(".cell-grid");
    let i = 0;
    board.forEach((row) => {
      row.forEach((cell) => {
        cellElements[i].innerHTML = cell;
        i++;
      });
    });
  };
  return { gameBoard, Player, displayController, gameBoardArray };
})();

game.gameBoardArray();
