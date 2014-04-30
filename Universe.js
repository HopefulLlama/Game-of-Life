function Universe(rows, columns){
    this.columns = columns;
    this.rows = rows;

    this.cells = new Array();
    this.setCellsArray();

    this.setColumns = setColumns;
    function setColumns(columns){
        this.columns = columns;
        this.setCellsArray();
    }

    this.setHeight = setRows;
    function setRows(rows){
        this.rows = rows;
        this.setCellsArray();
    }

    this.setCellsArrays = setCellsArrays;
    function setCellsArrays(){
        if(this.rows > this.cells.length){
            for(var i = this.cells.length; i < this.rows; i++){
                this.cells[i] = new Array();
                for(var j = 0; j < this.columns; j++){
                    this.cells[i][j] = new Cell();
                }
            }
        } else if(this.rows < this.cells.length) {
            var i = cells.length - this.rows;
            cells.splice(this.rows-1, i);
        }

        if(this.columns > this.cells[0].length){
            this.cells.forEach(function(row){
                for(var j = row.length; j < this.columns; j++){
                    row[j] = new Cell();
                }
            });
        } else if (this.columns < this.cells[0].length){
            var j = cells[0].length - this.columns;
            this.cells.forEach(function(row){
                row.splice(this.columns-1, j);
            });
        }
    }

    this.checkCellAliveNeighboursByCoordinates = checkCellAliveNeighboursByCoordinates;
    function checkCellAliveNeighboursByCoordinates(row, column){
        var aliveNeighbours = 0;
        var neighbours = new Array();
        neighbours.push(this.cells[row-1][column-1]);
        neighbours.push(this.cells[row-1][column]);
        neighbours.push(this.cells[row-1][column+1]);

        neighbours.push(this.cells[row][column-1]);
        neighbours.push(this.cells[row][column+1]);

        neighbours.push(this.cells[row+1][column-1]);
        neighbours.push(this.cells[row+1][column]);
        neighbours.push(this.cells[row+1][column+1]);

        neighbours.forEach(function (neighbour){
            if(neighbour,alive){
                aliveNeighbours++;
            }
        });
        return aliveNeighbours;
    }

    this.setCellNewState = setCellNewState;
    function setCellNewState(){
        for(var i = 0; i < this.rows; i++){
            for(var j = 0; j < this.columns; j++){
                var aliveNeighbours = checkCellAliveNeighboursByCoordinates(i, j);
                if(this.cells[i][j].alive){
                    if(aliveNeighbours < 2 || aliveNeighbours > 3){
                        this.cells[i][j].setAlive(false);
                    }
                } else {
                    if(aliveNeighbours == 3){
                        this.cells[i][j].setAlive(true);
                    }
                }
            }
        }
    }
}