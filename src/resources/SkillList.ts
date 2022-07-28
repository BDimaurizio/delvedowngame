import ItemMod from "src/models/ItemMod";
import { Aspect, ModRarity, ModType } from "src/models";
import { getAspect } from "./AspectList";
import Skill from "src/models/Skill";
import Character from "src/models/Character";

let Skills: Skill[] = [
  {
    name: "test skill",
    description: "descrip",
    inflict: new ItemMod(),
    target: "ANY",
    targetRestrictions: [],
    activationRequirements: [],
    tags: [],
    skillCast: (caster: Character, victims: Character[]) => {
      victims[0].name = "☆skill worked☆";
      return caster;
    },
  },
];

export function getSkill(name: string): Skill {
  let result = Skills.find((element) => element.name === name);
  if (!result) result = Skills[0];
  return result;
}
