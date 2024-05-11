"use strict";(self.webpackChunkaryumka_me=self.webpackChunkaryumka_me||[]).push([[8183],{4886:function(e,t,n){n.r(t);var a=n(9128),l=n(9474);function r(e){const t=Object.assign({ul:"ul",li:"li",span:"span",p:"p"},(0,a.R)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"운영중인 DB에 Foreign Key를 떼고 운영하는 것은 굉장히 흔한 사례다. 반면 이게 올바른 프랙티스인지는 늘 논란의 여지가 있다. 여러가지 전략을 가져갈 수 있겠지만 Foreign key를 달고 운영한다면 분명히 Foreign Key가 적용된 칼럼을 긴급하게 수정해야할 때가 있을 것인데 연관관계가 복잡하다면 시간이 오래걸릴 것이다.\nMySQL에서는 이럴 때 글로벌 혹은 세션 설정으로 외래키 검사를 끌 수 있다."),"\n"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">SET foreign_key_checks = OFF;\nSET SESSION foreign_key_checks = OFF;</code></pre></div>'}}),"\n",l.createElement(t.p,null,"위 두 가지 명령어 모두 현재 실행 중인 세션의 설정을 변경한다(글로벌이면 전체 설정이 변경됨).\n주의할 점: 작업이 끝나면 부모키와 자식키의 정합성을 모두 맞춘 후 설정을 원복해야 한다."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"DB에서도 command와 query의 처리는 다르다. InnoDB에서는 쓰기 작업은 지연(버퍼)되어 처리될 수 있지만 읽기 작업은 즉시 처리된다. 읽기 작업은 대부분 포그라운드 스레드(클라이언트)에서 담당하지만 쓰기 작업은 백그라운드 스레드에서 담당한다. 백그라운드 스레드는 락을 모니터링하거나, 버퍼에 있는 데이터로 내리거나 디스크로 쓰는 등 복잡한 작업들을 처리한다."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"스프링에서 트랜잭션을 메서드 마다 개별설정해야하는 이유:\n메서드마다 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">@Transactional</code>'}})," 애너테이션을 사용한 개별 트랜잭션 적용 vs ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">AOP</code>'}}),"를 이용한 서비스 일괄 적용.\n항상 의문이던 부분이었다. 인프런에 DB관련 강의를 들을 때도 질문을 했었지만 어떤 게 더 바람직한지 명쾌하지는 않았다."),"\n"),"\n"),"\n",l.createElement(t.p,null,"트랜잭션의 설정 범위"))}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.R)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)}},3652:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(4886),l=n(5530),r=n(9474),o=n(8844),s=n(1047),i=n(8928),c=n.n(i),m=n(3893),u=n(2887),d=n(5909),g=n(589),p=n(5181),f=n.n(p),h=n(2195),y=n(6810);c().extend(n(1997));const E=e=>{let{data:t,location:n,pageContext:a,children:l}=e;const{tableOfContents:i,fields:p,frontmatter:E,excerpt:x}=t.mdx,{series:v}=a,_=c()(p.date).locale("ko").format(),Y={headline:E.title,dateModified:_,datePublished:_,image:""+n.href+E.image,mainEntityOfPage:{"@type":"WebPage","@id":n.href},author:{"@type":"Person",name:"Lee Sun-Hyoup"},url:n.href,description:x,"@type":"BlogPosting","@context":"https://schema.org"};(0,r.useEffect)((()=>{void 0!==typeof document&&f()((function(){f()(".post-container a[data-footnote-ref]").each(((e,t)=>{var n;const a=null===(n=f()(t).attr("href"))||void 0===n?void 0:n.slice(1),l=f()("#"+a).text().replace("↩","");f()(t).attr("data-tooltip",l)}))}))}),[]);const{0:b,1:S}=(0,r.useState)();(0,r.useEffect)((()=>{S(t.allMdx.edges.filter((e=>e.node.fields.slug!==p.slug)).sort((()=>Math.random()-.5)).slice(0,6))}),[]);const F=E.draft&&!0;return(0,y.Y)(o.A,null,(0,y.Y)(s.A,{title:E.title,description:x,meta:[{name:"article:published_time",content:c()(p.date).locale("ko").format()},{name:"image",content:"https://aryumka.me"+E.image},{property:"og:image",content:"https://aryumka.me"+E.image},{property:"og:image:secure_url",content:"https://aryumka.me"+E.image}]}),(0,y.Y)(g.m,null,(0,y.Y)("script",{type:"application/ld+json"},JSON.stringify(Y))),(0,y.Y)("h1",{className:"post-title"},E.title),(0,y.Y)("span",{className:"post-date"},"Written on ",c()(p.date).locale("en").format("LL")),(0,y.Y)("img",{src:E.image,style:{objectFit:"cover",maxHeight:300,width:"100%"}}),F||i.items&&(0,y.Y)(d.A,{items:i.items}),F||(null==v?void 0:v.items)&&(0,y.Y)(h.A,{title:v.title,items:v.items,currentItem:E.title}),(0,y.Y)("div",{className:"post-content"},F?(0,y.Y)(k,null,"Not yet published"):l),(0,y.Y)(m.A,{tags:E.tags,comment:E.comments}),b&&(0,y.Y)(u.A,{posts:b,current:p.slug}))};function x(e){return r.createElement(E,e,r.createElement(a.default,e))}const k=(0,l.A)("div",{target:"ezegrm70"})({name:"xl5zip",styles:"margin:16px 0;font-weight:bold;font-size:20px;text-align:center"})}}]);
//# sourceMappingURL=component---src-templates-post-tsx-content-file-path-src-posts-2024-02-07-til-kotlin-sort-mdx-a9b5cd1a7222fc5e9c71.js.map