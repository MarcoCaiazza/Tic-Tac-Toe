const game = (() => {
  const gameBoard = () => {
    let board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    return board;
  };
  const Player = (name, icon) => {
    const getName = () => name;
    const getIcon = () => icon;
  };
  const displayController = () => {
    let board = gameBoard();
    for (let i = 0; i < board.length; i++) {
      document.getElementsByClassName("cell-grid").innerHTML = board[i];
      console.log(
        (document.getElementsByClassName("cell-grid").innerHTML = board[i])
      );
    }
  };

  return { gameBoard, Player, displayController, displayController };
})();

game.displayController();
