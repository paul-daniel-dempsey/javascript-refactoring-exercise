function processTransactions(transActions) {

    // Cleanup VAR & error throw
    if (transActions === undefined) throw new Error("Undefined collection of transactions");

    // Calculate the frequency of distinct transactions
    let txCount = transActions.reduce((allTxr, transaction) => 
        ({ ...allTxr, [transaction]: allTxr[transaction] + 1 || 1}), {});

    // SORT parameters =>
    // valueTwo > valueOne = POSTIVE (True) or NEGATIVE ( false) or ZERO (false) 
    // itemOne > itemTwo = Alphabetical Comparison (First Greater Than Second = TRUE ) 
    // -(itemOne < itemTwo) = Alphabetical Comparison (First Less Than Second = -1/FALSE)
    // MAP => key followed by count
    return Object.keys(txCount).sort((itemOne, itemTwo) => txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo))
                               .map(key => `${key} ${txCount[key]}`);
}

module.exports = processTransactions;