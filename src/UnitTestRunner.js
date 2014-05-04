console.log("Beginning unit tests...");
var verbose = false;

var results = {
    total: 0,
    bad: 0
};

testCreateUniverseRows(5);
testUniverseIncreaseRows(5, 7);
testUniverseDecreaseRows(5, 3);

testCreateUniverseColumns(5);
testUniverseIncreaseColumns(5, 7);
testUniverseDecreaseColumns(5, 3);

testCheckingCellNeighbours();
testCheckingCellNeighboursOn00();
testCheckingCellNeighboursOnIJ();

testCellComeToLife();
testCellSurvivesWithTwoNeighbours();
testCellSurvivesWithThreeNeighbours();
testCellDiesWithLessThanTwoNeighbours();
testCellDiesWithMoreThanThreeNeighbours();

console.log("Of " + results.total + " tests, " +
    results.bad + " failed, " +
    (results.total - results.bad) + " passed.");
