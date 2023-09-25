// * given an array of singular nouns create a new array that store the plural nouns of each of the word in the first array and loging to the console, assuming the singular nouns can be made plural by just adding "s"

let nouns = ["boy", "girl", "cat", "dog"]
let plural = nouns.map((el) => {
    return el.concat("s")
})

console.log(plural);

// given an array of cost of different product, create a new array that stores the value if the cost is less that 350

let cost = [100, 150, 200, 250, 300, 350, 400, 450]
let filter = cost.filter((el) => {
    return el < 350
})

console.log(filter);

//  given an array of intergers, create a new array in which the double of each integer in the first array is stored, and log it to the console.

let integer = [1,2,3,4,5,6,7,8,9]
let double = integer.map((el) => {
    return el * 2
})

console.log(double);

//  given an array of object with the city name and population, create an array with object from the first array if the population of that particular city is >= 5000

let ArrOfObj = [
    {
        cityName: "Lagos",
        population: 2000
    },
    {
        cityName: "Benu",
        population: 4000
    },
    {
        cityName: "Edo",
        population: 6000
    },
    {
        cityName: "Imo",
        population: 8000
    },
]

let fiter = ArrOfObj.filter((el) => {
    return el.population >= 5000
})

console.log(fiter);

// given an array of numbers, find the sum of every element in the array, adding 8 to the array, and log the result to the console

const givenArray1 = [1,2,3,4,5,6]
const sum = givenArray1.reduce((a,b) =>{
    return a + b;
},8)

console.log(sum);

// given two arrays of numbers test whether each of the arrays have at least one number that is > 5. and log the result to the console.

const each = givenArray1.some((el) => {
    return el > 5
})

console.log(each);

const givenArray2 = [1,2,3]
const sume = givenArray2.some((el) => {
    return el >5
})

console.log(sume);

// given two arrays of numbers, test whether every of the arrays have at every number that is >5, and log the result to the console.

const every = givenArray1.every((el) => {
    return el > 5
})

console.log(every);

const ever = givenArray2.every((el) => {
    return el > 5
})

console.log(ever);

// given an array of numbers, return the first element with el ===3

const finde = givenArray1.find((el) => {
    return el ===3
})

console.log(finde);

let a = ["plays", "boys"]
let b = a.map((el) => {
    return el.split("s")
})

console.log(b);