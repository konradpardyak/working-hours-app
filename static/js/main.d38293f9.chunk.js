(this["webpackJsonpworking-hours-app"]=this["webpackJsonpworking-hours-app"]||[]).push([[0],{73:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var i,c,a,r,o,s,l,d,j,b,u,O,h,x,f,m,g,p,y,v,w,T,S,k,D,L,C=n(0),E=n.n(C),I=n(11),N=n.n(I),P=(n(73),n(7)),J=n(8),z=n(13),A=J.a.div(i||(i=Object(P.a)(["\n  flex-grow: 1;\n  border: 1px solid #bcbcbc;\n  border-radius: .5rem;\n  padding: 1rem;\n  background-color: white;\n  margin-top: 1rem;\n  text-align: center;\n"]))),M=J.a.h2(c||(c=Object(P.a)(["\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 400;\n"]))),F=J.a.h3(a||(a=Object(P.a)(["\n  font-size: 1rem;\n  font-weight: 400;\n"]))),V=J.a.div(r||(r=Object(P.a)(["\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),_=n(115),G=n(113),R=n(19),W="ADD_NEW_LOG",Y="REMOVE_LOG",B="EDIT_LOG",H=n(2),q=Object(R.b)(null,(function(e){return{addNewLog:function(t){return e(function(e){return{type:W,payload:{log:e}}}(t))}}}))((function(e){var t=e.addNewLog,n=Object(C.useState)(""),i=Object(z.a)(n,2),c=i[0],a=i[1],r=Object(C.useState)(""),o=Object(z.a)(r,2),s=o[0],l=o[1],d=Object(C.useState)(""),j=Object(z.a)(d,2),b=j[0],u=j[1];return Object(H.jsxs)(A,{children:[Object(H.jsx)(M,{children:"Add Log"}),Object(H.jsxs)("form",{children:[Object(H.jsxs)(V,{children:[Object(H.jsx)(F,{children:"Select Day"}),Object(H.jsx)(_.a,{id:"date",type:"date",InputLabelProps:{shrink:!0},onChange:function(e){return a(e.target.value)}})]}),Object(H.jsxs)(V,{children:[Object(H.jsx)(F,{children:"Start Time"}),Object(H.jsx)(_.a,{id:"time",type:"time",InputLabelProps:{shrink:!0},inputProps:{step:300},onChange:function(e){return l(e.target.value)}})]}),Object(H.jsxs)(V,{children:[Object(H.jsx)(F,{children:"End Time"}),Object(H.jsx)(_.a,{id:"time",type:"time",InputLabelProps:{shrink:!0},inputProps:{step:300},onChange:function(e){return u(e.target.value)}})]}),Object(H.jsx)(G.a,{variant:"contained",color:"primary",onClick:function(){var e=(new Date).getTime();c&&s&&b&&t({id:e,day:c,startTime:s,endTime:b})},children:"Add"})]})]})})),K=J.a.div(o||(o=Object(P.a)(["\n  width: 14.28%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  margin-bottom: .5rem;\n  height: 100px;\n"]))),Q=J.a.div(s||(s=Object(P.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 2rem;\n"]))),U=J.a.div(l||(l=Object(P.a)(["\n  display: flex;\n  align-items: flex-end;\n  width: 1.75rem;\n  height: 70px;\n"]))),X=J.a.div(d||(d=Object(P.a)(["\n  max-height: 100%;\n  height: ",";\n  width: 100%;\n  background-color: #3f51b5;\n"])),(function(e){return e.height})),Z=J.a.span(j||(j=Object(P.a)(["\n  color: #3f51b5;\n  font-size: .70rem;\n  font-weight: 800;\n"]))),$=J.a.div(b||(b=Object(P.a)(["\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  width: 2rem;\n  \n"]))),ee=function(e){var t=e.day,n=e.totalTime;return Object(H.jsx)(K,{children:n?Object(H.jsxs)(Q,{children:[Object(H.jsx)(U,{children:Object(H.jsx)(X,{height:"".concat(n/36e4,"%")})}),Object(H.jsxs)(Z,{children:[(n/36e5).toFixed(2),"h"]}),t]}):Object(H.jsx)($,{children:t})})},te=J.a.div(u||(u=Object(P.a)(["\n  width: ",";\n  height: 100px;\n  margin-bottom: .5rem;\n"])),(function(e){return e.width})),ne=n(114),ie=n(55),ce=n.n(ie),ae=n(56),re=n.n(ae),oe=J.a.div(O||(O=Object(P.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),se=J.a.div(h||(h=Object(P.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),le=Object(J.a)(M)(x||(x=Object(P.a)(["\n  margin-top: 1rem;\n  font-size: 1.25rem;\n"]))),de=J.a.div(f||(f=Object(P.a)(["\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  margin-top: .5rem;\n  border-bottom: 1px solid #bcbcbc;\n"]))),je=J.a.div(m||(m=Object(P.a)(["\n  display: flex;\n  justify-content: space-around;\n"]))),be=function(e){var t=e.monthLogs,n=e.monthNumber,i=e.yearNumber,c=e.previous,a=e.next,r=Object(C.useState)(),o=Object(z.a)(r,2),s=o[0],l=o[1],d=Object(C.useState)(),j=Object(z.a)(d,2),b=j[0],u=j[1];return Object(C.useEffect)((function(){var e=new Date(i,n+1,0).getDate(),c=new Date(i,n,0).getDay();u(c);for(var a=[],r=function(e){var n=t.filter((function(t){return new Date(t.day).getDate()===e})).reduce((function(e,t){return new Date("".concat(t.day,"T").concat(t.endTime)).getTime()-new Date("".concat(t.day,"T").concat(t.startTime)).getTime()+e}),0);a.push({id:e,totalTime:n})},o=1;o<=e;o++)r(o);l(a)}),[t,n,i]),Object(H.jsxs)(oe,{children:[Object(H.jsxs)(se,{children:[Object(H.jsx)(ne.a,{"aria-label":"previous",color:"primary",onClick:c,children:Object(H.jsx)(ce.a,{})}),Object(H.jsxs)(M,{children:[["January","February","March","April","May","June","July","August","September","October","November","December"][n]," ",i]}),Object(H.jsx)(ne.a,{"aria-label":"next",color:"primary",onClick:a,children:Object(H.jsx)(re.a,{})})]}),Object(H.jsxs)(de,{children:[!!b&&Object(H.jsx)(te,{width:14.28*b+"%"}),s&&s.map((function(e){return Object(H.jsx)(ee,{day:e.id,totalTime:e.totalTime},e.id)}))]}),Object(H.jsxs)(je,{children:[Object(H.jsx)(le,{children:"Total:"}),Object(H.jsxs)(le,{children:[s&&(s.reduce((function(e,t){return t.totalTime+e}),0)/36e5).toFixed(2),"h"]})]})]})},ue=Object(J.a)(A)(g||(g=Object(P.a)(["\n  @media (min-width: 600px) {\n    width: 75%;\n    margin-right: 1rem;\n  }\n"]))),Oe=Object(R.b)((function(e){return{logs:e.logs.logs}}))((function(e){var t=e.logs,n=Object(C.useState)((new Date).getMonth()),i=Object(z.a)(n,2),c=i[0],a=i[1],r=Object(C.useState)((new Date).getFullYear()),o=Object(z.a)(r,2),s=o[0],l=o[1],d=Object(C.useState)(),j=Object(z.a)(d,2),b=j[0],u=j[1];Object(C.useEffect)((function(){var e=t.filter((function(e){return new Date(e.day).getMonth()===c&&new Date(e.day).getFullYear()===s}));u(e)}),[t,c,s]);return Object(H.jsx)(ue,{children:b&&Object(H.jsx)(be,{monthLogs:b,monthNumber:c,yearNumber:s,previous:function(){c?a(c-1):(l(s-1),a(11))},next:function(){11===c?(l(s+1),a(0)):a(c+1)}})})})),he=n(57),xe=n.n(he),fe=n(58),me=n.n(fe),ge=J.a.div(p||(p=Object(P.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 0;\n"]))),pe=J.a.div(y||(y=Object(P.a)(["\n  flex-grow: 1;\n  min-width: 130px;\n"]))),ye=J.a.div(v||(v=Object(P.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  h3 {\n    margin: .25rem 0;\n    font-weight: 500;\n  }\n"]))),ve=J.a.div(w||(w=Object(P.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),we=Object(J.a)(M)(T||(T=Object(P.a)(["\n  margin-top: 1rem;\n"]))),Te=Object(R.b)(null,(function(e){return{removeLog:function(t){return e(function(e){return{type:Y,payload:{id:e}}}(t))},editLog:function(t,n,i,c){return e(function(e,t,n,i){return{type:B,payload:{id:e,day:t,startTime:n,endTime:i}}}(t,n,i,c))}}}))((function(e){var t=e.log,n=e.removeLog,i=e.editLog,c=t.id,a=t.day,r=t.startTime,o=t.endTime,s=Object(C.useState)(!1),l=Object(z.a)(s,2),d=l[0],j=l[1],b=Object(C.useState)(a),u=Object(z.a)(b,2),O=u[0],h=u[1],x=Object(C.useState)(r),f=Object(z.a)(x,2),m=f[0],g=f[1],p=Object(C.useState)(o),y=Object(z.a)(p,2),v=y[0],w=y[1];return Object(H.jsxs)(A,{children:[Object(H.jsxs)(ge,{children:[Object(H.jsxs)(pe,{children:[Object(H.jsxs)(ye,{children:[Object(H.jsx)("h3",{children:"Day:"}),a]}),Object(H.jsxs)(ye,{children:[Object(H.jsx)("h3",{children:"Start:"}),r]}),Object(H.jsxs)(ye,{children:[Object(H.jsx)("h3",{children:"End:"}),o]})]}),Object(H.jsxs)(ve,{children:[Object(H.jsx)(ne.a,{"aria-label":"remove",color:"secondary",onClick:function(){n(c)},children:Object(H.jsx)(xe.a,{})}),Object(H.jsx)(ne.a,{"aria-label":"edit",color:"primary",onClick:function(){j(!d)},children:Object(H.jsx)(me.a,{})})]})]}),d&&Object(H.jsxs)("form",{children:[Object(H.jsx)(we,{children:"Edit this log"}),Object(H.jsxs)(V,{children:[Object(H.jsx)(F,{children:"Select Day"}),Object(H.jsx)(_.a,{id:"date",type:"date",defaultValue:O,InputLabelProps:{shrink:!0},onChange:function(e){return h(e.target.value)}})]}),Object(H.jsxs)(V,{children:[Object(H.jsx)(F,{children:"Start Time"}),Object(H.jsx)(_.a,{id:"time",type:"time",defaultValue:m,InputLabelProps:{shrink:!0},inputProps:{step:300},onChange:function(e){return g(e.target.value)}})]}),Object(H.jsxs)(V,{children:[Object(H.jsx)(F,{children:"End Time"}),Object(H.jsx)(_.a,{id:"time",type:"time",defaultValue:v,InputLabelProps:{shrink:!0},inputProps:{step:300},onChange:function(e){return w(e.target.value)}})]}),Object(H.jsx)(G.a,{variant:"contained",color:"secondary",onClick:function(){i(c,O,m,v),j(!1)},children:"Save"})]})]})})),Se=Object(R.b)((function(e){return{logs:e.logs.logs}}))((function(e){var t=e.logs;return Object(H.jsxs)(A,{children:[Object(H.jsx)(M,{children:"Log List"}),t&&t.map((function(e){return Object(H.jsx)(Te,{log:e},e.id)}))]})})),ke=J.a.div(S||(S=Object(P.a)(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  min-height: 100vh;\n  padding: 1rem;\n  background-color: #fdfdfd;\n  font-family: 'Roboto', sans-serif;\n"]))),De=J.a.h1(k||(k=Object(P.a)(["\n  font-size: 2rem;\n  font-weight: 400;\n  margin: 0;\n"]))),Le=J.a.div(D||(D=Object(P.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin: 0 1rem;\n  justify-content: center;\n  @media (min-width: 600px) {\n    flex-direction: row;\n    align-items: flex-start;\n  }\n  @media (min-width: 1200px) {\n    width: 1100px;\n  }\n  "]))),Ce=J.a.div(L||(L=Object(P.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),Ee=function(){return Object(H.jsxs)(ke,{children:[Object(H.jsx)(De,{children:"Working Hours App"}),Object(H.jsxs)(Le,{children:[Object(H.jsx)(Oe,{}),Object(H.jsxs)(Ce,{children:[Object(H.jsx)(q,{}),Object(H.jsx)(Se,{})]})]})]})},Ie=n(47),Ne=n(33),Pe=n(20),Je={logs:[]},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return{logs:[].concat(Object(Pe.a)(e.logs),[t.payload.log])};case Y:return{logs:e.logs.filter((function(e){return e.id!==t.payload.id}))};case B:return{logs:e.logs.map((function(e){return e.id===t.payload.id?Object(Ne.a)(Object(Ne.a)({},e),{},{day:t.payload.day,startTime:t.payload.startTime,endTime:t.payload.endTime}):e}))};default:return e}},Ae=Object(Ie.a)({logs:ze}),Me=function(){try{var e=localStorage.getItem("state");return null===e?void 0:JSON.parse(e)}catch(t){return}}(),Fe=Object(Ie.b)(Ae,Me);Fe.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){console.log(n)}}(Fe.getState())}));var Ve=Fe;N.a.render(Object(H.jsx)(E.a.StrictMode,{children:Object(H.jsx)(R.a,{store:Ve,children:Object(H.jsx)(Ee,{})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.d38293f9.chunk.js.map