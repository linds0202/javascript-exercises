const removeFromArray = function(arr, ...args) {
    return arr.filter(entry => !args.includes(entry))
};

// Do not edit below this line
module.exports = removeFromArray;
