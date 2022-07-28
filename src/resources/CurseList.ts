import ItemMod from "src/models/ItemMod";
import { Aspect, ModRarity, ModType } from "src/models";
import { getAspect } from "./AspectList";

let Curses: Partial<ItemMod>[] = [
  {
    name: "Curse of Template",
    description: "An example curse",
    Attack: -3,
    WIL: 4,
  },
];

export function getCurse(name: string): ItemMod {
  let resultIndex = Curses.findIndex((element) => element.name === name);
  if (resultIndex == -1) resultIndex = 0;
  let result = Curses[resultIndex];
  if (result.modType == undefined) result.modType = "CURSE";
  if (result.id == undefined)
    result.id = "6" + String(resultIndex).padStart(4, "0");
  let merged: ItemMod = { ...new ItemMod(), ...result };
  return merged;
}
