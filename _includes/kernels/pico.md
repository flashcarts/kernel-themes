1. Download `{{ include.pico_themeFile }}`.

1. Open/Extract the `.7z` archive. You can use [7-Zip](https://7-zip.org/download.html) to do this.

1. Inside the `.7z` archive, you will find a folder called `{{ include.pico_themeFolder }}`. Copy this folder to `/_pico/themes` on your flashcart's SD card.

1. Navigate to the `_pico` folder, and find the `settings.json` file. Open it with Notepad.

1. Edit the `"theme":` line, changing the theme name to `{{ include.pico_themeFolder }}`.

1. The final edited line in `settings.json` should look like this: `"theme": "{{ include.pico_themeFolder }}",`

1. Place the SD card back into your cart, and boot into Pico-Launcher.

1. The icon/coverflow layout mode is changeable in the Pico-Launcher settings menu. Change it if the theme requires a specific layout.