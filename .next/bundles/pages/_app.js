module.exports=__NEXT_REGISTER_PAGE("/_app",function(){return{page:webpackJsonp([1],{207:function(e,t,n){e.exports=n(208)},208:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return h});var r=n(19),o=n.n(r),a=n(209),u=n.n(a),i=n(1),c=n.n(i);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,r,i,l,h;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.a),n=t,r=[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps,r=e.phoneNumber;return c.a.createElement(a.Container,null,c.a.createElement(t,p({},n,{phoneNumber:r})))}}],i=[{key:"getInitialProps",value:(l=o.a.mark(function e(t){var n,r,a,u,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,fetch("https://api.myjson.com/bins/1c58pg");case 3:return a=e.sent,e.next=6,a.json();case 6:if(u=e.sent,console.log(u.PhoneNumber),i={},!n.getInitialProps){e.next=13;break}return e.next=12,n.getInitialProps(r);case 12:i=e.sent;case 13:return e.abrupt("return",{pageProps:i,phoneNumber:u.PhoneNumber});case 14:case"end":return e.stop()}},e,this)}),h=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=l.apply(e,t);function a(e,t){try{var a=o[e](t),c=a.value}catch(e){return void r(e)}a.done?n(c):Promise.resolve(c).then(u,i)}function u(e){a("next",e)}function i(e){a("throw",e)}u()})},function(e){return h.apply(this,arguments)})}],r&&s(n.prototype,r),i&&s(n,i),t}()},209:function(e,t,n){e.exports=n(210)},210:function(e,t,n){"use strict";var r=n(15),o=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=w,t.Container=t.default=void 0;var a=o(n(19)),u=o(n(45)),i=o(n(211)),c=o(n(32)),l=o(n(21)),p=o(n(6)),s=o(n(7)),f=o(n(22)),h=o(n(23)),d=r(n(1)),y=o(n(8)),b=o(n(99)),v=n(20),m=n(46),P=function(e){function t(){return(0,p.default)(this,t),(0,f.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}var n;return(0,h.default)(t,e),(0,s.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,m.makePublicRouterInstance)(this.props.router),_containerProps:(0,c.default)({},this.props)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=w(t);return d.default.createElement(g,null,d.default.createElement(n,(0,i.default)({},r,{url:o})))}}],[{key:"getInitialProps",value:(n=(0,u.default)(a.default.mark(function e(t){var n,r,o;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,(0,v.loadGetInitialProps)(n,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})}]),t}(d.Component);t.default=P,Object.defineProperty(P,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"App"}),Object.defineProperty(P,"childContextTypes",{configurable:!0,enumerable:!0,writable:!0,value:{_containerProps:y.default.any,headManager:y.default.object,router:y.default.object}});var g=function(e){function t(){return(0,p.default)(this,t),(0,f.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=this.props.hash;if(e){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"shouldComponentUpdate",value:function(e){return!(0,b.default)(this.props,e)}},{key:"render",value:function(){var e=this.props.children;return d.default.createElement(d.default.Fragment,null,e)}}]),t}(d.Component);t.Container=g,Object.defineProperty(g,"contextTypes",{configurable:!0,enumerable:!0,writable:!0,value:{_containerProps:y.default.any}});var _=(0,v.execOnce)(function(){0});function w(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return _(),r},get pathname(){return _(),t},get asPath(){return _(),n},back:function(){_(),e.back()},push:function(t,n){return _(),e.push(t,n)},pushTo:function(t,n){_();var r=n?t:null,o=n||t;return e.push(r,o)},replace:function(t,n){return _(),e.replace(t,n)},replaceTo:function(t,n){_();var r=n?t:null,o=n||t;return e.replace(r,o)}}}},211:function(e,t,n){var r=n(72);function o(){return e.exports=o=r||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}e.exports=o}},[207]).default}});