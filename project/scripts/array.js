const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function(result, item){
    return result + item;
}, 0);
console.log(sum);

const one = 1;
const returned = function(){
    return one + 2 +  `${' this snaswer is from a returned function'}`
}
const notReturned = function(){
    let three = one + 2 ;
    console.log(three)
}

notReturned();

const three = returned();

const functionTakingFunctionAsArgument= function(funct){
    
    return funct + ' taking function as an argument ' + returned();
}


const add = function(){
    return {
        addA(a,b){
            return a+b;
        },
        addB(b,c){
            return b*c
        }
       
    }
}

const result1 = add()

console.log(add(2, 3, 6), result1.addA(10,9))
const ret = functionTakingFunctionAsArgument(returned());

console.log(ret);

// console.log(notReturnthree)


