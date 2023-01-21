"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[238],{"./packages/components/src/color-indicator/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnforwardedColorIndicator(props,forwardedRef){const{className:className,colorValue:colorValue,...additionalProps}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("component-color-indicator",className),style:{background:colorValue},ref:forwardedRef,...additionalProps})}UnforwardedColorIndicator.displayName="UnforwardedColorIndicator";const ColorIndicator=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(UnforwardedColorIndicator);__webpack_exports__.Z=ColorIndicator;try{ColorIndicator.displayName="ColorIndicator",ColorIndicator.__docgenInfo={description:"ColorIndicator is a React component that renders a specific color in a\ncircle. It's often used to summarize a collection of used colors in a child\ncomponent.\n\n```jsx\nimport { ColorIndicator } from '@wordpress/components';\n\nconst MyColorIndicator = () => <ColorIndicator colorValue=\"#0073aa\" />;\n```",displayName:"ColorIndicator",props:{colorValue:{defaultValue:null,description:"The color of the indicator. Any value from the CSS `background` property\nis supported.",name:"colorValue",required:!0,type:{name:"Background<string | number>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/color-indicator/index.tsx#ColorIndicator"]={docgenInfo:ColorIndicator.__docgenInfo,name:"ColorIndicator",path:"packages/components/src/color-indicator/index.tsx#ColorIndicator"})}catch(__react_docgen_typescript_loader_error){}try{colorindicator.displayName="colorindicator",colorindicator.__docgenInfo={description:"ColorIndicator is a React component that renders a specific color in a\ncircle. It's often used to summarize a collection of used colors in a child\ncomponent.\n\n```jsx\nimport { ColorIndicator } from '@wordpress/components';\n\nconst MyColorIndicator = () => <ColorIndicator colorValue=\"#0073aa\" />;\n```",displayName:"colorindicator",props:{colorValue:{defaultValue:null,description:"The color of the indicator. Any value from the CSS `background` property\nis supported.",name:"colorValue",required:!0,type:{name:"Background<string | number>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/color-indicator/index.tsx#colorindicator"]={docgenInfo:colorindicator.__docgenInfo,name:"colorindicator",path:"packages/components/src/color-indicator/index.tsx#colorindicator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/duotone-picker/utils.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{fy:function(){return getDefaultColors},ZU:function(){return getGradientFromCSSColors},YK:function(){return getColorStopsFromColors},Aw:function(){return getColorsFromColorStops}});var colord__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/colord/index.mjs"),colord_plugins_names__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/colord/plugins/names.mjs");function getDefaultColors(palette){return!palette||palette.length<2?["#000","#fff"]:palette.map((_ref=>{let{color:color}=_ref;return{color:color,brightness:(0,colord__WEBPACK_IMPORTED_MODULE_0__.Vi)(color).brightness()}})).reduce(((_ref2,current)=>{let[min,max]=_ref2;return[current.brightness<=min.brightness?current:min,current.brightness>=max.brightness?current:max]}),[{brightness:1},{brightness:0}]).map((_ref3=>{let{color:color}=_ref3;return color}))}function getGradientFromCSSColors(){let colors=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],angle=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"90deg";const l=100/colors.length,stops=colors.map(((c,i)=>`${c} ${i*l}%, ${c} ${(i+1)*l}%`)).join(", ");return`linear-gradient( ${angle}, ${stops} )`}function getColorStopsFromColors(colors){return colors.map(((color,i)=>({position:100*i/(colors.length-1),color:color})))}function getColorsFromColorStops(){let colorStops=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return colorStops.map((_ref4=>{let{color:color}=_ref4;return color}))}(0,colord__WEBPACK_IMPORTED_MODULE_0__.l7)([colord_plugins_names__WEBPACK_IMPORTED_MODULE_1__.Z])},"./packages/icons/build-module/library/swatch.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const swatch=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M5 17.7c.4.5.8.9 1.2 1.2l1.1-1.4c-.4-.3-.7-.6-1-1L5 17.7zM5 6.3l1.4 1.1c.3-.4.6-.7 1-1L6.3 5c-.5.4-.9.8-1.3 1.3zm.1 7.8l-1.7.5c.2.6.4 1.1.7 1.6l1.5-.8c-.2-.4-.4-.8-.5-1.3zM4.8 12v-.7L3 11.1v1.8l1.7-.2c.1-.2.1-.5.1-.7zm3 7.9c.5.3 1.1.5 1.6.7l.5-1.7c-.5-.1-.9-.3-1.3-.5l-.8 1.5zM19 6.3c-.4-.5-.8-.9-1.2-1.2l-1.1 1.4c.4.3.7.6 1 1L19 6.3zm-.1 3.6l1.7-.5c-.2-.6-.4-1.1-.7-1.6l-1.5.8c.2.4.4.8.5 1.3zM5.6 8.6l-1.5-.8c-.3.5-.5 1-.7 1.6l1.7.5c.1-.5.3-.9.5-1.3zm2.2-4.5l.8 1.5c.4-.2.8-.4 1.3-.5l-.5-1.7c-.6.2-1.1.4-1.6.7zm8.8 13.5l1.1 1.4c.5-.4.9-.8 1.2-1.2l-1.4-1.1c-.2.3-.5.6-.9.9zm1.8-2.2l1.5.8c.3-.5.5-1.1.7-1.6l-1.7-.5c-.1.5-.3.9-.5 1.3zm2.6-4.3l-1.7.2v1.4l1.7.2V12v-.9zM11.1 3l.2 1.7h1.4l.2-1.7h-1.8zm3 2.1c.5.1.9.3 1.3.5l.8-1.5c-.5-.3-1.1-.5-1.6-.7l-.5 1.7zM12 19.2h-.7l-.2 1.8h1.8l-.2-1.7c-.2-.1-.5-.1-.7-.1zm2.1-.3l.5 1.7c.6-.2 1.1-.4 1.6-.7l-.8-1.5c-.4.2-.8.4-1.3.5z"}));__webpack_exports__.Z=swatch},"./node_modules/react-colorful/dist/index.module.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{W_:function(){return Ce},ef:function(){return ge}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function c(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r.indexOf(t=a[o])>=0||(n[t]=e[t]);return n}function s(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((function(e){t.current&&t.current(e)}));return t.current=e,o.current}var i=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=1),e>t?t:e<r?r:e},f=function(e){return"touches"in e},v=function(e,r){var t=e.getBoundingClientRect(),o=f(r)?r.touches[0]:r;return{left:i((o.pageX-(t.left+window.pageXOffset))/t.width),top:i((o.pageY-(t.top+window.pageYOffset))/t.height)}},d=function(e){!f(e)&&e.preventDefault()},h=react__WEBPACK_IMPORTED_MODULE_0__.memo((function(n){var a=n.onMove,l=n.onKey,i=c(n,["onMove","onKey"]),h=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),m=s(a),g=s(l),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){var e=function(e){d(e),(f(e)?e.touches.length>0:e.buttons>0)&&h.current?m(v(h.current,e)):t(!1)},r=function(){return t(!1)};function t(t){var o=p.current,n=t?self.addEventListener:self.removeEventListener;n(o?"touchmove":"mousemove",e),n(o?"touchend":"mouseup",r)}return[function(e){var r=e.nativeEvent,o=h.current;o&&(d(r),!function(e,r){return r&&!f(e)}(r,p.current)&&o&&(p.current=f(r),o.focus(),m(v(o,r)),t(!0)))},function(e){var r=e.which||e.keyCode;r<37||r>40||(e.preventDefault(),g({left:39===r?.05:37===r?-.05:0,top:40===r?.05:38===r?-.05:0}))},t]}),[g,m]),_=b[0],C=b[1],x=b[2];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){return x}),[x]),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",u({},i,{onTouchStart:_,onMouseDown:_,className:"react-colorful__interactive",ref:h,onKeyDown:C,tabIndex:0,role:"slider"}))})),m=function(e){return e.filter(Boolean).join(" ")},g=function(r){var t=r.color,o=r.left,n=r.top,a=void 0===n?.5:n,l=m(["react-colorful__pointer",r.className]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:l,style:{top:100*a+"%",left:100*o+"%"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},p=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=Math.pow(10,r)),Math.round(t*e)/t},M=(Math.PI,function(e){var r=e.s,t=e.v,o=e.a,n=(200-r)*t/100;return{h:p(e.h),s:p(n>0&&n<200?r*t/100/(n<=100?n:200-n)*100:0),l:p(n/2),a:p(o,2)}}),N=function(e){var r=M(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},w=function(e){var r=M(e);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},y=function(e){var r=e.h,t=e.s,o=e.v,n=e.a;r=r/360*6,t/=100,o/=100;var a=Math.floor(r),l=o*(1-t),u=o*(1-(r-a)*t),c=o*(1-(1-r+a)*t),s=a%6;return{r:p(255*[o,u,l,l,c,o][s]),g:p(255*[c,o,o,u,l,l][s]),b:p(255*[l,l,c,o,o,u][s]),a:p(n,2)}},O=function(e){var r=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?z({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:void 0===r[7]?1:Number(r[7])/(r[8]?100:1)}):{h:0,s:0,v:0,a:1}},I=O,z=function(e){var r=e.r,t=e.g,o=e.b,n=e.a,a=Math.max(r,t,o),l=a-Math.min(r,t,o),u=l?a===r?(t-o)/l:a===t?2+(o-r)/l:4+(r-t)/l:0;return{h:p(60*(u<0?u+6:u)),s:p(a?l/a*100:0),v:p(a/255*100),a:n}},K=react__WEBPACK_IMPORTED_MODULE_0__.memo((function(r){var t=r.hue,o=r.onChange,n=m(["react-colorful__hue",r.className]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:n},react__WEBPACK_IMPORTED_MODULE_0__.createElement(h,{onMove:function(e){o({h:360*e.left})},onKey:function(e){o({h:i(t+360*e.left,0,360)})},"aria-label":"Hue","aria-valuetext":p(t)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(g,{className:"react-colorful__hue-pointer",left:t/360,color:N({h:t,s:100,v:100,a:1})})))})),A=react__WEBPACK_IMPORTED_MODULE_0__.memo((function(r){var t=r.hsva,o=r.onChange,n={backgroundColor:N({h:t.h,s:100,v:100,a:1})};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"react-colorful__saturation",style:n},react__WEBPACK_IMPORTED_MODULE_0__.createElement(h,{onMove:function(e){o({s:100*e.left,v:100-100*e.top})},onKey:function(e){o({s:i(t.s+100*e.left,0,100),v:i(t.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+p(t.s)+"%, Brightness "+p(t.v)+"%"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(g,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:N(t)})))})),L=function(e,r){if(e===r)return!0;for(var t in e)if(e[t]!==r[t])return!1;return!0},D=function(e,r){return e.replace(/\s/g,"")===r.replace(/\s/g,"")};function F(e,t,l){var u=s(l),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((function(){return e.toHsva(t)})),i=c[0],f=c[1],v=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({color:t,hsva:i});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(!e.equal(t,v.current.color)){var r=e.toHsva(t);v.current={hsva:r,color:t},f(r)}}),[t,e]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var r;L(i,v.current.hsva)||e.equal(r=e.fromHsva(i),v.current.color)||(v.current={hsva:i,color:r},u(r))}),[i,e,u]);var d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(e){f((function(r){return Object.assign({},r,e)}))}),[]);return[i,d]}var S,P,T="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect,$=function(){T((function(){if("undefined"!=typeof document&&!P){(P=document.createElement("style")).innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}';var e=S||__webpack_require__.nc;e&&P.setAttribute("nonce",e),document.head.appendChild(P)}}),[])},R=function(r){var t=r.className,o=r.colorModel,n=r.color,a=void 0===n?o.defaultColor:n,l=r.onChange,s=c(r,["className","colorModel","color","onChange"]);$();var i=F(o,a,l),f=i[0],v=i[1],d=m(["react-colorful",t]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",u({},s,{className:d}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(A,{hsva:f,onChange:v}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(K,{hue:f.h,onChange:v,className:"react-colorful__last-control"}))},Q=function(r){var t=r.className,o=r.hsva,n=r.onChange,a={backgroundImage:"linear-gradient(90deg, "+w(Object.assign({},o,{a:0}))+", "+w(Object.assign({},o,{a:1}))+")"},l=m(["react-colorful__alpha",t]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:l},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(h,{onMove:function(e){n({a:e.left})},onKey:function(e){n({a:i(o.a+e.left)})},"aria-label":"Alpha","aria-valuetext":p(100*o.a)+"%"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(g,{className:"react-colorful__alpha-pointer",left:o.a,color:w(o)})))},U=function(r){var t=r.className,o=r.colorModel,n=r.color,a=void 0===n?o.defaultColor:n,l=r.onChange,s=c(r,["className","colorModel","color","onChange"]);$();var i=F(o,a,l),f=i[0],v=i[1],d=m(["react-colorful",t]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",u({},s,{className:d}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(A,{hsva:f,onChange:v}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(K,{hue:f.h,onChange:v}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Q,{hsva:f,onChange:v,className:"react-colorful__last-control"}))},me={defaultColor:"rgba(0, 0, 0, 1)",toHsva:O,fromHsva:function(e){var r=y(e);return"rgba("+r.r+", "+r.g+", "+r.b+", "+r.a+")"},equal:D},ge=function(r){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(U,u({},r,{colorModel:me}))},_e={defaultColor:"rgb(0, 0, 0)",toHsva:I,fromHsva:function(e){var r=y(e);return"rgb("+r.r+", "+r.g+", "+r.b+")"},equal:D},Ce=function(r){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(R,u({},r,{colorModel:_e}))}},"./packages/components/src/duotone-picker/stories/duotone-picker.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},default:function(){return stories_duotone_picker}});var react=__webpack_require__("./node_modules/react/index.js"),es6=__webpack_require__("./node_modules/fast-deep-equal/es6/index.js"),es6_default=__webpack_require__.n(es6),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),swatch=__webpack_require__("./packages/icons/build-module/library/swatch.js"),src_button=__webpack_require__("./packages/components/src/button/index.js"),color_palette=__webpack_require__("./packages/components/src/color-palette/index.tsx"),color_indicator=__webpack_require__("./packages/components/src/color-indicator/index.tsx"),icon=__webpack_require__("./packages/components/src/icon/index.tsx"),component=__webpack_require__("./packages/components/src/h-stack/component.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ColorOption(_ref){let{label:label,value:value,colors:colors,disableCustomColors:disableCustomColors,enableAlpha:enableAlpha,onChange:onChange}=_ref;const[isOpen,setIsOpen]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(src_button.Z,{className:"components-color-list-picker__swatch-button",onClick:()=>setIsOpen((prev=>!prev)),children:(0,jsx_runtime.jsxs)(component.Z,{justify:"flex-start",spacing:2,children:[value?(0,jsx_runtime.jsx)(color_indicator.Z,{colorValue:value,className:"components-color-list-picker__swatch-color"}):(0,jsx_runtime.jsx)(icon.Z,{icon:swatch.Z}),(0,jsx_runtime.jsx)("span",{children:label})]})}),isOpen&&(0,jsx_runtime.jsx)(color_palette.ZP,{className:"components-color-list-picker__color-picker",colors:colors,value:value,clearable:!1,onChange:onChange,disableCustomColors:disableCustomColors,enableAlpha:enableAlpha})]})}function ColorListPicker(_ref2){let{colors:colors,labels:labels,value:value=[],disableCustomColors:disableCustomColors,enableAlpha:enableAlpha,onChange:onChange}=_ref2;return(0,jsx_runtime.jsx)("div",{className:"components-color-list-picker",children:labels.map(((label,index)=>(0,jsx_runtime.jsx)(ColorOption,{label:label,value:value[index],colors:colors,disableCustomColors:disableCustomColors,enableAlpha:enableAlpha,onChange:newColor=>{const newColors=value.slice();newColors[index]=newColor,onChange(newColors)}},index)))})}ColorListPicker.displayName="ColorListPicker",ColorListPicker.__docgenInfo={description:"",methods:[],displayName:"ColorListPicker",props:{value:{defaultValue:{value:"[]",computed:!1},required:!1}}};var color_list_picker=ColorListPicker;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/color-list-picker/index.js"]={name:"ColorListPicker",docgenInfo:ColorListPicker.__docgenInfo,path:"packages/components/src/color-list-picker/index.js"});var circular_option_picker=__webpack_require__("./packages/components/src/circular-option-picker/index.js"),v_stack_component=__webpack_require__("./packages/components/src/v-stack/component.tsx"),gradient_bar=__webpack_require__("./packages/components/src/custom-gradient-picker/gradient-bar/index.js"),utils=__webpack_require__("./packages/components/src/duotone-picker/utils.js");const PLACEHOLDER_VALUES=["#333","#CCC"];function CustomDuotoneBar(_ref){let{value:value,onChange:onChange}=_ref;const hasGradient=!!value,values=hasGradient?value:PLACEHOLDER_VALUES,background=(0,utils.ZU)(values),controlPoints=(0,utils.YK)(values);return(0,jsx_runtime.jsx)(gradient_bar.Z,{disableInserter:!0,background:background,hasGradient:hasGradient,value:controlPoints,onChange:newColorStops=>{const newValue=(0,utils.Aw)(newColorStops);onChange(newValue)}})}CustomDuotoneBar.displayName="CustomDuotoneBar",CustomDuotoneBar.__docgenInfo={description:"",methods:[],displayName:"CustomDuotoneBar"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/duotone-picker/custom-duotone-bar.js"]={name:"CustomDuotoneBar",docgenInfo:CustomDuotoneBar.__docgenInfo,path:"packages/components/src/duotone-picker/custom-duotone-bar.js"});var spacer_component=__webpack_require__("./packages/components/src/spacer/component.tsx");function DuotonePicker(_ref){let{clearable:clearable=!0,unsetable:unsetable=!0,colorPalette:colorPalette,duotonePalette:duotonePalette,disableCustomColors:disableCustomColors,disableCustomDuotone:disableCustomDuotone,value:value,onChange:onChange}=_ref;const[defaultDark,defaultLight]=(0,react.useMemo)((()=>(0,utils.fy)(colorPalette)),[colorPalette]),isUnset="unset"===value,unsetOption=(0,jsx_runtime.jsx)(circular_option_picker.Z.Option,{value:"unset",isSelected:isUnset,tooltipText:(0,build_module.__)("Unset"),className:"components-duotone-picker__color-indicator",onClick:()=>{onChange(isUnset?void 0:"unset")}},"unset"),options=duotonePalette.map((_ref2=>{let{colors:colors,slug:slug,name:name}=_ref2;const style={background:(0,utils.ZU)(colors,"135deg"),color:"transparent"},tooltipText=null!=name?name:(0,build_module.gB)((0,build_module.__)("Duotone code: %s"),slug),label=name?(0,build_module.gB)((0,build_module.__)("Duotone: %s"),name):tooltipText,isSelected=es6_default()(colors,value);return(0,jsx_runtime.jsx)(circular_option_picker.Z.Option,{value:colors,isSelected:isSelected,"aria-label":label,tooltipText:tooltipText,style:style,onClick:()=>{onChange(isSelected?void 0:colors)}},slug)}));return(0,jsx_runtime.jsx)(circular_option_picker.Z,{options:unsetable?[unsetOption,...options]:options,actions:!!clearable&&(0,jsx_runtime.jsx)(circular_option_picker.Z.ButtonAction,{onClick:()=>onChange(void 0),children:(0,build_module.__)("Clear")}),children:(0,jsx_runtime.jsx)(spacer_component.Z,{paddingTop:4,children:(0,jsx_runtime.jsxs)(v_stack_component.Z,{spacing:3,children:[!disableCustomColors&&!disableCustomDuotone&&(0,jsx_runtime.jsx)(CustomDuotoneBar,{value:isUnset?void 0:value,onChange:onChange}),!disableCustomDuotone&&(0,jsx_runtime.jsx)(color_list_picker,{labels:[(0,build_module.__)("Shadows"),(0,build_module.__)("Highlights")],colors:colorPalette,value:isUnset?void 0:value,disableCustomColors:disableCustomColors,enableAlpha:!0,onChange:newColors=>{newColors[0]||(newColors[0]=defaultDark),newColors[1]||(newColors[1]=defaultLight);const newValue=newColors.length>=2?newColors:void 0;onChange(newValue)}})]})})})}DuotonePicker.displayName="DuotonePicker",DuotonePicker.__docgenInfo={description:"",methods:[],displayName:"DuotonePicker",props:{clearable:{defaultValue:{value:"true",computed:!1},required:!1},unsetable:{defaultValue:{value:"true",computed:!1},required:!1}}};var duotone_picker=DuotonePicker;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/duotone-picker/duotone-picker.js"]={name:"DuotonePicker",docgenInfo:DuotonePicker.__docgenInfo,path:"packages/components/src/duotone-picker/duotone-picker.js"});var stories_duotone_picker={title:"Components/DuotonePicker",component:duotone_picker,argTypes:{clearable:{control:{type:"boolean"}},disableCustomColors:{control:{type:"boolean"}},disableCustomDuotone:{control:{type:"boolean"}},onChange:{action:"onChange"},unsetable:{control:{type:"boolean"}}},parameters:{sourceLink:"packages/components/src/duotone-picker",storySource:{source:"/**\n * WordPress dependencies\n */\nimport { useState } from '@wordpress/element';\n\n/**\n * Internal dependencies\n */\nimport { DuotonePicker } from '../';\n\nexport default {\n\ttitle: 'Components/DuotonePicker',\n\tcomponent: DuotonePicker,\n\targTypes: {\n\t\tclearable: { control: { type: 'boolean' } },\n\t\tdisableCustomColors: { control: { type: 'boolean' } },\n\t\tdisableCustomDuotone: { control: { type: 'boolean' } },\n\t\tonChange: { action: 'onChange' },\n\t\tunsetable: { control: { type: 'boolean' } },\n\t},\n\tparameters: {\n\t\tcontrols: { expanded: true },\n\t\tdocs: { source: { state: 'open' } },\n\t},\n};\n\nconst DUOTONE_PALETTE = [\n\t{\n\t\tcolors: [ '#8c00b7', '#fcff41' ],\n\t\tname: 'Purple and yellow',\n\t\tslug: 'purple-yellow',\n\t},\n\t{\n\t\tcolors: [ '#000097', '#ff4747' ],\n\t\tname: 'Blue and red',\n\t\tslug: 'blue-red',\n\t},\n];\n\nconst COLOR_PALETTE = [\n\t{ color: '#ff4747', name: 'Red', slug: 'red' },\n\t{ color: '#fcff41', name: 'Yellow', slug: 'yellow' },\n\t{ color: '#000097', name: 'Blue', slug: 'blue' },\n\t{ color: '#8c00b7', name: 'Purple', slug: 'purple' },\n];\n\nconst Template = ( { onChange, ...args } ) => {\n\tconst [ value, setValue ] = useState();\n\n\treturn (\n\t\t<DuotonePicker\n\t\t\t{ ...args }\n\t\t\tonChange={ ( ...changeArgs ) => {\n\t\t\t\tsetValue( ...changeArgs );\n\t\t\t\tonChange( ...changeArgs );\n\t\t\t} }\n\t\t\tvalue={ value }\n\t\t/>\n\t);\n};\n\nexport const Default = Template.bind( {} );\nDefault.args = {\n\tcolorPalette: COLOR_PALETTE,\n\tduotonePalette: DUOTONE_PALETTE,\n};\n",locationsMap:{default:{startLoc:{col:17,line:47},endLoc:{col:1,line:60},startBody:{col:17,line:47},endBody:{col:1,line:60}}}},controls:{expanded:!0},docs:{source:{state:"open"}}}};const Template=_ref=>{let{onChange:onChange,...args}=_ref;const[value,setValue]=(0,react.useState)();return(0,jsx_runtime.jsx)(duotone_picker,{...args,onChange:function(){setValue(...arguments),onChange(...arguments)},value:value})};Template.displayName="Template";const Default=Template.bind({});Default.args={colorPalette:[{color:"#ff4747",name:"Red",slug:"red"},{color:"#fcff41",name:"Yellow",slug:"yellow"},{color:"#000097",name:"Blue",slug:"blue"},{color:"#8c00b7",name:"Purple",slug:"purple"}],duotonePalette:[{colors:["#8c00b7","#fcff41"],name:"Purple and yellow",slug:"purple-yellow"},{colors:["#000097","#ff4747"],name:"Blue and red",slug:"blue-red"}]}}}]);