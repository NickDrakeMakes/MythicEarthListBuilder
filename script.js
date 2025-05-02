<!-- Start of Aztec -->


const aztecUnits = [
  {
    name: "Tlalocan-bound Dead",
    basePoints: 55,
    unitType: "Humanoid",
    monsterType: "Living Dead",
    composition: [
      { label: "Undying Champion with macuahuitl", count: 1 },
      { label: "Tlalocan-bound Dead with clubs", count: 4 }
    ],
    upgradeOptions: [
      { label: "Add Tlalocan-bound Dead", cost: 5, max: 10, type: "perModel" }
    ],
    maxUnits: 5
  },
  {
    name: "Tlalocan High Priest",
    basePoints: 113,
    unitType: "Heroic",
    monsterType: "Magic",
    isGeneral: true,
    composition: [
      { label: "Tlalocan High Priest with macuahuitl", count: 1 }
    ],
    upgradeOptions: [
      { label: "Upgrade to Magic Level 3", cost: 25, type: "flat" },
      { label: "Upgrade to Toughened 2", cost: 10, type: "flat" },
      { label: "Upgrade to 3 Wounds", cost: 10, type: "flat" }
    ],
    maxUnits: 1
  },
  {
    name: "Tlalocan Marauders",
    basePoints: 97,
    unitType: "Humanoid",
    monsterType: "Living Dead",
    composition: [
      { label: "Marauder Champion with dual swords and light armor", count: 1 },
      { label: "Marauders with dual swords and light armor", count: 2 }
    ],
    upgradeOptions: [
      { label: "Add Marauder", cost: 25, max: 7, type: "perModel" },
      { label: "Upgrade to dual macuahuitls", cost: 1, max: 8, type: "perModel" },
      { label: "Upgrade to dual huge macuahuitls", cost: 2, max: 8, type: "perModel" },
      { label: "Upgrade Marauders to 2 Wounds", cost: 14, type: "flat" }
    ],
    maxUnits: 3
  },
  {
    name: "Spider Sisters",
    basePoints: 55,
    unitType: "Humanoid",
    monsterType: "Magic",
    composition: [
      { label: "Spider Sister Priestess with dagger", count: 1 },
      { label: "Spider Sisters with daggers", count: 2 }
    ],
    upgradeOptions: [
      { label: "Add Spider Sister", cost: 6, max: 2, type: "perModel" }
    ],
    maxUnits: 1
  },
  {
    name: "Jaguar Warriors",
    basePoints: 87,
    unitType: "Humanoid",
    composition: [
      { label: "Jaguar Captain with sword and light armor", count: 1 },
      { label: "Jaguar Warriors with swords and light armor", count: 4 }
    ],
    upgradeOptions: [
      { label: "Add Jaguar Warrior", cost: 15, max: 5, type: "perModel" },
      { label: "Replace swords with spears (free)", cost: 0, max: 9, type: "perModel" },
      { label: "Replace swords with macuahuitls", cost: 1, max: 9, type: "perModel" }
    ],
    maxUnits: 3
  },
  {
    name: "Eagle Warriors",
    basePoints: 87,
    unitType: "Humanoid",
    composition: [
      { label: "Eagle Captain with bow and sword", count: 1 },
      { label: "Eagle Warriors with bows and swords", count: 4 }
    ],
    upgradeOptions: [
      { label: "Add Eagle Warrior", cost: 15, max: 5, type: "perModel" },
      { label: "Replace bows with slings", cost: 1, max: 9, type: "perModel" },
      { label: "Add light armor (save 5(6))", cost: 2, max: 9, type: "perModel" }
    ],
    maxUnits: 3
  },
  {
    name: "Hummingbird Warriors",
    basePoints: 87,
    unitType: "Humanoid",
    composition: [
      { label: "Hummingbird Captain with macuahuitl", count: 1 },
      { label: "Hummingbird Warriors with macuahuitls", count: 4 }
    ],
    upgradeOptions: [
      { label: "Add Hummingbird Warrior", cost: 15, max: 5, type: "perModel" }
    ],
    maxUnits: 3,
    requires: "Eagle Warriors"
  },
  {
    name: "Quetzalcoatl",
    basePoints: 139,
    unitType: "Behemoth",
    monsterType: "Magic",
    composition: [
      { label: "Quetzalcoatl", count: 1 }
    ],
    upgradeOptions: [
      { label: "Upgrade to 3 Wounds", cost: 27, type: "flat" },
      { label: "Upgrade to Magic Level 3", cost: 25, type: "flat" }
    ],
    maxUnits: 1
  },
  {
    name: "Ayar",
    basePoints: 198,
    unitType: "Behemoth",
    monsterType: "Living Dead",
    composition: [
      { label: "Ayar", count: 1 }
    ],
    upgradeOptions: [
      { label: "Upgrade to 4 Wounds", cost: 33, type: "flat" }
    ],
    maxUnits: 1
  }
  
];
window.aztecUnits = aztecUnits;
<!-- End of Aztec -->




<!-- Start of Tribal Nations -->


