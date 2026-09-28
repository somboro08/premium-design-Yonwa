import { i as __toESM } from "../_runtime.mjs";
import { S as useNavigate, X as require_react, m as useRouterState, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as CalendarDays, _ as House, c as Search, d as Play, p as Mic, r as UserRound, t as X, w as Bell, x as ChevronRight, y as Compass } from "../_libs/lucide-react.mjs";
import { c as cn, f as getExperience, g as useYonwa, i as Overlay, l as experiences, m as immersionImages, n as Cover, p as heroSlides } from "./store-CVi4q4mI.mjs";
import { t as Button } from "./button-C9FhPiHb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/home-extras-D8qtoF4t.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var items = [
	{
		to: "/",
		label: "Accueil",
		icon: House,
		exact: true
	},
	{
		to: "/explore",
		label: "Explorer",
		icon: Compass
	},
	{
		to: "/reservations",
		label: "Réservations",
		icon: CalendarDays
	},
	{
		to: "/profile",
		label: "Profil",
		icon: UserRound
	}
];
function BottomNav({ onVoice }) {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative shrink-0 bg-bg/95 shadow-nav backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: onVoice,
			className: "absolute -top-7 right-5 flex size-12 items-center justify-center rounded-full bg-voice text-on-media shadow-float active:scale-[0.96]",
			"aria-label": "Recherche vocale",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, {
				className: "size-5",
				strokeWidth: 2.2
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "grid grid-cols-5 items-end px-2 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))]",
			children: [
				items.slice(0, 3).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavItem, {
					to: item.to,
					label: item.label,
					icon: item.icon,
					active: "exact" in item && item.exact ? pathname === "/" : pathname.startsWith(item.to)
				}, item.to)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/messages",
					className: "flex flex-col items-center gap-1",
					"aria-label": "Messages",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("flex size-12 -translate-y-1 items-center justify-center rounded-full bg-primary text-primary-fg shadow-float", pathname.startsWith("/messages") && "ring-2 ring-primary/30"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatMark, { className: "size-6" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavItem, {
					to: "/profile",
					label: "Profil",
					icon: UserRound,
					active: pathname.startsWith("/profile")
				})
			]
		})]
	});
}
function NavItem({ to, label, icon: Icon, active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: cn("flex flex-col items-center gap-1 py-1 text-[11px] font-medium", active ? "text-fg" : "text-faint"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "size-5",
			strokeWidth: active ? 2.4 : 1.8,
			fill: active && to === "/" ? "currentColor" : "none"
		}), label]
	});
}
function ChatMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "none",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M5 16.5V8.8c0-1.7 1.3-3.1 3-3.1h8c1.7 0 3 1.4 3 3.1v4.4c0 1.7-1.3 3.1-3 3.1H9.2L5 19.2v-2.7Z",
				stroke: "currentColor",
				strokeWidth: "1.7",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "9.2",
				cy: "10.6",
				r: "0.85",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "10.6",
				r: "0.85",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "14.8",
				cy: "10.6",
				r: "0.85",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10.6",
				cy: "13.1",
				r: "0.85",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "13.4",
				cy: "13.1",
				r: "0.85",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M9.2 10.6h5.6M10.6 13.1h2.8M9.2 10.6l1.4 2.5M12 10.6v2.5M14.8 10.6l-1.4 2.5",
				stroke: "currentColor",
				strokeWidth: "0.7"
			})
		]
	});
}
function HeroCarousel() {
	const scroller = (0, import_react.useRef)(null);
	const [index, setIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const node = scroller.current;
		if (!node) return;
		const onScroll = () => {
			const cards = [...node.querySelectorAll("[data-slide]")];
			const mid = node.scrollLeft + node.clientWidth / 2;
			let closest = 0;
			let dist = Infinity;
			cards.forEach((card, i) => {
				const center = card.offsetLeft + card.offsetWidth / 2;
				const d = Math.abs(center - mid);
				if (d < dist) {
					dist = d;
					closest = i;
				}
			});
			setIndex(closest);
		};
		node.addEventListener("scroll", onScroll, { passive: true });
		return () => node.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const node = scroller.current;
		if (!node) return;
		const timer = window.setInterval(() => {
			const next = (index + 1) % heroSlides.length;
			node.querySelectorAll("[data-slide]")[next]?.scrollIntoView({
				behavior: "smooth",
				inline: "center",
				block: "nearest"
			});
		}, 5200);
		return () => window.clearInterval(timer);
	}, [index]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "anim-rise stagger-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: scroller,
			className: "flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 scrollbar-none",
			children: heroSlides.map((slide) => {
				const experience = getExperience(slide.experienceId);
				if (!experience) return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					"data-slide": true,
					to: "/experience/$id",
					params: { id: experience.id },
					className: "relative h-56 w-[88%] shrink-0 snap-center overflow-hidden rounded-2xl bg-ink text-on-media",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: experience.images[0],
							alt: "",
							className: "absolute inset-0 size-full object-cover anim-kenburns"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-ink via-ink/30 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-4 right-4 rounded-full bg-ink/35 px-2.5 py-1 text-xs font-medium backdrop-blur-sm",
							children: experience.city
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-0 bottom-0 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xl font-semibold leading-snug tracking-tight",
								children: slide.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-on-media/80",
								children: slide.kicker
							})]
						})
					]
				}, slide.experienceId);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex justify-center gap-1.5",
			children: heroSlides.map((slide, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-1 rounded-full transition-[width,background-color] duration-300", i === index ? "w-6 bg-primary" : "w-1.5 bg-line") }, slide.experienceId))
		})]
	});
}
function ImmersionCard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/immersion",
		className: "mx-5 mt-5 flex items-center gap-3 rounded-2xl border border-line bg-bg px-3.5 py-3 anim-rise stagger-3 active:scale-[0.99]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "relative size-12 shrink-0 overflow-hidden rounded-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/abomey.jpg",
					alt: "",
					className: "size-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute inset-0 flex items-center justify-center bg-ink/25",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-7 items-center justify-center rounded-full bg-primary text-primary-fg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5 fill-current" })
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-sm font-semibold",
					children: "Immersion vidéo"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-xs text-muted",
					children: "Découvre le Bénin en images"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 text-faint" })
		]
	});
}
function HomeHeader({ onSearch, onLogin, onNotif }) {
	const userName = useYonwa((s) => s.userName);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "px-5 pt-4 pb-3 anim-rise",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-3xl font-semibold tracking-tight",
				children: "yonwa"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onSearch,
				className: "flex size-10 items-center justify-center rounded-full text-fg",
				"aria-label": "Rechercher",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					className: "size-5",
					strokeWidth: 2
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2 flex items-center justify-between gap-3",
			children: [userName ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 rounded-full bg-primary-soft py-1 pr-3 pl-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-fg",
					children: userName.slice(0, 1).toLowerCase()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium",
					children: userName
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				onClick: onLogin,
				className: "px-4",
				children: "Se connecter"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onNotif,
					className: "flex size-10 items-center justify-center rounded-full border border-line",
					"aria-label": "Notifications",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/messages",
					className: "flex size-10 items-center justify-center rounded-full border border-line",
					"aria-label": "Messages",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatMark, { className: "size-5 text-fg" })
				})]
			})]
		})]
	});
}
function SearchOverlay({ open, onClose }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const results = experiences.filter((item) => {
		const q = query.trim().toLowerCase();
		if (!q) return true;
		return item.title.toLowerCase().includes(q) || item.city.toLowerCase().includes(q) || item.categoryLabel.toLowerCase().includes(q);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Overlay, {
		open,
		onClose,
		labelledBy: "search-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "search-title",
					className: "text-lg font-semibold",
					children: "Rechercher"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					"aria-label": "Fermer",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5 text-muted" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 flex items-center gap-2 rounded-full bg-primary-soft px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					autoFocus: true,
					value: query,
					onChange: (e) => setQuery(e.target.value),
					placeholder: "Cuisine, Ouidah, argile…",
					className: "w-full bg-transparent text-sm outline-none placeholder:text-faint"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-2",
				children: results.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/experience/$id",
					params: { id: item.id },
					onClick: onClose,
					className: "flex items-center gap-3 rounded-xl p-2 hover:bg-primary-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.images[0],
						alt: "",
						className: "size-14 rounded-lg object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate text-sm font-semibold",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted",
							children: [
								item.city,
								" · ",
								item.categoryLabel
							]
						})]
					})]
				}) }, item.id))
			})
		]
	});
}
function LoginOverlay({ open, onClose }) {
	const login = useYonwa((s) => s.login);
	const [name, setName] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Overlay, {
		open,
		onClose,
		labelledBy: "login-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "login-title",
				className: "text-lg font-semibold",
				children: "Se connecter"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Un prénom suffit pour sauvegarder tes favoris et tes réservations sur cet appareil."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: name,
				onChange: (e) => setName(e.target.value),
				placeholder: "Ton prénom",
				className: "mt-4 h-12 w-full rounded-full border border-line px-4 text-sm outline-none focus:border-primary"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-4 w-full",
				size: "lg",
				onClick: () => {
					login(name || "Invité");
					onClose();
				},
				children: "Continuer"
			})
		]
	});
}
function NotifOverlay({ open, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Overlay, {
		open,
		onClose,
		labelledBy: "notif-title",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			id: "notif-title",
			className: "text-lg font-semibold",
			children: "Notifications"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "mt-4 space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotifRow, {
					title: "Gaspard a un créneau demain 17h",
					body: "Atelier cuisine — 2 places encore."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotifRow, {
					title: "Soirée de contes à Ouidah",
					body: "Samedi, feu allumé à 19h."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotifRow, {
					title: "Ton cœur a retenu l’argile",
					body: "Kossi ouvre l’atelier jeudi matin."
				})
			]
		})]
	});
}
function NotifRow({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "rounded-2xl bg-primary-soft px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-semibold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-0.5 text-xs text-muted",
			children: body
		})]
	});
}
function VoiceOverlay({ open, onClose }) {
	const navigate = useNavigate();
	const [phase, setPhase] = (0, import_react.useState)("listen");
	(0, import_react.useEffect)(() => {
		if (!open) {
			setPhase("listen");
			return;
		}
		const t = window.setTimeout(() => setPhase("done"), 1800);
		return () => window.clearTimeout(t);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {
		open,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 z-50 flex flex-col items-center justify-center bg-bg/95 px-8 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute top-4 right-4 flex size-10 items-center justify-center",
					onClick: onClose,
					"aria-label": "Fermer",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex size-28 items-center justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-primary/20 animate-[pulse-ring_1.6s_ease-out_infinite]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-20 items-center justify-center rounded-full bg-primary text-primary-fg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl font-semibold",
							children: "y"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-lg font-semibold",
					children: phase === "listen" ? "Je t’écoute" : "« cuisine traditionnelle »"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: phase === "listen" ? "Dis-moi ce que tu veux vivre au Bénin." : "Atelier trouvé à Cotonou."
				}),
				phase === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-6",
					onClick: () => {
						onClose();
						navigate({
							to: "/experience/$id",
							params: { id: "cuisine" }
						});
					},
					children: "Voir l’atelier"
				}) : null
			]
		})
	});
}
function ImmersionFilm() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const current = immersionImages[index];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-full bg-ink text-on-media",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: current.src,
				alt: "",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-ink via-transparent to-ink/30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex min-h-dvh flex-col justify-between p-5 pb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex size-11 items-center justify-center rounded-full bg-bg/90 text-fg",
						"aria-label": "Retour",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-medium",
						children: [
							index + 1,
							" / ",
							immersionImages.length
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.2em] text-on-media/70",
						children: "Immersion"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-3xl font-semibold tracking-tight",
						children: current.caption
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex gap-2 overflow-x-auto scrollbar-none",
						children: immersionImages.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setIndex(i),
							className: cn("h-16 w-24 shrink-0 overflow-hidden rounded-lg ring-2", i === index ? "ring-primary" : "ring-transparent opacity-70"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: img.src,
								alt: "",
								className: "size-full object-cover"
							})
						}, img.src))
					})
				] })]
			})
		]
	});
}
//#endregion
export { ImmersionFilm as a, SearchOverlay as c, ImmersionCard as i, VoiceOverlay as l, HeroCarousel as n, LoginOverlay as o, HomeHeader as r, NotifOverlay as s, BottomNav as t };
