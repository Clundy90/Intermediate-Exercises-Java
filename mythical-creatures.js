const mythicalCreatures = [
  { name: "Dragon", type: "Fire", lastSeen: "Volcano Valley" },
  { name: "Mermaid", type: "Water", lastSeen: "Coral Caves" },
  { name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest" },
  { name: "Griffin", type: "Air", lastSeen: "Highwind Mountains" },
  { name: "Kraken", type: "Water", lastSeen: "Abyssal Depths" },
];

// Hello, future software developer! In this exercise, you will practice using the array methods **`find`** and **`findIndex`**. 🥳

// You are an explorer in a fantasy realm filled with mythical creatures. Your task is to catalog these creatures based on sightings. Each creature sighting is recorded in a catalog (an array of objects), where each entry includes the creature's name, type, and the last seen location.

// Tasks:

// - Use the **`find`** method to locate the first creature of the "Water" type and log its name to the console.
// - Use the **`findIndex`** method to locate the index of the "Griffin" in the mythical creatures array and log it to the console.
// - Use the **`find`** method to locate the first creature last seen in "Enchanted Forest".

mythicalCreatures.find.type = "Water";
const waterCreature = mythicalCreatures.find(
  (creature) => creature.type === "Water"
);
console.log(waterCreature.name); // Output: Mermaid

// const firstWaterCreature = mythicalCreatures.find(
// 	function (creature)
// 	{
// 		return creature.type === "Water";
// 	}
// );
// console.log(firstWaterCreature.name);

mythicalCreatures.findIndex.name = "Griffin";
const griffinIndex = mythicalCreatures.findIndex(
  (creature) => creature.name === "Griffin"
);
console.log(griffinIndex); // Output: 3

// const griffinIndex = mythicalCreatures.findIndex(
// 	function (creature)
// 	{
// 		return creature.name === "Griffin";
// 	}
// );
// console.log(griffinIndex);

mythicalCreatures.find.lastSeen = "Enchanted Forest";
const enchantedCreature = mythicalCreatures.find(
  (creature) => creature.lastSeen === "Enchanted Forest"
);
console.log(enchantedCreature.name); // Output: Unicorn

// const enchantedForestCreature = mythicalCreatures.find(
// 	function (creature)
// 	{
// 		return creature.lastSeen === "Enchanted Forest";
// 	}
// );
// console.log(enchantedForestCreature.name);
