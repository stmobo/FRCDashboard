var browserify = require('browserify');
var envify = require('envify/custom');
var source = require('vinyl-source-stream');
var gulp = require('gulp');
var uglifyjs = require('uglify-es');
var uglify_composer = require('gulp-uglify/composer');
var streamify = require('gulp-streamify');
var gutil = require('gulp-util');
var pump = require('pump');

var uglify = uglify_composer(uglifyjs, console);

function react_browserify(infile, outfile, outdir, debug) {
  outfile = (outfile === undefined) ? infile : outfile;
  outdir = (outdir === undefined) ? 'src/built-js' : outdir;
  debug = (debug === undefined) ? !gutil.env.production : debug;

  var b = browserify('src/'+infile, {debug:debug});
  b.transform('babelify');

  if(!debug) {
      b.transform(envify({ NODE_ENV: 'production' }), { global: true });
      b.transform('uglifyify', { global: true });
  }

  function bundlefn(cb) {
    pump([
        b.bundle(),
        source(outfile),
        debug ? gutil.noop() : streamify(uglify()),
        gulp.dest(outdir)
    ], cb);
  }

  b.on('log', gutil.log);

  return bundlefn;
}

gulp.task('build', react_browserify('main.jsx', 'main.js'));
