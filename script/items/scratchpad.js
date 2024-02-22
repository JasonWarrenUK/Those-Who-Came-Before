import * as orient from "./orientation";
import * as position from "./position";
import { category as parts } from "./parts";
import { iRandom } from "../utilities";

const artefact = {
	name: "" /* Axe, etc */,
	orientation: {
		orientArr: [orient/* .xxx */]
	},
	position: {
		positionArr: [position/* .xxx */],
	},
	blueprint: {
		part00: {
			where: this.orientArr[0].location[0],
			typeChance: {
				//code to put percentage chances on different part types
			}
		},
		part99: {
			where: this.orientArr[0].location[1],
			typeChance: {
				//code to put percentage chances on different part types
			}
		}
	}
};