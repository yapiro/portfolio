(this.webpackJsonpwork=this.webpackJsonpwork||[]).push([[0],{46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(0),a=c(16),s=c.n(a),r=(c(46),c(21)),j=c(3),l=(c(47),function(e){var t=e.onClickHandler;return Object(n.jsx)("div",{className:"Button-container",onClick:t,children:e.children})}),d=(c(48),c.p+"static/media/wisky.c9389635.jpg"),o=c.p+"static/media/journey.fdcc896f.jpg",b=c.p+"static/media/muscle.1409a981.jpg",h=function(e){var t=e.history;return Object(n.jsxs)("div",{className:"Home-container",children:[Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("h1",{children:"\u65c5ingLIFE"}),Object(n.jsx)("p",{children:"\u81ea\u5206\u306e\u4f53\u9a13\u3092\u8a18\u9332\u306b\u6b8b\u3059"})]}),Object(n.jsxs)("div",{className:"wisky",children:[Object(n.jsx)("h2",{children:"\u30a6\u30a4\u30b9\u30ad\u30fc"}),Object(n.jsx)("img",{className:"wisky-image",src:d,alt:""}),Object(n.jsx)("p",{children:"aaaaaaaaaaaaaaaaa"}),Object(n.jsx)(l,{className:"wisky-button",onClickHandler:function(){t.push("/tweet")},children:"\u8a18\u9332\u3059\u308b"})]}),Object(n.jsxs)("div",{className:"journey",children:[Object(n.jsx)("h2",{children:"\u65c5"}),Object(n.jsx)("img",{className:"journey-image",src:o,alt:""}),Object(n.jsx)("p",{children:"bbbbbbbbbbb"}),Object(n.jsx)(l,{onClickHandler:function(){t.push("/tweet")},children:"\u8a18\u9332\u3059\u308b"})]}),Object(n.jsxs)("div",{className:"muscle",children:[Object(n.jsx)("h2",{children:"\u7b4b\u30c8\u30ec"}),Object(n.jsx)("img",{className:"muscle-image",src:b,alt:""}),Object(n.jsx)("p",{children:"ccccccccccccc"}),Object(n.jsx)(l,{onClickHandler:function(){t.push("/tweet")},children:"\u8a18\u9332\u3059\u308b"})]})]})},u=c(39),O=c(11),x="ADD_TWEET",m="DELETE_TWEET",p=(c(53),c(14)),g="SHOW_ALL",f=(c(54),c(25)),v=c.n(f),w=c(35),y=c(19),k=c(20),N=c(40),C=c(38),T=c(26),E=c.n(T),_=function(e,t){for(var c=atob(e.replace(/^.*,/,"")),n=new Uint8Array(c.length),i=0;i<c.length;i+=1)n[i]=c.charCodeAt(i);try{return new Blob([n.buffer],{type:"image/jpg"})}catch(a){return t(),!1}},H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return new Promise((function(c,n){var i=e.target.files[0];E.a.parseMetaData(i,(function(e){var a={maxWidth:t,canvas:!0};e.exif&&(a.orientation=e.exif.get("Orientation")),E()(i,(function(e){var t=e.toDataURL("image/jpg"),i=_(t,n);c({imageFile:i,imageUri:t})}),a)}))}))},U=function(e){Object(N.a)(c,e);var t=Object(C.a)(c);function c(){var e;Object(y.a)(this,c);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={imageUri:null,imageFile:null},e}return Object(k.a)(c,[{key:"imageChangeHandler",value:function(){var e=Object(w.a)(v.a.mark((function e(t){var c,n,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(t);case 2:c=e.sent,n=c.imageFile,i=c.imageUri,this.setState({imageFile:n,imageUri:i});case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.imageUri;return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("input",{type:"file",onChange:function(t){return e.imageChangeHandler(t)}})}),t&&Object(n.jsx)("img",{src:t,alt:"resizedImage"})]})}}]),c}(i.Component),A=function(e,t){return Object(n.jsx)("button",{onClick:function(){e.deleteTweet(t.id)},children:"\ud83d\uddd1"})},L={deleteTweet:function(e){return{type:m,id:e}}},D=Object(O.b)((function(e){return{tweets:(e.show,Object(p.a)(e.tweets))}}),L)((function(e){var t=e.tweets.map((function(t,c){return Object(n.jsx)("li",{className:"TweetList-item",children:Object(n.jsxs)("p",{children:[Object(n.jsx)("p",{className:"text",children:t.text}),Object(n.jsx)(U,{}),Object(n.jsx)("p",{className:"gabbage",children:A(e,t)})]})},c)}));return Object(n.jsx)("ul",{className:"list",children:t})})),F=c.p+"static/media/wiskyimg.7fc4e9af.jpg",W=c.p+"static/media/wisky2.a6ae9e32.jpg",B=c.p+"static/media/journeyimg.05d02c93.jpg",I=c.p+"static/media/meatimg.1e0c42fd.jpg",S={addTweet:function(e){return{type:x,text:e}}},J=Object(O.b)(null,S)((function(e){var t=Object(i.useState)(""),c=Object(u.a)(t,2),a=c[0],s=c[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"center",children:Object(n.jsx)("h1",{children:"\u4f53\u9a13\u8a18\u9332"})}),Object(n.jsxs)("div",{className:"tweet-container",children:[Object(n.jsxs)("div",{className:"left-container",children:[Object(n.jsx)("h3",{children:"\u6700\u9ad8\u306e\u545f\u304d\u6642\u9593"}),Object(n.jsxs)("div",{className:"osake",children:[Object(n.jsx)("img",{src:F,alt:""}),Object(n.jsx)("h5",{children:"chivas-regal"}),Object(n.jsxs)("p",{children:["\u82b3\u9187\u3067\u30b9\u30e2\u30fc\u30ad\u30fc\u306a\u5473\u308f\u3044\u304c\u30af\u30bb\u306b\u306a\u308b\u4e00\u54c1\u3067\u3059\u3002",Object(n.jsx)("br",{}),"\xa52500"]})]}),Object(n.jsxs)("div",{className:"osake",children:[Object(n.jsx)("img",{src:W,alt:""}),Object(n.jsx)("h5",{children:"macallan"}),Object(n.jsxs)("p",{children:["\u82b3\u9187\u3067\u30b9\u30e2\u30fc\u30ad\u30fc\u306a\u5473\u308f\u3044\u304c\u30af\u30bb\u306b\u306a\u308b\u4e00\u54c1\u3067\u3059\u3002",Object(n.jsx)("br",{}),"\xa52500"]})]}),Object(n.jsxs)("div",{className:"trip",children:[Object(n.jsx)("img",{src:B,alt:""}),Object(n.jsx)("h5",{children:"paris"}),Object(n.jsx)("p",{children:"\u30d5\u30e9\u30f3\u30b9\u306b\u306f\u6771\u4eac\u30bf\u30ef\u30fc\u307f\u305f\u3044\u306a\u5854\u304c\u3042\u3063\u3066\u3001\u307f\u3093\u306a\u30a8\u30c3\u30d5\u30a7\u30eb\u5854\u3068\u547c\u3093\u3067\u3044\u305f\u3088\uff01"})]}),Object(n.jsxs)("div",{className:"meat",children:[Object(n.jsx)("img",{src:I,alt:""}),Object(n.jsx)("h5",{children:"proteins"}),Object(n.jsx)("p",{children:"\u8179\u7b4b\u30fb\u8155\u7acb\u3066\u30fb\u30b9\u30af\u30ef\u30c3\u30c8\u3092\u3057\u305f\u5f8c\u306e\u30bf\u30f3\u30d1\u30af\u8cea\u306f\u305f\u307e\u3089\u306a\u3044\u305c\u301c\uff01"})]})]}),Object(n.jsxs)("div",{className:"right-container",children:[Object(n.jsx)("input",{className:"form-input",value:a,type:"text",placeholder:"(\u4f8b)\u30a6\u30a4\u30b9\u30ad\u30fc\uff1a\u767d\u5dde\u98f2\u3093\u3060\u301c\uff01\u7f8e\u5473\u3057\u304b\u3063\u305f\uff01",onChange:function(e){s(e.target.value)}}),Object(n.jsx)("button",{className:"button-textarea",onClick:function(){a&&(e.addTweet(a),s(""))},children:"\u6295\u7a3f\u3059\u308b"}),Object(n.jsx)(D,{})]})]}),Object(n.jsxs)("div",{className:"center",children:[Object(n.jsx)("hr",{}),Object(n.jsx)(r.b,{to:"/",children:"\u8a18\u4e8b\u4e00\u89a7\u306b\u623b\u308b"})]})]})})),z=c(36),M=c(8),P=1,R=function(){function e(t){Object(y.a)(this,e),this._text=t,this._id=P++,this._completed=!1}return Object(k.a)(e,[{key:"text",get:function(){return this._text}},{key:"id",get:function(){return this._id}},{key:"hasCompleted",get:function(){return this._completed}}]),e}(),q=Object(M.b)({tweets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:var c=new R(t.text);return[].concat(Object(p.a)(e),[c]);case m:return e.filter((function(e,c){return t.id!==e.id}));default:return e}},show:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return g;default:return e}}}),G=c(29),K=c(37),Q={key:"root",storage:c.n(K).a,whitelist:["tweets","show"]},V=Object(G.a)(Q,q),X=Object(M.c)(V),Y=Object(G.b)(X),Z=X;var $=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(z.a,{loading:null,persistor:Y,children:Object(n.jsxs)(r.a,{children:[Object(n.jsx)(j.a,{path:"/",exact:!0,component:h}),Object(n.jsx)(j.a,{path:"/tweet",exact:!0,component:J})]})})})};s.a.render(Object(n.jsx)(O.a,{store:Z,children:Object(n.jsx)($,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.b0897dd0.chunk.js.map