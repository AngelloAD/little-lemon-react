// src/data/menuData.js

// ================== DISHES ==================
import salad from "../assets/dishes/greek-salad.jpg";
import bruchetta from "../assets/dishes/bruchetta.svg";
import pasta from "../assets/dishes/pasta-with-vegetables.png";
import fish from "../assets/dishes/grilled-fish.png";
import hummus from "../assets/dishes/hummus-y-pita.png";
import chicken from "../assets/dishes/chicken-souvlaki.png";

// ================== DESSERTS ==================
import panna from "../assets/dishes/panna.png";
import chocolate from "../assets/dishes/chocolate.png";
import dessert from "../assets/dishes/lemon-dessert.jpg";

// ================== DRINKS ==================
import lemonade from "../assets/dishes/lemonade.png";
import tea from "../assets/dishes/tea.png";
import sparkling from "../assets/dishes/sparkling.jpg";

/**
 * Static menu data used across the application.
 * This file intentionally contains no logic.
 */
export const menuItems = [
  // ===== MAIN DISHES =====
  {
    id: 1,
    name: "Greek Salad",
    price: "$12.99",
    image: salad,
    alt: "Greek salad",
    category: "dishes",
    description:
      "Crisp lettuce, peppers, olives, and feta cheese, dressed with our homemade vinaigrette.",
  },
  {
    id: 2,
    name: "Bruchetta",
    price: "$8.50",
    image: bruchetta,
    alt: "Bruchetta",
    category: "dishes",
    description:
      "Grilled bread topped with garlic, tomatoes, olive oil, and fresh basil.",
  },
  {
    id: 3,
    name: "Mediterranean Pasta",
    price: "$14.75",
    image: pasta,
    alt: "Mediterranean pasta",
    category: "dishes",
    description:
      "Pasta tossed with vegetables, herbs, and a light olive oil sauce.",
  },
  {
    id: 4,
    name: "Grilled Fish",
    price: "$18.99",
    image: fish,
    alt: "Grilled fish",
    category: "dishes",
    description:
      "Freshly grilled fish served with seasonal vegetables and lemon.",
  },
  {
    id: 5,
    name: "Hummus & Pita",
    price: "$9.25",
    image: hummus,
    alt: "Hummus and pita",
    category: "dishes",
    description:
      "Creamy chickpea hummus blended with tahini, garlic, and lemon juice, served with warm pita bread.",
  },
  {
    id: 6,
    name: "Chicken Souvlaki",
    price: "$16.50",
    image: chicken,
    alt: "Chicken souvlaki",
    category: "dishes",
    description:
      "Marinated chicken skewers grilled to perfection, served with rice and tzatziki sauce.",
  },

  // ===== DESSERTS =====
  {
    id: 7,
    name: "Berry Panna Cotta",
    price: "$7.25",
    image: panna,
    alt: "Berry panna cotta",
    category: "desserts",
    description:
      "Silky vanilla panna cotta topped with fresh mixed berries.",
  },
  {
    id: 8,
    name: "Chocolate Lava Cake",
    price: "$7.99",
    image: chocolate,
    alt: "Chocolate lava cake",
    category: "desserts",
    description:
      "Warm chocolate cake with a molten center, served with vanilla ice cream.",
  },
  {
    id: 9,
    name: "Lemon Dessert",
    price: "$6.99",
    image: dessert,
    alt: "Lemon dessert",
    category: "desserts",
    description:
      "A classic lemon dessert with a smooth texture and fresh flavor.",
  },

  // ===== DRINKS =====
  {
    id: 10,
    name: "Fresh Lemonade",
    price: "$4.50",
    image: lemonade,
    alt: "Fresh lemonade",
    category: "drinks",
    description:
      "Homemade lemonade made with fresh lemons and a hint of mint.",
  },
  {
    id: 11,
    name: "Iced Herbal Tea",
    price: "$4.25",
    image: tea,
    alt: "Iced herbal tea",
    category: "drinks",
    description:
      "Chilled herbal tea infused with Mediterranean herbs.",
  },
  {
    id: 12,
    name: "Sparkling Citrus Water",
    price: "$3.99",
    image: sparkling,
    alt: "Sparkling citrus water",
    category: "drinks",
    description:
      "Sparkling water with fresh citrus slices for a crisp finish.",
  },
];
