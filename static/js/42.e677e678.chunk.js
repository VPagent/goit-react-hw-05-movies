"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[42],{2975:function(e,t,r){r.d(t,{Z:function(){return c}});var n={nothingBox:"nothing_nothingBox__7OqEB"},a=r(184),c=function(e){var t=e.text;return(0,a.jsx)("div",{className:n.nothingBox,children:(0,a.jsxs)("p",{className:n.errorText,children:["We dont have any ",t," for this movie"]})})}},9157:function(e,t,r){r.d(t,{Bt:function(){return f},FD:function(){return l},If:function(){return i},Ru:function(){return p},y:function(){return h}});var n=r(5861),a=r(7757),c=r.n(a),u=r(4569),o=r.n(u),s="19058b9145b7ba2d69dc054625243cc3",i=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s),e.prev=1,e.next=4,o().get(t);case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:e.prev=8,e.t0=e.catch(1),console.log("Error");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"),e.prev=1,e.next=4,o().get(r);case 4:return n=e.sent,e.abrupt("return",n.data.results);case 8:e.prev=8,e.t0=e.catch(1),console.log("Error");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"),e.prev=1,e.next=4,o().get(r);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),console.log("Error");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"),e.prev=1,e.next=4,o().get(r);case 4:return n=e.sent,e.abrupt("return",n.data.cast);case 8:e.prev=8,e.t0=e.catch(1),console.log("Error");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"),e.prev=1,e.next=4,o().get(r);case 4:return n=e.sent,e.abrupt("return",n.data.results);case 8:e.prev=8,e.t0=e.catch(1),console.log("Error");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},42:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(885),a=r(2975),c=r(9157),u=r(2791),o=r(470),s="reviewsPage_list__71Rri",i="reviewsPage_item__H4Lct",p=r(184),l=function(){var e=(0,u.useState)({}),t=(0,n.Z)(e,2),r=t[0],l=t[1],h=(0,o.UO)().filmId;if((0,u.useEffect)((function(){(0,c.Bt)(h).then(l)}),[h]),r)return(0,p.jsx)(p.Fragment,{children:r.length>0?(0,p.jsx)("ul",{className:s,children:r.map((function(e){return(0,p.jsxs)("li",{className:i,children:[(0,p.jsx)("p",{children:(0,p.jsx)("b",{children:"Author: ".concat(e.author)})}),(0,p.jsx)("p",{children:e.content})]},e.author)}))}):(0,p.jsx)(a.Z,{text:"reviews"})})}}}]);
//# sourceMappingURL=42.e677e678.chunk.js.map