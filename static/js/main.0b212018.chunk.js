(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),i=a(4),r=a.n(i),s=(a(9),a(2)),o=(a(10),a.p+"static/media/pomodoro.f308c098.png"),l=a(0),m=function(e){var t=e.title,a=e.changeTime,c=e.type,n=e.time,i=e.formatTime;return Object(l.jsxs)("div",{className:"length-container",children:[Object(l.jsx)("div",{id:"".concat(c,"-label"),children:t}),Object(l.jsxs)("div",{className:"time-boxes",children:[Object(l.jsx)("button",{id:"".concat(c,"-decrement"),className:"btn-small red darken-1",onClick:function(){return a(c,-60)},children:Object(l.jsx)("i",{className:"material-icons",children:"arrow_downward"})}),Object(l.jsx)("div",{id:"".concat(c,"-length"),children:i(n)}),Object(l.jsx)("button",{id:"".concat(c,"-increment"),className:"btn-small red darken-1",onClick:function(){return a(c,60)},children:Object(l.jsx)("i",{className:"material-icons",children:"arrow_upward"})})]})]})},d=function(){var e=Object(c.useState)(new Audio("https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav")),t=Object(s.a)(e,2),a=t[0],n=(t[1],Object(c.useState)(1500)),i=Object(s.a)(n,2),r=i[0],d=i[1],j=Object(c.useState)(300),b=Object(s.a)(j,2),u=b[0],O=b[1],h=Object(c.useState)(1500),p=Object(s.a)(h,2),f=p[0],g=p[1],v=Object(c.useState)(!1),x=Object(s.a)(v,2),N=x[0],S=x[1],k=Object(c.useState)(!1),w=Object(s.a)(k,2),T=w[0],C=w[1];Object(c.useEffect)((function(){0===r&&(a.play(),T?(d(f),C(!1)):(d(u),C(!0)))}),[r]);var y=function(e){var t=Math.floor(e/60)+"",a=e%60+"";return"".concat(t.padStart(2,"0"),":").concat(a.padStart(2,"0"))},I=function(e,t){if("break"===e){if(u<=60&&t<0)return;if(u>=3600)return;O(u+t)}else{if(f<=60&&t<0)return;if(f>=3600)return;g(f+t),N||d(f+t)}};return Object(l.jsxs)("div",{className:"page-wrapper",children:[Object(l.jsx)("h1",{className:"title",children:"Pomodoro Clock"}),Object(l.jsx)("img",{src:o,alt:"Pomodoro Timer",className:"image responsive-img"}),Object(l.jsx)(m,{title:"Break Length",changeTime:I,type:"break",time:u,formatTime:y}),Object(l.jsxs)("div",{className:"timer-container",children:[Object(l.jsx)("div",{className:"break-message",children:T?"Break time!":"Work time!"}),Object(l.jsx)("div",{id:"timer-label",children:"Time left:"}),Object(l.jsx)("div",{id:"time-left",className:"timer",children:y(r)}),Object(l.jsx)("button",{id:"start_stop",className:"play-pause btn-small red darken-1",onClick:function(){(new Date).getTime();var e=(new Date).getTime()+1e3;if(!N){var t=setInterval((function(){(new Date).getTime()>e&&(d((function(e){return e-1})),e+=1e3)}),30);localStorage.clear(),localStorage.setItem("interval-id",t)}N&&clearInterval(JSON.parse(localStorage.getItem("interval-id")||"{}")),S(!N)},children:N?Object(l.jsx)("i",{className:"material-icons",children:"pause"}):Object(l.jsx)("i",{className:"material-icons",children:"play_arrow"})}),Object(l.jsx)("button",{id:"reset",className:"play-pause btn-small red darken-1",onClick:function(){a.pause(),a.currentTime=0,d(1500),O(300),g(1500),S(!1),clearInterval(JSON.parse(localStorage.getItem("interval-id")||"{}"))},children:Object(l.jsx)("i",{className:"material-icons",children:"autorenew"})})]}),Object(l.jsx)(m,{title:"Session Length",changeTime:I,type:"session",time:f,formatTime:y})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.0b212018.chunk.js.map