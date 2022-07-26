import ItemMod from "src/models/ItemMod";
import { Aspect, ModRarity, ModType } from "src/models";
import { getAspect } from "./AspectList";

let Blessings: Partial<ItemMod>[] = [
  {
    id: "0000",
    name: "Blessing",
    description: "Blessing",
  },
];

export function getBlessing(name: string): ItemMod {
  let result = Blessings.find((element) => element.name === name);
  if (!result) result = Blessings[0];
  if (result.modType == undefined) result.modType = "BLESSING";
  let merged: ItemMod = { ...new ItemMod(), ...result };
  return merged;
}
