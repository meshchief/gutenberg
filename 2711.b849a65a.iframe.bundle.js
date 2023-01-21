"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[2711],{"./packages/components/src/date-time/date/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return date}});var index_es=__webpack_require__("./node_modules/use-lilius/build/index.es.js"),startOfDay=__webpack_require__("./packages/components/node_modules/date-fns/esm/startOfDay/index.js"),subMonths=__webpack_require__("./packages/components/node_modules/date-fns/esm/subMonths/index.js"),format=__webpack_require__("./packages/components/node_modules/date-fns/esm/format/index.js"),addMonths=__webpack_require__("./packages/components/node_modules/date-fns/esm/addMonths/index.js"),isSameMonth=__webpack_require__("./packages/components/node_modules/date-fns/esm/isSameMonth/index.js"),isEqual=__webpack_require__("./packages/components/node_modules/date-fns/esm/isEqual/index.js"),isSameDay=__webpack_require__("./packages/components/node_modules/date-fns/esm/isSameDay/index.js"),addDays=__webpack_require__("./packages/components/node_modules/date-fns/esm/addDays/index.js"),subWeeks=__webpack_require__("./packages/components/node_modules/date-fns/esm/subWeeks/index.js"),addWeeks=__webpack_require__("./packages/components/node_modules/date-fns/esm/addWeeks/index.js"),startOfWeek=__webpack_require__("./packages/components/node_modules/date-fns/esm/startOfWeek/index.js"),endOfWeek=__webpack_require__("./packages/components/node_modules/date-fns/esm/endOfWeek/index.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),arrow_right=__webpack_require__("./packages/icons/build-module/library/arrow-right.js"),arrow_left=__webpack_require__("./packages/icons/build-module/library/arrow-left.js"),date_build_module=__webpack_require__("./packages/date/build-module/index.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),src_button=__webpack_require__("./packages/components/src/button/index.js"),config_values=__webpack_require__("./packages/components/src/utils/config-values.js"),colors_values=__webpack_require__("./packages/components/src/utils/colors-values.js"),component=__webpack_require__("./packages/components/src/h-stack/component.tsx"),heading_component=__webpack_require__("./packages/components/src/heading/component.tsx"),space=__webpack_require__("./packages/components/src/ui/utils/space.ts");const Wrapper=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e105ri6r5"})({name:"1khn195",styles:"box-sizing:border-box"}),Navigator=(0,emotion_styled_base_browser_esm.Z)(component.Z,{target:"e105ri6r4"})("margin-bottom:",(0,space.D)(4),";"),NavigatorHeading=(0,emotion_styled_base_browser_esm.Z)(heading_component.Z,{target:"e105ri6r3"})("font-size:",config_values.Z.fontSize,";font-weight:",config_values.Z.fontWeight,";strong{font-weight:",config_values.Z.fontWeightHeading,";}"),Calendar=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e105ri6r2"})("column-gap:",(0,space.D)(2),";display:grid;grid-template-columns:0.5fr repeat( 5, 1fr ) 0.5fr;justify-items:center;row-gap:",(0,space.D)(2),";"),DayOfWeek=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e105ri6r1"})("color:",colors_values.D.gray[700],";font-size:",config_values.Z.fontSize,";line-height:",config_values.Z.fontLineHeightBase,";&:nth-of-type( 1 ){justify-self:start;}&:nth-of-type( 7 ){justify-self:end;}"),DayButton=(0,emotion_styled_base_browser_esm.Z)(src_button.Z,{shouldForwardProp:prop=>!["column","isSelected","isToday","hasEvents"].includes(prop),target:"e105ri6r0"})("grid-column:",(props=>props.column),";position:relative;justify-content:center;",(props=>1===props.column&&"\n\t\tjustify-self: start;\n\t\t")," ",(props=>7===props.column&&"\n\t\tjustify-self: end;\n\t\t")," ",(props=>props.disabled&&"\n\t\tpointer-events: none;\n\t\t")," &&&{border-radius:100%;height:",(0,space.D)(7),";width:",(0,space.D)(7),";",(props=>props.isSelected&&`\n\t\t\tbackground: ${colors_values.D.ui.theme};\n\t\t\tcolor: ${colors_values.D.white};\n\t\t\t`)," ",(props=>!props.isSelected&&props.isToday&&`\n\t\t\tbackground: ${colors_values.D.gray[200]};\n\t\t\t`),";}",(props=>props.hasEvents&&`\n\t\t::before {\n\t\t\tbackground: ${props.isSelected?colors_values.D.white:colors_values.D.ui.theme};\n\t\t\tborder-radius: 2px;\n\t\t\tbottom: 0;\n\t\t\tcontent: " ";\n\t\t\theight: 4px;\n\t\t\tleft: 50%;\n\t\t\tmargin-left: -2px;\n\t\t\tposition: absolute;\n\t\t\twidth: 4px;\n\t\t}\n\t\t`),";");var utils=__webpack_require__("./packages/components/src/date-time/utils.ts"),constants=__webpack_require__("./packages/components/src/date-time/constants.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function DatePicker(_ref){let{currentDate:currentDate,onChange:onChange,events:events=[],isInvalidDate:isInvalidDate,onMonthPreviewed:onMonthPreviewed,startOfWeek:weekStartsOn=0}=_ref;const date=currentDate?(0,utils.g)(currentDate):new Date,{calendar:calendar,viewing:viewing,setSelected:setSelected,setViewing:setViewing,isSelected:isSelected,viewPreviousMonth:viewPreviousMonth,viewNextMonth:viewNextMonth}=(0,index_es.YA)({selected:[(0,startOfDay.Z)(date)],viewing:(0,startOfDay.Z)(date),weekStartsOn:weekStartsOn}),[focusable,setFocusable]=(0,react.useState)((0,startOfDay.Z)(date)),[isFocusWithinCalendar,setIsFocusWithinCalendar]=(0,react.useState)(!1),[prevCurrentDate,setPrevCurrentDate]=(0,react.useState)(currentDate);return currentDate!==prevCurrentDate&&(setPrevCurrentDate(currentDate),setSelected([(0,startOfDay.Z)(date)]),setViewing((0,startOfDay.Z)(date)),setFocusable((0,startOfDay.Z)(date))),(0,jsx_runtime.jsxs)(Wrapper,{className:"components-datetime__date",role:"application","aria-label":(0,build_module.__)("Calendar"),children:[(0,jsx_runtime.jsxs)(Navigator,{children:[(0,jsx_runtime.jsx)(src_button.Z,{icon:(0,build_module.dZ)()?arrow_right.Z:arrow_left.Z,variant:"tertiary","aria-label":(0,build_module.__)("View previous month"),onClick:()=>{viewPreviousMonth(),setFocusable((0,subMonths.Z)(focusable,1)),null==onMonthPreviewed||onMonthPreviewed((0,format.Z)((0,subMonths.Z)(viewing,1),constants.u))}}),(0,jsx_runtime.jsxs)(NavigatorHeading,{level:3,children:[(0,jsx_runtime.jsx)("strong",{children:(0,date_build_module.K_)("F",viewing,-viewing.getTimezoneOffset())})," ",(0,date_build_module.K_)("Y",viewing,-viewing.getTimezoneOffset())]}),(0,jsx_runtime.jsx)(src_button.Z,{icon:(0,build_module.dZ)()?arrow_left.Z:arrow_right.Z,variant:"tertiary","aria-label":(0,build_module.__)("View next month"),onClick:()=>{viewNextMonth(),setFocusable((0,addMonths.Z)(focusable,1)),null==onMonthPreviewed||onMonthPreviewed((0,format.Z)((0,addMonths.Z)(viewing,1),constants.u))}})]}),(0,jsx_runtime.jsxs)(Calendar,{onFocus:()=>setIsFocusWithinCalendar(!0),onBlur:()=>setIsFocusWithinCalendar(!1),children:[calendar[0][0].map((day=>(0,jsx_runtime.jsx)(DayOfWeek,{children:(0,date_build_module.K_)("D",day,-day.getTimezoneOffset())},day.toString()))),calendar[0].map((week=>week.map(((day,index)=>(0,isSameMonth.Z)(day,viewing)?(0,jsx_runtime.jsx)(Day,{day:day,column:index+1,isSelected:isSelected(day),isFocusable:(0,isEqual.Z)(day,focusable),isFocusAllowed:isFocusWithinCalendar,isToday:(0,isSameDay.Z)(day,new Date),isInvalid:!!isInvalidDate&&isInvalidDate(day),numEvents:events.filter((event=>(0,isSameDay.Z)(event.date,day))).length,onClick:()=>{setSelected([day]),setFocusable(day),null==onChange||onChange((0,format.Z)(new Date(day.getFullYear(),day.getMonth(),day.getDate(),date.getHours(),date.getMinutes(),date.getSeconds(),date.getMilliseconds()),constants.u))},onKeyDown:event=>{let nextFocusable;"ArrowLeft"===event.key&&(nextFocusable=(0,addDays.Z)(day,(0,build_module.dZ)()?1:-1)),"ArrowRight"===event.key&&(nextFocusable=(0,addDays.Z)(day,(0,build_module.dZ)()?-1:1)),"ArrowUp"===event.key&&(nextFocusable=(0,subWeeks.Z)(day,1)),"ArrowDown"===event.key&&(nextFocusable=(0,addWeeks.Z)(day,1)),"PageUp"===event.key&&(nextFocusable=(0,subMonths.Z)(day,1)),"PageDown"===event.key&&(nextFocusable=(0,addMonths.Z)(day,1)),"Home"===event.key&&(nextFocusable=(0,startOfWeek.Z)(day)),"End"===event.key&&(nextFocusable=(0,startOfDay.Z)((0,endOfWeek.Z)(day))),nextFocusable&&(event.preventDefault(),setFocusable(nextFocusable),(0,isSameMonth.Z)(nextFocusable,viewing)||(setViewing(nextFocusable),null==onMonthPreviewed||onMonthPreviewed((0,format.Z)(nextFocusable,constants.u))))}},day.toString()):null))))]})]})}function Day(_ref2){let{day:day,column:column,isSelected:isSelected,isFocusable:isFocusable,isFocusAllowed:isFocusAllowed,isToday:isToday,isInvalid:isInvalid,numEvents:numEvents,onClick:onClick,onKeyDown:onKeyDown}=_ref2;const ref=(0,react.useRef)();return(0,react.useEffect)((()=>{ref.current&&isFocusable&&isFocusAllowed&&ref.current.focus()}),[isFocusable]),(0,jsx_runtime.jsx)(DayButton,{ref:ref,className:"components-datetime__date__day",disabled:isInvalid,tabIndex:isFocusable?0:-1,"aria-label":getDayLabel(day,isSelected,numEvents),column:column,isSelected:isSelected,isToday:isToday,hasEvents:numEvents>0,onClick:onClick,onKeyDown:onKeyDown,children:(0,date_build_module.K_)("j",day,-day.getTimezoneOffset())})}function getDayLabel(date,isSelected,numEvents){const{formats:formats}=(0,date_build_module.Gw)(),localizedDate=(0,date_build_module.K_)(formats.date,date,-date.getTimezoneOffset());return isSelected&&numEvents>0?(0,build_module.gB)((0,build_module._n)("%1$s. Selected. There is %2$d event","%1$s. Selected. There are %2$d events",numEvents),localizedDate,numEvents):isSelected?(0,build_module.gB)((0,build_module.__)("%1$s. Selected"),localizedDate):numEvents>0?(0,build_module.gB)((0,build_module._n)("%1$s. There is %2$d event","%1$s. There are %2$d events",numEvents),localizedDate,numEvents):localizedDate}DatePicker.displayName="DatePicker",Day.displayName="Day";var date=DatePicker;try{DatePicker.displayName="DatePicker",DatePicker.__docgenInfo={description:"DatePicker is a React component that renders a calendar for date selection.\n\n```jsx\nimport { DatePicker } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyDatePicker = () => {\n  const [ date, setDate ] = useState( new Date() );\n\n  return (\n    <DatePicker\n      currentDate={ date }\n      onChange={ ( newDate ) => setDate( newDate ) }\n    />\n  );\n};\n```",displayName:"DatePicker",props:{currentDate:{defaultValue:null,description:"The current date and time at initialization. Optionally pass in a `null`\nvalue to specify no date is currently selected.",name:"currentDate",required:!1,type:{name:"string | number | Date"}},onChange:{defaultValue:null,description:"The function called when a new date has been selected. It is passed the\ndate as an argument.",name:"onChange",required:!1,type:{name:"(date: string) => void"}},isInvalidDate:{defaultValue:null,description:"A callback function which receives a Date object representing a day as an\nargument, and should return a Boolean to signify if the day is valid or\nnot.",name:"isInvalidDate",required:!1,type:{name:"(date: Date) => boolean"}},onMonthPreviewed:{defaultValue:null,description:"A callback invoked when selecting the previous/next month in the date\npicker. The callback receives the new month date in the ISO format as an\nargument.",name:"onMonthPreviewed",required:!1,type:{name:"(date: string) => void"}},events:{defaultValue:{value:"[]"},description:"List of events to show in the date picker. Each event will appear as a\ndot on the day of the event.",name:"events",required:!1,type:{name:"DatePickerEvent[]"}},startOfWeek:{defaultValue:{value:"0"},description:"The day that the week should start on. 0 for Sunday, 1 for Monday, etc.",name:"startOfWeek",required:!1,type:{name:"enum",value:[{value:"0"},{value:"2"},{value:"1"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/date-time/date/index.tsx#DatePicker"]={docgenInfo:DatePicker.__docgenInfo,name:"DatePicker",path:"packages/components/src/date-time/date/index.tsx#DatePicker"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/heading/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return heading_component}});var context_connect=__webpack_require__("./packages/components/src/ui/context/context-connect.ts"),component=__webpack_require__("./packages/components/src/view/component.tsx"),use_context_system=__webpack_require__("./packages/components/src/ui/context/use-context-system.js"),hook=__webpack_require__("./packages/components/src/text/hook.js"),font_size=__webpack_require__("./packages/components/src/ui/utils/font-size.ts"),colors_values=__webpack_require__("./packages/components/src/utils/colors-values.js"),config_values=__webpack_require__("./packages/components/src/utils/config-values.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedHeading(props,forwardedRef){const headerProps=function useHeading(props){const{as:asProp,level:level=2,...otherProps}=(0,use_context_system.y)(props,"Heading"),as=asProp||`h${level}`,a11yProps={};return"string"==typeof as&&"h"!==as[0]&&(a11yProps.role="heading",a11yProps["aria-level"]="string"==typeof level?parseInt(level):level),{...(0,hook.Z)({color:colors_values.D.gray[900],size:(0,font_size.gZ)(level),isBlock:!0,weight:config_values.Z.fontWeightHeading,...otherProps}),...a11yProps,as:as}}(props);return(0,jsx_runtime.jsx)(component.Z,{...headerProps,ref:forwardedRef})}UnconnectedHeading.displayName="UnconnectedHeading";const Heading=(0,context_connect.Iq)(UnconnectedHeading,"Heading");var heading_component=Heading;try{Heading.displayName="Heading",Heading.__docgenInfo={description:'`Heading` renders headings and titles using the library\'s typography system.\n\n```jsx\nimport { __experimentalHeading as Heading } from "@wordpress/components";\n\nfunction Example() {\n  return <Heading>Code is Poetry</Heading>;\n}\n```',displayName:"Heading",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},color:{defaultValue:null,description:"Adjusts the text color.",name:"color",required:!1,type:{name:"Color"}},align:{defaultValue:null,description:"Adjusts the text alignment.",name:"align",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"initial"'},{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"justify"'},{value:'"-moz-initial"'},{value:'"revert"'},{value:'"unset"'},{value:'"end"'},{value:'"start"'},{value:'"match-parent"'}]}},ellipsis:{defaultValue:{value:"'…'"},description:"The ellipsis string when truncating the text by the `limit` prop's value.",name:"ellipsis",required:!1,type:{name:"string"}},ellipsizeMode:{defaultValue:{value:"'auto'"},description:"Determines where to truncate.  For example, we can truncate text right in\nthe middle. To do this, we need to set `ellipsizeMode` to `middle` and a\ntext `limit`.\n\n* `auto`: Trims content at the end automatically without a `limit`.\n* `head`: Trims content at the beginning. Requires a `limit`.\n* `middle`: Trims content in the middle. Requires a `limit`.\n* `tail`: Trims content at the end. Requires a `limit`.",name:"ellipsizeMode",required:!1,type:{name:"enum",value:[{value:'"head"'},{value:'"none"'},{value:'"auto"'},{value:'"middle"'},{value:'"tail"'}]}},limit:{defaultValue:{value:"0"},description:"Determines the max number of characters to be displayed before the rest\nof the text gets truncated. Requires `ellipsizeMode` to assume values\ndifferent from `auto` and `none`.",name:"limit",required:!1,type:{name:"number"}},numberOfLines:{defaultValue:{value:"0"},description:"Clamps the text content to the specified `numberOfLines`, adding an\nellipsis at the end. Note: this feature ignores the value of the\n`ellipsis` prop and always displays the default `…` ellipsis.",name:"numberOfLines",required:!1,type:{name:"number"}},isBlock:{defaultValue:null,description:"Sets `Text` to have `display: block`.",name:"isBlock",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"Adjusts style variation of the text.",name:"variant",required:!1,type:{name:'"muted"'}},display:{defaultValue:null,description:"Adjusts the CSS display.",name:"display",required:!1,type:{name:"Display"}},letterSpacing:{defaultValue:null,description:"Adjusts letter-spacing of the text.",name:"letterSpacing",required:!1,type:{name:"LetterSpacing<string | number>"}},adjustLineHeightForInnerControls:{defaultValue:null,description:"Automatically calculate the appropriate line-height value for contents that render text and Control elements (e.g. `TextInput`).",name:"adjustLineHeightForInnerControls",required:!1,type:{name:'boolean | "small" | "medium" | "large" | "xSmall"'}},isDestructive:{defaultValue:{value:"false"},description:"Renders a destructive color.",name:"isDestructive",required:!1,type:{name:"boolean"}},highlightEscape:{defaultValue:null,description:"Escape characters in `highlightWords` which are meaningful in regular expressions.",name:"highlightEscape",required:!1,type:{name:"boolean"}},highlightCaseSensitive:{defaultValue:null,description:"Determines if `highlightWords` should be case sensitive.",name:"highlightCaseSensitive",required:!1,type:{name:"boolean"}},highlightSanitize:{defaultValue:null,description:"Array of search words. String search terms are automatically cast to RegExps unless `highlightEscape` is true.",name:"highlightSanitize",required:!1,type:{name:"(text: string) => string"}},lineHeight:{defaultValue:null,description:"Adjusts all text line-height based on the typography system.",name:"lineHeight",required:!1,type:{name:"LineHeight<string | number>"}},optimizeReadabilityFor:{defaultValue:null,description:"The `Text` color can be adapted to a background color for optimal readability. `optimizeReadabilityFor` can accept CSS variables, in addition to standard CSS color values (e.g. Hex, RGB, HSL, etc...).",name:"optimizeReadabilityFor",required:!1,type:{name:"Color"}},truncate:{defaultValue:null,description:"Enables text truncation. When `truncate` is set,we are able to truncate the long text in a variety of ways.",name:"truncate",required:!1,type:{name:"boolean"}},upperCase:{defaultValue:null,description:"Uppercases the text content.",name:"upperCase",required:!1,type:{name:"boolean"}},weight:{defaultValue:null,description:"Adjusts font-weight of the text.",name:"weight",required:!1,type:{name:"FontWeight | TextWeight"}},highlightWords:{defaultValue:null,description:"Letters or words within `Text` can be highlighted using `highlightWords`.",name:"highlightWords",required:!1,type:{name:"string[]"}},level:{defaultValue:{value:"2"},description:"Passing any of the heading levels to `level` will both render the correct\ntypographic text size as well as the semantic element corresponding to\nthe level (`h1` for `1` for example).",name:"level",required:!1,type:{name:"enum",value:[{value:"2"},{value:"1"},{value:'"1"'},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'}]}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | ... 507 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/heading/component.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"packages/components/src/heading/component.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}},"./packages/icons/build-module/library/arrow-left.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const arrowLeft=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"}));__webpack_exports__.Z=arrowLeft},"./packages/icons/build-module/library/arrow-right.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const arrowRight=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"}));__webpack_exports__.Z=arrowRight},"./packages/components/src/date-time/stories/utils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{C:function(){return daysFromNow},Q:function(){return isWeekend}});const daysFromNow=function daysFromNow(days){const date=new Date;return date.setDate(date.getDate()+days),date},isWeekend=function isWeekend(date){return 0===date.getDay()||6===date.getDay()}}}]);