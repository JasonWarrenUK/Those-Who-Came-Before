let { RiTa } = require('rita');

// to analyze a sentence
function testAnalyse(string) {
	let data = RiTa.analyze(string);
	console.log(string)
	console.log(data);
}

// to load a grammar
//let grammar = RiTa.grammar();
//console.log(grammar.expand());

testAnalyse("Harriet & Jason are sitting on the sofa, waiting for dinner");