"use strict";(self.webpackChunkkciter_so=self.webpackChunkkciter_so||[]).push([[6970],{2917:function(t,i,e){e.r(i),e.d(i,{default:function(){return M}});var s=e(6640),n=e(5530),h=e(9474),r=e(8844),o=e(1047),a=e(8928),m=e.n(a),c=e(6979),l=e(2887),u=e(5909),f=e(589),d=e(5181),y=e.n(d),w=e(2195),p=e(6810);m().extend(e(1997));const x=t=>{let{data:i,location:e,pageContext:s,children:n}=t;const{tableOfContents:a,fields:d,frontmatter:x,excerpt:M}=i.mdx,{series:v}=s,z=m()(d.date).locale("ko").format(),b={headline:x.title,dateModified:z,datePublished:z,image:""+e.href+x.image,mainEntityOfPage:{"@type":"WebPage","@id":e.href},author:{"@type":"Person",name:"Lee Sun-Hyoup"},url:e.href,description:M,"@type":"BlogPosting","@context":"https://schema.org"};(0,h.useEffect)((()=>{void 0!==typeof document&&y()((function(){y()(".post-container a[data-footnote-ref]").each(((t,i)=>{var e;const s=null===(e=y()(i).attr("href"))||void 0===e?void 0:e.slice(1),n=y()("#"+s).text().replace("↩","");y()(i).attr("data-tooltip",n)}))}))}),[]);const{0:Y,1:F}=(0,h.useState)();(0,h.useEffect)((()=>{F(i.allMdx.edges.filter((t=>t.node.fields.slug!==d.slug)).sort((()=>Math.random()-.5)).slice(0,6))}),[]);const A=x.draft&&!0;return(0,p.Y)(r.A,null,(0,p.Y)(o.A,{title:x.title,description:M,meta:[{name:"article:published_time",content:m()(d.date).locale("ko").format()},{name:"image",content:"https://kciter.so"+x.image},{property:"og:image",content:"https://kciter.so"+x.image},{property:"og:image:secure_url",content:"https://kciter.so"+x.image}]}),(0,p.Y)(f.m,null,(0,p.Y)("script",{type:"application/ld+json"},JSON.stringify(b))),(0,p.Y)("h1",{className:"post-title"},x.title),(0,p.Y)("span",{className:"post-date"},"Written on ",m()(d.date).locale("en").format("LL")),(0,p.Y)("img",{src:x.image}),A||a.items&&(0,p.Y)(u.A,{items:a.items}),A||(null==v?void 0:v.items)&&(0,p.Y)(w.A,{title:v.title,items:v.items,currentItem:x.title}),(0,p.Y)("div",{className:"post-content"},A?(0,p.Y)(g,null,"Not yet published"):n),(0,p.Y)(c.A,{tags:x.tags,comment:x.comments}),Y&&(0,p.Y)(l.A,{posts:Y,current:d.slug}))};function M(t){return h.createElement(x,t,h.createElement(s.default,t))}const g=(0,n.A)("div",{target:"e1jwq6fl0"})({name:"xl5zip",styles:"margin:16px 0;font-weight:bold;font-size:20px;text-align:center"})},5799:function(t,i,e){var s=e(9474),n=e(1615),h=e(6810);i.A=t=>{let{src:i,caption:e,width:r,expandable:o}=t;const{0:a,1:m}=(0,s.useState)(!1);return(0,h.Y)("figure",null,(0,h.Y)("img",{src:i,width:r,style:{cursor:o?"zoom-in":"default"},onClick:o?()=>m(!0):void 0}),e&&(0,h.Y)("figcaption",{dangerouslySetInnerHTML:{__html:e}}),a&&n.createPortal((0,h.Y)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",cursor:"zoom-out",backgroundColor:"rgba(0, 0, 0, 0.7)"},onClick:()=>m(!1)},(0,h.Y)("div",{style:{borderRadius:8,maxWidth:1200,width:"80%",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"white"}},(0,h.Y)("img",{src:i,width:"100%"}))),document.body))}},2053:function(t,i,e){var s=e(9474),n=e(1615),h=e(6810);i.A=t=>{let{src:i,caption:e,width:r,expandable:o,autoPlay:a,controls:m,muted:c,loop:l,playsInline:u}=t;const{0:f,1:d}=(0,s.useState)(!1);return(0,h.Y)("figure",null,(0,h.Y)("video",{src:i,width:r,style:{cursor:o?"zoom-in":"default"},onClick:o?()=>d(!0):void 0,autoPlay:a,controls:m,muted:c,loop:l,playsInline:u}),e&&(0,h.Y)("figcaption",{dangerouslySetInnerHTML:{__html:e}}),f&&n.createPortal((0,h.Y)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",cursor:"zoom-out",backgroundColor:"rgba(0, 0, 0, 0.7)"},onClick:()=>d(!1)},(0,h.Y)("div",{style:{borderRadius:8,maxWidth:1200,width:"80%",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"white"}},(0,h.Y)("img",{src:i,width:"100%"}))),document.body))}},8309:function(t,i,e){e.d(i,{Q:function(){return C},q:function(){return M}});var s=e(9474),n=e(6810);let h=0,r=0,o=0,a=20,m=new Array(1320).fill(0),c=new Array(1320).fill(" ");let l,u,f,d,y,w,p;function x(t,i,e,s){var n,a,x;n=t,x=e,l=(a=i)*Math.sin(h)*Math.sin(r)*Math.cos(o)-x*Math.cos(h)*Math.sin(r)*Math.cos(o)+a*Math.cos(h)*Math.sin(o)+x*Math.sin(h)*Math.sin(o)+n*Math.cos(r)*Math.cos(o),u=function(t,i,e){return i*Math.cos(h)*Math.cos(o)+e*Math.sin(h)*Math.cos(o)-i*Math.sin(h)*Math.sin(r)*Math.sin(o)+e*Math.cos(h)*Math.sin(r)*Math.sin(o)-t*Math.cos(r)*Math.sin(o)}(t,i,e),f=function(t,i,e){return e*Math.cos(h)*Math.cos(r)-i*Math.sin(h)*Math.cos(r)+t*Math.sin(r)}(t,i,e)+100,d=1/f,y=Math.floor(30+40*d*l*2),w=Math.floor(11+40*d*u),p=y+60*w,p>=0&&p<1320&&d>m[p]&&(m[p]=d,c[p]=s)}const M=()=>{var t,i;const e=(0,s.useRef)(null),[l,u]=s.useState("");return s.useEffect((()=>{let t,i=Date.now();return function e(){const s=Date.now(),n=s-i;if(n>24){i=s-n%24,c.fill("."),m.fill(0),a=12;for(let t=-a;t<a;t+=.6)for(let i=-a;i<a;i+=.6)x(t,i,-a,"@"),x(a,i,t,"$"),x(-a,i,-t,"%"),x(-t,i,a,"#"),x(t,-a,-i,";"),x(t,a,i,"+");u(c.join("").replace(/.{60}/g,"$&<br />").replace(/\./g,"&nbsp;")),h+=.05,r+=.05,o+=.01}t=requestAnimationFrame(e)}(),()=>{cancelAnimationFrame(t)}}),[]),(0,n.Y)("div",{ref:e,style:{fontFamily:"monospace",fontSize:((null===(t=e.current)||void 0===t?void 0:t.clientWidth)||0)/700*14,lineHeight:((null===(i=e.current)||void 0===i?void 0:i.clientWidth)||0)<500?1.8:1.4,textAlign:"center"},dangerouslySetInnerHTML:{__html:l}})};var g=Object.defineProperty,v=(t,i,e)=>(((t,i,e)=>{i in t?g(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e})(t,"symbol"!=typeof i?i+"":i,e),e);let z=function(){function t(t,i){v(this,"x"),v(this,"y"),this.x=t,this.y=i}var i=t.prototype;return i.add=function(i){return new t(this.x+i.x,this.y+i.y)},i.subtract=function(i){return new t(this.x-i.x,this.y-i.y)},i.multiply=function(i){return new t(this.x*i,this.y*i)},i.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},i.normalize=function(){const i=this.length();return new t(this.x/i,this.y/i)},t}(),b=function(){function t(t,i,e){v(this,"x"),v(this,"y"),v(this,"z"),this.x=t,this.y=i,this.z=e}t.zero=function(){return new t(0,0,0)};var i=t.prototype;return i.add=function(i){return new t(this.x+i.x,this.y+i.y,this.z+i.z)},i.subtract=function(i){return new t(this.x-i.x,this.y-i.y,this.z-i.z)},i.multiply=function(i){return new t(this.x*i,this.y*i,this.z*i)},i.rotateX=function(i){return new t(this.x,this.y*Math.cos(i)-this.z*Math.sin(i),this.y*Math.sin(i)+this.z*Math.cos(i))},i.rotateY=function(i){return new t(this.x*Math.cos(i)+this.z*-Math.sin(i),this.y,this.x*Math.sin(i)+this.z*Math.cos(i))},i.rotateZ=function(i){return new t(this.x*Math.cos(i)-this.y*Math.sin(i),this.x*Math.sin(i)+this.y*Math.cos(i),this.z)},i.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},i.cross=function(i){return new t(this.y*i.z-this.z*i.y,this.z*i.x-this.x*i.z,this.x*i.y-this.y*i.x)},i.normalize=function(){const i=this.length();return new t(this.x/i,this.y/i,this.z/i)},i.dot=function(t){return this.x*t.x+this.y*t.y+this.z*t.z},t}(),Y=function(){function t(t,i,e,s){v(this,"x"),v(this,"y"),v(this,"z"),v(this,"w"),this.x=t,this.y=i,this.z=e,this.w=s}var i=t.prototype;return i.add=function(i){return new t(this.x+i.x,this.y+i.y,this.z+i.z,this.w+i.w)},i.subtract=function(i){return new t(this.x-i.x,this.y-i.y,this.z-i.z,this.w-i.w)},i.multiply=function(i){return new t(this.x*i,this.y*i,this.z*i,this.w*i)},i.transform=function(i){const e=this.x,s=this.y,n=this.z,h=this.w;return new t(i.m00*e+i.m10*s+i.m20*n+i.m30*h,i.m01*e+i.m11*s+i.m21*n+i.m31*h,i.m02*e+i.m12*s+i.m22*n+i.m32*h,i.m03*e+i.m13*s+i.m23*n+i.m33*h)},t}(),F=function(){function t(t,i,e,s,n,h,r,o,a,m,c,l,u,f,d,y){v(this,"m00"),v(this,"m01"),v(this,"m02"),v(this,"m03"),v(this,"m10"),v(this,"m11"),v(this,"m12"),v(this,"m13"),v(this,"m20"),v(this,"m21"),v(this,"m22"),v(this,"m23"),v(this,"m30"),v(this,"m31"),v(this,"m32"),v(this,"m33"),this.m00=t,this.m01=i,this.m02=e,this.m03=s,this.m10=n,this.m11=h,this.m12=r,this.m13=o,this.m20=a,this.m21=m,this.m22=c,this.m23=l,this.m30=u,this.m31=f,this.m32=d,this.m33=y}t.zero=function(){return new t(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)},t.identity=function(){return new t(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)};var i=t.prototype;return i.add=function(i){return new t(this.m00+i.m00,this.m01+i.m01,this.m02+i.m02,this.m03+i.m03,this.m10+i.m10,this.m11+i.m11,this.m12+i.m12,this.m13+i.m13,this.m20+i.m20,this.m21+i.m21,this.m22+i.m22,this.m23+i.m23,this.m30+i.m30,this.m31+i.m31,this.m32+i.m32,this.m33+i.m33)},i.subtract=function(i){return new t(this.m00-i.m00,this.m01-i.m01,this.m02-i.m02,this.m03-i.m03,this.m10-i.m10,this.m11-i.m11,this.m12-i.m12,this.m13-i.m13,this.m20-i.m20,this.m21-i.m21,this.m22-i.m22,this.m23-i.m23,this.m30-i.m30,this.m31-i.m31,this.m32-i.m32,this.m33-i.m33)},i.multiply=function(i){return new t(this.m00*i.m00+this.m01*i.m10+this.m02*i.m20+this.m03*i.m30,this.m00*i.m01+this.m01*i.m11+this.m02*i.m21+this.m03*i.m31,this.m00*i.m02+this.m01*i.m12+this.m02*i.m22+this.m03*i.m32,this.m00*i.m03+this.m01*i.m13+this.m02*i.m23+this.m03*i.m33,this.m10*i.m00+this.m11*i.m10+this.m12*i.m20+this.m13*i.m30,this.m10*i.m01+this.m11*i.m11+this.m12*i.m21+this.m13*i.m31,this.m10*i.m02+this.m11*i.m12+this.m12*i.m22+this.m13*i.m32,this.m10*i.m03+this.m11*i.m13+this.m12*i.m23+this.m13*i.m33,this.m20*i.m00+this.m21*i.m10+this.m22*i.m20+this.m23*i.m30,this.m20*i.m01+this.m21*i.m11+this.m22*i.m21+this.m23*i.m31,this.m20*i.m02+this.m21*i.m12+this.m22*i.m22+this.m23*i.m32,this.m20*i.m03+this.m21*i.m13+this.m22*i.m23+this.m23*i.m33,this.m30*i.m00+this.m31*i.m10+this.m32*i.m20+this.m33*i.m30,this.m30*i.m01+this.m31*i.m11+this.m32*i.m21+this.m33*i.m31,this.m30*i.m02+this.m31*i.m12+this.m32*i.m22+this.m33*i.m32,this.m30*i.m03+this.m31*i.m13+this.m32*i.m23+this.m33*i.m33)},t.scale=function(i){return new t(i.x,0,0,0,0,i.y,0,0,0,0,i.z,0,0,0,0,1)},t.translate=function(i){return new t(1,0,0,0,0,1,0,0,0,0,1,0,i.x,i.y,i.z,1)},t.rotateX=function(i){const e=Math.cos(i),s=Math.sin(i);return new t(1,0,0,0,0,e,-s,0,0,s,e,0,0,0,0,1)},t.rotateY=function(i){const e=Math.cos(i),s=Math.sin(i);return new t(e,0,-s,0,0,1,0,0,s,0,e,0,0,0,0,1)},t.rotateZ=function(i){const e=Math.cos(i),s=Math.sin(i);return new t(e,-s,0,0,s,e,0,0,0,0,1,0,0,0,0,1)},i.setIdentity=function(){this.m00=1,this.m01=0,this.m02=0,this.m03=0,this.m10=0,this.m11=1,this.m12=0,this.m13=0,this.m20=0,this.m21=0,this.m22=1,this.m23=0,this.m30=0,this.m31=0,this.m32=0,this.m33=1},t}(),A=function(t){v(this,"vertices"),this.vertices=t},k=function(){function t(){v(this,"eye"),v(this,"look"),v(this,"up"),v(this,"rotation"),v(this,"viewMatrix"),this.eye=new b(0,0,0),this.look=new b(0,0,1),this.up=new b(0,1,0),this.rotation=new b(0,0,0),this.viewMatrix=F.identity()}var i=t.prototype;return i.transform=function(t){return t.transform(this.viewMatrix)},i.calculateViewMatrix=function(){const t=this.look.rotateX(this.rotation.x).rotateY(this.rotation.y).rotateZ(this.rotation.z).add(this.eye).subtract(this.eye).normalize(),i=t.multiply(this.up.dot(t)),e=this.up.subtract(i).normalize(),s=e.cross(t);this.viewMatrix=new F(s.x,s.y,s.z,0,e.x,e.y,e.z,0,t.x,t.y,t.z,0,this.eye.x,this.eye.y,this.eye.z,1)},i.calculatePerspectiveMatrix=function(t,i,e,s){const n=F.identity(),h=Math.tan(t/2*(3.141592/180));return n.m00=1/h/i,n.m11=1/h,n.m22=-2*e/(s-e)-1,n.m23=-1,n.m32=-s*-e/(s-e),n},t}(),B=function(){function t(){}return t.loadFromFile=function(t){return new Promise(((i,e)=>{const s=new FileReader;s.onload=t=>{var s;const n=null==(s=t.target)?void 0:s.result;n?i(this.parseOBJ(n)):e(new Error("Failed to load file"))},s.readAsText(t)}))},t.loadFromString=function(t){return this.parseOBJ(t)},t.parseOBJ=function(t){const i=t.split("\n"),e=[],s=[];for(const n of i){const t=n.trim().split(" ").filter((t=>""!==t));"v"===t[0]?e.push(new b(parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3]))):"f"===t[0]&&s.push(new A([e[parseInt(t[1])-1],e[parseInt(t[2])-1],e[parseInt(t[3])-1]]))}return s},t}(),S=function(){function t(){v(this,"position"),v(this,"rotate"),v(this,"scale"),this.position=new b(0,0,0),this.rotate=new b(0,0,0),this.scale=new b(1,1,1)}var i=t.prototype;return i.transform=function(t){const i=F.identity().multiply(F.rotateX(this.rotate.x)).multiply(F.rotateY(this.rotate.y)).multiply(F.rotateZ(this.rotate.z)).multiply(F.scale(this.scale)).multiply(F.translate(this.position));return t.transform(i)},i.setTranslate=function(t){this.position=t},i.setScale=function(t){this.scale=t},i.setRotateX=function(t){this.rotate.x=t},i.setRotateY=function(t){this.rotate.y=t},i.setRotateZ=function(t){this.rotate.z=t},t}(),P=function(){function t(t,i,e){v(this,"el"),v(this,"width"),v(this,"height"),v(this,"frameBuffer"),v(this,"depthBuffer"),v(this,"mesh",[]),v(this,"camera"),v(this,"world"),v(this,"angle"),v(this,"Shade","·┼╬░▒▓█"),this.el=t,this.width=i,this.height=e,this.frameBuffer=new Array(e+1).fill(null).map((()=>new Array(i+1).fill(" "))),this.depthBuffer=new Array(e+1).fill(null).map((()=>new Array(i+1).fill(255))),this.camera=new k,this.world=new S,this.angle=0}var i=t.prototype;return i.loadFromFile=async function(t){this.mesh=await B.loadFromFile(t)},i.loadFromString=async function(t){this.mesh=await B.loadFromString(t)},i.run=function(){const t=16.666666666666668;let i,e,s=Date.now();const n=()=>{i=Date.now(),e=i-s,e>t&&(s=i-e%t,this.render(),this.angle+=.007,this.angle>=6.28&&(this.angle-=6.28)),requestAnimationFrame(n)};requestAnimationFrame(n)},i.render=function(){this.clearFrameBuffer(),this.process(),this.drawFrameBuffer()},i.process=function(){this.camera.eye=new b(0,0,-5),this.camera.calculateViewMatrix();const t=this.camera.calculatePerspectiveMatrix(70,this.width/2/this.height,.1,1e3);this.world.setRotateX(this.angle),this.world.setRotateY(this.angle),this.world.setRotateZ(this.angle),this.world.setTranslate(new b(0,0,0)),this.mesh.forEach((i=>{let e=new Y(i.vertices[0].x,i.vertices[0].y,i.vertices[0].z,1),s=new Y(i.vertices[1].x,i.vertices[1].y,i.vertices[1].z,1),n=new Y(i.vertices[2].x,i.vertices[2].y,i.vertices[2].z,1);e=this.world.transform(e),s=this.world.transform(s),n=this.world.transform(n),e=this.camera.transform(e),s=this.camera.transform(s),n=this.camera.transform(n);const h=new b(e.x,e.y,e.z).subtract(new b(s.x,s.y,s.z)),r=new b(e.x,e.y,e.z).subtract(new b(n.x,n.y,n.z)),o=h.cross(r).normalize(),a=new b(e.x,e.y,e.z).add(this.camera.eye);if(o.dot(a)>=0)return;e=this.transformVertex(e,t),s=this.transformVertex(s,t),n=this.transformVertex(n,t);const m=new b(0,0,1).normalize(),c=Math.max(0,o.dot(m));this.rasterize(new Y(e.x,e.y,e.z,e.w),new Y(s.x,s.y,s.z,s.w),new Y(n.x,n.y,n.z,n.w),c)}))},i.transformVertex=function(t,i){const e=t.transform(i);return e.x/=e.w,e.y/=e.w,e.z/=e.w,e},i.rasterize=function(t,i,e,s){const n=this.width/2,h=this.height/2,r=new z(t.x*n+n,-t.y*h+h),o=new z(i.x*n+n,-i.y*h+h),a=new z(e.x*n+n,-e.y*h+h),m=Math.floor(Math.max(0,Math.min(r.x,Math.min(o.x,a.x)))),c=Math.floor(Math.max(0,Math.min(r.y,Math.min(o.y,a.y)))),l=Math.floor(Math.min(this.width,Math.max(r.x,Math.max(o.x,a.x))+1)),u=Math.floor(Math.min(this.height,Math.max(r.y,Math.max(o.y,a.y))+1));for(let f=c;f<u;f++)for(let n=m;n<l;n++)if(this.isPointInTriangle(n,f,r,o,a)){const h=f*this.width+n;if(h>this.height*this.width||h<0)continue;(t.w+i.w+e.w)/3<=this.depthBuffer[f][n]&&(this.frameBuffer[f][n]=this.Shade[Math.round((this.Shade.length-1)*s)],this.depthBuffer[f][n]=(t.w+i.w+e.w)/3)}},i.isPointInTriangle=function(t,i,e,s,n){const h=((s.y-n.y)*(t-n.x)+(n.x-s.x)*(i-n.y))/((s.y-n.y)*(e.x-n.x)+(n.x-s.x)*(e.y-n.y)),r=((n.y-e.y)*(t-n.x)+(e.x-n.x)*(i-n.y))/((s.y-n.y)*(e.x-n.x)+(n.x-s.x)*(e.y-n.y)),o=r<-.001;return h<-.001==o&&o==1-h-r<-.001},i.drawFrameBuffer=function(){const t=this.frameBuffer.map((t=>t.join("").replace(/\ /g,"&nbsp;"))).join("<br />");this.el.innerHTML=t},i.clearFrameBuffer=function(){this.frameBuffer=new Array(this.height+1).fill(null).map((()=>new Array(this.width+1).fill(" "))),this.depthBuffer=new Array(this.height+1).fill(null).map((()=>new Array(this.width+1).fill(255)))},t}();const C=()=>{const t=(0,s.useRef)(null);(0,s.useEffect)((()=>{const i=new P(t.current,80,40);i.loadFromString(E),i.run()}),[t.current]);const{0:i,1:e}=(0,s.useState)(0),h=()=>{var i;e((null===(i=t.current)||void 0===i?void 0:i.clientWidth)||0)};return(0,s.useEffect)((()=>(window.addEventListener("resize",h),h(),()=>window.removeEventListener("resize",h))),[]),(0,n.Y)("div",{ref:t,style:{fontSize:i/700*14,lineHeight:1,width:"100%",fontFamily:"monospace"}})},E="\n# Blender v2.90.1 OBJ File: ''\n# www.blender.org\no Cube\nv -1.000000 1.000000 1.000000\nv -1.000000 -1.000000 1.000000\nv -1.000000 1.000000 -1.000000\nv -1.000000 -1.000000 -1.000000\nv 1.000000 1.000000 1.000000\nv 1.000000 -1.000000 1.000000\nv 1.000000 1.000000 -1.000000\nv 1.000000 -1.000000 -1.000000\ns off\nf 5 3 1\nf 3 8 4\nf 7 6 8\nf 2 8 6\nf 1 4 2\nf 5 2 6\nf 5 7 3\nf 3 7 8\nf 7 5 6\nf 2 4 8\nf 1 3 4\nf 5 1 2\n"}}]);
//# sourceMappingURL=component---src-templates-post-tsx-content-file-path-src-posts-2024-03-03-ascii-3-d-renderer-mdx-f1a9280e14e1e5900886.js.map