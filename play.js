//var name = "Jon";
//var age = 31;
//var hasHobbies = true;

//function summarizeUser(userName, userAge, userHasHobby) {
  //return 'Name is ' + userName + ' age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
//}

//console.log(name, age, hasHobbies)

//console.log(summarizeUser(name, age, hasHobbies))

let name = "Jon"
let age = 31;
let hasHobbies = true;

//function summarizeUser(userName, userAge, userHasHobby) {
  //return `Name is ${userName} age is ${userAge} and the user has hobbies: ${userHasHobby}`
//}

//console.log(summarizeUser(name, age, hasHobbies))

const summarizeUser = (userName, userAge, userHasHobby) => {
  return `Name is ${userName}, age is ${userAge}, and the user has hobbies: ${userHasHobby}`
}

console.log(summarizeUser(name, age, hasHobbies))
