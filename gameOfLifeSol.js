function nextGen(cells) {
    var rows = cells.length;
    var columns = cells[0].length;
    var alive;
    for(var i = 0; i < rows; i++) {

        for(var j = 0; j < columns; j++) {
            alive = 0
                console.log('row', i, 'column', j, 'evaluated')
            for(var z = -1; z < 2; z++) {
                console.log('row', i, 'column', j + z)
                if(i - 1 < 0 || j - 1 < 0 || i + z < 0 || j + z < 0 || i + 1 > rows || j + 1 > columns || i + z > rows || j + z > columns ) continue;
                if (cells[i - 1][j + z] == 1) alive++
                if (cells[i][j + z] == 1) alive++
                if (cells[i + 1][j + z] == 1) alive++
            }
            console.log('alive', alive)
        //      alive == 2 || alive == 3  ? cell[i][j] = 1 : cell[i][j] = 0
        }
    }
    // return cells;
}

var firstGen = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
           [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
           [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
           [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
           [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
           [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
           [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
           [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
           [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
           [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
           [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

nextGen(firstGen)