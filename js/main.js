// contants
const winningCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

// app's state/vars

let board;
let turn = "X";
let win;

// cached element refs

const squares = Array.from(document.querySelectorAll('#board div'))
const messages = document.querySelector('h2');


//event listeners
document.getElementById('board').addEventListener('click', handleTurn)
document.getElementById('reset-button').addEventListener('click', init)

// functions

function getWinner() {
  let winner = null;

  winningCombos.forEach((combo, index) => {
    if (board[combo[0]] && board[combo[0]]=== board[combo[1]] && board[combo[0]] === board[combo[2]]) {
      winner = board[combo[0]]
    }
  })
  console.log(winner);
  return winner ? winner : board.includes('') ? null : 'T'

  
}

function init() {
  board = [
    '', '', '',
    '', '', '',
    '', '', '',
  ]
  render()
}



function render() {
  board.forEach((mark, index) => {
    // console.log(mark, index);
    squares[index].textContent = mark
  });
  messages.textContent = win === 'T' ? `Tie game!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`
}

function handleTurn(event) {
  let index = squares.findIndex(square => {
    return square === event.target;
  })

  board[index] = turn;
  turn = turn === 'X' ? 'O' : 'X'

  win = getWinner()

  render()
}
init();

