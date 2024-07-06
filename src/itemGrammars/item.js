let { RiTa } = require('rita');

import * as util from "../utilities";
import { category as condition } from "./conditions";
import { category as part } from "./parts";
import { category as material } from "./materials";
import * as type from "./types";

//Prototype
function ItemType() {
	this.category = type.main.start;
	this.categoryRiTa = "$" + this.category;
	this.type = type.sub.${this.categoryRiTa};
};

function Item() {

};

export { Item };