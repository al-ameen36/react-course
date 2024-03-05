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

// const student1EnglishGrade = 59;

// if (student1EnglishGrade >= 70) {
//   // 69
//   console.log("Student Grade: A");
// } else if (student1EnglishGrade < 70 && student1EnglishGrade >= 60) {
//   console.log("Student Grade: B");
// } else {
//   console.log("Student Grade: Unknown");
// }

const messages = [
  {
    from: "+234xxxxxxxxxx",
    text: "sample text1",
    isRead: false,
  },
  {
    from: "+234xxxxxxxxxx",
    text: "sample text2",
    isRead: true,
  },
];

const message = {
  from: "+234xxxxxxxxxx",
  text: "sample text1",
  isRead: false,
};

// console.log(messages[0].from);

// if (messages[1].isRead == true) { // using dot notation
// if (messages[1]["isRead"] == true) { // using square brackets
//   console.log("message has been read already");
// } else {
//   console.log("message has not been read");
// }

// message.isRead = true;
// message.sentAt = "2 days ago";

// const prop = "numberOfComments";
// message["comment"] = "this was changed";
// message[prop] = 20;
// console.log(message);

// single ternary operator
// messages[0]["isRead"] == true
//   ? console.log("message has been read already")
//   : console.log("message has not been read");

// if statement
// if (messages[0]["isRead"] == true) {
//   console.log("message has been read already");
// } else {
//   console.log("message has not been read");
// }

// nested ternary operator
// messages[0]["isRead"] == true
//   ? messages[1]["isRead"] == true
//     ? console.log("both messages have been read already")
//     : console.log("only message 1 has been read has been read already")
//   : console.log("message has not been read");

// using ternary operator as an expression
// const hasBeenRead =
//   messages[1]["isRead"] == true
//     ? "messages 2 have been read already"
//     : "only message 1 has been read has been read already";

// // if statement
// let hasBeenRead;
// if (messages[0]["isRead"] == true) {
//   hasBeenRead = "message has been read already";
// } else {
//   hasBeenRead = "message has not been read";
// }

// console.log(
//   messages[1]["isRead"] == true
//     ? "messages 2 have been read already"
//     : "only message 1 has been read has been read already"
// );

const accounts = [
  {
    name: "al-ameen",
    type: "savings",
    balance: 10000,
  },
  {
    name: "ibrahim",
    type: "current",
    balance: 100000,
  },
];

// check both accounts and log the one with a balance higher than or equal to 100,000
// output ->
// Account Name: al-ameen
// Account Balance: 10,000
// Account Type: savings
