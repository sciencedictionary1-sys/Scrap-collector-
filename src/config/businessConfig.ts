import {
  AcceptedMaterial,
  ScrapPriceItem,
  GalleryItem,
  BenefitCard,
  WhyChooseUsItem,
  ProcessStep,
  EnvironmentalImpactItem,
} from '../types';

/**
 * ============================================================================
 * SCRAP COLLECTOR — CENTRAL BUSINESS CONFIGURATION & BILINGUAL CONTENT (EN / BM)
 * ============================================================================
 * Edit the values below to customize all contact points, accepted scrap materials,
 * price lists, gallery showcases, and business details across the entire website.
 * No database is required — updates here take effect instantly.
 */

// 1. Core Business Information
export const BUSINESS_NAME: string = "Scrap Collector";
export const TAGLINE: string = "Turn Your Scrap Into Value ♻️";
export const TAGLINE_BM: string = "Tukarkan Barang Lusuh Anda Kepada Nilai ♻️";
export const SECONDARY_TAGLINE: string = "Collect. Recycle. Renew.";
export const SECONDARY_TAGLINE_BM: string = "Kumpul. Kitar Semula. Baharu.";

// 2. Direct Contact Channels
export const BUSINESS_PHONE: string = "+601111545835";
export const WHATSAPP_NUMBER: string = "+601111545835";
export const BUSINESS_EMAIL: string = "him511046@gmail.com";
export const FACEBOOK_URL: string = ""; // e.g. "https://facebook.com/scrapcollector"

// 3. Business Physical Info & Operating Hours
export const SHOP_NAME: string = "Kedai Besi Buruk";
export const BUSINESS_ADDRESS: string = "Lorong PJS 6/1e, Bandar Sunway, 46000 Petaling Jaya, Selangor, Malaysia.";
export const BUSINESS_ADDRESS_BM: string = "Lorong PJS 6/1e, Bandar Sunway, 46000 Petaling Jaya, Selangor, Malaysia.";
export const GOOGLE_MAPS_SHOP_URL: string = "https://maps.app.goo.gl/nxfabzXJPdP8r5km6?g_st=awb";
export const BUSINESS_HOURS: string = "We are ready for your service, we are always active 24/7 hours";
export const BUSINESS_HOURS_BM: string = "Kami sedia berkhidmat untuk anda, kami sentiasa aktif 24/7 jam";

// 4. Default Communication Templates
export const DEFAULT_WHATSAPP_MESSAGE_EN: string = 
  "Hello Scrap Collector! 👋\nI would like to sell some scrap materials and arrange for collection.\nPlease let me know the current prices and available pickup slots.\nThank you. ♻️";
export const DEFAULT_WHATSAPP_MESSAGE_BM: string = 
  "Hai Scrap Collector! 👋\nSaya berminat untuk menjual barang lusuh / besi buruk dan ingin mengaturkan pengambilan (pickup).\nBoleh kongsikan harga terkini dan jadual pickup?\nTerima kasih. ♻️";

export const DEFAULT_EMAIL_SUBJECT_EN: string = "Scrap Collection Request";
export const DEFAULT_EMAIL_SUBJECT_BM: string = "Permohonan Pengambilan Barang Lusuh";

export const DEFAULT_EMAIL_BODY_EN: string = 
  "Hello Scrap Collector,\nI would like to sell some scrap materials and arrange for collection.\nPlease let me know the current prices and available pickup slots.\nThank you. ♻️";
export const DEFAULT_EMAIL_BODY_BM: string = 
  "Hai Scrap Collector,\nSaya berminat untuk menjual barang lusuh / besi buruk dan ingin mengaturkan pengambilan (pickup).\nBoleh kongsikan harga terkini dan jadual pickup?\nTerima kasih. ♻️";

// 5. About Us Copy
export const BUSINESS_DESCRIPTION_EN: string = 
  "Scrap Collector is a scrap collection and recycling business focused on collecting recyclable materials and helping unwanted materials find a useful second life.";
export const BUSINESS_DESCRIPTION_BM: string = 
  "Scrap Collector ialah perkhidmatan pengumpulan dan kitar semula yang berdedikasi mengumpul barangan kitar semula dan memastikan bahan terbuang memperoleh kehidupan kedua yang bermanfaat.";

export const MISSION_EN: string = 
  "Our mission is to make scrap collection simple, accessible, and environmentally responsible.";
export const MISSION_BM: string = 
  "Misi kami adalah untuk menjadikan perkhidmatan pengumpulan barang lusuh mudah diakses, pantas, dan bertanggungjawab terhadap alam sekitar.";

export const VISION_EN: string = 
  "Our vision is to contribute to cleaner communities where recyclable materials are collected, reused, and recycled responsibly.";
export const VISION_BM: string = 
  "Visi kami adalah untuk menyumbang ke arah komuniti yang lebih bersih di mana bahan kitar semula dikumpul, diguna semula, dan diproses dengan penuh tanggungjawab.";

// 6. Quick Benefits
export const QUICK_BENEFITS: BenefitCard[] = [
  {
    id: "benefit-1",
    title: "Responsible Recycling",
    titleBm: "Kitar Semula Bertanggungjawab",
    description: "Helping recyclable materials find a second life.",
    descriptionBm: "Membantu barangan kitar semula mendapat peluang kehidupan kedua.",
    iconName: "Recycle",
  },
  {
    id: "benefit-2",
    title: "Convenient Collection",
    titleBm: "Pengambilan Mudah & Fleksibel",
    description: "Contact us to arrange your scrap pickup.",
    descriptionBm: "Hubungi kami untuk mengaturkan pengambilan barang lusuh anda.",
    iconName: "Truck",
  },
  {
    id: "benefit-3",
    title: "Fair Deals",
    titleBm: "Tawaran Harga Berpatutan",
    description: "Contact us for the latest scrap prices.",
    descriptionBm: "Hubungi kami untuk mengetahui harga barang lusuh terkini.",
    iconName: "Coins",
  },
  {
    id: "benefit-4",
    title: "Cleaner Community",
    titleBm: "Komuniti Lebih Bersih",
    description: "Helping reduce unnecessary waste.",
    descriptionBm: "Membantu mengurangkan sisa buangan yang tidak diperlukan.",
    iconName: "Leaf",
  },
];

