function processTransactions(transactions) {

    if (transactions===undefined)
        throw new Error("Undefined collection of transactions")

    let txCount = transactions.reduce((acc, curr) => {
        acc[curr]?(acc[curr]++):(acc[curr]=1);
        return acc;
    }, {});

    return Object.keys(txCount).sort((itemOne, itemTwo) => (txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo)))
    .map((key) => `${key} ${txCount[key]}`)
}

module.exports = processTransactions;