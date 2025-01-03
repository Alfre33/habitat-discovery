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
        especie: {
          "50": "#FF5733",
          "100": "#FFC300",
          "200": "#33FF57",
          "300": "#33FFF3",
          "400": "#FF5733",
          "500": "#C70039",
          "600": "#3498DB",
          "700": "#1ABC9C",
          "750": "#9B59B6",
          "800": "#E74C3C",
          "850": "#F1C40F",
          "900": "#ac94fa",
          "950": "#DAA520",
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
  safelist: [
    'bg-teal-500',
    'bg-watercourse-500',
    'bg-especie-50',
    'bg-especie-100',
    'bg-especie-200',
    'bg-especie-300',
    'bg-especie-400',
    'bg-especie-500',
    'bg-especie-600',
    'bg-especie-700',
    'bg-especie-750',
    'bg-especie-800',
    'bg-especie-850',
    'bg-especie-900',
    'bg-especie-950',
    'text-especie-50',
    'text-especie-100',
    'text-especie-200',
    'text-especie-300',
    'text-especie-400',
    'text-especie-500',
    'text-especie-600',
    'text-especie-700',
    'text-especie-750',
    'text-especie-800',
    'text-especie-850',
    'text-especie-900',
    'text-especie-950',
  ],
  plugins: [flowbite.plugin()],
} satisfies Config;
