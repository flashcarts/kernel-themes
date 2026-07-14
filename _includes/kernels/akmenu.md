Select the flashcart kernel you are using from this list:
<select name="akmenu" id="akmenu-variants">
    <option value="/__rpg/ui" selected>Wood R4</option>
    <option value="/__aio/ui">AKAIO</option>
    <option value="/_nds/akmenunext/ui">AKMenu-Next</option>
    <option value="/_nds/TWiLightMenu/akmenu/themes">TWiLight Menu++</option>
</select>

1. Download `{{ include.akmenu_themeFile }}`.

1. Open/Extract the `.7z` archive. You can use [7-Zip](https://7-zip.org/download.html) to do this.

1. Inside the 7z archive, you will find a folder called `{{ include.akmenu_themeFolder }}`. Copy this folder to <code id="ui-folder">/__rpg/ui</code> on your flashcart's SD card.

1. Place the SD card back into your cart, and boot into the cart.

1. Press the `START` key to open the AKMenu/WoodR4 start menu popup, then select `Settings`.

1. Set the theme to `{{ include.akmenu_themeFolder }}`, then press `A` to save, and `A` again to restart.

<script src="/assets/js/akmenu-instructions.js"></script>
