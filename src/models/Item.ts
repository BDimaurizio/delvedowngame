import ItemMod from "./ItemMod";
import { Slot, ModRarity, Aspect, ItemClass, ItemBody } from "."; //remember typescript is installed globally :()
import { ImportNamespaceSpecifier } from "@typescript-eslint/types/dist/generated/ast-spec";
import Aspects, { getAspect } from "src/resources/AspectList";

export interface ItemInterface {
  //computed properties
  fullname: string;
  id: string;
  importantStatsComputed: ItemMod;
  finalStatsComputed: ItemMod;
  aspects: Aspect[];
  //item component properties
  blurse: ItemMod;
  quality: ItemMod;
  material: ItemMod;
  socket: ItemMod;
  unique: ItemMod;
  body: ItemBody;
  enchantment: ItemMod;
  plus: ItemMod[];

  //functions
  readonly computeFullName: string;
  readonly computeid: string;
  readonly computeImportantStats: ItemMod;
  readonly computeAspects: Aspect[];
  readonly computeFinalStats: ItemMod;
}

export default class Item implements ItemInterface {
  //computed properties
  public id: string = "";
  public fullname: string = "";
  public importantStatsComputed: ItemMod = new ItemMod();
  public finalStatsComputed: ItemMod = new ItemMod();
  public aspects: Aspect[] = [getAspect("NONE")];
  //item component properties
  public body!: ItemBody;
  public unique!: ItemMod;
  public blurse!: ItemMod;
  public quality!: ItemMod;
  public material!: ItemMod;
  public socket!: ItemMod;
  public enchantment!: ItemMod;
  public plus!: ItemMod[];

  //functions
  get computeFullName(): string {
    let stringBuilder = "";
    if (this.blurse.modType != "NONE") {
      if (this.blurse.modType == "BLESSING") {
        stringBuilder = stringBuilder + "Blessed ";
      } else if (this.blurse.modType == "CURSE") {
        stringBuilder = stringBuilder + "Cursed ";
      } else if (this.blurse.modType == "MAJORRUNE") {
        stringBuilder = stringBuilder + "Runic ";
      } else if (this.blurse.modType == "MINORRUNE") {
        stringBuilder = stringBuilder + "Engraved ";
      }
    }
    if (this.quality.name != "NONE") {
      stringBuilder = stringBuilder + this.quality.name + " ";
    }
    if (this.material.name != "NONE") {
      stringBuilder = stringBuilder + this.material.name + " ";
    }
    if (this.socket.name != "NONE") {
      stringBuilder = stringBuilder + this.socket.name + " ";
    }
    if (this.unique.name != "NONE") {
      stringBuilder = stringBuilder + this.unique.name + " ";
    } else if (this.body.name) {
      stringBuilder = stringBuilder + this.body.name + " ";
    }
    if (this.enchantment.name != "NONE") {
      stringBuilder = stringBuilder + this.enchantment.name + " ";
    }
    stringBuilder = stringBuilder.trim();
    this.fullname = stringBuilder;
    return stringBuilder;
  }

  get computeid(): string {
    //item id format: (each [] is the 4 digit id of each body/mod):
    //[security check add up all digits][body][blurse][quality][material][socket][unique][enchantment][how many plus there are][plus][plus][plus][plus]...
    let stringBuilder =
      this.body.id +
      this.blurse.id +
      this.quality.id +
      this.material.id +
      this.socket.id +
      this.unique.id +
      this.enchantment.id;

    stringBuilder = stringBuilder + String(this.plus.length).padStart(4, "0");

    for (let i = 0; i < this.plus.length; i++) {
      stringBuilder = stringBuilder + this.plus[i];
    }

    let security = stringBuilder.split("").reduce((acc, curr) => {
      return acc + Number(curr);
    }, 0);

    stringBuilder = String(security).padStart(4, "0") + stringBuilder;

    this.id = stringBuilder;
    return stringBuilder;
  }

