import ItemMod from "src/models/ItemMod";
import { Aspect, ModRarity, ModType } from "src/models";
import { getAspect } from "./AspectList";

let SocketMods: Partial<ItemMod>[] = [
  {
    name: "NONE",
    description: "NONE", //no socket
  },
  {
    name: "Empty",
    description: "It contains a gem socket, but it is empty.",
  },
  {
    name: "Ruby",
    description: " is inlaid with rubies",
  },
];

export function getSocketMod(name: string): ItemMod {
  let resultIndex = SocketMods.findIndex((element) => element.name === name);
  if (resultIndex == -1) resultIndex = 0;
  let result = SocketMods[resultIndex];
  if (result.modType == undefined) result.modType = "SOCKET";
  if (result.id == undefined)
    result.id = "5" + String(resultIndex).padStart(4, "0");
  let merged: ItemMod = { ...new ItemMod(), ...result };
  return merged;
}
