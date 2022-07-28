import ItemMod from "src/models/ItemMod";
import { Aspect, ModRarity, ModType } from "src/models";
import { getAspect } from "./AspectList";
import Skill from "src/models/Skill";
import Character from "src/models/Character";
import Trait from "src/models/Trait";
import { getTraitMod } from "./TraitModList";

let Traits: Trait[] = [
  {
    name: "trait 1",
    description: "this is a description 1",
    statChanges: getTraitMod(""),
    tags: [],
    grantSkill: [],
  },
  {
    name: "trait 2",
    description: "this is a description 2",
    statChanges: new ItemMod(),
    tags: ["EXAMPLETAG"],
    grantSkill: [],
  },
];

export function getTrait(name: string): Trait {
  let result = Traits.find((element) => element.name === name);
  if (!result) result = Traits[0];
  return result;
}
