module.exports = {
  extract: {
    include: [
      'index.html',
      'src/**/*.{vue,html,jsx,tsx}',
      'node_modules/@ywchang2404/ui/src/**/*',
    ],
    exclude: ['.git/**/*'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  attributify: true,
  shortcuts: {
    btn: 'w-full h-12 mt-3 rounded-md',
    'btn-primary': 'text-white bg-green-500 btn',
    'btn-disabled': 'text-white bg-warm-gray-300 btn',
    'btn-border': 'text-green-500 border border-green-500 btn',
    input:
      'w-full h-50px mt-2 border border-1px rounded px-3 py-2 text-2xl outline-none',
  },
}
