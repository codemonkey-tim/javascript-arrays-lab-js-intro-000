var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  var kitties = kittens;
  kitties.pop();
  return kitties;
}

function destructivelyRemoveFirstKitten(){
  var kitties = kittens;
  kitties.shift();
  return kitties;
}

function appendKitten(name){

}

function prependKitten(name){

}

function removeLastKitten(){

}

function removeFirstKitten(){

}