// 7. Accepted Materials Grid (30 Categories)
export const ACCEPTED_MATERIALS: AcceptedMaterial[] = [
  {
    id: "aluminium-profiles",
    name: "Aluminium Profiles",
    nameBm: "Profil Aluminium",
    iconName: "Layers",
    category: "Aluminium",
    categoryBm: "Aluminium",
    shortDescription: "Extruded aluminium profiles, architectural sections, sliding door and window tracks.",
    shortDescriptionBm: "Profil aluminium tersemperit, struktur seni bina, rel pintu gelangsar dan tingkap.",
    fullDescription: "Clean extruded aluminium architectural profiles, window sliders, door perimeter frames, and extrusion factory cut-offs. High purity non-ferrous scrap.",
    fullDescriptionBm: "Profil penyemperitan aluminium bersih, rel gelongsor tingkap, bingkai pintu, dan keratan lebihan kilang. Logam bukan ferus berkualiti dan bernilai tinggi.",
    acceptedExamples: [
      "Sliding Door & Window Profiles",
      "Curtain Wall & Facade Extrusions",
      "Aluminium Partition Profiles",
      "Factory Extrusion Offcuts",
      "Anodised & Powder-Coated Profiles"
    ],
    acceptedExamplesBm: [
      "Profil Pintu Gelangsar & Tingkap",
      "Penyemperitan Dinding Tirai & Fasad",
      "Profil Sekatan Pejabat Aluminium",
      "Keratan Lebihan Kilang Ekstrusi",
      "Profil Bersalut Serbuk & Anodised"
    ],
    notAcceptedExamples: [
      "Heavy Concrete or Mortar Embedments",
      "Profiles with Attached Heavy Iron Bolts",
      "Plastic-Glazed Profiles with Glass Attached"
    ],
    notAcceptedExamplesBm: [
      "Profil Yang Dipenuhi Simen Tebal",
      "Profil Dengan Bolt Besi Berat Melekat",
      "Profil Yang Masih Melekat Kaca Pecah"
    ],
    prepTips: "Remove iron screws, rubber strips, and glass shards where possible to obtain top-tier grading.",
    prepTipsBm: "Tanggalkan skru besi, jalur getah, dan serpihan kaca untuk mendapatkan penilaian gred terbaik.",
    image: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "aluminium-sheets",
    name: "Aluminium Sheets",
    nameBm: "Kepingan Aluminium",
    iconName: "Grid",
    category: "Aluminium",
    categoryBm: "Aluminium",
    shortDescription: "Plain, tread, chequered, corrugated, and composite aluminium sheets and plates.",
    shortDescriptionBm: "Kepingan aluminium rata, corak bunga (chequered), bumbung, dan plat aluminium.",
    fullDescription: "Aluminium alloy sheets, cladding plates, rooftop panels, aircraft-grade sheet drops, and sheet fabrication offcuts.",
    fullDescriptionBm: "Kepingan aloi aluminium, plat pelapik dinding, panel bumbung zink aluminium, dan keratan pemotongan bengkel.",
    acceptedExamples: [
      "Flat Aluminium Sheets & Panels",
      "Chequered & Tread Plates",
      "Aluminium Roofing Sheets",
      "Cladding & Composite Offcuts",
      "Clean Aluminium Punchings"
    ],
    acceptedExamplesBm: [
      "Plat Rata Aluminium & Panel",
      "Kepingan Corak Bunga (Tread Plate)",
      "Kepingan Bumbung Aluminium",
      "Lebihan Plat Pelapik & Komposit",
      "Keratan Tebukan Aluminium Bersih"
    ],
    notAcceptedExamples: [
      "Corrugated Bitumen Roofing Sheets",
      "Heavy Tar or Asphalt Contamination",
      "Iron-Clad Metal Sheets"
    ],
    notAcceptedExamplesBm: [
      "Kepingan Bumbung Bersalut Tar/Bitumen",
      "Kepingan Yang Mengandungi Sisa Asfalt",
      "Kepingan Logam Bersalut Besi Tebal"
    ],
    prepTips: "Stack flat sheets neatly to facilitate secure lifting and rapid weighing.",
    prepTipsBm: "Susun kepingan secara rata dan bertingkat untuk memudahkan pengendalian dan timbangan.",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "aluminium-frames",
    name: "Aluminium Frames",
    nameBm: "Bingkai Aluminium",
    iconName: "Square",
    category: "Aluminium",
    categoryBm: "Aluminium",
    shortDescription: "Window frames, door frames, partition borders, and display frameworks.",
    shortDescriptionBm: "Bingkai tingkap, kerangka pintu, sempadan sekatan pejabat, dan rak pameran.",
    fullDescription: "Disassembled aluminium framework from residential renovations, shopfronts, office partitions, and showcase fittings.",
    fullDescriptionBm: "Kerangka aluminium daripada pengubahsuaian rumah, pintu kedai, sekatan pejabat, dan bingkai pameran.",
    acceptedExamples: [
      "Window Casements & Frames",
      "Sliding Patio Door Frames",
      "Showcase & Display Borders",
      "Greenhouse Frameworks",
      "Screen Door Border Profiles"
    ],
    acceptedExamplesBm: [
      "Bingkai Tingkap & Daun Tingkap",
      "Kerangka Pintu Gelangsar Teres",
      "Bingkai Pameran & Rak Kaca",
      "Kerangka Rumah Hijau",
      "Bingkai Pintu Jaring Nyamuk"
    ],
    notAcceptedExamples: [
      "Frames with Intact or Broken Glass Attached",
      "Heavy Wood Embedded Frames",
      "Concrete-Encased Footings"
    ],
    notAcceptedExamplesBm: [
      "Bingkai Yang Masih Melekat Cermin",
      "Bingkai Dengan Kayu Tebal Melekat",
      "Kaki Bingkai Bersalut Konkrit Tebal"
    ],
    prepTips: "Dismantle glass panels and rubber gaskets before collection for safety.",
    prepTipsBm: "Tanggalkan cermin dan getah penutup sebelum proses pengambilan demi keselamatan.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "aluminium-pipes-tubes",
    name: "Aluminium Pipes & Tubes",
    nameBm: "Paip & Tiub Aluminium",
    iconName: "CircleDot",
    category: "Aluminium",
    categoryBm: "Aluminium",
    shortDescription: "Hollow round, square, and rectangular aluminium tubes and conduits.",
    shortDescriptionBm: "Paip bulat, tiub bersegi, konduit pendawaian, dan tiub aloi aluminium.",
    fullDescription: "Hollow circular and structural square aluminium tubes, scaffolding tubes, automotive cooling lines, and conduit pipes.",
    fullDescriptionBm: "Tiub bulat dan tiub berongga segi empat aluminium, tiub perancah, saluran penyejuk automotif, dan paip konduit.",
    acceptedExamples: [
      "Round Hollow Aluminium Tubing",
      "Square & Rectangular Box Tubes",
      "Electrical Aluminium Conduits",
      "Aluminium Tent & Canopy Poles",
      "Automotive Aluminium Fluid Lines"
    ],
    acceptedExamplesBm: [
      "Tiub Bulat Berongga Aluminium",
      "Tiub Kotak Bersegi & Segi Empat",
      "Konduit Pendawaian Aluminium",
      "Tiang Khemah & Kanopi Aluminium",
      "Saluran Cecair Aluminium Automotif"
    ],
    notAcceptedExamples: [
      "Steel-Braided Oil Hoses with Hydraulic Fluid",
      "Heavy Plastic-Lined Composite Pipes",
      "Contaminated Muddy Irrigation Pipes"
    ],
    notAcceptedExamplesBm: [
      "Hos Hidraulik Beranyam Minyak",
      "Paip Komposit Bersalut Plastik Tebal",
      "Paip Pengairan Berlumpur Tebal"
    ],
    prepTips: "Cut pipes longer than 3 meters into manageable lengths for easier loading.",
    prepTipsBm: "Potong paip yang melebihi 3 meter kepada panjang yang sesuai untuk muatan lori.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "aluminium-wire",
    name: "Aluminium Wire",
    nameBm: "Dawai Aluminium",
    iconName: "Activity",
    category: "Aluminium",
    categoryBm: "Aluminium",
    shortDescription: "Clean uninsulated overhead lines, aluminium binding wires, and coils.",
    shortDescriptionBm: "Dawai talian atas, wayar pengikat aluminium, dan gelung dawai bersih tanpa penebat.",
    fullDescription: "High-purity bare aluminium wire, power transmission conductor cables (ACSR bare strands), tie wires, and electrical wiring scrap.",
    fullDescriptionBm: "Dawai aluminium tulen tanpa penebat, kabel penghantaran elektrik, dawai pengikat, dan sisa wayar elektrik aluminium.",
    acceptedExamples: [
      "Bare Aluminium Wire & Conductors",
      "Transmission Line Strands (ACSR)",
      "Aluminium Tie & Baling Wire",
      "Stripped Aluminium Cable Coils",
      "Clean Transformer Winding Wire"
    ],
    acceptedExamplesBm: [
      "Dawai Aluminium Tanpa Penebat",
      "Urat Kabel Penghantaran Elektrik",
      "Dawai Pengikat Aluminium",
      "Gelung Kabel Aluminium Dilucutkan",
      "Dawai Gelung Transformer Aluminium"
    ],
    notAcceptedExamples: [
      "Steel Core Cables without Aluminium Declared",
      "Rubber Coated Cables Not Segregated",
      "Burnt Wire with Excessive Ash"
    ],
    notAcceptedExamplesBm: [
      "Kabel Teras Besi Tanpa Pengasingan",
      "Kabel Bersalut Getah Tebal Belum Diasingkan",
      "Dawai Terbakar Yang Dipenuhi Abu Tebal"
    ],
    prepTips: "Roll loose wires into tight coils to maximize scale accuracy.",
    prepTipsBm: "Gulung dawai longgar dalam bentuk gelung kemas untuk memudahkan timbangan tepat.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "copper-scrap",
    name: "Copper Scrap",
    nameBm: "Tembaga Terpakai",
    iconName: "Flame",
    category: "Copper & Brass",
    categoryBm: "Tembaga & Brass",
    shortDescription: "High-grade pure copper, copper plumbing, busbars, and heating elements.",
    shortDescriptionBm: "Tembaga gred tinggi, paip tembaga, busbar elektrik, dan elemen pemanas.",
    fullDescription: "Heavy copper scrap, Millberry copper, clean unalloyed copper pipes, sheets, roofing copper, and electrical busbars.",
    fullDescriptionBm: "Tembaga berkualiti tinggi, tembaga Millberry merah, paip tembaga bersih tanpa aloi, plat tembaga, dan busbar elektrik.",
    acceptedExamples: [
      "Clean Copper Plumbing Pipes",
      "Electrical Copper Busbars",
      "Heavy Copper Plate Offcuts",
      "Roofing Copper Trimmings",
      "Clean Water Heater Cylinders"
    ],
    acceptedExamplesBm: [
      "Paip Tembaga Bersih",
      "Busbar Tembaga Elektrik",
      "Lebihan Plat Tembaga Berat",
      "Keratan Bumbung Tembaga",
      "Silinder Pemanas Air Tembaga"
    ],
    notAcceptedExamples: [
      "Heavily Lead-Soldered Pipes (Mixed Grade)",
      "Iron-Fitted Copper Tanks (Unstripped)",
      "Burnt Contaminated Residue"
    ],
    notAcceptedExamplesBm: [
      "Paip Bersambung Pateri Plumbum Tebal",
      "Tangki Tembaga Bersalut Besi Tebal",
      "Sisa Bakaran Tercemar Abu"
    ],
    prepTips: "Separate shiny bright copper from oxidized or soldered copper for premium payout.",
    prepTipsBm: "Asingkan tembaga merah berkilat daripada tembaga berkarat/berpateri untuk harga terbaik.",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "copper-wire-cable",
    name: "Copper Wire & Cable",
    nameBm: "Wayar & Kabel Tembaga",
    iconName: "Zap",
    category: "Copper & Brass",
    categoryBm: "Tembaga & Brass",
    shortDescription: "Insulated and stripped copper electrical wires, mains cables, and wiring looms.",
    shortDescriptionBm: "Wayar tembaga berpenebat dan tanpa penebat, kabel elektrik utama, dan wayar perkakas.",
    fullDescription: "Insulated household wiring (1C, 2C, 3C), industrial armored copper cables, automotive wire harnesses, and communication lines.",
    fullDescriptionBm: "Wayar elektrik rumah (1C, 2C, 3C), kabel berperisai industri, pendawaian automotif, dan kabel kuasa tembaga.",
    acceptedExamples: [
      "Single Core & Multi-Core Copper Wire",
      "Armored Mains Cables (SWA)",
      "Automotive Wiring Looms & Harnesses",
      "Household Power Appliance Cords",
      "Stripped Bare Bright Copper Wire"
    ],
    acceptedExamplesBm: [
      "Wayar Tembaga 1 Teras & Berbilang Teras",
      "Kabel Kuasa Berperisai (SWA)",
      "Pendawaian Wayar Automotif",
      "Kabel Kuasa Perkakas Elektrik Rumah",
      "Wayar Tembaga Terang Tanpa Penebat"
    ],
    notAcceptedExamples: [
      "Steel Wire Ropes without Copper",
      "Pure Optical Fiber Cables (Fiber Optic)",
      "Severely Tar-Soaked Underground Lines"
    ],
    notAcceptedExamplesBm: [
      "Tali Dawai Keluli Tanpa Tembaga",
      "Kabel Gentian Optik Sepenuhnya",
      "Kabel Bawah Tanah Bersalut Tar Tebal"
    ],
    prepTips: "Stripping plastic insulation promotes your material to Bare Bright Copper grade.",
    prepTipsBm: "Mengupas lapisan plastik menaikkan gred bahan kepada Tembaga Merah Terang.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "copper-strips-sheets",
    name: "Copper Strips & Sheets",
    nameBm: "Jalur & Kepingan Tembaga",
    iconName: "Layers",
    category: "Copper & Brass",
    categoryBm: "Tembaga & Brass",
    shortDescription: "Flat copper strip conductors, grounding tape, craft sheets, and punchings.",
    shortDescriptionBm: "Jalur pengalir tembaga, pita pembumian kilat, kepingan tembaga kraf, dan lebihan tebukan kilang.",
    fullDescription: "High-conductivity copper strip, lightning protection earthing tapes, manufacturing stampings, and flashing sheets.",
    fullDescriptionBm: "Jalur tembaga kekonduksian tinggi, pita pembumian perlindungan kilat, plat tebukan industri, dan kepingan bumbung tembaga.",
    acceptedExamples: [
      "Lightning Earthing Copper Tape",
      "Transformer Copper Foil & Strip",
      "Craft & Gasket Copper Sheets",
      "Factory Stamping & Punching Offcuts",
      "Architectural Copper Flashing"
    ],
    acceptedExamplesBm: [
      "Pita Tembaga Pembumian Kilat",
      "Jalur & Kerajang Tembaga Transformer",
      "Kepingan Tembaga Kraf & Gasket",
      "Lebihan Tebukan Kilang",
      "Kepingan Flashing Tembaga Binaan"
    ],
    notAcceptedExamples: [
      "Copper-Clad Steel Strips with Magnetic Iron",
      "Adhesive-Contaminated Backing Plates",
      "Heavy Solder-Laden Strips"
    ],
    notAcceptedExamplesBm: [
      "Pita Keluli Bersalut Tembaga Bermagnet",
      "Plat Yang Dipenuhi Gam Perekat Tebal",
      "Jalur Yang Dipenuhi Pateri Berat"
    ],
    prepTips: "Test with a magnet to ensure pure non-magnetic high-grade copper.",
    prepTipsBm: "Uji dengan magnet untuk mengesahkan ketulenan tembaga bukan magnet gred tinggi.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "brass-scrap",
    name: "Brass Scrap",
    nameBm: "Tembaga Kuning / Brass",
    iconName: "Disc",
    category: "Copper & Brass",
    categoryBm: "Tembaga & Brass",
    shortDescription: "Plumbing brass taps, valves, decorative fittings, locksets, and swarf.",
    shortDescriptionBm: "Kepala paip tembaga kuning, injap paip, perkakasan hiasan, tombol pintu, dan serpihan tembaga.",
    fullDescription: "Yellow brass, honey brass, plumbing fixtures, radiator brass tanks, decorative hardware, brass gears, and rod turnings.",
    fullDescriptionBm: "Tembaga kuning (brass), injap dan kepala paip tembaga, radiator tembaga, perkakasan pintu dan hiasan tembaga kuning.",
    acceptedExamples: [
      "Brass Water Taps & Gate Valves",
      "Plumbing Connectors & Bushings",
      "Door Handles & Lock Cylinders",
      "Brass Radiator Header Tanks",
      "Machining Swarf & Turnings"
    ],
    acceptedExamplesBm: [
      "Kepala Paip & Injap Air Tembaga",
      "Penyambung & Sesendal Paip Brass",
      "Tombol Pintu & Silinder Kunci",
      "Tangki Kepala Radiator Tembaga",
      "Tatal Pemesinan & Serpihan Brass"
    ],
    notAcceptedExamples: [
      "Pot Metal (Zinc Die-Cast Components)",
      "Iron-Weighted Brass Decorative Pieces",
      "Plastic-Coated Fittings with Plastic Core"
    ],
    notAcceptedExamplesBm: [
      "Logam Aloi Zink Murah (Pot Metal)",
      "Hiasan Tembaga Yang Mempunyai Pemberat Besi",
      "Perkakasan Teras Plastik Bersalut Nipis"
    ],
    prepTips: "Remove steel screws and plastic handles for maximum yellow brass price.",
    prepTipsBm: "Tanggalkan skru besi dan pemegang plastik untuk harga tembaga kuning terbaik.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "iron-scrap",
    name: "Iron Scrap",
    nameBm: "Besi Buruk",
    iconName: "Anchor",
    category: "Iron & Steel",
    categoryBm: "Besi & Keluli",
    shortDescription: "Cast iron, iron grilles, gates, rebars, engine blocks, and household iron.",
    shortDescriptionBm: "Besi tuang, jeriji keselamatan, pintu pagar besi, besi rebar, dan pelbagai besi rumah.",
    fullDescription: "Heavy melting scrap (HMS), cast iron machinery parts, security window grilles, iron gates, construction rebar offcuts, and steel drums.",
    fullDescriptionBm: "Besi buruk berat (HMS), bahagian besi tuang mesin, jeriji tingkap keselamatan, pintu pagar besi, lebihan rebar tapak binaan, dan tong besi.",
    acceptedExamples: [
      "Heavy Melting Steel (HMS 1 & 2)",
      "Wrought Iron Gates & Window Grilles",
      "Cast Iron Machinery Bases & Blocks",
      "Construction Deformed Rebars",
      "Cast Iron Soil & Drain Pipes"
    ],
    acceptedExamplesBm: [
      "Besi Buruk Berat (HMS 1 & 2)",
      "Pintu Pagar Besi & Jeriji Keselamatan",
      "Blok Asas Mesin Besi Tuang",
      "Besi Tetulang Rebar Binaan",
      "Paip Besi Tuang Pembetung"
    ],
    notAcceptedExamples: [
      "Pressurised Gas Bottles (Unvented)",
      "Drums Containing Hazardous Liquids",
      "Radioactive Equipment"
    ],
    notAcceptedExamplesBm: [
      "Tong Gas Bertekanan Yang Belum Ditebuk",
      "Tong Mengandungi Cecair Toksik Berbahaya",
      "Peralatan Sisa Radioaktif"
    ],
    prepTips: "Group bulky iron near a loading area for truck crane or forklift access.",
    prepTipsBm: "Kumpulkan besi besar di laluan masuk atau kawasan mudah capai lori pengangkut.",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "steel-scrap",
    name: "Steel Scrap",
    nameBm: "Keluli Terpakai",
    iconName: "Hammer",
    category: "Iron & Steel",
    categoryBm: "Besi & Keluli",
    shortDescription: "Mild steel beams, I-beams, C-channels, hollow structural sections, and plates.",
    shortDescriptionBm: "Rasuk keluli, I-beam, C-channel, bahagian keluli berongga, dan plat struktur.",
    fullDescription: "Structural carbon steel, fabrication trimmings, warehouse racking, I-beams, angle irons, and dismantled steel building frames.",
    fullDescriptionBm: "Keluli struktur karbon, lebihan bengkel kimpalan, rak gudang keluli, I-beam, besi sudut (angle iron), dan rangka bangunan keluli.",
    acceptedExamples: [
      "Structural I-Beams & H-Columns",
      "C-Channels & Angle Iron Sections",
      "Square & Rectangular Hollow Steel (SHS/RHS)",
      "Warehouse Heavy Pallet Racking",
      "Fabrication Steel Offcuts"
    ],
    acceptedExamplesBm: [
      "Rasuk Keluli I-Beam & Tiang H-Column",
      "Saluran C & Besi Sudut (Angle Iron)",
      "Tiub Keluli Berongga Segi Empat (SHS/RHS)",
      "Rak Palet Gudang Keluli Berat",
      "Lebihan Potongan Fabrikasi Keluli"
    ],
    notAcceptedExamples: [
      "Steel Heavy Caked in Concrete (Over 30% Mass)",
      "Oil-Soaked Steel Shavings with Emulsion Pool",
      "Unvented Sealed Tanks"
    ],
    notAcceptedExamplesBm: [
      "Keluli Bersalut Konkrit Tebal (>30% berat)",
      "Tatal Keluli Yang Bertakung Cecair Minyak",
      "Tangki Tertutup Tanpa Lubang Pengudaraan"
    ],
    prepTips: "Cut oversized structural beams down under 6 meters for safe transport.",
    prepTipsBm: "Potong rasuk struktur keluli bawah 6 meter untuk muatan lori yang selamat.",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "stainless-steel-scrap",
    name: "Stainless Steel Scrap",
    nameBm: "Keluli Tahan Karat / Stainless Steel",
    iconName: "ShieldCheck",
    category: "Iron & Steel",
    categoryBm: "Besi & Keluli",
    shortDescription: "Grade 304 / 316 stainless sinks, commercial kitchen counters, pipes, and tanks.",
    shortDescriptionBm: "Sinki gred 304/316, kaunter dapur komersial, paip stainless steel, dan tangki.",
    fullDescription: "High-nickel non-magnetic and low-magnetic stainless steel alloys (SS 304, SS 316, SS 430), restaurant fittings, dairy tanks, and industrial piping.",
    fullDescriptionBm: "Aloi keluli tahan karat gred tinggi (SS 304, SS 316, SS 430), perkakas dapur restoran, tangki industri, dan paip stainless steel bersih.",
    acceptedExamples: [
      "Commercial Stainless Kitchen Sinks",
      "Restaurant Preparation Tables & Counters",
      "Grade 304 & 316 Pipes & Flanges",
      "Stainless Handrails & Balustrades",
      "Industrial Food Processing Tanks"
    ],
    acceptedExamplesBm: [
      "Sinki Restoran Keluli Tahan Karat",
      "Meja Penyediaan Makanan Stainless Steel",
      "Paip & Bebibir Gred 304 & 316",
      "Pemegang Tangga & Susur Tangan",
      "Tangki Pemprosesan Makanan Industri"
    ],
    notAcceptedExamples: [
      "Galvanized Steel Mislabeled as Stainless",
      "High Iron Alloy Magnetic Steel (SS 410 Mixed)",
      "Concrete-Filled Stainless Bollards"
    ],
    notAcceptedExamplesBm: [
      "Besi Bergalvani Yang Disangka Stainless",
      "Keluli Bermagnet Campuran Tanpa Pengasingan",
      "Tiang Stainless Yang Diisi Konkrit Padat"
    ],
    prepTips: "Check with a magnet (Grade 304 has little to no magnetic pull) to verify grade.",
    prepTipsBm: "Gunakan magnet untuk menguji gred 304 yang tidak menarik magnet secara kuat.",
    image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "metal-pipes-tubes",
    name: "Metal Pipes & Tubes",
    nameBm: "Paip & Tiub Logam",
    iconName: "CircleDot",
    category: "Metal & Piping",
    categoryBm: "Logam & Paip",
    shortDescription: "Galvanized iron pipes (GI), black steel pipes, seamless tubes, and conduit pipes.",
    shortDescriptionBm: "Paip besi bergalvani (GI), paip keluli hitam, tiub lancar, dan paip konduit logam.",
    fullDescription: "Water distribution GI pipes, fire sprinkler pipes, industrial seamless boiler tubes, scaffolding pipes, and steel tubular structures.",
    fullDescriptionBm: "Paip air GI, paip sistem pemercik bomba, tiub dandang industri, paip perancah bangunan, dan struktur tiub besi.",
    acceptedExamples: [
      "Galvanized Iron (GI) Plumbing Pipes",
      "Black Carbon Steel Schedule 40/80 Pipes",
      "Fire Protection Sprinkler Pipes",
      "Scaffolding Pipes & Tubular Poles",
      "Metal Wiring Conduits & Bends"
    ],
    acceptedExamplesBm: [
      "Paip Paip Besi Bergalvani (GI)",
      "Paip Keluli Karbon Hitam Jadual 40/80",
      "Paip Pemercik Bomba Pencegah Kebakaran",
      "Paip Perancah Bangunan (Scaffolding)",
      "Konduit Pendawaian Logam & Siku Paip"
    ],
    notAcceptedExamples: [
      "Asbestos-Coated Thermal Insulated Pipes",
      "Sludge-Filled Toxic Industrial Pipes",
      "Plastic PVC Pipes Mixed In"
    ],
    notAcceptedExamplesBm: [
      "Paip Bersalut Asbestos Penebat Haba",
      "Paip Dipenuhi Sisa Enapcemar Toksik",
      "Paip Plastik PVC Campuran"
    ],
    prepTips: "Drain any standing water from tubes before weighing.",
    prepTipsBm: "Salirkan air yang bertakung di dalam paip sebelum proses timbangan.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "metal-sheets-plates",
    name: "Metal Sheets & Plates",
    nameBm: "Kepingan & Plat Logam",
    iconName: "Grid",
    category: "Metal & Fabrication",
    categoryBm: "Logam & Plat",
    shortDescription: "Mild steel plates, galvanised roofing zinc sheets, and metal floor plates.",
    shortDescriptionBm: "Plat keluli lembut, kepingan zink bumbung bergalvani, dan plat lantai besi.",
    fullDescription: "Heavy steel floor checker plates, metal fabrication drops, galvanized roofing zinc sheets, perforated plates, and body panels.",
    fullDescriptionBm: "Plat lantai besi tebal, lebihan pemotongan fabrikasi keluli, kepingan zink bumbung, plat berlubang, dan panel logam.",
    acceptedExamples: [
      "Mild Steel Plate Fabrication Offcuts",
      "Galvanized Zinc Corrugated Roofing",
      "Chequered Floor Traction Plates",
      "Perforated & Expanded Steel Mesh",
      "Machinery Enclosure Steel Panels"
    ],
    acceptedExamplesBm: [
      "Lebihan Plat Fabrikasi Keluli Lembut",
      "Zink Bumbung Bergalvani Bergelombang",
      "Plat Bunga Lantai Keluli (Chequered)",
      "Jaring Keluli Berlubang & Diperluas",
      "Panel Logam Penutup Mesin"
    ],
    notAcceptedExamples: [
      "Bitumen-Soaked Corrugated Felt Sheets",
      "Sandwich Panels with Thick Styrofoam Core",
      "Chemical-Crusted Toxic Sheets"
    ],
    notAcceptedExamplesBm: [
      "Kepingan Bersalut Tar Bitumen Tebal",
      "Panel Sandwich Berisi Gabus Polistirena",
      "Kepingan Berkerak Sisa Bahan Toksik"
    ],
    prepTips: "Stack flat to minimize storage volume and simplify lifting.",
    prepTipsBm: "Susun bertingkat secara rata untuk memudahkan muatan dan penjimatan ruang.",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "metal-rods-bars",
    name: "Metal Rods & Bars",
    nameBm: "Rod & Bar Logam",
    iconName: "Maximize2",
    category: "Metal & Structural",
    categoryBm: "Logam & Struktur",
    shortDescription: "Solid round steel bars, square bars, threaded rods, shafting, and flat bars.",
    shortDescriptionBm: "Bar keluli bulat padu, bar bersegi, rod berulir, aci mesin (shafting), dan bar rata.",
    fullDescription: "High-tensile solid steel rods, machine shafts, drive axles, tie rods, threaded studding, and solid alloy bar stocks.",
    fullDescriptionBm: "Bar rod keluli padu tegangan tinggi, aci mesin jentera, gandar pacuan, rod pengikat berulir, dan stok bar aloi padu.",
    acceptedExamples: [
      "High-Tensile Deformed Rebar Rods",
      "Solid Steel Drive Shafts & Axles",
      "Threaded Tie Rods & Studding",
      "Cold-Drawn Square & Hex Bars",
      "Solid Flat Steel Bars"
    ],
    acceptedExamplesBm: [
      "Rod Besi Tetulang Rebar Binaan",
      "Aci Pemacu Keluli Padu & Gandar",
      "Rod Pengikat Berulir & Studding",
      "Bar Keluli Bersegi & Heksagon Padu",
      "Bar Rata Keluli Padu (Flat Bar)"
    ],
    notAcceptedExamples: [
      "Concrete-Encased Footings with High Concrete Ratio",
      "Lead-Weighted Heavy Ballasts",
      "Hazardous Contaminated Drill Bits"
    ],
    notAcceptedExamplesBm: [
      "Blok Konkrit Dengan Besi Tertimbus Dalam",
      "Pemberat Asas Plumbum Tercemar",
      "Mata Gerudi Mengandungi Sisa Bahan Toksik"
    ],
    prepTips: "Bundle thin rods together with wire for stable weighing on platform scales.",
    prepTipsBm: "Ikat rod halus bersama menggunakan dawai pengikat untuk timbangan stabil.",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "mixed-metal-scrap",
    name: "Mixed Metal Scrap",
    nameBm: "Sisa Logam Campuran",
    iconName: "Layers",
    category: "Mixed Metal",
    categoryBm: "Logam Campuran",
    shortDescription: "General mixed ferrous and non-ferrous scrap, household clearances, and workshop junk.",
    shortDescriptionBm: "Sisa campuran pelbagai logam ferus & bukan ferus, pembersihan stor, dan sisa bengkel.",
    fullDescription: "Assorted scrap metals containing mixed iron, zinc, aluminum, copper, steel, fasteners, brackets, and obsolete workshop hardware.",
    fullDescriptionBm: "Pelbagai logam campuran termasuk besi, zink, aluminium, tembaga, keluli, paku, skru, pendakap, dan perkakasan bengkel usang.",
    acceptedExamples: [
      "Mixed Workshop Fasteners, Nuts & Bolts",
      "Assorted Iron & Alloy Brackets",
      "Dismantled Metal Hardware & Fixtures",
      "Site Clearance Mixed Scrap Bins",
      "Broken Metal Tools & Parts"
    ],
    acceptedExamplesBm: [
      "Campuran Skru, Nat & Bolt Bengkel",
      "Pelbagai Pendakap Besi & Aloi",
      "Perkakasan Logam Usang Rumah/Kedai",
      "Sisa Logam Pembersihan Tapak",
      "Alatan Tangan Logam Yang Rosak"
    ],
    notAcceptedExamples: [
      "Household Wet Garbage & Food Waste",
      "Wood, Plastic Wraps & General Rubbish",
      "Medical Biohazard Waste"
    ],
    notAcceptedExamplesBm: [
      "Sampah Basah Domestik & Sisa Makanan",
      "Kayu, Plastik & Sampah Sarap Biasa",
      "Sisa Klinikal & Bahan Berbahaya"
    ],
    prepTips: "Keep small scrap gathered in buckets or bins for straightforward weighing.",
    prepTipsBm: "Kumpulkan barang logam kecil di dalam tong atau baldi untuk timbangan mudah.",
    image: "/assets/scrap_value_hero.jpg",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "electric-motors",
    name: "Electric Motors",
    nameBm: "Motor Elektrik",
    iconName: "Cog",
    category: "Motors & Power",
    categoryBm: "Motor & Kuasa",
    shortDescription: "AC/DC industrial motors, water pump motors, blower motors, and alternator units.",
    shortDescriptionBm: "Motor industri AC/DC, motor pam air, motor blower, dan unit alternator kenderaan.",
    fullDescription: "Copper-wound three-phase and single-phase electric motors, submersible pumps, elevator drive motors, and automotive alternators/starters.",
    fullDescriptionBm: "Motor elektrik 3-fasa & 1-fasa bergulung tembaga, pam air celup, motor lif, serta starter dan alternator automotif.",
    acceptedExamples: [
      "3-Phase Industrial Electric Motors",
      "Submersible & Water Pump Motors",
      "Automotive Alternators & Starters",
      "Elevator & Hoist Gearbox Motors",
      "Blower & Compressor Drive Motors"
    ],
    acceptedExamplesBm: [
      "Motor Elektrik Industri 3 Fasa",
      "Motor Pam Air Celup & Pam Tekanan",
      "Alternator & Motor Pemula Kereta/Lori",
      "Motor Lif & Kren Pengangkat",
      "Motor Pemacu Blower & Kompresor"
    ],
    notAcceptedExamples: [
      "Burned Motors Stripped of All Copper (Graded as Iron)",
      "Transformers Soaked in Hazardous Mineral Oil",
      "Motors Embedded in Solid Concrete"
    ],
    notAcceptedExamplesBm: [
      "Motor Yang Dikeluarkan Semua Tembaga (Kadar Besi)",
      "Transformer Minyak Berbahaya Bocor",
      "Motor Yang Tertimbus Konkrit Keras"
    ],
    prepTips: "Do not strip copper out — complete intact motors receive full electric motor pricing.",
    prepTipsBm: "Jangan keluarkan gulungan tembaga — motor lengkap mendapat penilaian harga penuh.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "electric-cables",
    name: "Electric Cables",
    nameBm: "Kabel & Wayar Elektrik",
    iconName: "Zap",
    category: "Cables & Wiring",
    categoryBm: "Kabel & Pendawaian",
    shortDescription: "Heavy underground power cables, armored cables, flexible cords, and wire reels.",
    shortDescriptionBm: "Kabel kuasa voltan tinggi bawah tanah, kabel berperisai besi (XLPE/SWA), dan gelung kabel.",
    fullDescription: "High-voltage and low-voltage electrical distribution cables, steel-wire armored copper cables (SWA), rubber cables, and project surplus drum wiring.",
    fullDescriptionBm: "Kabel pengagihan elektrik voltan tinggi dan rendah, kabel tembaga berperisai dawai besi (SWA), kabel getah industri, dan lebihan gelung kabel projek.",
    acceptedExamples: [
      "Armored Copper Cables (XLPE / SWA)",
      "Underground Distribution Feeder Cables",
      "Heavy Rubber Industrial Generator Cables",
      "Project Surplus Cable Reels & Drums",
      "Control & Instrument Multicore Cables"
    ],
    acceptedExamplesBm: [
      "Kabel Tembaga Berperisai (XLPE/SWA)",
      "Kabel Penyalur Elektrik Bawah Tanah",
      "Kabel Getah Generator Industri Berat",
      "Lebihan Gelung & Dram Kabel Projek",
      "Kabel Kawalan & Instrumen Berbilang Teras"
    ],
    notAcceptedExamples: [
      "Optical Fiber Telecom Lines with Zero Copper Content",
      "Severely Deteriorated Asbestos Lead Sheathing",
      "Steel-Only Guy Wires without Conductors"
    ],
    notAcceptedExamplesBm: [
      "Kabel Gentian Optik Tanpa Sebarang Tembaga",
      "Kabel Lama Bersalut Penebat Asbestos Berbahaya",
      "Dawai Keluli Penahan Tiang Tanpa Pengalir"
    ],
    prepTips: "Coil loose cables or state if they are mounted on wooden/steel drums.",
    prepTipsBm: "Gulung kabel longgar atau nyatakan jika kabel berada di atas dram kayu/besi.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "air-conditioner-scrap",
    name: "Air Conditioner Scrap",
    nameBm: "Barang Lusuh Penghawa Dingin / Aircond",
    iconName: "Wind",
    category: "HVAC & Cooling",
    categoryBm: "Peralatan HVAC",
    shortDescription: "Split outdoor units, indoor fan coils, centralized chillers, and cassette units.",
    shortDescriptionBm: "Unit luar (outdoor split), unit dalam (indoor coil), sistem chiller pusat, dan unit siling kaset.",
    fullDescription: "Complete discarded residential aircon units, commercial cassette systems, rooftop package chillers, and evaporator radiator fins.",
    fullDescriptionBm: "Unit penghawa dingin rumah lengkap terpakai, sistem kaset komersial, unit penyejuk bumbung, dan sirip radiator penyejuk.",
    acceptedExamples: [
      "Split Air Conditioner Outdoor Units",
      "Indoor Evaporator Fan Coil Units",
      "Ceiling Cassette & Ducted Units",
      "Copper/Aluminium Radiator Cooling Fins",
      "Commercial Chillers & Package Units"
    ],
    acceptedExamplesBm: [
      "Unit Outdoor Pendingin Hawa Split",
      "Unit Indoor Fan Coil Penyejat",
      "Unit Siling Kaset & Salur Udara Komersial",
      "Sirip Radiator Tembaga/Aluminium",
      "Unit Pakej & Chiller Komersial"
    ],
    notAcceptedExamples: [
      "Empty Plastic Covers without Compressor or Metal",
      "Units Heavily Vandalised with Missing Internal Components",
      "Waterlogged Contaminated Sponges"
    ],
    notAcceptedExamplesBm: [
      "Penutup Plastik Kosong Tanpa Komponen Logam",
      "Unit Yang Telah Dikeluarkan Bahagian Dalam",
      "Span Penapis Yang Sangat Kotor Berlumpur"
    ],
    prepTips: "Dismount units from wall brackets before pickup to ensure swift loading.",
    prepTipsBm: "Tanggalkan unit daripada pendakap dinding sebelum lori tiba untuk kelancaran muatan.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "ac-compressors",
    name: "AC Compressors",
    nameBm: "Pemampat / Kompresor Aircond",
    iconName: "Cpu",
    category: "HVAC & Heavy Parts",
    categoryBm: "Komponen HVAC",
    shortDescription: "Sealed rotary, scroll, and reciprocating air conditioner and refrigerator compressors.",
    shortDescriptionBm: "Kompresor putar bertutup (rotary), pemampat tatal (scroll), dan pemampat peti sejuk/aircond.",
    fullDescription: "Sealed hermetic and semi-hermetic compressor units removed from air conditioners, commercial freezers, and industrial refrigeration equipment.",
    fullDescriptionBm: "Unit pemampat hermetik bertutup daripada sistem pendingin hawa, peti sejuk beku komersial, dan peralatan penyejukan industri.",
    acceptedExamples: [
      "Rotary Air Conditioner Compressors",
      "Scroll Commercial AC Compressors",
      "Refrigerator & Freezer Hermetic Pots",
      "Semi-Hermetic Reciprocating Chillers",
      "Automotive Aircon Compressor Pumps"
    ],
    acceptedExamplesBm: [
      "Pemampat Rotary Aircond Kediaman",
      "Pemampat Scroll Aircond Komersial",
      "Pot Pemampat Peti Sejuk & Pembeku",
      "Pemampat Chiller Separa Hermetik",
      "Pam Kompresor Aircond Kenderaan"
    ],
    notAcceptedExamples: [
      "Heavily Leaking Open Oil Tanks",
      "Burnt Hollow Shells Stripped of Core",
      "Containers Filled with Chemical Liquids"
    ],
    notAcceptedExamplesBm: [
      "Tangki Terbuka Yang Menumpahkan Minyak",
      "Cengkerang Kosong Yang Dikeluarkan Teras",
      "Bekas Dipenuhi Cecair Kimia Berbahaya"
    ],
    prepTips: "Ensure pipe stubs are crimped or capped to prevent oil spills during handling.",
    prepTipsBm: "Pastikan hujung paip dikapit untuk mengelakkan tumpahan baki minyak.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "electrical-equipment",
    name: "Electrical Equipment",
    nameBm: "Peralatan Elektrik",
    iconName: "Sliders",
    category: "Electrical & Industrial",
    categoryBm: "Peralatan Elektrik",
    shortDescription: "Distribution boards (DB), circuit breakers, transformers, inverters, and switchgear.",
    shortDescriptionBm: "Papan agihan elektrik (DB), pemutus litar (MCB/MCCB), pengubah arus, penyongsang, dan suisgear.",
    fullDescription: "Main switchboards, industrial breaker panels, dry-type and oil-filled transformers, UPS units, motor control centers (MCC), and busway trunks.",
    fullDescriptionBm: "Papan suis utama elektrik (MSB), panel pemutus litar industri, transformer kuasa, unit UPS, pusat kawalan motor, dan salur busway.",
    acceptedExamples: [
      "Main Switchboards (MSB) & DB Boxes",
      "Molded Case Circuit Breakers (MCCB / ACB)",
      "Industrial Power Transformers",
      "Uninterruptible Power Supplies (UPS)",
      "Motor Control Centers & Inverter Drives"
    ],
    acceptedExamplesBm: [
      "Papan Suis Utama (MSB) & Kotak DB",
      "Pemutus Litar Industri (MCCB / ACB)",
      "Transformer Kuasa Industri",
      "Unit Bekalan Kuasa UPS Komersial",
      "Pusat Kawalan Motor & Pemacu Inverter"
    ],
    notAcceptedExamples: [
      "PCB Oil-Contaminated Old Vintage Transformers",
      "Live Electrified Panels Not Disconnected",
      "Explosive Capacitors with Hazardous Electrolyte"
    ],
    notAcceptedExamplesBm: [
      "Transformer Lama Tercemar Minyak Toksik PCB",
      "Panel Yang Masih Mempunyai Arus Elektrik Hidup",
      "Kapasitor Berbahaya Yang Rosak Teruk"
    ],
    prepTips: "Verify power has been permanently decommissioned and isolated by a qualified technician.",
    prepTipsBm: "Sahkan bekalan elektrik telah dimatikan dan diputuskan sepenuhnya oleh juruteknik bertauliah.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "computer-parts",
    name: "Computer Parts",
    nameBm: "Komponen & Bahagian Komputer",
    iconName: "HardDrive",
    category: "Electronics & IT",
    categoryBm: "Elektronik & IT",
    shortDescription: "Motherboards, RAM, CPUs, power supplies (PSU), hard disks (HDD), and PC casings.",
    shortDescriptionBm: "Papan induk, memori RAM, pemproses CPU, bekalan kuasa (PSU), cakera keras (HDD), dan sarung PC.",
    fullDescription: "High-grade electronic circuit boards, computer server racks, graphics cards (GPU), power supply modules, and internal computer hardware.",
    fullDescriptionBm: "Papan litar elektronik gred tinggi (motherboard), rak pelayan komputer, kad grafik GPU, unit bekalan kuasa, dan perkakasan komputer.",
    acceptedExamples: [
      "PC & Server Motherboards",
      "CPUs (Processors) & Memory RAM Modules",
      "Power Supply Units (PSU)",
      "Hard Disk Drives (HDD) & Solid State Drives",
      "Graphics Cards (GPU) & PCI Expansion Boards"
    ],
    acceptedExamplesBm: [
      "Papan Induk PC & Pelayan Komputer",
      "Pemproses CPU & Kepingan Memori RAM",
      "Unit Bekalan Kuasa (PSU) Komputer",
      "Cakera Keras (HDD) & Pemacu SSD",
      "Kad Grafik GPU & Papan Pengembangan PCI"
    ],
    notAcceptedExamples: [
      "Shattered CRT Glass Tube Monitors",
      "Heavy Wood Computer Furniture Desks",
      "Battery Acid Corroded Laptop Cases"
    ],
    notAcceptedExamplesBm: [
      "Monitor Kaca Tiub CRT Yang Pecah",
      "Meja Kayu Komputer Tanpa Komponen Elektronik",
      "Sarung Komputer Tercemar Asid Bateri"
    ],
    prepTips: "Separate green circuit boards from steel casing structures to unlock highest component grade rates.",
    prepTipsBm: "Asingkan papan litar hijau daripada casing besi untuk mendapatkan kadar gred komponen tertinggi.",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "printers-photocopiers",
    name: "Printers & Photocopiers",
    nameBm: "Pencetak & Mesin Fotostat",
    iconName: "Printer",
    category: "Office Electronics",
    categoryBm: "Elektronik Pejabat",
    shortDescription: "Commercial multifunction copiers, laser printers, plotters, and office scanners.",
    shortDescriptionBm: "Mesin fotostat komersial pelbagai fungsi, pencetak laser, mesin plotter, dan pengimbas pejabat.",
    fullDescription: "Heavy office floor-standing photocopiers, production digital printers, large-format blueprint plotters, and desktop laserjet printers.",
    fullDescriptionBm: "Mesin fotostat pejabat berdiri saiz besar, mesin pencetak digital komersial, plotter pelan bersaiz besar, dan pencetak laser.",
    acceptedExamples: [
      "Commercial Floor-Standing Photocopiers",
      "Office Multifunction Laser Printers",
      "Architectural Blueprint Plotters",
      "Desktop Inkjet & Laserjet Printers",
      "High-Speed Document Scanners"
    ],
    acceptedExamplesBm: [
      "Mesin Fotostat Pejabat Berdiri Saiz Besar",
      "Pencetak Laser Pelbagai Fungsi Pejabat",
      "Mesin Plotter Cetakan Pelan Bangunan",
      "Pencetak Meja Inkjet & Laserjet",
      "Mesin Pengimbas Dokumen Berkelajuan Tinggi"
    ],
    notAcceptedExamples: [
      "Loose Spilled Toner Powder (Please Seal)",
      "Unpacked Leaking Bulk Ink Reservoirs",
      "Smashed Glass Scanners with Hazardous Exposed Tubes"
    ],
    notAcceptedExamplesBm: [
      "Serbuk Toner Tertumpah (Sila Tutup Rapat)",
      "Takungan Dakwat Cecair Yang Bocor",
      "Pengimbas Cermin Pecah Berbahaya"
    ],
    prepTips: "Remove loose toner bottles before dispatch to keep handling tidy.",
    prepTipsBm: "Keluarkan botol toner longgar sebelum pengangkutan untuk menjaga kebersihan.",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "fans-fan-motors",
    name: "Fans & Fan Motors",
    nameBm: "Kipas & Motor Kipas",
    iconName: "Wind",
    category: "Appliances & Motors",
    categoryBm: "Peralatan & Motor",
    shortDescription: "Industrial ventilation blowers, ceiling fans, exhaust fans, and pedestal fan motors.",
    shortDescriptionBm: "Kipas pengudaraan industri, kipas siling, kipas ekzos dinding, dan motor kipas berdiri.",
    fullDescription: "Complete residential ceiling fan assemblies, industrial warehouse blowers, ducted exhaust ventilation units, and standalone electric fan motors.",
    fullDescriptionBm: "Kipas siling rumah lengkap dengan motor, kipas industri kilang/gudang, unit ekzos pengudaraan, dan motor kipas elektrik.",
    acceptedExamples: [
      "Residential Ceiling Fans & Motors",
      "Industrial Heavy Warehouse Wall Blowers",
      "Commercial Exhaust & Extraction Fans",
      "Pedestal & Stand Fan Motor Assemblies",
      "Air Curtain & Ventilation Blowers"
    ],
    acceptedExamplesBm: [
      "Kipas Siling Rumah Lengkap Motor",
      "Kipas Dinding Industri Gudang Berat",
      "Kipas Ekzos & Pengudaraan Komersial",
      "Pemasangan Motor Kipas Berdiri",
      "Unit Penghembus Tirai Udara (Air Curtain)"
    ],
    notAcceptedExamples: [
      "Broken Plastic Fan Blades without Motor",
      "Burnt Stator Shells Missing Windings",
      "Mud-Caked Agricultural Agitators"
    ],
    notAcceptedExamplesBm: [
      "Bilah Kipas Plastik Pecah Tanpa Motor",
      "Cengkerang Motor Yang Dibuang Tembaga",
      "Kipas Pertanian Berlumpur Tebal"
    ],
    prepTips: "Keep motor housing and electrical stator intact for best pricing.",
    prepTipsBm: "Kekalkan perumah motor dan stator elektrik lengkap untuk harga terbaik.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "metal-cans-containers",
    name: "Metal Cans & Containers",
    nameBm: "Tin & Bekas Logam",
    iconName: "Package",
    category: "Containers & Metal",
    categoryBm: "Bekas & Tin Logam",
    shortDescription: "Aluminium drink cans, tin food cans, biscuit tins, and clean steel drums.",
    shortDescriptionBm: "Tin minuman aluminium, tin makanan, tin biskut, dan tong dram keluli bersih.",
    fullDescription: "Empty aluminum beverage cans (UBC), tin-plated steel food cans, metallic biscuit tins, paint tins (dry/empty), and 200L steel drums.",
    fullDescriptionBm: "Tin minuman aluminium kosong (UBC), tin makanan bersalut timah, tin biskut logam, tin cat kosong kering, dan tong dram besi 200L.",
    acceptedExamples: [
      "Used Aluminium Beverage Cans (UBC)",
      "Tin-Plated Food & Condensed Milk Cans",
      "Metal Biscuit & Confectionery Tins",
      "Clean Dry Paint Cans (Dried / Scraped)",
      "200L Steel Oil Drums (Emptied & Vented)"
    ],
    acceptedExamplesBm: [
      "Tin Minuman Aluminium Terpakai (UBC)",
      "Tin Makanan & Susu Pekat Bersalut Timah",
      "Kotak Tin Biskut Logam",
      "Tin Cat Kosong Kering Bersih",
      "Tong Dram Besi 200L (Kosong & Ditebuk)"
    ],
    notAcceptedExamples: [
      "Pressurized Aerosol Cans with Flammable Gas",
      "Drums Containing Chemical Toxic Sludge",
      "Full Paint Buckets with Wet Liquid Paint"
    ],
    notAcceptedExamplesBm: [
      "Tin Aerosol Bertekanan Gas Mudah Terbakar",
      "Tong Mengandungi Sisa Enapcemar Racun",
      "Bekas Cat Penuh Mengandungi Cecair Cat Basah"
    ],
    prepTips: "Crush drink cans to save space, and ensure paint or drum containers are dry and open.",
    prepTipsBm: "Penyekkan tin minuman untuk jimatkan ruang dan pastikan bekas dram kering dan terbuka.",
    image: "/assets/scrap_value_hero.jpg",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "old-machinery-equipment",
    name: "Old Machinery & Equipment",
    nameBm: "Mesin & Jentera Lama",
    iconName: "Wrench",
    category: "Machinery & Plant",
    categoryBm: "Jentera & Mesin",
    shortDescription: "Lathes, drill presses, stamping presses, hydraulic power packs, and plant gear.",
    shortDescriptionBm: "Mesin larik (lathe), mesin gerudi, mesin penekan (press), unit hidraulik, dan jentera kilang.",
    fullDescription: "Obsolete manufacturing machinery, metalworking lathes, milling machines, stamping presses, diesel generators, conveyors, and industrial workshop equipment.",
    fullDescriptionBm: "Jentera pembuatan usang, mesin larik logam, mesin pengisar (milling), mesin penekan stamping, generator diesel, dan peralatan bengkel industri.",
    acceptedExamples: [
      "Metalworking Lathes & Milling Machines",
      "Industrial Drill Presses & Saws",
      "Hydraulic Press Units & Power Packs",
      "Diesel Generator Sets (Gensets)",
      "Factory Conveyors & Packaging Lines"
    ],
    acceptedExamplesBm: [
      "Mesin Larik Logam & Mesin Milling",
      "Mesin Gerudi Industri & Gergaji Logam",
      "Unit Penekan Hidraulik & Power Pack",
      "Set Generator Kuasa Diesel (Genset)",
      "Konveyor Kilang & Barisan Pembungkusan"
    ],
    notAcceptedExamples: [
      "Machinery Still Energized to Active Power Mains",
      "Equipment Filled with Radioactive Sources",
      "Chemical Processing Tanks with Residual Acid"
    ],
    notAcceptedExamplesBm: [
      "Mesin Yang Masih Bersambung Bekalan Elektrik",
      "Peralatan Mengandungi Punca Radioaktif",
      "Tangki Kimia Dengan Baki Asid Berbahaya"
    ],
    prepTips: "Inform us in advance regarding estimated weight and site ceiling clearance for crane loading.",
    prepTipsBm: "Maklumkan anggaran berat jentera dan ketinggian siling untuk penyediaan kren pengangkat.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "metal-frames-furniture",
    name: "Metal Frames & Furniture",
    nameBm: "Perabot & Rangka Logam",
    iconName: "Armchair",
    category: "Structural & Furniture",
    categoryBm: "Perabot & Struktur",
    shortDescription: "Steel office desks, metal filing cabinets, warehouse racks, and iron bed frames.",
    shortDescriptionBm: "Meja pejabat keluli, kabinet fail besi, rak simpanan gudang, dan rangka katil besi.",
    fullDescription: "Dismantled steel office desks, 2/3/4-drawer steel filing cabinets, heavy-duty warehouse pallet racking, metal chairs, and structural bed frames.",
    fullDescriptionBm: "Meja pejabat keluli, kabinet fail besi 2/3/4 laci, rak palet gudang berat (pallet racking), kerusi besi, dan rangka katil besi.",
    acceptedExamples: [
      "Steel Office Filing Cabinets (2/3/4 Drawers)",
      "Metal Executive Desks & Frames",
      "Warehouse Heavy Pallet Racks & Shelving",
      "Commercial Stainless Steel Kitchen Benches",
      "Iron Bedsteads & Metal Folding Chairs"
    ],
    acceptedExamplesBm: [
      "Kabinet Fail Besi Pejabat (2/3/4 Laci)",
      "Meja Pejabat Keluli & Kerangka",
      "Rak Palet Gudang & Rak Simpanan Besi",
      "Meja Kaunter Stainless Steel Restoran",
      "Rangka Katil Besi & Kerusi Lipat Logam"
    ],
    notAcceptedExamples: [
      "Heavy Wooden Furniture with Minor Steel Knobs",
      "Cushioned Sofas with Negligible Metal Content",
      "Particle Board Furniture (Wood)"
    ],
    notAcceptedExamplesBm: [
      "Perabot Kayu Berat Yang Hanya Ada Pemegang Besi",
      "Sofa Kusyen Tanpa Komponen Logam Ketara",
      "Perabot Papan Habuk Kayu (Chipboard)"
    ],
    prepTips: "Clear out paper files and documents from drawers prior to collection.",
    prepTipsBm: "Kosongkan semua fail kertas dan dokumen daripada laci sebelum pengambilan.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "mixed-electrical-scrap",
    name: "Mixed Electrical Scrap",
    nameBm: "Sisa Elektrik Campuran",
    iconName: "Plug",
    category: "Electrical Scrap",
    categoryBm: "Sisa Elektrik",
    shortDescription: "Small electrical appliances, power tools, chargers, adapters, and kitchen appliances.",
    shortDescriptionBm: "Perkakas elektrik kecil, alatan kuasa pertukangan, pengecas, penyesuai kuasa, dan perkakas dapur.",
    fullDescription: "Mixed electrical appliances, broken drills, angle grinders, microwaves, electric kettles, toaster ovens, power adapters, and household cords.",
    fullDescriptionBm: "Pelbagai perkakas elektrik kecil, mesin gerudi elektrik rosak, pengisar sudut (angle grinder), ketuhar gelombang mikro, cerek elektrik, dan wayar perkakas rumah.",
    acceptedExamples: [
      "Power Tools (Drills, Angle Grinders, Saws)",
      "Microwave Ovens & Toaster Ovens",
      "Electric Water Heaters & Kettles",
      "Power Adapters, Chargers & Extension Leads",
      "Kitchen Blenders & Vacuum Cleaner Assemblies"
    ],
    acceptedExamplesBm: [
      "Alatan Kuasa Pertukangan (Gerudi, Grinder, Gergaji)",
      "Ketuhar Gelombang Mikro & Pembakar Roti",
      "Pemanas Air Elektrik & Cerek Elektrik",
      "Pengecas, Adapter Kuasa & Wayar Penyambung",
      "Pengisar Makanan & Vakum Elektrik"
    ],
    notAcceptedExamples: [
      "Fluorescent Glass Tubes Containing Mercury Vapor",
      "Loose Leaking Battery Acid Cells",
      "Biohazard Contaminated Medical Devices"
    ],
    notAcceptedExamplesBm: [
      "Lampu Kalimantang Kaca Pecah Mengandungi Merkuri",
      "Bateri Bocor Berasid Tanpa Perlindungan",
      "Peranti Perubatan Tercemar Sisa Klinikal"
    ],
    prepTips: "Put small electronic devices in boxes for quick weighing and transport.",
    prepTipsBm: "Kumpulkan gajet elektrik kecil ke dalam kotak untuk timbangan pantas.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "e-waste",
    name: "E-Waste",
    nameBm: "Sisa Elektronik / E-Waste",
    iconName: "Monitor",
    category: "Electronic Waste",
    categoryBm: "Sisa Elektronik",
    shortDescription: "Smartphones, tablets, laptops, networking routers, server blades, and circuit boards.",
    shortDescriptionBm: "Telefon pintar, tablet, komputer riba (laptop), penghala rangkaian (router), dan papan litar.",
    fullDescription: "Obsolete consumer electronics, corporate IT asset disposals, telecommunication switches, server blades, lithium-ion battery gadgets, and PCB boards.",
    fullDescriptionBm: "Peranti elektronik pengguna, pelupusan aset IT syarikat, suis telekomunikasi, pelayan server, gajet bateri litium, dan papan litar bercetak (PCB).",
    acceptedExamples: [
      "Laptops, Notebooks & Tablets",
      "Smartphones & Mobile Devices",
      "Networking Switches, Routers & Modems",
      "Data Center Server Blades & Racks",
      "Printed Circuit Boards (Green / Blue PCBs)"
    ],
    acceptedExamplesBm: [
      "Komputer Riba (Laptop) & Tablet",
      "Telefon Pintar & Peranti Mudah Alih",
      "Suis Rangkaian Komputer, Router & Modem",
      "Pelayan Server Pusat Data & Rak IT",
      "Papan Litar Bercetak (PCB Hijau / Biru)"
    ],
    notAcceptedExamples: [
      "Severely Swollen / Punctured Lithium Batteries",
      "Cracked Bare CRT Tube Glass",
      "Radioactive Smoke Detector Sensor Assemblies"
    ],
    notAcceptedExamplesBm: [
      "Bateri Litium Kembung Teruk / Bocor",
      "Kaca Tiub Monitor CRT Pecah",
      "Sensor Pengesan Asap Mengandungi Radioaktif"
    ],
    prepTips: "Wipe or secure sensitive company storage drives before disposal.",
    prepTipsBm: "Padam atau bersihkan data storan sulit syarikat sebelum pelupusan.",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "other-mixed-scrap",
    name: "Other Mixed Scrap",
    nameBm: "Lain-lain Barang Lusuh Campuran",
    iconName: "Sparkles",
    category: "General Scrap",
    categoryBm: "Barang Lusuh Am",
    shortDescription: "Lead-acid car batteries, vehicle alternators, brass fittings, and assorted site salvage.",
    shortDescriptionBm: "Bateri kereta asid-plumbum, alternator kenderaan, penyambung tembaga, dan pelbagai sisa logam.",
    fullDescription: "Unsorted industrial surplus, vehicle salvage parts, lead-acid batteries, zinc die-casts, mixed alloy offcuts, and specialized metal commodities.",
    fullDescriptionBm: "Lebihan industri yang belum diasingkan, komponen terpakai kenderaan, bateri kereta asid plumbum, zink aloi, dan pelbagai sisa logam salvage.",
    acceptedExamples: [
      "Car, Lorry & Inverter Lead-Acid Batteries",
      "Vehicle Alloy Rims & Radiator Cores",
      "Automotive Brake Discs & Calipers",
      "Zinc Die-Cast Components & Alloy Blocks",
      "Warehouse Clearance Mixed Metal Lots"
    ],
    acceptedExamplesBm: [
      "Bateri Kereta, Lori & Inverter (Lead-Acid)",
      "Rim Aloi Kereta & Teras Radiator",
      "Piring Brek Cakera Logam Kenderaan",
      "Komponen Aloi Zink Die-Cast",
      "Lot Logam Campuran Pembersihan Stor/Gudang"
    ],
    notAcceptedExamples: [
      "Household Kitchen Garbage & Wet Waste",
      "Explosives & Unchecked Ammunition Shells",
      "Biohazardous Clinical Hospital Trash"
    ],
    notAcceptedExamplesBm: [
      "Sampah Sisa Makanan Dapur Domestik",
      "Bahan Letupan & Kelongsong Peluru Aktif",
      "Sisa Klinikal & Bahan Berjangkit Hospital"
    ],
    prepTips: "Send photos of unlisted or unique scrap over WhatsApp for fast quotation and clearance planning.",
    prepTipsBm: "Hantar gambar barangan lusuh khas melalui WhatsApp untuk sebut harga dan urusan lori segera.",
    image: "/assets/scrap_value_hero.jpg",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "glass",
    name: "Glass",
    nameBm: "Kaca",
    iconName: "Sparkles",
    category: "Glass & Containers",
    categoryBm: "Kaca & Bekas",
    shortDescription: "Clean beverage bottles, glass jars, food containers, and recyclable glass.",
    shortDescriptionBm: "Botol minuman kaca bersih, balang kaca, bekas makanan, dan kaca kitar semula.",
    fullDescription: "Recyclable clear, green, and brown glass bottles, clean jars, beverage containers, and sorted glass packaging.",
    fullDescriptionBm: "Botol kaca jernih, hijau, dan coklat yang bersih, balang kaca, bekas minuman, dan bungkusan kaca berasingan.",
    acceptedExamples: [
      "Glass Beverage & Drink Bottles",
      "Food Jars & Sauce Bottles (Rinsed)",
      "Clear & Amber Glass Packaging",
      "Flint & Green Glass Containers"
    ],
    acceptedExamplesBm: [
      "Botol Minuman & Jus Kaca",
      "Balang Kaca Makanan & Botol Sos (Dibilas)",
      "Bungkusan Kaca Jernih & Coklat (Amber)",
      "Bekas Kaca Hijau Bersih"
    ],
    notAcceptedExamples: [
      "Broken Window Pane Plate Glass",
      "Ceramic Plates, Porcelain & Mugs",
      "Heat-Resistant Pyrex Cookware"
    ],
    notAcceptedExamplesBm: [
      "Serpihan Cermin Tingkap Bangunan",
      "Pinggan Seramik, Porselin & Cawan",
      "Kaca Tahan Panas Pyrex / Kristal"
    ],
    prepTips: "Rinse bottles and remove metal/plastic caps before collection.",
    prepTipsBm: "Bilas botol dan tanggalkan penutup plastik atau besi sebelum pengumpulan.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
  {
    id: "cans",
    name: "Cans",
    nameBm: "Tin Minuman",
    iconName: "CircleDot",
    category: "Cans & Containers",
    categoryBm: "Tin & Bekas",
    shortDescription: "Aluminium beverage cans, soda cans, juice cans, and clean metal food tins.",
    shortDescriptionBm: "Tin minuman aluminium, tin soda, tin jus, dan tin makanan logam yang bersih.",
    fullDescription: "Aluminium soft drink cans, compressed UBC (Used Beverage Cans), clean tinplate food cans, and canned beverage containers.",
    fullDescriptionBm: "Tin aluminium minuman ringan (UBC), tin jus, tin makanan logam bersih, dan pelbagai tin minuman boleh kitar semula.",
    acceptedExamples: [
      "Aluminium Soda & Soft Drink Cans",
      "Juice & Energy Drink Cans",
      "Clean Metal Food Tins (Rinsed)",
      "Crushed / Flattened Beverage Cans"
    ],
    acceptedExamplesBm: [
      "Tin Minuman Ringan & Soda Aluminium",
      "Tin Minuman Jus & Tenaga",
      "Tin Makanan Logam Bersih (Dibilas)",
      "Tin Minuman Aluminium Yang Dipenyekkan"
    ],
    notAcceptedExamples: [
      "Unwashed Tins with Rotten Food",
      "Aerosol Spray Cans with Residual Pressure",
      "Chemical or Paint Cans with Wet Residue"
    ],
    notAcceptedExamplesBm: [
      "Tin Makanan Kotor & Berbau Busuk",
      "Tin Semburan Aerosol Bertekanan",
      "Tin Cat Atau Bahan Kimia Basah"
    ],
    prepTips: "Rinse remaining liquid and crush cans flat to save storage space.",
    prepTipsBm: "Bilas baki cecair dan kemekkan tin untuk menjimatkan ruang simpanan.",
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
  },
];

// 8. Scrap Prices Table
export const SCRAP_PRICES: ScrapPriceItem[] = [
  {
    id: "p-al-prof",
    material: "Aluminium Profiles & Extrusions",
    materialBm: "Profil Aluminium & Keratan Seni Bina",
    category: "Aluminium",
    categoryBm: "Aluminium",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
    note: "Clean window/door profiles, sliding tracks",
    noteBm: "Profil tingkap/pintu bersih, rel gelangsar",
  },
  {
    id: "p-al-sheet",
    material: "Aluminium Sheets & Plates",
    materialBm: "Kepingan & Plat Aluminium",
    category: "Aluminium",
    categoryBm: "Aluminium",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
    note: "Flat panels, chequered tread plates",
    noteBm: "Plat rata, kepingan bunga aluminium",
  },
  {
    id: "p-cu-scrap",
    material: "Copper (Pipes, Busbars & Millberry)",
    materialBm: "Tembaga (Paip, Busbar & Millberry)",
    category: "Copper & Brass",
    categoryBm: "Tembaga & Brass",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
    note: "Clean heavy copper, stripped plumbing",
    noteBm: "Tembaga merah bersih, paip tembaga",
  },
  {
    id: "p-cu-wire",
    material: "Copper Wire & Electric Cable",
    materialBm: "Wayar & Kabel Elektrik Tembaga",
    category: "Copper & Brass",
    categoryBm: "Tembaga & Brass",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
    note: "Single-core, multicore, armored cables",
    noteBm: "Kabel 1-teras, berbilang teras, kabel perisai",
  },
  {
    id: "p-brass",
    material: "Brass (Taps, Valves & Fittings)",
    materialBm: "Tembaga Kuning / Brass (Injap, Paip & Kunci)",
    category: "Copper & Brass",
    categoryBm: "Tembaga & Brass",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
    note: "Plumbing brass fixtures, rod swarf",
    noteBm: "Perkakasan paip brass, tombol kunci",
  },
  {
    id: "p-iron",
    material: "Scrap Iron (HMS 1 & 2 / Cast Iron)",
    materialBm: "Besi Buruk (HMS 1 & 2 / Besi Tuang)",
    category: "Iron & Steel",
    categoryBm: "Besi & Keluli",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
    note: "Heavy scrap, gates, grilles, rebars",
    noteBm: "Besi berat, pintu pagar, jeriji, rebar",
  },
  {
    id: "p-steel",
    material: "Structural Steel & Channels",
    materialBm: "Keluli Struktur & Saluran C-Channel",
    category: "Iron & Steel",
    categoryBm: "Besi & Keluli",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
    note: "I-Beams, H-Columns, racking sections",
    noteBm: "I-Beam, H-Column, rak gudang keluli",
  },
  {
    id: "p-ss",
    material: "Stainless Steel (Grade 304 / 316)",
    materialBm: "Keluli Tahan Karat (Gred 304 / 316)",
    category: "Iron & Steel",
    categoryBm: "Besi & Keluli",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
    note: "Commercial sinks, kitchen tables, pipes",
    noteBm: "Sinki restoran, meja penyediaan, paip SS",
  },
  {
    id: "p-motors",
    material: "Electric Motors & Transformers",
    materialBm: "Motor Elektrik & Transformer",
    category: "Motors & Power",
    categoryBm: "Motor & Kuasa",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
    note: "Complete copper-wound industrial motors",
    noteBm: "Motor industri lengkap bergulung tembaga",
  },
  {
    id: "p-ac",
    material: "Air Conditioner Units & Compressors",
    materialBm: "Unit Pendingin Hawa & Kompresor Aircond",
    category: "HVAC & Cooling",
    categoryBm: "Peralatan HVAC",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
    note: "Outdoor splits, chillers, rotary compressor pots",
    noteBm: "Unit outdoor split, kompresor rotary aircond",
  },
  {
    id: "p-ewaste",
    material: "E-Waste & Computer Motherboards",
    materialBm: "Sisa Elektronik & Papan Induk Komputer",
    category: "Electronic Waste",
    categoryBm: "Sisa Elektronik",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
    note: "PC motherboards, server boards, processors",
    noteBm: "Papan induk PC/server, CPU, cip litar",
  },
  {
    id: "p-battery",
    material: "Lead-Acid Batteries (Car & Lorry)",
    materialBm: "Bateri Asid-Plumbum (Kereta & Lori)",
    category: "Automotive & Specialized",
    categoryBm: "Automotif & Khusus",
    price: "100(RAM )",
    priceBm: "100(RAM )",
    unit: "price per Kilogramme",
    unitBm: "harga setiap Kilogram",
    note: "Intact automotive and inverter battery units",
    noteBm: "Unit bateri kenderaan dan inverter lengkap",
  },
];

// 9. Process Steps
export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "1. Gather & Separate",
    titleBm: "1. Kumpul & Asingkan",
    description: "Collect your recyclable materials (metals, aluminium, copper, electrical scrap) and group them by type.",
    descriptionBm: "Kumpulkan bahan kitar semula anda (besi, aluminium, tembaga, sisa elektrik) dan asingkan mengikut jenis.",
    iconName: "Boxes",
  },
  {
    stepNumber: 2,
    title: "2. Contact Scrap Collector",
    titleBm: "2. Hubungi Scrap Collector",
    description: "Reach out via WhatsApp, phone, or email to share your location and approximate scrap volume.",
    descriptionBm: "Hubungi kami melalui WhatsApp, telefon, atau e-mel dengan lokasi serta anggaran kuantiti barangan.",
    iconName: "PhoneCall",
  },
  {
    stepNumber: 3,
    title: "3. Agree & Schedule",
    titleBm: "3. Persetujuan & Temu Janji",
    description: "We confirm current scrap pricing and set a convenient date and time window for collection.",
    descriptionBm: "Kami mengesahkan kadar harga semasa serta menetapkan tarikh dan masa pengambilan yang sesuai.",
    iconName: "CalendarCheck",
  },
  {
    stepNumber: 4,
    title: "4. Collection & Recycling",
    titleBm: "4. Pengambilan & Kitar Semula",
    description: "We arrive at your location, weigh materials transparently, and transport scrap for sustainable processing.",
    descriptionBm: "Kami hadir ke lokasi anda, menimbang bahan secara telus di hadapan anda, dan mengangkutnya untuk kitar semula.",
    iconName: "Truck",
  },
];

