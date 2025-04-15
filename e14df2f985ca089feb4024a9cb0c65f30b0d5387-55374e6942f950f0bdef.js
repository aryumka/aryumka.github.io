"use strict";(self.webpackChunkaryumka_me=self.webpackChunkaryumka_me||[]).push([[8264],{99:function(e,n,t){var a=t(9474),l=t(1615),s=t(3543);n.A=e=>{let{src:n,caption:t,width:c,expandable:r}=e;const{0:o,1:u}=(0,a.useState)(!1);return(0,s.Y)("figure",null,(0,s.Y)("img",{src:n,width:c,style:{cursor:r?"zoom-in":"default"},onClick:r?()=>u(!0):void 0}),t&&(0,s.Y)("figcaption",{dangerouslySetInnerHTML:{__html:t}}),o&&l.createPortal((0,s.Y)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",cursor:"zoom-out",backgroundColor:"rgba(0, 0, 0, 0.7)"},onClick:()=>u(!1)},(0,s.Y)("div",{style:{borderRadius:8,maxWidth:1200,width:"80%",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"white"}},(0,s.Y)("img",{src:n,width:"100%"}))),document.body))}},4420:function(e,n,t){t.r(n);var a=t(9128),l=t(9474),s=t(99);function c(e){const n=Object.assign({p:"p",span:"span",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",h3:"h3",a:"a",del:"del",em:"em",ul:"ul",li:"li"},(0,a.R)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.p,null,"년월일의 날짜정보를 저장할 때 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">varchar(8)</code>'}}),"을 이용하여 표현하는 것을 종종 볼 수 있는데요.\nMySQL의 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">date</code>'}})," 타입을 이용하면 더욱 효율적으로 정보를 저장하고 조회할 수 있어 이에 대해 공유 드리고자 합니다."),"\n",l.createElement(n.p,null,l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">date</code>'}}),"타입은 'YYYY-MM-DD' 형식의 날짜 타입입니다. 시간을 저장하지 않습니다."),"\n",l.createElement(s.A,{src:"https://velog.velcdn.com/images/aryumka/post/3e4419ba-3859-4dd1-8588-2dacf815ab55/image.png",caption:"테이블에 저장된 date 타입"}),"\n",l.createElement(n.p,null,"먼저 표를 통해 간략한 차이점을 알아보겠습니다."),"\n",l.createElement(n.table,null,l.createElement(n.thead,null,l.createElement(n.tr,null,l.createElement(n.th),l.createElement(n.th,null,"varchar(8)"),l.createElement(n.th,null,"date"))),l.createElement(n.tbody,null,l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"size")),l.createElement(n.td,null,"9byte"),l.createElement(n.td,null,"3byte")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"validation")),l.createElement(n.td,null,"X"),l.createElement(n.td,null,"△")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"타 언어와 호환")),l.createElement(n.td,null,"X"),l.createElement(n.td,null,"O")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"비교 및 연산")),l.createElement(n.td,null,"△"),l.createElement(n.td,null,"O")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"가독성")),l.createElement(n.td,null,"낮음"),l.createElement(n.td,null,"높음")))),"\n",l.createElement(n.p,null,"아래에서 하나씩 살펴보겠습니다."),"\n",l.createElement(n.h3,{id:"1-size"},l.createElement(n.a,{href:"#1-size"},"1. size")),"\n",l.createElement(n.p,null,l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">varchar(8)</code>'}})," 사용 시 언뜻 하이픈(-) 없이 데이터를 압축, 저장할 수 있을 것만 같지만 실제로는 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">date</code>'}})," 타입에 비해 3배 큰 용량을 차지하게 됩니다."),"\n",l.createElement(n.p,null,"MySQL에서 varchar는 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">String</code>'}})," 데이타 타입 중 하나로 가변(variable) 문자(character) 타입을 의미합니다. 고정된 용량을 사용하는 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">char</code>'}}),"와 달리 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">varchar</code>'}}),"는 실제 용량을 표현하기 위한 prefix를 필요로 합니다.\n따라서 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">varchar(255)</code>'}})," 이하에서는 1 byte, 이상에서는 2 byte의 용량이 필요합니다. ",l.createElement(n.del,null,"(1 byte = 8 bit, 즉 2^8=256, 0부터 255까지)"),"\nUTF-8 인코딩방식에서는 하나의 문자 당 1바이트에서 최대 4바이트를 지원하지만 우리가 사용할 숫자로만 구성된 년월일의 경우 각 1바이트 * 8에 prefix인 1byte까지 ",l.createElement(n.strong,null,"총 9 byte"),"를 필요로 합니다."),"\n",l.createElement(n.p,null,"반면 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">date</code>'}})," 타입은 '1000-01-01' 부터 '9999-12-31' 까지의 값을 지원하며 3 byte의 용량을 필요로 합니다. 년, 월, 일을 나누어 인식하므로 최대 값('9999-12-31')도 ",l.createElement(n.strong,null,"3 byte"),"로 충분히 표현할 수 있습니다."),"\n",l.createElement(n.h3,{id:"2-validation"},l.createElement(n.a,{href:"#2-validation"},"2. validation")),"\n",l.createElement(n.p,null,"값 입력 시 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">varchar(8)</code>'}})," 문자열은 각 문자열을 년, 월, 일로 잘라 각각이 유효한 값인지 검사하여야 하지만 실제 저희 프로그램에서는 자리 수 체크 정도만 진행되고 있습니다. '88888888'도 유효한 날짜로 인식됩니다.\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">date</code>'}})," 타입은 날짜 타입인 만큼 월과 년,월에 따른 일에 대해 유효하지 않은 경우 예외가 발생합니다. 예를 들어 ",l.createElement(n.strong,null,"'1990-02-29' 또는 '2000-11-31' 같은 값은 입력할 수 없습니다."),"\n그러나 모든 유효하지 않은 날짜를 막는 것은 아닙니다(00월이나 00일은 허용). 또 비즈니스마다 유효한 연도의 범위도 필요하므로 이 이상의 validation은 어플리케이션 단에서 로직을 통해 통제하는 것이 합리적으로 보입니다."),"\n",l.createElement(n.h3,{id:"3-타-언어와-호환"},l.createElement(n.a,{href:"#3-타-언어와-호환"},"3. 타 언어와 호환")),"\n",l.createElement(n.p,null,"MySQL ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">date</code>'}})," 타입은 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">java.sql.Date</code>'}}),"로 리턴됩니다. 또 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">java.lang.String</code>'}}),", ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">java.sql.Date</code>'}}),", ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">java.sql.Timestamp</code>'}}),"와 같은 ",l.createElement(n.strong,null,"객체"),"로 변환이 가능합니다."),"\n",l.createElement(s.A,{src:"https://velog.velcdn.com/images/aryumka/post/e84fde44-1e6e-436e-bf62-6749c6ca1845/image.png"}),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://dev.mysql.com/doc/connector-j/8.1/en/connector-j-reference-type-conversions.html",rel:"nofollow noopener noreferrer"},"Java, JDBC, and MySQL Types")),"\n",l.createElement(n.p,null,"즉 라이브러리에서 지원되는 ",l.createElement(n.strong,null,"연산"),"이나 ",l.createElement(n.strong,null,"비교")," 등의 작업이 가능하다는 얘기입니다."),"\n",l.createElement(n.p,null,l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">String</code>'}})," 타입으로 받더라도 저희 프로그램에서 사용하는 java와 javascript에서 날짜를 표현하는 객체는 'YYYY-MM-DD' 포맷의 문자열로 객체 생성 및 초기화가 가능합니다."),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"java 예시")),"\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="java"><pre class="language-java"><code class="language-java">    <span class="token class-name">LocalDate</span> date <span class="token operator">=</span> <span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">"2022-01-13"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"javascript 예시")),"\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">    Date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">"2022-01-13"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",l.createElement(n.p,null,"비즈니스 로직에서 ",l.createElement(n.strong,null,"validation, 날짜 연산")," 등을 위해 객체를 이용해야 할 경우가 많습니다. ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">date</code>'}})," 타입의 경우 ",l.createElement(n.strong,null,"DB에서 조회한 문자열 그대로 별도의 가공 없이")," 사용할 수 있습니다. 생산성과 코드 가독성이 향상됩니다."),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"java 로직 예시")),"\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="java"><pre class="language-java"><code class="language-java">    <span class="token keyword">try</span><span class="token punctuation">{</span>\n        <span class="token class-name">LocalDate</span> date <span class="token operator">=</span> <span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">"2022-00-00"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//DateTimeParseException 발생</span>\n    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">DateTimeParseException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token comment">//...예외 처리 내용</span>\n    <span class="token punctuation">}</span></code></pre></div>'}}),"\n",l.createElement(n.p,null,"반면 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">varchar</code>'}}),"를 이용한다면 문자열을 자른 후 각각 별도의 로직 구현을 통해 연산 및 계산하거나, 문자열을 다시 객체로 만들 수 있도록 별도의 가공을 해야합니다."),"\n",l.createElement(n.h3,{id:"4-비교-및-연산"},l.createElement(n.a,{href:"#4-비교-및-연산"},"4. 비교 및 연산")),"\n",l.createElement(n.p,null,"MySQL에서는 날짜 연산을 위해 자체적으로 다양한 함수들을 제공합니다 ",l.createElement(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html",rel:"nofollow noopener noreferrer"},"MYSQL 날짜 및 시간 함수"),".\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">date</code>'}}),"타입은 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">datetime</code>'}}),", ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">timestamp</code>'}})," 등의 날짜 타입과 호환되므로 위 링크의 모든 함수 사용이 가능합니다.\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">varchar(8)</code>'}}),"의 경우 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">String</code>'}})," 타입이므로 바로 함수를 사용할 수 없습니다. ",l.createElement(n.em,null,"DATE()")," 함수나 ",l.createElement(n.em,null,"STR_TO_DATE()")," 함수로 가공 후 사용해야 합니다. 단순 문자열 비교는 가능하지만 더 구체적인 월 비교, 일 비교나 더 나아가 연산은 지원되지 않습니다."),"\n",l.createElement(n.h3,{id:"5-가독성"},l.createElement(n.a,{href:"#5-가독성"},"5. 가독성")),"\n",l.createElement(n.p,null,"YYYY-MM-DD는 일반적으로 년, 월, 일을 인식하는 포맷입니다.\n현재 사용자가 보는 화면 또한 가독성을 위해 포맷팅 작업을 일일이 별도로 해주고 있는데 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">date</code>'}}),"를 사용하면 문자열 그대로 받아 사용하면 됩니다."),"\n",l.createElement(n.p,null,"위처럼 별도의 포맷팅이 없어도 아래와 같이 표현됩니다."),"\n",l.createElement(s.A,{src:"https://velog.velcdn.com/images/aryumka/post/f489f591-951c-41fd-bc7c-c3991509a9f5/image.png"}),"\n",l.createElement(n.p,null,"사용자와 개발자 모두에게 가독성과 편의성을 향상시켜줍니다."),"\n",l.createElement(n.h3,{id:"date-타입-칼럼에-입력-가능한-형식들"},l.createElement(n.a,{href:"#date-타입-칼럼에-입력-가능한-형식들"},"date 타입 칼럼에 입력 가능한 형식들")),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"YYYYMMDD, YYMMDD, YYYY-MM-DD, YYYY#MM#DD")," 등 다양한 문자열 포맷으로 입력이 가능합니다. 사실상 년, 월, 일 사이 구분자가 어떤 것이어도 무관하며 연월일 6 자리도 인식 가능합니다."),"\n"),"\n",l.createElement(n.table,null,l.createElement(n.thead,null,l.createElement(n.tr,null,l.createElement(n.th,null,"입력값"),l.createElement(n.th,null,"출력값"))),l.createElement(n.tbody,null,l.createElement(n.tr,null,l.createElement(n.td,null,"'20200101', '2020#01#01', '200101', '20200101'"),l.createElement(n.td,null,"2020-01-01")))),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"숫자, String")," 타입으로 입력이 가능합니다."),"\n"),"\n",l.createElement(n.table,null,l.createElement(n.thead,null,l.createElement(n.tr,null,l.createElement(n.th,null,"입력값"),l.createElement(n.th,null,"출력값"))),l.createElement(n.tbody,null,l.createElement(n.tr,null,l.createElement(n.td,null,"'20200101', 20200101"),l.createElement(n.td,null,"'2020-01-01'")))),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"0"),"도 입력 가능합니다."),"\n"),"\n",l.createElement(n.table,null,l.createElement(n.thead,null,l.createElement(n.tr,null,l.createElement(n.th,null,"입력값"),l.createElement(n.th,null,"출력값"))),l.createElement(n.tbody,null,l.createElement(n.tr,null,l.createElement(n.td,null,"0"),l.createElement(n.td,null,"'0000-00-00'")))),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"datetime타입"),"도 입력할 수 있습니다."),"\n"),"\n",l.createElement(n.table,null,l.createElement(n.thead,null,l.createElement(n.tr,null,l.createElement(n.th,null,"입력값"),l.createElement(n.th,null,"출력값"))),l.createElement(n.tbody,null,l.createElement(n.tr,null,l.createElement(n.td,null,"'2023-10-19 20:06:38'"),l.createElement(n.td,null,"'2023-10-19'")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.em,null,"NOW()")),l.createElement(n.td,null,"'2023-10-25' (오늘 날짜)")))),"\n",l.createElement(n.p,null,"만약 드물지만 ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">date</code>'}}),"를 'YYYYMMDD'의 plain한 문자열로 사용해야 한다면 ",l.createElement(n.em,null,"date_format()")," 함수를 통해 문자열을 변환해 내려줄 수 있습니다."),"\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="sql"><pre class="language-sql"><code class="language-sql"><span class="token keyword">select</span> date_format<span class="token punctuation">(</span><span class="token string">\'2022-11-11\'</span><span class="token punctuation">,</span> <span class="token string">\'%Y%m%d\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">-- 20221111 출력</span></code></pre></div>'}}))}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.R)(),e.components);return n?l.createElement(n,e,l.createElement(c,e)):c(e)}}}]);
//# sourceMappingURL=e14df2f985ca089feb4024a9cb0c65f30b0d5387-55374e6942f950f0bdef.js.map