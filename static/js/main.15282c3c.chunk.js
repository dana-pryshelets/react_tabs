(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(2),r=a.n(l),i=a(3),s=a(4),o=a(6),b=a(5),u=function(e){var t=e.tabs,a=e.selectedTabId,n=e.onTabSelected;return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"nav nav-tabs nav-fill"},t.map((function(e){return c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{onClick:function(){return n(e)},className:"nav-link",href:"#"},e.id),a===e.id?c.a.createElement("p",null,e.content):"")}))))},m=(a(12),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),d=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={selectedTab:m[0]},e.onTabSelected=function(t){e.setState({selectedTab:t})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.selectedTab;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Selected tab is",e.title)),c.a.createElement(u,{tabs:m,selectedTabId:e.id,onTabSelected:this.onTabSelected}))}}]),a}(c.a.Component);r.a.render(c.a.createElement(d,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.15282c3c.chunk.js.map