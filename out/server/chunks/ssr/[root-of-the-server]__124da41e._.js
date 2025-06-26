module.exports = {

"[next]/internal/font/google/inter_e4842bbd.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "inter_e4842bbd-module__r7o-_q__className",
  "variable": "inter_e4842bbd-module__r7o-_q__variable",
});
}}),
"[next]/internal/font/google/inter_e4842bbd.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_e4842bbd$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_e4842bbd.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_e4842bbd$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_e4842bbd$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_e4842bbd$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Root Layout Component for IEEE RAS MUJ Website
 * 
 * This is the root layout component that wraps all pages in the application.
 * It defines:
 * 
 * - Global metadata and SEO configuration
 * - Font loading and optimization (Inter font family)
 * - Global CSS imports and styling
 * - HTML document structure and lang attributes
 * - Viewport and theme color configurations
 * - Open Graph and Twitter social media metadata
 * 
 * @author IEEE RAS MUJ Development Team
 * @version 2.0.0
 * @since 2024
 */ // Next.js font optimization for Google Fonts
__turbopack_context__.s({
    "default": (()=>RootLayout),
    "metadata": (()=>metadata),
    "viewport": (()=>viewport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_e4842bbd$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_e4842bbd.js [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    // ========================================
    // BASE URL CONFIGURATION
    // ========================================
    /**
   * Base URL for resolving relative URLs in metadata
   * Required for proper Open Graph and Twitter image resolution
   */ metadataBase: new URL('https://ieeeras-muj.org'),
    // ========================================
    // PRIMARY SEO METADATA
    // ========================================
    // Main page title - appears in browser tab and search results
    title: 'IEEE RAS MUJ | Robotics & Automation Society',
    // Meta description - appears in search engine results
    description: 'IEEE Robotics and Automation Society at Manipal University Jaipur. Advancing robotics and automation through research, innovation, and collaborative learning. Join us for workshops, hackathons, and cutting-edge projects.',
    // SEO keywords for search engine optimization
    keywords: [
        'IEEE RAS',
        'Robotics',
        'Automation',
        'Manipal University Jaipur',
        'MUJ',
        'IEEE',
        'Robotics Society',
        'Automation Society',
        'Engineering',
        'Technology',
        'Innovation',
        'Research',
        'Hackathon',
        'Pixel Palettes',
        'AI',
        'Machine Learning',
        'Artificial Intelligence',
        'Student Organization',
        'Technical Society'
    ],
    // Author information
    authors: [
        {
            name: 'IEEE RAS MUJ Development Team'
        }
    ],
    // Content creator
    creator: 'IEEE RAS MUJ',
    // Publisher information
    publisher: 'IEEE Robotics and Automation Society - Manipal University Jaipur',
    // Robots directive for search engines
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    // ========================================
    // OPEN GRAPH METADATA (Facebook, LinkedIn, etc.)
    // ========================================
    openGraph: {
        // Content type
        type: 'website',
        // Canonical URL
        url: 'https://ieeeras-muj.org',
        // Site name
        siteName: 'IEEE RAS MUJ',
        // Page title for social sharing
        title: 'IEEE RAS MUJ | Robotics & Automation Society',
        // Description for social sharing
        description: 'IEEE Robotics and Automation Society at Manipal University Jaipur. Advancing robotics and automation through research, innovation, and collaborative learning.',
        // Social sharing image
        images: [
            {
                url: '/images/logos/ieee-ras-logo.png',
                width: 1200,
                height: 630,
                alt: 'IEEE RAS MUJ Logo',
                type: 'image/png'
            }
        ],
        // Locale information
        locale: 'en_US'
    },
    // ========================================
    // TWITTER CARD METADATA
    // ========================================
    twitter: {
        // Card type for optimal display
        card: 'summary_large_image',
        // Twitter handle (if available)
        // site: '@ieeeras_muj',
        // creator: '@ieeeras_muj',
        // Title for Twitter sharing
        title: 'IEEE RAS MUJ | Robotics & Automation Society',
        // Description for Twitter sharing
        description: 'IEEE Robotics and Automation Society at Manipal University Jaipur. Join us for robotics research, automation projects, and innovative hackathons.',
        // Twitter sharing image
        images: [
            '/images/logos/ieee-ras-logo.png'
        ]
    },
    // ========================================
    // ADDITIONAL METADATA
    // ========================================
    // Favicon configuration
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/images/logos/ieee-ras-logo.png'
    },
    // Verification for search engines (add when available)
    // verification: {
    //   google: 'your-google-verification-code',
    //   yandex: 'your-yandex-verification-code',
    //   yahoo: 'your-yahoo-verification-code',
    // },
    // Category for app stores
    category: 'education',
    // Classification
    classification: 'Educational Institution, Technology Organization',
    // Application name
    applicationName: 'IEEE RAS MUJ Website',
    // Referrer policy
    referrer: 'origin-when-cross-origin'
};
const viewport = {
    // Viewport meta tag configuration
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    // Theme color for mobile browsers and PWA
    themeColor: [
        {
            media: '(prefers-color-scheme: light)',
            color: '#ffffff'
        },
        {
            media: '(prefers-color-scheme: dark)',
            color: '#000000'
        }
    ],
    // Color scheme preference
    colorScheme: 'dark light'
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_e4842bbd$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable,
        suppressHydrationWarning: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "anonymous"
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "dns-prefetch",
                        href: "https://script.google.com"
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "Organization",
                                "name": "IEEE Robotics and Automation Society - Manipal University Jaipur",
                                "alternateName": "IEEE RAS MUJ",
                                "url": "https://ieeeras-muj.org",
                                "logo": "https://ieeeras-muj.org/images/logos/ieee-ras-logo.png",
                                "description": "IEEE Robotics and Automation Society at Manipal University Jaipur. Advancing robotics and automation through research, innovation, and collaborative learning.",
                                "foundingDate": "2020",
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Jaipur",
                                    "addressRegion": "Rajasthan",
                                    "addressCountry": "India"
                                },
                                "parentOrganization": {
                                    "@type": "Organization",
                                    "name": "IEEE Robotics and Automation Society",
                                    "url": "https://www.ieee-ras.org"
                                },
                                "memberOf": {
                                    "@type": "Organization",
                                    "name": "Institute of Electrical and Electronics Engineers",
                                    "url": "https://www.ieee.org"
                                }
                            })
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_e4842bbd$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].className} antialiased`,
                suppressHydrationWarning: true,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 330,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 270,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__124da41e._.js.map