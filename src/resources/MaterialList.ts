import ItemMod from "src/models/ItemMod";
import { Aspect, ModRarity, ModType } from "src/models";
import { getAspect } from "./AspectList";

let MaterialMods: Partial<ItemMod>[] = [
  {
    id: "0000",
    name: "Material",
    description: "Material",
  },
];

export function getMaterialMod(name: string): ItemMod {
  let result = MaterialMods.find((element) => element.name === name);
  if (!result) result = MaterialMods[0];
  if (result.modType == undefined) result.modType = "MATERIAL";
  let merged: ItemMod = { ...new ItemMod(), ...result };
  return merged;
}
