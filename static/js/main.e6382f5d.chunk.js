(this["webpackJsonpdx-fe_task"]=this["webpackJsonpdx-fe_task"]||[]).push([[0],{20:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var c=n(2),r=n.n(c),a=n(12),i=n.n(a),s=(n(20),n(1)),u=n.n(s),o=n(8),j=n(6),b=n(3),d=n(5),l=n(9),h=n(0);var O=function(t){var e=t.login,n=t.contributions,c=t.avatar_url;return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("img",{src:c,alt:"avatar",width:"50",height:"50"})}),Object(h.jsxs)("li",{children:["Contributiors Githun name: ",e]}),Object(h.jsxs)("li",{children:["Contributions: ",n]})]})]})};var f=function(t){var e=t.name,n=t.description,r=t.language,a=t.pushed_at,i=t.fork,s=Object(c.useState)([]),f=Object(d.a)(s,2),p=f[0],x=f[1],g=Object(c.useState)(!1),v=Object(d.a)(g,2),m=v[0],w=v[1],k=new l.a({auth:"7769df205c3ec01fa5d07c5181d92560c51d65b2"});function C(){return(C=Object(b.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.request("GET /repos/{owner}/{repo}/contributors",{owner:"getndazn",repo:e});case 2:n=t.sent,x(n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(){w((function(t){return!t})),0===p.length&&function(){C.apply(this,arguments)}()}return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("hr",{}),Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[" Repo name: ",e]}),Object(h.jsxs)("li",{children:["Description: ",n]}),Object(h.jsxs)("li",{children:["Repo main programming language: ",r]}),Object(h.jsxs)("li",{children:["Last update: ",a.substring(0,10)]}),i?Object(h.jsx)("li",{children:"It is fork"}):null]}),Object(h.jsx)("button",{className:"button",onClick:function(){return S()},children:"See contributors"}),Object(h.jsx)("div",{children:p.length>0&&m?p.map((function(t){var e=t.id,n=Object(j.a)(t,["id"]);return Object(h.jsx)(O,Object(o.a)({},n),e)})):null})]})};var p=function(){var t=Object(c.useState)([]),e=Object(d.a)(t,2),n=e[0],r=e[1],a=new l.a({auth:"7769df205c3ec01fa5d07c5181d92560c51d65b2"});function i(){return(i=Object(b.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.request("GET /orgs/{org}/repos",{org:"getndazn"});case 2:e=t.sent,r(e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),Object(h.jsx)("div",{children:n.map((function(t){var e=t.id,n=Object(j.a)(t,["id"]);return Object(h.jsx)(f,Object(o.a)({},n),e)}))})};var x=function(){return Object(h.jsx)(p,{})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),g()}},[[28,1,2]]]);
//# sourceMappingURL=main.e6382f5d.chunk.js.map