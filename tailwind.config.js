/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        gfsDidot: ["var(--font-gfs-didot)", "serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        libreBaskerville: ["var(--font-libre-baskerville)", "serif"],
        helvetica: ['"Helvetica Neue"', "serif"],
        "made-mirage": ['"MADE Mirage"', "sans-serif"],
      },
      backgroundImage: {
        'mobileWelcome': 'url("/images/mobileBg.svg")',
        'desktopWelcome': 'url("/images/desktopWelcomeBg.svg")',
        'desktopCommunityWelcome': 'url("/images/welcomeCommunityBg.svg")',
        'mobileFooter': 'url("/images/MobileFooterBg.svg")',
        'desktopFooter': 'url("/images/DesktopFooterBg.svg")',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
