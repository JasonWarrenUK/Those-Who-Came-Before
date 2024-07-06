import * as rita from "rita";

// to load a grammar
//let grammar = RiTa.grammar();
//console.log(grammar.expand());

export function analyseItem(inputArr) {
  let data = [];
  console.groupCollapsed("Rita Test");
  for (let i = 0; i < inputArr.length; i++) {
    console.log(`Analysing ${inputArr[i].name}`);
    data.push(rita.RiTa.analyze(inputArr[i].name));
    console.log(`${inputArr[i].name} is pronounced ${data[i].syllables}`);
  }
  console.groupEnd();
  return data;
}