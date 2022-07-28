import ItemMod from "src/models/ItemMod";
import { Aspect, ModRarity, ModType } from "src/models";
import { getAspect } from "./AspectList";
import { getTrait } from "./TraitList";

let BodyMods: Partial<ItemMod>[] = [
  {
    name: "NONE",
  },
  {
    name: "Dagger",
    Finesse: 2,
    CriticalChance: 2,
    Clarity: 2,
    Traits: [getTrait("trait 2")],
    //piercing attack option (Piercing attack does less damage, the penalty is offset by your finesse) (the penalty is greater if the piercing source is not the weapon in your main hand)
  },
  {
    name: "Knuckles",
    Attack: 2,
    CriticalDamage: 2,
    Accuracy: -1,
    //counts as unarmed
  },
  {
    name: "Hatchet",
    Attack: 4,
    PhysicalAmplification: 1,
    PiercingAmplification: 1,
  },
  {
    name: "Wakizashi",
    Attack: 3,
    Parry: 3,
    PhysicalAmplification: 1,
  },
  {
    name: "Wand",
    Arcana: 3,
    //always contains a spell
  },
  {
    name: "",
  },
  {
    name: "Shortsword",
    Attack: 5,
    Accuracy: 1,
  },
  {
    name: "Hooksword",
    Attack: 3,
    Deflect: 2,
    CriticalDamage: 2,
  },
  {
    name: "Scimitar",
    Attack: 3,
    Finesse: 2,
    Accuracy: 2,
    Truestrike: 1,
  },
  {
    name: "Cutlass",
    Attack: 4,
    Finesse: 1,
    Parry: 2,
  },
  {
    name: "Rapier",
    Attack: 2,
    Finesse: 3,
    Parry: 2,
    //piercing attack option
  },
  {
    name: "Sabre",
    Attack: 4,
    Finesse: 1,
    Parry: 1,
    Accuracy: 1,
  },
  {
    name: "Mace",
    Attack: 5,
    PhysicalAmplification: 2,
    Parry: -2,
    Deflect: -2,
  },
  {
    name: "Flail",
    Attack: 2,
    CriticalChance: 2,
    CriticalDamage: 2,
  },
  {
    name: "Club",
    Attack: 3,
    HumilityAffinity: 3,
  },
  {
    name: "Hammer",
    Attack: 4,
    CriticalDamage: 3,
    Accuracy: -1,
  },
  {
    name: "Sceptre",
    Attack: 3,
    Clarity: 2,
    Leadership: 2,
  },
  {
    name: "Orb",
    Finesse: -2,
    Clarity: 3,
    Ward: 3,
    MentalStatusProtection: 3,
  },
  {
    name: "Tome",
    Attack: -2,
    FlameResist: -2,
    Arcana: 4,
  },
  {
    name: "",
  },
  {
    name: "Axe",
    Attack: 6,
    PhysicalAmplification: 2,
  },
  {
    name: "Longsword",
    Attack: 5,
    Accuracy: 2,
    Deflect: 1,
  },
  {
    name: "Katana",
    Attack: 5,
    Finesse: 3,
    Accuracy: 1,
  },
  {
    name: "Warhammer",
    Attack: 6,
    CriticalDamage: 3,
    Accuracy: -2,
  },
  {
    name: "Spear",
    Attack: 3,
    Finesse: 3,
    Truestrike: 3,
  },
  {
    name: "Staff",
    Attack: 3,
    Arcana: 3,
    Clarity: 2,
    Parry: 2,
  },
  {
    name: "",
  },
  {
    name: "Greatsword",
    Attack: 9,
  },
  {
    name: "Broadsword",
    Attack: 7,
    Deflect: 4,
    CriticalChance: 1,
  },
  {
    name: "Greataxe",
    Attack: 8,
    PhysicalAmplification: 4,
  },
  {
    name: "Greatstaff",
    Attack: 7,
    Parry: 3,
    Arcana: 3,
    Ward: 1,
  },
  {
    name: "Pike",
    Attack: 8,
    Truestrike: 6,
  },
  {
    name: "Halberd",
    Attack: 8,
    CriticalChance: 2,
  },
  {
    name: "Scythe",
    Attack: 8,
    Finesse: 1,
    CriticalDamage: 2,
    DeathAffinity: 1,
  },
  {
    name: "Glaive",
    Attack: 8,
    Finesse: 3,
  },
  {
    name: "",
  },
  {
    name: "Throwing Knife",
    Finesse: 1,
    CriticalChance: 1,
  },
  {
    name: "Throwing Axe",
    Attack: 2,
    PhysicalAmplification: 1,
  },
  {
    name: "Javelin",
    Attack: 2,
    Truestrike: 2,
  },
  {
    name: "Stone",
  },
  {
    name: "Chakram",
    Attack: 1,
    Accuracy: 1,
  },
  {
    name: "Bomb",
    Attack: 3,
  },
  {
    name: "",
  },
  {
    name: "Shortbow",
    Attack: 2,
    Accuracy: 4,
    //reload: locked out of evasion/deflect/parry/ward when fired
  },
  {
    name: "Longbow",
    Attack: 4,
    Accuracy: 1,
    //reload: locked out of evasion/deflect/parry/ward when fired
  },
  {
    name: "Greatbow",
    Attack: 5,
    //reload: locked out of evasion/deflect/parry/ward when fired
  },
  {
    name: "Crossbow",
    Attack: 7,
    //piercing attack ALWAYS
    //reload: locked out of evasion/deflect/parry/ward when fired
  },
  {
    name: "",
  },
  {
    name: "Hand Cannon",
    Attack: 9,
    //piercing attack ALWAYS
    //chance to backfire
    //reload: locked out of evasion/deflect/parry/ward when fired
  },
  {
    name: "Blunderbus",
    Attack: 10,
    //piercing attack ALWAYS
    //choice to do melee or ranged (ranged has a harsh damage penalty)
    //reload: locked out of evasion/deflect/parry/ward when fired
  },
  {
    name: "",
  },
  {
    name: "Whip",
    Finesse: 8,
    //add finesse to normal attacks
  },
  {
    name: "Energy Blade",
    Attack: 5,
    Accuracy: 5,
    Deflect: 5,
    Parry: 5,
    Ward: 5,
  },
];

export function getBodyMod(name: string): ItemMod {
  let resultIndex = BodyMods.findIndex((element) => element.name === name);
  if (resultIndex == -1) resultIndex = 0;
  let result = BodyMods[resultIndex];
  if (result.modType == undefined) result.modType = "BODYMOD";
  if (result.id == undefined)
    result.id = "B" + String(resultIndex).padStart(4, "0");
  let merged: ItemMod = { ...new ItemMod(), ...result };
  return merged;
}