const tribalUnits = [
  {
    name: "Sachem (on foot)",
    basePoints: 89,
    unitType: "Heroic",
    isGeneral: true,
    composition: [
      { label: "Sachem with tomahawk", count: 1 },
      { label: "Mohawk Warriors with tomahawks", count: 2 }
    ],
    upgradeOptions: [
      { label: "Upgrade Sachem to Toughened 2", cost: 10, type: "flat" },
      { label: "Upgrade Sachem to 3 Wounds", cost: 10, type: "flat" }
    ],
    maxUnits: 1
  },
  {
    name: "Sachem (mounted on War Eagle)",
    basePoints: 121,
    unitType: "Heroic",
    isGeneral: true,
    composition: [
      { label: "Sachem with spear", count: 1 },
      { label: "War Eagle", count: 1 }
    ],
    upgradeOptions: [
      { label: "Upgrade Sachem to Toughened 2", cost: 10, type: "flat" },
      { label: "Upgrade Sachem to 4 Wounds", cost: 36, type: "flat" }
    ],
    maxUnits: 1
  },
  {
    name: "Medicine Man",
    basePoints: 63,
    unitType: "Heroic",
    monsterType: "Magic",
    composition: [
      { label: "Medicine Man with club", count: 1 }
    ],
    upgradeOptions: [
      { label: "Upgrade to Magic Level 2", cost: 25, type: "flat" },
      { label: "Upgrade to Magic Level 3", cost: 50, type: "flat" },
      { label: "Upgrade to Toughened 2", cost: 10, type: "flat" },
      { label: "Add Mohawk Warrior", cost: 10, max: 9, type: "perModel" },
      { label: "Replace clubs with tomahawks", cost: 3, max: 9, type: "perModel" }
    ],
    maxUnits: 1
  },
  {
    name: "Mohawk Warriors",
    basePoints: 62,
    unitType: "Humanoid",
    composition: [
      { label: "Mohawk Warrior Leader with club", count: 1 },
      { label: "Mohawk Warriors with clubs", count: 4 }
    ],
    upgradeOptions: [
      { label: "Add Mohawk Warrior", cost: 10, max: 5, type: "perModel" },
      { label: "Replace clubs with tomahawks", cost: 3, max: 9, type: "perModel" }
    ],
    maxUnits: 10
  },
  {
    name: "Seneca Archers",
    basePoints: 77,
    unitType: "Humanoid",
    composition: [
      { label: "Seneca Archer Leader with bow and club", count: 1 },
      { label: "Seneca Archers with bows and clubs", count: 4 }
    ],
    upgradeOptions: [
      { label: "Add Seneca Archer", cost: 13, max: 5, type: "perModel" },
      { label: "Give unit Eagle Eye", cost: 10, type: "flat" }
    ],
    maxUnits: 10
  },
  {
    name: "Wolves",
    basePoints: 80,
    unitType: "Beast",
    composition: [
      { label: "Wolves", count: 5 }
    ],
    upgradeOptions: [],
    maxUnits: 5
  },
  {
    name: "War Eagles",
    basePoints: 78,
    unitType: "Beast",
    composition: [
      { label: "War Eagles", count: 3 }
    ],
    upgradeOptions: [
      { label: "Add War Eagle", cost: 26, max: 2, type: "perModel" }
    ],
    maxUnits: 5
  },
  {
    name: "Sasquatch",
    basePoints: 147,
    unitType: "Monster",
    composition: [
      { label: "Sasquatch", count: 3 }
    ],
    upgradeOptions: [
      { label: "Add Sasquatch", cost: 47, max: 2, type: "perModel" },
      { label: "Upgrade Sasquatch to 2 Wounds", cost: 16, max: 5, type: "perModel" }
    ],
    maxUnits: 5
  },
  {
    name: "Wendigo",
    basePoints: 130,
    unitType: "Behemoth",
    composition: [
      { label: "Wendigo", count: 1 }
    ],
    upgradeOptions: [
      { label: "Upgrade to 4 Wounds", cost: 27, type: "flat" }
    ],
    maxUnits: 1
  },
  {
    name: "Pukwudgie",
    basePoints: 118,
    unitType: "Multitudes",
    monsterType: "Magic",
    composition: [
      { label: "Pukwudgie with bows and daggers", count: 3 }
    ],
    upgradeOptions: [
      { label: "Add Pukwudgie", cost: 31, max: 2, type: "perModel" },
      { label: "Upgrade Pukwudgie to 3 Wounds", cost: 8, max: 5, type: "perModel" }
    ],
    maxUnits: 5
  }
];

window.tribalUnits = tribalUnits;
<!-- END of Tribal Nations -->


<!-- Start of Maya -->
const mayaUnits = [
  {
    name: "Halach Uinic Warlord",
    basePoints: 125,
    unitType: "Humanoid",
    isGeneral: true,
    monsterType: "Heroic",
    composition: [
      { label: "Halach Uinic Warlord with sword and light armor", count: 1 },
      { label: "Almehenob Nobles with swords and light armor", count: 2 }
    ],
    upgradeOptions: [
      { label: "Upgrade to Toughened 2", cost: 10, type: "flat" },
      { label: "Upgrade to 3 Wounds", cost: 14, type: "flat" }
    ],
    maxUnits: 1
  },
  {
    name: "Ah Kin Priestess",
    basePoints: 62,
    unitType: "Humanoid",
    monsterType: "Magic",
    composition: [
      { label: "Ah Kin Priestess with dagger", count: 1 }
    ],
    upgradeOptions: [
      { label: "Upgrade to Magic Level 2", cost: 25, type: "flat" },
      { label: "Upgrade to Magic Level 3", cost: 50, type: "flat" },
      { label: "Upgrade to Toughened 2", cost: 10, type: "flat" },
      { label: "Add Alux Spirit", cost: 10, max: 4, type: "perModel" },
      { label: "Give unit Dread", cost: 10, type: "flat" }
    ],
    maxUnits: 1
  },
  {
    name: "Almehenob Nobles",
    basePoints: 112,
    unitType: "Humanoid",
    composition: [
      { label: "Almehenob Noble Leader with sword and light armor", count: 1 },
      { label: "Almehenob Nobles with swords and light armor", count: 4 }
    ],
    upgradeOptions: [
      { label: "Add Almehenob Noble", cost: 19, max: 5, type: "perModel" },
      { label: "Replace swords with macuahuitls", cost: 1, max: 9, type: "perModel" },
      { label: "Replace swords with huge macuahuitls", cost: 2, max: 9, type: "perModel" },
      { label: "Replace swords with spears", cost: 0, max: 9, type: "perModel" },
      { label: "Give unit medium armor", cost: 2, max: 9, type: "perModel" }
    ],
    maxUnits: 10
  },
  {
    name: "Calakmal Warriors",
    basePoints: 102,
    unitType: "Humanoid",
    composition: [
      { label: "Calakmal Warrior Leader with sword and light armor", count: 1 },
      { label: "Calakmal Warriors with swords and light armor", count: 4 }
    ],
    upgradeOptions: [
      { label: "Add Calakmal Warrior", cost: 17, max: 5, type: "perModel" },
      { label: "Replace swords with spears", cost: 0, max: 9, type: "perModel" },
      { label: "Replace swords with macuahuitls", cost: 1, max: 9, type: "perModel" }
    ],
    maxUnits: 10
  },
  {
    name: "Tikal Archers",
    basePoints: 97,
    unitType: "Humanoid",
    composition: [
      { label: "Tikal Archer Leader with sword and bow", count: 1 },
      { label: "Tikal Archers with swords and bows", count: 4 }
    ],
    upgradeOptions: [
      { label: "Add Tikal Archer", cost: 16, max: 5, type: "perModel" },
      { label: "Replace bows with atlatls", cost: 2, max: 9, type: "perModel" },
      { label: "Give unit light armor", cost: 2, max: 9, type: "perModel" }
    ],
    maxUnits: 10
  },
  {
    name: "B'alam Shape-shifters",
    basePoints: 60,
    unitType: "Multitudes",
    composition: [
      { label: "B'alam Shape-shifter Leader with spear and light armor", count: 1 },
      { label: "B'alam Shape-shifters with spears and light armor", count: 2 }
    ],
    upgradeOptions: [
      { label: "Add B'alam Shape-shifter", cost: 20, max: 2, type: "perModel" },
      { label: "Give unit medium armor", cost: 2, max: 5, type: "perModel" },
      { label: "Give unit Vengeful", cost: 1, max: 5, type: "perModel" },
      { label: "Replace spears with daggers", cost: 0, max: 5, type: "perModel" }
    ],
    maxUnits: 5
  },
  {
    name: "Alux Multitudes",
    basePoints: 93,
    unitType: "Multitudes",
    monsterType: "Magic",
    composition: [
      { label: "Alux Multitudes armed with insults and trickery", count: 3 }
    ],
    upgradeOptions: [
      { label: "Add Alux Multitude", cost: 31, max: 2, type: "perModel" },
      { label: "Give unit light armor", cost: 2, max: 5, type: "perModel" }
    ],
    maxUnits: 5
  },
  {
    name: "Children of Xibalba",
    basePoints: 123,
    unitType: "Monster",
    composition: [
      { label: "Children of Xibalba with war spears", count: 3 }
    ],
    upgradeOptions: [
      { label: "Add Children of Xibalba", cost: 41, max: 2, type: "perModel" },
      { label: "Add 1 Wound to all minis", cost: 14, max: 5, type: "perModel" }
    ],
    maxUnits: 5
  },
  {
    name: "Camazotz",
    basePoints: 137,
    unitType: "Behemoth",
    composition: [
      { label: "Camazotz", count: 1 }
    ],
    upgradeOptions: [
      { label: "Upgrade to 3 Wounds", cost: 24, type: "flat" }
    ],
    maxUnits: 1
  },
  {
    name: "Alux Guardian",
    basePoints: 168,
    unitType: "Behemoth",
    composition: [
      { label: "Alux Guardian", count: 1 }
    ],
    upgradeOptions: [
      { label: "Upgrade to 6 Wounds", cost: 40, type: "flat" }
    ],
    maxUnits: 1
  }
];

