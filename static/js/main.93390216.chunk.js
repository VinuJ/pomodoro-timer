(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),i=a.n(r),s=(a(9),a(2)),o=(a(10),a.p+"static/media/pomodoro.f308c098.png"),l=a(0),m=function(e){var t=e.title,a=e.changeTime,c=e.type,n=e.time,r=e.formatTime;return Object(l.jsxs)("div",{className:"length-container",children:[Object(l.jsx)("div",{children:t}),Object(l.jsxs)("div",{className:"time-boxes",children:[Object(l.jsx)("button",{className:"btn-small red darken-1",onClick:function(){return a(c,-60)},children:Object(l.jsx)("i",{className:"material-icons",children:"arrow_downward"})}),Object(l.jsx)("div",{children:r(n)}),Object(l.jsx)("button",{className:"btn-small red darken-1",onClick:function(){return a(c,60)},children:Object(l.jsx)("i",{className:"material-icons",children:"arrow_upward"})})]})]})},d=function(){var e=Object(c.useState)(10),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(10),i=Object(s.a)(r,2),d=i[0],j=i[1],b=Object(c.useState)(12),u=Object(s.a)(b,2),O=u[0],h=u[1],p=Object(c.useState)(!1),f=Object(s.a)(p,2),g=f[0],x=f[1],v=Object(c.useState)(!1),N=Object(s.a)(v,2),S=N[0],w=N[1],k=new Audio("https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav");Object(c.useEffect)((function(){0===a&&(k.play(),S?(n(O),w(!1)):(n(d),w(!0)))}));var T=function(e){var t=Math.floor(e/60)+"",a=e%60+"";return"".concat(t.padStart(2,"0"),":").concat(a.padStart(2,"0"))},C=function(e,t){if("break"===e){if(d<=60&&t<0)return;j(d+t)}else{if(O<=60&&t<0)return;h(O+t),g||n(O+t)}};return Object(l.jsxs)("div",{className:"page-wrapper",children:[Object(l.jsx)("h1",{className:"title",children:"Pomodoro Clock"}),Object(l.jsx)("img",{src:o,alt:"Pomodoro Timer",className:"image"}),Object(l.jsx)(m,{title:"Break Length",changeTime:C,type:"break",time:d,formatTime:T}),Object(l.jsxs)("div",{className:"timer-container",children:[Object(l.jsx)("div",{className:"timer",children:T(a)}),Object(l.jsx)("button",{className:"play-pause btn-small red darken-1",onClick:function(){(new Date).getTime();var e=(new Date).getTime()+1e3;if(!g){var t=setInterval((function(){(new Date).getTime()>e&&(n((function(e){return e-1})),e+=1e3)}),30);localStorage.clear(),localStorage.setItem("interval-id",t)}g&&clearInterval(JSON.parse(localStorage.getItem("interval-id")||"{}")),x(!g)},children:g?Object(l.jsx)("i",{className:"material-icons",children:"pause"}):Object(l.jsx)("i",{className:"material-icons",children:"play_arrow"})}),Object(l.jsx)("button",{className:"play-pause btn-small red darken-1",onClick:function(){n(1500),j(300),h(1500),x(!1),clearInterval(JSON.parse(localStorage.getItem("interval-id")||"{}"))},children:Object(l.jsx)("i",{className:"material-icons",children:"autorenew"})})]}),Object(l.jsx)(m,{title:"Session Length",changeTime:C,type:"session",time:O,formatTime:T})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.93390216.chunk.js.map