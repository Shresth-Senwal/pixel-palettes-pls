module.exports = {

"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[project]/postcss.config.mjs [postcss] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * PostCSS Configuration for IEEE RAS MUJ Website
 * 
 * PostCSS is a tool for transforming CSS with JavaScript plugins.
 * This configuration file defines how CSS is processed in the build pipeline,
 * specifically for Tailwind CSS integration and optimization.
 * 
 * Primary Purpose:
 * - Process Tailwind CSS directives (@apply, @layer, etc.)
 * - Handle CSS imports and nested rules
 * - Optimize and purge unused CSS classes in production
 * - Transform modern CSS features for browser compatibility
 * 
 * Build Pipeline Integration:
 * - Runs during Next.js build process
 * - Processes src/app/globals.css and component CSS
 * - Generates optimized CSS bundle for production
 * - Enables Tailwind CSS intellisense and autocomplete
 * 
 * @author IEEE RAS MUJ Development Team
 * @version 2.0.0
 * @since 2024
 */ /**
 * PostCSS Configuration Object
 * 
 * Defines plugins and their configurations for CSS processing.
 * The order of plugins matters as they process CSS sequentially.
 * 
 * Current Setup:
 * - @tailwindcss/postcss: Official Tailwind CSS PostCSS plugin
 *   - Processes Tailwind directives (@tailwind base, components, utilities)
 *   - Handles JIT (Just-In-Time) compilation for optimal performance
 *   - Purges unused CSS classes based on content scanning
 *   - Generates utility classes on-demand during development
 * 
 * Additional plugins can be added here for:
 * - Autoprefixer: Add vendor prefixes for browser compatibility
 * - cssnano: Minify CSS for production builds
 * - postcss-nested: Support for nested CSS rules
 * - postcss-import: Handle CSS @import statements
 */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const config = {
    plugins: [
        "@tailwindcss/postcss"
    ]
};
const __TURBOPACK__default__export__ = config;
}}),
"[project]/postcss.config.mjs/transform.ts { CONFIG => \"[project]/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>transform),
    "init": (()=>init)
});
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$mjs__$5b$postcss$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/postcss/lib/postcss.mjs [postcss] (ecmascript)");
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$postcss$2e$config$2e$mjs__$5b$postcss$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/postcss.config.mjs [postcss] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
const contextDir = process.cwd();
function toPath(file) {
    const relPath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["relative"])(contextDir, file);
    if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["isAbsolute"])(relPath)) {
        throw new Error(`Cannot depend on path (${file}) outside of root directory (${contextDir})`);
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["sep"] !== "/" ? relPath.replaceAll(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["sep"], "/") : relPath;
}
let processor;
const init = async (ipc)=>{
    let config = __TURBOPACK__imported__module__$5b$project$5d2f$postcss$2e$config$2e$mjs__$5b$postcss$5d$__$28$ecmascript$29$__["default"];
    if (typeof config === "function") {
        config = await config({
            env: "development"
        });
    }
    if (typeof config === "undefined") {
        throw new Error("PostCSS config is undefined (make sure to export an function or object from config file)");
    }
    let plugins;
    if (Array.isArray(config.plugins)) {
        plugins = config.plugins.map((plugin)=>{
            if (Array.isArray(plugin)) {
                return plugin;
            } else if (typeof plugin === "string") {
                return [
                    plugin,
                    {}
                ];
            } else {
                return plugin;
            }
        });
    } else if (typeof config.plugins === "object") {
        plugins = Object.entries(config.plugins).filter(([, options])=>options);
    } else {
        plugins = [];
    }
    const loadedPlugins = plugins.map((plugin)=>{
        if (Array.isArray(plugin)) {
            const [arg, options] = plugin;
            let pluginFactory = arg;
            if (typeof pluginFactory === "string") {
                pluginFactory = require(/* turbopackIgnore: true */ pluginFactory);
            }
            if (pluginFactory.default) {
                pluginFactory = pluginFactory.default;
            }
            return pluginFactory(options);
        }
        return plugin;
    });
    processor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$mjs__$5b$postcss$5d$__$28$ecmascript$29$__["default"])(loadedPlugins);
};
async function transform(ipc, cssContent, name, sourceMap) {
    const { css, map, messages } = await processor.process(cssContent, {
        from: name,
        to: name,
        map: sourceMap ? {
            inline: false,
            annotation: false
        } : undefined
    });
    const assets = [];
    for (const msg of messages){
        switch(msg.type){
            case "asset":
                assets.push({
                    file: msg.file,
                    content: msg.content,
                    sourceMap: !sourceMap ? undefined : typeof msg.sourceMap === "string" ? msg.sourceMap : JSON.stringify(msg.sourceMap)
                });
                break;
            case "dependency":
            case "missing-dependency":
                ipc.sendInfo({
                    type: "fileDependency",
                    path: toPath(msg.file)
                });
                break;
            case "build-dependency":
                ipc.sendInfo({
                    type: "buildDependency",
                    path: toPath(msg.file)
                });
                break;
            case "dir-dependency":
                ipc.sendInfo({
                    type: "dirDependency",
                    path: toPath(msg.dir),
                    glob: msg.glob
                });
                break;
            case "context-dependency":
                ipc.sendInfo({
                    type: "dirDependency",
                    path: toPath(msg.file),
                    glob: "**"
                });
                break;
            default:
                break;
        }
    }
    return {
        css,
        map: sourceMap ? JSON.stringify(map) : undefined,
        assets
    };
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__05f88b00._.js.map