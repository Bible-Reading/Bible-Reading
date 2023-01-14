//加载框
function loading_box_onload() {
    let loading_box_HTML = document.getElementById("Words_Part_Main");

    let loading_box_Main = document.createElement("div");
    loading_box_Main.id = "Loading_box";
    loading_box_Main.className = "Loading_box";

    let loading_box_Img = document.createElement("div");
    loading_box_Img.id = "Loading_box_img";
    loading_box_Img.innerHTML = "<img src='./assets/IMG/Bible Reading-logos.jpeg'>";

    let loading_box_Word = document.createElement("div");
    loading_box_Word.id = "Loading_box_word";

    let Br = document.createElement("br");

    loading_box_Main.append(loading_box_Img);
    loading_box_Main.append(Br);
    loading_box_Main.append(loading_box_Word);

    loading_box_HTML.append(loading_box_Main);
}

//加载框更新
let loading_box_update_Time_out = 300;
let Loading_finish = false;
function loading_box_update(words) {
    loading_box_update_Time_out = loading_box_update_Time_out + 300;
    setTimeout(() => {
        document.getElementById("Loading_box").style.display = "inline";
        let Loading_box_word = document.getElementById("Loading_box_word");
        Loading_box_word.innerHTML = words;
        console.log("%c" + words, "font-weight:bold;");
    }, loading_box_update_Time_out);
}

//加载框删除
let Loading_Box_Remove_Score = 0;
let Loading_Box_Remove_Dom;
function loading_box_remove() {
    setInterval(() => {
        if (Loading_Box_Remove_Score > 5) {
            document.getElementById("Loading_box").style.display = "none";
            setTimeout(() => {
                //重新设定（备用）
                document.getElementById("Loading_box").style.display = "none";
            }, 5000);
        } else {
            Loading_Box_Remove_Dom_New = document.getElementById("Loading_box_word").innerHTML;
            Loading_Box_Remove_Dom = Loading_Box_Remove_Dom_New;
            if (Loading_Box_Remove_Dom_New == Loading_Box_Remove_Dom) {
                Loading_Box_Remove_Score++;
            }
        }
    }, 1000);
}