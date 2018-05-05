import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  googleFonts: [
    {
      name: 'Nunito',
      styles: ['400', '800'],
    },
    {
      name: 'Titillium Web',
      styles: ['700'],
    },
  ],
  headerWeight: '700',
  boldWeight: '800',
  headerFontFamily: ['Titillium Web', 'sans-serif'],
  bodyFontFamily: ['Nunito', 'sans-serif'],
})

export default typography
