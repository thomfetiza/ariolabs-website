module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
    "!./node_modules/**",
    "!./dist/**",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        'deep-navy': '#0F172A',
        'electric-teal': '#06B6D4',
        'light-teal': '#67E8F9',
        'soft-gray': '#F1F5F9',
        'dark-gray': '#334155',
        'success-green': '#10B981',
        'warning-orange': '#F59E0B',
      }
    }
  },
  plugins: [],
}
