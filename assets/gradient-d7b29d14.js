import{e as r,f as c,r as d,o as l,c as v,a as n,w as o,d as s,_}from"./app-85bc9076.js";const u={class:"center"},p=r({__name:"gradient",setup(f){const e=c(0);return(m,t)=>{const a=d("vs-button");return l(),v("div",u,[n(a,{type:"gradient",active:e.value==0,onClick:t[0]||(t[0]=i=>e.value=0)},{default:o(()=>[s(" Active ")]),_:1},8,["active"]),n(a,{type:"gradient",active:e.value==1,onClick:t[1]||(t[1]=i=>e.value=1)},{default:o(()=>[s(" Default ")]),_:1},8,["active"]),n(a,{type:"gradient",disabled:""},{default:o(()=>[s(" Disabled ")]),_:1})])}}}),x=_(p,[["__file","gradient.vue"]]);export{x as default};