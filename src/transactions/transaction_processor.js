function processTransactions(transActions) {

    // Cleanup VAR & error throw
    if (transActions === undefined) throw new Error("Undefined collection of transactions");

    // REDUCE => get every trans from transActions, transAll inital blank object, index transAll object with transAction and increment from 1 upwards
    let txCount = transActions.reduce((transAll,trans) => (transAll[trans] = transAll[trans] + 1 || 1, transAll), {});

    // SORT parameters =>
    // valueTwo > valueOne = POSTIVE (True) or NEGATIVE ( false) or ZERO (false) 
    // itemOne > itemTwo = Alphabetical Comparison (First Greater Than Second = TRUE ) 
    // -(itemOne < itemTwo) = Alphabetical Comparison (First Less Than Second = -1/FALSE)
    // MAP => key followed by count
    return Object.keys(txCount).sort((itemOne, itemTwo) => txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo))
                               .map(key => `${key} ${txCount[key]}`);
}

module.exports = processTransactions;