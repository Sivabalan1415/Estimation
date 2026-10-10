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
    // --- WORK: ROOF PIPE LINE (Universal Slab Casting Materials 1 to 15) ---
    {
      id: "elec-r1",
      sno: 1,
      name: '5" Fan Metal Box',
      defaultQty: 0,
      refQty: 2,
      unit: "Nos",
      subcategory: "roof_pipeline",
      desc: "5-inch heavy metal fan ceiling box with clamp hook for roof slab casting"
    },
    {
      id: "elec-r2",
      sno: 2,
      name: '1" 2mm Electrical Pipe',
      defaultQty: 0,
      refQty: 30,
      unit: "Nos",
      subcategory: "roof_pipeline",
      desc: "1-inch heavy duty 2mm PVC rigid electrical roof slab conduit pipe"
    },
    {
      id: "elec-r3",
      sno: 3,
      name: '¾" 2mm Electrical Pipe',
      defaultQty: 0,
      refQty: 15,
      unit: "Nos",
      subcategory: "roof_pipeline",
      desc: "3/4-inch heavy duty 2mm PVC electrical conduit pipe for roof slab"
    },
    {
      id: "elec-r4",
      sno: 4,
      name: '1" Bend',
      defaultQty: 0,
      refQty: 0,
      unit: "Nos",
      subcategory: "roof_pipeline",
      desc: "1-inch heavy PVC conduit 90° smooth bend for roof pipe line"
    },
    {
      id: "elec-r5",
      sno: 5,
      name: '¾" Bend',
      defaultQty: 0,
      refQty: 10,
      unit: "Nos",
      subcategory: "roof_pipeline",
      desc: "3/4-inch heavy PVC conduit smooth bend for slab drop lines"
    },
    {
      id: "elec-r6",
      sno: 6,
      name: '1" Depth Box 4 Way',
      defaultQty: 0,
      refQty: 0,
      unit: "Nos",
      subcategory: "roof_pipeline",
      desc: "1-inch circular 4-way deep ceiling junction box for concrete slab"
    },
    {
      id: "elec-r7",
      sno: 7,
      name: '¾" Depth Box',
      defaultQty: 0,
      refQty: 0,
      unit: "Nos",
      subcategory: "roof_pipeline",
      desc: "3/4-inch deep ceiling round junction box for roof slab wiring"
    },
    {
      id: "elec-r8",
      sno: 8,
      name: '118 ml PVC Solved',
      defaultQty: 0,
      refQty: 5,
      unit: "Nos",
      subcategory: "roof_pipeline",
      desc: "118 ml quick-weld PVC pipe solvent adhesive cement"
    },
    {
      id: "elec-r9",
      sno: 9,
      name: '1" Cupler',
      defaultQty: 0,
      refQty: 30,
      unit: "Nos",
      subcategory: "roof_pipeline",
      desc: "1-inch PVC conduit pipe joint coupler sleeve"
    },
    {
      id: "elec-r10",
      sno: 10,
      name: '¾" Cupler',
      defaultQty: 0,
      refQty: 15,
      unit: "Nos",
      subcategory: "roof_pipeline",
      desc: "3/4-inch PVC conduit pipe socket joint coupler"
    },
    {
      id: "elec-r11",
      sno: 11,
      name: '1" Hacksaw Blade',
      defaultQty: 0,
      refQty: 4,
      unit: "Nos",
      subcategory: "roof_pipeline",
      desc: "1-inch heavy bimetal pipe cutting hacksaw blade"
    },
    {
      id: "elec-r12",
      sno: 12,
      name: '3" Packing Tap',
      defaultQty: 0,
      refQty: 2,
      unit: "Rolls",
      subcategory: "roof_pipeline",
      desc: "3-inch wide waterproof packing tape for sealing ceiling fan boxes"
    },
    {
      id: "elec-r13",
      sno: 13,
      name: 'Insulation Tap',
      defaultQty: 0,
      refQty: 10,
      unit: "Rolls",
      subcategory: "roof_pipeline",
      desc: "Electrical PVC vinyl insulation adhesive tape roll"
    },
    {
      id: "elec-r14",
      sno: 14,
      name: '½" Hacksaw Blade',
      defaultQty: 0,
      refQty: 3,
      unit: "Nos",
      subcategory: "roof_pipeline",
      desc: "1/2-inch fine cut hacksaw blade for conduit cutting"
    },
    {
      id: "elec-r15",
      sno: 15,
      name: 'Fancy Box',
      defaultQty: 0,
      refQty: 3,
      unit: "Nos",
      subcategory: "roof_pipeline",
      desc: "Concealed ceiling spot light / fancy light junction box"
    },

    {
      id: "elec-1",
      sno: 16,
      name: "1.0 sq mm Copper Wire Coil (90m)",
      defaultQty: 0,
      refQty: 2,
      unit: "Coil",
      subcategory: "wires",
      desc: "FR PVC insulated single core copper wire for lighting circuits"
    },
    {
      id: "elec-2",
      sno: 17,
      name: "1.5 sq mm Copper Wire Coil (90m)",
      defaultQty: 0,
      refQty: 4,
      unit: "Coil",
      subcategory: "wires",
      desc: "FR PVC copper wire for 6A socket points and general loads"
    },
    {
      id: "elec-3",
      sno: 18,
      name: "2.5 sq mm Copper Wire Coil (90m)",
      defaultQty: 0,
      refQty: 3,
      unit: "Coil",
      subcategory: "wires",
      desc: "Heavy-duty wire for 16A power sockets, ACs and geysers"
    },
    {
      id: "elec-4",
      sno: 19,
      name: "4.0 sq mm Copper Wire Coil (90m)",
      defaultQty: 0,
      refQty: 1,
      unit: "Coil",
      subcategory: "wires",
      desc: "Sub-main feeder wire for distribution board connections"
    },
    {
      id: "elec-5",
      sno: 20,
      name: "6.0 sq mm Copper Wire Coil (90m)",
      defaultQty: 0,
      refQty: 1,
      unit: "Coil",
      subcategory: "wires",
      desc: "Main incoming power cable from meter box"
    },
    {
      id: "elec-6",
      sno: 21,
      name: "3-Core Submersible Cable",
      defaultQty: 0,
      refQty: 50,
      unit: "Meters",
      subcategory: "wires",
      desc: "Waterproof flat 3-core copper pump cable (4 sq mm)"
    },
    {
      id: "elec-7",
      sno: 22,
      name: "4-Core Armoured Cable",
      defaultQty: 0,
      refQty: 35,
      unit: "Meters",
      subcategory: "wires",
      desc: "Underground armoured aluminium/copper 4-core cable"
    },
    {
      id: "elec-8",
      sno: 23,
      name: "20mm PVC Conduit Pipe",
      defaultQty: 0,
      refQty: 30,
      unit: "Nos",
      subcategory: "conduits",
      desc: "Medium duty rigid PVC electrical wiring conduit pipe"
    },
    {
      id: "elec-9",
      sno: 24,
      name: "25mm PVC Conduit Pipe",
      defaultQty: 0,
      refQty: 25,
      unit: "Nos",
      subcategory: "conduits",
      desc: "Heavy gauge PVC electrical conduit for main feeds"
    },
    {
      id: "elec-10",
      sno: 25,
      name: "20mm Conduit Elbow",
      defaultQty: 0,
      refQty: 40,
      unit: "Nos",
      subcategory: "conduits",
      desc: "Standard 20mm PVC conduit 90-degree corner elbow"
    },
    {
      id: "elec-11",
      sno: 26,
      name: "25mm Conduit Elbow",
      defaultQty: 0,
      refQty: 30,
      unit: "Nos",
      subcategory: "conduits",
      desc: "25mm PVC conduit bend elbow"
    },
    {
      id: "elec-12",
      sno: 27,
      name: "20mm Conduit Tee",
      defaultQty: 0,
      refQty: 20,
      unit: "Nos",
      subcategory: "conduits",
      desc: "3-way inspection tee fitting for 20mm conduit"
    },
    {
      id: "elec-13",
      sno: 28,
      name: "25mm Conduit Tee",
      defaultQty: 0,
      refQty: 15,
      unit: "Nos",
      subcategory: "conduits",
      desc: "3-way PVC branch tee for 25mm conduit"
    },
    {
      id: "elec-14",
      sno: 29,
      name: "20mm 4-Way Deep Junction Box",
      defaultQty: 0,
      refQty: 18,
      unit: "Nos",
      subcategory: "conduits",
      desc: "Ceiling & wall circular 4-way PVC junction box with lid"
    },
    {
      id: "elec-15",
      sno: 30,
      name: "6A 1-Way Modular Switch",
      defaultQty: 0,
      refQty: 45,
      unit: "Nos",
      subcategory: "switches",
      desc: "Smooth rocker 6A 240V modular switch (White)"
    },
    {
      id: "elec-16",
      sno: 31,
      name: "16A Power Modular Switch",
      defaultQty: 0,
      refQty: 12,
      unit: "Nos",
      subcategory: "switches",
      desc: "Heavy-duty 16A modular switch with indicator"
    },
    {
      id: "elec-17",
      sno: 32,
      name: "6A 3-Pin Modular Socket",
      defaultQty: 0,
      refQty: 30,
      unit: "Nos",
      subcategory: "switches",
      desc: "Child safety shuttered 3-pin round modular socket"
    },
    {
      id: "elec-18",
      sno: 33,
      name: "16A 6-Pin Multi Socket",
      defaultQty: 0,
      refQty: 12,
      unit: "Nos",
      subcategory: "switches",
      desc: "Combined 6A/16A universal power socket with shutter"
    },
    {
      id: "elec-19",
      sno: 34,
      name: "Single Pole 16A MCB (C-Curve)",
      defaultQty: 0,
      refQty: 10,
      unit: "Nos",
      subcategory: "distribution",
      desc: "10kA breaking capacity miniature circuit breaker"
    },
    {
      id: "elec-20",
      sno: 35,
      name: "Single Pole 25A MCB (C-Curve)",
      defaultQty: 0,
      refQty: 6,
      unit: "Nos",
      subcategory: "distribution",
      desc: "Power load protection single-pole MCB"
    },
    {
      id: "elec-21",
      sno: 36,
      name: "Double Pole 32A Isolator",
      defaultQty: 0,
      refQty: 2,
      unit: "Nos",
      subcategory: "distribution",
      desc: "2-Pole main switch disconnector for floor DB"
    },
    {
      id: "elec-22",
      sno: 37,
      name: "8-Way SPN Distribution Board",
      defaultQty: 0,
      refQty: 2,
      unit: "Nos",
      subcategory: "distribution",
      desc: "Single pole & neutral metal flush enclosure with acrylic door"
    },
    {
      id: "elec-23",
      sno: 38,
      name: "12-Way TPN Distribution Board",
      defaultQty: 0,
      refQty: 1,
      unit: "Nos",
      subcategory: "distribution",
      desc: "Three phase 12-way vertical distribution board"
    },
    {
      id: "elec-24",
      sno: 39,
      name: "15W Round LED Concealed Light",
      defaultQty: 0,
      refQty: 24,
      unit: "Nos",
      subcategory: "lighting",
      desc: "Warm white / Cool daylight ceiling slim panel downlight"
    },
    {
      id: "elec-25",
      sno: 40,
      name: "20W LED Batten Light (4ft)",
      defaultQty: 0,
      refQty: 14,
      unit: "Nos",
      subcategory: "lighting",
      desc: "Surface mount high-lumen LED tube fixture"
    },
    {
      id: "elec-26",
      sno: 41,
      name: "1200mm High Speed Ceiling Fan",
      defaultQty: 0,
      refQty: 8,
      unit: "Nos",
      subcategory: "lighting",
      desc: "Energy efficient 3-blade decorative ceiling fan"
    },
    {
      id: "elec-27",
      sno: 42,
      name: "Modular Plate (8 Module)",
      defaultQty: 0,
      refQty: 12,
      unit: "Nos",
      subcategory: "switches",
      desc: "8-Module wall cover plate with inner mounting grid"
    },
    {
      id: "elec-28",
      sno: 43,
      name: "Modular Plate (4 Module)",
      defaultQty: 0,
      refQty: 10,
      unit: "Nos",
      subcategory: "switches",
      desc: "4-Module flush front cover plate"
    },
    {
      id: "elec-29",
      sno: 44,
      name: "12-Way Terminal Connector Strip",
      defaultQty: 0,
      refQty: 10,
      unit: "Nos",
      subcategory: "accessories",
      desc: "Polyamide brass insulated terminal connector block"
    },
    {
      id: "elec-30",
      sno: 45,
      name: "200mm Nylon Cable Tie (100 pcs)",
      defaultQty: 0,
      refQty: 5,
      unit: "Pack",
      subcategory: "accessories",
      desc: "Heavy-duty UV resistant self-locking wire ties"
    },
    {
      id: "elec-31",
      sno: 46,
      name: "PVC Electrical Insulation Tape",
      defaultQty: 0,
      refQty: 15,
      unit: "Rolls",
      subcategory: "accessories",
      desc: "Standard ISI grade fire retardant vinyl insulation tape"
    },
    {
      id: "elec-32",
      sno: 47,
      name: "20mm Flexible Conduit Pipe (50m)",
      defaultQty: 0,
      refQty: 2,
      unit: "Bundle",
      subcategory: "conduits",
      desc: "Corrugated PVC flexible pipe for drop connections"
    },

    // =========================================================================
    // --- WORK: SHOWROOM WORK (Material List 1 to 19 with Wire Colors) ---
    // All items defaultQty: 0 for manual quantity entry as requested
    // Reference sheet quantities preserved in refQty
    // =========================================================================

    // Row 1: 1.0 Sqmm wire 90m (Total 8 coils: Red 2, Yellow 2, Blue 1, Green 0, Black 3)
    {
      id: "elec-sw-1-red",
      sno: 48,
      sheetNo: 1,
      name: "1.0 Sqmm Wire 90m — 🔴 RED (சிகப்பு)",
      defaultQty: 0,
      refQty: 2,
      unit: "Coil",
      color: "red",
      subcategory: "showroom_work",
      isColorWire: true,
      isWire: true,
      isShowroomWork: true,
      desc: "1.0 sq mm PVC insulated copper wire 90m coil - RED Phase"
    },
    {
      id: "elec-sw-1-yel",
      sno: 49,
      sheetNo: 1,
      name: "1.0 Sqmm Wire 90m — 🟡 YELLOW (மஞ்சள்)",
      defaultQty: 0,
      refQty: 2,
      unit: "Coil",
      color: "yellow",
      subcategory: "showroom_work",
      isColorWire: true,
      isWire: true,
      isShowroomWork: true,
      desc: "1.0 sq mm PVC insulated copper wire 90m coil - YELLOW Phase"
    },
    {
      id: "elec-sw-1-blu",
      sno: 50,
      sheetNo: 1,
      name: "1.0 Sqmm Wire 90m — 🔵 BLUE (நீலம்)",
      defaultQty: 0,
      refQty: 1,
      unit: "Coil",
      color: "blue",
      subcategory: "showroom_work",
      isColorWire: true,
      isWire: true,
      isShowroomWork: true,
      desc: "1.0 sq mm PVC insulated copper wire 90m coil - BLUE Phase"
    },
    {
      id: "elec-sw-1-grn",
      sno: 51,
      sheetNo: 1,
      name: "1.0 Sqmm Wire 90m — 🟢 GREEN (பச்சை)",
      defaultQty: 0,
      refQty: 0,
      unit: "Coil",
      color: "green",
      subcategory: "showroom_work",
      isColorWire: true,
      isWire: true,
      isShowroomWork: true,
      desc: "1.0 sq mm PVC insulated copper wire 90m coil - GREEN Earth"
    },
    {
      id: "elec-sw-1-blk",
      sno: 52,
      sheetNo: 1,
      name: "1.0 Sqmm Wire 90m — ⚫ BLACK (கருப்பு)",
      defaultQty: 0,
      refQty: 3,
      unit: "Coil",
      color: "black",
      subcategory: "showroom_work",
      isColorWire: true,
      isWire: true,
      isShowroomWork: true,
      desc: "1.0 sq mm PVC insulated copper wire 90m coil - BLACK Neutral"
    },

    // Row 2: 1.5 Sqmm wire 90m (Total 5 coils: Red 1, Yellow 0, Blue 1, Green 1, Black 2)
    {
      id: "elec-sw-2-red",
      sno: 53,
      sheetNo: 2,
      name: "1.5 Sqmm Wire 90m — 🔴 RED (சிகப்பு)",
      defaultQty: 0,
      refQty: 1,
      unit: "Coil",
      color: "red",
      subcategory: "showroom_work",
      isColorWire: true,
      isWire: true,
      isShowroomWork: true,
      desc: "1.5 sq mm PVC insulated copper wire 90m coil - RED Phase"
    },
    {
      id: "elec-sw-2-yel",
      sno: 54,
      sheetNo: 2,
      name: "1.5 Sqmm Wire 90m — 🟡 YELLOW (மஞ்சள்)",
      defaultQty: 0,
      refQty: 0,
      unit: "Coil",
      color: "yellow",
      subcategory: "showroom_work",
      isColorWire: true,
      isWire: true,
      isShowroomWork: true,
      desc: "1.5 sq mm PVC insulated copper wire 90m coil - YELLOW Phase"
    },
    {
      id: "elec-sw-2-blu",
      sno: 55,
      sheetNo: 2,
      name: "1.5 Sqmm Wire 90m — 🔵 BLUE (நீலம்)",
      defaultQty: 0,
      refQty: 1,
      unit: "Coil",
      color: "blue",
      subcategory: "showroom_work",
      isColorWire: true,
      isWire: true,
      isShowroomWork: true,
      desc: "1.5 sq mm PVC insulated copper wire 90m coil - BLUE Phase"
    },
    {
      id: "elec-sw-2-grn",
      sno: 56,
      sheetNo: 2,
      name: "1.5 Sqmm Wire 90m — 🟢 GREEN (பச்சை)",
      defaultQty: 0,
      refQty: 1,
      unit: "Coil",
      color: "green",
      subcategory: "showroom_work",
      isColorWire: true,
      isWire: true,
      isShowroomWork: true,
      desc: "1.5 sq mm PVC insulated copper wire 90m coil - GREEN Earth"
    },
    {
      id: "elec-sw-2-blk",
      sno: 57,
      sheetNo: 2,
      name: "1.5 Sqmm Wire 90m — ⚫ BLACK (கருப்பு)",
      defaultQty: 0,
      refQty: 2,
      unit: "Coil",
      color: "black",
      subcategory: "showroom_work",
      isColorWire: true,
      isWire: true,
      isShowroomWork: true,
      desc: "1.5 sq mm PVC insulated copper wire 90m coil - BLACK Neutral"
    },

    // Row 3: 2.5 Sqmm wire 90m (Total 4 coils: Red 1, Yellow 1, Blue 0, Green 0, Black 2)
    {
      id: "elec-sw-3-red",
      sno: 58,
      sheetNo: 3,
      name: "2.5 Sqmm Wire 90m — 🔴 RED (சிகப்பு)",
      defaultQty: 0,
      refQty: 1,
      unit: "Coil",
      color: "red",
      subcategory: "showroom_work",
      isColorWire: true,
      isWire: true,
      isShowroomWork: true,
      desc: "2.5 sq mm heavy power copper wire 90m coil - RED Phase"
    },
    {
      id: "elec-sw-3-yel",
      sno: 59,
      sheetNo: 3,
      name: "2.5 Sqmm Wire 90m — 🟡 YELLOW (மஞ்சள்)",
      defaultQty: 0,
      refQty: 1,
      unit: "Coil",
      color: "yellow",
      subcategory: "showroom_work",
      isColorWire: true,
      isWire: true,
      isShowroomWork: true,
      desc: "2.5 sq mm heavy power copper wire 90m coil - YELLOW Phase"
    },
    {
      id: "elec-sw-3-blu",
      sno: 60,
      sheetNo: 3,
      name: "2.5 Sqmm Wire 90m — 🔵 BLUE (நீலம்)",
      defaultQty: 0,
      refQty: 0,
      unit: "Coil",
      color: "blue",
      subcategory: "showroom_work",
      isColorWire: true,
      isWire: true,
      isShowroomWork: true,
      desc: "2.5 sq mm heavy power copper wire 90m coil - BLUE Phase"
    },
    {
      id: "elec-sw-3-grn",
      sno: 61,
      sheetNo: 3,
      name: "2.5 Sqmm Wire 90m — 🟢 GREEN (பச்சை)",
      defaultQty: 0,
      refQty: 0,
      unit: "Coil",
      color: "green",
      subcategory: "showroom_work",
      isColorWire: true,
      isWire: true,
      isShowroomWork: true,
      desc: "2.5 sq mm heavy power copper wire 90m coil - GREEN Earth"
    },
    {
      id: "elec-sw-3-blk",
      sno: 62,
      sheetNo: 3,
      name: "2.5 Sqmm Wire 90m — ⚫ BLACK (கருப்பு)",
      defaultQty: 0,
      refQty: 2,
      unit: "Coil",
      color: "black",
      subcategory: "showroom_work",
      isColorWire: true,
      isWire: true,
      isShowroomWork: true,
      desc: "2.5 sq mm heavy power copper wire 90m coil - BLACK Neutral"
    },

    // Row 4: 4 Sqmm wire 90m (Red 15m, Black 15m - total 30 meters)
    {
      id: "elec-sw-4-red-m",
      sno: 63,
      sheetNo: 4,
      name: "4.0 Sqmm Wire — 🔴 RED (15m Cut / Meters)",
      defaultQty: 0,
      refQty: 15,
      unit: "Meters",
      color: "red",
      subcategory: "showroom_work",
      isColorWire: true,
      isWire: true,
      isShowroomWork: true,
      desc: "4.0 sq mm heavy sub-main wire - 15 Meters Cut (RED)"
    },
    {
      id: "elec-sw-4-blk-m",
      sno: 64,
      sheetNo: 4,
      name: "4.0 Sqmm Wire — ⚫ BLACK (15m Cut / Meters)",
      defaultQty: 0,
      refQty: 15,
      unit: "Meters",
      color: "black",
      subcategory: "showroom_work",
      isColorWire: true,
      isWire: true,
      isShowroomWork: true,
      desc: "4.0 sq mm heavy sub-main wire - 15 Meters Cut (BLACK)"
    },
    {
      id: "elec-sw-4-red-c",
      sno: 65,
      sheetNo: 4,
      name: "4.0 Sqmm Wire 90m — 🔴 RED Coil",
      defaultQty: 0,
      refQty: 0,
      unit: "Coil",
      color: "red",
      subcategory: "showroom_work",
      isColorWire: true,
      isWire: true,
      isShowroomWork: true,
      desc: "4.0 sq mm full 90m coil - RED Phase"
    },
    {
      id: "elec-sw-4-blk-c",
      sno: 66,
      sheetNo: 4,
      name: "4.0 Sqmm Wire 90m — ⚫ BLACK Coil",
      defaultQty: 0,
      refQty: 0,
      unit: "Coil",
      color: "black",
      subcategory: "showroom_work",
      isColorWire: true,
      isWire: true,
      isShowroomWork: true,
      desc: "4.0 sq mm full 90m coil - BLACK Neutral"
    },

    // Row 5: 1.0 sqmm frls 90m (White = 1, Gray = 1 - Total 2 coils)
    {
      id: "elec-sw-5-wht",
      sno: 67,
      sheetNo: 5,
      name: "1.0 Sqmm FRLS Wire 90m — ⚪ WHITE (வெள்ளை)",
      defaultQty: 0,
      refQty: 1,
      unit: "Coil",
      color: "white",
      subcategory: "showroom_work",
      isColorWire: true,
      isWire: true,
      isShowroomWork: true,
      desc: "1.0 sq mm Flame Retardant Low Smoke (FRLS) 90m coil - WHITE"
    },
    {
      id: "elec-sw-5-gry",
      sno: 68,
      sheetNo: 5,
      name: "1.0 Sqmm FRLS Wire 90m — 🔘 GRAY (சாம்பல்)",
      defaultQty: 0,
      refQty: 1,
      unit: "Coil",
      color: "gray",
      subcategory: "showroom_work",
      isColorWire: true,
      isWire: true,
      isShowroomWork: true,
      desc: "1.0 sq mm Flame Retardant Low Smoke (FRLS) 90m coil - GRAY"
    },

    // Row 6: 1.5 sqmm frls 90m (White = 1, Gray = 1 - Total 2 coils)
    {
      id: "elec-sw-6-wht",
      sno: 69,
      sheetNo: 6,
      name: "1.5 Sqmm FRLS Wire 90m — ⚪ WHITE (வெள்ளை)",
      defaultQty: 0,
      refQty: 1,
      unit: "Coil",
      color: "white",
      subcategory: "showroom_work",
      isColorWire: true,
      isWire: true,
      isShowroomWork: true,
      desc: "1.5 sq mm Flame Retardant Low Smoke (FRLS) 90m coil - WHITE"
    },
    {
      id: "elec-sw-6-gry",
      sno: 70,
      sheetNo: 7,
      name: "1.5 Sqmm FRLS Wire 90m — 🔘 GRAY (சாம்பல்)",
      defaultQty: 0,
      refQty: 1,
      unit: "Coil",
      color: "gray",
      subcategory: "showroom_work",
      isColorWire: true,
      isWire: true,
      isShowroomWork: true,
      desc: "1.5 sq mm Flame Retardant Low Smoke (FRLS) 90m coil - GRAY"
    },

    // Row 7: Insulation Tape (Red 4, Yellow 4, Blue 4, Green 4, Black 4 - Total 20 rolls)
    {
      id: "elec-sw-7-red",
      sno: 71,
      sheetNo: 7,
      name: "Insulation Tape — 🔴 RED (சிகப்பு)",
      defaultQty: 0,
      refQty: 4,
      unit: "Rolls",
      color: "red",
      subcategory: "showroom_work",
      isAccessory: true,
      isShowroomWork: true,
      desc: "High quality PVC electrical insulation tape - RED"
    },
    {
      id: "elec-sw-7-yel",
      sno: 72,
      sheetNo: 7,
      name: "Insulation Tape — 🟡 YELLOW (மஞ்சள்)",
      defaultQty: 0,
      refQty: 4,
      unit: "Rolls",
      color: "yellow",
      subcategory: "showroom_work",
      isAccessory: true,
      isShowroomWork: true,
      desc: "High quality PVC electrical insulation tape - YELLOW"
    },
    {
      id: "elec-sw-7-blu",
      sno: 73,
      sheetNo: 7,
      name: "Insulation Tape — 🔵 BLUE (நீலம்)",
      defaultQty: 0,
      refQty: 4,
      unit: "Rolls",
      color: "blue",
      subcategory: "showroom_work",
      isAccessory: true,
      isShowroomWork: true,
      desc: "High quality PVC electrical insulation tape - BLUE"
    },
    {
      id: "elec-sw-7-grn",
      sno: 74,
      sheetNo: 7,
      name: "Insulation Tape — 🟢 GREEN (பச்சை)",
      defaultQty: 0,
      refQty: 4,
      unit: "Rolls",
      color: "green",
      subcategory: "showroom_work",
      isAccessory: true,
      isShowroomWork: true,
      desc: "High quality PVC electrical insulation tape - GREEN"
    },
    {
      id: "elec-sw-7-blk",
      sno: 75,
      sheetNo: 7,
      name: "Insulation Tape — ⚫ BLACK (கருப்பு)",
      defaultQty: 0,
      refQty: 4,
      unit: "Rolls",
      color: "black",
      subcategory: "showroom_work",
      isAccessory: true,
      isShowroomWork: true,
      desc: "High quality PVC electrical insulation tape - BLACK"
    },

    // Row 8: Wiring spring 30meter
    {
      id: "elec-sw-8",
      sno: 76,
      sheetNo: 8,
      name: "Wiring Spring 30m (Pull Spring Wire)",
      defaultQty: 0,
      refQty: 2,
      unit: "Nos",
      subcategory: "showroom_work",
      isAccessory: true,
      isShowroomWork: true,
      desc: "Flexible steel wire pulling spring guide tool (30 Meter)"
    },

    // Row 9: 1/2 spring hose 30meter
    {
      id: "elec-sw-9",
      sno: 77,
      sheetNo: 9,
      name: '½" Spring Hose 30m (Flexible Corrugated Hose)',
      defaultQty: 0,
      refQty: 2,
      unit: "Nos",
      subcategory: "showroom_work",
      isConduit: true,
      isShowroomWork: true,
      desc: "1/2-inch flexible corrugated wiring spring hose pipe (30 Meter bundle)"
    },

    // Row 10: Cat 6 wire
    {
      id: "elec-sw-10",
      sno: 78,
      sheetNo: 10,
      name: "Cat 6 LAN / Network Cable (100m)",
      defaultQty: 0,
      refQty: 100,
      unit: "Meters",
      subcategory: "showroom_work",
      isWire: true,
      isShowroomWork: true,
      desc: "High speed UTP Cat-6 4-pair Ethernet networking cable (100 Meters)"
    },

    // Row 11: Grease 100 gm
    {
      id: "elec-sw-11",
      sno: 79,
      sheetNo: 11,
      name: "Electrical Wire Pulling Grease (100 gm)",
      defaultQty: 0,
      refQty: 2,
      unit: "Nos",
      subcategory: "showroom_work",
      isAccessory: true,
      isShowroomWork: true,
      desc: "100 gm smooth cable conduit pulling lubricant grease"
    },

    // Row 12: 1 inch 2mm wiring pipe
    {
      id: "elec-sw-12",
      sno: 80,
      sheetNo: 12,
      name: '1" 2mm Wiring Conduit Pipe',
      defaultQty: 0,
      refQty: 60,
      unit: "Nos",
      subcategory: "showroom_work",
      isConduit: true,
      isShowroomWork: true,
      desc: "1-inch 2mm heavy duty PVC rigid electrical conduit pipe (60 Nos)"
    },

    // Row 13: 1 inch wiring Bend
    {
      id: "elec-sw-13",
      sno: 81,
      sheetNo: 13,
      name: '1" Wiring Bend (Heavy PVC)',
      defaultQty: 0,
      refQty: 40,
      unit: "Nos",
      subcategory: "showroom_work",
      isConduit: true,
      isShowroomWork: true,
      desc: "1-inch heavy PVC conduit 90° smooth bend (40 Nos)"
    },

    // Row 14: 1 inch wiring clamp
    {
      id: "elec-sw-14",
      sno: 82,
      sheetNo: 14,
      name: '1" Wiring Clamp (15 Dozen / 180 Nos)',
      defaultQty: 0,
      refQty: 15,
      unit: "Dozen",
      subcategory: "showroom_work",
      isAccessory: true,
      isShowroomWork: true,
      desc: "1-inch heavy GI/PVC saddle pipe clamp (15 Dozen = 180 Nos)"
    },

    // Row 15: 1 1/2 inch steel nail
    {
      id: "elec-sw-15",
      sno: 83,
      sheetNo: 15,
      name: '1½" Steel Concrete Nail',
      defaultQty: 0,
      refQty: 2,
      unit: "Kg",
      subcategory: "showroom_work",
      isAccessory: true,
      isShowroomWork: true,
      desc: "1.5-inch hardened steel masonry & concrete nails (2 Kg)"
    },

    // Row 16: Nail washer
    {
      id: "elec-sw-16",
      sno: 84,
      sheetNo: 16,
      name: "Nail Washer",
      defaultQty: 0,
      refQty: 0.5,
      unit: "Kg",
      subcategory: "showroom_work",
      isAccessory: true,
      isShowroomWork: true,
      desc: "Steel round washers for pipe fixing nails (1/2 Kg)"
    },

    // Row 17: Star screw 1 1/4
    {
      id: "elec-sw-17",
      sno: 85,
      sheetNo: 17,
      name: 'Star Screw 1¼" (10 Dozen / 120 Nos)',
      defaultQty: 0,
      refQty: 10,
      unit: "Dozen",
      subcategory: "showroom_work",
      isAccessory: true,
      isShowroomWork: true,
      desc: "1-1/4 inch Phillips star drive drywall / wood screws (10 Dozen = 120 Nos)"
    },

    // Row 18: Star screw 1 1/2
    {
      id: "elec-sw-18",
      sno: 86,
      sheetNo: 18,
      name: 'Star Screw 1½" (5 Dozen / 60 Nos)',
      defaultQty: 0,
      refQty: 5,
      unit: "Dozen",
      subcategory: "showroom_work",
      isAccessory: true,
      isShowroomWork: true,
      desc: "1-1/2 inch star head multi-purpose screws (5 Dozen = 60 Nos)"
    },

    // Row 19: Wooden plugs
    {
      id: "elec-sw-19",
      sno: 87,
      sheetNo: 19,
      name: "Wooden Plugs (மர குச்சி / Wall Plugs)",
      defaultQty: 0,
      refQty: 10,
      unit: "Packets",
      subcategory: "showroom_work",
      isAccessory: true,
      isShowroomWork: true,
      desc: "Hardwood dowel wall plugs for screw anchoring (10 Packets)"
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
    { key: "showroom_work", label: "🏬 Showroom Work (19 Items)" },
    { key: "color_wires", label: "🎨 Color Wires (வயர் நிறங்கள்)" },
    { key: "roof_pipeline", label: "🏗️ Roof Pipe Line (15)" },
    { key: "wires", label: "Wires & Cables" },
    { key: "conduits", label: "Conduits & Junctions" },
    { key: "switches", label: "Switches & Sockets" },
    { key: "distribution", label: "DBs & MCBs" },
    { key: "lighting", label: "Lights & Fans" },
    { key: "accessories", label: "Tapes & Accessories" }
  ]
};

