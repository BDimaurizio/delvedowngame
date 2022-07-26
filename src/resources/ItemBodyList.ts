import ItemClassList from "./ItemClassList";
import { getItemClass } from "./ItemClassList";
import { getAspect } from "./AspectList";
import ItemMod from "src/models/ItemMod";
import { ModType, ModRarity, Slot, ItemClass, ItemBody } from "src/models";
import { getBodyMod } from "./ItemBodyModList";
import { getImportantStatsMod } from "./ItemBodyImportantStatsModList";

let ItemBodies: ItemBody[] = [
  {
    id: "0000",
    name: "NONE",
    class: getItemClass("Misc"),
    attackStat: "LUK",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0001",
    name: "Dagger",
    class: getItemClass("Light Weapon"),
    attackStat: "DEX",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0002",
    name: "Knuckles",
    class: getItemClass("Light Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0003",
    name: "Hatchet",
    class: getItemClass("Light Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0004",
    name: "Wakizashi",
    class: getItemClass("Light Weapon"),
    attackStat: "DEX",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0005",
    name: "Wand",
    class: getItemClass("Light Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0006",
    name: "",
    class: getItemClass("Light Weapon"),
    attackStat: "LUK",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0007",
    name: "Shortsword",
    class: getItemClass("Medium Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0008",
    name: "Hooksword",
    class: getItemClass("Medium Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0009",
    name: "Scimitar",
    class: getItemClass("Medium Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0010",
    name: "Cutlass",
    class: getItemClass("Medium Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0011",
    name: "Rapier",
    class: getItemClass("Medium Weapon"),
    attackStat: "DEX",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0012",
    name: "Sabre",
    class: getItemClass("Medium Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0013",
    name: "Mace",
    class: getItemClass("Medium Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0014",
    name: "Flail",
    class: getItemClass("Medium Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0015",
    name: "Club",
    class: getItemClass("Medium Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0016",
    name: "Hammer",
    class: getItemClass("Medium Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0017",
    name: "Sceptre",
    class: getItemClass("Medium Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0018",
    name: "Orb",
    class: getItemClass("Medium Weapon"),
    attackStat: "WIL",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0019",
    name: "Tome",
    class: getItemClass("Medium Weapon"),
    attackStat: "INT",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0020",
    name: "",
    class: getItemClass("Medium Weapon"),
    attackStat: "LUK",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0021",
    name: "Axe",
    class: getItemClass("Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0022",
    name: "Longsword",
    class: getItemClass("Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0023",
    name: "Katana",
    class: getItemClass("Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0024",
    name: "Warhammer",
    class: getItemClass("Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0025",
    name: "Spear",
    class: getItemClass("Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0026",
    name: "Staff",
    class: getItemClass("Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0027",
    name: "",
    class: getItemClass("Heavy Weapon"),
    attackStat: "LUK",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0028",
    name: "Greatsword",
    class: getItemClass("Very Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0029",
    name: "Broadsword",
    class: getItemClass("Very Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0030",
    name: "Greataxe",
    class: getItemClass("Very Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0031",
    name: "Greatstaff",
    class: getItemClass("Very Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0032",
    name: "Pike",
    class: getItemClass("Very Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0033",
    name: "Halberd",
    class: getItemClass("Very Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0034",
    name: "Scythe",
    class: getItemClass("Very Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0035",
    name: "Glaive",
    class: getItemClass("Very Heavy Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0036",
    name: "",
    class: getItemClass("Very Heavy Weapon"),
    attackStat: "LUK",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0037",
    name: "Throwing Knife",
    class: getItemClass("Throwing Weapon"),
    attackStat: "DEX",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0038",
    name: "Throwing Axe",
    class: getItemClass("Throwing Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0039",
    name: "Javelin",
    class: getItemClass("Throwing Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0040",
    name: "Stone",
    class: getItemClass("Throwing Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0041",
    name: "Chakram",
    class: getItemClass("Throwing Weapon"),
    attackStat: "STR",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0042",
    name: "Bomb",
    class: getItemClass("Throwing Weapon"),
    attackStat: "LUK",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0043",
    name: "",
    class: getItemClass("Throwing Weapon"),
    attackStat: "LUK",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0044",
    name: "Shortbow",
    class: getItemClass("Ranged Weapon"),
    attackStat: "AGI",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0045",
    name: "Longbow",
    class: getItemClass("Ranged Weapon"),
    attackStat: "AGI",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0046",
    name: "Greatbow",
    class: getItemClass("Ranged Weapon"),
    attackStat: "AGI",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0047",
    name: "Crossbow",
    class: getItemClass("Ranged Weapon"),
    attackStat: "AGI",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0048",
    name: "",
    class: getItemClass("Ranged Weapon"),
    attackStat: "AGI",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0049",
    name: "Hand Cannon",
    class: getItemClass("Firearm"),
    attackStat: "AGI",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0050",
    name: "Blunderbus",
    class: getItemClass("Firearm"),
    attackStat: "LUK",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0051",
    name: "",
    class: getItemClass("Firearm"),
    attackStat: "LUK",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0052",
    name: "Whip",
    class: getItemClass("Exotic Weapon"),
    attackStat: "DEX",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0053",
    name: "Starsword",
    class: getItemClass("Exotic Weapon"),
    attackStat: "WIL",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
  {
    id: "0054",
    name: "",
    class: getItemClass("Exotic Weapon"),
    attackStat: "LUK",
    // prettier-ignore
    get bodyMod(): ItemMod {return getBodyMod(this.name);},
    get importantStatsMod(): ItemMod {return getImportantStatsMod(this.name);},
    // prettier-ignore
  },
];

export function getBody(name: string): ItemBody {
  console.log(ItemBodies);
  let result = ItemBodies.find((element) => element.name === name);
  if (!result) result = ItemBodies[0];
  return result;
}
