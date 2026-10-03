// This is intended to be used with the AKMenu theme instructions
// No other platform seems to have this many variations on theme location names
const akmenu_selector = document.getElementById("akmenu-variants");
const theme_path_text = document.getElementById("ui-folder");
const theme_menu_location = document.getElementById("menu-option");
const theme_save_button = document.getElementById("save-button");

akmenu_selector.addEventListener("input", function (e) {
    theme_path_text.innerHTML = akmenu_selector.value;
    if(akmenu_selector.options[akmenu_selector.selectedIndex].innerHTML == "AKMenu-Next") {
        theme_menu_location.innerHTML = "Themes";
        theme_save_button.innerHTML = "X";
    } else {
        theme_menu_location.innerHTML = "Settings";
        theme_save_button.innerHTML = "A";
    }
});
