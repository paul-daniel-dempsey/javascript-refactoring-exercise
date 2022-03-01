const processTransactions = (transActions) => {

    // Cleanup VAR & error throw
    if (transActions === undefined) throw new Error("Undefined collection of transactions");

    // Calculate the frequency of distinct transactions
    let txCount = transActions.reduce((allTxr, transaction) => 
        ({ ...allTxr, [transaction]: allTxr[transaction] + 1 || 1}), {});

    
    let sortedKeys = sortByAmountThenName(txCount);

    // Map key followed by count and return    
    return sortedKeys.map(key => `${key} ${txCount[key]}`);
}

const sortByAmountThenName = (txCount) =>
    // Sort parameters ->
    // valueTwo > valueOne = POSTIVE (True) or NEGATIVE ( false) or ZERO (false) 
    // itemOne > itemTwo = Alphabetical Comparison (First Greater Than Second = TRUE ) 
    // -(itemOne < itemTwo) = Alphabetical Comparison (First Less Than Second = -1/FALSE)
    Object.keys(txCount).sort((itemOne, itemTwo) => txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo))

module.exports = processTransactions;