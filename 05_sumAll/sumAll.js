const sumAll = function(a, b) {
    if (a < 0 || b < 0) return 'ERROR'
    
    if (isNaN(a) || isNaN(b) || typeof(a) !== typeof(Number(a)) || typeof(b) !== typeof(Number(b))) return 'ERROR'

    if (a > b) {
        let temp = a
        a = b
        b = temp
    }
    
    let total = 0
    for(let i = a; i <= b; i++) {
        total += i
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
