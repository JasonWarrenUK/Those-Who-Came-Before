const items = ["axe", "pot", "spear"];
let itemsAdvailable = items.slice();
let itemsUsed = [];

function indexRandom(arr) {
  let max = arr.length - 1;
  let index = Math.floor(Math.random() * (max + 1));
  return index;
}

function useItemNamed(item) {
  let result = "Item Type ";

  if (!items.includes(item)) {
    result += "Doesn't Exist";
  } else if (itemsUsed.includes(item)) {
    result += "Already Used";
  } else {
    itemsUsed.push(item);
    //remove from itemsAvailable
    result += "Created";
  }

  console.log(result);
  console.log("Items In Use: " + itemsUsed);
  console.log("Unused Items: " + itemsAvailable);
}

function useItemRandom() {
  let item = itemsAvailable[indexRandom(itemsAvailable)];
  
  itemsUsed.push(item);
  //remove it from itemsAvailable;
  
  console.log("Items In Use: " + itemsUsed);
  console.log("Unused Items: " + itemsAvailable);
}
