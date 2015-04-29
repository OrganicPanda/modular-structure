module.exports = {
  src: 'app',
  dest: 'dist',
  vendor: 'vendor',
  layout: {
    src: 'app/core/layout/layout-tpl.html',
    dest: 'public/index.html'
  },
  sassVars: [
    'app/core/styling/variables.scss',
    'app/core/styling/_vars/*.scss'
  ],
  sassMixins: [
    'app/core/styling/mixins.scss',
    'app/core/styling/_mixins/*.scss'
  ],
  sharedVars: {
    dest: 'app/core/styling/styling.js',
    src: [
      'app/core/styling/_vars/example.scss'
    ]
  }
};
