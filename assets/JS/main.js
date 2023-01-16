window.onload = window_load();

function window_load() {
    setTimeout(() => {
        try {
            word_part_update(Language_check(localStorage.getItem("language")), 0);
        } catch (error) {
            console.log("%cPage initialization failed with error:" + error, "font-weight:bold;");
            console.log("%cStart retrying...", "font-weight:bold;");
            setTimeout(() => {
                window_load();
            }, 3000);
        }
        side_bar_click();
    }, 3000);
}

function Language_check(SLA) {
    let back_tur = "";
    let book_language = localStorage.getItem("book_language");
    if (book_language != null && book_language != "") {
        back_tur = book_language;
    } else {
        if (SLA = "ru") {
            back_tur = "ru_synodal";
            localStorage.setItem("book_language", "ru_synodal");
        } else if (SLA = "ar") {
            back_tur = "ar_svd";
            localStorage.setItem("book_language", "ar_svd");
        } else if (SLA = "de") {
            back_tur = "en_bbe";
            localStorage.setItem("book_language", "en_bbe");
        } else if (SLA = "en") {
            back_tur = "en_bbe";
            localStorage.setItem("book_language", "en_bbe");
        } else if (SLA = "es") {
            back_tur = "es_rvr";
            localStorage.setItem("book_language", "es_rvr");
        } else if (SLA = "fi") {
            back_tur = "fi_finnish";
            localStorage.setItem("book_language", "fi_finnish");
        } else if (SLA = "it") {
            back_tur = "en_bbe";
            localStorage.setItem("book_language", "en_bbe");
        } else if (SLA = "zh") {
            back_tur = "zh_cuv";
            localStorage.setItem("book_language", "zh_cuv");
        } else if (SLA = "kr") {
            back_tur = "ko_ko";
            localStorage.setItem("book_language", "ko_ko");
        }
    }
    return back_tur;
}
