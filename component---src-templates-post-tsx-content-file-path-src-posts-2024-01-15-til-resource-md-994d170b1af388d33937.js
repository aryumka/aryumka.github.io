"use strict";(self.webpackChunkaryumka_me=self.webpackChunkaryumka_me||[]).push([[2023],{232:function(t,e,a){a.r(e);var n=a(9128),o=a(9474);function s(t){const e=Object.assign({p:"p"},(0,n.R)(),t.components);return o.createElement(e.p,null,'어플리케이션 설정파일 등의 리소스 위치를 참조할 때 "../aaa.xml"와 같은 상대경로는 사용하지 않는 것이 좋음. classpath는 현재 디렉토리에서 가장 가까운 곳부터 탐색하는데 만약 classpath 정보가 변경된다면 의도와 전혀 다른 경로가 참조될 수 있음.\n마찬가지로 "classpath: aaa/bbb.xml" 또는 절대경로를 이용한 경로는 사용하지 않는 것이 좋다. 특정 경로와 어플리케이션의 설정을 커플링 시키게 되므로.\n가능하면 "/"를 아예 사용하지 않는 것이 좋고 필요하다면 JVM 환경변수를 이용하여 "${...}"와 같이 사용할 수 있다.')}e.default=function(t){void 0===t&&(t={});const{wrapper:e}=Object.assign({},(0,n.R)(),t.components);return e?o.createElement(e,t,o.createElement(s,t)):s(t)}},8698:function(t,e,a){a.r(e),a.d(e,{default:function(){return x}});var n=a(232),o=a(5530),s=a(9474),i=a(8844),l=a(1047),r=a(8928),c=a.n(r),m=a(6979),u=a(2887),p=a(5909),d=a(589),f=a(5181),g=a.n(f),h=a(2195),y=a(6810);c().extend(a(1997));const b=t=>{let{data:e,location:a,pageContext:n,children:o}=t;const{tableOfContents:r,fields:f,frontmatter:b,excerpt:x}=e.mdx,{series:k}=n,v=c()(f.date).locale("ko").format(),E={headline:b.title,dateModified:v,datePublished:v,image:""+a.href+b.image,mainEntityOfPage:{"@type":"WebPage","@id":a.href},author:{"@type":"Person",name:"Lee Sun-Hyoup"},url:a.href,description:x,"@type":"BlogPosting","@context":"https://schema.org"};(0,s.useEffect)((()=>{void 0!==typeof document&&g()((function(){g()(".post-container a[data-footnote-ref]").each(((t,e)=>{var a;const n=null===(a=g()(e).attr("href"))||void 0===a?void 0:a.slice(1),o=g()("#"+n).text().replace("↩","");g()(e).attr("data-tooltip",o)}))}))}),[]);const{0:A,1:w}=(0,s.useState)();(0,s.useEffect)((()=>{w(e.allMdx.edges.filter((t=>t.node.fields.slug!==f.slug)).sort((()=>Math.random()-.5)).slice(0,6))}),[]);const N=b.draft&&!0;return(0,y.Y)(i.A,null,(0,y.Y)(l.A,{title:b.title,description:x,meta:[{name:"article:published_time",content:c()(f.date).locale("ko").format()},{name:"image",content:"https://aryumka.me"+b.image},{property:"og:image",content:"https://aryumka.me"+b.image},{property:"og:image:secure_url",content:"https://aryumka.me"+b.image}]}),(0,y.Y)(d.m,null,(0,y.Y)("script",{type:"application/ld+json"},JSON.stringify(E))),(0,y.Y)("h1",{className:"post-title"},b.title),(0,y.Y)("span",{className:"post-date"},"Written on ",c()(f.date).locale("en").format("LL")),(0,y.Y)("img",{src:b.image,style:{objectFit:"cover",maxHeight:300,width:"100%"}}),N||r.items&&(0,y.Y)(p.A,{items:r.items}),N||(null==k?void 0:k.items)&&(0,y.Y)(h.A,{title:k.title,items:k.items,currentItem:b.title}),(0,y.Y)("div",{className:"post-content"},N?(0,y.Y)(Y,null,"Not yet published"):o),(0,y.Y)(m.A,{tags:b.tags,comment:b.comments}),A&&(0,y.Y)(u.A,{posts:A,current:f.slug}))};function x(t){return s.createElement(b,t,s.createElement(n.default,t))}const Y=(0,o.A)("div",{target:"ezegrm70"})({name:"xl5zip",styles:"margin:16px 0;font-weight:bold;font-size:20px;text-align:center"})}}]);
//# sourceMappingURL=component---src-templates-post-tsx-content-file-path-src-posts-2024-01-15-til-resource-md-994d170b1af388d33937.js.map