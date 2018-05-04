import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  googleFonts: [
    {
      name: 'Nunito',
      styles: ['400'],
    },
    {
      name: 'Titillium Web',
      styles: ['400'],
    },
  ],
  headerFontFamily: ['Titillium Web', 'sans-serif'],
  bodyFontFamily: ['Nunito', 'sans-serif'],
})

export default typography
