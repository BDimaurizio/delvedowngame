import ItemMod from "./ItemMod";
import { Slot, ModRarity, Aspect, ItemClass, ItemBody } from "."; //remember typescript is installed globally :()
import Aspects, { getAspect } from "src/resources/AspectList";
import Item from "./Item";
import Trait from "./Trait";
import Skill from "./Skill";
import { getBody } from "src/resources/ItemBodyList";

export interface CharacterInterface {
  name: string;
  stats: ItemMod;
  naturalTraits: Trait[];
  naturalSkills: Skill[];
  MAINHAND: Item;
  OFFHAND: Item;
  HEAD: Item;
  BODY: Item;
  HANDS: Item;
  FEET: Item;
  NECK: Item[];
  BELT: Item[];
}

export default class Character implements CharacterInterface {
  public name: string = "NONE";
  public stats: ItemMod = new ItemMod();
  public naturalTraits: Trait[] = [];
  public naturalSkills: Skill[] = [];
  public MAINHAND: Item;
  public OFFHAND: Item;
  public HEAD: Item;
  public BODY: Item;
  public HANDS: Item;
  public FEET: Item;
  public NECK: Item[];
  public BELT: Item[];

  public inventory: Item[];

  equip(equip: Item, slot: Slot): boolean {
    if (
      equip.body.class.slot != slot ||
      equip.body.class.altSlot != slot ||
      slot == "NONE"
    )
      return false;
    this.unequipBySlot(slot);
    return true;
  }

  unequipBySlot(slot: Slot): boolean {
    if (slot == "NONE" || slot == "NECK" || slot == "BELT") return false;
    else if (slot == "BOTHHAND") {
      this.unequipBySlot("MAINHAND");
      this.unequipBySlot("OFFHAND");
      return true;
    } else if (slot == "MAINHAND") {
      this.addItemToInventory(this.MAINHAND);
      this.MAINHAND = new Item(getBody("NONE"));
    } else if (slot == "OFFHAND") {
      this.addItemToInventory(this.OFFHAND);
      this.OFFHAND = new Item(getBody("NONE"));
    } else if (slot == "HEAD") {
      this.addItemToInventory(this.HEAD);
      this.HEAD = new Item(getBody("NONE"));
    } else if (slot == "BODY") {
      this.addItemToInventory(this.BODY);
      this.BODY = new Item(getBody("NONE"));
    } else if (slot == "HANDS") {
      this.addItemToInventory(this.HANDS);
      this.HANDS = new Item(getBody("NONE"));
    } else if (slot == "FEET") {
      this.addItemToInventory(this.FEET);
      this.FEET = new Item(getBody("NONE"));
    } else return false;
    return true;
  }

  unequipByItem(unequip: Item): boolean {
    if (this.MAINHAND == unequip) return this.unequipBySlot("MAINHAND");
    else if (this.OFFHAND == unequip) return this.unequipBySlot("OFFHAND");
    else if (this.HEAD == unequip) return this.unequipBySlot("HEAD");
    else if (this.BODY == unequip) return this.unequipBySlot("BODY");
    else if (this.HANDS == unequip) return this.unequipBySlot("HANDS");
    else if (this.FEET == unequip) return this.unequipBySlot("FEET");
    else if (this.NECK.includes(unequip)) {
      let index = this.NECK.indexOf(unequip);
      this.NECK.splice(index, 1);
      this.addItemToInventory(unequip);
    } else if (this.BELT.includes(unequip)) {
      let index = this.BELT.indexOf(unequip);
      this.BELT.splice(index, 1);
      this.addItemToInventory(unequip);
    } else return false;
    return true;
  }

  addItemToInventory(add: Item): boolean {
    if (add.id == "N0000" || add.body.name == "NONE") return false;
    this.inventory.push(add);
    return true;
  }
}
