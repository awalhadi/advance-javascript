function watch() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const number = watch();
const number1 = number();
const number2 = number();
const number3 = number();
const number4 = number();
console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);

const second = watch();
const second1 = second();
const second2 = second();
const second3 = second();
const number5 = number();
const second5 = second();
console.log(second1);
console.log(second2);
console.log(second3);
console.log(number5);
console.log(second5);
