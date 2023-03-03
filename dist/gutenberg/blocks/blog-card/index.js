(()=>{var e={2799:(e,t,r)=>{"use strict";const a=window.wp.element,n=window.wp.i18n,l=window.wp.blocks,o=window.wp.blockEditor,s=window.wp.components,c=window.wp.serverSideRender;var i=r.n(c);const m=JSON.parse('{"u2":"arkhe-blocks/blog-card"}'),k=(0,a.createElement)("svg",{viewBox:"0 0 56 56"},(0,a.createElement)("path",{d:"M53.5,44h-51C2.2,44,2,43.8,2,43.5v-31C2,12.2,2.2,12,2.5,12h51c0.3,0,0.5,0.2,0.5,0.5v30.9C54,43.8,53.8,44,53.5,44z M4.5,42h47c0.3,0,0.5-0.2,0.5-0.5v-27c0-0.3-0.2-0.5-0.5-0.5h-47C4.2,14,4,14.2,4,14.5v26.9C4,41.8,4.2,42,4.5,42z"}),(0,a.createElement)("path",{d:"M47.5,34.8h-5c-0.3,0-0.5-0.2-0.5-0.4v-0.8c0-0.2,0.2-0.4,0.5-0.4h5c0.3,0,0.5,0.2,0.5,0.4v0.8C48,34.6,47.8,34.8,47.5,34.8 z"}),(0,a.createElement)("path",{d:"M47.5,22.2h-17c-0.3,0-0.5,0.2-0.5,0.4v1.6c0,0.2,0.2,0.4,0.5,0.4h17c0.3,0,0.5-0.2,0.5-0.4v-1.6 C48,22.4,47.8,22.2,47.5,22.2z"}),(0,a.createElement)("path",{d:"M47.5,22.2h-17c-0.3,0-0.5,0.2-0.5,0.4v1.6c0,0.2,0.2,0.4,0.5,0.4h17c0.3,0,0.5-0.2,0.5-0.4v-1.6 C48,22.4,47.8,22.2,47.5,22.2z"}),(0,a.createElement)("g",null,(0,a.createElement)("path",{d:"M25.5,21H13.9L8,26.9v7.6C8,34.8,8.2,35,8.5,35h17c0.3,0,0.5-0.2,0.5-0.5v-13C26,21.2,25.8,21,25.5,21z"}),(0,a.createElement)("path",{d:"M11.9,21H8.5C8.2,21,8,21.2,8,21.5v3.4L11.9,21z"})),(0,a.createElement)("path",{d:"M47.5,27.2h-17c-0.3,0-0.5,0.2-0.5,0.4v1.6c0,0.2,0.2,0.4,0.5,0.4h17c0.3,0,0.5-0.2,0.5-0.4v-1.6 C48,27.4,47.8,27.2,47.5,27.2z"})),b=(0,a.createElement)("div",{className:"ark-block-blogCard arkb-boxLink"},(0,a.createElement)("div",{className:"arkb-boxLink__inner","data-type":"external"},(0,a.createElement)("div",{className:"arkb-boxLink__figure c-postThumb"},(0,a.createElement)("figure",{className:"c-postThumb__figure"},(0,a.createElement)("img",{src:"https://s.w.org/images/core/5.3/MtBlanc1.jpg",alt:"",className:"c-postThumb__img"}))),(0,a.createElement)("div",{className:"arkb-boxLink__body"},(0,a.createElement)("div",{className:"arkb-boxLink__title"},"Post Title"),(0,a.createElement)("div",{className:"arkb-boxLink__content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit...."),(0,a.createElement)("div",{className:"arkb-boxLink__more"},(0,a.createElement)("span",{className:"arkb-boxLink__more__text"},"Site Name"))))),p=function(e){let{icon:t,size:r=24,...n}=e;return(0,a.cloneElement)(t,{width:r,height:r,...n})},u=window.wp.primitives,h=(0,a.createElement)(u.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(u.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),_=void 0!==o.LinkControl?o.LinkControl:o.__experimentalLinkControl;function d(e,t){let r=t||"";return e?(-1===r.indexOf("noopener")&&(r+=" noopener"),-1===r.indexOf("noreferrer")&&(r+=" noreferrer")):(r=r.replace("noopener",""),r=r.replace("noreferrer","")),r.trim()}function E(e){const t={NOTE:(0,n.__)("Note: ","arkhe-blocks"),ADD:(0,n.__)("Add %s","arkhe-blocks"),CLOSE:(0,n.__)("Close %s","arkhe-blocks"),OPEN:(0,n.__)("Open %s","arkhe-blocks"),CONF_RESET:(0,n.__)("Do you want to reset %s?","arkhe-blocks"),HAS_ERROR:(0,n.__)("There is an error in %s","arkhe-blocks"),TO_SELECT:(0,n.__)("Select %s","arkhe-blocks"),TO_INPUT:(0,n.__)("Enter %s","arkhe-blocks"),NOT_FOUND:(0,n.__)("%s not found.","arkhe-blocks"),NOT_VALID:(0,n.__)("%s is incorrect.","arkhe-blocks"),NO_DATA:(0,n.__)("Currently, %s is not yet registered.","arkhe-blocks")};switch(!0){case"ADD"===e:case"CLOSE"===e:case"OPEN"===e:case"CONF_RESET"===e:case"HAS_ERROR"===e:case"TO_SELECT"===e:case"TO_INPUT"===e:case"NOT_FOUND"===e:case"NOT_VALID"===e:case"NO_DATA"===e:const o=t[e]||"";for(var r=arguments.length,a=new Array(r>1?r-1:0),l=1;l<r;l++)a[l-1]=arguments[l];return(0,n.sprintf)(o,...a);default:return t[e]||""}}const v=!!window.arkbSettings?.pfkey||!1,g=(0,a.createElement)("p",{className:"arkb-proOnlyArea__message"},(0,n.__)("This setting is only available in the PRO version.","arkhe-blocks"),(0,a.createElement)("a",{className:"arkb-proOnlyArea__link",href:"https://arkhe-theme.com/ja/product/arkhe-blocks-pro/",target:"_blank",rel:"noreferrer noopener"},"Go Pro")),C=(0,a.createElement)("p",{className:"arkb-proOnlyArea__message"},(0,n.__)("This area can only be edited in the PRO version.","arkhe-blocks"),(0,a.createElement)("a",{className:"arkb-proOnlyArea__link",href:"https://arkhe-theme.com/ja/product/arkhe-blocks-pro/",target:"_blank",rel:"noreferrer noopener"},"Go Pro")),w=e=>{let{type:t="",passCheck:r=!1,children:n}=e;return r?n:(0,a.createElement)(a.Fragment,null,v?n:(0,a.createElement)("div",{className:"arkb-proOnlyArea"},"edit"===t?C:g,(0,a.createElement)("div",{className:"arkb-proOnlyArea__preview"},n)))},N=e=>{let{attrs:t,setLink:r,removeLink:l,setRel:o,isLinkOpen:c,setIsLinkOpen:i=null,setAriaLabel:m=null,setUseAtag:k=null,isPro:b=!1}=e;const{url:u,rel:v,isNewTab:g,ariaLabel:C,useAtag:N}=t;let f,T;null===i?[f,T]=(0,a.useState)(!1):(f=c,T=i);const O=!!u,x=(0,a.createElement)(a.Fragment,null,(0,a.createElement)(_,{value:{url:u,opensInNewTab:g},onChange:e=>{r({...e,rel:d(e?.opensInNewTab,v)})},onRemove:()=>{l(),T(!1)},forceIsEditingLink:!O}),(0,a.createElement)("div",{className:"block-editor-link-control -bottom"},(0,a.createElement)("div",{className:"block-editor-link-control__tools"},(0,a.createElement)("div",{className:"block-editor-link-control__settings"},(0,a.createElement)(s.TextControl,{label:(0,n.__)("Link rel"),value:v||"",onChange:e=>{o(e)}}),m&&(0,a.createElement)(s.TextControl,{label:"aria-label",value:C||"",onChange:e=>{m(e)}}),k&&(0,a.createElement)(s.ToggleControl,{className:"u-arkb--mt--15",label:(0,n.__)("Make the parent element an <a> tag","arkhe-blocks"),help:E("NOTE")+(0,n.__)("Placing more <a> tags inside the block breaks the display.","arkhe-blocks"),checked:N||!1,onChange:e=>{k(e)}})))));return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(s.ToolbarGroup,null,(0,a.createElement)(s.ToolbarButton,{name:"link",icon:(0,a.createElement)(p,{icon:h}),title:(0,n.__)("Link"),onClick:()=>{T(!0)},isActive:O})),f&&(0,a.createElement)(s.Popover,{className:"arkb-link-control",position:"bottom center",onClose:()=>T(!1)},b?(0,a.createElement)(w,null,x):x))},f=(0,a.createElement)("svg",{viewBox:"0 0 40 40","aria-hidden":"true",width:"20",height:"20"},(0,a.createElement)("polygon",{points:"38.3,39 36.3,39 36.3,33.5 3.7,33.5 3.7,39 1.7,39 1.7,31.5 38.3,31.5 "}),(0,a.createElement)("g",null,(0,a.createElement)("rect",{x:"19",y:"6",width:"2",height:"18"}),(0,a.createElement)("polygon",{points:"20,1 12,7.1 28,7.1 \t"}),(0,a.createElement)("polygon",{points:"20,28.9 28,22.7 12,22.7 \t"})));function T(e,t){return-1!==e.split(" ").indexOf(t)}var O=r(1991),x=r.n(O);const y=[{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"0",title:"0",mbClass:"u-mt-0"},{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"0.5rem",title:"0.5rem",mbClass:"u-mt-5"},{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"1rem",title:"1rem",mbClass:"u-mt-10"},{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"1.5rem",title:"1.5rem",mbClass:"u-mt-15"},{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"2rem",title:"2rem",mbClass:"u-mt-20"},{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"3rem",title:"3rem",mbClass:"u-mt-30"},{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"4rem",title:"4rem",mbClass:"u-mt-40"},{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"6rem",title:"6rem",mbClass:"u-mt-60"},{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"8rem",title:"8rem",mbClass:"u-mt-80"}],L=y.map((e=>e.mbClass)),A=(0,a.memo)((e=>{let{className:t,setAttributes:r}=e;if(!window.arkbSettings?.isArkhe)return null;const l=t||"";let o;y.forEach((e=>{T(l,e.mbClass)&&(o=e)}));const c=o?o.mbClass:"";return(0,a.createElement)(s.ToolbarGroup,{className:"arkb-toolbar",isCollapsed:!0,icon:o?(0,a.createElement)("span",{className:"arkb-toolbtn--margin"},f,o.size):f,label:(0,n.__)("Margins on the block","arkhe-blocks"),controls:y.map((e=>{const{mbClass:t}=e,a=c===t;return{...e,isActive:a,onClick:()=>{const e=function(e,t,r){let a,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if(T(e,t))return e;if(r){const l={};r.map((e=>{l[e]=!1})),n&&(l[n]=!1),a=x()(e,l),t&&(a=x()(a,n,t))}else t&&(a=x()(e,t));return a}(l,a?"":t,L);r({className:e})}}}))})})),S=!!window.arkbSettings?.pfkey||!1,P="ark-block-blogCard";(0,l.registerBlockType)(m.u2,{title:(0,n.__)("Blog card","arkhe-blocks"),description:(0,n.__)("Create a card-type link for related articles.","arkhe-blocks"),icon:k,example:{attributes:{isPreview:!0}},edit:e=>{let{attributes:t,setAttributes:r,isSelected:l}=e;const{isPreview:c,useCache:k,linkData:p,isNewTab:u,rel:h,caption:_,customTitle:d,customExcerpt:E,showExerptPC:v,showExerptSP:g,showImage:C}=t;if(c)return b;(0,a.useEffect)((()=>{t.postId?r({postId:void 0,linkData:{id:t.postId,kind:"post-type"}}):t.externalUrl&&r({externalUrl:void 0,linkData:{url:t.externalUrl}})}),[]);const[f,T]=(0,a.useState)(!1),O=p?.id||p?.url;return O||!l||f||T(!0),(0,a.createElement)(a.Fragment,null,(0,a.createElement)(o.BlockControls,{group:"block"},(0,a.createElement)(N,{attrs:{url:p?.url,rel:h,isNewTab:u},setLink:e=>{const{id:t,url:a,kind:n,type:l,opensInNewTab:o}=e;t?r({linkData:{id:t,kind:n,type:l,url:a}}):a&&r({linkData:{url:a}}),void 0!==o&&r({isNewTab:o,rel:e.rel})},removeLink:()=>{r({linkData:void 0,isNewTab:!1,rel:void 0})},setRel:e=>{r({rel:e||void 0})},isLinkOpen:f,setIsLinkOpen:T})),(0,a.createElement)(o.BlockControls,null,(0,a.createElement)(A,{className:t.className,setAttributes:r})),(0,a.createElement)(o.InspectorControls,null,(0,a.createElement)(s.PanelBody,{title:(0,n.__)("Settings","arkhe-blocks"),initialOpen:!0},(0,a.createElement)(s.ToggleControl,{label:(0,n.__)("Use the cache","arkhe-blocks"),help:(0,n.__)("If you want to clear the cache, turn it off only once.","arkhe-blocks"),checked:k,onChange:e=>{r({useCache:e})},className:"arkb-ctrl--mb--s"}),(0,a.createElement)(w,null,(0,a.createElement)(s.ToggleControl,{label:(0,n.__)("Show featured image","arkhe-blocks"),checked:C,onChange:e=>{S&&r({showImage:e})},className:"arkb-ctrl--mb--s"}),(0,a.createElement)(s.ToggleControl,{label:(0,n.__)("Show excerpt","arkhe-blocks")+" (PC)",checked:v,onChange:e=>{S&&r({showExerptPC:e})},className:"arkb-ctrl--mb--s"}),(0,a.createElement)(s.ToggleControl,{label:(0,n.__)("Show excerpt","arkhe-blocks")+" (SP)",checked:g,onChange:e=>{S&&r({showExerptSP:e})}}),(0,a.createElement)(s.TextControl,{label:(0,n.__)("Caption at the bottom right of the card","arkhe-blocks"),value:_||"",onChange:e=>{S&&r({caption:e||void 0})}}),(0,a.createElement)(s.TextControl,{label:(0,n.__)("Overwrite title","arkhe-blocks"),value:d||"",onChange:e=>{S&&r({customTitle:e||void 0})}}),(0,a.createElement)(s.TextareaControl,{label:(0,n.__)("Overwrite excerpt","arkhe-blocks"),value:E||"",onChange:e=>{S&&r({customExcerpt:e||void 0})}})))),(0,a.createElement)("div",(0,o.useBlockProps)(),O?(0,a.createElement)(i(),{block:m.u2,attributes:t,className:`${P}__preview`}):(0,a.createElement)("div",{className:`${P}__preview -none ark-block-blogCard`},`※ ${(0,n.__)("Please specify the link.","arkhe-blocks")}`)))},save:()=>null})},1991:(e,t)=>{var r;!function(){"use strict";var a=function(){function e(){}function t(e,t){for(var r=t.length,a=0;a<r;++a)n(e,t[a])}e.prototype=Object.create(null);var r={}.hasOwnProperty,a=/\s+/;function n(e,n){if(n){var l=typeof n;"string"===l?function(e,t){for(var r=t.split(a),n=r.length,l=0;l<n;++l)e[r[l]]=!0}(e,n):Array.isArray(n)?t(e,n):"object"===l?function(e,t){if(t.toString===Object.prototype.toString)for(var a in t)r.call(t,a)&&(e[a]=!!t[a]);else e[t.toString()]=!0}(e,n):"number"===l&&function(e,t){e[t]=!0}(e,n)}}return function(){for(var r=arguments.length,a=Array(r),n=0;n<r;n++)a[n]=arguments[n];var l=new e;t(l,a);var o=[];for(var s in l)l[s]&&o.push(s);return o.join(" ")}}();e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var l=t[a]={exports:{}};return e[a](l,l.exports,r),l.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r(2799)})();