(function(t){function e(e){for(var r,u,a=e[0],i=e[1],b=e[2],d=0,l=[];d<a.length;d++)u=a[d],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&l.push(c[u][0]),c[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);s&&s(e);while(l.length)l.shift()();return o.push.apply(o,b||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},c={app:0},o=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/vuetest/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=e,a=a.slice();for(var b=0;b<a.length;b++)e(a[b]);var s=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1ce0":function(t,e,n){},"33c6":function(t,e,n){"use strict";n("b8c6")},"4c2d":function(t,e,n){},5169:function(t,e,n){"use strict";n("4c2d")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"routerview"},o={class:"sidebar"};function u(t,e,n,u,a,i){var b=Object(r["v"])("hero-img"),s=Object(r["v"])("nav-bar"),d=Object(r["v"])("router-view"),l=Object(r["v"])("side-bar"),f=Object(r["v"])("Footer");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])(b),Object(r["g"])(s),Object(r["e"])("section",null,[Object(r["e"])("div",c,[Object(r["g"])(d)]),Object(r["e"])("div",o,[Object(r["g"])(l)])]),Object(r["e"])("footer",null,[Object(r["g"])(f)])],64)}var a={id:"nav"},i=Object(r["f"])("Home"),b=Object(r["f"])("About Us"),s={class:"drpdwn"},d=Object(r["f"])("Product"),l={class:"drpcontent boxshd"},f=Object(r["f"])("Product 1"),O=Object(r["f"])("Product 2"),p=Object(r["f"])("Product 3"),j=Object(r["f"])("Exercise"),v=Object(r["f"])("Contact Us");function m(t,e,n,c,o,u){var m=Object(r["v"])("router-link");return Object(r["p"])(),Object(r["d"])("ul",a,[Object(r["e"])("li",null,[Object(r["g"])(m,{to:"/"},{default:Object(r["z"])((function(){return[i]})),_:1})]),Object(r["e"])("li",null,[Object(r["g"])(m,{to:"/about-us"},{default:Object(r["z"])((function(){return[b]})),_:1})]),Object(r["e"])("li",s,[Object(r["g"])(m,{to:"/product",class:"drpbtn"},{default:Object(r["z"])((function(){return[d]})),_:1}),Object(r["e"])("div",l,[Object(r["g"])(m,{to:"/product1"},{default:Object(r["z"])((function(){return[f]})),_:1}),Object(r["g"])(m,{to:"/product2"},{default:Object(r["z"])((function(){return[O]})),_:1}),Object(r["g"])(m,{to:"/product3"},{default:Object(r["z"])((function(){return[p]})),_:1})])]),Object(r["e"])("li",null,[Object(r["g"])(m,{to:"/exercise"},{default:Object(r["z"])((function(){return[j]})),_:1})]),Object(r["e"])("li",null,[Object(r["g"])(m,{to:"/contact-us"},{default:Object(r["z"])((function(){return[v]})),_:1})])])}var h={name:"NavBar"},g=(n("c9a7"),n("6b0d")),P=n.n(g);const _=P()(h,[["render",m],["__scopeId","data-v-9f6fef5e"]]);var y=_,x=function(t){return Object(r["s"])("data-v-2b58a7f6"),t=t(),Object(r["q"])(),t},w={class:"heroimg"},T=x((function(){return Object(r["e"])("div",{class:"herotxt"},[Object(r["e"])("h1",null,"Welcome To Galaxy!")],-1)})),k=[T];function z(t,e,n,c,o,u){return Object(r["p"])(),Object(r["d"])("div",w,k)}var U={name:"HeroImg"};n("5169");const A=P()(U,[["render",z],["__scopeId","data-v-2b58a7f6"]]);var S=A,H=function(t){return Object(r["s"])("data-v-37803072"),t=t(),Object(r["q"])(),t},M=H((function(){return Object(r["e"])("h3",null,"About Galaxy",-1)})),E=H((function(){return Object(r["e"])("p",null,[Object(r["e"])("a",{href:"",target:"_blank"},"Learn More"),Object(r["f"])(" from wikipedia.")],-1)})),I=H((function(){return Object(r["e"])("h3",null,"About Earth",-1)})),B=H((function(){return Object(r["e"])("p",null,[Object(r["e"])("a",{href:"",target:"_blank"},"Learn More"),Object(r["f"])(" from wikipedia.")],-1)}));function C(t,e,n,c,o,u){return Object(r["p"])(),Object(r["d"])(r["a"],null,[M,E,I,B],64)}var F={name:"SideBar"};n("e6f4");const q=P()(F,[["render",C],["__scopeId","data-v-37803072"]]);var G=q;function J(t,e,n,c,o,u){return Object(r["p"])(),Object(r["d"])("p",null,"This is Footer")}var L={name:"Footer"};const N=P()(L,[["render",J]]);var W=N,D={name:"App",components:{NavBar:y,HeroImg:S,SideBar:G,Footer:W}};n("33c6");const K=P()(D,[["render",u]]);var Q=K,R=n("6c02");function V(t,e,n,c,o,u){return Object(r["p"])(),Object(r["d"])("p",null,"This is Home")}var X={name:"Home"};const Y=P()(X,[["render",V]]);var Z=Y;function $(t,e,n,c,o,u){return Object(r["p"])(),Object(r["d"])("p",null,"This is About Us")}var tt={name:"AboutUs"};const et=P()(tt,[["render",$]]);var nt=et;function rt(t,e,n,c,o,u){return Object(r["p"])(),Object(r["d"])("p",null,"This is Product")}var ct={name:"Product"};const ot=P()(ct,[["render",rt]]);var ut=ot;function at(t,e,n,c,o,u){return Object(r["p"])(),Object(r["d"])("p",null,"This is Exercise")}var it={name:"Exercise"};const bt=P()(it,[["render",at]]);var st=bt;function dt(t,e,n,c,o,u){return Object(r["p"])(),Object(r["d"])("p",null,"This is Contact Us")}var lt={name:"ContactUs"};const ft=P()(lt,[["render",dt]]);var Ot=ft;function pt(t,e,n,c,o,u){return Object(r["p"])(),Object(r["d"])("p",null,"This is Product 1")}var jt={name:"Product1"};const vt=P()(jt,[["render",pt]]);var mt=vt;function ht(t,e,n,c,o,u){return Object(r["p"])(),Object(r["d"])("p",null,"This is Product 2")}var gt={name:"Product2"};const Pt=P()(gt,[["render",ht]]);var _t=Pt;function yt(t,e,n,c,o,u){return Object(r["p"])(),Object(r["d"])("p",null,"This is Product 3")}var xt={name:"Product3"};const wt=P()(xt,[["render",yt]]);var Tt=wt,kt=[{path:"/",name:"Home",component:Z},{path:"/about-us",name:"AboutUs",component:nt},{path:"/product",name:"Product",component:ut},{path:"/exercise",name:"Exercise",component:st},{path:"/contact-us",name:"ContactUs",component:Ot},{path:"/product1",name:"Product1",component:mt},{path:"/product2",name:"Product2",component:_t},{path:"/product3",name:"Product3",component:Tt}],zt=Object(R["a"])({history:Object(R["b"])("/vuetest/"),routes:kt}),Ut=zt;Object(r["c"])(Q).use(Ut).mount("#app")},9402:function(t,e,n){},b8c6:function(t,e,n){},c9a7:function(t,e,n){"use strict";n("1ce0")},e6f4:function(t,e,n){"use strict";n("9402")}});
//# sourceMappingURL=app.e4a7e7c7.js.map