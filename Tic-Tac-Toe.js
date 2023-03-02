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
      board.forEach((row, i) => {
        row.forEach((cell, j) => {
          cellGrid[i * 3 + j] = cell;
        });
      });
    };

    // Funzione che alterna il segno  e il segno "O"
    const changePlayers = () => {
      if (!previousPlayer && currentPlayer === players[0]) {
        currentPlayer = players[1];
      } else {
        currentPlayer = players[0];
      }
    };

    //funzione che controlla il vincitore
    const playerWin = () => {
      if (
        (board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X") ||
        (board[1][0] === "X" && board[1][1] === "X" && board[1][2] === "X") ||
        (board[2][0] === "X" && board[2][1] === "X" && board[2][2] === "X") ||
        (board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X") ||
        (board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X") ||
        (board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X") ||
        (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") ||
        (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X")
      ) {
        console.log("ok");
        gameover = true; // disabilita i pulsanti
      }
      if (
        (board[0][0] === "O" && board[0][1] === "O" && board[0][2] === "O") ||
        (board[1][0] === "O" && board[1][1] === "O" && board[1][2] === "O") ||
        (board[2][0] === "O" && board[2][1] === "O" && board[2][2] === "O") ||
        (board[0][0] === "O" && board[1][0] === "O" && board[2][0] === "O") ||
        (board[0][1] === "O" && board[1][1] === "O" && board[2][1] === "O") ||
        (board[0][2] === "O" && board[1][2] === "O" && board[2][2] === "O") ||
        (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O") ||
        (board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O")
      ) {
        console.log("ok O");
        gameover = true; // disabilita i pulsanti
      }
    };

    let gameover = false;
    // funzione che imposta uno dei due segni
    const setSign = (cell) => {
      if (!gameover && cell.innerHTML === "") {
        let [row, col] = cell.id.split("-"); //id del pusante cliccato viene splittato
        let strToNum = [row, col].map((str) => parseInt(str)); // ora i valori da stringhe passano a numeri
        board[row][col] = currentPlayer.getIcon(); // assegno alla posizione nell'array il segno corrente
        cell.innerHTML = currentPlayer.getIcon(); // assegno all'html il segno corrente
        // console.log(board);
        renderBoardArray();
        playerWin();
        changePlayers();
      }
    };
    // Funzione che aggiunge il clik ad ogni cella
    const addClickEventToTableCells = () => {
      cellGrid.forEach((cell) => {
        cell.addEventListener("click", () => setSign(cell));
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

// ad ogni giocatore aggiungiamo il clik per il segno

players.forEach((player) => {
  controller.addClickEventToTableCells();
});

let currentPlayer = players[0]; // primo giocatore
let previousPlayer = null; // giocatore precedente
