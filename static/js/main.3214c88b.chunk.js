(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{23:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n(6),s=n.n(i),a=(n(23),n(17)),l=n(13),o=n(4),r=n(15),j=n.n(r),d=n(8),b=n.n(d),u=n(1),O=function(t){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"todo_style",children:[Object(u.jsxs)("div",{className:"iconhold",children:[Object(u.jsx)("span",{onClick:function(){t.onEdit(t.id_)},children:Object(u.jsx)(b.a,{className:"fa-times edit"})}),Object(u.jsx)("span",{onClick:function(){t.onSelect(t.id_)},children:Object(u.jsx)(j.a,{className:"fa-times delete"})})]}),Object(u.jsxs)("li",{children:[" ",t.text," "]})]})})},f=n(16),m=n.n(f),x=function(){var t=Object(c.useState)(""),e=Object(o.a)(t,2),n=e[0],i=e[1],s=Object(c.useState)(function(){var t=localStorage.getItem("list");return t?JSON.parse(t):[]}()),r=Object(o.a)(s,2),j=r[0],d=r[1],f=Object(c.useState)(!0),x=Object(o.a)(f,2),h=x[0],p=x[1],v=Object(c.useState)(null),g=Object(o.a)(v,2),N=g[0],S=g[1],k=function(){if(n)if(n&&!h)d(j.map((function(t){return t.id===N?Object(l.a)(Object(l.a)({},t),{},{content:n}):t}))),p(!0),i(""),S(null);else{var t={id:(new Date).getTime().toString(),content:n};d([].concat(Object(a.a)(j),[t])),i("")}else alert("Write something!")},_=function(t){d((function(e){return e.filter((function(e){return e.id!==t}))}))},C=function(t){var e=j.find((function(e){return e.id===t}));p(!1),i(e.content),S(t)};return Object(c.useEffect)((function(){localStorage.setItem("list",JSON.stringify(j))}),[j]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"main_div",children:Object(u.jsxs)("div",{className:"center_div",children:[Object(u.jsx)("br",{}),Object(u.jsx)("h1",{children:"To Do List \ud83d\udcd3"}),Object(u.jsx)("input",{type:"text",placeholder:"Add an Item \u270d\ufe0f",onChange:function(t){i(t.target.value)},value:n}),h?Object(u.jsx)("button",{className:"btn pl",onClick:k,children:Object(u.jsx)(m.a,{className:"matrialbtn"})}):Object(u.jsx)("button",{className:"btn ed",onClick:k,children:Object(u.jsx)(b.a,{className:"matrialbtn "})}),Object(u.jsx)("ol",{children:j.map((function(t){return Object(u.jsx)(O,{text:t.content,id_:t.id,onSelect:_,onEdit:C},t.id)}))})]})})})};s.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.3214c88b.chunk.js.map