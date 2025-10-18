// index.js - Unified Express Server for Bike and Accessory Data
const express = require(express);
const cors = require(cors);
const app = express();
// Use the port from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// --- Product Data Consolidation ---

// Bike Data (from bikes.js)
const bikes = [
  {
    id: 1,
    name: "Speed Concept SLR 9 AXS",
    price: 14999,
    desc: "The fastest bike in the world just got faster. The Speed Concept SLR 9 AXS is the ultimate triathlon and time trial bike, designed to help you go faster with less effort. With a full carbon frame, integrated storage solutions, and the latest aerodynamic technology, this bike is built for speed and efficiency.",
    category: "Road Bikes",
    featured: true,
    image:
      "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/SpeedConceptSLR9AXS-25-48020-E-Portrait",
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/speed-concept-slr-9-axs/thumbs/1000/a76d6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/speed-concept-slr-9-axs/thumbs/1000/dc370.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/speed-concept-slr-9-axs/thumbs/1000/eb382.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/speed-concept-slr-9-axs/thumbs/1000/ea188.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/speed-concept-slr-9-axs/thumbs/1000/a76d6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/speed-concept-slr-9-axs/thumbs/1000/bd437.webp"
    ],
    specs: {
      short: {
        frame: "Carbon",
        fork: "Carbon",
        wheels: "Carbon",
        drivetrain: "2 × 12",
        groupset: "Sram Red AXS",
        power_meter: "Sram Red AXS",
        brakes: "Sram Hydraulic Disc"
      },
      full: {
        build: {
          Frame:
            "800 Series OCLV Carbon, KVF (Kammtail Virtual Foil) tube shape, T47 BB, integrated Bento box, integrated downtube storage",
          "BB Standard": "T47, Threaded",
          "Tire Clearance": "28c",
          Colors: [
            "Hex Blue / Trek Black",
            "Emerald Iris / Trek Black",
            "Carbon Smoke / Prismatic Marble",
            "Metallic Red Smoke to Carbon Red Smoke Fade"
          ],
          Fork: "SC full foil carbon, integrated brake & stem",
          "Bottom Bracket": "Praxis, T47 threaded, internal bearing",
          Saddle: "Bontrager Hilo Pro Carbon",
          Seatpost: {
            S: {
              model: "Speed Concept SLR",
              offset_options: ["11.5mm", "-20mm"],
              length: "short"
            },
            M: {
              model: "Speed Concept SLR",
              offset_options: ["11.5mm", "-20mm"],
              length: "tall"
            },
            L: {
              model: "Speed Concept SLR",
              offset_options: ["11.5mm", "-20mm"],
              length: "tall"
            },
            XL: {
              model: "Speed Concept SLR",
              offset_options: ["11.5mm", "-20mm"],
              length: "tall"
            }
          },
          "Seatpost Type": "Rigid",
          groupset: {
            "Rear Derailleur": "Shimano Dura-Ace R9250 Di2, 34T max cog",
            "Front Derailleur": "Shimano Dura-Ace R9250 Di2, braze-on, down swing",
            Crank: {
              S: "Shimano Dura-Ace R9200, 52/36, 170mm length",
              M: "Shimano Dura-Ace R9200, 52/36, 172.5mm length",
              L: "Shimano Dura-Ace R9200, 52/36, 172.5mm length",
              XL: "Shimano Dura-Ace R9200, 52/36, 175mm length"
            },
            Shifters:
              "Shimano Dura-Ace hydraulic disc, R9180 Di2 lever, R9270 caliper, 160mm rotor",
            Cassette: "Shimano Dura-Ace R9200, 11-30, 12 speed",
            Chain: "Shimano Dura-Ace / XTR M9100, 12 speed",
            Brakes: {
              model: "Shimano Dura-Ace hydraulic disc",
              mount: "flat mount",
              type: "Hydraulic Disc"
            }
          },
          wheels: {
            Rims: {
              Front:
                "Bontrager Aeolus RSL 51, OCLV Carbon, Tubeless Ready, 51mm rim depth, 100x12mm thru axle",
              Rear:
                "Bontrager Aeolus RSL 51, OCLV Carbon, Tubeless Ready, 51mm rim depth, Shimano 11/12 freehub, 142x12mm thru axle"
            },
            Tires: "Bontrager R4 320, 700x25mm",
            "Disc Rotors": "Shimano CL900, centerlock, 160mm"
          }
        }
      }
    }
  };
{
  id: 2,
    name: "Madone SLR 9 AXS Gen 8",
      price: 13499,
        image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/MadoneSLR9AXS-26-46151-E-Primary",
          desc: "The Madone SLR 9 AXS Gen 8 is the ultimate road bike for riders who demand the best. With a lightweight carbon frame, advanced aerodynamic design, and top-of-the-line components, this bike is built for speed, comfort, and performance. Whether you're racing or just enjoying a long ride, the Madone SLR 9 AXS Gen 8 will help you reach your full potential.",
            category: "Road Bikes",
              featured: true,
  },
{
  id: 3,
    name: "Domane SLR 9 AXS Gen 4",
      price: 12499,
        image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/DomaneSLR9AXS-26-57944-A-Primary",
          desc: "The Domane SLR 9 eTap Gen 4 is the ultimate endurance road bike, designed to help you go farther and faster with less effort. With a lightweight carbon frame, advanced suspension technology, and top-of-the-line components, this bike is built for comfort, performance, and versatility.",
            category: "Road Bikes",
              featured: true,
  },
{
  id: 4,
    name: "Checkpoint SLR 9 AXS",
      price: 11999,
        image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/CheckmateSLR9AXS-26-46-Primary",
          desc: "The Checkpoint SLR 9 eTap is the ultimate gravel bike, designed to help you explore new terrain and push your limits. With a lightweight carbon frame, advanced suspension technology, and top-of-the-line components, this bike is built for versatility, performance, and adventure.",
            category: "Gravel Bikes",
              featured: true,
  },
{
  id: 5,
    name: "Supercaliber SLR 9.9 XX Flight Attendant Gen 2",
      price: 14999,
        image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/SupercaliberSLR99XXFlightAttendant-26-57945-A-Primary",
          desc: "The Supercaliber SLR 9.9 XX Flight Attendant Gen 2 is the ultimate cross-country mountain bike, designed for speed and agility. With a lightweight carbon frame and advanced suspension, it’s built for racing or exploring trails with power and precision.",
            category: "Mountain Bikes",
              featured: true,
  },
{
  id: 6,
    name: "Top Fuel SLR 9.9 XX1 AXS Gen 4",
      price: 12999,
        image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/TopFuelSLR99XX1AXS-26-57946-A-Primary",
          desc: "The Top Fuel SLR 9.9 XX1 AXS Gen 4 is the ultimate trail bike, designed to tackle any terrain with speed and agility. With a lightweight carbon frame, advanced suspension technology, and top-tier components, it’s built for performance and adventure.",
            category: "Mountain Bikes",
              featured: true,
  },
{
  id: 7,
    name: "Rail 9.9 XX1 AXS",
      price: 8999,
        image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/Rail99XX1AXS-26-57947-A-Primary",
          desc: "The Rail 9.9 XX1 AXS is the ultimate e-MTB, combining power and performance with a sleek carbon frame and advanced suspension. Perfect for conquering trails and mountains alike.",
            category: "Mountain Bikes",
              featured: true,
  },
{
  id: 8,
    name: "Marlin 8",
      price: 1199,
        image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/Marlin8-26-57948-A-Primary",
          desc: "The Marlin 8 is a hardtail mountain bike designed for agility and control. With an aluminum frame and responsive suspension, it’s ideal for both trails and daily rides.",
            category: "Mountain Bikes",
              featured: false,
  },
{
  id: 9,
    name: "Slash 9.9 XX1 AXS",
      price: 8999,
        image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/Slash99XX1AXS-26-57949-A-Primary",
          desc: "The Slash 9.9 XX1 AXS is the ultimate enduro bike, built for high-speed descents and technical climbs. Lightweight, powerful, and efficient — ready for any trail.",
            category: "Mountain Bikes",
              featured: false,
  },
{
  id: 10,
    name: "Procaliber 9.9 XX1 AXS";
      price: 7999,
        image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/Procaliber99XX1AXS-26-57950-A-Primary",
          desc: "The Procaliber 9.9 XX1 AXS is a lightweight, cross-country race bike built for efficiency and control. Designed to help you ride faster and farther with less effort.",
            category: "Mountain Bikes";
              featured: false,
  },
];

