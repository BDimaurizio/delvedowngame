import ItemMod from "src/models/ItemMod";
import { Aspect, ModRarity, ModType } from "src/models";
import { getAspect } from "./AspectList";

let QualityMods: Partial<ItemMod>[] = [
  {
    name: "Superior",
    description: "Superior Quality",
    importanta1: 1,
  },
];

export function getQualityMod(name: string): ItemMod {
  let resultIndex = QualityMods.findIndex((element) => element.name === name);
  if (resultIndex == -1) resultIndex = 0;
  let result = QualityMods[resultIndex];
  if (result.modType == undefined) result.modType = "QUALITY";
  if (result.id == undefined)
    result.id = "3" + String(resultIndex).padStart(4, "0");
  let merged: ItemMod = { ...new ItemMod(), ...result };
  return merged;
}
