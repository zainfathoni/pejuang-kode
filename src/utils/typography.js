import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  googleFonts: [
    {
      name: 'Titillium Web',
      styles: ['400'],
    },
  ],
  headerFontFamily: ['Titillium Web', 'sans-serif'],
  bodyFontFamily: ['Titillium Web', 'sans-serif'],
})

export default typography
