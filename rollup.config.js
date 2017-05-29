'use strict';

import fs from 'fs';
import path from 'path';
import sass from 'rollup-plugin-sass';
import babel from 'rollup-plugin-babel';
import image from 'rollup-plugin-image';
import uglify from 'rollup-plugin-uglify-es';
import bookmark from 'rollup-plugin-bookmark';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
    format : 'iife',
    dest : 'dist.js',
    entry : './src/index.js',
    plugins : [
        sass(),
        babel({
            exclude : 'src/hack.js',
        }),
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
        {
            onwrite () {
                let md = fs.readFileSync(path.resolve('./src/readme.md'), 'utf8');
                let dist = fs.readFileSync(path.resolve('./dist.js'), 'utf8');
                fs.writeFileSync(path.resolve('./README.md'), md.replace(/\$dist/, dist),'utf8');
            },
        },
    ],
};
