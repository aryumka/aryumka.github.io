"use strict";(self.webpackChunkaryumka_me=self.webpackChunkaryumka_me||[]).push([[1794],{7915:function(e,t,n){n.r(t);var l=n(9128),a=n(9474);function i(e){const t=Object.assign({ol:"ol",li:"li",ul:"ul",strong:"strong",p:"p"},(0,l.R)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"README에 대략적인 프로젝트의 Feature를 적고 시작했다."),"\n",a.createElement(t.li,null,"kotlin의 TODO()를 이용하여 인터페이스와 테스트를 먼저 만들었음."),"\n",a.createElement(t.li,null,"테스트를 통과할 수 있게 구현했음."),"\n",a.createElement(t.li,null,"새로운 테스트 케이스가 생각나서 적었음."),"\n",a.createElement(t.li,null,"테스트 케이스에 맞춰 기존 구현 코드를 수정(Fix, Refactor)했음\n-> TDD의 이점:","\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"테스트를 통해 미리 보완할 점을 캐치해서 코드에 바로 적용"),"\n",a.createElement(t.li,null,"테스트를 통과했다는 안도감"),"\n"),"\n"),"\n",a.createElement(t.li,null,"git CLI 명령어 - add, commit amend, commit -m, push, remote add, git branch -m, push -f, pull, status, log"),"\n",a.createElement(t.li,null,"TODO 앱을 사용하여 할 것을 적립. 하나씩 진행중, 완료로 옮겨가기. 퍼스널 칸반"),"\n",a.createElement(t.li,null,"뭐 부터 해야하지? 어떤 걸 해야 하지?를 해나가는 게 어렵다.","\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"개발은 Feature 정리, 인터페이스 설계, TDD를 통해서,"),"\n",a.createElement(t.li,null,"커리어는 내가 해야하는 것, ",a.createElement(t.strong,null,"할 수 있는 것"),"을 정리하고 해나가면서 증명을 하며 다음 스테이지로 간다~~(말이 쉽다)~~."),"\n"),"\n"),"\n"),"\n",a.createElement(t.p,null,"할 수 있는 걸 아는 게 제일 어려운 것 같다. 메타인지 필요한 부분이다.. 작은 것부터 하나씩 실행해가면서 내가 뭘 할 수 있는지 감을 잡고 내가 뭘 못하는지 뭘 모르는지 파악해서 보완을 한다."))}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.R)(),e.components);return t?a.createElement(t,e,a.createElement(i,e)):i(e)}},8942:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var l=n(7915),a=n(5530),i=n(9474),r=n(8844),o=n(1047),c=n(8928),m=n.n(c),s=n(3893),u=n(2887),d=n(5909),p=n(589),g=n(7569),f=n.n(g),h=n(2195),E=n(6810);m().extend(n(1997));const y=e=>{let{data:t,location:n,pageContext:l,children:a}=e;const{tableOfContents:c,fields:g,frontmatter:y,excerpt:x}=t.mdx,{series:b}=l,k=m()(g.date).locale("ko").format(),v={headline:y.title,dateModified:k,datePublished:k,image:`${n.href}${y.image}`,mainEntityOfPage:{"@type":"WebPage","@id":n.href},author:{"@type":"Person",name:"Lee Sun-Hyoup"},url:n.href,description:x,"@type":"BlogPosting","@context":"https://schema.org"};(0,i.useEffect)((()=>{void 0!==typeof document&&f()((function(){f()(".post-container a[data-footnote-ref]").each(((e,t)=>{var n;const l=null===(n=f()(t).attr("href"))||void 0===n?void 0:n.slice(1),a=f()("#"+l).text().replace("↩","");f()(t).attr("data-tooltip",a)}))}))}),[]);const{0:O,1:A}=(0,i.useState)();(0,i.useEffect)((()=>{A(t.allMdx.edges.filter((e=>e.node.fields.slug!==g.slug)).sort((()=>Math.random()-.5)).slice(0,6))}),[]);const D=y.draft&&!0;return(0,E.Y)(r.A,null,(0,E.Y)(o.A,{title:y.title,description:x,meta:[{name:"article:published_time",content:m()(g.date).locale("ko").format()},{name:"image",content:`https://aryumka.me${y.image}`},{property:"og:image",content:`https://aryumka.me${y.image}`},{property:"og:image:secure_url",content:`https://aryumka.me${y.image}`}]}),(0,E.Y)(p.m,null,(0,E.Y)("script",{type:"application/ld+json"},JSON.stringify(v))),(0,E.Y)("h1",{className:"post-title"},y.title),(0,E.Y)("span",{className:"post-date"},"Written on ",m()(g.date).locale("en").format("LL")),(0,E.Y)("img",{src:y.image,style:{objectFit:"cover",maxHeight:300,width:"100%"}}),D||c.items&&(0,E.Y)(d.A,{items:c.items}),D||(null==b?void 0:b.items)&&(0,E.Y)(h.A,{title:b.title,items:b.items,currentItem:y.title}),(0,E.Y)("div",{className:"post-content"},D?(0,E.Y)(Y,null,"Not yet published"):a),(0,E.Y)(s.A,{tags:y.tags,comment:y.comments}),O&&(0,E.Y)(u.A,{posts:O,current:g.slug}))};function x(e){return i.createElement(y,e,i.createElement(l.default,e))}const Y=(0,a.A)("div",{target:"ezegrm70"})({name:"xl5zip",styles:"margin:16px 0;font-weight:bold;font-size:20px;text-align:center"})}}]);
//# sourceMappingURL=component---src-templates-post-tsx-content-file-path-src-posts-2024-01-07-til-practice-tdd-mdx-db104fe0b1c867fe520a.js.map