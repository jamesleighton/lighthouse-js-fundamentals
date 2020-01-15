process.stdout.write('\x07');
let args = process.argv.slice(2);
for (arg of args) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, arg);
}