// 10. Why Choose Us Highlights
export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: "why-1",
    title: "Direct & Fast Contact",
    titleBm: "Komunikasi Terus & Pantas",
    description: "No confusing automated hotlines. Speak directly to real collectors ready to assist you.",
    descriptionBm: "Tiada talian bot yang mengelirukan. Berhubung terus dengan petugas kami yang sedia membantu.",
    iconName: "Headphones",
  },
  {
    id: "why-2",
    title: "Transparent & Honest",
    titleBm: "Telus & Jujur",
    description: "Clear communication on scrap grades, accepted items, and current market valuations.",
    descriptionBm: "Penerangan yang jelas mengenai gred bahan, barangan yang diterima, serta penilaian harga pasaran semasa.",
    iconName: "ShieldCheck",
  },
  {
    id: "why-3",
    title: "Eco-Friendly Routing",
    titleBm: "Laluan Mesra Alam",
    description: "Coordinated logistics designed to minimize vehicle emissions and maximize recycling recovery.",
    descriptionBm: "Logistik teratur dirancang untuk meminimumkan pelepasan karbon dan memaksimumkan pemulihan bahan.",
    iconName: "Leaf",
  },
  {
    id: "why-4",
    title: "Community Dedicated",
    titleBm: "Berkhidmat Untuk Komuniti",
    description: "Dedicated to helping local neighborhoods and business sites stay uncluttered and clean.",
    descriptionBm: "Bertekad membantu kejiranan setempat dan premis perniagaan kekal bersih, kemas, dan teratur.",
    iconName: "HeartHandshake",
  },
  {
    id: "why-5",
    title: "Responsible Recycling",
    titleBm: "Kitar Semula Bertanggungjawab",
    description: "Proper secondary processing ensuring zero hazardous runoff and maximum circular reuse.",
    descriptionBm: "Pemprosesan sekunder teratur memastikan tiada pencemaran dan pemulihan bahan maksimum.",
    iconName: "Recycle",
  },
  {
    id: "why-6",
    title: "Fair Pricing",
    titleBm: "Penetapan Harga Adil",
    description: "Direct BDT market-aligned valuation with honest certified digital weighing scales.",
    descriptionBm: "Penilaian selaras pasaran BDT yang adil dengan alat penimbang digital disahkan.",
    iconName: "Coins",
  },
];

