module.exports=__NEXT_REGISTER_PAGE("/",function(){return{page:webpackJsonp([3],{212:function(e,t,n){e.exports=n(213)},213:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(19),o=n.n(r),a=n(1),i=n.n(a),c=n(102),l=n.n(c),u=n(103),s=n(111),f=n(24),p=(n(8),n(28)),y=j(["\n  padding: 60px 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #F2F2F2;\n"]),b=j(["\n  text-align: center;\n  ","\n  margin: 0;\n  margin-bottom: 10px;\n  color: #6c63ff;\n"]),m=j(["\n  text-align : center;\n  ","\n  margin: 10px;\n"]),h=j(["\n  text-align: center;\n  ","\n"]),d=j(["\n  width: 100%;\n  max-width: 1200px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  margin-top: 60px;\n"]),g=j(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 20px 20px;\n  max-width: 600px;\n"]),v=j(["\n  height: 125px;\n"]);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var O=f.a.div(y),E=f.a.h2(b,Object(p.a)(48,200)),P=f.a.p(m,Object(p.a)(16,200)),T=f.a.p(h,Object(p.a)(10,200)),k=f.a.div(d),S=f.a.div(g),z=f.a.img(v),C=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=_(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))).state={features:[{img:"../static/icons/_ionicons_svg_md-globe.svg",title:"Access around the globe wherever you have access.",legal:"not applicable for any location outside of the current county you are in"},{img:"../static/icons/_ionicons_svg_md-chatboxes.svg",title:"Message anyone from anywhere because you have so many friends and stuff.",legal:""},{img:"../static/icons/_ionicons_svg_md-construct.svg",title:"Constant and relentless support even when you don't want it.",legal:"support restrictions apply, please do not ask for it directly."}]},e}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),n=t,(r=[{key:"render",value:function(){return i.a.createElement(O,null,i.a.createElement(E,null,"These are some cool features"),i.a.createElement(P,null,"If you look at these features, I'll bet you'd really like to buy some things."),i.a.createElement(k,null,this.state.features.map(function(e){return i.a.createElement(S,null,i.a.createElement(z,{src:e.img}),i.a.createElement(P,null,e.title),i.a.createElement(T,null,e.legal))})))}}])&&w(n.prototype,r),o&&w(n,o),t}();C.propTypes={};var I=C,R=n(112),q=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  body {\n    margin: 0;\n  }\n  * {\n    box-sizing: border-box;\n  }\n  p {\n    margin: 0;\n  }\n"]);function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}Object(f.b)(q);var G=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),A(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,r,c,f,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),n=t,r=[{key:"render",value:function(){var e=this.props.data.product1;return i.a.createElement(u.a,{phoneNumber:this.props.phoneNumber},i.a.createElement(s.a,{price:e.price,frequencyText:e.frequencyText,legal:e.legal,title:"This is the Title",subtitle:"This is the subtext that will say some crazy thing and help sell more things.",buttonText:"view packages",backgroundImg:"../static/hero/hero-westworld.png"}),i.a.createElement(I,null),i.a.createElement(R.a,null))}}],c=[{key:"getInitialProps",value:(f=o.a.mark(function e(t){var n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.req,e.next=3,l()("https://api.myjson.com/bins/1c58pg");case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",{data:r});case 8:case"end":return e.stop()}},e,this)}),p=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=f.apply(e,t);function a(e,t){try{var a=o[e](t),l=a.value}catch(e){return void r(e)}a.done?n(l):Promise.resolve(l).then(i,c)}function i(e){a("next",e)}function c(e){a("throw",e)}i()})},function(e){return p.apply(this,arguments)})}],r&&N(n.prototype,r),c&&N(n,c),t}();t.default=G}},[212]).default}});