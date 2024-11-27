module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0a192f',
        'navy-light': '#112240',
        'slate': '#8892b0',
        'slate-light': '#a8b2d1',
        'purple': '#6E57E0',
      },
      rotate: {
        '360': '360deg',
      }
    },
  },
  plugins: [],
  server: {
    open: true,
  }
}
