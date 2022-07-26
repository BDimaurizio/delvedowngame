import ItemMod from "src/models/ItemMod";
import { Aspect, ModRarity, ModType } from "src/models";
import { getAspect } from "./AspectList";

let Enchantments: Partial<ItemMod>[] = [
  {
    id: "0000",
    name: "Enchantment",
    description: "Enchantment",
  },
];

export function getEnchantment(name: string): ItemMod {
  let result = Enchantments.find((element) => element.name === name);
  if (!result) result = Enchantments[0];
  if (result.modType == undefined) result.modType = "ENCHANTMENT";
  let merged: ItemMod = { ...new ItemMod(), ...result };
  return merged;
}
