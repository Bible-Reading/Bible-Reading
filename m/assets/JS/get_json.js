//Json
let Bible;
let Language = "en_bbe";

//从服务器获取Json文件
function get_json(language) {
    Language = language;
    let parsed_json;

    console.log("Start requesting from the server json file");
    fetch('https://bible-reading.github.io/json/' + language + '.json')
        .then(
            function (response) {
                console.log("Start parsing the returned Json file");
                return response.json();
            })
        .then(function (json) {
            console.log(json);
            console.log("The Json file is parsed successfully");
            Bible = json;
        })
        .catch((error) => {
            console.log("The Json file is parsed DFEATED");
            console.log('%c' + error, "font-weight:bold;");
        });
        console.log("variable: 'Bible' are The json");
}
