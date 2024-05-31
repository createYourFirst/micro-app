/*!
 * docsify-tabs
 * v1.6.3
 * https://jhildenbiddle.github.io/docsify-tabs/
 * (c) 2018-2024 John Hildenbiddle
 * MIT license
 */
!function(){"use strict";!function(t,a){void 0===a&&(a={});var o=a.insertAt;if(t&&"undefined"!=typeof document){var c=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css","top"===o&&c.firstChild?c.insertBefore(e,c.firstChild):c.appendChild(e),e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}}(':root{--docsifytabs-border-color:#ededed;--docsifytabs-border-px:1px;--docsifytabs-border-radius-px: ;--docsifytabs-margin:1.5em 0;--docsifytabs-tab-background:#f8f8f8;--docsifytabs-tab-background--active:var(--docsifytabs-content-background);--docsifytabs-tab-color:#999;--docsifytabs-tab-color--active:inherit;--docsifytabs-tab-highlight-px:3px;--docsifytabs-tab-highlight-color:var(--theme-color,currentColor);--docsifytabs-tab-padding:0.6em 1em;--docsifytabs-content-background:inherit;--docsifytabs-content-padding:1.5rem}.docsify-tabs:before,.docsify-tabs__tab{z-index:1}.docsify-tabs__tab--active,.docsify-tabs__tab:focus{z-index:2}.docsify-tabs{display:flex;flex-wrap:wrap;position:relative}.docsify-tabs:before{content:"";flex:1 1;order:0}.docsify-tabs__tab{appearance:none;font-size:inherit;margin:0;order:-1;position:relative}.docsify-tabs__content[class]{height:0;overflow:hidden;position:absolute;visibility:hidden;width:100%}.docsify-tabs__content[class]>:first-child{margin-top:0}.docsify-tabs__content[class]>:last-child{margin-bottom:0}.docsify-tabs__tab--active+.docsify-tabs__content[class]{height:auto;overflow:auto;position:relative;visibility:visible}[class*=docsify-tabs--]{margin:1.5em 0;margin:var(--docsifytabs-margin)}[class*=docsify-tabs--]>.docsify-tabs__tab{background:#f8f8f8;background:var(--docsifytabs-tab-background);color:#999;color:var(--docsifytabs-tab-color);padding:.6em 1em;padding:var(--docsifytabs-tab-padding)}[class*=docsify-tabs--]>.docsify-tabs__tab--active{background:inherit;background:var(--docsifytabs-tab-background--active);color:inherit;color:var(--docsifytabs-tab-color--active)}[class*=docsify-tabs--]>.docsify-tabs__content{background:inherit;background:var(--docsifytabs-content-background)}[class*=docsify-tabs--]>.docsify-tabs__tab--active+.docsify-tabs__content{padding:1.5rem;padding:var(--docsifytabs-content-padding)}.docsify-tabs--classic:before,.docsify-tabs--classic>.docsify-tabs__content,.docsify-tabs--classic>.docsify-tabs__tab{border-color:#ededed;border-color:var(--docsifytabs-border-color);border-style:solid;border-width:1px;border-width:var(--docsifytabs-border-px)}.docsify-tabs--classic:before{border-left-width:0;border-right-width:0;border-top-width:0;margin-right:1px;margin-right:var(--docsifytabs-border-px)}.docsify-tabs--classic>.docsify-tabs__tab:first-of-type{border-top-left-radius:var(--docsifytabs-border-radius-px)}.docsify-tabs--classic>.docsify-tabs__tab:last-of-type{border-top-right-radius:var(--docsifytabs-border-radius-px)}.docsify-tabs--classic>.docsify-tabs__tab~.docsify-tabs__tab{margin-left:-1px;margin-left:calc(0px - var(--docsifytabs-border-px))}.docsify-tabs--classic>.docsify-tabs__tab--active{border-bottom-width:0;box-shadow:inset 0 3px 0 0 currentColor;box-shadow:inset 0 var(--docsifytabs-tab-highlight-px) 0 0 var(--docsifytabs-tab-highlight-color)}.docsify-tabs--classic>.docsify-tabs__content{border-radius:0;border-radius:0 var(--docsifytabs-border-radius-px) var(--docsifytabs-border-radius-px) var(--docsifytabs-border-radius-px);border-top:0;margin-top:-1px;margin-top:calc(0px - var(--docsifytabs-border-px))}.docsify-tabs--material>.docsify-tabs__tab{background:transparent;border:0;margin-bottom:2px;margin-bottom:calc(var(--docsifytabs-tab-highlight-px) - var(--docsifytabs-border-px))}.docsify-tabs--material>.docsify-tabs__tab--active{background:transparent;box-shadow:0 3px 0 0 currentColor;box-shadow:0 var(--docsifytabs-tab-highlight-px) 0 0 var(--docsifytabs-tab-highlight-color)}.docsify-tabs--material>.docsify-tabs__content{border-color:#ededed;border-color:var(--docsifytabs-border-color);border-style:solid;border-width:1px 0;border-width:var(--docsifytabs-border-px) 0}',{insertAt:"top"});var t="tabs:replace",a={tabsContainer:"content",tabBlock:"docsify-tabs",tabButton:"docsify-tabs__tab",tabButtonActive:"docsify-tabs__tab--active",tabContent:"docsify-tabs__content"},o={codeMarkup:/(```[\s\S]*?```)/gm,commentReplaceMarkup:new RegExp("\x3c!-- ".concat(t," (.*?) --\x3e")),tabBlockMarkup:/( *)(<!-+\s+tabs:\s*?start\s+-+>)(?:(?!(<!-+\s+tabs:\s*?(?:start|end)\s+-+>))[\s\S])*(<!-+\s+tabs:\s*?end\s+-+>)/,tabCommentMarkup:/[\r\n]*(\s*)<!-+\s+tab:\s*(.*)\s+-+>[\r\n]+([\s\S]*?)[\r\n]*\s*(?=<!-+\s+tabs?:(?!replace))/m,tabHeadingMarkup:/[\r\n]*(\s*)#{1,6}\s*[*_]{2}\s*(.*[^\s])\s*[*_]{2}[\r\n]+([\s\S]*?)(?=#{1,6}\s*[*_]{2}|<!-+\s+tabs:\s*?end\s+-+>)/m},c={persist:!0,sync:!0,theme:"classic",tabComments:!0,tabHeadings:!0},e={get persist(){return"docsify-tabs.persist.".concat(window.location.pathname)},sync:"docsify-tabs.sync"};function s(t,a){return(Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector).call(t,a)}function r(){var t=document.querySelector(".".concat(a.tabsContainer)),o=t?Array.apply(null,t.querySelectorAll(".".concat(a.tabBlock))):[],r=JSON.parse(sessionStorage.getItem(e.persist))||{},i=JSON.parse(sessionStorage.getItem(e.sync))||[];!function(){var t=window.location.hash||window.location.search,o=decodeURIComponent((t.match(/(?:id=)([^&]+)/)||[])[1]),c=o&&".".concat(a.tabBlock," #").concat(o);if(o&&document.querySelector(c)){var e,s=document.querySelector("#".concat(o));if(s.closest)e=s.closest(".".concat(a.tabContent));else for(e=s.parentNode;e!==document.body&&!e.classList.contains("".concat(a.tabContent));)e=e.parentNode;n(e.previousElementSibling)}}(),o.forEach((function(t,o){var e=Array.apply(null,t.children).filter((function(t){return s(t,".".concat(a.tabButtonActive))}))[0];e||(c.sync&&i.length&&(e=i.map((function(o){return Array.apply(null,t.children).filter((function(t){return s(t,".".concat(a.tabButton,'[data-tab="').concat(o,'"]'))}))[0]})).filter((function(t){return t}))[0]),!e&&c.persist&&(e=Array.apply(null,t.children).filter((function(t){return s(t,".".concat(a.tabButton,'[data-tab="').concat(r[o],'"]'))}))[0]),(e=e||t.querySelector(".".concat(a.tabButton)))&&e.classList.add(a.tabButtonActive))}))}function n(t){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=function(t,a){if(Element.prototype.closest)return t.closest(a);for(;t;){if(s(t,a))return t;t=t.parentNode||null}return t}(t,".".concat(a.tabButton));if(r){var i=r.getAttribute("data-tab"),d=document.querySelector(".".concat(a.tabsContainer)),b=r.parentNode,f=Array.apply(null,b.children).filter((function(t){return s(t,"button")})),l=b.offsetTop;if(f.forEach((function(t){return t.classList.remove(a.tabButtonActive)})),r.classList.add(a.tabButtonActive),!o){if(c.persist){var u=(d?Array.apply(null,d.querySelectorAll(".".concat(a.tabBlock))):[]).indexOf(b),y=JSON.parse(sessionStorage.getItem(e.persist))||{};y[u]=i,sessionStorage.setItem(e.persist,JSON.stringify(y))}if(c.sync){var p=d?Array.apply(null,d.querySelectorAll(".".concat(a.tabButton,'[data-tab="').concat(i,'"]'))):[],m=JSON.parse(sessionStorage.getItem(e.sync))||[];p.forEach((function(t){n(t,!0)})),window.scrollBy(0,0-(l-b.offsetTop)),m.indexOf(i)>0&&m.splice(m.indexOf(i),1),0!==m.indexOf(i)&&(m.unshift(i),sessionStorage.setItem(e.sync,JSON.stringify(m)))}}}}window&&(window.$docsify=window.$docsify||{},window.$docsify.tabs=window.$docsify.tabs||{},Object.keys(window.$docsify.tabs).forEach((function(t){Object.prototype.hasOwnProperty.call(c,t)&&(c[t]=window.$docsify.tabs[t])})),window.$docsify.tabs.version="1.6.3",(c.tabComments||c.tabHeadings)&&(window.$docsify.plugins=[].concat(window.$docsify.plugins||[],(function(e,s){var i=!1;e.beforeEach((function(e){return(i=o.tabBlockMarkup.test(e))&&(e=function(e,s){for(var r=e.match(o.codeMarkup)||[],n=r.map((function(a,o){var c="\x3c!-- ".concat(t," CODEBLOCK").concat(o," --\x3e");return e=e.replace(a,(function(){return c})),c})),i=c.theme?"".concat(a.tabBlock,"--").concat(c.theme):"",d=document.createElement("div"),b=e.match(o.tabBlockMarkup),f=1,l=function(){var r,n=b[0],l=b[1],u=b[2],y=b[4],p=c.tabComments&&o.tabCommentMarkup.test(n),m=c.tabHeadings&&o.tabHeadingMarkup.test(n),h="",g="";if(p||m){h="\x3c!-- ".concat(t,' <div class="').concat([a.tabBlock,i].join(" "),'"> --\x3e'),g="\n".concat(l,"\x3c!-- ").concat(t," </div> --\x3e");for(var v=function(){d.innerHTML=r[2].trim()?s.compiler.compile(r[2]).replace(/<\/?p>/g,""):"Tab ".concat(f);var o=d.innerHTML,c=(r[3]||"").trim(),e=(d.textContent||d.firstChild.getAttribute("alt")||d.firstChild.getAttribute("src")).trim().toLowerCase();n=n.replace(r[0],(function(){return["\n".concat(l,"\x3c!-- ").concat(t,' <button class="').concat(a.tabButton,'" data-tab="').concat(e,'">').concat(o,"</button> --\x3e"),"\n".concat(l,"\x3c!-- ").concat(t,' <div class="').concat(a.tabContent,'" data-tab-content="').concat(e,'"> --\x3e'),"\n\n".concat(l).concat(c),"\n\n".concat(l,"\x3c!-- ").concat(t," </div> --\x3e")].join("")})),f++};null!==(r=(c.tabComments?o.tabCommentMarkup.exec(n):null)||(c.tabHeadings?o.tabHeadingMarkup.exec(n):null));)v()}n=(n=n.replace(u,(function(){return h}))).replace(y,(function(){return g})),e=e.replace(b[0],(function(){return n})),b=e.match(o.tabBlockMarkup)};b;)l();return n.forEach((function(t,a){e=e.replace(t,(function(){return r[a]}))})),e}(e,s)),e})),e.afterEach((function(t,a){i&&(t=function(t){for(var a,c=function(){var o=a[0],c=a[1]||"";t=t.replace(o,(function(){return c}))};null!==(a=o.commentReplaceMarkup.exec(t));)c();return t}(t)),a(t)})),e.doneEach((function(){i&&r()})),e.mounted((function(){var t=document.querySelector(".".concat(a.tabsContainer));t&&t.addEventListener("click",(function(t){n(t.target)}))}))}))))}();
//# sourceMappingURL=docsify-tabs.min.js.map
