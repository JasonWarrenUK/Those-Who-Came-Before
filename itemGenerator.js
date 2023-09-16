// ENCYCLOPEDIA
  // ITEMS
    const items = [
      {type: "axe"},
      {type: "pot"},
      {type: "spear"}
    ];

  //MATERIALS
    const materials = [bone, metal, stone, wood];
    const bone = ["bone", "horn", "ivory"];
    const metal = ["bronze", "copper", "gold", "iron", "mercury", "pewter", "silver", "steel"];
    const stone = ["flint", "granite", "obsidian"];
    const wood = ["ash", "elm", "mahogany", "oak", "willow"];

  //THIS GAME
    let itemsAvailable = items.slice();
    let itemsUsed = [];

// ITEM CREATION
  // BASIC
    function itemCreateNamed(item) {
      let feedback = "Item Type ";
      if (!items.includes(item)) {
        feedback += "Doesn't Exist";
      } else if (itemsUsed.includes(item)) {
        feedback += "Already Used";
      } else {
        itemsUsed.push(item);
        itemsAvailable.splice(indexOf(item), 1);
        feedback += "Created";
      }
      console.log(result);
      console.log("Items In Use: " + itemsUsed);
      console.log("Unused Items: " + itemsAvailable);
    }

    function itemCreateRandom() {
      let item = itemsAvailable[indexRandom(itemsAvailable)];

      itemsUsed.push(item);
      itemsAvailable.splice(indexOf(item), 1);
      
      itemTraitsApply(item);

      let feedback = "Item Type " + item.material + " " + item.type + " Created";

      console.log(feedback);
      console.log("Items In Use: " + itemsUsed);
      console.log("Unused Items: " + itemsAvailable);
    }

    function itemCreateSet(amount) {
      for (let i = 0; i <= amount; i++) {
        itemCreateRandom();
      }
    }

    function itemTraitsApply(item) {
      let materialCategory = materials[indexRandom(materials)];
      item.material = materialCategory[indexRandom(materialCategory)];
    }

// UTILITIES
  function indexRandom(arr) {
    let max = arr.length - 1;
    let index = Math.floor(Math.random() * (max + 1));
    return index;
  }
