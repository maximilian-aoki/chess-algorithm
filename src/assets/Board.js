import getBoardGraph from './graph';
import getShortestPath from './bfs';

export default class Board {
  constructor(size = 8) {
    this.graph = this.#getGraph(size);
  }

  #getGraph(size) {
    return getBoardGraph(size);
  }

  getMoves(startVertex, endVertex) {
    return getShortestPath(this.graph, startVertex, endVertex);
  }
}
