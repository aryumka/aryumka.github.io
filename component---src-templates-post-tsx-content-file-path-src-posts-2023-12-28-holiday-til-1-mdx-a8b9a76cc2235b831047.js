"use strict";(self.webpackChunkaryumka_me=self.webpackChunkaryumka_me||[]).push([[6046],{1887:function(n,a,s){s.r(a);var t=s(9128),e=s(9474),o=s(5799);function p(n){const a=Object.assign({h3:"h3",a:"a",p:"p",blockquote:"blockquote",ol:"ol",li:"li",span:"span"},(0,t.R)(),n.components);return e.createElement(e.Fragment,null,e.createElement(a.h3,{id:"kotlin-data-class로-entity구현하기"},e.createElement(a.a,{href:"#kotlin-data-class로-entity구현하기"},"kotlin data class로 entity구현하기")),"\n",e.createElement(a.p,null,"Kotlin의 data class는 일단 equals(), copy(), toString() 등 기본적인 메서드들을 만들어줘서 너무 편하다. 기본적으로 immutable인 점도 좋다.\n하지만 도메인 모델의 풍성한 로직을 표현하는데 적합할까? 그건 추후 더 복잡한 비즈니스 로직을 구현할 때 확인할 예정이다."),"\n",e.createElement(a.p,null,"일단 기본적인 기능 구현 시 궁금했던 점은"),"\n",e.createElement(a.blockquote,null,"\n",e.createElement(a.ol,null,"\n",e.createElement(a.li,null,"data class의 모든 필드를 val로 정의하였을 때 더티체킹이 잘 작동할지?"),"\n",e.createElement(a.li,null,"id default값을 기본 0으로 생성해주는데 save 시 새로 생성해야 한다고 판단할 수 있을지? 필드값도 주입 안받으면 기본 0으로 생성되니까 문제는 없어야 맞긴 한데.."),"\n",e.createElement(a.li,null,"기본 equals()는 구조적인 동일성을 판단하는데 Entity의 equals와 호환이 될지"),"\n"),"\n"),"\n",e.createElement(a.p,null,"였다. 그래서 ",e.createElement(a.a,{href:"https://kotest.io/",rel:"nofollow noopener noreferrer"},"Kotest"),"로 테스트 해봤다."),"\n",e.createElement(a.p,null,"코틀린 환경에서 Spring Data JPA의 save()를 테스트 하기 위해 mocking이 아닌 실제 프레임워크 테스트가 필요했다.\nJunit에서와 마찬가지로 ",e.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">@SpringBootTest</code>'}})," 애너테이션을 통해 스프링 빈 주입이 가능했다."),"\n",e.createElement(a.h3,{id:"kotest"},e.createElement(a.a,{href:"#kotest"},"Kotest")),"\n",e.createElement(a.p,null,"다양한 테스트 스타일을 지원한다. 원하는 스타일의 Spec을 상속받아 클래스를 생성하여 사용한다."),"\n",e.createElement(o.A,{src:"https://velog.velcdn.com/images/aryumka/post/1a9143f5-c438-4cb4-88ca-628cbb13d99c/image.png"}),"\n",e.createElement(a.p,null,"특히 BDD 스타일인 BehaviorSpec이 흥미로웠다.\n주석으로 처리되는 given, when, then 같은 테스트 원칙들을 DSL로 코드화했다는 점이 매우 코틀린스럽다.\nJUnit과 같은 애너테이션 스타일도 지원하지만 굳이 쓸 필요는 없어보인다."),"\n",e.createElement(a.p,null,"아래는 BehaviorSpec을 상속받아 만든 테스트 예시이다. 클래스 생성자 파라미터로 코드블록을 넣으면 init"," 블럭에서 해당 코드블록이 실행된다."),"\n",e.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="kotlin"><pre class="language-kotlin"><code class="language-kotlin"><span class="token keyword">class</span> ProposeGenerator <span class="token punctuation">{</span>\n    <span class="token keyword">fun</span> <span class="token function">generateProposal</span><span class="token punctuation">(</span>title<span class="token operator">:</span> String<span class="token punctuation">)</span><span class="token operator">:</span> FundingProposal <span class="token operator">=</span>\n        <span class="token function">FundingProposal</span><span class="token punctuation">(</span>title <span class="token operator">=</span> title<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> ProPoseGeneratorTest<span class="token operator">:</span> <span class="token function">BehaviorSpec</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token function">given</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"제안서 생성기가 주어졌을 때"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">val</span> generator <span class="token operator">=</span> <span class="token function">ProposeGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n        <span class="token function">`when`</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"제안서를 생성한다면"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">val</span> proposal <span class="token operator">=</span> generator<span class="token punctuation">.</span><span class="token function">generateProposal</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"제안서 제목"</span></span><span class="token punctuation">)</span>\n\n            <span class="token function">then</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"제안서는 생성된다"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                proposal<span class="token punctuation">.</span>title shouldBe <span class="token string-literal singleline"><span class="token string">"제안서 제목"</span></span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span></code></pre></div>'}}),"\n",e.createElement(a.p,null,"뭔가 다른 처리가 필요하면 클래스 바디로 init 블록을 따로 뺄 수도 있다. Spring Data JPA가 어떻게 작동하는지 알아보기 위해서는 ",e.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">@Autowired</code>'}}),"를 통한 의존성 주입이 필요했기에 아래와 같이 작성하였다. FunSpec도 사용해봤다."),"\n",e.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="kotlin"><pre class="language-kotlin"><code class="language-kotlin"><span class="token annotation builtin">@SpringBootTest</span>\n<span class="token keyword">class</span> <span class="token function">ProposeUpdateTest</span><span class="token punctuation">(</span><span class="token annotation builtin">@Autowired</span> <span class="token keyword">private</span> <span class="token keyword">val</span> repository<span class="token operator">:</span> ProposalRepository<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token function">FunSpec</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token comment">//    @Autowired //이런식으로는 사용할 수 없다</span>\n<span class="token comment">//    private val repository: ProposalRepository</span>\n    <span class="token annotation builtin">@Autowired</span>\n    <span class="token keyword">val</span> service <span class="token operator">=</span> <span class="token function">ProposeService</span><span class="token punctuation">(</span>repository<span class="token punctuation">)</span>\n\n    <span class="token keyword">init</span> <span class="token punctuation">{</span>\n        <span class="token function">context</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"신청된 제안서가 있는 상황에서"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">val</span> proposal <span class="token operator">=</span> service<span class="token punctuation">.</span><span class="token function">createFundingProposal</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"제안서 제목"</span></span><span class="token punctuation">)</span>\n            <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"proposal: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">proposal</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>\n\n            <span class="token function">test</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"제안서를 수정한다면"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">val</span> newTitle <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"새로운 제안서 제목"</span></span>\n                <span class="token keyword">val</span> updatedProposal <span class="token operator">=</span> service<span class="token punctuation">.</span><span class="token function">updateFundingProposal</span><span class="token punctuation">(</span>proposal<span class="token punctuation">.</span>id<span class="token punctuation">,</span> newTitle<span class="token punctuation">)</span>\n                <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"updatedProposal: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">updatedProposal</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>\n                updatedProposal<span class="token operator">!!</span><span class="token punctuation">.</span>id shouldBe proposal<span class="token punctuation">.</span>id\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",e.createElement(a.p,null,"테스트 결과"),"\n",e.createElement(a.blockquote,null,"\n",e.createElement(a.ol,null,"\n",e.createElement(a.li,null,"immutable인 data class와 그 안의 val 속성들을 조작이 아닌 깊은 복사(=copy())했을 때 더티체킹은 작동하지 않는다. 더티체킹은 객체의 속성 단위에서 체크할 뿐 객체 reference는 작동하지 않는다고 한다. save()를 통해 persist해줘야 한다. 비즈니스로직과 프레임워크를 분리하기 위해 더티체킹을 일부러 사용하지 않기도 한다고 한다."),"\n",e.createElement(a.li,null,"0도 null이라고 인식한다고 한다. 기본타입에서는 default값이 있으니까 당연히 되어야 하는게 맞다."),"\n",e.createElement(a.li,null,"이건 더티체킹과 엮여서 좀 헷갈렸던 부분. EntityManager로부터 관리되지 않는 Entity들은 일단 논외. hashcode를 더 공부해야할듯."),"\n"),"\n"),"\n",e.createElement(a.p,null,"프레임워크가 어떻게 동작하는지 보기 위해서 어쩔수 없이 SpringBootTest를 했지만 매번 리부팅되는 걸 보면서 속이 너무나도 답답했다."),"\n",e.createElement(a.p,null,"mocking은 내일하자."))}a.default=function(n){void 0===n&&(n={});const{wrapper:a}=Object.assign({},(0,t.R)(),n.components);return a?e.createElement(a,n,e.createElement(p,n)):p(n)}},8619:function(n,a,s){s.r(a),s.d(a,{default:function(){return v}});var t=s(1887),e=s(5530),o=s(9474),p=s(8844),l=s(1047),c=s(8928),i=s.n(c),r=s(3893),u=s(2887),k=s(5909),d=s(589),g=s(5181),m=s.n(g),f=s(2195),h=s(6810);i().extend(s(1997));const y=n=>{let{data:a,location:s,pageContext:t,children:e}=n;const{tableOfContents:c,fields:g,frontmatter:y,excerpt:v}=a.mdx,{series:w}=t,b=i()(g.date).locale("ko").format(),P={headline:y.title,dateModified:b,datePublished:b,image:""+s.href+y.image,mainEntityOfPage:{"@type":"WebPage","@id":s.href},author:{"@type":"Person",name:"Lee Sun-Hyoup"},url:s.href,description:v,"@type":"BlogPosting","@context":"https://schema.org"};(0,o.useEffect)((()=>{void 0!==typeof document&&m()((function(){m()(".post-container a[data-footnote-ref]").each(((n,a)=>{var s;const t=null===(s=m()(a).attr("href"))||void 0===s?void 0:s.slice(1),e=m()("#"+t).text().replace("↩","");m()(a).attr("data-tooltip",e)}))}))}),[]);const{0:S,1:x}=(0,o.useState)();(0,o.useEffect)((()=>{x(a.allMdx.edges.filter((n=>n.node.fields.slug!==g.slug)).sort((()=>Math.random()-.5)).slice(0,6))}),[]);const Y=y.draft&&!0;return(0,h.Y)(p.A,null,(0,h.Y)(l.A,{title:y.title,description:v,meta:[{name:"article:published_time",content:i()(g.date).locale("ko").format()},{name:"image",content:"https://aryumka.me"+y.image},{property:"og:image",content:"https://aryumka.me"+y.image},{property:"og:image:secure_url",content:"https://aryumka.me"+y.image}]}),(0,h.Y)(d.m,null,(0,h.Y)("script",{type:"application/ld+json"},JSON.stringify(P))),(0,h.Y)("h1",{className:"post-title"},y.title),(0,h.Y)("span",{className:"post-date"},"Written on ",i()(g.date).locale("en").format("LL")),(0,h.Y)("img",{src:y.image,style:{objectFit:"cover",maxHeight:300,width:"100%"}}),Y||c.items&&(0,h.Y)(k.A,{items:c.items}),Y||(null==w?void 0:w.items)&&(0,h.Y)(f.A,{title:w.title,items:w.items,currentItem:y.title}),(0,h.Y)("div",{className:"post-content"},Y?(0,h.Y)(E,null,"Not yet published"):e),(0,h.Y)(r.A,{tags:y.tags,comment:y.comments}),S&&(0,h.Y)(u.A,{posts:S,current:g.slug}))};function v(n){return o.createElement(y,n,o.createElement(t.default,n))}const E=(0,e.A)("div",{target:"ezegrm70"})({name:"xl5zip",styles:"margin:16px 0;font-weight:bold;font-size:20px;text-align:center"})},5799:function(n,a,s){var t=s(9474),e=s(1615),o=s(6810);a.A=n=>{let{src:a,caption:s,width:p,expandable:l}=n;const{0:c,1:i}=(0,t.useState)(!1);return(0,o.Y)("figure",null,(0,o.Y)("img",{src:a,width:p,style:{cursor:l?"zoom-in":"default"},onClick:l?()=>i(!0):void 0}),s&&(0,o.Y)("figcaption",{dangerouslySetInnerHTML:{__html:s}}),c&&e.createPortal((0,o.Y)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",cursor:"zoom-out",backgroundColor:"rgba(0, 0, 0, 0.7)"},onClick:()=>i(!1)},(0,o.Y)("div",{style:{borderRadius:8,maxWidth:1200,width:"80%",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"white"}},(0,o.Y)("img",{src:a,width:"100%"}))),document.body))}}}]);
//# sourceMappingURL=component---src-templates-post-tsx-content-file-path-src-posts-2023-12-28-holiday-til-1-mdx-a8b9a76cc2235b831047.js.map