//let agent = "jAMES"

//console.log(agent.atChar(0).toUpperCase() + agent.slice(1,agent.length).toLowerCase() + ": 007")

//let hunger = "full"

//if (hunger == "hungry") {
//   console.log("Yes please I'm starving!")
//}
//else if (hunger == "full") {
//    console.log("No thanks, I'm stuffed!")
//}
//else{
//    console.log("Oh go on then, why not!")
//}

// let music = "classical"

// if (music == "Rock") {
//     console.log("rock on!")
// }
// else if (music == "classical") {
//     console.log("this is relaxing!")
// }
// else{
//     console.log("Oh go on then, why not!")
// }

// if (4 == "4") {
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// let food = "carrots"
// let hunger = "full"

// if (hunger == "full" && food == "carrots") {
//     console.log("Of course, who wouldn't")
// }
// else if(hunger == "hungry" && food == "carrots") {
//     console.log("Yes please I'm starving, could I also have a pizza")
// }
// else if (hunger == "hungry" && food == "sprouts") {
//     console.log("Actaully, I cant wait")
// }
// else{
//     console.log("No thanks, Im stuffed")
// }

// let food = "chips"

// if (food == "ice cream" || food == "pizza") {
//     console.log("Yay lets eat!")
// }
// else if (food == "sprouts" || food == "broccoli") {
//     console.log("Ugh, no thanks")
// }
// else{
//     console.log("Okay, go on then why not")
// }

let food = "sprouts"

switch(food) {
    case "ice cream":
    case "pizza":
        console.log("Yay, let's eat")
        break
    case "sprouts":
    case "broccoli":
        console.log("Ugh, no thanks!")
        break
    default:
        console.log("Okay. Go on then, why not.")
}