"use strict";(self.webpackChunkaryumka_me=self.webpackChunkaryumka_me||[]).push([[4944,4164,4646,1482,7824,6638,3284,8995],{4886:function(n,s,a){a.r(s);var t=a(9128),e=a(9474);function p(n){const s=Object.assign({p:"p",span:"span"},(0,t.R)(),n.components);return e.createElement(e.Fragment,null,e.createElement(s.p,null,"다중조건으로 정렬해야 할 때 ",e.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">sotredWith()</code>'}})," 안에 ",e.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">compareBy()</code>'}})," 또는 ",e.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">compareBy{}.thenBy{}</code>'}}),"를 파라미터로 넘겨준다. ",e.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">compareByDescending{}</code>'}})," 또는 ",e.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">.thenByDescending{}</code>'}}),"도 있다."),"\n",e.createElement(s.p,null,"아래는 코드 예시"),"\n",e.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="kotlin"><pre class="language-kotlin"><code class="language-kotlin"><span class="token keyword">data</span> <span class="token keyword">class</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token keyword">val</span> age<span class="token operator">:</span> Int<span class="token punctuation">,</span> <span class="token keyword">val</span> name<span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token keyword">val</span> address<span class="token operator">:</span> String<span class="token punctuation">)</span>\n\n<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">val</span> list <span class="token operator">=</span> listOf<span class="token operator">&lt;</span>Person<span class="token operator">></span><span class="token punctuation">(</span>\n\t\t<span class="token function">Person</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"Bob"</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"Berlin"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t\t<span class="token function">Person</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"David"</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"Berlin"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t\t<span class="token function">Person</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"Alice"</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"Paris"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t\t<span class="token function">Person</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"Charles"</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"Paris"</span></span><span class="token punctuation">)</span>\n\t<span class="token punctuation">)</span>\n    \n    <span class="token comment">//1. 주소로 먼저 정렬 후 이름 역순으로 정렬</span>\n    <span class="token keyword">val</span> sortedList <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">sortedWith</span><span class="token punctuation">(</span>\n        compareBy<span class="token operator">&lt;</span>Person<span class="token operator">></span><span class="token punctuation">{</span>\n            it<span class="token punctuation">.</span>address\n        <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">thenByDescending</span> <span class="token punctuation">{</span>\n            it<span class="token punctuation">.</span>name\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">)</span>\n    \n    <span class="token function">println</span><span class="token punctuation">(</span>sortedList<span class="token punctuation">)</span>\n    <span class="token comment">/* 출력결과\n    [Person(age=10, name=David, address=Berlin),\n    Person(age=10, name=Bob, address=Berlin), \n    Person(age=10, name=Charles, address=Paris), \n    Person(age=10, name=Alice, address=Paris)] */</span>\n    \n    \n    \n    <span class="token comment">//2. 주소로 먼저 정렬 후 이름 순으로 정렬</span>\n    <span class="token keyword">val</span> sortedList2 <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">sortedWith</span><span class="token punctuation">(</span>\n        <span class="token function">compareBy</span><span class="token punctuation">(</span>        \n            <span class="token punctuation">{</span>it<span class="token punctuation">.</span>address<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>it<span class="token punctuation">.</span>name<span class="token punctuation">}</span>\n        <span class="token punctuation">)</span>\n    <span class="token punctuation">)</span>\n    <span class="token function">println</span><span class="token punctuation">(</span>sortedList2<span class="token punctuation">)</span>\n    <span class="token comment">/*출력결과\n    [Person(age=10, name=Bob, address=Berlin), \n    Person(age=10, name=David, address=Berlin), \n    Person(age=10, name=Alice, address=Paris), \n    Person(age=10, name=Charles, address=Paris)]\n    */</span>\n<span class="token punctuation">}</span></code></pre></div>'}}))}s.default=function(n){void 0===n&&(n={});const{wrapper:s}=Object.assign({},(0,t.R)(),n.components);return s?e.createElement(s,n,e.createElement(p,n)):p(n)}},9128:function(n,s,a){a.d(s,{R:function(){return o}});var t=a(9474);const e={},p=t.createContext(e);function o(n){const s=t.useContext(p);return t.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}}}]);
//# sourceMappingURL=component---src-posts-2024-02-07-til-kotlin-sort-mdx-0f63f55a4ae20c17ac4a.js.map