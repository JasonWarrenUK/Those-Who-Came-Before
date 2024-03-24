import {
  template as itemTemplate
} from "../items/item";
import * as itemState from "./state/items";
import * as materials from "./items/materials";

const newArtefact = Object.create(itemTemplate);

function generateType() {

}

function generateMaterial() {

}

/* ----- OLD CODE ----- */

// ITEM CREATION
function artefactCreateRandom() {
  console.log("Running artefactCreateRandom");
  let artefact = itemState.available[indexRandom(itemsAvailable)];

  // itemsUsed.push(item.type);
  // itemsAvailable.splice(itemsAvailable.indexOf(item), 1);
  
  artefactTraitsApply(artefact);

  let feedback = "Artefact Created: " + artefact.material + " " + artefact.type;

  console.log(feedback);
  console.log("itemState.Used: " + itemsUsed);
  console.log("itemState.Available: " + itemsAvailable);

  artefact = artefact.material + " " + artefact.type;
  
  return artefact;
}

function artefactCreateSet(amount) {
  let artefactSet = [];
  
  for (let i = 0; i < amount; i++) {
    artefactSet.push(artefactCreateRandom());
  }

  return artefactSet;
}

function artefactTraitsApply(artefact) {
  let materialCategory = materials.category[indexRandom(materials.category)];

  artefact.material = materialCategory[indexRandom(materialCategory)];

  return artefact;
}


// WEB DISPLAY
function pushToGeneratorOutput(input) {
	generatorOutput.innerHTML = "";
	generatorOutput.innerHTML = "<ul><li>" + input.join("</li><li>") + "</li></ul>";
}

// INPUTS
let genButton = document.getElementById("genButton");

genButton.addEventListener("click", function() {
  pushToGeneratorOutput(artefactCreateSet(5));
});

// OUTPUTS
let generatorOutput = document.getElementById("genHolder");