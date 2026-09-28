import { i as __toESM } from "../_runtime.mjs";
import { X as require_react, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as useYonwa, o as artisans, t as AppFrame } from "./store-CVi4q4mI.mjs";
import { t as ArtisanDot } from "./experience-card-Dj8QHK8E.mjs";
import { l as VoiceOverlay, t as BottomNav } from "./home-extras-D8qtoF4t.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/messages-xpbLuvRu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Messages() {
	const threads = useYonwa((s) => s.threads);
	const ensureThread = useYonwa((s) => s.ensureThread);
	const [voice, setVoice] = (0, import_react.useState)(false);
	const list = artisans.filter((artisan) => (threads[artisan.id]?.length ?? 0) > 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppFrame, {
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, { onVoice: () => setVoice(true) }),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-5 pt-5 pb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold tracking-tight",
					children: "Messages"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Écris directement à l’artisan."
				}),
				list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Aucune conversation. Choisis un artisan pour dire bonjour."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2",
						children: artisans.map((artisan) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/messages/$threadId",
							params: { threadId: artisan.id },
							onClick: () => ensureThread(artisan.id),
							className: "flex items-center gap-3 rounded-2xl border border-line p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtisanDot, {
								artisanId: artisan.id,
								initial: artisan.initial,
								photo: artisan.photo,
								size: "md"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-semibold",
								children: artisan.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted",
								children: artisan.city
							})] })]
						}) }, artisan.id))
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-2",
					children: list.map((artisan) => {
						const last = threads[artisan.id]?.at(-1);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/messages/$threadId",
							params: { threadId: artisan.id },
							className: "flex items-center gap-3 rounded-2xl p-2 hover:bg-primary-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtisanDot, {
								artisanId: artisan.id,
								initial: artisan.initial,
								photo: artisan.photo,
								size: "md"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-semibold",
									children: artisan.handle
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-xs text-muted",
									children: last?.text
								})]
							})]
						}) }, artisan.id);
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
export { Messages as component };
