window.onload = function() {
    let a = document.querySelector('#a');

    let w = a.getBoundingClientRect().width;
    let h = a.getBoundingClientRect().height;

    a.innerText = w + 'px / ' + h + 'px';

    let b = document.querySelector('#b');
    b.innerHTML = 'User Agent:<br>' + navigator.userAgent;
    if (is_mobile()) {
        b.innerHTML += '<br>You are on mobile.';
    }
}

function is_mobile() {
    const matches = [
        'Android',
        'webOS',
        'iPhone',
        'iPad',
        'iPod',
        'BlackBerry',
        'Windows Phone',
        'Mobile',
    ];

    return matches.some((item) => {
        return navigator.userAgent.indexOf(item) >= 0;
    });
}
