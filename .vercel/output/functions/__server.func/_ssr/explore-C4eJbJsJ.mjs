import { i as __toESM } from "../_runtime.mjs";
import { X as require_react, w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Search } from "../_libs/lucide-react.mjs";
import { c as cn, l as experiences, s as categories, t as AppFrame } from "./store-CVi4q4mI.mjs";
import { n as ExperienceCard } from "./experience-card-Dj8QHK8E.mjs";
import { l as VoiceOverlay, t as BottomNav } from "./home-extras-D8qtoF4t.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/explore-C4eJbJsJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Explore() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [query, setQuery] = (0, import_react.useState)("");
	const [voice, setVoice] = (0, import_react.useState)(false);
	const list = (0, import_react.useMemo)(() => {
		return experiences.filter((item) => {
			if (filter !== "all" && item.category !== filter) return false;
			const q = query.trim().toLowerCase();
			if (!q) return true;
			return item.title.toLowerCase().includes(q) || item.city.toLowerCase().includes(q);
		});
	}, [filter, query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppFrame, {
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, { onVoice: () => setVoice(true) }),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 pt-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-semibold tracking-tight",
						children: "Explorer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Cuisine, argile, contes, eau, palais."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-4 flex items-center gap-2 rounded-full bg-primary-soft px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Une ville, un geste…",
							className: "w-full bg-transparent text-sm outline-none placeholder:text-faint"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-none",
						children: categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setFilter(cat.id),
							className: cn("h-9 shrink-0 rounded-full px-4 text-sm font-medium", filter === cat.id ? "bg-ink text-bg" : "bg-primary-soft text-fg"),
							children: cat.label
						}, cat.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 px-5 pt-5 pb-8",
				children: [list.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceCard, { experience: item }, item.id)), list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-10 text-center text-sm text-muted",
					children: "Rien pour cette recherche. Essaie « cuisine » ou « Ouidah »."
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoiceOverlay, {
				open: voice,
				onClose: () => setVoice(false)
			})
		]
	});
}
//#endregion
export { Explore as component };
