const colourForm = document.getElementById("colourForm");
const output = document.getElementById("colourInfo");
const colourView = document.getElementById("colourView");

colourForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let formData = new FormData(colourForm);
    let value = formData.get("colourInput").trim();

    // get the numbers with whitespace
    value = value.replaceAll(/(rgb)|(0x)|[^0-9a-fA-F ]/g,"");

    let valid = true;
    let rgb = null;

    let split_value = value.split(" ");
    if(split_value.length == 3){
        rgb = new Array(Math.max(Math.min(parseInt(split_value[0]),255),0),
                        Math.max(Math.min(parseInt(split_value[1]),255),0),
                        Math.max(Math.min(parseInt(split_value[2]),255),0));
    } else {
        value = value.replaceAll(/\s/g,"");  // remove any remaining whitespace
        switch (value.length) {
            case 9:
                rgb = new Array(Math.max(Math.min(parseInt(value.substring(0, 3)), 255), 0),
                                Math.max(Math.min(parseInt(value.substring(3, 6)), 255), 0),
                                Math.max(Math.min(parseInt(value.substring(6, 9)), 255), 0));
                break;
            case 6:
                rgb = new Array(parseInt(value.substring(0, 2), 16),
                                parseInt(value.substring(2, 4), 16),
                                parseInt(value.substring(4, 6), 16));
                break;
            case 4:
                let bgr15 = parseInt(value, 16);
                rgb = new Array(Math.round((bgr15 & 31) * 255 / 31),
                                Math.round(((bgr15 >> 5) & 31) * 255 / 31),
                                Math.round(((bgr15 >> 10) & 31) * 255 / 31));
                break;
            case 3:
                rgb = new Array(parseInt(value[0], 16) * 17,
                                parseInt(value[1], 16) * 17,
                                parseInt(value[2], 16) * 17);
                break;
            default:
                valid = false;
                break;
        };
    }

    if (valid) {
        output.innerHTML = `Hex (HTML): #${(rgb[0] << 16 | rgb[1] << 8 | rgb[2]).toString(16).toUpperCase()}<br>`;
        output.innerHTML += `RGB: ${rgb[0]} ${rgb[1]} ${rgb[2]}<br>`;
        let rgb_css = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
        output.innerHTML += `RGB (CSS): ${rgb_css}<br>`;
        let bgr15 = (Math.round(rgb[0] * 31 / 255) | Math.round(rgb[1] * 31 / 255) << 5 | Math.round(rgb[2] * 31 / 255) << 10);
        output.innerHTML += `BGR15: 0x${bgr15.toString(16).toUpperCase()} / 0x${(bgr15 | 1 << 15).toString(16).toUpperCase()}`;

        colourView.style.backgroundColor = rgb_css;
        colourView.style.height = "200px";
    } else {
        colourView.style.height = "0px";
        output.innerHTML = "Invalid colour!";
    }
});
