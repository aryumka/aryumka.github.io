"use strict";(self.webpackChunkaryumka_me=self.webpackChunkaryumka_me||[]).push([[8359],{99:function(e,t,a){var n=a(9474),r=a(1615),l=a(3543);t.A=e=>{let{src:t,caption:a,width:o,expandable:i}=e;const{0:s,1:c}=(0,n.useState)(!1);return(0,l.Y)("figure",null,(0,l.Y)("img",{src:t,width:o,style:{cursor:i?"zoom-in":"default"},onClick:i?()=>c(!0):void 0}),a&&(0,l.Y)("figcaption",{dangerouslySetInnerHTML:{__html:a}}),s&&r.createPortal((0,l.Y)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",cursor:"zoom-out",backgroundColor:"rgba(0, 0, 0, 0.7)"},onClick:()=>c(!1)},(0,l.Y)("div",{style:{borderRadius:8,maxWidth:1200,width:"80%",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"white"}},(0,l.Y)("img",{src:t,width:"100%"}))),document.body))}},2403:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var n=a(7422),r=a(915),l=a(9474),o=a(9591),i=a(6203),s=a(8928),c=a.n(s),d=a(7507),p=a(6483),m=a(1041),g=a(589),u=a(7569),f=a.n(u),h=a(2831),y=a(3543);c().extend(a(1997));const E=e=>{let{data:t,location:a,pageContext:n,children:r}=e;const{tableOfContents:s,fields:u,frontmatter:E,excerpt:b}=t.mdx,{series:v}=n,w=c()(u.date).locale("ko").format(),x={headline:E.title,dateModified:w,datePublished:w,image:`${a.href}${E.image}`,mainEntityOfPage:{"@type":"WebPage","@id":a.href},author:{"@type":"Person",name:"Lee Sun-Hyoup"},url:a.href,description:b,"@type":"BlogPosting","@context":"https://schema.org"};(0,l.useEffect)((()=>{void 0!==typeof document&&f()((function(){f()(".post-container a[data-footnote-ref]").each(((e,t)=>{var a;const n=null===(a=f()(t).attr("href"))||void 0===a?void 0:a.slice(1),r=f()("#"+n).text().replace("↩","");f()(t).attr("data-tooltip",r)}))}))}),[]);const{0:Y,1:_}=(0,l.useState)();(0,l.useEffect)((()=>{_(t.allMdx.edges.filter((e=>e.node.fields.slug!==u.slug)).sort((()=>Math.random()-.5)).slice(0,6))}),[]);const A=E.draft&&!0;return(0,y.Y)(o.A,null,(0,y.Y)(i.A,{title:E.title,description:b,meta:[{name:"article:published_time",content:c()(u.date).locale("ko").format()},{name:"image",content:`https://aryumka.me${E.image}`},{property:"og:image",content:`https://aryumka.me${E.image}`},{property:"og:image:secure_url",content:`https://aryumka.me${E.image}`}]}),(0,y.Y)(g.m,null,(0,y.Y)("script",{type:"application/ld+json"},JSON.stringify(x))),(0,y.Y)("h1",{className:"post-title"},E.title),(0,y.Y)("span",{className:"post-date"},"Written on ",c()(u.date).locale("en").format("LL")),(0,y.Y)("img",{src:E.image,style:{objectFit:"cover",maxHeight:300,width:"100%"}}),A||s.items&&(0,y.Y)(m.A,{items:s.items}),A||(null==v?void 0:v.items)&&(0,y.Y)(h.A,{title:v.title,items:v.items,currentItem:E.title}),(0,y.Y)("div",{className:"post-content"},A?(0,y.Y)(k,null,"Not yet published"):r),(0,y.Y)(d.A,{tags:E.tags,comment:E.comments}),Y&&(0,y.Y)(p.A,{posts:Y,current:u.slug}))};function b(e){return l.createElement(E,e,l.createElement(n.default,e))}const k=(0,r.A)("div",{target:"ezegrm70"})({name:"xl5zip",styles:"margin:16px 0;font-weight:bold;font-size:20px;text-align:center"})},7422:function(e,t,a){a.r(t);var n=a(9128),r=a(9474),l=a(99);function o(e){const t=Object.assign({blockquote:"blockquote",p:"p",a:"a",strong:"strong",span:"span"},(0,n.R)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"Could not open init generic class cache for initialization script '{USERPROFILE}\\AppData\\Local\\Temp\\wrapper_init.gradle' ({USERPROFILE}.gradle\\caches\\7.4.2\\scripts...).\nBUG! exception in phase 'semantic analysis' in source unit '_BuildScript_' Unsupported class file major version 63"),"\n"),"\n",r.createElement(t.p,null,"jdk19로 새로운 프로젝트를 만들 때마다 위처럼 gradle이 빌드가 안되는 문제가 발생했다.\n현재 그래들의 버젼과 jdk 버젼이 맞지 않아서 발생한 문제이다.\n",r.createElement(t.a,{href:"https://docs.gradle.org/current/userguide/compatibility.html",rel:"nofollow noopener noreferrer"},"각 자바 버젼과 호환되는 gradle이 각각 존재한다"),". 내 경우 문제가 되었던 19버젼은 최소 gradle 7.6 이상에서 빌드되지만 오류 메시지와 같이 7.4에서는 빌드되지 않는다.\n",r.createElement(t.strong,null,"사용중인 sdk에 맞는 적절한 gradle 버젼을 명시해주자.")),"\n",r.createElement(t.p,null,"인텔리제이에서는 그래들의 실행환경을 설정할 수 있는데"),"\n",r.createElement(l.A,{src:"https://velog.velcdn.com/images/aryumka/post/14ac2014-f469-4a23-b3cd-d95c2e912efe/image.png"}),"\n",r.createElement(t.p,null,"여기서 gradle 빌드 스크립트에 정의된 wrapper를 사용한다고 설정하면 인텔리제이에서 자동으로 생성해준 셸스크립트에 설정된 gradle-wrapper를 사용한다."),"\n",r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">CLASSPATH=$APP_HOME/gradle/wrapper/gradle-wrapper.jar</code></pre></div>'}}),"\n",r.createElement(t.p,null,"이 wrapper는 같은 디렉토리의 gradle-wrapper.properties를 참조하여 작업을 실행한다. 필요 시 gradle-wrapper.properties의 distributionUrl에 정의된 gradle을 미리 다운받아오기도 한다."),"\n",r.createElement(l.A,{src:"https://velog.velcdn.com/images/aryumka/post/031aa88c-4a40-4903-91c1-213007e9f791/image.png"}),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://docs.gradle.org/current/userguide/gradle_wrapper.html",rel:"nofollow noopener noreferrer"},"gradle 공식 홈페이지"),"에서 가져온 gradle wrapper 작동 순서"),"\n",r.createElement(t.p,null,"헷갈렸던 점은 버젼이 다르지만 터미널에서 아래 명령어를 실행하면 빌드에 성공했던 점이었다."),"\n",r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ ./gradlew build</code></pre></div>'}}),"\n",r.createElement(t.p,null,"이유는 터미널에서는 내 PC에 환경변수로 설정한 Jdk11을 사용했고 정의한 gradle 버젼에 호환이 되었기 때문에 빌드 자체는 성공한 것이었다(아무것도 들어있지 않은 깡통 프로젝트였으므로). 하지만 만약 11에서 지원하지 않는 라이브러리를 사용해 코드를 작성했다면 컴파일 오류가 났을 것이고 빌드가 되었더라도 런타임 오류가 발생했을 것이다."))}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.R)(),e.components);return t?r.createElement(t,e,r.createElement(o,e)):o(e)}}}]);
//# sourceMappingURL=component---src-templates-post-tsx-content-file-path-src-posts-2024-01-16-til-gradle-build-error-mdx-c06303123383d7726750.js.map