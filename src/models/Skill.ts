import ItemMod from "./ItemMod";
import { Slot, Aspect, ItemClass, ItemBody, Target, Tag } from "."; //remember typescript is installed globally :()
import Aspects, { getAspect } from "src/resources/AspectList";
import Item from "./Item";
import Character from "./Character";

export interface SkillInterface {
  name: string;
  description: string;
  inflict: ItemMod;
  target: Target;
  targetRestrictions: Tag[];
  activationRequirements: Tag[];
  tags: Tag[];
  skillCast: (caster: Character, victims: Character[]) => Character;
}

export default class Skill implements SkillInterface {
  public name: string;
  public description: string;
  public inflict: ItemMod;
  public target: Target;
  public targetRestrictions: Tag[];
  public activationRequirements: Tag[];
  public tags: Tag[];
  public skillCast: (caster: Character, victims: Character[]) => Character;
}
