import { i as __toESM } from "../_runtime.mjs";
import { X as require_react, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as LogOut, v as Heart } from "../_libs/lucide-react.mjs";
import { g as useYonwa, l as experiences, t as AppFrame } from "./store-CVi4q4mI.mjs";
import { t as Button } from "./button-C9FhPiHb.mjs";
import { l as VoiceOverlay, o as LoginOverlay, t as BottomNav } from "./home-extras-D8qtoF4t.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-B_L5SB2z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Profile() {
	const userName = useYonwa((s) => s.userName);
	const logout = useYonwa((s) => s.logout);
	const favorites = useYonwa((s) => s.favorites);
	const bookings = useYonwa((s) => s.bookings);
	const [login, setLogin] = (0, import_react.useState)(false);
	const [voice, setVoice] = (0, import_react.useState)(false);
	const loved = experiences.filter((item) => favorites.includes(item.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppFrame, {
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, { onVoice: () => setVoice(true) }),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 pt-5 pb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-semibold tracking-tight",
						children: "Profil"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 rounded-2xl bg-primary-soft p-4",
						children: userName ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-12 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-fg",
									children: userName.slice(0, 1).toLowerCase()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold",
										children: userName
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted",
										children: [
											bookings.length,
											" réservation",
											bookings.length > 1 ? "s" : "",
											" · ",
											favorites.length,
											" favori",
											favorites.length > 1 ? "s" : ""
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: logout,
									className: "flex size-10 items-center justify-center rounded-full bg-bg",
									"aria-label": "Se déconnecter",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" })
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: "Pas encore connecté"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: "Un prénom pour garder tes ateliers."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mt-3",
								size: "sm",
								onClick: () => setLogin(true),
								children: "Se connecter"
							})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-8 flex items-center gap-2 text-base font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-4 text-primary" }), "Favoris"]
					}),
					loved.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "Touche le cœur sur une expérience pour la retenir."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: loved.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/experience/$id",
							params: { id: item.id },
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.images[0],
								alt: "",
								className: "size-14 rounded-xl object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-sm font-semibold",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted",
									children: item.city
								})]
							})]
						}) }, item.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginOverlay, {
				open: login,
				onClose: () => setLogin(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoiceOverlay, {
				open: voice,
				onClose: () => setVoice(false)
			})
		]
	});
}
//#endregion
export { Profile as component };
