"use strict";
console.log("I am Yash");
//@ts-ignore
//note a and b are number and they should return a number as well so we are using another :number for it there
function sum(a, b) {
    return a + b;
}
// console.log(sum(5,13));
let naN = NaN;
// console.log(naN);
function isPalindrome(palin) {
    let s = palin.split("").reverse().join("");
    return palin === s;
}
// console.log(isPalindrome("12351"));
const array = [1, 2, 3, 4, 5];
const array1 = new Array(1, 2, 3, 4, 5);
// const names:string[] = Array.of("yash","somani","vivaan");
const stringy = array.filter((currElem) => currElem % 2 == 0);
// console.log(stringy);
const sum1 = array.reduce((a, curr) => {
    return a + curr;
});
const ans = sum1 / array.length;
// console.log(ans);
let maxi = Math.max(...array);
// const newName = names.push("Princy");
// console.log(newName);
// console.log(names);
const person = {
    name: "Yash",
    age: 23,
    isStudent: true,
    address: {
        city: "new delhi",
        country: "India",
    }
};
person.address.city = "Hyderabad";
const human = {
    name: "Beni",
    age: 22,
    isStudent: true,
    address: {
        city: "new delhi",
        country: "India",
    }
};
const student1 = {
    name: "Yash",
    age: 22,
    gender: "Male",
    greet(country) {
        return `My name is ${student1.name} , age is ${student1.age} and country is ${country}`;
    }
};
// console.log(student1.greet("India"));
// If you do not want always use that parameter in the object then
// name?: string -> this ? will make sure of this
