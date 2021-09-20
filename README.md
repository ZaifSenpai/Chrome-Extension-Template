## Chrome-Extension-Template
Simple Manifest V3 Boilerplate for Google Chrome Extension development project

[![wakatime](https://wakatime.com/badge/github/ZaifSenpai/Chrome-Extension-Template.svg)](https://wakatime.com/badge/github/ZaifSenpai/Chrome-Extension-Template)

- - -
#### Using batch scripts

* **You don't need to install anything; unless you want to use bat scripts**
<details>
    <summary>Install <code>waifu2x-caffe</code> to use <code>generate_icons.bat</code></summary>
    <p>
        <ul>
            <li>Download from <i>https://github.com/lltcggie/waifu2x-caffe/releases</i></li>
            <li>Edit <code>generate_icons.bat</code> to set the complete path to <code>waifu2x-caffe-cui.exe</code></li>
        </ul>
    </p>
</details>
<details>
    <summary>Install <code>perser</code> to use <code>build.bat</code></summary>
    <p>
        <ul>
            <li>Download and install nodejs from <i>https://nodejs.org/en/download/</i></li>
            <li>Install <code>perser</code> using <code>npm install terser -g</code></li>
        </ul>
    </p>
</details>

- - -
#### About `build.bat`
`build.bat` will make a _build_ directory, copy following files and folders into it and minify all javascript files inside _build\\\<Extension name\>\js_ folder.

Following files and folders will be copied to build folder:
* manifest.json
* background.js
* html/
* css/
* js/
* res/

`build.bat` uses cmd's `tar` command to pack the extension. It will generate a simple and a minified version of extension. Minified version will have all javascript files inside of `js` folder minified by using `parser`
