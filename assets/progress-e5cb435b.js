import{e as d,f as u,K as c,r as _,o as a,c as l,a as f,j as m,w as i,d as g,_ as x}from"./app-9670788f.js";const b={class:"center content-inputs"},w={key:0,class:"bx bx-show-alt"},k={key:1,class:"bx bx-hide"},y=d({__name:"progress",setup(V){const e=u(""),t=u(!1),p=c(()=>t.value?"text":"password"),n=c(()=>{let s=0;return/\d/.test(e.value)&&(s+=20),/(.*[A-Z].*)/.test(e.value)&&(s+=20),/(.*[a-z].*)/.test(e.value)&&(s+=20),e.value.length>=6&&(s+=20),/[^A-Za-z0-9]/.test(e.value)&&(s+=20),s});return(s,o)=>{const v=_("vs-input");return a(),l("div",b,[f(v,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=r=>e.value=r),type:p.value,progress:n.value,label:"Password","label-float":"","icon-after":"",onClickIcon:o[1]||(o[1]=r=>t.value=!t.value)},m({icon:i(()=>[t.value?(a(),l("i",k)):(a(),l("i",w))]),_:2},[n.value>=100?{name:"message-success",fn:i(()=>[g(" Secure password ")]),key:"0"}:void 0]),1032,["modelValue","type","progress"])])}}}),C=x(y,[["__file","progress.vue"]]);export{C as default};