import music1 from './music1.png';
import music2 from './music2.png';
import BubbleHearts from 'bubble-hearts';

const resource = [];
const requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || (( fn ) => setTimeout(fn, 16));

music1.onload = music2.onload = function () {
    resource.push(this);
};

let random = {
    uniform : function ( min, max ) {
        return min + (max - min) * Math.random();
    },
    uniformDiscrete : function ( i, j ) {
        return i + Math.floor((j - i + 1) * random.uniform(0, 1));
    },
};

export default {
    init () {
        this.stage = new BubbleHearts();
        return this.stage.canvas;
    },
    animate () {
        if (resource.length) {
            let image = resource[random.uniformDiscrete(0, resource.length - 1)];
            /**
             * Create mask
             */
            let canvas = document.createElement('canvas');
            let context = canvas.getContext('2d');
            canvas.width = image.width / 2;
            canvas.height = image.height / 2;
            context.drawImage(image, 0, 0, image.width / 2, image.height / 2);
            context.globalCompositeOperation = 'source-in';
            context.fillStyle = `#${ (245).toString(16) }${ (77).toString(16) }${ (77).toString(16) }`;
            context.fillRect(0, 0, canvas.width, canvas.height);
            /**
             * Animate
             */
            this.stage.bubble(canvas);
        }
    },
}
