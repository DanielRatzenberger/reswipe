import{c as y,f,j as r,a as d,h as C,k as _,E as k,g as x,J as h,r as m,K as i,U as p,T as l,R as a,X as P,V as $,L as B,M as F,N as Q}from"./index.97f82815.js";import{h as E}from"./render.c5c0ef48.js";var j=y({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(o,{slots:c}){const{proxy:{$q:t}}=x(),e=f(_,r);if(e===r)return console.error("QPage needs to be a deep child of QLayout"),r;if(f(k,r)===r)return console.error("QPage needs to be child of QPageContainer"),r;const s=d(()=>{const n=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof o.styleFn=="function"){const v=e.isContainer.value===!0?e.containerHeight.value:t.screen.height;return o.styleFn(n,v)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-n+"px":t.screen.height===0?n!==0?`calc(100vh - ${n}px)`:"100vh":t.screen.height-n+"px"}}),g=d(()=>`q-page${o.padding===!0?" q-layout-padding":""}`);return()=>C("main",{class:g.value,style:s.value},E(c.default))}});const q=h({__name:"ExampleComponent",props:{title:{},todos:{default:()=>[]},meta:{},active:{type:Boolean}},setup(o){const c=o,t=m(0);function e(){return t.value+=1,t.value}const u=d(()=>c.todos.length);return(s,g)=>(i(),p("div",null,[l("p",null,a(s.title),1),l("ul",null,[(i(!0),p(P,null,$(s.todos,n=>(i(),p("li",{key:n.id,onClick:e},a(n.id)+" - "+a(n.content),1))),128))]),l("p",null,"Count: "+a(u.value)+" / "+a(s.meta.totalCount),1),l("p",null,"Active: "+a(s.active?"yes":"no"),1),l("p",null,"Clicks on todos: "+a(t.value),1)]))}}),K=h({name:"IndexPage",__name:"IndexPage",setup(o){const c=m([{id:1,content:"ct1"},{id:2,content:"ct2"},{id:3,content:"ct3"},{id:4,content:"ct4"},{id:5,content:"ct5"}]),t=m({totalCount:1200});return(e,u)=>(i(),B(j,{class:"row items-center justify-evenly"},{default:F(()=>[Q(q,{title:"Example component",active:"",todos:c.value,meta:t.value},null,8,["todos","meta"])]),_:1}))}});export{K as default};
