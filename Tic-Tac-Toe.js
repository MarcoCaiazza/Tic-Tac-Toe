// Definiamo il nostro modulo
const game = (() => {
  // Funzione che rappresenta la nostra griglia da gioco
  const gameBoard = () => {
    let board = [
      ["X", "O", ""],
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
    let i = 0;

    // Funzione che renderà il contenuto dell'array
    //  del tabellone di gioco sulla pagina web

    const gameBoardArray = () => {
      let board = gameBoard();
      i = 0;
      board.forEach((row) => {
        row.forEach((cell) => {
          cellGrid[i].innerHTML = cell;
          i++;
        });
      });
    };

    // Funzione che consente di aggiungere il segno ad una cella
    const getSign = (player) => {
      cellGrid.forEach((cell) => {
        cell.addEventListener(
          "click",
          () => (cell.innerHTML = player.getIcon())
        );
      });
    };
    return { gameBoardArray, getSign };
  };

  return { Players, displayController, gameBoard };
})();

// Creiamo un array di oggetti giocatore

const player1 = game.Players("Player 1", "X");
const player2 = game.Players("Player 2", "O");
const players = [player1, player2];

// utilizziamo la funzione displayController per renderizzare il tabellone di gioco
const controller = game.displayController();
controller.gameBoardArray();
