// const user = {
//   name: "al-ameen",
//   password: "password",
//   role: "admin",
// };

// const loginForm = {
//   name: "al-ameen",
//   password: "password",
// };

// const isNameMatching = loginForm.name == user.name;

// if (isNameMatching) {
//   // if true
//   console.log("User with username found");

//   if (loginForm.password == user.password) {
//     console.log("User exists and the password is correct");

//     if (user.role == "admin") {
//       console.log("User is an Admin");
//     } else {
//       console.log("User is an Customer");
//     }
//   } else {
//     console.log("User exists and the password is incorrect");
//   }
// } else {
//   // if false
//   console.log("User doesnt exist");
// }

const student1EnglishGrade = 59;

if (student1EnglishGrade >= 70) {
  // 69
  console.log("Student Grade: A");
} else if (student1EnglishGrade < 70 && student1EnglishGrade >= 60) {
  console.log("Student Grade: B");
} else {
  console.log("Student Grade: Unknown");
}
