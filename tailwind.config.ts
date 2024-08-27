import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        "classic-pink": "var(--classic-pink)",
        darkblue: "var(--darkblue)",
        lightpink: "var(--lightpink)",
        thegreen: "var(--thegreen)",
        thered: "var(--thered)",
      },
    },
  },
  fontFamily: {
    sans: ["var(--font-sans)", ...fontFamily.sans],
    squid: ["Squid", "sans-serif"],
  },
  screens: {
    vn: "1195px",
    // => @media (min-width: 1145px) { ... }
  },
} as Config;

// tailwind.config.js
