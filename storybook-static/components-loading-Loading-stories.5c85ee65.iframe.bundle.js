"use strict";(self.webpackChunkseason_ui=self.webpackChunkseason_ui||[]).push([[367],{"./src/components/loading/Loading.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Loading_stories});__webpack_require__("./node_modules/react/index.js");var emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),hat=__webpack_require__("./src/icons/hat.svg"),bald_head=__webpack_require__("./src/icons/bald head.svg"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Loading=_ref=>{let{size}=_ref;return(0,jsx_runtime.jsxs)(SantaContainer,{size,children:[(0,jsx_runtime.jsx)(Santa,{children:(0,jsx_runtime.jsxs)(IconWrapper,{children:[(0,jsx_runtime.jsx)(bald_head.h,{}),(0,jsx_runtime.jsx)(AnimatedHat,{delay:"0s"})]})}),(0,jsx_runtime.jsx)(Santa,{children:(0,jsx_runtime.jsxs)(IconWrapper,{children:[(0,jsx_runtime.jsx)(bald_head.h,{}),(0,jsx_runtime.jsx)(AnimatedHat,{delay:"0.7s"})]})}),(0,jsx_runtime.jsx)(Santa,{children:(0,jsx_runtime.jsxs)(IconWrapper,{children:[(0,jsx_runtime.jsx)(bald_head.h,{}),(0,jsx_runtime.jsx)(AnimatedHat,{delay:"1.4s"})]})})]})},loading_Loading=Loading;Loading.defaultProps={size:50};const SantaContainer=emotion_styled_browser_esm.A.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  transform: ${_ref2=>{let{size}=_ref2;return`scale(${size/100})`}};
`,Santa=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,IconWrapper=emotion_styled_browser_esm.A.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,AnimatedHat=(0,emotion_styled_browser_esm.A)(hat.h)`
  position: absolute;
  top: -55px;
  animation: bounce 2.1s ease-in-out infinite;
  animation-delay: ${_ref3=>{let{delay}=_ref3;return delay}};

  @keyframes bounce {
    0%,
    20% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-35px);
    }
    80%,
    100% {
      transform: translateY(0);
    }
  }
`;Loading.__docgenInfo={description:"",methods:[],displayName:"Loading",props:{size:{defaultValue:{value:"50",computed:!1},description:"",type:{name:"number"},required:!1}}};const Loading_stories={title:"Components/Loading",component:loading_Loading,parameters:{layout:"centered"},argTypes:{size:{type:"number",description:"로딩 컴포넌트의 크기를 px 단위로 조절합니다."}}},Default=(args=>(0,jsx_runtime.jsx)(loading_Loading,{...args})).bind({});Default.args={};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Loading {...args} />",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-loading-Loading-stories.5c85ee65.iframe.bundle.js.map