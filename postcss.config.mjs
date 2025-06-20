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
 */

/**
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
 */
const config = {
  plugins: [
    "@tailwindcss/postcss", // Tailwind CSS processing and optimization
  ],
};

export default config;
