// This is intended to be used with the AKMenu theme instructions
// No other platform seems to have this many variations on theme location names
const akmenu_selector = document.getElementById("akmenu-variants");
const theme_path_text = document.getElementById("ui-folder");

akmenu_selector.addEventListener("input", function (e) {
    theme_path_text.innerHTML = akmenu_selector.value;
});
