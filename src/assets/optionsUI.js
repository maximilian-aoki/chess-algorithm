import * as Events from './events';

const OptionsUI = (() => {
  // state
  const state = {
    boardSize: null,
  };
  // cache dom elements
  const boardOptions = document.querySelectorAll('.settings>div>input');
  const resetButton = document.querySelector('.settings>button');

  // bind default events
  [...boardOptions].forEach((radio) => {
    radio.addEventListener('change', buildBoard);
  });
  resetButton.addEventListener('click', resetBoard);

  // bind custom events
  Events.on('knightPlaced', enableReset);

  // methods
  function buildBoard(e) {
    state.boardSize = parseInt(e.target.value, 10);
    Events.emit('buildNewBoard', state.boardSize);
    resetButton.disabled = true;
  }

  function resetBoard() {
    Events.emit('buildNewBoard', state.boardSize);
    resetButton.disabled = true;
  }

  function enableReset() {
    resetButton.disabled = false;
  }
})();

export default OptionsUI;
