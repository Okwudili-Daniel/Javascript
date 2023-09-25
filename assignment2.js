// // mutable datatypes

// let object={
//     name:"Daniel",
//     age:10,
//     isFair:true,
//     isTall: false
// }
// console.log(object)

// object.name="soludo"
// object.age= 18
// object.isFair=false
// object.isTall=true
// console.log(object)

// console.log("")
// console.log("")
// console.log("")

// let array=["caleb", 10, true, null]
// console.log(array)

// array[0]="mom"
// array[1]=20
// array[2]=false
// console.log(array)

// console.log("")
// console.log("")
// console.log("")
// console.log("")

// //umutable datatypes

// let string = "Good"
// console.log(string)

// let newWorld=string + "morning"
// console.log(newWorld)


// 2 print the numbers from 12 to 24
// for(let i = 12; i <=24; i++){
//     console.log(i);
// }

// 3 print the odd numbers from 7 to 31
// for(let v = 7; v<=31; v ++){
//     console.log(v);
//     if(v % 2 !== 0)
//     console.log(v);
// }

// 4 Iterate through all numbers from 1 to 45. print the following:

/**for multiples of 3 print "Fizz" */
// for(let z = 1; z<=45; z++){
//     console.log(z);
//     if( z % 3 === 0)
//     console.log("Fizz");
// }

/**for multiples of 5 print "Buzz" */
// for(let b = 1; b<=45; b ++){
//     console.log(b);
//     if(b % 5 === 0)
//     console.log("Buzz");
// }

/**for multiples of 3 print "FizzBuzz" */
// for(let m = 1; m<=45; m++){
//     console.log(m);
//     if(m % 3 === 0 && m % 5 === 0){
//         console.log("FizzBuzz");
//     }
// }

// 1 
// function power(mainNum,raiseToPower) {
//     let result = 1
//     for (let index = 1; index <= raiseToPower; index++) {
//         result*=mainNum
        
//     }
//     return result
// }

// console.log(power(10,2));

// second way
let number1 = 2
let number2 = 24
let result = 1
// for (let i = result; i <= number2; i++){
//     result *= number1
//     console.log(result);
// }

// for (let index = result; index <= number2; index++) {
//     result*=number1;
//     console.log(result);
    
// }
function power(num1, raiseToPower){
    let num = 1
    for (let index = 1; index <= raiseToPower; index++) {
        result*=num1
        
    }
    return result
}

console.log(power(20, 3));

// function powerOf(base, power) {
//     let result = 1
//     for (let i = result; i <= power; i++){
//         console.log(i);
// console.log(result*=base);
//     }
//     return result
// }
// console.log(powerOf(3, 30));

// 2

// for(let i = 12; i <= 24; i++){
//     console.log(i);
// }

// function dev(start, stop) {
//     for(let i = start; i <= stop; i++){
//         console.log(i)
//     }
//     return dev
// }
// console.log(dev(1, 24));

// 3
// for(let i = 7; i<=31; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
    
// }
// let start = 0
// let stop = 20
// function pome(start, stop) {
//     for(let i = start; i <=stop; i++){
//         if(i % 2 !== 0)
//         console.log(i);
//     }
// }
// pome(start, stop)