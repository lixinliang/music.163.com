import {
    doc,
} from './variable.js';
import style from './style.scss';
import headphone from './headphone.png';

let div = doc.createElement('div');
div.innerHTML = `<style>${ style.replace('IMAGE', headphone.src) }</style>`;

export default function () {
    return div.firstElementChild.cloneNode(true);
};
