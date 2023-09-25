/**
 * fliter
 * forEach
 * map
 * reduce
 * sort
 * some
 * every
 * find
 * findIndex
 * flatMap
 * copyWithin
 * entries
 * values
 * keys
 */

// let testArray = [100,200,300,400,500,600]
// let answer = testArray.filter((el) => {
//     return el > 200
// })
// console.log(answer)

// // return only rice and indomie
// let testArray2 = ["beans","rice", "indomie"]
// let ans = testArray2.filter((el) => {
//     return el !== "beans"
// })

// // return only rice and beans
// let anss = testArray2.filter((el) => {
//     return el === "beans"
// })

// console.log(anss);

// given an array of objects with city name and population, create an array of objects from the first array if the population is >=2000

// let arrayOfCities = [
//     {
//         cityName: "Lagos",
//         population: 3000
//     },
//     {
//         cityName: "Abia",
//         population: 1500 
//     },
//     {
//         cityName: "Benin",
//         population: 2000
//     },
//     {
//         cityName: "Onisha",
//         population: 9000
//     },
//     {
//         cityName: "Ore",
//         population: 6000
//     },
//     {
//         cityName: "Ore",
//         population: 12000
//     },
// ]

// return the city name that is equal to Ore
// let answer3 = arrayOfCities.filter((el) => {
//     return el.cityName === "Ore"
// })

// return population that is greater than or equal to 2000
// let answer4 = arrayOfCities.filter((el) => {
//     return el.population >= 2000
// })
// console.log(answer3)

// given an array of objects with name and subjects of set06 fellows
/**
 * do the following using filter method
 * A: console.log the objects that contains javascript as subject
 * 
 * B: console log all the fellows in st06
 * 
 * C: return all subjects
 */

// let set06 = [
//     {
//         fellowName: "esther",
//         subjects: "javaScript"
//     },
//     {
//         fellowName: "Godwin",
//         subjects: "Ui/Ux"
//     },
//     {
//         fellowName:"sanni",
//         subjects: "html/css"
//     },
//     {
//         fellowName: "slyvia",
//         subjects: "html/css"
//     },
//     {
//         fellowName: "favour",
//         subjects: "designThinking"
//     },
//     {
//         fellowName: "jaji",
//         subjects: "wiring"
//     },
// ]

// let java = set06.filter((el) => {
//     return el.subjects === "javaScript"
// })
// console.log(java);

// let java = set06.filter((el) => {
//     return el.fellowName 
// })
// console.log(java);

// let java = set06.filter((el) => {
//     return el.subjects
// })
// console.log(java);

// let learn = [100, 200, 300, 400, 500, 600, 650]
// let answer= learn.filter((el) => {
//     return el < 400
// })
// console.log(answer);

// let gosple = [
//     {
//         gospleName: "guc",
//         tracks: "all that matter",
//     },
//     {
//         gospleName: "bassey",
//         tracks: "book of life",
//     },
//     {
//         gospleName: "theo",
//         tracks: "spend me",
//     }
// ]

// let ans = gosple.filter((el) => {
//     return el.gospleName !3333== "guc"
// })
// console.log(ans);

/**
 * map
 * reduce
 * forEach
 * some
 * every
 * sort
 */

// let arrOfNum = [1,2,3,4,5];
// let result = arrOfNum.map((el) => {
//     return el*2;
// })
// console.log(result);

// // comparing
// let arr = [100, 150, 200, 250, 300, 350, 400]

// let filtered = arr.filter((el) => {
//     return el >=250;
// })
// console.log(filtered);

// let mapped = arr.map((el) => {
//     return el >=250;
// })
// console.log(mapped);

// // given an array of objects, return true if the gender is equal to "Female"

// let set08 = [
//     {
//         name: "joan",
//         gender: "female" ,
//     },
//     {
//         name: "stanley",
//         gender: "Male" ,
//     },
//     {
//         name: "franklin",
//         gender: "Male" ,
//     },
//     {
//         name: "Regina",
//         gender: "female" ,
//     },
//     {
//         name: "Delight",
//         gender: "Male" ,
//     },
// ];

// let genderSearch = set08.map((el) => {
//     return el.gender === "female";
// });
// console.log(genderSearch);

// // reduce
// let reduced = [1,2,3,4,5,6]
// let reduceMethod = reduced.reduce((a,b) => {
//     return a + b;
// }, 5);

// console.log((reduceMethod));

// // sort
// let sorting = [2,3,7,1,0,9,4,6,5];
// let sortMethod = sorting.sort((a, b) => {
//     return a - b;
// });

// console.log(sortMethod);

// // class work
// /**
//  * 
//  * 1: given an array of numbers 1-9, find the sum of every element in the array and log to the terminal your result 
//  * 
//  * 
//  * 2: given an array of numbers, find the average of them, log it to the console 
//  * 
//  */

// let suming = [1,2,3,4,5,6,7,8,9]
// let ans = suming.reduce((a,b) => {
//     return a + b;
// })
// console.log(ans);

// let averageing = [1,2,3,4,5,6,7,8,9]
// let averaged = suming.reduce((a,b) => {
//     return a + b / averageing.length;
// })
// console.log(averaged);

/**
 * foreach
 * every
 * some
 * flatMap
 * find
 * findIndex
 */

// forEach
let testArr = [1,2,3,4,5,6]
let mappedArr = testArr.map((el) => {
    return el
})
// console.log(mappedArr)

// let eachArr = testArr.forEach((el) => console.log(el))


// some
let someArr = testArr.some((el) =>{
    return el<=2
})

// console.log(someArr);

// every
let every = testArr.every((el) => {
    return el >2
})

console.log(every);

// * given an array of singular nouns create a new array that store the plural nouns of each of the word in the first array and loging to the console, assuming the singular nouns can be made plural by just adding "s"

// given an array of cost of different product, create a new array that stores the value if the cost is less that 350

// let nouns = ["boy", "girl", "cat", "car"]
// let plural = nouns.map((el) => {
//     return el.concat("s")
// })

// console.log(plural);

// let cost = [100, 200, 250, 300, 350, 400, 500]
// let newArr = cost.filter((el) => {
//     return el < 350
// })

// console.log(newArr);

// // find
// let findArr = testArr.find((el) => {
//     return el > 2
// })

// console.log(findArr);

// 