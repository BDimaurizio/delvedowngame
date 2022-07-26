import ItemMod from "src/models/ItemMod";
import { Aspect, ModRarity, ModType } from "src/models";
import { getAspect } from "./AspectList";

let RuneMods: Partial<ItemMod>[] = [
  {
    id: "0000",
    name: "Rune",
    description: "Rune",
    modType: "MAJORRUNE",
  },
];

export function getRuneMod(name: string): ItemMod {
  let result = RuneMods.find((element) => element.name === name);
  if (!result) result = RuneMods[0];
  if (result.modType == undefined) result.modType = "MINORRUNE";
  let merged: ItemMod = { ...new ItemMod(), ...result };
  return merged;
}