// 11. Environmental Impact Highlights
export const ENVIRONMENTAL_IMPACT: EnvironmentalImpactItem[] = [
  {
    id: "impact-1",
    title: "Reduce Landfill Pressure",
    titleBm: "Kurangkan Tekanan Tapak Pelupusan",
    description: "Prevents bulky recyclables from taking up critical municipal landfill space.",
    descriptionBm: "Mengelakkan barangan kitar semula yang besar daripada memenuhi ruang tapak pelupusan sampah.",
    iconName: "Trash2",
  },
  {
    id: "impact-2",
    title: "Save Manufacturing Energy",
    titleBm: "Jimatkan Tenaga Pembuatan",
    description: "Recycling scrap metals consumes up to 90% less energy than virgin ore processing.",
    descriptionBm: "Kitar semula logam menjimatkan sehingga 90% tenaga berbanding pemprosesan bijih baharu.",
    iconName: "Zap",
  },
  {
    id: "impact-3",
    title: "Lower Greenhouse Emissions",
    titleBm: "Kurangkan Pelepasan Gas Rumah Hijau",
    description: "Diverting scrap materials significantly reduces industrial carbon and greenhouse emissions.",
    descriptionBm: "Mengitar semula bahan buangan dapat mengurangkan pelepasan karbon industri.",
    iconName: "CloudSun",
  },
  {
    id: "impact-4",
    title: "Support Circular Economy",
    titleBm: "Sokong Ekonomi Kitaran",
    description: "Bolsters local circular economies and promotes responsible domestic processing.",
    descriptionBm: "Memperkasakan ekonomi kitaran tempatan dan mempromosikan pemprosesan barangan yang bertanggungjawab.",
    iconName: "Factory",
  },
  {
    id: "impact-5",
    title: "Conserve Natural Resources",
    titleBm: "Pelihara Sumber Semula Jadi",
    description: "Reduces virgin ore mining, refining energy, and raw material depletion.",
    descriptionBm: "Mengurangkan aktiviti perlombongan bijih besi dan penggunaan tenaga pemprosesan mentah.",
    iconName: "Globe",
  },
  {
    id: "impact-6",
    title: "Reduce Unnecessary Disposal",
    titleBm: "Kurangkan Pembaziran Bahan",
    description: "Minimizes unnecessary waste and lowers overall ecological footprint.",
    descriptionBm: "Mengurangkan pembakaran sisa dan merendahkan jejak karbon alam sekitar secara menyeluruh.",
    iconName: "Footprints",
  },
];

