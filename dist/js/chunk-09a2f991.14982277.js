(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09a2f991"],{6346:function(t,e,r){"use strict";var i=r("eb7b"),a=r.n(i);a.a},c66d:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"profile-page"},[r("HeadingBar",{attrs:{backColor:"khaki"}}),r("div",{staticClass:"container profile-container"},[r("div",{staticClass:"img-contain"},[r("img",{attrs:{src:t.profile.image,alt:"your image",height:"100%",width:"100%"}})]),r("h1",[t._v(t._s(t.profile.username))]),r("div",{staticClass:"content"},[r("b-tabs",{attrs:{pills:"",card:""},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[r("b-tab",{attrs:{title:"My Articles"},on:{click:function(e){return t.selectArticleCategory(0)}}},[r("b-card-text",[t._l(t.myArticles,(function(t){return[r("ArticleCard",{key:t.slug,attrs:{article:t}})]})),t.myArticles&&0===t.myArticles.length?[r("h6",[t._v("No articles are here... yet.")])]:t._e()],2)],1),r("b-tab",{attrs:{title:"Favorited Articles"},on:{click:function(e){return t.selectArticleCategory(1)}}},[r("b-card-text",[t._l(t.favorited,(function(t){return[r("ArticleCard",{key:t.slug,attrs:{article:t}})]})),t.favorited&&0===t.favorited.length?[r("h6",[t._v("No articles are here... yet.")])]:t._e()],2)],1)],1)],1)])],1)},a=[],s=r("4529"),c=r("d4bc"),n=r("7921"),l={data:function(){return{tabIndex:0,page:1,user:this.$route.params.user}},components:{HeadingBar:s["a"],ArticleCard:c["a"]},computed:{profile:function(){return this.$store.state.shared.selectedProfile},myArticles:function(){return this.$store.state.article.myArticles||[]},favorited:function(){return this.$store.state.article.favoritedArticles||[]}},created:function(){this.$store.state.auth.isAuthenticated?(this.$store.dispatch(n["k"],this.user),this.selectArticleCategory(0)):this.$router.push({name:"login"})},methods:{selectArticleCategory:function(t){this.tabIndex=t;var e={type:t,page:this.page,user:this.user};this.$store.dispatch(n["l"],e)}}},o=l,u=(r("6346"),r("2877")),d=Object(u["a"])(o,i,a,!1,null,null,null);e["default"]=d.exports},eb7b:function(t,e,r){}}]);
//# sourceMappingURL=chunk-09a2f991.14982277.js.map