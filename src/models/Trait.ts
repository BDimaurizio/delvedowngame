import ItemMod from "./ItemMod";
import { Slot, ModRarity, Aspect, ItemClass, ItemBody, Tag } from "."; //remember typescript is installed globally :()
import Aspects, { getAspect } from "src/resources/AspectList";
import Skill from "./Skill";

export interface TraitInterface {
  name: string;
  description: string;
  statChanges: ItemMod;
  tags: Tag[];
  grantSkill: Skill[];
}

export default class Trait implements TraitInterface {
  public name: string;
  public description: string;
  public statChanges: ItemMod;
  public tags: Tag[];
  public grantSkill: Skill[];
}
