import { i as __toESM } from "../_runtime.mjs";
import { X as require_react, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { x as ChevronRight } from "../_libs/lucide-react.mjs";
import { h as recommendedIds, l as experiences, t as AppFrame } from "./store-CVi4q4mI.mjs";
import { n as ExperienceCard } from "./experience-card-Dj8QHK8E.mjs";
import { c as SearchOverlay, i as ImmersionCard, l as VoiceOverlay, n as HeroCarousel, o as LoginOverlay, r as HomeHeader, s as NotifOverlay, t as BottomNav } from "./home-extras-D8qtoF4t.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B3KgTJe9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const [search, setSearch] = (0, import_react.useState)(false);
	const [login, setLogin] = (0, import_react.useState)(false);
	const [notif, setNotif] = (0, import_react.useState)(false);
	const [voice, setVoice] = (0, import_react.useState)(false);
	const recommended = recommendedIds.map((id) => experiences.find((item) => item.id === id)).filter((item) => Boolean(item));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppFrame, {
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, { onVoice: () => setVoice(true) }),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeHeader, {
				onSearch: () => setSearch(true),
				onLogin: () => setLogin(true),
				onNotif: () => setNotif(true)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCarousel, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImmersionCard, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-7 px-5 pb-8 anim-rise stagger-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-semibold tracking-tight",
						children: "Recommandé pour toi"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/explore",
						className: "flex items-center gap-0.5 text-sm font-semibold text-primary",
						children: ["Voir plus", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4 pb-6",
					children: recommended.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceCard, { experience: item }, item.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchOverlay, {
				open: search,
				onClose: () => setSearch(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginOverlay, {
				open: login,
				onClose: () => setLogin(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotifOverlay, {
				open: notif,
				onClose: () => setNotif(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoiceOverlay, {
				open: voice,
				onClose: () => setVoice(false)
			})
		]
	});
}
//#endregion
export { Home as component };
