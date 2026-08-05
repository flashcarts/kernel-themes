1. Download `{{ include.astro_themeFile }}`.

1. Open/Extract the `.7z` archive. You can use [7-Zip](https://7-zip.org/download.html) to do this.

1. Inside the 7z archive, you will find a folder called `{{ include.astro_themeFolder }}`. Copy this folder to `_nds/astronaut/themes` on your DSi's SD card.
    - If the `themes` folder doesn't exist, create one.

1. Place the SD card back into your DSi, then hold both `A` and `B` buttons and turn on the console.

1. Astronaut's main menu should be displayed. Select `Settings`.

1. Under the `Theme:` option, tap the theme path box next to the `reset` button. It will show your current theme's path if one is set, otherwise it will display `<none>`.

1. You will be taken to Astronaut's file picker to select your theme's `theme.ini` file.

1. In the file picker, navigate to `_nds/astronaut/themes/{{ include.astro_themeFolder }}`. Lastly, select the `theme.ini` file to apply the theme.

1. You will be taken back to the settings menu after selecting a `theme.ini` file. Press the `save` button to save changes.

1. Reboot the console by pressing the power button to view your new theme!