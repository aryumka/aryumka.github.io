"use strict";(self.webpackChunkaryumka_me=self.webpackChunkaryumka_me||[]).push([[5009],{5844:function(n,t,a){a.r(t);var e=a(9128),s=a(9474),o=a(5799);function l(n){const t=Object.assign({p:"p",span:"span"},(0,e.R)(),n.components);return s.createElement(s.Fragment,null,s.createElement(t.p,null,"In-memory service나 mock 없이 통합 테스트 환경에서 Docker 이미지 기반으로 DB, 메시지 브로커, 검색엔진 등의 테스트 인프라를 간단하게 구성할 수 있다."),"\n",s.createElement(t.p,null,"특히 클라우드 환경의 MSA에서 유용하다."),"\n",s.createElement(o.A,{src:"https://velog.velcdn.com/images/aryumka/post/9fcbd346-bd6e-4097-bce9-b7c9468b5cfc/image.png"}),"\n",s.createElement(t.p,null,"JUnit을 이용한 테스트에서는 아래와 같이 사용한다."),"\n",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="kotlin"><pre class="language-kotlin"><code class="language-kotlin">testImplementation <span class="token string-literal singleline"><span class="token string">"org.junit.jupiter:junit-jupiter:5.8.1"</span></span>\ntestImplementation <span class="token string-literal singleline"><span class="token string">"org.testcontainers:testcontainers:1.19.7"</span></span>\ntestImplementation <span class="token string-literal singleline"><span class="token string">"org.testcontainers:junit-jupiter:1.19.7"</span></span></code></pre></div>'}}),"\n",s.createElement(t.p,null,"의존성을 설정하고"),"\n",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="java"><pre class="language-java"><code class="language-java"><span class="token annotation punctuation">@Testcontainers</span>\n<span class="token keyword">class</span> <span class="token class-name">TokenReplayIntegrationTest</span> <span class="token punctuation">{</span>\n\n    <span class="token annotation punctuation">@Container</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">RedpandaContainer</span> <span class="token constant">REDPANDA_CONTAINER</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedpandaContainer</span><span class="token punctuation">(</span>\n            <span class="token string">"docker.redpanda.com/vectorized/redpanda:v22.2.1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></code></pre></div>'}}),"\n",s.createElement(t.p,null,"위 처럼 kafka 통합 테스트 환경을 RedPanda를 이용하여 구성할 수도 있고"),"\n",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="java"><pre class="language-java"><code class="language-java"><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token class-name">OracleContainer</span> oracleContainer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OracleContainer</span><span class="token punctuation">(</span><span class="token string">"gvenzl/oracle-xe:21-slim-faststart"</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">withDatabaseName</span><span class="token punctuation">(</span><span class="token string">"testDB"</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">withUsername</span><span class="token punctuation">(</span><span class="token string">"testUser"</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">withPassword</span><span class="token punctuation">(</span><span class="token string">"testPassword"</span><span class="token punctuation">)</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></code></pre></div>'}}),"\n",s.createElement(t.p,null,"위 처럼 DB 통합 테스트 환경을 구성할 수도 있다."))}t.default=function(n){void 0===n&&(n={});const{wrapper:t}=Object.assign({},(0,e.R)(),n.components);return t?s.createElement(t,n,s.createElement(l,n)):l(n)}},2417:function(n,t,a){a.r(t),a.d(t,{default:function(){return v}});var e=a(5844),s=a(5530),o=a(9474),l=a(8844),c=a(1047),p=a(8928),i=a.n(p),r=a(3893),u=a(2887),d=a(5909),m=a(589),g=a(5181),k=a.n(g),f=a(2195),h=a(6810);i().extend(a(1997));const y=n=>{let{data:t,location:a,pageContext:e,children:s}=n;const{tableOfContents:p,fields:g,frontmatter:y,excerpt:v}=t.mdx,{series:w}=e,E=i()(g.date).locale("ko").format(),Y={headline:y.title,dateModified:E,datePublished:E,image:""+a.href+y.image,mainEntityOfPage:{"@type":"WebPage","@id":a.href},author:{"@type":"Person",name:"Lee Sun-Hyoup"},url:a.href,description:v,"@type":"BlogPosting","@context":"https://schema.org"};(0,o.useEffect)((()=>{void 0!==typeof document&&k()((function(){k()(".post-container a[data-footnote-ref]").each(((n,t)=>{var a;const e=null===(a=k()(t).attr("href"))||void 0===a?void 0:a.slice(1),s=k()("#"+e).text().replace("↩","");k()(t).attr("data-tooltip",s)}))}))}),[]);const{0:x,1:j}=(0,o.useState)();(0,o.useEffect)((()=>{j(t.allMdx.edges.filter((n=>n.node.fields.slug!==g.slug)).sort((()=>Math.random()-.5)).slice(0,6))}),[]);const C=y.draft&&!0;return(0,h.Y)(l.A,null,(0,h.Y)(c.A,{title:y.title,description:v,meta:[{name:"article:published_time",content:i()(g.date).locale("ko").format()},{name:"image",content:"https://aryumka.me"+y.image},{property:"og:image",content:"https://aryumka.me"+y.image},{property:"og:image:secure_url",content:"https://aryumka.me"+y.image}]}),(0,h.Y)(m.m,null,(0,h.Y)("script",{type:"application/ld+json"},JSON.stringify(Y))),(0,h.Y)("h1",{className:"post-title"},y.title),(0,h.Y)("span",{className:"post-date"},"Written on ",i()(g.date).locale("en").format("LL")),(0,h.Y)("img",{src:y.image,style:{objectFit:"cover",maxHeight:300,width:"100%"}}),C||p.items&&(0,h.Y)(d.A,{items:p.items}),C||(null==w?void 0:w.items)&&(0,h.Y)(f.A,{title:w.title,items:w.items,currentItem:y.title}),(0,h.Y)("div",{className:"post-content"},C?(0,h.Y)(b,null,"Not yet published"):s),(0,h.Y)(r.A,{tags:y.tags,comment:y.comments}),x&&(0,h.Y)(u.A,{posts:x,current:g.slug}))};function v(n){return o.createElement(y,n,o.createElement(e.default,n))}const b=(0,s.A)("div",{target:"ezegrm70"})({name:"xl5zip",styles:"margin:16px 0;font-weight:bold;font-size:20px;text-align:center"})},5799:function(n,t,a){var e=a(9474),s=a(1615),o=a(6810);t.A=n=>{let{src:t,caption:a,width:l,expandable:c}=n;const{0:p,1:i}=(0,e.useState)(!1);return(0,o.Y)("figure",null,(0,o.Y)("img",{src:t,width:l,style:{cursor:c?"zoom-in":"default"},onClick:c?()=>i(!0):void 0}),a&&(0,o.Y)("figcaption",{dangerouslySetInnerHTML:{__html:a}}),p&&s.createPortal((0,o.Y)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",cursor:"zoom-out",backgroundColor:"rgba(0, 0, 0, 0.7)"},onClick:()=>i(!1)},(0,o.Y)("div",{style:{borderRadius:8,maxWidth:1200,width:"80%",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"white"}},(0,o.Y)("img",{src:t,width:"100%"}))),document.body))}}}]);
//# sourceMappingURL=component---src-templates-post-tsx-content-file-path-src-posts-2024-05-04-til-test-container-mdx-f2f6eef82492247f3b5d.js.map