// 12. Gallery Items
export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: "gal-armored-cables",
    title: "Heavy Armored Power Cables",
    titleBm: "Kabel Kuasa & Wayar Tembaga Berperisai",
    category: "Copper",
    description: "Coiled heavy-duty armored electrical power cables and thick copper wiring bundles sorted for high-yield copper recovery.",
    descriptionBm: "Gulungan kabel elektrik berperisai tugas berat dan wayar tembaga tebal sedia untuk pemulihan tembaga bernilai tinggi.",
    imageUrl: "/assets/scrap_armored_cable.jpg",
  },
  {
    id: "gal-contactors-breakers",
    title: "Industrial Electrical Contactors & Breakers",
    titleBm: "Kontaktor Elektrik Industri & Pemutus Litar",
    category: "Motors",
    description: "Salvaged industrial electrical switchgear, contactors, and control breakers collected for silver contact and metal recovery.",
    descriptionBm: "Suis kawalan elektrik industri, kontaktor, dan pemutus litar terpakai untuk pemulihan logam dan perak.",
    imageUrl: "/assets/scrap_contactors_switchgear.jpg",
  },
  {
    id: "gal-lighting-truck",
    title: "High-Bay Lighting & Metal Fixtures Collection",
    titleBm: "Pengambilan Lampu Industri & Kelengkapan Logam",
    category: "Collection",
    description: "Industrial high-bay aluminum reflector lamps and metal fittings loaded onto our collection lorry for recycling.",
    descriptionBm: "Lampu reflektor aluminium industri dan peralatan logam yang dimuatkan ke atas lori kutipan barang lusuh kami.",
    imageUrl: "/assets/scrap_lighting_pickup.jpg",
  },
  {
    id: "gal-al-profiles",
    title: "Aluminium Profiles & Extrusions",
    titleBm: "Profil Aluminium & Keratan Seni Bina",
    category: "Aluminium",
    description: "Sorted window frames and architectural extrusion profiles prepared for recycling.",
    descriptionBm: "Bingkai tingkap dan profil ekstrusi aluminium yang diasingkan kemas untuk kitar semula.",
    imageUrl: "/assets/scrap_aluminium_profiles.jpg",
  },
  {
    id: "gal-ewaste-laptops",
    title: "Scrap Laptops & E-Waste Lot",
    titleBm: "Komputer Riba Terpakai & Sisa E-Waste",
    category: "E-Waste",
    description: "Sorted scrap laptops, motherboards, and electronic components collected for eco-friendly refining.",
    descriptionBm: "Koleksi komputer riba terpakai, papan induk, dan komponen elektronik untuk kitar semula lestari.",
    imageUrl: "/assets/scrap_laptops_ewaste.jpg",
  },
  {
    id: "gal-2",
    title: "High-Grade Copper Pipes & Wire",
    titleBm: "Paip & Wayar Tembaga Gred Tinggi",
    category: "Copper",
    description: "Bright copper cables and stripped plumbing pipes ready for remelting.",
    descriptionBm: "Kabel tembaga berkilat dan paip tembaga bersih sedia untuk dicairkan semula.",
    imageUrl: "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "gal-3",
    title: "Heavy Melting Steel & Iron Scrap",
    titleBm: "Besi Buruk & Keluli Binaan Berat",
    category: "Iron & Steel",
    description: "Recycled structural steel and scrap iron ready for furnace processing.",
    descriptionBm: "Besi struktur dan besi buruk berat sedia untuk peleburan relau.",
    imageUrl: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "gal-4",
    title: "Industrial Electric Motors & Pumps",
    titleBm: "Motor Elektrik Industri & Pam",
    category: "Motors",
    description: "Copper-wound electric motors collected for non-ferrous metal recovery.",
    descriptionBm: "Motor elektrik bergulung tembaga untuk pemulihan logam bernilai tinggi.",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "gal-5",
    title: "E-Waste & Computer Circuit Boards",
    titleBm: "Sisa Elektronik & Papan Litar PC",
    category: "E-Waste",
    description: "Electronic circuit boards and server components sorted for eco-friendly refining.",
    descriptionBm: "Papan litar elektronik dan perkakasan komputer untuk penapisan lestari.",
    imageUrl: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "gal-6",
    title: "Eco-Friendly Scrap Collection",
    titleBm: "Perkhidmatan Pengambilan Barang Lusuh Mesra Alam",
    category: "Collection",
    description: "Prompt on-site doorstep scrap collection routing supporting local businesses and homes.",
    descriptionBm: "Laluan pengumpulan barang lusuh khas ke pintu rumah dan premis perniagaan.",
    imageUrl: "/assets/scrap_value_hero.jpg",
  },
];

