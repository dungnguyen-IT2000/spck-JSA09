// index.js - Unified Express Server for Bike and Accessory Data
const express = require('express');
const cors = require('cors');
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
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-9-axs/thumbs/1000/c983d.webp",
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-9-axs/thumbs/1000/c983d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-9-axs/thumbs/1000/7242a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-9-axs/thumbs/1000/0814e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-9-axs/thumbs/1000/bfc8b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-9-axs/thumbs/1000/80ba4.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-9-axs/thumbs/1000/eb16e.webp"
    ],
    "geometry": {
      "sizes": ["SM", "MD", "LG", "XL"],
      "specs": [
        { "parameter": "Wheels", "SM": "700c", "MD": "700c", "LG": "700c", "XL": "700c" },
        { "parameter": "Stack", "SM": 492, "MD": 517, "LG": 541, "XL": 565 },
        { "parameter": "Reach", "SM": 390, "MD": 416, "LG": 426, "XL": 445 },
        { "parameter": "Stack/Reach Ratio", "SM": 1.26, "MD": 1.24, "LG": 1.27, "XL": 1.27 },
        { "parameter": "Top Tube Length", "SM": 495, "MD": 518, "LG": 541, "XL": 565 },
        { "parameter": "Seat Tube Length", "SM": 499, "MD": 525, "LG": 549, "XL": 574 },
        { "parameter": "Seat Tube Angle", "SM": 78.0, "MD": 78.0, "LG": 78.0, "XL": 78.0 },
        { "parameter": "Head Tube Length", "SM": 65, "MD": 90, "LG": 115, "XL": 140 },
        { "parameter": "Head Tube Angle", "SM": 72.2, "MD": 72.5, "LG": 72.5, "XL": 72.5 },
        { "parameter": "BB Drop", "SM": 80, "MD": 80, "LG": 80, "XL": 80 },
        { "parameter": "BB Height", "SM": 256, "MD": 256, "LG": 256, "XL": 256 },
        { "parameter": "Front Center", "SM": 571, "MD": 598, "LG": 623, "XL": 650 },
        { "parameter": "Chainstay Length", "SM": 410, "MD": 410, "LG": 410, "XL": 410 },
        { "parameter": "Wheelbase", "SM": 967, "MD": 995, "LG": 1020, "XL": 1047 },
        { "parameter": "Rake", "SM": 41, "MD": 37, "LG": 44, "XL": 45 },
        { "parameter": "Trail", "SM": 61, "MD": 60, "LG": 60, "XL": 60 },
        { "parameter": "Standover Height", "SM": 760, "MD": 785, "LG": 808, "XL": 831 }
      ]
    },

    "specs": {
      "short": {
        "frame": "Carbon",
        "fork": "RockShox SID Ultimate",
        "wheels": "Carbon",
        "drivetrain": "1 × 12",
        "groupset": "SRAM XX Eagle AXS",
        "brakes": "SRAM Level Ultimate"
      },
      "full": {
        "build": {
          "Frame": "OCLV Mountain Carbon, internal storage, adjustable geometry, internal cable routing, chainstay protection, Mino Link, ISCG 05, Knock Block 2.0, 120mm travel",
          "Fork": "RockShox SID Ultimate, DebonAir spring, Charger Race Day damper, tapered steerer, 44mm offset, Boost110, 15mm Maxle Stealth, 120mm travel",
          "Shock": "RockShox SIDLuxe Ultimate, 190mm x 45mm",
          "Max Tire Size": "29x2.40\"",
          "Headset": "Knock Block 2.0 Integrated, 62-degree limit, cartridge bearing, 1-1/8\" top, 1.5\" bottom",
          "Brakes": {
            "Levers": "SRAM Level Ultimate",
            "Front": "SRAM Level Ultimate 4-piston",
            "Rear": "SRAM Level Ultimate 2-piston",
            "Rotors": "SRAM CenterLine X, 6-bolt, rounded edge, 180mm front, 160mm rear"
          },
          "Drivetrain": {
            "Shifters": "SRAM AXS Pod Ultimate Controller",
            "Rear Derailleur": "SRAM XX Eagle AXS T-Type, 12-speed",
            "Crankset": "SRAM XX Eagle, T-Type, DUB, 34T, 55mm chainline",
            "Bottom Bracket": "SRAM DUB BSA, 73mm, threaded",
            "Cassette": "SRAM XX Eagle, T-Type, 10-52, 12-speed",
            "Chain": "SRAM XX Eagle, T-Type, Flattop",
            "Pedals": "Not included"
          },
          "Wheels": {
            "Front/Rear": "Bontrager Kovee RSL, OCLV Mountain Carbon, Tubeless Ready, 30mm rim width, Boost110 front, Boost148 rear, SRAM XD driver, 6-bolt",
            "Tires": "Bontrager XR3 Team Issue, Tubeless Ready, 120 tpi, Aramid bead, 29x2.40\""
          },
          "Cockpit": {
            "Handlebar": "Bontrager RSL Integrated, carbon, 0mm rise, 8° backsweep, 35mm clamp, 750mm width",
            "Stem": "Integrated with handlebar",
            "Grips": "ESI Chunky"
          },
          "Saddle": "Bontrager P3 Verse Pro, carbon rails, 145mm width",
          "Seatpost": "Bontrager RSL Integrated, OCLV Carbon, 31.6mm, 0mm offset",
          "Weight": "10.44 kg / 23.01 lbs (size M, tubeless setup, no pedals)",
          "Weight Limit": "136 kg (rider + gear + bike)"
        }
      }
    }
  },
  {
    id: 2,
    name: "Madone SLR 9 AXS Gen 8",
    price: 13499,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-9-axs-gen-8/thumbs/1000/5aac2.webp",
    desc: "The Madone SLR 9 AXS Gen 8 is the ultimate road bike for riders who demand the best. With a lightweight carbon frame, advanced aerodynamic design, and top-of-the-line components, this bike is built for speed, comfort, and performance. Whether you're racing or just enjoying a long ride, the Madone SLR 9 AXS Gen 8 will help you reach your full potential.",
    category: "Road Bikes",
    featured: true,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-9-axs-gen-8/thumbs/1000/5aac2.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-9-axs-gen-8/thumbs/1000/4b8bb.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-9-axs-gen-8/thumbs/1000/30d8d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-9-axs-gen-8/thumbs/1000/5dac9.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-9-axs-gen-8/thumbs/1000/7d907.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-9-axs-gen-8/thumbs/1000/2b923.webp"
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
  },
  {
    id: 3,
    name: "Domane SLR 9 AXS Gen 4",
    price: 12499,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-slr-9-axs-gen-4/thumbs/1000/707f6.webp",
    desc: "The Domane SLR 9 eTap Gen 4 is the ultimate endurance road bike, designed to help you go farther and faster with less effort. With a lightweight carbon frame, advanced suspension technology, and top-of-the-line components, this bike is built for comfort, performance, and versatility.",
    category: "Road Bikes",
    featured: true,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-slr-9-axs-gen-4/thumbs/1000/707f6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-slr-9-axs-gen-4/thumbs/1000/3d604.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-slr-9-axs-gen-4/thumbs/1000/44910.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-slr-9-axs-gen-4/thumbs/1000/fa316.webp"
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
  },
  {
    id: 4,
    name: "Checkpoint SLR 9 AXS",
    price: 11999,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/checkpoint-slr-9-axs/thumbs/1000/2b8c6.webp",
    desc: "The Checkpoint SLR 9 eTap is the ultimate gravel bike, designed to help you explore new terrain and push your limits. With a lightweight carbon frame, advanced suspension technology, and top-of-the-line components, this bike is built for versatility, performance, and adventure.",
    category: "Gravel Bikes",
    featured: true,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/checkpoint-slr-9-axs/thumbs/1000/2b8c6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/checkpoint-slr-9-axs/thumbs/1000/d2a4a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/checkpoint-slr-9-axs/thumbs/1000/5f949.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/checkpoint-slr-9-axs/thumbs/1000/83ae1.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/checkpoint-slr-9-axs/thumbs/1000/efe1e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/checkpoint-slr-9-axs/thumbs/1000/ee279.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/checkpoint-slr-9-axs/thumbs/1000/564e8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/checkpoint-slr-9-axs/thumbs/1000/9759f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/checkpoint-slr-9-axs/thumbs/1000/56219.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/checkpoint-slr-9-axs/thumbs/1000/f17d5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/checkpoint-slr-9-axs/thumbs/1000/eb35c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/checkpoint-slr-9-axs/thumbs/1000/1bebb.webp"
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
  },
  {
    id: 5,
    name: "Supercaliber SLR 9.9 XX Flight Attendant Gen 2",
    price: 14999,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/supercaliber-slr-9.9-xx-flight-attendant-gen-2/thumbs/1000/72374.webp",
    desc: "The Supercaliber SLR 9.9 XX Flight Attendant Gen 2 is the ultimate cross-country mountain bike, designed for speed and agility. With a lightweight carbon frame and advanced suspension, it’s built for racing or exploring trails with power and precision.",
    category: "Mountain Bikes",
    featured: true,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/supercaliber-slr-9.9-xx-flight-attendant-gen-2/thumbs/1000/72374.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/supercaliber-slr-9.9-xx-flight-attendant-gen-2/thumbs/1000/dc18e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/supercaliber-slr-9.9-xx-flight-attendant-gen-2/thumbs/1000/f4216.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/supercaliber-slr-9.9-xx-flight-attendant-gen-2/thumbs/1000/67eb5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/supercaliber-slr-9.9-xx-flight-attendant-gen-2/thumbs/1000/386aa.webp"
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
  },
  {
    id: 6,
    name: "Top Fuel SLR 9.9 XX1 AXS Gen 4",
    price: 12999,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/top-fuel-rsl-gen-4/thumbs/1000/c04f6.webp",
    desc: "The Top Fuel SLR 9.9 XX1 AXS Gen 4 is the ultimate trail bike, designed to tackle any terrain with speed and agility. With a lightweight carbon frame, advanced suspension technology, and top-tier components, it’s built for performance and adventure.",
    category: "Mountain Bikes",
    featured: true,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/top-fuel-rsl-gen-4/thumbs/1000/c04f6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/top-fuel-rsl-gen-4/thumbs/1000/aa8d6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/top-fuel-rsl-gen-4/thumbs/1000/e849f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/top-fuel-rsl-gen-4/thumbs/1000/6905c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/top-fuel-rsl-gen-4/thumbs/1000/ff7bd.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/top-fuel-rsl-gen-4/thumbs/1000/a6d5c.webp"
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
  },
  {
    id: 7,
    name: "Rail 9.9 XX1 AXS",
    price: 8999,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/rail-9.9-xx1-axs-gen-4/thumbs/1000/f0d17.webp",
    desc: "The Rail 9.9 XX1 AXS is the ultimate e-MTB, combining power and performance with a sleek carbon frame and advanced suspension. Perfect for conquering trails and mountains alike.",
    category: "Mountain Bikes",
    featured: true,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/rail-9.9-xx1-axs-gen-4/thumbs/1000/f0d17.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/rail-9.9-xx1-axs-gen-4/thumbs/1000/be631.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/rail-9.9-xx1-axs-gen-4/thumbs/1000/59796.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/rail-9.9-xx1-axs-gen-4/thumbs/1000/2a891.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/rail-9.9-xx1-axs-gen-4/thumbs/1000/5b57b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/rail-9.9-xx1-axs-gen-4/thumbs/1000/79809.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/rail-9.9-xx1-axs-gen-4/thumbs/1000/8bf52.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/rail-9.9-xx1-axs-gen-4/thumbs/1000/e2c77.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/rail-9.9-xx1-axs-gen-4/thumbs/1000/4eb34.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/rail-9.9-xx1-axs-gen-4/thumbs/1000/ab722.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/rail-9.9-xx1-axs-gen-4/thumbs/1000/3adc3.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/rail-9.9-xx1-axs-gen-4/thumbs/1000/0d75f.webp"
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
  },
  {
    id: 8,
    name: "Marlin 8",
    price: 1199,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlinplus-8/thumbs/1000/1118a.webp",
    desc: "The Marlin 8 is a hardtail mountain bike designed for agility and control. With an aluminum frame and responsive suspension, it’s ideal for both trails and daily rides.",
    category: "Mountain Bikes",
    featured: false,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlinplus-8/thumbs/1000/1118a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlinplus-8/thumbs/1000/b09bf.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlinplus-8/thumbs/1000/64a27.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlinplus-8/thumbs/1000/b2eb2.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlinplus-8/thumbs/1000/fb0cf.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlinplus-8/thumbs/1000/6d130.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlinplus-8/thumbs/1000/3f95a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlinplus-8/thumbs/1000/0578b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlinplus-8/thumbs/1000/b9587.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlinplus-8/thumbs/1000/58935.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlinplus-8/thumbs/1000/0719f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlinplus-8/thumbs/1000/309c5.webp"
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
  },
  {
    id: 9,
    name: "Slash 9.9 XX1 AXS",
    price: 8999,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/slash-9.9-xx1-axs/thumbs/1000/6cf71.webp",
    desc: "The Slash 9.9 XX1 AXS is the ultimate enduro bike, built for high-speed descents and technical climbs. Lightweight, powerful, and efficient — ready for any trail.",
    category: "Mountain Bikes",
    featured: false,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/slash-9.9-xx1-axs/thumbs/1000/6cf71.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/slash-9.9-xx1-axs/thumbs/1000/29383.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/slash-9.9-xx1-axs/thumbs/1000/33187.webp"
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
  },
  {
    id: 10,
    name: "Procaliber 9.9 XX1 AXS",
    price: 7999,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2019/procaliber-9.9-sl/thumbs/1000/e02b3.webp",
    desc: "The Procaliber 9.9 XX1 AXS is a lightweight, cross-country race bike built for efficiency and control. Designed to help you ride faster and farther with less effort.",
    category: "Mountain Bikes",
    featured: false,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2019/procaliber-9.9-sl/thumbs/1000/e02b3.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2019/procaliber-9.9-sl/thumbs/1000/9f1e8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2019/procaliber-9.9-sl/thumbs/1000/d982f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2019/procaliber-9.9-sl/thumbs/1000/7e8ad.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2019/procaliber-9.9-sl/thumbs/1000/7a46f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2019/procaliber-9.9-sl/thumbs/1000/21f9a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2019/procaliber-9.9-sl/thumbs/1000/7f6c7.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2019/procaliber-9.9-sl/thumbs/1000/72dcd.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2019/procaliber-9.9-sl/thumbs/1000/cc4bb.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2019/procaliber-9.9-sl/thumbs/1000/c9c62.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2019/procaliber-9.9-sl/thumbs/1000/af42d.webp"
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
  },
  {
    id: 11,
    name: "FX Sport 6",
    price: 6999,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/fx-sport-sl-6/thumbs/1000/8f15f.webp",
    desc: "The FX Sport 6 is the ultimate fitness bike, designed to help you stay in shape and enjoy the ride. With a lightweight aluminum frame, advanced components, and a comfortable geometry, this bike is built for performance, versatility, and fun. Whether you're commuting, training, or just enjoying a ride, the FX Sport 6 will help you reach your fitness goals.",
    category: "City Bikes",
    featured: false,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/fx-sport-sl-6/thumbs/1000/8f15f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/fx-sport-sl-6/thumbs/1000/6ca27.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/fx-sport-sl-6/thumbs/1000/3fe20.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/fx-sport-sl-6/thumbs/1000/232fd.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/fx-sport-sl-6/thumbs/1000/8c660.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/fx-sport-sl-6/thumbs/1000/78455.webp"
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
  },
  {
    id: 12,
    name: "Dual Sport 3",
    price: 5999,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/748cd.webp",
    desc: "The Dual Sport 3 is the ultimate hybrid bike, designed to help you tackle any terrain with ease. With a lightweight aluminum frame, advanced components, and a comfortable geometry, this bike is built for performance, versatility, and fun. Whether you're commuting, exploring, or just enjoying a ride, the Dual Sport 3 will help you reach new destinations.",
    category: "City Bikes",
    featured: false,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/748cd.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/657bf.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/1e872.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/721f4.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/bab76.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/48283.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/0243c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/4136e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/5c0db.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/6c938.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/5d273.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/ac064.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/d2729.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/81d55.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/4cea9.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/9fd57.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/ae4ca.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/0b0e8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/95188.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/3ba36.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/d0bed.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/4f828.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/13239.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/449a6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/a6b12.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/f2878.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/bea45.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/554a8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/1f2c6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/69a13.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/a390f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/47489.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/0b810.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/b4e48.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/fe3af.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-3-gen-5/thumbs/1000/725bd.webp"
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
  },
  {
    id: 13,
    name: "Verve 3",
    price: 4999,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-3-gen-3/thumbs/1000/0465f.webp",
    desc: "The Verve 3 is the ultimate comfort bike, designed to help you enjoy the ride. With a lightweight aluminum frame, advanced components, and a comfortable geometry, this bike is built for performance, versatility, and fun. Whether you're commuting, exploring, or just enjoying a ride, the Verve 3 will help you reach new destinations.",
    category: "City Bikes",
    featured: false,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-3-gen-3/thumbs/1000/0465f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-3-gen-3/thumbs/1000/0436f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-3-gen-3/thumbs/1000/1ea5a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-3-gen-3/thumbs/1000/9ff28.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-3-gen-3/thumbs/1000/64c6a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-3-gen-3/thumbs/1000/6246c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-3-gen-3/thumbs/1000/5fe2f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-3-gen-3/thumbs/1000/d1c1c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-3-gen-3/thumbs/1000/85dae.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-3-gen-3/thumbs/1000/396c6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-3-gen-3/thumbs/1000/66603.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-3-gen-3/thumbs/1000/2ad9f.webp"
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
  },
  {
    id: 14,
    name: "Allant+ 9.9S",
    price: 8999,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-9.9s/thumbs/1000/c6250.webp",
    desc: "The Allant+ 9.9S is the ultimate electric bike, designed to help you conquer any terrain with speed and power. With a lightweight aluminum frame, advanced components, and a powerful motor, this bike is built for performance, versatility, and fun. Whether you're commuting, exploring, or just enjoying a ride, the Allant+ 9.9S will help you reach new destinations.",
    category: "City Bikes",
    featured: false,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-9.9s/thumbs/1000/c6250.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-9.9s/thumbs/1000/4d3d6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-9.9s/thumbs/1000/0f90a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-9.9s/thumbs/1000/f7638.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-9.9s/thumbs/1000/d1247.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-9.9s/thumbs/1000/28ef1.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-9.9s/thumbs/1000/947d8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-9.9s/thumbs/1000/bd676.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-9.9s/thumbs/1000/840e4.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-9.9s/thumbs/1000/995d8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-9.9s/thumbs/1000/7664a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-9.9s/thumbs/1000/95571.webp"
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
  },
  {
    id: 15,
    name: "Checkpoint SL 7",
    price: 7999,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/checkpoint-sl-7-axs-gen-3/thumbs/1000/71f07.webp",
    desc: "The Checkpoint SL 7 is the ultimate Gravel bike, designed to help you explore new terrain and push your limits. With a lightweight carbon frame, advanced components, and a comfortable geometry, this bike is built for performance, versatility, and fun. Whether you're commuting, exploring, or just enjoying a ride, the Checkpoint SL 7 will help you reach new destinations.",
    category: "Gravel Bikes",
    featured: false,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/checkpoint-sl-7-axs-gen-3/thumbs/1000/71f07.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/checkpoint-sl-7-axs-gen-3/thumbs/1000/66b82.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/checkpoint-sl-7-axs-gen-3/thumbs/1000/82038.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/checkpoint-sl-7-axs-gen-3/thumbs/1000/17570.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/checkpoint-sl-7-axs-gen-3/thumbs/1000/f9f35.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/checkpoint-sl-7-axs-gen-3/thumbs/1000/74cc0.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/checkpoint-sl-7-axs-gen-3/thumbs/1000/1b9a6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/checkpoint-sl-7-axs-gen-3/thumbs/1000/0b10d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/checkpoint-sl-7-axs-gen-3/thumbs/1000/ce68e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/checkpoint-sl-7-axs-gen-3/thumbs/1000/e998c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/checkpoint-sl-7-axs-gen-3/thumbs/1000/33cff.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/checkpoint-sl-7-axs-gen-3/thumbs/1000/653a9.webp"
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
  },
  {
    id: 16,
    name: "Domane AL 5",
    price: 2999,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-5-gen-4/thumbs/1000/47be4.webp",
    desc: "The Domane AL 5 is the ultimate entry-level Road bike, designed to help you get started on your cycling journey. With a lightweight aluminum frame, advanced components, and a comfortable geometry, this bike is built for performance, versatility, and fun. Whether you're commuting, training, or just enjoying a ride, the Domane AL 5 will help you reach your cycling goals.",
    category: "Road Bikes",
    featured: false,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-5-gen-4/thumbs/1000/47be4.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-5-gen-4/thumbs/1000/356f0.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-5-gen-4/thumbs/1000/77965.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-5-gen-4/thumbs/1000/3e222.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-5-gen-4/thumbs/1000/2cae5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-5-gen-4/thumbs/1000/13414.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-5-gen-4/thumbs/1000/9f2e5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-5-gen-4/thumbs/1000/fc1fe.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-5-gen-4/thumbs/1000/acab6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-5-gen-4/thumbs/1000/a614f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-5-gen-4/thumbs/1000/102de.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-5-gen-4/thumbs/1000/bdd92.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-5-gen-4/thumbs/1000/15359.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-5-gen-4/thumbs/1000/c4238.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-5-gen-4/thumbs/1000/afc7f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-5-gen-4/thumbs/1000/ca62b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-5-gen-4/thumbs/1000/55467.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-5-gen-4/thumbs/1000/9314a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-5-gen-4/thumbs/1000/95dc6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-5-gen-4/thumbs/1000/28860.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-5-gen-4/thumbs/1000/c6a37.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-5-gen-4/thumbs/1000/43f36.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-5-gen-4/thumbs/1000/21578.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-5-gen-4/thumbs/1000/f339b.webp"
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
  },
  {
    id: 17,
    name: "Checkpoint ALR 5",
    price: 2499,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/checkpoint-alr-5-gen-3/thumbs/1000/d7041.webp",
    desc: "The Checkpoint ALR 5 is the ultimate entry-level Gravel bike, designed to help you explore new terrain and push your limits. With a lightweight aluminum frame, advanced components, and a comfortable geometry, this bike is built for performance, versatility, and fun. Whether you're commuting, exploring, or just enjoying a ride, the Checkpoint ALR 5 will help you reach new destinations.",
    category: "Gravel Bikes",
    featured: false,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/checkpoint-alr-5-gen-3/thumbs/1000/d7041.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/checkpoint-alr-5-gen-3/thumbs/1000/d2cfd.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/checkpoint-alr-5-gen-3/thumbs/1000/459e5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/checkpoint-alr-5-gen-3/thumbs/1000/783d7.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/checkpoint-alr-5-gen-3/thumbs/1000/0a518.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/checkpoint-alr-5-gen-3/thumbs/1000/ad469.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/checkpoint-alr-5-gen-3/thumbs/1000/d764c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/checkpoint-alr-5-gen-3/thumbs/1000/45688.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/checkpoint-alr-5-gen-3/thumbs/1000/38591.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/checkpoint-alr-5-gen-3/thumbs/1000/1f0de.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/checkpoint-alr-5-gen-3/thumbs/1000/d04c8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/checkpoint-alr-5-gen-3/thumbs/1000/dcca2.webp"
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
  },
  {
    id: 18,
    name: "Marlin 7",
    price: 799,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-7-gen-3/thumbs/1000/d1105.webp",
    desc: "The Marlin 7 is the ultimate hardtail mountain bike, designed to help you tackle any trail with speed and agility. With a lightweight aluminum frame, advanced suspension technology, and top-of-the-line components, this bike is built for performance, versatility, and adventure. Whether you're racing or just enjoying a ride, the Marlin 7 will help you reach new heights.",
    category: "Mountain Bikes",
    featured: false,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-7-gen-3/thumbs/1000/d1105.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-7-gen-3/thumbs/1000/484da.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-7-gen-3/thumbs/1000/eda22.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-7-gen-3/thumbs/1000/2191e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-7-gen-3/thumbs/1000/2e8ee.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-7-gen-3/thumbs/1000/1ff93.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-7-gen-3/thumbs/1000/2e23c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-7-gen-3/thumbs/1000/798d8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-7-gen-3/thumbs/1000/5b921.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-7-gen-3/thumbs/1000/39fb5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-7-gen-3/thumbs/1000/c83cd.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-7-gen-3/thumbs/1000/4312c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-7-gen-3/thumbs/1000/fd0bb.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-7-gen-3/thumbs/1000/ea082.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-7-gen-3/thumbs/1000/b0da7.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-7-gen-3/thumbs/1000/73626.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-7-gen-3/thumbs/1000/1c650.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-7-gen-3/thumbs/1000/d1a41.webp"
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
  },
  {
    id: 19,
    name: "FX 3 Disc",
    price: 699,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/2e182.webp",
    desc: "The FX 3 Disc is the ultimate fitness bike, designed to help you stay in shape and enjoy the ride. With a lightweight aluminum frame, advanced components, and a comfortable geometry, this bike is built for performance, versatility, and fun. Whether you're commuting, training, or just enjoying a ride, the FX 3 Disc will help you reach your fitness goals.",
    category: "City Bikes",
    featured: false,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/2e182.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/e493c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/34bfa.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/25036.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/75376.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/b2062.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/b999d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/54271.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/b335a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/a6d65.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/3d0a1.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/eeee4.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/cb65f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/e0ae5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/dbdde.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/ae291.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/3d632.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/f3a63.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/8ac5a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/faaed.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/ce2e0.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/abd91.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/b63d6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/9d533.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/b3247.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/20a9b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/0b0f9.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/85c48.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/014d9.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/bee96.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/8181d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/7ea71.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/f0171.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/6c50d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/e91f6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/5a03a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/047be.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/5d3f2.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/e0034.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/645af.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/8acfe.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/17c57.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/d66bb.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/3a8f9.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/da0e0.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/ca1e8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/873dc.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2023/fx-3-disc-gen-3/thumbs/1000/0318e.webp"
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
  },
  {
    id: 20,
    name: "Verve 1",
    price: 499,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/3f73f.webp",
    desc: "The Verve 1 is the ultimate comfort bike, designed to help you enjoy the ride. With a lightweight aluminum frame, advanced components, and a comfortable geometry, this bike is built for performance, versatility, and fun. Whether you're commuting, exploring, or just enjoying a ride, the Verve 1 will help you reach new destinations.",
    category: "City Bikes",
    featured: false,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/3f73f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/e2ee3.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/2f5f3.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/7af6d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/d3eaa.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/4e899.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/07647.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/eb698.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/1f65d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/16c37.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/0d14f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/cf9a1.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/8ff50.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/d3528.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/19913.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/165f0.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/e9f94.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/937b0.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/9d9d5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/e21b1.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/5a60d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/becea.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/34e13.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/33d39.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/83ead.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/6a4fe.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/99021.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/cc15f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/0e1f1.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/e4b91.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/9c42f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/4c0aa.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/a6266.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/26a8e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/80378.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/verveplus-1-lowstep-lt/thumbs/1000/9683a.webp"
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
  },
  {
    id: 21,
    name: "Checkpoint AL 4",
    price: 1999,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2020/checkpoint-al-4/thumbs/1000/33ed4.webp",
    desc: "The Checkpoint AL 4 is the ultimate entry-level Gravel bike, designed to help you explore new terrain and push your limits. With a lightweight aluminum frame, advanced components, and a comfortable geometry, this bike is built for performance, versatility, and fun. Whether you're commuting, exploring, or just enjoying a ride, the Checkpoint AL 4 will help you reach new destinations.",
    category: "Gravel Bikes",
    featured: false,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2020/checkpoint-al-4/thumbs/1000/33ed4.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2020/checkpoint-al-4/thumbs/1000/51e7e.webp"
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
  },
  {
    id: 22,
    name: "Dual Sport 1",
    price: 399,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/b3f3a.webp",
    desc: "The Dual Sport 1 is the ultimate hybrid bike, designed to help you tackle any terrain with ease. With a lightweight aluminum frame, advanced components, and a comfortable geometry, this bike is built for performance, versatility, and fun. Whether you're commuting, exploring, or just enjoying a ride, the Dual Sport 1 will help you reach new destinations.",
    category: "City Bikes",
    featured: false,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/b3f3a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/1188d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/5e2a5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/ea5ee.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/f6c03.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/43a3a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/fbb2d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/2497d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/c6604.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/2eace.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/407d8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/27d21.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/b67a7.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/1a46f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/65fc5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/2845c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/d8d28.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/87d03.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/4343d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/195fe.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/f3133.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/99811.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/71ebb.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/8405a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/519c9.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/12991.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/d56ab.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/0e8b4.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/09e0a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/63897.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/d3cb8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/4660e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/732a9.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/5e2ea.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/4053a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/dual-sport-1-gen-5/thumbs/1000/e6c49.webp"
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
  },
  {
    id: 23,
    name: "Allant+ 7",
    price: 4999,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/allantplus-7-lowstep-gen-2/thumbs/1000/ec796.webp",
    desc: "The Allant+ 7 is the ultimate electric bike, designed to help you conquer any terrain with speed and power. With a lightweight aluminum frame, advanced components, and a powerful motor, this bike is built for performance, versatility, and fun. Whether you're commuting, exploring, or just enjoying a ride, the Allant+ 7 will help you reach new destinations.",
    category: "City Bikes",
    featured: false,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/allantplus-7-lowstep-gen-2/thumbs/1000/ec796.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/allantplus-7-lowstep-gen-2/thumbs/1000/0c5f3.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/allantplus-7-lowstep-gen-2/thumbs/1000/0481d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/allantplus-7-lowstep-gen-2/thumbs/1000/1967c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/allantplus-7-lowstep-gen-2/thumbs/1000/2eef7.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/allantplus-7-lowstep-gen-2/thumbs/1000/00ccf.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/allantplus-7-lowstep-gen-2/thumbs/1000/5f11c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/allantplus-7-lowstep-gen-2/thumbs/1000/0f734.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/allantplus-7-lowstep-gen-2/thumbs/1000/f8223.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/allantplus-7-lowstep-gen-2/thumbs/1000/0895f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/allantplus-7-lowstep-gen-2/thumbs/1000/492f8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/allantplus-7-lowstep-gen-2/thumbs/1000/c0a1d.webp"
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
  },
  {
    id: 24,
    name: "Domane AL 2",
    price: 899,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/677a6.webp",
    desc: "The Domane AL 2 is the ultimate entry-level Road bike, designed to help you get started on your cycling journey. With a lightweight aluminum frame, advanced components, and a comfortable geometry, this bike is built for performance, versatility, and fun. Whether you're commuting, training, or just enjoying a ride, the Domane AL 2 will help you reach your cycling goals.",
    category: "Road Bikes",
    featured: false,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/677a6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/a65a7.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/929d1.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/360f4.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/f475f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/bd887.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/32936.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/06aca.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/382b0.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/88484.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/7f8e4.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/42d42.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/be76e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/d121f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/ec173.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/c4fb3.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/e1717.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/bb9c3.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/eb5f7.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/777e6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/034ad.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/253fd.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/d48f8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/47daf.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/4c76e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/f377d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/fe260.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/f7072.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/bb8de.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/8a2aa.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/38b43.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/73731.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/97951.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/ce2b4.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/8e9df.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-al-2-gen-4/thumbs/1000/e87ff.webp"
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
  },
  {
    id: 25,
    name: "Marlin 5",
    price: 699,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-5-gen-3/thumbs/1000/8f447.webp",
    desc: "The Marlin 5 is the ultimate hardtail mountain bike, designed to help you tackle any trail with speed and agility. With a lightweight aluminum frame, advanced suspension technology, and top-of-the-line components, this bike is built for performance, versatility, and adventure. Whether you're racing or just enjoying a ride, the Marlin 5 will help you reach new heights.",
    category: "Mountain Bikes",
    featured: false,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-5-gen-3/thumbs/1000/8f447.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-5-gen-3/thumbs/1000/0845a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-5-gen-3/thumbs/1000/1b3c3.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-5-gen-3/thumbs/1000/e31ba.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-5-gen-3/thumbs/1000/16568.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-5-gen-3/thumbs/1000/a4010.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-5-gen-3/thumbs/1000/7deb7.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-5-gen-3/thumbs/1000/89f65.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-5-gen-3/thumbs/1000/b98e8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-5-gen-3/thumbs/1000/70dcd.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-5-gen-3/thumbs/1000/f300e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-5-gen-3/thumbs/1000/9af8c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-5-gen-3/thumbs/1000/c731a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-5-gen-3/thumbs/1000/93273.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-5-gen-3/thumbs/1000/f3a66.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-5-gen-3/thumbs/1000/3131b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-5-gen-3/thumbs/1000/064ca.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/marlin-5-gen-3/thumbs/1000/3f0fc.webp"
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
  },
  {
    id: 26,
    name: "Speed Concept SLR 7",
    price: 9999,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/a8983.webp",
    desc: "The Speed Concept SLR 7 is the ultimate triathlon and time trial bike, designed to help you go faster with less effort. With a full carbon frame, integrated storage solutions, and the latest aerodynamic technology, this bike is built for speed and efficiency.",
    category: "Road Bikes",
    featured: true,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/a8983.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/2d5ef.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/2756a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/d3b88.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/07de2.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/dbee7.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/1ddd5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/ad27a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/34251.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/56536.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/13d24.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/00b8e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/d73d4.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/ebd41.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/c97d3.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/5c408.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/2c599.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/39a8b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/021d8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/481f3.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/4dc33.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/fc7b3.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/98b18.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/00bff.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/c258d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/7bfbe.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/8512f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/7c8ad.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/78a35.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/6f7ee.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/3b608.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/8300e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/37d6f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/aeed4.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/73a00.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/ec870.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/fd848.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/10d67.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/920f1.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/66849.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/843f5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/9cb33.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/afbaa.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/f8fcc.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/0b4e8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/6fdf9.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/f2386.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/a7d06.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/77c79.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/ccfaf.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/639e2.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/1b89a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/aa72f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/6ee37.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/bdc53.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/2f925.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/1e303.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/4dbb6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/36c8b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/0eee5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/4986d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/ab3b0.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/9248a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/ae229.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/d5d25.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/a8ffa.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/e245b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/e67cb.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-7/thumbs/1000/22447.webp"
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
  },
  {
    id: 27,
    name: "Madone SLR 7",
    price: 8999,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/56a92.webp",
    desc: "The Madone SLR 7 is the ultimate Road bike for riders who demand the best. With a lightweight carbon frame, advanced aerodynamic design, and top-of-the-line components, this bike is built for speed, comfort, and performance. Whether you're racing or just enjoying a long ride, the Madone SLR 7 will help you reach your full potential.",
    category: "Road Bikes",
    featured: true,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/56a92.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/600eb.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/772d4.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/8e12e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/cbc3b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/0ddee.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/0d4ee.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/b19dd.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/9d5d8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/2655f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/5a824.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/4c949.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/dbfa0.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/31f94.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/30e32.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/f50f5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/11261.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/8091c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/19723.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/57596.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/3f938.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/60fa8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/ee3e1.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/6651a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/a9287.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/7db83.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/9e2e6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/62b72.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/dc677.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/6ce23.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/1f9f2.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/e2ed9.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/3cd3f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/madone-slr-7-axs/thumbs/1000/0d640.webp"
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
  },
  {
    id: 28,
    name: "Domane SLR 7",
    price: 7999,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-slr-7-axs-gen-4/thumbs/1000/4362a.webp",
    desc: "The Domane SLR 7 is the ultimate endurance Road bike, designed to help you go farther and faster with less effort. With a lightweight carbon frame, advanced suspension technology, and top-of-the-line components, this bike is built for comfort, performance, and versatility. Whether you're tackling long rides or rough terrain, the Domane SLR 7 will help you conquer any challenge.",
    category: "Road Bikes",
    featured: true,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-slr-7-axs-gen-4/thumbs/1000/4362a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-slr-7-axs-gen-4/thumbs/1000/5f447.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-slr-7-axs-gen-4/thumbs/1000/579e8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/domane-slr-7-axs-gen-4/thumbs/1000/dc412.webp"
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
  },
  {
    id: 29,
    name: "Checkpoint SL 6",
    price: 6999,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/3571c.webp",
    desc: "The Checkpoint SL 6 is the ultimate Gravel bike, designed to help you explore new terrain and push your limits. With a lightweight carbon frame, advanced components, and a comfortable geometry, this bike is built for performance, versatility, and fun. Whether you're commuting, exploring, or just enjoying a ride, the Checkpoint SL 6 will help you reach new destinations.",
    category: "Gravel Bikes",
    featured: false,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/3571c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/9ca90.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/c8ab0.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/dc781.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/5f2c2.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/c03bc.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/74cb2.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/a394e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/bcda6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/bf579.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/f1460.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/af96d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/e4d9b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/bd941.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/808ee.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/490f7.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/617cb.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/6d010.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/05d59.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/b2ef1.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/047ff.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/6e5fa.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/b4905.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/1512f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/7e836.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/4d144.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/6546b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/7a8db.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/719df.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/2253b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/311d6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/23df9.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/78f43.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/03d4b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/60bd0.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/16162.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/4736b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/be5c8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/fdcd8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/50374.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/3f1ba.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/12af7.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/a8e87.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/286f7.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/9aff8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/990a7.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/50bf8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/ea23a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/1bfd4.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/5a934.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/21ab8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/d2db4.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/2fb95.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/dc999.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/f0ee1.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/90c6c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/bfbc0.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/0f6d4.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/89775.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/1cbcf.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/38283.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/b5b13.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/30eae.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/a9216.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/3f33c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/97f11.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/2ed18.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/f82a3.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/b235d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/c1bad.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/c5933.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/c7205.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/e65e7.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/domane-slr-7-gen-4/thumbs/1000/95ceb.webp"
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
  },
  {
    id: 30,
    name: "Allant+ 8",
    price: 6999,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-8/thumbs/1000/1cd92.webp",
    desc: "The Allant+ 8 is the ultimate electric bike, designed to help you conquer any terrain with speed and power. With a lightweight aluminum frame, advanced components, and a powerful motor, this bike is built for performance, versatility, and fun. Whether you're commuting, exploring, or just enjoying a ride, the Allant+ 8 will help you reach new destinations.",
    category: "City Bikes",
    featured: false,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-8/thumbs/1000/1cd92.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-8/thumbs/1000/5c4a1.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-8/thumbs/1000/d290c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-8/thumbs/1000/aa8ae.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-8/thumbs/1000/4372f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-8/thumbs/1000/c7a63.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-8/thumbs/1000/c696f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-8/thumbs/1000/caa84.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-8/thumbs/1000/935ff.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-8/thumbs/1000/d71fb.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-8/thumbs/1000/0e591.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-8/thumbs/1000/b0837.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-8/thumbs/1000/923f1.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-8/thumbs/1000/d7c07.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2022/allantplus-8/thumbs/1000/e6a85.webp"
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
  },
  {
    id: 31,
    name: "Madone SLR 6",
    price: 9999,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/8b4ed.webp",
    desc: "The Madone SLR 9 is the ultimate road bike, designed to help you reach new speeds and conquer any climb. With a lightweight carbon frame, advanced aerodynamics, and top-of-the-line components, this bike is built for performance, speed, and efficiency. Whether you're racing, training, or just enjoying a ride, the Madone SLR 9 will help you achieve your goals.",
    category: "Road Bikes",
    featured: false,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/8b4ed.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/4230d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/1d0d2.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/d4d97.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/73eb1.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/ab35f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/e8a8c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/7929e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/c8cf9.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/ddf20.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/4f4a2.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/745f5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/1df44.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/2eaef.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/8682a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/0c65e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/9e4f1.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/b109d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/17760.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/f1f1a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/dcc42.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/9fe16.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/1c60b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/2a1b5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/b1b80.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/17fcd.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/df854.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/b7676.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/f7066.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/dc9cb.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/bb1ea.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/97389.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/475ef.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/f641d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/78b5c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/73571.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/85589.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/72500.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/c6d9a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/52053.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/81c26.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/f9fdd.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/8234c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/7bea2.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/948bb.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/d2a5a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/87976.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/ac53d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/ed6c3.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/88b9f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/d6206.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/141fc.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/acd32.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/0a8ef.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/38c91.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/7032a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/fbac5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/ae716.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/8f2f1.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/03c68.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/a7e08.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/b8cc1.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/641fa.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/f5439.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/d47e0.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/9f209.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/2b5e8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/883a8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/8cc03.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/45728.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/fe4cc.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/madone-slr-6-gen-7/thumbs/1000/6d76d.webp"
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
  },
  {
    id: 32,
    name: "Emonda SLR 7",
    price: 11999,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/5ca09.webp",
    desc: "The Emonda SLR 7 is the pinnacle of lightweight road bikes, engineered to deliver unmatched climbing performance and agility. Crafted with advanced carbon technology and equipped with high-end components, this bike is designed for riders who demand the best in speed and responsiveness. Whether you're tackling steep ascents or pushing your limits on fast descents, the Emonda SLR 7 is your ultimate companion for conquering the road.",
    category: "Road Bikes",
    featured: false,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/5ca09.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/c7ff5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/b1a70.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/e3794.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/c38a9.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/1b2eb.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/54490.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/4096a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/dc50d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/4212b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/0b893.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/f6d6f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/0a7cd.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/0692e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/98dbd.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/e0581.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/21888.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/ecdf7.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/430a6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/42473.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/6be56.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/142c1.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/7f15b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/e2a15.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/cb5b0.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/b1027.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/13ecd.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/700d5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/a4727.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/00ded.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/f71d4.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/0d389.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/c4ba3.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/600f5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/cacc5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/20a8d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/829a8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/15f40.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/1d6ff.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/4a3a5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/efad0.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/d7a5c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/858a7.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/9d69a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/58038.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/8a5d6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/f60b9.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/c9976.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/f4307.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/0ef5a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/81938.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/9d4d4.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/1f26d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/e7d73.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/8fc17.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/16f92.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/32ba6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/dc858.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/4da78.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/87c0e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/b8cc9.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/73564.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/a43dd.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/6aebc.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/0d95e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/f53a5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/bad05.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/1cfeb.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/4382a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/27f60.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/82cb7.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/3892c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/62e31.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/c84f9.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/19773.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/d54ab.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/2b4de.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/1a4aa.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/ad853.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/d5cd7.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/08326.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/88ab0.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/b00ae.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/328fe.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/8970f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/cd7bc.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/6096e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/d12f0.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/e2712.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/fe60c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/15f7d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/558a5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/56bea.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/a9192.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/2ecd8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/ae18f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/715f3.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/d40a0.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/3ebea.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/d72f7.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/07b21.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/184cf.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/afba2.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/f7fc9.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/f1554.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/43bee.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/0751e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/4c41f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/b3433.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/e06ed.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/9a94f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/6759b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/62e2f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/a524c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/5fe30.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/d3a2b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/24ec2.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/0fd37.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/62b64.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/b21b5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/f292c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/fd28e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/82cf6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/66c60.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/33473.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/77144.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/a9681.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/3835d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/690ab.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/a8fa6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-7/thumbs/1000/7d09e.webp"
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
  },
  {
    id: 33,
    name: "Emonda SLR 9",
    price: 13999,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/63c1e.webp",
    desc: "The Emonda SLR 9 is the pinnacle of lightweight road bikes, engineered to deliver unmatched climbing performance and agility. Crafted with advanced carbon technology and equipped with high-end components, this bike is designed for riders who demand the best in speed and responsiveness. Whether you're tackling steep ascents or pushing your limits on fast descents, the Emonda SLR 9 is your ultimate companion for conquering the road.",
    category: "Road Bikes",
    featured: false,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/63c1e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/b1cd2.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/882c8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/e890e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/96291.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/0fd20.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/4da94.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/3c845.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/e2c57.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/b79d6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/58649.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/b0bae.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/2bd6c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/f32f5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/8b4b8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/77a77.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/55d96.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/85061.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/efcb4.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/e34e8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/e3c6b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/3d6a6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/f8183.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/2645f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/d5bcd.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/dac66.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/2ff83.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/adb53.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/e3d1d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/f84c3.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/7a23e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/58469.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/28e0c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/3e643.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/6f907.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/296a2.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/2483a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/d6b20.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/78591.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/30d84.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/45f28.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/c5e60.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/aeec3.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/664da.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/05604.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/e2375.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/ebe29.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/56f25.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/c7053.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/0ad71.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/8b992.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/95a63.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/537af.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/53034.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/ee6cb.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/e4c1a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/87569.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/b9fbd.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/bf406.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/36fc6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/7c1f6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/bcf29.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/99278.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/d68a4.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/22411.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/4f00e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/e472b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/86174.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/1a84b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/1a10d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/9f54d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/763c6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/64be0.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/6d15b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/5b661.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/83205.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/1a560.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/4e66b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/e6cc8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/fd3e8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/6c873.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/eb2a2.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/7f644.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/ef66b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/6eb94.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/7c8af.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/f2d4e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/dafb5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/1f925.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/903b2.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/7ff95.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/89af0.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/a69c0.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/6acb4.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/fb0c4.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/a6b07.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/61fd0.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/2cbca.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/8f042.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/1931e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/6f536.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/e4f22.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/23253.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/6eb29.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/5719d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/d3087.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/18384.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/92864.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/f13d8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/9005f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/4333d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/2df22.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/e8728.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/e05e0.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/b500b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/c3b3f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/e2860.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/b7e49.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/f3aab.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/emonda-slr-9-axs/thumbs/1000/9af8b.webp"
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
  },
  {
    id: 34,
    name: "Speed Concept SLR 6",
    price: 7999,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/ea8fa.webp",
    desc: "The Speed Concept SLR 6 is a high-performance time trial and triathlon bike designed for athletes seeking speed and efficiency. Featuring an aerodynamic carbon frame and advanced components, this bike is built to minimize drag and maximize power transfer. Whether you're racing against the clock or pushing your limits in a triathlon, the Speed Concept SLR 6 offers the perfect blend of cutting-edge technology and rider-focused design to help you achieve your best performance.",
    category: "Road Bikes",
    featured: false,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/ea8fa.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/8bbdf.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/5e82d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/00f7d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/1e36b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/0e721.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/73caa.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/76f4c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/d3cc6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/129ab.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/67b29.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/8c6ae.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/324db.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/1df65.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/aa22d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/c1951.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/02ca5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/c61d8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/dc1b7.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/7782c.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/e54d2.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/010a9.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/7dbee.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/17f86.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/cf115.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/0703b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/ff954.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/3787f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/e78cc.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/06656.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/49991.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/15ac6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/18135.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/f1023.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/669ee.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/47b87.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/6c8a4.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/f58cf.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/55a0f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/01386.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/4982e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/52559.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/707be.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/a4467.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/bf0ee.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/0f47f.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/aa311.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/e5f50.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/772b8.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/ecaa6.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/651c4.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/a1b06.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/a0904.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/9bf97.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/24ff0.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/039a1.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/63e66.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/73c62.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/5d4c9.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/6fb76.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/2801d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/cf085.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/b61e3.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/2b59a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/96226.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/8ee5b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/05add.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/506cb.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/70927.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/47edf.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/0be31.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2024/speed-concept-slr-6-axs/thumbs/1000/bde11.webp"
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
  },
  {
    id: 35,
    name: "Supercaliber SL 9.7 GX AXS Gen 2",
    price: 6999,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/supercaliber-sl-9.7-gx-axs-gen-2/thumbs/1000/a2463.webp",
    desc: "The Supercaliber SLR 7 is a high-performance cross-country mountain bike designed for riders who demand speed, agility, and efficiency on the trails. Featuring Trek's innovative IsoStrut suspension technology, this bike provides a smooth ride while maintaining the lightweight characteristics of a hardtail. Equipped with top-tier components and a carbon frame, the Supercaliber SLR 7 is built to tackle challenging terrain and elevate your off-road riding experience.",
    category: "Mountain Bikes",
    featured: false,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/supercaliber-sl-9.7-gx-axs-gen-2/thumbs/1000/a2463.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/supercaliber-sl-9.7-gx-axs-gen-2/thumbs/1000/4e3c7.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/supercaliber-sl-9.7-gx-axs-gen-2/thumbs/1000/8cba7.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/supercaliber-sl-9.7-gx-axs-gen-2/thumbs/1000/c5ce5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/supercaliber-sl-9.7-gx-axs-gen-2/thumbs/1000/b84fd.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/supercaliber-sl-9.7-gx-axs-gen-2/thumbs/1000/a8972.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/supercaliber-sl-9.7-gx-axs-gen-2/thumbs/1000/f3b22.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/supercaliber-sl-9.7-gx-axs-gen-2/thumbs/1000/a4937.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/supercaliber-sl-9.7-gx-axs-gen-2/thumbs/1000/e1181.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/supercaliber-sl-9.7-gx-axs-gen-2/thumbs/1000/41a6d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/supercaliber-sl-9.7-gx-axs-gen-2/thumbs/1000/dacdb.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/supercaliber-sl-9.7-gx-axs-gen-2/thumbs/1000/698ad.webp"
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
  },
  {
    id: 36,
    name: "Supercaliber SL 9.8 XT Gen 2",
    price: 5999,
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/6fba3.webp",
    desc: "The Supercaliber SLR 7 is a high-performance cross-country mountain bike designed for riders who demand speed, agility, and efficiency on the trails. Featuring Trek's innovative IsoStrut suspension technology, this bike provides a smooth ride while maintaining the lightweight characteristics of a hardtail. Equipped with top-tier components and a carbon frame, the Supercaliber SLR 7 is built to tackle challenging terrain and elevate your off-road riding experience.",
    category: "Mountain Bikes",
    featured: false,
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/6fba3.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/c4846.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/1cee7.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/c5f06.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/76c39.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/2b15b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/47a22.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/b739b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/074cd.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/dc978.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/63461.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/ccc02.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/43b28.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/f9465.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/a652d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/21716.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/20fbb.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/16205.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/ae5a7.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/371ca.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/5b9b5.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/91537.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/4821e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/95b27.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/54077.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/8ba32.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/25023.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/74007.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/2e20a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2025/supercaliber-slr-9.8-xt-gen-2/thumbs/1000/a0784.webp"
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
  }
];

