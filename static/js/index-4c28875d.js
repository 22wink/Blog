import{_ as g,B as c,o as u,d as f,e as p,a as h,z as _,t as d,bg as y,L as S,I as v,n as s,bh as l,bi as r,w as b,c as x,h as w}from"./index-7cf17b50.js";const T=["data-name"],N={__name:"tooltip",props:{name:{type:String,default:""},width:{type:[String,Number],default:"100%"},size:{type:[String,Number],default:"1rem"},color:{type:String,default:"#676767"},weight:{type:[String,Number],default:"400"},align:{type:String,default:"left"},lineHeight:{type:Number,default:1}},setup(e){const n=e,t=c(!0),o=()=>{const a=document.querySelector(`[data-name="${n.name}"]`);a&&(a.offsetWidth<a.scrollWidth?t.value=!1:t.value=!0)};return(a,m)=>{const i=y;return u(),f(i,{content:e.name,placement:"top",effect:"light",disabled:t.value},{default:p(()=>[h("span",{class:"tooltip-text-overflow animate__animated animate__fadeIn",style:_(`width: ${e.width};font-size:${e.size};color: ${e.color};font-weight: ${e.weight};text-align: ${e.align};line-height: ${e.lineHeight}`),"data-name":e.name,onMouseenter:o},d(e.name),45,T)]),_:1},8,["content","disabled"])}}},z=g(N,[["__scopeId","data-v-198d110e"]]),B={__name:"index",props:{value:{type:Number,default:0},duration:{type:Number,default:1}},setup(e){const n=e,t=c(null),o=S({num:0});function a(){l.to(o,{scrollTrigger:".num-"+t.value,duration:n.duration,num:n.value})}return v(()=>{t.value=Math.random().toString(16).slice(2),s(()=>{l.registerPlugin(r.ScrollTrigger),a()})}),b(()=>n.value,()=>{s(()=>{l.registerPlugin(r.ScrollTrigger),a()})}),(m,i)=>(u(),x("span",{class:w("num-"+t.value)},d(o.num.toFixed(0)),3))}};export{z as T,B as _};
