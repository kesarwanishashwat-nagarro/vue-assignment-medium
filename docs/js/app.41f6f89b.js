(function(t){function e(e){for(var r,a,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i={app:0},o=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-09a2f991":"f3307621","chunk-16635c4e":"50901ff4","chunk-46f044dc":"be3e245e","chunk-614237ef":"32338445","chunk-b28817a2":"e9b3add6"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-09a2f991":1,"chunk-16635c4e":1,"chunk-46f044dc":1,"chunk-614237ef":1,"chunk-b28817a2":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-09a2f991":"c7b5099e","chunk-16635c4e":"c38076e4","chunk-46f044dc":"86f574d2","chunk-614237ef":"27c31fe0","chunk-b28817a2":"e7ea3a21"}[t]+".css",i=s.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===r||l===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[t],d.parentNode.removeChild(d),n(o)},d.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){a[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}i[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/<vue-assignment-medium>/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"04f7":function(t,e,n){},"0a98":function(t,e,n){},"21bb":function(t,e,n){"use strict";var r=n("7a98"),a=n.n(r);a.a},2950:function(t,e,n){"use strict";var r=n("0a98"),a=n.n(r);a.a},"2cd6":function(t,e,n){"use strict";var r=n("b565"),a=n.n(r);a.a},"3de9":function(t,e,n){},4529:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jumbotron text-white",style:{background:t.backgroundColor||"auto"}},[n("div",{staticClass:"data"},[n("h1",{staticClass:"display-3"},[t._v(t._s(t.title))]),n("p",{staticClass:"lead"},[t._v("\n      "+t._s(t.subTitle)+"\n    ")])])])},a=[],i={name:"heading-bar",props:{title:String,subTitle:String,backColor:String},computed:{backgroundColor:function(){return this.backColor}}},o=i,c=(n("dee4"),n("2877")),s=Object(c["a"])(o,r,a,!1,null,null,null);e["a"]=s.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("5f5b");n("f9e3"),n("2dd8");r["default"].use(a["a"]);var i=n("ecee"),o=n("c074"),c=n("ad3d");i["c"].add(o["a"]),r["default"].component("font-awesome-icon",c["a"]),r["default"].config.productionTip=!1;var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.isLoading?n("div",{staticClass:"overlay"}):t._e(),t.isLoading?n("div",{staticClass:"loader"}):t._e(),n("Navbar"),n("div",{staticClass:"content",style:{minHeight:t.minHeight+"px"}},[n("router-view")],1),n("Footer")],1)},u=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[n("div",{staticClass:"container"},[n("b-navbar-brand",{attrs:{href:"#"}},[n("router-link",{attrs:{to:"/"}},[t._v("medium")])],1),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{class:{active:"home"===t.activeItem}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),t.isAuthenticated?n("b-nav-item",{class:{active:"editor_new"===t.activeItem||"editor_existing"===t.activeItem}},[n("font-awesome-icon",{attrs:{icon:"pen-square"}}),n("router-link",{attrs:{to:"/editor"}},[t._v("New Article")])],1):t._e(),t.isAuthenticated?t._e():n("b-nav-item",{class:{active:"login"===t.activeItem}},[n("font-awesome-icon",{attrs:{icon:"pen-square"}}),n("router-link",{attrs:{to:"/login"}},[t._v("Sign in")])],1),t.isAuthenticated?t._e():n("b-nav-item",{class:{active:"register"===t.activeItem}},[n("font-awesome-icon",{attrs:{icon:"pen-square"}}),n("router-link",{attrs:{to:"/register"}},[t._v("Sign up")])],1),t.isAuthenticated?n("b-nav-item-dropdown",{class:{active:"user_profile"===t.activeItem},attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("em",[t._v(t._s(t.username))])]},proxy:!0}],null,!1,1747042283)},[n("b-dropdown-item",{on:{click:t.navigateToProfile}},[t._v("Profile")]),n("b-dropdown-item",{staticClass:"logout",on:{click:t.signout}},[t._v("Sign Out")])],1):t._e()],1)],1)],1)])],1)},f=[],d=(n("7f7f"),n("7921")),m={name:"navbar",props:{msg:String},data:function(){return{activeItem:"home"}},computed:{isAuthenticated:function(){return this.$store.state.auth.isAuthenticated},username:function(){return this.$store.state.auth.username||"admin"}},methods:{signout:function(){var t=this;this.$store.dispatch(d["p"]).then((function(){"home"!==t.$route.name&&t.$router.push({name:"home"})}))},navigateToProfile:function(){this.$router.push({name:"user_profile",params:{user:this.username}})},setActiveMenuItem:function(t){this.activeItem=t}},created:function(){this.setActiveMenuItem(this.$route.name)},watch:{$route:function(t,e){this.setActiveMenuItem(t.name)}}},h=m,p=(n("2cd6"),n("2877")),g=Object(p["a"])(h,l,f,!1,null,"2c822598",null),v=g.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"container"},[n("a",{staticClass:"logo-font"},[t._v("medium")]),n("span",{staticClass:"attribution"},[t._v("\n      An interactive learning project.\n    ")])])])}],k={},y=k,_=(n("cac6"),Object(p["a"])(y,b,w,!1,null,"76cc1dcc",null)),C=_.exports,A={components:{Navbar:v,Footer:C},computed:{isLoading:function(){return this.$store.state.isLoading||!1},minHeight:function(){var t=screen.height;return t-240}}},j=A,O=(n("5c0b"),Object(p["a"])(j,s,u,!1,null,null,null)),x=O.exports,T=n("8c4f"),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HeadingBar",{attrs:{title:"medium",subTitle:"A place to share your knowledge."}}),n("div",{staticClass:"container home-content"},[n("section",{staticClass:"left"},[n("b-tabs",{attrs:{pills:"",card:""},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[t.isAuthenticated?n("b-tab",{attrs:{title:"Your Feed"},on:{click:function(e){return t.setFeed(0,1)}}},[n("b-card-text",[t._l(t.userFeed,(function(t){return[n("ArticleCard",{key:t.slug,attrs:{article:t}})]})),t.userFeed&&0===t.userFeed.length?[n("h6",[t._v("Your Feed does not contain any articles...")])]:t._e()],2)],1):t._e(),n("b-tab",{attrs:{title:"Global Feed"},on:{click:function(e){return t.setFeed(1,1)}}},[n("b-card-text",[t._l(t.globalFeed,(function(t){return[n("ArticleCard",{key:t.slug,attrs:{article:t}})]})),t.globalFeed&&0===t.globalFeed.length?[n("h6",[t._v("Global Feed does not contain any articles...")])]:t._e()],2)],1)],1),t.totalRows/10>1?n("Paging",{attrs:{totalRecords:t.totalRows,currentPage:t.pageNumber,perPage:10},on:{pageChanged:function(e){return t.onPageChange(e)}}}):t._e()],1),n("section",{staticClass:"right"},[n("div",{staticClass:"tags"},[n("h6",[t._v("Popular Tags")]),n("ul",{staticClass:"tag-items"},t._l(t.tags,(function(e){return n("li",{key:e,staticClass:"tag-item"},[t._v(t._s(e))])})),0)])])])],1)},F=[],$=n("4529"),E=n("d4bc"),I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-pagination",{attrs:{"total-rows":t.totalRecords,"per-page":t.perPage},on:{change:t.changePage},scopedSlots:t._u([{key:"first-text",fn:function(){return[n("span",{staticClass:"text-success"},[t._v("First")])]},proxy:!0},{key:"prev-text",fn:function(){return[n("span",{staticClass:"text-danger"},[t._v("Prev")])]},proxy:!0},{key:"next-text",fn:function(){return[n("span",{staticClass:"text-warning"},[t._v("Next")])]},proxy:!0},{key:"last-text",fn:function(){return[n("span",{staticClass:"text-info"},[t._v("Last")])]},proxy:!0},{key:"ellipsis-text",fn:function(){return[n("b-spinner",{attrs:{small:"",type:"grow"}}),n("b-spinner",{attrs:{small:"",type:"grow"}}),n("b-spinner",{attrs:{small:"",type:"grow"}})]},proxy:!0},{key:"page",fn:function(e){var r=e.page,a=e.active;return[n(a?"b":"i",[t._v(t._s(r))])]}}]),model:{value:t.pageNumber,callback:function(e){t.pageNumber=e},expression:"pageNumber"}})],1)},S=[],R=(n("c5f6"),{data:function(){return{pageNumber:this.currentPage}},props:{totalRecords:{type:Number,required:!0},currentPage:{type:Number,required:!0,default:1},perPage:{type:Number,required:!0}},methods:{changePage:function(t){this.$emit("pageChanged",t)}}}),N=R,L=(n("2950"),Object(p["a"])(N,I,S,!1,null,"ecdea688",null)),q=L.exports,U={name:"home",data:function(){return{activeFeed:"global",tabIndex:this.$store.state.home.feed||1,pageNumber:this.$store.state.home.page||1}},components:{HeadingBar:$["a"],ArticleCard:E["a"],Paging:q},methods:{setFeed:function(t,e){this.tabIndex=t,this.pageNumber=e,this.activeFeed=1===t?"global":"myFeed";var n={type:t,page:this.pageNumber};this.$store.dispatch(d["s"],{page:e,feed:this.tabIndex}),this.$store.dispatch(d["i"],n)},onPageChange:function(t){this.pageNumber!==t&&this.setFeed(this.tabIndex,t)}},computed:{globalFeed:function(){return this.$store.state.home.globalArticles||[]},totalRows:function(){return"global"===this.activeFeed?this.$store.state.home.globalArticlesCount:this.$store.state.home.userFeedCount},userFeed:function(){return this.$store.state.home.userFeed||[]},tags:function(){return this.$store.state.home.tags||[]},isAuthenticated:function(){return this.$store.state.auth.isAuthenticated||!1}},created:function(){this.setFeed(1,this.pageNumber)},mounted:function(){this.$store.dispatch(d["m"])}},M=U,H=(n("21bb"),Object(p["a"])(M,P,F,!1,null,null,null)),B=H.exports;r["default"].use(T["a"]);var D,G,z,J,Y,K,Q,V,W=new T["a"]({routes:[{path:"/",name:"home",component:B},{path:"/login",name:"login",component:function(){return n.e("chunk-46f044dc").then(n.bind(null,"a55b"))}},{path:"/register",name:"register",component:function(){return n.e("chunk-b28817a2").then(n.bind(null,"73cf"))}},{path:"/editor",name:"editor_new",component:function(){return n.e("chunk-16635c4e").then(n.bind(null,"bd8a"))}},{path:"/editor/:articleDesc",name:"editor_existing",component:function(){return n.e("chunk-16635c4e").then(n.bind(null,"bd8a"))}},{path:"/article/:articleDesc",name:"article",component:function(){return n.e("chunk-614237ef").then(n.bind(null,"3ad6"))}},{path:"/:user",name:"user_profile",component:function(){return n.e("chunk-09a2f991").then(n.bind(null,"c66d"))}}]}),X=n("bd86"),Z=n("2f62"),tt=(n("ac6a"),n("456d"),n("96cf"),n("3b8d")),et=n("bc3a"),nt=n.n(et),rt=nt.a.create({baseURL:"https://conduit.productionready.io/api"}),at={get:function(){var t=Object(tt["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",rt.get("".concat(e,"/").concat(n)));case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),delete:function(){var t=Object(tt["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=n?"".concat(e,"/").concat(n):e,t.abrupt("return",rt.delete(r));case 2:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),getAll:function(){var t=Object(tt["a"])(regeneratorRuntime.mark((function t(e){var n,r,a=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},r=Object.keys(n),r.length&&(e+="?",r.forEach((function(t){e+="".concat(t,"=").concat(n[t],"&")})),e=e.substring(0,e.length-1)),t.abrupt("return",rt.get(e));case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),post:function(){var t=Object(tt["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",rt.post(e,n));case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),put:function(){var t=Object(tt["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",rt.put(e,n));case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),setToken:function(){var t=Object(tt["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:rt.defaults.headers.common.Authorization="Token ".concat(e);case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),clearToken:function(){var t=Object(tt["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:delete rt.defaults.headers.common.Authorization;case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),update:function(){var t=Object(tt["a"])(regeneratorRuntime.mark((function t(e,n,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",rt.put(e+"/"+n,r));case 1:case"end":return t.stop()}}),t)})));function e(e,n,r){return t.apply(this,arguments)}return e}()},it="medium_token",ot="md_user",ct=function(){return window.localStorage.getItem(it)},st=function(t){window.localStorage.setItem(it,t)},ut=function(){window.localStorage.removeItem(it)},lt=function(){return window.localStorage.getItem(ot)},ft=function(){window.localStorage.removeItem(ot)},dt=function(t){window.localStorage.setItem(ot,t)},mt={getToken:ct,saveToken:st,deleteToken:ut,getUsername:lt,deleteUsername:ft,saveUsername:dt},ht={query:function(t,e){return at.setToken(mt.getToken()),at.getAll("articles"+("feed"===t?"/feed":""),e)},get:function(t){return at.setToken(mt.getToken()),at.get("articles",t)},getAll:function(t){return at.setToken(mt.getToken()),at.getAll("articles",t)},create:function(t){return at.setToken(mt.getToken()),at.post("articles",{article:t})},update:function(t,e){return at.setToken(mt.getToken()),at.update("articles",t,{article:e})},delete:function(t){return at.setToken(mt.getToken()),at.delete("articles",t)},post:function(t){return at.setToken(mt.getToken()),at.post("articles",{article:t})},setFavorite:function(t,e){return at.setToken(mt.getToken()),at.post("articles/"+t+"/favorite",e)},removeFavorite:function(t){return at.setToken(mt.getToken()),at.delete("articles/"+t+"/favorite",null)}},pt={getProfile:function(t){return at.setToken(mt.getToken()),at.get("profiles",t)},getTags:function(){return at.getAll("tags")}},gt="logOut",vt="startLoading",bt="stopLoading",wt="setGlobalArticles",kt="setUserArticles",yt="setSelectedArticle",_t="setUser",Ct="setTags",At="setProfile",jt="setMyArticles",Ot="setFavorited",xt="setComments",Tt="setFeed",Pt="setPage",Ft={namepaced:!0,state:{tags:["tag1","tag2"],globalArticles:[],userFeed:[],globalArticlesCount:0,userFeedCount:0,feed:1,page:1},mutations:(D={},Object(X["a"])(D,wt,(function(t,e){var n=e.articles,r=e.articlesCount;t.globalArticles=n,t.globalArticlesCount=r})),Object(X["a"])(D,kt,(function(t,e){var n=e.articles,r=e.articlesCount;t.userFeed=n,t.userFeedCount=r})),Object(X["a"])(D,Ct,(function(t,e){t.tags=e})),Object(X["a"])(D,Tt,(function(t,e){t.feed=e})),Object(X["a"])(D,Pt,(function(t,e){t.feed=e})),D),actions:(G={},Object(X["a"])(G,d["i"],(function(t,e){var n=t.commit;n(vt);var r={limit:10,offset:10*(e.page-1)};return 1===e.type?ht.getAll(r).then((function(t){var e=t.data;n(wt,e)})).catch((function(t){throw new Error(t)})).finally((function(){n(bt)})):ht.query("feed",r).then((function(t){var e=t.data;n(kt,e)})).catch((function(t){throw new Error(t)})).finally((function(){n(bt)}))})),Object(X["a"])(G,d["m"],(function(t){var e=t.commit;return e(vt),pt.getTags().then((function(t){var n=t.data;e(Ct,n.tags)})).catch((function(t){throw new Error(t)})).finally((function(){e(bt)}))})),Object(X["a"])(G,d["s"],(function(t,e){var n=t.commit;n(Tt,e.feed),n(Pt,e.page)})),G)},$t={state:{user:{},username:mt.getUsername()||"",isAuthenticated:mt.getToken()||!1},mutations:(z={},Object(X["a"])(z,_t,(function(t,e){t.isAuthenticated=!0,t.user=e,t.username=e.username,mt.saveToken(t.user.token),mt.saveUsername(t.username),at.setToken(mt.getToken()),t.errors={}})),Object(X["a"])(z,gt,(function(t){t.isAuthenticated=!1,t.user={},t.errors={},mt.deleteToken(),mt.deleteUsername()})),z),actions:(J={},Object(X["a"])(J,d["o"],(function(t,e){var n=t.commit;return new Promise((function(t,r){at.post("users/login",{user:e}).then((function(e){var r=e.data;n(_t,r.user),t(r)})).catch((function(t){var e=t.response;r(e.data)}))}))})),Object(X["a"])(J,d["p"],(function(t){var e=t.commit;return new Promise((function(t,n){e(gt),t()}))})),Object(X["a"])(J,d["q"],(function(t,e){var n=t.commit;return new Promise((function(t,r){at.post("users",{user:e}).then((function(e){var r=e.data;n(_t,r.user),t(r)})).catch((function(t){var e=t.response;r(e.data)}))}))})),J)},Et={username:"jake",bio:"I work at statefarm",image:"https://static.productionready.io/images/smiley-cyrus.jpg",following:!1},It={namepaced:!0,state:{selectedProfile:Et},mutations:Object(X["a"])({},At,(function(t,e){var n=e.profile;t.selectedProfile=n})),actions:Object(X["a"])({},d["k"],(function(t,e){var n=t.commit;return n(vt),pt.getProfile(e).then((function(t){var e=t.data;n(At,e)})).catch((function(t){throw new Error(t)})).finally((function(){n(bt)}))}))},St={get:function(t){var e=t+"/comments";return at.get("articles",e)},post:function(t,e){var n=t+"/comments";return at.setToken(mt.getToken()),at.post("articles/"+n,{comment:e})},delete:function(t,e){var n=t+"/comments";return at.setToken(mt.getToken()),at.delete("articles/"+n,e)}},Rt={namepaced:!0,state:{selected:null,myArticles:[],myArticlesCount:0,favoritedArticles:[],favoritedCount:0,comments:[]},mutations:(Y={},Object(X["a"])(Y,yt,(function(t,e){var n=e.article;t.selected=n})),Object(X["a"])(Y,jt,(function(t,e){t.myArticles=e.articles,t.myArticlesCount=e.articlesCount})),Object(X["a"])(Y,Ot,(function(t,e){t.favoritedArticles=e.articles,t.favoritedCount=e.articlesCount})),Object(X["a"])(Y,xt,(function(t,e){var n=e.comments;t.comments=n})),Y),actions:(K={},Object(X["a"])(K,d["h"],(function(t,e){var n=t.commit;return n(vt),new Promise((function(t){ht.get(e).then((function(e){var r=e.data;n(yt,r),t(r.article)})).catch((function(t){throw new Error(t)})).finally((function(){n(bt)}))}))})),Object(X["a"])(K,d["l"],(function(t,e){var n=t.commit,r={limit:5,offset:10*(e.page-1)};return 1===e.type?r.favorited=e.user:0===e.type&&(r.author=e.user),n(vt),ht.getAll(r).then((function(t){var a=t.data;r.favorited===e.user?n(jt,a):n(Ot,a)})).catch((function(t){throw new Error(t)})).finally((function(){n(bt)}))})),Object(X["a"])(K,d["j"],(function(t,e){var n=t.commit;return n(vt),St.get(e).then((function(t){var e=t.data;n(xt,e)})).catch((function(t){throw new Error(t)})).finally((function(){n(bt)}))})),Object(X["a"])(K,d["c"],(function(t,e){var n=t.commit;return n(vt),new Promise((function(t){ht.update(e.routeParam,e.payload).then((function(e){var n=e.data;t(n)})).catch((function(t){throw new Error(t)})).finally((function(){n(bt)}))}))})),Object(X["a"])(K,d["a"],(function(t,e){var n=t.commit;return n(vt),new Promise((function(t){ht.post(e.payload).then((function(e){var n=e.data;t(n)})).catch((function(t){throw new Error(t)})).finally((function(){n(bt)}))}))})),Object(X["a"])(K,d["b"],(function(t,e){var n=t.commit;return n(vt),new Promise((function(t){ht.delete(e).then((function(e){var n=e.data;t(n)})).catch((function(t){throw new Error(t)})).finally((function(){n(bt)}))}))})),Object(X["a"])(K,d["d"],(function(t,e){var n=t.commit;return n(vt),new Promise((function(t){St.post(e.slug,e.payload).then((function(e){var n=e.data;t(n)})).catch((function(t){throw new Error(t)})).finally((function(){n(bt)}))}))})),Object(X["a"])(K,d["e"],(function(t,e){var n=t.commit;return n(vt),new Promise((function(t){St.delete(e.slug,e.commentId).then((function(e){var n=e.data;t(n)})).catch((function(t){throw new Error(t)})).finally((function(){n(bt)}))}))})),Object(X["a"])(K,d["f"],(function(t,e){var n=t.commit;return n(vt),new Promise((function(t,r){ht.setFavorite(e,null).then((function(e){var r=e.data;n(yt,r),t(r.article)})).catch((function(t){r(t)})).finally((function(){n(bt)}))}))})),Object(X["a"])(K,d["g"],(function(t,e){var n=t.commit;return n(vt),new Promise((function(t,r){ht.removeFavorite(e).then((function(e){var r=e.data;n(yt,r),t(r.article)})).catch((function(t){r(t)})).finally((function(){n(bt)}))}))})),K)};r["default"].use(Z["a"]);var Nt=new Z["a"].Store({state:{isLoading:!1},mutations:(Q={},Object(X["a"])(Q,vt,(function(t){t.isLoading=!0})),Object(X["a"])(Q,bt,(function(t){t.isLoading=!1})),Q),actions:(V={},Object(X["a"])(V,d["r"],(function(t){var e=t.commit;e(vt)})),Object(X["a"])(V,d["n"],(function(t){var e=t.commit;e(bt)})),V),modules:{home:Ft,auth:$t,shared:It,article:Rt}});r["default"].config.productionTip=!1,new r["default"]({router:W,store:Nt,render:function(t){return t(x)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("e332"),a=n.n(r);a.a},7816:function(t,e,n){},7921:function(t,e,n){"use strict";n.d(e,"r",(function(){return r})),n.d(e,"n",(function(){return a})),n.d(e,"m",(function(){return i})),n.d(e,"o",(function(){return o})),n.d(e,"p",(function(){return c})),n.d(e,"q",(function(){return s})),n.d(e,"h",(function(){return u})),n.d(e,"i",(function(){return l})),n.d(e,"k",(function(){return f})),n.d(e,"l",(function(){return d})),n.d(e,"j",(function(){return m})),n.d(e,"a",(function(){return h})),n.d(e,"c",(function(){return p})),n.d(e,"b",(function(){return g})),n.d(e,"d",(function(){return v})),n.d(e,"e",(function(){return b})),n.d(e,"s",(function(){return w})),n.d(e,"f",(function(){return k})),n.d(e,"g",(function(){return y}));var r="showLoader",a="hideLoader",i="getTags",o="login",c="logout",s="register",u="fetchArticle",l="fetchArticles",f="getProfile",d="getProfileArticles",m="getComments",h="createArticle",p="updateArticle",g="deleteArticle",v="addComment",b="removeComment",w="updateHomeData",k="setFavorite",y="removeFavorite"},"7a98":function(t,e,n){},b565:function(t,e,n){},cac6:function(t,e,n){"use strict";var r=n("7816"),a=n.n(r);a.a},d4bc:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-card-container"},[n("div",{staticClass:"card",on:{click:t.selectArticle}},[n("div",{staticClass:"card-header"},[n("div",{staticClass:"left"},[n("div",{staticClass:"left-content"},[n("div",{staticClass:"header-image"},[n("img",{attrs:{src:t.selectedArticle.author.image,alt:"author image",height:"100%",width:"100%"}})]),n("div",{staticClass:"header-text"},[n("h5",{staticClass:"card-title"},[t._v(t._s(t.selectedArticle.author.username))]),n("h6",{staticClass:"card-subtitle text-muted mb-2"},[t._v(t._s(t.selectedArticle.createdAt))])])])]),n("div",{staticClass:"right"},[t.article.author.username!==t.user?n("div",{staticClass:"favor-box",class:{favorite:t.selectedArticle.favorited,unfavorite:!t.selectedArticle.favorited},on:{click:function(e){return t.toggleFavorite(e)}}},[n("font-awesome-icon",{attrs:{icon:"heart"}}),n("span",[t._v(t._s(t.selectedArticle.favoritesCount))])],1):t._e()]),n("div",{staticClass:"clear"})]),n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-text article-title"},[t._v(t._s(t.selectedArticle.title))]),n("p",{staticClass:"card-text article-desc"},[t._v(t._s(t.selectedArticle.description))])]),n("div",{staticClass:"card-footer"},[t._m(0),n("div",{staticClass:"right"},[n("ul",{staticClass:"tag-items"},t._l(t.selectedArticle.tagList,(function(e){return n("li",{key:e,staticClass:"tag-item"},[t._v(t._s(e))])})),0)]),n("div",{staticClass:"clear"})])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left"},[n("p",{staticClass:"footer-text"},[t._v("Read more...")])])}],i=n("7921"),o={name:"article-card",data:function(){return{actions:{type:Boolean,required:!1,default:!1},selectedArticle:this.article,user:this.$store.state.auth.username}},props:{article:{type:Object,required:!0},canModify:{type:Boolean,required:!1}},methods:{toggleFavorite:function(t){var e=this;if(t.stopPropagation(),this.isAuthenticated){if(this.article.author.username!==this.user){var n=this.article.favorited?i["g"]:i["f"];this.$store.dispatch(n,this.article.slug).then((function(t){t&&(e.selectedArticle=t)}))}}else this.$router.push({name:"login"})},selectArticle:function(){this.$router.push({name:"article",params:{articleDesc:this.article.slug}})}},computed:{isAuthenticated:function(){return this.$store.state.auth.isAuthenticated||!1}}},c=o,s=(n("e5f5"),n("2877")),u=Object(s["a"])(c,r,a,!1,null,"bc2d5eaa",null);e["a"]=u.exports},dee4:function(t,e,n){"use strict";var r=n("04f7"),a=n.n(r);a.a},e332:function(t,e,n){},e5f5:function(t,e,n){"use strict";var r=n("3de9"),a=n.n(r);a.a}});
//# sourceMappingURL=app.41f6f89b.js.map