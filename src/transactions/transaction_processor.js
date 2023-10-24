//remove var and declare inside processTransactions
//var txr = [];

//replace transActions with transactions
function processTransactions(transactions) {

    //add const for  and rename as txArray
    const txArray = [];

    //replace below function with a simple if logic
    /*if(!validateTransactions(transactions)) {
        throw new Error("Undefined collection of transactions")
    }*/
    if (transactions===undefined)
        throw new Error("Undefined collection of transactions")

    let txCount = {}

    //adding below in the for loop header
   //const numberOfTransactions = transactions.length;

    //change var to let
    //add transactions.length in the for loop header
    for(let i = 0; i < transactions.length; i++) {
        const transaction = transactions[i];
        txCount[transaction] ? txCount[transaction] += 1 : txCount[transaction] = 1;
    }

    txCount = sortByAmountThenName(txCount);
    
    // Place them back in array for returning
    //replace for eaxch with map
    //Object.keys(txCount).map((key) => `${key} ${txCount[key]}`)
    Array.from(txCount)
    Object.keys(txCount).forEach(function (key, index) {
        txArray[index] = `${key} ${txCount[key]}`;
    });

    return txArray;
}

function sortByAmountThenName(txCount) {
    //replace let with const
    const sortedKeys = Object.keys(txCount).sort(function sortingFunction(itemOne, itemTwo) {
        return  txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo)}
    );

    //replace 2 lets with const
    const sortedResults = {};
    for(const objectKey of sortedKeys) {
        sortedResults[objectKey] = txCount[objectKey];
    }

    return sortedResults;
}

//blocking bc this functionality is added into processTransactions function 
/*function validateTransactions(transactions) {
    if(transactions === undefined) {
        return false;
    } 

    return true;
}*/

module.exports = processTransactions;