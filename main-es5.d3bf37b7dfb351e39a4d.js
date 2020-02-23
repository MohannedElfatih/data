function _slicedToArray(n,t){return _arrayWithHoles(n)||_iterableToArrayLimit(n,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(n,t){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var e=[],l=!0,r=!1,u=void 0;try{for(var a,o=n[Symbol.iterator]();!(l=(a=o.next()).done)&&(e.push(a.value),!t||e.length!==t);l=!0);}catch(i){r=!0,u=i}finally{try{l||null==o.return||o.return()}finally{if(r)throw u}}return e}}function _arrayWithHoles(n){if(Array.isArray(n))return n}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var l=t[e];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{0:function(n,t,e){n.exports=e("Ea2l")},"5Z29":function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var l=e("8Y7J"),r=e("sT4j"),u=e("e1JD"),a=(e("Mrqg"),e("QLpg")),o=function(){var n=function(){function n(t,e,r){_classCallCheck(this,n),n.statesCachedMeta.clear(),n.store=t.get(u.h),n.ngZone=t.get(l.y),n.factory=e,n.context=r}return _createClass(n,null,[{key:"createStateContext",value:function(t){return n.context.createStateContext(t)}},{key:"ensureMappedState",value:function(t){if(!n.factory||!t)throw new Error(r.b.NGXS_DATA_MODULE_EXCEPTION);var e=(t.name?n.statesCachedMeta.get(t.name):null)||null;if(!e){var l=t.name?n.factory.states.find((function(n){return n.name===t.name})):null;return l&&t.name&&n.statesCachedMeta.set(t.name,l),l}return e}},{key:"getRepositoryByInstance",value:function(n){var t=Object(a.b)((n||{}).constructor)||null;if(!t)throw new Error(r.b.NGXS_DATA_STATE_DECORATOR);return t}},{key:"createPayload",value:function(n,t){var e={},l=Array.from(n);return t.argumentsNames.forEach((function(n,t){e[n]=l[t]})),e}}]),n}();return n.store=null,n.context=null,n.factory=null,n.ngZone=null,n.statesCachedMeta=new Map,n}()},"8kBa":function(n,t,e){"use strict";function l(n){return"undefined"!==n&&null!=n}e("s3y1"),e("h9sX"),e("tasA"),e.d(t,"a",(function(){return l}))},Ea2l:function(n,t,e){"use strict";e.r(t);var l=e("8Y7J"),r=function n(){_classCallCheck(this,n)},u=e("e1JD"),a=function(){function n(t){_classCallCheck(this,n),this.store=t,this.snapshot=this.store.select((function(n){return n}))}return _createClass(n,[{key:"ngOnInit",value:function(){console.log("[isDevMode]",Object(l.V)())}}]),n}(),o=e("pMnS"),i=e("SVse"),c=e("iInd"),s=l.pb({encapsulation:2,styles:[],data:{}});function b(n){return l.Ib(2,[(n()(),l.rb(0,0,null,null,8,"div",[["class","panel"]],null,null,null,null,null)),(n()(),l.rb(1,0,null,null,0,"img",[["class","logo"],["src","https://habrastorage.org/webt/k7/ih/pc/k7ihpcg6w-jz-rzksmiyuip5_so.png"]],null,null,null,null,null)),(n()(),l.rb(2,0,null,null,6,"div",[["class","panel-content"]],null,null,null,null,null)),(n()(),l.rb(3,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),l.Gb(-1,null,["Store:"])),(n()(),l.rb(5,0,null,null,3,"pre",[],null,null,null,null,null)),(n()(),l.Gb(6,null,["",""])),l.Db(131072,i.b,[l.i]),l.Db(0,i.f,[]),(n()(),l.rb(9,0,null,null,17,"div",[["class","menu"]],null,null,null,null,null)),(n()(),l.Gb(-1,null,[" Examples: "])),(n()(),l.rb(11,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),l.Gb(-1,null,["\ud83d\ude80 "])),(n()(),l.rb(13,0,null,null,1,"a",[["class","link"],["href","https://stackblitz.io/github/ngxs-labs/data"],["target","_blank"]],null,null,null,null,null)),(n()(),l.Gb(-1,null,["Stackblitz"])),(n()(),l.rb(15,0,null,null,5,"span",[],null,null,null,null,null)),(n()(),l.Gb(-1,null,["\ud83c\udfc0 "])),(n()(),l.rb(17,0,null,null,3,"a",[["class","link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,t,e){var r=!0;return"click"===t&&(r=!1!==l.Bb(n,18).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&r),r}),null,null)),l.qb(18,671744,null,0,c.l,[c.k,c.a,i.i],{routerLink:[0,"routerLink"]},null),l.Cb(19,1),(n()(),l.Gb(-1,null,["CountState"])),(n()(),l.rb(21,0,null,null,5,"span",[],null,null,null,null,null)),(n()(),l.Gb(-1,null,["\ud83e\udded "])),(n()(),l.rb(23,0,null,null,3,"a",[["class","link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,t,e){var r=!0;return"click"===t&&(r=!1!==l.Bb(n,24).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&r),r}),null,null)),l.qb(24,671744,null,0,c.l,[c.k,c.a,i.i],{routerLink:[0,"routerLink"]},null),l.Cb(25,1),(n()(),l.Gb(-1,null,["TodoState"])),(n()(),l.rb(27,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),l.rb(28,0,null,null,3,"div",[["class","container"]],null,null,null,null,null)),(n()(),l.rb(29,0,null,null,2,"div",[["class","content"]],null,null,null,null,null)),(n()(),l.rb(30,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),l.qb(31,212992,null,0,c.n,[c.b,l.N,l.k,[8,null],l.i],null,null)],(function(n,t){var e=n(t,19,0,"count");n(t,18,0,e);var l=n(t,25,0,"todo");n(t,24,0,l),n(t,31,0)}),(function(n,t){var e=t.component;n(t,6,0,l.Hb(t,6,0,l.Bb(t,8).transform(l.Hb(t,6,0,l.Bb(t,7).transform(e.snapshot))))),n(t,17,0,l.Bb(t,18).target,l.Bb(t,18).href),n(t,23,0,l.Bb(t,24).target,l.Bb(t,24).href)}))}var f=l.nb("app-root",a,(function(n){return l.Ib(0,[(n()(),l.rb(0,0,null,null,1,"app-root",[],null,null,null,b,s)),l.qb(1,114688,null,0,a,[u.h],null,null)],(function(n,t){n(t,1,0)}),null)}),{},{},[]),d=e("cUpR"),A=e("s7LF"),h=e("Mrqg"),y=function(){return Promise.all([e.e(1),e.e(7)]).then(e.bind(null,"cY3I")).then((function(n){return n.CountModuleNgFactory}))},p=function(){return Promise.all([e.e(1),e.e(8)]).then(e.bind(null,"xG8Z")).then((function(n){return n.TodoModuleNgFactory}))},v=function n(){_classCallCheck(this,n)},E=e("ZArt"),_=e("iEDU"),g=e("5Z29"),S=e("dStW"),k=e("zI7w"),C=l.ob(r,[a],(function(n){return l.zb([l.Ab(512,l.k,l.Z,[[8,[o.a,f]],[3,l.k],l.w]),l.Ab(5120,l.t,l.lb,[[3,l.t]]),l.Ab(4608,i.l,i.k,[l.t,[2,i.r]]),l.Ab(5120,l.hb,l.mb,[l.y]),l.Ab(5120,l.c,l.ib,[]),l.Ab(5120,l.r,l.jb,[]),l.Ab(5120,l.s,l.kb,[]),l.Ab(4608,d.b,d.k,[i.d]),l.Ab(6144,l.F,null,[d.b]),l.Ab(4608,d.e,d.g,[]),l.Ab(5120,d.c,(function(n,t,e,l,r,u,a,o){return[new d.i(n,t,e),new d.n(l),new d.m(r,u,a,o)]}),[i.d,l.y,l.A,i.d,i.d,d.e,l.ab,[2,d.f]]),l.Ab(4608,d.d,d.d,[d.c,l.y]),l.Ab(135680,d.l,d.l,[i.d]),l.Ab(4608,d.j,d.j,[d.d,d.l,l.c]),l.Ab(6144,l.D,null,[d.j]),l.Ab(6144,d.o,null,[d.l]),l.Ab(4608,l.L,l.L,[l.y]),l.Ab(4608,A.i,A.i,[]),l.Ab(5120,c.a,c.x,[c.k]),l.Ab(4608,c.d,c.d,[]),l.Ab(6144,c.f,null,[c.d]),l.Ab(135680,c.o,c.o,[c.k,l.v,l.j,l.q,c.f]),l.Ab(4608,c.e,c.e,[]),l.Ab(5120,c.C,c.t,[c.k,i.o,c.g]),l.Ab(5120,c.h,c.A,[c.y]),l.Ab(5120,l.b,(function(n,t){return[n,u.d.appBootstrapListenerFactory(t)]}),[c.h,h.e]),l.Ab(4608,u.a,u.a,[u.n,u.E]),l.Ab(1073742336,i.c,i.c,[]),l.Ab(1024,l.m,d.p,[]),l.Ab(1024,l.x,(function(){return[c.s()]}),[]),l.Ab(512,c.y,c.y,[l.q]),l.Ab(1024,l.d,(function(n,t){return[d.q(n),c.z(t)]}),[[2,l.x],c.y]),l.Ab(512,l.e,l.e,[[2,l.d]]),l.Ab(131584,l.g,l.g,[l.y,l.ab,l.q,l.m,l.k,l.e]),l.Ab(1073742336,l.f,l.f,[l.g]),l.Ab(1073742336,d.a,d.a,[[3,d.a]]),l.Ab(1073742336,A.h,A.h,[]),l.Ab(1073742336,A.c,A.c,[]),l.Ab(1024,c.r,c.v,[[3,c.k]]),l.Ab(512,c.q,c.c,[]),l.Ab(512,c.b,c.b,[]),l.Ab(256,c.g,{useHash:!0},[]),l.Ab(1024,i.i,c.u,[i.n,[2,i.a],c.g]),l.Ab(512,i.h,i.h,[i.i,i.n]),l.Ab(512,l.j,l.j,[]),l.Ab(512,l.v,l.I,[l.j,[2,l.J]]),l.Ab(1024,c.i,(function(){return[[{path:"",redirectTo:"count",pathMatch:"full"},{path:"count",loadChildren:y},{path:"todo",loadChildren:p}]]}),[]),l.Ab(1024,c.k,c.w,[l.g,c.q,c.b,i.h,l.q,l.v,l.j,c.i,c.g,[2,c.p],[2,c.j]]),l.Ab(1073742336,c.m,c.m,[[2,c.r],[2,c.k]]),l.Ab(1073742336,v,v,[]),l.Ab(256,u.d.ROOT_OPTIONS,{developmentMode:!1},[]),l.Ab(1024,u.v,u.d.ngxsConfigFactory,[u.d.ROOT_OPTIONS]),l.Ab(512,u.n,u.n,[]),l.Ab(512,u.z,u.z,[]),l.Ab(512,u.f,u.f,[]),l.Ab(256,E.d,void 0,[]),l.Ab(1024,E.a,E.e,[E.d]),l.Ab(1024,u.c,(function(n,t,e,l){return[new E.b(n,t),new _.a(e,l)]}),[E.a,l.q,l.A,l.q]),l.Ab(512,u.D,u.D,[[3,u.D],[2,u.c]]),l.Ab(512,u.w,u.q,[l.y,l.A]),l.Ab(512,u.E,u.E,[u.w]),l.Ab(512,u.A,u.A,[l.m,u.n,u.z,u.D,u.f,u.E]),l.Ab(256,u.u,l.V,[]),l.Ab(256,u.t,h.f,[]),l.Ab(512,u.G,u.G,[u.u,u.t]),l.Ab(512,u.F,u.F,[u.G,u.v]),l.Ab(512,u.C,u.C,[u.f,u.A,u.v,u.F]),l.Ab(512,u.B,u.B,[u.C]),l.Ab(1024,h.a,u.d.getInitialState,[]),l.Ab(512,u.y,u.y,[l.q,u.v,[3,u.y],u.n,u.z,u.B,[2,h.a]]),l.Ab(512,u.h,u.h,[u.f,u.C,u.v,u.E,u.y,[2,h.a]]),l.Ab(512,u.H,u.H,[u.h,u.v]),l.Ab(256,u.r,[],[]),l.Ab(512,h.e,h.e,[]),l.Ab(512,u.o,u.o,[u.C,u.B,h.e]),l.Ab(1073742336,u.x,u.x,[u.y,u.C,u.h,u.H,[2,u.r],u.o]),l.Ab(1073742336,E.c,E.c,[]),l.Ab(2048,h.d,null,[u.y]),l.Ab(2048,h.c,null,[u.B]),l.Ab(512,g.a,g.a,[l.q,h.d,h.c]),l.Ab(1073742336,S.a,S.a,[[4,g.a]]),l.Ab(1073742336,k.a,k.a,[]),l.Ab(1073742336,r,r,[]),l.Ab(256,l.Y,!0,[])])}));Object(l.R)(),d.h().bootstrapModuleFactory(C).catch((function(n){return console.log(n)}))},QLpg:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return u}));var l=e("sT4j");function r(n){return n[l.c]||Object.defineProperty(n,l.c,{value:{stateMeta:null,operations:{}}}),u(n)}function u(n){return n[l.c]}},"U+rF":function(n,t){function e(n){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}))}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id="U+rF"},dStW:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var l=e("e1JD"),r=e("5Z29"),u=e("iEDU"),a=function(){function n(t){_classCallCheck(this,n),this.accessor=t}return _createClass(n,null,[{key:"forRoot",value:function(){return{ngModule:n,providers:[r.a,{provide:l.c,useClass:u.a,multi:!0}]}}}]),n}()},h9sX:function(n,t,e){"use strict";function l(n){return"object"==typeof n&&!Array.isArray(n)&&null!==n}e.d(t,"a",(function(){return l}))},iEDU:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var l=e("SVse"),r=e("sT4j"),u=e("8kBa"),a=e("e1JD"),o=e("xgIS"),i=e("vkgz"),c=function(){var n=function(){function n(t,e){var u=this;_classCallCheck(this,n),this._platformId=t,this.injector=e,Object(l.p)(this._platformId)||Object(o.a)(window,"storage").subscribe((function(t){n.keys.has(t.key)&&u.store.dispatch({type:r.a})}))}return _createClass(n,[{key:"handle",value:function(t,e,o){var c=this;if(0===this.size||Object(l.p)(this._platformId))return o(t,e);var s=Object(a.j)(e),b=s(a.b)||s(a.i);if(this.size>0&&(b||e.type===r.a)){var f=!0,d=!1,A=void 0;try{for(var h,y=this.entries[Symbol.iterator]();!(f=(h=y.next()).done);f=!0){var p=_slicedToArray(h.value,1)[0],v=this.exposeEngine(p),E=this.ensureKey(p),_=v.getItem(E);if(Object(u.a)(_))try{var g=this.deserialize(_);Object(u.a)(g)||p.nullable?(n.keys.set(E),t=Object(a.m)(t,p.path,g)):(v.removeItem(E),n.keys.delete(E))}catch(S){console.error("".concat(r.b.NGXS_PERSISTENCE_DESERIALIZE,":::").concat(p.path))}}}catch(k){d=!0,A=k}finally{try{f||null==y.return||y.return()}finally{if(d)throw A}}}return o(t,e).pipe(Object(i.a)((function(e){var l=!0,u=!1,o=void 0;try{for(var i,s=c.entries[Symbol.iterator]();!(l=(i=s.next()).done);l=!0){var f=_slicedToArray(i.value,1)[0],d=Object(a.l)(t,f.path),A=Object(a.l)(e,f.path);if(d!==A||b){var h=c.exposeEngine(f);try{var y=c.serialize(A,f),p=c.ensureKey(f);h.setItem(p,y),n.keys.set(p)}catch(v){console.error("".concat(r.b.NGXS_PERSISTENCE_SERIALIZE,":::").concat(f.path))}}}}catch(k){u=!0,o=k}finally{try{l||null==s.return||s.return()}finally{if(u)throw o}}})))}},{key:"serialize",value:function(n,t){return JSON.stringify({lastChanged:(new Date).toISOString(),version:t.version,data:Object(u.a)(n)?n:null})}},{key:"deserialize",value:function(n){var t=JSON.parse(n);if(t.lastChanged)return t.data;throw new Error("Not found lastChanged in meta")}},{key:"ensureKey",value:function(n){return"".concat(n.prefixKey).concat(n.path)}},{key:"exposeEngine",value:function(n){var t=n.existingEngine||this.injector.get(n.useClass,null);if(!t)throw new Error("".concat(r.b.NGXS_PERSISTENCE_ENGINE,":::").concat(n.path));return t}},{key:"store",get:function(){return this.injector.get(a.h,null)}},{key:"size",get:function(){return this.providers.size}},{key:"providers",get:function(){return n.providers}},{key:"entries",get:function(){return this.providers.entries()}}],[{key:"getProvidedKeys",value:function(){return Array.from(n.keys.keys())}},{key:"clear",value:function(){n.keys.clear(),n.providers.clear()}}]),n}();return n.providers=new Set,n.keys=new Map,n}()},s3y1:function(n,t,e){"use strict";function l(n){return JSON.parse(JSON.stringify(void 0===n?{}:n))}e.d(t,"a",(function(){return l}))},sT4j:function(n,t,e){"use strict";var l=function(n){return n.NGXS_PERSISTENCE_STATE="@Persistence should be add before decorator @State and @StateRepository",n.NGXS_DATA_STATE="@StateRepository should be add before decorator @State",n.NGXS_DATA_STATE_NAME_NOT_FOUND="State name not provided in class",n.NGXS_DATA_MODULE_EXCEPTION="Metadata not created \n Maybe you forgot to import the NgxsDataPluginModule\n Also, you cannot use this.ctx.* until the application is fully rendered \n (use by default ngxsOnInit(ctx: StateContext), or ngxsAfterBootstrap(ctx: StateContext) !!!",n.NGXS_DATA_STATE_DECORATOR="You forgot add decorator @StateRepository or initialize state!\n Example: NgxsModule.forRoot([ .. ]), or NgxsModule.forFeature([ .. ])",n.NGXS_DATA_STATIC_ACTION="Cannot support static methods with @action",n.NGXS_DATA_ACTION="@action can only decorate a method implementation",n.NGXS_DATA_ACTION_RETURN_TYPE="RECOMMENDATION: If you use asynchronous actions `@action({ async: true })`, the return result type should only be Observable or void instead",n.NGXS_PERSISTENCE_ENGINE="Not declare storage engine in `existingEngine` or not found after injecting by `useClass`",n.NGXS_PERSISTENCE_SERIALIZE="Error occurred while serializing the store value, value not updated.",n.NGXS_PERSISTENCE_DESERIALIZE="Error occurred while deserializing the store value, falling back to empty object.",n.NGXS_DATA_CHILDREN_CONVERT="Child states can only be added to an object",n}({});e.d(t,"a",(function(){return"NEED_SYNC_WITH_STORAGE"})),e.d(t,"c",(function(){return"NGXS_DATA_META"})),e.d(t,"b",(function(){return l}))},tasA:function(n,t,e){"use strict";function l(n){return n.NGXS_OPTIONS_META||{}}e.d(t,"a",(function(){return l}))},zI7w:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var l=function n(){_classCallCheck(this,n)}}},[[0,0,6]]]);