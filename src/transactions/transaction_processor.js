function processTransactions(transactions) {

    if (transactions===undefined)
        throw new Error("Undefined collection of transactions")

    let txCount = transactions.reduce((acc, curr) => {
        acc[curr]?(acc[curr]++):(acc[curr]=1);
        return acc;
    }, {});

    let txArray = [];
    txArray = Object.keys(txCount).sort((itemOne, itemTwo) => (txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo)))
    txArray = txArray.map((key) => `${key} ${txCount[key]}`)

    return txArray;
}

module.exports = processTransactions;