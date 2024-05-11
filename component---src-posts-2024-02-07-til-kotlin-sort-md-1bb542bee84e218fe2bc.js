"use strict";(self.webpackChunkaryumka_me=self.webpackChunkaryumka_me||[]).push([[4008,8036,4214,1032,8740,1465],{8970:function(e,n,t){t.r(n);var l=t(9128),a=t(9474);function c(e){const n=Object.assign({ul:"ul",li:"li",span:"span",p:"p"},(0,l.R)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"운영중인 DB에 Foreign Key를 떼고 운영하는 것은 굉장히 흔한 사례다. 반면 이게 올바른 프랙티스인지는 늘 논란의 여지가 있다. 여러가지 전략을 가져갈 수 있겠지만 Foreign key를 달고 운영한다면 분명히 Foreign Key가 적용된 칼럼을 긴급하게 수정해야할 때가 있을 것인데 연관관계가 복잡하다면 시간이 오래걸릴 것이다.\nMySQL에서는 이럴 때 글로벌 혹은 세션 설정으로 외래키 검사를 끌 수 있다."),"\n"),"\n",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">SET foreign_key_checks = OFF;\nSET SESSION foreign_key_checks = OFF;</code></pre></div>'}}),"\n",a.createElement(n.p,null,"위 두 가지 명령어 모두 현재 실행 중인 세션의 설정을 변경한다(글로벌이면 전체 설정이 변경됨).\n주의할 점: 작업이 끝나면 부모키와 자식키의 정합성을 모두 맞춘 후 설정을 원복해야 한다."),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"\n",a.createElement(n.p,null,"DB에서도 command와 query의 처리는 다르다. InnoDB에서는 쓰기 작업은 지연(버퍼)되어 처리될 수 있지만 읽기 작업은 즉시 처리된다. 읽기 작업은 대부분 포그라운드 스레드(클라이언트)에서 담당하지만 쓰기 작업은 백그라운드 스레드에서 담당한다. 백그라운드 스레드는 락을 모니터링하거나, 버퍼에 있는 데이터로 내리거나 디스크로 쓰는 등 복잡한 작업들을 처리한다."),"\n"),"\n",a.createElement(n.li,null,"\n",a.createElement(n.p,null,"스프링에서 트랜잭션을 메서드 마다 개별설정해야하는 이유:\n메서드마다 ",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">@Transactional</code>'}})," 애너테이션을 사용한 개별 트랜잭션 적용 vs ",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">AOP</code>'}}),"를 이용한 서비스 일괄 적용.\n항상 의문이던 부분이었다. 인프런에 DB관련 강의를 들을 때도 질문을 했었지만 어떤 게 더 바람직한지 명쾌하지는 않았다."),"\n"),"\n"),"\n",a.createElement(n.p,null,"트랜잭션의 설정 범위"))}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.R)(),e.components);return n?a.createElement(n,e,a.createElement(c,e)):c(e)}},9128:function(e,n,t){t.d(n,{R:function(){return r}});var l=t(9474);const a={},c=l.createContext(a);function r(e){const n=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);
//# sourceMappingURL=component---src-posts-2024-02-07-til-kotlin-sort-md-1bb542bee84e218fe2bc.js.map