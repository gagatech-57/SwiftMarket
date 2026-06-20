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

export const generate1800Products = () => {
  const products = [];
  const categories = Object.keys(PRODUCT_TEMPLATES);
  
  // 1. Original 400 products
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

  // 2. Books (401 - 800)
  for (let i = 401; i <= 800; i++) {
    const templateIndex = (i - 401) % BOOK_TEMPLATES.names.length;
    const baseName = BOOK_TEMPLATES.names[templateIndex];
    const desc = BOOK_TEMPLATES.descriptions[templateIndex];
    const img = BOOK_TEMPLATES.images[templateIndex];
    
    const suffixNumber = Math.floor((i - 401) / BOOK_TEMPLATES.names.length) + 1;
    const name = `${baseName} ${suffixNumber > 1 ? `Vol. ${suffixNumber}` : ''}`.trim();
    
    const basePrice = 12.99;
    const priceModifier = ((i * 17) % 35);
    const cents = ((i * 3) % 100) / 100;
    const price = parseFloat((basePrice + priceModifier + cents).toFixed(2));
    
    products.push({
      id: `prod-${i}`,
      name,
      price,
      description: `${desc} An engaging read printed on high-quality acid-free paper. Perfect addition to your home library or study space.`,
      image: img,
      category: 'Books'
    });
  }

  // 3. Men's Fashion (801 - 1300)
  for (let i = 801; i <= 1300; i++) {
    const templateIndex = (i - 801) % MENS_TEMPLATES.names.length;
    const baseName = MENS_TEMPLATES.names[templateIndex];
    const desc = MENS_TEMPLATES.descriptions[templateIndex];
    const img = MENS_TEMPLATES.images[templateIndex];
    
    const suffixNumber = Math.floor((i - 801) / MENS_TEMPLATES.names.length) + 1;
    const name = `${baseName} ${suffixNumber > 1 ? `Edition ${suffixNumber}` : ''}`.trim();
    
    const basePrice = 29.99;
    const priceModifier = ((i * 19) % 70);
    const cents = ((i * 9) % 100) / 100;
    const price = parseFloat((basePrice + priceModifier + cents).toFixed(2));
    
    products.push({
      id: `prod-${i}`,
      name,
      price,
      description: `${desc} Tailored fit with fine stitching and breathable fabric. Designed to offer maximum comfort while keeping you sharp and stylish.`,
      image: img,
      category: "Men's Fashion"
    });
  }

  // 4. Women's Fashion (1301 - 1800)
  for (let i = 1301; i <= 1800; i++) {
    const templateIndex = (i - 1301) % WOMENS_TEMPLATES.names.length;
    const baseName = WOMENS_TEMPLATES.names[templateIndex];
    const desc = WOMENS_TEMPLATES.descriptions[templateIndex];
    const img = WOMENS_TEMPLATES.images[templateIndex];
    
    const suffixNumber = Math.floor((i - 1301) / WOMENS_TEMPLATES.names.length) + 1;
    const name = `${baseName} ${suffixNumber > 1 ? `Edition ${suffixNumber}` : ''}`.trim();
    
    const basePrice = 29.99;
    const priceModifier = ((i * 29) % 70);
    const cents = ((i * 11) % 100) / 100;
    const price = parseFloat((basePrice + priceModifier + cents).toFixed(2));
    
    products.push({
      id: `prod-${i}`,
      name,
      price,
      description: `${desc} Made from premium-grade fibers for a soft feel and excellent durability. Perfect for expressing your unique style in any setting.`,
      image: img,
      category: "Women's Fashion"
    });
  }

  return products;
};

export const generate700Products = () => {
  return generate1800Products();
};

export const generate400Products = () => {
  return generate1800Products();
};

