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
      }
    },
    extend: {}
  },
  plugins: []
};
