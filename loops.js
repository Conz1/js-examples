// let favHol = [
//     "Venice, Italy",
//     "Paris, France",
//     "Barcelona, Spain",
//     "Africa",
//     "Germany"
// ]
// for (let i = 0; i < favHol.length; i++){
//     console.log( favHol [i])
// }
//The for statement creates a loop that consists of three optional
//expressions, enclosed in parentheses and separated by semicolons,
//followed by a statement (usually a block statement) to be executed
//in the loop.

// evenNumbers = [];
// for (let n = 20; n >= 0; n--)
// {
//     if (n % 2 == 0)
//     {
//         evenNumbers.push(n);
//     }
// }
// console.log(`The even numbers between 0 and 20 in reverse order are: ${evenNumbers}`);

//count in increments of 1 then 2 until it reaches 10.

// for (let i = 0; i <= 10; i++){
//     console.log(i +=2)
// }


//adds a new item to the array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");
// console.log (fruits)


// //not equal too (bang !=)
// let evenNumbers = []

// for (let n = 1; n <= 30; n++){
//     if (n % 2 != 0) {
//         (evenNumbers.push(n))
//     }
// }
// console.log(`The odd numbers between 1 and 30 are; ${evenNumbers}.`)


// let age = 17
// let country = "UK"

// if (age >= 17  && country == "UK") {
//     console.log ("Yes I can serve you")
// }
// else {
//     console.log("You aren't old enough")
// }

// let age = [23]

// while (age <= 18){
//     console.log("You're a child!")
// }
//     console.log("You're an adult!")

let diceRoll = "6"

while(diceRoll != 3){
    console.log(diceRoll)
    diceRoll = Math.floor(Math.random()*5)+1
}
console.log(diceRoll)
