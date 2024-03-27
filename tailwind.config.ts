import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        alex: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#5763DB",
          "primary-content": "#ffffff",
          "base-100": "#70A3F3",
          "base-content": "#ffffff",
        },
        yael: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#ff00ff",
          "primary-content": "#ffffff",
          "base-100": "#ffd0ff",
          "base-content": "#ff00ff",
        },
        liam: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#000000",
          "primary-content": "#ffffff",
          "base-100": "#ffffff",
          "base-content": "#ffffff",
        },
      },
    ],
  },
};
export default config;
