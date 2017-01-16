'use strict';

import sass from 'rollup-plugin-sass';
import babel from 'rollup-plugin-babel';
import image from 'rollup-plugin-image';
import uglify from 'rollup-plugin-uglify';
import bookmark from 'rollup-plugin-bookmark';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

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
        commonjs({
            sourceMap : false,
        }),
        nodeResolve({
            jsnext : true,
            main : true,
        }),
    ],
};
