function Grid(columns, rows){
    this.rows = rows;
    this.columns = columns;

    this.cells = [];

    this.setRows = setRows;
    function setRows(rows){
        this.rows = rows;
        this.setCellsArrays();
    }

    this.setColumns = setColumns;
    function setColumns(columns){
        this.columns = columns;
        this.setCellsArrays();
    }

    this.setCellsArrays = setCellsArrays;
    function setCellsArrays(){
        if(this.columns > this.cells.length){
            for(var i = this.cells.length; i < this.columns; i++){
                this.cells[i] = [];
                for(var j = 0; j < this.rows; j++){
                    this.cells[i][j] = new Cell();
                }
            }
        } else if(this.columns < this.cells.length) {
            var i = this.cells.length - this.columns;
            this.cells.splice(this.columns-1, i);
        }

        var universe = this;
        if(this.rows > this.cells[0].length){
            this.cells.forEach(function(row){
                for(var j = row.length; j < universe.rows; j++){
                    row[j] = new Cell();
                }
            });
        } else if (this.rows < this.cells[0].length){
            var j = this.cells[0].length - universe.rows;
            this.cells.forEach(function(row){
                row.splice(universe.rows-1, j);
            });
        }
    }

    this.setCellsArrays();

    this.checkCellAliveNeighbours = checkCellAliveNeighbours;
    function checkCellAliveNeighbours(column, row){
        var aliveNeighbours = 0;
        var neighbours = [];
        if(column>0){
            neighbours.push(this.cells[column-1][row]);
            if(row>0){
                neighbours.push(this.cells[column-1][row-1]);
            }
            if(row<this.rows-1){
                neighbours.push(this.cells[column-1][row+1]);
            }
        }

        if(column<this.columns-1){
            neighbours.push(this.cells[column+1][row]);
            if(row>0){
                neighbours.push(this.cells[column+1][row-1]);
            }
            if(row<this.rows-1){
                neighbours.push(this.cells[column+1][row+1]);
            }
        }

        if(row>0){
            neighbours.push(this.cells[column][row-1]);
        }
        if(row<this.rows-1){
            neighbours.push(this.cells[column][row+1]);
        }

        neighbours.forEach(function (neighbour){
            if(neighbour.alive){
                aliveNeighbours++;
            }
        });
        return aliveNeighbours;
    }

    this.setNextGeneration = setNextGeneration;
    function setNextGeneration(){
        var nextGeneration = [];
        for(var i = 0; i < this.columns; i++){
            nextGeneration[i] = [];
            for(var j = 0; j < this.rows; j++){
                nextGeneration[i][j] = new Cell();
                var aliveNeighbours = this.checkCellAliveNeighbours(i, j);
                if( (this.cells[i][j].alive && aliveNeighbours == 2) || (aliveNeighbours == 3) ){
                    nextGeneration[i][j].setAlive(true);
                }
            }
        }
        this.cells = nextGeneration;
    }

}