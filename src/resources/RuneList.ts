import ItemMod from "src/models/ItemMod";
import { Aspect, ModRarity, ModType } from "src/models";
import { getAspect } from "./AspectList";

let RuneMods: Partial<ItemMod>[] = [
  {
    name: "Rune of Rune-ness",
    description: "RuneRuneRune",
    modType: "MAJORRUNE",
  },
];

export function getRuneMod(name: string): ItemMod {
  let resultIndex = RuneMods.findIndex((element) => element.name === name);
  if (resultIndex == -1) resultIndex = 0;
  let result = RuneMods[resultIndex];
  if (result.modType == undefined) result.modType = "MINORRUNE";
  if (result.id == undefined)
    result.id = "2" + String(resultIndex).padStart(4, "0");
  let merged: ItemMod = { ...new ItemMod(), ...result };
  return merged;
}
