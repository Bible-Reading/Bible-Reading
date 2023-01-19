window.onload = function External_Analysis_Interface() {
    let Html_Head = document.getElementsByTagName("head")[0];

    let Clarity_Dom = document.createElement("script");
    Clarity_Dom.setAttribute("type", "text/javascript");
    Clarity_Dom.innerHTML = '(function (c, l, a, r, i, t, y) {' +
        'c[a] = c[a] || function () {' +
        '(c[a].q = c[a].q || []).push(arguments)' +
        '}; ' +
        't = l.createElement(r);' +
        't.async = 1;' +
        't.src = "https://www.clarity.ms/tag/" + i;' +
        'y = l.getElementsByTagName(r)[0];' +
        'y.parentNode.insertBefore(t, y);' +
        '})(window, document, "clarity", "script", "feaq3yn0zx");';

    let Google_Analytics_Dom_p = document.createElement("script");
    Google_Analytics_Dom_p.setAttribute("async");
    Google_Analytics_Dom_p.setAttribute("type", "text/javascript");
    Google_Analytics_Dom_p.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-5PDW7BXHLV");
    Google_Analytics_Dom_p.innerHTML = '<script async src="https://www.googletagmanager.com/gtag/js?id=G-5PDW7BXHLV"></script>';

    let Google_Analytics_Dom = document.createElement("script");
    Google_Analytics_Dom.setAttribute("type", "text/javascript");
    Google_Analytics_Dom.innerHTML = 'window.dataLayer = window.dataLayer || [];' +
        'function gtag(){dataLayer.push(arguments);}' +
        "gtag('js', new Date());" +
        "gtag('config', 'G-5PDW7BXHLV');";

    let Google_Ad_Dom = document.createElement("script");
    Google_Ad_Dom.setAttribute("async");
    Google_Ad_Dom.setAttribute("type", "text/javascript");
    Google_Ad_Dom.setAttribute("src","https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8498621770647817");
    Google_Ad_Dom.setAttribute("crossorigin","anonymous");


    Html_Head.append(Clarity_Dom);
    Html_Head.append(Google_Analytics_Dom_p);
    Html_Head.append(Google_Analytics_Dom);
    Html_Head.append(Google_Ad_Dom);
}