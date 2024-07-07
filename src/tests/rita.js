import { itemCreateSet } from "../itemGenerator.js";
import { analyseItem } from "../utils/useRita.js";

const testResults = itemCreateSet(1);
analyseItem(testResults);