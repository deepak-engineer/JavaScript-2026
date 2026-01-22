const user = {
  username: 'deepak',
  price: 999,
  welcomeMessage: function(){
    console.log(`${this.username}, Welcome to website`);
    
  }
}


user.welcomeMessage() // prints the username and the welcome message

console.log(this); // this prints the current context of the node environment if it is in the browser is prints the window object but here its print the empty object


function chai(){
  console.log(this);
  
} 

// chai()

const chai = () => {
  let username = 'deepak'
  console.log(this.username);
  
}

// chai()


// const addTwo = (num1, num2) => {
//   return num1 + num2 // explicit return
// }

// introduce implicit return 


// const addTwo = (num1, num2) => num1 + num2 // assume return
const addTwo = (num1, num2) => (num1 + num2) // when you wrap in paranthesis dont want to return keyword

// when you want to return a object in same line

const three = (num1, num2) => ({username: 'deepak'})

console.log(addTwo(2,3));
console.log(three(2,3));
