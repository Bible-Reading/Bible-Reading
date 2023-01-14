//文字区域dom更新
function word_part_update(language, book, chapter, verse) {
    Bible = null;
    let word_part_element = document.getElementById("Words_Part");
    let re_try_times = 15;

    function update_html() {
        try {
            word_part_element.innerHTML = analyze_json(book, chapter, verse);
            loading_box_update("Successfully update the page");
            setTimeout(() => {
                loading_box_remove();
            }, 3000);
        } catch {
            if (re_try_times == 0) {
                loading_box_update("fail to update the page!!!pleas re-try later.");
                alert("fail to update the page!!!pleas re-try later!");
                window.close();
            } else {
                loading_box_update("fail to update the page, re-trying.....");
                loading_box_update("" + re_try_times + " re-try times remaining");
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