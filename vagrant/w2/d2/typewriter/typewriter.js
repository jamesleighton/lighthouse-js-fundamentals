const sentence = "hello there from lighthouse labs";

 for (let i = 0; i < sentence.length; i++) {
   setTimeout (() => {
    process.stdout.write(sentence[i]);
    if ( i === sentence.length - 1) {
      process.stdout.write("\n");
    }
  }, 50 * i );
} 


/*const sentence = "hello there from lighthouse labs";

for (const char of sentence) {
  setTimeout (() => {
  process.stdout.write(char);
}, 2000);
}*/

//meout(() =>