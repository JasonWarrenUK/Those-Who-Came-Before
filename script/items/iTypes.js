import * as util from "../utilities";

// Library
const ornament = ["brooch", "pendant"]
const store = ["jar", "pot", "urn", "vase"];
const vessel = ["cup", "mug"];
const weapon = ['axe', 'dagger', 'spear', 'sword'];

// Sub-Categories
const apparel = [ornament];
const container = [store, vessel];
const tool = [weapon];

// Categories
const category = [apparel, container, tool];

export {category};