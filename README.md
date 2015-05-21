# Polybuild
> An all-in-one build tool for Polymer apps

Polybuild combines [vulcanize](npmjs.com/package/vulcanize), [crisper](npmjs.com/package/crisper), and [polyclean](npmjs.com/package/polyclean) into one easy to use solution for optimizing Polymer applications for production.

Polybuild exposes a gulp plugin, and a small command line tool to fit your build environment.

Polybuild has no customizations or options. If you have a more advanced use case than is provided, please copy the equivalent portions of the command line or gulp internals as a starting point.


## Command Line Tool

Install:
```
npm install -g polybuild
```

Use:
```
polybuild index.html
```

Output: `index.build.html` and `index.build.js`

The equivalent command line usage is:

```
vulcanize --inline-css --inline-scripts --strip-comments index.html | polyclean | crisper --html index.build.html --js index.build.js
```

## Gulp Plugin

Install:
```
npm install polybuild
```

Use in `gulpfile.js`:
```javascript
var gulp = require('gulp');
var polybuild = require('polybuild');

gulp.task('build', function() {
  return gulp.src('index.html')
  .pipe(polybuild())
  .pipe(gulp.dest('.'))
;
})
```

Output: `index.build.html` and `index.build.js`

The equivalent `gulp` pipeline is found in [index.js](https://github.com/PolymerLabs/polybuild/tree/master/index.js)
