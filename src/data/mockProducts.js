const PRODUCT_TEMPLATES = {
  Electronics: {
    names: ['Pro Mobile Phone', 'Ultra Slim Laptop', 'Noise-Cancelling Earbuds', 'Fast Charging Pad', '4K USB-C Hub', 'Bluetooth Audio Transmitter', 'Mechanical Keyboard Mini', 'Portable SSD 1TB', 'Wireless Ergonomic Mouse', 'HD Webcam 1080p'],
    descriptions: [
      'Equipped with a high-refresh display, stellar camera lens system, and day-long battery life.',
      'Lightweight aluminum chassis, powerful multi-core processor, and brilliant retina screen display.',
      'True wireless sound featuring active noise cancellation and crystal-clear microphone audio.',
      'Qi-compatible wireless quick charger that charges your devices without messy wires.',
      'Expand connectivity options with HDMI, USB-A ports, and pass-through power delivery.',
      'Connects your wire-free headsets to consoles, TVs, and flight systems seamlessly.',
      'Sleek layout with hot-swappable tactile switches and dynamic mechanical backlights.',
      'Pocket-sized durability with ultra-fast read/write transfer rates for creators on the go.',
      'Sculpted shape design supporting hand postures and programmable shortcut click buttons.',
      'Auto-focus webcam with dual noise-reduction microphones for remote conferencing.'
    ],
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=80', // phone
      'https://images.unsplash.com/photo-1496181130204-7552cc14b1e0?w=500&auto=format&fit=crop&q=80', // laptop
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=80', // earbuds
      'https://images.unsplash.com/photo-1622445262465-2481c4574875?w=500&auto=format&fit=crop&q=80', // charger
      'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=500&auto=format&fit=crop&q=80', // hub
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=80', // audio
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80', // keyboard
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=80', // ssd
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=80', // mouse
      'https://images.unsplash.com/photo-1603162586341-903247f1863d?w=500&auto=format&fit=crop&q=80'  // webcam
    ]
  },
  Wearables: {
    names: ['Active Smartwatch', 'Fitness Tracker Band', 'Classic Leather Watch', 'Hybrid Smart Chronograph', 'GPS Run Tracker', 'Titanium Smart Ring', 'Heart Rate Strap', 'Smart Sport Eyewear', 'Dive Computer Watch', 'Sleep Tracker Ring'],
    descriptions: [
      'Track fitness workouts, view notices, monitor sleep indices, and take phone calls from your wrist.',
      'Ultra-light bands that record daily steps, heart rates, active calories, and display notifications.',
      'Sophisticated analog dial mechanism fitted onto double-stitched Italian leather straps.',
      'Sleek metallic hands combined with subtle digital circular sub-displays for health tracking.',
      'Professional runners watch tracking splits, cadence, map trails, and pacing targets.',
      'Bio-sensing smart ring tracking recovery scores and body temperatures on fingers.',
      'Chest strap monitoring ECG-accurate heart beats for professional high-intensity workouts.',
      'Polarized sports glasses featuring audio speakers and head-up display speed indicators.',
      'Waterproof dive metrics display tracking depths, deco limits, and oxygen levels.',
      'Ultra-thin wellness ring measuring deep sleep sleep-stages and overnight metrics.'
    ],
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80', // watch
      'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&auto=format&fit=crop&q=80', // band
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=80', // classic watch
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=500&auto=format&fit=crop&q=80', // hybrid
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&auto=format&fit=crop&q=80', // gps
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=80', // ring
      'https://images.unsplash.com/photo-1517502884422-41eaaced0168?w=500&auto=format&fit=crop&q=80', // strap
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=80', // eyewear
      'https://images.unsplash.com/photo-1530519729491-acf0b340c6b1?w=500&auto=format&fit=crop&q=80', // computer
      'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=80'  // sleep
    ]
  },
  Fashion: {
    names: ['Classic Leather Shoes', 'Comfort Running Shoes', 'Urban Canvas Sneakers', 'Retro Suede Loafers', 'Waterproof Trail Boots', 'Knit Mesh Trainers', 'All-Weather Slip-Ons', 'Designer Casual Boots', 'Breathable Sandal Slides', 'Athletic Court Shoes'],
    descriptions: [
      'Premium full-grain leather outer shell with cushioned insoles for formal and daily wear.',
      'Responsive foam technology combined with breathable knit uppers for comfortable strides.',
      'Sleek profile sneakers with durable rubber outsoles and classic canvas textures.',
      'Luxurious suede finish loafers with flexible rubber-studded driver soles.',
      'Reinforced high-top boots offering complete waterproofing and deep lug traction for hikes.',
      'Lightweight flexible mesh construct providing airflow during gym training sessions.',
      'Flexible elastic panels on waterproof canvas for quick and easy slip-on comfort.',
      'Artisanal hand-crafted leather boots built to withstand rugged urban streets.',
      'Molded contoured footbeds with adjustable padded straps for ultimate casual lounging.',
      'Reinforced lateral support and high-grip outsoles built for tennis and pickleball.'
    ],
    images: [
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=500&auto=format&fit=crop&q=80', // leather shoes
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80', // running
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format&fit=crop&q=80', // canvas
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=80', // suede
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&auto=format&fit=crop&q=80', // boots
      'https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&auto=format&fit=crop&q=80', // knit
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&auto=format&fit=crop&q=80', // slip-ons
      'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&auto=format&fit=crop&q=80', // designer boots
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&auto=format&fit=crop&q=80', // sandal
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=80'  // athletic
    ]
  },
  'Home & Office': {
    names: ['Ergonomic Mesh Chair', 'Electric Standing Desk', 'Minimalist Desk Lamp', 'Double-Walled Coffee Mug', 'Leather Writing Pad', 'Aroma Oil Diffuser', 'Under-Desk Footrest', 'Cable Management Box', 'Magnetic Whiteboard', 'Noise-Masking Desk Fan'],
    descriptions: [
      'Adjustable lumbar support and 3D armrests designed to prevent back fatigue during long hours.',
      'Dual motors with memory presets to easily switch heights from sitting to standing stances.',
      'Dimmable LED bar with customizable color warmth settings to reduce digital eye strain.',
      'Vacuum-insulated stainless steel structure keeping beverages hot or iced for up to 6 hours.',
      'Sleek water-resistant leather mat to protect your tabletop and provide smooth mouse gliding.',
      'Ultrasonic cool-mist aromatherapy system featuring color-shifting ambient mood lighting.',
      'Cushioned memory foam foot support that helps improve posture and leg circulation.',
      'Tidy up computer cords and power strips inside a sleek flame-retardant containment box.',
      'Tempered glass dry-erase board with strong magnets for pinning reminders and drawings.',
      'Quiet aerodynamic fan that provides cool breezes while emitting soothing white noise.'
    ],
    images: [
      'https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=500&auto=format&fit=crop&q=80', // chair
      'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=500&auto=format&fit=crop&q=80', // standing desk
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=80', // lamp
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=80', // mug
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&auto=format&fit=crop&q=80', // pad
      'https://images.unsplash.com/photo-1602928321679-560bb453f190?w=500&auto=format&fit=crop&q=80', // diffuser
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=80', // footrest
      'https://images.unsplash.com/photo-1517502884422-41eaaced0168?w=500&auto=format&fit=crop&q=80', // box
      'https://images.unsplash.com/photo-1572945281861-68b29330e5ac?w=500&auto=format&fit=crop&q=80', // whiteboard
      'https://images.unsplash.com/photo-1618944913480-b67ee16d7b77?w=500&auto=format&fit=crop&q=80'  // fan
    ]
  },
  Lifestyle: {
    names: ['Insulated Water Bottle', 'Canvas Tote Bag', 'Aromatherapy Candle', 'Eco-Friendly Yoga Mat', 'Sleek Travel Toiletry Kit', 'Travel Espresso Press', 'Reusable Produce Bags', 'Dimmable Lantern Light', 'Compact Pocket Umbrella', 'Natural Cork Coaster Set'],
    descriptions: [
      'Heavy-duty stainless steel container keeping water ice-cold for workouts or outdoor hikes.',
      'Heavyweight organic canvas bag with multiple interior utility pockets for everyday tasks.',
      'Hand-poured soy wax infused with essential oils in a reusable apothecary jar.',
      'Non-slip textured surface made from biodegradable natural tree rubber for perfect balance.',
      'Water-resistant organizer with mesh compartments and hanging hook for travel packing.',
      'Manual portable brewer to extract smooth espresso shots anywhere in under 2 minutes.',
      'Breathable organic cotton mesh pouches for carrying fresh fruits and vegetables.',
      'USB rechargeable warm-light lantern with step-less brightness adjustments.',
      'Windproof fiberglass rib construct that folds down small enough to fit inside pocket jackets.',
      'Absorbent, sustainable cork coasters that prevent condensation rings on furniture tops.'
    ],
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=80', // bottle
      'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=80', // tote
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&auto=format&fit=crop&q=80', // candle
      'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500&auto=format&fit=crop&q=80', // yoga
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&auto=format&fit=crop&q=80', // toiletry
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=80', // coffee
      'https://images.unsplash.com/photo-1610397648930-477f8c7f0943?w=500&auto=format&fit=crop&q=80', // bags
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=80', // lantern
      'https://images.unsplash.com/photo-1561053720-76cd73ff22c3?w=500&auto=format&fit=crop&q=80', // umbrella
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&auto=format&fit=crop&q=80'  // coasters
    ]
  }
};

