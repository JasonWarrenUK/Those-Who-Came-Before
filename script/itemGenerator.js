// ENCYCLOPEDIA
  // ITEMS
    const items = [
      {type: "axe"},
      {type: "brooch"},
      {type: "dagger"},
      {type: "drinking vessel"},
      {type: "pendant"},
      {type: "pot"},
      {type: "spear"},
      {type: "sword"},
      {type: "urn"}
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
      console.log("Running itemCreateNames");

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
      console.log("Running itemCreateRandom");
      let item = itemsAvailable[indexRandom(itemsAvailable)];

      itemsUsed.push(item.type);
      itemsAvailable.splice(itemsAvailable.indexOf(item), 1);
      
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
      
      for (let i = 0; i <= amount; i++) {
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

// UTILITIES
  function indexRandom(arr) {
    let max = arr.length - 1;
    let index = Math.floor(Math.random() * (max + 1));
    return index;
  }

  // PAGE
  let genButton = document.getElementById("genButton");
  let contentBucket = document.getElementById("holder");
  
  genButton.addEventListener("click", pushToPage(itemCreateSet(5)));

  function pushToPage(input) {
    console.log("Running pushToPage ");
    holder.innerHTML = "<ul><li>" + input.join("</li><li>") + "</li></ul>";
  }