/*process.stdout.write('\x07');
let args = process.argv.slice(2);
for (arg of args) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, arg);
}

setTimeout(8, 4);*/

/*process.stdin.setRawMode(true); 
process.stdin.on('readable', () => {
    let key = String(process.stdin.read());
    if (key === '\u0066') {
      process.stdout.on
    }
})*/

const log = document.getElementById('log');

document.addEventListener('keypress', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}