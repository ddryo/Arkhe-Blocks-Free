!function(){"use strict";!function(){var e=window.wp.element,o=window.wp.i18n,r=window.wp.blocks,t=window.wp.blockEditor,n=(0,e.createElement)("svg",{viewBox:"0 0 56 56"},(0,e.createElement)("path",{d:"M53,36H7V20h46V36z M9,34h42V22H9V34z"})),s=JSON.parse('{"u2":"arkhe-blocks/dl-dd"}');const c="function"==typeof t.useInnerBlocksProps?t.useInnerBlocksProps:t.__experimentalUseInnerBlocksProps;(0,r.registerBlockType)(s.u2,{title:(0,o.__)("Description","arkhe-blocks"),icon:{foreground:" #000",src:n},edit:()=>{const o=(0,t.useBlockProps)({className:"ark-block-dl__dd ark-keep-mt--s"}),r=c(o,{template:[["core/paragraph"]],templateLock:!1});return(0,e.createElement)("div",r)},save:()=>{const o=t.useBlockProps.save({className:"ark-block-dl__dd ark-keep-mt--s"});return(0,e.createElement)("dd",o,(0,e.createElement)(t.InnerBlocks.Content,null))}})}()}();