import ItemMod from "src/models/ItemMod";
import { Aspect, ModRarity, ModType } from "src/models";
import { getAspect } from "./AspectList";

let ImportantStatsMods: Partial<ItemMod>[] = [
  {
    name: "NONE",
  },
  {
    name: "Dagger",
    DEX: 1,
    INT: 2,
    CriticalChance: 3,
    Clarity: 4,
  },
  {
    name: "Knuckles",
    VIT: 1,
    STR: 2,
    Armor: 3,
    PhysicalResist: 4,
  },
  {
    name: "Hatchet",
    STR: 1,
    CriticalDamage: 2,
    Attack: 3,
    PhysicalAmplification: 4,
  },
  {
    name: "Wakizashi",
    AGI: 1,
    STR: 2,
    Parry: 3,
    Deflect: 4,
  },
  {
    name: "Wand",
    INT: 1,
    LUK: 2,
    Arcana: 3,
    Clarity: 4,
  },
  {
    name: "",
  },
  {
    name: "Shortsword",
    STR: 1,
    DEX: 2,
    Attack: 3,
    Accuracy: 4,
  },
  {
    name: "Hooksword",
    STR: 1,
    WIL: 2,
    Attack: 3,
    Deflect: 4,
  },
  {
    name: "Scimitar",
    STR: 1,
    AGI: 2,
    Accuracy: 3,
    Finesse: 4,
  },
  {
    name: "Cutlass",
    AGI: 1,
    STR: 2,
    Deflect: 3,
    Attack: 4,
  },
  {
    name: "Rapier",
    DEX: 1,
    STR: 2,
    Finesse: 3,
    Parry: 4,
  },
  {
    name: "Sabre",
    STR: 1,
    DEX: 2,
    Parry: 3,
    Attack: 4,
  },
  {
    name: "Mace",
    STR: 1,
    VIT: 2,
    PhysicalAmplification: 3,
    Attack: 4,
  },
  {
    name: "Flail",
    VIT: 1,
    STR: 2,
    CriticalDamage: 3,
    CriticalChance: 4,
  },
  {
    name: "Club",
    FAI: 1,
    WIL: 2,
    Attack: 3,
    Truestrike: 4,
  },
  {
    name: "Hammer",
    STR: 1,
    FAI: 2,
    Attack: 3,
    CriticalDamage: 4,
  },
  {
    name: "Sceptre",
    CHA: 1,
    WIL: 2,
    Clarity: 3,
    Leadership: 4,
  },
  {
    name: "Orb",
    WIL: 1,
    INT: 2,
    Ward: 3,
    Clarity: 4,
  },
  {
    name: "Tome",
    INT: 1,
    WIL: 2,
    Arcana: 3,
    CriticalChance: 4,
  },
  {
    name: "",
  },
  {
    name: "Axe",
    STR: 1,
    CriticalDamage: 2,
    Attack: 3,
    PhysicalAmplification: 4,
  },
  {
    name: "Longsword",
    STR: 1,
    DEX: 2,
    Attack: 3,
    Accuracy: 4,
  },
  {
    name: "Katana",
    AGI: 1,
    STR: 2,
    Attack: 3,
    Finesse: 4,
  },
  {
    name: "Warhammer",
    STR: 1,
    FAI: 2,
    Attack: 3,
    CriticalDamage: 4,
  },
  {
    name: "Spear",
    AGI: 1,
    STR: 2,
    Truestrike: 3,
    Attack: 4,
  },
  {
    name: "Staff",
    INT: 1,
    WIL: 2,
    Arcana: 3,
    Clarity: 4,
  },
  {
    name: "",
  },
  {
    name: "Greatsword",
    STR: 1,
    DEX: 2,
    Attack: 3,
    CriticalDamage: 4,
  },
  {
    name: "Broadsword",
    STR: 1,
    DEX: 2,
    Attack: 3,
    Deflect: 4,
  },
  {
    name: "Greataxe",
    STR: 1,
    CriticalDamage: 2,
    Attack: 3,
    PhysicalAmplification: 4,
  },
  {
    name: "Greatstaff",
    INT: 1,
    STR: 2,
    Arcana: 3,
    Attack: 4,
  },
  {
    name: "Pike",
    STR: 1,
    AGI: 2,
    Attack: 3,
    Truestrike: 4,
  },
  {
    name: "Halberd",
    STR: 1,
    WIL: 2,
    Attack: 3,
    CriticalChance: 4,
  },
  {
    name: "Scythe",
    STR: 1,
    CHA: 2,
    Finesse: 3,
    Attack: 4,
  },
  {
    name: "Glaive",
    STR: 1,
    VIT: 2,
    Attack: 3,
    Finesse: 4,
  },
  {
    name: "",
  },
  {
    name: "Throwing Knife",
    DEX: 1,
    INT: 2,
    Finesse: 3,
    CriticalChance: 4,
  },
  {
    name: "Throwing Axe",
    STR: 1,
    CriticalDamage: 2,
    Attack: 3,
    PhysicalAmplification: 4,
  },
  {
    name: "Javelin",
    AGI: 1,
    STR: 2,
    Attack: 3,
    Truestrike: 4,
  },
  {
    name: "Stone",
    VIT: 1,
    STR: 2,
    Accuracy: 3,
    Attack: 4,
  },
  {
    name: "Chakram",
    STR: 1,
    DEX: 2,
    Attack: 3,
    Accuracy: 4,
  },
  {
    name: "Bomb",
    LUK: 1,
    FlameAmplification: 3,
  },
  {
    name: "",
  },
  {
    name: "Shortbow",
    AGI: 1,
    DEX: 2,
    Accuracy: 3,
    Clarity: 4,
  },
  {
    name: "Longbow",
    AGI: 1,
    DEX: 2,
    Accuracy: 3,
    Attack: 4,
  },
  {
    name: "Greatbow",
    AGI: 1,
    STR: 2,
    Attack: 3,
    CriticalDamage: 4,
  },
  {
    name: "Crossbow",
    AGI: 1,
    STR: 2,
    Attack: 3,
    CriticalDamage: 4,
  },
  {
    name: "",
  },
  {
    name: "Hand Cannon",
    AGI: 1,
    INT: 2,
    CriticalChance: 3,
    Attack: 4,
  },
  {
    name: "Blunderbus",
    STR: 1,
    AGI: 2,
    Attack: 3,
    CriticalDamage: 4,
  },
  {
    name: "",
  },
  {
    name: "Whip",
    DEX: 1,
    WIL: 2,
    Finesse: 3,
    BeastsWard: 4,
  },
  {
    name: "Energy Blade",
    WIL: 1,
    STR: 2,
    Attack: 3,
    Ward: 4,
  },
];

export function getImportantStatsMod(name: string): ItemMod {
  let resultIndex = ImportantStatsMods.findIndex(
    (element) => element.name === name
  );
  if (resultIndex == -1) resultIndex = 0;
  let result = ImportantStatsMods[resultIndex];
  if (result.modType == undefined) result.modType = "IMPORTANTSTATS";
  if (result.id == undefined)
    result.id = "I" + String(resultIndex).padStart(4, "0");
  let merged: ItemMod = { ...new ItemMod(), ...result };
  return merged;
}
