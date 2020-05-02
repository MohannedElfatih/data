function _inherits(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&_setPrototypeOf(n,t)}function _setPrototypeOf(n,t){return(_setPrototypeOf=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function _createSuper(n){var t=_isNativeReflectConstruct();return function(){var e,l=_getPrototypeOf(n);if(t){var r=_getPrototypeOf(this).constructor;e=Reflect.construct(l,arguments,r)}else e=l.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(n,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(n):t}function _assertThisInitialized(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function _getPrototypeOf(n){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var l=t[e];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{xala:function(n,t,e){"use strict";e.r(t);var l,r=e("8Y7J"),u=function n(){_classCallCheck(this,n)},o=e("pMnS"),c=e("SVse"),i=e("mrSG"),s=e("CoC1"),a=e("8nyR"),f=e("e1JD"),b=e("vkgz"),p=e("lJxs"),h=function(){function n(t){_classCallCheck(this,n),this.httpService=t}return _createClass(n,[{key:"fetchAll",value:function(){return this.httpService.get("./app/json/person.json").pipe(Object(p.a)((function(n){return n.data})))}}]),n}(),_=(l=function(n){_inherits(e,n);var t=_createSuper(e);function e(n){var l;return _classCallCheck(this,e),(l=t.call(this)).personService=n,l}return _createClass(e,[{key:"getContent",value:function(){var n=this;return this.personService.fetchAll().pipe(Object(b.a)((function(t){return n.setState(t)})))}}]),e}(a.c),l=Object(i.a)([Object(s.g)(),Object(f.e)({name:"person",defaults:{title:null,description:null}})],l)),y=function n(t){_classCallCheck(this,n),this.person=t},g=r.sb({encapsulation:2,styles:[],data:{}});function D(n){return r.Nb(0,[(n()(),r.ub(0,0,null,null,7,"div",[],null,null,null,null,null)),(n()(),r.Lb(-1,null,["\n    "])),(n()(),r.ub(2,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),r.Lb(3,null,["",""])),(n()(),r.Lb(-1,null,["\n    "])),(n()(),r.ub(5,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),r.Lb(6,null,["",""])),(n()(),r.Lb(-1,null,["\n"]))],null,(function(n,t){n(t,3,0,t.context.ngIf.title),n(t,6,0,t.context.ngIf.description)}))}function v(n){return r.Nb(2,[(n()(),r.ub(0,0,null,null,3,"a",[["href","http://stackblitz.com/github/ngxs-labs/data?file=integration%2Fapp%2Fexamples%2Ftodo%2Ftodo.state.ts"],["target","_blank"]],null,null,null,null,null)),(n()(),r.Lb(-1,null,["\n    "])),(n()(),r.ub(2,0,null,null,0,"img",[["alt","stackblitz"],["class","stackblitz"],["src","https://habrastorage.org/webt/ma/me/jm/mamejmzzxqu5pfn6rfieay6oisi.png"]],null,null,null,null,null)),(n()(),r.Lb(-1,null,["\n"])),(n()(),r.Lb(-1,null,["\n\n"])),(n()(),r.ub(5,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),r.Lb(-1,null,["Person state"])),(n()(),r.Lb(-1,null,["\n\n"])),(n()(),r.jb(16777216,null,null,2,null,D)),r.tb(9,16384,null,0,c.k,[r.P,r.M],{ngIf:[0,"ngIf"]},null),r.Hb(131072,c.b,[r.i]),(n()(),r.Lb(-1,null,["\n"]))],(function(n,t){var e=t.component;n(t,9,0,r.Mb(t,9,0,r.Fb(t,10).transform(e.person.state$)))}),null)}var d=r.qb("person",y,(function(n){return r.Nb(0,[(n()(),r.ub(0,0,null,null,1,"person",[],null,null,null,v,g)),r.tb(1,49152,null,0,y,[_],null,null)],null,null)}),{},{},[]),C=e("IheW"),k=function(){function n(t){_classCallCheck(this,n),this.personState=t}return _createClass(n,[{key:"resolve",value:function(){return this.personState.getContent()}}]),n}(),O=e("Mrqg"),m=e("iInd");e.d(t,"PersonModuleNgFactory",(function(){return P}));var P=r.rb(u,[],(function(n){return r.Cb([r.Db(512,r.k,r.cb,[[8,[o.a,d]],[3,r.k],r.x]),r.Db(4608,c.m,c.l,[r.u,[2,c.v]]),r.Db(4608,C.h,C.n,[c.d,r.B,C.l]),r.Db(4608,C.o,C.o,[C.h,C.m]),r.Db(5120,C.a,(function(n){return[n]}),[C.o]),r.Db(4608,C.k,C.k,[]),r.Db(6144,C.i,null,[C.k]),r.Db(4608,C.g,C.g,[C.i]),r.Db(6144,C.b,null,[C.g]),r.Db(4608,C.f,C.j,[C.b,r.r]),r.Db(4608,C.c,C.c,[C.f]),r.Db(4608,f.D,f.D,[[3,f.D],[2,f.c]]),r.Db(4608,h,h,[C.c]),r.Db(4608,_,_,[h]),r.Db(4608,k,k,[_]),r.Db(1073742336,c.c,c.c,[]),r.Db(1073742336,C.e,C.e,[]),r.Db(1073742336,C.d,C.d,[]),r.Db(512,f.y,f.y,[r.r,f.v,[3,f.y],f.n,f.z,f.B,[2,O.a]]),r.Db(1024,f.s,(function(){return[[_]]}),[]),r.Db(1073742336,f.p,f.p,[f.h,f.C,f.y,[2,f.s],f.o]),r.Db(1073742336,m.m,m.m,[[2,m.r],[2,m.k]]),r.Db(1073742336,u,u,[]),r.Db(256,C.l,"XSRF-TOKEN",[]),r.Db(256,C.m,"X-XSRF-TOKEN",[]),r.Db(1024,m.i,(function(){return[[{path:"",component:y,resolve:{content:k}}]]}),[])])}))}}]);