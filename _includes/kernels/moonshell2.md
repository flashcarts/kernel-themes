1. Download `{{ include.moonshell2_themeFile }}`.

1. Open/Extract the `.7z` archive. You can use [7-Zip](https://7-zip.org/download.html) to do this.

1. Create a `Skins` folder in the root of your flashcart's SD card.

1. Inside the 7z archive, you will find a folder called `{{ include.moonshell2_themeName }}`.

1. From this folder, copy `{{ include.moonshell2_themeSkn }}` to the `Skins` folder on your SD.

1. [Optional] Some themes ship with a replacement start-up animation. If present, copy `Splash.ani` to `/moonshl2/internal`, replacing the existing file.

1. [Optional] Some themes also ship with replacement sound effects. If present, copy `sndeff.dat` to `/moonshl2/internal`, replacing the existing file.

1. Place the SD card back into your cart, and launch Moonshell 2.

1. In Moonshell 2, navigate to the `Skins` folder and press `A` on `{{ include.moonshell2_themeSkn }}` to apply the theme.