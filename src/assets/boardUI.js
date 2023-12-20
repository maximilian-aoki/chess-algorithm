import * as Events from './events';
import getBoardGraph from './graph';

const BoardUI = (() => {
  // state
  const state = {
    boardGraph: null,
    isSquareLight: false,
    startVertex: null,
    endVertex: null,
  };

  // cache dom elements
  const boardFrame = document.querySelector('.board-frame');

  // bind custom events
  Events.on('buildNewBoard', buildNewBoard);

  // methods
  function buildNewBoard(boardSize) {
    if (boardFrame.firstElementChild) {
      boardFrame.removeChild(boardFrame.firstElementChild);
    }

    const board = document.createElement('div');
    board.classList.add('board');
    board.classList.add('grid');

    boardFrame.style.setProperty('--square-factor', boardSize);

    for (let i = boardSize; i >= 1; i -= 1) {
      for (let j = 1; j <= boardSize; j += 1) {
        const square = document.createElement('div');
        square.classList.add(getSquareColour());
        square.setAttribute('data-index', `${j},${i}`);

        board.appendChild(square);
      }
      state.isSquareLight = !state.isSquareLight;
    }

    boardFrame.appendChild(board);
    state.boardGraph = getBoardGraph(boardSize);
  }

  function getSquareColour() {
    state.isSquareLight = !state.isSquareLight;
    return state.isSquareLight ? 'light' : 'dark';
  }
})();

export default BoardUI;
