"use strict"


let numbers = [1, 2, 3, 4, 5, 6];
let dividedIntoFive = numbers.filter(n => n % 5 == 0)

console.log(dividedIntoFive);
console.log(numbers.map(n => n*=2));
console.log(numbers.filter(n => n%2 == 0).reduce((sum, number)=> sum+=number))

let emails = ["elmarni@code.edu.az", "kamranso@code.edu.az"]
console.log(emails.find(n => n.indexOf("@")));