window.mayaUnits = mayaUnits;
<!-- End of Maya -->

<!-- Start of Inca -->


const incaUnits = [
  {
    name: "Sapa Warlord (on foot)",
    basePoints: 111,
    unitType: "Humanoid",
    isGeneral: true,
    monsterType: "Heroic",
    composition: [
      { label: "Sapa Warlord with macana and medium armor", count: 1 },
      { label: "Cuzco Warriors with macana and medium armor", count: 2 }
    ],
    upgradeOptions: [
      { label: "Upgrade Sapa Warlord to 3 Wounds", cost: 14, type: "flat" },
      { label: "Upgrade Sapa Warlord to Toughened 2", cost: 10, type: "flat" },
      { label: "Upgrade Sapa Warlord to Toughened 3", cost: 20, type: "flat" },
      { label: "Add Cuzco Warrior", cost: 18, max: 5, type: "perModel" }
    ],
    maxUnits: 1
  },
  {
    name: "Sapa Warlord (mounted on Spirit Jaguar)",
    basePoints: 145,
    unitType: "Humanoid",
    isGeneral: true,
    monsterType: "Heroic",
    composition: [
      { label: "Sapa Warlord with macana and medium armor", count: 1 },
      { label: "Spirit Jaguar (mount)", count: 1 },
      { label: "Spirit Jaguars", count: 2 }
    ],
    upgradeOptions: [
      { label: "Upgrade Sapa Warlord to 3 Wounds", cost: 32, type: "flat" },
      { label: "Upgrade Sapa Warlord to Toughened 2", cost: 10, type: "flat" },
      { label: "Upgrade Sapa Warlord to Toughened 3", cost: 20, type: "flat" },
      { label: "Add Spirit Jaguar", cost: 16, max: 2, type: "perModel" }
    ],
    maxUnits: 1
  },
  {
    name: "Inti High Priest",
    basePoints: 86,
    unitType: "Humanoid",
    monsterType: "Magic",
    composition: [
      { label: "Inti High Priest with macana", count: 1 }
    ],
    upgradeOptions: [
      { label: "Upgrade to Magic Level 2", cost: 38, type: "flat" },
      { label: "Upgrade to Magic Level 3", cost: 75, type: "flat" },
      { label: "Add Sacrificial Virgin", cost: 8, max: 5, type: "perModel" }
    ],
    maxUnits: 1
  },
  {
    name: "Oracle",
    basePoints: 57,
    unitType: "Humanoid",
    monsterType: "Magic",
    composition: [
      { label: "Oracle with macana", count: 1 }
    ],
    upgradeOptions: [
      { label: "Upgrade to Magic Level 2", cost: 25, type: "flat" },
      { label: "Upgrade to Magic Level 3", cost: 50, type: "flat" },
      { label: "Add Sacrificial Virgin", cost: 8, max: 5, type: "perModel" }
    ],
    maxUnits: 1
  },
  {
    name: "Cuzco Warriors",
    basePoints: 92,
    unitType: "Humanoid",
    composition: [
      { label: "Cuzco Warrior Leader with spear and medium armor", count: 1 },
      { label: "Cuzco Warriors with spear and medium armor", count: 4 }
    ],
    upgradeOptions: [
      { label: "Add Cuzco Warrior", cost: 16, max: 5, type: "perModel" },
      { label: "Replace spears with copper-headed axes", cost: 1, max: 9, type: "perModel" }
    ],
    maxUnits: 10
  },
  {
    name: "Antisuyu Archers",
    basePoints: 77,
    unitType: "Humanoid",
    composition: [
      { label: "Antisuyu Archer leader with bow and dagger", count: 1 },
      { label: "Antisuyu Archers with bow and dagger", count: 4 }
    ],
    upgradeOptions: [
      { label: "Add Antisuyu Archer", cost: 13, max: 5, type: "perModel" },
      { label: "Give unit Eagle Eye", cost: 10, type: "flat" }
    ],
    maxUnits: 10
  },
  {
    name: "Ayllus Warriors",
    basePoints: 87,
    unitType: "Humanoid",
    composition: [
      { label: "Ayllus Warrior leader with ayllus and dagger", count: 1 },
      { label: "Ayllus Warriors with ayllus and dagger", count: 4 }
    ],
    upgradeOptions: [
      { label: "Add Ayllus Warrior", cost: 15, max: 5, type: "perModel" }
    ],
    maxUnits: 10
  },
  {
    name: "Condor Riders",
    basePoints: 102,
    unitType: "Beast",
    composition: [
      { label: "Condor Riders with bows", count: 3 }
    ],
    upgradeOptions: [
      { label: "Add Condor Rider", cost: 34, max: 2, type: "perModel" },
      { label: "Upgrade Condor Riders to 2 Wounds", cost: 18, max: 5, type: "perModel" },
      { label: "Replace bows with Drop Rocks", cost: 6, max: 5, type: "perModel" }
    ],
    maxUnits: 5
  },
  {
    name: "Supay Ravagers",
    basePoints: 140,
    unitType: "Monster",
    composition: [
      { label: "Supay Ravagers", count: 3 }
    ],
    upgradeOptions: [
      { label: "Add Supay Ravager", cost: 45, max: 2, type: "perModel" },
      { label: "Upgrade Supay Ravagers to 2 Wounds", cost: 21, max: 5, type: "perModel" }
    ],
    maxUnits: 5
  },
  {
    name: "Maras",
    basePoints: 120,
    unitType: "Behemoth",
    composition: [
      { label: "Maras", count: 1 }
    ],
    upgradeOptions: [
      { label: "Upgrade to 4 Wounds", cost: 16, type: "flat" }
    ],
    maxUnits: 1
  }
];

