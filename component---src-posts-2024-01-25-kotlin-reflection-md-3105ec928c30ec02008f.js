"use strict";(self.webpackChunkaryumka_me=self.webpackChunkaryumka_me||[]).push([[3586,8036,254,1032,8740,1465],{9296:function(n,a,s){s.r(a);var e=s(9128),t=s(9474);function l(n){const a=Object.assign({h2:"h2",a:"a",p:"p",strong:"strong",span:"span",h3:"h3",img:"img",h4:"h4",ul:"ul",li:"li"},(0,e.R)(),n.components);return t.createElement(t.Fragment,null,t.createElement(a.h2,{id:"리플렉션이란"},t.createElement(a.a,{href:"#리플렉션이란"},"리플렉션이란?")),"\n",t.createElement(a.p,null,"런타임에 동적으로 클래스의 인스턴스를 ",t.createElement(a.strong,null,"생성 및 조작"),"할 수 있는 기술이다. 리플렉션을 사용하면 클래스에 대한 정보를 미리 알지 못해도 객체를 조작할 수 있다."),"\n",t.createElement(a.p,null,"주로 프로그램 내 특정 클래스나 함수에 대해 알지 못하는 라이브러리나 프레임워크 등에서 런타임에 동적으로 객체를 생성, 조작, 참조할 때 사용된다 (일반적인 코드를 작성할 때는 이미 클래스들의 정보를 알고 있으므로 사용할 일이 거의 없다).\n대표적으로 스프링에서 빈을 생성, 주입할 때 리플렉션을 사용한다."),"\n",t.createElement(a.h2,{id:"리플렉션의-작동원리"},t.createElement(a.a,{href:"#리플렉션의-작동원리"},"리플렉션의 작동원리")),"\n",t.createElement(a.p,null,"이게 어떻게 가능한걸까?\nJVM 기반 언어에서 리플렉션 API는 컴파일 후 런타임에 로드된 ",t.createElement(a.strong,null,"JVM의 스태틱 영역(메서드 영역 또는 클래스 영역)에 접근"),"하여 일급시민들의 메타데이터를 조작하기 때문이다."),"\n",t.createElement(a.p,null,"따라서 클래스나 함수의 이름만 알고 있다면 클래스의 생성자, 메서드, 멤버와 속성들까지도 거의 무한에 가까운 자유도로 객체를 제어할 수 있다."),"\n",t.createElement(a.p,null,"예를 들어 아래와 같은 private 생성자를 가진 클래스를"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="kotlin"><pre class="language-kotlin"><code class="language-kotlin"><span class="token keyword">class</span> Foo <span class="token keyword">private</span> <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">val</span> name<span class="token operator">:</span> String <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"Foo"</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> String <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token string-literal singleline"><span class="token string">"Foo(name=\'</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">name</span></span><span class="token string">\')"</span></span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"아래와 같이 접근성을 조작하여 직접 생성할 수도 있다."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="kotlin"><pre class="language-kotlin"><code class="language-kotlin"><span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">val</span> ctor <span class="token operator">=</span> Foo<span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">.</span>primaryConstructor\n    ctor<span class="token operator">?</span><span class="token punctuation">.</span>isAccessible <span class="token operator">=</span> <span class="token boolean">true</span>\n    <span class="token keyword">val</span> foo <span class="token operator">=</span> ctor<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"Bar"</span></span><span class="token punctuation">)</span>\n    <span class="token function">println</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token comment">//Foo(name=\'Bar\')</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.h2,{id:"코틀린-리플렉션-api"},t.createElement(a.a,{href:"#코틀린-리플렉션-api"},"코틀린 리플렉션 API")),"\n",t.createElement(a.h3,{id:"gradle-의존성-추가"},t.createElement(a.a,{href:"#gradle-의존성-추가"},"gradle 의존성 추가")),"\n",t.createElement(a.p,null,"코틀린은 자바 리플렉션 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">java.lang.reflect</code>'}}),"과 코틀린 리플렉션 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">kotlin.reflect</code>'}}),"의 두 가지 방식을 제공한다.\n자바에 존재하지 않는 nullable 타입이나 속성 등을 리플렉션하기 위해 아래와 같이 별도의 의존성을 추가해주어야 한다."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="kotlin"><pre class="language-kotlin"><code class="language-kotlin"><span class="token comment">//gradle</span>\ndependencies <span class="token punctuation">{</span>\n    <span class="token function">implementation</span><span class="token punctuation">(</span><span class="token function">kotlin</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"reflect"</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"코틀린의 리플렉션 API는 코틀린 뿐만이 아닌 다른 JVM 기반 언어들과 호환된다."),"\n",t.createElement(a.h3,{id:"리플렉션이-가능한-대상"},t.createElement(a.a,{href:"#리플렉션이-가능한-대상"},"리플렉션이 가능한 대상")),"\n",t.createElement(a.p,null,t.createElement(a.img,{src:"https://velog.velcdn.com/images/aryumka/post/2352d0a0-9fa0-44c9-b037-acec8dcd887e/image.png",alt:""}),"\n코틀린 리플렉션은 위와 같은 계층구조를 갖고 있다.\n클래스의 리플렉션인 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">KClass</code>'}}),", 함수 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">KFunction</code>'}}),"와 변수",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">KProperty</code>'}}),", 그리고 이들을 포함하는 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">KCallable</code>'}}),"과 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">KParameter</code>'}}),"로 이루어져 있다"),"\n",t.createElement(a.h4,{id:"클래스"},t.createElement(a.a,{href:"#클래스"},"클래스")),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="kotlin"><pre class="language-kotlin"><code class="language-kotlin"><span class="token keyword">val</span> c <span class="token operator">=</span> MyClass<span class="token operator">::</span><span class="token keyword">class</span>\n<span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>simpleName<span class="token punctuation">)</span> <span class="token comment">//클래스 이름 출력</span>\n<span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>qualifiedName<span class="token punctuation">)</span> <span class="token comment">//패키지 경로를 포함한 클래스 이름 출력</span>\n<span class="token keyword">val</span> ctors <span class="token operator">=</span> c<span class="token punctuation">.</span>constructors <span class="token comment">//클래스의 생성자들을 모두 가져옴</span>\nc<span class="token punctuation">.</span>isSealed <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token comment">// sealed class인지 여부. 재할당 가능</span>\n<span class="token operator">..</span><span class="token punctuation">.</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">::</code>'}}),"를 사용하여 사용해 클래스를 참조하며 위의 예시 이외에도 참조된 클래스를 제어하는 방법이 ",t.createElement(a.a,{href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/",rel:"nofollow noopener noreferrer"},"KClass API 문서"),"에 자세히 설명되어 있다."),"\n",t.createElement(a.h4,{id:"함수"},t.createElement(a.a,{href:"#함수"},"함수")),"\n",t.createElement(a.p,null,"함수도 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">::</code>'}}),"를 활용하여 KFuntion으로 참조할 수 있다."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="kotlin"><pre class="language-kotlin"><code class="language-kotlin"><span class="token keyword">val</span> f <span class="token operator">=</span> <span class="token operator">::</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nf<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"Hello"</span></span><span class="token punctuation">)</span>\nf<span class="token punctuation">.</span><span class="token function">callBy</span><span class="token punctuation">(</span><span class="token function">mapOf</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span>parameters<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token keyword">to</span> <span class="token string-literal singleline"><span class="token string">"Hello"</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>\nf<span class="token punctuation">.</span>isInline\nf<span class="token punctuation">.</span>isExternal\nf<span class="token punctuation">.</span>visibility</code></pre></div>'}}),"\n",t.createElement(a.p,null,"리플렉션으로 가져온 함수를 바로 인자로 넘겨줄 수도 있다."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="kotlin"><pre class="language-kotlin"><code class="language-kotlin"><span class="token keyword">fun</span> <span class="token function">isOdd</span><span class="token punctuation">(</span>x<span class="token operator">:</span> Int<span class="token punctuation">)</span> <span class="token operator">=</span> x <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!=</span> <span class="token number">0</span>\n<span class="token keyword">val</span> numbers <span class="token operator">=</span> <span class="token function">listOf</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>\n<span class="token function">println</span><span class="token punctuation">(</span>numbers<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token operator">::</span>isOdd<span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"생성자인 Constructor도 KFuntion타입이다.\n",t.createElement(a.a,{href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-function/",rel:"nofollow noopener noreferrer"},"KFunction API 문서")),"\n",t.createElement(a.h3,{id:"인자"},t.createElement(a.a,{href:"#인자"},"인자")),"\n",t.createElement(a.p,null,"함수의 인자인 ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">KParameter</code>'}}),"도 리플렉션이 가능하다."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="kotlin"><pre class="language-kotlin"><code class="language-kotlin"><span class="token keyword">val</span> param <span class="token operator">=</span> MyClass<span class="token operator">::</span>Class<span class="token punctuation">.</span>primaryConstructor<span class="token operator">!!</span><span class="token punctuation">.</span>parameters<span class="token punctuation">.</span><span class="token function">firstOrNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nparam<span class="token punctuation">.</span>name\nparam<span class="token punctuation">.</span>type\nparam<span class="token punctuation">.</span>isOptional\nparam<span class="token punctuation">.</span>isVararg\nparam<span class="token punctuation">.</span>index\nparam<span class="token punctuation">.</span>annotations</code></pre></div>'}}),"\n",t.createElement(a.p,null,t.createElement(a.a,{href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-parameter/",rel:"nofollow noopener noreferrer"},"KParameter API 문서")),"\n",t.createElement(a.h4,{id:"변수"},t.createElement(a.a,{href:"#변수"},"변수")),"\n",t.createElement(a.p,null,"변수도 위와 같이 제어가 가능하다. val로 선언된 변수도 수정이 가능하다.\n",t.createElement(a.a,{href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-property/",rel:"nofollow noopener noreferrer"},"KProperty API 문서")),"\n",t.createElement(a.h2,{id:"주의할-점"},t.createElement(a.a,{href:"#주의할-점"},"주의할 점")),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"동적으로 생성되기 때문에 예측이 어렵다. 어떤 객체가 생성되며 어떤 메서드가 호출될 지. 따라서 컴파일타임과 런타임 시에 JVM 최적화가 어렵다."),"\n",t.createElement(a.li,null,"런타임에 조작된 속성은 실행 중 계속 유지된다. 따라서 accessibility등을 조작 시 보안 이슈가 발생할 수 있다."),"\n",t.createElement(a.li,null,"플랫폼 종속적이다. 리플렉션을 사용하여 만든 프로그램은 jvm 위에서만 동작한다."),"\n"))}a.default=function(n){void 0===n&&(n={});const{wrapper:a}=Object.assign({},(0,e.R)(),n.components);return a?t.createElement(a,n,t.createElement(l,n)):l(n)}},9128:function(n,a,s){s.d(a,{R:function(){return p}});var e=s(9474);const t={},l=e.createContext(t);function p(n){const a=e.useContext(l);return e.useMemo((function(){return"function"==typeof n?n(a):{...a,...n}}),[a,n])}}}]);
//# sourceMappingURL=component---src-posts-2024-01-25-kotlin-reflection-md-3105ec928c30ec02008f.js.map