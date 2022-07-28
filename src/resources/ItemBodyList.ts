import { getItemClass } from "./ItemClassList";
import ItemMod from "src/models/ItemMod";
import { ItemBody } from "src/models";
import { getBodyMod } from "./ItemBodyModList";
import { getImportantStatsMod } from "./ItemBodyImportantStatsModList";

let ItemBodies: ItemBody[] = [
  {
    id: "00000",
    name: "NONE",
    class: getItemClass("Misc"),
    attackStat: "NONE",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00001",
    name: "Dagger",
    class: getItemClass("Light Weapon"),
    attackStat: "DEX",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00002",
    name: "Knuckles",
    class: getItemClass("Light Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00003",
    name: "Hatchet",
    class: getItemClass("Light Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00004",
    name: "Wakizashi",
    class: getItemClass("Light Weapon"),
    attackStat: "DEX",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00005",
    name: "Wand",
    class: getItemClass("Light Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00006",
    name: "",
    class: getItemClass("Light Weapon"),
    attackStat: "NONE",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00007",
    name: "Shortsword",
    class: getItemClass("Medium Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00008",
    name: "Hooksword",
    class: getItemClass("Medium Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00009",
    name: "Scimitar",
    class: getItemClass("Medium Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00010",
    name: "Cutlass",
    class: getItemClass("Medium Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00011",
    name: "Rapier",
    class: getItemClass("Medium Weapon"),
    attackStat: "DEX",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00012",
    name: "Sabre",
    class: getItemClass("Medium Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00013",
    name: "Mace",
    class: getItemClass("Medium Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00014",
    name: "Flail",
    class: getItemClass("Medium Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00015",
    name: "Club",
    class: getItemClass("Medium Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00016",
    name: "Hammer",
    class: getItemClass("Medium Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00017",
    name: "Sceptre",
    class: getItemClass("Medium Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00018",
    name: "Orb",
    class: getItemClass("Medium Weapon"),
    attackStat: "WIL",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00019",
    name: "Tome",
    class: getItemClass("Medium Weapon"),
    attackStat: "INT",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00020",
    name: "",
    class: getItemClass("Medium Weapon"),
    attackStat: "NONE",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00021",
    name: "Axe",
    class: getItemClass("Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00022",
    name: "Longsword",
    class: getItemClass("Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00023",
    name: "Katana",
    class: getItemClass("Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00024",
    name: "Warhammer",
    class: getItemClass("Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00025",
    name: "Spear",
    class: getItemClass("Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00026",
    name: "Staff",
    class: getItemClass("Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00027",
    name: "",
    class: getItemClass("Heavy Weapon"),
    attackStat: "NONE",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00028",
    name: "Greatsword",
    class: getItemClass("Very Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00029",
    name: "Broadsword",
    class: getItemClass("Very Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00030",
    name: "Greataxe",
    class: getItemClass("Very Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00031",
    name: "Greatstaff",
    class: getItemClass("Very Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00032",
    name: "Pike",
    class: getItemClass("Very Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00033",
    name: "Halberd",
    class: getItemClass("Very Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00034",
    name: "Scythe",
    class: getItemClass("Very Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00035",
    name: "Glaive",
    class: getItemClass("Very Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00036",
    name: "",
    class: getItemClass("Very Heavy Weapon"),
    attackStat: "NONE",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00037",
    name: "Throwing Knife",
    class: getItemClass("Throwing Weapon"),
    attackStat: "DEX",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00038",
    name: "Throwing Axe",
    class: getItemClass("Throwing Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00039",
    name: "Javelin",
    class: getItemClass("Throwing Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00040",
    name: "Stone",
    class: getItemClass("Throwing Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00041",
    name: "Chakram",
    class: getItemClass("Throwing Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00042",
    name: "Bomb",
    class: getItemClass("Throwing Weapon"),
    attackStat: "LUK",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00043",
    name: "",
    class: getItemClass("Throwing Weapon"),
    attackStat: "NONE",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00044",
    name: "Shortbow",
    class: getItemClass("Ranged Weapon"),
    attackStat: "AGI",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00045",
    name: "Longbow",
    class: getItemClass("Ranged Weapon"),
    attackStat: "AGI",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00046",
    name: "Greatbow",
    class: getItemClass("Ranged Weapon"),
    attackStat: "AGI",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00047",
    name: "Crossbow",
    class: getItemClass("Ranged Weapon"),
    attackStat: "AGI",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00048",
    name: "",
    class: getItemClass("Ranged Weapon"),
    attackStat: "NONE",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00049",
    name: "Hand Cannon",
    class: getItemClass("Firearm"),
    attackStat: "AGI",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00050",
    name: "Blunderbus",
    class: getItemClass("Firearm"),
    attackStat: "LUK",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00051",
    name: "",
    class: getItemClass("Firearm"),
    attackStat: "NONE",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00052",
    name: "Whip",
    class: getItemClass("Exotic Weapon"),
    attackStat: "DEX",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00053",
    name: "Energy Blade",
    class: getItemClass("Exotic Weapon"),
    attackStat: "WIL",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "00054",
    name: "",
    class: getItemClass("Exotic Weapon"),
    attackStat: "NONE",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  ///...............
  {
    id: "99990",
    name: "MISC",
    class: getItemClass("Misc"),
    attackStat: "NONE",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod("NONE");},
    get importantStatsMod(): ItemMod {return getImportantStatsMod("NONE");},
    // prettier-ignore
  },
];

export function getBody(name: string): ItemBody {
  let result = ItemBodies.find((element) => element.name === name);
  if (!result) result = ItemBodies[0];
  return result;
}

export function getMiscItemBody(): ItemBody {
  let result = ItemBodies.find((element) => element.name === "MISC");
  return result!;
}
