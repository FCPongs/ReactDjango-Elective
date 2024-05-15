/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            custom: {
                DEFAULT: '#10B981',
                light: '#D1FAE5',
            },
        },
    },
},
plugins: [
  require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' }),
],
}