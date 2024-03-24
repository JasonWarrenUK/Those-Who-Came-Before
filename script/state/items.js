import * as orient from "./orientation";
import * as position from "./position";

let all = [];
let available = items.slice();
let used = [];

export const axe = {
	name: "",
	orientArr: [orient.wield],
	orientDesc: "",
	positionArr: [position.held],
};
export const brooch = {
	name: "",
	orientArr: [orient.face],
	orientDesc: "",
	positionArr: [position.worn],
};
export const cup = {
	name: "",
	orientArr: [orient.hold, orient.stand],
	orientDesc: "",
	positionArr: [position.held],
};
export const dagger = {
	name: "",
	orientArr: [orient.wield],
	orientDesc: "",
	positionArr: [position.held],
};
export const jar = {
	name: "",
	orientArr: [orient.stand],
	orientDesc: "",
	positionArr: [position.free],
};
export const jug = {
	name: "",
	orientArr: [orient.stand],
	orientDesc: "",
	positionArr: [position.held, position.free],
};
export const mug = {
	name: "",
	orientArr: [orient.hold, orient.stand],
	orientDesc: "",
	positionArr: [position.held],
};
export const pendant = {
	name: "",
	orientArr: [orient.face, orient.hang],
	orientDesc: "",
	positionArr: [position.worn],
};
export const pot = {
	name: "",
	orientArr: [orient.stand],
	orientDesc: "",
	positionArr: [position.free],
};
export const shovel = {
	name: "",
	orientArr: [orient.wield],
	orientDesc: "",
	positionArr: [position.held],
};
export const spear = {
	name: "",
	orientArr: [orient.wield],
	orientDesc: "",
	positionArr: [position.held],
};
export const sword = {
	name: "",
	orientArr: [orient.wield],
	orientDesc: "",
	positionArr: [position.held],
};
export const urn = {
	name: "",
	orientArr: [orient.stand],
	orientDesc: "",
	positionArr: [position.free],
};
export const vase = {
	name: "",
	orientArr: [orient.stand],
	orientDesc: "",
	positionArr: [position.free],
};

export {
	all,
	available,
	used
};