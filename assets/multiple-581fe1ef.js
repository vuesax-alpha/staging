import{t as C}from"./utils-eb9ca6d1.js";import{e as S,f as c,K as x,r as o,o as _,c as b,a as e,w as a,u as B,d as s,F as D,G as L,k as N,t as r,b as f,_ as K}from"./app-85bc9076.js";const z={class:"center"},E={class:"data-table"},M=S({__name:"multiple",setup(G){const m=c(""),l=c([]),d=c([{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",website:"hildegard.org"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",website:"anastasia.net"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",website:"ramiro.info"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",website:"kale.biz"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",website:"demarco.info"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",website:"ola.org"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",website:"elvis.io"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",website:"jacynthe.com"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",website:"conrad.com"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",website:"ambrose.net"}]),g=x(()=>d.value.filter(v=>v.name.toLowerCase().includes(m.value.toLowerCase())));return(v,t)=>{const w=o("vs-input"),p=o("vs-checkbox"),i=o("vs-th"),h=o("vs-tr"),u=o("vs-td"),k=o("vs-table");return _(),b("div",z,[e(k,{modelValue:l.value,"onUpdate:modelValue":t[3]||(t[3]=n=>l.value=n),multiple:""},{header:a(()=>[e(w,{modelValue:m.value,"onUpdate:modelValue":t[0]||(t[0]=n=>m.value=n),block:"",type:"url","input-style":"border",placeholder:"Search"},null,8,["modelValue"])]),thead:a(()=>[e(h,null,{default:a(()=>[e(i,null,{default:a(()=>[e(p,{"checked-force":l.value.length>0,indeterminate:l.value.length<d.value.length,onChange:t[1]||(t[1]=n=>l.value=B(C)(l.value,g.value))},null,8,["checked-force","indeterminate"])]),_:1}),e(i,null,{default:a(()=>[s(" Name ")]),_:1}),e(i,null,{default:a(()=>[s(" Email ")]),_:1}),e(i,null,{default:a(()=>[s(" Id ")]),_:1})]),_:1})]),tbody:a(()=>[(_(!0),b(D,null,L(d.value,(n,y)=>(_(),N(h,{key:y,data:n},{default:a(()=>[e(u,{checkbox:""},{default:a(()=>[e(p,{modelValue:l.value,"onUpdate:modelValue":t[2]||(t[2]=V=>l.value=V),value:n},null,8,["modelValue","value"])]),_:2},1024),e(u,null,{default:a(()=>[s(r(n.name),1)]),_:2},1024),e(u,null,{default:a(()=>[s(r(n.email),1)]),_:2},1024),e(u,null,{default:a(()=>[s(r(n.id),1)]),_:2},1024)]),_:2},1032,["data"]))),128))]),_:1},8,["modelValue"]),f("span",E,[f("pre",null,"        "+r(l.value.length>0?l.value:"Select an item in the table")+`
      `,1)])])}}});const U=K(M,[["__scopeId","data-v-14c3eb02"],["__file","multiple.vue"]]);export{U as default};