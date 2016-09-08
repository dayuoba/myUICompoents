'use strict'
const gulp = require('gulp')
const postcss = require('gulp-postcss')
const serve = require('gulp-serve')
const pkg = require('./package')

const paths = {
  css: {
    entry: [
      './src/css/app.css'
    ],
    all: './src/css/*.css'
  },
}

gulp.task('serve', serve({
  host: '127.0.0.1',
  port: 4001,
  root: './demo'
}))

gulp.task('css', () => {
  gulp.src(paths.css.entry)
    .pipe(postcss([
      require('postcss-import')(),
      require('postcss-mixins'),
      require('postcss-simple-vars'),
      require('postcss-cssnext')({
        browsers: ['last 2 versions', 'ie > 8']
      }),
      require('cssnano')({
        autoprefixer: false
      })
    ]))
    .pipe(gulp.dest('./dist'))
    .pipe(gulp.dest('./demo/'))
})



gulp.task('watch', () => {
  gulp.watch(paths.css.all, ['css'])
})

gulp.task('build', ['css'])

gulp.task('default', ['build', 'watch', 'serve'])
