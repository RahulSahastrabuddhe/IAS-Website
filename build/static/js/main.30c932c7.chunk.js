(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{30:function(e,t,s){},33:function(e,t,s){},65:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(14),i=s.n(n),r=(s(30),s(3)),l=s(4),o=s(6),j=s(5),d=s(16),h=s(22),b=s.n(h),u=(s(33),s(2)),O=s.n(u),m=s(0),x=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("img",{id:"logo",src:this.props.logolink,alt:"IAS",width:this.props.logowidth,height:this.props.logoheight})})}}]),s}(c.Component),p=s(23),v=s.n(p),f=s(15),g=s.n(f),N=s(24),w=s(17);function y(e){var t=a.a.useState(!1),s=Object(w.a)(t,2),c=s[0],n=s[1],i=a.a.useState(null),r=Object(w.a)(i,1)[0],l=a.a.useRef(),o="",j="";return a.a.useEffect((function(){window.paypal.Buttons({createOrder:function(e,t){return t.order.create({intent:"CAPTURE",purchase_units:[{description:"IAS Membership",amount:{currency_code:"USD",value:5}}]})},onApprove:function(){var e=Object(N.a)(g.a.mark((function e(t,s){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.order.capture();case 2:c=e.sent,n(!0),console.log(c);case 5:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),onError:function(e){console.error(e)}}).render(l.current)}),[]),c?(console.log(o),console.log(j),Object(m.jsx)("div",{children:"Payment successful!"})):r?Object(m.jsx)("div",{children:"Error Occurred in processing payment.! Please try again."}):Object(m.jsx)("div",{className:"popup",children:Object(m.jsx)("div",{className:"modal",children:Object(m.jsxs)("div",{className:"modal_content",children:[Object(m.jsx)("span",{className:"close",onClick:function(){e.toggle()},children:"\xd7    "}),Object(m.jsx)("h3",{children:"Become A Member"}),Object(m.jsx)("h4",{children:"Total Amount in USD: $10"}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"payerName",name:"payerName",onChange:function(e){return t=e.target.value,void(o=t);var t},required:!0})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"payerMail",name:"payerName",onChange:function(e){return t=e.target.value,void(j=t);var t},required:!0})]}),Object(m.jsx)("div",{className:"disableBtn",ref:l})]})})})}var k=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(r.a)(this,s);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={seen:!1},e.togglePop=function(){e.setState({seen:!e.state.seen})},e}return Object(l.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t=this.props.data.description;return Object(m.jsxs)(m.Fragment,{children:[this.state.seen?Object(m.jsx)(y,{toggle:this.togglePop}):null,Object(m.jsxs)("header",{id:"home",style:{height:"auto"},children:[Object(m.jsxs)("nav",{id:"nav-wrap",children:[Object(m.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(m.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(m.jsxs)("ul",{id:"nav",className:"nav",children:[Object(m.jsx)(x,{logolink:"images/logo.png",logowidth:"50",logoheight:"50"}),Object(m.jsx)("li",{className:"current",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#AboutUs",children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:"Advisor"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Team"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#eventHost",children:"Events"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})}),Object(m.jsx)(x,{logolink:"images/ut-dallas-logo.png",logowidth:"50",logoheight:"50"})]})]}),Object(m.jsx)("div",{className:"row banner",children:Object(m.jsxs)("div",{className:"banner-text",children:[Object(m.jsx)(O.a,{bottom:!0,children:Object(m.jsx)("h2",{className:"responsive-headline",children:e})}),Object(m.jsx)(O.a,{bottom:!0,duration:1200,children:Object(m.jsxs)("h3",{children:[t,"."]})}),Object(m.jsx)("hr",{}),Object(m.jsx)(O.a,{bottom:!0,duration:2e3,children:Object(m.jsx)("div",{className:"banner-video",children:Object(m.jsx)(v.a,{muted:!1,width:480,height:270,className:"banner-video",url:"https://www.youtube.com/embed/SCOHR_Owj74"})})}),Object(m.jsx)(O.a,{bottom:!0,duration:2e3,children:Object(m.jsxs)("ul",{className:"social",children:[Object(m.jsxs)("a",{href:!0,onClick:this.togglePop,className:"button btn member-btn",children:[Object(m.jsx)("i",{className:"fa fa-book"}),"Become A Member"]}),Object(m.jsxs)("a",{href:!0,className:"button btn payment-btn",children:[Object(m.jsx)("i",{class:"fa fa-money"}),"Payment for IAS"]})]})})]})}),Object(m.jsx)("p",{className:"scrolldown",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#AboutUs",children:Object(m.jsx)("i",{className:"icon-down-circle"})})})]})]})}}]),s}(c.Component),C=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return this.props.data?Object(m.jsx)("footer",{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)(O.a,{bottom:!0,children:Object(m.jsx)("div",{className:"twelve columns",children:Object(m.jsxs)("ul",{className:"copyright",children:[Object(m.jsx)("li",{children:"\xa9 Copyright 2021 IAS UTD"}),Object(m.jsxs)("li",{children:["Design by"," ",Object(m.jsx)("a",{title:"Styleshout",href:"https://www.linkedin.com/in/rahul-sahastrabuddhe/",children:"Rahul Sahastrabuddhe"})]})]})})}),Object(m.jsx)("div",{id:"go-top",children:Object(m.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(m.jsx)("i",{className:"icon-up-open"})})})]})}):null}}]),s}(c.Component),A=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t=this.props.data.bio,s=this.props.data.address.street,c=this.props.data.address.city,a=this.props.data.address.state,n=this.props.data.address.zip,i=this.props.data.phone,r=this.props.data.email;return Object(m.jsx)("section",{id:"about",children:Object(m.jsx)(O.a,{duration:1e3,children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"three columns",children:[Object(m.jsx)("img",{className:"profile-pic",src:"images/ravi_narayan.png",alt:"ravi_narayan"}),Object(m.jsx)("p",{style:{font:"opensans-semibold",color:"red"},children:"Ravishankar Narayan, PHD"}),Object(m.jsx)("p",{children:"Assistant Professor Information System"})]}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("h2",{children:"From the Advisor"}),Object(m.jsx)("p",{className:"advisor-info",children:t}),Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"columns contact-details",children:[Object(m.jsx)("h2",{children:"Contact Details"}),Object(m.jsxs)("p",{className:"address",children:[Object(m.jsx)("span",{children:e}),Object(m.jsx)("br",{}),Object(m.jsxs)("span",{children:[s,Object(m.jsx)("br",{}),c," ",a,", ",n]}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:i}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:r})]})]})})]})]})})})}}]),s}(c.Component),S=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.who.map((function(e){return Object(m.jsx)("p",{children:e.description})})),t=this.props.data.vision.map((function(e){return Object(m.jsx)("p",{children:e.description})})),s=this.props.data.mission.map((function(e){return Object(m.jsx)("p",{children:e.description})}));return Object(m.jsxs)("section",{id:"AboutUs",children:[Object(m.jsx)(O.a,{left:!0,duration:1300,children:Object(m.jsxs)("div",{className:"row who",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Who We Are"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:Object(m.jsx)("div",{className:"row item",children:Object(m.jsx)("div",{className:"twelve columns",children:e})})})]})}),Object(m.jsx)(O.a,{left:!0,duration:1300,children:Object(m.jsxs)("div",{className:"row vision",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Our Vision"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:t})]})}),Object(m.jsx)(O.a,{left:!0,duration:1300,children:Object(m.jsxs)("div",{className:"row mission",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Our Mission"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:s})]})})]})}}]),s}(c.Component),D=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t=this.props.data.address.street,s=this.props.data.address.city,c=this.props.data.address.state,a=this.props.data.address.zip,n=this.props.data.phone,i=this.props.data.contactmessage;return Object(m.jsxs)("section",{id:"contact",children:[Object(m.jsx)(u.Fade,{bottom:!0,duration:1e3,children:Object(m.jsxs)("div",{className:"row section-head",children:[Object(m.jsx)("div",{className:"two columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Get In Touch."})})}),Object(m.jsx)("div",{className:"ten columns",children:Object(m.jsx)("p",{className:"lead",children:i})})]})}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)(u.Slide,{left:!0,duration:1e3,children:Object(m.jsxs)("div",{className:"eight columns",children:[Object(m.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",children:Object(m.jsxs)("fieldset",{children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{className:"submit",children:"Submit"}),Object(m.jsx)("span",{id:"image-loader",children:Object(m.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(m.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(m.jsxs)("div",{id:"message-success",children:[Object(m.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(m.jsx)("br",{})]})]})}),Object(m.jsx)(u.Slide,{right:!0,duration:1e3,children:Object(m.jsxs)("aside",{className:"four columns footer-widgets",children:[Object(m.jsxs)("div",{className:"widget widget_contact",children:[Object(m.jsx)("h4",{children:"Address and Phone"}),Object(m.jsxs)("p",{className:"address",children:[e,Object(m.jsx)("br",{}),t," ",Object(m.jsx)("br",{}),s,", ",c," ",a,Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:n})]})]}),Object(m.jsxs)("div",{className:"widget widget_tweets",children:[Object(m.jsx)("h4",{className:"widget-title",children:"Latest Tweets"}),Object(m.jsx)("ul",{id:"twitter",children:Object(m.jsxs)("li",{children:[Object(m.jsxs)("span",{children:["The Intelligence Analytic Society is hosting an event with Lohit Pratap Singh. Lohit is currently working with Amazon as a Senior Product Manager. He is a dedicated Alumnus of our university as well as the former President of the IAS club.",Object(m.jsx)("a",{href:"https://lnkd.in/ea7tEtk",target:"_blank",rel:"noreferrer",children:"https://lnkd.in/ea7tEtk"})]}),Object(m.jsx)("b",{children:Object(m.jsx)("a",{href:"./",children:"2 Days Ago"})})]})})]})]})})]})]})}}]),s}(c.Component),E=s(25),F=s.n(E),P=0,M=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(m.jsx)("div",{className:"columns portfolio-item",children:Object(m.jsxs)("div",{className:"item-wrap",children:[Object(m.jsx)(F.a,{alt:e.title,src:t}),Object(m.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(m.jsx)("div",{style:{textAlign:"center"},children:e.title})}),Object(m.jsx)("div",{style:{textAlign:"center"},children:e.category})]})},P++)}));return Object(m.jsx)("section",{id:"portfolio",children:Object(m.jsx)(O.a,{left:!0,duration:1e3,distance:"40px",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"twelve columns collapsed",children:[Object(m.jsx)("h1",{children:"Meet Our Team."}),Object(m.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})})}}]),s}(c.Component),T=s(12),_=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).changeEventList=c.changeEventList.bind(Object(T.a)(c)),c}return Object(l.a)(s,[{key:"changeEventList",value:function(){}},{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.events.map((function(e){return Object(m.jsxs)("div",{className:"row eachEvent",children:[Object(m.jsx)("div",{className:"nine columns main-col",children:Object(m.jsx)("div",{className:"row item",children:Object(m.jsxs)("div",{className:"twelve columns",children:[Object(m.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(m.jsx)("p",{children:e.title})}),Object(m.jsx)("p",{children:e.purpose})]})})}),Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h5",{children:e.eventDate})})]})}));return Object(m.jsx)("section",{id:"eventHost",children:Object(m.jsx)(O.a,{left:!0,duration:1e3,distance:"40px",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"twelve columns collapsed",children:[Object(m.jsx)("h1",{children:"Events."}),Object(m.jsx)("div",{className:"eventTime",children:Object(m.jsxs)("ul",{id:"nav",className:"nav",children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"./",onClick:this.changeEventList(),children:"Upcoming"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"./",onClick:this.changeEventList(),children:"Past"})})]})}),e]})})})})}}]),s}(c.Component),L=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"utd-brand",children:Object(m.jsx)(x,{logolink:"images/wordmark_1L_white.svg",logowidth:"400",logoheight:"50"})})})}}]),s}(c.Component),I=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).state={foo:"bar",storedData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),c}return Object(l.a)(s,[{key:"getStoredData",value:function(){b.a.ajax({url:"./storedData.json",dataType:"json",cache:!1,success:function(e){this.setState({storedData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getStoredData()}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(k,{data:this.state.storedData.main}),Object(m.jsx)(S,{data:this.state.storedData.AboutUs}),Object(m.jsx)(A,{data:this.state.storedData.main}),Object(m.jsx)(M,{data:this.state.storedData.portfolio}),Object(m.jsx)(_,{data:this.state.storedData.eventHost}),Object(m.jsx)(D,{data:this.state.storedData.main}),Object(m.jsx)(C,{data:this.state.storedData.main}),Object(m.jsx)(L,{})]})}}]),s}(c.Component),U=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,66)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};i.a.render(Object(m.jsx)(I,{}),document.getElementById("root")),U()}},[[65,1,2]]]);
//# sourceMappingURL=main.30c932c7.chunk.js.map