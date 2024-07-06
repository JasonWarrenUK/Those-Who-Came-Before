import * as rita from "rita";
import { indexRandom } from "../utils/indexRandom.js";
/* import { category as condition } from "./itemConditions.js"; */
/* import { category as part } from "./itemParts.js"; */
/* import { category as material } from "./itemMaterials.js"; */
import * as type from "./itemTypes.js";

//Prototype
export function itemType() {
	this.category = type.main.start;
	console.log(this.category);

	this.categoryRiTa = "$" + this.category;
	console.log(this.categoryRiTa);

	/* this.type = type.sub.${this.categoryRiTa};
	console.log(this.type); */
};

export function item() {
	return;
};

itemType();