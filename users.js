const users = [
  { firstName: "Alice", lastName: "Johnson", points: 120 },
  { firstName: "Bob", lastName: "Smith", points: 99 },
  { firstName: "Charlie", lastName: "Brown", points: 180 },
];
const newUsers = users.map(function (user) {
  return {
    fullName: `${user.firstName} ${user.lastName}`,
    membershipStatus: user.points > 100 ? "Premium" : "Standard",
  };
});

console.log(newUsers);

// function myMap(array, callback) {
//   const mappedArray = [];
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i], i, array, mappedArray);
//   }
//   return mappedArray;
// }
// function ExtractFullName(user, mappedArray) {
//   const fullName = `${user.firstName} ${user.lastName}`;
//   mappedArray.push(fullName);
// }
// const fullNames = myMap(users, ExtractFullName);
// console.log(fullNames); // Output: ["Alice Johnson", "Bob Smith", "Charlie Brown"]

// function membershipStatus(user, mappedArray) {
//   const status = user.points > 100 ? "Premium" : "Standard";
//   mappedArray.push(status);
// }
// console.log(myMap(users, membershipStatus)); // Output: ["Standard" or "Premium"]
