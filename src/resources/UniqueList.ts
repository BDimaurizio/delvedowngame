import ItemMod from "src/models/ItemMod";
import { Aspect, ModRarity, ModType } from "src/models";
import { getAspect } from "./AspectList";

let Uniques: Partial<ItemMod>[] = [
  //Unique Equipment
  {
    name: "Developer Dagger",
    description: "wow so cool",
    DEX: 999,
    INT: 999,
  },
  {
    name: "Example Unique",
    description: "wowo so cool 2",
    DEX: 9,
    INT: 9,
  },
];

export function getUnique(name: string): ItemMod {
  let resultIndex = Uniques.findIndex((element) => element.name === name);
  if (resultIndex == -1) resultIndex = 0;
  let result = Uniques[resultIndex];
  if (result.modType == undefined) result.modType = "UNIQUE";
  if (result.id == undefined)
    result.id = "7" + String(resultIndex).padStart(4, "0");
  let merged: ItemMod = { ...new ItemMod(), ...result };
  return merged;
}
