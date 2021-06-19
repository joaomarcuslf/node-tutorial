const gulp = require("gulp");

const browserSync = require("browser-sync").create();

const jsPath = "files/js/*.js";
const cssPath = "css/**/*.css";
const htmlPath = "./**/*.html";

function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });

  gulp.watch(htmlPath).on("change", browserSync.reload);
  gulp.watch(cssPath).on("change", browserSync.reload);
  gulp.watch(jsPath).on("change", browserSync.reload);
}

exports.default = watch;
