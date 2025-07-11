
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#F7931A', // Bitcoin Orange
        'brand-secondary': '#8A42F4', // Nostr Purple
        'base-100': '#1A1A1A',
        'base-200': '#292929',
        'base-300': '#404040',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A0A0',
      }
    },
  },
  plugins: [],
}
