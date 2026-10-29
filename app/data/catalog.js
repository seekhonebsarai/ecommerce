export const CURRENCIES = {
  USD: { symbol: "$", rate: 1.0, name: "USD ($)" },
  EUR: { symbol: "€", rate: 0.92, name: "EUR (€)" },
  GBP: { symbol: "£", rate: 0.79, name: "GBP (£)" },
  CAD: { symbol: "CA$", rate: 1.36, name: "CAD ($)" },
  AFN: { symbol: "؋", rate: 68.5, name: "AFN (؋)" }
};

export const CITIES = [
  { id: "kabul", name: "Kabul", native: "کابل", status: "active", eta: "Same day (within 2-4 hrs)", centerFee: 0, outskirtFee: 3 },
  { id: "mazar", name: "Mazar-i-Sharif", native: "مزار شریف", status: "active", eta: "Same day", centerFee: 0, outskirtFee: 4 },
  { id: "herat", name: "Herat", native: "هرات", status: "active", eta: "Same day", centerFee: 0, outskirtFee: 4 },
  { id: "jalalabad", name: "Jalalabad", native: "جلال‌آباد", status: "active", eta: "Same day", centerFee: 0, outskirtFee: 3 },
  { id: "panjshir", name: "Panjshir", native: "پنجشیر", status: "active", eta: "Next day morning", centerFee: 0, outskirtFee: 5 },
  { id: "kandahar", name: "Kandahar", native: "کندهار", status: "soon", eta: "Launching Q4", centerFee: 0, outskirtFee: 0 }
];

