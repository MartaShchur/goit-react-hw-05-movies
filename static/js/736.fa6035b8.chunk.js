"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{9736:function(t,n,e){e.r(n),e.d(n,{default:function(){return v}});var r,a,c=e(9439),u=e(7689),i=e(2791),o=e(5975),s=e(168),p=e(5706),f=p.Z.ul(r||(r=(0,s.Z)(["\n  list-style-type: none;\n"]))),l=p.Z.p(a||(a=(0,s.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),d=e(9251),h=e(184),v=function(){var t=(0,u.UO)(),n=(0,c.Z)(t,1)[0],e=(0,i.useState)([]),r=(0,c.Z)(e,2),a=r[0],s=r[1],p=(0,i.useState)(!1),v=(0,c.Z)(p,2),g=v[0],m=v[1];return(0,i.useEffect)((function(){m(!0),(0,o.wL)(n).then((function(t){s(t)})).catch((function(t){console.log(t)})).finally((function(){m(!1)}))}),[n]),(0,h.jsxs)("div",{children:[g&&(0,h.jsx)(d.Z,{}),(0,h.jsx)(f,{children:a.map((function(t){var n=t.id,e=t.profile_path,r=t.original_name,a=t.name,c=t.character;return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{width:"200px",src:e?"https://image.tmdb.org/t/p/w500".concat(e):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:r}),(0,h.jsx)(l,{children:a}),(0,h.jsxs)(l,{children:["Character: ",c]})]},n)}))})]})}},5975:function(t,n,e){e.d(n,{Bt:function(){return l},Ml:function(){return s},Tg:function(){return o},Y5:function(){return p},wL:function(){return f}});var r=e(5861),a=e(4687),c=e.n(a),u=e(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="3c075b4f44a375f4e9b142042cd51419",o=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.fa6035b8.chunk.js.map