import ItemMod from "./ItemMod";
import Aspects from "src/resources/AspectList";

export type AttackingStat =
  | "VIT"
  | "STR"
  | "DEX"
  | "AGI"
  | "INT"
  | "FAI"
  | "WIL"
  | "CHA"
  | "LUK";

export type Slot =
  | "NONE"
  | "MAINHAND"
  | "OFFHAND"
  | "BOTHHAND"
  | "HEAD"
  | "BODY"
  | "HANDS"
  | "FEET"
  | "NECK"
  | "BELT";

export type ModType =
  | "NONE"
  | "UNIQUE"
  | "BLESSING"
  | "CURSE"
  | "MAJORRUNE"
  | "MINORRUNE"
  | "QUALITY"
  | "MATERIAL"
  | "SOCKET"
  | "BODYMOD"
  | "ENCHANTMENT"
  | "PLUS"
  | "IMPORTANTSTATS"
  | "IMPORTANTSTATSCOMPUTED"
  | "FINALSTATSCOMPUTED";

export type ModRarity =
  | "NONE"
  | "COMMON"
  | "UNCOMMON"
  | "RARE"
  | "SUPER RARE"
  | "ULTRA RARE"
  | "STARTING"
  | "IMPORTANTSTATSSIGNIFIERMOD"
  | "IMPORTANTSTATSCOMPUTEDMOD";

export class Aspect {
  public name!: string;
  public altName!: string;
  public description!: string;
}

export class ItemClass {
  public name!: string;
  public slot!: Slot;
  public altSlot!: Slot;
  public weight!: number;
  public ranged!: boolean;
}

export class ItemBody {
  public id!: string;
  public name!: string;
  public class!: ItemClass;
  public bodyMod!: ItemMod;
  public importantStatsMod!: ItemMod;
  public attackStat!: AttackingStat;
}
