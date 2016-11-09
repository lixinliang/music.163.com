(() => {
    const doc = document;
    const $ = document.querySelector.bind(doc);

    let iframe = $('iframe');
    let play = $('[data-action="play"],[data-action="pause"]');
    let prev = $('[data-action="prev"]');
    let next = $('[data-action="next"]');
    let panel = $('[data-action="panel"]');

    function onKeydown ( event ) {
        if (!event.target.matches('input,textarea,[data-action]')) {
            if (event.keyCode == 32) {
                play.click();
                event.preventDefault();
                return false;
            }
            if (event.keyCode == 37) {
                prev.click();
                return false;
            }
            if (event.keyCode == 39) {
                next.click();
                return false;
            }
            if (event.keyCode == 13) {
                panel.click();
                return false;
            }
        }
    }

    function init () {
        [doc, iframe.contentWindow.document].forEach(( doc ) => {
            if (doc.body.dataset.keybind === void 0) {
                doc.body.dataset.keybind = '';
                doc.addEventListener('keydown', onKeydown, false);
            }
        });
    }

    init();
    iframe.addEventListener('load', init, false);
})();
