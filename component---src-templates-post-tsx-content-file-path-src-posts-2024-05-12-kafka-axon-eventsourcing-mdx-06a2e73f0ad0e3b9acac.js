"use strict";(self.webpackChunkaryumka_me=self.webpackChunkaryumka_me||[]).push([[4658],{883:function(n,a,s){s.r(a);var e=s(9128),t=s(9474);function o(n){const a=Object.assign({h2:"h2",a:"a",p:"p",ol:"ol",li:"li",h3:"h3",span:"span"},(0,e.R)(),n.components);return t.createElement(t.Fragment,null,t.createElement(a.h2,{id:"이벤트-소싱"},t.createElement(a.a,{href:"#이벤트-소싱"},"이벤트 소싱")),"\n",t.createElement(a.p,null,"이벤트 소싱(Event Sourcing)은 도메인의 상태를 변경하는 모든 사건을 이벤트 스트림으로 저장하는 방식이다."),"\n",t.createElement(a.p,null,"계좌 잔액 관리를 예로 들어보자."),"\n",t.createElement(a.p,null,"전통적인 방식이라면 거래 내역을 따로 저장하고 해당 거래로 인해 발생한 잔액을 별도의 테이블에 저장할 것이다."),"\n",t.createElement(a.p,null,"이벤트 소싱으로 계좌 잔액을 관리한다면 거래내역이 아니라 거래내역으로 인해 발생한 이벤트를 저장하게 된다.\n현재 내 계좌에 남은 잔액은 수많은 거래(이벤트)들의 결과라고 볼 수 있다."),"\n",t.createElement(a.p,null,"이 때 잔액을 계산하는 로직은 이벤트 스트림을 통해 계산할 수 있다."),"\n",t.createElement(a.h2,{id:"kafka를-이용한-이벤트-스트리밍"},t.createElement(a.a,{href:"#kafka를-이용한-이벤트-스트리밍"},"Kafka를 이용한 이벤트 스트리밍")),"\n",t.createElement(a.p,null,"이벤트는 다양한 방법으로 처리할 수 있다."),"\n",t.createElement(a.p,null,"만약 이벤트를 발동하는 JVM과 이벤트를 처리하는 JVM이 다른 분산 환경이라면 브로커등의 미들웨어를 도입하여 안정적이고 효율적인 구현이 가능하다.\nKafka는 분산형 스트리밍 플랫폼으로 특히 대용량 이벤트 스트림을 처리하는데 적합하다."),"\n",t.createElement(a.h2,{id:"axon-framework의-이벤트-처리-방식"},t.createElement(a.a,{href:"#axon-framework의-이벤트-처리-방식"},"Axon Framework의 이벤트 처리 방식")),"\n",t.createElement(a.p,null,"Axon Framework는 이벤트 소싱을 통한 CQRS(Command Query Responsibility Segregation)와 DDD(Domain Driven Design)을 지원하는 프레임워크이다."),"\n",t.createElement(a.p,null,"Axon Framework는 이벤트를 처리하는 방식으로 크게 2가지 방식을 제공한다."),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Subscribing Event Processor - 순서가 보장되고 하나의 스레드에서 처리되어야 하는 작업에 적합하다. 연동된 미들웨어가 실패할 경우 이벤트 발행 자체가 실패하도록 강제한다. AMQP를 이용하는 경우 적절하다."),"\n",t.createElement(a.li,null,"Tracking Event Processor - 여러 스레드에서 각 프로세서가 작업을 분배하여 병렬 작업할 수 있도록 한다. Kafka가 실패해도 이벤트 발행 자체에는 영향을 주지 않는다. Kafka를 이용할 때 적합하다."),"\n"),"\n",t.createElement(a.p,null,"예제에는 Tracking Event Processor를 사용하였다."),"\n",t.createElement(a.h2,{id:"예제"},t.createElement(a.a,{href:"#예제"},"예제")),"\n",t.createElement(a.h3,{id:"0-docker-composeyml"},t.createElement(a.a,{href:"#0-docker-composeyml"},"0. docker-compose.yml")),"\n",t.createElement(a.p,null,t.createElement(a.a,{href:"https://github.com/aryumka/axonkafka/blob/master/docker-compose.yaml",rel:"nofollow noopener noreferrer"},"docker-compose.yaml"),"를 이용하여 Kafka와 Zookeeper를 설정한다."),"\n",t.createElement(a.h3,{id:"1-spring-boot-kafka-설정"},t.createElement(a.a,{href:"#1-spring-boot-kafka-설정"},"1. Spring Boot Kafka 설정")),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="yaml"><pre class="language-yaml"><code class="language-yaml"><span class="token key atrule">axon</span><span class="token punctuation">:</span>\n  <span class="token key atrule">axonserver</span><span class="token punctuation">:</span>\n    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n  <span class="token key atrule">serializer</span><span class="token punctuation">:</span>\n    <span class="token key atrule">events</span><span class="token punctuation">:</span> jackson\n  <span class="token key atrule">kafka</span><span class="token punctuation">:</span>\n    <span class="token key atrule">fetcher</span><span class="token punctuation">:</span>\n      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n    <span class="token key atrule">clientid</span><span class="token punctuation">:</span> kafka<span class="token punctuation">-</span>axon<span class="token punctuation">-</span>example\n    <span class="token key atrule">producer</span><span class="token punctuation">:</span>\n      <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">0</span>\n      <span class="token key atrule">bootstrap-servers</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">29092</span>\n    <span class="token key atrule">consumer</span><span class="token punctuation">:</span>\n      <span class="token key atrule">event-processor-mode</span><span class="token punctuation">:</span> tracking\n      <span class="token key atrule">bootstrap-servers</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">29092</span>\n    <span class="token key atrule">properties</span><span class="token punctuation">:</span>\n      <span class="token key atrule">security.protocol</span><span class="token punctuation">:</span> PLAINTEXT</code></pre></div>'}}),"\n",t.createElement(a.h3,{id:"2-axon-설정"},t.createElement(a.a,{href:"#2-axon-설정"},"2. Axon 설정")),"\n",t.createElement(a.p,null,"기본적으로 JPA를 Event Store로 사용하고 Tracking Event Processor를 사용한다. DB는 H2를 사용한다.\nToken Store는 InMemoryTokenStore를 사용한다. Token은 이벤트 스트림을 열 때 특정 이벤트의 위치를 특정하거나 특정한 위치에서 이벤트 스트림을 열기 위해 사용된다."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="kotlin"><pre class="language-kotlin"><code class="language-kotlin"><span class="token annotation builtin">@SpringBootApplication</span>\n<span class="token annotation builtin">@EnableScheduling</span>\n<span class="token keyword">class</span> KafkaAxonApplication <span class="token punctuation">{</span>\n    <span class="token annotation builtin">@Bean</span>\n    <span class="token keyword">fun</span> <span class="token function">tokenStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token function">InMemoryTokenStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token annotation builtin">@Configuration</span>\n<span class="token annotation builtin">@ConditionalOnProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal singleline"><span class="token string">"axon.kafka.consumer.event-processor-mode"</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span> havingValue <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"tracking"</span></span><span class="token punctuation">)</span>\n<span class="token keyword">class</span> TrackingConfiguration <span class="token punctuation">{</span>\n    <span class="token annotation builtin">@Autowired</span>\n    <span class="token keyword">fun</span> <span class="token function">configureStreamableKafkaSource</span><span class="token punctuation">(</span>\n        configurer<span class="token operator">:</span> EventProcessingConfigurer<span class="token punctuation">,</span>\n        streamableKafkaMessageSource<span class="token operator">:</span> StreamableKafkaMessageSource<span class="token operator">&lt;</span>String<span class="token punctuation">,</span> ByteArray<span class="token operator">></span>\n    <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// Tracking Event Processor의 이름을 KAFKA_GROUP으로 설정하고 StreamableKafkaMessageSource를 사용하여 등록</span>\n        configurer<span class="token punctuation">.</span><span class="token function">registerTrackingEventProcessor</span><span class="token punctuation">(</span>KAFKA_GROUP<span class="token punctuation">)</span> <span class="token punctuation">{</span> streamableKafkaMessageSource <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.h3,{id:"3-bank-client"},t.createElement(a.a,{href:"#3-bank-client"},"3. Bank Client")),"\n",t.createElement(a.p,null,"1초에 한번씩 입금요청을 처리하도록 한다."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="kotlin"><pre class="language-kotlin"><code class="language-kotlin"><span class="token annotation builtin">@Component</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> BankClient <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n    <span class="token annotation builtin">@Scheduled</span><span class="token punctuation">(</span>initialDelay <span class="token operator">=</span> <span class="token number">10_000</span><span class="token punctuation">,</span> fixedDelay <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">)</span>\n    <span class="token keyword">fun</span> <span class="token function">deposit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        logger<span class="token punctuation">.</span><span class="token function">debug</span> <span class="token punctuation">{</span> <span class="token string-literal singleline"><span class="token string">"depositing </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">amount</span></span><span class="token string"> from account </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">accountId</span></span><span class="token string">"</span></span> <span class="token punctuation">}</span>\n        commandGateway<span class="token punctuation">.</span>send<span class="token operator">&lt;</span>CompletableFuture<span class="token operator">&lt;</span>String<span class="token operator">></span><span class="token operator">></span><span class="token punctuation">(</span>\n                <span class="token function">DepositMoneyCommand</span><span class="token punctuation">(</span>\n                        bankAccountId <span class="token operator">=</span> accountId<span class="token punctuation">,</span>\n                        amountOfMoney <span class="token operator">=</span> amount<span class="token punctuation">.</span><span class="token function">toLong</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                <span class="token punctuation">)</span>\n        <span class="token punctuation">)</span>\n        amount <span class="token operator">=</span> amount<span class="token punctuation">.</span><span class="token function">inc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}}))}a.default=function(n){void 0===n&&(n={});const{wrapper:a}=Object.assign({},(0,e.R)(),n.components);return a?t.createElement(a,n,t.createElement(o,n)):o(n)}},2418:function(n,a,s){s.r(a),s.d(a,{default:function(){return E}});var e=s(883),t=s(5530),o=s(9474),p=s(8844),l=s(1047),c=s(8928),r=s.n(c),i=s(3893),u=s(2887),k=s(5909),m=s(589),g=s(7569),d=s.n(g),f=s(2195),y=s(6810);r().extend(s(1997));const h=n=>{let{data:a,location:s,pageContext:e,children:t}=n;const{tableOfContents:c,fields:g,frontmatter:h,excerpt:E}=a.mdx,{series:v}=e,x=r()(g.date).locale("ko").format(),S={headline:h.title,dateModified:x,datePublished:x,image:`${s.href}${h.image}`,mainEntityOfPage:{"@type":"WebPage","@id":s.href},author:{"@type":"Person",name:"Lee Sun-Hyoup"},url:s.href,description:E,"@type":"BlogPosting","@context":"https://schema.org"};(0,o.useEffect)((()=>{void 0!==typeof document&&d()((function(){d()(".post-container a[data-footnote-ref]").each(((n,a)=>{var s;const e=null===(s=d()(a).attr("href"))||void 0===s?void 0:s.slice(1),t=d()("#"+e).text().replace("↩","");d()(a).attr("data-tooltip",t)}))}))}),[]);const{0:A,1:w}=(0,o.useState)();(0,o.useEffect)((()=>{w(a.allMdx.edges.filter((n=>n.node.fields.slug!==g.slug)).sort((()=>Math.random()-.5)).slice(0,6))}),[]);const P=h.draft&&!0;return(0,y.Y)(p.A,null,(0,y.Y)(l.A,{title:h.title,description:E,meta:[{name:"article:published_time",content:r()(g.date).locale("ko").format()},{name:"image",content:`https://aryumka.me${h.image}`},{property:"og:image",content:`https://aryumka.me${h.image}`},{property:"og:image:secure_url",content:`https://aryumka.me${h.image}`}]}),(0,y.Y)(m.m,null,(0,y.Y)("script",{type:"application/ld+json"},JSON.stringify(S))),(0,y.Y)("h1",{className:"post-title"},h.title),(0,y.Y)("span",{className:"post-date"},"Written on ",r()(g.date).locale("en").format("LL")),(0,y.Y)("img",{src:h.image,style:{objectFit:"cover",maxHeight:300,width:"100%"}}),P||c.items&&(0,y.Y)(k.A,{items:c.items}),P||(null==v?void 0:v.items)&&(0,y.Y)(f.A,{title:v.title,items:v.items,currentItem:h.title}),(0,y.Y)("div",{className:"post-content"},P?(0,y.Y)(b,null,"Not yet published"):t),(0,y.Y)(i.A,{tags:h.tags,comment:h.comments}),A&&(0,y.Y)(u.A,{posts:A,current:g.slug}))};function E(n){return o.createElement(h,n,o.createElement(e.default,n))}const b=(0,t.A)("div",{target:"ezegrm70"})({name:"xl5zip",styles:"margin:16px 0;font-weight:bold;font-size:20px;text-align:center"})}}]);
//# sourceMappingURL=component---src-templates-post-tsx-content-file-path-src-posts-2024-05-12-kafka-axon-eventsourcing-mdx-06a2e73f0ad0e3b9acac.js.map