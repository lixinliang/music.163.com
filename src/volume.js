import {
    $,
    on,
    doc,
} from './variable.js';
import hack from './hack.js';

const delay = 2000;

let sid = 0;
let active = false;

export default {
    init ( volume ) {
        /**
         * Save element
         */
        let mvol = $('.m-vol');
        let vbg = $('.m-vol .vbg');
        let btn = $('.m-vol .btn');
        let curr = $('.m-vol .curr');

        // HACK: setTimeout 0 prevent style jank
        let classList = mvol.classList;
        setTimeout(() => {
            mvol.style['transition'] = 'opacity 200ms linear';
        }, 0);

        volume[on]('click', () => {
            clearTimeout(sid);
            active = !active;
            if (active) {
                classList.add('is-active');
            } else {
                classList.remove('is-active');
            }
        }, false);

        volume[on]('blur', () => {
            clearTimeout(sid);
            active = false;
            classList.remove('is-active');
        }, false);

        // HACK: Audio element is closure, rewrite a function to exposure
        let [ foo, bar ] = hack();
        let anonymous = window[foo][bar];
        let setVolume = () => {};
        window[foo][bar] = function () {
            console.log('HACK succesfully!');
            setVolume = anonymous.bind(this);
            window[foo][bar] = anonymous;
        };

        // HACK: Trigger it
        vbg.dispatchEvent(new Event('mousedown'));
        doc.dispatchEvent(new Event('mouseup'));

        /**
         * Get volume value or set volume value
         */
        this.value = function ( value ) {
            if (arguments.length) {
                console.log(`[Volume]:${ value }`);
                clearTimeout(sid);
                if (!active) {
                    active = true;
                    classList.add('is-active');
                }
                sid = setTimeout(() => {
                    active = false;
                    classList.remove('is-active');
                }, delay);
                setVolume(value);
                // HACK: curr.style['height'] max 93
                // HACK: btn.style['top'] max 81
                curr.style['height'] = `${ value * 93 }px`;
                btn.style['top'] = `${ (1 - value) * 81 }px`;
            } else {
                let current = parseFloat(curr.style['height']);
                let rest = parseFloat(btn.style['top']);
                return parseFloat((current / (current + rest / 81 * 93)).toFixed(2));
            }
        };
    },
};
