import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        watercourse: {
          "50": "#edfcf5",
          "100": "#d4f7e4",
          "200": "#aceece",
          "300": "#76dfb2",
          "400": "#3ec992",
          "500": "#1bae79",
          "600": "#0e8d62",
          "700": "#0b6e4f",
          "800": "#0c5942",
          "900": "#0b4937",
          "950": "#052920",
        },
        // keyframes: {
        //   fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        //   fadeOut: { "0%": { opacity: "1" }, "100%": { opacity: "0" } },
        // },
        // animation: {
        //   "fade-in": "fadeIn 1s ease-in-out",
        //   "fade-out": "fadeOut 1s ease-in-out",
        // },
      },
    },
  },
  plugins: [flowbite.plugin(),],
} satisfies Config;
