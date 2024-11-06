"use strict";(self.webpackChunkseason_ui=self.webpackChunkseason_ui||[]).push([[763],{"./src/components/tabList/TabList.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TabList_stories});var react=__webpack_require__("./node_modules/react/index.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),hat=__webpack_require__("./src/icons/hat.svg"),bald_head=__webpack_require__("./src/icons/bald head.svg"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TabList=_ref=>{let{tabs}=_ref;const[selectedTab,setSelectedTab]=(0,react.useState)(null);return(0,jsx_runtime.jsx)(TabsContainer,{children:tabs.map(((tab,index)=>(0,jsx_runtime.jsxs)(Tab,{onClick:()=>setSelectedTab(index),children:[(0,jsx_runtime.jsxs)(IconWrapper,{children:[(0,jsx_runtime.jsx)(bald_head.h,{}),selectedTab===index&&(0,jsx_runtime.jsx)(AnimatedHat,{})]}),(0,jsx_runtime.jsx)(Label,{children:tab.label})]},index)))})},tabList_TabList=TabList;TabList.defaultProps={tabs:[{label:"Home"},{label:"About"},{label:"Event"}]};const TabsContainer=emotion_styled_browser_esm.A.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`,Tab=emotion_styled_browser_esm.A.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`,IconWrapper=emotion_styled_browser_esm.A.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,Label=emotion_styled_browser_esm.A.span`
  position: absolute;
  top: 70%;
  transform: translateY(-50%);
  font-size: 18px;
  font-weight: bold;
  color: black;
  pointer-events: none;
`,AnimatedHat=(0,emotion_styled_browser_esm.A)(hat.h)`
  position: absolute;
  top: -35px;
  transition: transform 0.3s ease;
  transform: translateY(-20px);
  animation: hatAppear 0.5s ease forwards;

  @keyframes hatAppear {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(-20px);
    }
  }
`;TabList.__docgenInfo={description:"",methods:[],displayName:"TabList",props:{tabs:{defaultValue:{value:"[{ label: 'Home' }, { label: 'About' }, { label: 'Event' }]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!1}}}},required:!1}}};const TabList_stories={title:"Components/TabList",component:tabList_TabList,parameters:{layout:"centered"},argTypes:{tabs:{control:{type:"array"},description:"tab option들의 정보를 담은 배열입니다"}}},Default=(args=>(0,jsx_runtime.jsx)(tabList_TabList,{...args})).bind({});Default.args={tabs:[{label:"Home"},{label:"About"},{label:"Event"}]};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <TabList {...args} />",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-tabList-TabList-stories.2abe9ac4.iframe.bundle.js.map