import{j as e}from"./jsx-runtime-c3de6e4e.js";import{b as a,c as m,B as d}from"./index-c2b4afff.js";import"./index-65d0a824.js";import"./_commonjsHelpers-725317a4.js";import"./extends-98964cd2.js";const{useArgs:l}=__STORYBOOK_MODULE_CLIENT_API__,u=new Intl.DateTimeFormat("pt-BR",{dateStyle:"full",timeStyle:"short"}).format(new Date),f={title:"Overlay/Toast",component:a,args:{title:"Agendamento realizado",description:u}},n=i=>{const[{open:p},c]=l();function t(){c({open:!p})}return e.jsxs(m,{children:[e.jsx(d,{onClick:t,children:"Submit"}),e.jsx(a,{...i,onOpenChange:t})]})};var o,r,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`(args: ToastProps) => {
  const [{
    open
  }, changeArgs] = useArgs<ToastProps>();
  function handleOpen() {
    changeArgs({
      open: !open
    });
  }
  return <ToastProvider>
      <Button onClick={handleOpen}>Submit</Button>

      <Toast {...args} onOpenChange={handleOpen} />
    </ToastProvider>;
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const P=["Primary"];export{n as Primary,P as __namedExportsOrder,f as default};
//# sourceMappingURL=Toast.stories-f4b52506.js.map
