// // object

// let $object = {
//     name: "Daniel",
//     age: 19,
//     nationality: null,
//     howManyFriends: 1,
//     isMale: true,
//     state:"anambra",
//     isTall: true,
//     willBeRich: true,
//     surnname: "okwudili",
//     sport: 0,
//     stack:["full stack", false],
// }
// console.log($object)


// // string

// let myName="Daniel"
// let isFair= false
// let age= 9
// let university
// let $class= null
// let isBrave= true
// console.log(myName)
// console.log(isFair)
// console.log(age)

// // array

// let array=[ "Caleb", 9, null, false, true]
// console.log(array)

// // number

// let x=7
// let o = 8
// let z = 5
// console.log(x)
// console.log(o)
// console.log(z)



// filter: is an higer order array method that return a new array of element that matches the condition that has been set

let cost = [100, 200, 300, 400, 500, 600]
let cat = cost.filter((el) => {
    return el > 400
})
console.log(cat);

// forEach: etirate through an array and passed the call back on each of the element in that array and return the element

let form = cost.forEach((el) => console.log(el))

// map: it searches through each element of an array and return a new array or Boolean that matches the comdition that has been set

let mapped = cost.map((el) => {
    return el*2
})
console.log(mapped);
let mappe = cost.map((el) => {
    return el <=200
})
console.log(mappe);

// reduce it takes two parameter, the accumulator and current value; the accumulator holds the history of the result. it use for calculations

let reduced = cost.reduce((a,b) => {
    return a + b
})

console.log(reduced);

// sorts: it's used to arramge a range of numbers form acsending order to descending order, it takes two parameter.

let number = [2,5,3,1,4,6,8,9]
let sorted = number.sort((a,b) => {
    return a - b
})
console.log(sorted);

// some: it's use to check if one element or selected element passes the condition that's been set in the call back functions
let somed = number.some((el) => {
    return el < 2
})
console.log(somed);

// Every: check if all element in array passes the condition that's been set in the call back function.
let every = number.every((el) => {
    return el > 10
})
console.log(every);

// find: it's returns the first element that matches the condition in the call back function.
 let find = number.find((el) => {
    return el > 2
 })
console.log(find);

// flat: it turn's complex array into a plain array
let num  = [1,2,3,[4,5,[6,7,[8,9]]]]
let flated = num.flat(4)
console.log(flated);

// findIndex: executes a function foe each array element. it returns the index(position) of the first element that passes a test.
let numb = [1,2,3,4,5,6,7]
let ans = numb.findIndex((el) => {
    return el > 2
})
console.log(ans);

// flatmap: it uses a comdination of the map() and flat() method to perform operations. it maps all array elements and creates a new flat array
let dan = numb.flatMap((el) => {
    return el *2
})
console.log(dan);