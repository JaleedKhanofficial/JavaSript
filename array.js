// Array 

const myArray = [0,1, 2, 3, 4, 5];
// myArray.push(6); 
// console.log(myArray);

// const removedElement = myArray.pop(); 
// console.log(removedElement); 
// console.log(myArray);

// const shiftedElement = myArray.shift();
// console.log(shiftedElement);
// console.log(myArray);

//slice, splice 

console.log("A",myArray);
const new1 = myArray.slice(1,3);
console.log(new1);

console.log('B',myArray);
const new2 = myArray.splice(1,3);
console.log(new2);