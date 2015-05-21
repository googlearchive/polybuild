/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

//jshint node: true
'use strict';

var crisper = require('gulp-crisper');
var lazypipe = require('lazypipe');
var polyclean = require('polyclean');
var rename = require('gulp-rename');
var vulcanize = require('gulp-vulcanize');

var htmlPipe = lazypipe()
  .pipe(vulcanize, {
    inlineScripts: true,
    inlineCss: true,
    stripComments: true
  })
  .pipe(polyclean.cleanCss)
;

var cleanJsPipe = lazypipe()
  .pipe(polyclean.cleanJsComments)
  .pipe(polyclean.leftAlignJs)
;

var uglifyPipe = polyclean.uglifyJs;

var renamePipe = lazypipe()
  .pipe(rename, function(path){
    path.basename += '.build';
  })
;

module.exports = function(opts) {
  opts = opts || {};
  var crush = opts.maximumCrush;
  return htmlPipe
  .pipe(crush ? uglifyPipe : cleanJsPipe)
  .pipe(renamePipe)
  .pipe(crisper)
();
};
