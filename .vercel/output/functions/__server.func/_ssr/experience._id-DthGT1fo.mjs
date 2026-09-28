import { i as __toESM } from "../_runtime.mjs";
import { S as useNavigate, X as require_react, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as ChevronLeft, T as BadgeCheck, a as Star, b as Clock3, f as Minus, h as MapPin, l as RotateCcw, m as MessageSquare, n as Users, o as ShieldCheck, u as Plus, v as Heart } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as Route$1 } from "./router-Cgk8hsN6.mjs";
import { a as artisanOf, c as cn, f as getExperience, g as useYonwa, i as Overlay, r as MediaButton, t as AppFrame, u as formatFcfa } from "./store-CVi4q4mI.mjs";
import { t as ArtisanDot } from "./experience-card-Dj8QHK8E.mjs";
import { t as Button } from "./button-C9FhPiHb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/experience._id-DthGT1fo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function upcomingDays(count = 12) {
	const days = [];
	const now = /* @__PURE__ */ new Date();
	for (let i = 1; i <= count; i++) {
		const d = new Date(now);
		d.setDate(now.getDate() + i);
		days.push({
			iso: d.toISOString().slice(0, 10),
			day: d.toLocaleDateString("fr-FR", { weekday: "short" }).replace(".", ""),
			num: String(d.getDate()),
			month: d.toLocaleDateString("fr-FR", { month: "short" }).replace(".", "")
		});
	}
	return days;
}
var slots = [
	"10:00",
	"14:00",
	"17:00"
];
function BookingSheet({ experience, open, onClose }) {
	const addBooking = useYonwa((s) => s.addBooking);
	const days = (0, import_react.useMemo)(() => upcomingDays(), []);
	const [date, setDate] = (0, import_react.useState)(days[0]?.iso ?? "");
	const [time, setTime] = (0, import_react.useState)(slots[1]);
	const [guests, setGuests] = (0, import_react.useState)(experience.minGuests);
	const [done, setDone] = (0, import_react.useState)(false);
	const total = experience.price * guests;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay, {
		open,
		onClose,
		labelledBy: "book-title",
		children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pb-4 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary",
					children: "Confirmé"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "book-title",
					className: "mt-2 text-2xl font-semibold tracking-tight",
					children: "C’est réservé."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted",
					children: [
						experience.title,
						" · ",
						guests,
						" pers. · ",
						date,
						" à ",
						time
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-6 w-full",
					size: "lg",
					onClick: onClose,
					children: "Parfait"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "book-title",
				className: "text-lg font-semibold",
				children: "Réserver"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: experience.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-faint",
				children: "Jour"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 overflow-x-auto pb-1 scrollbar-none",
				children: days.map((d) => {
					const active = d.iso === date;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setDate(d.iso),
						className: active ? "flex h-16 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-ink text-bg" : "flex h-16 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-primary-soft text-fg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase",
								children: d.day
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg font-semibold leading-none",
								children: d.num
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px]",
								children: d.month
							})
						]
					}, d.iso);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-faint",
				children: "Heure"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2",
				children: slots.map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTime(slot),
					className: slot === time ? "h-10 flex-1 rounded-full bg-ink text-sm font-medium text-bg" : "h-10 flex-1 rounded-full bg-primary-soft text-sm font-medium",
					children: slot
				}, slot))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex items-center justify-between rounded-2xl bg-primary-soft px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "Personnes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted",
					children: [
						experience.minGuests,
						" à ",
						experience.maxGuests
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "flex size-9 items-center justify-center rounded-full bg-bg",
							onClick: () => setGuests((n) => Math.max(experience.minGuests, n - 1)),
							"aria-label": "Retirer une personne",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-6 text-center text-base font-semibold tabular-nums",
							children: guests
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "flex size-9 items-center justify-center rounded-full bg-bg",
							onClick: () => setGuests((n) => Math.min(experience.maxGuests, n + 1)),
							"aria-label": "Ajouter une personne",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xl font-semibold tabular-nums",
					children: formatFcfa(total)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted",
					children: [
						formatFcfa(experience.price),
						" × ",
						guests
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					onClick: () => {
						addBooking({
							experienceId: experience.id,
							date,
							time,
							guests,
							total
						});
						toast.success("Réservation confirmée");
						setDone(true);
					},
					children: "Confirmer"
				})]
			})
		] })
	});
}
function ExperiencePage() {
	const { id } = Route$1.useParams();
	const experience = getExperience(id);
	const navigate = useNavigate();
	const artisan = experience ? artisanOf(experience) : void 0;
	const favorites = useYonwa((s) => s.favorites);
	const toggleFavorite = useYonwa((s) => s.toggleFavorite);
	const ensureThread = useYonwa((s) => s.ensureThread);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [aboutOpen, setAboutOpen] = (0, import_react.useState)(false);
	const [book, setBook] = (0, import_react.useState)(false);
	const [heart, setHeart] = (0, import_react.useState)(false);
	const scroller = (0, import_react.useRef)(null);
	const loved = experience ? favorites.includes(experience.id) : false;
	if (!experience || !artisan) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-8 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-semibold",
			children: "Expérience introuvable"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "mt-3 inline-block text-sm text-primary",
			children: "Retour à l’accueil"
		})]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppFrame, {
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 border-t border-line bg-bg/95 px-4 py-3 backdrop-blur-md pb-[max(0.75rem,env(safe-area-inset-bottom))]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg font-semibold leading-tight tabular-nums",
						children: formatFcfa(experience.price)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "par personne"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "line",
					size: "icon",
					"aria-label": "Message",
					onClick: () => {
						ensureThread(artisan.id);
						navigate({
							to: "/messages/$threadId",
							params: { threadId: artisan.id }
						});
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					className: "min-w-36",
					onClick: () => setBook(true),
					children: "Réserver"
				})
			]
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: scroller,
						className: "flex h-96 snap-x snap-mandatory overflow-x-auto overflow-y-hidden scrollbar-none",
						onScroll: (e) => {
							const el = e.currentTarget;
							const i = Math.round(el.scrollLeft / Math.max(el.clientWidth, 1));
							setIndex(i);
						},
						children: experience.images.map((src) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative h-full w-full min-w-full shrink-0 snap-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src,
								alt: "",
								className: "absolute inset-0 size-full object-cover"
							})
						}, src))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaButton, {
							className: "pointer-events-auto",
							"aria-label": "Retour",
							onClick: () => window.history.back(),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaButton, {
							className: cn("pointer-events-auto", heart && "anim-heart"),
							"aria-label": "Favori",
							onClick: () => {
								toggleFavorite(experience.id);
								setHeart(true);
								window.setTimeout(() => setHeart(false), 320);
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("size-5", loved && "fill-primary text-primary") })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-x-0 bottom-3 flex justify-center gap-1.5",
						children: experience.images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-1 rounded-full", i === index ? "w-5 bg-on-media" : "w-1.5 bg-on-media/45") }, src))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 pt-5 pb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-primary",
						children: experience.city
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 text-[28px] leading-tight font-semibold tracking-tight",
						children: experience.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[15px] leading-relaxed text-muted",
						children: experience.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trust, {
								icon: BadgeCheck,
								label: "Certifié",
								className: "border-primary/25 bg-primary-soft text-primary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trust, {
								icon: ShieldCheck,
								label: "Sécurisé",
								className: "border-success/20 bg-success-soft text-success"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trust, {
								icon: Heart,
								label: "Authentique",
								className: "border-gold/25 bg-gold-soft text-gold"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trust, {
								icon: RotateCcw,
								label: "Remboursable",
								className: "border-peach/25 bg-peach-soft text-peach"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-center gap-3 rounded-2xl border border-line p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/artisan/$id",
								params: { id: artisan.id },
								className: "flex min-w-0 flex-1 items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtisanDot, {
									artisanId: artisan.id,
									initial: artisan.initial,
									photo: artisan.photo,
									size: "md"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold",
										children: artisan.handle
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted",
										children: "Voir le profil de l’artisan"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									ensureThread(artisan.id);
									navigate({
										to: "/messages/$threadId",
										params: { threadId: artisan.id }
									});
								},
								className: "flex size-10 items-center justify-center rounded-xl border border-line",
								"aria-label": "Écrire",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1 text-sm font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-star text-star" }), experience.rating.toFixed(1)]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3 py-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "size-4 text-primary" }), experience.duration]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3 py-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4 text-primary" }), experience.guests]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-base font-semibold",
								children: "À propos"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("mt-2 text-sm leading-relaxed text-muted", !aboutOpen && "line-clamp-3"),
								children: experience.about
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "mt-1 text-sm font-semibold text-primary",
								onClick: () => setAboutOpen((v) => !v),
								children: aboutOpen ? "Réduire" : "Lire la suite"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-semibold",
							children: "Au programme"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-3 space-y-3",
							children: experience.program.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-10 shrink-0 pt-0.5 text-xs font-semibold tabular-nums text-primary",
									children: step.time
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-semibold",
									children: step.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-muted",
									children: step.detail
								})] })]
							}, step.time))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-semibold",
							children: "Inclus"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 grid grid-cols-2 gap-2",
							children: experience.included.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-xl bg-primary-soft px-3 py-2 text-sm",
								children: item
							}, item))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-base font-semibold",
								children: "Avis"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1 text-sm font-semibold",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-star text-star" }),
									experience.rating.toFixed(1),
									" · ",
									experience.reviews,
									" avis"
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 space-y-3",
							children: experience.quotes.map((quote) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "rounded-2xl border border-line px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm leading-relaxed",
									children: [
										"“",
										quote.text,
										"”"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
									className: "mt-2 text-xs text-muted",
									children: [
										quote.name,
										" · ",
										quote.city
									]
								})]
							}, quote.name))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-7 flex items-start gap-3 rounded-2xl bg-primary-soft p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: experience.city
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: "L’adresse exacte est envoyée après réservation."
						})] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingSheet, {
				experience,
				open: book,
				onClose: () => setBook(false)
			})
		]
	});
}
function Trust({ icon: Icon, label, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex shrink-0 items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-semibold", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" }), label]
	});
}
//#endregion
export { ExperiencePage as component };
