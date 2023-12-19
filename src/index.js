// import css
import './static/reset.css';
import './static/style.css';

// import modules
import Board from './assets/Board';

// TEST
const board = new Board(8);
console.log(board.getMoves('11', '34'));
