function processResults(passed, testName, expected, actual){
    if(!passed){
        results.bad++;
        console.log("    " + testName + ": Expected " + String(expected) + ", but was " + String(actual));
    } else {
        if(verbose){
            console.log("    " + testName + ": expecting " + String(expected) + " passed.");
        }
    }
}

function testCreateGridColumns(columns){
    var name = arguments.callee.name;
    results.total++;

    var testGrid = new Grid(columns, 5);
    var passed = true;
    if(testGrid.cells.length != columns){
        passed = false;
    }
    processResults(passed, name, columns, testGrid.cells.length);
}

function testGridIncreaseColumns(originalColumns, newColumns){
    var name = arguments.callee.name;
    results.total++;

    var testGrid = new Grid(originalColumns, 5);
    var passed = true;
    if(testGrid.cells.length != originalColumns){
        passed = false;
    }
    processResults(passed, name+ ".PROBE-01", originalColumns, testGrid.cells.length);
    if(passed) {
        testGrid.setColumns(newColumns);
        if (testGrid.cells.length != newColumns) {
            passed = false;
        }
        processResults(passed, name+ ".PROBE-02", newColumns, testGrid.cells.length);
    }
}

function testGridDecreaseColumns(originalColumns, newColumns){
    var name = arguments.callee.name;
    results.total++;

    var testGrid = new Grid(originalColumns, 5);
    var passed = true;
    if(testGrid.cells.length != originalColumns){
        passed = false;
    }
    processResults(passed, name+ ".PROBE-01", originalColumns, testGrid.cells.length);
    if(passed) {
        var newColumns = 3;
        testGrid.setColumns(newColumns);
        if (testGrid.cells.length != newColumns) {
            passed = false;
        }
        processResults(passed, name+ ".PROBE-02", newColumns, testGrid.cells.length);
    }
}

function testCreateGridRows(rows){
    var name = arguments.callee.name;
    results.total++;

    var testGrid = new Grid(5, rows);
    var passed = true;
    if(testGrid.cells[0].length != rows){
        passed = false;
    }
    processResults(passed, name, rows, testGrid.cells[0].length);
}

function testGridIncreaseRows(originalRows, newRows){
    var name = arguments.callee.name;
    results.total++;

    var testGrid = new Grid(5, originalRows);
    var passed = true;
    if(testGrid.cells[0].length != originalRows){
        passed = false;
    }
    processResults(passed, name+ ".PROBE-01", originalRows, testGrid.cells[0].length);
    if(passed) {
        testGrid.setRows(newRows);
        if (testGrid.cells[0].length != newRows) {
            passed = false;
        }
        processResults(passed, name+ ".PROBE-02", newRows, testGrid.cells[0].length);
    }
}

function testGridDecreaseRows(originalRows, newRows){
    var name = arguments.callee.name;
    results.total++;

    var testGrid = new Grid(5, originalRows);
    var passed = true;
    if(testGrid.cells[0].length != originalRows){
        passed = false;
    }
    processResults(passed, name+ ".PROBE-01", originalRows, testGrid.cells[0].length);
    if(passed) {
        testGrid.setRows(newRows);
        if (testGrid.cells[0].length != newRows) {
            passed = false;
        }
        processResults(passed, name+ ".PROBE-02", newRows, testGrid.cells[0].length);
    }
}

function testCheckingCellNeighbours(){
    var name = arguments.callee.name;
    results.total++;

    var testGrid = new Grid(5, 5);

    testGrid.cells[0][0].alive = true;
    testGrid.cells[0][1].alive = true;
    testGrid.cells[0][2].alive = true;

    var passed = true;
    var expectedAliveNeighbours = 3;
    var actualAliveNeighbours = testGrid.checkCellAliveNeighbours(1, 1);
    if(actualAliveNeighbours != 3){
        passed = false;
    }
    processResults(passed, name, expectedAliveNeighbours, actualAliveNeighbours);
}

