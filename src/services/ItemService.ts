import ItemMod from "src/models/ItemMod";
import Item from "src/models/Item";
import { ItemBody, ModType } from "src/models";
import { getBlessing } from "src/resources/BlessingList";
import { getCurse } from "src/resources/CurseList";
import { getEnchantment } from "src/resources/EnchantmentList";
import { getBody, getMiscItemBody } from "src/resources/ItemBodyList";
import { getMaterialMod } from "src/resources/MaterialList";
import { getPlusMod } from "src/resources/PlusList";
import { getQualityMod } from "src/resources/QualityList";
import { getRuneMod } from "src/resources/RuneList";
import { getSocketMod } from "src/resources/SocketList";
import { getUnique } from "src/resources/UniqueList";
import { getItemWorldMod } from "src/resources/ItemWorldModList";
import { getMisc, getQuestItem } from "src/resources/MiscItemList";
import Character from "src/models/Character";
import { getSkill } from "src/resources/SkillList";

export default class ItemService {
  static getTest() {
    let char = new Character();
    char.naturalSkills.push(getSkill(""));
    window.localStorage.setItem("playerCharacter", JSON.stringify(char));
    char = new Character();
    char = this.retrieveCharacterFromLocalstorage();
    char.naturalSkills[0].skillCast(char, [char]);

    let item = this.ConstructItem(
      getBody("Dagger"),
      [
        getBlessing(""),
        getCurse(""),
        getMaterialMod("Cheese"),
        getQualityMod(""),
        getRuneMod(""),
        getSocketMod(""),
      ],
      [getPlusMod("")]
    );
    char.MAINHAND = item;
    return char;
  }

  static ComputeItemProperties(item: Item) {
    item.computeFinalStats;
    return item;
  }

  // CONSTRUCT ITEM: (BODY, [LIST OF MODS TO BE APPLIED DOES NOT NEED TO BE ORDERED], [PLUS])
  // prettier-ignore
  static ConstructItem( body: ItemBody, mods: ItemMod[] = [], plus: ItemMod[] = [] ): Item {
    return new Item(
      body,
      mods.find((element) => element.modType === "UNIQUE" || element.modType === "MISC"),
      mods.find(
        (element) =>
          element.modType === "BLESSING" ||
          element.modType === "CURSE" ||
          element.modType === "MAJORRUNE" ||
          element.modType === "MINORRUNE"
      ),
      mods.find((element) => element.modType === "QUALITY"),
      mods.find((element) => element.modType === "MATERIAL"),
      mods.find((element) => element.modType === "SOCKET"),
      mods.find((element) => element.modType === "ENCHANTMENT"),
      mods.find((element) => element.modType === "ITEMWORLD"),
      plus
    );
  }

  static fastConstructMiscItem(name: string, material: string = "NONE"): Item {
    return new Item(
      getMiscItemBody(),
      getMisc(name),
      undefined,
      undefined,
      getMaterialMod(material)
    );
  }

  static fastConstructQuestItem(name: string, material: string = "NONE"): Item {
    return new Item(
      getMiscItemBody(),
      getQuestItem(name),
      undefined,
      undefined,
      getMaterialMod(material)
    );
  }

  static retrieveCharacterFromLocalstorage(): Character {
    let chara: Character;
    let retrival = window.localStorage.getItem("playerCharacter");
    chara = JSON.parse(retrival!);
    for (let i = 0; i < chara.naturalSkills.length; i++) {
      chara.naturalSkills[i] = getSkill(chara.naturalSkills[i].name);
    }
    return chara;
  }
}
