(()=>{"use strict";var e={725:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),c=n.n(r),o=n(645),i=n.n(o)()(c());i.push([e.id,"/* Style the caret/arrow */\n.UNwkxeu8JaLUR7zsLOLc {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; /* Prevent text selection */\n  display: inline-block;\n  margin-right: 6px;\n}\n\n.dpG9VJCbE1T3hvNqWAXQ {\n  list-style: none;\n}\n\n.fRDpmJJ9MRXanERdlguP {\n  background-color: white;\n  border-radius: 8px;\n  border: 1px solid #cccccc;\n  max-height: 25vh;\n}",""]),i.locals={groupedCheckboxCaret:"UNwkxeu8JaLUR7zsLOLc",groupedCheckboxList:"dpG9VJCbE1T3hvNqWAXQ",groupedCheckboxNodeHolder:"fRDpmJJ9MRXanERdlguP"};const l=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,c,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var a=0;a<e.length;a++){var d=[].concat(e[a]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),c&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=c):d[4]="".concat(c)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],l=0;l<e.length;l++){var s=e[l],a=r.base?s[0]+r.base:s[0],d=o[a]||0,u="".concat(a," ").concat(d);o[a]=d+1;var h=n(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var f=c(p,r);r.byIndex=l,t.splice(l,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function c(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,c){var o=r(e=e||[],c=c||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var l=n(o[i]);t[l].references--}for(var s=r(e,c),a=0;a<o.length;a++){var d=n(o[a]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var c=void 0!==n.layer;c&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,c&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var c=t[r];if(void 0!==c)return c.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{HTMLWidgets,Shiny;class e{root;constructor(e,t){this.buildTree(e,t)}buildTree(e,n){let r,c=new t("root");e.forEach((e=>{r=[],n.forEach((t=>{r.push(e[t])})),this.#e(c,r)})),this.root=c}findMaxDepth(){let e=[],t=0;for(e.push(this.root);e.length>0;){let n,r=e.length;for(let t=0;t<r;t++){n=e.shift();for(let t of n.children)e.push(t)}t++}return t-1}#e(e,n){for(let r=0;r<n.length;r++){let c=n.slice(0,r+1),o=n[r],[i,l]=this.#t(e,c);if(i.value!==o){let e=new t(o);i.add_child(e)}}return e}#t(e,t){let n=e.children;for(const e of n)if(t[0]===e.value)return t.shift(),t.length>0?this.#t(e,t):[e,t];return[e,t]}}class t{constructor(e,t,n){t||(t=[]),this.value=e,this.children=t,this.parent=n,this.depth=0}add_child(e){this.children.push(e),this.children.forEach((e=>{e.addParent(this)}))}addParent(e){this.parent=e,this.depth=e.depth+1}get has_children(){return this.children.length>0}get siblings(){return this.parent.children}findObjectByName(e){if(this.value===e)return this;for(const t of this.children){let n=t.findObjectByName(e);if(n)return n}}}var r=n(379),c=n.n(r),o=n(795),i=n.n(o),l=n(569),s=n.n(l),a=n(565),d=n.n(a),u=n(216),h=n.n(u),p=n(589),f=n.n(p),g=n(725),b={};b.styleTagTransform=f(),b.setAttributes=d(),b.insert=s().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=h(),c()(g.Z,b);const m=g.Z&&g.Z.locals?g.Z.locals:void 0;let v=(x=-1,function(){return x+=1});var x;function k(){let e=$("<div>",{class:"flex-parent"});return e.append($("<button>",{class:"flex-child grouped-checkbox-select-all btn btn-outline-fg",id:"grouped-checkbox-select-all-"+v()}).text("Select All")),e.append($("<button>",{class:"flex-child grouped-checkbox-deselect-all btn btn-outline-fg",id:"grouped-checkbox-deselect-all-"+v()}).text("Deselect All")),e}function y(e,t){let n;switch(t||(t="toggle"),t){case"slide":n=$(e),"▼"===n.text()?(n.text("▶"),n.siblings("."+m.groupedCheckboxList).slideUp()):(n.text("▼"),n.siblings("."+m.groupedCheckboxList).slideDown());break;case"toggle":n=$(e),"▼"===n.text()?(n.text("▶"),n.siblings("."+m.groupedCheckboxList).hide()):(n.text("▼"),n.siblings("."+m.groupedCheckboxList).show());break;default:throw"Hide animations only accepts 'toggle' and 'slide'"}}function C(e,t,n){let r;r=t?document.getElementById("checkbox-list-"+t.htmlID):document.getElementById("grouped-checkbox-list-base");let c=v(),o="node-"+c,i=document.createElement("li"),l=document.createElement("span");if(l.classList.add("GroupedCheckBox-node","text-fg"),l.id=o,n&&l.appendChild(function(){let e=document.createElement("span");return e.classList.add(m.groupedCheckboxCaret),e.innerText="▼",e}()),l.appendChild(function(e,t){let n=document.createElement("input");return n.classList.add("grouped-checkbox-input","form-check-input"),n.type="checkbox",n.value=e,n.id="node-input-check"+t,n}(e,c)),l.appendChild(function(e,t){let n=document.createElement("label");return n.classList.add("form-check-label"),n.for="node-input-check"+t,n.innerHTML=e,n}(e,c)),n){let e=document.createElement("ul");e.classList.add(m.groupedCheckboxList),e.id="checkbox-list-"+o,l.appendChild(e)}return i.appendChild(l),r.appendChild(i),o}function L(t,n,r,c,o,i){let l=document.getElementById(t);if(n){let e=document.createElement("h4");e.innerText=n,l.appendChild(e)}$("#"+t).append(k);let s=function(t,n){return new e(t,n)}(r,c),a=document.createElement("div");if(a.classList.add(m.groupedCheckboxNodeHolder),a.classList.add("overflow-auto"),l.appendChild(a),function(e,t){$(e).append($("<ul>",{class:m.groupedCheckboxList,id:"grouped-checkbox-list-base"}));let n=[];for(n.push(t.root);n.length>0;){let e,t=n.length;for(let r=0;r<t;r++){e=n.shift();for(let t of e.children)n.push(t),"root"===t.parent.value?t.htmlID=C(t.value,null,t.has_children):t.htmlID=C(t.value,t.parent,t.has_children)}}}(a,s),o&&$("#"+t).find("."+m.groupedCheckboxCaret).each((function(){y(this,"toggle")})),i.length>0)for(const e of i){let n=$("#"+t).find(`input[type=checkbox][value=${e}]`);n.attr("checked","true"),n.siblings("ul").find(".grouped-checkbox-input").attr("checked","true")}$(document).on("shiny:connected",(function(){!function(e){let t=$("#"+e);t.find("."+m.groupedCheckboxCaret).on("click",(function(){y(this,"toggle")})),t.find(".grouped-checkbox-input").on("click",(function(){let t=$(this);t.siblings("ul").children().find(".grouped-checkbox-input").prop("checked",t.is(":checked"));let n=[t.is(":checked")];t.parent().parent().siblings().children().children("input[type='checkbox']").each((function(){n.push($(this).is(":checked"))}));let r=[...new Set(n)],c=t.parent().parent().parent().siblings(".grouped-checkbox-input");r.length>1?c.prop({indeterminate:!0,checked:!1}):c.prop({indeterminate:!1,checked:t.is(":checked")}),function(e){let t=[];$("#"+e).find("input:checkbox:checked").each((function(){t.push($(this).val())})),Shiny.setInputValue(e,t,{priority:"event"})}(e)})),t.find(".grouped-checkbox-select-all").on("click",(function(){t.find(".grouped-checkbox-input").prop({indeterminate:!1,checked:!0})})),t.find(".grouped-checkbox-deselect-all").on("click",(function(){t.find(".grouped-checkbox-input").prop({indeterminate:!1,checked:!1})}))}(t)}))}HTMLWidgets.widget({name:"treecheckbox",type:"output",factory:function(e,t,n){return{renderValue:function(t){L(e.id,t.label,t.choices,t.levels,t.collapsed,t.selected),$("#"+e.id).css("height","auto").css("width","auto")},resize:function(e,t){}}}})})()})();