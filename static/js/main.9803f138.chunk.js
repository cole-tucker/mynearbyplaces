(this.webpackJsonpmynearbyplaces=this.webpackJsonpmynearbyplaces||[]).push([[0],{41:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(21),i=n.n(a),r=(n(41),n(6)),o=n(10),l=n(7),j=n(61),d=n(57),u=n(56),b="https://coletucker-mynearbyplaces-api.herokuapp.com/",h={getPlaces:function(){return fetch(b+"/places").then((function(e){return e.json()}))},getReviews:function(){return fetch(b+"/reviews").then((function(e){return e.json()}))},savePlace:function(e){return fetch(b+"/addPlace",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},deletePlace:function(e){return fetch(b+"/deletePlace",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},editPlace:function(e){return fetch(b+"/editPlace",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},saveReviews:function(e){return fetch(b+"/addReview",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}},O=n(1);var p=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1];Object(c.useEffect)((function(){0===n.length&&h.getPlaces().then((function(e){return s(e)})).catch((function(e){return console.log(e)}))}));var a=n.map((function(e){return Object(O.jsxs)(j.a,{children:[Object(O.jsx)("div",{class:"text-center",children:e.businessName}),Object(O.jsx)("img",{class:"card-img",src:e.image,alt:"Restaurant"}),Object(O.jsxs)("div",{class:"text-center",children:[" ",e.address," "]}),Object(O.jsx)(u.a,{children:"Delete"}),Object(O.jsx)(o.b,{to:{pathname:"/edit",state:{id:e.id}},children:Object(O.jsx)(u.a,{children:"Edit"})})]})}));return Object(O.jsx)("div",{children:Object(O.jsx)(d.a,{children:a})})},g=n(60),x=n(16),m=n(14);var f=function(e){var t=Object(l.f)(),n=Object(c.useState)(""),s=Object(r.a)(n,2),a=s[0],i=s[1];return Object(O.jsx)(x.a,{children:Object(O.jsx)(m.a,{children:Object(O.jsxs)(g.a,{onSubmit:function(){t.push("/"),e.onLoggedIn(a)},children:[Object(O.jsxs)(g.a.Group,{controlId:"formBasicEmail",children:[Object(O.jsx)(g.a.Label,{children:"Email address"}),Object(O.jsx)(g.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){i(e.target.value)}})]}),Object(O.jsxs)(g.a.Group,{controlId:"formBasicPassword",children:[Object(O.jsx)(g.a.Label,{children:"Password"}),Object(O.jsx)(g.a.Control,{type:"password",placeholder:"Password"})]}),Object(O.jsx)(u.a,{class:"btn btn-success",type:"submit",children:"Submit"})]})})})};var v=function(){var e=Object(l.f)(),t=Object(c.useState)(""),n=Object(r.a)(t,2),s=n[0],a=n[1],i=Object(c.useState)(""),o=Object(r.a)(i,2),j=o[0],d=o[1],b=Object(c.useState)(""),p=Object(r.a)(b,2),f=p[0],v=p[1],w=Object(c.useState)(""),A=Object(r.a)(w,2),y=A[0],C=A[1];return Object(O.jsx)(x.a,{children:Object(O.jsx)(m.a,{children:Object(O.jsxs)(g.a,{onSubmit:function(){var t={name:s,address:f,image:j};console.log(t.businessName),h.savePlace(t).then((function(){console.log("The place ".concat(s," was added successfully")),a(""),v(""),d("")})).catch((function(e){console.log(e),C("There was an error in adding the place ".concat(s))})),console.log(y),e.push("/")},children:[Object(O.jsxs)(g.a.Group,{controlId:"formBasicEmail",children:[Object(O.jsx)(g.a.Label,{children:"Input Business Information Here"}),Object(O.jsx)(g.a.Control,{type:"input",id:"businessName",placeholder:"Business Name",onChange:function(e){a(e.target.value)}}),Object(O.jsx)(g.a.Control,{type:"input",id:"address",placeholder:"Business Address",onChange:function(e){v(e.target.value)}}),Object(O.jsx)(g.a.Control,{type:"input",id:"image",placeholder:"Business Image Address",onChange:function(e){d(e.target.value)}})]}),Object(O.jsx)(u.a,{class:"btn btn-success",type:"submit",children:"Submit"})]})})})},w=[{id:0,businessName:"Popeyes",store:"restaurant",image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.foodbusinessnews.net%2Farticles%2F13862-popeyes-expanding-into-spain&psig=AOvVaw3EckanIyKbqTvKmxYP8UuE&ust=1617943014733000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODz_sbp7e8CFQAAAAAdAAAAABAD",address:"1110 N. Stone Ave."},{id:1,businessName:"Fleming's",store:"restaurant",image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.miamiandbeaches.com%2Frestaurant%2Fflemings-prime-steakhouse-wine-bar-brickell%2F13139&psig=AOvVaw312555X6ih7ayrHkRLoq6E&ust=1617943131291000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMj5p__p7e8CFQAAAAAdAAAAABAD",address:"6360 N Campbell Ave Suite 180"},{id:2,businessName:"Chipotle",store:"restaurant",image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ocregister.com%2Fchipotles-new-menu-items-are-exclusively-for-online-customers&psig=AOvVaw3acBZT2HSC2bOMSe6Sgxc4&ust=1617936141440000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLC9kPvP7e8CFQAAAAAdAAAAABAY",address:"905 E University Blvd #149"}];var A=function(){var e=Object(l.f)(),t=Object(c.useState)(""),n=Object(r.a)(t,2),s=n[0],a=n[1],i=Object(c.useState)(""),o=Object(r.a)(i,2),j=o[0],d=o[1],b=Object(c.useState)(""),p=Object(r.a)(b,1)[0],f=Object(c.useState)(""),v=Object(r.a)(f,2),A=v[0],y=v[1],C=Object(c.useState)(""),S=Object(r.a)(C,2),F=S[0],E=S[1];return Object(O.jsx)(x.a,{children:Object(O.jsx)(m.a,{children:Object(O.jsxs)(g.a,{onSubmit:function(){var t={name:s,business:w,review:j,rating:A};console.log(t.businessName),h.saveReviews(t).then((function(){console.log("The review by ".concat(s," was added successfully")),p(""),a(""),d(""),y("")})).catch((function(e){console.log(e),E("There was an error in adding the review by ".concat(s))})),console.log(F),e.push("/")},children:[Object(O.jsxs)(g.a.Group,{controlId:"formBasicEmail",children:[Object(O.jsx)(g.a.Label,{children:"Review Information"}),Object(O.jsx)(g.a.Control,{type:"input",id:"businessName",placeholder:"Enter Your Name",onChange:function(e){a(e.target.value)}}),Object(O.jsx)(g.a.Control,{type:"input",id:"store",placeholder:"Enter The Business You're Reviewing.",onChange:function(e){p(e.target.value)}}),Object(O.jsx)(g.a.Control,{type:"input",id:"review",placeholder:"Your review",onChange:function(e){d(e.target.value)}}),Object(O.jsx)(g.a.Control,{type:"input",id:"rating",placeholder:"Your rating out of 5",onChange:function(e){y(e.target.value)}}),Object(O.jsx)("br",{})]}),Object(O.jsx)(u.a,{class:"btn btn-success",type:"submit",children:"Submit"})]})})})},y=n(58);var C=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1];Object(c.useEffect)((function(){0===n.length&&h.getReviews().then((function(e){return s(e)})).catch((function(e){return console.log(e)}))}));var a=n.map((function(e){return Object(O.jsxs)(j.a,{children:[Object(O.jsx)("div",{class:"text-center",children:e.business}),Object(O.jsx)("div",{class:"text-center",children:e.name}),Object(O.jsxs)("div",{class:"text-center",children:['"',e.review,'"']}),Object(O.jsxs)("div",{class:"text-center",children:[e.rating,"/5"]})]})}));return Object(O.jsx)("div",{children:Object(O.jsx)(y.a,{children:a})})};var S=function(){var e=Object(l.f)(),t=Object(l.g)(),n=Object(c.useState)(""),s=Object(r.a)(n,2),a=s[0],i=s[1],o=Object(c.useState)(""),j=Object(r.a)(o,2),d=j[0],b=j[1],p=Object(c.useState)(""),f=Object(r.a)(p,2),v=f[0],w=f[1],A=Object(c.useState)(""),y=Object(r.a)(A,2),C=y[0],S=y[1];return Object(O.jsx)(x.a,{children:Object(O.jsx)(m.a,{children:Object(O.jsxs)(g.a,{onSubmit:function(){var n={name:a,address:d,image:v,id:t.state.id};console.log(n.businessName),h.editPlace(n).then((function(){console.log("The place ".concat(a," was added successfully")),i(""),b(""),w("")})).catch((function(e){console.log(e),S("There was an error in adding the place ".concat(a))})),console.log(C),e.push("/")},children:[Object(O.jsxs)(g.a.Group,{controlId:"formBasicEmail",children:[Object(O.jsx)(g.a.Label,{children:"Edit Business Information"}),Object(O.jsx)(g.a.Control,{type:"input",id:"businessName",placeholder:"Enter Name",onChange:function(e){i(e.target.value)}}),Object(O.jsx)(g.a.Control,{type:"input",id:"address",placeholder:"Enter Address",onChange:function(e){b(e.target.value)}}),Object(O.jsx)(g.a.Control,{type:"input",id:"image",placeholder:"Enter image link",onChange:function(e){w(e.target.value)}}),Object(O.jsx)("br",{})]}),Object(O.jsx)(u.a,{class:"btn btn-success",type:"submit",children:"Submit"})]})})})},F=n(27),E=n(20);var I=function(e){return Object(O.jsxs)(F.a,{bg:"light",expand:"lg",children:[Object(O.jsx)(F.a.Brand,{children:"(Kinda) Yelp Review Skeleton"}),Object(O.jsx)(F.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsxs)(E.a,{className:"mr-auto",children:[Object(O.jsx)(E.a.Link,{children:Object(O.jsx)(o.b,{to:"/",children:"Home"})}),Object(O.jsx)("br",{}),Object(O.jsx)(E.a.Link,{children:""===e.username?Object(O.jsx)(o.b,{to:"/login",children:"Login"}):Object(O.jsxs)(o.b,{to:"/logout",children:[e.username,", Logout"]})}),Object(O.jsx)(E.a.Link,{children:Object(O.jsx)(o.b,{to:"/add",children:"Add"})}),Object(O.jsx)(E.a.Link,{children:Object(O.jsx)(o.b,{to:"/review",children:"Reviews"})}),Object(O.jsx)(E.a.Link,{children:Object(O.jsx)(o.b,{to:"/addreview",children:"Add Reviews"})})]})})]})},N=(n(52),n(59));var B=function(){var e=Object(c.useState)(localStorage.getItem("username")||""),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(O.jsx)(o.a,{children:Object(O.jsxs)(N.a,{fluid:!0,children:[Object(O.jsx)(I,{username:n}),Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{exact:!0,path:"/",component:p,children:Object(O.jsx)(p,{})}),Object(O.jsx)(l.a,{path:"/login",children:Object(O.jsx)(f,{onLoggedIn:function(e){localStorage.setItem("username",e),s(e)}})}),Object(O.jsx)(l.a,{path:"/add",children:Object(O.jsx)(v,{})}),Object(O.jsx)(l.a,{path:"/edit",component:S,children:Object(O.jsx)(S,{})}),Object(O.jsx)(l.a,{path:"/review",component:C,children:Object(O.jsx)(C,{})}),Object(O.jsx)(l.a,{path:"/addreview",component:A,children:Object(O.jsx)(A,{})})]})]})})},P=(n(53),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))});i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(B,{})}),document.getElementById("root")),P()}},[[54,1,2]]]);
//# sourceMappingURL=main.9803f138.chunk.js.map