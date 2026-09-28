import { i as __toESM } from "../_runtime.mjs";
import { X as require_react, d as require_react_dom, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-CVi4q4mI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var StageContext = (0, import_react.createContext)(null);
function AppFrame({ children, footer }) {
	const [stage, setStage] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh bg-canvas",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:grid lg:min-h-dvh lg:grid-cols-[minmax(0,1fr)_var(--width-app)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPanel, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StageContext.Provider, {
				value: stage,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: setStage,
					className: "relative mx-auto flex h-dvh w-full max-w-app flex-col overflow-hidden bg-bg lg:max-w-none lg:shadow-frame",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-h-0 flex-1 overflow-x-hidden overflow-y-auto scrollbar-none",
						children
					}), footer]
				})
			})]
		})
	});
}
function BrandPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "relative hidden overflow-hidden lg:flex",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/stories.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover anim-kenburns"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-ink via-ink/55 to-ink/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex w-full flex-col justify-between p-12 text-on-media",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "text-3xl font-semibold tracking-tight",
					children: "yonwa"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-md space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-4xl font-semibold leading-tight tracking-tight",
							children: [
								"Le Bénin, vécu.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Pas visité."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-on-media/75",
							children: "Des ateliers chez l’artisan — cuisine, argile, contes, lagune. Certifiés, remboursables, tenus à taille humaine."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-8 pt-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									value: "48",
									label: "artisans"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									value: "14",
									label: "villes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									value: "5.0",
									label: "note moyenne"
								})
							]
						})
					]
				})]
			})
		]
	});
}
function Stat({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-xl font-semibold tabular-nums",
		children: value
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-on-media/60",
		children: label
	})] });
}
function Overlay({ open, onClose, children, labelledBy }) {
	const stage = (0, import_react.useContext)(StageContext);
	if (!open) return null;
	const node = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-50 flex flex-col justify-end",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-ink/40",
			"aria-label": "Fermer",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": labelledBy,
			className: "anim-sheet relative max-h-[88%] overflow-y-auto rounded-t-3xl bg-bg p-5 shadow-float scrollbar-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mb-4 h-1 w-10 rounded-full bg-line" }), children]
		})]
	});
	if (stage) return (0, import_react_dom.createPortal)(node, stage);
	return node;
}
function Cover({ open, children }) {
	const stage = (0, import_react.useContext)(StageContext);
	if (!open) return null;
	if (stage) return (0, import_react_dom.createPortal)(children, stage);
	return children;
}
function MediaButton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: cn("flex size-11 items-center justify-center rounded-full bg-bg/92 text-fg shadow-float backdrop-blur-md active:scale-[0.96]", className),
		...props
	});
}
var categories = [
	{
		id: "all",
		label: "Tout"
	},
	{
		id: "cuisine",
		label: "Cuisine"
	},
	{
		id: "artisanat",
		label: "Artisanat"
	},
	{
		id: "contes",
		label: "Contes"
	},
	{
		id: "nature",
		label: "Nature"
	},
	{
		id: "patrimoine",
		label: "Patrimoine"
	}
];
var artisans = [
	{
		id: "gaspard",
		handle: "gasparddossou",
		name: "Gaspard Dossou",
		city: "Cotonou",
		photo: "/images/gaspard.jpg",
		initial: "g",
		rating: 5,
		reviews: 48,
		since: "2019",
		bio: "Cuisinier et conteur. Gaspard transmet les gestes de sa grand-mère à Akpakpa — le marché, la sauce, le feu, puis les histoires."
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
		bio: "Potier de Sè. Il façonne l’argile comme on lui a appris, pieds dans la terre rouge, sans tour électrique."
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
		bio: "Tisseuse d’indigo. Ami ouvre son atelier familial à ceux qui veulent comprendre le fil, la cuve, et le temps."
	}
];
var experiences = [
	{
		id: "cuisine",
		title: "Atelier de cuisine traditionnelle béninoise",
		tagline: "Un voyage au cœur du Bénin à travers ses saveurs et ses traditions.",
		about: "Découvrez la richesse de la gastronomie béninoise à travers un atelier intimiste. Nous commençons au marché — piments, huile de palme, œufs, viande — puis rentrons préparer une sauce généreuse, celle que l’on sert le dimanche. Vous partez avec les gestes, la recette, et le goût du feu de bois.",
		city: "Cotonou",
		category: "cuisine",
		categoryLabel: "Cuisine",
		duration: "2h",
		guests: "2-6 personnes",
		minGuests: 2,
		maxGuests: 6,
		price: 15e3,
		rating: 5,
		reviews: 24,
		images: [
			"/images/stew.jpg",
			"/images/kitchen.jpg",
			"/images/spices.jpg",
			"/images/gaspard.jpg"
		],
		artisanId: "gaspard",
		certified: true,
		heroTitle: "Cuisinez le Bénin, pas une copie",
		program: [
			{
				time: "0h00",
				title: "Marché et épices",
				detail: "Choix des piments, de l’huile de palme, des œufs et de la viande."
			},
			{
				time: "0h25",
				title: "Les gestes",
				detail: "Piler, rissoler, nouer la sauce — le rythme de la cuisine de cour."
			},
			{
				time: "1h10",
				title: "Cuisson lente",
				detail: "La sauce prend, les œufs s’habillent, la viande s’attendrit."
			},
			{
				time: "1h40",
				title: "Table partagée",
				detail: "On mange ensemble, on parle des dimanches, on recopie la recette."
			}
		],
		included: [
			"Tous les ingrédients",
			"Tablier et ustensiles",
			"Recette manuscrite",
			"Dégustation du plat"
		],
		quotes: [{
			name: "Léa M.",
			city: "Paris",
			text: "Pas un cooking class. Un dimanche chez Gaspard. La sauce était exactement celle de la photo — brillante, profonde."
		}, {
			name: "Kwame A.",
			city: "Accra",
			text: "Il explique sans démontrer. On a les mains dans le piment. 5 étoiles, sans réserve."
		}]
	},
	{
		id: "argile",
		title: "Façonnez votre premier objet en argile",
		tagline: "Les mains dans la terre de Sè, sans tour, comme autrefois.",
		about: "À même le sol, Kossi vous apprend à sentir l’argile, à monter les parois, à corriger une lèvre trop fine. Vous repartez avec une pièce encore humide — et le droit de la rater, c’est comme ça qu’on apprend.",
		city: "Sè",
		category: "artisanat",
		categoryLabel: "Artisanat",
		duration: "3h",
		guests: "1-4 personnes",
		minGuests: 1,
		maxGuests: 4,
		price: 12e3,
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
				detail: "Préparer l’argile, sentir l’humidité juste."
			},
			{
				time: "0h40",
				title: "Le volume",
				detail: "Monter une forme — bol, canari, ou ce que vos mains veulent."
			},
			{
				time: "2h00",
				title: "La finition",
				detail: "Lisser, signer, laisser sécher à l’ombre de la cour."
			}
		],
		included: [
			"Argile",
			"Outils",
			"Cuisson si vous revenez",
			"Thé de gingembre"
		],
		quotes: [{
			name: "Nora B.",
			city: "Lyon",
			text: "Trois heures sans téléphone. Mes mains savaient avant moi."
		}]
	},
	{
		id: "contes",
		title: "Soirée de contes autour d’un feu de bois",
		tagline: "Quand les étoiles illuminent les histoires de nos ancêtres.",
		about: "À Ouidah, quand la nuit tombe, Gaspard allume le feu. Les contes ne sont pas un spectacle : on s’assoit, on écoute, on répond au refrain. Les étoiles font le reste.",
		city: "Ouidah",
		category: "contes",
		categoryLabel: "Contes",
		duration: "2h30",
		guests: "4-12 personnes",
		minGuests: 4,
		maxGuests: 12,
		price: 8e3,
		rating: 5,
		reviews: 36,
		images: ["/images/stories.jpg", "/images/abomey.jpg"],
		artisanId: "gaspard",
		certified: true,
		heroTitle: "Soirée de contes autour d’un feu de bois",
		program: [
			{
				time: "0h00",
				title: "Le feu",
				detail: "Arrivée au clair de lune, thé, présentation du cercle."
			},
			{
				time: "0h30",
				title: "Les contes",
				detail: "Trois histoires — lièvre, rois, mer — et les refrains à reprendre."
			},
			{
				time: "2h00",
				title: "Silence",
				detail: "On laisse le feu descendre. Questions, si vous en avez."
			}
		],
		included: [
			"Thé",
			"Coussins",
			"Feu de bois",
			"Cercle limité"
		],
		quotes: [{
			name: "Inès T.",
			city: "Cotonou",
			text: "J’ai emmené mes enfants. Ils n’ont pas bougé. Ça n’arrive jamais."
		}]
	},
	{
		id: "lagune",
		title: "Pirogue sur la lagune de Porto-Novo",
		tagline: "L’eau, les palmes, et le silence d’un matin sur la lagune.",
		about: "Une pirogue, un rameur, la mangrove. On part tôt, avant la chaleur, pour voir la lagune se réveiller — filets, oiseaux, villages d’eau.",
		city: "Porto-Novo",
		category: "nature",
		categoryLabel: "Nature",
		duration: "2h",
		guests: "2-5 personnes",
		minGuests: 2,
		maxGuests: 5,
		price: 1e4,
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
				detail: "Embarcadère à l’aube, gilets, consignes."
			},
			{
				time: "0h20",
				title: "La lagune",
				detail: "Chenal étroit, oiseaux, filets tendus entre les palétuviers."
			},
			{
				time: "1h40",
				title: "Retour",
				detail: "Café sucré sur la rive, photos si vous voulez."
			}
		],
		included: [
			"Pirogue privée",
			"Guide",
			"Gilet",
			"Café au retour"
		],
		quotes: [{
			name: "Marc D.",
			city: "Bruxelles",
			text: "Le cliché drone existe. Vivre le chenal, c’est autre chose."
		}]
	},
	{
		id: "tissage",
		title: "Tissage indigo à Porto-Novo",
		tagline: "Le fil, la cuve, et le temps qu’il faut.",
		about: "Ami ouvre la cour où sa mère teignait encore. Vous apprenez à tendre la chaîne, à plonger le coton, à lire le bleu qui n’est jamais le même deux fois.",
		city: "Porto-Novo",
		category: "artisanat",
		categoryLabel: "Artisanat",
		duration: "3h",
		guests: "1-5 personnes",
		minGuests: 1,
		maxGuests: 5,
		price: 14e3,
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
				detail: "Comprendre l’indigo, le ferment, la couleur qui respire."
			},
			{
				time: "0h50",
				title: "Le métier",
				detail: "Chaîne, trame, le rythme des pieds et des mains."
			},
			{
				time: "2h20",
				title: "Votre pièce",
				detail: "Une bande à emporter, encore humide de bleu."
			}
		],
		included: [
			"Coton",
			"Indigo",
			"Métier",
			"Bande tissée à emporter"
		],
		quotes: [{
			name: "Sofia R.",
			city: "Madrid",
			text: "Le bleu d’Ami ne ressemble à aucun magasin. C’est vivant."
		}]
	},
	{
		id: "ganvie",
		title: "Matin à Ganvié, village sur l’eau",
		tagline: "Maisons sur pilotis, marché flottant, lumière de brume.",
		about: "On part de Cotonou avant l’aube pour arriver quand Ganvié fume encore. Pirogue entre les maisons, salutations, marché — puis le silence de l’eau.",
		city: "Ganvié",
		category: "patrimoine",
		categoryLabel: "Patrimoine",
		duration: "4h",
		guests: "2-8 personnes",
		minGuests: 2,
		maxGuests: 8,
		price: 18e3,
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
				detail: "Route puis pirogue, brume sur le lac Nokoué."
			},
			{
				time: "1h00",
				title: "Le village",
				detail: "Rues d’eau, école, marché, conversations au ralenti."
			},
			{
				time: "3h00",
				title: "Retour",
				detail: "Pêcheurs rentrant, lumière déjà dure."
			}
		],
		included: [
			"Transfert",
			"Pirogue",
			"Guide local",
			"Eau"
		],
		quotes: [{
			name: "Pauline K.",
			city: "Dakar",
			text: "On n’est pas restés sur la jetée. On a été reçus. Ça change tout."
		}]
	},
	{
		id: "abomey",
		title: "Abomey, palais et bas-reliefs",
		tagline: "La terre rouge, les murs parlants, la mémoire des rois.",
		about: "Une journée courte et dense dans les palais d’Abomey. Bas-reliefs, cours, récits — sans récitation de guide, avec quelqu’un qui a grandi à l’ombre des murs.",
		city: "Abomey",
		category: "patrimoine",
		categoryLabel: "Patrimoine",
		duration: "5h",
		guests: "2-8 personnes",
		minGuests: 2,
		maxGuests: 8,
		price: 2e4,
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
				detail: "Entrée par les cours successives, le protocole d’autrefois."
			},
			{
				time: "1h30",
				title: "Les murs",
				detail: "Lire les bas-reliefs comme on lit une famille."
			},
			{
				time: "3h30",
				title: "Le marché",
				detail: "Tissus, fer, gingembre — puis la route du retour."
			}
		],
		included: [
			"Guide",
			"Droits d’entrée",
			"Eau",
			"Pause déjeuner libre"
		],
		quotes: [{
			name: "Julien P.",
			city: "Marseille",
			text: "Enfin un récit qui n’est pas un prospectus. Les murs ont parlé."
		}]
	}
];
var heroSlides = [
	{
		experienceId: "argile",
		kicker: "Artisanat",
		title: "Façonnez votre premier objet en argile"
	},
	{
		experienceId: "cuisine",
		kicker: "Cuisine",
		title: "Atelier de cuisine traditionnelle béninoise"
	},
	{
		experienceId: "contes",
		kicker: "Contes",
		title: "Soirée de contes autour d’un feu de bois"
	},
	{
		experienceId: "tissage",
		kicker: "Artisanat",
		title: "Tissez l’indigo comme à Porto-Novo"
	}
];
var recommendedIds = [
	"contes",
	"lagune",
	"cuisine",
	"ganvie",
	"tissage",
	"abomey"
];
function getExperience(id) {
	return experiences.find((item) => item.id === id);
}
function getArtisan(id) {
	return artisans.find((item) => item.id === id);
}
function artisanOf(experience) {
	return getArtisan(experience.artisanId);
}
function formatFcfa(value) {
	return `${new Intl.NumberFormat("fr-FR").format(value)} FCFA`;
}
var immersionImages = [
	{
		src: "/images/abomey.jpg",
		caption: "Abomey, la terre rouge"
	},
	{
		src: "/images/ganvie.jpg",
		caption: "Ganvié, le village sur l’eau"
	},
	{
		src: "/images/stories.jpg",
		caption: "Ouidah, sous les étoiles"
	},
	{
		src: "/images/lagoon.jpg",
		caption: "Porto-Novo, la lagune"
	},
	{
		src: "/images/pottery.jpg",
		caption: "Sè, l’argile"
	},
	{
		src: "/images/kitchen.jpg",
		caption: "Cotonou, le feu de cour"
	}
];
function uid() {
	return Math.random().toString(36).slice(2, 10);
}
var greetings = {
	gaspard: "Bonjour — c’est Gaspard. Dis-moi le jour qui t’arrange, on ouvre la cour.",
	kossi: "Wé, c’est Kossi. L’argile est prête. Tu veux un bol, un canari, ou tu laisses les mains décider ?",
	ami: "Ami à l’appareil. La cuve d’indigo est bonne cette semaine. Tu viens quand ?"
};
var useYonwa = create()(persist((set, get) => ({
	userName: null,
	favorites: [],
	bookings: [],
	threads: {},
	login: (name) => set({ userName: name.trim() || "Invité" }),
	logout: () => set({ userName: null }),
	toggleFavorite: (id) => set((state) => ({ favorites: state.favorites.includes(id) ? state.favorites.filter((item) => item !== id) : [id, ...state.favorites] })),
	addBooking: (booking) => {
		const next = {
			...booking,
			id: uid(),
			createdAt: Date.now()
		};
		set((state) => ({ bookings: [next, ...state.bookings] }));
		return next;
	},
	ensureThread: (artisanId) => {
		const threads = get().threads;
		if (threads[artisanId]?.length) return;
		const artisan = getArtisan(artisanId);
		const hello = greetings[artisanId] ?? `Bonjour, ici ${artisan?.name ?? "l’artisan"}. Je te réponds ici.`;
		set({ threads: {
			...threads,
			[artisanId]: [{
				id: uid(),
				from: "them",
				text: hello,
				at: Date.now() - 48e4
			}]
		} });
	},
	sendMessage: (artisanId, text) => {
		const trimmed = text.trim();
		if (!trimmed) return;
		get().ensureThread(artisanId);
		const mine = {
			id: uid(),
			from: "me",
			text: trimmed,
			at: Date.now()
		};
		set((state) => ({ threads: {
			...state.threads,
			[artisanId]: [...state.threads[artisanId] ?? [], mine]
		} }));
		window.setTimeout(() => {
			const reply = {
				id: uid(),
				from: "them",
				text: "Reçu. Je te confirme un créneau par ici — à très vite.",
				at: Date.now()
			};
			set((state) => ({ threads: {
				...state.threads,
				[artisanId]: [...state.threads[artisanId] ?? [], reply]
			} }));
		}, 900);
	}
}), { name: "yonwa-store" }));
//#endregion
export { artisanOf as a, cn as c, getArtisan as d, getExperience as f, useYonwa as g, recommendedIds as h, Overlay as i, experiences as l, immersionImages as m, Cover as n, artisans as o, heroSlides as p, MediaButton as r, categories as s, AppFrame as t, formatFcfa as u };
