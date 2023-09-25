// if and else

// let gender = "male"
// if(gender === "male") {
//     console.log("please welcome");
// }else {
//     console.log("please try again");
// }

// let name = "Daniel"
// let email = "daniel@gmail.com"
// let password = "big dan"
// if( name === "Daniel" && email === "daniel@gmail.com" && password ==="big dan"){
//     console.log(`welcome!!, your name is ${name}, and your email is ${email}, and your psaaword is ${password}`);
    

// }else if (name === "Daniel" || email === "daniel@gmail.com" || password === "big dan"){
//     console.log(`welcome!! at least one matches, your name is ${name}, and your email is ${email}, and your password is ${password}`)


// }else if (name !== "Daniel" && email === "daniel@gmail.com" && password === "big dan"){
//     console.log("your email and password is correct");


// }else if (name === "Daniel" && email !== "daniel@gmail.com" && password === "big dan"){
//     console.log("your name and password is correct");


// }else if (name === "Daniel" && email === "daniel@gmail.com" && password !== "big dan"){
//     console.log("your name and email is correct");


// }else {
//     console.log("wrong Input");
// }

// let name  = "soludo"
// let password = "solu.do"
// let email = "sdoludo@gmail.com"

// if(name === "soludo" && password === "solu.do" && email === "soludo@gmail.com"){
//     console.log(`You are welcome!!, your name is ${name}, your password is ${password}, your email is ${email}`);

// }else if(name !== "soludo" && password === "solu.do" && email === "soludo@gmail.com"){
//     console.log("your name is not correct");
// }else if(name === "soludo" && password !== "solu.do" && email === "soludo@gmail.com"){
//     console.log("your password is not correct");
// }else if(name === "soludo" && password === "solu.do" && email !== "soludo@gmail.com"){
//     console.log("your email is not correct");
// }

// let num1 = 3
// let num2 = -7
// let num3 = 2

// if(num1 > 0 && num2 < 0 && num3 >0){
//     console.log("-")
// }else if (num1 < 0 && num2 > 0 && num3 < 0){
//     console.log("+");
// }else {
//     console.log("any sign");
// }


// classwork
/**given an array of numbers holding the scores of set08 students after taking javascript test, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], assign grades to the students
 * grade "A", when the student scored 80 - 100
 * grade "B", when the student scored 60 - 70
 * grade "C", when the student scored 50 - 59
 * grade "D", when the student scored 40 - 49
 * grade "E", when the student scored 30 - 39
 * grade "F", when the student scored 0 - 29
 */

// let scores = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// let student1 = 90
// if (student1 >= 80 && student1 === 100){
//     console.log("A");
// }else if (student1 >= 60 && student1 === 70){
//     console.log("B")
// }else if (student1 >= 50 && student1 === 59){
//     console.log("C")
// }else if (student1 >= 40 && student1 === 49){
//     console.log("D")
// }else if (student1 >= 30 && student1 === 39){
//     console.log("E")
// }else if (student1 >= 0 && student1 === 29){
//     console.log("F")
// }

// console.log(5%2);

// let palidrium  = ["radar"]

// function word(array) {
//     let dan = array.toString().split("").reverse().join("")

//     if(palidrium === dan){
//         console.log("it is a palidrum" );
//     }else {
//         console.log( "it is not")
//     }

//     return dan
     
// }
// console.log(word(palidrium));
// let myWord = ["radar"]

// function palidrium(word) {
//     let newWord = word.toString().split("").reverse().join("")

//     if(myWord === newWord){
//         console.log(`it is a palidrum` );
//     }else {
//         console.log( `it is not`)
//     }

//     return newWord
     
// }
// console.log(palidrium(myWord));