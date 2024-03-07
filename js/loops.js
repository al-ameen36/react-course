const years = [2024, 2023, 2022];
// const years = [2021];

// last index = 3
// length = the last index + 1 = 4

// forward
// for (let index = 0; index < years.length / 2; index++) {
//   console.log(years[index]);
// }

console.log(parseInt(years.length / 2));
console.log(Math.ceil(years.length / 2));
console.log(Math.floor(years.length / 2));

// backward
for (let index = years.length - 1; index > 1; index--) {
  console.log(years[index]);
  //   console.log(index);
}
