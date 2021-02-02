const numbers = [3,4,5,6,7,8];
const square = [];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const squareNumber = number * number;
    square.push(squareNumber);
}


// array map return an array
const square = numbers.map(function(number){
    return number * number;
});

const square = numbers.map((element) =>{
    return element * element;
})

const square = numbers.map(element => element * element);

const makeSsquare = numbers.map((element, index, array) => {
    console.log("Element", element, "Element index position", index, "array", array);
})

// console.log(square);

// array filter return an array
const biggerNumber = numbers.filter(element => {
    return element < 6;
})
console.log(biggerNumber);


// array find 
const isThere = numbers.find(element => {
    return element > 5;
})

console.log(isThere);