const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function(result, item){
    return result + item;
}, 0);
console.log(sum);