import { Aspect } from "src/models/index";

let Aspects: Aspect[] = [
  {
    name: "NONE",
    altName: "NONE",
    description: "NONE",
  },
  {
    name: "Alchemy",
    altName: "",
    description: "",
  },
  {
    name: "Art & Music",
    altName: "Art",
    description: "",
  },
  {
    name: "Battle",
    altName: "War",
    description: "",
  },
  {
    name: "Beasts",
    altName: "",
    description: "",
  },
  {
    name: "Blood",
    altName: "",
    description: "",
  },
  {
    name: "Chaos",
    altName: "",
    description: "",
  },
  {
    name: "Commerce",
    altName: "",
    description: "",
  },
  {
    name: "Creation",
    altName: "Crafting",
    description: "",
  },
  {
    name: "Darkness",
    altName: "",
    description: "",
  },
  {
    name: "Death",
    altName: "Undeath",
    description: "",
  },
  {
    name: "Destruction",
    altName: "",
    description: "",
  },
  {
    name: "Fire",
    altName: "Flame",
    description: "",
  },
  {
    name: "Food & Drink",
    altName: "Food",
    description: "",
  },
  {
    name: "Hedonism",
    altName: "Pleasure",
    description: "",
  },
  {
    name: "Honor",
    altName: "",
    description: "",
  },
  {
    name: "Humility",
    altName: "Poverty",
    description: "",
  },
  {
    name: "Ice",
    altName: "Frost",
    description: "",
  },
  {
    name: "Knowledge",
    altName: "",
    description: "",
  },
  {
    name: "Life",
    altName: "",
    description: "",
  },
  {
    name: "Light",
    altName: "",
    description: "",
  },
  {
    name: "Love",
    altName: "",
    description: "",
  },
  {
    name: "Madness",
    altName: "",
    description: "",
  },
  {
    name: "Magic",
    altName: "",
    description: "",
  },
  {
    name: "Might",
    altName: "",
    description: "",
  },
  {
    name: "Nature",
    altName: "",
    description: "",
  },
  {
    name: "Pain",
    altName: "",
    description: "",
  },
  {
    name: "Peace",
    altName: "",
    description: "",
  },
  {
    name: "Plague",
    altName: "",
    description: "",
  },
  {
    name: "Power",
    altName: "",
    description: "",
  },
  {
    name: "Earth & Stone",
    altName: "Stone",
    description: "",
  },
  {
    name: "The Forge",
    altName: "Metal",
    description: "",
  },
  {
    name: "The Moon",
    altName: "Moon",
    description: "",
  },
  {
    name: "The Sea",
    altName: "Water",
    description: "",
  },

  {
    name: "The Sky",
    altName: "Sky",
    description: "",
  },
  {
    name: "The Stars",
    altName: "Star",
    description: "",
  },
  {
    name: "The Sun",
    altName: "Sun",
    description: "",
  },
  {
    name: "The Wind",
    altName: "Wind",
    description: "",
  },
  {
    name: "Trickery",
    altName: "Thievery",
    description: "",
  },
];

export default Aspects;

export function getAspect(name: string): Aspect {
  let result = Aspects.find((element) => element.name === name);
  if (!result) result = Aspects.find((element) => element.altName === name);
  if (!result) result = Aspects[0];
  return result!;
}
