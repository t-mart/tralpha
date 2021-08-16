import { boldMap } from "./bold";
import { circledMap } from "./circled";
import { circledNegativeMap } from "./circledNegative";
import { doubleStruckMap } from "./doubleStruck";
import { frakturMap } from "./fraktur";
import { frakturBoldMap } from "./frakturBold";
import { fullwidthMap } from "./fullwidth";
import { ItalicMap } from "./italic";
import { italicBoldMap } from "./italicBold";
import { monospaceMap } from "./monospace";
import { parenthesizedMap } from "./parenthesized";
import { regionalIndicatorMap } from "./regionalIndicator";
import { sansSerifMap } from "./sansSerif";
import { sansSerifBoldMap } from "./sansSerifBold";
import { sansSerifItalicMap } from "./sansSerifItalic";
import { sansSerifItalicBoldMap } from "./sansSerifItalicBold";
import { scriptMap } from "./script";
import { scriptBoldMap } from "./scriptBold";
import { squaredMap } from "./squared";
import { squaredNegativeMap } from "./squaredNegative";
import { subscriptMap } from "./subscript";
import { superscriptMap } from "./superscript";

export const mapsByName: Record<string, Record<string, string>> = {
  "Normal (No conversion)": {},
  Bold: boldMap,
  Circled: circledMap,
  "Circled Negative": circledNegativeMap,
  "Double-struck": doubleStruckMap,
  Fraktur: frakturMap,
  "Fraktur Bold": frakturBoldMap,
  Fullwidth: fullwidthMap,
  Italic: ItalicMap,
  "Italic Bold": italicBoldMap,
  Monospace: monospaceMap,
  Parenthesized: parenthesizedMap,
  "Regional Indicator": regionalIndicatorMap,
  "Sans-serif": sansSerifMap,
  "Sans-serif Bold": sansSerifBoldMap,
  "Sans-serif Italic": sansSerifItalicMap,
  "Sans-serif Italic Bold": sansSerifItalicBoldMap,
  Script: scriptMap,
  "Script Bold": scriptBoldMap,
  Squared: squaredMap,
  "Squared Negative": squaredNegativeMap,
  Subscript: subscriptMap,
  Superscript: superscriptMap,
};

export function translateText(alphabetName: string, text: string) {
  return [...text].map((char) => mapsByName[alphabetName][char] || char).join("")
}
