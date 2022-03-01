const processTransactions = (transActions) => {

    // Cleanup VAR & error throw
    if (transActions === undefined) throw new Error("Undefined collection of transactions");

    // Calculate the frequency of distinct transactions
    let txCount = transActions.reduce((allTxr, transaction) => 
        ({ ...allTxr, [transaction]: allTxr[transaction] + 1 || 1}), {});

    // Sort the keys based on value, if values are same sort the keys
    let sortedKeys = sortKeysByAmountThenName(txCount);

    // Map key followed by count and return    
    return sortedKeys.map(key => `${key} ${txCount[key]}`);
}

const sortKeysByAmountThenName = (txCount) =>
                    Object.keys(txCount).sort((itemOne, itemTwo) =>
                    (txCount[itemOne] === txCount[itemTwo]) ? itemOne.localeCompare(itemTwo) : txCount[itemTwo] - txCount[itemOne])

module.exports = processTransactions;