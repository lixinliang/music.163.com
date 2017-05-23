'use strict';

import fs from 'fs';
import path from 'path';
import sass from 'rollup-plugin-sass';
import babel from 'rollup-plugin-babel';
import image from 'rollup-plugin-image';
import uglify from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';
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
        replace({
            delimiters: ['$$', '$$'],
            // 2017-05-11 18:16:15
            // K0x.lc4g
            HACK : 'K0x.lc4g',
            // 2017-05-19 16:50:34
            // K3x.lj7c
            HACK : 'K3x.lj7c',
            // 2017-05-23 10:03:04
            // K6E.lz2x
            HACK : 'K6E.lz2x',
        }),
        bookmark(),
        commonjs({
            sourceMap : false,
        }),
        nodeResolve({
            jsnext : true,
            main : true,
        }),
        {
            onwrite () {
                let md = fs.readFileSync(path.resolve('./src/readme.md'), 'utf8');
                let dist = fs.readFileSync(path.resolve('./dist.js'), 'utf8');
                fs.writeFileSync(path.resolve('./README.md'), md.replace(/\$dist/, dist),'utf8');
            },
        },
    ],
};