const accessories = [
  {
    id: 31,
    title: "Wahoo KICKR Smart Trainer",
    price: 3999,
    image: "https://example.com/images/wahoo_kickr.jpg",
    description: "The Wahoo KICKR is a top-of-the-line smart trainer that offers realistic ride feel and accurate power measurement.",
    category: "Smart Trainers",
  },
  {
    id: 32,
    title: "Garmin Edge 530 GPS Bike Computer",
    price: 299,
    image: "https://example.com/images/garmin_edge_530.jpg",
    description: "The Garmin Edge 530 is a sleek and compact GPS bike computer that provides real-time tracking and navigation.",
    category: "GPS Bike Computers",
  },
  {
    id: 33,
    title: "Bontrager Circuit MIPS Helmet",
    price: 199,
    image: "https://example.com/images/bontrager_circuit_mips.jpg",
    description: "The Bontrager Circuit MIPS Helmet offers advanced protection, comfort, and ventilation for serious riders.",
    category: "Helmet",
  },
  {
    id: 34,
    title: "CamelBak Podium Chill Insulated Water Bottle",
    price: 49,
    image: "https://example.com/images/camelbak_podium_chill.jpg",
    description: "The CamelBak Podium Chill is an insulated water bottle designed to keep your drink cold during long rides.",
    category: "Water Bottle",
  },
  {
    id: 35,
    title: "Lezyne Super GPS Bike Computer",
    price: 299,
    image: "https://example.com/images/lezyne_super_gps.jpg",
    description: "The Lezyne Super GPS provides accurate ride tracking, navigation, and performance metrics.",
    category: "GPS Bike Computers",
  },
  {
    id: 36,
    title: "Bontrager Starvos MIPS Helmet",
    price: 149,
    image: "https://example.com/images/trek_bontrager_starvos_mips.jpg",
    description: "The Bontrager Starvos MIPS Helmet offers a perfect balance of safety, comfort, and style.",
    category: "Helmet",
  },
  {
    id: 37,
    title: "Elite Direto XR-T Smart Trainer",
    price: 899,
    image: "https://example.com/images/elite_direto_xr-t.jpg",
    description: "The Elite Direto XR-T delivers a realistic and smooth indoor training experience with advanced power accuracy.",
    category: "Smart Trainers",
  },
  {
    id: 38,
    title: "Bontrager Aeolus RSL 75 TLR Disc Road Wheelset",
    price: 1999,
    image: "https://example.com/images/bontrager_aelorus_rsl_75.jpg",
    description: "The Bontrager Aeolus RSL 75 TLR Disc Road Wheelset provides aerodynamic performance and lightweight durability.",
    category: "Wheelsets",
  },
  {
    id: 39,
    title: "Specialized S-Works Evade II Helmet",
    price: 299,
    image: "https://example.com/images/s-works_evade_ii.jpg",
    description: "The Specialized S-Works Evade II Helmet is engineered for speed and superior airflow for long rides.",
    category: "Helmet",
  },
  {
    id: 40,
    title: "Bontrager Aeolus Pro 3V TLR Disc Road Wheelset",
    price: 2999,
    image: "https://example.com/images/bontrager_aeolus_pro_3v.jpg",
    description: "The Bontrager Aeolus Pro 3V wheelset offers performance and strength for all road conditions.",
    category: "Wheelsets",
  },
  {
    id: 41,
    title: "Trek RSL Knit Road Cycling Shoes",
    price: 349,
    image: "https://example.com/images/trek_rsl_knit_shoes.jpg",
    description: "The Trek RSL Knit Road Shoes are lightweight and breathable, offering excellent comfort and stiffness.",
    category: "Shoes",
  },
  {
    id: 42,
    title: "Garmin Varia RTL515 Rearview Radar and Tail Light",
    price: 299,
    image: "https://example.com/images/garmin_varia_rtl515.jpg",
    description: "The Garmin Varia RTL515 enhances road safety with radar detection and a bright rear light.",
    category: "Radar and Tail Lights",
  },
  {
    id: 43,
    title: "Wahoo ELEMNT BOLT GPS Bike Computer",
    price: 279,
    image: "https://example.com/images/wahoo_elemnt_bolt.jpg",
    description: "The Wahoo ELEMNT BOLT is a compact GPS bike computer optimized for aerodynamics and simplicity.",
    category: "GPS Bike Computers",
  },
  {
    id: 44,
    title: "CamelBak Chase Bike Vest",
    price: 129,
    image: "https://example.com/images/camelbak_chase_bike_vest.jpg",
    description: "The CamelBak Chase Bike Vest provides hydration and storage in a lightweight, comfortable design.",
    category: "Bike Vests",
  },
  {
    id: 45,
    title: "Trek RSL Mountain Cycling Shoes",
    price: 249,
    image: "https://example.com/images/trek_rsl_mountain_shoes.jpg",
    description: "The Trek RSL Mountain Shoes are built for traction, comfort, and high performance on trails.",
    category: "Shoes",
  },
];



