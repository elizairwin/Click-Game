Var stuff = [10,34,56,67,93,120,137];
Var random_value = stuff[Math.floor(Math.random()*7)];

//search the stuff awrray for random value 

function randomNumber(stuff) {
   return stuff[Math.floor(Math.random() * stuff.length)];
}

randomNumber(stuff);