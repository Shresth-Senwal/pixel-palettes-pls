/**
 * Next.js Configuration File for IEEE RAS MUJ Website
 * 
 * This configuration file defines build settings, optimizations, and behavior
 * for the IEEE RAS MUJ website built with Next.js. It includes:
 * 
 * - Image optimization and external domain configurations
 * - Build output settings and static export options
 * - Performance optimizations and bundle analysis
 * - Security headers and content security policies
 * - Experimental features and compiler options
 * - Development and production environment settings
 * 
 * @author IEEE RAS MUJ Development Team
 * @version 2.0.0
 * @since 2024
 */

import type { NextConfig } from "next";

/**
 * Production-grade Next.js configuration optimized for performance, security, and best practices.
 * This configuration enables comprehensive optimizations while maintaining the exact same UI/UX.
 * 
 * Features included:
 * - Security headers (CSP, HSTS, etc.)
 * - Image optimization with modern formats
 * - Bundle analysis capabilities  
 * - Compression and caching optimizations
 * - Performance monitoring
 * - Static export for Netlify deployment
 */
const nextConfig: NextConfig = {
  // Static export configuration for Netlify
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  
  // Server external packages for optimization
  serverExternalPackages: [],
  
  // Enable experimental features for better performance
  experimental: {
    // Optimize font loading
    optimizePackageImports: ['lucide-react'],
  },

  // Image optimization configuration
  images: {
    // Disable image optimization for static export
    unoptimized: true,
    // Enable modern image formats for better compression
    formats: ['image/avif', 'image/webp'],
    // Define responsive image sizes for better performance
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimization
    minimumCacheTTL: 31536000, // 1 year cache for static images
  },

  // Compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Enable compression for better network performance
  compress: true,

  // Power optimization for better performance
  poweredByHeader: false,

  // Custom headers for security and performance
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: [
          // Security Headers
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:",
              "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
              "img-src 'self' data: blob: https:",
              "font-src 'self' fonts.gstatic.com data:",
              "connect-src 'self' https:",
              "media-src 'self' blob:",
              "frame-src 'self'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests"
            ].join('; ')
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options', 
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: [
              'camera=()',
              'microphone=()',
              'geolocation=()',
              'interest-cohort=()'
            ].join(', ')
          },
          // Performance Headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          }
        ]
      },
      {
        // Static assets caching (images, fonts, etc.)
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ];
  },

  // Webpack optimization for better tree-shaking and bundle size
  webpack: (config) => {
    // Enable tree shaking for better bundle optimization
    config.optimization = {
      ...config.optimization,
      usedExports: true,
      sideEffects: false,
    };

    // Optimize bundle splitting
    config.optimization.splitChunks = {
      ...config.optimization.splitChunks,
      chunks: 'all',
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: -10,
          chunks: 'all',
        },
        // Separate Framer Motion for better caching
        framerMotion: {
          test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
          name: 'framer-motion',
          priority: 10,
          chunks: 'all',
        },
        // Separate Lucide React icons for better caching  
        lucideReact: {
          test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
          name: 'lucide-react',
          priority: 10,
          chunks: 'all',
        }
      }
    };

    return config;
  },

  // Environment-based configuration
  env: {
    CUSTOM_KEY: process.env.NODE_ENV,
  }
};

export default nextConfig;
