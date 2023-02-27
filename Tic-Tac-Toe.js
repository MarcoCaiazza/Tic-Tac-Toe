// Definiamo il nostro modulo
const game = (() => {
  // Funzione che rappresenta la nostra griglia da gioco
  const gameBoard = () => {
    let board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    return board;
  };
  // Funzione fabbrica che crea oggetti persona

  const Players = (name, icon) => {
    const getPlayer = () => name;
    const getIcon = () => icon;
    return { getPlayer, getIcon };
  };

  // Funzione che controlla il flusso di gioco

  const displayController = () => {
    let cellGrid = document.querySelectorAll(".cell-grid");
    // let i = 0;

    // Funzione che renderà il contenuto dell'array
    //  del tabellone di gioco sulla pagina web

    const gameBoardArray = () => {
      let board = gameBoard();
      // i = 0;
      board.forEach((row) => {
        row.forEach((cell) => {
          cellGrid.innerHTML = cell;
          // i++;
        });
      });
    };

    // Funzione che consente di aggiungere il segno ad una cella
    const getSign = () => {
      let currentPlayer = players[0];

      cellGrid.forEach((cell) => {
        cell.addEventListener(
          "click",
          (getSignPlayerOneOrTwo = () => {
            if (cell.innerHTML === "") {
              cell.innerHTML = currentPlayer.getIcon();
              console.log(
                `${currentPlayer.getPlayer()} scored ${currentPlayer.getIcon()}`
              );
              // Funzione che alterna il segno "X" e il segno "O"
              const switchPlayers = () => {
                if (currentPlayer === players[0]) {
                  currentPlayer = players[1];
                } else {
                  return (currentPlayer = players[0]);
                }
              };
              switchPlayers();
            }
          })
        );
      });
    };

    return { gameBoardArray, getSign };
  };

  return { Players, displayController, gameBoard };
})();

// Creiamo un array di oggetti giocatore

const player1 = game.Players("MARCO", "X");
const player2 = game.Players("DENISE", "O");
const players = [player1, player2];

// utilizziamo la funzione displayController per renderizzare il tabellone di gioco
const controller = game.displayController();
controller.gameBoardArray();

players.forEach((player) => {
  controller.getSign(player);
});