export const PRODUCTS = [
  {
    id: "box-basic",
    category: "grocery",
    title: "Basic Family Pantry Box",
    dariTitle: "بسته اساسی خوراکه خانواده",
    badge: "Bestseller",
    badgeType: "primary",
    priceUSD: 49.99,
    weightKg: 22,
    image: "/images/box-groceries.jpg",
    rating: 4.9,
    reviewsCount: 420,
    shortDesc: "Complete monthly pantry essentials for a household of 4-6.",
    includes: ["Flour (10kg)", "Basmati Sella Rice (5kg)", "Pure Cooking Oil (3L)", "Chickpeas (1kg)", "Tomato Paste (800g)", "Premium Green Tea (500g)", "Refined Sugar (2kg)"]
  },
  {
    id: "box-family-feast",
    category: "grocery",
    title: "Family Feast Mega Box",
    dariTitle: "بسته کلان فامیلی ضیافت",
    badge: "Most Popular",
    badgeType: "gold",
    priceUSD: 79.99,
    weightKg: 42,
    image: "/images/box-groceries.jpg",
    rating: 5.0,
    reviewsCount: 680,
    shortDesc: "Abundant food basket with grains, legumes, teas, cooking essentials, and sweet treats.",
    includes: ["Fine Wheat Flour (20kg)", "Super Kernel Rice (10kg)", "Pure Sunflower Oil (5L)", "Red Kidney Beans (2kg)", "Chickpeas (2kg)", "Tomato Paste (2 Cans)", "Ceylon Black Tea & Green Tea", "Macaroni (3 packs)", "Afghan Qabili Spices"]
  },
  {
    id: "box-ramadan-eid",
    category: "grocery",
    title: "Ramadan & Eid Deluxe Care Package",
    dariTitle: "بسته ویژه خیرات و عید فامیلی",
    badge: "Special Care",
    badgeType: "primary",
    priceUSD: 119.99,
    weightKg: 85,
    image: "/images/box-groceries.jpg",
    rating: 4.9,
    reviewsCount: 310,
    shortDesc: "Comprehensive bulk care package designed for large family gatherings and blessings.",
    includes: ["Whole Wheat Flour Sack (50kg)", "Aged Sella Rice Sack (25kg)", "Pure Golden Sunflower Oil (10L)", "Fine Sugar (5kg)", "Bam Dates (1kg)", "Herat Saffron Green Tea Tin", "Assorted Dried Legumes (6kg)", "Dry Fruits Assortment Box"]
  },
  {
    id: "box-fresh-produce",
    category: "produce",
    title: "Fresh Garden Fruits & Produce Hamper",
    dariTitle: "سبد میوه‌جات تازه و ارگانیک وطنی",
    badge: "Farm Fresh",
    badgeType: "primary",
    priceUSD: 42.50,
    weightKg: 12,
    image: "/images/fresh-produce.jpg",
    rating: 4.8,
    reviewsCount: 195,
    shortDesc: "Hand-picked, sweet seasonal fresh fruits and crisp vegetables directly from Afghan orchards.",
    includes: ["Kandahar Red Pomegranates (3kg)", "Shomali Sweet Grapes (2kg)", "Fresh Afghan Figs (1kg)", "Crisp Cucumbers (2kg)", "Fresh Mint & Herbs Bouquet", "Honey Melons (2 pcs)"]
  },
  {
    id: "gift-birthday",
    category: "gift",
    title: "Birthday Joy Celebration Box",
    dariTitle: "بسته تولدت مبارک با کیک و گل",
    badge: "Same-Day Gift",
    badgeType: "gold",
    priceUSD: 38.00,
    weightKg: 3.5,
    image: "/images/box-gifts.jpg",
    rating: 5.0,
    reviewsCount: 512,
    shortDesc: "Delight your loved ones with a fresh bakery birthday cake, radiant flowers, and a heartfelt card.",
    includes: ["Custom Chocolate or Vanilla Cake (1.5kg)", "Hand-tied Fresh Flower Bouquet", "Personalized Message Greeting Card", "Party Candles & Festive Ribbon Box"]
  },
  {
    id: "gift-nowruz",
    category: "gift",
    title: "Nowruz & Spring Celebration Hamper",
    dariTitle: "خوان نوروزی با میوه خشک و هفت‌میوه",
    badge: "Seasonal",
    badgeType: "primary",
    priceUSD: 55.00,
    weightKg: 5,
    image: "/images/box-gifts.jpg",
    rating: 4.9,
    reviewsCount: 240,
    shortDesc: "Traditional celebratory hamper featuring Haft-Mewa components, sweet baklava, and Afghan dry fruits.",
    includes: ["Haft Mewa 7-Fruit Selection", "Fresh Traditional Jelabi & Baklava (1kg)", "Roasted Shomali Almonds & Pistachios (1kg)", "Herat Saffron Tea Jar", "Festive Greeting Box"]
  },
  {
    id: "gift-eid-deluxe",
    category: "gift",
    title: "Eid Mubarak Royal Gift Box",
    dariTitle: "بسته عید مبارک شاهانه",
    badge: "Luxury Box",
    badgeType: "gold",
    priceUSD: 89.00,
    weightKg: 6.5,
    image: "/images/box-gifts.jpg",
    rating: 5.0,
    reviewsCount: 380,
    shortDesc: "Luxurious velvet gift box packed with premium dry fruits, fine chocolates, saffron, and fresh roses.",
    includes: ["Velvet Ribbon Gift Chest", "Fresh Red Roses & White Lilies", "Mamra Almonds (500g)", "Roasted Pistachios (500g)", "Fine Swiss Chocolates", "Royal Grade Saffron (5g)", "Personal Greeting Card"]
  },
  {
    id: "gift-mother",
    category: "gift",
    title: "Mother's Love Bouquet & Sweets",
    dariTitle: "بسته محبت مادر با شال و عسل خالص",
    badge: "Diaspora Favorite",
    badgeType: "primary",
    priceUSD: 45.00,
    weightKg: 3,
    image: "/images/box-gifts.jpg",
    rating: 4.9,
    reviewsCount: 460,
    shortDesc: "Show endless gratitude to your mother or grandmother with fresh blooms, wild honey, and tea.",
    includes: ["Handcrafted Jasmine & Rose Bouquet", "Pure Afghan Wild Mountain Honey (1kg)", "Herat Saffron Cardamom Green Tea", "Embroidered Woolen Shawl", "Calligraphy Letter of Love"]
  },
  {
    id: "staple-dry-fruits",
    category: "staple",
    title: "Royal Shomali Dry Fruit Assortment (2kg)",
    dariTitle: "میوه خشک اعلای شمالی (۲ کیلو)",
    badge: "Export Quality",
    badgeType: "primary",
    priceUSD: 34.99,
    weightKg: 2,
    image: "/images/box-gifts.jpg",
    rating: 4.9,
    reviewsCount: 290,
    shortDesc: "Crunchy roasted Afghan pistachios, Mamra almonds, green raisins (kishmish), and sweet dried figs.",
    includes: ["Pistachios (500g)", "Mamra Almonds (500g)", "Kishmish Green Raisins (500g)", "Kandahar Dried Figs (500g)"]
  },
  {
    id: "staple-rice-25kg",
    category: "staple",
    title: "Aged Super Sella Rice Sack (25kg)",
    dariTitle: "برنج اعلی سیله کهنه (۲۵ کیلو)",
    badge: "Essential Staple",
    badgeType: "primary",
    priceUSD: 39.50,
    weightKg: 25,
    image: "/images/box-groceries.jpg",
    rating: 4.9,
    reviewsCount: 520,
    shortDesc: "Long grain aged aromatic Afghan sella rice, guaranteed extra-long expansion for authentic Qabili Palaw.",
    includes: ["25kg Sealed Jute Sack of A-Grade Sella Rice"]
  },
  {
    id: "staple-oil-10l",
    category: "staple",
    title: "Pure Golden Cooking Oil (10 Liters)",
    dariTitle: "روغن نباتی خالص و صحی (۱۰ لیتر)",
    badge: "Heart Healthy",
    badgeType: "primary",
    priceUSD: 28.00,
    weightKg: 9.5,
    image: "/images/box-groceries.jpg",
    rating: 4.8,
    reviewsCount: 340,
    shortDesc: "Triple-refined clear vegetable cooking oil enriched with Vitamins A and D in an easy-pour tin.",
    includes: ["10L Food Grade Sealed Oil Can"]
  },
  {
    id: "staple-flour-50kg",
    category: "staple",
    title: "Traditional Fine Wheat Flour Sack (50kg)",
    dariTitle: "آرد گندم درجه اول وطنی (۵۰ کیلو)",
    badge: "Essential Staple",
    badgeType: "primary",
    priceUSD: 32.00,
    weightKg: 50,
    image: "/images/box-groceries.jpg",
    rating: 4.9,
    reviewsCount: 610,
    shortDesc: "Clean, freshly milled stone-ground wheat flour ideal for traditional Afghan tandoori naan.",
    includes: ["50kg Sealed Commercial Flour Sack"]
  }
];

