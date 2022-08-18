/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'k-primary': '#ff8f88',
        'k-dark': '#121212',
      },
      typography: ({ theme }) => ({
        custom: {
          css: {
            '--tw-prose-body': theme('colors.black'),
            '--tw-prose-headings': theme('colors.k-dark'),
            '--tw-prose-lead': theme('colors.k-dark'),
            '--tw-prose-links': theme('colors.black'),
            '--tw-prose-bold': theme('colors.black'),
            '--tw-prose-counters': theme('colors.k-dark'),
            '--tw-prose-bullets': theme('colors.k-dark'),
            '--tw-prose-hr': theme('colors.k-dark'),
            '--tw-prose-quotes': theme('colors.k-dark'),
            '--tw-prose-quote-borders': theme('colors.k-dark'),
            '--tw-prose-captions': theme('colors.k-dark'),
            '--tw-prose-code': theme('colors.black'),
            '--tw-prose-pre-code': theme('colors.k-primary'),
            '--tw-prose-pre-bg': theme('colors.k-dark'),
            '--tw-prose-th-borders': theme('colors.k-dark'),
            '--tw-prose-td-borders': theme('colors.k-dark'),
            // TODO: Set this up when I add dark mode
            // '--tw-prose-invert-body': theme('colors.pink[200]'),
            // '--tw-prose-invert-headings': theme('colors.white'),
            // '--tw-prose-invert-lead': theme('colors.pink[300]'),
            // '--tw-prose-invert-links': theme('colors.white'),
            // '--tw-prose-invert-bold': theme('colors.white'),
            // '--tw-prose-invert-counters': theme('colors.pink[400]'),
            // '--tw-prose-invert-bullets': theme('colors.pink[600]'),
            // '--tw-prose-invert-hr': theme('colors.pink[700]'),
            // '--tw-prose-invert-quotes': theme('colors.pink[100]'),
            // '--tw-prose-invert-quote-borders': theme('colors.pink[700]'),
            // '--tw-prose-invert-captions': theme('colors.pink[400]'),
            // '--tw-prose-invert-code': theme('colors.white'),
            // '--tw-prose-invert-pre-code': theme('colors.pink[300]'),
            // '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            // '--tw-prose-invert-th-borders': theme('colors.pink[600]'),
            // '--tw-prose-invert-td-borders': theme('colors.pink[700]'),
          },
        },
      }),
    },
    plugins: [],
  },
  plugins: [require('@tailwindcss/typography')],
}
