import { i as __toESM } from "../_runtime.mjs";
import { X as require_react, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as CalendarDays } from "../_libs/lucide-react.mjs";
import { f as getExperience, g as useYonwa, t as AppFrame, u as formatFcfa } from "./store-CVi4q4mI.mjs";
import { l as VoiceOverlay, t as BottomNav } from "./home-extras-D8qtoF4t.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reservations-BvHIjcn6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reservations() {
	const bookings = useYonwa((s) => s.bookings);
	const [voice, setVoice] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppFrame, {
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, { onVoice: () => setVoice(true) }),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-5 pt-5 pb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold tracking-tight",
					children: "Réservations"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Tes ateliers confirmés."
				}),
				bookings.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mx-auto flex size-14 items-center justify-center rounded-full bg-primary-soft text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted",
							children: "Pas encore de réservation. Le prochain geste t’attend."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/explore",
							className: "mt-4 inline-flex h-11 items-center rounded-full bg-ink px-5 text-sm font-medium text-bg",
							children: "Explorer"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-3",
					children: bookings.map((booking) => {
						const experience = getExperience(booking.experienceId);
						if (!experience) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/experience/$id",
							params: { id: experience.id },
							className: "flex gap-3 rounded-2xl border border-line p-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: experience.images[0],
								alt: "",
								className: "size-20 rounded-xl object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1 py-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "line-clamp-2 text-sm font-semibold",
										children: experience.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-1 block text-xs text-muted",
										children: [
											booking.date,
											" · ",
											booking.time,
											" · ",
											booking.guests,
											" pers."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-1 block text-xs font-semibold text-primary",
										children: [formatFcfa(booking.total), " · confirmé"]
									})
								]
							})]
						}) }, booking.id);
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoiceOverlay, {
			open: voice,
			onClose: () => setVoice(false)
		})]
	});
}
//#endregion
export { Reservations as component };
