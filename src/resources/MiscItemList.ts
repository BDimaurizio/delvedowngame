import ItemMod from "src/models/ItemMod";
import { Aspect, ModRarity, ModType } from "src/models";
import { getAspect } from "./AspectList";

let MiscItems: Partial<ItemMod>[] = [
  {
    name: "NONE",
    description: "NONE",
    Tags: ["SHOWMATERIAL"],
  },
  {
    name: "Scrap",
    description: "a scrap of %MATERIAL%",
    Tags: ["SHOWMATERIAL"],
  },
  {
    name: "Applesauce",
    description: "yummy (not eatable)",
  },
];

export function getMisc(name: string): ItemMod {
  let resultIndex = MiscItems.findIndex((element) => element.name === name);
  if (resultIndex == -1) resultIndex = 0;
  let result = MiscItems[resultIndex];
  if (result.modType == undefined) result.modType = "MISC";
  if (result.id == undefined)
    result.id = "M" + String(resultIndex).padStart(4, "0");
  let merged: ItemMod = { ...new ItemMod(), ...result };
  if (!merged.Tags.includes("SHOWMATERIAL")) merged.Tags.push("HIDEMATERIAL");
  return merged;
}

export function getQuestItem(name: string): ItemMod {
  let resultIndex = MiscItems.findIndex((element) => element.name === name);
  if (resultIndex == -1) resultIndex = 0;
  let result = MiscItems[resultIndex];
  if (result.modType == undefined) result.modType = "MISC";
  if (result.id == undefined)
    result.id = "Q" + String(resultIndex).padStart(4, "0");
  let merged: ItemMod = { ...new ItemMod(), ...result };
  if (!merged.Tags.includes("QUESTITEM")) merged.Tags.push("QUESTITEM");
  if (!merged.Tags.includes("SHOWMATERIAL")) merged.Tags.push("HIDEMATERIAL");
  return merged;
}
