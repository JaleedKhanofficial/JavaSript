// Stack and Heap
// let myUserName = 'Jaleed khan';
// let anotherUserName = myUserName;
// console.log(anotherUserName);
// anotherUserName = 'Junaid khan';
// console.log(anotherUserName);

let userOne = {
    userName: 'Jaleed khan',
    password: '12345'
}
let userTwo = userOne;
userTwo.userName = 'Junaid khan';
console.log(userTwo.userName);
console.log(userTwo.userName)