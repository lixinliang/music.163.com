import {
    $,
    on,
    doc,
} from './variable.js';
import style from './style.js';
import bubble from './bubble.js';
import volume from './volume.js';

const readyState = doc.readyState;

if (readyState == 'complete' || readyState == 'interactive') {
    setTimeout(main, 0);
} else {
    doc[on]('DOMContentLoaded', main, false);
}

function main () {

    let iframe = $('iframe');
    let prev = $('[data-action="prev"]');
    let next = $('[data-action="next"]');
    let panel = $('[data-action="panel"]');
    let play = $('[data-action="play"],[data-action="pause"]');

    doc.head.appendChild(style());
    volume.init($('[data-action="volume"]'));

    init();
    iframe[on]('load', init, false);

    function init () {
        [doc, iframe.contentWindow.document].forEach(( doc , index) => {
            let body = doc.body;
            if (body.dataset.shortcut === void 0) {
                body.dataset.shortcut = '';
                if (index) {
                    doc.head.appendChild(style());
                    let canvas = doc.createElement('canvas');
                    canvas.dataset.bubble = '';
                    body.appendChild(canvas);
                    canvas.width = canvas.style['width'];
                    canvas.height = canvas.style['height'];
                    bubble(canvas);
                }
                doc[on]('keydown', onKeydown, false);
            }
        });
    }

    function onKeydown ( event ) {
        if (!event.target.matches('input,textarea,[data-action]')) {
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
                return false;
            }
        }
    }

}
