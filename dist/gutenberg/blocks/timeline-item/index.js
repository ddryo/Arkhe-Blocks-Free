(()=>{var e={1340:(e,t,r)=>{"use strict";const n=window.wp.element,o=window.wp.i18n,i=window.wp.blocks,a=window.wp.blockEditor,s=window.wp.components,l="function"==typeof a.useInnerBlocksProps?a.useInnerBlocksProps:a.__experimentalUseInnerBlocksProps,c=JSON.parse('{"u2":"arkhe-blocks/timeline-item"}'),u=(0,n.createElement)("svg",{viewBox:"0 0 56 56"},(0,n.createElement)("rect",{x:"11.5",y:"16",width:"2",height:"24"}),(0,n.createElement)("circle",{cx:"12.5",cy:"28",r:"5"}),(0,n.createElement)("rect",{x:"24.5",y:"27",width:"24",height:"2"}));function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h.apply(this,arguments)}var f=r(4184),p=r.n(f);const g=e=>{let{icon:t,label:r,size:o="1em",className:i="",returnItagIf404:a=!0}=e,s="";const l=(window.__ARK_ICONS__||{}).src||{};if(t.startsWith("Ls")?s="ls":t.startsWith("Io")?s="io":t.startsWith("Fi")?s="fi":t.startsWith("Ph")?s="ph":t.startsWith("Fa")&&(s="fa"),s){const e=l[s]||{};if(!e[t])return null;const a=e[t];let c={};return c=r?{role:"img","aria-label":r,"data-icon":t}:{"aria-hidden":!0,"data-icon":t},(0,n.createElement)(a,h({className:i||null,height:o,width:o,xmlns:"http://www.w3.org/2000/svg"},c))}return a?(0,n.createElement)("i",{className:p()(t,i)}):null};function y(e){if("string"!=typeof e)return e;const t=(e=e.replace("_","")).split("-");return 0===t.length?e:t.map((function(e,t){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()})).join("")}const m="ark-block-timeline",d=[{supports:{anchor:!0,className:!1,reusable:!1},attributes:{title:{type:"string",source:"html",selector:".ark-block-timeline__title"},label:{type:"string",source:"html",selector:".ark-block-timeline__label"},isFill:{type:"boolean",default:!1},isEmphasis:{type:"boolean",default:!1},hideContent:{type:"boolean",default:!1},icon:{type:"string",default:""},color:{type:"string",default:""},iconV1:{type:"string",source:"html",selector:".ark-block-timeline__shape.-has-icon",default:""}},migrate(e){const t={};return e.icon&&(t.icon=(e=>{if(!e)return e;if(null!==e.match(/^fa/)&&-1!==e.indexOf(" fa-"))return y(e=(e=(e=(e=(e=(e=e.replace("fa-solid fa-","Fas-")).replace("fas fa-","Fas-")).replace("fa-regular fa-","Far-")).replace("far fa-","Far-")).replace("fa-brand fa-","Fab-")).replace("fab fa-","Fab-"));if(e.startsWith("arkb-svg")){const t={"arkb-svg-point":"LsLightbulb","arkb-svg-thumb_up":"LsThumbUp","arkb-svg-thumb_down":"LsThumbDown","arkb-svg-comment":"LsChat","arkb-svg-batsu":"LsX","arkb-svg-posted":"LsTime","arkb-svg-warning":"LsWarning","arkb-svg-star":"LsStarFull"};return t.hasOwnProperty(e)?t[e]:y(e=e.replace("arkb-svg-","ls-"))}return e})(e.icon),console.log("Timelne icon migrated:",t.icon)),{...e,...t}},save:e=>{let{attributes:t}=e;const{title:r,label:o,isFill:i,isEmphasis:s,icon:l,color:c,hideContent:u,iconV1:h}=t,f=h||"";let y=null;f?y=(0,n.createElement)(n.RawHTML,null,f):l&&(y=(0,n.createElement)(g,{icon:l,className:`${m}__icon`}));const d=p()(`${m}__shape`,{"-is-fill":i,"-is-emphasis":s,"-has-icon":!!l}),b=c?{color:c}:null,v=a.useBlockProps.save({className:`${m}__item`});return(0,n.createElement)("div",v,(0,n.createElement)("div",{className:`${m}__head`},(0,n.createElement)("span",{className:d,style:b},y),(0,n.createElement)("span",{className:`${m}__label`},(0,n.createElement)(a.RichText.Content,{value:o}))),!a.RichText.isEmpty(r)&&(0,n.createElement)("div",{className:`${m}__title`},(0,n.createElement)(a.RichText.Content,{value:r})),!u&&(0,n.createElement)("div",{className:`${m}__body ark-keep-mt--s`},(0,n.createElement)(a.InnerBlocks.Content,null)))}}],b=!!window.arkbSettings?.pfkey||!1,v=(0,n.createElement)("p",{className:"arkb-proOnlyArea__message"},(0,o.__)("This setting is only available in the PRO version.","arkhe-blocks"),(0,n.createElement)("a",{className:"arkb-proOnlyArea__link",href:"https://arkhe-theme.com/ja/product/arkhe-blocks-pro/",target:"_blank",rel:"noreferrer noopener"},"Go Pro")),w=(0,n.createElement)("p",{className:"arkb-proOnlyArea__message"},(0,o.__)("This area can only be edited in the PRO version.","arkhe-blocks"),(0,n.createElement)("a",{className:"arkb-proOnlyArea__link",href:"https://arkhe-theme.com/ja/product/arkhe-blocks-pro/",target:"_blank",rel:"noreferrer noopener"},"Go Pro")),k=e=>{let{type:t="",passCheck:r=!1,children:o}=e;return r?o:(0,n.createElement)(n.Fragment,null,b?o:(0,n.createElement)("div",{className:"arkb-proOnlyArea"},"edit"===t?w:v,(0,n.createElement)("div",{className:"arkb-proOnlyArea__preview"},o)))},E=window.wp.primitives,_=(0,n.createElement)(E.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(E.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}));r(8764);const B={hr:["fill","outline"],io:["fill","outline"],fa:["fill","outline"],ph:["fill","regular","thin"],fi:["regular","thin"],ls:["regular"]},C={regular:"Regular",fill:"Fill",solid:"Solid",outline:"Outline",thin:"Thin",light:"Light"},A={"--arrow--":(0,o._x)("Arrows","icon-category","arkhe-blocks"),"--symbols--":(0,o._x)("Symbols/Shapes","icon-category","arkhe-blocks"),"--communication--":(0,o._x)("Communication","icon-category","arkhe-blocks"),"--media-file--":(0,o._x)("Media/File","icon-category","arkhe-blocks"),"--works-study--":(0,o._x)("Work/Study","icon-category","arkhe-blocks"),"--shop-money--":(0,o._x)("Shopping/Money","icon-category","arkhe-blocks"),"--living--":(0,o._x)("Living","icon-category","arkhe-blocks"),"--entertainment--":(0,o._x)("Entertainment","icon-category","arkhe-blocks"),"--maps-transportation--":(0,o._x)("Map/Transportation","icon-category","arkhe-blocks"),"--system-devices--":(0,o._x)("System/Device","icon-category","arkhe-blocks"),"--design--":(0,o._x)("Design","icon-category","arkhe-blocks"),"--wellness--":(0,o._x)("Wellness","icon-category","arkhe-blocks"),"--nature-weather--":(0,o._x)("Nature/Weather","icon-category","arkhe-blocks"),"--people--":(0,o._x)("People","icon-category","arkhe-blocks"),"--logo--":(0,o._x)("Logo","icon-category","arkhe-blocks"),"--tools--":(0,o._x)("Tools","icon-category","arkhe-blocks"),"--others--":(0,o._x)("Others","icon-category","arkhe-blocks")},x=!!window.arkbSettings?.pfkey||!1,S={style:(0,o.__)("Style","arkhe-blocks"),select:(0,o.__)("Select icon","arkhe-blocks"),search:(0,o.__)("Search icon","arkhe-blocks"),nofound:(0,o.__)("Icon not found.","arkhe-blocks"),svgInsert:(0,o._x)("Insert","svg","arkhe-blocks"),svgPlaceholder:(0,o.__)("You can enter SVG tags directly here. (script tags are removed)","arkhe-blocks")},N=e=>{let{icons:t,value:r,onChange:o,isFilterd:i}=e;return(0,n.createElement)(s.ButtonGroup,{className:"__iconList","data-filterd":i?"1":"0"},t.map(((e,t)=>{if(e.startsWith("--")){var a;if(i)return null;const r=null!==(a=A[e])&&void 0!==a?a:e;return(0,n.createElement)("span",{key:t,className:"__iconCategory"},r)}return(0,n.createElement)(s.Button,{key:t,variant:e===r?"primary":"",onClick:()=>{(x||e.startsWith("Ls"))&&o(e)}},(0,n.createElement)(g,{icon:e,size:"20px"}))})))},U=e=>{let{value:t="",onChange:r,searchValue:o}=e;const i=window.__ARK_ICONS__||{},a=i.list||{};let l=i.tabs||[];l=l.map((e=>({name:e.prefix,title:(0,n.createElement)(g,{icon:e.icon})})));const c=l[0].name;let u="";t.startsWith("Ls")?u="ls":t.startsWith("Io")?u="io":t.startsWith("Fi")?u="fi":t.startsWith("Ph")?u="ph":(t.startsWith("Fa")||t.startsWith("fa"))&&(u="fa");const[h,f]=(0,n.useState)(u||c),p=a[h]||{},y=B[h],m=y.map((e=>{var t;return{value:e,label:null!==(t=C[e])&&void 0!==t?t:e}})),[d,b]=(0,n.useState)(y[0]||"regular"),v=p[d]||[];let w=null;return o&&(w=v.filter((e=>e.toLowerCase().includes(o.toLowerCase())))),(0,n.createElement)(s.TabPanel,{className:"ls-iconModal__tab",activeClass:"is-active",onSelect:e=>{f(e),B[e].includes(d)||b(B[e][0])},tabs:l,initialTabName:h},(e=>(0,n.createElement)(n.Fragment,null,(0,n.createElement)(s.ButtonGroup,{className:"__iconStyles"},(0,n.createElement)("span",{className:"__label"},S.style," : "),m.map(((e,t)=>(0,n.createElement)(s.Button,{key:t,variant:e.value===d?"primary":"",onClick:()=>{b(e.value)}},e.label)))),(0,n.createElement)(k,{passCheck:"ls"===h},w?w.length?(0,n.createElement)(N,{icons:w,value:t,onChange:r,isFilterd:!0}):(0,n.createElement)("div",{className:"__noIcon"},S.nofound):(0,n.createElement)(N,{icons:v,value:t,onChange:r})))))},L=e=>{let{value:t,onSet:r,className:o}=e;const[i,a]=(0,n.useState)(t||"");return(0,n.createElement)(s.Flex,{className:p()("ls-svgInput",o)},(0,n.createElement)(s.TextareaControl,{rows:2,value:i||"",placeholder:S.svgPlaceholder,onChange:e=>{a(e)}}),(0,n.createElement)(s.Button,{text:S.svgInsert,className:"__setBtn",variant:"secondary",onClick:()=>{const e=(-1===(n=(t=n=i,n=t?t=(t=(t=(t=t.replace(/\r?\n/g,"")).replace(/\t/g," ")).replace(/\s\s+/g," ")).replace(/> </g,"><"):"").replace(/<script>.*<\/script>/gim,"")).indexOf("xmlns=")&&(n=n.replace("<svg",'<svg xmlns="http://www.w3.org/2000/svg"')),n);var t,n;a(e),r(e)}}))};function T(e){let{value:t,onChange:r,onClose:o,svg:i,onSetSvg:a,renderBottom:l,position:c="sidebar",continueable:u=!1}=e;const[h,f]=(0,n.useState)("");return(0,n.createElement)(s.Modal,{title:S.select,className:`ls-iconModal -position-${c}`,onRequestClose:()=>{o(),f("")}},(0,n.createElement)("div",{className:"ls-iconModal__inner"},(0,n.createElement)("div",{className:"ls-iconModal__top"},(0,n.createElement)(s.TextControl,{placeholder:S.search,className:"ls-iconModal__s",value:h,autoComplete:"false",name:"icon-search",onChange:e=>{f(e)}})),(0,n.createElement)(U,{onChange:e=>{r(e),u||o()},value:t,searchValue:h}),(0,n.createElement)("div",{className:"ls-iconModal__bottom"},a&&(0,n.createElement)(k,null,(0,n.createElement)(L,{value:i||"",onSet:e=>{x&&(a(e),o())}})),l&&l())))}const I={search:(0,o.__)("Search","arkhe-blocks"),clear:(0,o.__)("Clear","arkhe-blocks")},O=e=>{let{value:t="",position:r="sidebar",onChange:o,svg:i="",onSetSvg:a,clearable:l=!0}=e;const[c,u]=(0,n.useState)(!1);return(0,n.createElement)("div",{className:"ls-iconPicker"},(0,n.createElement)(s.Button,{variant:"secondary",iconPosition:"right",icon:_,text:i?(0,n.createElement)(n.RawHTML,{className:"ls-iconPicker__prev"},i):t?(0,n.createElement)(g,{icon:t,size:"24px",className:"ls-iconPicker__prev"}):(0,n.createElement)("span",{className:"ls-iconPicker__placeholder"},I.search),onClick:()=>{u(!0)}}),l&&(0,n.createElement)(s.Button,{className:"-clear",isSmall:!0,text:I.clear,onClick:()=>{o(""),i&&a&&a("")}}),c&&(0,n.createElement)(T,{value:t,position:r,onChange:o,svg:i,onSetSvg:a,onClose:()=>{u(!1)}}))},R=!!window.arkbSettings?.pfkey||!1;(0,i.registerBlockType)(c.u2,{title:(0,o.__)("Timeline item","arkhe-blocks"),icon:u,edit:e=>{let{attributes:t,setAttributes:r}=e;const{title:i,label:c,isFill:u,isEmphasis:h,icon:f,color:y,hideContent:m}=t,d=p()("ark-block-timeline__shape",{"-is-fill":u,"-is-emphasis":h,"-has-icon":!!f}),b=y?{color:y}:null,v=(0,n.useCallback)((e=>{R&&r({icon:e})}),[r]),w=(0,a.useBlockProps)({className:"ark-block-timeline__item"}),E=l({className:"ark-block-timeline__body ark-keep-mt--s"},{template:[["core/paragraph"]],templateLock:!1});return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(a.InspectorControls,null,(0,n.createElement)(s.PanelBody,{title:(0,o.__)("Settings","arkhe-blocks")},(0,n.createElement)(s.CheckboxControl,{label:(0,o.__)("Hide content","arkhe-blocks"),checked:m,onChange:e=>r({hideContent:e})}),(0,n.createElement)(s.CheckboxControl,{label:(0,o.__)("Fill the shape","arkhe-blocks"),checked:u,onChange:e=>r({isFill:e})}),(0,n.createElement)(s.CheckboxControl,{label:(0,o.__)("Emphasize the shape","arkhe-blocks"),checked:h,onChange:e=>r({isEmphasis:e})})),(0,n.createElement)(a.PanelColorSettings,{title:(0,o.__)("Color settings","arkhe-blocks"),initialOpen:!0,colorSettings:[{value:y,label:(0,o.__)("Color","arkhe-blocks"),onChange:e=>{r({color:e})}}]}),(0,n.createElement)(s.PanelBody,{title:(0,o.__)("Icon settings","arkhe-blocks")},(0,n.createElement)(k,null,(0,n.createElement)(s.BaseControl,null,(0,n.createElement)(s.BaseControl.VisualLabel,null,(0,o.__)("Select Icon","arkhe-blocks")),(0,n.createElement)(O,{value:f,onChange:v,clearable:!0}))))),(0,n.createElement)("div",w,(0,n.createElement)("div",{className:"ark-block-timeline__head"},(0,n.createElement)("span",{className:d,style:b},f&&(0,n.createElement)(g,{icon:f,className:"ark-block-timeline__icon"})),(0,n.createElement)(a.RichText,{placeholder:"2020.01.01",className:"ark-block-timeline__label",tagName:"span",value:c,onChange:e=>r({label:e})})),(0,n.createElement)(a.RichText,{placeholder:(0,o.__)("Enter text","arkhe-blocks")+"...",className:`ark-block-timeline__title is-empty-${a.RichText.isEmpty(i)}`,tagName:"div",value:i,onChange:e=>r({title:e})}),!m&&(0,n.createElement)("div",E)))},save:e=>{let{attributes:t}=e;const{title:r,label:o,isFill:i,isEmphasis:s,icon:l,color:c,hideContent:u}=t,h=p()("ark-block-timeline__shape",{"-is-fill":i,"-is-emphasis":s,"-has-icon":!!l}),f=c?{color:c}:null,y=a.useBlockProps.save({className:"ark-block-timeline__item"});return(0,n.createElement)("div",y,(0,n.createElement)("div",{className:"ark-block-timeline__head"},(0,n.createElement)("span",{className:h,style:f},l&&(0,n.createElement)(g,{icon:l,className:"ark-block-timeline__icon"})),(0,n.createElement)("span",{className:"ark-block-timeline__label"},(0,n.createElement)(a.RichText.Content,{value:o}))),!a.RichText.isEmpty(r)&&(0,n.createElement)("div",{className:"ark-block-timeline__title"},(0,n.createElement)(a.RichText.Content,{value:r})),!u&&(0,n.createElement)("div",{className:"ark-block-timeline__body ark-keep-mt--s"},(0,n.createElement)(a.InnerBlocks.Content,null)))},deprecated:d})},9742:(e,t)=>{"use strict";t.byteLength=function(e){var t=l(e),r=t[0],n=t[1];return 3*(r+n)/4-n},t.toByteArray=function(e){var t,r,i=l(e),a=i[0],s=i[1],c=new o(function(e,t,r){return 3*(t+r)/4-r}(0,a,s)),u=0,h=s>0?a-4:a;for(r=0;r<h;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],c[u++]=t>>16&255,c[u++]=t>>8&255,c[u++]=255&t;return 2===s&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,c[u++]=255&t),1===s&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,c[u++]=t>>8&255,c[u++]=255&t),c},t.fromByteArray=function(e){for(var t,n=e.length,o=n%3,i=[],a=16383,s=0,l=n-o;s<l;s+=a)i.push(c(e,s,s+a>l?l:s+a));return 1===o?(t=e[n-1],i.push(r[t>>2]+r[t<<4&63]+"==")):2===o&&(t=(e[n-2]<<8)+e[n-1],i.push(r[t>>10]+r[t>>4&63]+r[t<<2&63]+"=")),i.join("")};for(var r=[],n=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,s=i.length;a<s;++a)r[a]=i[a],n[i.charCodeAt(a)]=a;function l(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function c(e,t,n){for(var o,i,a=[],s=t;s<n;s+=3)o=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),a.push(r[(i=o)>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return a.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},8764:(e,t,r)=>{"use strict";var n=r(9742),o=r(645),i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;t.h2=50;var a=2147483647;function s(e){if(e>a)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,l.prototype),t}function l(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return h(e)}return c(e,t,r)}function c(e,t,r){if("string"==typeof e)return function(e,t){if("string"==typeof t&&""!==t||(t="utf8"),!l.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var r=0|y(e,t),n=s(r),o=n.write(e,t);return o!==r&&(n=n.slice(0,o)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(z(e,Uint8Array)){var t=new Uint8Array(e);return p(t.buffer,t.byteOffset,t.byteLength)}return f(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(z(e,ArrayBuffer)||e&&z(e.buffer,ArrayBuffer))return p(e,t,r);if("undefined"!=typeof SharedArrayBuffer&&(z(e,SharedArrayBuffer)||e&&z(e.buffer,SharedArrayBuffer)))return p(e,t,r);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return l.from(n,t,r);var o=function(e){if(l.isBuffer(e)){var t=0|g(e.length),r=s(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||D(e.length)?s(0):f(e):"Buffer"===e.type&&Array.isArray(e.data)?f(e.data):void 0}(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return l.from(e[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function u(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function h(e){return u(e),s(e<0?0:0|g(e))}function f(e){for(var t=e.length<0?0:0|g(e.length),r=s(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}function p(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');var n;return n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Object.setPrototypeOf(n,l.prototype),n}function g(e){if(e>=a)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a.toString(16)+" bytes");return 0|e}function y(e,t){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||z(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(var o=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return F(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return j(e).length;default:if(o)return n?-1:F(e).length;t=(""+t).toLowerCase(),o=!0}}function m(e,t,r){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return U(this,t,r);case"utf8":case"utf-8":return A(this,t,r);case"ascii":return S(this,t,r);case"latin1":case"binary":return N(this,t,r);case"base64":return C(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function d(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function b(e,t,r,n,o){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),D(r=+r)&&(r=o?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(o)return-1;r=e.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof t&&(t=l.from(t,n)),l.isBuffer(t))return 0===t.length?-1:v(e,t,r,n,o);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):v(e,[t],r,n,o);throw new TypeError("val must be string, number or Buffer")}function v(e,t,r,n,o){var i,a=1,s=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;a=2,s/=2,l/=2,r/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(o){var u=-1;for(i=r;i<s;i++)if(c(e,i)===c(t,-1===u?0:i-u)){if(-1===u&&(u=i),i-u+1===l)return u*a}else-1!==u&&(i-=i-u),u=-1}else for(r+l>s&&(r=s-l),i=r;i>=0;i--){for(var h=!0,f=0;f<l;f++)if(c(e,i+f)!==c(t,f)){h=!1;break}if(h)return i}return-1}function w(e,t,r,n){r=Number(r)||0;var o=e.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=t.length;n>i/2&&(n=i/2);for(var a=0;a<n;++a){var s=parseInt(t.substr(2*a,2),16);if(D(s))return a;e[r+a]=s}return a}function k(e,t,r,n){return W(F(t,e.length-r),e,r,n)}function E(e,t,r,n){return W(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function _(e,t,r,n){return W(j(t),e,r,n)}function B(e,t,r,n){return W(function(e,t){for(var r,n,o,i=[],a=0;a<e.length&&!((t-=2)<0);++a)n=(r=e.charCodeAt(a))>>8,o=r%256,i.push(o),i.push(n);return i}(t,e.length-r),e,r,n)}function C(e,t,r){return 0===t&&r===e.length?n.fromByteArray(e):n.fromByteArray(e.slice(t,r))}function A(e,t,r){r=Math.min(e.length,r);for(var n=[],o=t;o<r;){var i,a,s,l,c=e[o],u=null,h=c>239?4:c>223?3:c>191?2:1;if(o+h<=r)switch(h){case 1:c<128&&(u=c);break;case 2:128==(192&(i=e[o+1]))&&(l=(31&c)<<6|63&i)>127&&(u=l);break;case 3:i=e[o+1],a=e[o+2],128==(192&i)&&128==(192&a)&&(l=(15&c)<<12|(63&i)<<6|63&a)>2047&&(l<55296||l>57343)&&(u=l);break;case 4:i=e[o+1],a=e[o+2],s=e[o+3],128==(192&i)&&128==(192&a)&&128==(192&s)&&(l=(15&c)<<18|(63&i)<<12|(63&a)<<6|63&s)>65535&&l<1114112&&(u=l)}null===u?(u=65533,h=1):u>65535&&(u-=65536,n.push(u>>>10&1023|55296),u=56320|1023&u),n.push(u),o+=h}return function(e){var t=e.length;if(t<=x)return String.fromCharCode.apply(String,e);for(var r="",n=0;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=x));return r}(n)}l.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),l.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.byteOffset}}),l.poolSize=8192,l.from=function(e,t,r){return c(e,t,r)},Object.setPrototypeOf(l.prototype,Uint8Array.prototype),Object.setPrototypeOf(l,Uint8Array),l.alloc=function(e,t,r){return function(e,t,r){return u(e),e<=0?s(e):void 0!==t?"string"==typeof r?s(e).fill(t,r):s(e).fill(t):s(e)}(e,t,r)},l.allocUnsafe=function(e){return h(e)},l.allocUnsafeSlow=function(e){return h(e)},l.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==l.prototype},l.compare=function(e,t){if(z(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),z(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(e)||!l.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,o=0,i=Math.min(r,n);o<i;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:n<r?1:0},l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return l.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var n=l.allocUnsafe(t),o=0;for(r=0;r<e.length;++r){var i=e[r];if(z(i,Uint8Array))o+i.length>n.length?l.from(i).copy(n,o):Uint8Array.prototype.set.call(n,i,o);else{if(!l.isBuffer(i))throw new TypeError('"list" argument must be an Array of Buffers');i.copy(n,o)}o+=i.length}return n},l.byteLength=y,l.prototype._isBuffer=!0,l.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)d(this,t,t+1);return this},l.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)d(this,t,t+3),d(this,t+1,t+2);return this},l.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)d(this,t,t+7),d(this,t+1,t+6),d(this,t+2,t+5),d(this,t+3,t+4);return this},l.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?A(this,0,e):m.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(e){if(!l.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===l.compare(this,e)},l.prototype.inspect=function(){var e="",r=t.h2;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},i&&(l.prototype[i]=l.prototype.inspect),l.prototype.compare=function(e,t,r,n,o){if(z(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),t<0||r>e.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&t>=r)return 0;if(n>=o)return-1;if(t>=r)return 1;if(this===e)return 0;for(var i=(o>>>=0)-(n>>>=0),a=(r>>>=0)-(t>>>=0),s=Math.min(i,a),c=this.slice(n,o),u=e.slice(t,r),h=0;h<s;++h)if(c[h]!==u[h]){i=c[h],a=u[h];break}return i<a?-1:a<i?1:0},l.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},l.prototype.indexOf=function(e,t,r){return b(this,e,t,r,!0)},l.prototype.lastIndexOf=function(e,t,r){return b(this,e,t,r,!1)},l.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var o=this.length-t;if((void 0===r||r>o)&&(r=o),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return w(this,e,t,r);case"utf8":case"utf-8":return k(this,e,t,r);case"ascii":case"latin1":case"binary":return E(this,e,t,r);case"base64":return _(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,e,t,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var x=4096;function S(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(127&e[o]);return n}function N(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(e[o]);return n}function U(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=t;i<r;++i)o+=V[e[i]];return o}function L(e,t,r){for(var n=e.slice(t,r),o="",i=0;i<n.length-1;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function T(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function I(e,t,r,n,o,i){if(!l.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<i)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function O(e,t,r,n,o,i){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function R(e,t,r,n,i){return t=+t,r>>>=0,i||O(e,0,r,4),o.write(e,t,r,n,23,4),r+4}function P(e,t,r,n,i){return t=+t,r>>>=0,i||O(e,0,r,8),o.write(e,t,r,n,52,8),r+8}l.prototype.slice=function(e,t){var r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,l.prototype),n},l.prototype.readUintLE=l.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||T(e,t,this.length);for(var n=this[e],o=1,i=0;++i<t&&(o*=256);)n+=this[e+i]*o;return n},l.prototype.readUintBE=l.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||T(e,t,this.length);for(var n=this[e+--t],o=1;t>0&&(o*=256);)n+=this[e+--t]*o;return n},l.prototype.readUint8=l.prototype.readUInt8=function(e,t){return e>>>=0,t||T(e,1,this.length),this[e]},l.prototype.readUint16LE=l.prototype.readUInt16LE=function(e,t){return e>>>=0,t||T(e,2,this.length),this[e]|this[e+1]<<8},l.prototype.readUint16BE=l.prototype.readUInt16BE=function(e,t){return e>>>=0,t||T(e,2,this.length),this[e]<<8|this[e+1]},l.prototype.readUint32LE=l.prototype.readUInt32LE=function(e,t){return e>>>=0,t||T(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},l.prototype.readUint32BE=l.prototype.readUInt32BE=function(e,t){return e>>>=0,t||T(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},l.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||T(e,t,this.length);for(var n=this[e],o=1,i=0;++i<t&&(o*=256);)n+=this[e+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*t)),n},l.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||T(e,t,this.length);for(var n=t,o=1,i=this[e+--n];n>0&&(o*=256);)i+=this[e+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*t)),i},l.prototype.readInt8=function(e,t){return e>>>=0,t||T(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},l.prototype.readInt16LE=function(e,t){e>>>=0,t||T(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},l.prototype.readInt16BE=function(e,t){e>>>=0,t||T(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},l.prototype.readInt32LE=function(e,t){return e>>>=0,t||T(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},l.prototype.readInt32BE=function(e,t){return e>>>=0,t||T(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},l.prototype.readFloatLE=function(e,t){return e>>>=0,t||T(e,4,this.length),o.read(this,e,!0,23,4)},l.prototype.readFloatBE=function(e,t){return e>>>=0,t||T(e,4,this.length),o.read(this,e,!1,23,4)},l.prototype.readDoubleLE=function(e,t){return e>>>=0,t||T(e,8,this.length),o.read(this,e,!0,52,8)},l.prototype.readDoubleBE=function(e,t){return e>>>=0,t||T(e,8,this.length),o.read(this,e,!1,52,8)},l.prototype.writeUintLE=l.prototype.writeUIntLE=function(e,t,r,n){e=+e,t>>>=0,r>>>=0,n||I(this,e,t,r,Math.pow(2,8*r)-1,0);var o=1,i=0;for(this[t]=255&e;++i<r&&(o*=256);)this[t+i]=e/o&255;return t+r},l.prototype.writeUintBE=l.prototype.writeUIntBE=function(e,t,r,n){e=+e,t>>>=0,r>>>=0,n||I(this,e,t,r,Math.pow(2,8*r)-1,0);var o=r-1,i=1;for(this[t+o]=255&e;--o>=0&&(i*=256);)this[t+o]=e/i&255;return t+r},l.prototype.writeUint8=l.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,1,255,0),this[t]=255&e,t+1},l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var o=Math.pow(2,8*r-1);I(this,e,t,r,o-1,-o)}var i=0,a=1,s=0;for(this[t]=255&e;++i<r&&(a*=256);)e<0&&0===s&&0!==this[t+i-1]&&(s=1),this[t+i]=(e/a>>0)-s&255;return t+r},l.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var o=Math.pow(2,8*r-1);I(this,e,t,r,o-1,-o)}var i=r-1,a=1,s=0;for(this[t+i]=255&e;--i>=0&&(a*=256);)e<0&&0===s&&0!==this[t+i+1]&&(s=1),this[t+i]=(e/a>>0)-s&255;return t+r},l.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},l.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},l.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeFloatLE=function(e,t,r){return R(this,e,t,!0,r)},l.prototype.writeFloatBE=function(e,t,r){return R(this,e,t,!1,r)},l.prototype.writeDoubleLE=function(e,t,r){return P(this,e,t,!0,r)},l.prototype.writeDoubleBE=function(e,t,r){return P(this,e,t,!1,r)},l.prototype.copy=function(e,t,r,n){if(!l.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var o=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),o},l.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!l.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===e.length){var o=e.charCodeAt(0);("utf8"===n&&o<128||"latin1"===n)&&(e=o)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;var i;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{var a=l.isBuffer(e)?e:l.from(e,n),s=a.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=a[i%s]}return this};var M=/[^+/0-9A-Za-z-_]/g;function F(e,t){var r;t=t||1/0;for(var n=e.length,o=null,i=[],a=0;a<n;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!o){if(r>56319){(t-=3)>-1&&i.push(239,191,189);continue}if(a+1===n){(t-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(t-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(t-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function j(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(M,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function W(e,t,r,n){for(var o=0;o<n&&!(o+r>=t.length||o>=e.length);++o)t[o+r]=e[o];return o}function z(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function D(e){return e!=e}var V=function(){for(var e="0123456789abcdef",t=new Array(256),r=0;r<16;++r)for(var n=16*r,o=0;o<16;++o)t[n+o]=e[r]+e[o];return t}()},4184:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},645:(e,t)=>{t.read=function(e,t,r,n,o){var i,a,s=8*o-n-1,l=(1<<s)-1,c=l>>1,u=-7,h=r?o-1:0,f=r?-1:1,p=e[t+h];for(h+=f,i=p&(1<<-u)-1,p>>=-u,u+=s;u>0;i=256*i+e[t+h],h+=f,u-=8);for(a=i&(1<<-u)-1,i>>=-u,u+=n;u>0;a=256*a+e[t+h],h+=f,u-=8);if(0===i)i=1-c;else{if(i===l)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,n),i-=c}return(p?-1:1)*a*Math.pow(2,i-n)},t.write=function(e,t,r,n,o,i){var a,s,l,c=8*i-o-1,u=(1<<c)-1,h=u>>1,f=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,g=n?1:-1,y=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=u):(a=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-a))<1&&(a--,l*=2),(t+=a+h>=1?f/l:f*Math.pow(2,1-h))*l>=2&&(a++,l/=2),a+h>=u?(s=0,a=u):a+h>=1?(s=(t*l-1)*Math.pow(2,o),a+=h):(s=t*Math.pow(2,h-1)*Math.pow(2,o),a=0));o>=8;e[r+p]=255&s,p+=g,s/=256,o-=8);for(a=a<<o|s,c+=o;c>0;e[r+p]=255&a,p+=g,a/=256,c-=8);e[r+p-g]|=128*y}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r(1340)})();