const gulp = require("gulp");
const pug = require("gulp-pug");
const less = require("gulp-less");

// compile pug
gulp.task("pug", () => {
  return gulp
    .src("src/pug/views/*.pug")
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(gulp.dest("docs/"));
});

// compile less
gulp.task("less", () => {
  return gulp
  .src("src/less/*.less")
  .pipe(less())
  .pipe(gulp.dest("docs/css"))

})

// execute and watch the task
gulp.task("watch", () => {
  gulp.watch("src/pug/views/*.pug", gulp.series("pug"))
  gulp.watch("src/less/*.less", gulp.series("less"))
});