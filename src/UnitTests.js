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

function testCreateUniverseColumns(columns){
    var name = arguments.callee.name;
    results.total++;

    var testUniverse = new Universe(columns, 5);
    var passed = true;
    if(testUniverse.cells.length != columns){
        passed = false;
    }
    processResults(passed, name, columns, testUniverse.cells.length);
}

function testUniverseIncreaseColumns(originalColumns, newColumns){
    var name = arguments.callee.name;
    results.total++;

    var testUniverse = new Universe(originalColumns, 5);
    var passed = true;
    if(testUniverse.cells.length != originalColumns){
        passed = false;
    }
    processResults(passed, name+ ".PROBE-01", originalColumns, testUniverse.cells.length);
    if(passed) {
        testUniverse.setColumns(newColumns);
        if (testUniverse.cells.length != newColumns) {
            passed = false;
        }
        processResults(passed, name+ ".PROBE-02", newColumns, testUniverse.cells.length);
    }
}

function testUniverseDecreaseColumns(originalColumns, newColumns){
    var name = arguments.callee.name;
    results.total++;

    var testUniverse = new Universe(originalColumns, 5);
    var passed = true;
    if(testUniverse.cells.length != originalColumns){
        passed = false;
    }
    processResults(passed, name+ ".PROBE-01", originalColumns, testUniverse.cells.length);
    if(passed) {
        var newColumns = 3;
        testUniverse.setColumns(newColumns);
        if (testUniverse.cells.length != newColumns) {
            passed = false;
        }
        processResults(passed, name+ ".PROBE-02", newColumns, testUniverse.cells.length);
    }
}

function testCreateUniverseRows(rows){
    var name = arguments.callee.name;
    results.total++;

    var testUniverse = new Universe(5, rows);
    var passed = true;
    if(testUniverse.cells[0].length != rows){
        passed = false;
    }
    processResults(passed, name, rows, testUniverse.cells[0].length);
}

function testUniverseIncreaseRows(originalRows, newRows){
    var name = arguments.callee.name;
    results.total++;

    var testUniverse = new Universe(5, originalRows);
    var passed = true;
    if(testUniverse.cells[0].length != originalRows){
        passed = false;
    }
    processResults(passed, name+ ".PROBE-01", originalRows, testUniverse.cells[0].length);
    if(passed) {
        testUniverse.setRows(newRows);
        if (testUniverse.cells[0].length != newRows) {
            passed = false;
        }
        processResults(passed, name+ ".PROBE-02", newRows, testUniverse.cells[0].length);
    }
}

function testUniverseDecreaseRows(originalRows, newRows){
    var name = arguments.callee.name;
    results.total++;

    var testUniverse = new Universe(5, originalRows);
    var passed = true;
    if(testUniverse.cells[0].length != originalRows){
        passed = false;
    }
    processResults(passed, name+ ".PROBE-01", originalRows, testUniverse.cells[0].length);
    if(passed) {
        testUniverse.setRows(newRows);
        if (testUniverse.cells[0].length != newRows) {
            passed = false;
        }
        processResults(passed, name+ ".PROBE-02", newRows, testUniverse.cells[0].length);
    }
}

function testCheckingCellNeighbours(){
    var name = arguments.callee.name;
    results.total++;

    var testUniverse = new Universe(5, 5);

    testUniverse.cells[0][0].alive = true;
    testUniverse.cells[0][1].alive = true;
    testUniverse.cells[0][2].alive = true;

    var passed = true;
    var expectedAliveNeighbours = 3;
    var actualAliveNeighbours = testUniverse.checkCellAliveNeighbours(1, 1);
    if(actualAliveNeighbours != 3){
        passed = false;
    }
    processResults(passed, name, expectedAliveNeighbours, actualAliveNeighbours);
}

