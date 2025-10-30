// false Value
// 0, -0, null, undefined, NaN, "", '',``, BigInt On

// true Value
// "0" , "fasle", " ",[], {}, function(){}, new Date(), 42, -42, 3.14, -3.14, Infinity, -Infinity, BigInt(1)

//Nullish Cosalescing Operator (??)

let val1;
// val1 = 5 ?? 10;

// val1 = null ?? 10;
// val1 = undefined ?? 10;
val1 = null ?? undefined ?? "Hello" ?? 10;

// console.log(val1);

//================= ternary Operator

// condition ? true : false 

let age = 17;

let canVote = (age >= 18) ? "You can Vote" : "You cannot Vote";

console.log(canVote);