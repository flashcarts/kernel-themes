---
title: PICO-8 - AKMenu Edition
creator: Vulpes-Vulpeos & Sanras
description: 
categories:
- os-replica
- black
- dark
downloads:
  PICO-8.7z:
    url: "/assets/downloads/PICO-8.7z"
images:
- url: "/assets/images/akmenu/PICO-8/1.png"
- url: "/assets/images/akmenu/PICO-8/2.png"
- url: "/assets/images/akmenu/PICO-8/3.png"
---

{% include kernels/akmenu.md akmenu_themeFile="PICO-8.7z" akmenu_themeFolder="PICO-8" %}

## Additional Steps

 This theme requires additional steps to install due to using a custom font.

1. After following the instructions above, navigate into the `PICO-8` folder in your `ui` folder on the flashcart's SD.

1. Open the `Theme_Data` folder, and find the `pico-8.pcf` file.

1. Copy `pico-8.pcf` to `/__rpg/fonts` (or `/__aio/fonts` for AKAIO) on your SD.

1. Copy the `PICO-English` folder from `Theme_Data` to `/__rpg/language` (or `/__aio/language` for AKAIO)

1. Boot into the cart and open settings. Set the language to `PICO-English`.