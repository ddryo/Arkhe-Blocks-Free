(()=>{var e={6478:(e,t,l)=>{"use strict";const a=window.wp.element,n=window.wp.i18n,r=window.wp.data,o=window.wp.blocks,c=window.wp.blockEditor,s=window.wp.components,m="function"==typeof c.useInnerBlocksProps?c.useInnerBlocksProps:c.__experimentalUseInnerBlocksProps,i=JSON.parse('{"u2":"arkhe-blocks/columns"}'),u=(0,a.createElement)("svg",{viewBox:"0 0 56 56"},(0,a.createElement)("path",{d:"M3.5,8C3.2,8,3,8.2,3,8.5v39C3,47.8,3.2,48,3.5,48h49c0.3,0,0.5-0.2,0.5-0.5v-39C53,8.2,52.8,8,52.5,8H3.5z M21.5,10h13 c0.3,0,0.5,0.2,0.5,0.5v17c0,0.3-0.2,0.5-0.5,0.5h-13c-0.3,0-0.5-0.2-0.5-0.5v-17C21,10.2,21.2,10,21.5,10z M5.5,10h13 c0.3,0,0.5,0.2,0.5,0.5v17c0,0.3-0.2,0.5-0.5,0.5h-13C5.2,28,5,27.8,5,27.5v-17C5,10.2,5.2,10,5.5,10z M26.5,46h-21 C5.2,46,5,45.8,5,45.5v-15C5,30.2,5.2,30,5.5,30h21c0.3,0,0.5,0.2,0.5,0.5v15C27,45.8,26.8,46,26.5,46z M50.5,46h-21 c-0.3,0-0.5-0.2-0.5-0.5v-15c0-0.3,0.2-0.5,0.5-0.5h21c0.3,0,0.5,0.2,0.5,0.5v15C51,45.8,50.8,46,50.5,46z M37,27.5v-17 c0-0.3,0.2-0.5,0.5-0.5h13c0.3,0,0.5,0.2,0.5,0.5v17c0,0.3-0.2,0.5-0.5,0.5h-13C37.2,28,37,27.8,37,27.5z"})),b={name:"arkhe-blocks/column",innerBlocks:[{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}}]},p={innerBlocks:[b,b]};function d(e){return e?Math.floor(1e4/e)/100+"%":null}const k="ark-block-columns",h=[{supports:{anchor:!0,className:!1,align:["wide","full"]},attributes:{vAlign:{type:"string",default:""},columnCount:{type:"object"},columnWidth:{type:"object"},gap:{type:"object"},isScrollable:{type:"boolean",default:!1}},save:e=>{let{attributes:t}=e;const{vAlign:l,columnCount:n,columnWidth:r,gap:o,isScrollable:s}=t;let m={};m=s?{"--arkb-clmn-w--pc":r?.pc,"--arkb-clmn-w--tab":r?.tab,"--arkb-clmn-w--mb":r?.mobile}:{"--arkb-clmn-w--pc":d(n?.pc),"--arkb-clmn-w--tab":d(n?.tab),"--arkb-clmn-w--mb":d(n?.mobile)};const i=c.useBlockProps.save({className:k,style:{...m,"--arkb-gap--x":o?.x,"--arkb-gap--y":o?.y},"data-valign":l||null,"data-scrollable":s?"1":null});return(0,a.createElement)("div",i,(0,a.createElement)("div",{className:`${k}__inner`},(0,a.createElement)(c.InnerBlocks.Content,null)))}},{supports:{anchor:!0,className:!1,align:["wide","full"]},attributes:{vAlign:{type:"string",default:""},colPC:{type:"string",default:"2"},colTab:{type:"string",default:"2"},colMobile:{type:"string",default:"1"},margin:{type:"object",default:{x:"0.75rem",bottom:"1.5rem"}}},migrate:e=>{const t={...e};if(t.columnCount={pc:parseInt(e.colPC||2),tab:parseInt(e.colTab||2),mobile:parseInt(e.colMobile||1)},!e.margin)return t;const l=e.margin.x,a=e.margin.bottom,{num:n,unit:r}=(e=>{if(!e)return{num:0,unit:"rem"};const t=e.toString(),l=t.replace(/[^0-9\.]/g,""),a=t.replace(/[0-9\.]/g,"");return{num:parseFloat(l),unit:a}})(l),o=`${2*n}${r}`;return t.gap={x:o,y:a},t},save:e=>{let{attributes:t}=e;const{vAlign:l,colPC:n,colTab:r,colMobile:o,margin:s}=t,m=c.useBlockProps.save({className:`${k} arkb-columns`,style:{"--arkb-fb":"1"!==o?d(o):null,"--arkb-fb_tab":"2"!==r?d(r):null,"--arkb-fb_pc":"2"!==n?d(n):null,"--arkb-clmn-mrgn--x":"0.75rem"!==s.x?s.x:null,"--arkb-clmn-mrgn--bttm":"1.5rem"!==s.bottom?s.bottom:null},"data-valign":l||null});return(0,a.createElement)("div",m,(0,a.createElement)(c.InnerBlocks.Content,null))}},{supports:{anchor:!0,className:!1,align:["wide","full"]},attributes:{vAlign:{type:"string",default:""},colPC:{type:"string",source:"attribute",selector:".arkb-columns",attribute:"data-col-pc",default:"2"},colTab:{type:"string",source:"attribute",selector:".arkb-columns",attribute:"data-col-tab",default:"2"},colMobile:{type:"string",source:"attribute",selector:".arkb-columns",attribute:"data-col",default:"1"}},migrate:e=>({...e,margin:{x:"0.75rem",bottom:"1.5rem"}}),save:e=>{let{attributes:t}=e;const l={col1:100,col2:50,col3:33.33,col4:25,col5:20,col6:16.66},{vAlign:n,colPC:r,colTab:o,colMobile:s}=t,m={"--arkb-fb":l[`col${s}`]+"%","--arkb-fb_tab":l[`col${o}`]+"%","--arkb-fb_pc":l[`col${r}`]+"%"},i=c.useBlockProps.save({className:`${k} arkb-columns`,style:m,"data-valign":n||null,"data-col":s,"data-col-tab":o,"data-col-pc":r});return(0,a.createElement)("div",i,(0,a.createElement)(c.InnerBlocks.Content,null))}}];function v(e){let{style:t}=e;if(!a.Platform.isWeb)return null;const l=void 0!==c.BlockList.__unstableElementContext?(0,a.useContext)(c.BlockList.__unstableElementContext):document.querySelector("head");return t&&l?(0,a.createPortal)((0,a.createElement)((()=>(0,a.createElement)("style",null,t)),null),l):null}const g=(0,a.createElement)("svg",{viewBox:"0 0 40 40","aria-hidden":"true",width:"20",height:"20"},(0,a.createElement)("polygon",{points:"38.3,39 36.3,39 36.3,33.5 3.7,33.5 3.7,39 1.7,39 1.7,31.5 38.3,31.5 "}),(0,a.createElement)("g",null,(0,a.createElement)("rect",{x:"19",y:"6",width:"2",height:"18"}),(0,a.createElement)("polygon",{points:"20,1 12,7.1 28,7.1 \t"}),(0,a.createElement)("polygon",{points:"20,28.9 28,22.7 12,22.7 \t"})));function E(e,t){return-1!==e.split(" ").indexOf(t)}var f=l(1991),_=l.n(f);const x=[{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"0",title:"0",mbClass:"u-mt-0"},{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"0.5rem",title:"0.5rem",mbClass:"u-mt-5"},{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"1rem",title:"1rem",mbClass:"u-mt-10"},{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"1.5rem",title:"1.5rem",mbClass:"u-mt-15"},{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"2rem",title:"2rem",mbClass:"u-mt-20"},{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"3rem",title:"3rem",mbClass:"u-mt-30"},{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"4rem",title:"4rem",mbClass:"u-mt-40"},{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"6rem",title:"6rem",mbClass:"u-mt-60"},{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"8rem",title:"8rem",mbClass:"u-mt-80"}],C=x.map((e=>e.mbClass)),w=(0,a.memo)((e=>{let{className:t,setAttributes:l}=e;if(!window.arkbSettings?.isArkhe)return null;const r=t||"";let o;x.forEach((e=>{E(r,e.mbClass)&&(o=e)}));const c=o?o.mbClass:"";return(0,a.createElement)(s.ToolbarGroup,{className:"arkb-toolbar",isCollapsed:!0,icon:o?(0,a.createElement)("span",{className:"arkb-toolbtn--margin"},g,o.size):g,label:(0,n.__)("Margins on the block","arkhe-blocks"),controls:x.map((e=>{const{mbClass:t}=e,a=c===t;return{...e,isActive:a,onClick:()=>{const e=function(e,t,l){let a,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if(E(e,t))return e;if(l){const r={};l.map((e=>{r[e]=!1})),n&&(r[n]=!1),a=_()(e,r),t&&(a=_()(a,n,t))}else t&&(a=_()(e,t));return a}(r,a?"":t,C);l({className:e})}}}))})})),y=function(e){let{icon:t,size:l=24,...n}=e;return(0,a.cloneElement)(t,{width:l,height:l,...n})},N=window.wp.primitives,B=(0,a.createElement)(N.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(N.Path,{d:"M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z"})),S=(0,a.createElement)(N.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(N.Path,{d:"M17 4H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12zm-7.5-.5h4V16h-4v1.5z"})),P=(0,a.createElement)(N.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(N.Path,{d:"M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"})),z=window.wp.compose,H="function"==typeof c.UnitControl?c.UnitControl:c.__experimentalUnitControl;var A=l(4184),M=l.n(A);const V=["px","rem","em","%","vw","vh"],F=e=>{let{value:t,units:l,min:r,max:o,onChange:c,defaultUnit:m,steps:i,className:u="",widthRange:b=!1,onClear:p=null}=e;const d=l||V,{num:k,unit:h}=((e,t)=>{if(!e)return{num:"",unit:t||"px"};const l=e.toString(),a=l.replace(/[^0-9\.]/g,""),n=l.replace(/[0-9\.]/g,"");return{num:parseFloat(a),unit:n}})(t,m),v=(0,z.useInstanceId)(H);let g,E="0.1";return i&&i[h]?E=i[h]:"px"===h?E="1":"rem"!==h&&"em"!==h||(E="0.05"),null!==o&&"object"==typeof o?void 0!==o[h]?g=o[h]:void 0!==o.other&&(g=o.other):void 0!==o&&(g=o),(0,a.createElement)("div",{className:M()("arkb-unitNumber",u,{"has-clear":!!p})},(0,a.createElement)(H,{id:v,value:t||m||"px",min:r||0,max:g||void 0,step:E,units:d.map((e=>({label:e,value:e}))),onBlur:null,onChange:e=>{c(e)}}),b&&(0,a.createElement)(s.RangeControl,{value:k,onChange:e=>{c(`${e}${h}`)},initialPosition:k,withInputField:!1,step:E,min:r||0,max:g||void 0}),p&&(0,a.createElement)(s.Button,{isSmall:!0,isSecondary:!0,text:(0,n.__)("Clear"),onClick:()=>{p()}}))},I={pc:void 0,tab:void 0,mobile:void 0},T=(0,a.memo)((e=>{let{columnWidth:t,setAttributes:l,defaultUnit:n="",defaultWidth:r,isLinked:o}=e;const c=r||I,m=(e,a)=>{l(o?{columnWidth:{pc:a,tab:a,mobile:a}}:{columnWidth:{...t,[e]:a}})},i=t?.pc||"",u=t?.tab||"",b=t?.mobile||"";return(0,a.createElement)("div",{className:"arkb-columnWidthControl"},(0,a.createElement)(s.Flex,null,(0,a.createElement)(s.FlexItem,null,(0,a.createElement)(y,{icon:B})),(0,a.createElement)(s.FlexBlock,null,(0,a.createElement)(F,{value:i||n,max:{px:9999,other:100},units:["em","rem","px","vw","%"],steps:{em:.25,rem:.25},onChange:e=>{m("pc",e)},onClear:()=>{m("pc",c?.pc||void 0)}}))),(0,a.createElement)(s.Flex,null,(0,a.createElement)(s.FlexItem,null,(0,a.createElement)(y,{icon:S})),(0,a.createElement)(s.FlexBlock,null,(0,a.createElement)(F,{value:u||n,max:{px:9999,other:100},units:["em","rem","px","vw","%"],steps:{em:.25,rem:.25},onChange:e=>{m("tab",e)},onClear:()=>{m("tab",c?.tab||void 0)}}))),(0,a.createElement)(s.Flex,null,(0,a.createElement)(s.FlexItem,null,(0,a.createElement)(y,{icon:P})),(0,a.createElement)(s.FlexBlock,null,(0,a.createElement)(F,{value:b||n,max:{px:9999,other:100},units:["em","rem","px","vw","%"],steps:{em:.25,rem:.25},onChange:e=>{m("mobile",e)},onClear:()=>{m("mobile",c?.mobile||void 0)}}))))})),$={pc:2,tab:2,mobile:1},O=(0,a.memo)((e=>{let{columnCount:t,defaultCount:l,setAttributes:n,min:r=1,max:o=8}=e;const c=l||$,m=(e,l)=>{const a={...t};void 0===l||c[e]===l?delete a[e]:a[e]=l,Object.keys(a).length?n({columnCount:a}):n({columnCount:void 0})};return(0,a.createElement)("div",{className:"arkb-columnCountControl"},(0,a.createElement)(s.Flex,null,(0,a.createElement)(s.FlexItem,null,(0,a.createElement)(y,{icon:B})),(0,a.createElement)(s.FlexBlock,null,(0,a.createElement)(s.RangeControl,{value:t?.pc||c.pc,onChange:e=>{m("pc",e)},min:r,max:o}))),(0,a.createElement)(s.Flex,null,(0,a.createElement)(s.FlexItem,null,(0,a.createElement)(y,{icon:S})),(0,a.createElement)(s.FlexBlock,null,(0,a.createElement)(s.RangeControl,{value:t?.tab||c.tab,onChange:e=>{m("tab",e)},min:r,max:o}))),(0,a.createElement)(s.Flex,null,(0,a.createElement)(s.FlexItem,null,(0,a.createElement)(y,{icon:P})),(0,a.createElement)(s.FlexBlock,null,(0,a.createElement)(s.RangeControl,{value:t?.mobile||c.mobile,onChange:e=>{m("mobile",e)},min:r,max:o}))))})),j=!!window.arkbSettings?.pfkey||!1,W=(0,a.createElement)("p",{className:"arkb-proOnlyArea__message"},(0,n.__)("This setting is only available in the PRO version.","arkhe-blocks"),(0,a.createElement)("a",{className:"arkb-proOnlyArea__link",href:"https://arkhe-theme.com/ja/product/arkhe-blocks-pro/",target:"_blank",rel:"noreferrer noopener"},"Go Pro")),L=(0,a.createElement)("p",{className:"arkb-proOnlyArea__message"},(0,n.__)("This area can only be edited in the PRO version.","arkhe-blocks"),(0,a.createElement)("a",{className:"arkb-proOnlyArea__link",href:"https://arkhe-theme.com/ja/product/arkhe-blocks-pro/",target:"_blank",rel:"noreferrer noopener"},"Go Pro")),G=e=>{let{type:t="",children:l}=e;return(0,a.createElement)(a.Fragment,null,j?l:(0,a.createElement)("div",{className:"arkb-proOnlyArea"},"edit"===t?L:W,(0,a.createElement)("div",{className:"arkb-proOnlyArea__preview"},l)))},R=e=>{let{className:t,controlPC:l,controlSP:n,controlTab:r,isHideTab:o}=e;const c=[{name:"pc",title:(0,a.createElement)(a.Fragment,null,(0,a.createElement)(y,{icon:B}),(0,a.createElement)("span",null,"PC")),className:"__pc"}];r&&c.push({name:"tab",title:(0,a.createElement)(a.Fragment,null,(0,a.createElement)(y,{icon:S}),(0,a.createElement)("span",null,"Tab")),className:"__tab"}),c.push({name:"sp",title:(0,a.createElement)(a.Fragment,null,(0,a.createElement)(y,{icon:P}),(0,a.createElement)("span",null,"SP")),className:"__sp"});let m="arkb-tabPanel -device";return t&&(m+=` ${t}`),o&&(m+=" is-hide"),(0,a.createElement)(s.TabPanel,{className:m,activeClass:"is-active",tabs:c,initialTabName:"pc"},(e=>"pc"===e.name?l:"tab"===e.name?r:"sp"===e.name?n:void 0))},U=(0,a.createElement)("svg",{x:"0px",y:"0px",viewBox:"0 0 56 56"},(0,a.createElement)("path",{d:"M53,44H41V12h12V44z M43,42h8V14h-8V42z"}),(0,a.createElement)("path",{d:"M15,44H3V12h12V44z M5,42h8V14H5V42z"}),(0,a.createElement)("polygon",{points:"39,28 35,24 35,27 21,27 21,24 17,28 21,32 21,29 35,29 35,32 "})),q=(0,a.createElement)("svg",{x:"0px",y:"0px",viewBox:"0 0 56 56"},(0,a.createElement)("path",{d:"M44,3v12H12V3H44z M42,13V5H14v8H42z"}),(0,a.createElement)("path",{d:"M44,41v12H12V41H44z M42,51v-8H14v8H42z"}),(0,a.createElement)("polygon",{points:"28,17 24,21 27,21 27,35 24,35 28,39 32,35 29,35 29,21 32,21 "})),D=(0,a.memo)((e=>{let{name:t,value:l,setAttributes:r,help:o,successionHelp:c,defaultGap:m={}}=e,i=o||"";c&&(i=(0,n.sprintf)((0,n.__)("If empty, %s is taken over","arkhe-blocks"),c));const u=(e,a)=>{const n=e||void 0,o={...l};void 0===n?delete o[a]:o[a]=n,Object.keys(o).length?r({[t]:o}):r({[t]:void 0})};return(0,a.createElement)("div",{className:"arkb-gapControl"},(0,a.createElement)(s.Flex,{className:"arkb-gapControl__row"},(0,a.createElement)(s.FlexItem,{className:"__label"},(0,a.createElement)(s.Icon,{icon:U,size:"1.5em"}),(0,n._x)("Horizontal","margin","arkhe-blocks")),(0,a.createElement)(s.FlexBlock,null,(0,a.createElement)(F,{value:l?.x||m?.x||"rem",steps:{em:.25,rem:.25},onChange:e=>{u(e,"x")},onClear:()=>{u(void 0,"x")}}))),(0,a.createElement)(s.Flex,{className:"arkb-gapControl__row"},(0,a.createElement)(s.FlexItem,{className:"__label"},(0,a.createElement)(s.Icon,{icon:q,size:"1.5em"}),(0,n._x)("Vertical","margin","arkhe-blocks")),(0,a.createElement)(s.FlexBlock,null,(0,a.createElement)(F,{value:l?.y||m?.y||"rem",steps:{em:.25,rem:.25},onChange:e=>{u(e,"y")},onClear:()=>{u(void 0,"y")}}))),i&&(0,a.createElement)("p",{className:"arkb-helpText u-mt-5"},i))}));function J(){return J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},J.apply(this,arguments)}const K=(0,a.createElement)(N.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(N.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),Q=(0,a.createElement)(N.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(N.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"})),X=e=>{let{isLinked:t,...l}=e;const r=t?(0,n.__)("Unlink Sides"):(0,n.__)("Link Sides");return(0,a.createElement)(s.Tooltip,{text:r},(0,a.createElement)("span",{className:"__link"},(0,a.createElement)(s.Button,J({},l,{className:"component-box-control__linked-button",isPrimary:t,isSecondary:!t,isSmall:!0,icon:t?K:Q,iconSize:16,"aria-label":r}))))},Y=(0,a.memo)((e=>{let{name:t,value:l,setAttributes:r,help:o,successionHelp:c,nullValue:m,resetValue:i,defaultUnit:u="rem",defaultOpen:b=!1,clearable:p=!1}=e;const[d,k]=(0,a.useState)(!b&&(e=>{const t=[e?.top,e?.right,e?.bottom,e?.left];return t.every((e=>e===t[0]))})(l));let h=o||"";c&&d?h=(0,n.sprintf)((0,n.__)("If empty, %s is taken over","arkhe-blocks"),c):c&&!d&&(h=(0,n.sprintf)((0,n.__)("If all are empty, %s will be taken over","arkhe-blocks"),c));const v=(e,a)=>{const n=e||m||void 0;if(d)r(void 0===(o=n)?{[t]:void 0}:{[t]:{...l,top:o,left:o,right:o,bottom:o}});else{const e={...l};void 0===n?delete e[a]:e[a]=n,Object.keys(e).length?r({[t]:e}):r({[t]:void 0})}var o};return(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",{className:"arkb-ctrl--paddings"},(0,a.createElement)("div",{className:"__inner","data-is-linked":d},(0,a.createElement)(X,{onClick:()=>{k(!d)},isLinked:d}),(0,a.createElement)("div",{className:"__center"},(0,a.createElement)("span",{className:"__box--top"}),(0,a.createElement)("span",{className:"__box--left"}),(0,a.createElement)("span",{className:"__box--right"}),(0,a.createElement)("span",{className:"__box--bottom"})),(0,a.createElement)(F,{className:"__top",value:l?.top||u,onChange:e=>{v(e,"top")}}),(0,a.createElement)(F,{className:"__bottom",value:l?.bottom||u,onChange:e=>{v(e,"bottom")}}),(0,a.createElement)(F,{className:"__left",value:l?.left||u,onChange:e=>{v(e,"left")}}),(0,a.createElement)(F,{className:"__right",value:l?.right||u,onChange:e=>{v(e,"right")}})),h&&(0,a.createElement)("p",{className:"arkb-helpText u-mt-5"},h),p&&(0,a.createElement)(s.Button,{className:"__clear",isSmall:!0,isSecondary:!0,text:(0,n.__)("Clear"),onClick:()=>{r({[t]:void 0})}}),i&&(0,a.createElement)(s.Button,{className:"__clear",isSmall:!0,isSecondary:!0,text:(0,n.__)("Reset","arkhe-blocks"),onClick:()=>{r({[t]:i})}})))}));function Z(e,t){return`${e?.top||t} ${e?.right||t} ${e?.bottom||t} ${e?.left||t}`}function ee(e){let t="";return Object.keys(e).forEach((l=>{const a=e[l];""!==a&&(t+=`${l}:${a};`)})),t}const te=!!window.arkbSettings?.pfkey||!1,le={pc:"400px",tab:"400px",mobile:"300px"},ae="ark-block-columns";(0,o.registerBlockType)(i.u2,{title:(0,n.__)("Rich columns","arkhe-blocks"),icon:u,styles:[{name:"default",label:(0,n.__)("Default","arkhe-blocks"),isDefault:!0},{name:"shadow",label:(0,n._x)("Shadow","style","arkhe-blocks")}],example:p,transforms:{from:[{type:"block",blocks:["core/columns"],transform:(e,t)=>{const l=[];return t.forEach((e=>{l.push((0,o.createBlock)("arkhe-blocks/column",{},e.innerBlocks))})),(0,o.createBlock)(i.u2,{},l)}}]},edit:e=>{let{clientId:t,attributes:l,setAttributes:o,isSelected:i}=e;const{vAlign:u,columnCount:b,columnWidth:p,gap:k,gapTab:h,gapMB:g,padding:E,paddingTab:f,paddingMB:_,isScrollable:x}=l;let C={};C=x?{"--arkb-clmn-w--pc":p?.pc,"--arkb-clmn-w--tab":p?.tab,"--arkb-clmn-w--mb":p?.mobile}:{"--arkb-clmn-w--pc":d(b?.pc),"--arkb-clmn-w--tab":d(b?.tab),"--arkb-clmn-w--mb":d(b?.mobile)};const y=(0,r.useSelect)((e=>e("core/block-editor").hasSelectedInnerBlock(t,!1)),[t]),N=(0,c.useBlockProps)({className:M()(ae,"ark-has-guide"),style:{...C},"data-valign":u||null,"data-scrollable":x?"1":null}),B=m({className:"ark-block-columns__inner ark-has-appender"},{allowedBlocks:["arkhe-blocks/column"],template:[["arkhe-blocks/column"],["arkhe-blocks/column"]],templateLock:!1,orientation:"horizontal",renderAppender:!(!i&&!y)&&c.InnerBlocks.ButtonBlockAppender}),S=function(e){let{gap:t,gapTab:l,gapMB:a,padding:n,paddingTab:r,paddingMB:o,clientId:c}=e;return function(e,t){let l="",a="";return t?.all&&(a=ee(t.all),a&&(l+=`${e}{${a}}`)),t?.pc&&(a=ee(t.pc),a&&(l+=`\n\t\t\t@media (min-width: 1000px) {\n\t\t\t\t${e}{${a}}\n\t\t\t}`)),t?.sp&&(a=ee(t.sp),a&&(l+=`\n\t\t\t@media not all and (min-width: 1000px) {\n\t\t\t\t${e}{${a}}\n\t\t\t}`)),t?.tab&&(a=ee(t.tab),a&&(l+=`\n\t\t\t@media (min-width: 600px) {\n\t\t\t\t${e}{${a}}\n\t\t\t}`)),t?.mb&&(a=ee(t.mb),a&&(l+=`\n\t\t\t@media not all and (min-width: 600px) {\n\t\t\t\t${e}{${a}}\n\t\t\t}`)),l}(`#block-${c}`,{all:{"--arkb-gap--x":t?.x||"","--arkb-gap--y":t?.y||"","--arkb-padding":n?Z(n,"var(--arkb-padding--default)"):""},sp:{"--arkb-gap--x":l?.x||"","--arkb-gap--y":l?.y||"","--arkb-padding":r?Z(r,"var(--arkb-padding--default)"):""},mb:{"--arkb-gap--x":a?.x||"","--arkb-gap--y":a?.y||"","--arkb-padding":o?Z(o,"var(--arkb-padding--default)"):""}})}({gap:k,gapTab:h,gapMB:g,padding:E,paddingTab:f,paddingMB:_,clientId:t});return(0,a.createElement)(a.Fragment,null,S&&(0,a.createElement)(v,{style:S}),(0,a.createElement)(c.BlockControls,{group:"block"},(0,a.createElement)(c.BlockVerticalAlignmentToolbar,{onChange:e=>{o({vAlign:e})},value:u})),(0,a.createElement)(c.BlockControls,null,(0,a.createElement)(w,{className:l.className,setAttributes:o})),(0,a.createElement)(c.InspectorControls,null,(0,a.createElement)(s.PanelBody,{title:(0,n.__)("Settings","arkhe-blocks")},(0,a.createElement)(s.ToggleControl,{label:(0,n.__)("Scroll horizontally","arkhe-blocks"),checked:x,onChange:e=>{o(e?{isScrollable:!0,columnCount:void 0,columnWidth:le}:{isScrollable:!1,columnWidth:void 0})}}),x&&(0,a.createElement)(s.BaseControl,null,(0,a.createElement)(s.BaseControl.VisualLabel,null,(0,n.__)("Column Width","arkhe-blocks")),(0,a.createElement)(T,{columnWidth:p,defaultWidth:le,setAttributes:o})),!x&&(0,a.createElement)(s.BaseControl,null,(0,a.createElement)(s.BaseControl.VisualLabel,null,(0,n.__)("Number of columns","arkhe-blocks")),(0,a.createElement)(O,{columnCount:b,setAttributes:o})),(0,a.createElement)(G,null,(0,a.createElement)(s.BaseControl,{className:"u-mb-25"},(0,a.createElement)(s.BaseControl.VisualLabel,null,(0,n.__)("Margin between columns","arkhe-blocks")),(0,a.createElement)(R,{className:"-gap -triple",controlPC:(0,a.createElement)(D,{value:k,name:"gap",setAttributes:te?o:null,defaultGap:{x:"1.5rem",y:"1.5rem"}}),controlTab:(0,a.createElement)(D,{value:h,name:"gapTab",setAttributes:te?o:null,successionHelp:(0,n.__)("PC setting","arkhe-blocks")}),controlSP:(0,a.createElement)(D,{value:g,name:"gapMB",setAttributes:te?o:null,successionHelp:(0,n.__)("Tablet setting","arkhe-blocks")})})),(0,a.createElement)(s.BaseControl,null,(0,a.createElement)(s.BaseControl.VisualLabel,null,(0,n.__)("Padding in cloumns","arkhe-blocks")),(0,a.createElement)(R,{className:"-padding -triple",controlPC:(0,a.createElement)(Y,{name:"padding",value:E,setAttributes:te?o:null,clearable:!0}),controlTab:(0,a.createElement)(Y,{name:"paddingTab",value:f,setAttributes:te?o:null,clearable:!0,successionHelp:(0,n.__)("PC setting","arkhe-blocks")}),controlSP:(0,a.createElement)(Y,{name:"paddingMB",value:_,setAttributes:te?o:null,clearable:!0,successionHelp:(0,n.__)("Tablet setting","arkhe-blocks")})}))))),(0,a.createElement)("div",N,x&&(0,a.createElement)("div",{className:"arkb-scrollHint"},(0,a.createElement)("span",{className:"arkb-scrollHint__text"},(0,n.__)("Scrollable","arkhe-blocks"),(0,a.createElement)("svg",{className:"arkb-scrollHint__svg",width:"1em",height:"1em",viewBox:"0 0 32 32",role:"img",focusable:"false"},(0,a.createElement)("path",{d:"M30.4 16.664l-4.528-4.528-1.128 1.136 3.392 3.392h-26.536v1.6h28.8v-1.6z"})))),(0,a.createElement)("div",B)))},save:e=>{let{attributes:t}=e;const{vAlign:l,isScrollable:n}=t,r=c.useBlockProps.save({className:ae,"data-valign":l||null,"data-scrollable":n?"1":null});return(0,a.createElement)("div",r,(0,a.createElement)("div",{className:"ark-block-columns__inner"},(0,a.createElement)(c.InnerBlocks.Content,null)))},deprecated:h})},1991:(e,t)=>{var l;!function(){"use strict";var a=function(){function e(){}function t(e,t){for(var l=t.length,a=0;a<l;++a)n(e,t[a])}e.prototype=Object.create(null);var l={}.hasOwnProperty,a=/\s+/;function n(e,n){if(n){var r=typeof n;"string"===r?function(e,t){for(var l=t.split(a),n=l.length,r=0;r<n;++r)e[l[r]]=!0}(e,n):Array.isArray(n)?t(e,n):"object"===r?function(e,t){if(t.toString===Object.prototype.toString)for(var a in t)l.call(t,a)&&(e[a]=!!t[a]);else e[t.toString()]=!0}(e,n):"number"===r&&function(e,t){e[t]=!0}(e,n)}}return function(){for(var l=arguments.length,a=Array(l),n=0;n<l;n++)a[n]=arguments[n];var r=new e;t(r,a);var o=[];for(var c in r)r[c]&&o.push(c);return o.join(" ")}}();e.exports?(a.default=a,e.exports=a):void 0===(l=function(){return a}.apply(t,[]))||(e.exports=l)}()},4184:(e,t)=>{var l;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var r=typeof l;if("string"===r||"number"===r)e.push(l);else if(Array.isArray(l)){if(l.length){var o=n.apply(null,l);o&&e.push(o)}}else if("object"===r)if(l.toString===Object.prototype.toString)for(var c in l)a.call(l,c)&&l[c]&&e.push(c);else e.push(l.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(t,[]))||(e.exports=l)}()}},t={};function l(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,l),r.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l(6478)})();