window.incaUnits = incaUnits;
<!-- End of Inca -->

<!-- Start of Inuit -->
const inuitUnits = [
  {
    name: "Tuvaak Master (on foot)",
    basePoints: 108,
    unitType: "Humanoid",
    isGeneral: true,
    monsterType: "Heroic",
    composition: [
      { label: "Tuvaak Master with spear and medium armor", count: 1 },
      { label: "Tuktu Tuvaak with spears and medium armor", count: 2 }
    ],
    upgradeOptions: [
      { label: "Upgrade Tuvaak Master to 3 Wounds", cost: 14, type: "flat" },
      { label: "Upgrade Tuvaak Master to 4 Wounds", cost: 20, type: "flat" },
      { label: "Upgrade Tuvaak Master to Toughened 2", cost: 10, type: "flat" },
      { label: "Replace spear with harpoon", cost: 3, max: 3, type: "perModel" },
      { label: "Add Tuktu Tuvaak", cost: 18, max: 3, type: "perModel" }
    ],
    maxUnits: 1
  },
  {
    name: "Tuvaak Master (on Nanuq Qamutiik)",
    basePoints: 129,
    unitType: "Behemoth",
    isGeneral: true,
    monsterType: "Heroic",
    composition: [
      { label: "Tuvaak Master with spear", count: 1 },
      { label: "Nanuq Qamutiik with Guardians", count: 1 }
    ],
    upgradeOptions: [
      { label: "Upgrade Tuvaak Master to 3 Wounds", cost: 14, type: "flat" },
      { label: "Upgrade Tuvaak Master to Toughened 2", cost: 10, type: "flat" },
      { label: "Replace spear with harpoon", cost: 3, max: 1, type: "perModel" }
    ],
    maxUnits: 1
  },
  {
    name: "Angakkuq",
    basePoints: 61,
    unitType: "Humanoid",
    monsterType: "Magic",
    composition: [
      { label: "Angakkuq with spear", count: 1 }
    ],
    upgradeOptions: [
      { label: "Upgrade to Magic Level 2", cost: 25, type: "flat" },
      { label: "Upgrade to Magic Level 3", cost: 50, type: "flat" },
      { label: "Give unit light armor", cost: 2, max: 5, type: "perModel" },
      { label: "Add Arvik Tuvaak", cost: 15, max: 5, type: "perModel" }
    ],
    maxUnits: 1
  },
  {
    name: "Tuktu Tuvaak",
    basePoints: 92,
    unitType: "Humanoid",
    composition: [
      { label: "Tuktu Tuvaak Leader with spear and light armor", count: 1 },
      { label: "Tuktu Tuvaak with spears and light armor", count: 4 }
    ],
    upgradeOptions: [
      { label: "Add Tuktu Tuvaak", cost: 16, max: 5, type: "perModel" },
      { label: "Replace spears with axes", cost: 0, max: 9, type: "perModel" }
    ],
    maxUnits: 10
  },
  {
    name: "Arvik Tuvaak",
    basePoints: 87,
    unitType: "Humanoid",
    composition: [
      { label: "Arvik Tuvaak Leader with dagger and bow", count: 1 },
      { label: "Arvik Tuvaak with daggers and bows", count: 4 }
    ],
    upgradeOptions: [
      { label: "Add Arvik Tuvaak", cost: 15, max: 5, type: "perModel" },
      { label: "Replace bows with harpoons", cost: 1, max: 9, type: "perModel" },
      { label: "Replace dagger with axes", cost: 1, max: 9, type: "perModel" },
      { label: "Give unit light armor", cost: 2, max: 9, type: "perModel" }
    ],
    maxUnits: 10
  },
  {
    name: "Nanuq Guardians",
    basePoints: 120,
    unitType: "Beast",
    composition: [
      { label: "Nanuq Guardians", count: 3 }
    ],
    upgradeOptions: [
      { label: "Add Nanuq Guardian", cost: 40, max: 2, type: "perModel" },
      { label: "Upgrade Nanuq Guardians to 2 Wounds", cost: 16, max: 5, type: "perModel" }
    ],
    maxUnits: 5
  },
  {
    name: "Omingmak",
    basePoints: 50,
    unitType: "Beast",
    composition: [
      { label: "Omingmak", count: 5 }
    ],
    upgradeOptions: [
      { label: "Add Omingmak", cost: 10, max: 5, type: "perModel" }
    ],
    maxUnits: 10
  },
  {
    name: "Ijiraq",
    basePoints: 81,
    unitType: "Monster",
    composition: [
      { label: "Ijiraq", count: 3 }
    ],
    upgradeOptions: [
      { label: "Add Ijiraq", cost: 27, max: 2, type: "perModel" },
      { label: "Upgrade Ijiraq to 2 Wounds", cost: 14, max: 5, type: "perModel" }
    ],
    maxUnits: 5
  },
  {
    name: "Qimmiq Qamutiik",
    basePoints: 87,
    unitType: "Monster",
    composition: [
      { label: "Musher with spear and whale fat bomb", count: 1 },
      { label: "Qimmiq Qamutiik with dogs", count: 1 }
    ],
    upgradeOptions: [
      { label: "Upgrade Qimmiq Qamutiik to 3 Wounds", cost: 16, type: "flat" }
    ],
    maxUnits: 1
  },
  {
    name: "Amarok",
    basePoints: 147,
    unitType: "Behemoth",
    composition: [
      { label: "Amarok", count: 1 }
    ],
    upgradeOptions: [
      { label: "Upgrade to 4 Wounds", cost: 27, type: "flat" }
    ],
    maxUnits: 1
  }
];