// Universal Preset Combo for Roof Pipe Line Work (15 Common Items)
const ROOF_PIPELINE_COMBO = [
  {
    "id": "elec-r1",
    "sno": 1,
    "name": "5\" Fan Metal Box",
    "defaultQty": 0,
    "refQty": 2,
    "unit": "Nos",
    "subcategory": "roof_pipeline",
    "desc": "5-inch heavy metal fan ceiling box with clamp hook for roof slab casting"
  },
  {
    "id": "elec-r2",
    "sno": 2,
    "name": "1\" 2mm Electrical Pipe",
    "defaultQty": 0,
    "refQty": 30,
    "unit": "Nos",
    "subcategory": "roof_pipeline",
    "desc": "1-inch heavy duty 2mm PVC rigid electrical roof slab conduit pipe"
  },
  {
    "id": "elec-r3",
    "sno": 3,
    "name": "¾\" 2mm Electrical Pipe",
    "defaultQty": 0,
    "refQty": 15,
    "unit": "Nos",
    "subcategory": "roof_pipeline",
    "desc": "3/4-inch heavy duty 2mm PVC electrical conduit pipe for roof slab"
  },
  {
    "id": "elec-r4",
    "sno": 4,
    "name": "1\" Bend",
    "defaultQty": 0,
    "refQty": 0,
    "unit": "Nos",
    "subcategory": "roof_pipeline",
    "desc": "1-inch heavy PVC conduit 90° smooth bend for roof pipe line"
  },
  {
    "id": "elec-r5",
    "sno": 5,
    "name": "¾\" Bend",
    "defaultQty": 0,
    "refQty": 10,
    "unit": "Nos",
    "subcategory": "roof_pipeline",
    "desc": "3/4-inch heavy PVC conduit smooth bend for slab drop lines"
  },
  {
    "id": "elec-r6",
    "sno": 6,
    "name": "1\" Depth Box 4 Way",
    "defaultQty": 0,
    "refQty": 0,
    "unit": "Nos",
    "subcategory": "roof_pipeline",
    "desc": "1-inch circular 4-way deep ceiling junction box for concrete slab"
  },
  {
    "id": "elec-r7",
    "sno": 7,
    "name": "¾\" Depth Box",
    "defaultQty": 0,
    "refQty": 0,
    "unit": "Nos",
    "subcategory": "roof_pipeline",
    "desc": "3/4-inch deep ceiling round junction box for roof slab wiring"
  },
  {
    "id": "elec-r8",
    "sno": 8,
    "name": "118 ml PVC Solved",
    "defaultQty": 0,
    "refQty": 5,
    "unit": "Nos",
    "subcategory": "roof_pipeline",
    "desc": "118 ml quick-weld PVC pipe solvent adhesive cement"
  },
  {
    "id": "elec-r9",
    "sno": 9,
    "name": "1\" Cupler",
    "defaultQty": 0,
    "refQty": 30,
    "unit": "Nos",
    "subcategory": "roof_pipeline",
    "desc": "1-inch PVC conduit pipe joint coupler sleeve"
  },
  {
    "id": "elec-r10",
    "sno": 10,
    "name": "¾\" Cupler",
    "defaultQty": 0,
    "refQty": 15,
    "unit": "Nos",
    "subcategory": "roof_pipeline",
    "desc": "3/4-inch PVC conduit pipe socket joint coupler"
  },
  {
    "id": "elec-r11",
    "sno": 11,
    "name": "1\" Hacksaw Blade",
    "defaultQty": 0,
    "refQty": 4,
    "unit": "Nos",
    "subcategory": "roof_pipeline",
    "desc": "1-inch heavy bimetal pipe cutting hacksaw blade"
  },
  {
    "id": "elec-r12",
    "sno": 12,
    "name": "3\" Packing Tap",
    "defaultQty": 0,
    "refQty": 2,
    "unit": "Rolls",
    "subcategory": "roof_pipeline",
    "desc": "3-inch wide waterproof packing tape for sealing ceiling fan boxes"
  },
  {
    "id": "elec-r13",
    "sno": 13,
    "name": "Insulation Tap",
    "defaultQty": 0,
    "refQty": 10,
    "unit": "Rolls",
    "subcategory": "roof_pipeline",
    "desc": "Electrical PVC vinyl insulation adhesive tape roll"
  },
  {
    "id": "elec-r14",
    "sno": 14,
    "name": "½\" Hacksaw Blade",
    "defaultQty": 0,
    "refQty": 3,
    "unit": "Nos",
    "subcategory": "roof_pipeline",
    "desc": "1/2-inch fine cut hacksaw blade for conduit cutting"
  },
  {
    "id": "elec-r15",
    "sno": 15,
    "name": "Fancy Box",
    "defaultQty": 0,
    "refQty": 3,
    "unit": "Nos",
    "subcategory": "roof_pipeline",
    "desc": "Concealed ceiling spot light / fancy light junction box"
  }
];

// Showroom Work Material Combo List (19 Spreadsheet Items with Color Variants)
const SHOWROOM_WORK_COMBO = PRODUCT_CATALOG.electrical.filter(item => item.isShowroomWork);

