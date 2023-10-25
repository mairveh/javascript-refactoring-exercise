//remove var and declare inside processTransactions
//var txr = [];

//replace transActions with transactions
function processTransactions(transactions) {

    //replace below function with a simple if logic
    /*if(!validateTransactions(transactions)) {
        throw new Error("Undefined collection of transactions")
    }*/
    if (transactions===undefined)
        throw new Error("Undefined collection of transactions")

    //remove the declaration and put it in Array.reduce below
    //let txCount = {}

    //remove below because it's not needed in Array.reduce which is being used instead
    //const numberOfTransactions = transactions.length;

    //change var to let
    //add transactions.length in the for loop header
    let txCount = transactions.reduce((acc, curr) => {
        acc[curr]?(acc[curr]++):(acc[curr]=1);
        return acc;
    }, {});

    txCount = sortByAmountThenName(txCount);
    
    //Rename as txArray and move below
    let txArray = [];
    //Replace forEach below with map 
    // Place them back in array for returning
    /*Object.keys(txCount).forEach(function (key, index) {
        txArray[index] = `${key} ${txCount[key]}`;
    });*/
    txArray = Object.keys(txCount).map((key) => `${key} ${txCount[key]}`)

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