window.inuitUnits = inuitUnits;
<!-- End of Inuit -->

<!-- Start of Western Federtation -->
const westernUnits = [
  {
    name: "Aki'Cita",
    basePoints: 89,
    unitType: "Humanoid",
    isGeneral: true,
    monsterType: "Heroic",
    composition: [
      { label: "Aki'Cita with club and bow", count: 1 },
      { label: "Kangi'yuha with clubs and bows", count: 2 }
    ],
    upgradeOptions: [
      { label: "Upgrade Aki'Cita to Toughened 2", cost: 10, type: "flat" },
      { label: "Upgrade Aki'Cita to 3 Wounds", cost: 10, type: "flat" },
      { label: "Replace clubs with spears", cost: 2, max: 9, type: "perModel" },
      { label: "Add Kangi'yuha", cost: 14, max: 5, type: "perModel" }
    ],
    maxUnits: 1
  },
  {
    name: "Bear Woman",
    basePoints: 58,
    unitType: "Humanoid",
    monsterType: "Magic",
    composition: [
      { label: "Bear Woman with club", count: 1 }
    ],
    upgradeOptions: [
      { label: "Upgrade Bear Woman to Magic Level 2", cost: 25, type: "flat" },
      { label: "Upgrade Bear Woman to Magic Level 3", cost: 50, type: "flat" },
      { label: "Upgrade Bear Woman to Toughened 2", cost: 10, type: "flat" },
      { label: "Replace clubs with spears", cost: 2, max: 5, type: "perModel" },
      { label: "Add Kangi'yuha", cost: 14, max: 5, type: "perModel" }
    ],
    maxUnits: 1
  },
  {
    name: "Kangi'yuha",
    basePoints: 82,
    unitType: "Humanoid",
    composition: [
      { label: "Kangi'yuha Leader with club and bow", count: 1 },
      { label: "Kangi'yuha with club and bow", count: 4 }
    ],
    upgradeOptions: [
      { label: "Add Kangi'yuha", cost: 14, max: 5, type: "perModel" },
      { label: "Give unit Eagle Eye", cost: 10, type: "flat" },
      { label: "Replace clubs with spears", cost: 2, max: 9, type: "perModel" }
    ],
    maxUnits: 10
  },
  {
    name: "Cheyenne Dog Soldiers",
    basePoints: 82,
    unitType: "Humanoid",
    composition: [
      { label: "Cheyenne Dog Soldier Leader with club and light armor", count: 1 },
      { label: "Cheyenne Dog Soldiers with clubs and light armor", count: 4 }
    ],
    upgradeOptions: [
      { label: "Add Cheyenne Dog Soldier", cost: 13, max: 5, type: "perModel" },
      { label: "Replace clubs with tomahawks", cost: 3, max: 9, type: "perModel" }
    ],
    maxUnits: 10
  },
  {
    name: "Kit Fox Society Warriors",
    basePoints: 87,
    unitType: "Humanoid",
    composition: [
      { label: "Kit Fox Society Warrior Leader with club and bow", count: 1 },
      { label: "Kit Fox Society Warriors with clubs and bows", count: 4 }
    ],
    upgradeOptions: [
      { label: "Add Kit Fox Society Warrior", cost: 13, max: 5, type: "perModel" },
      { label: "Replace clubs with tomahawks", cost: 3, max: 9, type: "perModel" }
    ],
    maxUnits: 10
  },
  {
    name: "Tatanka",
    basePoints: 90,
    unitType: "Beast",
    composition: [
      { label: "Tatanka", count: 5 }
    ],
    upgradeOptions: [
      { label: "Add Tatanka", cost: 17, max: 5, type: "perModel" }
    ],
    maxUnits: 10
  },
  {
    name: "Chichipischekwan",
    basePoints: 64,
    unitType: "Monster",
    composition: [
      { label: "Chichipischekwan", count: 3 }
    ],
    upgradeOptions: [
      { label: "Add Chichipischekwan", cost: 18, max: 2, type: "perModel" },
      { label: "Upgrade Chichipischekwan to 2 Wounds", cost: 14, max: 5, type: "perModel" }
    ],
    maxUnits: 5
  },
  {
    name: "Thunderbird",
    basePoints: 114,
    unitType: "Behemoth",
    composition: [
      { label: "Thunderbird", count: 1 }
    ],
    upgradeOptions: [
      { label: "Upgrade Thunderbird to 3 Wounds", cost: 24, type: "flat" }
    ],
    maxUnits: 1
  }
];

window.westernUnits = westernUnits;
<!-- End of Western Federtation -->

