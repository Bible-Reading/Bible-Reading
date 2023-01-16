//广告
let Google_AD = '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8498621770647817" crossorigin="anonymous"></script>'+
'<ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-8498621770647817" data-ad-slot="2524739331"></ins>'+
'<script>'+
'(adsbygoogle = window.adsbygoogle || []).push({});'+
'</script>';

//解析json
function analyze_json(book, chapter, verse) {
    let Analyze_json = "";
    if (chapter == undefined || chapter == null || chapter === "") {
        Analyze_json = Bible[book].chapters;
        let Revise = "";
        for (let i = 0; i < Analyze_json.length; i++) {
            Revise += "<br><b style='font-size: xx-large; font-weight: bold;'>" + (i + 1) + "</b>";
            for (let j = 0; j < Analyze_json[i].length; j++) {
                if ((j + 1) != 1) {
                    Revise += "<sup><b>" + (j + 1) + "</b></sup>";
                }
                Revise += Analyze_json[i][j];
                Revise += "<br><br>";
            }
            Revise += Google_AD;
            Revise += "<br>";
        }
        Analyze_json = Revise;
        console.log("Since there are no valid chapters, the entire book will be returned directly.");
    } else if (verse == undefined || verse == null || verse === "") {
        Analyze_json = Bible[book].chapters[chapter];
        let Revise = "";
        for (let i = 0; i < Analyze_json.length; i++) {
            Revise += "<sup><b>" + (i + 1) + "</b></sup>";
            Revise += Analyze_json[i];
            Revise += "<br><br>";
        }
        Analyze_json = Revise;
        console.log("The entire chapter is returned because there is no valid verse.");
    } else {
        Analyze_json += "<div style='margin: auto; font-size: xx-large;'>";
        Analyze_json += Bible[book].chapters[chapter][verse];
        Analyze_json += "</div>";
        console.log("All information will be returned" + "chapter" + chapter + " ," + "verse" + verse + ".");
    }
    console.log("Successfully analyze Json file:");
    return Analyze_json;
}