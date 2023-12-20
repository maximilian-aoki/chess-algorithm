import * as Events from './events';
import getBoardGraph from './graph';
import getShortestPath from './bfs';
import Knight from '../static/images/knight.svg';

const BoardUI = (() => {
  // state
  const state = {
    boardGraph: null,
    isSquareLight: false,
    startVertex: null,
    endVertex: null,
    shortestPath: [],
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
    boardFrame.style.backgroundColor = '#426160';

    for (let i = boardSize; i >= 1; i -= 1) {
      for (let j = 1; j <= boardSize; j += 1) {
        const square = document.createElement('div');
        square.classList.add(getSquareColour());
        square.setAttribute('data-index', `${j},${i}`);
        square.addEventListener('click', squareActionButton);

        board.appendChild(square);
      }
      state.isSquareLight = !state.isSquareLight;
    }

    boardFrame.appendChild(board);

    // use the imported graph utility to get an adjacency list for the board size
    // reset state properties
    state.boardGraph = getBoardGraph(boardSize);
    state.startVertex = null;
    state.endVertex = null;
    state.shortestPath = null;
  }

  function getSquareColour() {
    state.isSquareLight = !state.isSquareLight;
    return state.isSquareLight ? 'light' : 'dark';
  }

  function squareActionButton(e) {
    if (!state.startVertex) {
      firstAction(e);
    } else if (
      e.target.getAttribute('data-index') !== state.startVertex &&
      e.target.getAttribute('data-index') !== state.endVertex
    ) {
      secondAction(e);
    }
  }

  // setting down the knight
  function firstAction(e) {
    state.startVertex = e.target.getAttribute('data-index');
    renderKnight(e.target);
    Events.emit('knightPlaced');
  }

  function renderKnight(element) {
    element.classList.add('knighted');
    element.style.backgroundImage = `url(${Knight})`;

    boardFrame.style.backgroundColor = '#b76d68';
  }

  // determining the path to goal
  function secondAction(e) {
    state.endVertex = e.target.getAttribute('data-index');

    const shortestPath = getShortestPath(
      state.boardGraph,
      state.startVertex,
      state.endVertex,
    );

    if (state.shortestPath) {
      deletePath();
    }

    renderPath(shortestPath);
    Events.emit('pathCalculated', state.shortestPath.length - 1);
  }

  function deletePath() {
    for (let i = 1; i <= state.shortestPath.length - 1; i += 1) {
      const vertexIndex = state.shortestPath[i];
      const pathElement = document.querySelector(
        `.board>div[data-index="${vertexIndex}"]`,
      );

      if (i === state.shortestPath.length - 1) {
        pathElement.classList.remove('goal');
      } else {
        pathElement.classList.remove('path');
      }

      pathElement.innerText = '';
    }
  }

  function renderPath(shortestPath) {
    state.shortestPath = shortestPath.movesArr;

    for (let i = 1; i <= state.shortestPath.length - 1; i += 1) {
      const vertexIndex = state.shortestPath[i];
      const pathElement = document.querySelector(
        `.board>div[data-index="${vertexIndex}"]`,
      );

      if (i === state.shortestPath.length - 1) {
        pathElement.classList.add('goal');
      } else {
        pathElement.classList.add('path');
      }

      pathElement.innerText = i;
    }
  }
})();

export default BoardUI;
