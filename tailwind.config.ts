import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      mobile: "376px",
      desktop: "1440px",
    },
    colors: {
      "light-red": "hsl(0, 100%, 67%)",
      "orangey-yellow": "hsl(39, 100%, 56%)",
      "green-teal": "hsl(166, 100%, 37%)",
      "cobalt-blue": "hsl(234, 85%, 45%)",
      "light-slate-blue-background": "hsl(252, 100%, 64%)",
      "light-royal-blue-background": "hsl(241, 81%, 54%)",
      "violet-blue-circle": "hsla(256, 72%, 46%, 1)",
      "persian-blue-circle": "hsla(241, 72%, 46%, .3)",

      white: "hsl(0, 0%, 100%)",
      "pale-blue": "hsl(221, 100%, 96%)",
      "light-lavender": "hsl(241, 100%, 89%)",
      "dark-gray-blue": "hsl(224, 30%, 27%)",
    },
  },
  plugins: [],
};
export default config;
