// const gulp = require('gulp');
import gulp from 'gulp';
import cheerio from 'gulp-cheerio';
// const cheerio = require('gulp-cheerio');

const paths = {
  html: './dist/**/*.html', // Path to built HTML files
};

gulp.task('default', function () {
  return gulp.src(paths.html)
        .pipe(
            cheerio(($) => {
                const noscriptTag = $('#deferred-styles');
                $('link[rel="stylesheet"]').each((_, link) => {
                    const $link = $(link).remove();
                    const preloadLink = $link.clone().attr('rel', 'stylesheet preload').attr('as', 'stylesheetstyle');
                    noscriptTag.append(preloadLink);
                });
                $('script[src]').each((_, script) => {
                    $(script).attr('defer', 'defer');
                });
            })
        )
        .pipe(gulp.dest('./dist')); // Save modified files back to the build folder
});