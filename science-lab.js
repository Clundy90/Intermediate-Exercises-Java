/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.
// function makeParticipant(name, age, studyField) {
//   return { name, age, studyField };
// }
const firstName = "John";
const age = 30;
const studyField = "genetics";

const participant = { firstName, age, studyField };

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.

const participantCopy = {
  ...participant,
  displayInfo() {
    console.log(
      `Participant: ${this.firstName}, Age: ${this.age}, Study Field: ${this.studyField}`
    );
  },
};
participantCopy.displayInfo();
/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
const anotherCopy = {
  ...participant,
  displayInformation: () => {
    console.log(
      `Participant: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`
    );
  },
};
anotherCopy.displayInformation();
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.
/*
 * Observations:Participant: undefined, Age: undefined, Study Field: undefined
 * TODO: Explain here. You cannot use this in arrow function. The arrow function does not have its own `this` context, so it cannot access the participant object properties using `this`.
 * Instead, it inherits `this` from the enclosing scope, which in this case is the global scope, leading to undefined values for the properties.
 */

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.

function updateParticipantInfo(participant, EmployedFulltime, value) {
  return { ...participant, EmployedFulltime: value };
}
const updatedParticipant = updateParticipantInfo(
  participant,
  "Employed Fulltime",
  "Yes"
);
console.log(updatedParticipant);
