import{e as r,f as u,r as c,o as v,c as p,a as s,w as o,d as i,b as n,_ as d}from"./app-079a0c50.js";const _={class:"center"},f=n("i",{class:"bx bxs-phone-call"},null,-1),b=n("i",{class:"bx bxs-heart"},null,-1),x=n("i",{class:"bx bxs-bell-ring"},null,-1),k=n("i",{class:"bx bxs-paper-plane"},null,-1),m=n("i",{class:"bx bxs-purchase-tag"},null,-1),q=r({__name:"square",setup(C){const e=u(0);return(g,t)=>{const a=c("vs-button");return v(),p("div",_,[s(a,{shape:"square",active:e.value==0,onClick:t[0]||(t[0]=l=>e.value=0)},{default:o(()=>[i(" Home ")]),_:1},8,["active"]),s(a,{shape:"square",icon:"",color:"success",type:"flat",active:e.value==1,onClick:t[1]||(t[1]=l=>e.value=1)},{default:o(()=>[f]),_:1},8,["active"]),s(a,{shape:"square",color:"danger",type:"border",active:e.value==2,onClick:t[2]||(t[2]=l=>e.value=2)},{default:o(()=>[b,i(" Like ")]),_:1},8,["active"]),s(a,{shape:"square",color:"warn",type:"gradient",active:e.value==3,onClick:t[3]||(t[3]=l=>e.value=3)},{default:o(()=>[i(" Notifications "),x]),_:1},8,["active"]),s(a,{shape:"square",icon:"",color:"#7d33ff",type:"relief",active:e.value==5,onClick:t[4]||(t[4]=l=>e.value=5)},{default:o(()=>[k]),_:1},8,["active"]),s(a,{shape:"square",icon:"",color:"rgb(59,222,200)",type:"gradient",active:e.value==6,onClick:t[5]||(t[5]=l=>e.value=6)},{default:o(()=>[m]),_:1},8,["active"])])}}}),h=d(q,[["__file","square.vue"]]);export{h as default};