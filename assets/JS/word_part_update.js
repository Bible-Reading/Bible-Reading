//文字区域dom更新
function word_part_update(language, book, chapter, verse) {
    Bible = null;
    let word_part_element = document.getElementById("Words_Part");
    let re_try_times = 15;

    function update_html() {
        try {
            word_part_element.innerHTML = analyze_json(book, chapter, verse);
            setTimeout(() => {
            }, 3000);
        } catch {
            if (re_try_times == 0) {
                alert("fail to update the page!!! pleas re-try later!");
                window.close();
            } else {
                re_try_times--;
                setTimeout(function () {
                    update_html();
                }, 3000);
            }
        }
    }

    get_json(language);
    setTimeout(update_html(), 3000);
}