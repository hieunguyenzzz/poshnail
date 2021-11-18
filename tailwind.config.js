module.exports = {
  mode: 'jit',
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['CenturyGothic', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      },
      spacing: {
        header: 'var(--header-height)',
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/aspect-ratio')],
  daisyui: {
    themes: [
      {
        default: {
          /* your theme name */
          primary: '#C46D5E' /* Primary color */,
          'primary-focus': '#CD8679' /* Primary color - focused */,
          'primary-content':
            '#ffffff' /* Foreground content color to use on primary color */,

          secondary: '#1098F7' /* Secondary color */,
          'secondary-focus': '#4DB2F9' /* Secondary color - focused */,
          'secondary-content':
            '#ffffff' /* Foreground content color to use on secondary color */,

          accent: '#37cdbe' /* Accent color */,
          'accent-focus': '#2aa79b' /* Accent color - focused */,
          'accent-content':
            '#ffffff' /* Foreground content color to use on accent color */,

          neutral: '#3d4451' /* Neutral color */,
          'neutral-focus': '#2a2e37' /* Neutral color - focused */,
          'neutral-content':
            '#ffffff' /* Foreground content color to use on neutral color */,

          'base-100':
            '#373536' /* Base color of page, used for blank backgrounds */,
          'base-200': '#110F10' /* Base color, a little darker */,
          'base-300': '#000000' /* Base color, even more darker */,
          'base-content':
            '#ffffff' /* Foreground content color to use on base color */,

          info: '#2094f3' /* Info */,
          success: '#009485' /* Success */,
          warning: '#ff9900' /* Warning */,
          error: '#ff5724' /* Error */,
        },
      },
    ],
  },
}
