/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "480px",     // 📱 Mobile (kichik ekranlar uchun)
      md: "768px",     // 📱 Tablet
      lg: "1024px",    // 💻 Laptop
      xl: "1280px",    // 🖥 Desktop
      "2xl": "1536px", // 🖥 Katta ekranlar (masalan, keng monitorda)
    },
  },
  plugins: [],
}

