import * as itemGen from "./itemGenerator.js";
import { analyseItem } from "./utils/useRita.js";

const testResults = itemGen.itemCreateSet(1);
itemGen.ritaAnalysisTest(testResults);