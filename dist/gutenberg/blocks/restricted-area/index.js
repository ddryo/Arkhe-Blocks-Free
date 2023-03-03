(()=>{"use strict";(()=>{const e=window.wp.element,t=window.wp.i18n,a=window.wp.blocks,l=window.wp.blockEditor,n=window.wp.components,r="function"==typeof l.useInnerBlocksProps?l.useInnerBlocksProps:l.__experimentalUseInnerBlocksProps,o=(0,e.createElement)("svg",{viewBox:"0 0 56 56"},(0,e.createElement)("g",null,(0,e.createElement)("polygon",{points:"53,53 48,53 48,51 51,51 51,48 53,48"}),(0,e.createElement)("path",{d:"M40,53h-8v-2h8V53z M24,53h-8v-2h8V53z"}),(0,e.createElement)("polygon",{points:"8,53 3,53 3,48 5,48 5,51 8,51"}),(0,e.createElement)("path",{d:"M5,40H3v-8h2V40z M5,24H3v-8h2V24z"}),(0,e.createElement)("polygon",{points:"5,8 3,8 3,3 8,3 8,5 5,5"}),(0,e.createElement)("path",{d:"M40,5h-8V3h8V5z M24,5h-8V3h8V5z"}),(0,e.createElement)("polygon",{points:"53,8 51,8 51,5 48,5 48,3 53,3"}),(0,e.createElement)("path",{d:"M53,40h-2v-8h2V40z M53,24h-2v-8h2V24z"})),(0,e.createElement)("rect",{x:"14",y:"21",width:"28",height:"2"}),(0,e.createElement)("rect",{x:"14",y:"33",width:"28",height:"2"}),(0,e.createElement)("path",{d:"M20.2,25.2h-1.4c-0.6,0-1-0.4-1-1v-4.4c0-0.6,0.4-1,1-1h1.4c0.6,0,1,0.4,1,1v4.4C21.2,24.8,20.8,25.2,20.2,25.2z"}),(0,e.createElement)("path",{d:"M37.2,37.2h-1.4c-0.6,0-1-0.4-1-1v-4.4c0-0.6,0.4-1,1-1h1.4c0.6,0,1,0.4,1,1v4.4C38.2,36.8,37.8,37.2,37.2,37.2z"})),c=JSON.parse('{"u2":"arkhe-blocks/restricted-area"}'),s=window.wp.date,i=window.wp.primitives,m=(0,e.createElement)(i.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)(i.Path,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V7h15v12zM9 10H7v2h2v-2zm0 4H7v2h2v-2zm4-4h-2v2h2v-2zm4 0h-2v2h2v-2zm-4 4h-2v2h2v-2zm4 0h-2v2h2v-2z"})),h=(0,e.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(i.Path,{d:"M7 13.8h6v-1.5H7v1.5zM18 16V4c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2zM5.5 16V4c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5zM7 10.5h8V9H7v1.5zm0-3.3h8V5.8H7v1.4zM20.2 6v13c0 .7-.6 1.2-1.2 1.2H8v1.5h11c1.5 0 2.7-1.2 2.7-2.8V6h-1.5z"})),p=(0,e.createElement)(i.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)(i.Path,{d:"M19 6.2h-5.9l-.6-1.1c-.3-.7-1-1.1-1.8-1.1H5c-1.1 0-2 .9-2 2v11.8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8.2c0-1.1-.9-2-2-2zm.5 11.6c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h5.8c.2 0 .4.1.4.3l1 2H19c.3 0 .5.2.5.5v9.5z"})),u="undefined"!=typeof GetSettings?s.getSettings:s.__experimentalGetSettings,k=window.wp.data,b=function(t){let{icon:a,size:l=24,...n}=t;return(0,e.cloneElement)(a,{width:l,height:l,...n})},g=(0,e.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(i.Path,{d:"M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"})),d=(0,e.createInterpolateElement)((0,t.sprintf)((0,t.__)("You can select multiple items by holding down the %1$s key on a Mac or the %2$s key on Windows.","arkhe-blocks"),"<code>command</code>","<code>ctrl</code>"),{code:(0,e.createElement)("code",null)}),E=a=>{let{type:l="",label:n="",text:r="",tag:o="div"}=a,c="",s="";"multiple-select"===l?(c=(0,t.__)("Multiple choices","arkhe-blocks"),s=d):(c=n,s=r);const i=o;return(0,e.createElement)(i,{className:"arkb-helpPopover"},c&&(0,e.createElement)("span",{className:"arkb-helpPopover__label"},c),(0,e.createElement)(b,{icon:g,size:"20",className:"arkb-helpPopover__icon"}),(0,e.createElement)("span",{className:"arkb-helpPopover__desc"},s))},_=(0,e.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(i.Path,{d:"M20.1 11.2l-6.7-6.7c-.1-.1-.3-.2-.5-.2H5c-.4-.1-.8.3-.8.7v7.8c0 .2.1.4.2.5l6.7 6.7c.2.2.5.4.7.5s.6.2.9.2c.3 0 .6-.1.9-.2.3-.1.5-.3.8-.5l5.6-5.6c.4-.4.7-1 .7-1.6.1-.6-.2-1.2-.6-1.6zM19 13.4L13.4 19c-.1.1-.2.1-.3.2-.2.1-.4.1-.6 0-.1 0-.2-.1-.3-.2l-6.5-6.5V5.8h6.8l6.5 6.5c.2.2.2.4.2.6 0 .1 0 .3-.2.5zM9 8c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z"})),v=(0,e.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(i.Path,{fillRule:"evenodd",d:"M5 5.5h14a.5.5 0 01.5.5v1.5a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 9.232A2 2 0 013 7.5V6a2 2 0 012-2h14a2 2 0 012 2v1.5a2 2 0 01-1 1.732V18a2 2 0 01-2 2H6a2 2 0 01-2-2V9.232zm1.5.268V18a.5.5 0 00.5.5h12a.5.5 0 00.5-.5V9.5h-13z",clipRule:"evenodd"})),{groupBy:y}=lodash;function C(e){if(!e)return[];const t=e.map((e=>({children:[],parent:null,...e}))),a=y(t,"parent");if(a.null&&a.null.length)return t;const l=e=>e.map((e=>{const t=a[e.id];return{...e,children:t&&t.length?l(t):[]}}));return l(a[0]||[])}const x=a=>{let{ids:l,relation:r,attr:o,setOptions:c,forArchive:s=!1}=a;const i=!s&&1<l.length;(0,e.useEffect)((()=>{i||"AND"!==r||c({[o]:"IN"})}),[i,r]);const m=i?(0,e.createElement)(e.Fragment,null,"IN: "+(0,t.__)("Matches any one","arkhe-blocks"),(0,e.createElement)("br",null),"AND: "+(0,t.__)("Matches all","arkhe-blocks"),(0,e.createElement)("br",null),"NOT IN: "+(0,t.__)("Not matching","arkhe-blocks")):(0,e.createElement)(e.Fragment,null,"IN: "+(0,t.__)("Matches","arkhe-blocks"),(0,e.createElement)("br",null),"NOT IN: "+(0,t.__)("Not matching","arkhe-blocks"));return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.ButtonGroup,{className:"arkb-btns--small arkb-btns--logicalRelation"},i?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.Button,{text:"IN",isPrimary:"IN"===r,onClick:()=>{c({[o]:"IN"})}}),(0,e.createElement)(n.Button,{text:"AND",isPrimary:"AND"===r,onClick:()=>{c({[o]:"AND"})}}),(0,e.createElement)(n.Button,{text:"NOT IN",isPrimary:"NOT IN"===r,onClick:()=>{c({[o]:"NOT IN"})}})):(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.Button,{text:"IN",isPrimary:"NOT IN"!==r,onClick:()=>{c({[o]:"IN"})}}),(0,e.createElement)(n.Button,{text:"NOT IN",isPrimary:"NOT IN"===r,onClick:()=>{c({[o]:"NOT IN"})}}))),(0,e.createElement)(E,{text:m}))},w=a=>{let{setOptions:l,attrs:r,type:o=""}=a;const{catID:c,tagID:s,taxName:i,termID:m,catRelation:h,tagRelation:u,termRelation:g,queryRelation:d,exCatChildren:y}=r,w="archive"===o,N=(0,k.useSelect)((e=>{const t=e("core").getTaxonomies({per_page:-1,context:"view"}),a=[];if(null!==t)for(const e of t)-1===["category","post_tag","nav_menu"].indexOf(e.slug)&&a.push({label:e.name,value:e.slug});return a}),[])||[],T=(0,k.useSelect)((e=>e("core").getEntityRecords("taxonomy",i,{per_page:-1})),[i]),B=(0,k.useSelect)((e=>e("core").getEntityRecords("taxonomy","category",{per_page:-1}))),I=(0,k.useSelect)((e=>e("core").getEntityRecords("taxonomy","post_tag",{per_page:-1})));let V="category";!c&&s&&(V="tag"),c||s||!m||(V="taxonomy");const P=c.split(","),f=s.split(","),S=m.split(","),z=(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.TreeSelect,{className:"arkb-tree-select -category",noOptionLabel:"----",onChange:e=>{const t=e.join(",");l({catID:t.replace(/^,/,"")})},selectedId:P,tree:C(B),multiple:!0}),(0,e.createElement)(E,{type:"multiple-select"}),"query"===o&&(0,e.createElement)(n.CheckboxControl,{className:"arkb-check--exCatChild",label:(0,t.__)("Exclude articles in child categories only","arkhe-blocks"),checked:y,onChange:e=>{l({exCatChildren:e})}}),(0,e.createElement)("div",{"data-ark-disabled":!c||null},(0,e.createElement)(n.BaseControl,{className:"arkb-btns--relation"},(0,e.createElement)(n.BaseControl.VisualLabel,null,(0,t.__)("The logical relationship of selected terms","arkhe-blocks")),(0,e.createElement)(x,{ids:P,attr:"catRelation",relation:h,setOptions:l,forArchive:w})))),M=(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.TreeSelect,{className:"arkb-tree-select -tag",noOptionLabel:"----",onChange:e=>{const t=e.join(",");l({tagID:t.replace(/^,/,"")})},selectedId:f,tree:C(I),multiple:!0}),(0,e.createElement)(E,{type:"multiple-select"}),(0,e.createElement)("div",{"data-ark-disabled":!s||null},(0,e.createElement)(n.BaseControl,{className:"arkb-btns--relation"},(0,e.createElement)(n.BaseControl.VisualLabel,null,(0,t.__)("The logical relationship of selected terms","arkhe-blocks")),(0,e.createElement)(x,{ids:f,attr:"tagRelation",relation:u,setOptions:l,forArchive:w})))),A=0<N.length?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.SelectControl,{value:i,options:[{label:"---",value:""},...N],onChange:e=>{l({taxName:e})}}),i&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.TreeSelect,{label:(0,t.__)("Terms","arkhe-blocks"),className:"arkb-tree-select -term",noOptionLabel:"----",onChange:e=>{const t=e.join(",");l({termID:t.replace(/^,/,"")})},selectedId:S,tree:C(T),multiple:!0}),(0,e.createElement)(E,{type:"multiple-select"}),(0,e.createElement)("div",{"data-ark-disabled":!m||null},(0,e.createElement)(n.BaseControl,{className:"arkb-btns--relation"},(0,e.createElement)(n.BaseControl.VisualLabel,null,(0,t.__)("The logical relationship of selected terms","arkhe-blocks")),(0,e.createElement)(x,{ids:S,attr:"termRelation",relation:g,setOptions:l,forArchive:w}))))):(0,e.createElement)("p",null,(0,t.__)("There are no taxonomies available for selection.","arkhe-blocks"));return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.TabPanel,{className:"arkb-tabPanel -terms",activeClass:"is-active",tabs:[{name:"category",title:(0,e.createElement)(e.Fragment,null,(0,e.createElement)(b,{icon:p}),(0,e.createElement)("span",null,(0,t.__)("Categories","arkhe-blocks"))),className:"arkb-tabPanel__menu -category"},{name:"tag",title:(0,e.createElement)(e.Fragment,null,(0,e.createElement)(b,{icon:_}),(0,e.createElement)("span",null,(0,t.__)("Tags","arkhe-blocks"))),className:"arkb-tabPanel__menu -tag"},{name:"taxonomy",title:(0,e.createElement)(e.Fragment,null,(0,e.createElement)(b,{icon:v}),(0,e.createElement)("span",null,(0,t.__)("Taxonomy","arkhe-blocks"))),className:"arkb-tabPanel__menu -taxonomy"}],initialTabName:V},(e=>"category"===e.name?z:"tag"===e.name?M:"taxonomy"===e.name?A:void 0)),(0,e.createElement)("hr",{style:{borderBottomStyle:"dashed"}}),(0,e.createElement)("div",{"data-ark-disabled":w||null},(0,e.createElement)(n.SelectControl,{label:(0,t.__)("The relationship between each Taxonomy condition","arkhe-blocks"),value:d,options:[{label:(0,t.__)("Whether any one meets the conditions","arkhe-blocks"),value:"OR"},{label:(0,t.__)("Whether all conditions are met","arkhe-blocks"),value:"AND"}],onChange:e=>{l({queryRelation:e})},help:w?(0,t.__)("Valid only when judging on Singular pages","arkhe-blocks"):null})))},N=[{label:(0,t.__)("Non-logged-in users","arkhe-blocks"),value:"noLoggedIn"},{label:(0,t.__)("Logged-in users","arkhe-blocks"),value:"loggedIn"}],T=[{label:(0,t._x)("Administrator","role","arkhe-blocks"),value:"administrator"},{label:(0,t._x)("Editor","role","arkhe-blocks"),value:"editor"},{label:(0,t._x)("Author","role","arkhe-blocks"),value:"author"},{label:(0,t._x)("Contributor","role","arkhe-blocks"),value:"contributor"},{label:(0,t._x)("Subscriber","role","arkhe-blocks"),value:"subscriber"}],B=[{label:(0,t._x)("Front","page-type","arkhe-blocks"),value:"front"},{label:(0,t._x)("Home","page-type","arkhe-blocks"),value:"home"},{label:(0,t._x)("Archive","page-type","arkhe-blocks"),value:"archive"},{label:(0,t._x)("Search","page-type","arkhe-blocks"),value:"search"},{label:(0,t._x)("404 Page","page-type","arkhe-blocks"),value:"404"},{label:(0,t._x)("Singular","page-type","arkhe-blocks"),value:"singular"}],I=a=>{let{attributes:r,setAttributes:o}=a;const{roles:c,isRole:i,isLoggedIn:b,isDateTime:g,startDateTime:d,endDateTime:_,isPage:v,pageLimitType:y,pageTypes:C,allowedPostTypes:x,terms:I}=r,[V,P]=(0,e.useState)(!1),[f,S]=(0,e.useState)(!1),z=(0,k.useSelect)((e=>{const t=e("core").getPostTypes({per_page:-1});if(null===t)return[];const a=[];for(const e of t){const t=["attachment"];e.viewable&&-1===t.indexOf(e.slug)&&a.push({label:e.name,value:e.slug})}return a}),[])||[],M=(0,e.useCallback)((e=>{o({terms:{...I,...e}})}),[o,I]);let A=null;if(g){const a=u(),l=/a(?!\\)/i.test(a.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join("")),r=d?(0,s.dateI18n)(`${a.formats.date} ${a.formats.time}`,d):(0,t.__)("Not set","arkhe-blocks"),c=_?(0,s.dateI18n)(`${a.formats.date} ${a.formats.time}`,_):(0,t.__)("Not set","arkhe-blocks");A=(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.BaseControl,{className:"arkb-control--dateTimePicker"},(0,e.createElement)(n.BaseControl.VisualLabel,null,(0,t.__)("Start","arkhe-blocks")),(0,e.createElement)(n.Button,{icon:m,isTertiary:!0,onClick:()=>{P(!0)}},r),V&&(0,e.createElement)(n.Popover,{className:"arkb-popover--datetime",onClose:()=>P(!1)},(0,e.createElement)(n.DateTimePicker,{__nextRemoveResetButton:!0,__nextRemoveHelpButton:!0,currentDate:d,is12Hour:l,onChange:e=>{o({startDateTime:e}),e||P(!1)}}))),(0,e.createElement)("div",{className:"arkb-control--dash"},"〜"),(0,e.createElement)(n.BaseControl,{className:"arkb-control--dateTimePicker"},(0,e.createElement)(n.BaseControl.VisualLabel,null,(0,t.__)("End","arkhe-blocks")),(0,e.createElement)(n.Button,{icon:m,isTertiary:!0,onClick:()=>{S(!0)}},c),f&&(0,e.createElement)(n.Popover,{className:"arkb-popover--datetime",onClose:()=>S(!1)},(0,e.createElement)(n.DateTimePicker,{__nextRemoveResetButton:!0,__nextRemoveHelpButton:!0,currentDate:_,is12Hour:l,onChange:e=>{o({endDateTime:e}),e||S(!1)}}))))}return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(l.InspectorControls,null,(0,e.createElement)(n.PanelBody,{title:(0,t.__)("Settings","arkhe-blocks")},(0,e.createElement)(n.ToggleControl,{label:(0,t.__)("Restrict by login status","arkhe-blocks"),checked:i,onChange:e=>{o({isRole:e})}}),i&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.SelectControl,{label:(0,t.__)("Users who can view this content","arkhe-blocks"),value:b?"loggedIn":"noLoggedIn",options:N,onChange:e=>{o({isLoggedIn:"loggedIn"===e})}}),b&&(0,e.createElement)(n.BaseControl,{className:"arkb-checkboxes -columns"},(0,e.createElement)(n.BaseControl.VisualLabel,null,(0,t.__)("User Roles to view this content","arkhe-blocks")),T.map((t=>(0,e.createElement)(n.CheckboxControl,{label:t.label,key:`key_${t.value}`,checked:c[t.value],onChange:e=>{o({roles:{...c,[t.value]:e}})}}))))),(0,e.createElement)("hr",null),(0,e.createElement)(n.ToggleControl,{label:(0,t.__)("Limit the time period to be displayed","arkhe-blocks"),checked:g,onChange:e=>{o({isDateTime:e})}}),g&&A,(0,e.createElement)("hr",null),(0,e.createElement)(n.ToggleControl,{label:(0,t.__)("Restrict by page","arkhe-blocks"),checked:v,onChange:e=>{o({isPage:e})}}),v&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.BaseControl,{className:"arkb-checkboxes"},(0,e.createElement)(n.BaseControl.VisualLabel,null,(0,t.__)("Restriction method","arkhe-blocks")),(0,e.createElement)(n.ButtonGroup,{className:"arkb-btns--limtPageType"},(0,e.createElement)(n.Button,{text:(0,t.__)("Page Type","arkhe-blocks"),icon:h,isPrimary:"page_type"===y,onClick:()=>{"page_type"!==y&&o({pageLimitType:"page_type"})}}),(0,e.createElement)(n.Button,{text:(0,t.__)("Terms","arkhe-blocks"),icon:p,isPrimary:"terms"===y,onClick:()=>{"terms"!==y&&o({pageLimitType:"terms"})}}))),"page_type"===y&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.BaseControl,{className:"arkb-checkboxes"},B.map((t=>(0,e.createElement)(n.CheckboxControl,{label:t.label,key:`key_${t.value}`,checked:C[t.value],onChange:e=>{o({pageTypes:{...C,[t.value]:e}})}})))),(0,e.createElement)("div",{"data-ark-disabled":!C.singular||null,style:{marginTop:"-8px"}},(0,e.createElement)(n.SelectControl,{label:(0,t.__)("Types of Singular pages","arkhe-blocks"),value:x.split(","),options:[{label:(0,t.__)("All post types","arkhe-blocks"),value:""},...z],multiple:!0,onChange:e=>{const t=e.join(",");o({allowedPostTypes:t.replace(/^,/,"")})}}),(0,e.createElement)(E,{type:"multiple-select"}))),"terms"===y&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.BaseControl,{className:"arkb-checkboxes"},(0,e.createElement)(n.CheckboxControl,{label:(0,e.createElement)(e.Fragment,null,(0,t.__)("Target Archive pages","arkhe-blocks")),checked:I.isArchive,onChange:e=>{M({isArchive:e})},className:"has-helptip",help:(0,e.createElement)(E,{tag:"span",text:(0,t.__)("Displays content on Term Archive pages that match the specified criteria.","arkhe-blocks")})}),(0,e.createElement)(n.CheckboxControl,{label:(0,t.__)("Target Singular pages","arkhe-blocks"),checked:I.isSingular,onChange:e=>{M({isSingular:e})},className:"has-helptip",help:(0,e.createElement)(E,{tag:"span",text:(0,t.__)("Displays content on Singular pages with terms that match the specified criteria.","arkhe-blocks")})})),(0,e.createElement)("div",{"data-ark-disabled":!I.isArchive&&!I.isSingular||null},(0,e.createElement)("hr",{style:{borderBottomStyle:"dashed"}}),(0,e.createElement)(w,{attrs:I,setOptions:M,type:I.isArchive?"archive":""})))))))};(0,a.registerBlockType)(c.u2,{title:(0,t._x)("Restricted Area","blcok-name","arkhe-blocks"),description:(0,t.__)("A block that can output content only under specified conditions.","arkhe-blocks"),icon:o,edit:t=>{let{attributes:a,setAttributes:c}=t;const s=(0,l.useBlockProps)({className:"ark-block-restrictedArea"}),i=r(s,{template:[["core/paragraph"]],templateLock:!1}),{children:m,...h}=i;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(I,{attributes:a,setAttributes:c}),(0,e.createElement)("div",h,m,(0,e.createElement)("div",{className:"arkb-parentSelector"},(0,e.createElement)(n.Icon,{icon:o}))))},save:()=>(0,e.createElement)(l.InnerBlocks.Content,null)})})()})();