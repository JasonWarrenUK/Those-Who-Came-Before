import {
  item as itemTemplate
} from "../items/anatomy";

const newItem = Object.create(itemTemplate);

function generateType() {

}

function generateMaterial() {

}

/* ----- OLD CODE ----- */

// ITEM CREATION
function itemCreateRandom() {
  /* Now, let's dance with the itemCreateRandom function. You're trying to access item.material and item.type, but you never define these properties in your items. You might want to consider adding them to your item objects in the items array. */

  console.log("Running itemCreateRandom");
  let item = itemsAvailable[indexRandom(itemsAvailable)];

  // itemsUsed.push(item.type);
  // itemsAvailable.splice(itemsAvailable.indexOf(item), 1);
  
  itemTraitsApply(item);

  let feedback = "Item Created: " + item.material + " " + item.type;

  console.log(feedback);
  console.log("itemsUsed: " + itemsUsed);
  console.log("itemsAvailable: " + itemsAvailable);

  item = item.material + " " + item.type;
  
  return item;
}

function itemCreateSet(amount) {
  console.log("Running itemCreateSet");
  let itemSet = [];
  
  for (let i = 0; i < amount; i++) {
    itemSet.push(itemCreateRandom());
  }

  return itemSet;
}

function itemTraitsApply(item) {
  console.log("Running itemTraitsApply");
  let materialCategory = materials[indexRandom(materials)];
  item.material = materialCategory[indexRandom(materialCategory)];

  return item;
}


// WEB DISPLAY
function pushToGeneratorOutput(input) {
  console.group("pushToGeneratorOutput");
    console.log("Clearing Div")
    generatorOutput.innerHTML = "";
    console.log("Inserting Content")
    generatorOutput.innerHTML = "<ul><li>" + input.join("</li><li>") + "</li></ul>";
  console.groupEnd();
}

// INPUTS
let genButton = document.getElementById("genButton");
genButton.addEventListener("click", function() {
  pushToGeneratorOutput(itemCreateSet(5));
});

// OUTPUTS
let generatorOutput = document.getElementById("genHolder");