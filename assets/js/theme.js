function loadTheme() {
	const themeCSS = document.getElementById("theme-css");
	if(!localStorage.theme || localStorage.theme == "default")
		if(window.location.href.indexOf("http://127.0.0.1") == 0 || window.location.href.indexOf("http://localhost") == 0){
			themeCSS.href = "/assets/css/style.css";
		}else{
			themeCSS.href = "/kernel-themes/assets/css/style.css";
		}
		
	else
		if(window.location.href.indexOf("http://127.0.0.1") == 0 || window.location.href.indexOf("http://localhost") == 0)
			themeCSS.href = "/assets/css/" + localStorage.theme + ".css";
		else
			themeCSS.href = "/kernel-themes/assets/css/" + localStorage.theme + ".css";
		
}

function setTheme(theme) {
	if(theme == "default")
		delete localStorage.theme;
	else
		localStorage.theme = theme;
	loadTheme();
}

loadTheme();

window.onload = function() {
	if(localStorage.theme)
		document.getElementById("themeSelector").value = localStorage.theme;
}