// Accessory Data (from accessories.js, fixed image placeholders)
const accessories = [
  {
    id: 31,
    title: "Wahoo KICKR Smart Trainer",
    price: 3999,
    image: "https://example.com/images/wahoo_kickr.jpg",
    description:
      "The Wahoo KICKR is a top-of-the-line smart trainer that offers realistic ride feel and accurate power measurement.",
    category: "Smart Trainers",
  },
  {
    id: 32,
    title: "Garmin Edge 530 GPS Bike Computer",
    price: 299,
    image: "https://example.com/images/garmin_edge_530.jpg",
    description:
      "The Garmin Edge 530 is a sleek and compact GPS bike computer that provides real-time tracking and navigation.",
    category: "GPS Bike Computers",
  },
  {
    id: 33,
    title: "Bontrager Circuit MIPS Helmet",
    price: 1299,
    image: "https://example.com/images/bontrager_circuit_mips.jpg",
    description:
      "The Bontrager Circuit MIPS Helmet is a high-performance helmet that offers advanced protection and comfort.",
    category: "Helmet",
  },
  {
    id: 34,
    title: "CamelBak Podium Chill Insulated Water Bottle",
    price: 1499,
    image: "https://example.com/images/camelbak_podium_chill.jpg",
    description:
      "The CamelBak Podium Chill Insulated Water Bottle is a durable and insulated water bottle that keeps your drink cold.",
    category: "Water Bottle",
  },
  {
    id: 35,
    title: "Lezyne Super GPS Bike Computer",
    price: 499,
    image: "https://example.com/images/lezyne_super_gps.jpg",
    description:
      "The Lezyne Super GPS Bike Computer is a sleek and compact GPS bike computer that provides real-time tracking and navigation.",
    category: "GPS Bike Computers",
  },
  {
    id: 36,
    title: "Trek Bontrager Starvos MIPS Helmet",
    price: 1499,
    image: "https://example.com/images/trek_bontrager_starvos_mips.jpg",
    description:
      "The Trek Bontrager Starvos MIPS Helmet is a high-performance helmet that offers advanced protection and comfort.",
    category: "Helmet",
  },
  {
    id: 37,
    title: "Elite Direto XR-T Smart Trainer",
    price: 1199,
    image: "https://example.com/images/elite_direto_xr-t.jpg",
    description:
      "The Elite Direto XR-T is a high-quality smart trainer that offers realistic ride feel and accurate power measurement.",
    category: "Smart Trainers",
  },
  {
    id: 38,
    title: "Bontrager Aelorus RSL 75 TLR Disc Road Wheelset",
    price: 1999,
    image: "https://example.com/images/bontrager_aelorus_rsl_75.jpg",
    description:
      "The Bontrager Aelorus RSL 75 TLR Disc Road Wheelset is a durable and high-performance road wheelset.",
    category: "Wheelsets",
  },
  {
    id: 39,
    title: "Specialized S-Works Evade II Helmet",
    price: 2499,
    image: "https://example.com/images/s-works_evade_ii.jpg",
    description:
      "The Specialized S-Works Evade II Helmet is a high-performance helmet that offers advanced protection and comfort.",
    category: "Helmet",
  },
  {
    id: 40,
    title: "Bontrager Aeolus Pro 3V TLR Disc Road Wheelset",
    price: 2999,
    image: "https://example.com/images/bontrager_aeolus_pro_3v.jpg",
    description:
      "The Bontrager Aeolus Pro 3V TLR Disc Road Wheelset is a durable and high-performance road wheelset.",
    category: "Wheelsets",
  },
  {
    id: 41,
    title: "Trek RSL Knit Road Cycling Shoes",
    price: 2499,
    image: "https://example.com/images/trek_rsl_knit_shoes.jpg",
    description:
      "The Trek RSL Knit Road Cycling Shoes are designed for comfort and durability.",
    category: "Shoes",
  },
  {
    id: 42,
    title: "Garmin Varia RTL515 Rearview Radar and Tail Light",
    price: 1299,
    image: "https://example.com/images/garmin_varia_rtl515.jpg",
    description:
      "The Garmin Varia RTL515 Rearview Radar and Tail Light is a high-performance rearview radar and tail light.",
    category: "Radar and Tail Lights",
  },
  {
    id: 43,
    title: "Wahoo ELEMNT BOLT GPS Bike Computer",
    price: 799,
    image: "https://example.com/images/wahoo_elemnt_bolt.jpg",
    description:
      "The Wahoo ELEMNT BOLT GPS Bike Computer is a sleek and compact GPS bike computer that provides real-time tracking and navigation.",
    category: "GPS Bike Computers",
  },
  {
    id: 44,
    title: "CamelBak Chase Bike Vest",
    price: 799,
    image: "https://example.com/images/camelbak_chase_bike_vest.jpg",
    description:
      "The CamelBak Chase Bike Vest is a durable and comfortable bike vest that offers protection from the elements.",
    category: "Bike Vests",
  },
  {
    id: 45,
    title: "Trek RSL Mountain Cycling Shoes",
    price: 1999,
    image: "https://example.com/images/trek_rsl_mountain_shoes.jpg",
    description:
      "The Trek RSL Mountain Cycling Shoes are designed for mountain biking and offer traction and durability.",
    category: "Shoes",
  },
];



const products = [...bikes, ...accessories];

// --- Product Endpoints ---

//Primary" welcome route
app.get("/", (req, res) => {
  res.send("Trek Bikes API is running!");
});

// Get all bikes/products (used by bikes-page.js)
app.get("/api/products/all", (req, res) => {
  // Return all products, combining bikes and accessories
  res.json(products);
  console.log(products);
});

app.get("/api/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send("Product not found.");
  }
});

// Get featured products (used by script.js for index.html)
app.get("/api/products/featured", (req, res) => {
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
app.get("/api/accessories", (req, res) => {
  res.json(accessories);
});

// Search products (re-implemented from bikes.js)
app.get("/api/search", (req, res) => {
  const query = req.query.q ? req.query.q.toLowerCase() : "";

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
