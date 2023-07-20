import handlebars from 'vite-plugin-handlebars';
import postcss from 'postcss';

export default {
  plugins: [handlebars()],
  css: {
    postcss: {
      plugins: [
        postcss()
      ],
    },
  },
};