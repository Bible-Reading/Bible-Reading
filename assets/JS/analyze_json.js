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
        }
        Analyze_json = Revise;
        loading_box_update("Since there are no valid chapters, the entire book will be returned directly.");
    } else if (verse == undefined || verse == null || verse === "") {
        Analyze_json = Bible[book].chapters[chapter];
        let Revise = "";
        for (let i = 0; i < Analyze_json.length; i++) {
            Revise += "<sup><b>" + (i + 1) + "</b></sup>";
            Revise += Analyze_json[i];
            Revise += "<br><br>";
        }
        Analyze_json = Revise;
        loading_box_update("The entire chapter is returned because there is no valid verse.");
    } else {
        Analyze_json += "<div style='margin: auto; font-size: xx-large;'>";
        Analyze_json += Bible[book].chapters[chapter][verse];
        Analyze_json += "</div>";
        loading_box_update("All information will be returned" + "chapter" + chapter + " ," + "verse" + verse + ".");
    }
    loading_box_update("Successfully analyze Json file:");
    return Analyze_json;
}