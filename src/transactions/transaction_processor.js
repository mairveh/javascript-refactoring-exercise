function processTransactions(transactions) {

    if (transactions===undefined)
        throw new Error("Undefined collection of transactions")

    let txCount = transactions.reduce((acc, curr) => {
        acc[curr]?(acc[curr]++):(acc[curr]=1);
        return acc;
    }, {});

    txCount = sortByAmountThenName(txCount);
    
    let txArray = [];
    txArray = Object.keys(txCount).map((key) => `${key} ${txCount[key]}`)

    return txArray;
}

function sortByAmountThenName(txCount) {
    const sortedKeys = Object.keys(txCount).sort(function sortingFunction(itemOne, itemTwo) {
        return  txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo)}
    );

    const sortedResults = {};
    for(const objectKey of sortedKeys) {
        sortedResults[objectKey] = txCount[objectKey];
    }

    return sortedResults;
}

module.exports = processTransactions;