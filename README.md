# lg-gif

[![Vercel](https://img.shields.io/static/v1?style=for-the-badge&message=Vercel&color=000000&logo=Vercel&logoColor=FFFFFF&label=)](https://gm-lg-gif.vercel.app/)

Archive from [猫与牛仔裤的个人作画分享](https://jandan.net/bbs#/topic/520).

## Preview on local

```sh
git clone https://github.com/scillidan/lg-gif
cd lg-gif
npm install -g serve
serve -s . -p 4321
```

## How to make

Download `.gif` into YourFolder, rename them:

```
YourFolder
	├─ 001001.gif 
	├─ 001002.gif
	├─ 001101.jpg
	├─ 002001.gif
	├─ 003001.gif
	├─ 004001.gif
	...
```

Convert `.gif` to `.mp4`:

```sh
ffmpeg -i $1.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" $1.mp4
```

Get `_poster.jpg` from `.mp4`:

```sh
ffmpeg -i $1.mp4 -vframes 1 $1_poster.jpg
```

## How to make in batches

Create `gif2mp4.bat`, write by GPT-3.5🧙:

```bash
@echo off
setlocal enabledelayedexpansion

set "directory=%cd%"

if not exist "%directory%\_out" mkdir "%directory%\_out"

for %%i in ("%directory%\*.gif") do (
    echo Processing: %%i
    ffmpeg -i "%%i" -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" "%directory%\_out\%%~ni.mp4"
)

echo All GIFs converted to MP4 and saved in _out directory.
pause
```

Imitate this `.bat`, Write `mp4-poster.bat`:

```bash
@echo off
setlocal enabledelayedexpansion

set "directory=%cd%"

if not exist "%directory%\_out" mkdir "%directory%\_out"

for %%i in ("%directory%\*.mp4") do (
    echo Processing: %%i
    ffmpeg -i "%%i" -vframes 1 "%directory%\_out\%%~ni_poster.jpg"
)

echo All poster saved in _out directory.
pause
```

Batch processing under folder:

```sh
cd YourFolder
gif2mp4.bat
```

Then:

```sh
mp4-poster.bat
```

## How to write in `.html`

[Sublime Text](https://www.sublimetext.com/) → Tools → Developer → New Snippet:

Create `gifa.sublime-snippet` to write `<a>` tag include the first `.mp4` and all text data:

```
<snippet>
  <content><![CDATA[
      <a class="gallery-item" 
        data-html="#$1" 
        data-slide-name="$2$5" 
        data-video='{ "source": [ {"src": "media/$1.mp4", "type": "video/mp4"} ], "attributes": { "preload": false, "controls": false, "playsinline": true, "loop": true } }' 
        data-sub-html="<h4>$2$4</h4>
        <p>$6</p>"
        data-poster="media/$1_poster.jpg">
        <img class="img-responsive" src="media/$1_poster.jpg" 
          alt="&lt;p&gt;$2$3&lt;/p&gt;" />
      </a>
$7
]]></content>
  <tabTrigger>gifa</tabTrigger>
  <description></description>
</snippet>
```

Create `gifa2.sublime-snippet` to write `<a>` tag include the other `.mp4`:

```
<snippet>
  <content><![CDATA[
      <a class="gallery-item" 
        data-html="#$1" 
        data-slide-name="" 
        data-video='{ "source": [ {"src": "media/$1.mp4", "type": "video/mp4"} ], "attributes": { "preload": false, "controls": false, "playsinline": true, "loop": true } }' 
        data-sub-html=""
        data-poster="media/$1_poster.jpg">
        <img class="img-responsive" src="media/$1_poster.jpg" 
          alt="&lt;p&gt;&lt;/p&gt;" />
      </a>
$2
]]></content>
  <tabTrigger>gifa2</tabTrigger>
  <description>no data-sub-html</description>
</snippet>
```

Create `gifa3.sublime-snippet` to write `<a>` tag include pictures:

```
<snippet>
  <content><![CDATA[
      <a href="media/$1.jpg" 
        data-slide-name="" 
        data-sub-html="">
          <img src="media/$1.jpg" />
      </a>
]]></content>
  <tabTrigger>gifa3</tabTrigger>
  <description>for image</description>
</snippet>
```

## How to ...

See desktop recording for more.  
On Youtube: [01](https://youtu.be/uVJlbPNOkQU), [02](https://youtu.be/f_RYFDWhpIE).  
On bilibili: [01](https://www.bilibili.com/video/BV1Mi421k7Bp/), [02](https://www.bilibili.com/video/BV1xM4m1C7wo).

## Attribute

Video clips in `media/**`, text data in `index.html` belong to 猫与牛仔裤。  
lightGallery's license is [here](https://www.lightgalleryjs.com/license/).  
Content of `README.md` licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.en).
