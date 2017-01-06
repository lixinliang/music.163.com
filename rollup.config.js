'use strict';

import sass from 'rollup-plugin-sass';
import babel from 'rollup-plugin-babel';
import image from 'rollup-plugin-image';
import uglify from 'rollup-plugin-uglify';
import bookmark from 'rollup-plugin-bookmark';

export default {
    format : 'iife',
    dest : 'dist.js',
    entry : './src/index.js',
    plugins : [
        sass(),
        babel(),
        image(),
        uglify(),
        bookmark(),
    ],
};
