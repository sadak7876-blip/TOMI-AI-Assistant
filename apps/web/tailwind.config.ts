import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        tomi: {
          bg: '#07111f',
          panel: '#101b2e',
          accent: '#6ea8fe',
          text: '#e9f1ff',
          subtle: '#9eb4d0',
          success: '#34d399',
          warning: '#fbbf24',
        },
      },
      boxShadow: {
        glow: '0 0 30px rgba(110,168,254,0.2)',
      },
    },
  },
  plugins: [],
};

export default config;