export const MOBILE_CARRIERS = [
  { id: "awcc", name: "AWCC", fullName: "Afghan Wireless", color: "#0066B3" },
  { id: "roshan", name: "Roshan", fullName: "Roshan Telecom", color: "#E30613" },
  { id: "mtn", name: "MTN", fullName: "MTN Afghanistan", color: "#FFCC00" },
  { id: "etisalat", name: "Etisalat", fullName: "Etisalat Afghanistan", color: "#719E19" },
  { id: "salaam", name: "Salaam", fullName: "Salaam Telecom", color: "#F37021" }
];

export const TOPUP_DENOMINATIONS = [
  { amountUSD: 5, afnValue: 340, label: "$5 USD (340 AFN)" },
  { amountUSD: 10, afnValue: 685, label: "$10 USD (685 AFN)" },
  { amountUSD: 15, afnValue: 1025, label: "$15 USD (1,025 AFN)" },
  { amountUSD: 20, afnValue: 1370, label: "$20 USD (1,370 AFN)" },
  { amountUSD: 30, afnValue: 2050, label: "$30 USD (2,050 AFN)" },
  { amountUSD: 50, afnValue: 3425, label: "$50 USD (3,425 AFN)" }
];

export const BUILDER_STAPLES = [
  { id: "b-flour", name: "Stone-Ground Flour (10kg)", priceUSD: 7.50, weightKg: 10 },
  { id: "b-rice", name: "Super Sella Rice (5kg)", priceUSD: 8.50, weightKg: 5 },
  { id: "b-oil", name: "Pure Sunflower Oil (3L)", priceUSD: 9.00, weightKg: 2.8 },
  { id: "b-sugar", name: "Refined White Sugar (5kg)", priceUSD: 4.80, weightKg: 5 },
  { id: "b-chickpeas", name: "Kabuli Chickpeas (2kg)", priceUSD: 3.50, weightKg: 2 },
  { id: "b-tea", name: "Herat Saffron Green Tea (500g)", priceUSD: 6.00, weightKg: 0.5 },
  { id: "b-tomato", name: "Rich Tomato Paste (800g)", priceUSD: 2.50, weightKg: 0.9 },
  { id: "b-macaroni", name: "Durum Wheat Macaroni (1kg)", priceUSD: 1.80, weightKg: 1 },
  { id: "b-dryfruits", name: "Almonds & Raisins Box (1kg)", priceUSD: 12.00, weightKg: 1 },
  { id: "b-cake", name: "Fresh Bakery Vanilla Cake", priceUSD: 15.00, weightKg: 1.5 }
];

