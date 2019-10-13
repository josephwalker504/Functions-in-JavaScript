// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     // Divide the current number by 2, and check if the remainder is 0
//     if (currentNumber % 2 === 0) {
//         console.log(currentNumber) // Only 2, 4, 6 will appear
//     }
// }

for (let chickenMonkeyGame = 1; chickenMonkeyGame <= 100; chickenMonkeyGame++){
    if (chickenMonkeyGame % 5 === 0) {
        console.log("Chicken")
    } else if (chickenMonkeyGame % 7 === 0){ 
        console.log("Monkey")
    } else if (chickenMonkeyGame % 15 === 0) {
        console.log("ChickenMonkey")
    }
}/*   TAKE A NUMBER PRACTICE  */

let bandNumber = 1; 
const takeNumber = function (nameOfband) {
   bandNumber += 1;
    console.log(bandNumber, nameOfband);
}
takeNumber("3 doorsdown");
takeNumber("troll");