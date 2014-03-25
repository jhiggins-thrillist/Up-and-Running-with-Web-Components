// <section data-markdown="slides/00.md" data-state="checkSupport"></section>
// <section data-markdown="slides/03_03.md" data-state="example01"></section>
// <section data-markdown="slides/05_01.md" data-state="example02"></section>

(function () {
    /*jslint loopfunc: true, browser: true*/
    /*globals Reveal*/
    'use strict';

    Reveal.addEventListener('checkSupport', function () {

        document.querySelector('#checkSupport').addEventListener('click', function () {
            var support = document.querySelector('#supported');

            if ('createShadowRoot' in document.createElement('div')) {
                support.querySelector('.shadow-dom').classList.add('supported');
            } else {
                support.querySelector('.shadow-dom').classList.add('unsupported');
            }

            if ('import' in document.createElement('link')) {
                support.querySelector('.html-imports').classList.add('supported');
            } else {
                support.querySelector('.html-imports').classList.add('unsupported');
            }

            if ('content' in document.createElement('template')) {
                support.querySelector('.template-tag').classList.add('supported');
            } else {
                support.querySelector('.template-tag').classList.add('unsupported');
            }

            if ('registerElement' in document) {
                support.querySelector('.custom-elements').classList.add('supported');
            } else {
                support.querySelector('.custom-elements').classList.add('unsupported');
            }

        });

    }, false);

    Reveal.addEventListener('example01', function () {
        var host = document.querySelector('#buttonTemplate');
        var root = host.createShadowRoot();
        root.innerHTML = '<strong>Inspect me!</strong>';
        root.firstChild.style.color = 'red';
    }, false);

    Reveal.addEventListener('example02', function () {

        document.querySelector('#runExample02').addEventListener('click', function () {
            var container = document.querySelector('#example02');
            container.innerHTML = '';
            var template = document.querySelector('#my-template');
            var content = document.importNode(template.content, true); // second argument is 'deep'
            container.appendChild(content);
        });

        document.querySelector('#runExample03').addEventListener('click', function () {
            var shadow = document.querySelector('#example03').createShadowRoot();
            shadow.appendChild(document.querySelector('#template03').content);
        });

    }, false);

})();
