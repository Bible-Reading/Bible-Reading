function External_Analysis_Interface() {
    let Html_Head = document.getElementsByTagName("head")[0];

    let Clarity_Dom = '<script type="text/javascript">' +
        '(function (c, l, a, r, i, t, y) {' +
        'c[a] = c[a] || function () {' +
        '(c[a].q = c[a].q || []).push(arguments)' +
        '}; ' +
        't = l.createElement(r);' +
        't.async = 1;' +
        't.src = "https://www.clarity.ms/tag/" + i;' +
        'y = l.getElementsByTagName(r)[0];' +
        'y.parentNode.insertBefore(t, y);' +
        '})(window, document, "clarity", "script", "feaq3yn0zx");' +
        '</script >';

    let Google_Analytics_Dom = '<script async src="https://www.googletagmanager.com/gtag/js?id=G-5PDW7BXHLV"></script>' +
        '<script>' +
        'window.dataLayer = window.dataLayer || [];' +
        'function gtag(){dataLayer.push(arguments);}' +
        "gtag('js', new Date());" +
        "gtag('config', 'G-5PDW7BXHLV');";
    '</script>';

    let Google_Ad = '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8498621770647817" crossorigin="anonymous"></script>';

    Html_Head.append(Clarity_Dom);
    Html_Head.append(Google_Analytics_Dom);
    Html_Head.append(Google_Ad);
}