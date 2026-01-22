// create singleton object using constructor
// const tinderUser = new Object()
// not a single diffrence but one this is singleton

const tinderUser = {} // this is non-singleton

tinderUser.id = "123abc"
tinderUser.name = "Deepak"
tinderUser.isLoggedIn = false

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userFullName: {
      firstname: "Deepak",
      lastname: "Chauhan"
    }
  }
}

// optional chaining ? agar api se nhi ata hai to optional chaining use hoti hai
// console.log(regularUser.fullname?.userFullName.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {2:"a",3:"b"}
// when you want to combine two or more objects

// declare always {} as a target to ensure value in it
// const obj3 = Object.assign({}, obj1, obj2)
// but this least used

// mostly used spread operator

const obj3 = {...obj1, ...obj2}

console.log(obj3);

// values get from db array of objects

const users = [
  {
    id: 1,
    email: "d@gmail.com"
  },
  {
    id: 1,
    email: "d@gmail.com"
  },
  {
    id: 1,
    email: "d@gmail.com"
  },

]

users[1].email

// when you want to loop through you use the object.keys values entries method

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// when you want to ensure the value is exists or not

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// when we want values multiple times from a object then we destructure the values

const course = {
  courseName: 'js in hindi',
  courseInstructor: "Hitesh Chaudhary",
  price: "999",
}

// normally you access the value like this course.courseInstructor when you wanted to multiple times then


// const {courseInstructor} = course
const {courseInstructor: Instructor} = course
// and you want to change name or change variable name

// {
//   "name": "deepak",
//   "coursername": "js in hindi",
//   "price": "free"
// }

// [
//   {},
//   {},
//   {},

// ]