<!-- Start of Taino -->
const tainoUnits = [
  {
    name: "Cacique",
    basePoints: 94,
    unitType: "Humanoid",
    isGeneral: true,
    monsterType: "Heroic",
    composition: [
      { label: "Cacique with stone axe and short bow, light armor", count: 1 },
      { label: "Siba Warriors with stone axe and short bow, light armor", count: 2 }
    ],
    upgradeOptions: [
      { label: "Upgrade Cacique to Toughened 2", cost: 10, type: "flat" },
      { label: "Upgrade Cacique to 3 Wounds", cost: 12, type: "flat" },
      { label: "Add Siba Warrior", cost: 15, max: 5, type: "perModel" }
    ],
    maxUnits: 1
  },
  {
    name: "Guami'",
    basePoints: 56,
    unitType: "Humanoid",
    monsterType: "Heroic",
    composition: [
      { label: "Guami' with club, short bow, and light armor", count: 1 }
    ],
    upgradeOptions: [
      { label: "Upgrade to 2 Wounds", cost: 12, type: "flat" },
      { label: "Upgrade to 3 Wounds", cost: 24, type: "flat" },
      { label: "Upgrade to Toughened 2", cost: 10, type: "flat" },
      { label: "Replace club with stone axe", cost: 2, max: 1, type: "perModel" },
      { label: "Add Nitaino (Choose Fighting Discipline)", cost: 22, max: 1, type: "flat" }
    ],
    maxUnits: 1
  },
  {
    name: "Nitaino",
    unlockCondition: "sibaWarriorRatio",
    basePoints: 22,
    unitType: "Humanoid",
    composition: [
      { label: "Nitaino (attached to Siba Warrior unit)", count: 1 }
    ],
    upgradeOptions: [
      { label: "Discipline A: Disdain", cost: 10, type: "flat" },
      { label: "Discipline B: +1 Charge-Throw", cost: 5, type: "flat" },
      { label: "Discipline C: Berserk", cost: 55, type: "flat" },
      { label: "Discipline D: First Strike", cost: 11, type: "flat" },
      { label: "Discipline E: Stealth", cost: 11, type: "flat" },
      { label: "Discipline F: Hardy", cost: 22, type: "flat" }
    ],
    maxUnits: 1
  },
  {
    name: "Bohique",
    basePoints: 59,
    unitType: "Humanoid",
    monsterType: "Magic",
    composition: [
      { label: "Bohique with club and short bow", count: 1 }
    ],
    upgradeOptions: [
      { label: "Upgrade to Magic Level 2", cost: 25, type: "flat" },
      { label: "Upgrade to Magic Level 3", cost: 50, type: "flat" },
      { label: "Upgrade to Toughened 2", cost: 10, type: "flat" },
      { label: "Add Siba Warrior", cost: 10, max: 5, type: "perModel" }
    ],
    maxUnits: 1
  },
  {
    name: "Siba Warriors",
    basePoints: 50,
    unitType: "Humanoid",
    composition: [
      { label: "Siba Warriors with clubs and short bows", count: 5 }
    ],
    upgradeOptions: [
      { label: "Add Siba Warrior", cost: 10, max: 5, type: "perModel" },
      { label: "Replace weapons with spears", cost: 0, max: 10, type: "perModel" }
    ],
    maxUnits: 10
  },
  {
    name: "Naborias",
    basePoints: 45,
    unitType: "Humanoid",
    composition: [
      { label: "Naborias with clubs and thrown rocks", count: 5 }
    ],
    upgradeOptions: [
      { label: "Add Naborias", cost: 10, max: 5, type: "perModel" }
    ],
    maxUnits: 10
  },
  {
    name: "Caracaracol",
    basePoints: 102,
    unitType: "Monster",
    composition: [
      { label: "Caracaracol with mystic shield", count: 3 }
    ],
    upgradeOptions: [
      { label: "Add Caracaracol", cost: 34, max: 2, type: "perModel" },
      { label: "Upgrade to 2 Wounds", cost: 14, max: 5, type: "perModel" }
    ],
    maxUnits: 5
  },
  {
    name: "La Ciguapa",
    basePoints: 68,
    unitType: "Monster",
    monsterType: "Magic",
    composition: [
      { label: "La Ciguapa", count: 1 }
    ],
    upgradeOptions: [
      { label: "Upgrade to 3 Wounds", cost: 14, type: "flat" }
    ],
    maxUnits: 1
  },
  {
    name: "Opiyel-guobirań",
    basePoints: 127,
    unitType: "Behemoth",
    composition: [
      { label: "Opiyel-guobirań", count: 1 }
    ],
    upgradeOptions: [
      { label: "Upgrade to 3 Wounds", cost: 18, type: "flat" }
    ],
    maxUnits: 1
  }
];

window.tainoUnits = tainoUnits;
<!-- End of Taino -->

<!-- Start of Logic Below -->

const factions = [
  { id: 'tribal', name: 'Tribal Nations' },
  { id: 'aztec', name: 'Aztec' },
  { id: 'inca', name: 'Inca' },
  { id: 'maya', name: 'Maya' },
  { id: 'western', name: 'Western Federations' },
  { id: 'inuit', name: 'Inuit' },
  { id: 'taino', name: 'Taino' },
  { id: 'chachapoya', name: 'Chachapoya' },
  { id: 'totem', name: 'People of the Totem' }
];


const factionSelect = document.getElementById("factionSelect");
factions.forEach(faction => {
  const option = document.createElement("option");
  option.value = faction.id;
  option.textContent = faction.name;
  factionSelect.appendChild(option);
});


function loadFactionRoster(factionId) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `${factionId}-roster.js`;
    script.onload = () => {
      currentUnits = window[`${factionId}Units`] || [];
      document.body.setAttribute("data-faction", factionId);
      resolve();
    };
    script.onerror = () => reject(new Error("Failed to load faction data"));
    document.body.appendChild(script);
  });
}

factionSelect.addEventListener("change", async () => {
  const selectedFaction = factionSelect.value;
  selectedUnits = [];
  unitPool.innerHTML = "";
  selectedUnitsList.innerHTML = "";
  totalPointsEl.textContent = "Total Points: 0";
  try {
    await loadFactionRoster(selectedFaction);
    renderUnitList();
    renderSelectedUnits();
  } catch (error) {
    console.error(error);
  }
});

const unitList = document.getElementById("unitPool");
const selectedUnits = document.getElementById("selectedUnits");
const totalPointsDisplay = document.getElementById("totalPoints");
const tooltip = document.getElementById("tooltip");

let selected = [];
let unitCounts = {};
let totalPoints = 0;

let currentRoster = aztecUnits;

// Tooltip logic
let tooltipActive = false;
document.addEventListener("mousemove", (e) => {
  if (tooltipActive) {
    tooltip.style.top = `${e.clientY + 12}px`;
    tooltip.style.left = `${e.clientX + 12}px`;
  }
});

