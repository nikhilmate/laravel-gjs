const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/assets/js')
    .sass('resources/assets/sass/app.scss', 'public/assets/css');


mix.combine(['resources/assets/grapesjs/js/grapes.min.js',   'resources/assets/grapesjs/js/grapesjs-preset-webpage.min.js'],   'public/assets/grapesjs/js/grapes.js')
mix.combine(['resources/assets/grapesjs/css/grapes.min.css', 'resources/assets/grapesjs/css/grapesjs-preset-webpage.min.css'], 'public/assets/grapesjs/css/grapes.css');

mix.combine(['resources/assets/editor/js/index.js'],   'public/assets/editor/js/index.js')
mix.combine(['resources/assets/editor/css/index.css'], 'public/assets/editor/css/index.css');
