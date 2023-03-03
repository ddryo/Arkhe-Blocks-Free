(()=>{var e={991:(e,t)=>{var r;!function(){"use strict";var n=function(){function e(){}function t(e,t){for(var r=t.length,n=0;n<r;++n)o(e,t[n])}e.prototype=Object.create(null);var r={}.hasOwnProperty,n=/\s+/;function o(e,o){if(o){var a=typeof o;"string"===a?function(e,t){for(var r=t.split(n),o=r.length,a=0;a<o;++a)e[r[a]]=!0}(e,o):Array.isArray(o)?t(e,o):"object"===a?function(e,t){if(t.toString===Object.prototype.toString)for(var n in t)r.call(t,n)&&(e[n]=!!t[n]);else e[t.toString()]=!0}(e,o):"number"===a&&function(e,t){e[t]=!0}(e,o)}}return function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var a=new e;t(a,n);var s=[];for(var l in a)a[l]&&s.push(l);return s.join(" ")}}();e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.i18n,t=window.wp.blocks,n={"ark-media-shadow":(0,e._x)("Shadow","style","arkhe-blocks"),"ark-media-border":(0,e._x)("Border","style","arkhe-blocks"),"ark-media-frame":(0,e._x)("Frame","style","arkhe-blocks")};for(const e in n)(0,t.registerBlockStyle)("core/image",{name:e,label:n[e]}),(0,t.registerBlockStyle)("core/video",{name:e,label:n[e]});const o={"ark-list-icon--dot":(0,e._x)("Dot","icon","arkhe-blocks"),"ark-list-icon--caret":(0,e._x)("Right-Caret","icon","arkhe-blocks"),"ark-list-icon--check":(0,e._x)("Check","icon","arkhe-blocks"),"ark-list-icon--circle":(0,e._x)("Circle","icon","arkhe-blocks"),"ark-list-icon--triangle":(0,e._x)("Triangle","icon","arkhe-blocks"),"ark-list-icon--x":(0,e._x)("X mark","icon","arkhe-blocks"),"ark-list-icon--question":(0,e._x)("Question","icon","arkhe-blocks"),"ark-list-numbered":(0,e._x)("Numbered","style","arkhe-blocks"),"ark-list-note":(0,e._x)("Notes","style","arkhe-blocks")};for(const e in o)(0,t.registerBlockStyle)("core/list",{name:e,label:o[e]});const a={"ark-card":(0,e._x)("Card type","style","arkhe-blocks")};for(const e in a)(0,t.registerBlockStyle)("core/media-text",{name:e,label:a[e]});window.arkbSettings?.isArkhe&&(0,t.registerBlockStyle)("core/quote",{name:"large",label:(0,e._x)("Large","style","arkhe-blocks")});const s=window.wp.element,l=window.wp.hooks,c=window.wp.blockEditor,i=window.wp.compose,m=window.wp.components,k=(0,s.createElement)("svg",{viewBox:"0 0 40 40","aria-hidden":"true",width:"20",height:"20"},(0,s.createElement)("polygon",{points:"38.3,39 36.3,39 36.3,33.5 3.7,33.5 3.7,39 1.7,39 1.7,31.5 38.3,31.5 "}),(0,s.createElement)("g",null,(0,s.createElement)("rect",{x:"19",y:"6",width:"2",height:"18"}),(0,s.createElement)("polygon",{points:"20,1 12,7.1 28,7.1 \t"}),(0,s.createElement)("polygon",{points:"20,28.9 28,22.7 12,22.7 \t"})));function b(e,t){return-1!==e.split(" ").indexOf(t)}var u=r(991),d=r.n(u);const p=[{icon:(0,s.createElement)("span",{className:"arkb-null-icon"}),size:"0",title:"0",mbClass:"u-mt-0"},{icon:(0,s.createElement)("span",{className:"arkb-null-icon"}),size:"0.5rem",title:"0.5rem",mbClass:"u-mt-5"},{icon:(0,s.createElement)("span",{className:"arkb-null-icon"}),size:"1rem",title:"1rem",mbClass:"u-mt-10"},{icon:(0,s.createElement)("span",{className:"arkb-null-icon"}),size:"1.5rem",title:"1.5rem",mbClass:"u-mt-15"},{icon:(0,s.createElement)("span",{className:"arkb-null-icon"}),size:"2rem",title:"2rem",mbClass:"u-mt-20"},{icon:(0,s.createElement)("span",{className:"arkb-null-icon"}),size:"3rem",title:"3rem",mbClass:"u-mt-30"},{icon:(0,s.createElement)("span",{className:"arkb-null-icon"}),size:"4rem",title:"4rem",mbClass:"u-mt-40"},{icon:(0,s.createElement)("span",{className:"arkb-null-icon"}),size:"6rem",title:"6rem",mbClass:"u-mt-60"},{icon:(0,s.createElement)("span",{className:"arkb-null-icon"}),size:"8rem",title:"8rem",mbClass:"u-mt-80"}],h=p.map((e=>e.mbClass)),f=(0,s.memo)((t=>{let{className:r,setAttributes:n}=t;if(!window.arkbSettings?.isArkhe)return null;const o=r||"";let a;p.forEach((e=>{b(o,e.mbClass)&&(a=e)}));const l=a?a.mbClass:"";return(0,s.createElement)(m.ToolbarGroup,{className:"arkb-toolbar",isCollapsed:!0,icon:a?(0,s.createElement)("span",{className:"arkb-toolbtn--margin"},k,a.size):k,label:(0,e.__)("Margins on the block","arkhe-blocks"),controls:p.map((e=>{const{mbClass:t}=e,r=l===t;return{...e,isActive:r,onClick:()=>{const e=function(e,t,r){let n,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if(b(e,t))return e;if(r){const a={};r.map((e=>{a[e]=!1})),o&&(a[o]=!1),n=d()(e,a),t&&(n=d()(n,o,t))}else t&&(n=d()(e,t));return n}(o,r?"":t,h);n({className:e})}}}))})})),g=(e,t,r)=>{const n=document.querySelector('[name="editor-canvas"]'),o=n?n.contentWindow.document:window.document;setTimeout((()=>{const n=o.querySelector('ol[data-block="'+e+'"]');null!==n&&"LI"!==n.parentNode.tagName&&(n.style.counterReset=r?t?`arkb-ct ${parseInt(t)+1}`:`arkb-ct ${n.children.length+1}`:t?"arkb-ct "+(parseInt(t)-1):"arkb-ct")}),5)};(0,l.addFilter)("editor.BlockEdit","arkb-hook/add-controls",(0,i.createHigherOrderComponent)((e=>t=>{const{name:r,attributes:n,setAttributes:o,isSelected:a,clientId:l}=t,i="core/list"===r&&n.ordered;if((0,s.useEffect)((()=>{if("core/list"===r){const e=n.className||"";b(e,"is-style-ark-list-icon--good")?o({className:e.replace("is-style-ark-list-icon--good","is-style-ark-list-icon--circle")}):b(e,"is-style-ark-list-icon--bad")&&o({className:e.replace("is-style-ark-list-icon--bad","is-style-ark-list-icon--x")})}i&&g(l,n.start,n.reversed)}),[l]),!a)return(0,s.createElement)(e,t);i&&g(l,n.start,n.reversed);const m=!!a&&(e=>-1!==["loos-hcb/code-block"].indexOf(e)||-1!==e.indexOf("core/")&&!(-1!==["core/shortcode","core/html","core/block"].indexOf(e)))(r);return(0,s.createElement)(s.Fragment,null,(0,s.createElement)(e,t),m&&(0,s.createElement)(c.BlockControls,null,(0,s.createElement)(f,{className:n.className,setAttributes:o})))}),"addMarginControls"),10)})()})();