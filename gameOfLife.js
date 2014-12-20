The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

Any live cell with fewer than two live neighbours dies, as if caused by under-population.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overcrowding.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one)
...implement your own method which will take the initial state as an NxM array of 0's (dead cell) and 1's (living cell) and return an equally sized array representing the next generation. Cells outside the array must be considered dead. Cells that would born out of the array boundaries should be ignored (universe never grows beyond the initial NxM grid).
N.B.: for illustration purposes, 0 and 1 will be represented as ░ and ▓ blocks respectively. You can take advantage of the 'htmlize' function to get a text representation of the universe.

Starting code:

function nextGen(cells) {

    return cells;
}
-1 0 1
[1,1][1,2][1,3]
[2,1][2,2][2,3]
[3,1][3,2][3,3]
[n-1,m-1][n-1,m][n-1,m+1]
[n,m-1][n,m][n,m+1]
[n+1,m-1][n+1,m][n+1,m+1]
< 2 ;  1 --> 0
> 3 ;  1 --> 0
= 3 ;  0 --> 1