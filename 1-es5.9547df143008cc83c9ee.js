function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8nyR":function(t,e,n){"use strict";var r,i,c=n("mrSG"),o=n("CoC1"),a=n("NZHw"),u=function(){function t(){_classCallCheck(this,t),this.isInitialised=!1,this.isBootstrapped=!1,this._dirty=!0}return _createClass(t,[{key:"ngxsOnChanges",value:function(t){var e;this.dirty&&this.isBootstrapped&&(this.dirty=!1,null===(e=this.ngxsDataDoCheck)||void 0===e||e.call(this))}},{key:"ngxsOnInit",value:function(){this.isInitialised=!0}},{key:"ngxsAfterBootstrap",value:function(){var t;this.isBootstrapped=!0,this.dirty&&(this.dirty=!1,null===(t=this.ngxsDataDoCheck)||void 0===t||t.call(this))}},{key:"markAsDirtyAfterReset",value:function(){var t;this.dirty=!0,null===(t=this.ngxsDataAfterReset)||void 0===t||t.call(this)}},{key:"dirty",get:function(){return this._dirty},set:function(t){this._dirty=t}}]),t}(),s=(i=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),_createClass(e,[{key:"getState",value:function(){return this.ctx.getState()}},{key:"dispatch",value:function(t){return this.ctx.dispatch(t)}},{key:"patchState",value:function(t){this.ctx.patchState(t)}},{key:"setState",value:function(t){this.ctx.setState(t)}},{key:"reset",value:function(){this.ctx.setState(this.initialState),this.markAsDirtyAfterReset()}},{key:"snapshot",get:function(){return Object(a.p)(this.getState())}},{key:"ctx",get:function(){return Object(a.n)(this,this.context)}}]),e}(u),Object(c.a)([Object(o.a)(),Object(c.b)("design:type",Object),Object(c.b)("design:paramtypes",[])],i.prototype,"snapshot",null),Object(c.a)([Object(o.b)(),Object(c.c)(0,Object(o.e)("patchValue")),Object(c.b)("design:type",Function),Object(c.b)("design:paramtypes",[Object]),Object(c.b)("design:returntype",void 0)],i.prototype,"patchState",null),Object(c.a)([Object(o.b)(),Object(c.c)(0,Object(o.e)("stateValue")),Object(c.b)("design:type",Function),Object(c.b)("design:paramtypes",[Object]),Object(c.b)("design:returntype",void 0)],i.prototype,"setState",null),Object(c.a)([Object(o.b)(),Object(c.b)("design:type",Function),Object(c.b)("design:paramtypes",[]),Object(c.b)("design:returntype",void 0)],i.prototype,"reset",null),i),l=(r=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),_createClass(e,[{key:"getState",value:function(){return this.ctx.getState()}},{key:"dispatch",value:function(t){return this.ctx.dispatch(t)}},{key:"patchState",value:function(t){this.ctx.patchState(t)}},{key:"setState",value:function(t){this.ctx.setState(t)}},{key:"reset",value:function(){this.ctx.setState(this.initialState),this.markAsDirtyAfterReset()}},{key:"snapshot",get:function(){return Object(a.p)(this.getState())}},{key:"ctx",get:function(){return Object(a.n)(this,this.context)}}]),e}(u),Object(c.a)([Object(o.a)(),Object(c.b)("design:type",Object),Object(c.b)("design:paramtypes",[])],r.prototype,"snapshot",null),Object(c.a)([Object(o.b)(),Object(c.c)(0,Object(o.e)("patchValue")),Object(c.b)("design:type",Function),Object(c.b)("design:paramtypes",[Object]),Object(c.b)("design:returntype",void 0)],r.prototype,"patchState",null),Object(c.a)([Object(o.b)(),Object(c.c)(0,Object(o.e)("stateValue")),Object(c.b)("design:type",Function),Object(c.b)("design:paramtypes",[Object]),Object(c.b)("design:returntype",void 0)],r.prototype,"setState",null),Object(c.a)([Object(o.b)(),Object(c.b)("design:type",Function),Object(c.b)("design:paramtypes",[]),Object(c.b)("design:returntype",void 0)],r.prototype,"reset",null),r);n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return l}))},CoC1:function(t,e,n){"use strict";var r=n("NZHw"),i=n("7+OI"),c=n("LRne"),o=n("lJxs"),a={cancelUncompleted:!0};function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return function(e,n,a){Object(r.x)(e,a);var u=a.value,s=n.toString();return a.value=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];var l=this,p=null,b=r.b.getRepositoryByInstance(l),f=b.operations,O=f[s],d=b.stateMeta,y=Object(r.r)(u);if(!O){var h=Object(r.a)(u),j=d.name,v=Object(r.e)({stateName:j,methodName:s,argumentsNames:h,argumentRegistry:y});O=f[s]={type:v,options:{cancelUncompleted:t.cancelUncompleted}},d.actions[O.type]=[{type:O.type,options:O.options,fn:O.type}]}r.b.ensureMappedState(d).instance[O.type]=function(){return p=u.apply(l,n),Object(i.a)(p)?Object(c.a)(null).pipe(Object(o.a)((function(){return p}))):p};var g=r.b.createAction(O,n,y),_=r.c.store.dispatch(g);return Object(i.a)(p)?Object(r.h)(_,p):p},a}}n("5Q4k");var s=n("8Y7J"),l=new s.p("NGXS_DATA_STORAGE_DECODE_TYPE_TOKEN");n("e1JD");var p=n("F7qv"),b=new s.p("NGXS_DATA_STORAGE_PREFIX_TOKEN");n("sXi/");var f=n("UFJs"),O=n("zqRF");function d(t){return function(e){var n=Object(r.q)(e),i=Object(r.s)(e);if(!n.name||!i)throw new Error(f.c.NGXS_PERSISTENCE_STATE);return new Proxy(e,{construct:function(e,n){var c=Reflect.construct(e,n);return function(t){var e;try{var n=null===(e=p.a.injector)||void 0===e?void 0:e.get(O.a);t.forEach((function(t){n.providers.add(t)}))}catch(r){throw new Error(f.c.NGXS_PERSISTENCE_CONTAINER)}}(function(t,e){var n,i,c=null===(n=p.a.injector)||void 0===n?void 0:n.get(b,"@ngxs.store."),o=null===(i=p.a.injector)||void 0===i?void 0:i.get(l,"none");return e?(Array.isArray(e)?e:[e]).map((function(e){return function(t){var e=t.option,n=t.decodeType,i=t.prefix;return function(t,e){return"path"in e||(e=Object.assign(Object.assign({},e),{get path(){return t.stateMeta&&t.stateMeta.path}})),e}(t.meta,Object.assign(Object.assign({},e),{ttl:Object(r.u)(e.ttl)?e.ttl:-1,version:Object(r.u)(e.version)?e.version:1,decode:Object(r.u)(e.decode)?e.decode:n,prefixKey:Object(r.u)(e.prefixKey)?e.prefixKey:i,nullable:!!Object(r.u)(e.nullable)&&e.nullable}))}({option:e,prefix:c,decodeType:o,meta:t})})):function(t,e,n){return[{get path(){return t.stateMeta&&t.stateMeta.path},existingEngine:localStorage,ttl:-1,version:1,decode:n,prefixKey:e,nullable:!1}]}(t,c,o)}(i,t)),c}})}}function y(){return function(t){var e=Object(r.q)(t);if(!e.name)throw new Error(f.c.NGXS_DATA_STATE);Object(r.j)(t,e),function(t,e,n){Object.defineProperties(t.prototype,{name:{enumerable:!0,configurable:!0,value:e.name},initialState:{enumerable:!0,configurable:!0,get:function(){return Object(r.l)(n)}},context:Object(r.i)(t)})}(t,e,Object(r.f)(t)),Object(r.k)(t)}}function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300,e=null;return function(n,i,c){var o=c.value;return c.value=function(){for(var n,i=this,c=arguments.length,a=new Array(c),u=0;u<c;u++)a[u]=arguments[u];Object(r.g)(),null===(n=r.c.ngZone)||void 0===n||n.runOutsideAngular((function(){window.clearTimeout(e),e=window.setTimeout((function(){var t=o.apply(i,a);t&&Object(s.V)()&&console.warn(f.c.NGXS_DATA_ASYNC_ACTION_RETURN_TYPE,t)}),t)}))},c}}function j(t){return function(e,n,i){var c=t.trim();if(!c)throw new Error(f.c.NGXS_INVALID_PAYLOAD_NAME);Object(r.o)(e,n).createPayloadType(c,n,i)}}function v(t){return function(e,n,i){var c=t.trim();if(!c)throw new Error(f.c.NGXS_INVALID_ARG_NAME);Object(r.o)(e,n).createArgumentName(c,n,i)}}function g(){return function(t,e,n){Object(r.y)(t,e);var i=n.get;return n.get=function(){var t,e,n=Object(r.m)(this),c=null===(t=n)||void 0===t?void 0:t.get(i);if(null===(e=c)||void 0===e?void 0:e.isObservable)return c.value;if(!c||c.sequenceId!==Object(r.t)()){n.delete(i);for(var o=arguments.length,a=new Array(o),u=0;u<o;u++)a[u]=arguments[u];var s=i.apply(this,a);return n.set(i,{value:s,sequenceId:Object(r.t)(),isObservable:Object(r.w)(s)}),s}return c.value},n}}n.d(e,"b",(function(){return u})),n.d(e,"f",(function(){return d})),n.d(e,"g",(function(){return y})),n.d(e,"c",(function(){return h})),n.d(e,"e",(function(){return j})),n.d(e,"d",(function(){return v})),n.d(e,"a",(function(){return g}))},mrSG:function(t,e,n){"use strict";function r(t,e,n,r){var i,c=arguments.length,o=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(c<3?i(o):c>3?i(e,n,o):i(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o}function i(t,e){return function(n,r){e(n,r,t)}}function c(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return c}))}}]);