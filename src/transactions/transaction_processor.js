function processTransactions(transActions) {

    // Cleanup VAR & error throw
    let txr = [];
    if (transActions === undefined) throw new Error("Undefined collection of transactions");

    // REDUCE => get every trans from transActions, transAll inital blank object, index transAll object with transAction and increment from 1 upwards
    let txCount = transActions.reduce((transAll,trans) => (transAll[trans] = transAll[trans] + 1 || 1, transAll), {});

    txCount = sortByAmountThenName(txCount);
    
    // Place them back in array for returning
    Object.keys(txCount).forEach(function (key, index) {
        txr[index] = `${key} ${txCount[key]}`;
    });

    return txr;
}

function sortByAmountThenName(txCount) {
    let sortedKeys = Object.keys(txCount).sort(function sortingFunction(itemOne, itemTwo) {
        return  txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo)}
    );

    let sortedResults = {};
    for(let objectKey of sortedKeys) {
        sortedResults[objectKey] = txCount[objectKey];
    }

    return sortedResults;
}

module.exports = processTransactions;