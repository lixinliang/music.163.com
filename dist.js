javascript:!function(){function t(t){if(!t.target.matches("input,textatea,[data-action]")){if(32==t.keyCode)return i.click(),t.preventDefault(),!1;if(37==t.keyCode)return o.click(),!1;if(39==t.keyCode)return c.click(),!1;if(13==t.keyCode)return r.click(),!1}}function e(){[a,d.contentWindow.document].forEach(function(e){void 0===e.body.dataset.keybind&&(e.body.dataset.keybind="",e.addEventListener("keydown",t,!1))})}var a=document,n=document.querySelector.bind(a),d=n("iframe"),i=n('[data-action="play"],[data-action="pause"]'),o=n('[data-action="prev"]'),c=n('[data-action="next"]'),r=n('[data-action="panel"]');e(),d.addEventListener("load",e,!1)}();
