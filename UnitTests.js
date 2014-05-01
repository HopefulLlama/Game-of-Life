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

function testCreateUniverseRows(){
    var name = arguments.callee.name;
    var rows = 5;
    var testUniverse = new Universe(rows, 5);
    var passed = true;
    if(testUniverse.cells.length != rows){
        passed = false;
    }
    processResults(passed, name, rows, testUniverse.cells.length);
}

function testUniverseIncreaseRows(){
    var name = arguments.callee.name;
    var rows = 5;
    var testUniverse = new Universe(rows, 5);
    var passed = true;
    if(testUniverse.cells.length != rows){
        passed = false;
    }
    processResults(passed, name+ ".PROBE-01", rows, testUniverse.cells.length);
    if(passed) {
        var newRows = 7;
        testUniverse.setRows(newRows);
        if (testUniverse.cells.length != newRows) {
            passed = false;
        }
        processResults(passed, name+ ".PROBE-02", newRows, testUniverse.cells.length);
    }
}

function testUniverseDecreaseRows(){
    var name = arguments.callee.name;
    var rows = 5;
    var testUniverse = new Universe(rows, 5);
    var passed = true;
    if(testUniverse.cells.length != rows){
        passed = false;
    }
    processResults(passed, name+ ".PROBE-01", rows, testUniverse.cells.length);
    if(passed) {
        var newRows = 3;
        testUniverse.setRows(newRows);
        if (testUniverse.cells.length != newRows) {
            passed = false;
        }
        processResults(passed, name+ ".PROBE-02", newRows, testUniverse.cells.length);
    }
}

function testCreateUniverseColumns(){
    var name = arguments.callee.name;
    var columns = 5;
    var testUniverse = new Universe(5, columns);
    var passed = true;
    if(testUniverse.cells[0].length != columns){
        passed = false;
    }
    processResults(passed, name, columns, testUniverse.cells[0].length);
}

function testUniverseIncreaseColumns(){
    var name = arguments.callee.name;
    var columns = 5;
    var testUniverse = new Universe(5, columns);
    var passed = true;
    if(testUniverse.cells[0].length != columns){
        passed = false;
    }
    processResults(passed, name+ ".PROBE-01", columns, testUniverse.cells[0].length);
    if(passed) {
        var newColumns = 7;
        testUniverse.setColumns(newColumns);
        if (testUniverse.cells[0].length != newColumns) {
            passed = false;
        }
        processResults(passed, name+ ".PROBE-02", newColumns, testUniverse.cells[0].length);
    }
}

function testUniverseDecreaseColumns(){
    var name = arguments.callee.name;
    var columns = 5;
    var testUniverse = new Universe(5, columns);
    var passed = true;
    if(testUniverse.cells[0].length != columns){
        passed = false;
    }
    processResults(passed, name+ ".PROBE-01", columns, testUniverse.cells[0].length);
    if(passed) {
        var newColumns = 3;
        testUniverse.setColumns(newColumns);
        if (testUniverse.cells[0].length != newColumns) {
            passed = false;
        }
        processResults(passed, name+ ".PROBE-02", newColumns, testUniverse.cells[0].length);
    }
}