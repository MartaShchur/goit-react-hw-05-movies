(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961],{7961:function(e,n,t){"use strict";t.r(n);var r=t(9439),a=t(2791),i=t(7689),c=t(1087),s=t(5975),u=t(9251),o=t(3640),l=t(184);n.default=function(){var e,n,t=(0,i.UO)().movieId,p=(0,a.useState)(null),f=(0,r.Z)(p,2),d=f[0],h=f[1],v=(0,a.useState)(!1),x=(0,r.Z)(v,2),g=x[0],m=x[1],j=(0,i.TH)();if((0,a.useEffect)((function(){m(!0),(0,s.Y5)(t).then((function(e){h(e)})).catch((function(e){console.log(e)})).finally((function(){m(!1)}))}),[t]),d){var w=d||{},k=w.title,b=w.release_date,y=w.popularity,_=w.overview,Z=w.genres,U=w.poster_path,L=w.original_title;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.rU,{to:null!==(e=null===(n=j.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",children:(0,l.jsx)(o.Button,{type:"button",children:"Go back"})}),g&&(0,l.jsx)(u.Z,{}),d&&(0,l.jsxs)(o.Container,{children:[(0,l.jsx)("img",{width:"300px",src:U?"https://image.tmdb.org/t/p/w500".concat(U):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:L}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("h1",{children:[k," (",b.slice(0,4),")"]}),(0,l.jsxs)("p",{children:["User score: ",y]}),(0,l.jsx)("h2",{children:"Overview"}),(0,l.jsx)("p",{children:_}),(0,l.jsx)("h2",{children:"Genres"}),(0,l.jsx)(o.List,{children:Z.map((function(e){return(0,l.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,l.jsx)("hr",{}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{children:"Additional information"}),(0,l.jsxs)(o.ListInfo,{children:[(0,l.jsx)("li",{children:(0,l.jsx)(o.LinkInfo,{to:"cast",children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(o.LinkInfo,{to:"reviews",children:"Reviews"})})]}),(0,l.jsx)("hr",{}),(0,l.jsx)(i.j3,{})]})]})}}},3640:function(){},5975:function(e,n,t){"use strict";t.d(n,{Bt:function(){return f},Ml:function(){return o},Tg:function(){return u},Y5:function(){return l},wL:function(){return p}});var r=t(5861),a=t(4687),i=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="3c075b4f44a375f4e9b142042cd51419",u=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(s));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=961.d6b084c0.chunk.js.map