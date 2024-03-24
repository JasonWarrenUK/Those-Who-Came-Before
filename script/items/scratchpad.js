import { iRandom } from "../utilities";

import * as orient from "./orientation";
import * as position from "./position";

import { category as parts } from "./parts";
import { category as materials } from "./materials";

const artefact = {
	name: "" /* Axe, etc */,
	orient: {
		orientArr: [orient/* .xxx */]
	},
	position: {
		positionArr: [position/* .xxx */],
	},

	blueprint: {
		/* HERE WE FUCKIN GO
			OKAY so, slot has...
			Orientation
				Where is this part relative to other parts
			Position
				Where is this part relative to the rest of the world
			Type
				What's the % chance of it generating
				What actually is this part
					near-hand -> haft
					bottom-floor -> base
		 */
		slot00: {
			loc: this.orientArr[0].location[0],
			chance: {
				//code to put percentage chances on different part types
			},
			material:
		},
		// right through to slot99: 
		}
	}
};