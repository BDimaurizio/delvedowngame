import ItemMod from "src/models/ItemMod";
import { Aspect, ModRarity, ModType } from "src/models";
import { getAspect } from "./AspectList";

let TraitMods: Partial<ItemMod>[] = [
  {
    name: "NONE",
    description: "NONE",
  },
  {
    name: "Trait Mod",
    description: "It contains a trait mod",
  },
];

export function getTraitMod(name: string): ItemMod {
  let resultIndex = TraitMods.findIndex((element) => element.name === name);
  if (resultIndex == -1) resultIndex = 0;
  let result = TraitMods[resultIndex];
  if (result.modType == undefined) result.modType = "TRAITMOD";
  if (result.id == undefined)
    result.id = "T" + String(resultIndex).padStart(4, "0");
  let merged: ItemMod = { ...new ItemMod(), ...result };
  return merged;
}
