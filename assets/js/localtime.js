function display_local_date() {
    const times = document.getElementsByTagName("time");
    for (i = 0; i < times.length; i++) {
        let date = new Date(times[i].innerText);
        times[i].innerText = date.toLocaleString();
    }
}

display_local_date();
