import * as utils from "./utils/indexRandom.js";
import * as rita from "rita";

//h1 ENCYCLOPEDIA
//h2 ITEMS
const items = [
  { type: "axe" },
  { type: "brooch" },
  {type: "dagger"},
  {type: "drinking vessel"},
  {type: "pendant"},
  {type: "pot"},
  {type: "spear"},
  {type: "sword"},
  {type: "urn"}
];

//h2 MATERIALS
const bone = ["bone", "horn", "ivory"];
const metal = ["bronze", "copper", "gold", "iron", "mercury", "pewter", "silver", "steel"];
const stone = ["flint", "granite", "obsidian"];
const wood = ["ash", "elm", "mahogany", "oak", "willow"];
const materials = [bone, metal, stone, wood];

//h2 THIS GAME
let itemsAvailable = items.slice();
let itemsUsed = [];

//h1 ITEM CREATION
function itemCreateNamed(item) {
  console.groupCollapsed("Running itemCreateNames");

  let feedback = "Item Type ";
  if (!items.includes(item)) {
    feedback += "Doesn't Exist";
  } else if (itemsUsed.includes(item)) {
    feedback += "Already Used";
  } else {
    // itemsUsed.push(item);
    // itemsAvailable.splice(itemsAvailable.indexOf(item), 1);
    feedback += "Created";
  }
  console.log(feedback);
  console.log("Items In Use: " + itemsUsed);
  console.log("Unused Items: " + itemsAvailable);
  console.groupEnd();
}

function itemCreateRandom() {
  console.groupCollapsed("Creating Item");
  let item = itemsAvailable[utils.indexRandom(itemsAvailable)];
  console.log(`Creating ${item.type}`);
  itemsUsed.push(item);
  // itemsAvailable.splice(itemsAvailable.indexOf(item), 1);

  itemTraitsApply(item);

  console.log(`Item Ingredients: ${item.material} & ${item.type}`);
  /* console.log(`itemsAvailable: ${itemsAvailable.map(() => item.type)}`); */

  item.name = `${item.material} ${item.type}`;
  console.log(`Final Item: ${item.name}`);
  
  console.groupEnd();
  
  return item;
}

export function itemCreateSet(amount) {
  console.groupCollapsed("Running itemCreateSet");
  let itemSet = [];
  
  for (let i = 0; i < amount; i++) {
    itemSet.push(itemCreateRandom());
  }

  console.groupEnd();

  return itemSet;
}

function itemTraitsApply(item) {
  console.groupCollapsed("Applying traits");
  let materialCategory = materials[utils.indexRandom(materials)];
  console.log(`Material Category: ${materialCategory}`);
  let material = materialCategory[utils.indexRandom(materialCategory)];
  console.log(`Material: ${material}`);
  item.material = material;
  console.groupEnd();

  return item;
}

//h1 RiTa
export function ritaAnalysisTest(input) {
  let data = [];
  console.groupCollapsed("Rita Test");
  for (let i = 0; i < input.length; i++) {
    console.log(`Analysing ${input[i].name}`);
    data.push(rita.RiTa.analyze(input[i].name));
    console.log(`${input[i].name} is pronounced ${data[i].syllables}`);
  }
  console.groupEnd();
  return data;
}


//h1 WEB DISPLAY
//h2 FUNCTIONS
export function pushToGeneratorOutput(input, output="") {
  console.groupCollapsed("pushToGeneratorOutput");
  if (output != false) {
    console.log("Clearing Div");
    output.innerHTML = "";
    console.log("Inserting Content")
    output.innerHTML = "<ul><li>" + input.join("</li><li>") + "</li></ul>";
  } else {
    console.log(input)
  }
  console.groupEnd();
}

//h2 HTML
//h3 INPUTS
/* let genButton = document.getElementById("genButton"); */
/* genButton.addEventListener("click", function () {
  console.groupCollapsed(`Button Pressed`);
  pushToGeneratorOutput(itemCreateSet(5), generatorOutput);
  pushToGeneratorOutput(ritaAnalysisTest(), ritaOutput);
  console.groupEnd();
}); */

//h3 OUTPUTS
/* let generatorOutput = document.getElementById("genHolder"); */
/* let ritaOutput = document.getElementById('ritaTest'); */

