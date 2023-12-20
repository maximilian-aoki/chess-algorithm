// import css
import './static/reset.css';
import './static/style.css';

// import modules
import Board from './assets/Board';
import * as Events from './assets/events';
import OptionsUI from './assets/optionsUI';
import BoardUI from './assets/boardUI';

// TEST
const board = new Board();
console.log(board.getMoves('1,1', '1,2'));