function attachTooltip(el, text) {
  el.addEventListener("mouseenter", () => {
    tooltip.textContent = text;
    tooltip.style.opacity = "1";
    tooltip.style.transform = "translateY(0)";
    tooltip.style.display = "block";
    tooltipActive = true;
  });
  el.addEventListener("mouseleave", () => {
    tooltip.style.opacity = "0";
    tooltip.style.transform = "translateY(5px)";
    tooltipActive = false;
  });
}

function createBadge(label, className) {
  const badge = document.createElement("span");
  badge.className = `badge ${className}`;
  badge.textContent = label;
  return badge;
}

function renderUnitPool() {
  unitList.innerHTML = "";

  currentRoster.forEach((unit, index) => {
    const currentCount = unitCounts[unit.name] || 0;
    const isAtLimit = currentCount >= unit.maxUnits;
    let isLocked = false;
    let reason = "";

    if (unit.requires) {
      const hasRequired = selected.some(u => u.name === unit.requires);
      if (!hasRequired) {
        isLocked = true;
        reason = `Requires at least one ${unit.requires} unit.`;
      }
    }

    const li = document.createElement("li");
    if (isLocked || isAtLimit) li.classList.add("unit-disabled");

    li.textContent = `${unit.name} (${unit.basePoints} pts)`;

    if (unit.unitType) li.appendChild(createBadge(unit.unitType, `badge--${unit.unitType.toLowerCase()}`));
    if (unit.monsterType) li.appendChild(createBadge(unit.monsterType, "badge--monster"));
    if (unit.isGeneral) li.appendChild(createBadge("General", "badge"));

    if (!isAtLimit && !isLocked) {
      li.addEventListener("click", () => showSquadEditor(index));
    }

    const tooltipText = isAtLimit
      ? "Unit limit reached"
      : isLocked
      ? reason
      : `Unit Limit: ${unit.maxUnits}`;
    attachTooltip(li, tooltipText);

    unitList.appendChild(li);
  });
}

function showSquadEditor(index, existingEntry = null) {
  const unit = currentRoster[index];
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";

  const modal = document.createElement("div");
  modal.className = "modal";

  const form = document.createElement("form");
  form.innerHTML = `<h3>${unit.name}</h3>`;

  form.innerHTML += `<strong>Base Composition:</strong><br>`;
  unit.composition.forEach(m => {
    form.innerHTML += `• ${m.count}× ${m.label}<br>`;
  });

  const upgradeControls = [];
  if (unit.upgradeOptions) {
    form.innerHTML += `<hr><strong>Upgrades:</strong><br>`;
    unit.upgradeOptions.forEach((opt, i) => {
      const label = document.createElement("label");
      label.textContent = `${opt.label} (${opt.cost} pts${opt.max ? `, max ${opt.max}` : ""})`;

      let input;
      if (opt.type === "flat") {
        input = document.createElement("input");
        input.type = "checkbox";
        input.name = `upgrade-${i}`;
        if (existingEntry) {
          const match = existingEntry.appliedUpgrades?.find(u => u.label === opt.label);
          input.checked = !!match;
        }
      } else if (opt.type === "perModel") {
        input = document.createElement("input");
        input.type = "number";
        input.min = 0;
        input.value = 0;
        input.name = `upgrade-${i}`;
        if (opt.max) input.max = opt.max;
        if (existingEntry) {
          const match = existingEntry.appliedUpgrades?.find(u => u.label === opt.label);
          if (match) input.value = match.qty;
        }
      }

      form.appendChild(label);
      form.appendChild(document.createElement("br"));
      form.appendChild(input);
      form.appendChild(document.createElement("br"));

      upgradeControls.push({ input, option: opt });
    });
  }

  const confirm = document.createElement("button");
  confirm.textContent = existingEntry ? "Update Unit" : "Add to List";
  confirm.type = "submit";
  form.appendChild(confirm);

  const close = document.createElement("button");
  close.textContent = "Close";
  close.className = "modal-close-soft";
  close.type = "button";
  close.onclick = () => document.body.removeChild(overlay);
  form.appendChild(close);

  modal.appendChild(form);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const upgrades = upgradeControls.map(({ input, option }) => {
      if (option.type === "flat") {
        if (input.checked) return { ...option, qty: 1, cost: option.cost };
      } else if (option.type === "perModel") {
        const qty = parseInt(input.value, 10);
        if (!isNaN(qty) && qty > 0) {
          return { ...option, qty, cost: qty * option.cost };
        }
      }
      return null;
    }).filter(Boolean);

    if (existingEntry) {
      updateUnit(existingEntry.id, upgrades);
    } else {
      addUnit(index, upgrades);
    }

    document.body.removeChild(overlay);
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) document.body.removeChild(overlay);
  });
}

function addUnit(index, upgrades) {
  const unit = currentRoster[index];
  const currentCount = unitCounts[unit.name] || 0;
  if (currentCount >= unit.maxUnits) return;

  const cost = upgrades.reduce((sum, u) => sum + u.cost, 0);
  const finalCost = unit.basePoints + cost;

  const entry = {
    ...unit,
    appliedUpgrades: upgrades,
    totalCost: finalCost,
    id: Date.now() + Math.random()
  };

  selected.push(entry);
  unitCounts[unit.name] = currentCount + 1;
  totalPoints += finalCost;

  updateSelectedList();
}

function updateUnit(id, newUpgrades) {
  const index = selected.findIndex(u => u.id === id);
  if (index === -1) return;

  const unit = selected[index];
  totalPoints -= unit.totalCost;

  const newCost = unit.basePoints + newUpgrades.reduce((sum, u) => sum + u.cost, 0);
  selected[index].appliedUpgrades = newUpgrades;
  selected[index].totalCost = newCost;

  totalPoints += newCost;
  updateSelectedList();
}

function removeUnit(id) {
  const index = selected.findIndex(u => u.id === id);
  if (index === -1) return;

  const unit = selected[index];
  selected.splice(index, 1);
  unitCounts[unit.name]--;
  totalPoints -= unit.totalCost;

  updateSelectedList();
}

