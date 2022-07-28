import ItemMod from "./ItemMod";
import { Slot, ModRarity, Aspect, ItemClass, ItemBody, Tag } from "."; //remember typescript is installed globally :()
import Aspects, { getAspect } from "src/resources/AspectList";
import Skill from "./Skill";
import Trait from "./Trait";

export interface ItemInterface {
  //properties
  blurse: ItemMod;
  quality: ItemMod;
  material: ItemMod;
  socket: ItemMod;
  unique: ItemMod;
  body: ItemBody;
  enchantment: ItemMod;
  itemWorld: ItemMod;
  plus: ItemMod[];
  //computed properties
  readonly fullName: string;
  readonly id: string;
  readonly computeImportantStats: ItemMod;
  readonly computeAspects: Aspect[];
  readonly computeFinalStats: ItemMod;
  readonly statBlock: string[];
  readonly description: string;
  readonly verboseDescription: string;
  readonly skills: Skill[];
  readonly traits: Trait[];
  readonly tags: Tag[];
}

export default class Item implements ItemInterface {
  //properties
  public body: ItemBody;
  public unique: ItemMod;
  public blurse: ItemMod;
  public quality: ItemMod;
  public material: ItemMod;
  public socket: ItemMod;
  public enchantment: ItemMod;
  public itemWorld: ItemMod;
  public plus: ItemMod[];

  constructor(
    body: ItemBody,
    unique: ItemMod = new ItemMod(),
    blurse: ItemMod = new ItemMod(),
    quality: ItemMod = new ItemMod(),
    material: ItemMod = new ItemMod(),
    socket: ItemMod = new ItemMod(),
    enchantment: ItemMod = new ItemMod(),
    itemWorld: ItemMod = new ItemMod(),
    plus: ItemMod[] = []
  ) {
    this.body = body;
    this.unique = unique;
    this.blurse = blurse;
    this.quality = quality;
    this.material = material;
    this.socket = socket;
    this.enchantment = enchantment;
    this.itemWorld = itemWorld;
    this.plus = plus;
  }

  //functions
  get fullName(): string {
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
    if (
      this.material.name != "NONE" &&
      !this.unique.Tags.includes("HIDEMATERIAL")
    ) {
      stringBuilder = stringBuilder + this.material.name + " ";
    }
    if (this.unique.name != "NONE") {
      stringBuilder = stringBuilder + this.unique.name + " ";
    } else if (this.body.name != "NONE" && this.body.name != "MISC") {
      stringBuilder = stringBuilder + this.body.name + " ";
    }
    if (this.enchantment.name != "NONE") {
      stringBuilder = stringBuilder + this.enchantment.name + " ";
    }
    if (this.itemWorld.name != "NONE") {
      stringBuilder = stringBuilder + this.itemWorld.description + " ";
    }
    stringBuilder = stringBuilder.trim();
    return stringBuilder;
  }

  get id(): string {
    //item id format: (each [] is the 5 digit id of each body/mod):
    //[security check add up all digits][body][blurse][quality][material][socket][unique][enchantment][itemworld][how many plus there are][plus][plus][plus][plus]...
    /*
    id identifiers:
    blessing: 1xxxx
    rune: 2xxxx
    quality: 3xxxx
    material: 4xxxx
    socket: 5xxxx
    curse: 6xxxx
    unique: 7xxxx
    enchantment: 8xxxx
    itemworld: 9xxxx
    plus: 0xxxx
    bodymods: Bxxxx
    importantmods: Ixxxx
    misc items: Mxxxx
    quest items: Qxxxx
    trait mods: Txxxx
    */
    let stringBuilder: string =
      this.body.id +
      this.blurse.id +
      this.quality.id +
      this.material.id +
      this.socket.id +
      this.unique.id +
      this.enchantment.id +
      this.itemWorld.id;

    stringBuilder = stringBuilder + String(this.plus.length).padStart(5, "0");

    for (let i = 0; i < this.plus.length; i++) {
      stringBuilder = stringBuilder + this.plus[i].id;
    }

    let security = stringBuilder.split("").reduce((acc, curr) => {
      return acc + Number(curr);
    }, 0);

    stringBuilder = String(security).padStart(5, "0") + stringBuilder;

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
      this.enchantment.important1 +
      this.itemWorld.important1;
    let important2: number =
      this.body.bodyMod.important2 +
      this.blurse.important2 +
      this.quality.important2 +
      this.material.important2 +
      this.socket.important2 +
      this.unique.important2 +
      this.enchantment.important2 +
      this.itemWorld.important2;
    let importanta1: number =
      this.body.bodyMod.importanta1 +
      this.blurse.importanta1 +
      this.quality.importanta1 +
      this.material.importanta1 +
      this.socket.importanta1 +
      this.unique.importanta1 +
      this.enchantment.importanta1 +
      this.itemWorld.importanta1;
    let importanta2: number =
      this.body.bodyMod.importanta2 +
      this.blurse.importanta2 +
      this.quality.importanta2 +
      this.material.importanta2 +
      this.socket.importanta2 +
      this.unique.importanta2 +
      this.enchantment.importanta2 +
      this.itemWorld.importanta2;
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
      this.itemWorld.aspect,
    ];

