function processTransactions(transActions) {

    // Cleanup VAR & error throw
        let txr = [];
    if (transActions === undefined) throw new Error("Undefined collection of transactions");

    // REDUCE => get every trans from transActions, transAll inital blank object, index transAll object with transAction and increment from 1 upwards
    let txCount = transActions.reduce((transAll,trans) => (transAll[trans] = transAll[trans] + 1 || 1, transAll), {});

        // Simply Sort
        let sortedKeys = Object.keys(txCount).sort((itemOne, itemTwo) => txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo))

        // Sorted count objects
        let sortedResults = {};
        for(let objectKey of sortedKeys) {
            sortedResults[objectKey] = txCount[objectKey];
        }
        txCount = sortedResults;

        // Place them back in array for returning
        Object.keys(txCount).forEach(function (key, index) {
            txr[index] = `${key} ${txCount[key]}`;
        });

        return txr;
}

module.exports = processTransactions;