(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/fullstackdads.5e32e90d.png"},27:function(e,t,a){e.exports=a(41)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),c=a.n(r),s=(a(32),a(33),a(8)),o=a(9),m=a(11),i=a(10),u=a(12),E=(a(34),a(4)),A=a(7),d=a(23),h=a.n(d),p=a(24),b=function(e){var t=e.component,a=Object(p.a)(e,["component"]);return l.a.createElement(A.b,Object.assign({},a,{render:function(e){return localStorage.getItem("user")?l.a.createElement(t,e):l.a.createElement(A.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};a(40),a(21);var g=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"form"},l.a.createElement("h1",{className:"form-header"},"Sign Up"),l.a.createElement("input",{className:"form-input",placeholder:"Full Name"}),l.a.createElement("br",null),l.a.createElement("input",{className:"form-input",placeholder:"Email"}),l.a.createElement("br",null),l.a.createElement("input",{className:"form-input",type:"password",placeholder:"Password"}),l.a.createElement("br",null),l.a.createElement("input",{className:"form-input",type:"password",placeholder:"Renter Password"}),l.a.createElement("br",null),l.a.createElement("input",{className:"form-button",type:"button",value:"Register"}),l.a.createElement("br",null),l.a.createElement("span",{className:"form-input"},"Already have an account? ",l.a.createElement(E.b,{to:"/signup"},"Login"))))};function f(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.authdata?{Authorization:"Basic "+e.authdata}:{}}var v={login:function(e,t){var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})};return fetch("http://localhost:3000/users/authenticate",a).then(C).then((function(a){return a&&(a.authdata=window.btoa(e+":"+t),localStorage.setItem("user",JSON.stringify(a))),a}))},logout:w,isLoggedIn:function(){return null!=localStorage.getItem("user")},getAll:function(){var e={method:"GET",headers:f()};return fetch("http://localhost:3000/users",e).then(C)}};function w(){localStorage.removeItem("user")}function C(e){return e.text().then((function(t){var a=t&&JSON.parse(t);if(!e.ok){401===e.status&&(w(),window.location.reload(!0));var n=a&&a.message||e.statusText;return Promise.reject(n)}return a}))}var N=a(13),O=a(15),k=function(e){function t(e){var a;return Object(s.a)(this,t),a=Object(m.a)(this,Object(i.a)(t).call(this,e)),v.logout(),a.state={username:"",password:"",submitted:!1,loading:!1,error:""},a.handleChange=a.handleChange.bind(Object(O.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(O.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(N.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({submitted:!0});var a=this.state,n=a.username,l=a.password;a.returnUrl;n&&l&&(this.setState({loading:!0}),v.login(n,l).then((function(e){var a=(t.props.location.state||{from:{pathname:"/"}}).from;t.props.history.push(a)}),(function(e){return t.setState({error:e,loading:!1})})))}},{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.submitted,r=e.loading,c=e.error;return l.a.createElement("div",null,l.a.createElement("form",{name:"form",onSubmit:this.handleSubmit,className:"form"},l.a.createElement("h1",{className:"form-header"+(n&&!t?" has-error":"")},"Login"),l.a.createElement("div",{className:"form-input"+(n&&!t?" has-error":"")},l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",{type:"text",className:"form-control",name:"username",value:t,onChange:this.handleChange}),n&&!t&&l.a.createElement("div",{className:"help-block"},"Username is required")),l.a.createElement("div",{className:"form-input"+(n&&!a?" has-error":"")},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",name:"password",value:a,onChange:this.handleChange}),n&&!a&&l.a.createElement("div",{className:"help-block"},"Password is required")),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{className:"form-button",disabled:r},"Login"),r&&l.a.createElement("img",{alt:"loading",src:"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="})),c&&l.a.createElement("div",{className:"alert alert-danger"},c)))}}]),t}(l.a.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"col align-left"},"Year One"),l.a.createElement("div",Object(N.a)({class:"table-responsive-sm-3"},"class","col align-self-center"),l.a.createElement("table",{class:"table table-striped table-dark table-bordered table-hover table-sm ",align:"right"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Fall"),l.a.createElement("th",{scope:"col"},"Winter"),l.a.createElement("th",{scope:"col"},"Summer"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"COMP_1000"),l.a.createElement("td",null,"COMP_1410"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"2"),l.a.createElement("td",null,"COMP_1400"),l.a.createElement("td",null,"MATH_1730"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"3"),l.a.createElement("td",null,"MATH_1200"),l.a.createElement("td",null,"MATH_1020"),l.a.createElement("td",null))))),l.a.createElement("div",{class:"col align-left"},"Year Two"),l.a.createElement("div",Object(N.a)({class:"table-responsive-sm-3"},"class","col align-self-center"),l.a.createElement("table",{class:"table table-striped table-dark table-bordered table-hover table-sm ",align:"right"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Fall"),l.a.createElement("th",{scope:"col"},"Winter"),l.a.createElement("th",{scope:"col"},"Summer"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"COMP_2120"),l.a.createElement("td",null,"COMP_2140"),l.a.createElement("td",null,"CO-OP")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"2"),l.a.createElement("td",null,"COMP_2540"),l.a.createElement("td",null,"COMP_2800"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"3"),l.a.createElement("td",null,"COMP_2560"),l.a.createElement("td",null),l.a.createElement("td",null))))),l.a.createElement("div",{class:"col align-left"},"Year Three"),l.a.createElement("div",Object(N.a)({class:"table-responsive-sm-3"},"class","col align-self-center"),l.a.createElement("table",{class:"table table-striped table-dark table-bordered table-hover table-sm ",align:"right"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Fall"),l.a.createElement("th",{scope:"col"},"Winter"),l.a.createElement("th",{scope:"col"},"Summer"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"COMP_3110"),l.a.createElement("td",null,"COMP_3300"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"2"),l.a.createElement("td",null,"COMP_3150"),l.a.createElement("td",null,"COMP_3400"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"3"),l.a.createElement("td",null,"COMP_3220"),l.a.createElement("td",null),l.a.createElement("td",null))))),l.a.createElement("div",null,l.a.createElement("button",{type:"button",class:"btn btn-primary"},"CREATE SEQUENCE")," ",l.a.createElement("button",{type:"button",class:"btn btn-primary"},"MANAGE SEQUENCE")," ",l.a.createElement("button",{type:"button",class:"btn btn-primary"},"VIEW SEQUENCE")," ",l.a.createElement("button",{type:"button",class:"btn btn-primary"},"DELETE SEQUENCE")," ",l.a.createElement("button",{type:"button",class:"btn btn-primary"},"EXPORT SEQUENCE")))}}]),t}(l.a.Component),M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={isLoggedIn:a.isLoggedIn()},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"isLoggedIn",value:function(){return v.isLoggedIn()}},{key:"render",value:function(){var e;return e=v.isLoggedIn()?l.a.createElement("li",{className:"nav-link-li"},l.a.createElement(E.b,{className:"nav-link",to:"/login"},"Logout")):l.a.createElement("li",{className:"nav-link-li"},l.a.createElement(E.b,{className:"nav-link",to:"/login"},"Login")),l.a.createElement(E.a,null,l.a.createElement("nav",null,l.a.createElement("ul",{className:"nav-links"},l.a.createElement("li",{className:"nav-link-li"},l.a.createElement("img",{className:"logo",src:h.a,alt:"Full Stack Dads"})),l.a.createElement("li",{className:"nav-link-li"},l.a.createElement(E.b,{className:"nav-link",to:"/"},"Home")),l.a.createElement("li",{className:"nav-link-li"},l.a.createElement(E.b,{className:"nav-link",to:"/schedule"},"My Schedule")),l.a.createElement("li",{className:"nav-link-li"},l.a.createElement(E.b,{className:"nav-link",to:"/rate"},"Rate My Class")),e)),l.a.createElement(b,{exact:!0,path:"/schedule",component:g}),l.a.createElement(A.b,{path:"/login",component:k}),l.a.createElement(b,{path:"/sequence",component:y}))}}]),t}(l.a.Component);var S=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));!function(){var e=[{id:1,username:"test",password:"test",firstName:"Test",lastName:"User"}],t=window.fetch;window.fetch=function(a,n){return new Promise((function(l,r){setTimeout((function(){if(a.endsWith("/users/authenticate")&&"POST"===n.method){var c=JSON.parse(n.body),s=e.filter((function(e){return e.username===c.username&&e.password===c.password}));if(s.length){var o=s[0],m={id:o.id,username:o.username,firstName:o.firstName,lastName:o.lastName};l({ok:!0,text:function(){return Promise.resolve(JSON.stringify(m))}})}else r("Username or password is incorrect")}else a.endsWith("/users")&&"GET"===n.method?n.headers&&n.headers.Authorization==="Basic ".concat(window.btoa("test:test"))?l({ok:!0,text:function(){return Promise.resolve(JSON.stringify(e))}}):l({status:401,text:function(){return Promise.resolve()}}):t(a,n).then((function(e){return l(e)}))}),500)}))}}(),c.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.8066d384.chunk.js.map