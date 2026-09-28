import { S as useNavigate, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as ChevronLeft, a as Star } from "../_libs/lucide-react.mjs";
import { i as Route$2 } from "./router-Cgk8hsN6.mjs";
import { d as getArtisan, g as useYonwa, l as experiences, r as MediaButton, t as AppFrame } from "./store-CVi4q4mI.mjs";
import { n as ExperienceCard, t as ArtisanDot } from "./experience-card-Dj8QHK8E.mjs";
import { t as Button } from "./button-C9FhPiHb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/artisan._id-D4id2N2O.js
var import_jsx_runtime = require_jsx_runtime();
function ArtisanPage() {
	const { id } = Route$2.useParams();
	const artisan = getArtisan(id);
	const ensureThread = useYonwa((s) => s.ensureThread);
	const navigate = useNavigate();
	const list = experiences.filter((item) => item.artisanId === id);
	if (!artisan) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "p-8 text-center text-sm",
		children: "Artisan introuvable."
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 pt-4 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaButton, {
				"aria-label": "Retour",
				onClick: () => window.history.back(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtisanDot, {
					artisanId: artisan.id,
					initial: artisan.initial,
					photo: artisan.photo,
					size: "lg"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-xl font-semibold tracking-tight",
						children: artisan.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							artisan.handle,
							" · ",
							artisan.city
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 flex items-center gap-1 text-sm font-semibold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-star text-star" }),
							artisan.rating.toFixed(1),
							" · ",
							artisan.reviews,
							" avis · depuis",
							" ",
							artisan.since
						]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-sm leading-relaxed text-muted",
				children: artisan.bio
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				className: "mt-5 w-full",
				onClick: () => {
					ensureThread(artisan.id);
					navigate({
						to: "/messages/$threadId",
						params: { threadId: artisan.id }
					});
				},
				children: ["Écrire à ", artisan.name.split(" ")[0]]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 mb-3 text-base font-semibold",
				children: "Ses expériences"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: list.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceCard, { experience: item }, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-6 inline-block text-sm text-primary",
				children: "Retour à l’accueil"
			})
		]
	}) });
}
//#endregion
export { ArtisanPage as component };
