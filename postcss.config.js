const path = require('path');

module.exports = {
  plugins: {
    tailwindcss: {
      config: path.join(__dirname, 'tailwind.config.js'), // To not collide with vite
    },
    autoprefixer: {},
  },
}
