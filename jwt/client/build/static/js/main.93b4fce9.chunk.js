(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,n){},29:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),s=n.n(c),o=(n(27),n(8)),u=n.n(o),i=n(5),l=n(10),j=n(11),b=(n(29),n(14)),h=n(2),p=n(9),m=(n(30),n(1)),d=function(e){var t=e.setAuth,n=Object(a.useState)(""),r=Object(j.a)(n,2),c=r[0],s=r[1];function o(){return(o=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:5000/dashboard/",{method:"GET",headers:{token:localStorage.token}});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,s(n.user_name),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}Object(a.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[]);return Object(m.jsxs)(a.Fragment,{children:[Object(m.jsxs)("h1",{children:["Dashboard  ",c]}),Object(m.jsx)("button",{className:"btn btn-primary",onClick:function(e){return function(e){e.preventDefault(),localStorage.removeItem("token"),t(!1),p.a.success("Logged out Successfully !")}(e)},children:"Logout"})]})},f=n(13),O=function(e){var t=e.setAuth,n=Object(a.useState)({email:"",password:"",name:""}),r=Object(j.a)(n,2),c=r[0],s=r[1],o=c.email,h=c.password,d=c.name,O=function(e){s(Object(i.a)(Object(i.a)({},c),{},Object(f.a)({},e.target.name,e.target.value)))},x=function(){var e=Object(l.a)(u.a.mark((function e(n){var a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,a={email:o,password:h,name:d},e.next=5,fetch("http://localhost:5000/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 5:return r=e.sent,e.next=8,r.json();case 8:(c=e.sent).token?(localStorage.setItem("token",c.token),t(!0),p.a.success("Registered Successfully !")):(t(!1),p.a.error(c)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(a.Fragment,{children:[Object(m.jsx)("h1",{className:"text-center my-5",children:"Register"}),Object(m.jsxs)("form",{onSubmit:x,children:[Object(m.jsx)("input",{type:"email",name:"email",placeholder:"email",className:"form-control my-3",value:o,onChange:function(e){return O(e)}}),Object(m.jsx)("input",{type:"password",name:"password",placeholder:"password",className:"form-control my-3",value:h,onChange:function(e){return O(e)}}),Object(m.jsx)("input",{type:"text",name:"name",placeholder:"name",className:"form-control my-3",value:d,onChange:function(e){return O(e)}}),Object(m.jsx)("button",{className:"btn btn-success btn-block",children:"Submit"})]}),Object(m.jsx)(b.b,{to:"/login",children:"Login"})]})},x=function(e){var t=e.setAuth,n=Object(a.useState)({email:"",password:""}),r=Object(j.a)(n,2),c=r[0],s=r[1],o=c.email,h=c.password,d=function(e){s(Object(i.a)(Object(i.a)({},c),{},Object(f.a)({},e.target.name,e.target.value)))},O=function(){var e=Object(l.a)(u.a.mark((function e(n){var a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,a={email:o,password:h},e.next=5,fetch("http://localhost:5000/auth/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 5:return r=e.sent,e.next=8,r.json();case 8:(c=e.sent).token?(localStorage.setItem("token",c.token),t(!0),p.a.success("login Successfully!")):(t(!1),p.a.error(c)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(a.Fragment,{children:[Object(m.jsx)("h1",{className:"text-center my-5",children:"Login"}),Object(m.jsxs)("form",{onSubmit:O,children:[Object(m.jsx)("input",{type:"email",name:"email",placeholder:"email",className:"form-control my-3",value:o,onChange:function(e){return d(e)}}),Object(m.jsx)("input",{type:"password",name:"password",placeholder:"password",className:"form-control my-3",value:h,onChange:function(e){return d(e)}}),Object(m.jsx)("button",{className:"btn btn-success btn-block",children:"Submit"})]}),Object(m.jsx)(b.b,{to:"/register",children:"Register"})]})};p.a.configure();var g=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],r=t[1],c=function(e){r(e)};function s(){return(s=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:5000/auth/is-verify",{method:"GET",headers:{token:localStorage.token}});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r(!0===n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){s.apply(this,arguments)}()})),Object(m.jsx)(a.Fragment,{children:Object(m.jsx)(b.a,{children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)(h.d,{children:[Object(m.jsx)(h.b,{exact:!0,path:"/",render:function(e){return n?Object(m.jsx)(h.a,{to:"/dashboard"}):Object(m.jsx)(x,Object(i.a)(Object(i.a)({},e),{},{setAuth:c}))}}),Object(m.jsx)(h.b,{exact:!0,path:"/register",render:function(e){return n?Object(m.jsx)(h.a,{to:"/"}):Object(m.jsx)(O,Object(i.a)(Object(i.a)({},e),{},{setAuth:c}))}}),Object(m.jsx)(h.b,{exact:!0,path:"/dashboard",render:function(e){return n?Object(m.jsx)(d,Object(i.a)(Object(i.a)({},e),{},{setAuth:c})):Object(m.jsx)(h.a,{to:"/"})}})]})})})})};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.93b4fce9.chunk.js.map