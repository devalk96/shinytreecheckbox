(()=>{"use strict";var e={725:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),i=n.n(o),r=n(645),l=n.n(r)()(i());l.push([e.id,"/* Style the caret/arrow */\n.UNwkxeu8JaLUR7zsLOLc {\n  cursor: pointer;\n  user-select: none; /* Prevent text selection */\n  display: inline-block;\n  margin-right: 6px;\n}\n\n.dpG9VJCbE1T3hvNqWAXQ {\n  list-style: none;\n}\n\n.fRDpmJJ9MRXanERdlguP {\n  background-color: white;\n  border-radius: 8px;\n  border: 1px solid #cccccc;\n  max-height: 25vh;\n}\n\n.GmtEMuE1BhBuOK4UDeoJ {\n  margin: 0;\n  border: 0;\n  background-color: transparent;\n  max-height: 18px;\n  display: inline-flex;\n  vertical-align: middle;\n  line-height: 16px;\n  padding: 0 2px 0 0;\n}\n\n.GmtEMuE1BhBuOK4UDeoJ:hover {\n  width: fit-content;\n  height: fit-content;\n  min-width: 16px;\n  min-height: 16px;\n  outline: none;\n}\n\n.pa5_k8SKSgRfWLTMfIfH {\n  border: 1px solid #cccccc;\n  border-left: 0;\n  display: none;\n  border-radius: 0 3px 3px 0;\n}\n\n.qIPVtNod_iQXqPR5gItw {\n  border-radius: 4px;\n  border-color: orange;\n  border-style: solid;\n  border-width: 1.17px;\n  color: orange;\n}\n\n.qIPVtNod_iQXqPR5gItw:hover {\n  width: 16px;\n  height: 16px;\n  padding: 1px;\n  border-radius: 4px;\n  border-color: orange;\n  border-style: solid;\n  border-width: 1.17px;\n  color: orange;\n}\n",""]),l.locals={groupedCheckboxCaret:"UNwkxeu8JaLUR7zsLOLc",groupedCheckboxList:"dpG9VJCbE1T3hvNqWAXQ",groupedCheckboxNodeHolder:"fRDpmJJ9MRXanERdlguP",btnInclude:"GmtEMuE1BhBuOK4UDeoJ",btnHelpLabel:"pa5_k8SKSgRfWLTMfIfH",btnIndeterminate:"qIPVtNod_iQXqPR5gItw"};const a=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(l[c]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);o&&l[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),i&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=i):s[4]="".concat(i)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},l=[],a=0;a<e.length;a++){var c=e[a],d=o.base?c[0]+o.base:c[0],s=r[d]||0,u="".concat(d," ").concat(s);r[d]=s+1;var p=n(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=i(h,o);o.byIndex=a,t.splice(a,0,{identifier:u,updater:f,references:1})}l.push(u)}return l}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=o(e=e||[],i=i||{});return function(e){e=e||[];for(var l=0;l<r.length;l++){var a=n(r[l]);t[a].references--}for(var c=o(e,i),d=0;d<r.length;d++){var s=n(r[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}r=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{HTMLWidgets,Shiny;class e{root;constructor(e,t){this.buildTree(e,t)}buildTree(e,n){let o,i=new t("root");e.forEach((e=>{o=[],n.forEach((t=>{o.push(e[t])})),this.#e(i,o)})),this.root=i}findMaxDepth(){let e=[],t=0;for(e.push(this.root);e.length>0;){let n,o=e.length;for(let t=0;t<o;t++){n=e.shift();for(let t of n.children)e.push(t)}t++}return t-1}#e(e,n){for(let o=0;o<n.length;o++){let i=n.slice(0,o+1),r=n[o],[l,a]=this.#t(e,i);if(l.value!==r){let e=new t(r);l.add_child(e)}}return e}#t(e,t){let n=e.children;for(const e of n)if(t[0]===e.value)return t.shift(),t.length>0?this.#t(e,t):[e,t];return[e,t]}}class t{constructor(e,t,n){t||(t=[]),this.value=e,this.children=t,this.parent=n,this.depth=0}add_child(e){this.children.push(e),this.children.forEach((e=>{e.addParent(this)}))}addParent(e){this.parent=e,this.depth=e.depth+1}get has_children(){return this.children.length>0}get siblings(){return this.parent.children}findObjectByName(e){if(this.value===e)return this;for(const t of this.children){let n=t.findObjectByName(e);if(n)return n}}}var o=n(379),i=n.n(o),r=n(795),l=n.n(r),a=n(569),c=n.n(a),d=n(565),s=n.n(d),u=n(216),p=n.n(u),h=n(589),f=n.n(h),g=n(725),b={};b.styleTagTransform=f(),b.setAttributes=s(),b.insert=c().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=p(),i()(g.Z,b);const x=g.Z&&g.Z.locals?g.Z.locals:void 0;let v=(k=-1,function(){return k+=1});var k;const m={unchecked:{symbol:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16">\n  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>\n</svg>',textColour:"text-dark",spanClasses:"bg-dark text-white",value:0},include:{symbol:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">\n  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>\n  <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>\n</svg>',textColour:"text-success",spanClasses:"bg-success text-white",value:"include"},exclude:{symbol:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>',textColour:"text-danger",spanClasses:"bg-danger text-white",value:"exclude"},indeterminate:{symbol:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square" viewBox="0 0 16 16">\n  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>\n  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>\n</svg>',textColour:"text-warning",spanClasses:"bg-warning text-white",value:0}};function w(e,t,n=m){if(!Object.keys(n).includes(t))throw new Error("Invalid state");e.attr("aria-label",t).data("state",t).data("textValue",n[t].value).attr("class",x.btnInclude).addClass(n[t].textColour);let o=e.find("span").first().attr("class",n[t].textColour);o.empty(),o.append($(n[t].symbol,{class:n[t].textColour}))}function y(e,t="toggle"){const n={toggle:{show:"show",hide:"hide"},slide:{show:"slideDown",hide:"slideUp"}};let o=$(e);if(!(t in n))throw new Error("The animation type is not supported.");"▼"===o.text()?(o.text("▶"),o.siblings("."+x.groupedCheckboxList)[n[t].hide]()):(o.text("▼"),o.siblings("."+x.groupedCheckboxList)[n[t].show]())}function C(e){let t;t=!0===$("#"+e).data("includeMode")?function(e){let t=$("#"+e).find("."+x.btnInclude),n={included:[],excluded:[]};for(const e of t){let t=$(e);if(0===t.siblings("."+x.groupedCheckboxList).length){let e=t.data("state");"include"===e?n.included.push(t.val()):"exclude"===e&&n.excluded.push(t.val())}}return n}(e):function(e){let t=$("#"+e),n=[];return t.find("input:checkbox:checked").each((function(){let e=$(this);0===e.siblings("."+x.groupedCheckboxList).length&&n.push(e.val())})),n}(e),Shiny.setInputValue(e,t,{priority:"event"})}function I(e,t,n,o,i){let r;r=t?o.find("#checkbox-list-"+t.htmlID)[0]:o.children($("."+x.groupedCheckboxList))[0];let l=v(),a="node-"+l,c=document.createElement("li"),d=document.createElement("span");d.classList.add("GroupedCheckBox-node","text-fg"),d.id=a,n&&d.appendChild(function(){let e=document.createElement("span");return e.classList.add(x.groupedCheckboxCaret),e.innerText="▼",e}());let s=e.match(/<e\d>/g);if(s){let t=s[0],n=t.substring(1,t.length-1);e=e.replace(t,String.fromCodePoint(parseInt(n,16)))}if(!0===i?d.appendChild(function(e,t,n=m){if(!Object.keys(n).includes(t))throw new Error("Invalid initial state");let o=n[t],i=$("<button>",{class:x.btnInclude,"aria-label":t,value:e,data:{state:t}}).append($("<span>",{class:o.textColour,html:o.symbol}));return function(e,t=m){e.on("click",(function(){let e=$(this),n=function(e,t){let n=e.data("state");if(!Object.keys(t).includes(n))throw new Error("Invalid state");let o=Object.keys(t),i=o.indexOf(n),r=o[(i+1)%o.length];for(;"indeterminate"===r;)i=o.indexOf(r),r=o[(i+1)%o.length];return w(e,r,t),r}(e,t);!function(e,t,n=m){e.siblings("ul").find("."+x.btnInclude).each((function(){w($(this),t,n)}))}(e,n,t);let o=e.parent().parent().parent().siblings("button");o.length>0&&function(e,t,n){let o=e.data("state");e.parent().parent().siblings().children("span").children("button").map((function(){return $(this).data("state")})).toArray().every((e=>e===o))?w(t,o,n):w(t,"indeterminate",n)}(e,o,t)}))}(i,n),i.get(0)}(e,"unchecked")):d.appendChild(function(e,t){let n=document.createElement("input");return n.classList.add("grouped-checkbox-input","form-check-input"),n.type="checkbox",n.value=e,n.id="node-input-check"+t,n}(e,l)),d.appendChild(function(e,t){let n=document.createElement("label");return n.classList.add("form-check-label"),n.for="node-input-check"+t,n.innerHTML=e,n}(e,l)),n){let e=document.createElement("ul");e.classList.add(x.groupedCheckboxList),e.id="checkbox-list-"+a,d.appendChild(e)}return c.appendChild(d),r.appendChild(c),a}HTMLWidgets.widget({name:"treecheckbox",type:"output",factory:function(t,n,o){return{renderValue:function(n){(function(t,n,o,i,r,l,a,c,d){let s=$("#"+t);n&&s.append("<h4>"+n+"</h4>"),!0===c&&s.append(function(e,t,n){let o=$("<div>",{class:"d-flex justify-content-evenly"}),i=v(),r=$("<div>",{class:"dropdown"});if(!0===n){let e=$("<button>",{class:"btn btn-outline-fg dropdown-toggle ",type:"button",id:"dropDownSelect-"+i}).text("(de)select all").attr("data-bs-toggle","dropdown").attr("aria-expanded","false");r.append(e);let t=$("<ul>",{class:"dropdown-menu","aria-labelledby":"dropDownSelect-"+i});t.append($("<li>",{class:"dropdown-item"}).append($("<a>",{class:"dropdown-link grouped-checkbox-include-all"}).text("Include all"))),t.append($("<li>",{class:"dropdown-item"}).append($("<a>",{class:"dropdown-link grouped-checkbox-exclude-all"}).text("Exclude all"))),t.append($("<li>",{class:"dropdown-item"}).append($("<a>",{class:"dropdown-link grouped-checkbox-deselect-all"}).text("Deselect all"))),r.append(t),o.append(r)}else{let e=$("<button>",{class:"btn btn-outline-fg dropdown-toggle ",type:"button",id:"dropDownSelect-"+i}).text("(de)select all").attr("data-bs-toggle","dropdown").attr("aria-expanded","false");r.append(e);let t=$("<ul>",{class:"dropdown-menu","aria-labelledby":"dropDownSelect-"+i});t.append($("<li>",{class:"dropdown-item"}).append($("<a>",{class:"dropdown-link grouped-checkbox-select-all"}).text("Select all"))),t.append($("<li>",{class:"dropdown-item"}).append($("<a>",{class:"dropdown-link grouped-checkbox-deselect-all"}).text("Deselect all"))),r.append(t),o.append(r)}if(!0===t){r=$("<div>",{class:"dropdown"});let e=$("<button>",{class:"btn btn-outline-fg dropdown-toggle ",type:"button",id:"dropDownCollapse-"+i}).text("collapse").attr("data-bs-toggle","dropdown").attr("aria-expanded","false");r.append(e);let t=$("<ul>",{class:"dropdown-menu","aria-labelledby":"dropDownCollapse-"+i});t.append($("<li>",{class:"dropdown-item"}).append($("<a>",{class:"dropdown-link grouped-checkbox-collapse-all"}).text("Collapse all"))),t.append($("<li>",{class:"dropdown-item"}).append($("<a>",{class:"dropdown-link grouped-checkbox-expand-all"}).text("Expand all"))),r.append(t),o.append(r)}return o}(0,i.length>1,a)),s.data("includeMode",a);let u=function(t,n){return new e(t,n)}(o,i),p=$("<div>",{class:x.groupedCheckboxNodeHolder+" overflow-auto align-self-center"});s.append(p),function(e,t,n){let o=$(e);o.append($("<ul>",{class:x.groupedCheckboxList,id:"grouped-checkbox-list-base"}));let i=[];for(i.push(t.root);i.length>0;){let e,t=i.length;for(let r=0;r<t;r++){e=i.shift();for(let t of e.children)i.push(t),"root"===t.parent.value?t.htmlID=I(t.value,null,t.has_children,o,n):t.htmlID=I(t.value,t.parent,t.has_children,o,n)}}}(p.get(0),u,a),i.length>1&&function(e,t){if("boolean"==typeof t&&t)$("#"+e).find("."+x.groupedCheckboxCaret).each((function(){y(this,"toggle")}));else if(Array.isArray(t)||"string"==typeof t){"string"==typeof t&&(t=[t]);for(let n of t)n=n.replace(/([ #;&,.+*~':"!^$[\]()=>|\/@])/g,"\\$1"),y($("#"+e).find("."+x.btnInclude+"[value='"+n+"']").siblings("."+x.groupedCheckboxCaret),"toggle")}}(t,r),function(e,t,n){let o=$("#"+e);if("boolean"==typeof t)!0===t&&(!0===n?o.find("."+x.btnInclude).each((function(){w(this,"include")})):o.find(".grouped-checkbox-input").prop({indeterminate:!1,checked:!0}));else{"string"==typeof t&&(t=[t]);for(let e of t)if(e=e.replace(/([ #;&,.+*~':"!^$[\]()=>|\/@])/g,"\\$1"),!0===n){let t=o.find("."+x.btnInclude+"[value='"+e+"']");w(t,"include"),t.siblings("."+x.groupedCheckboxList).find("."+x.btnInclude).each((function(){w($(this),"include")}))}else o.find("input[value='"+e+"']").prop({indeterminate:!1,checked:!0})}}(t,l,a),$(document).on("shiny:connected",(function(){!function(e){let t=$("#"+e);t.find("."+x.groupedCheckboxCaret).on("click",(function(){y(this,"toggle")}));let n=t.data("includeMode");!0===n?function(e){$("#"+e).find("."+x.btnInclude).on("click",(function(){C(e)}))}(e):function(e){$("#"+e).find(".grouped-checkbox-input").on("click",(function(){let t=$(this);t.siblings("ul").children().find(".grouped-checkbox-input").prop("checked",t.is(":checked"));let n=[t.is(":checked")];t.parent().parent().siblings().children().children("input[type='checkbox']").each((function(){n.push($(this).is(":checked"))}));let o=[...new Set(n)],i=t.parent().parent().parent().siblings(".grouped-checkbox-input");o.length>1?i.prop({indeterminate:!0,checked:!1}):i.prop({indeterminate:!1,checked:t.is(":checked")}),C(e)}))}(e),t.find(".grouped-checkbox-select-all").on("click",(function(){t.find(".grouped-checkbox-input").prop({indeterminate:!1,checked:!0}),C(e)})),t.find(".grouped-checkbox-deselect-all").on("click",(function(){!0===n?t.find("."+x.btnInclude).each((function(){w($(this),"unchecked")})):t.find(".grouped-checkbox-input").prop({indeterminate:!1,checked:!1}),C(e)})),t.find(".grouped-checkbox-expand-all").on("click",(function(){t.find("."+x.groupedCheckboxCaret).each((function(){let e=$(this);"▶"===e.text()&&(e.text("▼"),e.siblings("."+x.groupedCheckboxList).show(),e.siblings("."+x.groupedCheckboxList).show())}))})),t.find(".grouped-checkbox-collapse-all").on("click",(function(){t.find("."+x.groupedCheckboxCaret).each((function(){let e=$(this);"▼"===e.text()&&(e.text("▶"),e.siblings("."+x.groupedCheckboxList).hide(),e.siblings("."+x.groupedCheckboxList).hide())}))})),t.find(".grouped-checkbox-include-all").on("click",(function(){t.find("."+x.btnInclude).each((function(){w($(this),"include")})),C(e)})),t.find(".grouped-checkbox-exclude-all").on("click",(function(){t.find("."+x.btnInclude).each((function(){w($(this),"exclude")})),C(e)})),t.find(".form-check-label").on("click",(function(){!0===t.data("includeMode")?$(this).siblings("."+x.btnInclude).trigger("click"):$(this).siblings(".grouped-checkbox-input").trigger("click")})),C(e)}(t),C(t)}))})(t.id,n.label,n.choices,n.levels,n.collapsed,n.selected,n.includeMode,n.select_buttons,n.search_bar),$("#"+t.id).css("height","auto").css("width","auto")},resize:function(e,t){}}}})})()})();