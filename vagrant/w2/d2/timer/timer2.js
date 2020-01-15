const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Import: ", (key) => {
  console.log(`The key value is: ${key}`);
  //   process.stdout.write('\x07');
  if (key === '\u0003') {
    process.exit();
  } else if (key >= 1 && key <= 9) {
    for (let c of [...Array(5).keys()]) {
      setTimeout(() => {
        process.stdout.write('\x07');

      }, c * 1000);
    }
  }
//   process.stdin.on('data', (key) => {
//     process.stdout.write('\x07');
//   });
});

