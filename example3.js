function sum(a) {
    return function(b) {
        return a + b
    }
}

const getSum = sum(5);

const summary = getSum(8)

console.log(summary);