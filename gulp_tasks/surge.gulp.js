var gulp = require('gulp')
var surge = require('gulp-surge')

gulp.task('deploy', [], function () {
  return surge({
    project: './dist',         // Path to your static build directory
    //domain: 'jayfallon.net'  // Your domain or Surge subdomain
  })
})
