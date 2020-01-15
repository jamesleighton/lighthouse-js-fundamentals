
/*Have I...

...pseudo-coded the solution?

...googled the error message I am getting?

...actually READ the error message?

...double-checked my syntax?

...linted my code?

...pair programmed or gotten a peer to code review?

...rubber-ducked the problem?*/

//============ short form higher functions ========

/*const triple = function(x) {
  return x * 3;
};

let waffle = triple;
console.log(waffle(30));*/

//========= arrow functions  =================
/*
triple => triple * 3;

console.log(triple(4));*/


//============ for loop push ======================

/*const animals = [
    { name: 'caro', species: 'dog' },
    { name: 'caro2', species: 'dogb' },
    { name: 'caro3', species: 'dogc' },
    { name: 'caro4', species: 'dogd' },
    { name: 'caro5', species: 'dog'}
    
]
const dogs = [];
for (let i = 0; i < animals.length; i++) {
    if (animals[i].species === 'dog') { 
        dogs.push(animals[i])
    }
}
console.log(dogs);*/

//============== filter ==================

/*let isDog = function(animal) {
  return animal.species === 'dog';
}

let dogs = animals.filter(isDog);
//let otherAnimals = animals.reject(isDog); 

console.log(isDog('caro'));
//console.log(isOtherAnimal('caro5'));*/

//============= map =====================

/*const animals = [
    { name: 'caro', species: 'dog' },
    { name: 'caro2', species: 'dogb' },
    { name: 'caro3', species: 'dogc' },
    { name: 'caro4', species: 'dogd' },
    { name: 'caro5', species: 'dog'}
    
]

let names = animals.map((animal) => `${animal.name} is a ${animal.species}`);
console.log(names);*/
//=========== shortend to arrow function =================
/*
let names = animals.map(function(animal) {
  return `${animal.name} is a ${animal.species}` 
})


console.log(names);
*/
//============ for loop ================

/*let names = [];
for (let i = 0; i < animals.length; i++) {
  names.push(animals[i].name);
}
console.log(names);*/

//=====================================


//triple => triple * 3;
/*
const board = [
  [null, 0, 0, 1],
  [0, null, null, null],
  [0, null, null, null],
  [1, null, null, null]
];

const print = function(board) {
  // loop each row
  for(let row of board){
    let line = "|"
    // loop each column
    for(let item of row) {
      if(item == 0) {
        line += "O";
      } else if(item == 1) {
        line += "X";
      } else if(item == null) {
        line += " ";
      }

      line += "|";
    }

    console.log(line)
  }
}

print(board);
*/
//=====================================

/*const printPlaylists = function() {
  let id1 = library['playlists']['p01']['id'];
  let id2 = library['playlists']['p02']['id'];
  let name1 = library['playlists']['p01']['name'];
  let name2 = library['playlists']['p02']['name'];
  let tracks1 = library['playlists']['p01']['tracks'].length;
  let tracks2 = library['playlists']['p02']['tracks'].length;
  console.log(`${id1}: ${name1} - ${tracks1} tracks`);
  console.log(`${id2}: ${name2} - ${tracks2} tracks`);
  };
  printPlaylists(library);*/


  /*Module {
    id: '.',
    exports: {},
    parent: null,
    filename: '/Users/superman/codes/moduleCheck.js',
    loaded: false,
    children: [],
    paths: [ ... ] 
  }*/
  console.log(module);

  const sayHelloTo = function(person) {
    console.log(`Hello, ${person}`);
  }

  module.exports = sayHelloTo;