import ItemMod from "src/models/ItemMod";
import { Aspect, ModRarity, ModType } from "src/models";
import { getAspect } from "./AspectList";

let Curses: Partial<ItemMod>[] = [
  {
    id: "0000",
    name: "Curse",
    description: "Curse",
  },
];

export function getCurse(name: string): ItemMod {
  let result = Curses.find((element) => element.name === name);
  if (!result) result = Curses[0];
  if (result.modType == undefined) result.modType = "CURSE";
  let merged: ItemMod = { ...new ItemMod(), ...result };
  return merged;
}