export const SCRAP_PRICES_NOTE_EN = "Prices are indicative for clean, segregated recyclables. Rates may vary based on market conditions, condition, and total volume. Contact 100(RAM ) for current daily rates and large-volume inquiries.";
export const SCRAP_PRICES_NOTE_BM = "Harga yang dipaparkan adalah anggaran untuk bahan kitar semula yang bersih dan telah diasingkan. Kadar tertakluk kepada perubahan pasaran semasa, kualiti, dan kuantiti muatan. Hubungi 100(RAM ) untuk pengesahan kadar harian dan pertanyaan kuantiti pukal.";

/**
 * URL and Contact Action Helper Utilities
 */
export function getWhatsAppUrl(customMessage?: string, lang?: string | boolean): { url: string; isConfigured: boolean } {
  if (!WHATSAPP_NUMBER || WHATSAPP_NUMBER.trim() === "") {
    return { url: "#", isConfigured: false };
  }
  const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
  const isBm = lang === 'bm' || lang === true;
  const defaultMsg = isBm ? DEFAULT_WHATSAPP_MESSAGE_BM : DEFAULT_WHATSAPP_MESSAGE_EN;
  const message = encodeURIComponent(customMessage || defaultMsg);
  return {
    url: `https://wa.me/${cleanNumber}?text=${message}`,
    isConfigured: true,
  };
}

