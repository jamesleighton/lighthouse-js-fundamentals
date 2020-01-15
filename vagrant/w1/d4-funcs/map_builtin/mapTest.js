const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

let convert = []; 
const counter = function(lighthouses) {
  for (let lhName = 0; lhName < lighthouses; lhName++) {
  convert.push(lighthouses[lhName]); 
  }
}
console.log(counter());






function countEvenToTwelve(number) {
    if (number <= 12) {
      console.log(number);
      countEvenToTwelve(number+2);
  }
}
countEvenToTwelve(0);
  