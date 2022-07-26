import ItemMod from "src/models/ItemMod";
import { Aspect, ModRarity, ModType } from "src/models";
import { getAspect } from "./AspectList";

let BodyMods: Partial<ItemMod>[] = [
  {
    id: "B000",
    name: "NONE",
  },
  {
    id: "B001",
    name: "Dagger",
    Finesse: 2,
    CriticalChance: 2,
    Clarity: 2,
    //piercing attack option (Piercing attack does less damage, the penalty is offset by your finesse) (the penalty is greater if the piercing source is not the weapon in your main hand)
  },
  {
    id: "B002",
    name: "Knuckles",
    Attack: 2,
    CriticalDamage: 2,
    Accuracy: -1,
    //counts as unarmed
  },
  {
    id: "B003",
    name: "Hatchet",
    Attack: 4,
    PhysicalAmplification: 1,
    PiercingAmplification: 1,
  },
  {
    id: "B004",
    name: "Wakizashi",
    Attack: 3,
    Parry: 3,
    PhysicalAmplification: 1,
  },
  {
    id: "B005",
    name: "Wand",
    Arcana: 3,
    //always contains a spell
  },
  {
    id: "B006",
    name: "",
  },
  {
    id: "B007",
    name: "Shortsword",
    Attack: 5,
    Accuracy: 1,
  },
  {
    id: "B008",
    name: "Hooksword",
    Attack: 3,
    Deflect: 2,
    CriticalDamage: 2,
  },
  {
    id: "B009",
    name: "Scimitar",
    Attack: 3,
    Finesse: 2,
    Accuracy: 2,
    Truestrike: 1,
  },
  {
    id: "B010",
    name: "Cutlass",
    Attack: 4,
    Finesse: 1,
    Parry: 2,
  },
  {
    id: "B011",
    name: "Rapier",
    Attack: 2,
    Finesse: 3,
    Parry: 2,
    //piercing attack option
  },
  {
    id: "B012",
    name: "Sabre",
    Attack: 4,
    Finesse: 1,
    Parry: 1,
    Accuracy: 1,
  },
  {
    id: "B013",
    name: "Mace",
    Attack: 5,
    PhysicalAmplification: 2,
    Parry: -2,
    Deflect: -2,
  },
  {
    id: "B014",
    name: "Flail",
    Attack: 2,
    CriticalChance: 2,
    CriticalDamage: 2,
  },
  {
    id: "B015",
    name: "Club",
    Attack: 3,
    HumilityAffinity: 3,
  },
  {
    id: "B016",
    name: "Hammer",
    Attack: 4,
    CriticalDamage: 3,
    Accuracy: -1,
  },
  {
    id: "B017",
    name: "Sceptre",
    Attack: 3,
    Clarity: 2,
    Leadership: 2,
  },
  {
    id: "B018",
    name: "Orb",
    Finesse: -2,
    Clarity: 3,
    Ward: 3,
    MentalStatusProtection: 3,
  },
  {
    id: "B019",
    name: "Tome",
    Attack: -2,
    FlameResist: -2,
    Arcana: 4,
  },
  {
    id: "B020",
    name: "",
  },
  {
    id: "B021",
    name: "Axe",
    Attack: 6,
    PhysicalAmplification: 2,
  },
  {
    id: "B022",
    name: "Longsword",
    Attack: 5,
    Accuracy: 2,
    Deflect: 1,
  },
  {
    id: "B023",
    name: "Katana",
    Attack: 5,
    Finesse: 3,
    Accuracy: 1,
  },
  {
    id: "B024",
    name: "Warhammer",
    Attack: 6,
    CriticalDamage: 3,
    Accuracy: -2,
  },
  {
    id: "B025",
    name: "Spear",
    Attack: 3,
    Finesse: 3,
    Truestrike: 3,
  },
  {
    id: "B026",
    name: "Staff",
    Attack: 3,
    Arcana: 3,
    Clarity: 2,
    Parry: 2,
  },
  {
    id: "B027",
    name: "",
  },
  {
    id: "B028",
    name: "Greatsword",
    Attack: 9,
  },
  {
    id: "B029",
    name: "Broadsword",
    Attack: 7,
    Deflect: 4,
    CriticalChance: 1,
  },
  {
    id: "B030",
    name: "Greataxe",
    Attack: 8,
    PhysicalAmplification: 4,
  },
  {
    id: "B031",
    name: "Greatstaff",
    Attack: 7,
    Parry: 3,
    Arcana: 3,
    Ward: 1,
  },
  {
    id: "B032",
    name: "Pike",
    Attack: 8,
    Truestrike: 6,
  },
  {
    id: "B033",
    name: "Halberd",
    Attack: 8,
    CriticalChance: 2,
  },
  {
    id: "B034",
    name: "Scythe",
    Attack: 8,
    Finesse: 1,
    CriticalDamage: 2,
    DeathAffinity: 1,
  },
  {
    id: "B035",
    name: "Glaive",
    Attack: 8,
    Finesse: 3,
  },
  {
    id: "B036",
    name: "",
  },
  {
    id: "B037",
    name: "Throwing Knife",
    Finesse: 1,
    CriticalChance: 1,
  },
  {
    id: "B038",
    name: "Throwing Axe",
    Attack: 2,
    PhysicalAmplification: 1,
  },
  {
    id: "B039",
    name: "Javelin",
    Attack: 2,
    Truestrike: 2,
  },
  {
    id: "B040",
    name: "Stone",
  },
  {
    id: "B041",
    name: "Chakram",
    Attack: 1,
    Accuracy: 1,
  },
  {
    id: "B042",
    name: "Bomb",
    Attack: 3,
  },
  {
    id: "B043",
    name: "",
  },
  {
    id: "B044",
    name: "Shortbow",
    Attack: 2,
    Accuracy: 4,
    //reload: locked out of evasion/deflect/parry/ward when fired
  },
  {
    id: "B045",
    name: "Longbow",
    Attack: 4,
    Accuracy: 1,
    //reload: locked out of evasion/deflect/parry/ward when fired
  },
  {
    id: "B046",
    name: "Greatbow",
    Attack: 5,
    //reload: locked out of evasion/deflect/parry/ward when fired
  },
  {
    id: "B047",
    name: "Crossbow",
    Attack: 7,
    //piercing attack ALWAYS
    //reload: locked out of evasion/deflect/parry/ward when fired
  },
  {
    id: "B048",
    name: "",
  },
  {
    id: "B049",
    name: "Hand Cannon",
    Attack: 9,
    //piercing attack ALWAYS
    //chance to backfire
    //reload: locked out of evasion/deflect/parry/ward when fired
  },
  {
    id: "B050",
    name: "Blunderbus",
    Attack: 10,
    //piercing attack ALWAYS
    //choice to do melee or ranged (ranged has a harsh damage penalty)
    //reload: locked out of evasion/deflect/parry/ward when fired
  },
  {
    id: "B051",
    name: "",
  },
  {
    id: "B052",
    name: "Whip",
    Finesse: 8,
    //add finesse to normal attacks
  },
  {
    id: "B053",
    name: "Starsword",
    Attack: 5,
    Accuracy: 5,
    Deflect: 5,
    Parry: 5,
    Ward: 5,
  },
];

export function getBodyMod(name: string): ItemMod {
  let result = BodyMods.find((element) => element.name === name);
  if (!result) result = BodyMods[0];
  if (result.modType == undefined) result.modType = "BODYMOD";
  let merged: ItemMod = { ...new ItemMod(), ...result };
  return merged;
}
