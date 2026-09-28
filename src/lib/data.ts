export type Category =
  | "cuisine"
  | "artisanat"
  | "contes"
  | "nature"
  | "patrimoine";

export type Artisan = {
  id: string;
  handle: string;
  name: string;
  city: string;
  photo?: string;
  initial: string;
  rating: number;
  reviews: number;
  bio: string;
  since: string;
};

export type Experience = {
  id: string;
  title: string;
  tagline: string;
  about: string;
  city: string;
  category: Category;
  categoryLabel: string;
  duration: string;
  guests: string;
  minGuests: number;
  maxGuests: number;
  price: number;
  rating: number;
  reviews: number;
  images: string[];
  artisanId: string;
  certified: boolean;
  program: { time: string; title: string; detail: string }[];
  included: string[];
  quotes: { name: string; city: string; text: string }[];
  heroTitle?: string;
};

export const categories: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "Tout" },
  { id: "cuisine", label: "Cuisine" },
  { id: "artisanat", label: "Artisanat" },
  { id: "contes", label: "Contes" },
  { id: "nature", label: "Nature" },
  { id: "patrimoine", label: "Patrimoine" },
];

export const artisans: Artisan[] = [
  {
    id: "gaspard",
    handle: "gasparddossou",
    name: "Gaspard Dossou",
    city: "Cotonou",
    photo: "/images/gaspard.jpg",
    initial: "g",
    rating: 5.0,
    reviews: 48,
    since: "2019",
    bio: "Cuisinier et conteur. Gaspard transmet les gestes de sa grand-mère à Akpakpa — le marché, la sauce, le feu, puis les histoires.",
  },
  {
    id: "kossi",
    handle: "kossi.potier",
    name: "Kossi Agbodjan",
    city: "Calavi",
    initial: "k",
    rating: 4.9,
    reviews: 31,
    since: "2014",
    bio: "Potier de Sè. Il façonne l’argile comme on lui a appris, pieds dans la terre rouge, sans tour électrique.",
  },
  {
    id: "ami",
    handle: "ami.tisse",
    name: "Ami Kponou",
    city: "Porto-Novo",
    initial: "a",
    rating: 4.9,
    reviews: 22,
    since: "2016",
    bio: "Tisseuse d’indigo. Ami ouvre son atelier familial à ceux qui veulent comprendre le fil, la cuve, et le temps.",
  },
];

