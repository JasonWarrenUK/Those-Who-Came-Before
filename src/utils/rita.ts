// import * as rita from "rita";
import RiTa from "rita";
// import RiTa = rita;


// to load a grammar
//let grammar = RiTa.grammar();
//console.log(grammar.expand());

export function analyseItem(inputArr) {
  let data = [];
	
  for (let i = 0; i < inputArr.length; i++) {
    // data.push(rita.RiTa.analyze(inputArr[i].name));
    data.push(RiTa.analyze(inputArr[i].name));
  }
	
  return data;
}

export function analyseObjectProperty (obj, prop) {
	RiTa
}