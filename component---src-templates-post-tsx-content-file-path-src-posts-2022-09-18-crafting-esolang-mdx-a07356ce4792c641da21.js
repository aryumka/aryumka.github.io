"use strict";(self.webpackChunkkciter_so=self.webpackChunkkciter_so||[]).push([[5254],{8180:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(887),o=n(9474),r=n(8844),i=n(1047),l=n(8928),c=n.n(l),s=n(1622),m=n(2887),d=n(5909),u=n(589),p=n(5181),f=n.n(p);c().extend(n(1997));const g=e=>{let{data:t,location:n,pageContext:a,children:l}=e;const{tableOfContents:p,fields:g,frontmatter:h,excerpt:E}=t.mdx,{series:y}=a,k=c()(g.date).locale("ko").format(),b={headline:h.title,dateModified:k,datePublished:k,image:""+n.href+h.image,mainEntityOfPage:{"@type":"WebPage","@id":n.href},author:{"@type":"Person",name:"Lee Sun-Hyoup"},url:n.href,description:E,"@type":"BlogPosting","@context":"https://schema.org"};(0,o.useEffect)((()=>{void 0!==typeof document&&f()((function(){f()(".post-container a.footnote-ref").each(((e,t)=>{var n;const a=null===(n=f()(t).attr("href"))||void 0===n?void 0:n.slice(1),o=f()("#"+a).text().replace("↩","");f()(t).attr("data-tooltip",o)}))}))}),[]);const{0:v,1:x}=(0,o.useState)();(0,o.useEffect)((()=>{x(t.allMdx.edges.filter((e=>e.node.fields.slug!==g.slug)).sort((()=>Math.random()-.5)).slice(0,6))}),[]);const w=h.draft&&!0;return o.createElement(r.A,null,o.createElement(i.A,{title:h.title,description:E,meta:[{name:"article:published_time",content:c()(g.date).locale("ko").format()},{name:"image",content:"https://kciter.so"+h.image},{property:"og:image",content:"https://kciter.so"+h.image},{property:"og:image:secure_url",content:"https://kciter.so"+h.image}]}),o.createElement(u.m,null,o.createElement("script",{type:"application/ld+json"},JSON.stringify(b))),o.createElement("h1",{className:"post-title"},h.title),o.createElement("span",{className:"post-date"},"Written on ",c()(g.date).locale("en").format("LL")),o.createElement("img",{src:h.image}),w||p.items&&o.createElement(d.A,{items:p.items}),o.createElement("div",{className:"post-content"},w?o.createElement("div",{className:"not-yet-published"},"Not yet published"):l),o.createElement(s.A,{tags:h.tags,comment:h.comments}),v&&o.createElement(m.A,{posts:v,current:g.slug}))};function h(e){return o.createElement(g,e,o.createElement(a.default,e))}},5799:function(e,t,n){var a=n(9474),o=n(1615);t.A=e=>{let{src:t,caption:n,width:r,expandable:i}=e;const{0:l,1:c}=(0,a.useState)(!1);return a.createElement("figure",null,a.createElement("img",{src:t,width:r,style:{cursor:i?"zoom-in":"default"},onClick:i?()=>c(!0):void 0}),n&&a.createElement("figcaption",{dangerouslySetInnerHTML:{__html:n}}),l&&o.createPortal(a.createElement("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",cursor:"zoom-out",backgroundColor:"rgba(0, 0, 0, 0.7)"},onClick:()=>c(!1)},a.createElement("div",{style:{borderRadius:8,maxWidth:1200,width:"80%",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"white"}},a.createElement("img",{src:t,width:"100%"}))),document.body))}}}]);
//# sourceMappingURL=component---src-templates-post-tsx-content-file-path-src-posts-2022-09-18-crafting-esolang-mdx-a07356ce4792c641da21.js.map