import ItemMod from "src/models/ItemMod";
import { Aspect, ModRarity, ModType } from "src/models";
import { getAspect } from "./AspectList";

let QualityMods: Partial<ItemMod>[] = [
  {
    id: "0000",
    name: "Quality",
    description: "Quality",
  },
];

export function getQualityMod(name: string): ItemMod {
  let result = QualityMods.find((element) => element.name === name);
  if (!result) result = QualityMods[0];
  if (result.modType == undefined) result.modType = "QUALITY";
  let merged: ItemMod = { ...new ItemMod(), ...result };
  return merged;
}