export const generate400Products = () => {
  const products = [];
  const categories = Object.keys(PRODUCT_TEMPLATES);
  
  for (let i = 1; i <= 400; i++) {
    // Determine category
    const cat = categories[(i - 1) % categories.length];
    const templates = PRODUCT_TEMPLATES[cat];
    
    // Choose template index
    const templatesLength = templates.names.length;
    const templateIndex = Math.floor((i - 1) / categories.length) % templatesLength;
    
    const baseName = templates.names[templateIndex];
    const desc = templates.descriptions[templateIndex];
    const img = templates.images[templateIndex];
    
    // Suffix number based on loop iterations
    const suffixNumber = Math.floor((i - 1) / (categories.length * templatesLength)) + 1;
    const name = `${baseName} ${suffixNumber > 1 ? `Series ${suffixNumber}` : ''}`.trim();
    
    // Baseline price based on category
    let basePrice = 19.99;
    if (cat === 'Electronics') basePrice = 120.00;
    if (cat === 'Wearables') basePrice = 85.00;
    if (cat === 'Fashion') basePrice = 45.00;
    if (cat === 'Home & Office') basePrice = 35.00;
    
    // Make price vary deterministically
    const priceModifier = ((i * 23) % 150); // varies price by $0 to $149
    const cents = ((i * 7) % 100) / 100;
    const price = parseFloat((basePrice + priceModifier + cents).toFixed(2));
    
    products.push({
      id: `prod-${i}`,
      name,
      price,
      description: `${desc} Built with high durability and designed for seamless day-to-day performance. Features sustainable materials and expert craftmanship.`,
      image: img,
      category: cat
    });
  }
  return products;
};
