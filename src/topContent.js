import attac from "./assets/attac.jpg";
import baddie1 from "./assets/baddie1.jpg";
import baddie2 from "./assets/baddie2.jpg";
import baddie3 from "./assets/baddie3.jpg";
import bombah from "./assets/bombah.jpg";
import disneyland from "./assets/disneyland.jpg";
import drinky from "./assets/drinky.jpg";
import goldCoast from "./assets/goldCoast.jpg";
import goodThings from "./assets/goodThings.jpg";
import grad from "./assets/grad.jpg";
import hotpot1 from "./assets/hotpot1.jpg";
import japan2 from "./assets/japan2.jpg";
import lv from "./assets/lv.jpg";
import melbs from "./assets/melbs.jpg";
import mjolner from "./assets/mjolner.jpg";
import picnic from "./assets/picnic.jpg";

export const CONTENT = [
  {
    header: "You can smash a good feed",
    mems: [
      {
        imgSrc: mjolner,
        date: new Date(2024, 6, 14),
        location: "Mjolner Melbourne",
        description: "2nd Melbourne Trip",
      },
      {
        imgSrc: hotpot1,
        date: new Date(2021, 10, 13),
        location: "Great Dragon Hotpot",
        description: "4 Year Anniversary Dinner",
      },
    ],
  },
  {
    header: "We adventure together",
    mems: [
      {
        imgSrc: goldCoast,
        date: new Date(2022, 6, 14),
        location: "Gold Coast",
        description: "Gold Coast Trip",
      },
      {
        imgSrc: bombah,
        date: new Date(2023, 10, 11),
        location: "Bombah Point",
        description: "6 Year Anniversary",
      },
      {
        imgSrc: melbs,
        date: new Date(2022, 4, 10),
        location: "South Yarra, Melbourne",
        description: "Melbourne Trip",
      },
      {
        imgSrc: disneyland,
        date: new Date(2023, 8, 22),
        location: "Disneyland Japan",
        description: "Japan Trip",
      },
      {
        imgSrc: japan2,
        date: new Date(2023, 8, 23),
        location: "Nishishinjuku",
        description: "Japan Trip",
      },
    ],
  },
  {
    header: "You're always ready to attack",
    mems: [
      {
        imgSrc: attac,
        date: new Date(2024, 7, 4),
        location: "Thredbo",
        description: "Snowy Trip",
      },
    ],
  },
  {
    header: "You're a baddie",
    mems: [
      {
        imgSrc: baddie1,
        date: new Date(2021, 10, 13),
        location: "Sydney Australia",
        description: "4 Year Anniversary",
      },
      {
        imgSrc: baddie2,
        date: new Date(2022, 10, 13),
        location: "Sydney Australia",
        description: "5 Year Anniversary",
      },
      {
        imgSrc: baddie3,
        date: new Date(2019, 6, 15),
        location: "Sydney Australia",
        description: "Ionas 20th Birthday",
      },
    ],
  },
  {
    header: "You support me through my most important moments",
    mems: [
      {
        imgSrc: grad,
        date: new Date(2023, 11, 4),
        location: "Sydney Australia",
        description: "My graduation",
      },
    ],
  },
  {
    header: "You take the effort to learn about my interests",
    mems: [
      {
        imgSrc: picnic,
        date: new Date(2022, 6, 25),
        location: "Kamay Botany Bay National Park",
        description: "Picnic",
      },
      {
        imgSrc: goodThings,
        date: new Date(2022, 11, 3),
        location: "Centennial Park",
        description: "Good Things Festival",
      },
    ],
  },
  {
    header: "You love a good drinky drink just as much as I do",
    mems: [
      {
        imgSrc: drinky,
        date: new Date(2019, 10, 13),
        location: "Sydney Australia",
        description: "2 Year Anniversary",
      },
    ],
  },
  {
    header: "You're a sugar mommy",
    mems: [
      {
        imgSrc: lv,
        date: new Date(2020, 4, 16),
        location: "Sydney Australia",
        description: "Buying your LV Bag",
      },
    ],
  },
];
