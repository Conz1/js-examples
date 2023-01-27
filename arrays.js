let favFilms = [
    "tron", 
    "italian job",
    "john wick", 
    "train spotting"
];
console.log (favFilms[0])

//assigning a new value to the variable 
favFilms [1] = "scarface", "harry potter"

console.log (favFilms)

//counts how many items are in the list
console.log (favFilms.length)

//takes last item off the list and displays in terminal an updated version.
// console.log (favFilms.pop())

console.log (favFilms)

//The JavaScript Array shift() Method removes the first element of the array
//thus reducing the size of the original array by 1.
favFilms.shift();

console.log(favFilms)




































// //let favouriteMovies = [
//     "Terminator 2",
//     "Tenet",
//     "South Park Movie",
//     "Star Wars 1977",
//     "Terminator 1",
//     "Spongebob Movie"
// ]

// // Removes the first element of the array, opposite of pop
// favouriteMovies.shift()
// console.log(favouriteMovies)


// let sumOfLength = 0;
// // We can use map to iterate over each item in the array, and use a lambda to give it something to do
// favouriteMovies.map(x => sumOfLength += x.length)
// console.log(sumOfLength)

// // Slice returns a new array, from the first index given to the last index given
// favouriteMovies = favouriteMovies.slice(0, 4)
// console.log(favouriteMovies)

// // Splice removes the amount given in the 2nd arg, from the index given in the 1st arg(it doesn't include the index given, it goes from that)
// // It also returns the removed elements in a new array
// let newArray = favouriteMovies.splice(1, 2)
// console.log(favouriteMovies)
// console.log(newArray)

// // Adds elements at the start of the array
// favouriteMovies.unshift("South Park Movie", "Inception")
// console.log(favouriteMovies)