export const TESTIMONIALS = [
  {
    name: "Fatima K.",
    city: "San Francisco, USA",
    quote: "Being far away in California is difficult, but Bazaar AF makes our connection so warm. My mother calls me with tears of joy whenever the courier delivers her grocery box with a personalized card.",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    name: "Najib H.",
    city: "Berlin, Germany",
    quote: "The delivery photo proof sent directly to my phone is the best feature in e-commerce. Seeing my brother's smile holding the package in Kabul gives total peace of mind.",
    rating: 5,
    avatar: "👨‍💻"
  },
  {
    name: "Sara M.",
    city: "Toronto, Canada",
    quote: "I recharge my parents' phone cards on AWCC and send them fresh groceries every two weeks. There are zero hidden fees and customer service on WhatsApp is instantaneous.",
    rating: 5,
    avatar: "👩‍⚕️"
  },
  {
    name: "Ahmad W.",
    city: "London, UK",
    quote: "Sent an Eid Mubarak gift box to Mazar-i-Sharif. The flowers were fresh and the baklava was hot. Incredible service, ordered at 10am and delivered by 2pm!",
    rating: 5,
    avatar: "👨‍💼"
  }
];

export const SAMPLE_ORDERS = {
  "KHD-8842": {
    orderId: "KHD-8842",
    recipient: "Abdul Qader & Family",
    city: "Kabul (Karte 3)",
    date: "Today, 11:20 AM",
    items: "Family Feast Mega Box + AWCC $10 Top-up",
    status: "Delivered",
    step: 4,
    courier: "Farhad Rahimi (Courier #14)",
    photoProof: "/images/proof-delivery.jpg",
    note: "Package handed over safely at family gate. Recipient confirmed receipt with photo."
  },
  "KHD-9210": {
    orderId: "KHD-9210",
    recipient: "Zahra S.",
    city: "Mazar-i-Sharif (Center)",
    date: "Today, 1:45 PM",
    items: "Birthday Joy Celebration Box with Fresh Cake",
    status: "Out for Delivery",
    step: 3,
    courier: "Hamidullah (Bike Courier #08)",
    photoProof: null,
    note: "Courier is 15 minutes away from recipient residence."
  }
};

