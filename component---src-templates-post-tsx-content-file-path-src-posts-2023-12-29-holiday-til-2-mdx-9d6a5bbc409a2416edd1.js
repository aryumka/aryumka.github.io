"use strict";(self.webpackChunkaryumka_me=self.webpackChunkaryumka_me||[]).push([[6656],{5485:function(n,s,a){a.r(s);var t=a(9128),e=a(9474),p=a(5799);function o(n){const s=Object.assign({h3:"h3",a:"a",p:"p",span:"span"},(0,t.R)(),n.components);return e.createElement(e.Fragment,null,e.createElement(s.h3,{id:"github-action---ci"},e.createElement(s.a,{href:"#github-action---ci"},"Github Action - CI")),"\n",e.createElement(s.p,null,"깃허브에서 제공하는 CI/CD 툴이다.\n공식홈페이지에 아주 자세한 설명이 나와있다. 사용방법은 매우 쉽다. 하고 싶은 작업과 조건들을 스크립트에 작성만 해주면 된다.\n스크립트 템플릿도 바로 깃헙에서 만들 수 있다. 거기서 원하는 부분만 고쳐서 쓰면 된다.\n일단 내 목적은 테스트 통과, build 통과였다. 자동생성된 템플릿에서 자바 버젼을 수정해주고 테스트를 추가해준다."),"\n",e.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="yaml"><pre class="language-yaml"><code class="language-yaml">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Set up JDK 19\n        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>java@v1\n        <span class="token key atrule">with</span><span class="token punctuation">:</span>\n          <span class="token key atrule">java-version</span><span class="token punctuation">:</span> <span class="token number">19</span>\n\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> run tests\n        <span class="token key atrule">run</span><span class="token punctuation">:</span> ./gradlew test</code></pre></div>'}}),"\n",e.createElement(s.p,null,"이렇게 처음 테스트를 실행할 때 ./gradlew 실행이 실패했다. 원인은 접근권한이 없다는 것."),"\n",e.createElement(p.A,{src:"https://velog.velcdn.com/images/aryumka/post/e6075269-05de-4e29-9193-98f4c4bee66c/image.png"}),"\n",e.createElement(s.p,null,"그래서 권한 부여 커맨드를 스텝에 추가해주었다."),"\n",e.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="yaml"><pre class="language-yaml"><code class="language-yaml">      <span class="token comment"># Runs a single command using the runners shell</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run a one<span class="token punctuation">-</span>line script\n        <span class="token key atrule">run</span><span class="token punctuation">:</span> chmod +x gradlew</code></pre></div>'}}),"\n",e.createElement(s.p,null,"깃헙에서 제공하는 가상머신 위에서 동작하기 때문에 매번 실행해주어야 할 것 같다.\n공식 문서에 따르면 ",e.createElement(s.a,{href:"https://docs.github.com/ko/actions/learn-github-actions/understanding-github-actions#runners",rel:"nofollow noopener noreferrer"},"직접 자신의 runner를 호스팅"),"할 수도 있다고 한다."),"\n",e.createElement(s.p,null,"빌드가 잘 된다."),"\n",e.createElement(s.h3,{id:"mockk"},e.createElement(s.a,{href:"#mockk"},"Mockk")),"\n",e.createElement(s.p,null,"mockito보다 코틀린에 더 적합하다고 평가받는 mocking 라이브러리다.\n",e.createElement(s.a,{href:"https://spring.io/guides/tutorials/spring-boot-kotlin/",rel:"nofollow noopener noreferrer"},"스프링 공식 가이드문서"),"에 나온다.\n위의 예시대로 스프링 환경에서 지원되는 버젼이 있어서 kotest와 섞어서 써보려고 했는데.. 잘 안된다.. 어디가 문젠지 모르겠다.\n내일 다시 해봐야겠다."),"\n",e.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="kotlin"><pre class="language-kotlin"><code class="language-kotlin"><span class="token annotation builtin">@WebMvcTest</span><span class="token punctuation">(</span>ProposeController<span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span>\n<span class="token annotation builtin">@AutoConfigureMockMvc</span>\n<span class="token keyword">class</span> <span class="token function">ProposeUpdateTestGpt</span><span class="token punctuation">(</span><span class="token annotation builtin">@Autowired</span> <span class="token keyword">val</span> mockMvc<span class="token operator">:</span> MockMvc<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">FunSpec</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n    <span class="token annotation builtin">@MockkBean</span>\n    <span class="token keyword">private</span> <span class="token keyword">lateinit</span> <span class="token keyword">var</span> service<span class="token operator">:</span> ProposeService\n\n    <span class="token keyword">init</span> <span class="token punctuation">{</span>\n        beforeTest <span class="token punctuation">{</span>\n            service <span class="token operator">=</span> <span class="token function">mockk</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n            every <span class="token punctuation">{</span> service<span class="token punctuation">.</span><span class="token function">createFundingProposal</span><span class="token punctuation">(</span><span class="token function">any</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">}</span> returns <span class="token function">FundingProposal</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"제안서 제목"</span></span><span class="token punctuation">)</span>\n            every <span class="token punctuation">{</span> service<span class="token punctuation">.</span><span class="token function">updateFundingProposal</span><span class="token punctuation">(</span><span class="token function">any</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">any</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">}</span> returns <span class="token function">FundingProposal</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"새로운 제안서 제목"</span></span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token function">test</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"제안서 생성"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">val</span> expectedId <span class="token operator">=</span> <span class="token number">1L</span>\n            <span class="token keyword">val</span> expectedTitle <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"제안서 제목"</span></span>\n\n            mockMvc<span class="token punctuation">.</span><span class="token function">perform</span><span class="token punctuation">(</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"/fundMng/proposal/create"</span></span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">content</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"제안서 제목"</span></span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">contentType</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"text/plain"</span></span><span class="token punctuation">)</span>\n            <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">andExpect</span><span class="token punctuation">(</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>isOk<span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">andExpect</span><span class="token punctuation">(</span><span class="token function">jsonPath</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"$.id"</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>expectedId<span class="token punctuation">)</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">andExpect</span><span class="token punctuation">(</span><span class="token function">jsonPath</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"$.title"</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>expectedTitle<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token function">test</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"제안서 수정"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">val</span> proposalId <span class="token operator">=</span> <span class="token number">1</span>\n            <span class="token keyword">val</span> newTitle <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"새로운 제안서 제목"</span></span>\n            <span class="token keyword">val</span> expectedId <span class="token operator">=</span> <span class="token number">1L</span>\n            <span class="token keyword">val</span> expectedTitle <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"새로운 제안서 제목"</span></span>\n\n            mockMvc<span class="token punctuation">.</span><span class="token function">perform</span><span class="token punctuation">(</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"/fundMng/proposal/1"</span></span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">content</span><span class="token punctuation">(</span>newTitle<span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">contentType</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"text/plain"</span></span><span class="token punctuation">)</span>\n            <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">andExpect</span><span class="token punctuation">(</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>isOk<span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">andExpect</span><span class="token punctuation">(</span><span class="token function">jsonPath</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"$.id"</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>expectedId<span class="token punctuation">)</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">andExpect</span><span class="token punctuation">(</span><span class="token function">jsonPath</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"$.title"</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>expectedTitle<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div>'}}))}s.default=function(n){void 0===n&&(n={});const{wrapper:s}=Object.assign({},(0,t.R)(),n.components);return s?e.createElement(s,n,e.createElement(o,n)):o(n)}},5454:function(n,s,a){a.r(s),a.d(s,{default:function(){return v}});var t=a(5485),e=a(5530),p=a(9474),o=a(8844),c=a(1047),l=a(8928),i=a.n(l),u=a(3893),k=a(2887),r=a(5909),g=a(589),d=a(7569),m=a.n(d),f=a(2195),h=a(6810);i().extend(a(1997));const y=n=>{let{data:s,location:a,pageContext:t,children:e}=n;const{tableOfContents:l,fields:d,frontmatter:y,excerpt:v}=s.mdx,{series:w}=t,x=i()(d.date).locale("ko").format(),E={headline:y.title,dateModified:x,datePublished:x,image:`${a.href}${y.image}`,mainEntityOfPage:{"@type":"WebPage","@id":a.href},author:{"@type":"Person",name:"Lee Sun-Hyoup"},url:a.href,description:v,"@type":"BlogPosting","@context":"https://schema.org"};(0,p.useEffect)((()=>{void 0!==typeof document&&m()((function(){m()(".post-container a[data-footnote-ref]").each(((n,s)=>{var a;const t=null===(a=m()(s).attr("href"))||void 0===a?void 0:a.slice(1),e=m()("#"+t).text().replace("↩","");m()(s).attr("data-tooltip",e)}))}))}),[]);const{0:M,1:Y}=(0,p.useState)();(0,p.useEffect)((()=>{Y(s.allMdx.edges.filter((n=>n.node.fields.slug!==d.slug)).sort((()=>Math.random()-.5)).slice(0,6))}),[]);const P=y.draft&&!0;return(0,h.Y)(o.A,null,(0,h.Y)(c.A,{title:y.title,description:v,meta:[{name:"article:published_time",content:i()(d.date).locale("ko").format()},{name:"image",content:`https://aryumka.me${y.image}`},{property:"og:image",content:`https://aryumka.me${y.image}`},{property:"og:image:secure_url",content:`https://aryumka.me${y.image}`}]}),(0,h.Y)(g.m,null,(0,h.Y)("script",{type:"application/ld+json"},JSON.stringify(E))),(0,h.Y)("h1",{className:"post-title"},y.title),(0,h.Y)("span",{className:"post-date"},"Written on ",i()(d.date).locale("en").format("LL")),(0,h.Y)("img",{src:y.image,style:{objectFit:"cover",maxHeight:300,width:"100%"}}),P||l.items&&(0,h.Y)(r.A,{items:l.items}),P||(null==w?void 0:w.items)&&(0,h.Y)(f.A,{title:w.title,items:w.items,currentItem:y.title}),(0,h.Y)("div",{className:"post-content"},P?(0,h.Y)(b,null,"Not yet published"):e),(0,h.Y)(u.A,{tags:y.tags,comment:y.comments}),M&&(0,h.Y)(k.A,{posts:M,current:d.slug}))};function v(n){return p.createElement(y,n,p.createElement(t.default,n))}const b=(0,e.A)("div",{target:"ezegrm70"})({name:"xl5zip",styles:"margin:16px 0;font-weight:bold;font-size:20px;text-align:center"})},5799:function(n,s,a){var t=a(9474),e=a(1615),p=a(6810);s.A=n=>{let{src:s,caption:a,width:o,expandable:c}=n;const{0:l,1:i}=(0,t.useState)(!1);return(0,p.Y)("figure",null,(0,p.Y)("img",{src:s,width:o,style:{cursor:c?"zoom-in":"default"},onClick:c?()=>i(!0):void 0}),a&&(0,p.Y)("figcaption",{dangerouslySetInnerHTML:{__html:a}}),l&&e.createPortal((0,p.Y)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",cursor:"zoom-out",backgroundColor:"rgba(0, 0, 0, 0.7)"},onClick:()=>i(!1)},(0,p.Y)("div",{style:{borderRadius:8,maxWidth:1200,width:"80%",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"white"}},(0,p.Y)("img",{src:s,width:"100%"}))),document.body))}}}]);
//# sourceMappingURL=component---src-templates-post-tsx-content-file-path-src-posts-2023-12-29-holiday-til-2-mdx-9d6a5bbc409a2416edd1.js.map