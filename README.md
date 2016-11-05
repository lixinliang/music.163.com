# music.163.com
> 🎵网易云音乐 web shortcut

* 因为我懒，懒得安装网易云音乐客户端，我就用web版！🌚
* 因为我懒，懒得安装Chrome-extension。🌚（例如这个，[https://github.com/kikyous/music.163.com](https://github.com/kikyous/music.163.com)）
* 因为我懒，懒得安装CLI。🌚（例如这个，[https://github.com/l04m33/music163](https://github.com/l04m33/music163)）

#### 1. 打开Chrome，`cmd + D`（添加书签），点击修改，名字随意，网址拷贝以下代码（或者`dist.js`的内容）。

```
javascript:!function(){function t(t){if(!t.target.matches("input,textatea,[data-action]")){if(32==t.keyCode)return i.click(),t.preventDefault(),!1;if(37==t.keyCode)return o.click(),!1;if(39==t.keyCode)return c.click(),!1;if(13==t.keyCode)return r.click(),!1}}function e(){[a,d.contentWindow.document].forEach(function(e){void 0===e.body.dataset.keybind&&(e.body.dataset.keybind="",e.addEventListener("keydown",t,!1))})}var a=document,n=document.querySelector.bind(a),d=n("iframe"),i=n('[data-action="play"],[data-action="pause"]'),o=n('[data-action="prev"]'),c=n('[data-action="next"]'),r=n('[data-action="panel"]');e(),d.addEventListener("load",e,!1)}();
```

#### 2. 打开[http://music.163.com](http://music.163.com)，点击你创建的书签（执行代码）。

* 每次打开都要点一次书签。

#### 3. Shortcut

* `Space` => play/pause
* `←` => prev
* `→` => next
* `↵` => display/hide playlist

#### 4. Custom

* 源码在`src.js`，可自行配置。
* 使用`$ npm run build`来构建代码。
