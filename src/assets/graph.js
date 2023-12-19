// all knight moves expressed as [x, y] transformations
const knightMoves = [
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
];

// return an adjacency graph where each key is a square on the board, and
// each value is an array of square keys
export default function getBoardGraph(size = 8, moves = knightMoves) {
  const graph = {};
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      graph[`${i}${j}`] = getSquareAdjacents(i, j, size, moves);
    }
  }

  return graph;
}

// fill in adjacency array for each square created by getBoardGraph() by
// evaluating if each piece move is valid
function getSquareAdjacents(i, j, size, moves) {
  const adjacents = [];

  moves.forEach((move) => {
    const iTransform = i + move[0];
    const jTransform = j + move[1];
    if (
      iTransform >= 0 &&
      iTransform <= size - 1 &&
      jTransform >= 0 &&
      jTransform <= size - 1
    ) {
      adjacents.push(`${iTransform}${jTransform}`);
    }
  });

  return adjacents;
}
