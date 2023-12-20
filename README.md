# chess-algorithm

A project demonstrating the use of data structures and algorithms in finding the shortest path for a knight on a chessboard.

link to demo: https://maximilian-aoki.github.io/chess-algorithm/

DATA STRUCTURES

- an adjacency graph that maps all knight moves for every square - dynamically build depending on chosen board size
- a queue built from a linked list to track vertices in the depth-first search of the adjacency graph

ALGORITHM

- a breadth-first search of the adjacency graph to determine shortest path from knight position to selected endpoint

UI FEATURES

- choose between a 4x4, 8x8, and 16x16 chessboard
- position the knight anywhere on the board to indicate starting position
- refresh the board to change the knight's position at any time
- provide an endpoint and see the shortest path the knight can take - try different endpoints to compare
- a helpful dialog to guide you through the process!

FUTURE CONSIDERATIONS

- let the user determine how many squares the board should be
- allow 3D boards (use webGL)
- use memoization to store path data at each board size
- use memoization to store board graph data at each board size
