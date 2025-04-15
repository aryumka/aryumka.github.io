"use strict";(self.webpackChunkaryumka_me=self.webpackChunkaryumka_me||[]).push([[8183],{4661:function(n,s,a){a.r(s),a.d(s,{default:function(){return P}});var t=a(9142),e=a(915),p=a(9474),o=a(9591),c=a(6203),l=a(8928),i=a.n(l),r=a(7507),u=a(6483),k=a(1041),d=a(589),m=a(7569),g=a.n(m),f=a(2831),h=a(3543);i().extend(a(1997));const y=n=>{let{data:s,location:a,pageContext:t,children:e}=n;const{tableOfContents:l,fields:m,frontmatter:y,excerpt:P}=s.mdx,{series:b}=t,B=i()(m.date).locale("ko").format(),x={headline:y.title,dateModified:B,datePublished:B,image:`${a.href}${y.image}`,mainEntityOfPage:{"@type":"WebPage","@id":a.href},author:{"@type":"Person",name:"Lee Sun-Hyoup"},url:a.href,description:P,"@type":"BlogPosting","@context":"https://schema.org"};(0,p.useEffect)((()=>{void 0!==typeof document&&g()((function(){g()(".post-container a[data-footnote-ref]").each(((n,s)=>{var a;const t=null===(a=g()(s).attr("href"))||void 0===a?void 0:a.slice(1),e=g()("#"+t).text().replace("↩","");g()(s).attr("data-tooltip",e)}))}))}),[]);const{0:E,1:_}=(0,p.useState)();(0,p.useEffect)((()=>{_(s.allMdx.edges.filter((n=>n.node.fields.slug!==m.slug)).sort((()=>Math.random()-.5)).slice(0,6))}),[]);const w=y.draft&&!0;return(0,h.Y)(o.A,null,(0,h.Y)(c.A,{title:y.title,description:P,meta:[{name:"article:published_time",content:i()(m.date).locale("ko").format()},{name:"image",content:`https://aryumka.me${y.image}`},{property:"og:image",content:`https://aryumka.me${y.image}`},{property:"og:image:secure_url",content:`https://aryumka.me${y.image}`}]}),(0,h.Y)(d.m,null,(0,h.Y)("script",{type:"application/ld+json"},JSON.stringify(x))),(0,h.Y)("h1",{className:"post-title"},y.title),(0,h.Y)("span",{className:"post-date"},"Written on ",i()(m.date).locale("en").format("LL")),(0,h.Y)("img",{src:y.image,style:{objectFit:"cover",maxHeight:300,width:"100%"}}),w||l.items&&(0,h.Y)(k.A,{items:l.items}),w||(null==b?void 0:b.items)&&(0,h.Y)(f.A,{title:b.title,items:b.items,currentItem:y.title}),(0,h.Y)("div",{className:"post-content"},w?(0,h.Y)(v,null,"Not yet published"):e),(0,h.Y)(r.A,{tags:y.tags,comment:y.comments}),E&&(0,h.Y)(u.A,{posts:E,current:m.slug}))};function P(n){return p.createElement(y,n,p.createElement(t.default,n))}const v=(0,e.A)("div",{target:"ezegrm70"})({name:"xl5zip",styles:"margin:16px 0;font-weight:bold;font-size:20px;text-align:center"})},9142:function(n,s,a){a.r(s);var t=a(9128),e=a(9474);function p(n){const s=Object.assign({p:"p",span:"span"},(0,t.R)(),n.components);return e.createElement(e.Fragment,null,e.createElement(s.p,null,"다중조건으로 정렬해야 할 때 ",e.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">sotredWith()</code>'}})," 안에 ",e.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">compareBy()</code>'}})," 또는 ",e.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">compareBy{}.thenBy{}</code>'}}),"를 파라미터로 넘겨준다. ",e.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">compareByDescending{}</code>'}})," 또는 ",e.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">.thenByDescending{}</code>'}}),"도 있다."),"\n",e.createElement(s.p,null,"아래는 코드 예시"),"\n",e.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="kotlin"><pre class="language-kotlin"><code class="language-kotlin"><span class="token keyword">data</span> <span class="token keyword">class</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token keyword">val</span> age<span class="token operator">:</span> Int<span class="token punctuation">,</span> <span class="token keyword">val</span> name<span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token keyword">val</span> address<span class="token operator">:</span> String<span class="token punctuation">)</span>\n\n<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">val</span> list <span class="token operator">=</span> listOf<span class="token operator">&lt;</span>Person<span class="token operator">></span><span class="token punctuation">(</span>\n\t\t<span class="token function">Person</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"Bob"</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"Berlin"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t\t<span class="token function">Person</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"David"</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"Berlin"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t\t<span class="token function">Person</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"Alice"</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"Paris"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t\t<span class="token function">Person</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"Charles"</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"Paris"</span></span><span class="token punctuation">)</span>\n\t<span class="token punctuation">)</span>\n    \n    <span class="token comment">//1. 주소로 먼저 정렬 후 이름 역순으로 정렬</span>\n    <span class="token keyword">val</span> sortedList <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">sortedWith</span><span class="token punctuation">(</span>\n        compareBy<span class="token operator">&lt;</span>Person<span class="token operator">></span><span class="token punctuation">{</span>\n            it<span class="token punctuation">.</span>address\n        <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">thenByDescending</span> <span class="token punctuation">{</span>\n            it<span class="token punctuation">.</span>name\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">)</span>\n    \n    <span class="token function">println</span><span class="token punctuation">(</span>sortedList<span class="token punctuation">)</span>\n    <span class="token comment">/* 출력결과\n    [Person(age=10, name=David, address=Berlin),\n    Person(age=10, name=Bob, address=Berlin), \n    Person(age=10, name=Charles, address=Paris), \n    Person(age=10, name=Alice, address=Paris)] */</span>\n    \n    \n    \n    <span class="token comment">//2. 주소로 먼저 정렬 후 이름 순으로 정렬</span>\n    <span class="token keyword">val</span> sortedList2 <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">sortedWith</span><span class="token punctuation">(</span>\n        <span class="token function">compareBy</span><span class="token punctuation">(</span>        \n            <span class="token punctuation">{</span>it<span class="token punctuation">.</span>address<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>it<span class="token punctuation">.</span>name<span class="token punctuation">}</span>\n        <span class="token punctuation">)</span>\n    <span class="token punctuation">)</span>\n    <span class="token function">println</span><span class="token punctuation">(</span>sortedList2<span class="token punctuation">)</span>\n    <span class="token comment">/*출력결과\n    [Person(age=10, name=Bob, address=Berlin), \n    Person(age=10, name=David, address=Berlin), \n    Person(age=10, name=Alice, address=Paris), \n    Person(age=10, name=Charles, address=Paris)]\n    */</span>\n<span class="token punctuation">}</span></code></pre></div>'}}))}s.default=function(n){void 0===n&&(n={});const{wrapper:s}=Object.assign({},(0,t.R)(),n.components);return s?e.createElement(s,n,e.createElement(p,n)):p(n)}}}]);
//# sourceMappingURL=component---src-templates-post-tsx-content-file-path-src-posts-2024-02-07-til-kotlin-sort-mdx-0c4db8cac80cbf75d434.js.map