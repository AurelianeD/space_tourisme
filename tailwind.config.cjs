const production = !process.env.ROLLUP_WATCH;


module.exports = {
  content: ['./src/**/*.svelte'],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production // disable purge in dev
  },
  theme: {
    extend: {
      fontFamily: {
        barlow: ['BarlowCondensed', 'sans-serif'],
        barlowBold: ['BarlowCondensedBold', 'sans-serif'],
        barlowRegular: ['Barlow', 'sans-serif'],
        bellefair:['Bellefair', 'sans-serif']
      },
    },
    colors: {
      'black': '#0B0D17',
      'tahiti': '#D0D6F9',
      'white': '#FFFFFF',
      'transparent': 'transparent',
      'whiteOpacity': 'rgba(255, 255, 255, 0.05)',
      'gray': '#383B4B'
    },
    fontSize: {
      'h1': '150px',
      'h2': '100px',
      'h3': '56px',
      'h4': '32px',
      'h5': ['28px', {letterSpacing: '4.75px'}],
      'subheading1': '28px',
      'subheading2': ['14px', {letterSpacing: '2.35px'}],
      'navText': ['16px', {letterSpacing: '2.7px'}],
      'body': ['18px', {lineHeight: '32px'}],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
}