function updateSelectedList() {
  selectedUnits.innerHTML = "";
  let totalModels = 0;

  selected.forEach((unit) => {
    const li = document.createElement("li");
    const baseModels = unit.composition.reduce((sum, m) => sum + m.count, 0);
    const upgradeModels = unit.appliedUpgrades?.reduce((sum, u) => sum + (u.qty || 0), 0) || 0;
    totalModels += baseModels + upgradeModels;

    const upgrades = unit.appliedUpgrades?.length
      ? " + [" + unit.appliedUpgrades.map(u => `${u.qty}× ${u.label}`).join(", ") + "]"
      : "";

    li.innerHTML = `${unit.name} (${unit.totalCost} pts)${upgrades}`;

    if (unit.unitType) li.appendChild(createBadge(unit.unitType, `badge--${unit.unitType.toLowerCase()}`));
    if (unit.monsterType) li.appendChild(createBadge(unit.monsterType, "badge--monster"));
    if (unit.isGeneral) li.appendChild(createBadge("General", "badge"));

    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-unit";
    removeBtn.textContent = "Remove";
    removeBtn.onclick = (e) => {
      e.stopPropagation();
      removeUnit(unit.id);
    };
    li.appendChild(removeBtn);

    li.addEventListener("click", (e) => {
      if (e.target.tagName !== "BUTTON") {
        const index = currentRoster.findIndex(u => u.name === unit.name);
        showSquadEditor(index, unit);
      }
    });

    selectedUnits.appendChild(li);
  });

  const totalUnits = selected.length;
  totalPointsDisplay.innerHTML = `
    Total Points: ${totalPoints}<br>
    Total Units: ${totalUnits}<br>
    Total Models: ${totalModels}
  `;

  validateForce();
  renderUnitPool();
}

function validateForce() {
  const hasGeneral = selected.some(u => u.isGeneral || u.name.includes("High Priest"));
  totalPointsDisplay.style.color = hasGeneral ? "#eee" : "#facc15";
  if (!hasGeneral) {
    totalPointsDisplay.innerHTML += "<br>⚠️ <strong>No General selected!</strong>";
  }
}

function showSummary() {
  if (selected.length === 0) return alert("No units selected.");
  let output = "🛡️ YOUR FORCE:\n\n";

  selected.forEach(unit => {
    const baseModels = unit.composition.reduce((sum, m) => sum + m.count, 0);
    const upgradeModels = unit.appliedUpgrades?.reduce((sum, u) => sum + (u.qty || 0), 0) || 0;

    output += `• ${unit.name} (${unit.totalCost} pts)\n`;
    unit.composition.forEach(m => output += `   - ${m.count}× ${m.label}\n`);
    if (unit.appliedUpgrades?.length) {
      unit.appliedUpgrades.forEach(u => {
        output += `   + ${u.qty}× ${u.label} (${u.cost} pts)\n`;
      });
    }
    output += `   → Total Models: ${baseModels + upgradeModels}\n\n`;
  });

  const typeCounts = {}, monsterCounts = {};
  selected.forEach(unit => {
    typeCounts[unit.unitType || "Unknown"] = (typeCounts[unit.unitType || "Unknown"] || 0) + 1;
    monsterCounts[unit.monsterType || "None"] = (monsterCounts[unit.monsterType || "None"] || 0) + 1;
  });

  output += `📦 Unit Types:\n`;
  Object.entries(typeCounts).forEach(([type, count]) => output += ` - ${type}: ${count}\n`);
  output += `🧟 Monster Types:\n`;
  Object.entries(monsterCounts).forEach(([type, count]) => output += ` - ${type}: ${count}\n`);
  output += `\n⚔️ Total Units: ${selected.length}\n`;
  output += `👥 Total Models: ${selected.reduce(
    (sum, u) =>
      sum +
      u.composition.reduce((s, m) => s + m.count, 0) +
      (u.appliedUpgrades?.reduce((s, upg) => s + (upg.qty || 0), 0) || 0),
    0
  )}\n`;
  output += `🪙 Total Points: ${totalPoints}`;

  alert(output);
}

// ✅ Faction switch — dynamic for all factions
document.getElementById("factionSelect").addEventListener("change", (e) => {
  const selectedFaction = e.target.value;

  selected = [];
  unitCounts = {};
  totalPoints = 0;

  // Dynamically access global variable (e.g. window.mayaUnits)
  const rosterKey = `${selectedFaction}Units`;
  currentRoster = window[rosterKey];

  if (!currentRoster) {
    console.error(`Roster for faction "${selectedFaction}" not found.`);
    return;
  }

  renderUnitPool();
  updateSelectedList();
});



const pointBar = document.getElementById("pointProgress");
const percent = (totalPoints / 1000) * 100;

let progressClass = "low";
if (totalPoints > 900 && totalPoints <= 1000) progressClass = "mid";
if (totalPoints > 1000) progressClass = "high";

pointBar.className = `point-progress ${progressClass}`;
pointBar.textContent = `List is ${totalPoints}/1000 points (${Math.floor(percent)}%)`;

function handleGeneralLocking() {
  const hasGeneral = selectedUnits.some(u => u.isGeneral);
  document.querySelectorAll("#unitPool li").forEach(li => {
    const unitName = li.getAttribute("data-unit-name");
    const unit = currentUnits.find(u => u.name === unitName);

    if (unit?.isGeneral && !selectedUnits.find(u => u.name === unit.name)) {
      li.classList.toggle("unit-disabled", hasGeneral);
    }
  });
}


function handleGeneralLocking() {
  const selectedNames = selectedUnits.map(u => u.name);

  // Define manually exclusive unit pairs
  const exclusivePairs = [
    ["Sachem (on foot)", "Sachem (mounted on War Eagle)"]
  ];

  document.querySelectorAll("#unitPool li").forEach(li => {
    const unitName = li.getAttribute("data-unit-name");
    const unit = currentUnits.find(u => u.name === unitName);

    let shouldDisable = false;

    // Disable all other generals if one is selected
    const aGeneralIsSelected = selectedUnits.some(u => u.isGeneral);
    if (unit?.isGeneral && !selectedNames.includes(unit.name)) {
      shouldDisable = aGeneralIsSelected;
    }

    // Check exclusive pair logic
    exclusivePairs.forEach(pair => {
      if (pair.includes(unitName)) {
        const otherName = pair.find(n => n !== unitName);
        if (selectedNames.includes(otherName)) {
          shouldDisable = true;
        }
      }
    });

    li.classList.toggle("unit-disabled", shouldDisable);
  });
}

<!-- END of Logic Below -->