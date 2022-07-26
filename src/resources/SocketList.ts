import ItemMod from "src/models/ItemMod";
import { Aspect, ModRarity, ModType } from "src/models";
import { getAspect } from "./AspectList";

let SocketMods: Partial<ItemMod>[] = [
  {
    id: "0000",
    name: "Socket",
    description: "Socket",
  },
];

export function getSocketMod(name: string): ItemMod {
  let result = SocketMods.find((element) => element.name === name);
  if (!result) result = SocketMods[0];
  if (result.modType == undefined) result.modType = "SOCKET";
  let merged: ItemMod = { ...new ItemMod(), ...result };
  return merged;
}
