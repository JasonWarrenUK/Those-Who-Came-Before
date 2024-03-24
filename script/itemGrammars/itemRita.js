let { RiTa }  = require('rita');

// to analyze a sentence
let data = RiTa.analyze("Harriet is sitting next to me, but I must go to the shops.");
console.log(data);

// to load a grammar
//let grammar = RiTa.grammar();
//console.log(grammar.expand());