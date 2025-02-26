import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "oklch(15% 0 0)",
          hover: "oklch(5% 0 0)",
          invert: "oklch(100% 0 0)",
        },
        secondary: "oklch(50% 0 0)",
        tertiary: "oklch(60% 0 0)",
        brand: {
          DEFAULT: "oklch(40% 0.2 270)",
          emphasize: "oklch(35% 0.2 270)",
          subtle: "oklch(95% 0.1 270)",
          solid: "oklch(45% 0.3 270)",
        },
        disabled: {
          DEFAULT: "oklch(70% 0 0)",
          emphasize: "oklch(95% 0 0)",
        },
        error: {
          DEFAULT: "oklch(50% 0.2 30)",
          emphasize: "oklch(35% 0.2 30)",
          subtle: "oklch(98% 0.1 30)",
        },
        success: {
          DEFAULT: "oklch(55% 0.25 145)",
          subtle: "oklch(98% 0.1 145)",
        },
        warning: {
          DEFAULT: "oklch(60% 0.3 80)",
          subtle: "oklch(98% 0.1 80)",
        },
        background: {
          DEFAULT: "oklch(100% 0 0)",
          inverted: "oklch(5% 0 0)",
          hover: "oklch(98% 0 0)",
          secondary: "oklch(90% 0 0)",
          "secondary-hover": "oklch(85% 0 0)",
          tertiary: "oklch(98% 0 0)",
          disabled: "oklch(97% 0 0)",
          "disabled-emphasize": "oklch(95% 0 0)",
          brand: "oklch(40% 0.2 270)",
          "brand-emphasize": "oklch(35% 0.2 270)",
          error: "oklch(50% 0.2 30)",
          "error-emphasize": "oklch(40% 0.2 30)",
          "error-subtle": "oklch(98% 0.1 30)",
          "success-subtle": "oklch(98% 0.1 145)",
          "brand-subtle": "oklch(95% 0.1 270)",
          "neutral-subtle": "oklch(98% 0 0)",
          "warning-subtle": "oklch(98% 0.1 80)",
        },
        border: {
          primary: "oklch(90% 0 0)",
          secondary: "oklch(60% 0 0)",
          success: "oklch(80% 0.2 145)",
          "brand-solid": "oklch(50% 0.3 270)",
          "brand-subtle": "oklch(85% 0.2 270)",
          "error-subtle": "oklch(85% 0.2 30)",
          "warning-subtle": "oklch(90% 0.2 80)",
        },
        icon: {
          emphasize: "oklch(40% 0 0)",
          primary: "oklch(70% 0 0)",
          "primary-hover": "oklch(60% 0 0)",
          brand: "oklch(55% 0.3 270)",
          "brand-background": "oklch(95% 0.1 270)",
          success: "oklch(55% 0.25 145)",
          error: "oklch(50% 0.2 30)",
          warning: "oklch(80% 0.2 90)",
        },
        text: {
          title: "oklch(40% 0 0)",
          placeholder: "oklch(60% 0 0)",
          hint: "oklch(60% 0 0)",
          filled: "oklch(15% 0 0)",
          disabled: "oklch(70% 0 0)",
          error: "oklch(50% 0.2 30)",
        },
      },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(148deg, #F9FAFB 8.89%, #D2D6DB 100.48%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