const products = [...bikes, ...accessories];

// --- Product Endpoints ---

//Primary" welcome route
app.get(/, (req, res) => {
  res.send(Trek Bikes API is running!);
});

// Get all bikes/products (used by bikes-page.js)
app.get(/api/products / all, (req, res) => {
  // Return all products, combining bikes and accessories
  res.json(products);
});

app.get(/api/products /: id, (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send(Product not found.);
  }
});

// Get featured products (used by script.js for index.html)
app.get(/api/products / featured, (req, res) => {
  const featuredProducts = products.filter((p) => p.featured);
  // Ensure we also include a few accessories as featured if not enough bikes are featured
  if (featuredProducts.length < 3) {
    const additionalFeatured = accessories.slice(
      0,
      3 - featuredProducts.length
    );
    featuredProducts.push(...additionalFeatured);
  }
  res.json(featuredProducts.slice(0, 4)); // Limiting to 4 for the homepage layout
});

// Get all accessories
app.get(/api/accessories, (req, res) => {
  res.json(accessories);
});

// Search products (re-implemented from bikes.js)
app.get(/api/search, (req, res) => {
  const query = req.query.q ? req.query.q.toLowerCase() : ;

  if (!query) {
    // If no query, return a message or an empty array
    return res.json([]);
  }

  const searchResults = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.desc.toLowerCase().includes(query)
  );

  res.json(searchResults);
});

// --- Server Start ---
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
