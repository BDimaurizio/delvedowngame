import ItemMod from "src/models/ItemMod";
import { Aspect, ModRarity, ModType } from "src/models";
import { getAspect } from "./AspectList";

let Blessings: Partial<ItemMod>[] = [
  {
    name: "Blessing of Example",
    description: "An example blessing",
    LUK: 5,
    VIT: -10,
    important1: 3,
  },
];

export function getBlessing(name: string): ItemMod {
  let resultIndex = Blessings.findIndex((element) => element.name === name);
  if (resultIndex == -1) resultIndex = 0;
  let result = Blessings[resultIndex];
  if (result.modType == undefined) result.modType = "BLESSING";
  if (result.id == undefined)
    result.id = "1" + String(resultIndex).padStart(4, "0");
  let merged: ItemMod = { ...new ItemMod(), ...result };
  return merged;
}
