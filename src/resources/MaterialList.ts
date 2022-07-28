import ItemMod from "src/models/ItemMod";
import { Aspect, ModRarity, ModType } from "src/models";
import { getAspect } from "./AspectList";

let MaterialMods: Partial<ItemMod>[] = [
  {
    name: "Driftwood",
    description: "Material",
    Finesse: -1,
  },
  {
    name: "Cheese",
    description: "yummy yum yum",
    AGI: 80000,
    FoodDrinkAffinity: 80000,
  },
];

export function getMaterialMod(name: string): ItemMod {
  let resultIndex = MaterialMods.findIndex((element) => element.name === name);
  if (resultIndex == -1) resultIndex = 0;
  let result = MaterialMods[resultIndex];
  if (result.modType == undefined) result.modType = "MATERIAL";
  if (result.id == undefined)
    result.id = "4" + String(resultIndex).padStart(4, "0");
  let merged: ItemMod = { ...new ItemMod(), ...result };
  return merged;
}
