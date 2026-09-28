import { i as __toESM } from "../_runtime.mjs";
import { X as require_react, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as ChevronLeft, s as Send } from "../_libs/lucide-react.mjs";
import { n as Route } from "./router-Cgk8hsN6.mjs";
import { c as cn, d as getArtisan, g as useYonwa, t as AppFrame } from "./store-CVi4q4mI.mjs";
import { t as ArtisanDot } from "./experience-card-Dj8QHK8E.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/messages._threadId-B2v_NmoQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Thread() {
	const { threadId } = Route.useParams();
	const artisan = getArtisan(threadId);
	const ensureThread = useYonwa((s) => s.ensureThread);
	const sendMessage = useYonwa((s) => s.sendMessage);
	const messages = useYonwa((s) => s.threads[threadId] ?? []);
	const [text, setText] = (0, import_react.useState)("");
	const end = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		ensureThread(threadId);
	}, [ensureThread, threadId]);
	(0, import_react.useEffect)(() => {
		end.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages.length]);
	if (!artisan) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "p-8 text-center text-sm",
		children: "Conversation introuvable."
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppFrame, {
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "flex items-center gap-2 border-t border-line px-3 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]",
			onSubmit: (e) => {
				e.preventDefault();
				sendMessage(threadId, text);
				setText("");
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: text,
				onChange: (e) => setText(e.target.value),
				placeholder: "Écrire un message…",
				className: "h-11 flex-1 rounded-full bg-primary-soft px-4 text-sm outline-none"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "flex size-11 items-center justify-center rounded-full bg-ink text-bg",
				"aria-label": "Envoyer",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })
			})]
		}),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3 border-b border-line px-3 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/messages",
					className: "flex size-10 items-center justify-center",
					"aria-label": "Retour",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtisanDot, {
					artisanId: artisan.id,
					initial: artisan.initial,
					photo: artisan.photo
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: artisan.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: artisan.city
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-2 px-4 py-4",
			children: [messages.map((message) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed", message.from === "me" ? "self-end bg-ink text-bg" : "self-start bg-primary-soft"),
				children: message.text
			}, message.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: end })]
		})]
	});
}
//#endregion
export { Thread as component };
