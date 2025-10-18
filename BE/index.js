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
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/SpeedConceptSLR9AXS-25-48020-E-Portrait",
    thumb_images: [
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-9-axs/thumbs/1000/c983d.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-9-axs/thumbs/1000/7242a.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-9-axs/thumbs/1000/0814e.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-9-axs/thumbs/1000/bfc8b.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-9-axs/thumbs/1000/80ba4.webp",
      "https://d2yn9m4p3q9iyv.cloudfront.net/trek/2026/speed-concept-slr-9-axs/thumbs/1000/eb16e.webp"
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
    id: 2,
    name: "Madone SLR 9 AXS Gen 8",
    price: 13499,
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/MadoneSLR9AXS-26-46151-E-Primary",
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
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/DomaneSLR9AXS-26-57944-A-Primary",
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
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/CheckmateSLR9AXS-26-46-Primary",
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
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/SupercaliberSLR99XXFlightAttendant-26-57945-A-Primary",
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
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/TopFuelSLR99XX1AXS-26-57946-A-Primary",
    desc: "The Top Fuel SLR 9.9 XX1 AXS Gen 4 is the ultimate trail bike, designed to tackle any terrain with speed and agility. With a lightweight carbon frame, advanced suspension technology, and top-tier components, it’s built for performance and adventure.",
    category: "Mountain Bikes",
    featured: true,
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
  },
  {
    id: 7,
    name: "Rail 9.9 XX1 AXS",
    price: 8999,
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/Rail99XX1AXS-26-57947-A-Primary",
    desc: "The Rail 9.9 XX1 AXS is the ultimate e-MTB, combining power and performance with a sleek carbon frame and advanced suspension. Perfect for conquering trails and mountains alike.",
    category: "Mountain Bikes",
    featured: true,
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
  },
  {
    id: 8,
    name: "Marlin 8",
    price: 1199,
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/Marlin8-26-57948-A-Primary",
    desc: "The Marlin 8 is a hardtail mountain bike designed for agility and control. With an aluminum frame and responsive suspension, it’s ideal for both trails and daily rides.",
    category: "Mountain Bikes",
    featured: false,
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
  },
  {
    id: 9,
    name: "Slash 9.9 XX1 AXS",
    price: 8999,
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/Slash99XX1AXS-26-57949-A-Primary",
    desc: "The Slash 9.9 XX1 AXS is the ultimate enduro bike, built for high-speed descents and technical climbs. Lightweight, powerful, and efficient — ready for any trail.",
    category: "Mountain Bikes",
    featured: false,
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
  },
  {
    id: 10,
    name: "Procaliber 9.9 XX1 AXS",
    price: 7999,
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/Procaliber99XX1AXS-26-57950-A-Primary",
    desc: "The Procaliber 9.9 XX1 AXS is a lightweight, cross-country race bike built for efficiency and control. Designed to help you ride faster and farther with less effort.",
    category: "Mountain Bikes",
    featured: false,
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
  },
  {
    id: 11,
    name: "FX Sport 6",
    price: 6999,
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/FXSport6-26-57951-A-Primary",
    desc: "The FX Sport 6 is the ultimate fitness bike, designed to help you stay in shape and enjoy the ride. With a lightweight aluminum frame, advanced components, and a comfortable geometry, this bike is built for performance, versatility, and fun. Whether you're commuting, training, or just enjoying a ride, the FX Sport 6 will help you reach your fitness goals.",
    category: "City Bikes",
    featured: false,
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
  },
  {
    id: 12,
    name: "Dual Sport 3",
    price: 5999,
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/DualSport3-26-57952-A-Primary",
    desc: "The Dual Sport 3 is the ultimate hybrid bike, designed to help you tackle any terrain with ease. With a lightweight aluminum frame, advanced components, and a comfortable geometry, this bike is built for performance, versatility, and fun. Whether you're commuting, exploring, or just enjoying a ride, the Dual Sport 3 will help you reach new destinations.",
    category: "City Bikes",
    featured: false,
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
  },
  {
    id: 13,
    name: "Verve 3",
    price: 4999,
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/Verve3-26-57953-A-Primary",
    desc: "The Verve 3 is the ultimate comfort bike, designed to help you enjoy the ride. With a lightweight aluminum frame, advanced components, and a comfortable geometry, this bike is built for performance, versatility, and fun. Whether you're commuting, exploring, or just enjoying a ride, the Verve 3 will help you reach new destinations.",
    category: "City Bikes",
    featured: false,
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
  },
  {
    id: 14,
    name: "Allant+ 9.9S",
    price: 8999,
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/AllantPlus99S-26-57954-A-Primary",
    desc: "The Allant+ 9.9S is the ultimate electric bike, designed to help you conquer any terrain with speed and power. With a lightweight aluminum frame, advanced components, and a powerful motor, this bike is built for performance, versatility, and fun. Whether you're commuting, exploring, or just enjoying a ride, the Allant+ 9.9S will help you reach new destinations.",
    category: "City Bikes",
    featured: false,
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
  },
  {
    id: 15,
    name: "Checkpoint SL 7",
    price: 7999,
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/CheckpointSL7-26-57955-A-Primary",
    desc: "The Checkpoint SL 7 is the ultimate Gravel bike, designed to help you explore new terrain and push your limits. With a lightweight carbon frame, advanced components, and a comfortable geometry, this bike is built for performance, versatility, and fun. Whether you're commuting, exploring, or just enjoying a ride, the Checkpoint SL 7 will help you reach new destinations.",
    category: "Gravel Bikes",
    featured: false,
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
  },
  {
    id: 16,
    name: "Domane AL 5",
    price: 2999,
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/DomaneAL5-26-57956-A-Primary",
    desc: "The Domane AL 5 is the ultimate entry-level Road bike, designed to help you get started on your cycling journey. With a lightweight aluminum frame, advanced components, and a comfortable geometry, this bike is built for performance, versatility, and fun. Whether you're commuting, training, or just enjoying a ride, the Domane AL 5 will help you reach your cycling goals.",
    category: "Road Bikes",
    featured: false,
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
  },
  {
    id: 17,
    name: "Checkpoint ALR 5",
    price: 2499,
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/CheckpointALR5-26-57957-A-Primary",
    desc: "The Checkpoint ALR 5 is the ultimate entry-level Gravel bike, designed to help you explore new terrain and push your limits. With a lightweight aluminum frame, advanced components, and a comfortable geometry, this bike is built for performance, versatility, and fun. Whether you're commuting, exploring, or just enjoying a ride, the Checkpoint ALR 5 will help you reach new destinations.",
    category: "Gravel Bikes",
    featured: false,
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
  },
  {
    id: 18,
    name: "Marlin 7",
    price: 799,
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/Marlin7-26-57958-A-Primary",
    desc: "The Marlin 7 is the ultimate hardtail mountain bike, designed to help you tackle any trail with speed and agility. With a lightweight aluminum frame, advanced suspension technology, and top-of-the-line components, this bike is built for performance, versatility, and adventure. Whether you're racing or just enjoying a ride, the Marlin 7 will help you reach new heights.",
    category: "Mountain Bikes",
    featured: false,
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
  },
  {
    id: 19,
    name: "FX 3 Disc",
    price: 699,
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/FX3Disc-26-57959-A-Primary",
    desc: "The FX 3 Disc is the ultimate fitness bike, designed to help you stay in shape and enjoy the ride. With a lightweight aluminum frame, advanced components, and a comfortable geometry, this bike is built for performance, versatility, and fun. Whether you're commuting, training, or just enjoying a ride, the FX 3 Disc will help you reach your fitness goals.",
    category: "City Bikes",
    featured: false,
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
  },
  {
    id: 20,
    name: "Verve 1",
    price: 499,
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/Verve1-26-57960-A-Primary",
    desc: "The Verve 1 is the ultimate comfort bike, designed to help you enjoy the ride. With a lightweight aluminum frame, advanced components, and a comfortable geometry, this bike is built for performance, versatility, and fun. Whether you're commuting, exploring, or just enjoying a ride, the Verve 1 will help you reach new destinations.",
    category: "City Bikes",
    featured: false,
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
  },
  {
    id: 21,
    name: "Checkpoint AL 4",
    price: 1999,
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/CheckpointAL4-26-57961-A-Primary",
    desc: "The Checkpoint AL 4 is the ultimate entry-level Gravel bike, designed to help you explore new terrain and push your limits. With a lightweight aluminum frame, advanced components, and a comfortable geometry, this bike is built for performance, versatility, and fun. Whether you're commuting, exploring, or just enjoying a ride, the Checkpoint AL 4 will help you reach new destinations.",
    category: "Gravel Bikes",
    featured: false,
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
  },
  {
    id: 22,
    name: "Dual Sport 1",
    price: 399,
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/DualSport1-26-57962-A-Primary",
    desc: "The Dual Sport 1 is the ultimate hybrid bike, designed to help you tackle any terrain with ease. With a lightweight aluminum frame, advanced components, and a comfortable geometry, this bike is built for performance, versatility, and fun. Whether you're commuting, exploring, or just enjoying a ride, the Dual Sport 1 will help you reach new destinations.",
    category: "City Bikes",
    featured: false,
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
  },
  {
    id: 23,
    name: "Allant+ 7",
    price: 4999,
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/AllantPlus7-26-57963-A-Primary",
    desc: "The Allant+ 7 is the ultimate electric bike, designed to help you conquer any terrain with speed and power. With a lightweight aluminum frame, advanced components, and a powerful motor, this bike is built for performance, versatility, and fun. Whether you're commuting, exploring, or just enjoying a ride, the Allant+ 7 will help you reach new destinations.",
    category: "City Bikes",
    featured: false,
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
  },
  {
    id: 24,
    name: "Domane AL 2",
    price: 899,
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/DomaneAL2-26-57964-A-Primary",
    desc: "The Domane AL 2 is the ultimate entry-level Road bike, designed to help you get started on your cycling journey. With a lightweight aluminum frame, advanced components, and a comfortable geometry, this bike is built for performance, versatility, and fun. Whether you're commuting, training, or just enjoying a ride, the Domane AL 2 will help you reach your cycling goals.",
    category: "Road Bikes",
    featured: false,
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
  },
  {
    id: 25,
    name: "Marlin 5",
    price: 699,
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/Marlin5-26-57965-A-Primary",
    desc: "The Marlin 5 is the ultimate hardtail mountain bike, designed to help you tackle any trail with speed and agility. With a lightweight aluminum frame, advanced suspension technology, and top-of-the-line components, this bike is built for performance, versatility, and adventure. Whether you're racing or just enjoying a ride, the Marlin 5 will help you reach new heights.",
    category: "Mountain Bikes",
    featured: false,
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
  },
  {
    id: 26,
    name: "Speed Concept SLR 7",
    price: 9999,
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/SpeedConceptSLR7-26-57966-A-Primary",
    desc: "The Speed Concept SLR 7 is the ultimate triathlon and time trial bike, designed to help you go faster with less effort. With a full carbon frame, integrated storage solutions, and the latest aerodynamic technology, this bike is built for speed and efficiency.",
    category: "Road Bikes",
    featured: true,
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
  },
  {
    id: 27,
    name: "Madone SLR 7",
    price: 8999,
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/MadoneSLR7-26-57967-A-Primary",
    desc: "The Madone SLR 7 is the ultimate Road bike for riders who demand the best. With a lightweight carbon frame, advanced aerodynamic design, and top-of-the-line components, this bike is built for speed, comfort, and performance. Whether you're racing or just enjoying a long ride, the Madone SLR 7 will help you reach your full potential.",
    category: "Road Bikes",
    featured: true,
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
  },
  {
    id: 28,
    name: "Domane SLR 7",
    price: 7999,
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/DomaneSLR7-26-57968-A-Primary",
    desc: "The Domane SLR 7 is the ultimate endurance Road bike, designed to help you go farther and faster with less effort. With a lightweight carbon frame, advanced suspension technology, and top-of-the-line components, this bike is built for comfort, performance, and versatility. Whether you're tackling long rides or rough terrain, the Domane SLR 7 will help you conquer any challenge.",
    category: "Road Bikes",
    featured: true,
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
  },
  {
    id: 29,
    name: "Checkpoint SL 6",
    price: 6999,
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/CheckpointSL6-26-57969-A-Primary",
    desc: "The Checkpoint SL 6 is the ultimate Gravel bike, designed to help you explore new terrain and push your limits. With a lightweight carbon frame, advanced components, and a comfortable geometry, this bike is built for performance, versatility, and fun. Whether you're commuting, exploring, or just enjoying a ride, the Checkpoint SL 6 will help you reach new destinations.",
    category: "Gravel Bikes",
    featured: false,
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
  },
  {
    id: 30,
    name: "Allant+ 8",
    price: 6999,
    image: "https://media.trekbikes.com/image/upload/w_1024,h_768,c_pad,f_auto,fl_progressive:semi,q_auto/AllantPlus8-26-57970-A-Primary",
    desc: "The Allant+ 8 is the ultimate electric bike, designed to help you conquer any terrain with speed and power. With a lightweight aluminum frame, advanced components, and a powerful motor, this bike is built for performance, versatility, and fun. Whether you're commuting, exploring, or just enjoying a ride, the Allant+ 8 will help you reach new destinations.",
    category: "City Bikes",
    featured: false,
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
  },
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
