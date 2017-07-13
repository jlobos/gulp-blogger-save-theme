# gulp-blogger-save-theme

[![Build Status](https://travis-ci.org/jlobos/gulp-blogger-save-theme.svg?branch=master)](https://travis-ci.org/jlobos/gulp-blogger-save-theme)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Save theme of [Google Blogger](https://www.blogger.com) from Node.js

## Install

```bash
npm install --save-dev gulp-blogger-save-theme
```

## Usage

```js
const gulp = require('gulp')
const blogger = require('gulp-blogger-save-theme')

const blogID = '4207593430912310415'
const xGWTPermutation = 'code'
const xsrf = 'code'
const cookie = {
  HSID: 'value from Blogger cookie',
  SID: 'value from Blogger cookie',
  SSID: 'value from Blogger cookie'
}

gulp.task('default', () =>
  gulp
    .src('src/theme.xml')
    .pipe(blogger({ blogID, xGWTPermutation, xsrf, cookie }))
    .pipe(gulp.dest('dist'))

)
```

## API

### blogger([options])

#### options

Type: `Object`

See the blogger [options](https://github.com/jlobos/blogger-save-theme#bloggeroptions).

## License

MIT © [Jesus Lobos](https://jlobos.com/)
