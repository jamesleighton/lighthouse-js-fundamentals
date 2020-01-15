let num = process.argv.slice(2);
console.log(process.argv.slice(3));
num = Number(num);

const rollingDice = function(num) {
  let diceRoll = "";
  for (let i = 0; i < num; i++) {
    //console.log('current index ', i);
    let eachDiceRoll = Math.floor( Math.random() * 6 ) +1;
    diceRoll += eachDiceRoll + ", ";
  }
  
  return diceRoll;
}

console.log("Rolled " + num + " dice: " + rollingDice(num));