const BOOK_TEMPLATES = {
  names: [
    'The Great Adventure',
    'Mastering React & Next.js',
    'Secrets of the Cosmos',
    'Journey to the Unknown',
    'The Art of Minimalist Living',
    'Introduction to Machine Learning',
    'Baking Secrets Masterclass',
    'A History of Ancient Civilizations',
    'Creative Writing & Storytelling',
    'Financial Freedom in 30 Days'
  ],
  descriptions: [
    'An epic tale of discovery, courage, and unexpected friendships in far-away realms.',
    'The ultimate guide to building scalable, high-performance web applications using modern React.',
    'Unraveling the deep mysteries of space, black holes, and the future of astrophysics.',
    'A gripping sci-fi thriller detailing humanity\'s first expedition beyond the solar system.',
    'Learn how to declutter your physical and mental space to find peace and clarity.',
    'A comprehensive textbook covering neural networks, deep learning, and practical applications.',
    'Dough recipes, baking techniques, and dessert guides from award-winning pastry chefs.',
    'A fascinating chronological account of the rise and fall of world-shaping empires.',
    'Exercises, prompts, and expert advice to help you discover and refine your narrative voice.',
    'Practical strategies for budgeting, investing, and building long-term generational wealth.'
  ],
  images: [
    'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=500&auto=format&fit=crop&q=80'
  ]
};

const MENS_TEMPLATES = {
  names: [
    'Classic Fit Blazer',
    'Casual Denim Jacket',
    'Slim-Fit Cotton Chinos',
    'Premium Wool Sweater',
    'Oxford Button-Down Shirt',
    'Heavyweight Cotton Hoodie',
    'Tailored Dress Pants',
    'Waterproof Windbreaker',
    'Linen Summer Shirt',
    'Quilted Utility Vest'
  ],
  descriptions: [
    'A versatile, structured blazer suitable for business-casual settings and evening dinners.',
    'Timeless denim look crafted from soft, durable cotton denim with metal button closures.',
    'Breathable, stretch-infused cotton chinos offering casual comfort and polished style.',
    'Woven from fine merino wool to keep you warm and comfortable in cold climates.',
    'Classic Oxford fabric tailored for a smart, clean appearance with double-button cuffs.',
    'Plush fleece-lined heavyweight cotton hoodie featuring kangaroo pockets and drawcords.',
    'Sharp, modern trousers perfect for corporate offices, weddings, and formal banquets.',
    'Lightweight, windproof shell with water-repellent coating and adjustable hood drawstrings.',
    'Light and breezy linen shirt designed to keep you cool and stylish on hot sunny days.',
    'Insulated padded vest with multi-pocket organization, perfect for layering during autumn.'
  ],
  images: [
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&auto=format&fit=crop&q=80'
  ]
};

const WOMENS_TEMPLATES = {
  names: [
    'Floral Summer Dress',
    'Silk V-Neck Blouse',
    'Classic Trench Coat',
    'High-Waisted Denim Jeans',
    'Knitted Cardigan Sweaters',
    'Sleek Pleated Skirt',
    'Tailored Blazer Jacket',
    'Boho Midi Dress',
    'Active Seamless Leggings',
    'Casual Linen Trousers'
  ],
  descriptions: [
    'Flowing A-line dress featuring a beautiful floral pattern and breathable lightweight fabric.',
    'Luxurious pure silk blouse with a drape collar, perfect for work or casual elegance.',
    'Double-breasted timeless trench coat featuring adjustable waist belt and storm flaps.',
    'Flattering high-rise fit skinny jeans crafted from premium stretch denim material.',
    'Cozy open-front chunky knit cardigan with ribbed cuffs and side slip pockets.',
    'Elegant midi length pleated skirt with an elastic waistband for comfort and grace.',
    'A chic modern blazer with structured shoulders, peak lapels, and double pocket details.',
    'Bohemian-style tiered dress featuring balloon sleeves and detailed embroidered cuffs.',
    'High-waisted moisture-wicking active wear leggings ideal for gym and yoga sessions.',
    'Breathable, wide-leg linen trousers designed for relaxed weekend outings or vacations.'
  ],
  images: [
    'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1582142306909-195724d33ab3?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1584273143981-44c2de33478a?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=500&auto=format&fit=crop&q=80'
  ]
};