export const experiences: Experience[] = [
  {
    id: "cuisine",
    title: "Atelier de cuisine traditionnelle béninoise",
    tagline:
      "Un voyage au cœur du Bénin à travers ses saveurs et ses traditions.",
    about:
      "Découvrez la richesse de la gastronomie béninoise à travers un atelier intimiste. Nous commençons au marché — piments, huile de palme, œufs, viande — puis rentrons préparer une sauce généreuse, celle que l’on sert le dimanche. Vous partez avec les gestes, la recette, et le goût du feu de bois.",
    city: "Cotonou",
    category: "cuisine",
    categoryLabel: "Cuisine",
    duration: "2h",
    guests: "2-6 personnes",
    minGuests: 2,
    maxGuests: 6,
    price: 15000,
    rating: 5.0,
    reviews: 24,
    images: [
      "/images/stew.jpg",
      "/images/kitchen.jpg",
      "/images/spices.jpg",
      "/images/gaspard.jpg",
    ],
    artisanId: "gaspard",
    certified: true,
    heroTitle: "Cuisinez le Bénin, pas une copie",
    program: [
      {
        time: "0h00",
        title: "Marché et épices",
        detail: "Choix des piments, de l’huile de palme, des œufs et de la viande.",
      },
      {
        time: "0h25",
        title: "Les gestes",
        detail: "Piler, rissoler, nouer la sauce — le rythme de la cuisine de cour.",
      },
      {
        time: "1h10",
        title: "Cuisson lente",
        detail: "La sauce prend, les œufs s’habillent, la viande s’attendrit.",
      },
      {
        time: "1h40",
        title: "Table partagée",
        detail: "On mange ensemble, on parle des dimanches, on recopie la recette.",
      },
    ],
    included: [
      "Tous les ingrédients",
      "Tablier et ustensiles",
      "Recette manuscrite",
      "Dégustation du plat",
    ],
    quotes: [
      {
        name: "Léa M.",
        city: "Paris",
        text: "Pas un cooking class. Un dimanche chez Gaspard. La sauce était exactement celle de la photo — brillante, profonde.",
      },
      {
        name: "Kwame A.",
        city: "Accra",
        text: "Il explique sans démontrer. On a les mains dans le piment. 5 étoiles, sans réserve.",
      },
    ],
  },
  {
    id: "argile",
    title: "Façonnez votre premier objet en argile",
    tagline: "Les mains dans la terre de Sè, sans tour, comme autrefois.",
    about:
      "À même le sol, Kossi vous apprend à sentir l’argile, à monter les parois, à corriger une lèvre trop fine. Vous repartez avec une pièce encore humide — et le droit de la rater, c’est comme ça qu’on apprend.",
    city: "Sè",
    category: "artisanat",
    categoryLabel: "Artisanat",
    duration: "3h",
    guests: "1-4 personnes",
    minGuests: 1,
    maxGuests: 4,
    price: 12000,
    rating: 4.9,
    reviews: 18,
    images: ["/images/pottery.jpg", "/images/weaving.jpg"],
    artisanId: "kossi",
    certified: true,
    heroTitle: "Façonnez votre premier objet en argile",
    program: [
      {
        time: "0h00",
        title: "La terre",
        detail: "Préparer l’argile, sentir l’humidité juste.",
      },
      {
        time: "0h40",
        title: "Le volume",
        detail: "Monter une forme — bol, canari, ou ce que vos mains veulent.",
      },
      {
        time: "2h00",
        title: "La finition",
        detail: "Lisser, signer, laisser sécher à l’ombre de la cour.",
      },
    ],
    included: ["Argile", "Outils", "Cuisson si vous revenez", "Thé de gingembre"],
    quotes: [
      {
        name: "Nora B.",
        city: "Lyon",
        text: "Trois heures sans téléphone. Mes mains savaient avant moi.",
      },
    ],
  },
  {
    id: "contes",
    title: "Soirée de contes autour d’un feu de bois",
    tagline:
      "Quand les étoiles illuminent les histoires de nos ancêtres.",
    about:
      "À Ouidah, quand la nuit tombe, Gaspard allume le feu. Les contes ne sont pas un spectacle : on s’assoit, on écoute, on répond au refrain. Les étoiles font le reste.",
    city: "Ouidah",
    category: "contes",
    categoryLabel: "Contes",
    duration: "2h30",
    guests: "4-12 personnes",
    minGuests: 4,
    maxGuests: 12,
    price: 8000,
    rating: 5.0,
    reviews: 36,
    images: ["/images/stories.jpg", "/images/abomey.jpg"],
    artisanId: "gaspard",
    certified: true,
    heroTitle: "Soirée de contes autour d’un feu de bois",
    program: [
      {
        time: "0h00",
        title: "Le feu",
        detail: "Arrivée au clair de lune, thé, présentation du cercle.",
      },
      {
        time: "0h30",
        title: "Les contes",
        detail: "Trois histoires — lièvre, rois, mer — et les refrains à reprendre.",
      },
      {
        time: "2h00",
        title: "Silence",
        detail: "On laisse le feu descendre. Questions, si vous en avez.",
      },
    ],
    included: ["Thé", "Coussins", "Feu de bois", "Cercle limité"],
    quotes: [
      {
        name: "Inès T.",
        city: "Cotonou",
        text: "J’ai emmené mes enfants. Ils n’ont pas bougé. Ça n’arrive jamais.",
      },
    ],
  },
  {
    id: "lagune",
    title: "Pirogue sur la lagune de Porto-Novo",
    tagline: "L’eau, les palmes, et le silence d’un matin sur la lagune.",
    about:
      "Une pirogue, un rameur, la mangrove. On part tôt, avant la chaleur, pour voir la lagune se réveiller — filets, oiseaux, villages d’eau.",
    city: "Porto-Novo",
    category: "nature",
    categoryLabel: "Nature",
    duration: "2h",
    guests: "2-5 personnes",
    minGuests: 2,
    maxGuests: 5,
    price: 10000,
    rating: 4.8,
    reviews: 15,
    images: ["/images/lagoon.jpg", "/images/ganvie.jpg"],
    artisanId: "ami",
    certified: true,
    heroTitle: "Glissez entre palmes et silence",
    program: [
      {
        time: "0h00",
        title: "Mise à l’eau",
        detail: "Embarcadère à l’aube, gilets, consignes.",
      },
      {
        time: "0h20",
        title: "La lagune",
        detail: "Chenal étroit, oiseaux, filets tendus entre les palétuviers.",
      },
      {
        time: "1h40",
        title: "Retour",
        detail: "Café sucré sur la rive, photos si vous voulez.",
      },
    ],
    included: ["Pirogue privée", "Guide", "Gilet", "Café au retour"],
    quotes: [
      {
        name: "Marc D.",
        city: "Bruxelles",
        text: "Le cliché drone existe. Vivre le chenal, c’est autre chose.",
      },
    ],
  },
  {
    id: "tissage",
    title: "Tissage indigo à Porto-Novo",
    tagline: "Le fil, la cuve, et le temps qu’il faut.",
    about:
      "Ami ouvre la cour où sa mère teignait encore. Vous apprenez à tendre la chaîne, à plonger le coton, à lire le bleu qui n’est jamais le même deux fois.",
    city: "Porto-Novo",
    category: "artisanat",
    categoryLabel: "Artisanat",
    duration: "3h",
    guests: "1-5 personnes",
    minGuests: 1,
    maxGuests: 5,
    price: 14000,
    rating: 4.9,
    reviews: 12,
    images: ["/images/weaving.jpg", "/images/spices.jpg"],
    artisanId: "ami",
    certified: true,
    heroTitle: "Tissez l’indigo, une trame à la fois",
    program: [
      {
        time: "0h00",
        title: "La cuve",
        detail: "Comprendre l’indigo, le ferment, la couleur qui respire.",
      },
      {
        time: "0h50",
        title: "Le métier",
        detail: "Chaîne, trame, le rythme des pieds et des mains.",
      },
      {
        time: "2h20",
        title: "Votre pièce",
        detail: "Une bande à emporter, encore humide de bleu.",
      },
    ],
    included: ["Coton", "Indigo", "Métier", "Bande tissée à emporter"],
    quotes: [
      {
        name: "Sofia R.",
        city: "Madrid",
        text: "Le bleu d’Ami ne ressemble à aucun magasin. C’est vivant.",
      },
    ],
  },
  {
    id: "ganvie",
    title: "Matin à Ganvié, village sur l’eau",
    tagline: "Maisons sur pilotis, marché flottant, lumière de brume.",
    about:
      "On part de Cotonou avant l’aube pour arriver quand Ganvié fume encore. Pirogue entre les maisons, salutations, marché — puis le silence de l’eau.",
    city: "Ganvié",
    category: "patrimoine",
    categoryLabel: "Patrimoine",
    duration: "4h",
    guests: "2-8 personnes",
    minGuests: 2,
    maxGuests: 8,
    price: 18000,
    rating: 4.8,
    reviews: 27,
    images: ["/images/ganvie.jpg", "/images/lagoon.jpg"],
    artisanId: "kossi",
    certified: true,
    heroTitle: "Ganvié, avant les cars de touristes",
    program: [
      {
        time: "0h00",
        title: "Traversée",
        detail: "Route puis pirogue, brume sur le lac Nokoué.",
      },
      {
        time: "1h00",
        title: "Le village",
        detail: "Rues d’eau, école, marché, conversations au ralenti.",
      },
      {
        time: "3h00",
        title: "Retour",
        detail: "Pêcheurs rentrant, lumière déjà dure.",
      },
    ],
    included: ["Transfert", "Pirogue", "Guide local", "Eau"],
    quotes: [
      {
        name: "Pauline K.",
        city: "Dakar",
        text: "On n’est pas restés sur la jetée. On a été reçus. Ça change tout.",
      },
    ],
  },
  {
    id: "abomey",
    title: "Abomey, palais et bas-reliefs",
    tagline: "La terre rouge, les murs parlants, la mémoire des rois.",
    about:
      "Une journée courte et dense dans les palais d’Abomey. Bas-reliefs, cours, récits — sans récitation de guide, avec quelqu’un qui a grandi à l’ombre des murs.",
    city: "Abomey",
    category: "patrimoine",
    categoryLabel: "Patrimoine",
    duration: "5h",
    guests: "2-8 personnes",
    minGuests: 2,
    maxGuests: 8,
    price: 20000,
    rating: 4.9,
    reviews: 19,
    images: ["/images/abomey.jpg", "/images/stories.jpg"],
    artisanId: "gaspard",
    certified: true,
    heroTitle: "Marcher la terre rouge des palais",
    program: [
      {
        time: "0h00",
        title: "Les cours",
        detail: "Entrée par les cours successives, le protocole d’autrefois.",
      },
      {
        time: "1h30",
        title: "Les murs",
        detail: "Lire les bas-reliefs comme on lit une famille.",
      },
      {
        time: "3h30",
        title: "Le marché",
        detail: "Tissus, fer, gingembre — puis la route du retour.",
      },
    ],
    included: ["Guide", "Droits d’entrée", "Eau", "Pause déjeuner libre"],
    quotes: [
      {
        name: "Julien P.",
        city: "Marseille",
        text: "Enfin un récit qui n’est pas un prospectus. Les murs ont parlé.",
      },
    ],
  },
];

