(this["webpackJsonpjoke-generator"]=this["webpackJsonpjoke-generator"]||[]).push([[0],{12:function(e,n,t){},20:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),o=t(8),i=t.n(o),a=(t(20),t(12),t(13)),s=t(6),u=Object(a.a)({reducerPath:"jokesApi",baseQuery:Object(s.d)({baseUrl:" https://v2.jokeapi.dev/joke/"}),endpoints:function(e){return{getJoke:e.query({query:function(){return"any"}}),getFiveRandomJokesByCategory:e.query({query:function(e){return"".concat(e,"?type=single&amount=5")}})}}}),d=u.useGetFiveRandomJokesByCategoryQuery,j=t(3),l=function(e){var n,t=e.category,r=d(t),c=r.data,o=r.error,i=r.isLoading;return Object(j.jsxs)("div",{className:"card rgb",children:[Object(j.jsx)("h1",{children:"".concat(t," jokes")}),o?Object(j.jsx)(j.Fragment,{children:"Oh no, there was an error"}):i?Object(j.jsx)(j.Fragment,{children:"Loading..."}):c?Object(j.jsx)("div",{children:null===c||void 0===c||null===(n=c.jokes)||void 0===n?void 0:n.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("li",{children:e.joke}),Object(j.jsx)("br",{})]},e.id)}))}):null]})},b=["Programming","Dark","Miscellaneous","Pun"],g=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("div",{className:"container",children:b.map((function(e){return Object(j.jsx)(l,{category:e},e)}))})})},h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,29)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),o(e),i(e)}))},O=t(14),m=t(1),p=t(15),v=Object(m.configureStore)({reducer:Object(O.a)({},u.reducerPath,u.reducer),middleware:function(e){return e().concat(u.middleware)}});Object(p.setupListeners)(v.dispatch);var f=t(4);i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f.a,{store:v,children:Object(j.jsx)(g,{})})}),document.getElementById("root")),h()}},[[28,1,2]]]);
//# sourceMappingURL=main.5bb78f36.chunk.js.map