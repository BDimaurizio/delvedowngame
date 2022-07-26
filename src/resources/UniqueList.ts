import ItemMod from "src/models/ItemMod";
import { Aspect, ModRarity, ModType } from "src/models";
import { getAspect } from "./AspectList";

let Uniques: Partial<ItemMod>[] = [
  {
    id: "0000",
    name: "Unique",
    description: "Unique",
  },
];

export function getUnique(name: string): ItemMod {
  let result = Uniques.find((element) => element.name === name);
  if (!result) result = Uniques[0];
  if (result.modType == undefined) result.modType = "UNIQUE";
  let merged: ItemMod = { ...new ItemMod(), ...result };
  return merged;
}
