const findWaldo = function(names) {
  names.forEach((name) => {
     if (name === 'Waldo') {  
        console.log(`found ${name} at index 2`);
     }
    })
  }  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"]);
