import{e as m,f as o,p as _,r as u,o as f,c as h,a as d,w as n,d as a,b as i,_ as V}from"./app-079a0c50.js";const k={class:"center"},w=i("b",null,"UI components framework",-1),x=i("a",{href:"https://vuejs.org/"},"Vuejs",-1),b=m({__name:"time",setup(g){const t=o(!1),r=o(6e3),s=o(0);return _(t,l=>{if(l){const e=setInterval(()=>{s.value++},r.value/100);setTimeout(()=>{t.value=!1,clearInterval(e),s.value=0},r.value)}}),(l,e)=>{const v=u("vs-button"),p=u("vs-alert");return f(),h("div",k,[d(v,{flat:"",onClick:e[0]||(e[0]=c=>t.value=!0)},{default:n(()=>[a("Open Alert 10s")]),_:1}),d(p,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=c=>t.value=c),progress:s.value},{title:n(()=>[a(" Vuesax Framework ")]),default:n(()=>[a(" Vuesax (pronounced / vjusacks: /, as view sacks) is a "),w,a(" created with "),x,a(" to make projects easily and with a Unique and pleasant style, Vuesax is created from scratch and designed for all types of developed from the frontend lover to the backend that wants to easily create your visual approach to the end user ")]),_:1},8,["modelValue","progress"])])}}}),j=V(b,[["__file","time.vue"]]);export{j as default};