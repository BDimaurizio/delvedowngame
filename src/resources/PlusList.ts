import ItemMod from "src/models/ItemMod";
import { Aspect, ModRarity, ModType } from "src/models";
import { getAspect } from "./AspectList";

let PlusMods: Partial<ItemMod>[] = [
  {
    name: "Plus",
    description: "Plus",
    Deflect: 27,
  },
];

export function getPlusMod(name: string): ItemMod {
  let resultIndex = PlusMods.findIndex((element) => element.name === name);
  if (resultIndex == -1) resultIndex = 0;
  let result = PlusMods[resultIndex];
  if (result.modType == undefined) result.modType = "PLUS";
  if (result.id == undefined)
    result.id = "0" + String(resultIndex).padStart(4, "0");
  let merged: ItemMod = { ...new ItemMod(), ...result };
  return merged;
}
