"use strict";(self.webpackChunkaryumka_me=self.webpackChunkaryumka_me||[]).push([[6238,8036,254,1032,8740,1465],{8336:function(e,n,a){a.r(n);var t=a(9128),l=a(9474);function s(e){const n=Object.assign({h2:"h2",a:"a",p:"p",span:"span",blockquote:"blockquote",ul:"ul",li:"li",img:"img"},(0,t.R)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h2,{id:"1-kotlin의-data-class는-jpa에서-사용하지-않는다"},l.createElement(n.a,{href:"#1-kotlin의-data-class는-jpa에서-사용하지-않는다"},"1. Kotlin의 data class는 JPA에서 사용하지 않는다")),"\n",l.createElement(n.p,null,"영속성 계층의 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Entity</code>'}}),"가 되려면 아래를 포함한 조건이 갖춰져야 한다."),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"non-final 최상위 클래스이거나 정적 이너클래스일 것"),"\n"),"\n"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"public 또는 protected, no-args 생성자를 가질 것"),"\n",l.createElement(n.li,null,"final 메서드나 persistent한 인스턴스 변수를 가지지 않을 것\n...\n(이하 생략)"),"\n"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://jakarta.ee/specifications/persistence/3.2/apidocs/jakarta.persistence/jakarta/persistence/entity",rel:"nofollow noopener noreferrer"},"출처: javadoc - jakarta.persistence.entity")),"\n"),"\n",l.createElement(n.p,null,l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">JPA</code>'}}),"는 객체의 상태 변경을 기본 전제로 만들어진 패러다임이다.\n반면 함수형을 지향하는 코틀린에서는 기본 속성이 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">val(read-only)</code>'}})," 즉 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">immutable</code>'}}),"인 것을 전제로 한다."),"\n",l.createElement(n.p,null,"내 경우 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Entity</code>'}}),"를 기본 속성이 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">val(read-only)</code>'}}),"로 설정되는 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">data class</code>'}}),"로 설계했다가 모두 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">var</code>'}}),"을 가진 일반 클래스로 바꿔야 했다. 수정자가 추가되며 리턴타입도 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">copy</code>'}}),"된 객체를 리턴하던 것이 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">void</code>'}}),"로 바뀌었고 테스트도 모두 바꿔야 했다."),"\n",l.createElement(n.p,null,"이는 ",l.createElement(n.a,{href:"https://spring.io/guides/tutorials/spring-boot-kotlin",rel:"nofollow noopener noreferrer"},"스프링 공식 가이드"),"에도 기술된 바이다.\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Spring Data JPA</code>'}}),"가 아닌 다른 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Spring Data</code>'}}),"의 경우 data class의 사용이 문제되지 않는다고 한다."),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.img,{src:"https://velog.velcdn.com/images/aryumka/post/af776ead-b672-4d57-80bb-fe6fac180764/image.png",alt:""}),"\n"),"\n",l.createElement(n.p,null,"위 가이드의 샘플 코드에서 속성들의 접근제어자는 그냥 디폴트이다. 그래서 나도 따로 private var로 만들지는 않았다. 검색을 해봐도 많은 경우 Entity의 속성을 private으로 따로 지정하지 않는 것 같았다. 조금 의아하지만 일단 공식문서에 기술된 대로 따라보기로 했다."),"\n",l.createElement(n.p,null,"그리고 그래들 플러그인을 다음과 같이 추가해주었다."),"\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="kotlin"><pre class="language-kotlin"><code class="language-kotlin">plugins <span class="token punctuation">{</span>\n  <span class="token function">kotlin</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"plugin.allopen"</span></span><span class="token punctuation">)</span> version <span class="token string-literal singleline"><span class="token string">"1.9.22"</span></span>\n  <span class="token function">kotlin</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"plugin.noarg"</span></span><span class="token punctuation">)</span> version <span class="token string-literal singleline"><span class="token string">"1.9.22"</span></span>\n<span class="token punctuation">}</span>\n\nallOpen <span class="token punctuation">{</span>\n  <span class="token keyword">annotation</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"jakarta.persistence.Entity"</span></span><span class="token punctuation">)</span>\n  <span class="token keyword">annotation</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"jakarta.persistence.Embeddable"</span></span><span class="token punctuation">)</span>\n  <span class="token keyword">annotation</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"jakarta.persistence.MappedSuperclass"</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",l.createElement(n.p,null,"매 엔티티 클래스마다 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">open</code>'}}),"을 선언해주거나 no-arg 생성자를 만들지 않아도 영속성 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Entity</code>'}}),"가 될 수 있도록 해준다."),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,l.createElement(n.img,{src:"https://velog.velcdn.com/images/aryumka/post/d01091b3-9e97-4b7f-872e-34a63f9fbbdb/image.png",alt:""}),"\n별도로 지정해주지 않아도 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">open class</code>'}}),"로 바뀌어있다"),"\n"),"\n",l.createElement(n.p,null,l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">data class</code>'}}),"일 때는 자동으로 만들어줬던 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">hashcode</code>'}}),"와 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">equals</code>'}}),", ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">toString</code>'}}),"은 직접 구현해줘야 했다."),"\n",l.createElement(n.h2,{id:"2-key-generation"},l.createElement(n.a,{href:"#2-key-generation"},"2. Key Generation?")),"\n",l.createElement(n.p,null,l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">insert</code>'}})," 하기 전에 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">select</code>'}}),"가 실행되지만 실제 쿼리가 실행되는 건 아니다.\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">insert</code>'}})," 후 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">select</code>'}}),"를 실행하면 영속성 계층에 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">select</code>'}}),"하는 대상의 id를 가진 객체가 있는지 먼저 탐색한다고 한다.\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">GenerationType.SEQUENCE</code>'}})," 전략으로 키를 생성하기로 했다.\n하지만 매번 키 탐색을 위해 DB를 다녀오는게 이상하다. 기본적으로 50개가 할당된다고 들었는데."),"\n",l.createElement(n.p,null,"그런데 키 생성전략을 위해서는 이렇게 DB를 이용하는게 최선일까?\n좋은 방법이 있을 것 같은데."),"\n",l.createElement(n.h2,{id:"3-h2-db와-테스트-환경"},l.createElement(n.a,{href:"#3-h2-db와-테스트-환경"},"3. H2 DB와 테스트 환경")),"\n",l.createElement(n.p,null,l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">H2 db</code>'}}),"로 테스트하면 매 테스트마다 롤백이 된다고 한다. 즉 실제 DB에 들어가지 않는다는 말이다.\n테스트마다 아이디를 일부러 중복으로 넣어도 무결성 에러도 나지 않고 디버깅으로 멈춰 놓고 콘솔에 접속해도 아무것도 없어서 어리둥절했다.\n그럼 DB가 초기화될 때 DDL도 실행되지 않는 것인가..?"))}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.R)(),e.components);return n?l.createElement(n,e,l.createElement(s,e)):s(e)}},9128:function(e,n,a){a.d(n,{R:function(){return c}});var t=a(9474);const l={},s=t.createContext(l);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);
//# sourceMappingURL=component---src-posts-2024-03-02-til-kotlin-jpa-test-md-bee39226af8875a7e1df.js.map