"use strict";(self.webpackChunkaryumka_me=self.webpackChunkaryumka_me||[]).push([[6892,8036,4214,1032,8740,1465],{6062:function(e,a,t){t.r(a);var n=t(9128),l=t(9474);function r(e){const a=Object.assign({h3:"h3",a:"a",p:"p",img:"img",span:"span",br:"br",del:"del"},(0,n.R)(),e.components);return l.createElement(l.Fragment,null,l.createElement(a.h3,{id:"aws-탄력적-ip-설정"},l.createElement(a.a,{href:"#aws-탄력적-ip-설정"},"aws 탄력적 ip 설정")),"\n",l.createElement(a.p,null,"인스턴스를 껐다 켰다 할 때마다 ip가 바뀌어서 너무 불편했다. 고정 ip를 생성해봤다. 너무너무 간단하다.\n인스턴스 > 네트워크 및 보안 > 탄력적 ip에서 생성\n",l.createElement(a.img,{src:"https://velog.velcdn.com/images/aryumka/post/285832a5-29dd-4373-97ae-d3e1449495ea/image.png",alt:""}),"\n현재 ec2 인스턴스와 연결\n",l.createElement(a.img,{src:"https://velog.velcdn.com/images/aryumka/post/fce6cadf-f831-46c9-b225-d01bb70181a4/image.png",alt:""}),"\n성공!\n",l.createElement(a.img,{src:"https://velog.velcdn.com/images/aryumka/post/74dd0c4d-5c12-49aa-86e0-6c613e3dea22/image.png",alt:""})),"\n",l.createElement(a.h3,{id:"docker-사용해보기"},l.createElement(a.a,{href:"#docker-사용해보기"},"Docker 사용해보기")),"\n",l.createElement(a.p,null,"사용중인 OS는 윈도우지만 git Bash를 인텔리제이의 기본 터미널로 설정해주었다.\n",l.createElement(a.img,{src:"https://velog.velcdn.com/images/aryumka/post/4a7e1723-d886-4475-81d7-969eba5185f3/image.png",alt:""})),"\n",l.createElement(a.p,null,"먼저 프로젝트 루트에 dockerfile을 만들어준다. dockerfile은 확장자가 없다."),"\n",l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">FROM openjdk:19\nCMD ["java", "-jar", "./build/libs/vc-erp-0.0.1-SNAPSHOT.jar"]</code></pre></div>'}}),"\n",l.createElement(a.p,null,l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">FROM</code>'}})," - 베이스 이미지이다.",l.createElement(a.br),"\n",l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">CMD</code>'}})," - 컨테이너가 시작할 때 실행할 명령어이다.\n아래 명령어를 실행하여 도커 빌드를 해줬다."),"\n",l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">$ docker build . -t springbootapp</code></pre></div>'}}),"\n",l.createElement(a.p,null,l.createElement(a.img,{src:"https://velog.velcdn.com/images/aryumka/post/36ab57eb-4491-4564-b98d-80c168270d02/image.png",alt:""}),"\n그리고 실행하기 위해 다음 명령을 입력했다."),"\n",l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">$ docker run springbootapp</code></pre></div>'}}),"\n",l.createElement(a.img,{src:"https://velog.velcdn.com/images/aryumka/post/7e7cc0e4-5d28-4ccc-adc0-74fd1f21e6fa/image.png",alt:""}),"\n",l.createElement(a.p,null,"위와 같은 에러가 난다.\n위와 같이 도커에서 해당 어플리케이션을 실행하기 위해서는 빌드한 jar가 도커 컨테이너 안에 있어야 하기 때문이다. 그러나 위 명령어를 통해 빌드한 파일은 현재 내 PC에만 존재한다. 따라서 위 파일을 컨테이너로 copy해주어야 한다.\n",l.createElement(a.del,null,"원격 서버에 빌드된 jar를 배포하는 것과 비슷하다.")),"\n",l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">COPY ./build/libs/vc-erp-0.0.1-SNAPSHOT.jar /build/libs/vc-erp-0.0.1-SNAPSHOT.jar</code></pre></div>'}}),"\n",l.createElement(a.p,null,"[명령어] [현재파일경로] [복사할경로] 순으로 적어준다."),"\n",l.createElement(a.p,null,"다시 빌드 후 실행하면 일단 jar 실행은 잘 된다.\n",l.createElement(a.img,{src:"https://velog.velcdn.com/images/aryumka/post/82bdd78f-b619-4ec7-b254-2fb034763223/image.png",alt:""})),"\n",l.createElement(a.p,null,"하지만 위의 jar가 실행이 안되었던 것과 비슷한 이유로 외부에서 컨테이너의 어플리케이션에 접근하기 위해서는 컨테이너의 포트를 열어줘야 한다."),"\n",l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">$ docker run -p 50000:8080 springbootapp</code></pre></div>'}}),"\n",l.createElement(a.p,null,"run 명령에 위와같은 -p [로컬 포트번호]:[외부포트] 옵션을 추가해준다"),"\n",l.createElement(a.p,null,l.createElement(a.a,{href:"http://localhost:8080",rel:"nofollow noopener noreferrer"},"http://localhost:8080")," 에 잘 접속된다."),"\n",l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">WORKDIR /usr/src/app</code></pre></div>'}}),"\n",l.createElement(a.p,null,"working directory는 위 명령어로 설정해준다. 설정 후 복사될 경로, 실행파일 경로 등을 상대경로로 바꾸어준다(./~~)."),"\n",l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">$ docker run -p 50000:8080 -v $(pwd):/usr/src/app springbootapp</code></pre></div>'}}),"\n",l.createElement(a.p,null,"실행 시 volume을 설정할 수도 있다.\nvolume: volume을 설정하면 호스트머신의 로컬의 파일을 컨테이너가 사용할 수 있으며 컨테이너끼리 데이터를 공유할 수도 있다."),"\n",l.createElement(a.p,null,"최종 dockerfile은 아래와 같다."),"\n",l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">FROM openjdk:19\nWORKDIR /usr/src/app\nCOPY ./build/libs/vc-erp-0.0.1-SNAPSHOT.jar ./build/libs/vc-erp-0.0.1-SNAPSHOT.jar\nCMD ["java", "-jar", "./build/libs/vc-erp-0.0.1-SNAPSHOT.jar"]</code></pre></div>'}}))}a.default=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,n.R)(),e.components);return a?l.createElement(a,e,l.createElement(r,e)):r(e)}},9128:function(e,a,t){t.d(a,{R:function(){return c}});var n=t(9474);const l={},r=n.createContext(l);function c(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}}}]);
//# sourceMappingURL=component---src-posts-2024-01-04-til-aws-elastic-ip-docker-md-2b60a38ed7ce6f27d33f.js.map