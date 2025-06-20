/**
 * ESLint Configuration for IEEE RAS MUJ Website
 * 
 * This ESLint configuration file provides linting rules and standards for the
 * IEEE RAS MUJ website codebase. It ensures code quality, consistency, and
 * adherence to best practices across the entire project.
 * 
 * Features:
 * - Next.js specific linting rules and optimizations
 * - TypeScript support with type-aware linting
 * - Core Web Vitals performance linting
 * - React best practices and hooks rules
 * - Accessibility (a11y) linting for inclusive design
 * - Modern ES6+ syntax and import/export standards
 * 
 * Configuration Type: Flat Config (ESLint 9.x+)
 * This uses the new flat config format for better performance and flexibility.
 * 
 * @author IEEE RAS MUJ Development Team
 * @version 2.0.0
 * @since 2024
 */

// Node.js path utilities for module resolution
import { dirname } from "path";
import { fileURLToPath } from "url";
// ESLint compatibility layer for legacy config formats
import { FlatCompat } from "@eslint/eslintrc";

// ========================================
// MODULE PATH RESOLUTION
// ========================================

/**
 * Convert import.meta.url to file path for compatibility
 * Required for ES modules to determine current file location
 */
const __filename = fileURLToPath(import.meta.url);

/**
 * Get directory name from current file path
 * Used as base directory for ESLint configuration resolution
 */
const __dirname = dirname(__filename);

// ========================================
// ESLINT COMPATIBILITY SETUP
// ========================================

/**
 * FlatCompat instance for backward compatibility
 * Allows usage of legacy ESLint configuration formats
 * within the new flat config system
 */
const compat = new FlatCompat({
  baseDirectory: __dirname, // Set base directory for relative path resolution
});

// ========================================
// ESLINT CONFIGURATION
// ========================================

/**
 * Main ESLint configuration array
 * Uses Next.js recommended configurations with TypeScript support
 * 
 * Included Configurations:
 * 1. next/core-web-vitals: Performance and Core Web Vitals linting
 *    - Ensures optimal loading performance
 *    - Validates image optimization usage
 *    - Checks for performance anti-patterns
 * 
 * 2. next/typescript: TypeScript-specific Next.js rules
 *    - Type-aware linting for Next.js patterns
 *    - Server/client component boundary validation
 *    - App Router specific linting rules
 *    - API route validation and best practices
 */
const eslintConfig = [
  // Extend Next.js recommended configurations
  ...compat.extends(
    "next/core-web-vitals",  // Performance and Web Vitals linting
    "next/typescript"        // TypeScript + Next.js specific rules
  ),
  
  // Additional configuration can be added here for custom rules
  // Example:
  // {
  //   files: ["**/*.{ts,tsx}"],
  //   rules: {
  //     // Custom TypeScript rules
  //   }
  // },
  // {
  //   files: ["**/*.{js,jsx}"],
  //   rules: {
  //     // Custom JavaScript rules
  //   }
  // }
];

export default eslintConfig;
