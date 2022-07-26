import { ModType, ModRarity, Aspect, ItemClass } from ".";
import Aspects from "src/resources/AspectList";
import { getItemClass } from "src/resources/ItemClassList";

export default class ItemMod {
  //general info
  public id: string = "0000";
  public modType: ModType = "NONE";
  public name: string = "NONE";
  public rarity: ModRarity = "NONE";
  public aspect: Aspect = Aspects[0];
  public description: string = "NONE";
  public verboseDescription: string = "NONE";
  //important stats modifications
  public important1: number = 0;
  public important2: number = 0;
  public importanta1: number = 0;
  public importanta2: number = 0;
  //primary stats
  public HP: number = 0;
  public MP: number = 0;
  public SP: number = 0;
  public VIT: number = 0;
  public STR: number = 0;
  public DEX: number = 0;
  public AGI: number = 0;
  public INT: number = 0;
  public FAI: number = 0;
  public WIL: number = 0;
  public CHA: number = 0;
  public LUK: number = 0;
  //offensive stats
  public Accuracy: number = 0;
  public Clarity: number = 0;
  public Attack: number = 0;
  public Finesse: number = 0;
  public Arcana: number = 0;
  public Truestrike: number = 0;
  public CriticalChance: number = 0;
  public CriticalDamage: number = 0;
  public PhysicalAmplification: number = 0;
  public PiercingAmplification: number = 0;
  public FlameAmplification: number = 0;
  public FrostAmplification: number = 0;
  public StormAmplification: number = 0;
  public HolyAmplification: number = 0;
  public ShadowAmplification: number = 0;
  public ChaosAmplification: number = 0;
  //defensive stats
  public Armor: number = 0;
  public Evasion: number = 0;
  public Deflect: number = 0;
  public Parry: number = 0;
  public Ward: number = 0;
  public PhysicalResist: number = 0;
  public PiercingResist: number = 0;
  public FlameResist: number = 0;
  public FrostResist: number = 0;
  public StormResist: number = 0;
  public HolyResist: number = 0;
  public ShadowResist: number = 0;
  public ChaosResist: number = 0;
  public MentalStatusProtection: number = 0;
  public PhysicalStatusProtection: number = 0;
  //defensive stats vs specific aspects
  public AlchemyWard: number = 0;
  public ArtMusicWard: number = 0;
  public BattleWard: number = 0;
  public BeastsWard: number = 0;
  public BloodWard: number = 0;
  public ChaosWard: number = 0;
  public CommerceWard: number = 0;
  public CreationWard: number = 0;
  public DarknessWard: number = 0;
  public DeathWard: number = 0;
  public DestructionWard: number = 0;
  public FireWard: number = 0;
  public FoodDrinkWard: number = 0;
  public HedonismWard: number = 0;
  public HonorWard: number = 0;
  public HumilityWard: number = 0;
  public IceWard: number = 0;
  public KnowledgeWard: number = 0;
  public LifeWard: number = 0;
  public LightWard: number = 0;
  public LoveWard: number = 0;
  public MadnessWard: number = 0;
  public MagicWard: number = 0;
  public MightWard: number = 0;
  public NatureWard: number = 0;
  public PainWard: number = 0;
  public PeaceWard: number = 0;
  public PlagueWard: number = 0;
  public PowerWard: number = 0;
  public StoneWard: number = 0;
  public ForgeWard: number = 0;
  public MoonWard: number = 0;
  public SkyWard: number = 0;
  public StarsWard: number = 0;
  public SunWard: number = 0;
  public WindWard: number = 0;
  public TrickeryWard: number = 0;
  public SeaWard: number = 0;
  //aspects affinity (hidden)
  public AlchemyAffinity: number = 0;
  public ArtMusicAffinity: number = 0;
  public BattleAffinity: number = 0;
  public BeastsAffinity: number = 0;
  public BloodAffinity: number = 0;
  public ChaosAffinity: number = 0;
  public CommerceAffinity: number = 0;
  public CreationAffinity: number = 0;
  public DarknessAffinity: number = 0;
  public DeathAffinity: number = 0;
  public DestructionAffinity: number = 0;
  public FireAffinity: number = 0;
  public FoodDrinkAffinity: number = 0;
  public HedonismAffinity: number = 0;
  public HonorAffinity: number = 0;
  public HumilityAffinity: number = 0;
  public IceAffinity: number = 0;
  public KnowledgeAffinity: number = 0;
  public LifeAffinity: number = 0;
  public LightAffinity: number = 0;
  public LoveAffinity: number = 0;
  public MadnessAffinity: number = 0;
  public MagicAffinity: number = 0;
  public MightAffinity: number = 0;
  public NatureAffinity: number = 0;
  public PainAffinity: number = 0;
  public PeaceAffinity: number = 0;
  public PlagueAffinity: number = 0;
  public PowerAffinity: number = 0;
  public StoneAffinity: number = 0;
  public ForgeAffinity: number = 0;
  public MoonAffinity: number = 0;
  public SkyAffinity: number = 0;
  public StarsAffinity: number = 0;
  public SunAffinity: number = 0;
  public WindAffinity: number = 0;
  public TrickeryAffinity: number = 0;
  public SeaAffinity: number = 0;
  //noncombat stats
  public Leadership: number = 0;
  public Diplomacy: number = 0;
  public Bargaining: number = 0;
  public Crafting: number = 0;
  public Foraging: number = 0;
  public Hunting: number = 0;
  public Mining: number = 0;
  public Stealth: number = 0;
  public Medicine: number = 0;
  //other hidden stats
  public Loyalty: number = 0;
  public Locked: boolean = false;
  public TargetItemClass: ItemClass = getItemClass("Misc");
  //special effects
  //*************public Traits: Trait[];
  //*************public Skills: Trait[];
}
