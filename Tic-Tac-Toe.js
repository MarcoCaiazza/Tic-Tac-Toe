// Definiamo il nostro modulo
const game = (() => {
  // Funzione che rappresenta la nostra griglia da gioco
  let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  // Funzione fabbrica che crea oggetti persona

  const Players = (name, icon) => {
    const getPlayer = () => name;
    const getIcon = () => icon;
    return { getPlayer, getIcon };
  };

  // Funzione che controlla il flusso di gioco

  const displayController = () => {
    let cellGrid = document.querySelectorAll(".cell-grid");

    // Funzione che renderà il contenuto dell'array
    //  del tabellone di gioco sulla pagina web

    const renderBoardArray = () => {
      board.forEach((row) => {
        row.forEach((cell) => {
          cellGrid.innerHTML = cell;
        });
      });
    };

    // Funzione che alterna il segno "X" e il segno "O"
    const changePlayers = (currentPlayer) => {
      if (currentPlayer === players[0]) {
        currentPlayer = players[1];
      } else {
        return (currentPlayer = players[0]);
      }
    };
    // funzione che imposta uno dei due segni
    setSign = (cell, currentPlayer) => {
      if (cell.innerHTML === "") {
        cell.innerHTML = currentPlayer.getIcon();
        console.log(
          `${currentPlayer.getPlayer()} scored ${currentPlayer.getIcon()}`
        );
        changePlayers(currentPlayer);
      }
    };
    // Funzione che consente di aggiungere il clik ad ogni cella
    const addClickEventToTableCells = () => {
      let currentPlayer = players[0];
      cellGrid.forEach((cell) => {
        cell.addEventListener("click", (e) => setSign(cell, currentPlayer));
      });
    };

    return { renderBoardArray, addClickEventToTableCells };
  };

  return { Players, displayController };
})();

// Creiamo un array di oggetti giocatore

const player1 = game.Players("MARCO", "X");
const player2 = game.Players("DENISE", "O");
const players = [player1, player2];

// utilizziamo la funzione displayController per renderizzare il tabellone di gioco
const controller = game.displayController();
controller.renderBoardArray();

// per ogni giocatore assegniamo il proprio segno di gioco
players.forEach((player) => {
  controller.addClickEventToTableCells(player);
});
