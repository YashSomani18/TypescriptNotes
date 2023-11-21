console.log("I am Yash");
//@ts-ignore

//note a and b are number and they should return a number as well so we are using another :number for it there

function sum (a:number,b:number):number{
    return a+b;
}

// console.log(sum(5,13));

let naN : number = NaN;
// console.log(naN);

function isPalindrome(palin:string):boolean{
    let s = palin.split("").reverse().join("");
    return palin===s;
}


// console.log(isPalindrome("12351"));


const array:number[] = [1,2,3,4,5];
const array1:number[] = new Array (1,2,3,4,5);
// const names:string[] = Array.of("yash","somani","vivaan");

const stringy:number[] = array.filter((currElem:number)=> currElem%2==0)
// console.log(stringy);


const sum1 = array.reduce((a:number , curr:number):number=>{
    return a + curr;
})

const ans = sum1 / array.length;
// console.log(ans);

let maxi:number = Math.max(...array);
// const newName = names.push("Princy");
// console.log(newName);

// console.log(names);


const person:{
    name:string;
    age:number;
    isStudent:boolean;
    address:{city:string; country:string}
} = {
    name: "Yash",
    age: 23,
    isStudent:true,
    address:{
        city:"new delhi",
        country:"India",
    }
}

person.address.city="Hyderabad";
// console.log(person.address.city);


//Let say we are facing a problem in which we have to use same object again
// and again so we can use the concept of TYPE Alias 
// like this

type Person={
    name:string;
    age:number;
    isStudent:boolean;
    address:{city:string; country:string}
}

const human:Person={
    name: "Beni",
    age: 22,
    isStudent:true,
    address:{
        city:"new delhi",
        country:"India",
    }
}

// console.log(human.address.country);


//CALL SIGNATURE

type Student={
    name: string;
    age: number;
    gender: string;
    greet: (country:string)=> string // method call signature
    // (country:string):string  -> this is call signature

}

const student1:Student={
    name:"Yash",
    age:22,
    gender:"Male",
    greet(country):string {
        return `My name is ${student1.name} , age is ${student1.age} and country is ${country}`
    } 
}

// console.log(student1.greet("India"));
// If you do not want always use that parameter in the object then
// name?: string -> this ? will make sure of this

