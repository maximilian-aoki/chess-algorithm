import Queue from './queue';

// return shortest path of vertices from start to finish, if it exists
export default function getShortestPath(graphObj, startVertex, endVertex) {
  const pathData = getPathBFS(graphObj, endVertex);
  const movesArr = [startVertex];
  const { distance } = pathData[startVertex];

  let tmpVertex = startVertex;
  while (tmpVertex !== endVertex && tmpVertex) {
    tmpVertex = pathData[tmpVertex].predecessor;
    movesArr.push(tmpVertex);
  }
  if (!tmpVertex) {
    console.log('no path to end vertex');
    return null;
  }
  return { movesArr, distance };
}

// create an object whose keys are each vertex and values are a data obj
// that gives distance and predecessor
function getPathBFS(graphObj, sourceVertex) {
  const pathData = {};

  Object.keys(graphObj).forEach((key) => {
    pathData[key] = {
      distance: null,
      predecessor: null,
    };
  });

  pathData[sourceVertex].distance = 0;

  const queue = new Queue();
  queue.enqueue(sourceVertex);

  while (!queue.isEmpty()) {
    const currentVertex = queue.dequeue();
    const adjacentVertices = graphObj[currentVertex];

    adjacentVertices.forEach((adjVertex) => {
      if (pathData[adjVertex].distance === null) {
        pathData[adjVertex].predecessor = currentVertex;
        pathData[adjVertex].distance = pathData[currentVertex].distance + 1;

        queue.enqueue(adjVertex);
      }
    });
  }

  return pathData;
}
