import * as util from "../utilities";

const item = {
	start: "$category",
	category: "$apparel | $container | $tool",
	apparel: "$ornament",
	container: "$store | $vessel",
	tool: "$weapon",
	ornament: "brooch",
	store: "jar | pot | urn | vase",
	vessel: "cup | mug",
	weapon: "axe | dagger | spear | sword"
}

export const main = {
	start: "$category",
	category: "$apparel | $container | $tool",
	apparel: "ornament",
	container: "store | vessel",
	tool: "weapon"
}

export const sub = {
	ornament: "brooch",
	store: "jar | jug | pot | urn | vase",
	vessel: "cup | jug | mug",
	weapon: "axe | dagger | spear | sword"
};
