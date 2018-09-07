const express = require('express');
const logger = require('morgan');
const path = require('path');
const app = express();
const fs = require('fs');
const sass = require('node-sass');

const public = path.join(__dirname, 'public');
const css_file = path.join(public, 'css', 'main.css');
const result = sass.renderSync({
    file: path.join(public, 'styles', 'main.scss'),
    outputStyle: 'compact'
});
console.log("Parsing styles with Sass to .css file...");
fs.writeFileSync(css_file, result.css.toString());
console.log("CSS in " + css_file);

app.use(logger('dev'));
app.use(express.static(public));

module.exports = app;
