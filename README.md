<p align="center"><img width="160" src=https://raw.githubusercontent.com/Toxijuice/sd-web-ui-bitchen-theme/main/assets/auto1111icon1024.png></p>
<h1 align="center">Bitchen Stable Diffusion WebUI</h1>

<h2 align="center">
    This is a fork of <b><a href="https://github.com/canisminor1990/sd-web-ui-kitchen-theme">sd-web-ui-kitchen-theme</a></b>.
    <p>I recommend checking it out first. It is likely more up-to-date and better maintained. And has more features.</p>
    <h5><p align="center">But slightly less <i>bitchen</i>.</p></h5>
</h2>


</br>

## Example Customizations
||||
|--|--|--|
|[![screenshot of theme](https://raw.githubusercontent.com/Toxijuice/sd-web-ui-bitchen-theme/main/assets/themescreen_2.png)](https://raw.githubusercontent.com/Toxijuice/sd-web-ui-bitchen-theme/main/assets/themescreen_2.png)|[![screenshot of theme](https://raw.githubusercontent.com/Toxijuice/sd-web-ui-bitchen-theme/main/assets/themescreen_1.png)](https://raw.githubusercontent.com/Toxijuice/sd-web-ui-bitchen-theme/main/assets/themescreen_1.png)|[![screenshot of theme](https://raw.githubusercontent.com/Toxijuice/sd-web-ui-bitchen-theme/main/assets/themescreen_3.png)](https://raw.githubusercontent.com/Toxijuice/sd-web-ui-bitchen-theme/main/assets/themescreen_3.png)|
|[![screenshot of theme](https://raw.githubusercontent.com/Toxijuice/sd-web-ui-bitchen-theme/main/assets/themescreen_4.png)](https://raw.githubusercontent.com/Toxijuice/sd-web-ui-bitchen-theme/main/assets/themescreen_4.png)|[![screenshot of theme](https://raw.githubusercontent.com/Toxijuice/sd-web-ui-bitchen-theme/main/assets/themescreen_5.png)](https://raw.githubusercontent.com/Toxijuice/sd-web-ui-bitchen-theme/main/assets/themescreen_5.png)|[![screenshot of theme](https://raw.githubusercontent.com/Toxijuice/sd-web-ui-bitchen-theme/main/assets/themescreen_6.png)](https://raw.githubusercontent.com/Toxijuice/sd-web-ui-bitchen-theme/main/assets/themescreen_6.png)|
|[![screenshot of theme](https://raw.githubusercontent.com/Toxijuice/sd-web-ui-bitchen-theme/main/assets/themescreen_7.png)](https://raw.githubusercontent.com/Toxijuice/sd-web-ui-bitchen-theme/main/assets/themescreen_7.png)|[![screenshot of theme](https://raw.githubusercontent.com/Toxijuice/sd-web-ui-bitchen-theme/main/assets/themescreen_8.png)](https://raw.githubusercontent.com/Toxijuice/sd-web-ui-bitchen-theme/main/assets/themescreen_8.png)|[![screenshot of theme](https://raw.githubusercontent.com/Toxijuice/sd-web-ui-bitchen-theme/main/assets/themescreen_9.png)](https://raw.githubusercontent.com/Toxijuice/sd-web-ui-bitchen-theme/main/assets/themescreen_9.png)|

## Window Width Changes
||||
|--|--|--|
|[![screenshot of theme](https://raw.githubusercontent.com/Toxijuice/sd-web-ui-bitchen-theme/main/assets/themescreensize_1.png)](https://raw.githubusercontent.com/Toxijuice/sd-web-ui-bitchen-theme/main/assets/themescreensize_1.png)|[![screenshot of theme](https://raw.githubusercontent.com/Toxijuice/sd-web-ui-bitchen-theme/main/assets/themescreensize_2.png)](https://raw.githubusercontent.com/Toxijuice/sd-web-ui-bitchen-theme/main/assets/themescreensize_2.png)|[![screenshot of theme](https://raw.githubusercontent.com/Toxijuice/sd-web-ui-bitchen-theme/main/assets/themescreensize_3.png)](https://raw.githubusercontent.com/Toxijuice/sd-web-ui-bitchen-theme/main/assets/themescreensize_3.png)|

## Installation
1. Go to Automatic1111's **Extensions** tab
2. Click **Install From URL**
3. Paste this repo's URL into the box (https://github.com/Toxijuice/sd-web-ui-bitchen-theme)
4. Click **Install**
5. Restart Automatic1111

## Notes
 - Adding `--theme=dark` to Auto1111's `COMMANDLINE_ARGS` may be required to make the theme work.
 - Alternatively, you can append `?__theme=dark` to the end of the URL used to access the webui. *e.g. `localhost:7860/?__theme=dark`*
 - You can change the colors of the theme in Auto1111's settings menu. There are options to change the main hue, the offset of the secondary hue, as well as an automatic color-cycle option.
 - By default, the layout of the txt2img and img2img tabs are rearranged so the image output is on the left, with the generate button above. There is an option to disable the alternative layout for either of these tabs, but it is currently not recommended,  as I don't yet know of a way to make a 2nd set of css rules for the current layout.
 - A lot of the unique traits of the theme was achieved in what feels to be a very hacky manner. I don't really know the ins and outs of how Auto1111's extensions work yet. So while I haven't had any issues caused by the theme, if something breaks mysteriously in the webui, this is probably a pretty good extension to try disabling first.

## Logo
The logo used in this theme is my personal rendition of the [wonderful design concept by ParityError](https://github.com/AUTOMATIC1111/stable-diffusion-webui/discussions/2901).