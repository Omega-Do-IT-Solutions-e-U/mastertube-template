/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      primary: {
        1: '#8F55EA',
        2: '#A577EE',
        3: '#BC99F2',
        4: '#D2BBF7'
      },
      secondary: {
        1: '#46BCF7',
        2: '#6BC9F9',
        3: '#90D7FA',
        4: '#B5E4FC'
      },
      tertiary: {
        1: '#323232',
        2: '#505050',
        3: '#6D6D6D',
        4: '#8B8B8B'
      },
      notification: {
        success: '#07D95A',
        alert: '#E9A23B',
        destructive: '#F8183E'
      },
      neutral: {
        text1: '#17181A',
        text2: '#666E80',
        text3: '#98A1B3',
        bg1: '#E1E2E6',
        bg2: '#F7F8FA',
        bg3: '#FFFFFF'
      },
      'features-bg': 'rgba(143, 85, 234, 0.05)',
      warning: 'rgba(251, 188, 9, 0.10)',
      green: 'rgba(83, 180, 131, 0.10)'
    },
    spacing: {
      0: '0',
      1: '0.4rem',
      2: '0.8rem',
      3: '1.2rem',
      4: '1.6rem',
      5: '2rem',
      6: '2.4rem',
      7: '2.8rem',
      8: '3.2rem',
      9: '3.6rem',
      10: '4rem',
      11: '4.4rem',
      12: '4.8rem',
      13: '5.2rem',
      14: '5.6rem',
      15: '6rem',
      16: '6.4rem',
      17: '6.8rem',
      18: '7.2rem',
      19: '7.6rem',
      20: '8rem',
      21: '8.4rem',
      22: '8.8rem',
      23: '9.2rem',
      24: '9.6rem'
    },
    backgroundImage: {
      'line-bg':
        'linear-gradient(90deg, rgba(143, 85, 234, 0.00) 0%, #8F55EA 51.56%, rgba(143, 85, 234, 0.00) 100%)'
    },
    borderRadius: {
      lg: '0.8rem',
      '2xl': '1.6rem',
      '4xl': '2.4rem'
    },
    fontSize: {
      base: '1.4rem',
      md: '1.6rem',
      xl: '2rem',
      '2xl': '2.4rem',
      '3xl': '3.2rem',
      '5xl': '6.4rem'
    },
    boxShadow: {
      primary:
        '0px 0px 0px 0px rgba(143, 85, 234, 0.08), 0px 7px 15px 0px rgba(143, 85, 234, 0.08), 0px 28px 28px 0px rgba(143, 85, 234, 0.07), 0px 63px 38px 0px rgba(143, 85, 234, 0.04), 0px 113px 45px 0px rgba(143, 85, 234, 0.01), 0px 176px 49px 0px rgba(143, 85, 234, 0.00)',
      secondary:
        '0px 0px 0px 0px rgba(0, 0, 0, 0.01), 0px 7px 15px 0px rgba(0, 0, 0, 0.01), 0px 28px 28px 0px rgba(0, 0, 0, 0.01), 0px 63px 38px 0px rgba(0, 0, 0, 0.01), 0px 113px 45px 0px rgba(0, 0, 0, 0.00), 0px 176px 49px 0px rgba(0, 0, 0, 0.00)',
      tertiary:
        '0px 0px 0px 0px rgba(0, 0, 0, 0.01), 0px 7px 15px 0px rgba(0, 0, 0, 0.01), 0px 28px 28px 0px rgba(0, 0, 0, 0.01), 0px 63px 38px 0px rgba(0, 0, 0, 0.01), 0px 113px 45px 0px rgba(0, 0, 0, 0.00), 0px 176px 49px 0px rgba(0, 0, 0, 0.00)'
    },
    extend: {}
  },
  plugins: []
};
