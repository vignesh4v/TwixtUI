"use strict";(self.webpackChunkreact_examples=self.webpackChunkreact_examples||[]).push([[5542],{"./stories/List/SimpleTable.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicTableWithHeader:()=>BasicTableWithHeader,TableWithActionLinks:()=>TableWithActionLinks,TableWithAddButton:()=>TableWithAddButton,TableWithDefaultSortedField:()=>TableWithDefaultSortedField,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SimpleTable_stories});var react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("../react/src/CallsToAction/Button/index.js"),Link=__webpack_require__("../react/src/CallsToAction/Link/index.js"),BoxItem=__webpack_require__("../react/src/Containers/BoxItem/index.js"),Icon=__webpack_require__("../react/src/Icon.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||_unsupported_iterable_to_array(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _to_consumable_array(arr){return function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}(arr)||function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupported_iterable_to_array(arr)||function _non_iterable_spread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_array_like_to_array(o,minLen):void 0}}var SectionHeader=function(param){var title=param.title;return title?react.createElement("div",{className:"px-4 md:px-10 py-4 md:py-7"},react.createElement("div",{className:"flex items-center justify-between"},react.createElement("p",{className:"focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"},title))):null},TableFilters=function(){return react.createElement("div",{className:"sm:flex items-center justify-between py-4 px-4"},react.createElement("span",{className:"text-gray-600"},"Table Filter under development"))},AddButton=function(param){var label=param.label,onClick=param.onClick;return react.createElement("div",{className:"px-4 md:px-10 py-4 md:py-7"},react.createElement(Button.A,{variant:"primary",label,onClick,type:"secondary"}))},TableHeader=function(param){var _config_actions,config=param.config,sortField=param.sortField,sortOrder=param.sortOrder,onSort=param.onSort,displayFields=(null==config?void 0:config.displayFields)||[];return react.createElement("thead",{className:"bg-gray-50 dark:bg-neutral-700"},react.createElement("tr",{className:"focus:outline-none border border-gray-100 rounded"},displayFields.map((function(field){return react.createElement("th",{key:field.fieldId,className:"px-6 py-3 text-start text-xs font-strong text-gray-500 uppercase dark:text-neutral-500 cursor-pointer",onClick:function(){return onSort(field.fieldId)}},react.createElement("div",{className:"flex items-center"},field.label,sortField===field.fieldId&&react.createElement(Icon.A,{type:"asc"===sortOrder?"chevronUp":"chevronDown",variant:"outline",overwriteClass:"ml-2 h-4 w-4"})))})),(null==config||null===(_config_actions=config.actions)||void 0===_config_actions?void 0:_config_actions.length)>0&&react.createElement("th",{className:"px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"},"Actions")))},TableBody=function(param){var config=param.config,data=param.data;return react.createElement("tbody",null,data.map((function(dataItem){return react.createElement(TableRow,{key:dataItem[config.uniqueFieldId],config,dataItem})})))},TableRow=function(param){var _config_actions,config=param.config,dataItem=param.dataItem,displayFields=(null==config?void 0:config.displayFields)||[],actions=(null==config?void 0:config.actions)||[];return react.createElement("tr",{className:"focus:outline-none h-12 border border-gray-100 rounded"},displayFields.map((function(field){return react.createElement("td",{className:field.rowStyle,key:field.fieldId},react.createElement("div",{className:field.cellStyle},react.createElement("p",{className:field.textStyle},dataItem[field.fieldId])))})),(null==config||null===(_config_actions=config.actions)||void 0===_config_actions?void 0:_config_actions.length)>0&&react.createElement("td",{className:"pl-4"},react.createElement("div",{className:"flex px-2"},actions.map((function(action){return react.createElement("div",{className:"space-x-2",key:action.label},"button"===action.actionType&&react.createElement(Button.A,{type:action.type,label:action.label,leftIcon:action.icon,onClick:function(){action.onClick&&action.onClick(dataItem)},overwriteClass:action.overwriteClass}),"link"===action.actionType&&react.createElement(Link.A,{label:action.label,leftIcon:action.icon,link:action.link,onClick:function(){action.onClick&&action.onClick(dataItem)},overwriteClass:action.overwriteClass}),"box-item"===action.actionType&&react.createElement(BoxItem.A,{type:"inline",overwriteClass:action.overwriteClass},action.label))})))))},Table=function(param){var _config_sorting,_config_sorting1,title=param.title,config=param.config,data=param.data,_useState=_sliced_to_array((0,react.useState)((null===(_config_sorting=config.sorting)||void 0===_config_sorting?void 0:_config_sorting.fieldId)||null),2),sortField=_useState[0],setSortField=_useState[1],_useState1=_sliced_to_array((0,react.useState)((null===(_config_sorting1=config.sorting)||void 0===_config_sorting1?void 0:_config_sorting1.order)||"asc"),2),sortOrder=_useState1[0],setSortOrder=_useState1[1],sortedData=(0,react.useMemo)((function(){return sortField?_to_consumable_array(data).sort((function(a,b){var aValue=a[sortField],bValue=b[sortField];return aValue<bValue?"asc"===sortOrder?-1:1:aValue>bValue?"asc"===sortOrder?1:-1:0})):data}),[data,sortField,sortOrder]),_config_canShowFilter=config.canShowFilter,canShowFilter=void 0!==_config_canShowFilter&&_config_canShowFilter,_config_canShowHeader=config.canShowHeader,canShowHeader=void 0!==_config_canShowHeader&&_config_canShowHeader,_config_canShowAddButton=config.canShowAddButton,canShowAddButton=void 0!==_config_canShowAddButton&&_config_canShowAddButton;return react.createElement("div",{className:"sm:px-6 w-full"},canShowHeader&&react.createElement(SectionHeader,{title}),canShowFilter&&react.createElement(TableFilters,null),canShowAddButton&&react.createElement(AddButton,{label:config.addLabel,onClick:config.onAddClick}),react.createElement("div",{className:"bg-white px-4 md:px-8 xl:px-10"},react.createElement("div",{className:"overflow-x-auto"},react.createElement("table",{className:"w-full whitespace-nowrap"},react.createElement(TableHeader,{config,sortField,sortOrder,onSort:function(fieldId){var newSortOrder=sortField===fieldId&&"asc"===sortOrder?"desc":"asc";setSortField(fieldId),setSortOrder(newSortOrder)}}),react.createElement(TableBody,{config,data:sortedData})))))};const SimpleTable=Table;Table.__docgenInfo={description:"",methods:[],displayName:"Table"};const SimpleTable_stories={title:"List/TwixtSimpleTable",component:SimpleTable,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}};var BasicTableWithHeader=function(){return react.createElement(SimpleTable,{title:"Users List",config:{canShowHeader:!0,canShowFilter:!1,canShowAddButton:!1,uniqueFieldId:"id",displayFields:[{fieldId:"name",label:"Name",rowStyle:"px-6",cellStyle:"",textStyle:"text-sm font-medium text-gray-800"},{fieldId:"age",label:"Age",rowStyle:"px-6",cellStyle:"",textStyle:"text-sm text-gray-800"},{fieldId:"address",label:"Address",rowStyle:"px-6",cellStyle:"",textStyle:"text-sm text-gray-800"}],actions:[]},data:[{id:1,name:"John Brown",age:45,address:"New York No. 1 Lake Park"},{id:2,name:"Jim Green",age:27,address:"London No. 1 Lake Park"},{id:3,name:"Joe Black",age:31,address:"Sidney No. 1 Lake Park"}]})},TableWithActionLinks=function(){var actionLinksConfig={canShowHeader:!0,uniqueFieldId:"id",displayFields:[{fieldId:"name",label:"Name",rowStyle:"px-5",cellStyle:"py-3",textStyle:"text-sm font-medium leading-none text-gray-600"},{fieldId:"email",label:"Email",rowStyle:"px-5",cellStyle:"py-3",textStyle:"text-sm leading-none text-gray-500"}],actions:[{actionType:"link",label:"Edit",onClick:function(data){return console.log("Edit clicked",data)}},{actionType:"box-item",label:" |",overwriteClass:"px-2"},{actionType:"link",label:"Delete",link:"https://github.com/web-slate/TwixtUI",onClick:function(data){return console.log("Delete clicked",data)}}]};return react.createElement(SimpleTable,{title:"Users List",config:actionLinksConfig,data:[{id:1,name:"John Doe",email:"john@example.com"},{id:2,name:"Jane Smith",email:"jane@example.com"}]})},TableWithAddButton=function(){var addButtonConfig={canShowHeader:!0,canShowAddButton:!0,uniqueFieldId:"id",addLabel:"Add User",onAddClick:function(){return alert("Add button clicked")},displayFields:[{fieldId:"name",label:"Name",rowStyle:"px-5",cellStyle:"py-3",textStyle:"text-sm font-medium leading-none text-gray-600"},{fieldId:"email",label:"email",rowStyle:"px-5",cellStyle:"py-3",textStyle:"text-sm leading-none text-gray-500"}]};return react.createElement(SimpleTable,{title:"Users List",config:addButtonConfig,data:[{id:1,name:"John Doe",email:"john@example.com"},{id:2,name:"Jane Smith",email:"jane@example.com"}]})},TableWithDefaultSortedField=function(){var defaultSortingConfig={canShowHeader:!0,canShowAddButton:!0,uniqueFieldId:"id",addLabel:"Add User",onAddClick:function(){return alert("Add button clicked")},sorting:{fieldId:"name",order:"desc"},displayFields:[{fieldId:"name",label:"Name",rowStyle:"px-5",cellStyle:"py-3",textStyle:"text-sm font-medium leading-none text-gray-600"},{fieldId:"email",label:"email",rowStyle:"px-5",cellStyle:"py-3",textStyle:"text-sm leading-none text-gray-500"}]};return react.createElement(SimpleTable,{title:"Users List",config:defaultSortingConfig,data:[{id:1,name:"Marie Curie",email:"marie.curie@example.com"},{id:2,name:"Isaac Newton",email:"isaac.newton@example.com"},{id:3,name:"Nikola Tesla",email:"nikola.tesla@example.com"},{id:4,name:"Charles Darwin",email:"charles.darwin@example.com"},{id:5,name:"Albert Einstein",email:"albert.einstein@example.com"},{id:6,name:"Galileo Galilei",email:"galileo.galilei@example.com"},{id:7,name:"Ada Lovelace",email:"ada.lovelace@example.com"},{id:8,name:"James Clerk Maxwell",email:"james.maxwell@example.com"},{id:9,name:"Richard Feynman",email:"richard.feynman@example.com"},{id:10,name:"Niels Bohr",email:"niels.bohr@example.com"},{id:11,name:"Rosalind Franklin",email:"rosalind.franklin@example.com"},{id:12,name:"Michael Faraday",email:"michael.faraday@example.com"},{id:13,name:"Stephen Hawking",email:"stephen.hawking@example.com"},{id:14,name:"J.J. Thomson",email:"jj.thomson@example.com"},{id:15,name:"Carl Sagan",email:"carl.sagan@example.com"}]})};const __namedExportsOrder=["BasicTableWithHeader","TableWithActionLinks","TableWithAddButton","TableWithDefaultSortedField"];BasicTableWithHeader.parameters={...BasicTableWithHeader.parameters,docs:{...BasicTableWithHeader.parameters?.docs,source:{originalSource:"() => {\n  const tableConfig = {\n    canShowHeader: true,\n    canShowFilter: false,\n    canShowAddButton: false,\n    uniqueFieldId: 'id',\n    displayFields: [{\n      fieldId: 'name',\n      label: 'Name',\n      rowStyle: 'px-6',\n      cellStyle: '',\n      textStyle: 'text-sm font-medium text-gray-800'\n    }, {\n      fieldId: 'age',\n      label: 'Age',\n      rowStyle: 'px-6',\n      cellStyle: '',\n      textStyle: 'text-sm text-gray-800'\n    }, {\n      fieldId: 'address',\n      label: 'Address',\n      rowStyle: 'px-6',\n      cellStyle: '',\n      textStyle: 'text-sm text-gray-800'\n    }],\n    actions: []\n  };\n  const tableData = [{\n    id: 1,\n    name: 'John Brown',\n    age: 45,\n    address: 'New York No. 1 Lake Park'\n  }, {\n    id: 2,\n    name: 'Jim Green',\n    age: 27,\n    address: 'London No. 1 Lake Park'\n  }, {\n    id: 3,\n    name: 'Joe Black',\n    age: 31,\n    address: 'Sidney No. 1 Lake Park'\n  }];\n  return <TwixtSimpleTable title=\"Users List\" config={tableConfig} data={tableData} />;\n}",...BasicTableWithHeader.parameters?.docs?.source}}},TableWithActionLinks.parameters={...TableWithActionLinks.parameters,docs:{...TableWithActionLinks.parameters?.docs,source:{originalSource:"() => {\n  const actionLinksConfig = {\n    canShowHeader: true,\n    uniqueFieldId: 'id',\n    displayFields: [{\n      fieldId: 'name',\n      label: 'Name',\n      rowStyle: 'px-5',\n      cellStyle: 'py-3',\n      textStyle: 'text-sm font-medium leading-none text-gray-600'\n    }, {\n      fieldId: 'email',\n      label: 'Email',\n      rowStyle: 'px-5',\n      cellStyle: 'py-3',\n      textStyle: 'text-sm leading-none text-gray-500'\n    }],\n    actions: [{\n      actionType: 'link',\n      label: 'Edit',\n      onClick: data => console.log('Edit clicked', data)\n    }, {\n      actionType: 'box-item',\n      label: ' |',\n      overwriteClass: 'px-2'\n    }, {\n      actionType: 'link',\n      label: 'Delete',\n      link: 'https://github.com/web-slate/TwixtUI',\n      onClick: data => console.log('Delete clicked', data)\n    }]\n  };\n  const actionLinksData = [{\n    id: 1,\n    name: 'John Doe',\n    email: 'john@example.com'\n  }, {\n    id: 2,\n    name: 'Jane Smith',\n    email: 'jane@example.com'\n  }];\n  return <TwixtSimpleTable title=\"Users List\" config={actionLinksConfig} data={actionLinksData} />;\n}",...TableWithActionLinks.parameters?.docs?.source}}},TableWithAddButton.parameters={...TableWithAddButton.parameters,docs:{...TableWithAddButton.parameters?.docs,source:{originalSource:"() => {\n  const addButtonConfig = {\n    canShowHeader: true,\n    canShowAddButton: true,\n    uniqueFieldId: 'id',\n    addLabel: 'Add User',\n    onAddClick: () => alert('Add button clicked'),\n    displayFields: [{\n      fieldId: 'name',\n      label: 'Name',\n      rowStyle: 'px-5',\n      cellStyle: 'py-3',\n      textStyle: 'text-sm font-medium leading-none text-gray-600'\n    }, {\n      fieldId: 'email',\n      label: 'email',\n      rowStyle: 'px-5',\n      cellStyle: 'py-3',\n      textStyle: 'text-sm leading-none text-gray-500'\n    }]\n  };\n  const addButtonData = [{\n    id: 1,\n    name: 'John Doe',\n    email: 'john@example.com'\n  }, {\n    id: 2,\n    name: 'Jane Smith',\n    email: 'jane@example.com'\n  }];\n  return <TwixtSimpleTable title=\"Users List\" config={addButtonConfig} data={addButtonData} />;\n}",...TableWithAddButton.parameters?.docs?.source}}},TableWithDefaultSortedField.parameters={...TableWithDefaultSortedField.parameters,docs:{...TableWithDefaultSortedField.parameters?.docs,source:{originalSource:"() => {\n  const defaultSortingConfig = {\n    canShowHeader: true,\n    canShowAddButton: true,\n    uniqueFieldId: 'id',\n    addLabel: 'Add User',\n    onAddClick: () => alert('Add button clicked'),\n    sorting: {\n      fieldId: 'name',\n      order: 'desc'\n    },\n    displayFields: [{\n      fieldId: 'name',\n      label: 'Name',\n      rowStyle: 'px-5',\n      cellStyle: 'py-3',\n      textStyle: 'text-sm font-medium leading-none text-gray-600'\n    }, {\n      fieldId: 'email',\n      label: 'email',\n      rowStyle: 'px-5',\n      cellStyle: 'py-3',\n      textStyle: 'text-sm leading-none text-gray-500'\n    }]\n  };\n  const defaultSortingData = [{\n    id: 1,\n    name: 'Marie Curie',\n    email: 'marie.curie@example.com'\n  }, {\n    id: 2,\n    name: 'Isaac Newton',\n    email: 'isaac.newton@example.com'\n  }, {\n    id: 3,\n    name: 'Nikola Tesla',\n    email: 'nikola.tesla@example.com'\n  }, {\n    id: 4,\n    name: 'Charles Darwin',\n    email: 'charles.darwin@example.com'\n  }, {\n    id: 5,\n    name: 'Albert Einstein',\n    email: 'albert.einstein@example.com'\n  }, {\n    id: 6,\n    name: 'Galileo Galilei',\n    email: 'galileo.galilei@example.com'\n  }, {\n    id: 7,\n    name: 'Ada Lovelace',\n    email: 'ada.lovelace@example.com'\n  }, {\n    id: 8,\n    name: 'James Clerk Maxwell',\n    email: 'james.maxwell@example.com'\n  }, {\n    id: 9,\n    name: 'Richard Feynman',\n    email: 'richard.feynman@example.com'\n  }, {\n    id: 10,\n    name: 'Niels Bohr',\n    email: 'niels.bohr@example.com'\n  }, {\n    id: 11,\n    name: 'Rosalind Franklin',\n    email: 'rosalind.franklin@example.com'\n  }, {\n    id: 12,\n    name: 'Michael Faraday',\n    email: 'michael.faraday@example.com'\n  }, {\n    id: 13,\n    name: 'Stephen Hawking',\n    email: 'stephen.hawking@example.com'\n  }, {\n    id: 14,\n    name: 'J.J. Thomson',\n    email: 'jj.thomson@example.com'\n  }, {\n    id: 15,\n    name: 'Carl Sagan',\n    email: 'carl.sagan@example.com'\n  }];\n  return <TwixtSimpleTable title=\"Users List\" config={defaultSortingConfig} data={defaultSortingData} />;\n}",...TableWithDefaultSortedField.parameters?.docs?.source}}}},"../react/src/CallsToAction/Button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TwixtButton});var react=__webpack_require__("./node_modules/react/index.js"),Spinner=__webpack_require__("../react/src/Communications/Spinner/index.js");function TwixtButton(param){var _param_id=param.id,id=void 0===_param_id?"":_param_id,_param_type=param.type,type=void 0===_param_type?"button":_param_type,_param_variant=param.variant,variant=void 0===_param_variant?"default":_param_variant,_param_background=param.background,background=void 0===_param_background?"":_param_background,_param_color=param.color,color=void 0===_param_color?"":_param_color,children=param.children,_param_leftIcon=param.leftIcon,leftIcon=void 0===_param_leftIcon?null:_param_leftIcon,_param_rightIcon=param.rightIcon,rightIcon=void 0===_param_rightIcon?null:_param_rightIcon,label=param.label,_param_hideLabel=param.hideLabel,hideLabel=void 0!==_param_hideLabel&&_param_hideLabel,_param_disabled=param.disabled,disabled=void 0!==_param_disabled&&_param_disabled,_param_showSpinner=param.showSpinner,showSpinner=void 0!==_param_showSpinner&&_param_showSpinner,onClick=param.onClick,overwriteClass=param.overwriteClass,_getButtonStyles=function(){switch(variant){case"primary":return{background:"bg-blue-700",color:"text-white",hover:"hover:bg-blue-800",focus:"focus:ring-blue-300",dark:"dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"};case"secondary":return{background:"bg-gray-700",color:"text-white",hover:"hover:bg-gray-800",focus:"focus:ring-gray-300",dark:"dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"};case"transparent":return{background:"bg-transparent",color:"text-gray-700",placeholder:"placeholder-gray-500",border:"border border-gray-300",hover:"hover:border-gray-400",focus:"focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent",dark:"dark:text-white dark:placeholder-gray-400 dark:border-gray-600 dark:hover:border-gray-500 dark:focus:ring-gray-800"};default:return{background:"bg-gray-200",color:"text-black",hover:"hover:bg-gray-300",focus:"focus:ring-gray-300",dark:"dark:bg-gray-400 dark:hover:bg-gray-500 dark:focus:ring-gray-600"}}}(),bgClass=_getButtonStyles.background,textClass=_getButtonStyles.color,hoverClass=_getButtonStyles.hover,focusClass=_getButtonStyles.focus,darkClass=_getButtonStyles.dark,buttonClasses=overwriteClass||"font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ".concat(bgClass," ").concat(textClass," ").concat(hoverClass," ").concat(focusClass," ").concat(darkClass);return react.createElement("button",{id:"twixt-button-".concat(id),type,onClick,className:"flex items-center justify-center space-x-2 ".concat(background||bgClass," ").concat(color||textClass," ").concat(buttonClasses," ").concat(disabled?"opacity-50 cursor-not-allowed":""),disabled:showSpinner||disabled},children||react.createElement(react.Fragment,null,leftIcon&&react.createElement("span",null,leftIcon),!hideLabel&&react.createElement("span",null,label),showSpinner&&react.createElement(Spinner.A,{size:"sm",overwriteClass:"flex"}),rightIcon&&react.createElement("span",null,rightIcon)))}TwixtButton.__docgenInfo={description:"",methods:[],displayName:"TwixtButton",props:{id:{defaultValue:{value:"''",computed:!1},required:!1},type:{defaultValue:{value:"'button'",computed:!1},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},required:!1},background:{defaultValue:{value:"''",computed:!1},required:!1},color:{defaultValue:{value:"''",computed:!1},required:!1},leftIcon:{defaultValue:{value:"null",computed:!1},required:!1},rightIcon:{defaultValue:{value:"null",computed:!1},required:!1},hideLabel:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},showSpinner:{defaultValue:{value:"false",computed:!1},required:!1}}}},"../react/src/CallsToAction/Link/Link.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TwixtLink});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function TwixtLink(param){var _param_background=param.background,background=void 0===_param_background?"":_param_background,_param_color=param.color,color=void 0===_param_color?"text-blue-500":_param_color,_param_link=param.link,link=void 0===_param_link?"#":_param_link,onClick=param.onClick,_param_overwriteClass=param.overwriteClass,overwriteClass=void 0===_param_overwriteClass?"":_param_overwriteClass,_param_appendClass=param.appendClass,appendClass=void 0===_param_appendClass?"":_param_appendClass,label=param.label,leftIcon=param.leftIcon,rightIcon=param.rightIcon,rightContent=param.rightContent,target=param.target;if(!label)return null;var classNames=overwriteClass||"inline-flex items-center gap-2 ".concat(background," ").concat(color," ").concat(appendClass);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:link,className:classNames,onClick,target},leftIcon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,leftIcon),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,label),rightIcon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,rightIcon),rightContent&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,rightContent))}TwixtLink.__docgenInfo={description:"",methods:[],displayName:"TwixtLink",props:{background:{defaultValue:{value:"''",computed:!1},required:!1},color:{defaultValue:{value:"'text-blue-500'",computed:!1},required:!1},link:{defaultValue:{value:"'#'",computed:!1},required:!1},overwriteClass:{defaultValue:{value:"''",computed:!1},required:!1},appendClass:{defaultValue:{value:"''",computed:!1},required:!1}}}},"../react/src/CallsToAction/Link/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_Link__WEBPACK_IMPORTED_MODULE_0__.A});var _Link__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../react/src/CallsToAction/Link/Link.js")},"../react/src/Communications/Spinner/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Spinner_Spinner});var react=__webpack_require__("./node_modules/react/index.js"),Spinner=function(param){var _param_label=param.label,label=void 0===_param_label?"":_param_label,_param_size=param.size,size=void 0===_param_size?"md":_param_size,_param_fullPage=param.fullPage,fullPage=void 0!==_param_fullPage&&_param_fullPage,_param_overwriteClass=param.overwriteClass,overwriteClass=void 0===_param_overwriteClass?"":_param_overwriteClass,_param_bgColor=param.bgColor,sizeClasses={sm:"w-4 h-4 text-xs",md:"w-8 h-8 text-sm",lg:"w-16 h-16 text-base",xl:"w-24 h-24 text-lg"},spinnerSize=sizeClasses[size]||sizeClasses.md,fullPageClasses=fullPage?"fixed inset-0 flex flex-col items-center justify-center ".concat(void 0===_param_bgColor?"bg-gray-200 bg-opacity-70":_param_bgColor," z-50"):"";return react.createElement("div",{role:"status",className:"".concat(fullPageClasses," ").concat(overwriteClass)},react.createElement("svg",{"aria-hidden":"true",className:"inline ".concat(spinnerSize.split(" ")[0]," text-gray-200 animate-spin fill-blue-600"),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),react.createElement("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})),label&&react.createElement("span",{className:"ml-2 mt-2 ".concat(spinnerSize.split(" ")[1])},label))};const Spinner_Spinner=Spinner;Spinner.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{label:{defaultValue:{value:"''",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},fullPage:{defaultValue:{value:"false",computed:!1},required:!1},overwriteClass:{defaultValue:{value:"''",computed:!1},required:!1},bgColor:{defaultValue:{value:"'bg-gray-200 bg-opacity-70'",computed:!1},required:!1}}}},"../react/src/Containers/BoxItem/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>BoxItem_BoxItem});var react=__webpack_require__("./node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function BoxItem(_param){var _param_type=_param.type,type=void 0===_param_type?"block":_param_type,children=_param.children,_param_overwriteClass=_param.overwriteClass,overwriteClass=void 0===_param_overwriteClass?"":_param_overwriteClass,props=_object_without_properties(_param,["type","children","overwriteClass"]);return"block"==type?react.createElement("div",_object_spread({className:overwriteClass},props),children):"inline"==type?react.createElement("span",_object_spread({className:overwriteClass},props),children):null}const BoxItem_BoxItem=BoxItem;BoxItem.__docgenInfo={description:"",methods:[],displayName:"BoxItem",props:{type:{defaultValue:{value:"'block'",computed:!1},required:!1},overwriteClass:{defaultValue:{value:"''",computed:!1},required:!1}}}},"../react/src/Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TwixtIcon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_icons_fa__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../react/node_modules/react-icons/fa/index.mjs"),react_icons_fi__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../react/node_modules/react-icons/fi/index.mjs"),react_icons_io__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../react/node_modules/react-icons/io/index.mjs"),react_icons_md__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../react/node_modules/react-icons/md/index.mjs"),react_icons_ci__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../react/node_modules/react-icons/ci/index.mjs"),react_icons_io5__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react/node_modules/react-icons/io5/index.mjs"),react_icons_pi__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../react/node_modules/react-icons/pi/index.mjs"),iconTypes={home:{filled:react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.oKG,outline:react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.M14},notification:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.jNV,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.CzP},terminal:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.iuJ,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaTerminalSlash},help:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.gZZ,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaQuestionCircleSlash},magnifier:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.KSO,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.onj},hamburger:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.OXb,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Hcp},verticalThreeDots:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.H_v,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.H_v},horizontalThreeDots:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.HFM,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.HFM},pin:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.LBY,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaThumbtackSlash},delete:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.qbC,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.RCe},add:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.OiG,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Hw0},chevronUp:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Ucs,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Ucs},chevronDown:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Vr3,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Vr3},chevronLeft:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__._Jj,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__._Jj},chevronRight:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.X6T,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.X6T},note:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.jie,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.jie},pencil:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Mbp,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Mbp},refresh:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Swo,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.KP4},learn:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.vd0,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.hko},monitor:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Wqt,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaDesktopAlt},import:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.PiR,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.PiR},export:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Mbn,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Mbn},filter:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.YsJ,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaFilterAlt},userAvatar:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.x$1,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.NBi},clipboard:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.O6N,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.O6N},checkedClipboard:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.aZA,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.aZA},headphone:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.tLl,outline:react_icons_ci__WEBPACK_IMPORTED_MODULE_3__.WLS},watch:{filled:react_icons_pi__WEBPACK_IMPORTED_MODULE_4__.CqA,outline:react_icons_pi__WEBPACK_IMPORTED_MODULE_4__.V3h},speaker:{filled:react_icons_pi__WEBPACK_IMPORTED_MODULE_4__.e8f,outline:react_icons_pi__WEBPACK_IMPORTED_MODULE_4__.lvJ},speakerSlashed:{filled:react_icons_pi__WEBPACK_IMPORTED_MODULE_4__.$3T,outline:react_icons_pi__WEBPACK_IMPORTED_MODULE_4__.TVP},file:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Gp9,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.t69},lock:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.JhU,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.nQ7},send:{filled:react_icons_io__WEBPACK_IMPORTED_MODULE_5__.ylI,outline:react_icons_io__WEBPACK_IMPORTED_MODULE_5__.IoSendOutline},share:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.eb3,outline:null},user:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.x$1,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.VGZ},userSlashed:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.vYY,outline:null},userGraduate:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.mFx,outline:null},userGroup:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaUserGroup,outline:null},office:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.ymh,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.IqM},mobile:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.rle,outline:null},mail:{filled:null,outline:react_icons_ci__WEBPACK_IMPORTED_MODULE_3__.ep0},mic:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.i0t,outline:react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.Rrl,slashed:react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.Qnk},settings:{filled:react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.ikl,outline:react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.GD},warning:{filled:react_icons_io__WEBPACK_IMPORTED_MODULE_5__.qVL,outline:null},success:{filled:react_icons_io__WEBPACK_IMPORTED_MODULE_5__.v_8,outline:react_icons_io__WEBPACK_IMPORTED_MODULE_5__.LGE},error:{filled:react_icons_md__WEBPACK_IMPORTED_MODULE_7__._Jm,outline:react_icons_md__WEBPACK_IMPORTED_MODULE_7__.ItP},info:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.__w,outline:react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.tEG},close:{filled:react_icons_md__WEBPACK_IMPORTED_MODULE_7__.Tfw,outline:react_icons_md__WEBPACK_IMPORTED_MODULE_7__.rOP}};function TwixtIcon(param){var _iconTypes_type,_iconTypes_type1,_param_type=param.type,type=void 0===_param_type?"notification":_param_type,_param_variant=param.variant,variant=void 0===_param_variant?"filled":_param_variant,_param_size=param.size,size=void 0===_param_size?12:_param_size,_param_color=param.color,color=void 0===_param_color?"":_param_color,_param_overwriteClass=param.overwriteClass,overwriteClass=void 0===_param_overwriteClass?"":_param_overwriteClass;if(!iconTypes[type]||!(null===(_iconTypes_type=iconTypes[type])||void 0===_iconTypes_type?void 0:_iconTypes_type[variant]))return null;var IconComponent=(null===(_iconTypes_type1=iconTypes[type])||void 0===_iconTypes_type1?void 0:_iconTypes_type1[variant])||iconTypes.notification[filled];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconComponent,{size,color,className:overwriteClass})}TwixtIcon.__docgenInfo={description:"",methods:[],displayName:"TwixtIcon",props:{type:{defaultValue:{value:"'notification'",computed:!1},required:!1},variant:{defaultValue:{value:"'filled'",computed:!1},required:!1},size:{defaultValue:{value:"12",computed:!1},required:!1},color:{defaultValue:{value:"''",computed:!1},required:!1},overwriteClass:{defaultValue:{value:"''",computed:!1},required:!1}}}}}]);