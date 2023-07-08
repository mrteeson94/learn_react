// ES6 Basics
console.log("Hello");
//1. arrow functions
// const DoSomething = () => {
//     return <div><p>Hello World</p></div>;
// };

// //2. annoynomous func
// <button onClick={() => {console.log("Hello World")}}></button>

// //3. Ternary operators (IF-ELSE in 1 line), `?` is ELSE-IF operator
//  let legalAge = age > 18 ? "not pedo" : "is pedo";

//  const componentNames = () => {
//     return age > 18 ? <div>Rose</div> : <div>Jack</div>;
//  };

//  //4. objects  + Destructuring (fast way to instantiate object when calling it)
//  const person = {
//     name: 'Rose',
//     age: 17,
//     isLegal: false,
//  };

// const {name, age, isLegal} = person;

// const person2 = {...person, name:"Jack"}
// //destructuring but for array
// const employees = ["Jack","Rose","Alfred"]
// const newEmployees = [...employees, "Mike"]

// //5. Manipulating arrays some functions to know: .Map() -> its basically a foreach() returns a new array
// // and .filter() and .reduce()
//   employees.map( (name) => {
//    return <li>{name}</li>;
//   });

//   employees.filter( (name) => {
//    return name !== "Rose";
//   });

  //6 Async-Await, Promises, fetch
//promise - an object that invokes 2 functions resolve() and reject() which are pretty much try catch.
// var events = new Promise((resolve,reject) => {
//    let name = "Rock"
//    if (name == "James"){
//       resolve(name);
//    }
//    else{
//       reject(`name not found,${name} was passed from API`);
//    }
// });
// events.then((name) => {
//    console.log(name);
// }).catch((err) => {
//    console.log(err);
// }).finally(() => {
//    console.log("PROMISE FINISH EXECUTING!")
// });

//API example
const axios = require('axios');

const requestData = {
   method: 'GET',
   url: 'https://brianiswu-cat-facts-v1.p.rapidapi.com/facts',
   headers: {
      'X-RapidAPI-Key': '02737cd706msh4fac2dbf5aa98b2p1c93fcjsn3229377c4340',
      'X-RapidAPI-Host': 'brianiswu-cat-facts-v1.p.rapidapi.com'
   }
};

const FetchData = async () => {
   try {
      const response =await axios.request(requestData);
      const jokes = response.data;
      jokes.forEach((joke,index) => {
         console.log(`${index + 1}: ${joke.text}`);
      });
   } catch (error) {
      console.log(error);
   }
};

FetchData();