(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(47)},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(15),m=n.n(r),s=(n(22),n(23),n(4)),c=n.n(s);n(24);function o(e){var t,n=c()("day-list__item",{"day-list__item--selected":e.selected,"day-list__item--full":0===e.spots});return i.a.createElement("li",{className:n,onClick:function(){return e.setDay(e.name)}},i.a.createElement("h2",{className:"text--regular"},e.name),i.a.createElement("h3",{className:"text--light"},0===(t=e.spots)?"no spots remaining":1===t?"1 spot remaining":2===t?"2 spots remaining":3===t?"3 spots remaining":4===t?"4 spots remaining":5===t?"5 spots remaining":void 0))}function l(e){return e.days.map(function(t){return i.a.createElement("ul",{key:t.id},i.a.createElement(o,{name:t.name,spots:t.spots-1,selected:t.name===e.day,setDay:e.setDay}))})}var p=n(2);n(25);function u(e){return i.a.createElement("header",{className:"appointment__time"},i.a.createElement("h4",{className:"text--semi-bold"},e.time),i.a.createElement("hr",{className:"appointment__separator"}))}function d(e){return i.a.createElement("main",{className:"appointment__add"},i.a.createElement("img",{className:"appointment__add-button",src:"images/add.png",alt:"Add",onClick:e.onAdd}))}function v(e){var t=e.interviewer;return i.a.createElement("main",{className:"appointment__card appointment__card--show"},i.a.createElement("section",{className:"appointment__card-left"},i.a.createElement("h2",{className:"text--regular"},e.student),i.a.createElement("section",{className:"interviewer"},i.a.createElement("h4",{className:"text--light"},"Interviewer"),i.a.createElement("h3",{className:"text--regular"},t))),i.a.createElement("section",{className:"appointment__card-right"},i.a.createElement("section",{className:"appointment__actions"},i.a.createElement("img",{className:"appointment__actions-button",src:"images/edit.png",alt:"Edit",onClick:e.onEdit}),i.a.createElement("img",{className:"appointment__actions-button",src:"images/trash.png",alt:"Delete",onClick:e.onDelete}))))}function E(e){var t=e.interviewer;return i.a.createElement("main",{className:"appointment__card appointment__card--show"},i.a.createElement("section",{className:"appointment__card-left"},i.a.createElement("h2",{className:"text--regular"},e.student),i.a.createElement("section",{className:"interviewer"},i.a.createElement("h4",{className:"text--light"},"Interviewer"),i.a.createElement("h3",{className:"text--regular"},t))),i.a.createElement("section",{className:"appointment__card-right"},i.a.createElement("section",{className:"appointment__actions"},i.a.createElement("img",{className:"appointment__actions-button",src:"images/edit.png",alt:"Edit",onClick:e.onEdit}),i.a.createElement("img",{className:"appointment__actions-button",src:"images/trash.png",alt:"Delete",onClick:e.onDelete}))))}var w=n(16);n(26);function g(e){var t=c()("button",{"button--confirm":e.confirm,"button--danger":e.danger});return i.a.createElement("button",{className:t,onClick:e.onClick,disabled:e.disabled},e.children)}n(27),n(28);function _(e){var t=c()("interviewers__item",{"interviewers__item--selected":e.selected,"interviewers__item--full":0===e.spots});return i.a.createElement("li",{className:t,onClick:e.setInterviewer},i.a.createElement("img",{className:"interviewers__item-image",src:e.avatar,alt:e.name}),e.selected&&e.name)}function f(e){var t=e.interviewers.map(function(t){return i.a.createElement(_,{key:t.id,name:t.name,avatar:t.avatar,selected:t.id===e.value,setInterviewer:function(n){e.onChange(t.id)}})});return i.a.createElement("section",{className:"interviewers"},i.a.createElement("h4",{className:"interviewers__header text--light"},"Interviewer"),i.a.createElement("ul",{className:"interviewers__list"}," ",t," "))}function h(e){var t=i.a.useState(e.name||""),n=Object(p.a)(t,2),a=n[0],r=n[1],m=i.a.useState(e.interviewers||null),s=Object(p.a)(m,2),c=s[0],o=s[1],l=i.a.useState(""),u=Object(p.a)(l,2),d=u[0],v=u[1];return i.a.createElement("main",{className:"appointment__card appointment__card--create"},i.a.createElement("section",{className:"appointment__card-left"},i.a.createElement("form",{autoComplete:"off",onSubmit:function(e){return e.preventDefault()}},i.a.createElement("input",{className:"appointment__create-input text--semi-bold",name:"name",type:"text",placeholder:"Enter Student Name","data-testid":"student-name-input",onChange:function(e){return r(e.target.value)}}),i.a.createElement("section",{className:"appointment__validation"},d)),i.a.createElement(f,{interviewers:e.interviewers,value:c,onChange:o})),i.a.createElement("section",{className:"appointment__card-right"},i.a.createElement("section",{className:"appointment__actions"},i.a.createElement(g,{danger:!0,onClick:function(){r(""),o(null),e.onCancel()}},"Cancel"),i.a.createElement(g,{confirm:!0,onClick:function(){""!==a?e.onSave(a,c):v("Student name cannot be blank")}},"Save"))))}function N(e){return i.a.createElement("main",{className:"appointment__card appointment__card--status"},i.a.createElement("img",{className:"appointment__status-image",src:"images/status.png",alt:"Loading"}),i.a.createElement("h1",{className:"text--semi-bold"},e.message))}function y(e){return i.a.createElement("main",{className:"appointment__card appointment__card--confirm"},i.a.createElement("h1",{className:"text--semi-bold"},e.message),i.a.createElement("section",{className:"appointment__actions"},i.a.createElement(g,{onClick:e.onCancel,danger:!0},"Cancel"),i.a.createElement(g,{onClick:e.onConfirm,danger:!0},"Confirm")))}function b(e){return i.a.createElement("main",{className:"appointment__card appointment__card--error"},i.a.createElement("section",{className:"appointment__error-message"},i.a.createElement("h1",{className:"text--semi-bold"},"Error"),i.a.createElement("h3",{className:"text--light"},e.message)),i.a.createElement("img",{className:"appointment__error-close",src:"images/close.png",alt:"Close",onClick:e.onClose}))}function C(e){var t=e.id,n=e.interviewersForDay,a=e.cancelInterview,r=i.a.useState(1),m=Object(p.a)(r,2),s=(m[0],m[1],i.a.useState("Joe")),c=Object(p.a)(s,2),o=c[0],l=c[1],g="EMPTY",_="SHOW",f="SHOW2",C="SAVING",k="ERROR_SAVE",S="DELETING";var O=function(e){var t=i.a.useState(e),n=Object(p.a)(t,2),a=n[0],r=n[1],m=i.a.useState([e]),s=Object(p.a)(m,2),c=s[0],o=s[1];return{mode:a,transition:function(e){o([].concat(Object(w.a)(c),[e])),r(e)},back:function(){c[c.length-1]===e||(o(c.slice(0,c.length-1)),r(c[c.length-2]))}}}(e.interview?_:g),I=O.mode,j=O.transition,R=O.back,x=e.interview&&e.interview.interviewer||[];function D(n,a){var i={student:n,interviewer:a};"number"==typeof a?(j(C),e.bookInterview(t,i).then(function(){j(_)}).catch(function(){l(n),j(f)})):j(k,!0)}return i.a.createElement("article",{className:"appointment"},i.a.createElement(u,{time:e.time}),I===g&&i.a.createElement(d,{onAdd:function(){j("CREATE")}}),"CREATE"===I&&i.a.createElement(h,{onSave:D,value:e.id,interviewers:e.interviewers,onCancel:function(){R()},name:x.student}),I===_&&i.a.createElement(v,{student:e.interview.student,interviewers:x,onDelete:function(){j("CONFIRM")},onEdit:function(){j("CREATE")}}),I===f&&i.a.createElement(E,{student:o,interviewers:x,onDelete:function(){j("CONFIRM")},onEdit:function(){j("CREATE")}}),I===C&&i.a.createElement(N,{message:C}),I===S&&i.a.createElement(N,{message:S}),"CONFIRM"===I&&i.a.createElement(y,{onConfirm:function(){j(S),a(t).then(function(){j(g)}).catch(function(){j(g)})},onCancel:function(){R()},message:"CONFIRM"}),"EDIT"===I&&i.a.createElement(h,{interviewers:n,onCancel:function(){return R()},onSave:D,name:x.student,interviewer:x.id}),I===k&&i.a.createElement(b,{message:"ERROR SAVING",onClose:function(){return R()}}),"ERROR_DELETE"===I&&i.a.createElement(b,{message:"ERROR DELETING",onClose:function(){j(_)}}))}var k=n(5),S=n(3),O=n(29).default;m.a.render(i.a.createElement(function(e){var t=function(){var e=i.a.useState({day:["Monday"],days:[{id:1,name:"Monday",appointments:[1,2,3,4,5],interviewers:[2,3,7,8,10],spots:4},{id:2,name:"Tuesday",appointments:[6,7,8,9,10],interviewers:[3,4,8,9,10],spots:3},{id:3,name:"Wednesday",appointments:[11,12,13,14,15],interviewers:[1,2,3,4,6],spots:2},{id:4,name:"Thursday",appointments:[16,17,18,19,20],interviewers:[1,2,3,6,9],spots:4},{id:5,name:"Friday",appointments:[21,22,23,24,25],interviewers:[2,3,6,8,9],spots:2}],appointments:{1:{id:1,time:"12pm",interview:null},2:{id:2,time:"1pm",interview:{student:"Archie Cohen",interviewer:8}},3:{id:3,time:"2pm",interview:null},4:{id:4,time:"3pm",interview:null},5:{id:5,time:"4pm",interview:null},6:{id:6,time:"12pm",interview:{student:"Chad Takahashi",interviewer:9}},7:{id:7,time:"1pm",interview:null},8:{id:8,time:"2pm",interview:{student:"Jamal Jordan",interviewer:10}},9:{id:9,time:"3pm",interview:null},10:{id:10,time:"4pm",interview:null},11:{id:11,time:"12pm",interview:{student:"Leopold Silvers",interviewer:4}},12:{id:12,time:"1pm",interview:{student:"Liam Martinez",interviewer:2}},13:{id:13,time:"2pm",interview:null},14:{id:14,time:"3pm",interview:{student:"Lydia Miller-Jones",interviewer:1}},15:{id:15,time:"4pm",interview:null},16:{id:16,time:"12pm",interview:{student:"Maria Boucher",interviewer:6}},17:{id:17,time:"1pm",interview:null},18:{id:18,time:"2pm",interview:null},19:{id:19,time:"3pm",interview:null},20:{id:20,time:"4pm",interview:null},21:{id:21,time:"12pm",interview:{student:"Michael Chan-Montoya",interviewer:3}},22:{id:22,time:"1pm",interview:null},23:{id:23,time:"2pm",interview:{student:"Richard Wong",interviewer:8}},24:{id:24,time:"3pm",interview:{student:"Yuko Smith",interviewer:8}},25:{id:25,time:"4pm",interview:null}},interviewers:{1:{id:1,name:"Sylvia Palmer",avatar:"https://i.imgur.com/LpaY82x.png"},2:{id:2,name:"Tori Malcolm",avatar:"https://i.imgur.com/Nmx0Qxo.png"},3:{id:3,name:"Mildred Nazir",avatar:"https://i.imgur.com/T2WwVfS.png"},4:{id:4,name:"Cohana Roy",avatar:"https://i.imgur.com/FK8V841.jpg"},5:{id:5,name:"Sven Jones",avatar:"https://i.imgur.com/twYrpay.jpg"},6:{id:6,name:"Susan Reynolds",avatar:"https://i.imgur.com/TdOAdde.jpg"},7:{id:7,name:"Alec Quon",avatar:"https://i.imgur.com/3tVgsra.jpg"},8:{id:8,name:"Viktor Jain",avatar:"https://i.imgur.com/iHq8K8Z.jpg"},9:{id:9,name:"Lindsay Chu",avatar:"https://i.imgur.com/nPywAp1.jpg"},10:{id:10,name:"Samantha Stanic",avatar:"https://i.imgur.com/okB9WKC.jpg"}},spots:4}),t=Object(p.a)(e,2),n=t[0],a=t[1],r="Monday";for(var m in n.days)n.day===n.days[m].name&&(r=m);return{state:n,setDay:function(e){return a(Object(S.a)({},n,{day:e}))},bookInterview:function(e,t){var i=Object(S.a)({},n.appointments[e],{interview:Object(S.a)({},t)}),m=Object(S.a)({},n.appointments,Object(k.a)({},e,i));n.days[r].spots-=1;var s=n.appointments[e].time;return n.appointments[e]={id:e,time:s,interview:t},a(n),O.put("/api/appointments/".concat(e),i).then(function(){n.days[r].spots-=1,a(Object(S.a)({},n,{appointments:m}))})},cancelInterview:function(e){var t=Object(S.a)({},n.appointments[e],{interview:null});n.days[r].spots+=1;var a=n.appointments[e].time;return n.appointments[e]={id:e,time:a,interview:null},O.delete("/api/appointments/".concat(e),t).then(function(){n.days[r].spots+=1})}}}(),n=t.state,a=t.setDay,r=t.bookInterview,m=t.cancelInterview,s=function(e,t){var n=[],a=e.days.filter(function(e){return e.name===t});return a.length>0&&a[0].appointments.length>0&&(n=a[0].appointments.map(function(t){return e.appointments[t]})),n}(n,n.day),c=function(e,t){var n=[],a=e.days.filter(function(e){return e.name===t});return a.length>0&&a[0].interviewers.length>0&&(n=a[0].interviewers.map(function(t){return e.interviewers[t]})),n}(n,n.day),o=s.map(function(e){return i.a.createElement(C,{key:e.id,id:e.id,time:e.time,interview:e.interview,interviewersForDay:e.interview,interviewers:c,bookInterview:r,cancelInterview:m})});return i.a.createElement("main",{className:"layout"},i.a.createElement("section",{className:"sidebar"},i.a.createElement("img",{className:"sidebar--centered",src:"images/logo.png",alt:"Interview Scheduler"}),i.a.createElement("hr",{className:"sidebar__separator sidebar--centered"}),i.a.createElement("nav",{className:"sidebar__menu"},i.a.createElement(l,{days:n.days,day:n.day,setDay:a})),i.a.createElement("img",{className:"sidebar__lhl sidebar--centered",src:"images/lhl.png",alt:"Lighthouse Labs"})),i.a.createElement("section",{className:"schedule"},o))},null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b12a745b.chunk.js.map