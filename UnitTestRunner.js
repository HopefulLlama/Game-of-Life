console.log("Beginning unit tests...");
var verbose = true;

var results = {
    total: 0,
    bad: 0
};

testCreateUniverseRows();
testUniverseIncreaseRows();
testUniverseDecreaseRows();

testCreateUniverseColumns();
testUniverseIncreaseColumns();
testUniverseDecreaseColumns();