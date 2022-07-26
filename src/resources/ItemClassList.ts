import Item from "src/models/Item";
import { ItemClass } from "src/models";

let ItemClasses: ItemClass[] = [
  {
    name: "Light Weapon",
    slot: "MAINHAND",
    altSlot: "OFFHAND",
    weight: 1,
    ranged: false,
  },
  {
    name: "Medium Weapon",
    slot: "MAINHAND",
    altSlot: "OFFHAND",
    weight: 2,
    ranged: false,
  },
  {
    name: "Heavy Weapon",
    slot: "BOTHHAND",
    altSlot: "MAINHAND",
    weight: 3,
    ranged: false,
  },
  {
    name: "Very Heavy Weapon",
    slot: "BOTHHAND",
    altSlot: "NONE",
    weight: 4,
    ranged: false,
  },
  {
    name: "Throwing Weapon",
    slot: "MAINHAND",
    altSlot: "OFFHAND",
    weight: 1,
    ranged: true,
  },
  {
    name: "Ranged Weapon",
    slot: "BOTHHAND",
    altSlot: "NONE",
    weight: 2,
    ranged: true,
  },
  {
    name: "Firearm",
    slot: "MAINHAND",
    altSlot: "OFFHAND",
    weight: 2,
    ranged: true,
  },
  {
    name: "Exotic Weapon",
    slot: "MAINHAND",
    altSlot: "NONE",
    weight: 3,
    ranged: false,
  },
  {
    name: "Light Shield",
    slot: "OFFHAND",
    altSlot: "NONE",
    weight: 1,
    ranged: false,
  },
  {
    name: "Medium Shield",
    slot: "OFFHAND",
    altSlot: "NONE",
    weight: 2,
    ranged: false,
  },
  {
    name: "Heavy Shield",
    slot: "BOTHHAND",
    altSlot: "OFFHAND",
    weight: 3,
    ranged: false,
  },
  {
    name: "Light Helmet",
    slot: "HEAD",
    altSlot: "NONE",
    weight: 1,
    ranged: false,
  },
  {
    name: "Medium Helmet",
    slot: "HEAD",
    altSlot: "NONE",
    weight: 2,
    ranged: false,
  },
  {
    name: "Heavy Helmet",
    slot: "HEAD",
    altSlot: "NONE",
    weight: 3,
    ranged: false,
  },
  {
    name: "Light Armor",
    slot: "BODY",
    altSlot: "NONE",
    weight: 1,
    ranged: false,
  },
  {
    name: "Medium Armor",
    slot: "BODY",
    altSlot: "NONE",
    weight: 2,
    ranged: false,
  },
  {
    name: "Heavy Armor",
    slot: "BODY",
    altSlot: "NONE",
    weight: 3,
    ranged: false,
  },
  {
    name: "Gloves",
    slot: "HANDS",
    altSlot: "NONE",
    weight: 1,
    ranged: false,
  },
  {
    name: "Boots",
    slot: "FEET",
    altSlot: "NONE",
    weight: 1,
    ranged: false,
  },
  {
    name: "Trinket",
    slot: "NECK",
    altSlot: "NONE",
    weight: 1,
    ranged: false,
  },
  {
    name: "Consumable",
    slot: "BELT",
    altSlot: "NONE",
    weight: 0,
    ranged: false,
  },
  {
    name: "Misc",
    slot: "NONE",
    altSlot: "NONE",
    weight: 0,
    ranged: false,
  },
];

export default ItemClasses;

export function getItemClass(name: string): ItemClass {
  let result = ItemClasses.find((element) => element.name === name);
  if (!result) result = ItemClasses[0];
  return result;
}
