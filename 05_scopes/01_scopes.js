let a = 10
const b = 20
var c = 30
// global scope

// {
//  if this comes with if or function it is scope
// block scope
// }
if(true){
  let a = 10
const b = 20
var c = 30
}

// console.log(a);
// console.log(b);
console.log(c); // but it is available out of the block so please dont use var


// nested scopes

function one(){
  const username= 'deepak'
  function two(){
    const website = 'youtube'
    console.log(username);
  }

  console.log(website);
  two()
  
}
one()

//+++++++++++++++++ interesting ++++++++++++++

function addone(num){
  return num + 1
}