export const heroSlides = [
  {
    experienceId: "argile",
    kicker: "Artisanat",
    title: "Façonnez votre premier objet en argile",
  },
  {
    experienceId: "cuisine",
    kicker: "Cuisine",
    title: "Atelier de cuisine traditionnelle béninoise",
  },
  {
    experienceId: "contes",
    kicker: "Contes",
    title: "Soirée de contes autour d’un feu de bois",
  },
  {
    experienceId: "tissage",
    kicker: "Artisanat",
    title: "Tissez l’indigo comme à Porto-Novo",
  },
];

export const recommendedIds = [
  "contes",
  "lagune",
  "cuisine",
  "ganvie",
  "tissage",
  "abomey",
];

export function getExperience(id: string) {
  return experiences.find((item) => item.id === id);
}

export function getArtisan(id: string) {
  return artisans.find((item) => item.id === id);
}

export function artisanOf(experience: Experience) {
  return getArtisan(experience.artisanId);
}

export function formatFcfa(value: number) {
  return `${new Intl.NumberFormat("fr-FR").format(value)} FCFA`;
}

export const immersionImages = [
  { src: "/images/abomey.jpg", caption: "Abomey, la terre rouge" },
  { src: "/images/ganvie.jpg", caption: "Ganvié, le village sur l’eau" },
  { src: "/images/stories.jpg", caption: "Ouidah, sous les étoiles" },
  { src: "/images/lagoon.jpg", caption: "Porto-Novo, la lagune" },
  { src: "/images/pottery.jpg", caption: "Sè, l’argile" },
  { src: "/images/kitchen.jpg", caption: "Cotonou, le feu de cour" },
];
