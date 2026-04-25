import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0E5C4A",
          dark: "#0A4438",
          deep: "#063027",
          light: "#1F8068",
          mist: "#E8F1ED",
          sand: "#F5EFE5",
        },
        accent: {
          DEFAULT: "#D4A574",
          dark: "#B8895A",
          light: "#E8C9A2",
        },
        ink: {
          DEFAULT: "#1A1F1C",
          soft: "#3D4845",
          muted: "#6B7570",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-kr)", "var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "var(--font-noto-sans-kr)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-slower": "float 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
