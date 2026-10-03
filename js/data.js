/**
 * A.S ELECTRICIAN - Material Estimation & Site Requisition System
 * Master Product Catalog Data
 *
 * All plumbing items sourced from reference sheet.
 * Default quantity is set to 0 as requested so the electrician can select only required materials.
 * Original reference sheet quantities are preserved in `refQty` for quick guidance.
 */

const PRODUCT_CATALOG = {
  plumbing: [
    {
      id: "plumb-1",
      sno: 1,
      name: '1" CPVC Pipe',
      defaultQty: 0,
      refQty: 30,
      unit: "Nos",
      subcategory: "pipes",
      desc: "Standard 1-inch CPVC pressure pipe (SDR 11 / Class 1)"
    },
    {
      id: "plumb-2",
      sno: 2,
      name: '1" CPVC Elbow',
      defaultQty: 0,
      refQty: 65,
      unit: "Nos",
      subcategory: "fittings",
      desc: "90-degree 1-inch CPVC solvent weld elbow"
    },
    {
      id: "plumb-3",
      sno: 3,
      name: '1" CPVC Tee',
      defaultQty: 0,
      refQty: 40,
      unit: "Nos",
      subcategory: "fittings",
      desc: "Equal 1-inch CPVC three-way tee connector"
    },
    {
      id: "plumb-4",
      sno: 4,
      name: '1" CPVC Shoe',
      defaultQty: 0,
      refQty: 40,
      unit: "Nos",
      subcategory: "fittings",
      desc: '1" CPVC offset crossover / bend shoe'
    },
    {
      id: "plumb-5",
      sno: 5,
      name: '1 × ½" CPVC Brass Elbow',
      defaultQty: 0,
      refQty: 10,
      unit: "Nos",
      subcategory: "fittings",
      desc: '1" to 1/2" CPVC female threaded brass insert elbow'
    },
    {
      id: "plumb-6",
      sno: 6,
      name: '1 × ½" CPVC Brass Tee',
      defaultQty: 0,
      refQty: 6,
      unit: "Nos",
      subcategory: "fittings",
      desc: '1" x 1/2" CPVC brass threaded branch tee'
    },
    {
      id: "plumb-7",
      sno: 7,
      name: '½" End Plug',
      defaultQty: 0,
      refQty: 12,
      unit: "Nos",
      subcategory: "fittings",
      desc: '1/2" Male threaded testing end plug'
    },
    {
      id: "plumb-8",
      sno: 8,
      name: '1" CPVC End Cap',
      defaultQty: 0,
      refQty: 16,
      unit: "Nos",
      subcategory: "fittings",
      desc: '1" CPVC socket end cap'
    },
    {
      id: "plumb-9",
      sno: 9,
      name: '1" CPVC Coupler',
      defaultQty: 0,
      refQty: 12,
      unit: "Nos",
      subcategory: "fittings",
      desc: '1" CPVC socket joint coupler'
    },
    {
      id: "plumb-10",
      sno: 10,
      name: "CPVC Solvent 118 ml",
      defaultQty: 0,
      refQty: 8,
      unit: "Nos",
      subcategory: "solvents",
      desc: "Heavy-duty CPVC adhesive solvent cement can (118 ml)"
    },
    {
      id: "plumb-11",
      sno: 11,
      name: '2½" PVC Pipe',
      defaultQty: 0,
      refQty: 2,
      unit: "Nos",
      subcategory: "pipes",
      desc: "2.5-inch PVC drainage / wastewater pipe"
    },
    {
      id: "plumb-12",
      sno: 12,
      name: '2½" PVC Elbow',
      defaultQty: 0,
      refQty: 8,
      unit: "Nos",
      subcategory: "fittings",
      desc: "2.5-inch 90-degree PVC drainage elbow"
    },
    {
      id: "plumb-13",
      sno: 13,
      name: "PVC Solvent 118 ml",
      defaultQty: 0,
      refQty: 8,
      unit: "Nos",
      subcategory: "solvents",
      desc: "Standard PVC cement adhesive can (118 ml)"
    },
    {
      id: "plumb-14",
      sno: 14,
      name: '2½" PVC Shoe',
      defaultQty: 0,
      refQty: 12,
      unit: "Nos",
      subcategory: "fittings",
      desc: "2.5-inch PVC drainage bend shoe"
    },
    {
      id: "plumb-15",
      sno: 15,
      name: '4 × 2½" Multi Drop',
      defaultQty: 0,
      refQty: 6,
      unit: "Nos",
      subcategory: "fittings",
      desc: '4" to 2.5" Multi-drop reducer drainage connector'
    },
    {
      id: "plumb-16",
      sno: 16,
      name: '1½" PVC Pipe',
      defaultQty: 0,
      refQty: 2,
      unit: "Nos",
      subcategory: "pipes",
      desc: "1.5-inch PVC waste pipe"
    },
    {
      id: "plumb-17",
      sno: 17,
      name: '1½" PVC Elbow',
      defaultQty: 0,
      refQty: 12,
      unit: "Nos",
      subcategory: "fittings",
      desc: "1.5-inch PVC 90-degree elbow"
    },
    {
      id: "plumb-18",
      sno: 18,
      name: '1½" Long Bend',
      defaultQty: 0,
      refQty: 6,
      unit: "Nos",
      subcategory: "fittings",
      desc: "1.5-inch PVC sweep / long radius bend"
    },
    {
      id: "plumb-19",
      sno: 19,
      name: '1½" PVC Shoe',
      defaultQty: 0,
      refQty: 12,
      unit: "Nos",
      subcategory: "fittings",
      desc: "1.5-inch PVC offset pipe shoe"
    },
    {
      id: "plumb-20",
      sno: 20,
      name: '1½" PVC End Cap',
      defaultQty: 0,
      refQty: 12,
      unit: "Nos",
      subcategory: "fittings",
      desc: "1.5-inch PVC closing socket end cap"
    },
    {
      id: "plumb-21",
      sno: 21,
      name: '4" PVC Pipe',
      defaultQty: 0,
      refQty: 6,
      unit: "Nos",
      subcategory: "pipes",
      desc: '4-inch SWR soil / waste drainage pipe'
    },
    {
      id: "plumb-22",
      sno: 22,
      name: '4" PVC Elbow',
      defaultQty: 0,
      refQty: 8,
      unit: "Nos",
      subcategory: "fittings",
      desc: '4-inch 90-degree SWR PVC elbow'
    },
    {
      id: "plumb-23",
      sno: 23,
      name: '4" PVC Shoe',
      defaultQty: 0,
      refQty: 16,
      unit: "Nos",
      subcategory: "fittings",
      desc: '4-inch PVC rainwater discharge shoe / cowl'
    },
    {
      id: "plumb-24",
      sno: 24,
      name: '1" Hacksaw Blade',
      defaultQty: 0,
      refQty: 10,
      unit: "Nos",
      subcategory: "tools",
      desc: "Heavy-duty bimetal pipe cutting hacksaw blade"
    },
    {
      id: "plumb-25",
      sno: 25,
      name: '5" Steel Cutter',
      defaultQty: 0,
      refQty: 6,
      unit: "Nos",
      subcategory: "tools",
      desc: '5-inch metal cutting circular abrasive wheel'
    },
    {
      id: "plumb-26",
      sno: 26,
      name: '5" Wall Cutter (Speed)',
      defaultQty: 0,
      refQty: 12,
      unit: "Nos",
      subcategory: "tools",
      desc: '5-inch diamond masonry wall chasing cutting blade'
    },
    {
      id: "plumb-27",
      sno: 27,
      name: '1½" Steel Nail',
      defaultQty: 0,
      refQty: 2,
      unit: "kg",
      subcategory: "tools",
      desc: "1.5-inch hardened concrete clamp steel nails"
    },
    {
      id: "plumb-28",
      sno: 28,
      name: '¾" Teflon Tape',
      defaultQty: 0,
      refQty: 30,
      unit: "Nos",
      subcategory: "solvents",
      desc: "3/4-inch PTFE high density thread seal tape roll"
    },
    {
      id: "plumb-29",
      sno: 29,
      name: '1¼ × 1 CPVC Push',
      defaultQty: 0,
      refQty: 6,
      unit: "Nos",
      subcategory: "fittings",
      desc: '1¼" to 1" CPVC push fit / bush adapter'
    },
    {
      id: "plumb-30",
      sno: 30,
      name: '1¼ × 1 CPVC Reducer',
      defaultQty: 0,
      refQty: 6,
      unit: "Nos",
      subcategory: "fittings",
      desc: '1¼" to 1" CPVC reducing socket coupler'
    },
    {
      id: "plumb-31",
      sno: 31,
      name: '1¼" CPVC Pipe',
      defaultQty: 0,
      refQty: 2,
      unit: "Nos",
      subcategory: "pipes",
      desc: "1.25-inch CPVC high pressure pipe"
    },
    {
      id: "plumb-32",
      sno: 32,
      name: '1¼" CPVC Elbow',
      defaultQty: 0,
      refQty: 6,
      unit: "Nos",
      subcategory: "fittings",
      desc: "1.25-inch CPVC 90-degree elbow"
    },
    {
      id: "plumb-33",
      sno: 33,
      name: '1¼" CPVC Tee',
      defaultQty: 0,
      refQty: 8,
      unit: "Nos",
      subcategory: "fittings",
      desc: "1.25-inch CPVC equal tee connector"
    },
    {
      id: "plumb-34",
      sno: 34,
      name: '1¼" CPVC Shoe',
      defaultQty: 0,
      refQty: 10,
      unit: "Nos",
      subcategory: "fittings",
      desc: "1.25-inch CPVC crossover shoe"
    },
    {
      id: "plumb-35",
      sno: 35,
      name: '1¼" CPVC Coupler',
      defaultQty: 0,
      refQty: 8,
      unit: "Nos",
      subcategory: "fittings",
      desc: "1.25-inch CPVC socket coupling sleeve"
    },
    {
      id: "plumb-36",
      sno: 36,
      name: '1½" CPVC Coupler',
      defaultQty: 0,
      refQty: 12,
      unit: "Nos",
      subcategory: "fittings",
      desc: "1.5-inch CPVC socket joint coupler"
    },
    {
      id: "plumb-37",
      sno: 37,
      name: '1½ × 1" CPVC Push',
      defaultQty: 0,
      refQty: 35,
      unit: "Nos",
      subcategory: "fittings",
      desc: '1½" to 1" CPVC reducing bush / push adapter'
    },
    {
      id: "plumb-38",
      sno: 38,
      name: '1½" CPVC Tee',
      defaultQty: 0,
      refQty: 30,
      unit: "Nos",
      subcategory: "fittings",
      desc: "1.5-inch CPVC equal three-way branch tee"
    },
    {
      id: "plumb-39",
      sno: 39,
      name: '1½" CPVC Elbow',
      defaultQty: 0,
      refQty: 45,
      unit: "Nos",
      subcategory: "fittings",
      desc: "1.5-inch CPVC 90-degree pressure elbow"
    },
    {
      id: "plumb-40",
      sno: 40,
      name: '1½" CPVC Union',
      defaultQty: 0,
      refQty: 8,
      unit: "Nos",
      subcategory: "valves",
      desc: "1.5-inch CPVC dismountable pipe union fitting"
    },
    {
      id: "plumb-41",
      sno: 41,
      name: '1½" CPVC Shoe',
      defaultQty: 0,
      refQty: 14,
      unit: "Nos",
      subcategory: "fittings",
      desc: "1.5-inch CPVC crossover / shoe bend"
    },
    {
      id: "plumb-42",
      sno: 42,
      name: "Thread & Chellack",
      defaultQty: 0,
      refQty: 2,
      unit: "Set",
      subcategory: "solvents",
      desc: "Cotton hemp thread bundle and jointing shellac paste set"
    },
    {
      id: "plumb-43",
      sno: 43,
      name: '1½" CPVC Ball Valve',
      defaultQty: 0,
      refQty: 12,
      unit: "Nos",
      subcategory: "valves",
      desc: "1.5-inch CPVC heavy quarter-turn shutoff ball valve"
    },
    {
      id: "plumb-44",
      sno: 44,
      name: '1½" CPVC Pipe',
      defaultQty: 0,
      refQty: 30,
      unit: "Nos",
      subcategory: "pipes",
      desc: "1.5-inch CPVC high pressure plumbing pipe"
    }
  ],

  electrical: [
    {
      id: "elec-1",
      sno: 1,
      name: "1.0 sq mm Copper Wire Coil (90m)",
      defaultQty: 0,
      refQty: 2,
      unit: "Coil",
      subcategory: "wires",
      desc: "FR PVC insulated single core copper wire for lighting circuits"
    },
    {
      id: "elec-2",
      sno: 2,
      name: "1.5 sq mm Copper Wire Coil (90m)",
      defaultQty: 0,
      refQty: 4,
      unit: "Coil",
      subcategory: "wires",
      desc: "FR PVC copper wire for 6A socket points and general loads"
    },
    {
      id: "elec-3",
      sno: 3,
      name: "2.5 sq mm Copper Wire Coil (90m)",
      defaultQty: 0,
      refQty: 3,
      unit: "Coil",
      subcategory: "wires",
      desc: "Heavy-duty wire for 16A power sockets, ACs and geysers"
    },
    {
      id: "elec-4",
      sno: 4,
      name: "4.0 sq mm Copper Wire Coil (90m)",
      defaultQty: 0,
      refQty: 1,
      unit: "Coil",
      subcategory: "wires",
      desc: "Sub-main feeder wire for distribution board connections"
    },
    {
      id: "elec-5",
      sno: 5,
      name: "6.0 sq mm Copper Wire Coil (90m)",
      defaultQty: 0,
      refQty: 1,
      unit: "Coil",
      subcategory: "wires",
      desc: "Main incoming power cable from meter box"
    },
    {
      id: "elec-6",
      sno: 6,
      name: "3-Core Submersible Cable",
      defaultQty: 0,
      refQty: 50,
      unit: "Meters",
      subcategory: "wires",
      desc: "Waterproof flat 3-core copper pump cable (4 sq mm)"
    },
    {
      id: "elec-7",
      sno: 7,
      name: "4-Core Armoured Cable",
      defaultQty: 0,
      refQty: 35,
      unit: "Meters",
      subcategory: "wires",
      desc: "Underground armoured aluminium/copper 4-core cable"
    },
    {
      id: "elec-8",
      sno: 8,
      name: "20mm PVC Conduit Pipe",
      defaultQty: 0,
      refQty: 30,
      unit: "Nos",
      subcategory: "conduits",
      desc: "Medium duty rigid PVC electrical wiring conduit pipe"
    },
    {
      id: "elec-9",
      sno: 9,
      name: "25mm PVC Conduit Pipe",
      defaultQty: 0,
      refQty: 25,
      unit: "Nos",
      subcategory: "conduits",
      desc: "Heavy gauge PVC electrical conduit for main feeds"
    },
    {
      id: "elec-10",
      sno: 10,
      name: "20mm Conduit Elbow",
      defaultQty: 0,
      refQty: 40,
      unit: "Nos",
      subcategory: "conduits",
      desc: "Standard 20mm PVC conduit 90-degree corner elbow"
    },
    {
      id: "elec-11",
      sno: 11,
      name: "25mm Conduit Elbow",
      defaultQty: 0,
      refQty: 30,
      unit: "Nos",
      subcategory: "conduits",
      desc: "25mm PVC conduit bend elbow"
    },
    {
      id: "elec-12",
      sno: 12,
      name: "20mm Conduit Tee",
      defaultQty: 0,
      refQty: 20,
      unit: "Nos",
      subcategory: "conduits",
      desc: "3-way inspection tee fitting for 20mm conduit"
    },
    {
      id: "elec-13",
      sno: 13,
      name: "25mm Conduit Tee",
      defaultQty: 0,
      refQty: 15,
      unit: "Nos",
      subcategory: "conduits",
      desc: "3-way PVC branch tee for 25mm conduit"
    },
    {
      id: "elec-14",
      sno: 14,
      name: "20mm 4-Way Deep Junction Box",
      defaultQty: 0,
      refQty: 18,
      unit: "Nos",
      subcategory: "conduits",
      desc: "Ceiling & wall circular 4-way PVC junction box with lid"
    },
    {
      id: "elec-15",
      sno: 15,
      name: "6A 1-Way Modular Switch",
      defaultQty: 0,
      refQty: 45,
      unit: "Nos",
      subcategory: "switches",
      desc: "Smooth rocker 6A 240V modular switch (White)"
    },
    {
      id: "elec-16",
      sno: 16,
      name: "16A Power Modular Switch",
      defaultQty: 0,
      refQty: 12,
      unit: "Nos",
      subcategory: "switches",
      desc: "Heavy-duty 16A modular switch with indicator"
    },
    {
      id: "elec-17",
      sno: 17,
      name: "6A 3-Pin Modular Socket",
      defaultQty: 0,
      refQty: 30,
      unit: "Nos",
      subcategory: "switches",
      desc: "Child safety shuttered 3-pin round modular socket"
    },
    {
      id: "elec-18",
      sno: 18,
      name: "16A 6-Pin Multi Socket",
      defaultQty: 0,
      refQty: 12,
      unit: "Nos",
      subcategory: "switches",
      desc: "Combined 6A/16A universal power socket with shutter"
    },
    {
      id: "elec-19",
      sno: 19,
      name: "Single Pole 16A MCB (C-Curve)",
      defaultQty: 0,
      refQty: 10,
      unit: "Nos",
      subcategory: "distribution",
      desc: "10kA breaking capacity miniature circuit breaker"
    },
    {
      id: "elec-20",
      sno: 20,
      name: "Single Pole 25A MCB (C-Curve)",
      defaultQty: 0,
      refQty: 6,
      unit: "Nos",
      subcategory: "distribution",
      desc: "Power load protection single-pole MCB"
    },
    {
      id: "elec-21",
      sno: 21,
      name: "Double Pole 32A Isolator",
      defaultQty: 0,
      refQty: 2,
      unit: "Nos",
      subcategory: "distribution",
      desc: "2-Pole main switch disconnector for floor DB"
    },
    {
      id: "elec-22",
      sno: 22,
      name: "8-Way SPN Distribution Board",
      defaultQty: 0,
      refQty: 2,
      unit: "Nos",
      subcategory: "distribution",
      desc: "Single pole & neutral metal flush enclosure with acrylic door"
    },
    {
      id: "elec-23",
      sno: 23,
      name: "12-Way TPN Distribution Board",
      defaultQty: 0,
      refQty: 1,
      unit: "Nos",
      subcategory: "distribution",
      desc: "Three phase 12-way vertical distribution board"
    },
    {
      id: "elec-24",
      sno: 24,
      name: "15W Round LED Concealed Light",
      defaultQty: 0,
      refQty: 24,
      unit: "Nos",
      subcategory: "lighting",
      desc: "Warm white / Cool daylight ceiling slim panel downlight"
    },
    {
      id: "elec-25",
      sno: 25,
      name: "20W LED Batten Light (4ft)",
      defaultQty: 0,
      refQty: 14,
      unit: "Nos",
      subcategory: "lighting",
      desc: "Surface mount high-lumen LED tube fixture"
    },
    {
      id: "elec-26",
      sno: 26,
      name: "1200mm High Speed Ceiling Fan",
      defaultQty: 0,
      refQty: 8,
      unit: "Nos",
      subcategory: "lighting",
      desc: "Energy efficient 3-blade decorative ceiling fan"
    },
    {
      id: "elec-27",
      sno: 27,
      name: "Modular Plate (8 Module)",
      defaultQty: 0,
      refQty: 12,
      unit: "Nos",
      subcategory: "switches",
      desc: "8-Module wall cover plate with inner mounting grid"
    },
    {
      id: "elec-28",
      sno: 28,
      name: "Modular Plate (4 Module)",
      defaultQty: 0,
      refQty: 10,
      unit: "Nos",
      subcategory: "switches",
      desc: "4-Module flush front cover plate"
    },
    {
      id: "elec-29",
      sno: 29,
      name: "12-Way Terminal Connector Strip",
      defaultQty: 0,
      refQty: 10,
      unit: "Nos",
      subcategory: "accessories",
      desc: "Polyamide brass insulated terminal connector block"
    },
    {
      id: "elec-30",
      sno: 30,
      name: "200mm Nylon Cable Tie (100 pcs)",
      defaultQty: 0,
      refQty: 5,
      unit: "Pack",
      subcategory: "accessories",
      desc: "Heavy-duty UV resistant self-locking wire ties"
    },
    {
      id: "elec-31",
      sno: 31,
      name: "PVC Electrical Insulation Tape",
      defaultQty: 0,
      refQty: 15,
      unit: "Rolls",
      subcategory: "accessories",
      desc: "Standard ISI grade fire retardant vinyl insulation tape"
    },
    {
      id: "elec-32",
      sno: 32,
      name: "20mm Flexible Conduit Pipe (50m)",
      defaultQty: 0,
      refQty: 2,
      unit: "Bundle",
      subcategory: "conduits",
      desc: "Corrugated PVC flexible pipe for drop connections"
    }
  ]
};

// Subcategory definitions for filtering pills
const SUBCATEGORIES = {
  plumbing: [
    { key: "all", label: "All Items" },
    { key: "pipes", label: "Pipes & Conduits" },
    { key: "fittings", label: "Elbows, Tees & Couplers" },
    { key: "valves", label: "Valves & Unions" },
    { key: "solvents", label: "Solvents & Adhesives" },
    { key: "tools", label: "Cutters & Tools" }
  ],
  electrical: [
    { key: "all", label: "All Items" },
    { key: "wires", label: "Wires & Cables" },
    { key: "conduits", label: "Conduits & Junctions" },
    { key: "switches", label: "Switches & Sockets" },
    { key: "distribution", label: "DBs & MCBs" },
    { key: "lighting", label: "Lights & Fans" },
    { key: "accessories", label: "Tapes & Accessories" }
  ]
};
