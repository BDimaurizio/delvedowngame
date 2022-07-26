import ItemMod from "src/models/ItemMod";
import { Aspect, ModRarity, ModType } from "src/models";
import { getAspect } from "./AspectList";

let PlusMods: Partial<ItemMod>[] = [
  {
    id: "0000",
    name: "Plus",
    description: "Plus",
  },
];

export function getPlusMod(name: string): ItemMod {
  let result = PlusMods.find((element) => element.name === name);
  if (!result) result = PlusMods[0];
  if (result.modType == undefined) result.modType = "PLUS";
  let merged: ItemMod = { ...new ItemMod(), ...result };
  return merged;
}