function testCheckingCellNeighboursOn00(){
    var name = arguments.callee.name;
    results.total++;

    var testGrid = new Grid(5, 5);

    testGrid.cells[0][1].alive = true;
    testGrid.cells[1][1].alive = true;
    testGrid.cells[1][0].alive = true;

    var passed = true;
    var expectedAliveNeighbours = 3;
    var actualAliveNeighbours = testGrid.checkCellAliveNeighbours(0, 0);
    if(actualAliveNeighbours != 3){
        passed = false;
    }
    processResults(passed, name, expectedAliveNeighbours, actualAliveNeighbours);
}

function testCheckingCellNeighboursOnIJ(){
    var name = arguments.callee.name;
    results.total++;

    var testGrid = new Grid(5, 5);

    testGrid.cells[3][4].alive = true;
    testGrid.cells[3][3].alive = true;
    testGrid.cells[4][3].alive = true;

    var passed = true;
    var expectedAliveNeighbours = 3;
    var actualAliveNeighbours = testGrid.checkCellAliveNeighbours(4, 4);
    if(actualAliveNeighbours != 3){
        passed = false;
    }
    processResults(passed, name, expectedAliveNeighbours, actualAliveNeighbours);
}

function testCellComeToLife(){
    var name = arguments.callee.name;
    results.total++;

    var testGrid = new Grid(5, 5);

    testGrid.cells[2][1].setAlive(true);
    testGrid.cells[1][2].setAlive(true);
    testGrid.cells[1][3].setAlive(true);

    var passed = true;

    testGrid.setNextGeneration();
    if(!testGrid.cells[2][2].alive){
        passed = false;
    }

    processResults(passed, name, true, testGrid.cells[2][2].alive);
}

function testCellDiesWithLessThanTwoNeighbours(){
    var name = arguments.callee.name;
    results.total++;

    var testGrid = new Grid(5, 5);

    // Test Cell
    testGrid.cells[2][2].setAlive(true);

    // Test Neighbours
    testGrid.cells[1][2].setAlive(true);

    var passed = true;

    testGrid.setNextGeneration();
    if(testGrid.cells[2][2].alive){
        passed = false;
    }

    processResults(passed, name, true, testGrid.cells[2][2].alive);
}

function testCellDiesWithMoreThanThreeNeighbours(){
    var name = arguments.callee.name;
    results.total++;

    var testGrid = new Grid(5, 5);

    // Test Cell
    testGrid.cells[2][2].setAlive(true);

    // Test Neighbours
    testGrid.cells[1][2].setAlive(true);
    testGrid.cells[3][2].setAlive(true);
    testGrid.cells[2][1].setAlive(true);
    testGrid.cells[2][3].setAlive(true);

    var passed = true;

    testGrid.setNextGeneration();
    if(testGrid.cells[2][2].alive){
        passed = false;
    }

    processResults(passed, name, true, testGrid.cells[2][2].alive);
}

function testCellSurvivesWithTwoNeighbours(){
    var name = arguments.callee.name;
    results.total++;

    var testGrid = new Grid(5, 5);

    // Test Cell
    testGrid.cells[2][2].setAlive(true);

    // Test Neighbours
    testGrid.cells[1][2].setAlive(true);
    testGrid.cells[3][2].setAlive(true);

    var passed = true;

    testGrid.setNextGeneration();
    if(!testGrid.cells[2][2].alive){
        passed = false;
    }

    processResults(passed, name, true, testGrid.cells[2][2].alive);
}

function testCellSurvivesWithThreeNeighbours(){
    var name = arguments.callee.name;
    results.total++;

    var testGrid = new Grid(5, 5);

    // Test Cell
    testGrid.cells[2][2].setAlive(true);

    // Test Neighbours
    testGrid.cells[1][2].setAlive(true);
    testGrid.cells[3][2].setAlive(true);
    testGrid.cells[2][1].setAlive(true);

    var passed = true;

    testGrid.setNextGeneration();
    if(!testGrid.cells[2][2].alive){
        passed = false;
    }

    processResults(passed, name, true, testGrid.cells[2][2].alive);
}

