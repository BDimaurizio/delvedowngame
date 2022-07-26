import ItemMod from "src/models/ItemMod";
import Item from "src/models/Item";
import { ItemBody, ModType } from "src/models";
import { getAspect } from "src/resources/AspectList";
import { getBlessing } from "src/resources/BlessingList";
import { getCurse } from "src/resources/CurseList";
import { getEnchantment } from "src/resources/EnchantmentList";
import { getImportantStatsMod } from "src/resources/ItemBodyImportantStatsModList";
import { getBody } from "src/resources/ItemBodyList";
import { getBodyMod } from "src/resources/ItemBodyModList";
import { getItemClass } from "src/resources/ItemClassList";
import { getMaterialMod } from "src/resources/MaterialList";
import { getPlusMod } from "src/resources/PlusList";
import { getQualityMod } from "src/resources/QualityList";
import { getRuneMod } from "src/resources/RuneList";
import { getSocketMod } from "src/resources/SocketList";
import { getUnique } from "src/resources/UniqueList";

export default class ItemService {
  static getTest() {
    let testBody = getBody("Dagger");
    let testBlessing = getUnique("TEST");
    testBlessing.name = "Blessing of whatever";
    testBlessing.important1 = 5;
    testBlessing.VIT = -10;
    testBlessing.modType = "BLESSING";
    testBlessing.aspect = getAspect("Blood");
    let testQuality = new ItemMod();
    testQuality.name = "Masterwork";
    testQuality.important1 = 3;
    testQuality.important2 = 7;
    testQuality.importanta1 = 1;
    let testMaterial = new ItemMod();
    testMaterial.name = "Titanium";
    testMaterial.aspect = getAspect("Blood");
    let testSocket = new ItemMod();
    testSocket.name = "Ruby";
    testSocket.aspect = getAspect("The Sea");
    let testUnique = new ItemMod();
    testUnique.name = "Ritual Hooksword";
    let testEnchantment = new ItemMod();
    testEnchantment.name = "Of Lightning";

    let item = this.ConstructItem(
      testBody,
      testBlessing,
      testQuality,
      testMaterial,
      testSocket,
      testUnique,
      testEnchantment,
      []
    );
    return item;
  }

  static ConstructItem(
    body: ItemBody,
    blurse: ItemMod,
    quality: ItemMod,
    material: ItemMod,
    socket: ItemMod,
    unique: ItemMod,
    enchantment: ItemMod,
    plus: ItemMod[]
  ) {
    let ItemConstruct = new Item();
    ItemConstruct.body = body;
    ItemConstruct.blurse = blurse;
    ItemConstruct.quality = quality;
    ItemConstruct.material = material;
    ItemConstruct.socket = socket;
    ItemConstruct.unique = unique;
    ItemConstruct.enchantment = enchantment;
    ItemConstruct.plus = plus;
    return this.ComputeItemProperties(ItemConstruct);
  }

  static ComputeItemProperties(item: Item) {
    item.computeFinalStats;
    return item;
  }
}