export function getPhoneUrl(): { url: string; isConfigured: boolean; display: string } {
  if (!BUSINESS_PHONE || BUSINESS_PHONE.trim() === "") {
    return { url: "#", isConfigured: false, display: "Phone number coming soon" };
  }
  return {
    url: `tel:${BUSINESS_PHONE.replace(/[^0-9+]/g, "")}`,
    isConfigured: true,
    display: BUSINESS_PHONE,
  };
}

export function getEmailUrl(customSubject?: string, customBody?: string, lang?: string | boolean): { url: string; isConfigured: boolean; display: string } {
  if (!BUSINESS_EMAIL || BUSINESS_EMAIL.trim() === "") {
    return { url: "#", isConfigured: false, display: "Business email coming soon" };
  }
  const isBm = lang === 'bm' || lang === true;
  const defaultSubj = isBm ? DEFAULT_EMAIL_SUBJECT_BM : DEFAULT_EMAIL_SUBJECT_EN;
  const defaultBody = isBm ? DEFAULT_EMAIL_BODY_BM : DEFAULT_EMAIL_BODY_EN;
  const subject = encodeURIComponent(customSubject || defaultSubj);
  const body = encodeURIComponent(customBody || defaultBody);
  return {
    url: `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`,
    isConfigured: true,
    display: BUSINESS_EMAIL,
  };
}

