import * as Events from './events';

const MessageUI = (() => {
  // cache dom elements
  const messages = document.querySelector('.inner-messages');

  // bind custom events
  Events.on('buildNewBoard', newBoardMessage);
  Events.on('knightPlaced', knightPlacedMessage);
  Events.on('pathCalculated', pathCalculatedMessage);

  // methods
  function newBoardMessage() {
    [...messages.children].forEach((child) => {
      messages.removeChild(child);
    });

    const para = document.createElement('p');
    para.innerText = 'Place the knight anywhere on the board.';

    messages.appendChild(para);
  }

  function knightPlacedMessage() {
    [...messages.children].forEach((child) => {
      messages.removeChild(child);
    });

    const para = document.createElement('p');
    para.innerText = 'Select an endpoint and watch the magic happen...';

    messages.appendChild(para);
  }

  function pathCalculatedMessage() {
    [...messages.children].forEach((child) => {
      messages.removeChild(child);
    });

    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    para1.innerText =
      'It takes [x] moves for the knight to get from start to end.';
    para2.innerText =
      'To try again, clear the current board or select a new board.';

    messages.appendChild(para1);
    messages.appendChild(para2);
  }
})();

export default MessageUI;
