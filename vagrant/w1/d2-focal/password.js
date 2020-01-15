const args = process.argv;
const obfuscate = function(str) {
  let string = "";
  let chart = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "a") {
      chart = "4";
      string = string + chart;
    } else if (str.charAt(i) === "e") {
      chart = "3";
      string = string + chart;
    } else if (str.charAt(i) === "o") {
      chart = "0";
      string = string + chart;
    } else if (str.charAt(i) === "l") {
      chart = "1";
      string = string + chart;
    } else {
      chart = str.charAt(i);
      string = string + chart;
    }
  }
  return string;
};
console.log(obfuscate(args[2]));