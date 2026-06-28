# Anime Keyframes Gallery

[![](https://img.shields.io/badge/GitHub%20Pages-121013?style=for-the-badge&logo=github&logoColor=white)](https://scillidan.github.io/anime-keyframes-gallery) [![Vercel](https://img.shields.io/static/v1?style=for-the-badge&message=Vercel&color=000000&logo=Vercel&logoColor=FFFFFF&label=)](https://gm-anime-keyframes-gallery.vercel.app/)

Archive from [猫与牛仔裤的个人作画分享](https://jandan.net/bbs#/topic/520).

PS: Some `.gif` files on the source URL cannot be downloaded. I only have a phone number and can't recover my Weibo account. So, I will update them much later.

![](asset/anime-keyframes-gallery.png)

## Preview on local

```sh
git clone https://github.com/scillidan/anime-keyframes-gallery
cd anime-keyframes-gallery
npm install -g serve
serve -s . -p 4321
```

## How to make

1. Download `.gif`.
2. Convert `.gif` to `.mp4`:
	```sh
	ffmpeg -i $1.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" $1.mp4
	```
3. Extract `_poster.jpg` from `.mp4`:
	```sh
	ffmpeg -i $1.mp4 -vframes 1 $1_poster.jpg
	```
4. Modify `index.html`.

## Attribute

lightGallery's license is [here](https://www.lightgalleryjs.com/license/).  
Video clips in `media/**`, text content in `index.html` belong to 猫与牛仔裤.  
Others is under `MIT`.