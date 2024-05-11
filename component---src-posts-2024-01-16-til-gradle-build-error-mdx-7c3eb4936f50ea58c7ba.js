"use strict";(self.webpackChunkaryumka_me=self.webpackChunkaryumka_me||[]).push([[5042,4164,1482,7824,3284,8995],{974:function(e,n,r){r.r(n);var t=r(9128),a=r(9474);function l(e){const n=Object.assign({blockquote:"blockquote",p:"p",em:"em",a:"a",strong:"strong",img:"img",span:"span"},(0,t.R)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"Could not open init generic class cache for initialization script '",USERPROFILE,"\\AppData\\Local\\Temp\\wrapper_init.gradle' (",USERPROFILE,".gradle\\caches\\7.4.2\\scripts...).\nBUG! exception in phase 'semantic analysis' in source unit '",a.createElement(n.em,null,"BuildScript"),"' Unsupported class file major version 63"),"\n"),"\n",a.createElement(n.p,null,"jdk19로 새로운 프로젝트를 만들 때마다 위처럼 gradle이 빌드가 안되는 문제가 발생했다.\n현재 그래들의 버젼과 jdk 버젼이 맞지 않아서 발생한 문제이다.\n",a.createElement(n.a,{href:"https://docs.gradle.org/current/userguide/compatibility.html",rel:"nofollow noopener noreferrer"},"각 자바 버젼과 호환되는 gradle이 각각 존재한다"),". 내 경우 문제가 되었던 19버젼은 최소 gradle 7.6 이상에서 빌드되지만 오류 메시지와 같이 7.4에서는 빌드되지 않는다.\n",a.createElement(n.strong,null,"사용중인 sdk에 맞는 적절한 gradle 버젼을 명시해주자.")),"\n",a.createElement(n.p,null,"인텔리제이에서는 그래들의 실행환경을 설정할 수 있는데"),"\n",a.createElement(n.img,{src:"https://velog.velcdn.com/images/aryumka/post/14ac2014-f469-4a23-b3cd-d95c2e912efe/image.png",alt:""}),"\n",a.createElement(n.p,null,"여기서 gradle 빌드 스크립트에 정의된 wrapper를 사용한다고 설정하면 인텔리제이에서 자동으로 생성해준 셸스크립트에 설정된 gradle-wrapper를 사용한다."),"\n",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">CLASSPATH=$APP_HOME/gradle/wrapper/gradle-wrapper.jar</code></pre></div>'}}),"\n",a.createElement(n.p,null,"이 wrapper는 같은 디렉토리의 gradle-wrapper.properties를 참조하여 작업을 실행한다. 필요 시 gradle-wrapper.properties의 distributionUrl에 정의된 gradle을 미리 다운받아오기도 한다."),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.img,{src:"https://velog.velcdn.com/images/aryumka/post/031aa88c-4a40-4903-91c1-213007e9f791/image.png",alt:""}),"\n"),"\n",a.createElement(n.p,null,a.createElement(n.a,{href:"https://docs.gradle.org/current/userguide/gradle_wrapper.html",rel:"nofollow noopener noreferrer"},"gradle 공식 홈페이지"),"에서 가져온 gradle wrapper 작동 순서"),"\n",a.createElement(n.p,null,"헷갈렸던 점은 버젼이 다르지만 터미널에서 아래 명령어를 실행하면 빌드에 성공했던 점이었다."),"\n",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ ./gradlew build</code></pre></div>'}}),"\n",a.createElement(n.p,null,"이유는 터미널에서는 내 PC에 환경변수로 설정한 Jdk11을 사용했고 정의한 gradle 버젼에 호환이 되었기 때문에 빌드 자체는 성공한 것이었다(아무것도 들어있지 않은 깡통 프로젝트였으므로). 하지만 만약 11에서 지원하지 않는 라이브러리를 사용해 코드를 작성했다면 컴파일 오류가 났을 것이고 빌드가 되었더라도 런타임 오류가 발생했을 것이다."))}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.R)(),e.components);return n?a.createElement(n,e,a.createElement(l,e)):l(e)}},9128:function(e,n,r){r.d(n,{R:function(){return c}});var t=r(9474);const a={},l=t.createContext(a);function c(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);
//# sourceMappingURL=component---src-posts-2024-01-16-til-gradle-build-error-mdx-7c3eb4936f50ea58c7ba.js.map