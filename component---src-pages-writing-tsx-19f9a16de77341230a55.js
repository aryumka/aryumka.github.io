(self.webpackChunkkciter_so=self.webpackChunkkciter_so||[]).push([[1053],{1997:function(e){e.exports=function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(t,n,o){var i=n.prototype,a=i.format;o.en.formats=e,i.format=function(t){void 0===t&&(t="YYYY-MM-DDTHH:mm:ssZ");var n=this.$locale().formats,o=function(t,n){return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,o,i){var a=i&&i.toUpperCase();return o||n[i]||e[i]||n[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))}(t,void 0===n?{}:n);return a.call(this,o)}}}()},1047:function(e,t,n){"use strict";var o=n(9474),i=n(4568),a=n(6810);t.A=e=>{var t;let{children:n,title:r,description:s}=e;const{site:l}=(0,i.useStaticQuery)("63159454"),d=s||l.siteMetadata.description,p=r||(null===(t=l.siteMetadata)||void 0===t?void 0:t.title);return(0,a.Y)(o.Fragment,null,(0,a.Y)("html",{lang:"ko"}),(0,a.Y)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Source+Code+Pro"}),(0,a.Y)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Quattrocento+Sans"}),(0,a.Y)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),(0,a.Y)("title",{id:"title"},p),(0,a.Y)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.Y)("meta",{charSet:"utf-8"}),(0,a.Y)("meta",{name:"robots",content:"index,follow"}),(0,a.Y)("meta",{name:"googlebot",content:"index,follow"}),(0,a.Y)("meta",{name:"color-scheme",content:"light"}),(0,a.Y)("meta",{id:"description",name:"description",content:d}),(0,a.Y)("meta",{id:"og:title",property:"og:title",content:p}),(0,a.Y)("meta",{id:"og:description",property:"og:description",content:d}),(0,a.Y)("meta",{id:"og:type",property:"og:type",content:"website"}),(0,a.Y)("meta",{id:"og:site_name",property:"og:site_name",content:"kciter.so"}),(0,a.Y)("meta",{id:"og:locale",property:"og:locale",content:"ko_KR"}),(0,a.Y)("meta",{id:"twitter:card",name:"twitter:card",content:"summary"}),(0,a.Y)("meta",{id:"twitter:creator",name:"twitter:creator",content:"Sunhyoup Lee"}),(0,a.Y)("meta",{id:"twitter:title",name:"twitter:title",content:p}),(0,a.Y)("meta",{id:"twitter:description",name:"twitter:description",content:d}),(0,a.Y)("meta",{id:"og:image",property:"og:image",content:"https://kciter.so/images/og.png"}),n)}},979:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return p}});var o=n(5530),i=n(8844),a=n(1047),r=n(8928),s=n.n(r),l=n(4568),d=n(6810);s().extend(n(1997));t.default=()=>{const e=(0,l.useStaticQuery)("2587033001").allMdx.edges;return(0,d.Y)(i.A,null,e.map((e=>(0,d.Y)(m,{key:e.node.fields.slug},(0,d.Y)(c,null,(0,d.Y)(k,null,(0,d.Y)(g,null,s()(e.node.fields.date).locale("en").format("ll")),(0,d.Y)(f,null,(0,d.Y)("i",{className:"fa fa-clock-o","aria-hidden":"true"})," ",Math.round(e.node.fields.timeToRead.minutes)," minute read"))),(0,d.Y)(b,{recent:s()(e.node.fields.date).isAfter(s()().subtract(1,"month"))},(0,d.Y)(l.Link,{to:e.node.fields.slug,style:{textDecoration:"none"}},(0,d.Y)(v,{style:{marginTop:e.node.frontmatter.tags.length>0?-8:-10}},(0,d.Y)(x,null,s()(e.node.fields.date).locale("en").format("ll")),e.node.frontmatter.tags.length>0&&(0,d.Y)(h,null,e.node.frontmatter.tags.map((e=>(0,d.Y)(u,{key:e},e)))),(0,d.Y)(Y,null,(0,d.Y)(l.Link,{to:e.node.fields.slug},e.node.frontmatter.title)),(0,d.Y)(y,null,e.node.excerpt),(0,d.Y)(w,{src:e.node.frontmatter.image}))))))))};const p=()=>(0,d.Y)(a.A,{title:"Writing | kciter.so"}),m=(0,o.A)("div",{target:"e1bfbjbx12"})({name:"1bccor8",styles:"display:flex;height:500px;margin:0 auto;padding:0;list-style:none;line-height:26px;@media (max-width: 768px){height:440px;}"}),c=(0,o.A)("div",{target:"e1bfbjbx11"})({name:"14gjsn7",styles:"width:15%;padding-right:24px;text-align:right;@media (max-width: 768px){display:none;}"}),g=(0,o.A)("div",{target:"e1bfbjbx10"})({name:"dsk87c",styles:"font-size:16px;font-weight:bold;color:#444"}),x=(0,o.A)("div",{target:"e1bfbjbx9"})({name:"2ib51l",styles:"display:none;font-size:14px;font-weight:bold;color:#444;margin-bottom:4px;@media (max-width: 768px){display:block;}"}),f=(0,o.A)("div",{target:"e1bfbjbx8"})({name:"1z0pe67",styles:"font-size:10px;color:#aaa;line-height:1.6"}),b=(0,o.A)("div",{target:"e1bfbjbx7"})("position:relative;flex:1;padding-left:24px;border-left:1px solid #ddd;min-width:0%;&::after{background:",(e=>e.recent?"#00a962":"#888"),";border:1px solid #eee;content:'';display:block;height:10px;left:-7px;position:absolute;top:-4px;width:10px;border-radius:12px;box-shadow:",(e=>e.recent?"rgb(51, 217, 178) 0px 0px 0px 0px":"none"),";animation:",(e=>e.recent?"2s ease 0s infinite normal none running pulse":"none"),";@keyframes pulse{0%{transform:scale(0.95);box-shadow:rgba(51, 217, 178, 0.7) 0px 0px 0px 0px;}70%{transform:scale(1);box-shadow:rgba(51, 217, 178, 0) 0px 0px 0px 10px;}100%{transform:scale(0.95);box-shadow:rgba(51, 217, 178, 0) 0px 0px 0px 0px;}}}"),h=(0,o.A)("div",{target:"e1bfbjbx6"})({name:"y9l2rz",styles:"position:relative;display:flex;max-width:100%;margin-bottom:8px;overflow:hidden;flex-wrap:nowrap;white-space:nowrap;&::after{position:absolute;top:0;right:0;content:'';width:80px;height:100%;background-image:linear-gradient(90deg, transparent 0%, white 100%);}"}),u=(0,o.A)("div",{target:"e1bfbjbx5"})({name:"1niev5l",styles:"display:inline-flex;justify-content:center;align-items:center;height:16px;min-width:0;padding:0 8px;margin-right:4px;font-size:9px;color:#888;border-radius:50px;border:1px solid #dfe3e8;background-color:white;&:last-of-type{margin-right:0;}"}),Y=(0,o.A)("h1",{target:"e1bfbjbx4"})({name:"18ptoyg",styles:"font-size:20px;border:none;margin:0;margin-bottom:8px;padding:0"}),y=(0,o.A)("p",{target:"e1bfbjbx3"})({name:"10rbzue",styles:"font-size:14px;line-height:1.4;margin:0;margin-bottom:8px"}),w=(0,o.A)("img",{target:"e1bfbjbx2"})({name:"1opa5ln",styles:"display:block;border-radius:8px;box-shadow:0 1px 2px rgba(0, 0, 0, 0.1)"}),k=(0,o.A)("div",{target:"e1bfbjbx1"})({name:"1kk8g8n",styles:"display:block;transform:translateY(-10px)"}),v=(0,o.A)("div",{target:"e1bfbjbx0"})({name:"f1nnfs",styles:"display:block;transition:all 333ms ease 0s;@media (max-width: 768px){margin-top:-12px!important;}transform:scale3d(1, 1, 1);&::after{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:8px;transform:scale(1.04);transition:opacity 2s cubic-bezier(0.165, 0.84, 0.44, 1);box-shadow:0 8px 17px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.15);content:'';opacity:0;z-index:-1;}&:hover{transform:scale3d(1.006, 1.006, 1);&::after{opacity:1;}}"})}}]);
//# sourceMappingURL=component---src-pages-writing-tsx-19f9a16de77341230a55.js.map