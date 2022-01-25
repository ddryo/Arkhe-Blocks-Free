!function(){var e={777:function(e,t,l){"use strict";var a=window.wp.element,n=window.wp.i18n,o=window.wp.blocks,r=window.wp.data,i=window.wp.blockEditor,c=window.wp.components,s=JSON.parse('{"u2":"arkhe-blocks/section"}');const m=(e,t)=>"line"===e?t?(0,a.createElement)("polygon",{points:"0,0 100,0 100,100"}):(0,a.createElement)("polygon",{points:"0,0 0,100 100,0"}):"circle"===e?t?(0,a.createElement)("path",{d:"M0,0c20.1,133.4,79.9,133.3,100,0H0z"}):(0,a.createElement)("g",null,(0,a.createElement)("path",{d:"M0,100V0h50C30,0,10,33.3,0,100z"}),(0,a.createElement)("path",{d:"M50,0h50v100C90,33.3,70,0,50,0z"})):"wave"===e?t?(0,a.createElement)("path",{d:"M0,50.3c0.1,0.1,0.1,0.4,0.2,0.6C6.3,75,12.6,100,25,100s18.7-25,24.8-49C56,26.5,62.4,1.3,75,1.3c12.5,0,18.9,24.9,25,49V0 L25,0L0,0L0,50.3z"}):(0,a.createElement)("path",{d:"M100,0H75H0v50.3c6.1-24.2,12.5-49,25-49c12.6,0,19,25.3,25.2,49.7c6.1,24,12.4,49,24.8,49s18.7-25,24.8-49.2 c0.1-0.1,0.1-0.4,0.2-0.6V0z"}):"zigzag"===e?t?(0,a.createElement)("path",{d:"M0,50.3L25,100c0,0,50-100.3,50-98.8l25,49V0H25H0V50.3z"}):(0,a.createElement)("path",{d:"M100,50.3L75,100c0,0-50-100.3-50-98.8l-25,49V0h75h25V50.3z"}):void 0,p=e=>{let{position:t,svgData:l}=e;if(0===l.height)return null;const n={};return l.color&&(n.fill=l.color),(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"none",className:`ark-block-section__svg -${t}`,"aria-hidden":"true",focusable:"false",style:n},m(l.type,l.isReverse))},d=e=>{let{position:t,type:l,height:n,isReverse:o,fillColor:r}=e;if(0===n)return null;const i={height:`${n}vw`};return r&&(i.fill=r),(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"none",className:`ark-block-section__svg -${t}`,"aria-hidden":"true",focusable:"false",style:i},m(l,o))},u=e=>(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"32",height:"24",preserveAspectRatio:"none","aria-hidden":"true",focusable:"false"},m(e,!1));var h=l(184),g=l.n(h);const b=e=>{let{attributes:t}=e;const{mediaId:l,mediaUrl:n,mediaWidth:o,mediaHeight:r,mediaIdSP:i,mediaUrlSP:c,mediaWidthSP:s,mediaHeightSP:m,mediaType:p,mediaTypeSP:d,focalPoint:u,focalPointSP:h,isRepeat:b}=t;if(b)return null;if(!n)return null;const v={};if(u){const e=(100*u.x).toFixed(),t=(100*u.y).toFixed();v.objectPosition=`${e}% ${t}%`}const k={};if(h){const e=(100*h.x).toFixed(),t=(100*h.y).toFixed();k.objectPosition=`${e}% ${t}%`}let y="ark-block-section__bg u-obf-cover";c&&(y=g()(y,"u-only-pc")),l&&(y=g()(y,`wp-image-${l}`));let f="ark-block-section__bg u-obf-cover u-only-sp";i&&(f=g()(f,`wp-image-${i}`));const E="video"===p?(0,a.createElement)("video",{autoPlay:!0,loop:!0,playsinline:!0,muted:!0,src:n,className:y,width:o||null,height:r||null,"data-for":"pc",style:v||null}):(0,a.createElement)("img",{src:n,className:y,alt:"",width:o||null,height:r||null,"data-for":"pc",style:v});let P=null;return c&&(P="video"===d?(0,a.createElement)("video",{autoPlay:!0,loop:!0,playsinline:!0,muted:!0,src:c,className:f,width:s||null,height:m||null,"data-for":"sp",style:k||null}):(0,a.createElement)("img",{src:c,className:f,alt:"",width:s||null,height:m||null,"data-for":"sp",style:k})),(0,a.createElement)(a.Fragment,null,E,P)},v={"top left":"is-position-top-left","top center":"is-position-top-center","top right":"is-position-top-right","center left":"is-position-center-left","center center":"is-position-center-center","center right":"is-position-center-right","bottom left":"is-position-bottom-left","bottom center":"is-position-bottom-center","bottom right":"is-position-bottom-right"},k=e=>{const{textColor:t,height:l,heightPC:a,heightSP:n,paddingPC:o,paddingSP:r,isRepeat:i,media:c,bgSize:s}=e,m={};t&&(m.color=t),"custom"===l&&(a&&(m["--arkb-section-minH"]=a),n&&(m["--arkb-section-minH--sp"]=n));const p=`${o.top} ${o.right} ${o.bottom} ${o.left}`,d=`${r.top} ${r.right} ${r.bottom} ${r.left}`;return"4rem 2rem 4rem 2em"!==p&&(m["--arkb-section-padding"]=p),"4rem 2rem 4rem 2em"!==d&&(m["--arkb-section-padding--sp"]=d),i&&c.url&&(m.backgroundImage=`url(${c.url})`,m.backgroundRepeat="repeat",s&&(m.backgroundSize=s)),m},y=e=>{let{bgColor:t,bgGradient:l,opacity:a}=e;const n={};return l?n.background=l:n.backgroundColor=t||"#f7f7f7",n.opacity=(.01*a).toFixed(2),n},f=e=>{const t=e.level||0;if(0===t)return{...e,height:0,isReverse:!1};const l=(.1*t).toFixed(1);return{...e,height:Math.abs(l),isReverse:0>t}},E=e=>{if(0===e)return{isReverse:!1,height:0};const t=(.1*e).toFixed(1);return{isReverse:0>e,height:Math.abs(t)}},P="ark-block-section",_={anchor:!0,className:!1,align:["wide","full"]};var C=[{supports:_,attributes:{className:{type:"string",default:""},anchor:{type:"string",default:""},align:{type:"string",default:"full"},bgColor:{type:"string"},bgGradient:{type:"string"},opacity:{type:"number",default:100},textColor:{type:"string",default:""},filter:{type:"string",default:"off"},media:{type:"object",default:{id:0,url:"",type:"",size:"full"}},mediaSP:{type:"object",default:{id:0,url:"",type:"",size:"full"}},focalPoint:{type:"object"},focalPointSP:{type:"object"},contentPosition:{type:"string",default:"center left"},innerSize:{type:"string",default:""},height:{type:"string",default:"content"},heightPC:{type:"string",default:"400px"},heightSP:{type:"string",default:"50vh"},paddingPC:{type:"object",default:{top:"4rem",left:"2rem",right:"2rem",bottom:"4rem"}},paddingSP:{type:"object",default:{top:"4rem",left:"4vw",right:"4vw",bottom:"4rem"}},isRepeat:{type:"boolean",default:!1},bgSize:{type:"string",default:""},svgTop:{type:"object",default:{type:"line",level:0,color:""}},svgBottom:{type:"object",default:{type:"line",level:0,color:""}}},save:()=>(0,a.createElement)(i.InnerBlocks.Content,null)},{supports:_,attributes:{align:{type:"string",default:"full"},bgColor:{type:"string"},bgGradient:{type:"string"},opacity:{type:"number",default:100},textColor:{type:"string",default:""},mediaId:{type:"number",default:0},mediaUrl:{type:"string",default:""},mediaWidth:{type:"string",source:"attribute",selector:'.ark-block-section__bg[data-for="pc"]',attribute:"width"},mediaHeight:{type:"string",source:"attribute",selector:'.ark-block-section__bg[data-for="pc"]',attribute:"height"},mediaIdSP:{type:"number",default:0},mediaUrlSP:{type:"string",source:"attribute",selector:'.ark-block-section__bg[data-for="sp"]',attribute:"src"},mediaWidthSP:{type:"string",source:"attribute",selector:'.ark-block-section__bg[data-for="sp"]',attribute:"width"},mediaHeightSP:{type:"string",source:"attribute",selector:'.ark-block-section__bg[data-for="sp"]',attribute:"height"},mediaType:{type:"string",default:""},mediaTypeSP:{type:"string",default:""},focalPoint:{type:"object"},focalPointSP:{type:"object"},contentPosition:{type:"string"},innerSize:{type:"string",default:""},heightPC:{type:"number"},heightSP:{type:"number"},heightUnitPC:{type:"string",default:"px"},heightUnitSP:{type:"string",default:"px"},isFullscreen:{type:"boolean",default:!1},padPC:{type:"number",default:4},padSP:{type:"number",default:4},padUnitPC:{type:"string",default:"rem"},padUnitSP:{type:"string",default:"rem"},isRepeat:{type:"boolean",default:!1},svgTypeTop:{type:"string",default:"line"},svgLevelTop:{type:"number",default:0},svgTypeBottom:{type:"string",default:"line"},svgLevelBottom:{type:"number",default:0},svgColorTop:{type:"string",default:""},svgColorBottom:{type:"string",default:""}},migrate:e=>{const t={id:e.mediaId,url:e.mediaUrl,type:e.mediaType,width:e.mediaWidth||0,height:e.mediaHeight||0},l={id:e.mediaIdSP,url:e.mediaUrlSP,type:e.mediaTypeSP,width:e.mediaWidthSP||0,height:e.mediaHeightSP||0};delete e.mediaId,delete e.mediaIdSP,delete e.mediaType,delete e.mediaTypeSP,delete e.mediaUrl,delete e.mediaUrlSP,delete e.mediaWidth,delete e.mediaHeight,delete e.mediaWidthSP,delete e.mediaHeightSP;let a="content",n="400px",o="50vh";(e.heightPC||e.heightSP)&&(a="custom",n=`${e.heightPC}${e.heightUnitPC}`,o=`${e.heightSP}${e.heightUnitSP}`),delete e.heightUnitPC,delete e.heightUnitSP;const r={top:"4rem",left:"2rem",right:"2rem",bottom:"4rem"},i={top:"4rem",left:"4vw",right:"4vw",bottom:"4rem"},c=`${e.padPC}${e.padUnitPC}`,s=`${e.padSP}${e.padUnitSP}`;r.top=c,r.bottom=c,i.top=s,i.bottom=s,delete e.padPC,delete e.padSP,delete e.padUnitPC,delete e.padUnitSP;const m={type:e.svgTypeTop,level:e.svgLevelTop,color:e.svgColorTop},p={type:e.svgTypeBottom,level:e.svgLevelBottom,color:e.svgColorBottom};delete e.svgTypeTop,delete e.svgLevelTop,delete e.svgColorTop,delete e.svgTypeBottom,delete e.svgLevelBottom,delete e.svgColorBottom;const d=e.contentPosition||"center left";return delete e.isFullscreen,{...e,media:t,mediaSP:l,height:a,heightPC:n,heightSP:o,paddingPC:r,paddingSP:i,contentPosition:d,svgTop:m,svgBottom:p}},save:e=>{let{attributes:t}=e;const{mediaUrl:l,innerSize:n,svgLevelTop:o,svgLevelBottom:r,svgTypeTop:c,svgTypeBottom:s,svgColorTop:m,svgColorBottom:p,contentPosition:u,isFullscreen:h}=t,k=(e=>{const{textColor:t,heightPC:l,heightSP:a,heightUnitPC:n,heightUnitSP:o,isFullscreen:r,padPC:i,padSP:c,padUnitPC:s,padUnitSP:m,isRepeat:p,mediaUrl:d}=e,u={};t&&(u.color=t),r?(u["--arkb-section-minH--pc"]="100vh",u["--arkb-section-minH--sp"]="100vh"):(l&&(u["--arkb-section-minH--pc"]=`${l}${n}`),a&&(u["--arkb-section-minH--sp"]=`${a}${o}`));const h=`${i}${s}`,g=`${c}${m}`;return"4rem"!==h&&(u["--arkb-section-pad--pc"]=h),"4rem"!==g&&(u["--arkb-section-pad--sp"]=g),p&&d&&(u.backgroundImage=`url(${d})`,u.backgroundRepeat="repeat"),u})(t),f=y(t),_=E(o),C=E(r);0!==o&&(k.paddingTop=`${_.height}vw`),0!==r&&(k.paddingBottom=`${C.height}vw`);const w=function(e,t){return e&&""!==e?v[e]:""}(u),S=g()(P,w,{"has-bg-img":!!l,"has-position":!!w}),x=i.useBlockProps.save({className:S,style:k||null,"data-inner":n||null,"data-fullscreen":h?"1":null});return(0,a.createElement)("div",x,(0,a.createElement)(b,{attributes:t}),(0,a.createElement)("div",{className:`${P}__color`,style:f}),(0,a.createElement)("div",{className:`${P}__inner ark-keep-mt`},(0,a.createElement)(i.InnerBlocks.Content,null)),0!==o&&(0,a.createElement)(d,{position:"top",type:c,height:_.height,isReverse:_.isReverse,fillColor:m}),0!==r&&(0,a.createElement)(d,{position:"bottom",type:s,height:C.height,isReverse:C.isReverse,fillColor:p}))}}],w={block:(0,a.createElement)("svg",{viewBox:"0 0 24 24"},(0,a.createElement)("path",{d:"M2,4v17l20-1V3L2,4z M10,17H4v-2h6V17z M14,13H4v-2h10V13z M20,13h-4v-2h4V13z M20,9H4V7h16V9z"})),fullInner:(0,a.createElement)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},(0,a.createElement)("rect",{x:"2",y:"3",width:"20",height:"1"}),(0,a.createElement)("rect",{x:"2",y:"20",width:"20",height:"1"}),(0,a.createElement)("rect",{x:"8",y:"6",width:"8",height:"12"}),(0,a.createElement)("g",null,(0,a.createElement)("polygon",{points:"22,12 19.5,9 19.5,10.8 17,10.8 17,13.2 19.5,13.2 19.5,15 \t"}),(0,a.createElement)("polygon",{points:"7,10.8 4.5,10.8 4.5,9 2,12 4.5,15 4.5,13.2 7,13.2 \t"}))),removePosition:(0,a.createElement)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},(0,a.createElement)("rect",{x:"17.5",y:"10.7",width:"2.5",height:"2.5"}),(0,a.createElement)("rect",{x:"4",y:"10.7",width:"2.5",height:"2.5"}),(0,a.createElement)("rect",{x:"10.7",y:"4",width:"2.5",height:"2.5"}),(0,a.createElement)("rect",{x:"4",y:"4",width:"2.5",height:"2.5"}),(0,a.createElement)("rect",{x:"10.7",y:"17.5",width:"2.5",height:"2.5"}),(0,a.createElement)("rect",{x:"17.5",y:"17.5",width:"2.5",height:"2.5"}),(0,a.createElement)("rect",{x:"-2.6",y:"11.4",transform:"matrix(0.7071 -0.7071 0.7071 0.7071 -4.9706 12)",width:"29.2",height:"1.2"}),(0,a.createElement)("polygon",{points:"18.1,4 17.5,4 17.5,4.6"}),(0,a.createElement)("polygon",{points:"19.4,6.5 20,6.5 20,5.9"}),(0,a.createElement)("polygon",{points:"11.3,10.7 10.7,10.7 10.7,11.3"}),(0,a.createElement)("polygon",{points:"12.7,13.3 13.3,13.3 13.3,12.7"}),(0,a.createElement)("polygon",{points:"4.6,17.5 4,17.5 4,18.1"}),(0,a.createElement)("polygon",{points:"5.9,20 6.5,20 6.5,19.4"}))},S=function(e){let{icon:t,size:l=24,...n}=e;return(0,a.cloneElement)(t,{width:l,height:l,...n})},x=window.wp.primitives,B=(0,a.createElement)(x.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(x.Path,{d:"M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z"})),N=(0,a.createElement)(x.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(x.Path,{d:"M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"})),z=(0,a.createElement)(x.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)(x.Path,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"})),H=(0,a.createElement)(x.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)(x.Path,{d:"M18.7 3H5.3C4 3 3 4 3 5.3v13.4C3 20 4 21 5.3 21h13.4c1.3 0 2.3-1 2.3-2.3V5.3C21 4 20 3 18.7 3zm.8 15.7c0 .4-.4.8-.8.8H5.3c-.4 0-.8-.4-.8-.8V5.3c0-.4.4-.8.8-.8h13.4c.4 0 .8.4.8.8v13.4zM10 15l5-3-5-3v6z"}));const T=e=>{const{className:t,controlPC:l,controlSP:n,isHideTab:o}=e,r=[{name:"pc",title:(0,a.createElement)(a.Fragment,null,(0,a.createElement)(S,{icon:B}),(0,a.createElement)("span",null,"PC")),className:"__pc"},{name:"sp",title:(0,a.createElement)(a.Fragment,null,(0,a.createElement)(S,{icon:N}),(0,a.createElement)("span",null,"SP")),className:"__sp"}];let i="arkb-tabPanel -device";return t&&(i+=` ${t}`),o&&(i+=" is-hide"),(0,a.createElement)(c.TabPanel,{className:i,activeClass:"is-active",tabs:r,initialTabName:"pc"},(e=>"pc"===e.name?l:"sp"===e.name?n:void 0))},$=e=>{const{media:t,mediaSP:l,focalPoint:o,focalPointSP:r,isRepeat:s,opacity:m,setAttributes:p}=e,d=t.url,u=l.url,h=()=>{p({media:{id:0,url:"",type:""},focalPoint:void 0,...l.url?{}:{opacity:100}})},g=()=>{p({mediaSP:{id:0,url:"",type:""},focalPointSP:void 0,...t.url?{}:{opacity:100}})};let b=null,v=null;s||"image"===t.type?(v=(0,a.createElement)("div",{className:"arkb-imgPreview -noimage"},(0,a.createElement)(S,{icon:z})),b=["image"]):"video"===t.type?(v=(0,a.createElement)("div",{className:"arkb-imgPreview -noimage"},(0,a.createElement)(S,{icon:H})),b=["video"]):(v=(0,a.createElement)("div",{className:"arkb-imgPreview -noimage"},(0,a.createElement)(S,{icon:z})," / ",(0,a.createElement)(S,{icon:H})),b=["image","video"]);const k=(0,a.createElement)(a.Fragment,null,d&&!s&&(0,a.createElement)(c.FocalPointPicker,{url:d,value:o,onChange:e=>{p({focalPoint:e})}}),!d&&v,(0,a.createElement)("div",{className:"arkb-btns--media"},(0,a.createElement)(i.MediaUploadCheck,null,(0,a.createElement)(i.MediaUpload,{value:t.id,onSelect:e=>{e?(e=>{p({media:{id:e.id,url:e.url,type:e.type,width:e.width,height:e.height},...100===m?{opacity:50}:{}}),l.url&&e.type!==l.type&&g()})(e):h()},allowedTypes:["image","video"],render:e=>{let{open:t}=e;return(0,a.createElement)(c.Button,{isPrimary:!0,onClick:t},d?(0,n.__)("Change media","arkhe-blocks"):(0,n.__)("Select media","arkhe-blocks"))}})),d&&(0,a.createElement)(c.Button,{isSecondary:!0,className:"__delete",onClick:()=>{h()}},(0,n.__)("Delete","arkhe-blocks")))),y=(0,a.createElement)(a.Fragment,null,u&&(0,a.createElement)(c.FocalPointPicker,{url:u,value:r,onChange:e=>{p({focalPointSP:e})}}),!u&&v,(0,a.createElement)("div",{className:"arkb-btns--media"},(0,a.createElement)(i.MediaUploadCheck,null,(0,a.createElement)(i.MediaUpload,{value:l.id,onSelect:e=>{e?(e=>{p({mediaSP:{id:e.id,url:e.url,type:e.type,width:e.width,height:e.height}})})(e):g()},allowedTypes:b,render:e=>{let{open:t}=e;return(0,a.createElement)(c.Button,{isPrimary:!0,onClick:t},u?(0,n.__)("Change media","arkhe-blocks"):(0,n.__)("Select media","arkhe-blocks"))}})),u&&(0,a.createElement)(c.Button,{isSecondary:!0,className:"__delete",onClick:()=>{g()}},(0,n.__)("Delete","arkhe-blocks"))));let f="-media";return d||(f+=" has-no-pcimg"),(0,a.createElement)(T,{className:f,controlPC:k,controlSP:y,isHideTab:s})};var V=window.wp.compose;const M=["px","rem","em","%","vw","vh"],F=e=>{const{value:t,units:l,onChange:n,idKey:o="",className:r=""}=e,c=l||M,{num:s,unit:m}=(e=>{if(!e)return{num:"",unit:"px"};const t=e.toString(),l=t.replace(/[^0-9\.]/g,""),a=t.replace(/[0-9\.]/g,"");return{num:parseFloat(l),unit:a}})(t),p=`${o}-${(0,V.useInstanceId)(i.__experimentalUnitControl)}`;return(0,a.createElement)("div",{className:g()("arkb-ctrl--unit",r)},(0,a.createElement)(i.__experimentalUnitControl,{id:p,min:0,onBlur:null,onChange:e=>{n(e)},onUnitChange:()=>{},step:"1",unit:m,units:c.map((e=>({label:e,value:e}))),value:s}))};function L(){return L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},L.apply(this,arguments)}var U=(0,a.createElement)(x.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(x.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),R=(0,a.createElement)(x.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(x.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"}));const I=e=>{let{isLinked:t,...l}=e;const o=t?(0,n.__)("Unlink Sides"):(0,n.__)("Link Sides");return(0,a.createElement)(c.Tooltip,{text:o},(0,a.createElement)("span",{className:"__link"},(0,a.createElement)(c.Button,L({},l,{className:"component-box-control__linked-button",isPrimary:t,isSecondary:!t,isSmall:!0,icon:t?U:R,iconSize:16,"aria-label":o}))))},A=e=>{let{name:t,value:l,setAttributes:n}=e;const[o,r]=(0,a.useState)(!1),i=e=>{n({[t]:{...l,top:e,left:e,right:e,bottom:e}})};return(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",{className:"arkb-ctrl--paddings"},(0,a.createElement)(I,{onClick:()=>{r(!o)},isLinked:o}),(0,a.createElement)("div",{className:"__center"},(0,a.createElement)("span",{className:"__icon"})),(0,a.createElement)(F,{className:"__top",value:l.top,onChange:e=>{o?i(e):n({[t]:{...l,top:e}})}}),(0,a.createElement)(F,{className:"__bottom",value:l.bottom,onChange:e=>{o?i(e):n({[t]:{...l,bottom:e}})}}),(0,a.createElement)(F,{className:"__left",value:l.left,onChange:e=>{o?i(e):n({[t]:{...l,left:e}})}}),(0,a.createElement)(F,{className:"__right",value:l.right,onChange:e=>{o?i(e):n({[t]:{...l,right:e}})}})))},j=[{name:(0,n.__)("White","arkhe-blocks"),color:"#fff"},{name:(0,n.__)("Black","arkhe-blocks"),color:"#000"}],O=["line","circle","wave","zigzag"];var G=e=>{let{attributes:t,setAttributes:l,isSelected:o}=e;const{media:r,mediaSP:s,focalPoint:m,focalPointSP:p,isRepeat:d,bgSize:h,opacity:g,bgColor:b,bgGradient:v,textColor:k,filter:y,height:f,heightPC:E,heightSP:P,paddingPC:_,paddingSP:C,tag:w,svgTop:x,svgBottom:z}=t,H=r.url,V=(0,a.useCallback)((e=>{l({bgColor:e})}),[b]),M=(0,a.useCallback)((e=>{l({bgGradient:e})}),[v]),L=(0,a.useMemo)((()=>0!==x.level),[o]),U=(0,a.useMemo)((()=>0!==z.level),[o]);return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(c.PanelBody,{title:(0,n.__)("Tag setting","arkhe-blocks")},(0,a.createElement)(c.SelectControl,{value:w,options:[{label:"<div>",value:"div"},{label:"<section>",value:"section"}],onChange:e=>{l({tag:e})}})),(0,a.createElement)(c.PanelBody,{title:(0,n.__)("Background media setting","arkhe-blocks")},d&&H&&(0,a.createElement)("div",{className:"arkb-imgPreview"},(0,a.createElement)("img",{src:H,alt:""})),(0,a.createElement)($,{media:r,mediaSP:s,focalPoint:m,focalPointSP:p,isRepeat:d,opacity:g,bgSize:h,setAttributes:l}),(0,a.createElement)(c.ToggleControl,{label:(0,n.__)("Apply a dot filter","arkhe-blocks"),checked:"dot"===y,onChange:e=>{l(e?{filter:"dot"}:{filter:"off"})},className:"arkb-ctrl--mt--s arkb-ctrl--mb--xs",help:window.arkbVars.isArkhe?null:(0,n.__)("This is only available when the theme is Arkhe.","arkhe-blocks")}),(0,a.createElement)(c.ToggleControl,{label:(0,n.__)("Repeat the background image","arkhe-blocks"),checked:d,onChange:e=>{l({isRepeat:e}),e&&l({focalPoint:void 0})},className:"arkb-ctrl--mb--xs"}),d&&(0,a.createElement)(c.Flex,{style:{margin:"0 0 16px"}},(0,a.createElement)(c.FlexItem,null,(0,n.__)("Background Size","arkhe-blocks")," : "),(0,a.createElement)(c.FlexBlock,null,(0,a.createElement)(F,{value:h,onChange:e=>{l({bgSize:e})}})))),(0,a.createElement)(c.PanelBody,{title:(0,n.__)("Height settings","arkhe-blocks")},(0,a.createElement)(c.SelectControl,{value:f,options:[{label:(0,n.__)("Fit to content","arkhe-blocks"),value:"content"},{label:(0,n.__)("Fit screen","arkhe-blocks"),value:"full"},{label:(0,n.__)("Specify by number","arkhe-blocks"),value:"custom"}],onChange:e=>{l({height:e})}}),(0,a.createElement)("div",{"data-ark-disabled":"custom"!==f||null,style:{marginTop:"16px"}},(0,a.createElement)(c.Flex,null,(0,a.createElement)(c.FlexItem,{style:{marginRight:"4px"}},(0,a.createElement)(S,{icon:B})),(0,a.createElement)(c.FlexItem,{style:{width:"2em"}},"PC"),(0,a.createElement)(c.FlexBlock,null,(0,a.createElement)(F,{value:E,onChange:e=>{l({heightPC:e})}}))),(0,a.createElement)(c.Flex,{style:{marginTop:"8px"}},(0,a.createElement)(c.FlexItem,{style:{marginRight:"4px"}},(0,a.createElement)(S,{icon:N})),(0,a.createElement)(c.FlexItem,{style:{width:"2em"}},"SP"),(0,a.createElement)(c.FlexBlock,null,(0,a.createElement)(F,{value:P,onChange:e=>{l({heightSP:e})}}))))),(0,a.createElement)(c.PanelBody,{title:(0,n.__)("Padding settings","arkhe-blocks")},(0,a.createElement)(T,{className:"-padding",controlPC:(0,a.createElement)(A,{name:"paddingPC",value:_,setAttributes:l}),controlSP:(0,a.createElement)(A,{name:"paddingSP",value:C,setAttributes:l})})),(0,a.createElement)(i.__experimentalPanelColorGradientSettings,{title:(0,n.__)("Color settings","arkhe-blocks"),initialOpen:!0,settings:[{colorValue:b,gradientValue:v,onColorChange:V,onGradientChange:M,label:H?(0,n.__)("Overlay color","arkhe-blocks"):(0,n.__)("Background color","arkhe-blocks")}]},(0,a.createElement)(c.RangeControl,{label:H?(0,n.__)("Overlay opacity","arkhe-blocks"):(0,n.__)("Background opacity","arkhe-blocks"),value:g,onChange:e=>{l({opacity:e})},min:0,max:100}),(0,a.createElement)(c.BaseControl,null,(0,a.createElement)(c.BaseControl.VisualLabel,null,(0,n.__)("Text color","arkhe-blocks")),(0,a.createElement)(c.ColorPalette,{value:k,colors:j,onChange:e=>{l({textColor:e})}}))),(0,a.createElement)(c.PanelBody,{title:(0,n.__)("Top border","arkhe-blocks"),initialOpen:L},(0,a.createElement)(c.BaseControl,null,(0,a.createElement)(c.BaseControl.VisualLabel,null,(0,n.__)("Shape","arkhe-blocks")),(0,a.createElement)(c.ButtonGroup,{className:"arkb-btns--svg -top"},O.map((e=>(0,a.createElement)(c.Button,{isSecondary:e!==x.type,isPrimary:e===x.type,onClick:()=>{l({svgTop:{...x,type:e}})},key:`key_${e}`},u(e)))))),(0,a.createElement)(c.RangeControl,{label:(0,n.__)("Height level","arkhe-blocks"),value:x.level,onChange:e=>{l({svgTop:{...x,level:e}})},min:-100,max:100,step:1}),(0,a.createElement)("div",{className:"components-base-control"},(0,a.createElement)("div",{className:"components-base-control__label"},(0,n.__)("Color","arkhe-blocks")),(0,a.createElement)(i.ColorPalette,{value:x.color,onChange:e=>{l({svgTop:{...x,color:e}})},clearable:!0}))),(0,a.createElement)(c.PanelBody,{title:(0,n.__)("Bottom border","arkhe-blocks"),initialOpen:U},(0,a.createElement)(c.BaseControl,null,(0,a.createElement)(c.BaseControl.VisualLabel,null,(0,n.__)("Shape","arkhe-blocks")),(0,a.createElement)(c.ButtonGroup,{className:"arkb-btns--svg -bottom"},O.map((e=>(0,a.createElement)(c.Button,{isSecondary:e!==z.type,isPrimary:e===z.type,onClick:()=>{l({svgBottom:{...z,type:e}})},key:`key_${e}`},u(e)))))),(0,a.createElement)(c.RangeControl,{label:(0,n.__)("Height level","arkhe-blocks"),value:z.level,onChange:e=>{l({svgBottom:{...z,level:e}})},min:-100,max:100,step:1}),(0,a.createElement)(c.BaseControl,null,(0,a.createElement)(c.BaseControl.VisualLabel,null,(0,n.__)("Color","arkhe-blocks")),(0,a.createElement)(i.ColorPalette,{value:z.color,onChange:e=>{l({svgBottom:{...z,color:e}})},clearable:!0}))))};const W=e=>{let{attributes:t}=e;const{media:l,mediaSP:n,focalPoint:o,focalPointSP:r,isRepeat:i}=t,c=l.url,s=n.url;if(i)return null;if(!c)return null;const m={};if(o){const e=(100*o.x).toFixed(),t=(100*o.y).toFixed();m["--arkb-object-position"]=`${e}% ${t}%`}if(r){const e=(100*r.x).toFixed(),t=(100*r.y).toFixed();m["--arkb-object-position--sp"]=`${e}% ${t}%`}let p=null;if("video"===l.type&&"image"!==n.type){const e=g()("ark-block-section__video","arkb-obf-cover");p=(0,a.createElement)("video",{className:e,autoPlay:!0,loop:!0,playsinline:!0,muted:!0,width:l.width||null,height:l.height||null,style:m||null},s&&(0,a.createElement)("source",{media:"(max-width: 999px)",src:s}),(0,a.createElement)("source",{src:c,className:"ark-block-section__source"}))}else if("image"===l.type&&"video"!==n.type){const e=g()("ark-block-section__picture");p=(0,a.createElement)("picture",{className:e,style:m},s&&(0,a.createElement)("source",{media:"(max-width: 999px)",srcSet:s}),(0,a.createElement)("img",{src:c,alt:"",className:g()("ark-block-section__img arkb-obf-cover"),width:l.width||null,height:l.height||null}))}return p?(0,a.createElement)("div",{className:"ark-block-section__media arkb-absLayer"},p):""};var D=(e,t)=>-1!==e.split(" ").indexOf(t),J=l(991),K=l.n(J),q={mbCtrol:(0,a.createElement)("svg",{viewBox:"0 0 20 20","aria-hidden":"true",width:"20",height:"20"},(0,a.createElement)("path",{d:"M17.8,12.1v-0.6h-2.4V12h-1.8v-0.5h-2.4V12H9v-0.5H6.5V12H4.6v-0.5H2.2v0.6C1.5,12.3,1,12.9,1,13.8v4c0,1,0.8,1.8,1.7,1.8 h15.1c0.9,0,1.2-0.8,1.2-1.8v-4C19,12.9,18.5,12.3,17.8,12.1z M17.5,17.8c0,0.1-0.1,0.2-0.2,0.2H2.7c-0.1,0-0.2-0.1-0.2-0.2v-4 c0-0.1,0.1-0.2,0.2-0.2h14.6c0.1,0,0.2,0.1,0.2,0.2V17.8z"}),(0,a.createElement)("path",{d:"M13.8,6.6l-3.2,0.3V3.1l3.2,0.3c0.3,0,0.3-0.4,0.1-0.5l-3.8-2.5c-0.1,0-0.1,0-0.2,0L6.1,2.9C5.9,3,6,3.4,6.2,3.4l3.2-0.3 v3.8L6.2,6.6C6,6.6,5.9,6.9,6.1,7.1l3.8,2.5c0.1,0.1,0.1,0.1,0.2,0l3.8-2.5C14.1,7,14,6.6,13.8,6.6z"})),mbCtrolSeted:(0,a.createElement)("svg",{viewBox:"0 0 20 20","aria-hidden":"true",width:"20",height:"20"},(0,a.createElement)("path",{d:"M17.8,12.1v-0.6h-2.4V12h-1.8v-0.5h-2.4V12H9v-0.5H6.5V12H4.6v-0.5H2.2v0.6C1.5,12.3,1,12.9,1,13.8v4c0,1,0.8,1.8,1.7,1.8 h15.1c0.9,0,1.2-0.8,1.2-1.8v-4C19,12.9,18.5,12.3,17.8,12.1z M17.5,17.8c0,0.1-0.1,0.2-0.2,0.2H2.7c-0.1,0-0.2-0.1-0.2-0.2v-4 c0-0.1,0.1-0.2,0.2-0.2h14.6c0.1,0,0.2,0.1,0.2,0.2V17.8z"}),(0,a.createElement)("path",{d:"M13.8,6.6l-3.2,0.3V3.1l3.2,0.3c0.3,0,0.3-0.4,0.1-0.5l-3.8-2.5c-0.1,0-0.1,0-0.2,0L6.1,2.9C5.9,3,6,3.4,6.2,3.4l3.2-0.3 v3.8L6.2,6.6C6,6.6,5.9,6.9,6.1,7.1l3.8,2.5c0.1,0.1,0.1,0.1,0.2,0l3.8-2.5C14.1,7,14,6.6,13.8,6.6z"}))};const Q=[{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"0",title:"0",mbClass:"u-mt-0"},{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"0.5rem",title:"0.5rem",mbClass:"u-mt-5"},{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"1rem",title:"1rem",mbClass:"u-mt-10"},{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"1.5rem",title:"1.5rem",mbClass:"u-mt-15"},{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"2rem",title:"2rem",mbClass:"u-mt-20"},{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"3rem",title:"3rem",mbClass:"u-mt-30"},{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"4rem",title:"4rem",mbClass:"u-mt-40"},{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"6rem",title:"6rem",mbClass:"u-mt-60"},{icon:(0,a.createElement)("span",{className:"arkb-null-icon"}),size:"8rem",title:"8rem",mbClass:"u-mt-80"}],X=(0,a.memo)((e=>{let{className:t,setAttributes:l}=e;const o=t||"",r=Q.map((e=>e.mbClass));let i;Q.forEach((e=>{D(o,e.mbClass)&&(i=e)}));const s=i?i.mbClass:"";return(0,a.createElement)(c.ToolbarGroup,{className:"arkb-toolbar",isCollapsed:!0,icon:i?(0,a.createElement)("span",{className:"arkb-toolbtn--margin"},q.mbCtrolSeted,i.size):q.mbCtrol,label:(0,n.__)("Margins on the block","arkhe-blocks"),controls:Q.map((e=>{const{mbClass:t}=e,a=s===t;return{...e,isActive:a,onClick:()=>{const e=function(e,t,l){let a,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if(D(e,t)&&(t=""),l){const t={};l.map((e=>{t[e]=!1})),n&&(t[n]=!1),a=K()(e,t)}return""!==t&&(a=K()(a,n,t)),a}(o,t,r);l({className:e})}}}))})})),Y="function"==typeof i.useInnerBlocksProps?i.useInnerBlocksProps:i.__experimentalUseInnerBlocksProps,Z="ark-block-section";(0,o.registerBlockType)(s.u2,{title:(0,n.__)("Section","arkhe-blocks"),description:(0,n.__)("Create a content area to use as a section.","arkhe-blocks"),icon:{foreground:" #000",src:w.block},example:{attributes:{bgColor:"#f7f7f7"},innerBlocks:[{name:"core/heading",attributes:{level:2,content:"Section Block"}},{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}}]},transforms:{from:[{type:"block",blocks:["core/group"],transform:(e,t)=>(0,o.createBlock)(s.u2,{},t)}]},edit:e=>{let{attributes:t,setAttributes:l,isSelected:o,clientId:s}=e;const{align:m,media:d,innerSize:u,height:h,svgTop:b,svgBottom:v,contentPosition:E,filter:P,tag:_}=t,{updateBlockAttributes:C}=(0,r.useDispatch)("core/block-editor"),S=(0,r.useSelect)((e=>e("core/block-editor").getBlocks),[]),x=g()(Z,{"has-bg-img":!!d.url}),B=(0,a.useMemo)((()=>k(t)),[t]),N=(0,a.useMemo)((()=>y(t)),[t]),z=(0,a.useMemo)((()=>(0,a.createElement)(W,{attributes:t})),[t]),H=(0,a.useMemo)((()=>f(b)),[b]),T=(0,a.useMemo)((()=>f(v)),[v]);0!==H.height&&(B["--arkb-svg-height--top"]=`${H.height}vw`),0!==T.height&&(B["--arkb-svg-height--bottom"]=`${T.height}vw`);const $=(0,i.useBlockProps)({className:x,style:B||null,"data-height":h||null,"data-inner":u||null}),V=Y({className:"ark-block-section__bodyInner ark-keep-mt"},{template:[["arkhe-blocks/section-heading"],["core/paragraph"]],templateLock:!1}),M=(0,a.useCallback)((e=>{if(E===e)return;l({contentPosition:e});let t="";-1!==e.indexOf(" center")?t="center":-1!==e.indexOf(" right")?t="right":-1!==e.indexOf(" left")&&(t="left"),S(s).forEach((e=>{"arkhe-blocks/section-heading"===e.name&&t&&C(e.clientId,{textAlign:t})}))}),[E]),F=i.__experimentalBlockAlignmentMatrixControl||i.__experimentalBlockAlignmentMatrixToolbar,L=_||"div";return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(i.BlockControls,{group:"block"},"full"===m&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(c.ToolbarButton,{className:g()("components-toolbar__control",{"is-pressed":"full"===u}),label:(0,n.__)("To full-width content","arkhe-blocks"),icon:w.fullInner,onClick:()=>{l("full"!==u?{innerSize:"full"}:{innerSize:""})}}),(0,a.createElement)(F,{label:(0,n.__)("Change content position"),value:E,onChange:M}))),(0,a.createElement)(i.BlockControls,null,(0,a.createElement)(X,{className:t.className,setAttributes:l})),(0,a.createElement)(i.InspectorControls,null,(0,a.createElement)(G,{attributes:t,setAttributes:l,isSelected:o})),(0,a.createElement)(L,$,z,(0,a.createElement)("div",{className:"ark-block-section__color arkb-absLayer",style:N}),"off"!==P&&(0,a.createElement)("div",{className:`c-filterLayer -filter-${P} arkb-absLayer`}),(0,a.createElement)("div",{className:"ark-block-section__body","data-content":E.replace(" ","-")},(0,a.createElement)("div",V)),(0,a.createElement)(p,{position:"top",svgData:H}),(0,a.createElement)(p,{position:"bottom",svgData:T})))},save:e=>{let{attributes:t}=e;const{media:l,innerSize:n,height:o,svgTop:r,svgBottom:c,contentPosition:s,filter:m,isRepeat:d,tag:u}=t,h=k(t),b=f(r),v=f(c);0!==b.height&&(h["--arkb-svg-height--top"]=`${b.height}vw`),0!==v.height&&(h["--arkb-svg-height--bottom"]=`${v.height}vw`);const E=y(t),P=i.useBlockProps.save({className:g()(Z,{"has-bg-img":!!l.url}),style:h||null,"data-height":o||null,"data-inner":n||null}),_=u||"div";return(0,a.createElement)(_,P,l.url&&!d&&(0,a.createElement)(a.RawHTML,null,"\x3c!-- media --\x3e"),(0,a.createElement)("div",{className:"ark-block-section__color arkb-absLayer",style:E}),"off"!==m&&(0,a.createElement)("div",{className:`c-filterLayer -filter-${m} arkb-absLayer`}),(0,a.createElement)("div",{className:"ark-block-section__body","data-content":s.replace(" ","-")},(0,a.createElement)("div",{className:"ark-block-section__bodyInner ark-keep-mt"},(0,a.createElement)(i.InnerBlocks.Content,null))),(0,a.createElement)(p,{position:"top",svgData:b}),(0,a.createElement)(p,{position:"bottom",svgData:v}))},deprecated:C})},991:function(e,t){var l;!function(){"use strict";var a=function(){function e(){}function t(e,t){for(var l=t.length,a=0;a<l;++a)n(e,t[a])}e.prototype=Object.create(null);var l={}.hasOwnProperty,a=/\s+/;function n(e,n){if(n){var o=typeof n;"string"===o?function(e,t){for(var l=t.split(a),n=l.length,o=0;o<n;++o)e[l[o]]=!0}(e,n):Array.isArray(n)?t(e,n):"object"===o?function(e,t){if(t.toString===Object.prototype.toString)for(var a in t)l.call(t,a)&&(e[a]=!!t[a]);else e[t.toString()]=!0}(e,n):"number"===o&&function(e,t){e[t]=!0}(e,n)}}return function(){for(var l=arguments.length,a=Array(l),n=0;n<l;n++)a[n]=arguments[n];var o=new e;t(o,a);var r=[];for(var i in o)o[i]&&r.push(i);return r.join(" ")}}();e.exports?(a.default=a,e.exports=a):void 0===(l=function(){return a}.apply(t,[]))||(e.exports=l)}()},184:function(e,t){var l;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var o=typeof l;if("string"===o||"number"===o)e.push(l);else if(Array.isArray(l)){if(l.length){var r=n.apply(null,l);r&&e.push(r)}}else if("object"===o)if(l.toString===Object.prototype.toString)for(var i in l)a.call(l,i)&&l[i]&&e.push(i);else e.push(l.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(t,[]))||(e.exports=l)}()}},t={};function l(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,l),o.exports}l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},l.d=function(e,t){for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l(777)}();