window.onload = window_load();

function window_load() {
    side_bar_click();
    setTimeout(() => {
        try {
            word_part_update("en_bbe", 0);
        } catch (error) {
            console.log("%cPage initialization failed with error:" + error, "font-weight:bold;");
            console.log("%cStart retrying...", "font-weight:bold;");
            setTimeout(() => {
                window_load();
            }, 3000);
        }
    }, 3000);
} 