[![MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/lixinliang/music.163.com/blob/master/LICENSE)
[![GitHub](https://img.shields.io/github/release/lixinliang/music.163.com.svg)](https://github.com/lixinliang/music.163.com/releases)
[![Twitter](https://img.shields.io/badge/twitter-@qq393464140-blue.svg)](http://twitter.com/qq393464140)

# music.163.com
> 🎵网易云音乐 web shortcut

* 因为我懒，懒得安装网易云音乐客户端，我就用web版！🌚
* 因为我懒，懒得安装Chrome-extension。🌚（例如这个，[https://github.com/kikyous/music.163.com](https://github.com/kikyous/music.163.com)）
* 因为我懒，懒得安装CLI。🌚（例如这个，[https://github.com/l04m33/music163](https://github.com/l04m33/music163)）

## Shortcut

| Key | Description |
|---|---|
| `Space` | play/pause |
| `←` | prev |
| `→` | next |
| `↑` | increase volume |
| `↓` | decrease volume |
| `↵` | display/hide playlist |
| `Tab` | focus/blur search input |

## Preview

![preview](./src/music.gif)

## Usage

###### 1. 打开Chrome，`cmd + D`（添加书签），点击修改，名字随意，网址拷贝以下代码（或者[`dist.js`](https://raw.githubusercontent.com/lixinliang/music.163.com/master/dist.js)的内容）。

```js
$dist```

或者

```js
javascript:!function(){var t=document.createElement("script");t.charset="utf-8",t.src="https://raw.githubusercontent.com/lixinliang/music.163.com/master/dist.js",document.head.appendChild(t)}();
```

###### 2. 打开 http://music.163.com ，点击你创建的书签（执行代码）。

* 每次打开都要点一次书签。

## Custom

* 源码在`src.js`，可自行订制。
* 使用`$ npm run build`来构建代码。
