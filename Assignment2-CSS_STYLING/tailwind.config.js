module.exports = {
    theme: {
      extend: {
        boxShadow: {
          'light-sm': '0 2px 2px rgba(0, 0, 0, 0.05)',
          'light-md': '0 4px 6px rgba(0, 0, 0, 0.05)',
          'light-lg': '0 10px 15px rgba(0, 0, 0, 0.05)',
          'light-xl': '0 20px 25px rgba(0, 0, 0, 0.05)',
          'light-2xl': '0 25px 50px rgba(0, 0, 0, 0.05)',
          'light-ombre-gradient': '0 10px 20px rgba(59, 130, 246, 0.1), 0 6px 6px rgba(79, 70, 229, 0.1)',
          'pink-hover': '0 4px 6px rgba(251, 207, 232, 0.5)' // Pink 200 shadow
           // Light blue to purple gradient
        },
      },
    },
    variants: {
        extend: {
            boxShadow: ['hover', 'active'],
          },
    },
    plugins: [],
  };
  