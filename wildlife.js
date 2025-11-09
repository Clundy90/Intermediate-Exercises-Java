/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
//const animalNames = ["Rhino", "Lion", "Elephant", "Giraffe", "Zebra"];
function animalSightings(...animalNames) {
  console.log(`Recent Animal Sightings: ${animalNames}`);
}
animalSightings("Rhino", "Lion", "Elephant");
/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
const combinedHabitats = [...forestHabitats, ...savannahHabitats];
console.log(combinedHabitats);
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
// function Combine(...habitats) {
//   const combinedhabitats = habitats.concat(forestHabitats, savannahHabitats);

//   return combinedhabitats;
// }

/* Task 3: Update Conservation Status */
const rhinoStatus = {
  population: 500,
  status: "Endangered",
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.
const rhinoNewStatus = {
  ...rhinoStatus,
  location: "savannah C",
  population: 750,
  status: "Still Endangered",
};
console.log("New rhino Status", rhinoNewStatus);
/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
  name: "Leo",
  age: 5,
  species: "Lion",
};
const lionGeneticProfile = { ...lionProfile, genetics: "great" };

console.log(lionGeneticProfile, lionProfile);
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy.
//  Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations: Doesn't change original object.
 * TODO: Explain here.
 * Modifying a property in the copied object does not affect the original object because the spread operator creates a shallow copy of the object.
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
  waterQuality: "Good",
  foodSupply: {
    herbivores: "Abundant",
    carnivores: "Sufficient",
  },
};
const currentEcosystemHealth = {
  ...ecosystemHealth,
  foodSupply: { ...ecosystemHealth.foodSupply, herbivores: "Getting Low" },
};
console.log("Original Ecosystem Health:", ecosystemHealth);
console.log("Current Ecosystem Health:", currentEcosystemHealth);
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property.
// Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:Original Ecosystem Health: {
  waterQuality: 'Good',
  foodSupply: { herbivores: 'Abundant', carnivores: 'Sufficient' }
}
Current Ecosystem Health: {
  waterQuality: 'Good',
  foodSupply: { herbivores: 'Getting Low', carnivores: 'Sufficient' }
}
 * TODO: Explain here. Modifying a nested property in a shallow copy also affects the original object.
 * This occurs because the spread operator performs a shallow copy, meaning that nested objects are not duplicated but rather reference the same object in memory.
 */
