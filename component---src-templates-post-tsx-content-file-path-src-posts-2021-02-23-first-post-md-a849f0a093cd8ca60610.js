"use strict";(self.webpackChunkkciter_so=self.webpackChunkkciter_so||[]).push([[1815],{1720:function(e,t,n){n.r(t);var a=n(9128),o=n(9474);function r(e){const t=Object.assign({p:"p",a:"a"},(0,a.R)(),e.components);return o.createElement(o.Fragment,null,o.createElement(t.p,null,"나는 매사 불성실하고 게으름이 많은 성격이다. 하지 않아도 된다면 안 하는 귀찮음이 몸에 배어있는 모범적이지 못한 성격이다. 이 성격으로 인해 얼마나 많은 것을 놓치고 살았는지 이제 와선 아쉽고 씁쓸하지만, 끝끝내 못 고치는 걸 보니 이것이 내 천성이라 여기며 살고 있다."),"\n",o.createElement(t.p,null,"이런 우유부단한 성격이지만 사실 작년 한 해 게으름을 극복하기 위해서 꽤 많이 고민했다. 나는 멋진 개발자가 되는 것이 목표였으며 나름 개발자로서 이루고 싶은 꿈도 있었다. 게으른 주제에 개발에는 나름 진심이었고 자존심도 강해서 게으름을 이기고 꽤 많은 것을 해냈다. 그러다 보니 지금은 꽤 괜찮은 개발자가 된 것 같다."),"\n",o.createElement(t.p,null,"문제는 코드를 위해서만 키보드를 두드릴 뿐 내가 겪은 경험을 정리하지 않으니 기억 속에 잊히는 것들이 꽤 많다는 것이다. 나는 운 좋게 많은 경험을 할 수 있었고 덕분에 남들보다 젊은 나이에 다양한 지식을 얻을 수 있었다. 하지만 이런 소중한 경험을 방치했고 결국은 과거에 경험했던 일을 다시 반복하는 사태가 여러 번 발생했다."),"\n",o.createElement(t.p,null,"어쩌다 보니 수석 개발자가 되어 다른 개발자를 리드해야 하는 입장이 되었다. 이젠 다른 사람을 도와야 하는 입장이 되었으니 게으름을 청산하고 얼리버드가 되는 것도 괜찮을 것 같다고 생각하여 우선 게으름을 극복하기 위해 블로그를 시작하기로 했다."),"\n",o.createElement(t.p,null,"--"),"\n",o.createElement(t.p,null,"내가 ",o.createElement(t.a,{href:"https://medium.com/@kciter",rel:"nofollow noopener noreferrer"},"블로그 시스템"),"을 통해 글을 작성한 것은 지난 2015년 2월이 마지막이다. 지금이 2021년 2월이니 글을 쓴지 벌써 6년이 지났다. 글쓰기가 아직 너무나도 어색하지만, 올해는 반드시 꾸준히 글을 쓰기로 다짐해본다."))}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.R)(),e.components);return t?o.createElement(t,e,o.createElement(r,e)):r(e)}},4933:function(e,t,n){n.r(t),n.d(t,{Head:function(){return Y},default:function(){return E}});var a=n(1720),o=n(5530),r=n(9474),l=n(8844),i=n(1047),c=n(8928),s=n.n(c),m=n(6979),u=n(2887),d=n(5909),p=n(5181),f=n.n(p),g=n(6810);s().extend(n(1997));const h=e=>{let{data:t,location:n,pageContext:a,children:o}=e;const{tableOfContents:i,fields:c,frontmatter:p}=t.mdx,{series:h}=a;(0,r.useEffect)((()=>{void 0!==typeof document&&f()((function(){f()(".post-container a[data-footnote-ref]").each(((e,t)=>{var n;const a=null===(n=f()(t).attr("href"))||void 0===n?void 0:n.slice(1),o=f()("#"+a).text().replace("↩","");f()(t).attr("data-tooltip",o)}))}))}),[]);const{0:E,1:Y}=(0,r.useState)();(0,r.useEffect)((()=>{Y(t.allMdx.edges.filter((e=>e.node.fields.slug!==c.slug)).sort((()=>Math.random()-.5)).slice(0,6))}),[]);const y=p.draft&&!0;return(0,g.Y)(l.A,null,(0,g.Y)("h1",{className:"post-title"},p.title),(0,g.Y)("span",{className:"post-date"},"Written on ",s()(c.date).locale("en").format("LL")),(0,g.Y)("img",{src:p.image}),y||i.items&&(0,g.Y)(d.A,{items:i.items}),(0,g.Y)("div",{className:"post-content"},y?(0,g.Y)(x,null,"Not yet published"):o),(0,g.Y)(m.A,{tags:p.tags,comment:p.comments}),E&&(0,g.Y)(u.A,{posts:E,current:c.slug}))};function E(e){return r.createElement(h,e,r.createElement(a.default,e))}const Y=e=>{let{data:t}=e;const{fields:n,frontmatter:a,excerpt:o}=t.mdx,r=s()(n.date).locale("ko").format(),l={headline:a.title,dateModified:r,datePublished:r,mainEntityOfPage:{"@type":"WebPage","@id":location.href},author:{"@type":"Person",name:"Lee Sun-Hyoup"},url:location.href,description:o,"@type":"BlogPosting","@context":"https://schema.org"};return(0,g.Y)(i.A,{title:a.title,description:o},(0,g.Y)("meta",{id:"article:publised_time",name:"article:published_time",content:r}),(0,g.Y)("meta",{id:"image",name:"image",content:a.image}),(0,g.Y)("meta",{id:"og:image",property:"og:image",content:a.image}),(0,g.Y)("meta",{id:"og:image:secure_url",property:"og:image:secure_url",content:a.image}),(0,g.Y)("script",{type:"application/ld+json"},JSON.stringify(l)))},x=(0,o.A)("div",{target:"e1jwq6fl0"})({name:"xl5zip",styles:"margin:16px 0;font-weight:bold;font-size:20px;text-align:center"})}}]);
//# sourceMappingURL=component---src-templates-post-tsx-content-file-path-src-posts-2021-02-23-first-post-md-a849f0a093cd8ca60610.js.map