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
  plugins: [
      function ({ addUtilities }: { addUtilities: any }) {
        const newUtilities = {
          ".perspective": {
            perspective: "1000px",
          },
          ".preserve-3d": {
            transformStyle: "preserve-3d",
          },
          ".backface-hidden": {
            backfaceVisibility: "hidden",
          },
          ".rotate-y-180": {
            transform: "rotateY(180deg)",
          },
        };
        addUtilities(newUtilities, ["responsive", "hover"]);
      },
    ],
} as Config;

// tailwind.config.js