function testCheckingCellNeighboursOn00(){
    var name = arguments.callee.name;
    results.total++;

    var testUniverse = new Universe(5, 5);

    testUniverse.cells[0][1].alive = true;
    testUniverse.cells[1][1].alive = true;
    testUniverse.cells[1][0].alive = true;

    var passed = true;
    var expectedAliveNeighbours = 3;
    var actualAliveNeighbours = testUniverse.checkCellAliveNeighbours(0, 0);
    if(actualAliveNeighbours != 3){
        passed = false;
    }
    processResults(passed, name, expectedAliveNeighbours, actualAliveNeighbours);
}

function testCheckingCellNeighboursOnIJ(){
    var name = arguments.callee.name;
    results.total++;

    var testUniverse = new Universe(5, 5);

    testUniverse.cells[3][4].alive = true;
    testUniverse.cells[3][3].alive = true;
    testUniverse.cells[4][3].alive = true;

    var passed = true;
    var expectedAliveNeighbours = 3;
    var actualAliveNeighbours = testUniverse.checkCellAliveNeighbours(4, 4);
    if(actualAliveNeighbours != 3){
        passed = false;
    }
    processResults(passed, name, expectedAliveNeighbours, actualAliveNeighbours);
}

function testCellComeToLife(){
    var name = arguments.callee.name;
    results.total++;

    var testUniverse = new Universe(5, 5);

    testUniverse.cells[2][1].setAlive(true);
    testUniverse.cells[1][2].setAlive(true);
    testUniverse.cells[1][3].setAlive(true);

    var passed = true;

    testUniverse.setNextGeneration();
    if(!testUniverse.cells[2][2].alive){
        passed = false;
    }

    processResults(passed, name, true, testUniverse.cells[2][2].alive);
}

function testCellDiesWithLessThanTwoNeighbours(){
    var name = arguments.callee.name;
    results.total++;

    var testUniverse = new Universe(5, 5);

    // Test Cell
    testUniverse.cells[2][2].setAlive(true);

    // Test Neighbours
    testUniverse.cells[1][2].setAlive(true);

    var passed = true;

    testUniverse.setNextGeneration();
    if(testUniverse.cells[2][2].alive){
        passed = false;
    }

    processResults(passed, name, true, testUniverse.cells[2][2].alive);
}

function testCellDiesWithMoreThanThreeNeighbours(){
    var name = arguments.callee.name;
    results.total++;

    var testUniverse = new Universe(5, 5);

    // Test Cell
    testUniverse.cells[2][2].setAlive(true);

    // Test Neighbours
    testUniverse.cells[1][2].setAlive(true);
    testUniverse.cells[3][2].setAlive(true);
    testUniverse.cells[2][1].setAlive(true);
    testUniverse.cells[2][3].setAlive(true);

    var passed = true;

    testUniverse.setNextGeneration();
    if(testUniverse.cells[2][2].alive){
        passed = false;
    }

    processResults(passed, name, true, testUniverse.cells[2][2].alive);
}

function testCellSurvivesWithTwoNeighbours(){
    var name = arguments.callee.name;
    results.total++;

    var testUniverse = new Universe(5, 5);

    // Test Cell
    testUniverse.cells[2][2].setAlive(true);

    // Test Neighbours
    testUniverse.cells[1][2].setAlive(true);
    testUniverse.cells[3][2].setAlive(true);

    var passed = true;

    testUniverse.setNextGeneration();
    if(!testUniverse.cells[2][2].alive){
        passed = false;
    }

    processResults(passed, name, true, testUniverse.cells[2][2].alive);
}

function testCellSurvivesWithThreeNeighbours(){
    var name = arguments.callee.name;
    results.total++;

    var testUniverse = new Universe(5, 5);

    // Test Cell
    testUniverse.cells[2][2].setAlive(true);

    // Test Neighbours
    testUniverse.cells[1][2].setAlive(true);
    testUniverse.cells[3][2].setAlive(true);
    testUniverse.cells[2][1].setAlive(true);

    var passed = true;

    testUniverse.setNextGeneration();
    if(!testUniverse.cells[2][2].alive){
        passed = false;
    }

    processResults(passed, name, true, testUniverse.cells[2][2].alive);
}

