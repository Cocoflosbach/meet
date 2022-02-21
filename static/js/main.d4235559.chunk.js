(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{202:function(e,t,n){},204:function(e,t,n){},205:function(e,t,n){},207:function(e,t,n){},357:function(e,t,n){},358:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(66),c=n.n(o),s=(n(202),n(51)),i=n(19),l=n(20),u=n(21),d=n(23),h=n(27),m=n.n(h),p=(n(204),n(205),n(126),n(2)),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onShowDetails=function(){e.setState({collapsed:!1})},e.onHideDetails=function(){e.setState({collapsed:!0})},e.state={collapsed:!0},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.event,t=this.state.collapsed;return Object(p.jsx)("div",{className:"container bg-white max-w-2xl mx-auto px-4 sm:py-8 sm:px-6  lg:px-8",children:t?Object(p.jsxs)("div",{className:"Events shadow-lg w-full min-h-80 bg-white-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75",children:[Object(p.jsxs)("div",{className:"text-left px-2 py-4",children:[Object(p.jsx)("h1",{className:"summary text-2xl",children:e.summary}),Object(p.jsxs)("p",{className:"date-timezone text-sm",children:[e.start.dateTime,e.start.timeZone]}),Object(p.jsx)("p",{className:"location",children:e.location})]}),Object(p.jsx)("div",{className:" px-4 py-4 w-40 text-right",children:Object(p.jsx)("button",{type:"button",className:"details shadow-md text-purple-800 ",onClick:t?this.onShowDetails:this.onHideDetails,children:t?"Show details":"Hide details"})})]}):Object(p.jsxs)("div",{className:"Events extra shadow-lg w-full min-h-80 bg-white-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75",children:[Object(p.jsxs)("div",{className:"text-left px-2 py-4",children:[Object(p.jsx)("h1",{className:"summary text-2xl",children:e.summary}),Object(p.jsxs)("p",{className:"date-timezone text-sm",children:[e.start.dateTime,e.start.timeZone]}),Object(p.jsx)("p",{className:"location",children:e.location}),Object(p.jsx)("p",{className:"description",children:e.description})]}),Object(p.jsx)("div",{className:"button",children:Object(p.jsx)("button",{className:"details shadow-md text-white px-4 py-4 bg-purple-700 rounded-md mr-48 mb-4  ",onClick:t?this.onShowDetails:this.onHideDetails,children:t?"Show details":"Hide details"})})]})})}}]),n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(p.jsx)("ul",{className:"EventList grid grid-cols-1 gap-y-5 gap-x-3 sm:grid-cols-1 md:grid-cols-2 xl:gap-x-8",children:e.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(f,{event:e})},e.id)}))})}}]),n}(a.Component),j=b,v=(n(207),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"Alert",children:Object(p.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component)),g=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="blue",a}return Object(l.a)(n)}(v),x=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="Red",a}return Object(l.a)(n)}(v),w=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,infoText:"",suggestions:a});e.setState({query:n,infoText:"We cannot find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"CitySearch",children:[Object(p.jsx)("p",{className:"font-semibold",children:"Search Event By City"}),Object(p.jsx)(g,{text:this.state.infoText}),Object(p.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(p.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(p.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(p.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(p.jsx)("button",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),O=w,y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleInputChanged=function(t){var n=parseInt(t.target.value);return n>=1&&n<=32?e.setState({query:n,errorText:""},e.props.updateNumOfEvents(n)):e.setState({query:n,errorText:"Please choose a number between 1 and 32"})},e.state={query:"",errorText:""},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"NumberOfEvents",children:[Object(p.jsx)("p",{className:"font-semibold",children:"Number of Events"}),Object(p.jsx)("input",{type:"number",className:"number-of-events",value:this.state.query,onChange:this.handleInputChanged}),Object(p.jsx)(x,{className:"error-alert",text:this.state.errorText})]})}}]),n}(a.Component);y.defaultProps={numberOfEvents:32};var k=y,S=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)("img",{alt:"",crossOrigin:"*",variant:"top",src:"https://i.imgur.com/ax0HWlT.jpg",className:"w-full h-full object-center object-cover lg:w-full lg:h-full"})})}}]),n}(a.Component),N=S,T=n(191),C=n(119),E=n.n(C),W=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],Z=n(75),D=n.n(Z),I=function(e){var t=e.map((function(e){return e.location}));return Object(T.a)(new Set(t))},A=function(){var e=Object(s.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else{var t=window.location.protocol+"//"+window.location.host;window.history.pushState("","",t)}},q=function(){var e=Object(s.a)(m.a.mark((function e(){var t,n,a,r,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(D.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return D.a.done(),e.abrupt("return",W);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),D.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,B();case 10:if(!(n=e.sent)){e.next=20;break}return L(),a="https://b8wc3rdmth.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+n,e.next=16,E.a.get(a);case 16:return(r=e.sent).data&&(o=I(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),D.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(s.a)(m.a.mark((function e(t){var n,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://b8wc3rdmth.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(s.a)(m.a.mark((function e(){var t,n,a,r,o,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,A(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,E.a.get("https://b8wc3rdmth.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url ");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&R(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=n(359),J=n(363),F=n(364),U=n(187),H=n(188),_=n(78),z=n(192),P=n(18),G=n(366),Y=n(182),K=n(95),V=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(P.a)(n,2),o=r[0],c=r[1],s=["#2E1042","#FC3D5F","#6FCDB9","#804AAA","#FCCB21"];Object(a.useEffect)((function(){c((function(){return i()}))}),[t]);var i=function(){return["React","JavaScript","Node","jQuery","Angular"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}))};return Object(p.jsx)(M.a,{height:400,children:Object(p.jsx)(G.a,{children:Object(p.jsx)(Y.a,{data:o,cx:200,cy:200,innerRadius:20,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},children:o.map((function(e,t){return Object(p.jsx)(K.a,{fill:s[t%s.length]},"cell-".concat(t))}))})})})};n(357);var X=function(e){return e.showWelcomeScreen?Object(p.jsx)("div",{className:"WelcomeScreen py-20",children:Object(p.jsxs)("div",{className:"container w-2/3 h-w-3/5 mx-auto object-center shadow-md px-4 pb-8 rounded-r-lg rounded-l-lg",children:[Object(p.jsx)("div",{className:"w-64 h-64 logo justify-self-center mx-auto",children:Object(p.jsx)("img",{alt:"",crossOrigin:"*",variant:"top",src:"https://i.imgur.com/yOdwSuL.png"})}),Object(p.jsx)("h1",{className:"text-amber-700 text-2xl font-bold",children:"Welcome to the Meet app"}),Object(p.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(p.jsx)("div",{className:"button_cont",align:"center",children:Object(p.jsxs)("div",{className:"google-btn",children:[Object(p.jsx)("div",{className:"google-icon-wrapper",children:Object(p.jsx)("img",{className:"google-icon relative ml-10",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(p.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",className:"btn-text",children:Object(p.jsx)("b",{children:"Sign in with google"})})]})}),Object(p.jsx)("a",{href:"https://Cocoflosbach.github.io/meet/privacy.html",rel:"nofollow noopener",className:"text-amber-700 text-sm",children:"Privacy policy"})]})}):null},Q=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getData=function(){var e=a.state,t=e.locations,n=e.events;return t.map((function(e){var t=n.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},a.updateEvents=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.state.numberOfEvents;q().then((function(n){var r=("all"===e?n:n.filter((function(t){return t.location===e}))).slice(0,t);a.mounted&&a.setState({events:r,currentLocation:e})}))},a.updateNumOfEvents=function(e){a.setState({numberOfEvents:e},a.updateEvents(a.state.currentLocation,e))},a.state={locations:[],events:[],numberOfEvents:32,currentLocation:"all",showWelcomeScreen:void 0},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(m.a.mark((function e(){var t,n,a,r,o=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,A(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&q().then((function(e){o.mounted&&o.setState({events:e.slice(0,o.state.numberOfEvents),locations:I(e)})}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this,t=this.state,n=t.locations,a=t.events,r=t.numberOfEvents;return void 0===this.state.showWelcomeScreen?Object(p.jsx)("div",{className:"App"}):Object(p.jsxs)("div",{className:"App",children:[navigator.onLine?Object(p.jsx)(g,{text:" "}):Object(p.jsx)(g,{text:"You currently are offline!"}),Object(p.jsx)(N,{}),Object(p.jsx)(O,{locations:n,updateEvents:this.updateEvents}),Object(p.jsx)(k,{numberOfEvents:r,updateNumOfEvents:function(t){e.updateNumOfEvents(t)}}),Object(p.jsxs)("div",{className:"data-vis-wrapper ",children:[Object(p.jsx)("div",{children:Object(p.jsx)("h4",{className:"font-semibold",children:" Events in each city "})}),Object(p.jsx)(V,{events:a}),Object(p.jsx)(M.a,{height:400,children:Object(p.jsxs)(J.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(p.jsx)(F.a,{}),Object(p.jsx)(U.a,{type:"category",dataKey:"city",name:"city"}),Object(p.jsx)(H.a,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),Object(p.jsx)(_.a,{cursor:{strokeDasharray:"3 3"}}),Object(p.jsx)(z.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(p.jsx)(j,{events:a}),Object(p.jsx)(X,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){B()}})]})}}]),n}(a.Component),$=Q,ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,367)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))},ae=n(189);c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)($,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");ee?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):te(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):te(t,e)}))}}(),ne(),ae.config("4ccc3d8e4dad4574b5f713f0ef8f1feb").install()}},[[358,1,2]]]);
//# sourceMappingURL=main.d4235559.chunk.js.map