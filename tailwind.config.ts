import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark luxury palette
        dark: {
          950: '#020202',
          900: '#050505',
          800: '#0a0a0a',
          700: '#111111',
          600: '#1a1a1a',
          500: '#222222',
          400: '#2a2a2a',
          300: '#333333',
          200: '#444444',
          100: '#555555',
        },
        gold: {
          50: '#fdf8ef',
          100: '#f9edcf',
          200: '#f2d99e',
          300: '#e8c06a',
          400: '#d4a853',
          500: '#c9a54e',
          600: '#b8943f',
          700: '#9a7633',
          800: '#7d5f2d',
          900: '#664d27',
        },
        danger: {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        success: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #b8943f 0%, #d4a853 50%, #c9a54e 100%)',
        'dark-gradient': 'linear-gradient(180deg, #050505 0%, #0a0a0a 50%, #111111 100%)',
        'hero-gradient': 'radial-gradient(ellipse at 50% 0%, rgba(201,165,78,0.08) 0%, transparent 60%)',
        'card-glow': 'radial-gradient(ellipse at 50% 50%, rgba(201,165,78,0.05) 0%, transparent 70%)',
        'cosmic-glow': 'radial-gradient(ellipse at 50% 50%, rgba(88,28,135,0.15) 0%, rgba(201,165,78,0.05) 40%, transparent 70%)',
      },
      boxShadow: {
        'gold-sm': '0 1px 3px rgba(201,165,78,0.1)',
        'gold-md': '0 4px 14px rgba(201,165,78,0.15)',
        'gold-lg': '0 10px 40px rgba(201,165,78,0.2)',
        'gold-glow': '0 0 30px rgba(201,165,78,0.15)',
        'card': '0 4px 20px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.6), 0 0 20px rgba(201,165,78,0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'cosmic-drift': 'cosmic-drift 20s linear infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.3s ease-out forwards',
        'slide-in-up': 'slide-in-up 0.4s ease-out forwards',
        'scale-in': 'scale-in 0.3s ease-out forwards',
        'badge-pulse': 'badge-pulse 2s ease-in-out infinite',
        'typing': 'typing 1.4s ease-in-out infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'cosmic-drift': {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(10px, -10px) rotate(1deg)' },
          '50%': { transform: 'translate(-5px, 5px) rotate(-0.5deg)' },
          '75%': { transform: 'translate(-10px, -5px) rotate(0.5deg)' },
          '100%': { transform: 'translate(0, 0) rotate(0deg)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-up': {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'badge-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'typing': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
export default config;
