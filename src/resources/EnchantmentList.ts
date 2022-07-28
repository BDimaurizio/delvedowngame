import ItemMod from "src/models/ItemMod";
import { Aspect, ModRarity, ModType } from "src/models";
import { getAspect } from "./AspectList";
import { getTrait } from "./TraitList";

let Enchantments: Partial<ItemMod>[] = [
  {
    name: "Of Enchantment",
    description: "A basic enchantment",
    INT: 2,
    Traits: [getTrait("trait 1"), getTrait("trait 2")],
  },
];

export function getEnchantment(name: string): ItemMod {
  let resultIndex = Enchantments.findIndex((element) => element.name === name);
  if (resultIndex == -1) resultIndex = 0;
  let result = Enchantments[resultIndex];
  if (result.modType == undefined) result.modType = "ENCHANTMENT";
  if (result.id == undefined)
    result.id = "8" + String(resultIndex).padStart(4, "0");
  let merged: ItemMod = { ...new ItemMod(), ...result };
  return merged;
}
