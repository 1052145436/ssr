webpackJsonp([4],{"2wu/":function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=u("5iuX"),d=(n=o)&&n.__esModule?n:{default:n};t.default=[{path:"*",component:function(){return(0,d.default)(void 0,void 0),u.e(1).then(u.bind(null,"9GlW"))}.bind(void 0)}]},"9s5s":function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=a(u("cZVi")),d=a(u("xnTX")),r=u("Sgb+"),i=(n=r)&&n.__esModule?n:{default:n};function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t.default=e,t}t.default={namespaced:!0,state:{token:""},actions:o,getters:d,mutations:i.default}},DWU8:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.TOKEN="TOKEN"},IcnI:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(u("/5sW")),o=r(u("NYxO")),d=r(u("9s5s"));function r(e){return e&&e.__esModule?e:{default:e}}n.default.use(o.default),t.default=new o.default.Store({modules:{app:d.default},strict:!1})},M93x:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u("xJD8"),o=u.n(n);for(var d in n)"default"!==d&&function(e){u.d(t,e,function(){return n[e]})}(d);var r=u("u3gd"),i=u("VU/8")(o.a,r.a,!1,null,null,null);t.default=i.exports},NHnr:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(u("5iuX"));t.createApp=function(){var e=this;return{app:new o.default({store:i.default,router:r.default,render:function(t){return(0,n.default)(this,e),t(d.default)}.bind(this)}),store:i.default,router:r.default}},u("0B/o");var o=a(u("/5sW")),d=a(u("M93x")),r=a(u("YaEn")),i=a(u("IcnI"));function a(e){return e&&e.__esModule?e:{default:e}}},"Sgb+":function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=u("bOdI"),d=(n=o)&&n.__esModule?n:{default:n},r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t.default=e,t}(u("DWU8"));t.default=(0,d.default)({},r.TOKEN,function(e,t){e.token=t})},W27U:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=u("5iuX"),d=(n=o)&&n.__esModule?n:{default:n};t.default=[{name:"home",path:"/",meta:{title:"首页"},component:function(){return(0,d.default)(void 0,void 0),u.e(2).then(u.bind(null,"KR8f"))}.bind(void 0)}]},YaEn:function(e,t,u){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=s(u("5iuX")),o=s(u("Gu7T")),d=s(u("/5sW")),r=s(u("/ocq")),i=u("9JMe"),a=s(u("IcnI")),l=s(u("W27U")),f=s(u("ntvF")),c=s(u("2wu/"));function s(e){return e&&e.__esModule?e:{default:e}}d.default.use(r.default);var v=new r.default({mode:"history",routes:[].concat((0,o.default)(l.default),(0,o.default)(f.default),(0,o.default)(c.default))});v.beforeEach(function(e,t,u){(0,n.default)(void 0,void 0),u()}.bind(void 0)),v.afterEach(function(t){(0,n.default)(void 0,void 0),e.browser&&window.scrollTo(0,0)}.bind(void 0)),(0,i.sync)(a.default,v),t.default=v}).call(t,u("W2nU"))},cZVi:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.token=void 0;var n,o=u("5iuX"),d=(n=o)&&n.__esModule?n:{default:n},r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t.default=e,t}(u("DWU8"));t.token=function(e,t){var u=e.commit;(0,d.default)(void 0,void 0),u(r.TOKEN,t)}.bind(void 0)},ntvF:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=u("5iuX"),d=(n=o)&&n.__esModule?n:{default:n};t.default=[{name:"test",path:"/test",meta:{title:"测试页面"},component:function(){return(0,d.default)(void 0,void 0),u.e(0).then(u.bind(null,"7Zj+"))}.bind(void 0)}]},tPF2:function(e,t,u){"use strict";var n,o=u("5iuX"),d=(n=o)&&n.__esModule?n:{default:n};var r=(0,u("NHnr").createApp)(),i=r.app;r.router.onReady(function(){(0,d.default)(void 0,void 0),i.$mount("#app")}.bind(void 0))},u3gd:function(e,t,u){"use strict";var n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};t.a=n},xJD8:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"App"}},xnTX:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.token=void 0;var n,o=u("5iuX"),d=(n=o)&&n.__esModule?n:{default:n};t.token=function(e){return(0,d.default)(void 0,void 0),e.token}.bind(void 0)}},["tPF2"]);
//# sourceMappingURL=main.6e82575d8b8b99dc79b0.js.map