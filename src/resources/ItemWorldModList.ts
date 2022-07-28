import ItemMod from "src/models/ItemMod";
import { Aspect, ModRarity, ModType } from "src/models";
import { getAspect } from "./AspectList";

let ItemWorldMods: Partial<ItemMod>[] = [
  {
    name: "Strength I",
    description: "+",
    STR: 1,
  },
];

export function getItemWorldMod(name: string): ItemMod {
  let resultIndex = ItemWorldMods.findIndex((element) => element.name === name);
  if (resultIndex == -1) resultIndex = 0;
  let result = ItemWorldMods[resultIndex];
  if (result.modType == undefined) result.modType = "ITEMWORLD";
  if (result.description == undefined) result.description = "+";
  if (result.id == undefined)
    result.id = "9" + String(resultIndex).padStart(4, "0");
  let merged: ItemMod = { ...new ItemMod(), ...result };
  return merged;
}
/*
description denotes the tier of the mod which corresponds to how deep into the item world the player went
Dagger + | Strength I | found the first Item World Stake. use it to summon the Item Guardian or break it to reroll the mod type
Dagger ++ | Strength II | killed the Item Guardian
Dagger +++ | Strength III | found the second Item World Stake
Dagger ☆ | Strength IV | killed the Item General
Dagger ☆☆ | Strength V | found the third Item World Stake
Dagger ☆☆☆ | King's Strength | killed the Item King
Dagger ☪ | <negative mod> | combine the stakes to summon the Item Devil
Dagger ★ | <really good mod> | defeat the Item Devil
*/
