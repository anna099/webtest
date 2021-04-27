window.onload = function() {
    let a = document.querySelector('#a');

    let w = a.getBoundingClientRect().width;
    let h = a.getBoundingClientRect().height;

    a.innerText = w + 'px / ' + h + 'px';
}
