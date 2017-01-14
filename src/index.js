import {
    $,
    on,
    doc,
} from './variable.js';
import style from './style.js';
import bubble from './bubble.js';
import volume from './volume.js';

const readyState = doc.readyState;

/**
 * DOMContentLoaded invoke main
 */
if (readyState == 'complete' || readyState == 'interactive') {
    setTimeout(main, 0);
} else {
    doc[on]('DOMContentLoaded', main, false);
}

function main () {

    /**
     * Save elements
     */
    let iframe = $('iframe');
    let prev = $('[data-action="prev"]');
    let next = $('[data-action="next"]');
    let panel = $('[data-action="panel"]');
    let play = $('[data-action="play"],[data-action="pause"]');
    let input = $('input');

    /**
     * Append style
     */
    doc.head.appendChild(style());
    volume.init($('[data-action="volume"]'));

    /**
     * Document and iframe addEventListener
     */
    init();
    iframe[on]('load', init, false);

    function init () {
        [doc, iframe.contentWindow.document].forEach(( doc , index) => {
            let body = doc.body;
            if (body.dataset.shortcut === void 0) {
                body.dataset.shortcut = '';
                if (index) {
                    /**
                     * Iframe append canvas animation
                     */
                    doc.head.appendChild(style());
                    let init = () => {
                        let canvas = bubble.init();
                        canvas.dataset.bubble = '';
                        body.appendChild(canvas);
                        canvas.width = parseInt(getComputedStyle(canvas).width);
                        canvas.height = parseInt(getComputedStyle(canvas).height);
                    };
                    let animate = () => {
                        if (play.dataset.action == 'pause') {
                            setTimeout(animate, (1 - volume.value()) * 1400 + 600);
                            bubble.animate();
                        } else {
                            setTimeout(animate, 100);
                        }
                    };
                    if (bubble.stage) {
                        init();
                    } else {
                        init();
                        animate();
                    }
                }
                doc[on]('keydown', onKeydown, false);
            }
        });
    }

    function onKeydown ( event ) {
        if (event.target.matches('input,textarea')) {
            return
        }
        if (event.keyCode == 32) {
            // space
            play.click();
            event.preventDefault();
            return false;
        }
        if (event.keyCode == 37) {
            // left
            prev.click();
            event.preventDefault();
            return false;
        }
        if (event.keyCode == 39) {
            // right
            next.click();
            event.preventDefault();
            return false;
        }
        if (event.keyCode == 38) {
            // up
            let value = volume.value();
            value += 0.1;
            value = value > 1 ? 1 : value;
            volume.value(value);
            event.preventDefault();
            return false;
        }
        if (event.keyCode == 40) {
            // down
            let value = volume.value();
            value -= 0.1;
            value = value < 0 ? 0 : value;
            volume.value(value);
            event.preventDefault();
            return false;
        }
        if (event.keyCode == 13) {
            // enter
            panel.click();
            event.preventDefault();
            return false;
        }
        if (event.keyCode == 9) {
            // tab
            let search = this.querySelector('input') || input;
            if (search == document.activeElement) {
                search.blur();
            } else {
                search.focus();
            }
            event.preventDefault();
            return false;
        }
    }

}
