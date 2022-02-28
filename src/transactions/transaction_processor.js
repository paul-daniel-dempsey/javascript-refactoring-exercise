function processTransactions(transActions) {

    let txr = [];

    if (transActions === undefined) throw new Error("Undefined collection of transactions");

    // Reduce to count instances
    let txCount = transActions.reduce((allTransactions, transaction) => 
                                  (allTransactions[transaction] = allTransactions[transaction] + 1 || 1, allTransactions), {});



    console.log(`before (txCount): ${txCount}`);
    //
    //txCount = sortByAmountThenName(txCount);

    //const txCountCopy = Object.entries(txCount).sort(function sortingFunction(itemOne, itemTwo) {
    //    return  txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo)});
    const txCountCopy = Object.entries(txCount).sort();

    //const txCountCopy = Object.values(txCount).sort();
    //const txCountCopy = Object.keys(txCount).sort();

   //console.log(txr);
    for (i=0;i<txCountCopy.length;i++) {
        //txr[i] = `${txCountCopy[i][0]} ${txCountCopy[i][1]}`;
        txr.push(`${txCountCopy[i][0]} ${txCountCopy[i][1]}`);
    }
    console.log("After Sort ->" + txCountCopy + " Length "+ txCountCopy.length );

//    console.log(`after (txCount): ${txCount}`);

    // Place them back in array for returning
    // Object.keys(txCount).forEach(function (key, index) {
    //     txr[index] = `${key} ${txCount[key]}`;
    // });

    return txr;
}

function sortByAmountThenName(txCount) {
    
    
    console.log(`Sort Object Entries ${Object.entries(txCount).sort()}`);
    let sortedResults = {};
    // let sortKeys = Object.entries(txCount).sort();
    // for(let objectKey of sortKeys) {
    //      sortedResults[objectKey] = txCount[objectKey];
    // }
    
    return sortedResults;

    // console.log(`before (txCount): ${Object.entries(txCount)}`);
    // let sortedKeys = Object.keys(txCount).sort(function sortingFunction(itemOne, itemTwo) {
    //     return  txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo)}
    // );
    // console.log(`after (txCount): ${Object.entries(txCount)}`);
    // console.log(`after (sortedKeys): ${sortedKeys}`);

    // let sortedResults = {};
    // for(let objectKey of sortedKeys) {
    //     sortedResults[objectKey] = txCount[objectKey];
    // }
    // console.log(`after (sortedResults): ${Object.entries(sortedResults)}`);

    // return sortedResults;
}


function validateTransactions(transactions) {
    if(transactions === undefined) {
        return false;
    } 

    return true;
}

module.exports = processTransactions;