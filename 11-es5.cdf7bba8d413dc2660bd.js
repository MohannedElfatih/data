function _inherits(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&_setPrototypeOf(t,n)}function _setPrototypeOf(t,n){return(_setPrototypeOf=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function _createSuper(t){var n=_isNativeReflectConstruct();return function(){var e,l=_getPrototypeOf(t);if(n){var r=_getPrototypeOf(this).constructor;e=Reflect.construct(l,arguments,r)}else e=l.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?_assertThisInitialized(t):n}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var l=n[e];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{xala:function(t,n,e){"use strict";e.r(n);var l,r=e("8Y7J"),u=function t(){_classCallCheck(this,t)},o=e("pMnS"),i=e("SVse"),c=e("mrSG"),s=e("CoC1"),a=e("8nyR"),f=e("e1JD"),b=e("vkgz"),p=e("lJxs"),h=function(){function t(n){_classCallCheck(this,t),this.httpService=n}return _createClass(t,[{key:"fetchAll",value:function(){return this.httpService.get("./app/json/person.json").pipe(Object(p.a)((function(t){return t.data})))}}]),t}(),C=(l=function(t){_inherits(e,t);var n=_createSuper(e);function e(t){var l;return _classCallCheck(this,e),(l=n.call(this)).personService=t,l}return _createClass(e,[{key:"getContent",value:function(){var t=this;return this.personService.fetchAll().pipe(Object(b.a)((function(n){return t.setState(n)})))}}]),e}(a.c),l=Object(c.a)([Object(s.g)(),Object(f.e)({name:"person",defaults:{title:null,description:null}})],l)),_=function t(n){_classCallCheck(this,t),this.person=n},y=r.rb({encapsulation:2,styles:[],data:{}});function g(t){return r.Mb(0,[(t()(),r.tb(0,0,null,null,7,"div",[],null,null,null,null,null)),(t()(),r.Kb(-1,null,["\n    "])),(t()(),r.tb(2,0,null,null,1,"h4",[],null,null,null,null,null)),(t()(),r.Kb(3,null,["",""])),(t()(),r.Kb(-1,null,["\n    "])),(t()(),r.tb(5,0,null,null,1,"p",[],null,null,null,null,null)),(t()(),r.Kb(6,null,["",""])),(t()(),r.Kb(-1,null,["\n"]))],null,(function(t,n){t(n,3,0,n.context.ngIf.title),t(n,6,0,n.context.ngIf.description)}))}function v(t){return r.Mb(2,[(t()(),r.tb(0,0,null,null,3,"a",[["href","http://stackblitz.com/github/ngxs-labs/data?file=integration%2Fapp%2Fexamples%2Ftodo%2Ftodo.state.ts"],["target","_blank"]],null,null,null,null,null)),(t()(),r.Kb(-1,null,["\n    "])),(t()(),r.tb(2,0,null,null,0,"img",[["alt","stackblitz"],["class","stackblitz"],["src","https://habrastorage.org/webt/ma/me/jm/mamejmzzxqu5pfn6rfieay6oisi.png"]],null,null,null,null,null)),(t()(),r.Kb(-1,null,["\n"])),(t()(),r.Kb(-1,null,["\n\n"])),(t()(),r.tb(5,0,null,null,1,"h3",[],null,null,null,null,null)),(t()(),r.Kb(-1,null,["Person state"])),(t()(),r.Kb(-1,null,["\n\n"])),(t()(),r.ib(16777216,null,null,2,null,g)),r.sb(9,16384,null,0,i.k,[r.O,r.L],{ngIf:[0,"ngIf"]},null),r.Gb(131072,i.b,[r.i]),(t()(),r.Kb(-1,null,["\n"]))],(function(t,n){var e=n.component;t(n,9,0,r.Lb(n,9,0,r.Eb(n,10).transform(e.person.state$)))}),null)}var d=r.pb("person",_,(function(t){return r.Mb(0,[(t()(),r.tb(0,0,null,null,1,"person",[],null,null,null,v,y)),r.sb(1,49152,null,0,_,[C],null,null)],null,null)}),{},{},[]),O=e("IheW"),k=function(){function t(n){_classCallCheck(this,t),this.personState=n}return _createClass(t,[{key:"resolve",value:function(){return this.personState.getContent()}}]),t}(),m=e("Mrqg"),P=e("iInd");e.d(n,"PersonModuleNgFactory",(function(){return j}));var j=r.qb(u,[],(function(t){return r.Bb([r.Cb(512,r.k,r.bb,[[8,[o.a,d]],[3,r.k],r.w]),r.Cb(4608,i.m,i.l,[r.t,[2,i.v]]),r.Cb(4608,O.h,O.n,[i.d,r.A,O.l]),r.Cb(4608,O.o,O.o,[O.h,O.m]),r.Cb(5120,O.a,(function(t){return[t]}),[O.o]),r.Cb(4608,O.k,O.k,[]),r.Cb(6144,O.i,null,[O.k]),r.Cb(4608,O.g,O.g,[O.i]),r.Cb(6144,O.b,null,[O.g]),r.Cb(4608,O.f,O.j,[O.b,r.q]),r.Cb(4608,O.c,O.c,[O.f]),r.Cb(4608,f.D,f.D,[[3,f.D],[2,f.c]]),r.Cb(4608,h,h,[O.c]),r.Cb(4608,C,C,[h]),r.Cb(4608,k,k,[C]),r.Cb(1073742336,i.c,i.c,[]),r.Cb(1073742336,O.e,O.e,[]),r.Cb(1073742336,O.d,O.d,[]),r.Cb(512,f.y,f.y,[r.q,f.v,[3,f.y],f.n,f.z,f.B,[2,m.a]]),r.Cb(1024,f.s,(function(){return[[C]]}),[]),r.Cb(1073742336,f.p,f.p,[f.h,f.C,f.y,[2,f.s],f.o]),r.Cb(1073742336,P.m,P.m,[[2,P.r],[2,P.k]]),r.Cb(1073742336,u,u,[]),r.Cb(256,O.l,"XSRF-TOKEN",[]),r.Cb(256,O.m,"X-XSRF-TOKEN",[]),r.Cb(1024,P.i,(function(){return[[{path:"",component:_,resolve:{content:k}}]]}),[])])}))}}]);