/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html'],
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

        'text1-cash': '#3D3E4A',
        bg1: '#E1E2E6',
        bg2: '#F7F8FA',
        bg3: '#FFFFFF'
      },
      'features-bg': 'rgba(143, 85, 234, 0.05)',
      warning: 'rgba(251, 188, 9, 0.10)',
      green: 'rgba(83, 180, 131, 0.10)',
      transparent: 'transparent',
      'try-for-free-gray': 'rgba(26, 26, 26, 0.81)',
      'course-card-border': 'rgba(214, 214, 214, 0.56)',
      'articles-section-bg': 'rgba(143, 85, 234, 0.05)',
      gray: 'rgba(80, 97, 138, 0.68)'
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
      24: '9.6rem',
      25: '10rem',
      26: '10.4rem',
      27: '10.8rem',
      navHeight: 'var(--nav-height)'
    },
    backgroundImage: {
      'line-bg':
        'linear-gradient(90deg, rgba(143, 85, 234, 0.00) 0%, #8F55EA 51.56%, rgba(143, 85, 234, 0.00) 100%)',
      'line-pattern': "url('/images/line-pattern.png')",
      'dark-bg':
        'linear-gradient(0deg, rgba(0, 0, 0, 0.62) 0%, rgba(0, 0, 0, 0.62) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat, #E1E2E6',
      hero: "url('/images/hero-bg.png')",
      'cashout-card-icon': 'linear-gradient(180deg, #A562FD 0%, #984DFA 100%)',
      'dark-cover':
        'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)',
      pattern: "url('/images/main/pattern.png')",
      'line-pattern': "url('/images/line-pattern.png')"
    },
    borderRadius: {
      lg: '0.8rem',
      '2xl': '1.6rem',
      '4xl': '2.4rem'
    },
    fontFamily: {
      sans: ['ClashDisplay', 'Iransans', 'san-serif']
    },
    fontSize: {
      base: '1.4rem',
      md: '1.6rem',
      xl: '2rem',
      '2xl': '2.4rem',
      '3xl': '3.2rem',
      '4xl': '3.5rem',
      '5xl': '6.4rem'
    },
    boxShadow: {
      primary:
        '0px 0px 0px 0px rgba(143, 85, 234, 0.08), 0px 7px 15px 0px rgba(143, 85, 234, 0.08), 0px 28px 28px 0px rgba(143, 85, 234, 0.07), 0px 63px 38px 0px rgba(143, 85, 234, 0.04), 0px 113px 45px 0px rgba(143, 85, 234, 0.01), 0px 176px 49px 0px rgba(143, 85, 234, 0.00)',
      secondary:
        '0px 0px 0px 0px rgba(0, 0, 0, 0.01), 0px 7px 15px 0px rgba(0, 0, 0, 0.01), 0px 28px 28px 0px rgba(0, 0, 0, 0.01), 0px 63px 38px 0px rgba(0, 0, 0, 0.01), 0px 113px 45px 0px rgba(0, 0, 0, 0.00), 0px 176px 49px 0px rgba(0, 0, 0, 0.00)',
      tertiary:
        '0px 0px 0px 0px rgba(0, 0, 0, 0.01), 0px 7px 15px 0px rgba(0, 0, 0, 0.01), 0px 28px 28px 0px rgba(0, 0, 0, 0.01), 0px 63px 38px 0px rgba(0, 0, 0, 0.01), 0px 113px 45px 0px rgba(0, 0, 0, 0.00), 0px 176px 49px 0px rgba(0, 0, 0, 0.00)',
      fourth:
        '0px 0px 0px 0px rgba(0, 0, 0, 0.04), 0px 7px 15px 0px rgba(0, 0, 0, 0.04), 0px 28px 28px 0px rgba(0, 0, 0, 0.03), 0px 63px 38px 0px rgba(0, 0, 0, 0.02), 0px 113px 45px 0px rgba(0, 0, 0, 0.01), 0px 176px 49px 0px rgba(0, 0, 0, 0.00)',
      'cashout-card-shadow':
        '0px 0px 0px 0px rgba(0, 0, 0, 0.01), 0px 5.26807px 11.28872px 0px rgba(0, 0, 0, 0.01), 0px 21.07228px 21.07228px 0px rgba(0, 0, 0, 0.01), 0px 47.41263px 28.59809px 0px rgba(0, 0, 0, 0.01), 0px 85.0417px 33.86616px 0px rgba(0, 0, 0, 0.00), 0px 132.45433px 36.87649px 0px rgba(0, 0, 0, 0.00)',
      fifth: '0px 3.12543px 18.75256px 0px rgba(27, 27, 27, 0.08)',
      six: '0px 0px 0px 0px rgba(0, 0, 0, 0.02), 0px 6.23404px 13.35866px 0px rgba(0, 0, 0, 0.02), 0px 24.93617px 24.93617px 0px rgba(0, 0, 0, 0.02), 0px 56.10638px 33.84195px 0px rgba(0, 0, 0, 0.01), 0px 100.63525px 40.07599px 0px rgba(0, 0, 0, 0.00), 0px 156.74164px 43.6383px 0px rgba(0, 0, 0, 0.00)'
    },
    extend: {}
  },
  plugins: []
};
