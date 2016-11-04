'use strict';

import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
    entry : './src.js',
    plugins : [
        babel(),
        uglify(),
        {
            name : 'bookmark',
            transformBundle : function ( code ) {
                code = 'javascript:' + code;
                return {
                    code,
                };
            },
        },
    ],
    dest : 'dist.js',
};
