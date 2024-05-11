"use strict";(self.webpackChunkaryumka_me=self.webpackChunkaryumka_me||[]).push([[2332],{1291:function(n,a,s){s.r(a);var t=s(9128),e=s(9474);function p(n){const a=Object.assign({p:"p",img:"img",ul:"ul",li:"li",span:"span"},(0,t.R)(),n.components);return e.createElement(e.Fragment,null,e.createElement(a.p,null,e.createElement(a.img,{src:"https://velog.velcdn.com/images/aryumka/post/5bcf0cef-b279-41be-91fd-b353cda4b285/image.png",alt:""}),"\n서버 인스턴스 이미지 - 아마존 리눅스\nkey 파일 - .pem으로 생성\n인스턴스 유형 - t2 micro (이유: 프리티어이고 제일 쌈)\n이렇게 대부분 설정은 디폴트로 생성.\n",e.createElement(a.img,{src:"https://velog.velcdn.com/images/aryumka/post/77d1fad1-4b21-48f8-83e3-9ed1c7e93fff/image.png",alt:""}),"\n인스턴스 생성이 잘 되었다."),"\n",e.createElement(a.p,null,"다음은 키, ip, user 등의 서버정보를 숨기기 위해 깃헙 settings > security에서 키 설정\n",e.createElement(a.img,{src:"https://velog.velcdn.com/images/aryumka/post/efd37719-bf23-4f0d-b8f7-85cc358792a8/image.png",alt:""}),"\n두 가지 secrets 변수를 설정할 수 있다."),"\n",e.createElement(a.ul,null,"\n",e.createElement(a.li,null,"Environment secrets\nprd, stg 등 배포 환경에 따라 설정 가능(이미지에서는 key로 설정)"),"\n",e.createElement(a.li,null,"Repository secrets\n저장소에서 공유되는 변수.\n",e.createElement(a.img,{src:"https://velog.velcdn.com/images/aryumka/post/d80dee44-3a42-4ce3-a623-d7436eef8ae0/image.png",alt:""})),"\n"),"\n",e.createElement(a.p,null,"다음은 이렇게 설정한 정보로 워크플로우 .yml 파일에 deploy job 작성"),"\n",e.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="yml"><pre class="language-yml"><code class="language-yml">  <span class="token key atrule">deploy</span><span class="token punctuation">:</span>\n    <span class="token key atrule">environment</span><span class="token punctuation">:</span> key\n    <span class="token key atrule">needs</span><span class="token punctuation">:</span> build\n    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest\n    <span class="token key atrule">steps</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Download artifact\n        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/download<span class="token punctuation">-</span>artifact@v2\n        <span class="token key atrule">with</span><span class="token punctuation">:</span>\n          <span class="token key atrule">name</span><span class="token punctuation">:</span> result\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup SSH\n        <span class="token key atrule">uses</span><span class="token punctuation">:</span> webfactory/ssh<span class="token punctuation">-</span>agent@v0.5.4\n        <span class="token key atrule">with</span><span class="token punctuation">:</span>\n          <span class="token key atrule">ssh-private-key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.KEY <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> SCP transfer\n        <span class="token key atrule">run</span><span class="token punctuation">:</span> scp <span class="token important">*.jar</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.USER <span class="token punctuation">}</span><span class="token punctuation">}</span>@$<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.IP <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">:</span>~/\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Execute remote commands\n        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n          ssh ${{ secrets.USER }}@${{ secrets.IP }} "sudo fuser -k 8080/tcp"\n          ssh ${{ secrets.USER }}@${{ secrets.IP }} "sudo nohup java -jar ~/*.jar &amp;"</span></code></pre></div>'}}),"\n",e.createElement(a.p,null,"먼저 job의 environment로 설정한 환경변수 이름을 넣어준다."),"\n",e.createElement(a.p,null,"build된 결과물을 action/artifact에서 다운로드 받아서 전송해준다.\n그런데 위의 스크립트에 문제가 있었다.\nssh에 접속하기 위한 ssh-agent action에서 Host key 인증이 실패했다.\n",e.createElement(a.img,{src:"https://velog.velcdn.com/images/aryumka/post/39fad39f-a1cc-46be-a6cf-56cf289ab164/image.png",alt:""})),"\n",e.createElement(a.p,null,"직접 키파일을 만들어 전송하는 스크립트로 바꿨다."),"\n",e.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="yml"><pre class="language-yml"><code class="language-yml">    <span class="token key atrule">steps</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Download artifact\n        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/download<span class="token punctuation">-</span>artifact@v2\n        <span class="token key atrule">with</span><span class="token punctuation">:</span>\n          <span class="token key atrule">name</span><span class="token punctuation">:</span> result\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Make pem file\n        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n          echo "$key" >> $HOME/key.pem\n          chmod 400 $HOME/key.pem</span>\n        <span class="token key atrule">env</span><span class="token punctuation">:</span>\n          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span>secrets.KEY<span class="token punctuation">}</span><span class="token punctuation">}</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> SCP transfer\n        <span class="token key atrule">run</span><span class="token punctuation">:</span> scp <span class="token punctuation">-</span>i $HOME/key.pem <span class="token punctuation">-</span>o StrictHostKeyChecking=no <span class="token important">*.jar</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.USER <span class="token punctuation">}</span><span class="token punctuation">}</span>@$<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.IP <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">:</span>~/\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Execute remote commands\n        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n          # ssh -i $HOME/key.pem -o StrictHostKeyChecking=no ${{ secrets.USER }}@${{ secrets.IP }} "sudo fuser -k 8080/tcp" # 임시 주석\n          ssh -i $HOME/key.pem -o StrictHostKeyChecking=no ${{ secrets.USER }}@${{ secrets.IP }} "sudo nohup java -jar ~/*.jar &amp;"</span></code></pre></div>'}}),"\n",e.createElement(a.p,null,"scp option에  -o StrictHostKeyChecking=no를 안붙이니까 안됐다."),"\n",e.createElement(a.p,null,e.createElement(a.img,{src:"https://velog.velcdn.com/images/aryumka/post/31658594-e0c1-4858-874c-1c57c0aab139/image.png",alt:""}),"\n성공했다."))}a.default=function(n){void 0===n&&(n={});const{wrapper:a}=Object.assign({},(0,t.R)(),n.components);return a?e.createElement(a,n,e.createElement(p,n)):p(n)}},8013:function(n,a,s){s.r(a),s.d(a,{default:function(){return E}});var t=s(1291),e=s(5530),p=s(9474),c=s(8844),o=s(1047),l=s(8928),u=s.n(l),i=s(3893),r=s(2887),k=s(5909),m=s(589),g=s(5181),d=s.n(g),y=s(2195),f=s(6810);u().extend(s(1997));const h=n=>{let{data:a,location:s,pageContext:t,children:e}=n;const{tableOfContents:l,fields:g,frontmatter:h,excerpt:E}=a.mdx,{series:b}=t,S=u()(g.date).locale("ko").format(),$={headline:h.title,dateModified:S,datePublished:S,image:""+s.href+h.image,mainEntityOfPage:{"@type":"WebPage","@id":s.href},author:{"@type":"Person",name:"Lee Sun-Hyoup"},url:s.href,description:E,"@type":"BlogPosting","@context":"https://schema.org"};(0,p.useEffect)((()=>{void 0!==typeof document&&d()((function(){d()(".post-container a[data-footnote-ref]").each(((n,a)=>{var s;const t=null===(s=d()(a).attr("href"))||void 0===s?void 0:s.slice(1),e=d()("#"+t).text().replace("↩","");d()(a).attr("data-tooltip",e)}))}))}),[]);const{0:H,1:Y}=(0,p.useState)();(0,p.useEffect)((()=>{Y(a.allMdx.edges.filter((n=>n.node.fields.slug!==g.slug)).sort((()=>Math.random()-.5)).slice(0,6))}),[]);const j=h.draft&&!0;return(0,f.Y)(c.A,null,(0,f.Y)(o.A,{title:h.title,description:E,meta:[{name:"article:published_time",content:u()(g.date).locale("ko").format()},{name:"image",content:"https://aryumka.me"+h.image},{property:"og:image",content:"https://aryumka.me"+h.image},{property:"og:image:secure_url",content:"https://aryumka.me"+h.image}]}),(0,f.Y)(m.m,null,(0,f.Y)("script",{type:"application/ld+json"},JSON.stringify($))),(0,f.Y)("h1",{className:"post-title"},h.title),(0,f.Y)("span",{className:"post-date"},"Written on ",u()(g.date).locale("en").format("LL")),(0,f.Y)("img",{src:h.image,style:{objectFit:"cover",maxHeight:300,width:"100%"}}),j||l.items&&(0,f.Y)(k.A,{items:l.items}),j||(null==b?void 0:b.items)&&(0,f.Y)(y.A,{title:b.title,items:b.items,currentItem:h.title}),(0,f.Y)("div",{className:"post-content"},j?(0,f.Y)(v,null,"Not yet published"):e),(0,f.Y)(i.A,{tags:h.tags,comment:h.comments}),H&&(0,f.Y)(r.A,{posts:H,current:g.slug}))};function E(n){return p.createElement(h,n,p.createElement(t.default,n))}const v=(0,e.A)("div",{target:"ezegrm70"})({name:"xl5zip",styles:"margin:16px 0;font-weight:bold;font-size:20px;text-align:center"})}}]);
//# sourceMappingURL=component---src-templates-post-tsx-content-file-path-src-posts-2024-01-02-holiday-til-4-md-2e4a89b3db9443f97e26.js.map