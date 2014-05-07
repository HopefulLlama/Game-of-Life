console.log("Beginning unit tests...");
var verbose = false;

var results = {
    total: 0,
    bad: 0
};

testCreateGridRows(5);
testGridIncreaseRows(5, 7);
testGridDecreaseRows(5, 3);

testCreateGridColumns(5);
testGridIncreaseColumns(5, 7);
testGridDecreaseColumns(5, 3);

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
