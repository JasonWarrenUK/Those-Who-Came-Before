export function indexRandom(arr) {
	let max = arr.length - 1;
	let index = Math.floor(Math.random() * (max + 1));
	return index;
}