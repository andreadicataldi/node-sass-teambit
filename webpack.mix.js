// webpack.mix.js

let mix = require("laravel-mix");

mix.js("src/app.js", "src").sass("src/app.scss", "src").setPublicPath("dist");
