function processTransactions(transactions) {

    if (transactions===undefined)
        throw new Error("Undefined collection of transactions")

    const txCountMap = transactions.reduce((acc, curr) => {
        acc[curr]?(acc[curr]++):(acc[curr]=1);
        return acc;
    }, {});

    return Object.keys(txCountMap).sort((itemOne, itemTwo) => (txCountMap[itemTwo] - txCountMap[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo)))
    .map((key) => `${key} ${txCountMap[key]}`)
}

module.exports = processTransactions;