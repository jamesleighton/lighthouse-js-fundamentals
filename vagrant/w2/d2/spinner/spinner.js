process.stdout.write('hello from spinner1.js... \rheyyy\n');
setTimeout(() => {
  process.stdout.write('\r|3771');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/5150');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-4360');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r|5360'); 
}, 700);
setTimeout(() => {
  process.stdout.write('\r|3771');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/5150');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-4360');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r|5360'); 
}, 1500);
// ... fill in the rest yourself ...