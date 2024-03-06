/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/App.vue"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

