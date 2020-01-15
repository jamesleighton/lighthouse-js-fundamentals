/*const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found();  
    } 
  }
}

const actionWhenFound = function(found) {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);*/
//=======================================================

/*const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found();  
      console.log('found Waldo at index 2');
    } 
  }
}

const actionWhenFound = function(found) {
  return found;
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);*/



//const names = ['Alice', 'Bob', 'Waldo', 'Winston'];

const findWaldo = function(names, found) {
names.forEach((name) => {
   if (name === 'Waldo') {  
      console.log(`found ${name} at index 2`);
   }
  })
}
const actionWhenFound = function(found) {
  return found;
}
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
