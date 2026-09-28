import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Star, h as MapPin } from "../_libs/lucide-react.mjs";
import { a as artisanOf, c as cn } from "./store-CVi4q4mI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/experience-card-Dj8QHK8E.js
var import_jsx_runtime = require_jsx_runtime();
function ExperienceCard({ experience, className }) {
	const artisan = artisanOf(experience);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/experience/$id",
		params: { id: experience.id },
		className: cn("relative block h-52 overflow-hidden rounded-2xl bg-ink text-on-media shadow-card", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: experience.images[0],
				alt: "",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-ink via-ink/25 to-ink/10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-3 left-3 flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold text-primary-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
					className: "size-3",
					strokeWidth: 2.4
				}), experience.city]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute right-3 top-3 flex items-center gap-1 rounded-full bg-ink/35 px-2 py-1 text-[11px] font-medium backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 fill-star text-star" }), experience.rating.toFixed(1)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-[17px] font-semibold leading-snug",
						children: experience.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 line-clamp-2 text-[13px] leading-snug text-on-media/80",
						children: experience.tagline
					}),
					artisan ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtisanDot, {
							artisanId: artisan.id,
							initial: artisan.initial,
							photo: artisan.photo
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-on-media/80",
							children: artisan.handle
						})]
					}) : null
				]
			})
		]
	});
}
function ArtisanDot({ artisanId: _artisanId, initial, photo, size = "sm" }) {
	const dim = size === "lg" ? "size-12" : size === "md" ? "size-11" : "size-7";
	if (photo) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: photo,
		alt: "",
		className: cn(dim, "rounded-full object-cover ring-2 ring-primary/80")
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(dim, "inline-flex items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-fg"),
		children: initial
	});
}
//#endregion
export { ExperienceCard as n, ArtisanDot as t };
