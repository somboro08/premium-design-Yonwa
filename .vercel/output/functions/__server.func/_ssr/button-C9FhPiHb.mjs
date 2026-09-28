import { w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { c as cn } from "./store-CVi4q4mI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-C9FhPiHb.js
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-[transform,background-color,opacity] duration-150 ease-out select-none disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			ink: "bg-ink text-bg",
			primary: "bg-primary text-primary-fg",
			ghost: "bg-transparent text-fg",
			soft: "bg-bg/90 text-fg backdrop-blur-md",
			line: "border border-line bg-bg text-fg"
		},
		size: {
			sm: "h-9 px-3.5 text-sm rounded-full",
			md: "h-11 px-5 text-sm rounded-full",
			lg: "h-12 px-6 text-[15px] rounded-full",
			icon: "size-11 rounded-full",
			iconSm: "size-10 rounded-full"
		}
	},
	defaultVariants: {
		variant: "ink",
		size: "md"
	}
});
function Button({ className, variant, size, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
//#endregion
export { Button as t };
