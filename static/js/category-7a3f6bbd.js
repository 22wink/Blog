import{a2 as S,_ as b,u as z,B as m,I as B,c as l,b as r,a as g,e as s,F as y,E as L,o as a,J as M,l as $,d as _,k as F,f as N,z as V,t as D,v as I,p as A}from"./index-7cf17b50.js";import{E as P}from"./el-skeleton-item-7b233842.js";import{_ as R}from"./index-d6d7d3f9.js";import{_ as T}from"./index-4c28875d.js";const j=()=>new Promise((i,u)=>{S.get("/api/category/getCategoryDictionary",{}).then(o=>{i(o)})});const q={class:"category center_box"},H={class:"category-total flex_center"},J=["onClick"],G={__name:"category",setup(i){const u=z(),o=m([]),e=m(!1),p=()=>`rgb(${Math.random()*180+30},${Math.random()*180+30},${Math.random()*180+30})`,f=()=>Math.random()*1.6+.6,v=async()=>{e.value=!0;let t=await j();t.code==0&&(o.value=t.result.map(c=>({id:c.id,category_name:c.category_name,fontSize:f(),fontColor:p()})),e.value=!1)};B(()=>{v()});const h=t=>{u.push({path:"/articleList",query:{id:t.id,type:"category",name:t.category_name}})};return(t,c)=>{const k=R,C=P,d=I,x=A,w=L;return a(),l(y,null,[r(k,{loading:e.value},null,8,["loading"]),g("div",q,[r(w,{class:"category-card"},{default:s(()=>[g("div",H,[M(" 分类 - "),r($(T),{value:o.value.length},null,8,["value"])]),e.value?(a(),_(d,{key:0},{default:s(()=>[e.value?(a(),_(C,{key:0,class:"category-item",loading:e.value,rows:1,animated:""},null,8,["loading"])):F("",!0)]),_:1})):(a(),_(d,{key:1},{default:s(()=>[r(x,{span:24,class:"category-item"},{default:s(()=>[(a(!0),l(y,null,N(o.value,(n,E)=>(a(),l("span",{key:E,style:V({fontSize:n.fontSize+"rem",color:n.fontColor}),class:"category-item__label scale animate__animated animate__fadeInDown",onClick:K=>h(n)},D(n.category_name),13,J))),128))]),_:1})]),_:1}))]),_:1})])],64)}}},X=b(G,[["__scopeId","data-v-bc5ee080"]]);export{X as default};
