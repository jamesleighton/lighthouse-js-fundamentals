const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("What is your name ? ", function(name) {
  rl.question("What's an activity you like doing ? ", function(activity) {
    rl.question("What do you listen to while doing that? ", function(music) {
      console.log(`My name is ${name}, and I am interested in ${activity} type of activity.`);
      rl.close();
    });
  });
});
rl.on("close", function() {
  console.log("\nThank you for checking my profile !!!");
  process.exit(0);
});