export function getFacebookUrl(): { url: string; isConfigured: boolean; display: string } {
  if (!FACEBOOK_URL || FACEBOOK_URL.trim() === "") {
    return { url: "#", isConfigured: false, display: "Facebook page coming soon" };
  }
  return {
    url: FACEBOOK_URL,
    isConfigured: true,
    display: "Message our Facebook page",
  };
}

export function getLocationDisplay(lang?: string | boolean): { text: string; isConfigured: boolean } {
  const isBm = lang === 'bm' || lang === true;
  const addr = isBm && BUSINESS_ADDRESS_BM ? BUSINESS_ADDRESS_BM : BUSINESS_ADDRESS;
  if (!addr || addr.trim() === "") {
    return { text: isBm ? "Lokasi operasi akan dimaklumkan" : "Location coming soon", isConfigured: false };
  }
  return { text: addr, isConfigured: true };
}

export function getHoursDisplay(lang?: string | boolean): { text: string; isConfigured: boolean } {
  const isBm = lang === 'bm' || lang === true;
  const hrs = isBm && BUSINESS_HOURS_BM ? BUSINESS_HOURS_BM : BUSINESS_HOURS;
  if (!hrs || hrs.trim() === "") {
    return { text: isBm ? "Waktu operasi akan dimaklumkan" : "Business hours coming soon", isConfigured: false };
  }
  return { text: hrs, isConfigured: true };
}