  get computeImportantStats(): ItemMod {
    let importantStatsBuilder = this.body.importantStatsMod;

    let important1: number =
      this.body.bodyMod.important1 +
      this.blurse.important1 +
      this.quality.important1 +
      this.material.important1 +
      this.socket.important1 +
      this.unique.important1 +
      this.enchantment.important1;
    let important2: number =
      this.body.bodyMod.important2 +
      this.blurse.important2 +
      this.quality.important2 +
      this.material.important2 +
      this.socket.important2 +
      this.unique.important2 +
      this.enchantment.important2;
    let importanta1: number =
      this.body.bodyMod.importanta1 +
      this.blurse.importanta1 +
      this.quality.importanta1 +
      this.material.importanta1 +
      this.socket.importanta1 +
      this.unique.importanta1 +
      this.enchantment.importanta1;
    let importanta2: number =
      this.body.bodyMod.importanta2 +
      this.blurse.importanta2 +
      this.quality.importanta2 +
      this.material.importanta2 +
      this.socket.importanta2 +
      this.unique.importanta2 +
      this.enchantment.importanta2;
    for (let i = 0; i < this.plus.length; i++) {
      important1 = important1 + this.plus[i].important1;
      important2 = important1 + this.plus[i].important2;
      importanta1 = important1 + this.plus[i].importanta1;
      importanta2 = important1 + this.plus[i].importanta2;
    }

    let property: keyof ItemMod;
    for (property in importantStatsBuilder) {
      if (
        typeof importantStatsBuilder[property] == "number" &&
        importantStatsBuilder[property] === 1
      ) {
        (importantStatsBuilder[property] as number) = important1;
      } else if (
        typeof importantStatsBuilder[property] == "number" &&
        importantStatsBuilder[property] === 2
      ) {
        (importantStatsBuilder[property] as number) = important2;
      } else if (
        typeof importantStatsBuilder[property] == "number" &&
        importantStatsBuilder[property] === 3
      ) {
        (importantStatsBuilder[property] as number) = importanta1;
      } else if (
        typeof importantStatsBuilder[property] == "number" &&
        importantStatsBuilder[property] === 4
      ) {
        (importantStatsBuilder[property] as number) = importanta2;
      }
    }
    importantStatsBuilder.modType = "IMPORTANTSTATSCOMPUTED";
    this.importantStatsComputed = importantStatsBuilder;
    return importantStatsBuilder;
  }

  get computeAspects(): Aspect[] {
    let AspectList: Aspect[] = [
      this.body.bodyMod.aspect,
      this.body.importantStatsMod.aspect,
      this.blurse.aspect,
      this.quality.aspect,
      this.material.aspect,
      this.socket.aspect,
      this.unique.aspect,
      this.enchantment.aspect,
    ];

    for (let i = 0; i < this.plus.length; i++) {
      AspectList.push(this.plus[i].aspect);
    }

    let uniq = [...new Set(AspectList)];

    AspectList = removeAllFromArray(uniq, Aspects[0]);

    this.aspects = AspectList;
    return AspectList;
  }

  get computeFinalStats(): ItemMod {
    this.computeImportantStats;
    this.computeAspects;
    let finalStats = new ItemMod();
    finalStats.name = this.computeFullName;
    finalStats.id = this.computeid;
    finalStats.modType = "FINALSTATSCOMPUTED";

    let modList: ItemMod[] = [
      this.body.bodyMod,
      this.blurse,
      this.quality,
      this.material,
      this.socket,
      this.unique,
      this.enchantment,
      this.importantStatsComputed,
    ];

    if (this.plus) modList = modList.concat(this.plus);

    let property: keyof ItemMod;
    for (property in finalStats) {
      if (typeof finalStats[property] == "number") {
        for (let i = 0; i < modList.length; i++) {
          (finalStats[property] as number) += modList[i][property] as number;
        }
      }
    }
    //TODO make it compute an array of the traits/skills you get too

    finalStats.modType = "FINALSTATSCOMPUTED";
    this.finalStatsComputed = finalStats;
    return finalStats;
  }
}

function removeAllFromArray(arr: Aspect[], value: Aspect) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}
