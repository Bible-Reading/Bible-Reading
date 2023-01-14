//顶部搜索栏
function search_bar() {
    let Search_Bar = new Object();
    Search_Bar.Book = Number(document.getElementById("Search_Bar_Box_B").selectedIndex);
    Search_Bar.Chapter = Number(document.getElementById("Search_Bar_Box_C").value);
    Search_Bar.Chapter--;
    Search_Bar.Verse = Number(document.getElementById("Search_Bar_Box_V").value);
    Search_Bar.Verse--;
    Search_Bar.Language = Number(document.getElementById("Search_Bar_Box_L").selectedIndex);

    let Language_JsonFileName = ['ar_svd', 'zh_cuv', 'zh_ncv', 'de_schlachter', 'el_greek', 'en_bbe', 'en_kjv', 'eo_esperanto', 'es_rvr', 'fi_finnish', 'fi_pr', 'fr_apee', 'ko_ko', 'pt_aa', 'pt_acf', 'pt_nvi', 'ro_cornilescu', 'ru_synodal', 'vi_vietnamese'];

    word_part_update(Language_JsonFileName[Search_Bar.Language],Search_Bar.Book, Search_Bar.Chapter, Search_Bar.Verse);
}