    for (let i = 0; i < this.plus.length; i++) {
      AspectList.push(this.plus[i].aspect);
    }

    let uniq = [...new Set(AspectList)];

    AspectList = removeAllFromArray(uniq, Aspects[0]);

    return AspectList;
  }

  get computeFinalStats(): ItemMod {
    let finalStats = new ItemMod();
    finalStats.name = this.fullName;
    finalStats.id = this.id;
    finalStats.modType = "FINALSTATSCOMPUTED";

    let modList: ItemMod[] = [
      this.body.bodyMod,
      this.blurse,
      this.quality,
      this.material,
      this.socket,
      this.unique,
      this.enchantment,
      this.itemWorld,
      this.computeImportantStats,
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
    finalStats.Traits = this.traits;
    finalStats.Skills = this.skills;
    finalStats.Tags = this.tags;

    finalStats.modType = "FINALSTATSCOMPUTED";
    return finalStats;
  }

  get statBlock(): string[] {
    return [];
  }

  get description(): string {
    return "";
  }

  get verboseDescription(): string {
    return "";
  }

  get traits(): Trait[] {
    let traitArray: Trait[] = [];

    traitArray = traitArray.concat(this.blurse.Traits);
    traitArray = traitArray.concat(this.quality.Traits);
    traitArray = traitArray.concat(this.material.Traits);
    traitArray = traitArray.concat(this.socket.Traits);
    traitArray = traitArray.concat(this.unique.Traits);
    traitArray = traitArray.concat(this.body.bodyMod.Traits);
    traitArray = traitArray.concat(this.enchantment.Traits);
    traitArray = traitArray.concat(this.itemWorld.Traits);
    for (let i = 0; i < this.plus.length; i++) {
      traitArray = traitArray.concat(this.plus[i].Traits);
    }
    //traitArray = [...new Set(traitArray)]; I want duplicates

    return traitArray;
  }

  get skills(): Skill[] {
    let skillArray: Skill[] = [];

    skillArray = skillArray.concat(this.blurse.Skills);
    skillArray = skillArray.concat(this.quality.Skills);
    skillArray = skillArray.concat(this.material.Skills);
    skillArray = skillArray.concat(this.socket.Skills);
    skillArray = skillArray.concat(this.unique.Skills);
    skillArray = skillArray.concat(this.body.bodyMod.Skills);
    skillArray = skillArray.concat(this.enchantment.Skills);
    skillArray = skillArray.concat(this.itemWorld.Skills);
    for (let i = 0; i < this.plus.length; i++) {
      skillArray = skillArray.concat(this.plus[i].Skills);
    }
    skillArray = [...new Set(skillArray)];

    return skillArray;
  }

  get tags(): Tag[] {
    let tagArray: Tag[] = [];

    tagArray = tagArray.concat(this.blurse.Tags);
    tagArray = tagArray.concat(this.quality.Tags);
    tagArray = tagArray.concat(this.material.Tags);
    tagArray = tagArray.concat(this.socket.Tags);
    tagArray = tagArray.concat(this.unique.Tags);
    tagArray = tagArray.concat(this.body.bodyMod.Tags);
    tagArray = tagArray.concat(this.enchantment.Tags);
    tagArray = tagArray.concat(this.itemWorld.Tags);
    //let skillArray = this.skills;
    //let traitArray = this.traits;
    for (let i = 0; i < this.plus.length; i++) {
      tagArray = tagArray.concat(this.plus[i].Tags);
      //tagArray = tagArray.concat(skillArray[i].tags);
      //tagArray = tagArray.concat(traitArray[i].tags);
      //the tags of a skill/trait are not considered a tag of the item its on... perhaps
    }
    tagArray = [...new Set(tagArray)];

    return tagArray;
  }

  test(output: number): number {
    return this.computeFinalStats.Clarity + output;
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
