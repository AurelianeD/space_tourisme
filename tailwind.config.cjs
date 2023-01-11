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
      height:{
        screenHeight: '100vh',
      },
      width:{
        screenWidth: '100vw',
      }
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
      'h1-phone': '80px',
      'h2': '100px',
      'h3': '56px',
      'h3Phone': '24px',
      'h3-tablet': '40px',
      'h4': '32px',
      'h5': ['28px', {letterSpacing: '4.75px'}],
      'h5-tablet' : ['20px', {letterSpacing: '3.25px'}],
      'h5-phone': ['16px', {letterSpacing: '2.7px'}],
      'subheading1': '28px',
      'subheading2': ['14px', {letterSpacing: '2.35px'}],
      'navText': ['16px', {letterSpacing: '2.7px'}],
      'body': ['18px', {lineHeight: '32px'}],
      'body-phone': ['15px', {lineHeight: '25px'}],
      'body-tablet': ['16px', {lineHeight: '28px'}],

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
