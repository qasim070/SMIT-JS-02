function adder(num1) {
    return function adderInner(num2) {
        return num2 + num1;
    };
}


let addFive = adder(5);
console.log(addFive(10));