export const TRANSLATIONS = {
  en: {
    heroTitle: "Shop from anywhere. Delivered same-day",
    heroHighlight: "to family in Afghanistan.",
    heroSubtitle: "Groceries, occasion gifts, and instant mobile top-ups. Free city delivery with photo proof on every doorstep.",
    exploreBoxes: "Shop Grocery Packages",
    sendTopup: "Instant Mobile Top-Up",
    trackOrder: "Track an Order",
    cartTitle: "Your Care Cart",
    emptyCart: "Your cart is empty. Add a package or build a custom box to send love home.",
    checkoutBtn: "Proceed to Delivery & Checkout",
    addCart: "Add to Box",
    freeDelivery: "Free Delivery to City Center",
    photoProofBadge: "Verified Photo Proof on Every Order",
    home: "Home",
    packages: "Packages",
    deliveryAreas: "Delivery Areas",
    topup: "Mobile Top-Up",
    customBox: "Custom Box",
    photoProof: "Photo Proof",
    faq: "FAQ",
    track: "Track",
    cart: "Cart"
  },
  fa: {
    heroTitle: "از هر گوشه دنیا خرید کنید. تحویل همان‌روز",
    heroHighlight: "به فامیل و عزیزان تان در افغانستان.",
    heroSubtitle: "مواد خوراکه، بسته‌های تحفه‌ای عید و تولد، و کریدیت فوری تیلیفون. ارسال رایگان در مرکز شهر همراه با عکس تصدیق تحویلی.",
    exploreBoxes: "مشاهده بسته‌های خوراکه",
    sendTopup: "کریدیت فوری موبایل",
    trackOrder: "پیگیری بسته شما",
    cartTitle: "سبد خرید مهربانی",
    emptyCart: "سبد خرید شما خالی است. یک بسته خوراکه یا تحفه انتخاب کنید تا مهربانی را به خانه بفرستید.",
    checkoutBtn: "تکمیل معلومات و پرداخت",
    addCart: "افزودن به سبد",
    freeDelivery: "ارسال کاملاً رایگان در مرکز شهر",
    photoProofBadge: "ارسال عکس تصدیق تحویلی در هر فرمایش",
    home: "صفحه اصلی",
    packages: "بسته‌ها",
    deliveryAreas: "مناطق تحویلی",
    topup: "کریدیت موبایل",
    customBox: "بسته دلخواه",
    photoProof: "تصدیق تحویلی",
    faq: "سوالات رایج",
    track: "پیگیری",
    cart: "سبد"
  },
  pa: {
    heroTitle: "له هر ځای څخه پېرود وکړئ. په هماغه ورځ رسول",
    heroHighlight: "په افغانستان کې ستاسو کورنۍ ته.",
    heroSubtitle: "خوراکي توکي، ډالۍ، او د ګرځنده ټیلیفون فوري چارج. د ښار په مرکز کې وړیا تحویلي او د سپارلو تصدیقي عکس.",
    exploreBoxes: "خوراکي کڅوړې وپلټئ",
    sendTopup: "ګرځنده پیسې / کرېډېټ",
    trackOrder: "خپل فرمایش وڅارئ",
    cartTitle: "ستاسو د پېرودلو ټوکرۍ",
    emptyCart: "ستاسو ټوکرۍ خالي ده. یوه کڅوړه وټاکئ او خپلې کورنۍ ته مینه واستوئ.",
    checkoutBtn: "تحویلي او ورکړه بشپړه کړئ",
    addCart: "ټوکرۍ ته ورزیات کړئ",
    freeDelivery: "د ښار په مرکز کې وړیا سپارل",
    photoProofBadge: "په هر فرمایش کې د سپارلو تصدیقي عکس",
    home: "اصلي پاڼه",
    packages: "کڅوړې",
    deliveryAreas: "ښارونه او سیمې",
    topup: "د ټلیفون چارج",
    customBox: "ځانګړې کڅوړه",
    photoProof: "تصدیقي عکس",
    faq: "پوښتنې",
    track: "څارنه",
    cart: "ټوکرۍ"
  }
};
