(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var od={exports:{}},al={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zy;function GA(){if(Zy)return al;Zy=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var g in l)g!=="key"&&(c[g]=l[g])}else c=l;return l=c.ref,{$$typeof:r,type:a,key:d,ref:l!==void 0?l:null,props:c}}return al.Fragment=t,al.jsx=n,al.jsxs=n,al}var Jy;function FA(){return Jy||(Jy=1,od.exports=GA()),od.exports}var Et=FA(),ld={exports:{}},Tt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wy;function KA(){if(Wy)return Tt;Wy=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),D=Symbol.iterator;function M(I){return I===null||typeof I!="object"?null:(I=D&&I[D]||I["@@iterator"],typeof I=="function"?I:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,it={};function J(I,Y,tt){this.props=I,this.context=Y,this.refs=it,this.updater=tt||q}J.prototype.isReactComponent={},J.prototype.setState=function(I,Y){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,Y,"setState")},J.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function Nt(){}Nt.prototype=J.prototype;function yt(I,Y,tt){this.props=I,this.context=Y,this.refs=it,this.updater=tt||q}var ht=yt.prototype=new Nt;ht.constructor=yt,X(ht,J.prototype),ht.isPureReactComponent=!0;var Dt=Array.isArray,pt={H:null,A:null,T:null,S:null,V:null},Ot=Object.prototype.hasOwnProperty;function N(I,Y,tt,$,ot,St){return tt=St.ref,{$$typeof:r,type:I,key:Y,ref:tt!==void 0?tt:null,props:St}}function S(I,Y){return N(I.type,Y,void 0,void 0,void 0,I.props)}function w(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function O(I){var Y={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(tt){return Y[tt]})}var V=/\/+/g;function P(I,Y){return typeof I=="object"&&I!==null&&I.key!=null?O(""+I.key):Y.toString(36)}function R(){}function Ne(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(R,R):(I.status="pending",I.then(function(Y){I.status==="pending"&&(I.status="fulfilled",I.value=Y)},function(Y){I.status==="pending"&&(I.status="rejected",I.reason=Y)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function ne(I,Y,tt,$,ot){var St=typeof I;(St==="undefined"||St==="boolean")&&(I=null);var gt=!1;if(I===null)gt=!0;else switch(St){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(I.$$typeof){case r:case t:gt=!0;break;case A:return gt=I._init,ne(gt(I._payload),Y,tt,$,ot)}}if(gt)return ot=ot(I),gt=$===""?"."+P(I,0):$,Dt(ot)?(tt="",gt!=null&&(tt=gt.replace(V,"$&/")+"/"),ne(ot,Y,tt,"",function(qn){return qn})):ot!=null&&(w(ot)&&(ot=S(ot,tt+(ot.key==null||I&&I.key===ot.key?"":(""+ot.key).replace(V,"$&/")+"/")+gt)),Y.push(ot)),1;gt=0;var be=$===""?".":$+":";if(Dt(I))for(var $t=0;$t<I.length;$t++)$=I[$t],St=be+P($,$t),gt+=ne($,Y,tt,St,ot);else if($t=M(I),typeof $t=="function")for(I=$t.call(I),$t=0;!($=I.next()).done;)$=$.value,St=be+P($,$t++),gt+=ne($,Y,tt,St,ot);else if(St==="object"){if(typeof I.then=="function")return ne(Ne(I),Y,tt,$,ot);throw Y=String(I),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return gt}function H(I,Y,tt){if(I==null)return I;var $=[],ot=0;return ne(I,$,"","",function(St){return Y.call(tt,St,ot++)}),$}function W(I){if(I._status===-1){var Y=I._result;Y=Y(),Y.then(function(tt){(I._status===0||I._status===-1)&&(I._status=1,I._result=tt)},function(tt){(I._status===0||I._status===-1)&&(I._status=2,I._result=tt)}),I._status===-1&&(I._status=0,I._result=Y)}if(I._status===1)return I._result.default;throw I._result}var at=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function zt(){}return Tt.Children={map:H,forEach:function(I,Y,tt){H(I,function(){Y.apply(this,arguments)},tt)},count:function(I){var Y=0;return H(I,function(){Y++}),Y},toArray:function(I){return H(I,function(Y){return Y})||[]},only:function(I){if(!w(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Tt.Component=J,Tt.Fragment=n,Tt.Profiler=l,Tt.PureComponent=yt,Tt.StrictMode=a,Tt.Suspense=p,Tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=pt,Tt.__COMPILER_RUNTIME={__proto__:null,c:function(I){return pt.H.useMemoCache(I)}},Tt.cache=function(I){return function(){return I.apply(null,arguments)}},Tt.cloneElement=function(I,Y,tt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var $=X({},I.props),ot=I.key,St=void 0;if(Y!=null)for(gt in Y.ref!==void 0&&(St=void 0),Y.key!==void 0&&(ot=""+Y.key),Y)!Ot.call(Y,gt)||gt==="key"||gt==="__self"||gt==="__source"||gt==="ref"&&Y.ref===void 0||($[gt]=Y[gt]);var gt=arguments.length-2;if(gt===1)$.children=tt;else if(1<gt){for(var be=Array(gt),$t=0;$t<gt;$t++)be[$t]=arguments[$t+2];$.children=be}return N(I.type,ot,void 0,void 0,St,$)},Tt.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},Tt.createElement=function(I,Y,tt){var $,ot={},St=null;if(Y!=null)for($ in Y.key!==void 0&&(St=""+Y.key),Y)Ot.call(Y,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(ot[$]=Y[$]);var gt=arguments.length-2;if(gt===1)ot.children=tt;else if(1<gt){for(var be=Array(gt),$t=0;$t<gt;$t++)be[$t]=arguments[$t+2];ot.children=be}if(I&&I.defaultProps)for($ in gt=I.defaultProps,gt)ot[$]===void 0&&(ot[$]=gt[$]);return N(I,St,void 0,void 0,null,ot)},Tt.createRef=function(){return{current:null}},Tt.forwardRef=function(I){return{$$typeof:g,render:I}},Tt.isValidElement=w,Tt.lazy=function(I){return{$$typeof:A,_payload:{_status:-1,_result:I},_init:W}},Tt.memo=function(I,Y){return{$$typeof:_,type:I,compare:Y===void 0?null:Y}},Tt.startTransition=function(I){var Y=pt.T,tt={};pt.T=tt;try{var $=I(),ot=pt.S;ot!==null&&ot(tt,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(zt,at)}catch(St){at(St)}finally{pt.T=Y}},Tt.unstable_useCacheRefresh=function(){return pt.H.useCacheRefresh()},Tt.use=function(I){return pt.H.use(I)},Tt.useActionState=function(I,Y,tt){return pt.H.useActionState(I,Y,tt)},Tt.useCallback=function(I,Y){return pt.H.useCallback(I,Y)},Tt.useContext=function(I){return pt.H.useContext(I)},Tt.useDebugValue=function(){},Tt.useDeferredValue=function(I,Y){return pt.H.useDeferredValue(I,Y)},Tt.useEffect=function(I,Y,tt){var $=pt.H;if(typeof tt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return $.useEffect(I,Y)},Tt.useId=function(){return pt.H.useId()},Tt.useImperativeHandle=function(I,Y,tt){return pt.H.useImperativeHandle(I,Y,tt)},Tt.useInsertionEffect=function(I,Y){return pt.H.useInsertionEffect(I,Y)},Tt.useLayoutEffect=function(I,Y){return pt.H.useLayoutEffect(I,Y)},Tt.useMemo=function(I,Y){return pt.H.useMemo(I,Y)},Tt.useOptimistic=function(I,Y){return pt.H.useOptimistic(I,Y)},Tt.useReducer=function(I,Y,tt){return pt.H.useReducer(I,Y,tt)},Tt.useRef=function(I){return pt.H.useRef(I)},Tt.useState=function(I){return pt.H.useState(I)},Tt.useSyncExternalStore=function(I,Y,tt){return pt.H.useSyncExternalStore(I,Y,tt)},Tt.useTransition=function(){return pt.H.useTransition()},Tt.version="19.1.0",Tt}var t_;function im(){return t_||(t_=1,ld.exports=KA()),ld.exports}var Pn=im(),ud={exports:{}},ol={},cd={exports:{}},hd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function QA(){return e_||(e_=1,function(r){function t(H,W){var at=H.length;H.push(W);t:for(;0<at;){var zt=at-1>>>1,I=H[zt];if(0<l(I,W))H[zt]=W,H[at]=I,at=zt;else break t}}function n(H){return H.length===0?null:H[0]}function a(H){if(H.length===0)return null;var W=H[0],at=H.pop();if(at!==W){H[0]=at;t:for(var zt=0,I=H.length,Y=I>>>1;zt<Y;){var tt=2*(zt+1)-1,$=H[tt],ot=tt+1,St=H[ot];if(0>l($,at))ot<I&&0>l(St,$)?(H[zt]=St,H[ot]=at,zt=ot):(H[zt]=$,H[tt]=at,zt=tt);else if(ot<I&&0>l(St,at))H[zt]=St,H[ot]=at,zt=ot;else break t}}return W}function l(H,W){var at=H.sortIndex-W.sortIndex;return at!==0?at:H.id-W.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,g=d.now();r.unstable_now=function(){return d.now()-g}}var p=[],_=[],A=1,D=null,M=3,q=!1,X=!1,it=!1,J=!1,Nt=typeof setTimeout=="function"?setTimeout:null,yt=typeof clearTimeout=="function"?clearTimeout:null,ht=typeof setImmediate<"u"?setImmediate:null;function Dt(H){for(var W=n(_);W!==null;){if(W.callback===null)a(_);else if(W.startTime<=H)a(_),W.sortIndex=W.expirationTime,t(p,W);else break;W=n(_)}}function pt(H){if(it=!1,Dt(H),!X)if(n(p)!==null)X=!0,Ot||(Ot=!0,P());else{var W=n(_);W!==null&&ne(pt,W.startTime-H)}}var Ot=!1,N=-1,S=5,w=-1;function O(){return J?!0:!(r.unstable_now()-w<S)}function V(){if(J=!1,Ot){var H=r.unstable_now();w=H;var W=!0;try{t:{X=!1,it&&(it=!1,yt(N),N=-1),q=!0;var at=M;try{e:{for(Dt(H),D=n(p);D!==null&&!(D.expirationTime>H&&O());){var zt=D.callback;if(typeof zt=="function"){D.callback=null,M=D.priorityLevel;var I=zt(D.expirationTime<=H);if(H=r.unstable_now(),typeof I=="function"){D.callback=I,Dt(H),W=!0;break e}D===n(p)&&a(p),Dt(H)}else a(p);D=n(p)}if(D!==null)W=!0;else{var Y=n(_);Y!==null&&ne(pt,Y.startTime-H),W=!1}}break t}finally{D=null,M=at,q=!1}W=void 0}}finally{W?P():Ot=!1}}}var P;if(typeof ht=="function")P=function(){ht(V)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,Ne=R.port2;R.port1.onmessage=V,P=function(){Ne.postMessage(null)}}else P=function(){Nt(V,0)};function ne(H,W){N=Nt(function(){H(r.unstable_now())},W)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return M},r.unstable_next=function(H){switch(M){case 1:case 2:case 3:var W=3;break;default:W=M}var at=M;M=W;try{return H()}finally{M=at}},r.unstable_requestPaint=function(){J=!0},r.unstable_runWithPriority=function(H,W){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var at=M;M=H;try{return W()}finally{M=at}},r.unstable_scheduleCallback=function(H,W,at){var zt=r.unstable_now();switch(typeof at=="object"&&at!==null?(at=at.delay,at=typeof at=="number"&&0<at?zt+at:zt):at=zt,H){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=at+I,H={id:A++,callback:W,priorityLevel:H,startTime:at,expirationTime:I,sortIndex:-1},at>zt?(H.sortIndex=at,t(_,H),n(p)===null&&H===n(_)&&(it?(yt(N),N=-1):it=!0,ne(pt,at-zt))):(H.sortIndex=I,t(p,H),X||q||(X=!0,Ot||(Ot=!0,P()))),H},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(H){var W=M;return function(){var at=M;M=W;try{return H.apply(this,arguments)}finally{M=at}}}}(hd)),hd}var n_;function YA(){return n_||(n_=1,cd.exports=QA()),cd.exports}var fd={exports:{}},qe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function XA(){if(i_)return qe;i_=1;var r=im();function t(p){var _="https://react.dev/errors/"+p;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)_+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+p+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,_,A){var D=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:D==null?null:""+D,children:p,containerInfo:_,implementation:A}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,_){if(p==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,qe.createPortal=function(p,_){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(t(299));return c(p,_,null,A)},qe.flushSync=function(p){var _=d.T,A=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=_,a.p=A,a.d.f()}},qe.preconnect=function(p,_){typeof p=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,a.d.C(p,_))},qe.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},qe.preinit=function(p,_){if(typeof p=="string"&&_&&typeof _.as=="string"){var A=_.as,D=g(A,_.crossOrigin),M=typeof _.integrity=="string"?_.integrity:void 0,q=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;A==="style"?a.d.S(p,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:D,integrity:M,fetchPriority:q}):A==="script"&&a.d.X(p,{crossOrigin:D,integrity:M,fetchPriority:q,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},qe.preinitModule=function(p,_){if(typeof p=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var A=g(_.as,_.crossOrigin);a.d.M(p,{crossOrigin:A,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&a.d.M(p)},qe.preload=function(p,_){if(typeof p=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var A=_.as,D=g(A,_.crossOrigin);a.d.L(p,A,{crossOrigin:D,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},qe.preloadModule=function(p,_){if(typeof p=="string")if(_){var A=g(_.as,_.crossOrigin);a.d.m(p,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:A,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else a.d.m(p)},qe.requestFormReset=function(p){a.d.r(p)},qe.unstable_batchedUpdates=function(p,_){return p(_)},qe.useFormState=function(p,_,A){return d.H.useFormState(p,_,A)},qe.useFormStatus=function(){return d.H.useHostTransitionStatus()},qe.version="19.1.0",qe}var r_;function $A(){if(r_)return fd.exports;r_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),fd.exports=XA(),fd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function ZA(){if(s_)return ol;s_=1;var r=YA(),t=im(),n=$A();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function d(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function g(e){if(c(e)!==e)throw Error(a(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,o=i;;){var h=s.return;if(h===null)break;var f=h.alternate;if(f===null){if(o=h.return,o!==null){s=o;continue}break}if(h.child===f.child){for(f=h.child;f;){if(f===s)return g(h),e;if(f===o)return g(h),i;f=f.sibling}throw Error(a(188))}if(s.return!==o.return)s=h,o=f;else{for(var v=!1,E=h.child;E;){if(E===s){v=!0,s=h,o=f;break}if(E===o){v=!0,o=h,s=f;break}E=E.sibling}if(!v){for(E=f.child;E;){if(E===s){v=!0,s=f,o=h;break}if(E===o){v=!0,o=f,s=h;break}E=E.sibling}if(!v)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var A=Object.assign,D=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),it=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),Nt=Symbol.for("react.provider"),yt=Symbol.for("react.consumer"),ht=Symbol.for("react.context"),Dt=Symbol.for("react.forward_ref"),pt=Symbol.for("react.suspense"),Ot=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var R=Symbol.for("react.client.reference");function Ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===R?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case J:return"Profiler";case it:return"StrictMode";case pt:return"Suspense";case Ot:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case ht:return(e.displayName||"Context")+".Provider";case yt:return(e._context.displayName||"Context")+".Consumer";case Dt:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N:return i=e.displayName||null,i!==null?i:Ne(e.type)||"Memo";case S:i=e._payload,e=e._init;try{return Ne(e(i))}catch{}}return null}var ne=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at={pending:!1,data:null,method:null,action:null},zt=[],I=-1;function Y(e){return{current:e}}function tt(e){0>I||(e.current=zt[I],zt[I]=null,I--)}function $(e,i){I++,zt[I]=e.current,e.current=i}var ot=Y(null),St=Y(null),gt=Y(null),be=Y(null);function $t(e,i){switch($(gt,i),$(St,e),$(ot,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?wy(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=wy(i),e=Ry(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tt(ot),$(ot,e)}function qn(){tt(ot),tt(St),tt(gt)}function Gi(e){e.memoizedState!==null&&$(be,e);var i=ot.current,s=Ry(i,e.type);i!==s&&($(St,e),$(ot,s))}function fi(e){St.current===e&&(tt(ot),tt(St)),be.current===e&&(tt(be),el._currentValue=at)}var Ur=Object.prototype.hasOwnProperty,zr=r.unstable_scheduleCallback,Br=r.unstable_cancelCallback,Za=r.unstable_shouldYield,Ll=r.unstable_requestPaint,mn=r.unstable_now,ah=r.unstable_getCurrentPriorityLevel,Ja=r.unstable_ImmediatePriority,Ps=r.unstable_UserBlockingPriority,qr=r.unstable_NormalPriority,oh=r.unstable_LowPriority,xs=r.unstable_IdlePriority,Wa=r.log,Ul=r.unstable_setDisableYieldValue,ie=null,jt=null;function rn(e){if(typeof Wa=="function"&&Ul(e),jt&&typeof jt.setStrictMode=="function")try{jt.setStrictMode(ie,e)}catch{}}var ze=Math.clz32?Math.clz32:jr,zl=Math.log,lh=Math.LN2;function jr(e){return e>>>=0,e===0?32:31-(zl(e)/lh|0)|0}var Hr=256,Gr=4194304;function Dn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ls(e,i,s){var o=e.pendingLanes;if(o===0)return 0;var h=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var E=o&134217727;return E!==0?(o=E&~f,o!==0?h=Dn(o):(v&=E,v!==0?h=Dn(v):s||(s=E&~e,s!==0&&(h=Dn(s))))):(E=o&~f,E!==0?h=Dn(E):v!==0?h=Dn(v):s||(s=o&~e,s!==0&&(h=Dn(s)))),h===0?0:i!==0&&i!==h&&(i&f)===0&&(f=h&-h,s=i&-i,f>=s||f===32&&(s&4194048)!==0)?i:h}function Fr(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function to(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eo(){var e=Hr;return Hr<<=1,(Hr&4194048)===0&&(Hr=256),e}function no(){var e=Gr;return Gr<<=1,(Gr&62914560)===0&&(Gr=4194304),e}function di(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function mi(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function io(e,i,s,o,h,f){var v=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var E=e.entanglements,b=e.expirationTimes,U=e.hiddenUpdates;for(s=v&~s;0<s;){var G=31-ze(s),K=1<<G;E[G]=0,b[G]=-1;var z=U[G];if(z!==null)for(U[G]=null,G=0;G<z.length;G++){var B=z[G];B!==null&&(B.lane&=-536870913)}s&=~K}o!==0&&jn(e,o,0),f!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~i))}function jn(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-ze(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|s&4194090}function ro(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var o=31-ze(s),h=1<<o;h&i|e[o]&i&&(e[o]|=i),s&=~h}}function Fi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Us(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ki(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:Fy(e.type))}function Bl(e,i){var s=W.p;try{return W.p=e,i()}finally{W.p=s}}var Jt=Math.random().toString(36).slice(2),ye="__reactFiber$"+Jt,fe="__reactProps$"+Jt,gn="__reactContainer$"+Jt,so="__reactEvents$"+Jt,uh="__reactListeners$"+Jt,Qi="__reactHandles$"+Jt,ql="__reactResources$"+Jt,Kr="__reactMarker$"+Jt;function Yi(e){delete e[ye],delete e[fe],delete e[so],delete e[uh],delete e[Qi]}function gi(e){var i=e[ye];if(i)return i;for(var s=e.parentNode;s;){if(i=s[gn]||s[ye]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=Oy(e);e!==null;){if(s=e[ye])return s;e=Oy(e)}return i}e=s,s=e.parentNode}return null}function Hn(e){if(e=e[ye]||e[gn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Gn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Ke(e){var i=e[ql];return i||(i=e[ql]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function oe(e){e[Kr]=!0}var ao=new Set,zs={};function On(e,i){pi(e,i),pi(e+"Capture",i)}function pi(e,i){for(zs[e]=i,e=0;e<i.length;e++)ao.add(i[e])}var jl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hl={},Qr={};function Gl(e){return Ur.call(Qr,e)?!0:Ur.call(Hl,e)?!1:jl.test(e)?Qr[e]=!0:(Hl[e]=!0,!1)}function Xi(e,i,s){if(Gl(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Fn(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Me(e,i,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+o)}}var Yr,Fl;function yi(e){if(Yr===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Yr=i&&i[1]||"",Fl=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yr+e+Fl}var Bs=!1;function qs(e,i){if(!e||Bs)return"";Bs=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(B){var z=B}Reflect.construct(e,[],K)}else{try{K.call()}catch(B){z=B}e.call(K.prototype)}}else{try{throw Error()}catch(B){z=B}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(B){if(B&&z&&typeof B.stack=="string")return[B.stack,z.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],E=f[1];if(v&&E){var b=v.split(`
`),U=E.split(`
`);for(h=o=0;o<b.length&&!b[o].includes("DetermineComponentFrameRoot");)o++;for(;h<U.length&&!U[h].includes("DetermineComponentFrameRoot");)h++;if(o===b.length||h===U.length)for(o=b.length-1,h=U.length-1;1<=o&&0<=h&&b[o]!==U[h];)h--;for(;1<=o&&0<=h;o--,h--)if(b[o]!==U[h]){if(o!==1||h!==1)do if(o--,h--,0>h||b[o]!==U[h]){var G=`
`+b[o].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=o&&0<=h);break}}}finally{Bs=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?yi(s):""}function oo(e){switch(e.tag){case 26:case 27:case 5:return yi(e.type);case 16:return yi("Lazy");case 13:return yi("Suspense");case 19:return yi("SuspenseList");case 0:case 15:return qs(e.type,!1);case 11:return qs(e.type.render,!1);case 1:return qs(e.type,!0);case 31:return yi("Activity");default:return""}}function js(e){try{var i="";do i+=oo(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Qe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lo(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ch(e){var i=lo(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),o=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,f=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){o=""+v,f.call(this,v)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Hs(e){e._valueTracker||(e._valueTracker=ch(e))}function uo(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return e&&(o=lo(e)?e.checked?"true":"false":e.value),e=o,e!==s?(i.setValue(e),!0):!1}function Xr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var hh=/[\n"\\]/g;function de(e){return e.replace(hh,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function sn(e,i,s,o,h,f,v,E){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Qe(i)):e.value!==""+Qe(i)&&(e.value=""+Qe(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?$i(e,v,Qe(i)):s!=null?$i(e,v,Qe(s)):o!=null&&e.removeAttribute("value"),h==null&&f!=null&&(e.defaultChecked=!!f),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Qe(E):e.removeAttribute("name")}function $r(e,i,s,o,h,f,v,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),i!=null||s!=null){if(!(f!=="submit"&&f!=="reset"||i!=null))return;s=s!=null?""+Qe(s):"",i=i!=null?""+Qe(i):s,E||i===e.value||(e.value=i),e.defaultValue=i}o=o??h,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=E?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function $i(e,i,s){i==="number"&&Xr(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function _i(e,i,s,o){if(e=e.options,i){i={};for(var h=0;h<s.length;h++)i["$"+s[h]]=!0;for(s=0;s<e.length;s++)h=i.hasOwnProperty("$"+e[s].value),e[s].selected!==h&&(e[s].selected=h),h&&o&&(e[s].defaultSelected=!0)}else{for(s=""+Qe(s),i=null,h=0;h<e.length;h++){if(e[h].value===s){e[h].selected=!0,o&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Ft(e,i,s){if(i!=null&&(i=""+Qe(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+Qe(s):""}function Zr(e,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(a(92));if(ne(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=Qe(i),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o)}function pn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Jr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kl(e,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,s):typeof s!="number"||s===0||Jr.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function co(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var h in i)o=i[h],i.hasOwnProperty(h)&&s[h]!==o&&Kl(e,h,o)}else for(var f in i)i.hasOwnProperty(f)&&Kl(e,f,i[f])}function ho(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gs(e){return dh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var vi=null;function yn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ei=null,Ti=null;function fo(e){var i=Hn(e);if(i&&(e=i.stateNode)){var s=e[fe]||null;t:switch(e=i.stateNode,i.type){case"input":if(sn(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+de(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==e&&o.form===e.form){var h=o[fe]||null;if(!h)throw Error(a(90));sn(o,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===e.form&&uo(o)}break t;case"textarea":Ft(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&_i(e,!!s.multiple,i,!1)}}}var Kn=!1;function Ql(e,i,s){if(Kn)return e(i,s);Kn=!0;try{var o=e(i);return o}finally{if(Kn=!1,(Ei!==null||Ti!==null)&&(Bu(),Ei&&(i=Ei,e=Ti,Ti=Ei=null,fo(i),e)))for(i=0;i<e.length;i++)fo(e[i])}}function Wr(e,i){var s=e.stateNode;if(s===null)return null;var o=s[fe]||null;if(o===null)return null;s=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_n=!1;if(Nn)try{var ts={};Object.defineProperty(ts,"passive",{get:function(){_n=!0}}),window.addEventListener("test",ts,ts),window.removeEventListener("test",ts,ts)}catch{_n=!1}var Qn=null,Zi=null,Ai=null;function mo(){if(Ai)return Ai;var e,i=Zi,s=i.length,o,h="value"in Qn?Qn.value:Qn.textContent,f=h.length;for(e=0;e<s&&i[e]===h[e];e++);var v=s-e;for(o=1;o<=v&&i[s-o]===h[f-o];o++);return Ai=h.slice(e,1<o?1-o:void 0)}function Yn(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Xn(){return!0}function go(){return!1}function we(e){function i(s,o,h,f,v){this._reactName=s,this._targetInst=h,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(s=e[E],this[E]=s?s(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Xn:go,this.isPropagationStopped=go,this}return A(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),i}var qt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fs=we(qt),es=A({},qt,{view:0,detail:0}),Yl=we(es),Ks,Qs,$n,ns=A({},es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ss,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$n&&($n&&e.type==="mousemove"?(Ks=e.screenX-$n.screenX,Qs=e.screenY-$n.screenY):Qs=Ks=0,$n=e),Ks)},movementY:function(e){return"movementY"in e?e.movementY:Qs}}),vn=we(ns),Xl=A({},ns,{dataTransfer:0}),mh=we(Xl),is=A({},es,{relatedTarget:0}),Ys=we(is),po=A({},qt,{animationName:0,elapsedTime:0,pseudoElement:0}),Xs=we(po),$l=A({},qt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$s=we($l),gh=A({},qt,{data:0}),yo=we(gh),rs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zl={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _o(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Jl[e])?!!i[e]:!1}function ss(){return _o}var Wl=A({},es,{key:function(e){if(e.key){var i=rs[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Yn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zl[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ss,charCode:function(e){return e.type==="keypress"?Yn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zs=we(Wl),tu=A({},ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vo=we(tu),Si=A({},es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ss}),eu=we(Si),nu=A({},qt,{propertyName:0,elapsedTime:0,pseudoElement:0}),iu=we(nu),ru=A({},ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Js=we(ru),Ye=A({},qt,{newState:0,oldState:0}),su=we(Ye),au=[9,13,27,32],Zn=Nn&&"CompositionEvent"in window,u=null;Nn&&"documentMode"in document&&(u=document.documentMode);var m=Nn&&"TextEvent"in window&&!u,y=Nn&&(!Zn||u&&8<u&&11>=u),T=" ",x=!1;function j(e,i){switch(e){case"keyup":return au.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Z(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mt=!1;function _e(e,i){switch(e){case"compositionend":return Z(i);case"keypress":return i.which!==32?null:(x=!0,T);case"textInput":return e=i.data,e===T&&x?null:e;default:return null}}function Vt(e,i){if(Mt)return e==="compositionend"||!Zn&&j(e,i)?(e=mo(),Ai=Zi=Qn=null,Mt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return y&&i.locale!=="ko"?null:i.data;default:return null}}var Re={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ve(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Re[e.type]:i==="textarea"}function bi(e,i,s,o){Ei?Ti?Ti.push(o):Ti=[o]:Ei=o,i=Ku(i,"onChange"),0<i.length&&(s=new Fs("onChange","change",null,s,o),e.push({event:s,listeners:i}))}var Ve=null,Jn=null;function Eo(e){Ey(e,0)}function ou(e){var i=Gn(e);if(uo(i))return e}function qm(e,i){if(e==="change")return i}var jm=!1;if(Nn){var ph;if(Nn){var yh="oninput"in document;if(!yh){var Hm=document.createElement("div");Hm.setAttribute("oninput","return;"),yh=typeof Hm.oninput=="function"}ph=yh}else ph=!1;jm=ph&&(!document.documentMode||9<document.documentMode)}function Gm(){Ve&&(Ve.detachEvent("onpropertychange",Fm),Jn=Ve=null)}function Fm(e){if(e.propertyName==="value"&&ou(Jn)){var i=[];bi(i,Jn,e,yn(e)),Ql(Eo,i)}}function ET(e,i,s){e==="focusin"?(Gm(),Ve=i,Jn=s,Ve.attachEvent("onpropertychange",Fm)):e==="focusout"&&Gm()}function TT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ou(Jn)}function AT(e,i){if(e==="click")return ou(i)}function ST(e,i){if(e==="input"||e==="change")return ou(i)}function bT(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var an=typeof Object.is=="function"?Object.is:bT;function To(e,i){if(an(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var h=s[o];if(!Ur.call(i,h)||!an(e[h],i[h]))return!1}return!0}function Km(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qm(e,i){var s=Km(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=i&&o>=i)return{node:s,offset:i-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Km(s)}}function Ym(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Ym(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Xm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Xr(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=Xr(e.document)}return i}function _h(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var wT=Nn&&"documentMode"in document&&11>=document.documentMode,Ws=null,vh=null,Ao=null,Eh=!1;function $m(e,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Eh||Ws==null||Ws!==Xr(o)||(o=Ws,"selectionStart"in o&&_h(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ao&&To(Ao,o)||(Ao=o,o=Ku(vh,"onSelect"),0<o.length&&(i=new Fs("onSelect","select",null,i,s),e.push({event:i,listeners:o}),i.target=Ws)))}function as(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var ta={animationend:as("Animation","AnimationEnd"),animationiteration:as("Animation","AnimationIteration"),animationstart:as("Animation","AnimationStart"),transitionrun:as("Transition","TransitionRun"),transitionstart:as("Transition","TransitionStart"),transitioncancel:as("Transition","TransitionCancel"),transitionend:as("Transition","TransitionEnd")},Th={},Zm={};Nn&&(Zm=document.createElement("div").style,"AnimationEvent"in window||(delete ta.animationend.animation,delete ta.animationiteration.animation,delete ta.animationstart.animation),"TransitionEvent"in window||delete ta.transitionend.transition);function os(e){if(Th[e])return Th[e];if(!ta[e])return e;var i=ta[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Zm)return Th[e]=i[s];return e}var Jm=os("animationend"),Wm=os("animationiteration"),tg=os("animationstart"),RT=os("transitionrun"),IT=os("transitionstart"),CT=os("transitioncancel"),eg=os("transitionend"),ng=new Map,Ah="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ah.push("scrollEnd");function Mn(e,i){ng.set(e,i),On(i,[e])}var ig=new WeakMap;function En(e,i){if(typeof e=="object"&&e!==null){var s=ig.get(e);return s!==void 0?s:(i={value:e,source:i,stack:js(i)},ig.set(e,i),i)}return{value:e,source:i,stack:js(i)}}var Tn=[],ea=0,Sh=0;function lu(){for(var e=ea,i=Sh=ea=0;i<e;){var s=Tn[i];Tn[i++]=null;var o=Tn[i];Tn[i++]=null;var h=Tn[i];Tn[i++]=null;var f=Tn[i];if(Tn[i++]=null,o!==null&&h!==null){var v=o.pending;v===null?h.next=h:(h.next=v.next,v.next=h),o.pending=h}f!==0&&rg(s,h,f)}}function uu(e,i,s,o){Tn[ea++]=e,Tn[ea++]=i,Tn[ea++]=s,Tn[ea++]=o,Sh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function bh(e,i,s,o){return uu(e,i,s,o),cu(e)}function na(e,i){return uu(e,null,null,i),cu(e)}function rg(e,i,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var h=!1,f=e.return;f!==null;)f.childLanes|=s,o=f.alternate,o!==null&&(o.childLanes|=s),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(h=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,h&&i!==null&&(h=31-ze(s),e=f.hiddenUpdates,o=e[h],o===null?e[h]=[i]:o.push(i),i.lane=s|536870912),f):null}function cu(e){if(50<Qo)throw Qo=0,Nf=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ia={};function DT(e,i,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(e,i,s,o){return new DT(e,i,s,o)}function wh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wi(e,i){var s=e.alternate;return s===null?(s=on(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function sg(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function hu(e,i,s,o,h,f){var v=0;if(o=e,typeof e=="function")wh(e)&&(v=1);else if(typeof e=="string")v=NA(e,s,ot.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=on(31,s,i,h),e.elementType=w,e.lanes=f,e;case X:return ls(s.children,h,f,i);case it:v=8,h|=24;break;case J:return e=on(12,s,i,h|2),e.elementType=J,e.lanes=f,e;case pt:return e=on(13,s,i,h),e.elementType=pt,e.lanes=f,e;case Ot:return e=on(19,s,i,h),e.elementType=Ot,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Nt:case ht:v=10;break t;case yt:v=9;break t;case Dt:v=11;break t;case N:v=14;break t;case S:v=16,o=null;break t}v=29,s=Error(a(130,e===null?"null":typeof e,"")),o=null}return i=on(v,s,i,h),i.elementType=e,i.type=o,i.lanes=f,i}function ls(e,i,s,o){return e=on(7,e,o,i),e.lanes=s,e}function Rh(e,i,s){return e=on(6,e,null,i),e.lanes=s,e}function Ih(e,i,s){return i=on(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var ra=[],sa=0,fu=null,du=0,An=[],Sn=0,us=null,Ri=1,Ii="";function cs(e,i){ra[sa++]=du,ra[sa++]=fu,fu=e,du=i}function ag(e,i,s){An[Sn++]=Ri,An[Sn++]=Ii,An[Sn++]=us,us=e;var o=Ri;e=Ii;var h=32-ze(o)-1;o&=~(1<<h),s+=1;var f=32-ze(i)+h;if(30<f){var v=h-h%5;f=(o&(1<<v)-1).toString(32),o>>=v,h-=v,Ri=1<<32-ze(i)+h|s<<h|o,Ii=f+e}else Ri=1<<f|s<<h|o,Ii=e}function Ch(e){e.return!==null&&(cs(e,1),ag(e,1,0))}function Dh(e){for(;e===fu;)fu=ra[--sa],ra[sa]=null,du=ra[--sa],ra[sa]=null;for(;e===us;)us=An[--Sn],An[Sn]=null,Ii=An[--Sn],An[Sn]=null,Ri=An[--Sn],An[Sn]=null}var Xe=null,re=null,Bt=!1,hs=null,Wn=!1,Oh=Error(a(519));function fs(e){var i=Error(a(418,""));throw wo(En(i,e)),Oh}function og(e){var i=e.stateNode,s=e.type,o=e.memoizedProps;switch(i[ye]=e,i[fe]=o,s){case"dialog":It("cancel",i),It("close",i);break;case"iframe":case"object":case"embed":It("load",i);break;case"video":case"audio":for(s=0;s<Xo.length;s++)It(Xo[s],i);break;case"source":It("error",i);break;case"img":case"image":case"link":It("error",i),It("load",i);break;case"details":It("toggle",i);break;case"input":It("invalid",i),$r(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Hs(i);break;case"select":It("invalid",i);break;case"textarea":It("invalid",i),Zr(i,o.value,o.defaultValue,o.children),Hs(i)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||by(i.textContent,s)?(o.popover!=null&&(It("beforetoggle",i),It("toggle",i)),o.onScroll!=null&&It("scroll",i),o.onScrollEnd!=null&&It("scrollend",i),o.onClick!=null&&(i.onclick=Qu),i=!0):i=!1,i||fs(e)}function lg(e){for(Xe=e.return;Xe;)switch(Xe.tag){case 5:case 13:Wn=!1;return;case 27:case 3:Wn=!0;return;default:Xe=Xe.return}}function So(e){if(e!==Xe)return!1;if(!Bt)return lg(e),Bt=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Qf(e.type,e.memoizedProps)),s=!s),s&&re&&fs(e),lg(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){re=kn(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}re=null}}else i===27?(i=re,dr(e.type)?(e=Zf,Zf=null,re=e):re=i):re=Xe?kn(e.stateNode.nextSibling):null;return!0}function bo(){re=Xe=null,Bt=!1}function ug(){var e=hs;return e!==null&&(We===null?We=e:We.push.apply(We,e),hs=null),e}function wo(e){hs===null?hs=[e]:hs.push(e)}var Nh=Y(null),ds=null,Ci=null;function Ji(e,i,s){$(Nh,i._currentValue),i._currentValue=s}function Di(e){e._currentValue=Nh.current,tt(Nh)}function Mh(e,i,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===s)break;e=e.return}}function Vh(e,i,s,o){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var f=h.dependencies;if(f!==null){var v=h.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=h;for(var b=0;b<i.length;b++)if(E.context===i[b]){f.lanes|=s,E=f.alternate,E!==null&&(E.lanes|=s),Mh(f.return,s,e),o||(v=null);break t}f=E.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(a(341));v.lanes|=s,f=v.alternate,f!==null&&(f.lanes|=s),Mh(v,s,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function Ro(e,i,s,o){e=null;for(var h=i,f=!1;h!==null;){if(!f){if((h.flags&524288)!==0)f=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var E=h.type;an(h.pendingProps.value,v.value)||(e!==null?e.push(E):e=[E])}}else if(h===be.current){if(v=h.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(el):e=[el])}h=h.return}e!==null&&Vh(i,e,s,o),i.flags|=262144}function mu(e){for(e=e.firstContext;e!==null;){if(!an(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ms(e){ds=e,Ci=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Be(e){return cg(ds,e)}function gu(e,i){return ds===null&&ms(e),cg(e,i)}function cg(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Ci===null){if(e===null)throw Error(a(308));Ci=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Ci=Ci.next=i;return s}var OT=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},NT=r.unstable_scheduleCallback,MT=r.unstable_NormalPriority,Ee={$$typeof:ht,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kh(){return{controller:new OT,data:new Map,refCount:0}}function Io(e){e.refCount--,e.refCount===0&&NT(MT,function(){e.controller.abort()})}var Co=null,Ph=0,aa=0,oa=null;function VT(e,i){if(Co===null){var s=Co=[];Ph=0,aa=Uf(),oa={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Ph++,i.then(hg,hg),i}function hg(){if(--Ph===0&&Co!==null){oa!==null&&(oa.status="fulfilled");var e=Co;Co=null,aa=0,oa=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function kT(e,i){var s=[],o={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var h=0;h<s.length;h++)(0,s[h])(i)},function(h){for(o.status="rejected",o.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),o}var fg=H.S;H.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&VT(e,i),fg!==null&&fg(e,i)};var gs=Y(null);function xh(){var e=gs.current;return e!==null?e:Zt.pooledCache}function pu(e,i){i===null?$(gs,gs.current):$(gs,i.pool)}function dg(){var e=xh();return e===null?null:{parent:Ee._currentValue,pool:e}}var Do=Error(a(460)),mg=Error(a(474)),yu=Error(a(542)),Lh={then:function(){}};function gg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _u(){}function pg(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(_u,_u),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,_g(e),e;default:if(typeof i.status=="string")i.then(_u,_u);else{if(e=Zt,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=o}},function(o){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,_g(e),e}throw Oo=i,Do}}var Oo=null;function yg(){if(Oo===null)throw Error(a(459));var e=Oo;return Oo=null,e}function _g(e){if(e===Do||e===yu)throw Error(a(483))}var Wi=!1;function Uh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function tr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function er(e,i,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ht&2)!==0){var h=o.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),o.pending=i,i=cu(e),rg(e,null,s),i}return uu(e,o,i,s),cu(e)}function No(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,ro(e,s)}}function Bh(e,i){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var h=null,f=null;if(s=s.firstBaseUpdate,s!==null){do{var v={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};f===null?h=f=v:f=f.next=v,s=s.next}while(s!==null);f===null?h=f=i:f=f.next=i}else h=f=i;s={baseState:o.baseState,firstBaseUpdate:h,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var qh=!1;function Mo(){if(qh){var e=oa;if(e!==null)throw e}}function Vo(e,i,s,o){qh=!1;var h=e.updateQueue;Wi=!1;var f=h.firstBaseUpdate,v=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var b=E,U=b.next;b.next=null,v===null?f=U:v.next=U,v=b;var G=e.alternate;G!==null&&(G=G.updateQueue,E=G.lastBaseUpdate,E!==v&&(E===null?G.firstBaseUpdate=U:E.next=U,G.lastBaseUpdate=b))}if(f!==null){var K=h.baseState;v=0,G=U=b=null,E=f;do{var z=E.lane&-536870913,B=z!==E.lane;if(B?(kt&z)===z:(o&z)===z){z!==0&&z===aa&&(qh=!0),G!==null&&(G=G.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var dt=e,lt=E;z=i;var Yt=s;switch(lt.tag){case 1:if(dt=lt.payload,typeof dt=="function"){K=dt.call(Yt,K,z);break t}K=dt;break t;case 3:dt.flags=dt.flags&-65537|128;case 0:if(dt=lt.payload,z=typeof dt=="function"?dt.call(Yt,K,z):dt,z==null)break t;K=A({},K,z);break t;case 2:Wi=!0}}z=E.callback,z!==null&&(e.flags|=64,B&&(e.flags|=8192),B=h.callbacks,B===null?h.callbacks=[z]:B.push(z))}else B={lane:z,tag:E.tag,payload:E.payload,callback:E.callback,next:null},G===null?(U=G=B,b=K):G=G.next=B,v|=z;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;B=E,E=B.next,B.next=null,h.lastBaseUpdate=B,h.shared.pending=null}}while(!0);G===null&&(b=K),h.baseState=b,h.firstBaseUpdate=U,h.lastBaseUpdate=G,f===null&&(h.shared.lanes=0),ur|=v,e.lanes=v,e.memoizedState=K}}function vg(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function Eg(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)vg(s[e],i)}var la=Y(null),vu=Y(0);function Tg(e,i){e=xi,$(vu,e),$(la,i),xi=e|i.baseLanes}function jh(){$(vu,xi),$(la,la.current)}function Hh(){xi=vu.current,tt(la),tt(vu)}var nr=0,At=null,Kt=null,me=null,Eu=!1,ua=!1,ps=!1,Tu=0,ko=0,ca=null,PT=0;function le(){throw Error(a(321))}function Gh(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!an(e[s],i[s]))return!1;return!0}function Fh(e,i,s,o,h,f){return nr=f,At=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,H.H=e===null||e.memoizedState===null?rp:sp,ps=!1,f=s(o,h),ps=!1,ua&&(f=Sg(i,s,o,h)),Ag(e),f}function Ag(e){H.H=Iu;var i=Kt!==null&&Kt.next!==null;if(nr=0,me=Kt=At=null,Eu=!1,ko=0,ca=null,i)throw Error(a(300));e===null||Ie||(e=e.dependencies,e!==null&&mu(e)&&(Ie=!0))}function Sg(e,i,s,o){At=e;var h=0;do{if(ua&&(ca=null),ko=0,ua=!1,25<=h)throw Error(a(301));if(h+=1,me=Kt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}H.H=jT,f=i(s,o)}while(ua);return f}function xT(){var e=H.H,i=e.useState()[0];return i=typeof i.then=="function"?Po(i):i,e=e.useState()[0],(Kt!==null?Kt.memoizedState:null)!==e&&(At.flags|=1024),i}function Kh(){var e=Tu!==0;return Tu=0,e}function Qh(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Yh(e){if(Eu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Eu=!1}nr=0,me=Kt=At=null,ua=!1,ko=Tu=0,ca=null}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?At.memoizedState=me=e:me=me.next=e,me}function ge(){if(Kt===null){var e=At.alternate;e=e!==null?e.memoizedState:null}else e=Kt.next;var i=me===null?At.memoizedState:me.next;if(i!==null)me=i,Kt=e;else{if(e===null)throw At.alternate===null?Error(a(467)):Error(a(310));Kt=e,e={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},me===null?At.memoizedState=me=e:me=me.next=e}return me}function Xh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Po(e){var i=ko;return ko+=1,ca===null&&(ca=[]),e=pg(ca,e,i),i=At,(me===null?i.memoizedState:me.next)===null&&(i=i.alternate,H.H=i===null||i.memoizedState===null?rp:sp),e}function Au(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Po(e);if(e.$$typeof===ht)return Be(e)}throw Error(a(438,String(e)))}function $h(e){var i=null,s=At.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=At.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Xh(),At.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),o=0;o<e;o++)s[o]=O;return i.index++,s}function Oi(e,i){return typeof i=="function"?i(e):i}function Su(e){var i=ge();return Zh(i,Kt,e)}function Zh(e,i,s){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var h=e.baseQueue,f=o.pending;if(f!==null){if(h!==null){var v=h.next;h.next=f.next,f.next=v}i.baseQueue=h=f,o.pending=null}if(f=e.baseState,h===null)e.memoizedState=f;else{i=h.next;var E=v=null,b=null,U=i,G=!1;do{var K=U.lane&-536870913;if(K!==U.lane?(kt&K)===K:(nr&K)===K){var z=U.revertLane;if(z===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),K===aa&&(G=!0);else if((nr&z)===z){U=U.next,z===aa&&(G=!0);continue}else K={lane:0,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},b===null?(E=b=K,v=f):b=b.next=K,At.lanes|=z,ur|=z;K=U.action,ps&&s(f,K),f=U.hasEagerState?U.eagerState:s(f,K)}else z={lane:K,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},b===null?(E=b=z,v=f):b=b.next=z,At.lanes|=K,ur|=K;U=U.next}while(U!==null&&U!==i);if(b===null?v=f:b.next=E,!an(f,e.memoizedState)&&(Ie=!0,G&&(s=oa,s!==null)))throw s;e.memoizedState=f,e.baseState=v,e.baseQueue=b,o.lastRenderedState=f}return h===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Jh(e){var i=ge(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var o=s.dispatch,h=s.pending,f=i.memoizedState;if(h!==null){s.pending=null;var v=h=h.next;do f=e(f,v.action),v=v.next;while(v!==h);an(f,i.memoizedState)||(Ie=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),s.lastRenderedState=f}return[f,o]}function bg(e,i,s){var o=At,h=ge(),f=Bt;if(f){if(s===void 0)throw Error(a(407));s=s()}else s=i();var v=!an((Kt||h).memoizedState,s);v&&(h.memoizedState=s,Ie=!0),h=h.queue;var E=Ig.bind(null,o,h,e);if(xo(2048,8,E,[e]),h.getSnapshot!==i||v||me!==null&&me.memoizedState.tag&1){if(o.flags|=2048,ha(9,bu(),Rg.bind(null,o,h,s,i),null),Zt===null)throw Error(a(349));f||(nr&124)!==0||wg(o,i,s)}return s}function wg(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=At.updateQueue,i===null?(i=Xh(),At.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Rg(e,i,s,o){i.value=s,i.getSnapshot=o,Cg(i)&&Dg(e)}function Ig(e,i,s){return s(function(){Cg(i)&&Dg(e)})}function Cg(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!an(e,s)}catch{return!0}}function Dg(e){var i=na(e,2);i!==null&&fn(i,e,2)}function Wh(e){var i=Ze();if(typeof e=="function"){var s=e;if(e=s(),ps){rn(!0);try{s()}finally{rn(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:e},i}function Og(e,i,s,o){return e.baseState=s,Zh(e,Kt,typeof o=="function"?o:Oi)}function LT(e,i,s,o,h){if(Ru(e))throw Error(a(485));if(e=i.action,e!==null){var f={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};H.T!==null?s(!0):f.isTransition=!1,o(f),s=i.pending,s===null?(f.next=i.pending=f,Ng(i,f)):(f.next=s.next,i.pending=s.next=f)}}function Ng(e,i){var s=i.action,o=i.payload,h=e.state;if(i.isTransition){var f=H.T,v={};H.T=v;try{var E=s(h,o),b=H.S;b!==null&&b(v,E),Mg(e,i,E)}catch(U){tf(e,i,U)}finally{H.T=f}}else try{f=s(h,o),Mg(e,i,f)}catch(U){tf(e,i,U)}}function Mg(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Vg(e,i,o)},function(o){return tf(e,i,o)}):Vg(e,i,s)}function Vg(e,i,s){i.status="fulfilled",i.value=s,kg(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,Ng(e,s)))}function tf(e,i,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,kg(i),i=i.next;while(i!==o)}e.action=null}function kg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Pg(e,i){return i}function xg(e,i){if(Bt){var s=Zt.formState;if(s!==null){t:{var o=At;if(Bt){if(re){e:{for(var h=re,f=Wn;h.nodeType!==8;){if(!f){h=null;break e}if(h=kn(h.nextSibling),h===null){h=null;break e}}f=h.data,h=f==="F!"||f==="F"?h:null}if(h){re=kn(h.nextSibling),o=h.data==="F!";break t}}fs(o)}o=!1}o&&(i=s[0])}}return s=Ze(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pg,lastRenderedState:i},s.queue=o,s=ep.bind(null,At,o),o.dispatch=s,o=Wh(!1),f=af.bind(null,At,!1,o.queue),o=Ze(),h={state:i,dispatch:null,action:e,pending:null},o.queue=h,s=LT.bind(null,At,h,f,s),h.dispatch=s,o.memoizedState=e,[i,s,!1]}function Lg(e){var i=ge();return Ug(i,Kt,e)}function Ug(e,i,s){if(i=Zh(e,i,Pg)[0],e=Su(Oi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=Po(i)}catch(v){throw v===Do?yu:v}else o=i;i=ge();var h=i.queue,f=h.dispatch;return s!==i.memoizedState&&(At.flags|=2048,ha(9,bu(),UT.bind(null,h,s),null)),[o,f,e]}function UT(e,i){e.action=i}function zg(e){var i=ge(),s=Kt;if(s!==null)return Ug(i,s,e);ge(),i=i.memoizedState,s=ge();var o=s.queue.dispatch;return s.memoizedState=e,[i,o,!1]}function ha(e,i,s,o){return e={tag:e,create:s,deps:o,inst:i,next:null},i=At.updateQueue,i===null&&(i=Xh(),At.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,i.lastEffect=e),e}function bu(){return{destroy:void 0,resource:void 0}}function Bg(){return ge().memoizedState}function wu(e,i,s,o){var h=Ze();o=o===void 0?null:o,At.flags|=e,h.memoizedState=ha(1|i,bu(),s,o)}function xo(e,i,s,o){var h=ge();o=o===void 0?null:o;var f=h.memoizedState.inst;Kt!==null&&o!==null&&Gh(o,Kt.memoizedState.deps)?h.memoizedState=ha(i,f,s,o):(At.flags|=e,h.memoizedState=ha(1|i,f,s,o))}function qg(e,i){wu(8390656,8,e,i)}function jg(e,i){xo(2048,8,e,i)}function Hg(e,i){return xo(4,2,e,i)}function Gg(e,i){return xo(4,4,e,i)}function Fg(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Kg(e,i,s){s=s!=null?s.concat([e]):null,xo(4,4,Fg.bind(null,i,e),s)}function ef(){}function Qg(e,i){var s=ge();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&Gh(i,o[1])?o[0]:(s.memoizedState=[e,i],e)}function Yg(e,i){var s=ge();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&Gh(i,o[1]))return o[0];if(o=e(),ps){rn(!0);try{e()}finally{rn(!1)}}return s.memoizedState=[o,i],o}function nf(e,i,s){return s===void 0||(nr&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=Zp(),At.lanes|=e,ur|=e,s)}function Xg(e,i,s,o){return an(s,i)?s:la.current!==null?(e=nf(e,s,o),an(e,i)||(Ie=!0),e):(nr&42)===0?(Ie=!0,e.memoizedState=s):(e=Zp(),At.lanes|=e,ur|=e,i)}function $g(e,i,s,o,h){var f=W.p;W.p=f!==0&&8>f?f:8;var v=H.T,E={};H.T=E,af(e,!1,i,s);try{var b=h(),U=H.S;if(U!==null&&U(E,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var G=kT(b,o);Lo(e,i,G,hn(e))}else Lo(e,i,o,hn(e))}catch(K){Lo(e,i,{then:function(){},status:"rejected",reason:K},hn())}finally{W.p=f,H.T=v}}function zT(){}function rf(e,i,s,o){if(e.tag!==5)throw Error(a(476));var h=Zg(e).queue;$g(e,h,i,at,s===null?zT:function(){return Jg(e),s(o)})}function Zg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:at,baseState:at,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:at},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Jg(e){var i=Zg(e).next.queue;Lo(e,i,{},hn())}function sf(){return Be(el)}function Wg(){return ge().memoizedState}function tp(){return ge().memoizedState}function BT(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=hn();e=tr(s);var o=er(i,e,s);o!==null&&(fn(o,i,s),No(o,i,s)),i={cache:kh()},e.payload=i;return}i=i.return}}function qT(e,i,s){var o=hn();s={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Ru(e)?np(i,s):(s=bh(e,i,s,o),s!==null&&(fn(s,e,o),ip(s,i,o)))}function ep(e,i,s){var o=hn();Lo(e,i,s,o)}function Lo(e,i,s,o){var h={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Ru(e))np(i,h);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var v=i.lastRenderedState,E=f(v,s);if(h.hasEagerState=!0,h.eagerState=E,an(E,v))return uu(e,i,h,0),Zt===null&&lu(),!1}catch{}finally{}if(s=bh(e,i,h,o),s!==null)return fn(s,e,o),ip(s,i,o),!0}return!1}function af(e,i,s,o){if(o={lane:2,revertLane:Uf(),action:o,hasEagerState:!1,eagerState:null,next:null},Ru(e)){if(i)throw Error(a(479))}else i=bh(e,s,o,2),i!==null&&fn(i,e,2)}function Ru(e){var i=e.alternate;return e===At||i!==null&&i===At}function np(e,i){ua=Eu=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function ip(e,i,s){if((s&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,ro(e,s)}}var Iu={readContext:Be,use:Au,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useLayoutEffect:le,useInsertionEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useSyncExternalStore:le,useId:le,useHostTransitionStatus:le,useFormState:le,useActionState:le,useOptimistic:le,useMemoCache:le,useCacheRefresh:le},rp={readContext:Be,use:Au,useCallback:function(e,i){return Ze().memoizedState=[e,i===void 0?null:i],e},useContext:Be,useEffect:qg,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,wu(4194308,4,Fg.bind(null,i,e),s)},useLayoutEffect:function(e,i){return wu(4194308,4,e,i)},useInsertionEffect:function(e,i){wu(4,2,e,i)},useMemo:function(e,i){var s=Ze();i=i===void 0?null:i;var o=e();if(ps){rn(!0);try{e()}finally{rn(!1)}}return s.memoizedState=[o,i],o},useReducer:function(e,i,s){var o=Ze();if(s!==void 0){var h=s(i);if(ps){rn(!0);try{s(i)}finally{rn(!1)}}}else h=i;return o.memoizedState=o.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},o.queue=e,e=e.dispatch=qT.bind(null,At,e),[o.memoizedState,e]},useRef:function(e){var i=Ze();return e={current:e},i.memoizedState=e},useState:function(e){e=Wh(e);var i=e.queue,s=ep.bind(null,At,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:ef,useDeferredValue:function(e,i){var s=Ze();return nf(s,e,i)},useTransition:function(){var e=Wh(!1);return e=$g.bind(null,At,e.queue,!0,!1),Ze().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var o=At,h=Ze();if(Bt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Zt===null)throw Error(a(349));(kt&124)!==0||wg(o,i,s)}h.memoizedState=s;var f={value:s,getSnapshot:i};return h.queue=f,qg(Ig.bind(null,o,f,e),[e]),o.flags|=2048,ha(9,bu(),Rg.bind(null,o,f,s,i),null),s},useId:function(){var e=Ze(),i=Zt.identifierPrefix;if(Bt){var s=Ii,o=Ri;s=(o&~(1<<32-ze(o)-1)).toString(32)+s,i="«"+i+"R"+s,s=Tu++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=PT++,i="«"+i+"r"+s.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:sf,useFormState:xg,useActionState:xg,useOptimistic:function(e){var i=Ze();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=af.bind(null,At,!0,s),s.dispatch=i,[e,i]},useMemoCache:$h,useCacheRefresh:function(){return Ze().memoizedState=BT.bind(null,At)}},sp={readContext:Be,use:Au,useCallback:Qg,useContext:Be,useEffect:jg,useImperativeHandle:Kg,useInsertionEffect:Hg,useLayoutEffect:Gg,useMemo:Yg,useReducer:Su,useRef:Bg,useState:function(){return Su(Oi)},useDebugValue:ef,useDeferredValue:function(e,i){var s=ge();return Xg(s,Kt.memoizedState,e,i)},useTransition:function(){var e=Su(Oi)[0],i=ge().memoizedState;return[typeof e=="boolean"?e:Po(e),i]},useSyncExternalStore:bg,useId:Wg,useHostTransitionStatus:sf,useFormState:Lg,useActionState:Lg,useOptimistic:function(e,i){var s=ge();return Og(s,Kt,e,i)},useMemoCache:$h,useCacheRefresh:tp},jT={readContext:Be,use:Au,useCallback:Qg,useContext:Be,useEffect:jg,useImperativeHandle:Kg,useInsertionEffect:Hg,useLayoutEffect:Gg,useMemo:Yg,useReducer:Jh,useRef:Bg,useState:function(){return Jh(Oi)},useDebugValue:ef,useDeferredValue:function(e,i){var s=ge();return Kt===null?nf(s,e,i):Xg(s,Kt.memoizedState,e,i)},useTransition:function(){var e=Jh(Oi)[0],i=ge().memoizedState;return[typeof e=="boolean"?e:Po(e),i]},useSyncExternalStore:bg,useId:Wg,useHostTransitionStatus:sf,useFormState:zg,useActionState:zg,useOptimistic:function(e,i){var s=ge();return Kt!==null?Og(s,Kt,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:$h,useCacheRefresh:tp},fa=null,Uo=0;function Cu(e){var i=Uo;return Uo+=1,fa===null&&(fa=[]),pg(fa,e,i)}function zo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Du(e,i){throw i.$$typeof===D?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function ap(e){var i=e._init;return i(e._payload)}function op(e){function i(k,C){if(e){var L=k.deletions;L===null?(k.deletions=[C],k.flags|=16):L.push(C)}}function s(k,C){if(!e)return null;for(;C!==null;)i(k,C),C=C.sibling;return null}function o(k){for(var C=new Map;k!==null;)k.key!==null?C.set(k.key,k):C.set(k.index,k),k=k.sibling;return C}function h(k,C){return k=wi(k,C),k.index=0,k.sibling=null,k}function f(k,C,L){return k.index=L,e?(L=k.alternate,L!==null?(L=L.index,L<C?(k.flags|=67108866,C):L):(k.flags|=67108866,C)):(k.flags|=1048576,C)}function v(k){return e&&k.alternate===null&&(k.flags|=67108866),k}function E(k,C,L,F){return C===null||C.tag!==6?(C=Rh(L,k.mode,F),C.return=k,C):(C=h(C,L),C.return=k,C)}function b(k,C,L,F){var rt=L.type;return rt===X?G(k,C,L.props.children,F,L.key):C!==null&&(C.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===S&&ap(rt)===C.type)?(C=h(C,L.props),zo(C,L),C.return=k,C):(C=hu(L.type,L.key,L.props,null,k.mode,F),zo(C,L),C.return=k,C)}function U(k,C,L,F){return C===null||C.tag!==4||C.stateNode.containerInfo!==L.containerInfo||C.stateNode.implementation!==L.implementation?(C=Ih(L,k.mode,F),C.return=k,C):(C=h(C,L.children||[]),C.return=k,C)}function G(k,C,L,F,rt){return C===null||C.tag!==7?(C=ls(L,k.mode,F,rt),C.return=k,C):(C=h(C,L),C.return=k,C)}function K(k,C,L){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=Rh(""+C,k.mode,L),C.return=k,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case M:return L=hu(C.type,C.key,C.props,null,k.mode,L),zo(L,C),L.return=k,L;case q:return C=Ih(C,k.mode,L),C.return=k,C;case S:var F=C._init;return C=F(C._payload),K(k,C,L)}if(ne(C)||P(C))return C=ls(C,k.mode,L,null),C.return=k,C;if(typeof C.then=="function")return K(k,Cu(C),L);if(C.$$typeof===ht)return K(k,gu(k,C),L);Du(k,C)}return null}function z(k,C,L,F){var rt=C!==null?C.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return rt!==null?null:E(k,C,""+L,F);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case M:return L.key===rt?b(k,C,L,F):null;case q:return L.key===rt?U(k,C,L,F):null;case S:return rt=L._init,L=rt(L._payload),z(k,C,L,F)}if(ne(L)||P(L))return rt!==null?null:G(k,C,L,F,null);if(typeof L.then=="function")return z(k,C,Cu(L),F);if(L.$$typeof===ht)return z(k,C,gu(k,L),F);Du(k,L)}return null}function B(k,C,L,F,rt){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return k=k.get(L)||null,E(C,k,""+F,rt);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case M:return k=k.get(F.key===null?L:F.key)||null,b(C,k,F,rt);case q:return k=k.get(F.key===null?L:F.key)||null,U(C,k,F,rt);case S:var bt=F._init;return F=bt(F._payload),B(k,C,L,F,rt)}if(ne(F)||P(F))return k=k.get(L)||null,G(C,k,F,rt,null);if(typeof F.then=="function")return B(k,C,L,Cu(F),rt);if(F.$$typeof===ht)return B(k,C,L,gu(C,F),rt);Du(C,F)}return null}function dt(k,C,L,F){for(var rt=null,bt=null,st=C,ut=C=0,De=null;st!==null&&ut<L.length;ut++){st.index>ut?(De=st,st=null):De=st.sibling;var Ut=z(k,st,L[ut],F);if(Ut===null){st===null&&(st=De);break}e&&st&&Ut.alternate===null&&i(k,st),C=f(Ut,C,ut),bt===null?rt=Ut:bt.sibling=Ut,bt=Ut,st=De}if(ut===L.length)return s(k,st),Bt&&cs(k,ut),rt;if(st===null){for(;ut<L.length;ut++)st=K(k,L[ut],F),st!==null&&(C=f(st,C,ut),bt===null?rt=st:bt.sibling=st,bt=st);return Bt&&cs(k,ut),rt}for(st=o(st);ut<L.length;ut++)De=B(st,k,ut,L[ut],F),De!==null&&(e&&De.alternate!==null&&st.delete(De.key===null?ut:De.key),C=f(De,C,ut),bt===null?rt=De:bt.sibling=De,bt=De);return e&&st.forEach(function(_r){return i(k,_r)}),Bt&&cs(k,ut),rt}function lt(k,C,L,F){if(L==null)throw Error(a(151));for(var rt=null,bt=null,st=C,ut=C=0,De=null,Ut=L.next();st!==null&&!Ut.done;ut++,Ut=L.next()){st.index>ut?(De=st,st=null):De=st.sibling;var _r=z(k,st,Ut.value,F);if(_r===null){st===null&&(st=De);break}e&&st&&_r.alternate===null&&i(k,st),C=f(_r,C,ut),bt===null?rt=_r:bt.sibling=_r,bt=_r,st=De}if(Ut.done)return s(k,st),Bt&&cs(k,ut),rt;if(st===null){for(;!Ut.done;ut++,Ut=L.next())Ut=K(k,Ut.value,F),Ut!==null&&(C=f(Ut,C,ut),bt===null?rt=Ut:bt.sibling=Ut,bt=Ut);return Bt&&cs(k,ut),rt}for(st=o(st);!Ut.done;ut++,Ut=L.next())Ut=B(st,k,ut,Ut.value,F),Ut!==null&&(e&&Ut.alternate!==null&&st.delete(Ut.key===null?ut:Ut.key),C=f(Ut,C,ut),bt===null?rt=Ut:bt.sibling=Ut,bt=Ut);return e&&st.forEach(function(HA){return i(k,HA)}),Bt&&cs(k,ut),rt}function Yt(k,C,L,F){if(typeof L=="object"&&L!==null&&L.type===X&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case M:t:{for(var rt=L.key;C!==null;){if(C.key===rt){if(rt=L.type,rt===X){if(C.tag===7){s(k,C.sibling),F=h(C,L.props.children),F.return=k,k=F;break t}}else if(C.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===S&&ap(rt)===C.type){s(k,C.sibling),F=h(C,L.props),zo(F,L),F.return=k,k=F;break t}s(k,C);break}else i(k,C);C=C.sibling}L.type===X?(F=ls(L.props.children,k.mode,F,L.key),F.return=k,k=F):(F=hu(L.type,L.key,L.props,null,k.mode,F),zo(F,L),F.return=k,k=F)}return v(k);case q:t:{for(rt=L.key;C!==null;){if(C.key===rt)if(C.tag===4&&C.stateNode.containerInfo===L.containerInfo&&C.stateNode.implementation===L.implementation){s(k,C.sibling),F=h(C,L.children||[]),F.return=k,k=F;break t}else{s(k,C);break}else i(k,C);C=C.sibling}F=Ih(L,k.mode,F),F.return=k,k=F}return v(k);case S:return rt=L._init,L=rt(L._payload),Yt(k,C,L,F)}if(ne(L))return dt(k,C,L,F);if(P(L)){if(rt=P(L),typeof rt!="function")throw Error(a(150));return L=rt.call(L),lt(k,C,L,F)}if(typeof L.then=="function")return Yt(k,C,Cu(L),F);if(L.$$typeof===ht)return Yt(k,C,gu(k,L),F);Du(k,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,C!==null&&C.tag===6?(s(k,C.sibling),F=h(C,L),F.return=k,k=F):(s(k,C),F=Rh(L,k.mode,F),F.return=k,k=F),v(k)):s(k,C)}return function(k,C,L,F){try{Uo=0;var rt=Yt(k,C,L,F);return fa=null,rt}catch(st){if(st===Do||st===yu)throw st;var bt=on(29,st,null,k.mode);return bt.lanes=F,bt.return=k,bt}finally{}}}var da=op(!0),lp=op(!1),bn=Y(null),ti=null;function ir(e){var i=e.alternate;$(Te,Te.current&1),$(bn,e),ti===null&&(i===null||la.current!==null||i.memoizedState!==null)&&(ti=e)}function up(e){if(e.tag===22){if($(Te,Te.current),$(bn,e),ti===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(ti=e)}}else rr()}function rr(){$(Te,Te.current),$(bn,bn.current)}function Ni(e){tt(bn),ti===e&&(ti=null),tt(Te)}var Te=Y(0);function Ou(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||$f(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function of(e,i,s,o){i=e.memoizedState,s=s(o,i),s=s==null?i:A({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var lf={enqueueSetState:function(e,i,s){e=e._reactInternals;var o=hn(),h=tr(o);h.payload=i,s!=null&&(h.callback=s),i=er(e,h,o),i!==null&&(fn(i,e,o),No(i,e,o))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var o=hn(),h=tr(o);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=er(e,h,o),i!==null&&(fn(i,e,o),No(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=hn(),o=tr(s);o.tag=2,i!=null&&(o.callback=i),i=er(e,o,s),i!==null&&(fn(i,e,s),No(i,e,s))}};function cp(e,i,s,o,h,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):i.prototype&&i.prototype.isPureReactComponent?!To(s,o)||!To(h,f):!0}function hp(e,i,s,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==e&&lf.enqueueReplaceState(i,i.state,null)}function ys(e,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(e=e.defaultProps){s===i&&(s=A({},s));for(var h in e)s[h]===void 0&&(s[h]=e[h])}return s}var Nu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function fp(e){Nu(e)}function dp(e){console.error(e)}function mp(e){Nu(e)}function Mu(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function gp(e,i,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function uf(e,i,s){return s=tr(s),s.tag=3,s.payload={element:null},s.callback=function(){Mu(e,i)},s}function pp(e){return e=tr(e),e.tag=3,e}function yp(e,i,s,o){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var f=o.value;e.payload=function(){return h(f)},e.callback=function(){gp(i,s,o)}}var v=s.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){gp(i,s,o),typeof h!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function HT(e,i,s,o,h){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&Ro(i,s,h,!0),s=bn.current,s!==null){switch(s.tag){case 13:return ti===null?Vf():s.alternate===null&&se===0&&(se=3),s.flags&=-257,s.flags|=65536,s.lanes=h,o===Lh?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),Pf(e,o,h)),!1;case 22:return s.flags|=65536,o===Lh?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),Pf(e,o,h)),!1}throw Error(a(435,s.tag))}return Pf(e,o,h),Vf(),!1}if(Bt)return i=bn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,o!==Oh&&(e=Error(a(422),{cause:o}),wo(En(e,s)))):(o!==Oh&&(i=Error(a(423),{cause:o}),wo(En(i,s))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,o=En(o,s),h=uf(e.stateNode,o,h),Bh(e,h),se!==4&&(se=2)),!1;var f=Error(a(520),{cause:o});if(f=En(f,s),Ko===null?Ko=[f]:Ko.push(f),se!==4&&(se=2),i===null)return!0;o=En(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=h&-h,s.lanes|=e,e=uf(s.stateNode,o,e),Bh(s,e),!1;case 1:if(i=s.type,f=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(cr===null||!cr.has(f))))return s.flags|=65536,h&=-h,s.lanes|=h,h=pp(h),yp(h,e,s,o),Bh(s,h),!1}s=s.return}while(s!==null);return!1}var _p=Error(a(461)),Ie=!1;function ke(e,i,s,o){i.child=e===null?lp(i,null,s,o):da(i,e.child,s,o)}function vp(e,i,s,o,h){s=s.render;var f=i.ref;if("ref"in o){var v={};for(var E in o)E!=="ref"&&(v[E]=o[E])}else v=o;return ms(i),o=Fh(e,i,s,v,f,h),E=Kh(),e!==null&&!Ie?(Qh(e,i,h),Mi(e,i,h)):(Bt&&E&&Ch(i),i.flags|=1,ke(e,i,o,h),i.child)}function Ep(e,i,s,o,h){if(e===null){var f=s.type;return typeof f=="function"&&!wh(f)&&f.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=f,Tp(e,i,f,o,h)):(e=hu(s.type,null,o,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(f=e.child,!yf(e,h)){var v=f.memoizedProps;if(s=s.compare,s=s!==null?s:To,s(v,o)&&e.ref===i.ref)return Mi(e,i,h)}return i.flags|=1,e=wi(f,o),e.ref=i.ref,e.return=i,i.child=e}function Tp(e,i,s,o,h){if(e!==null){var f=e.memoizedProps;if(To(f,o)&&e.ref===i.ref)if(Ie=!1,i.pendingProps=o=f,yf(e,h))(e.flags&131072)!==0&&(Ie=!0);else return i.lanes=e.lanes,Mi(e,i,h)}return cf(e,i,s,o,h)}function Ap(e,i,s){var o=i.pendingProps,h=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((i.flags&128)!==0){if(o=f!==null?f.baseLanes|s:s,e!==null){for(h=i.child=e.child,f=0;h!==null;)f=f|h.lanes|h.childLanes,h=h.sibling;i.childLanes=f&~o}else i.childLanes=0,i.child=null;return Sp(e,i,o,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&pu(i,f!==null?f.cachePool:null),f!==null?Tg(i,f):jh(),up(i);else return i.lanes=i.childLanes=536870912,Sp(e,i,f!==null?f.baseLanes|s:s,s)}else f!==null?(pu(i,f.cachePool),Tg(i,f),rr(),i.memoizedState=null):(e!==null&&pu(i,null),jh(),rr());return ke(e,i,h,s),i.child}function Sp(e,i,s,o){var h=xh();return h=h===null?null:{parent:Ee._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},e!==null&&pu(i,null),jh(),up(i),e!==null&&Ro(e,i,o,!0),null}function Vu(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function cf(e,i,s,o,h){return ms(i),s=Fh(e,i,s,o,void 0,h),o=Kh(),e!==null&&!Ie?(Qh(e,i,h),Mi(e,i,h)):(Bt&&o&&Ch(i),i.flags|=1,ke(e,i,s,h),i.child)}function bp(e,i,s,o,h,f){return ms(i),i.updateQueue=null,s=Sg(i,o,s,h),Ag(e),o=Kh(),e!==null&&!Ie?(Qh(e,i,f),Mi(e,i,f)):(Bt&&o&&Ch(i),i.flags|=1,ke(e,i,s,f),i.child)}function wp(e,i,s,o,h){if(ms(i),i.stateNode===null){var f=ia,v=s.contextType;typeof v=="object"&&v!==null&&(f=Be(v)),f=new s(o,f),i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=lf,i.stateNode=f,f._reactInternals=i,f=i.stateNode,f.props=o,f.state=i.memoizedState,f.refs={},Uh(i),v=s.contextType,f.context=typeof v=="object"&&v!==null?Be(v):ia,f.state=i.memoizedState,v=s.getDerivedStateFromProps,typeof v=="function"&&(of(i,s,v,o),f.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&lf.enqueueReplaceState(f,f.state,null),Vo(i,o,f,h),Mo(),f.state=i.memoizedState),typeof f.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){f=i.stateNode;var E=i.memoizedProps,b=ys(s,E);f.props=b;var U=f.context,G=s.contextType;v=ia,typeof G=="object"&&G!==null&&(v=Be(G));var K=s.getDerivedStateFromProps;G=typeof K=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,G||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||U!==v)&&hp(i,f,o,v),Wi=!1;var z=i.memoizedState;f.state=z,Vo(i,o,f,h),Mo(),U=i.memoizedState,E||z!==U||Wi?(typeof K=="function"&&(of(i,s,K,o),U=i.memoizedState),(b=Wi||cp(i,s,b,o,z,U,v))?(G||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(i.flags|=4194308)):(typeof f.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=U),f.props=o,f.state=U,f.context=v,o=b):(typeof f.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{f=i.stateNode,zh(e,i),v=i.memoizedProps,G=ys(s,v),f.props=G,K=i.pendingProps,z=f.context,U=s.contextType,b=ia,typeof U=="object"&&U!==null&&(b=Be(U)),E=s.getDerivedStateFromProps,(U=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==K||z!==b)&&hp(i,f,o,b),Wi=!1,z=i.memoizedState,f.state=z,Vo(i,o,f,h),Mo();var B=i.memoizedState;v!==K||z!==B||Wi||e!==null&&e.dependencies!==null&&mu(e.dependencies)?(typeof E=="function"&&(of(i,s,E,o),B=i.memoizedState),(G=Wi||cp(i,s,G,o,z,B,b)||e!==null&&e.dependencies!==null&&mu(e.dependencies))?(U||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,B,b),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,B,b)),typeof f.componentDidUpdate=="function"&&(i.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=B),f.props=o,f.state=B,f.context=b,o=G):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),o=!1)}return f=o,Vu(e,i),o=(i.flags&128)!==0,f||o?(f=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:f.render(),i.flags|=1,e!==null&&o?(i.child=da(i,e.child,null,h),i.child=da(i,null,s,h)):ke(e,i,s,h),i.memoizedState=f.state,e=i.child):e=Mi(e,i,h),e}function Rp(e,i,s,o){return bo(),i.flags|=256,ke(e,i,s,o),i.child}var hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ff(e){return{baseLanes:e,cachePool:dg()}}function df(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=wn),e}function Ip(e,i,s){var o=i.pendingProps,h=!1,f=(i.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(Te.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(Bt){if(h?ir(i):rr(),Bt){var E=re,b;if(b=E){t:{for(b=E,E=Wn;b.nodeType!==8;){if(!E){E=null;break t}if(b=kn(b.nextSibling),b===null){E=null;break t}}E=b}E!==null?(i.memoizedState={dehydrated:E,treeContext:us!==null?{id:Ri,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},b=on(18,null,null,0),b.stateNode=E,b.return=i,i.child=b,Xe=i,re=null,b=!0):b=!1}b||fs(i)}if(E=i.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return $f(E)?i.lanes=32:i.lanes=536870912,null;Ni(i)}return E=o.children,o=o.fallback,h?(rr(),h=i.mode,E=ku({mode:"hidden",children:E},h),o=ls(o,h,s,null),E.return=i,o.return=i,E.sibling=o,i.child=E,h=i.child,h.memoizedState=ff(s),h.childLanes=df(e,v,s),i.memoizedState=hf,o):(ir(i),mf(i,E))}if(b=e.memoizedState,b!==null&&(E=b.dehydrated,E!==null)){if(f)i.flags&256?(ir(i),i.flags&=-257,i=gf(e,i,s)):i.memoizedState!==null?(rr(),i.child=e.child,i.flags|=128,i=null):(rr(),h=o.fallback,E=i.mode,o=ku({mode:"visible",children:o.children},E),h=ls(h,E,s,null),h.flags|=2,o.return=i,h.return=i,o.sibling=h,i.child=o,da(i,e.child,null,s),o=i.child,o.memoizedState=ff(s),o.childLanes=df(e,v,s),i.memoizedState=hf,i=h);else if(ir(i),$f(E)){if(v=E.nextSibling&&E.nextSibling.dataset,v)var U=v.dgst;v=U,o=Error(a(419)),o.stack="",o.digest=v,wo({value:o,source:null,stack:null}),i=gf(e,i,s)}else if(Ie||Ro(e,i,s,!1),v=(s&e.childLanes)!==0,Ie||v){if(v=Zt,v!==null&&(o=s&-s,o=(o&42)!==0?1:Fi(o),o=(o&(v.suspendedLanes|s))!==0?0:o,o!==0&&o!==b.retryLane))throw b.retryLane=o,na(e,o),fn(v,e,o),_p;E.data==="$?"||Vf(),i=gf(e,i,s)}else E.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=b.treeContext,re=kn(E.nextSibling),Xe=i,Bt=!0,hs=null,Wn=!1,e!==null&&(An[Sn++]=Ri,An[Sn++]=Ii,An[Sn++]=us,Ri=e.id,Ii=e.overflow,us=i),i=mf(i,o.children),i.flags|=4096);return i}return h?(rr(),h=o.fallback,E=i.mode,b=e.child,U=b.sibling,o=wi(b,{mode:"hidden",children:o.children}),o.subtreeFlags=b.subtreeFlags&65011712,U!==null?h=wi(U,h):(h=ls(h,E,s,null),h.flags|=2),h.return=i,o.return=i,o.sibling=h,i.child=o,o=h,h=i.child,E=e.child.memoizedState,E===null?E=ff(s):(b=E.cachePool,b!==null?(U=Ee._currentValue,b=b.parent!==U?{parent:U,pool:U}:b):b=dg(),E={baseLanes:E.baseLanes|s,cachePool:b}),h.memoizedState=E,h.childLanes=df(e,v,s),i.memoizedState=hf,o):(ir(i),s=e.child,e=s.sibling,s=wi(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=s,i.memoizedState=null,s)}function mf(e,i){return i=ku({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function ku(e,i){return e=on(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function gf(e,i,s){return da(i,e.child,null,s),e=mf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Cp(e,i,s){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),Mh(e.return,i,s)}function pf(e,i,s,o,h){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:h}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=s,f.tailMode=h)}function Dp(e,i,s){var o=i.pendingProps,h=o.revealOrder,f=o.tail;if(ke(e,i,o.children,s),o=Te.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cp(e,s,i);else if(e.tag===19)Cp(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch($(Te,o),h){case"forwards":for(s=i.child,h=null;s!==null;)e=s.alternate,e!==null&&Ou(e)===null&&(h=s),s=s.sibling;s=h,s===null?(h=i.child,i.child=null):(h=s.sibling,s.sibling=null),pf(i,!1,h,s,f);break;case"backwards":for(s=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Ou(e)===null){i.child=h;break}e=h.sibling,h.sibling=s,s=h,h=e}pf(i,!0,s,null,f);break;case"together":pf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Mi(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),ur|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(Ro(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=wi(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=wi(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function yf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&mu(e)))}function GT(e,i,s){switch(i.tag){case 3:$t(i,i.stateNode.containerInfo),Ji(i,Ee,e.memoizedState.cache),bo();break;case 27:case 5:Gi(i);break;case 4:$t(i,i.stateNode.containerInfo);break;case 10:Ji(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(ir(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Ip(e,i,s):(ir(i),e=Mi(e,i,s),e!==null?e.sibling:null);ir(i);break;case 19:var h=(e.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(Ro(e,i,s,!1),o=(s&i.childLanes)!==0),h){if(o)return Dp(e,i,s);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),$(Te,Te.current),o)break;return null;case 22:case 23:return i.lanes=0,Ap(e,i,s);case 24:Ji(i,Ee,e.memoizedState.cache)}return Mi(e,i,s)}function Op(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)Ie=!0;else{if(!yf(e,s)&&(i.flags&128)===0)return Ie=!1,GT(e,i,s);Ie=(e.flags&131072)!==0}else Ie=!1,Bt&&(i.flags&1048576)!==0&&ag(i,du,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var o=i.elementType,h=o._init;if(o=h(o._payload),i.type=o,typeof o=="function")wh(o)?(e=ys(o,e),i.tag=1,i=wp(null,i,o,e,s)):(i.tag=0,i=cf(null,i,o,e,s));else{if(o!=null){if(h=o.$$typeof,h===Dt){i.tag=11,i=vp(null,i,o,e,s);break t}else if(h===N){i.tag=14,i=Ep(null,i,o,e,s);break t}}throw i=Ne(o)||o,Error(a(306,i,""))}}return i;case 0:return cf(e,i,i.type,i.pendingProps,s);case 1:return o=i.type,h=ys(o,i.pendingProps),wp(e,i,o,h,s);case 3:t:{if($t(i,i.stateNode.containerInfo),e===null)throw Error(a(387));o=i.pendingProps;var f=i.memoizedState;h=f.element,zh(e,i),Vo(i,o,null,s);var v=i.memoizedState;if(o=v.cache,Ji(i,Ee,o),o!==f.cache&&Vh(i,[Ee],s,!0),Mo(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){i=Rp(e,i,o,s);break t}else if(o!==h){h=En(Error(a(424)),i),wo(h),i=Rp(e,i,o,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(re=kn(e.firstChild),Xe=i,Bt=!0,hs=null,Wn=!0,s=lp(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(bo(),o===h){i=Mi(e,i,s);break t}ke(e,i,o,s)}i=i.child}return i;case 26:return Vu(e,i),e===null?(s=ky(i.type,null,i.pendingProps,null))?i.memoizedState=s:Bt||(s=i.type,e=i.pendingProps,o=Yu(gt.current).createElement(s),o[ye]=i,o[fe]=e,xe(o,s,e),oe(o),i.stateNode=o):i.memoizedState=ky(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Gi(i),e===null&&Bt&&(o=i.stateNode=Ny(i.type,i.pendingProps,gt.current),Xe=i,Wn=!0,h=re,dr(i.type)?(Zf=h,re=kn(o.firstChild)):re=h),ke(e,i,i.pendingProps.children,s),Vu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Bt&&((h=o=re)&&(o=_A(o,i.type,i.pendingProps,Wn),o!==null?(i.stateNode=o,Xe=i,re=kn(o.firstChild),Wn=!1,h=!0):h=!1),h||fs(i)),Gi(i),h=i.type,f=i.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,Qf(h,f)?o=null:v!==null&&Qf(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=Fh(e,i,xT,null,null,s),el._currentValue=h),Vu(e,i),ke(e,i,o,s),i.child;case 6:return e===null&&Bt&&((e=s=re)&&(s=vA(s,i.pendingProps,Wn),s!==null?(i.stateNode=s,Xe=i,re=null,e=!0):e=!1),e||fs(i)),null;case 13:return Ip(e,i,s);case 4:return $t(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=da(i,null,o,s):ke(e,i,o,s),i.child;case 11:return vp(e,i,i.type,i.pendingProps,s);case 7:return ke(e,i,i.pendingProps,s),i.child;case 8:return ke(e,i,i.pendingProps.children,s),i.child;case 12:return ke(e,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,Ji(i,i.type,o.value),ke(e,i,o.children,s),i.child;case 9:return h=i.type._context,o=i.pendingProps.children,ms(i),h=Be(h),o=o(h),i.flags|=1,ke(e,i,o,s),i.child;case 14:return Ep(e,i,i.type,i.pendingProps,s);case 15:return Tp(e,i,i.type,i.pendingProps,s);case 19:return Dp(e,i,s);case 31:return o=i.pendingProps,s=i.mode,o={mode:o.mode,children:o.children},e===null?(s=ku(o,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=wi(e.child,o),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return Ap(e,i,s);case 24:return ms(i),o=Be(Ee),e===null?(h=xh(),h===null&&(h=Zt,f=kh(),h.pooledCache=f,f.refCount++,f!==null&&(h.pooledCacheLanes|=s),h=f),i.memoizedState={parent:o,cache:h},Uh(i),Ji(i,Ee,h)):((e.lanes&s)!==0&&(zh(e,i),Vo(i,null,null,s),Mo()),h=e.memoizedState,f=i.memoizedState,h.parent!==o?(h={parent:o,cache:o},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Ji(i,Ee,o)):(o=f.cache,Ji(i,Ee,o),o!==h.cache&&Vh(i,[Ee],s,!0))),ke(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Vi(e){e.flags|=4}function Np(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!zy(i)){if(i=bn.current,i!==null&&((kt&4194048)===kt?ti!==null:(kt&62914560)!==kt&&(kt&536870912)===0||i!==ti))throw Oo=Lh,mg;e.flags|=8192}}function Pu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?no():536870912,e.lanes|=i,ya|=i)}function Bo(e,i){if(!Bt)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function te(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(i)for(var h=e.child;h!==null;)s|=h.lanes|h.childLanes,o|=h.subtreeFlags&65011712,o|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)s|=h.lanes|h.childLanes,o|=h.subtreeFlags,o|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=o,e.childLanes=s,i}function FT(e,i,s){var o=i.pendingProps;switch(Dh(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(i),null;case 1:return te(i),null;case 3:return s=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Di(Ee),qn(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(So(i)?Vi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ug())),te(i),null;case 26:return s=i.memoizedState,e===null?(Vi(i),s!==null?(te(i),Np(i,s)):(te(i),i.flags&=-16777217)):s?s!==e.memoizedState?(Vi(i),te(i),Np(i,s)):(te(i),i.flags&=-16777217):(e.memoizedProps!==o&&Vi(i),te(i),i.flags&=-16777217),null;case 27:fi(i),s=gt.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Vi(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return te(i),null}e=ot.current,So(i)?og(i):(e=Ny(h,o,s),i.stateNode=e,Vi(i))}return te(i),null;case 5:if(fi(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Vi(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return te(i),null}if(e=ot.current,So(i))og(i);else{switch(h=Yu(gt.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?h.createElement("select",{is:o.is}):h.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?h.createElement(s,{is:o.is}):h.createElement(s)}}e[ye]=i,e[fe]=o;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(xe(e,s,o),s){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Vi(i)}}return te(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&Vi(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(a(166));if(e=gt.current,So(i)){if(e=i.stateNode,s=i.memoizedProps,o=null,h=Xe,h!==null)switch(h.tag){case 27:case 5:o=h.memoizedProps}e[ye]=i,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||by(e.nodeValue,s)),e||fs(i)}else e=Yu(e).createTextNode(o),e[ye]=i,i.stateNode=e}return te(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=So(i),o!==null&&o.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[ye]=i}else bo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;te(i),h=!1}else h=ug(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Ni(i),i):(Ni(i),null)}if(Ni(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=o!==null,e=e!==null&&e.memoizedState!==null,s){o=i.child,h=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(h=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==h&&(o.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),Pu(i,i.updateQueue),te(i),null;case 4:return qn(),e===null&&jf(i.stateNode.containerInfo),te(i),null;case 10:return Di(i.type),te(i),null;case 19:if(tt(Te),h=i.memoizedState,h===null)return te(i),null;if(o=(i.flags&128)!==0,f=h.rendering,f===null)if(o)Bo(h,!1);else{if(se!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(f=Ou(e),f!==null){for(i.flags|=128,Bo(h,!1),e=f.updateQueue,i.updateQueue=e,Pu(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)sg(s,e),s=s.sibling;return $(Te,Te.current&1|2),i.child}e=e.sibling}h.tail!==null&&mn()>Uu&&(i.flags|=128,o=!0,Bo(h,!1),i.lanes=4194304)}else{if(!o)if(e=Ou(f),e!==null){if(i.flags|=128,o=!0,e=e.updateQueue,i.updateQueue=e,Pu(i,e),Bo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!f.alternate&&!Bt)return te(i),null}else 2*mn()-h.renderingStartTime>Uu&&s!==536870912&&(i.flags|=128,o=!0,Bo(h,!1),i.lanes=4194304);h.isBackwards?(f.sibling=i.child,i.child=f):(e=h.last,e!==null?e.sibling=f:i.child=f,h.last=f)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=mn(),i.sibling=null,e=Te.current,$(Te,o?e&1|2:e&1),i):(te(i),null);case 22:case 23:return Ni(i),Hh(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&(te(i),i.subtreeFlags&6&&(i.flags|=8192)):te(i),s=i.updateQueue,s!==null&&Pu(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),e!==null&&tt(gs),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Di(Ee),te(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function KT(e,i){switch(Dh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Di(Ee),qn(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return fi(i),null;case 13:if(Ni(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));bo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return tt(Te),null;case 4:return qn(),null;case 10:return Di(i.type),null;case 22:case 23:return Ni(i),Hh(),e!==null&&tt(gs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Di(Ee),null;case 25:return null;default:return null}}function Mp(e,i){switch(Dh(i),i.tag){case 3:Di(Ee),qn();break;case 26:case 27:case 5:fi(i);break;case 4:qn();break;case 13:Ni(i);break;case 19:tt(Te);break;case 10:Di(i.type);break;case 22:case 23:Ni(i),Hh(),e!==null&&tt(gs);break;case 24:Di(Ee)}}function qo(e,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var h=o.next;s=h;do{if((s.tag&e)===e){o=void 0;var f=s.create,v=s.inst;o=f(),v.destroy=o}s=s.next}while(s!==h)}}catch(E){Xt(i,i.return,E)}}function sr(e,i,s){try{var o=i.updateQueue,h=o!==null?o.lastEffect:null;if(h!==null){var f=h.next;o=f;do{if((o.tag&e)===e){var v=o.inst,E=v.destroy;if(E!==void 0){v.destroy=void 0,h=i;var b=s,U=E;try{U()}catch(G){Xt(h,b,G)}}}o=o.next}while(o!==f)}}catch(G){Xt(i,i.return,G)}}function Vp(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{Eg(i,s)}catch(o){Xt(e,e.return,o)}}}function kp(e,i,s){s.props=ys(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){Xt(e,i,o)}}function jo(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof s=="function"?e.refCleanup=s(o):s.current=o}}catch(h){Xt(e,i,h)}}function ei(e,i){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(h){Xt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){Xt(e,i,h)}else s.current=null}function Pp(e){var i=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(h){Xt(e,e.return,h)}}function _f(e,i,s){try{var o=e.stateNode;dA(o,e.type,s,i),o[fe]=i}catch(h){Xt(e,e.return,h)}}function xp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&dr(e.type)||e.tag===4}function vf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||xp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&dr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ef(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Qu));else if(o!==4&&(o===27&&dr(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(Ef(e,i,s),e=e.sibling;e!==null;)Ef(e,i,s),e=e.sibling}function xu(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(o!==4&&(o===27&&dr(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(xu(e,i,s),e=e.sibling;e!==null;)xu(e,i,s),e=e.sibling}function Lp(e){var i=e.stateNode,s=e.memoizedProps;try{for(var o=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);xe(i,o,s),i[ye]=e,i[fe]=s}catch(f){Xt(e,e.return,f)}}var ki=!1,ue=!1,Tf=!1,Up=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function QT(e,i){if(e=e.containerInfo,Ff=tc,e=Xm(e),_h(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var h=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{s.nodeType,f.nodeType}catch{s=null;break t}var v=0,E=-1,b=-1,U=0,G=0,K=e,z=null;e:for(;;){for(var B;K!==s||h!==0&&K.nodeType!==3||(E=v+h),K!==f||o!==0&&K.nodeType!==3||(b=v+o),K.nodeType===3&&(v+=K.nodeValue.length),(B=K.firstChild)!==null;)z=K,K=B;for(;;){if(K===e)break e;if(z===s&&++U===h&&(E=v),z===f&&++G===o&&(b=v),(B=K.nextSibling)!==null)break;K=z,z=K.parentNode}K=B}s=E===-1||b===-1?null:{start:E,end:b}}else s=null}s=s||{start:0,end:0}}else s=null;for(Kf={focusedElem:e,selectionRange:s},tc=!1,Ce=i;Ce!==null;)if(i=Ce,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Ce=e;else for(;Ce!==null;){switch(i=Ce,f=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,s=i,h=f.memoizedProps,f=f.memoizedState,o=s.stateNode;try{var dt=ys(s.type,h,s.elementType===s.type);e=o.getSnapshotBeforeUpdate(dt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(lt){Xt(s,s.return,lt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)Xf(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Ce=e;break}Ce=i.return}}function zp(e,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:ar(e,s),o&4&&qo(5,s);break;case 1:if(ar(e,s),o&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(v){Xt(s,s.return,v)}else{var h=ys(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Xt(s,s.return,v)}}o&64&&Vp(s),o&512&&jo(s,s.return);break;case 3:if(ar(e,s),o&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Eg(e,i)}catch(v){Xt(s,s.return,v)}}break;case 27:i===null&&o&4&&Lp(s);case 26:case 5:ar(e,s),i===null&&o&4&&Pp(s),o&512&&jo(s,s.return);break;case 12:ar(e,s);break;case 13:ar(e,s),o&4&&jp(e,s),o&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=nA.bind(null,s),EA(e,s))));break;case 22:if(o=s.memoizedState!==null||ki,!o){i=i!==null&&i.memoizedState!==null||ue,h=ki;var f=ue;ki=o,(ue=i)&&!f?or(e,s,(s.subtreeFlags&8772)!==0):ar(e,s),ki=h,ue=f}break;case 30:break;default:ar(e,s)}}function Bp(e){var i=e.alternate;i!==null&&(e.alternate=null,Bp(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Yi(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Wt=null,Je=!1;function Pi(e,i,s){for(s=s.child;s!==null;)qp(e,i,s),s=s.sibling}function qp(e,i,s){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(ie,s)}catch{}switch(s.tag){case 26:ue||ei(s,i),Pi(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:ue||ei(s,i);var o=Wt,h=Je;dr(s.type)&&(Wt=s.stateNode,Je=!1),Pi(e,i,s),Zo(s.stateNode),Wt=o,Je=h;break;case 5:ue||ei(s,i);case 6:if(o=Wt,h=Je,Wt=null,Pi(e,i,s),Wt=o,Je=h,Wt!==null)if(Je)try{(Wt.nodeType===9?Wt.body:Wt.nodeName==="HTML"?Wt.ownerDocument.body:Wt).removeChild(s.stateNode)}catch(f){Xt(s,i,f)}else try{Wt.removeChild(s.stateNode)}catch(f){Xt(s,i,f)}break;case 18:Wt!==null&&(Je?(e=Wt,Dy(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),sl(e)):Dy(Wt,s.stateNode));break;case 4:o=Wt,h=Je,Wt=s.stateNode.containerInfo,Je=!0,Pi(e,i,s),Wt=o,Je=h;break;case 0:case 11:case 14:case 15:ue||sr(2,s,i),ue||sr(4,s,i),Pi(e,i,s);break;case 1:ue||(ei(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&kp(s,i,o)),Pi(e,i,s);break;case 21:Pi(e,i,s);break;case 22:ue=(o=ue)||s.memoizedState!==null,Pi(e,i,s),ue=o;break;default:Pi(e,i,s)}}function jp(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{sl(e)}catch(s){Xt(i,i.return,s)}}function YT(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Up),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Up),i;default:throw Error(a(435,e.tag))}}function Af(e,i){var s=YT(e);i.forEach(function(o){var h=iA.bind(null,e,o);s.has(o)||(s.add(o),o.then(h,h))})}function ln(e,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var h=s[o],f=e,v=i,E=v;t:for(;E!==null;){switch(E.tag){case 27:if(dr(E.type)){Wt=E.stateNode,Je=!1;break t}break;case 5:Wt=E.stateNode,Je=!1;break t;case 3:case 4:Wt=E.stateNode.containerInfo,Je=!0;break t}E=E.return}if(Wt===null)throw Error(a(160));qp(f,v,h),Wt=null,Je=!1,f=h.alternate,f!==null&&(f.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Hp(i,e),i=i.sibling}var Vn=null;function Hp(e,i){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ln(i,e),un(e),o&4&&(sr(3,e,e.return),qo(3,e),sr(5,e,e.return));break;case 1:ln(i,e),un(e),o&512&&(ue||s===null||ei(s,s.return)),o&64&&ki&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var h=Vn;if(ln(i,e),un(e),o&512&&(ue||s===null||ei(s,s.return)),o&4){var f=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,h=h.ownerDocument||h;e:switch(o){case"title":f=h.getElementsByTagName("title")[0],(!f||f[Kr]||f[ye]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=h.createElement(o),h.head.insertBefore(f,h.querySelector("head > title"))),xe(f,o,s),f[ye]=e,oe(f),o=f;break t;case"link":var v=Ly("link","href",h).get(o+(s.href||""));if(v){for(var E=0;E<v.length;E++)if(f=v[E],f.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&f.getAttribute("rel")===(s.rel==null?null:s.rel)&&f.getAttribute("title")===(s.title==null?null:s.title)&&f.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){v.splice(E,1);break e}}f=h.createElement(o),xe(f,o,s),h.head.appendChild(f);break;case"meta":if(v=Ly("meta","content",h).get(o+(s.content||""))){for(E=0;E<v.length;E++)if(f=v[E],f.getAttribute("content")===(s.content==null?null:""+s.content)&&f.getAttribute("name")===(s.name==null?null:s.name)&&f.getAttribute("property")===(s.property==null?null:s.property)&&f.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&f.getAttribute("charset")===(s.charSet==null?null:s.charSet)){v.splice(E,1);break e}}f=h.createElement(o),xe(f,o,s),h.head.appendChild(f);break;default:throw Error(a(468,o))}f[ye]=e,oe(f),o=f}e.stateNode=o}else Uy(h,e.type,e.stateNode);else e.stateNode=xy(h,o,e.memoizedProps);else f!==o?(f===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):f.count--,o===null?Uy(h,e.type,e.stateNode):xy(h,o,e.memoizedProps)):o===null&&e.stateNode!==null&&_f(e,e.memoizedProps,s.memoizedProps)}break;case 27:ln(i,e),un(e),o&512&&(ue||s===null||ei(s,s.return)),s!==null&&o&4&&_f(e,e.memoizedProps,s.memoizedProps);break;case 5:if(ln(i,e),un(e),o&512&&(ue||s===null||ei(s,s.return)),e.flags&32){h=e.stateNode;try{pn(h,"")}catch(B){Xt(e,e.return,B)}}o&4&&e.stateNode!=null&&(h=e.memoizedProps,_f(e,h,s!==null?s.memoizedProps:h)),o&1024&&(Tf=!0);break;case 6:if(ln(i,e),un(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(B){Xt(e,e.return,B)}}break;case 3:if(Zu=null,h=Vn,Vn=Xu(i.containerInfo),ln(i,e),Vn=h,un(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{sl(i.containerInfo)}catch(B){Xt(e,e.return,B)}Tf&&(Tf=!1,Gp(e));break;case 4:o=Vn,Vn=Xu(e.stateNode.containerInfo),ln(i,e),un(e),Vn=o;break;case 12:ln(i,e),un(e);break;case 13:ln(i,e),un(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Cf=mn()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Af(e,o)));break;case 22:h=e.memoizedState!==null;var b=s!==null&&s.memoizedState!==null,U=ki,G=ue;if(ki=U||h,ue=G||b,ln(i,e),ue=G,ki=U,un(e),o&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(s===null||b||ki||ue||_s(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){b=s=i;try{if(f=b.stateNode,h)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{E=b.stateNode;var K=b.memoizedProps.style,z=K!=null&&K.hasOwnProperty("display")?K.display:null;E.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(B){Xt(b,b.return,B)}}}else if(i.tag===6){if(s===null){b=i;try{b.stateNode.nodeValue=h?"":b.memoizedProps}catch(B){Xt(b,b.return,B)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,Af(e,s))));break;case 19:ln(i,e),un(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Af(e,o)));break;case 30:break;case 21:break;default:ln(i,e),un(e)}}function un(e){var i=e.flags;if(i&2){try{for(var s,o=e.return;o!==null;){if(xp(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,f=vf(e);xu(e,f,h);break;case 5:var v=s.stateNode;s.flags&32&&(pn(v,""),s.flags&=-33);var E=vf(e);xu(e,E,v);break;case 3:case 4:var b=s.stateNode.containerInfo,U=vf(e);Ef(e,U,b);break;default:throw Error(a(161))}}catch(G){Xt(e,e.return,G)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Gp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Gp(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function ar(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)zp(e,i.alternate,i),i=i.sibling}function _s(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:sr(4,i,i.return),_s(i);break;case 1:ei(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&kp(i,i.return,s),_s(i);break;case 27:Zo(i.stateNode);case 26:case 5:ei(i,i.return),_s(i);break;case 22:i.memoizedState===null&&_s(i);break;case 30:_s(i);break;default:_s(i)}e=e.sibling}}function or(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,h=e,f=i,v=f.flags;switch(f.tag){case 0:case 11:case 15:or(h,f,s),qo(4,f);break;case 1:if(or(h,f,s),o=f,h=o.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(U){Xt(o,o.return,U)}if(o=f,h=o.updateQueue,h!==null){var E=o.stateNode;try{var b=h.shared.hiddenCallbacks;if(b!==null)for(h.shared.hiddenCallbacks=null,h=0;h<b.length;h++)vg(b[h],E)}catch(U){Xt(o,o.return,U)}}s&&v&64&&Vp(f),jo(f,f.return);break;case 27:Lp(f);case 26:case 5:or(h,f,s),s&&o===null&&v&4&&Pp(f),jo(f,f.return);break;case 12:or(h,f,s);break;case 13:or(h,f,s),s&&v&4&&jp(h,f);break;case 22:f.memoizedState===null&&or(h,f,s),jo(f,f.return);break;case 30:break;default:or(h,f,s)}i=i.sibling}}function Sf(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Io(s))}function bf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Io(e))}function ni(e,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Fp(e,i,s,o),i=i.sibling}function Fp(e,i,s,o){var h=i.flags;switch(i.tag){case 0:case 11:case 15:ni(e,i,s,o),h&2048&&qo(9,i);break;case 1:ni(e,i,s,o);break;case 3:ni(e,i,s,o),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Io(e)));break;case 12:if(h&2048){ni(e,i,s,o),e=i.stateNode;try{var f=i.memoizedProps,v=f.id,E=f.onPostCommit;typeof E=="function"&&E(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){Xt(i,i.return,b)}}else ni(e,i,s,o);break;case 13:ni(e,i,s,o);break;case 23:break;case 22:f=i.stateNode,v=i.alternate,i.memoizedState!==null?f._visibility&2?ni(e,i,s,o):Ho(e,i):f._visibility&2?ni(e,i,s,o):(f._visibility|=2,ma(e,i,s,o,(i.subtreeFlags&10256)!==0)),h&2048&&Sf(v,i);break;case 24:ni(e,i,s,o),h&2048&&bf(i.alternate,i);break;default:ni(e,i,s,o)}}function ma(e,i,s,o,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var f=e,v=i,E=s,b=o,U=v.flags;switch(v.tag){case 0:case 11:case 15:ma(f,v,E,b,h),qo(8,v);break;case 23:break;case 22:var G=v.stateNode;v.memoizedState!==null?G._visibility&2?ma(f,v,E,b,h):Ho(f,v):(G._visibility|=2,ma(f,v,E,b,h)),h&&U&2048&&Sf(v.alternate,v);break;case 24:ma(f,v,E,b,h),h&&U&2048&&bf(v.alternate,v);break;default:ma(f,v,E,b,h)}i=i.sibling}}function Ho(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,o=i,h=o.flags;switch(o.tag){case 22:Ho(s,o),h&2048&&Sf(o.alternate,o);break;case 24:Ho(s,o),h&2048&&bf(o.alternate,o);break;default:Ho(s,o)}i=i.sibling}}var Go=8192;function ga(e){if(e.subtreeFlags&Go)for(e=e.child;e!==null;)Kp(e),e=e.sibling}function Kp(e){switch(e.tag){case 26:ga(e),e.flags&Go&&e.memoizedState!==null&&VA(Vn,e.memoizedState,e.memoizedProps);break;case 5:ga(e);break;case 3:case 4:var i=Vn;Vn=Xu(e.stateNode.containerInfo),ga(e),Vn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Go,Go=16777216,ga(e),Go=i):ga(e));break;default:ga(e)}}function Qp(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Fo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];Ce=o,Xp(o,e)}Qp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yp(e),e=e.sibling}function Yp(e){switch(e.tag){case 0:case 11:case 15:Fo(e),e.flags&2048&&sr(9,e,e.return);break;case 3:Fo(e);break;case 12:Fo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Lu(e)):Fo(e);break;default:Fo(e)}}function Lu(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];Ce=o,Xp(o,e)}Qp(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:sr(8,i,i.return),Lu(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Lu(i));break;default:Lu(i)}e=e.sibling}}function Xp(e,i){for(;Ce!==null;){var s=Ce;switch(s.tag){case 0:case 11:case 15:sr(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Io(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,Ce=o;else t:for(s=e;Ce!==null;){o=Ce;var h=o.sibling,f=o.return;if(Bp(o),o===s){Ce=null;break t}if(h!==null){h.return=f,Ce=h;break t}Ce=f}}}var XT={getCacheForType:function(e){var i=Be(Ee),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},$T=typeof WeakMap=="function"?WeakMap:Map,Ht=0,Zt=null,Rt=null,kt=0,Gt=0,cn=null,lr=!1,pa=!1,wf=!1,xi=0,se=0,ur=0,vs=0,Rf=0,wn=0,ya=0,Ko=null,We=null,If=!1,Cf=0,Uu=1/0,zu=null,cr=null,Pe=0,hr=null,_a=null,va=0,Df=0,Of=null,$p=null,Qo=0,Nf=null;function hn(){if((Ht&2)!==0&&kt!==0)return kt&-kt;if(H.T!==null){var e=aa;return e!==0?e:Uf()}return Ki()}function Zp(){wn===0&&(wn=(kt&536870912)===0||Bt?eo():536870912);var e=bn.current;return e!==null&&(e.flags|=32),wn}function fn(e,i,s){(e===Zt&&(Gt===2||Gt===9)||e.cancelPendingCommit!==null)&&(Ea(e,0),fr(e,kt,wn,!1)),mi(e,s),((Ht&2)===0||e!==Zt)&&(e===Zt&&((Ht&2)===0&&(vs|=s),se===4&&fr(e,kt,wn,!1)),ii(e))}function Jp(e,i,s){if((Ht&6)!==0)throw Error(a(327));var o=!s&&(i&124)===0&&(i&e.expiredLanes)===0||Fr(e,i),h=o?WT(e,i):kf(e,i,!0),f=o;do{if(h===0){pa&&!o&&fr(e,i,0,!1);break}else{if(s=e.current.alternate,f&&!ZT(s)){h=kf(e,i,!1),f=!1;continue}if(h===2){if(f=i,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var E=e;h=Ko;var b=E.current.memoizedState.isDehydrated;if(b&&(Ea(E,v).flags|=256),v=kf(E,v,!1),v!==2){if(wf&&!b){E.errorRecoveryDisabledLanes|=f,vs|=f,h=4;break t}f=We,We=h,f!==null&&(We===null?We=f:We.push.apply(We,f))}h=v}if(f=!1,h!==2)continue}}if(h===1){Ea(e,0),fr(e,i,0,!0);break}t:{switch(o=e,f=h,f){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:fr(o,i,wn,!lr);break t;case 2:We=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=Cf+300-mn(),10<h)){if(fr(o,i,wn,!lr),Ls(o,0,!0)!==0)break t;o.timeoutHandle=Iy(Wp.bind(null,o,s,We,zu,If,i,wn,vs,ya,lr,f,2,-0,0),h);break t}Wp(o,s,We,zu,If,i,wn,vs,ya,lr,f,0,-0,0)}}break}while(!0);ii(e)}function Wp(e,i,s,o,h,f,v,E,b,U,G,K,z,B){if(e.timeoutHandle=-1,K=i.subtreeFlags,(K&8192||(K&16785408)===16785408)&&(tl={stylesheets:null,count:0,unsuspend:MA},Kp(i),K=kA(),K!==null)){e.cancelPendingCommit=K(ay.bind(null,e,i,f,s,o,h,v,E,b,G,1,z,B)),fr(e,f,v,!U);return}ay(e,i,f,s,o,h,v,E,b)}function ZT(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var h=s[o],f=h.getSnapshot;h=h.value;try{if(!an(f(),h))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fr(e,i,s,o){i&=~Rf,i&=~vs,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var h=i;0<h;){var f=31-ze(h),v=1<<f;o[f]=-1,h&=~v}s!==0&&jn(e,s,i)}function Bu(){return(Ht&6)===0?(Yo(0),!1):!0}function Mf(){if(Rt!==null){if(Gt===0)var e=Rt.return;else e=Rt,Ci=ds=null,Yh(e),fa=null,Uo=0,e=Rt;for(;e!==null;)Mp(e.alternate,e),e=e.return;Rt=null}}function Ea(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,gA(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Mf(),Zt=e,Rt=s=wi(e.current,null),kt=i,Gt=0,cn=null,lr=!1,pa=Fr(e,i),wf=!1,ya=wn=Rf=vs=ur=se=0,We=Ko=null,If=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var h=31-ze(o),f=1<<h;i|=e[h],o&=~f}return xi=i,lu(),s}function ty(e,i){At=null,H.H=Iu,i===Do||i===yu?(i=yg(),Gt=3):i===mg?(i=yg(),Gt=4):Gt=i===_p?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,cn=i,Rt===null&&(se=1,Mu(e,En(i,e.current)))}function ey(){var e=H.H;return H.H=Iu,e===null?Iu:e}function ny(){var e=H.A;return H.A=XT,e}function Vf(){se=4,lr||(kt&4194048)!==kt&&bn.current!==null||(pa=!0),(ur&134217727)===0&&(vs&134217727)===0||Zt===null||fr(Zt,kt,wn,!1)}function kf(e,i,s){var o=Ht;Ht|=2;var h=ey(),f=ny();(Zt!==e||kt!==i)&&(zu=null,Ea(e,i)),i=!1;var v=se;t:do try{if(Gt!==0&&Rt!==null){var E=Rt,b=cn;switch(Gt){case 8:Mf(),v=6;break t;case 3:case 2:case 9:case 6:bn.current===null&&(i=!0);var U=Gt;if(Gt=0,cn=null,Ta(e,E,b,U),s&&pa){v=0;break t}break;default:U=Gt,Gt=0,cn=null,Ta(e,E,b,U)}}JT(),v=se;break}catch(G){ty(e,G)}while(!0);return i&&e.shellSuspendCounter++,Ci=ds=null,Ht=o,H.H=h,H.A=f,Rt===null&&(Zt=null,kt=0,lu()),v}function JT(){for(;Rt!==null;)iy(Rt)}function WT(e,i){var s=Ht;Ht|=2;var o=ey(),h=ny();Zt!==e||kt!==i?(zu=null,Uu=mn()+500,Ea(e,i)):pa=Fr(e,i);t:do try{if(Gt!==0&&Rt!==null){i=Rt;var f=cn;e:switch(Gt){case 1:Gt=0,cn=null,Ta(e,i,f,1);break;case 2:case 9:if(gg(f)){Gt=0,cn=null,ry(i);break}i=function(){Gt!==2&&Gt!==9||Zt!==e||(Gt=7),ii(e)},f.then(i,i);break t;case 3:Gt=7;break t;case 4:Gt=5;break t;case 7:gg(f)?(Gt=0,cn=null,ry(i)):(Gt=0,cn=null,Ta(e,i,f,7));break;case 5:var v=null;switch(Rt.tag){case 26:v=Rt.memoizedState;case 5:case 27:var E=Rt;if(!v||zy(v)){Gt=0,cn=null;var b=E.sibling;if(b!==null)Rt=b;else{var U=E.return;U!==null?(Rt=U,qu(U)):Rt=null}break e}}Gt=0,cn=null,Ta(e,i,f,5);break;case 6:Gt=0,cn=null,Ta(e,i,f,6);break;case 8:Mf(),se=6;break t;default:throw Error(a(462))}}tA();break}catch(G){ty(e,G)}while(!0);return Ci=ds=null,H.H=o,H.A=h,Ht=s,Rt!==null?0:(Zt=null,kt=0,lu(),se)}function tA(){for(;Rt!==null&&!Za();)iy(Rt)}function iy(e){var i=Op(e.alternate,e,xi);e.memoizedProps=e.pendingProps,i===null?qu(e):Rt=i}function ry(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=bp(s,i,i.pendingProps,i.type,void 0,kt);break;case 11:i=bp(s,i,i.pendingProps,i.type.render,i.ref,kt);break;case 5:Yh(i);default:Mp(s,i),i=Rt=sg(i,xi),i=Op(s,i,xi)}e.memoizedProps=e.pendingProps,i===null?qu(e):Rt=i}function Ta(e,i,s,o){Ci=ds=null,Yh(i),fa=null,Uo=0;var h=i.return;try{if(HT(e,h,i,s,kt)){se=1,Mu(e,En(s,e.current)),Rt=null;return}}catch(f){if(h!==null)throw Rt=h,f;se=1,Mu(e,En(s,e.current)),Rt=null;return}i.flags&32768?(Bt||o===1?e=!0:pa||(kt&536870912)!==0?e=!1:(lr=e=!0,(o===2||o===9||o===3||o===6)&&(o=bn.current,o!==null&&o.tag===13&&(o.flags|=16384))),sy(i,e)):qu(i)}function qu(e){var i=e;do{if((i.flags&32768)!==0){sy(i,lr);return}e=i.return;var s=FT(i.alternate,i,xi);if(s!==null){Rt=s;return}if(i=i.sibling,i!==null){Rt=i;return}Rt=i=e}while(i!==null);se===0&&(se=5)}function sy(e,i){do{var s=KT(e.alternate,e);if(s!==null){s.flags&=32767,Rt=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Rt=e;return}Rt=e=s}while(e!==null);se=6,Rt=null}function ay(e,i,s,o,h,f,v,E,b){e.cancelPendingCommit=null;do ju();while(Pe!==0);if((Ht&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(f=i.lanes|i.childLanes,f|=Sh,io(e,s,f,v,E,b),e===Zt&&(Rt=Zt=null,kt=0),_a=i,hr=e,va=s,Df=f,Of=h,$p=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,rA(qr,function(){return hy(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=H.T,H.T=null,h=W.p,W.p=2,v=Ht,Ht|=4;try{QT(e,i,s)}finally{Ht=v,W.p=h,H.T=o}}Pe=1,oy(),ly(),uy()}}function oy(){if(Pe===1){Pe=0;var e=hr,i=_a,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=H.T,H.T=null;var o=W.p;W.p=2;var h=Ht;Ht|=4;try{Hp(i,e);var f=Kf,v=Xm(e.containerInfo),E=f.focusedElem,b=f.selectionRange;if(v!==E&&E&&E.ownerDocument&&Ym(E.ownerDocument.documentElement,E)){if(b!==null&&_h(E)){var U=b.start,G=b.end;if(G===void 0&&(G=U),"selectionStart"in E)E.selectionStart=U,E.selectionEnd=Math.min(G,E.value.length);else{var K=E.ownerDocument||document,z=K&&K.defaultView||window;if(z.getSelection){var B=z.getSelection(),dt=E.textContent.length,lt=Math.min(b.start,dt),Yt=b.end===void 0?lt:Math.min(b.end,dt);!B.extend&&lt>Yt&&(v=Yt,Yt=lt,lt=v);var k=Qm(E,lt),C=Qm(E,Yt);if(k&&C&&(B.rangeCount!==1||B.anchorNode!==k.node||B.anchorOffset!==k.offset||B.focusNode!==C.node||B.focusOffset!==C.offset)){var L=K.createRange();L.setStart(k.node,k.offset),B.removeAllRanges(),lt>Yt?(B.addRange(L),B.extend(C.node,C.offset)):(L.setEnd(C.node,C.offset),B.addRange(L))}}}}for(K=[],B=E;B=B.parentNode;)B.nodeType===1&&K.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<K.length;E++){var F=K[E];F.element.scrollLeft=F.left,F.element.scrollTop=F.top}}tc=!!Ff,Kf=Ff=null}finally{Ht=h,W.p=o,H.T=s}}e.current=i,Pe=2}}function ly(){if(Pe===2){Pe=0;var e=hr,i=_a,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=H.T,H.T=null;var o=W.p;W.p=2;var h=Ht;Ht|=4;try{zp(e,i.alternate,i)}finally{Ht=h,W.p=o,H.T=s}}Pe=3}}function uy(){if(Pe===4||Pe===3){Pe=0,Ll();var e=hr,i=_a,s=va,o=$p;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Pe=5:(Pe=0,_a=hr=null,cy(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(cr=null),Us(s),i=i.stateNode,jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(ie,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=H.T,h=W.p,W.p=2,H.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var E=o[v];f(E.value,{componentStack:E.stack})}}finally{H.T=i,W.p=h}}(va&3)!==0&&ju(),ii(e),h=e.pendingLanes,(s&4194090)!==0&&(h&42)!==0?e===Nf?Qo++:(Qo=0,Nf=e):Qo=0,Yo(0)}}function cy(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Io(i)))}function ju(e){return oy(),ly(),uy(),hy()}function hy(){if(Pe!==5)return!1;var e=hr,i=Df;Df=0;var s=Us(va),o=H.T,h=W.p;try{W.p=32>s?32:s,H.T=null,s=Of,Of=null;var f=hr,v=va;if(Pe=0,_a=hr=null,va=0,(Ht&6)!==0)throw Error(a(331));var E=Ht;if(Ht|=4,Yp(f.current),Fp(f,f.current,v,s),Ht=E,Yo(0,!1),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(ie,f)}catch{}return!0}finally{W.p=h,H.T=o,cy(e,i)}}function fy(e,i,s){i=En(s,i),i=uf(e.stateNode,i,2),e=er(e,i,2),e!==null&&(mi(e,2),ii(e))}function Xt(e,i,s){if(e.tag===3)fy(e,e,s);else for(;i!==null;){if(i.tag===3){fy(i,e,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(cr===null||!cr.has(o))){e=En(s,e),s=pp(2),o=er(i,s,2),o!==null&&(yp(s,o,i,e),mi(o,2),ii(o));break}}i=i.return}}function Pf(e,i,s){var o=e.pingCache;if(o===null){o=e.pingCache=new $T;var h=new Set;o.set(i,h)}else h=o.get(i),h===void 0&&(h=new Set,o.set(i,h));h.has(s)||(wf=!0,h.add(s),e=eA.bind(null,e,i,s),i.then(e,e))}function eA(e,i,s){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Zt===e&&(kt&s)===s&&(se===4||se===3&&(kt&62914560)===kt&&300>mn()-Cf?(Ht&2)===0&&Ea(e,0):Rf|=s,ya===kt&&(ya=0)),ii(e)}function dy(e,i){i===0&&(i=no()),e=na(e,i),e!==null&&(mi(e,i),ii(e))}function nA(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),dy(e,s)}function iA(e,i){var s=0;switch(e.tag){case 13:var o=e.stateNode,h=e.memoizedState;h!==null&&(s=h.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(i),dy(e,s)}function rA(e,i){return zr(e,i)}var Hu=null,Aa=null,xf=!1,Gu=!1,Lf=!1,Es=0;function ii(e){e!==Aa&&e.next===null&&(Aa===null?Hu=Aa=e:Aa=Aa.next=e),Gu=!0,xf||(xf=!0,aA())}function Yo(e,i){if(!Lf&&Gu){Lf=!0;do for(var s=!1,o=Hu;o!==null;){if(e!==0){var h=o.pendingLanes;if(h===0)var f=0;else{var v=o.suspendedLanes,E=o.pingedLanes;f=(1<<31-ze(42|e)+1)-1,f&=h&~(v&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(s=!0,yy(o,f))}else f=kt,f=Ls(o,o===Zt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Fr(o,f)||(s=!0,yy(o,f));o=o.next}while(s);Lf=!1}}function sA(){my()}function my(){Gu=xf=!1;var e=0;Es!==0&&(mA()&&(e=Es),Es=0);for(var i=mn(),s=null,o=Hu;o!==null;){var h=o.next,f=gy(o,i);f===0?(o.next=null,s===null?Hu=h:s.next=h,h===null&&(Aa=s)):(s=o,(e!==0||(f&3)!==0)&&(Gu=!0)),o=h}Yo(e)}function gy(e,i){for(var s=e.suspendedLanes,o=e.pingedLanes,h=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-ze(f),E=1<<v,b=h[v];b===-1?((E&s)===0||(E&o)!==0)&&(h[v]=to(E,i)):b<=i&&(e.expiredLanes|=E),f&=~E}if(i=Zt,s=kt,s=Ls(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,s===0||e===i&&(Gt===2||Gt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Br(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Fr(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(o!==null&&Br(o),Us(s)){case 2:case 8:s=Ps;break;case 32:s=qr;break;case 268435456:s=xs;break;default:s=qr}return o=py.bind(null,e),s=zr(s,o),e.callbackPriority=i,e.callbackNode=s,i}return o!==null&&o!==null&&Br(o),e.callbackPriority=2,e.callbackNode=null,2}function py(e,i){if(Pe!==0&&Pe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(ju()&&e.callbackNode!==s)return null;var o=kt;return o=Ls(e,e===Zt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Jp(e,o,i),gy(e,mn()),e.callbackNode!=null&&e.callbackNode===s?py.bind(null,e):null)}function yy(e,i){if(ju())return null;Jp(e,i,!0)}function aA(){pA(function(){(Ht&6)!==0?zr(Ja,sA):my()})}function Uf(){return Es===0&&(Es=eo()),Es}function _y(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Gs(""+e)}function vy(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function oA(e,i,s,o,h){if(i==="submit"&&s&&s.stateNode===h){var f=_y((h[fe]||null).action),v=o.submitter;v&&(i=(i=v[fe]||null)?_y(i.formAction):v.getAttribute("formAction"),i!==null&&(f=i,v=null));var E=new Fs("action","action",null,o,h);e.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Es!==0){var b=v?vy(h,v):new FormData(h);rf(s,{pending:!0,data:b,method:h.method,action:f},null,b)}}else typeof f=="function"&&(E.preventDefault(),b=v?vy(h,v):new FormData(h),rf(s,{pending:!0,data:b,method:h.method,action:f},f,b))},currentTarget:h}]})}}for(var zf=0;zf<Ah.length;zf++){var Bf=Ah[zf],lA=Bf.toLowerCase(),uA=Bf[0].toUpperCase()+Bf.slice(1);Mn(lA,"on"+uA)}Mn(Jm,"onAnimationEnd"),Mn(Wm,"onAnimationIteration"),Mn(tg,"onAnimationStart"),Mn("dblclick","onDoubleClick"),Mn("focusin","onFocus"),Mn("focusout","onBlur"),Mn(RT,"onTransitionRun"),Mn(IT,"onTransitionStart"),Mn(CT,"onTransitionCancel"),Mn(eg,"onTransitionEnd"),pi("onMouseEnter",["mouseout","mouseover"]),pi("onMouseLeave",["mouseout","mouseover"]),pi("onPointerEnter",["pointerout","pointerover"]),pi("onPointerLeave",["pointerout","pointerover"]),On("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),On("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),On("onBeforeInput",["compositionend","keypress","textInput","paste"]),On("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),On("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),On("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xo));function Ey(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],h=o.event;o=o.listeners;t:{var f=void 0;if(i)for(var v=o.length-1;0<=v;v--){var E=o[v],b=E.instance,U=E.currentTarget;if(E=E.listener,b!==f&&h.isPropagationStopped())break t;f=E,h.currentTarget=U;try{f(h)}catch(G){Nu(G)}h.currentTarget=null,f=b}else for(v=0;v<o.length;v++){if(E=o[v],b=E.instance,U=E.currentTarget,E=E.listener,b!==f&&h.isPropagationStopped())break t;f=E,h.currentTarget=U;try{f(h)}catch(G){Nu(G)}h.currentTarget=null,f=b}}}}function It(e,i){var s=i[so];s===void 0&&(s=i[so]=new Set);var o=e+"__bubble";s.has(o)||(Ty(i,e,2,!1),s.add(o))}function qf(e,i,s){var o=0;i&&(o|=4),Ty(s,e,o,i)}var Fu="_reactListening"+Math.random().toString(36).slice(2);function jf(e){if(!e[Fu]){e[Fu]=!0,ao.forEach(function(s){s!=="selectionchange"&&(cA.has(s)||qf(s,!1,e),qf(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Fu]||(i[Fu]=!0,qf("selectionchange",!1,i))}}function Ty(e,i,s,o){switch(Fy(i)){case 2:var h=LA;break;case 8:h=UA;break;default:h=nd}s=h.bind(null,i,s,e),h=void 0,!_n||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),o?h!==void 0?e.addEventListener(i,s,{capture:!0,passive:h}):e.addEventListener(i,s,!0):h!==void 0?e.addEventListener(i,s,{passive:h}):e.addEventListener(i,s,!1)}function Hf(e,i,s,o,h){var f=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var E=o.stateNode.containerInfo;if(E===h)break;if(v===4)for(v=o.return;v!==null;){var b=v.tag;if((b===3||b===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;E!==null;){if(v=gi(E),v===null)return;if(b=v.tag,b===5||b===6||b===26||b===27){o=f=v;continue t}E=E.parentNode}}o=o.return}Ql(function(){var U=f,G=yn(s),K=[];t:{var z=ng.get(e);if(z!==void 0){var B=Fs,dt=e;switch(e){case"keypress":if(Yn(s)===0)break t;case"keydown":case"keyup":B=Zs;break;case"focusin":dt="focus",B=Ys;break;case"focusout":dt="blur",B=Ys;break;case"beforeblur":case"afterblur":B=Ys;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=vn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=mh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=eu;break;case Jm:case Wm:case tg:B=Xs;break;case eg:B=iu;break;case"scroll":case"scrollend":B=Yl;break;case"wheel":B=Js;break;case"copy":case"cut":case"paste":B=$s;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=vo;break;case"toggle":case"beforetoggle":B=su}var lt=(i&4)!==0,Yt=!lt&&(e==="scroll"||e==="scrollend"),k=lt?z!==null?z+"Capture":null:z;lt=[];for(var C=U,L;C!==null;){var F=C;if(L=F.stateNode,F=F.tag,F!==5&&F!==26&&F!==27||L===null||k===null||(F=Wr(C,k),F!=null&&lt.push($o(C,F,L))),Yt)break;C=C.return}0<lt.length&&(z=new B(z,dt,null,s,G),K.push({event:z,listeners:lt}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",z&&s!==vi&&(dt=s.relatedTarget||s.fromElement)&&(gi(dt)||dt[gn]))break t;if((B||z)&&(z=G.window===G?G:(z=G.ownerDocument)?z.defaultView||z.parentWindow:window,B?(dt=s.relatedTarget||s.toElement,B=U,dt=dt?gi(dt):null,dt!==null&&(Yt=c(dt),lt=dt.tag,dt!==Yt||lt!==5&&lt!==27&&lt!==6)&&(dt=null)):(B=null,dt=U),B!==dt)){if(lt=vn,F="onMouseLeave",k="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(lt=vo,F="onPointerLeave",k="onPointerEnter",C="pointer"),Yt=B==null?z:Gn(B),L=dt==null?z:Gn(dt),z=new lt(F,C+"leave",B,s,G),z.target=Yt,z.relatedTarget=L,F=null,gi(G)===U&&(lt=new lt(k,C+"enter",dt,s,G),lt.target=L,lt.relatedTarget=Yt,F=lt),Yt=F,B&&dt)e:{for(lt=B,k=dt,C=0,L=lt;L;L=Sa(L))C++;for(L=0,F=k;F;F=Sa(F))L++;for(;0<C-L;)lt=Sa(lt),C--;for(;0<L-C;)k=Sa(k),L--;for(;C--;){if(lt===k||k!==null&&lt===k.alternate)break e;lt=Sa(lt),k=Sa(k)}lt=null}else lt=null;B!==null&&Ay(K,z,B,lt,!1),dt!==null&&Yt!==null&&Ay(K,Yt,dt,lt,!0)}}t:{if(z=U?Gn(U):window,B=z.nodeName&&z.nodeName.toLowerCase(),B==="select"||B==="input"&&z.type==="file")var rt=qm;else if(ve(z))if(jm)rt=ST;else{rt=TT;var bt=ET}else B=z.nodeName,!B||B.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?U&&ho(U.elementType)&&(rt=qm):rt=AT;if(rt&&(rt=rt(e,U))){bi(K,rt,s,G);break t}bt&&bt(e,z,U),e==="focusout"&&U&&z.type==="number"&&U.memoizedProps.value!=null&&$i(z,"number",z.value)}switch(bt=U?Gn(U):window,e){case"focusin":(ve(bt)||bt.contentEditable==="true")&&(Ws=bt,vh=U,Ao=null);break;case"focusout":Ao=vh=Ws=null;break;case"mousedown":Eh=!0;break;case"contextmenu":case"mouseup":case"dragend":Eh=!1,$m(K,s,G);break;case"selectionchange":if(wT)break;case"keydown":case"keyup":$m(K,s,G)}var st;if(Zn)t:{switch(e){case"compositionstart":var ut="onCompositionStart";break t;case"compositionend":ut="onCompositionEnd";break t;case"compositionupdate":ut="onCompositionUpdate";break t}ut=void 0}else Mt?j(e,s)&&(ut="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ut="onCompositionStart");ut&&(y&&s.locale!=="ko"&&(Mt||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&Mt&&(st=mo()):(Qn=G,Zi="value"in Qn?Qn.value:Qn.textContent,Mt=!0)),bt=Ku(U,ut),0<bt.length&&(ut=new yo(ut,e,null,s,G),K.push({event:ut,listeners:bt}),st?ut.data=st:(st=Z(s),st!==null&&(ut.data=st)))),(st=m?_e(e,s):Vt(e,s))&&(ut=Ku(U,"onBeforeInput"),0<ut.length&&(bt=new yo("onBeforeInput","beforeinput",null,s,G),K.push({event:bt,listeners:ut}),bt.data=st)),oA(K,e,U,s,G)}Ey(K,i)})}function $o(e,i,s){return{instance:e,listener:i,currentTarget:s}}function Ku(e,i){for(var s=i+"Capture",o=[];e!==null;){var h=e,f=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||f===null||(h=Wr(e,s),h!=null&&o.unshift($o(e,h,f)),h=Wr(e,i),h!=null&&o.push($o(e,h,f))),e.tag===3)return o;e=e.return}return[]}function Sa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ay(e,i,s,o,h){for(var f=i._reactName,v=[];s!==null&&s!==o;){var E=s,b=E.alternate,U=E.stateNode;if(E=E.tag,b!==null&&b===o)break;E!==5&&E!==26&&E!==27||U===null||(b=U,h?(U=Wr(s,f),U!=null&&v.unshift($o(s,U,b))):h||(U=Wr(s,f),U!=null&&v.push($o(s,U,b)))),s=s.return}v.length!==0&&e.push({event:i,listeners:v})}var hA=/\r\n?/g,fA=/\u0000|\uFFFD/g;function Sy(e){return(typeof e=="string"?e:""+e).replace(hA,`
`).replace(fA,"")}function by(e,i){return i=Sy(i),Sy(e)===i}function Qu(){}function Qt(e,i,s,o,h,f){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||pn(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&pn(e,""+o);break;case"className":Fn(e,"class",o);break;case"tabIndex":Fn(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Fn(e,s,o);break;case"style":co(e,o,f);break;case"data":if(i!=="object"){Fn(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=Gs(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(s==="formAction"?(i!=="input"&&Qt(e,i,"name",h.name,h,null),Qt(e,i,"formEncType",h.formEncType,h,null),Qt(e,i,"formMethod",h.formMethod,h,null),Qt(e,i,"formTarget",h.formTarget,h,null)):(Qt(e,i,"encType",h.encType,h,null),Qt(e,i,"method",h.method,h,null),Qt(e,i,"target",h.target,h,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=Gs(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=Qu);break;case"onScroll":o!=null&&It("scroll",e);break;case"onScrollEnd":o!=null&&It("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=Gs(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":It("beforetoggle",e),It("toggle",e),Xi(e,"popover",o);break;case"xlinkActuate":Me(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Me(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Me(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Me(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Me(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Me(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Me(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Me(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Me(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Xi(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=fh.get(s)||s,Xi(e,s,o))}}function Gf(e,i,s,o,h,f){switch(s){case"style":co(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof o=="string"?pn(e,o):(typeof o=="number"||typeof o=="bigint")&&pn(e,""+o);break;case"onScroll":o!=null&&It("scroll",e);break;case"onScrollEnd":o!=null&&It("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Qu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zs.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),i=s.slice(2,h?s.length-7:void 0),f=e[fe]||null,f=f!=null?f[s]:null,typeof f=="function"&&e.removeEventListener(i,f,h),typeof o=="function")){typeof f!="function"&&f!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,o,h);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):Xi(e,s,o)}}}function xe(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":It("error",e),It("load",e);var o=!1,h=!1,f;for(f in s)if(s.hasOwnProperty(f)){var v=s[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Qt(e,i,f,v,s,null)}}h&&Qt(e,i,"srcSet",s.srcSet,s,null),o&&Qt(e,i,"src",s.src,s,null);return;case"input":It("invalid",e);var E=f=v=h=null,b=null,U=null;for(o in s)if(s.hasOwnProperty(o)){var G=s[o];if(G!=null)switch(o){case"name":h=G;break;case"type":v=G;break;case"checked":b=G;break;case"defaultChecked":U=G;break;case"value":f=G;break;case"defaultValue":E=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(a(137,i));break;default:Qt(e,i,o,G,s,null)}}$r(e,f,E,b,U,v,h,!1),Hs(e);return;case"select":It("invalid",e),o=v=f=null;for(h in s)if(s.hasOwnProperty(h)&&(E=s[h],E!=null))switch(h){case"value":f=E;break;case"defaultValue":v=E;break;case"multiple":o=E;default:Qt(e,i,h,E,s,null)}i=f,s=v,e.multiple=!!o,i!=null?_i(e,!!o,i,!1):s!=null&&_i(e,!!o,s,!0);return;case"textarea":It("invalid",e),f=h=o=null;for(v in s)if(s.hasOwnProperty(v)&&(E=s[v],E!=null))switch(v){case"value":o=E;break;case"defaultValue":h=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(a(91));break;default:Qt(e,i,v,E,s,null)}Zr(e,o,h,f),Hs(e);return;case"option":for(b in s)if(s.hasOwnProperty(b)&&(o=s[b],o!=null))switch(b){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Qt(e,i,b,o,s,null)}return;case"dialog":It("beforetoggle",e),It("toggle",e),It("cancel",e),It("close",e);break;case"iframe":case"object":It("load",e);break;case"video":case"audio":for(o=0;o<Xo.length;o++)It(Xo[o],e);break;case"image":It("error",e),It("load",e);break;case"details":It("toggle",e);break;case"embed":case"source":case"link":It("error",e),It("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in s)if(s.hasOwnProperty(U)&&(o=s[U],o!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Qt(e,i,U,o,s,null)}return;default:if(ho(i)){for(G in s)s.hasOwnProperty(G)&&(o=s[G],o!==void 0&&Gf(e,i,G,o,s,void 0));return}}for(E in s)s.hasOwnProperty(E)&&(o=s[E],o!=null&&Qt(e,i,E,o,s,null))}function dA(e,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,f=null,v=null,E=null,b=null,U=null,G=null;for(B in s){var K=s[B];if(s.hasOwnProperty(B)&&K!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":b=K;default:o.hasOwnProperty(B)||Qt(e,i,B,null,o,K)}}for(var z in o){var B=o[z];if(K=s[z],o.hasOwnProperty(z)&&(B!=null||K!=null))switch(z){case"type":f=B;break;case"name":h=B;break;case"checked":U=B;break;case"defaultChecked":G=B;break;case"value":v=B;break;case"defaultValue":E=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(a(137,i));break;default:B!==K&&Qt(e,i,z,B,o,K)}}sn(e,v,E,b,U,G,f,h);return;case"select":B=v=E=z=null;for(f in s)if(b=s[f],s.hasOwnProperty(f)&&b!=null)switch(f){case"value":break;case"multiple":B=b;default:o.hasOwnProperty(f)||Qt(e,i,f,null,o,b)}for(h in o)if(f=o[h],b=s[h],o.hasOwnProperty(h)&&(f!=null||b!=null))switch(h){case"value":z=f;break;case"defaultValue":E=f;break;case"multiple":v=f;default:f!==b&&Qt(e,i,h,f,o,b)}i=E,s=v,o=B,z!=null?_i(e,!!s,z,!1):!!o!=!!s&&(i!=null?_i(e,!!s,i,!0):_i(e,!!s,s?[]:"",!1));return;case"textarea":B=z=null;for(E in s)if(h=s[E],s.hasOwnProperty(E)&&h!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Qt(e,i,E,null,o,h)}for(v in o)if(h=o[v],f=s[v],o.hasOwnProperty(v)&&(h!=null||f!=null))switch(v){case"value":z=h;break;case"defaultValue":B=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==f&&Qt(e,i,v,h,o,f)}Ft(e,z,B);return;case"option":for(var dt in s)if(z=s[dt],s.hasOwnProperty(dt)&&z!=null&&!o.hasOwnProperty(dt))switch(dt){case"selected":e.selected=!1;break;default:Qt(e,i,dt,null,o,z)}for(b in o)if(z=o[b],B=s[b],o.hasOwnProperty(b)&&z!==B&&(z!=null||B!=null))switch(b){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Qt(e,i,b,z,o,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var lt in s)z=s[lt],s.hasOwnProperty(lt)&&z!=null&&!o.hasOwnProperty(lt)&&Qt(e,i,lt,null,o,z);for(U in o)if(z=o[U],B=s[U],o.hasOwnProperty(U)&&z!==B&&(z!=null||B!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(a(137,i));break;default:Qt(e,i,U,z,o,B)}return;default:if(ho(i)){for(var Yt in s)z=s[Yt],s.hasOwnProperty(Yt)&&z!==void 0&&!o.hasOwnProperty(Yt)&&Gf(e,i,Yt,void 0,o,z);for(G in o)z=o[G],B=s[G],!o.hasOwnProperty(G)||z===B||z===void 0&&B===void 0||Gf(e,i,G,z,o,B);return}}for(var k in s)z=s[k],s.hasOwnProperty(k)&&z!=null&&!o.hasOwnProperty(k)&&Qt(e,i,k,null,o,z);for(K in o)z=o[K],B=s[K],!o.hasOwnProperty(K)||z===B||z==null&&B==null||Qt(e,i,K,z,o,B)}var Ff=null,Kf=null;function Yu(e){return e.nodeType===9?e:e.ownerDocument}function wy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ry(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Qf(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Yf=null;function mA(){var e=window.event;return e&&e.type==="popstate"?e===Yf?!1:(Yf=e,!0):(Yf=null,!1)}var Iy=typeof setTimeout=="function"?setTimeout:void 0,gA=typeof clearTimeout=="function"?clearTimeout:void 0,Cy=typeof Promise=="function"?Promise:void 0,pA=typeof queueMicrotask=="function"?queueMicrotask:typeof Cy<"u"?function(e){return Cy.resolve(null).then(e).catch(yA)}:Iy;function yA(e){setTimeout(function(){throw e})}function dr(e){return e==="head"}function Dy(e,i){var s=i,o=0,h=0;do{var f=s.nextSibling;if(e.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(0<o&&8>o){s=o;var v=e.ownerDocument;if(s&1&&Zo(v.documentElement),s&2&&Zo(v.body),s&4)for(s=v.head,Zo(s),v=s.firstChild;v;){var E=v.nextSibling,b=v.nodeName;v[Kr]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&v.rel.toLowerCase()==="stylesheet"||s.removeChild(v),v=E}}if(h===0){e.removeChild(f),sl(i);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:o=s.charCodeAt(0)-48;else o=0;s=f}while(s);sl(i)}function Xf(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Xf(s),Yi(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function _A(e,i,s,o){for(;e.nodeType===1;){var h=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Kr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var f=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=kn(e.nextSibling),e===null)break}return null}function vA(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=kn(e.nextSibling),e===null))return null;return e}function $f(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function EA(e,i){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")i();else{var o=function(){i(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function kn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Zf=null;function Oy(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function Ny(e,i,s){switch(i=Yu(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Zo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Yi(e)}var Rn=new Map,My=new Set;function Xu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Li=W.d;W.d={f:TA,r:AA,D:SA,C:bA,L:wA,m:RA,X:CA,S:IA,M:DA};function TA(){var e=Li.f(),i=Bu();return e||i}function AA(e){var i=Hn(e);i!==null&&i.tag===5&&i.type==="form"?Jg(i):Li.r(e)}var ba=typeof document>"u"?null:document;function Vy(e,i,s){var o=ba;if(o&&typeof i=="string"&&i){var h=de(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),My.has(h)||(My.add(h),e={rel:e,crossOrigin:s,href:i},o.querySelector(h)===null&&(i=o.createElement("link"),xe(i,"link",e),oe(i),o.head.appendChild(i)))}}function SA(e){Li.D(e),Vy("dns-prefetch",e,null)}function bA(e,i){Li.C(e,i),Vy("preconnect",e,i)}function wA(e,i,s){Li.L(e,i,s);var o=ba;if(o&&e&&i){var h='link[rel="preload"][as="'+de(i)+'"]';i==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+de(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+de(s.imageSizes)+'"]')):h+='[href="'+de(e)+'"]';var f=h;switch(i){case"style":f=wa(e);break;case"script":f=Ra(e)}Rn.has(f)||(e=A({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),Rn.set(f,e),o.querySelector(h)!==null||i==="style"&&o.querySelector(Jo(f))||i==="script"&&o.querySelector(Wo(f))||(i=o.createElement("link"),xe(i,"link",e),oe(i),o.head.appendChild(i)))}}function RA(e,i){Li.m(e,i);var s=ba;if(s&&e){var o=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+de(o)+'"][href="'+de(e)+'"]',f=h;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ra(e)}if(!Rn.has(f)&&(e=A({rel:"modulepreload",href:e},i),Rn.set(f,e),s.querySelector(h)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Wo(f)))return}o=s.createElement("link"),xe(o,"link",e),oe(o),s.head.appendChild(o)}}}function IA(e,i,s){Li.S(e,i,s);var o=ba;if(o&&e){var h=Ke(o).hoistableStyles,f=wa(e);i=i||"default";var v=h.get(f);if(!v){var E={loading:0,preload:null};if(v=o.querySelector(Jo(f)))E.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":i},s),(s=Rn.get(f))&&Jf(e,s);var b=v=o.createElement("link");oe(b),xe(b,"link",e),b._p=new Promise(function(U,G){b.onload=U,b.onerror=G}),b.addEventListener("load",function(){E.loading|=1}),b.addEventListener("error",function(){E.loading|=2}),E.loading|=4,$u(v,i,o)}v={type:"stylesheet",instance:v,count:1,state:E},h.set(f,v)}}}function CA(e,i){Li.X(e,i);var s=ba;if(s&&e){var o=Ke(s).hoistableScripts,h=Ra(e),f=o.get(h);f||(f=s.querySelector(Wo(h)),f||(e=A({src:e,async:!0},i),(i=Rn.get(h))&&Wf(e,i),f=s.createElement("script"),oe(f),xe(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(h,f))}}function DA(e,i){Li.M(e,i);var s=ba;if(s&&e){var o=Ke(s).hoistableScripts,h=Ra(e),f=o.get(h);f||(f=s.querySelector(Wo(h)),f||(e=A({src:e,async:!0,type:"module"},i),(i=Rn.get(h))&&Wf(e,i),f=s.createElement("script"),oe(f),xe(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(h,f))}}function ky(e,i,s,o){var h=(h=gt.current)?Xu(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=wa(s.href),s=Ke(h).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=wa(s.href);var f=Ke(h).hoistableStyles,v=f.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=h.querySelector(Jo(e)))&&!f._p&&(v.instance=f,v.state.loading=5),Rn.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Rn.set(e,s),f||OA(h,e,s,v.state))),i&&o===null)throw Error(a(528,""));return v}if(i&&o!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ra(s),s=Ke(h).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function wa(e){return'href="'+de(e)+'"'}function Jo(e){return'link[rel="stylesheet"]['+e+"]"}function Py(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function OA(e,i,s,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),xe(i,"link",s),oe(i),e.head.appendChild(i))}function Ra(e){return'[src="'+de(e)+'"]'}function Wo(e){return"script[async]"+e}function xy(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+de(s.href)+'"]');if(o)return i.instance=o,oe(o),o;var h=A({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),oe(o),xe(o,"style",h),$u(o,s.precedence,e),i.instance=o;case"stylesheet":h=wa(s.href);var f=e.querySelector(Jo(h));if(f)return i.state.loading|=4,i.instance=f,oe(f),f;o=Py(s),(h=Rn.get(h))&&Jf(o,h),f=(e.ownerDocument||e).createElement("link"),oe(f);var v=f;return v._p=new Promise(function(E,b){v.onload=E,v.onerror=b}),xe(f,"link",o),i.state.loading|=4,$u(f,s.precedence,e),i.instance=f;case"script":return f=Ra(s.src),(h=e.querySelector(Wo(f)))?(i.instance=h,oe(h),h):(o=s,(h=Rn.get(f))&&(o=A({},s),Wf(o,h)),e=e.ownerDocument||e,h=e.createElement("script"),oe(h),xe(h,"link",o),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,$u(o,s.precedence,e));return i.instance}function $u(e,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=o.length?o[o.length-1]:null,f=h,v=0;v<o.length;v++){var E=o[v];if(E.dataset.precedence===i)f=E;else if(f!==h)break}f?f.parentNode.insertBefore(e,f.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Jf(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Wf(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Zu=null;function Ly(e,i,s){if(Zu===null){var o=new Map,h=Zu=new Map;h.set(s,o)}else h=Zu,o=h.get(s),o||(o=new Map,h.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),h=0;h<s.length;h++){var f=s[h];if(!(f[Kr]||f[ye]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(i)||"";v=e+v;var E=o.get(v);E?E.push(f):o.set(v,[f])}}return o}function Uy(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function NA(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function zy(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var tl=null;function MA(){}function VA(e,i,s){if(tl===null)throw Error(a(475));var o=tl;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=wa(s.href),f=e.querySelector(Jo(h));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Ju.bind(o),e.then(o,o)),i.state.loading|=4,i.instance=f,oe(f);return}f=e.ownerDocument||e,s=Py(s),(h=Rn.get(h))&&Jf(s,h),f=f.createElement("link"),oe(f);var v=f;v._p=new Promise(function(E,b){v.onload=E,v.onerror=b}),xe(f,"link",s),i.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=Ju.bind(o),e.addEventListener("load",i),e.addEventListener("error",i))}}function kA(){if(tl===null)throw Error(a(475));var e=tl;return e.stylesheets&&e.count===0&&td(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&td(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Ju(){if(this.count--,this.count===0){if(this.stylesheets)td(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wu=null;function td(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wu=new Map,i.forEach(PA,e),Wu=null,Ju.call(e))}function PA(e,i){if(!(i.state.loading&4)){var s=Wu.get(e);if(s)var o=s.get(null);else{s=new Map,Wu.set(e,s);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<h.length;f++){var v=h[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(s.set(v.dataset.precedence,v),o=v)}o&&s.set(null,o)}h=i.instance,v=h.getAttribute("data-precedence"),f=s.get(v)||o,f===o&&s.set(null,h),s.set(v,h),this.count++,o=Ju.bind(this),h.addEventListener("load",o),h.addEventListener("error",o),f?f.parentNode.insertBefore(h,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var el={$$typeof:ht,Provider:null,Consumer:null,_currentValue:at,_currentValue2:at,_threadCount:0};function xA(e,i,s,o,h,f,v,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=di(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=di(0),this.hiddenUpdates=di(null),this.identifierPrefix=o,this.onUncaughtError=h,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function By(e,i,s,o,h,f,v,E,b,U,G,K){return e=new xA(e,i,s,v,E,b,U,K),i=1,f===!0&&(i|=24),f=on(3,null,null,i),e.current=f,f.stateNode=e,i=kh(),i.refCount++,e.pooledCache=i,i.refCount++,f.memoizedState={element:o,isDehydrated:s,cache:i},Uh(f),e}function qy(e){return e?(e=ia,e):ia}function jy(e,i,s,o,h,f){h=qy(h),o.context===null?o.context=h:o.pendingContext=h,o=tr(i),o.payload={element:s},f=f===void 0?null:f,f!==null&&(o.callback=f),s=er(e,o,i),s!==null&&(fn(s,e,i),No(s,e,i))}function Hy(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function ed(e,i){Hy(e,i),(e=e.alternate)&&Hy(e,i)}function Gy(e){if(e.tag===13){var i=na(e,67108864);i!==null&&fn(i,e,67108864),ed(e,67108864)}}var tc=!0;function LA(e,i,s,o){var h=H.T;H.T=null;var f=W.p;try{W.p=2,nd(e,i,s,o)}finally{W.p=f,H.T=h}}function UA(e,i,s,o){var h=H.T;H.T=null;var f=W.p;try{W.p=8,nd(e,i,s,o)}finally{W.p=f,H.T=h}}function nd(e,i,s,o){if(tc){var h=id(o);if(h===null)Hf(e,i,o,ec,s),Ky(e,o);else if(BA(h,e,i,s,o))o.stopPropagation();else if(Ky(e,o),i&4&&-1<zA.indexOf(e)){for(;h!==null;){var f=Hn(h);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Dn(f.pendingLanes);if(v!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;v;){var b=1<<31-ze(v);E.entanglements[1]|=b,v&=~b}ii(f),(Ht&6)===0&&(Uu=mn()+500,Yo(0))}}break;case 13:E=na(f,2),E!==null&&fn(E,f,2),Bu(),ed(f,2)}if(f=id(o),f===null&&Hf(e,i,o,ec,s),f===h)break;h=f}h!==null&&o.stopPropagation()}else Hf(e,i,o,null,s)}}function id(e){return e=yn(e),rd(e)}var ec=null;function rd(e){if(ec=null,e=gi(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=d(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return ec=e,null}function Fy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ah()){case Ja:return 2;case Ps:return 8;case qr:case oh:return 32;case xs:return 268435456;default:return 32}default:return 32}}var sd=!1,mr=null,gr=null,pr=null,nl=new Map,il=new Map,yr=[],zA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ky(e,i){switch(e){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":nl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":il.delete(i.pointerId)}}function rl(e,i,s,o,h,f){return e===null||e.nativeEvent!==f?(e={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:f,targetContainers:[h]},i!==null&&(i=Hn(i),i!==null&&Gy(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function BA(e,i,s,o,h){switch(i){case"focusin":return mr=rl(mr,e,i,s,o,h),!0;case"dragenter":return gr=rl(gr,e,i,s,o,h),!0;case"mouseover":return pr=rl(pr,e,i,s,o,h),!0;case"pointerover":var f=h.pointerId;return nl.set(f,rl(nl.get(f)||null,e,i,s,o,h)),!0;case"gotpointercapture":return f=h.pointerId,il.set(f,rl(il.get(f)||null,e,i,s,o,h)),!0}return!1}function Qy(e){var i=gi(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=d(s),i!==null){e.blockedOn=i,Bl(e.priority,function(){if(s.tag===13){var o=hn();o=Fi(o);var h=na(s,o);h!==null&&fn(h,s,o),ed(s,o)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function nc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=id(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);vi=o,s.target.dispatchEvent(o),vi=null}else return i=Hn(s),i!==null&&Gy(i),e.blockedOn=s,!1;i.shift()}return!0}function Yy(e,i,s){nc(e)&&s.delete(i)}function qA(){sd=!1,mr!==null&&nc(mr)&&(mr=null),gr!==null&&nc(gr)&&(gr=null),pr!==null&&nc(pr)&&(pr=null),nl.forEach(Yy),il.forEach(Yy)}function ic(e,i){e.blockedOn===i&&(e.blockedOn=null,sd||(sd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,qA)))}var rc=null;function Xy(e){rc!==e&&(rc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){rc===e&&(rc=null);for(var i=0;i<e.length;i+=3){var s=e[i],o=e[i+1],h=e[i+2];if(typeof o!="function"){if(rd(o||s)===null)continue;break}var f=Hn(s);f!==null&&(e.splice(i,3),i-=3,rf(f,{pending:!0,data:h,method:s.method,action:o},o,h))}}))}function sl(e){function i(b){return ic(b,e)}mr!==null&&ic(mr,e),gr!==null&&ic(gr,e),pr!==null&&ic(pr,e),nl.forEach(i),il.forEach(i);for(var s=0;s<yr.length;s++){var o=yr[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<yr.length&&(s=yr[0],s.blockedOn===null);)Qy(s),s.blockedOn===null&&yr.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var h=s[o],f=s[o+1],v=h[fe]||null;if(typeof f=="function")v||Xy(s);else if(v){var E=null;if(f&&f.hasAttribute("formAction")){if(h=f,v=f[fe]||null)E=v.formAction;else if(rd(h)!==null)continue}else E=v.action;typeof E=="function"?s[o+1]=E:(s.splice(o,3),o-=3),Xy(s)}}}function ad(e){this._internalRoot=e}sc.prototype.render=ad.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,o=hn();jy(s,o,e,i,null,null)},sc.prototype.unmount=ad.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;jy(e.current,2,null,e,null,null),Bu(),i[gn]=null}};function sc(e){this._internalRoot=e}sc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Ki();e={blockedOn:null,target:e,priority:i};for(var s=0;s<yr.length&&i!==0&&i<yr[s].priority;s++);yr.splice(s,0,e),s===0&&Qy(e)}};var $y=t.version;if($y!=="19.1.0")throw Error(a(527,$y,"19.1.0"));W.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var jA={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{ie=ac.inject(jA),jt=ac}catch{}}return ol.createRoot=function(e,i){if(!l(e))throw Error(a(299));var s=!1,o="",h=fp,f=dp,v=mp,E=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(f=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(E=i.unstable_transitionCallbacks)),i=By(e,1,!1,null,null,s,o,h,f,v,E,null),e[gn]=i.current,jf(e),new ad(i)},ol.hydrateRoot=function(e,i,s){if(!l(e))throw Error(a(299));var o=!1,h="",f=fp,v=dp,E=mp,b=null,U=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(v=s.onCaughtError),s.onRecoverableError!==void 0&&(E=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(b=s.unstable_transitionCallbacks),s.formState!==void 0&&(U=s.formState)),i=By(e,1,!0,i,s??null,o,h,f,v,E,b,U),i.context=qy(null),s=i.current,o=hn(),o=Fi(o),h=tr(o),h.callback=null,er(s,h,o),s=o,i.current.lanes=s,mi(i,s),ii(i),e[gn]=i.current,jf(e),new sc(i)},ol.version="19.1.0",ol}var a_;function JA(){if(a_)return ud.exports;a_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),ud.exports=ZA(),ud.exports}var WA=JA();const tS=()=>{};var o_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=function(r){const t=[];let n=0;for(let a=0;a<r.length;a++){let l=r.charCodeAt(a);l<128?t[n++]=l:l<2048?(t[n++]=l>>6|192,t[n++]=l&63|128):(l&64512)===55296&&a+1<r.length&&(r.charCodeAt(a+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++a)&1023),t[n++]=l>>18|240,t[n++]=l>>12&63|128,t[n++]=l>>6&63|128,t[n++]=l&63|128):(t[n++]=l>>12|224,t[n++]=l>>6&63|128,t[n++]=l&63|128)}return t},eS=function(r){const t=[];let n=0,a=0;for(;n<r.length;){const l=r[n++];if(l<128)t[a++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[n++];t[a++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[n++],d=r[n++],g=r[n++],p=((l&7)<<18|(c&63)<<12|(d&63)<<6|g&63)-65536;t[a++]=String.fromCharCode(55296+(p>>10)),t[a++]=String.fromCharCode(56320+(p&1023))}else{const c=r[n++],d=r[n++];t[a++]=String.fromCharCode((l&15)<<12|(c&63)<<6|d&63)}}return t.join("")},Fv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let l=0;l<r.length;l+=3){const c=r[l],d=l+1<r.length,g=d?r[l+1]:0,p=l+2<r.length,_=p?r[l+2]:0,A=c>>2,D=(c&3)<<4|g>>4;let M=(g&15)<<2|_>>6,q=_&63;p||(q=64,d||(M=64)),a.push(n[A],n[D],n[M],n[q])}return a.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(Gv(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):eS(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let l=0;l<r.length;){const c=n[r.charAt(l++)],g=l<r.length?n[r.charAt(l)]:0;++l;const _=l<r.length?n[r.charAt(l)]:64;++l;const D=l<r.length?n[r.charAt(l)]:64;if(++l,c==null||g==null||_==null||D==null)throw new nS;const M=c<<2|g>>4;if(a.push(M),_!==64){const q=g<<4&240|_>>2;if(a.push(q),D!==64){const X=_<<6&192|D;a.push(X)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class nS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iS=function(r){const t=Gv(r);return Fv.encodeByteArray(t,!0)},Sc=function(r){return iS(r).replace(/\./g,"")},Kv=function(r){try{return Fv.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS=()=>rS().__FIREBASE_DEFAULTS__,aS=()=>{if(typeof process>"u"||typeof o_>"u")return;const r=o_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},oS=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&Kv(r[1]);return t&&JSON.parse(t)},qc=()=>{try{return tS()||sS()||aS()||oS()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Qv=r=>{var t,n;return(n=(t=qc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[r]},lS=r=>{const t=Qv(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),a]:[t.substring(0,n),a]},Yv=()=>{var r;return(r=qc())===null||r===void 0?void 0:r.config},Xv=r=>{var t;return(t=qc())===null||t===void 0?void 0:t[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,a)=>{n?this.reject(n):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,a))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(r){return r.endsWith(".cloudworkstations.dev")}async function $v(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},a=t||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Sc(JSON.stringify(n)),Sc(JSON.stringify(d)),""].join(".")}const dl={};function hS(){const r={prod:[],emulator:[]};for(const t of Object.keys(dl))dl[t]?r.emulator.push(t):r.prod.push(t);return r}function fS(r){let t=document.getElementById(r),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),n=!0),{created:n,element:t}}let l_=!1;function Zv(r,t){if(typeof window>"u"||typeof document>"u"||!Il(window.location.host)||dl[r]===t||dl[r]||l_)return;dl[r]=t;function n(M){return`__firebase__banner__${M}`}const a="__firebase__banner",c=hS().prod.length>0;function d(){const M=document.getElementById(a);M&&M.remove()}function g(M){M.style.display="flex",M.style.background="#7faaf0",M.style.position="fixed",M.style.bottom="5px",M.style.left="5px",M.style.padding=".5em",M.style.borderRadius="5px",M.style.alignItems="center"}function p(M,q){M.setAttribute("width","24"),M.setAttribute("id",q),M.setAttribute("height","24"),M.setAttribute("viewBox","0 0 24 24"),M.setAttribute("fill","none"),M.style.marginLeft="-6px"}function _(){const M=document.createElement("span");return M.style.cursor="pointer",M.style.marginLeft="16px",M.style.fontSize="24px",M.innerHTML=" &times;",M.onclick=()=>{l_=!0,d()},M}function A(M,q){M.setAttribute("id",q),M.innerText="Learn more",M.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",M.setAttribute("target","__blank"),M.style.paddingLeft="5px",M.style.textDecoration="underline"}function D(){const M=fS(a),q=n("text"),X=document.getElementById(q)||document.createElement("span"),it=n("learnmore"),J=document.getElementById(it)||document.createElement("a"),Nt=n("preprendIcon"),yt=document.getElementById(Nt)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(M.created){const ht=M.element;g(ht),A(J,it);const Dt=_();p(yt,Nt),ht.append(yt,X,J,Dt),document.body.appendChild(ht)}c?(X.innerText="Preview backend disconnected.",yt.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(yt.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,X.innerText="Preview backend running in this workspace."),X.setAttribute("id",q)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",D):D()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function mS(){var r;const t=(r=qc())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jv(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function pS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yS(){const r=Fe();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function _S(){return!mS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wv(){try{return typeof indexedDB=="object"}catch{return!1}}function t0(){return new Promise((r,t)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(a);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(a),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var c;t(((c=l.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){t(n)}})}function vS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES="FirebaseError";class zn extends Error{constructor(t,n,a){super(n),this.code=t,this.customData=a,this.name=ES,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ns.prototype.create)}}class Ns{constructor(t,n,a){this.service=t,this.serviceName=n,this.errors=a}create(t,...n){const a=n[0]||{},l=`${this.service}/${t}`,c=this.errors[t],d=c?TS(c,a):"Error",g=`${this.serviceName}: ${d} (${l}).`;return new zn(l,g,a)}}function TS(r,t){return r.replace(AS,(n,a)=>{const l=t[a];return l!=null?String(l):`<${a}?>`})}const AS=/\{\$([^}]+)}/g;function SS(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function Dr(r,t){if(r===t)return!0;const n=Object.keys(r),a=Object.keys(t);for(const l of n){if(!a.includes(l))return!1;const c=r[l],d=t[l];if(u_(c)&&u_(d)){if(!Dr(c,d))return!1}else if(c!==d)return!1}for(const l of a)if(!n.includes(l))return!1;return!0}function u_(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(r){const t=[];for(const[n,a]of Object.entries(r))Array.isArray(a)?a.forEach(l=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(a));return t.length?"&"+t.join("&"):""}function ll(r){const t={};return r.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[l,c]=a.split("=");t[decodeURIComponent(l)]=decodeURIComponent(c)}}),t}function ul(r){const t=r.indexOf("?");if(!t)return"";const n=r.indexOf("#",t);return r.substring(t,n>0?n:void 0)}function bS(r,t){const n=new wS(r,t);return n.subscribe.bind(n)}class wS{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(a=>{this.error(a)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,a){let l;if(t===void 0&&n===void 0&&a===void 0)throw new Error("Missing Observer.");RS(t,["next","error","complete"])?l=t:l={next:t,error:n,complete:a},l.next===void 0&&(l.next=dd),l.error===void 0&&(l.error=dd),l.complete===void 0&&(l.complete=dd);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RS(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function dd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=1e3,CS=2,DS=4*60*60*1e3,OS=.5;function c_(r,t=IS,n=CS){const a=t*Math.pow(n,r),l=Math.round(OS*a*(Math.random()-.5)*2);return Math.min(DS,a+l)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(r){return r&&r._delegate?r._delegate:r}class Ln{constructor(t,n,a){this.name=t,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const a=new uS;if(this.instancesDeferred.set(n,a),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&a.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const a=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),l=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(c){if(l)return null;throw c}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(VS(t))try{this.getOrInitializeService({instanceIdentifier:Ts})}catch{}for(const[n,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:l});a.resolve(c)}catch{}}}}clearInstance(t=Ts){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ts){return this.instances.has(t)}getOptions(t=Ts){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:a,options:n});for(const[c,d]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(c);a===g&&d.resolve(l)}return l}onInit(t,n){var a;const l=this.normalizeInstanceIdentifier(n),c=(a=this.onInitCallbacks.get(l))!==null&&a!==void 0?a:new Set;c.add(t),this.onInitCallbacks.set(l,c);const d=this.instances.get(l);return d&&t(d,l),()=>{c.delete(t)}}invokeOnInitCallbacks(t,n){const a=this.onInitCallbacks.get(n);if(a)for(const l of a)try{l(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:MS(t),options:n}),this.instances.set(t,a),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=Ts){return this.component?this.component.multipleInstances?t:Ts:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function MS(r){return r===Ts?void 0:r}function VS(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new NS(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ct;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ct||(Ct={}));const PS={debug:Ct.DEBUG,verbose:Ct.VERBOSE,info:Ct.INFO,warn:Ct.WARN,error:Ct.ERROR,silent:Ct.SILENT},xS=Ct.INFO,LS={[Ct.DEBUG]:"log",[Ct.VERBOSE]:"log",[Ct.INFO]:"info",[Ct.WARN]:"warn",[Ct.ERROR]:"error"},US=(r,t,...n)=>{if(t<r.logLevel)return;const a=new Date().toISOString(),l=LS[t];if(l)console[l](`[${a}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class jc{constructor(t){this.name=t,this._logLevel=xS,this._logHandler=US,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ct))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?PS[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ct.DEBUG,...t),this._logHandler(this,Ct.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ct.VERBOSE,...t),this._logHandler(this,Ct.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ct.INFO,...t),this._logHandler(this,Ct.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ct.WARN,...t),this._logHandler(this,Ct.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ct.ERROR,...t),this._logHandler(this,Ct.ERROR,...t)}}const zS=(r,t)=>t.some(n=>r instanceof n);let h_,f_;function BS(){return h_||(h_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qS(){return f_||(f_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const e0=new WeakMap,Cd=new WeakMap,n0=new WeakMap,md=new WeakMap,rm=new WeakMap;function jS(r){const t=new Promise((n,a)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",d)},c=()=>{n(Rr(r.result)),l()},d=()=>{a(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",d)});return t.then(n=>{n instanceof IDBCursor&&e0.set(n,r)}).catch(()=>{}),rm.set(t,r),t}function HS(r){if(Cd.has(r))return;const t=new Promise((n,a)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",d),r.removeEventListener("abort",d)},c=()=>{n(),l()},d=()=>{a(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",d),r.addEventListener("abort",d)});Cd.set(r,t)}let Dd={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return Cd.get(r);if(t==="objectStoreNames")return r.objectStoreNames||n0.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function GS(r){Dd=r(Dd)}function FS(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const a=r.call(gd(this),t,...n);return n0.set(a,t.sort?t.sort():[t]),Rr(a)}:qS().includes(r)?function(...t){return r.apply(gd(this),t),Rr(e0.get(this))}:function(...t){return Rr(r.apply(gd(this),t))}}function KS(r){return typeof r=="function"?FS(r):(r instanceof IDBTransaction&&HS(r),zS(r,BS())?new Proxy(r,Dd):r)}function Rr(r){if(r instanceof IDBRequest)return jS(r);if(md.has(r))return md.get(r);const t=KS(r);return t!==r&&(md.set(r,t),rm.set(t,r)),t}const gd=r=>rm.get(r);function i0(r,t,{blocked:n,upgrade:a,blocking:l,terminated:c}={}){const d=indexedDB.open(r,t),g=Rr(d);return a&&d.addEventListener("upgradeneeded",p=>{a(Rr(d.result),p.oldVersion,p.newVersion,Rr(d.transaction),p)}),n&&d.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),g.then(p=>{c&&p.addEventListener("close",()=>c()),l&&p.addEventListener("versionchange",_=>l(_.oldVersion,_.newVersion,_))}).catch(()=>{}),g}const QS=["get","getKey","getAll","getAllKeys","count"],YS=["put","add","delete","clear"],pd=new Map;function d_(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(pd.get(t))return pd.get(t);const n=t.replace(/FromIndex$/,""),a=t!==n,l=YS.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(l||QS.includes(n)))return;const c=async function(d,...g){const p=this.transaction(d,l?"readwrite":"readonly");let _=p.store;return a&&(_=_.index(g.shift())),(await Promise.all([_[n](...g),l&&p.done]))[0]};return pd.set(t,c),c}GS(r=>({...r,get:(t,n,a)=>d_(t,n)||r.get(t,n,a),has:(t,n)=>!!d_(t,n)||r.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($S(n)){const a=n.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(n=>n).join(" ")}}function $S(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Od="@firebase/app",m_="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new jc("@firebase/app"),ZS="@firebase/app-compat",JS="@firebase/analytics-compat",WS="@firebase/analytics",t1="@firebase/app-check-compat",e1="@firebase/app-check",n1="@firebase/auth",i1="@firebase/auth-compat",r1="@firebase/database",s1="@firebase/data-connect",a1="@firebase/database-compat",o1="@firebase/functions",l1="@firebase/functions-compat",u1="@firebase/installations",c1="@firebase/installations-compat",h1="@firebase/messaging",f1="@firebase/messaging-compat",d1="@firebase/performance",m1="@firebase/performance-compat",g1="@firebase/remote-config",p1="@firebase/remote-config-compat",y1="@firebase/storage",_1="@firebase/storage-compat",v1="@firebase/firestore",E1="@firebase/ai",T1="@firebase/firestore-compat",A1="firebase",S1="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="[DEFAULT]",b1={[Od]:"fire-core",[ZS]:"fire-core-compat",[WS]:"fire-analytics",[JS]:"fire-analytics-compat",[e1]:"fire-app-check",[t1]:"fire-app-check-compat",[n1]:"fire-auth",[i1]:"fire-auth-compat",[r1]:"fire-rtdb",[s1]:"fire-data-connect",[a1]:"fire-rtdb-compat",[o1]:"fire-fn",[l1]:"fire-fn-compat",[u1]:"fire-iid",[c1]:"fire-iid-compat",[h1]:"fire-fcm",[f1]:"fire-fcm-compat",[d1]:"fire-perf",[m1]:"fire-perf-compat",[g1]:"fire-rc",[p1]:"fire-rc-compat",[y1]:"fire-gcs",[_1]:"fire-gcs-compat",[v1]:"fire-fst",[T1]:"fire-fst-compat",[E1]:"fire-vertex","fire-js":"fire-js",[A1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=new Map,w1=new Map,Md=new Map;function g_(r,t){try{r.container.addComponent(t)}catch(n){qi.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function ui(r){const t=r.name;if(Md.has(t))return qi.debug(`There were multiple attempts to register component ${t}.`),!1;Md.set(t,r);for(const n of bc.values())g_(n,r);for(const n of w1.values())g_(n,r);return!0}function Ms(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function In(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ir=new Ns("app","Firebase",R1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(t,n,a){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ir.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=S1;function r0(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const a=Object.assign({name:Nd,automaticDataCollectionEnabled:!0},t),l=a.name;if(typeof l!="string"||!l)throw Ir.create("bad-app-name",{appName:String(l)});if(n||(n=Yv()),!n)throw Ir.create("no-options");const c=bc.get(l);if(c){if(Dr(n,c.options)&&Dr(a,c.config))return c;throw Ir.create("duplicate-app",{appName:l})}const d=new kS(l);for(const p of Md.values())d.addComponent(p);const g=new I1(n,a,d);return bc.set(l,g),g}function sm(r=Nd){const t=bc.get(r);if(!t&&r===Nd&&Yv())return r0();if(!t)throw Ir.create("no-app",{appName:r});return t}function Cn(r,t,n){var a;let l=(a=b1[r])!==null&&a!==void 0?a:r;n&&(l+=`-${n}`);const c=l.match(/\s|\//),d=t.match(/\s|\//);if(c||d){const g=[`Unable to register library "${l}" with version "${t}":`];c&&g.push(`library name "${l}" contains illegal characters (whitespace or "/")`),c&&d&&g.push("and"),d&&g.push(`version name "${t}" contains illegal characters (whitespace or "/")`),qi.warn(g.join(" "));return}ui(new Ln(`${l}-version`,()=>({library:l,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1="firebase-heartbeat-database",D1=1,El="firebase-heartbeat-store";let yd=null;function s0(){return yd||(yd=i0(C1,D1,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(El)}catch(n){console.warn(n)}}}}).catch(r=>{throw Ir.create("idb-open",{originalErrorMessage:r.message})})),yd}async function O1(r){try{const n=(await s0()).transaction(El),a=await n.objectStore(El).get(a0(r));return await n.done,a}catch(t){if(t instanceof zn)qi.warn(t.message);else{const n=Ir.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});qi.warn(n.message)}}}async function p_(r,t){try{const a=(await s0()).transaction(El,"readwrite");await a.objectStore(El).put(t,a0(r)),await a.done}catch(n){if(n instanceof zn)qi.warn(n.message);else{const a=Ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qi.warn(a.message)}}}function a0(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1=1024,M1=30;class V1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new P1(n),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var t,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=y_();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(d=>d.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:l}),this._heartbeatsCache.heartbeats.length>M1){const d=x1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){qi.warn(a)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=y_(),{heartbeatsToSend:a,unsentEntries:l}=k1(this._heartbeatsCache.heartbeats),c=Sc(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return qi.warn(n),""}}}function y_(){return new Date().toISOString().substring(0,10)}function k1(r,t=N1){const n=[];let a=r.slice();for(const l of r){const c=n.find(d=>d.agent===l.agent);if(c){if(c.dates.push(l.date),__(n)>t){c.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),__(n)>t){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class P1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wv()?t0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await O1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return p_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return p_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...t.heartbeats]})}else return}}function __(r){return Sc(JSON.stringify({version:2,heartbeats:r})).length}function x1(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let a=1;a<r.length;a++)r[a].date<n&&(n=r[a].date,t=a);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(r){ui(new Ln("platform-logger",t=>new XS(t),"PRIVATE")),ui(new Ln("heartbeat",t=>new V1(t),"PRIVATE")),Cn(Od,m_,r),Cn(Od,m_,"esm2017"),Cn("fire-js","")}L1("");function am(r,t){var n={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&t.indexOf(a)<0&&(n[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(r);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(r,a[l])&&(n[a[l]]=r[a[l]]);return n}function o0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const U1=o0,l0=new Ns("auth","Firebase",o0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=new jc("@firebase/auth");function z1(r,...t){wc.logLevel<=Ct.WARN&&wc.warn(`Auth (${Fa}): ${r}`,...t)}function mc(r,...t){wc.logLevel<=Ct.ERROR&&wc.error(`Auth (${Fa}): ${r}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(r,...t){throw om(r,...t)}function ai(r,...t){return om(r,...t)}function u0(r,t,n){const a=Object.assign(Object.assign({},U1()),{[t]:n});return new Ns("auth","Firebase",a).create(t,{appName:r.name})}function Bi(r){return u0(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function om(r,...t){if(typeof r!="string"){const n=t[0],a=[...t.slice(1)];return a[0]&&(a[0].appName=r.name),r._errorFactory.create(n,...a)}return l0.create(r,...t)}function ft(r,t,...n){if(!r)throw om(t,...n)}function Ui(r){const t="INTERNAL ASSERTION FAILED: "+r;throw mc(t),new Error(t)}function ji(r,t){r||Ui(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function B1(){return v_()==="http:"||v_()==="https:"}function v_(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(B1()||Jv()||"connection"in navigator)?navigator.onLine:!0}function j1(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t,n){this.shortDelay=t,this.longDelay=n,ji(n>t,"Short delay should be less than long delay!"),this.isMobile=dS()||pS()}get(){return q1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(r,t){ji(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{static initialize(t,n,a){this.fetchImpl=t,n&&(this.headersImpl=n),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ui("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ui("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ui("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],F1=new Dl(3e4,6e4);function xr(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function Lr(r,t,n,a,l={}){return h0(r,l,async()=>{let c={},d={};a&&(t==="GET"?d=a:c={body:JSON.stringify(a)});const g=Cl(Object.assign({key:r.config.apiKey},d)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:t,headers:p},c);return gS()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Il(r.emulatorConfig.host)&&(_.credentials="include"),c0.fetch()(await f0(r,r.config.apiHost,n,g),_)})}async function h0(r,t,n){r._canInitEmulator=!1;const a=Object.assign(Object.assign({},H1),t);try{const l=new Q1(r),c=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await c.json();if("needConfirmation"in d)throw oc(r,"account-exists-with-different-credential",d);if(c.ok&&!("errorMessage"in d))return d;{const g=c.ok?d.errorMessage:d.error.message,[p,_]=g.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw oc(r,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw oc(r,"email-already-in-use",d);if(p==="USER_DISABLED")throw oc(r,"user-disabled",d);const A=a[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw u0(r,A,_);Un(r,A)}}catch(l){if(l instanceof zn)throw l;Un(r,"network-request-failed",{message:String(l)})}}async function Ol(r,t,n,a,l={}){const c=await Lr(r,t,n,a,l);return"mfaPendingCredential"in c&&Un(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function f0(r,t,n,a){const l=`${t}${n}?${a}`,c=r,d=c.config.emulator?lm(r.config,l):`${r.config.apiScheme}://${l}`;return G1.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(d).toString():d}function K1(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Q1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,a)=>{this.timer=setTimeout(()=>a(ai(this.auth,"network-request-failed")),F1.get())})}}function oc(r,t,n){const a={appName:r.name};n.email&&(a.email=n.email),n.phoneNumber&&(a.phoneNumber=n.phoneNumber);const l=ai(r,t,a);return l.customData._tokenResponse=n,l}function E_(r){return r!==void 0&&r.enterprise!==void 0}class Y1{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return K1(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function X1(r,t){return Lr(r,"GET","/v2/recaptchaConfig",xr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $1(r,t){return Lr(r,"POST","/v1/accounts:delete",t)}async function Rc(r,t){return Lr(r,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Z1(r,t=!1){const n=Bn(r),a=await n.getIdToken(t),l=um(a);ft(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,d=c==null?void 0:c.sign_in_provider;return{claims:l,token:a,authTime:ml(_d(l.auth_time)),issuedAtTime:ml(_d(l.iat)),expirationTime:ml(_d(l.exp)),signInProvider:d||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function _d(r){return Number(r)*1e3}function um(r){const[t,n,a]=r.split(".");if(t===void 0||n===void 0||a===void 0)return mc("JWT malformed, contained fewer than 3 sections"),null;try{const l=Kv(n);return l?JSON.parse(l):(mc("Failed to decode base64 JWT payload"),null)}catch(l){return mc("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function T_(r){const t=um(r);return ft(t,"internal-error"),ft(typeof t.exp<"u","internal-error"),ft(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tl(r,t,n=!1){if(n)return t;try{return await t}catch(a){throw a instanceof zn&&J1(a)&&r.auth.currentUser===r&&await r.auth.signOut(),a}}function J1({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ml(this.lastLoginAt),this.creationTime=ml(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ic(r){var t;const n=r.auth,a=await r.getIdToken(),l=await Tl(r,Rc(n,{idToken:a}));ft(l==null?void 0:l.users.length,n,"internal-error");const c=l.users[0];r._notifyReloadListener(c);const d=!((t=c.providerUserInfo)===null||t===void 0)&&t.length?d0(c.providerUserInfo):[],g=eb(r.providerData,d),p=r.isAnonymous,_=!(r.email&&c.passwordHash)&&!(g!=null&&g.length),A=p?_:!1,D={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:g,metadata:new kd(c.createdAt,c.lastLoginAt),isAnonymous:A};Object.assign(r,D)}async function tb(r){const t=Bn(r);await Ic(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function eb(r,t){return[...r.filter(a=>!t.some(l=>l.providerId===a.providerId)),...t]}function d0(r){return r.map(t=>{var{providerId:n}=t,a=am(t,["providerId"]);return{providerId:n,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nb(r,t){const n=await h0(r,{},async()=>{const a=Cl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:l,apiKey:c}=r.config,d=await f0(r,l,"/v1/token",`key=${c}`),g=await r._getAdditionalHeaders();return g["Content-Type"]="application/x-www-form-urlencoded",c0.fetch()(d,{method:"POST",headers:g,body:a})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ib(r,t){return Lr(r,"POST","/v2/accounts:revokeToken",xr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ft(t.idToken,"internal-error"),ft(typeof t.idToken<"u","internal-error"),ft(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):T_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){ft(t.length!==0,"internal-error");const n=T_(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ft(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:a,refreshToken:l,expiresIn:c}=await nb(t,n);this.updateTokensAndExpiration(a,l,Number(c))}updateTokensAndExpiration(t,n,a){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(t,n){const{refreshToken:a,accessToken:l,expirationTime:c}=n,d=new Ma;return a&&(ft(typeof a=="string","internal-error",{appName:t}),d.refreshToken=a),l&&(ft(typeof l=="string","internal-error",{appName:t}),d.accessToken=l),c&&(ft(typeof c=="number","internal-error",{appName:t}),d.expirationTime=c),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ma,this.toJSON())}_performRefresh(){return Ui("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(r,t){ft(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class xn{constructor(t){var{uid:n,auth:a,stsTokenManager:l}=t,c=am(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new W1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=a,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new kd(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(t){const n=await Tl(this,this.stsTokenManager.getToken(this.auth,t));return ft(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Z1(this,t)}reload(){return tb(this)}_assign(t){this!==t&&(ft(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new xn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){ft(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let a=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),a=!0),n&&await Ic(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(In(this.auth.app))return Promise.reject(Bi(this.auth));const t=await this.getIdToken();return await Tl(this,$1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var a,l,c,d,g,p,_,A;const D=(a=n.displayName)!==null&&a!==void 0?a:void 0,M=(l=n.email)!==null&&l!==void 0?l:void 0,q=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,X=(d=n.photoURL)!==null&&d!==void 0?d:void 0,it=(g=n.tenantId)!==null&&g!==void 0?g:void 0,J=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,Nt=(_=n.createdAt)!==null&&_!==void 0?_:void 0,yt=(A=n.lastLoginAt)!==null&&A!==void 0?A:void 0,{uid:ht,emailVerified:Dt,isAnonymous:pt,providerData:Ot,stsTokenManager:N}=n;ft(ht&&N,t,"internal-error");const S=Ma.fromJSON(this.name,N);ft(typeof ht=="string",t,"internal-error"),vr(D,t.name),vr(M,t.name),ft(typeof Dt=="boolean",t,"internal-error"),ft(typeof pt=="boolean",t,"internal-error"),vr(q,t.name),vr(X,t.name),vr(it,t.name),vr(J,t.name),vr(Nt,t.name),vr(yt,t.name);const w=new xn({uid:ht,auth:t,email:M,emailVerified:Dt,displayName:D,isAnonymous:pt,photoURL:X,phoneNumber:q,tenantId:it,stsTokenManager:S,createdAt:Nt,lastLoginAt:yt});return Ot&&Array.isArray(Ot)&&(w.providerData=Ot.map(O=>Object.assign({},O))),J&&(w._redirectEventId=J),w}static async _fromIdTokenResponse(t,n,a=!1){const l=new Ma;l.updateFromServerResponse(n);const c=new xn({uid:n.localId,auth:t,stsTokenManager:l,isAnonymous:a});return await Ic(c),c}static async _fromGetAccountInfoResponse(t,n,a){const l=n.users[0];ft(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?d0(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(c!=null&&c.length),g=new Ma;g.updateFromIdToken(a);const p=new xn({uid:l.localId,auth:t,stsTokenManager:g,isAnonymous:d}),_={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new kd(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(c!=null&&c.length)};return Object.assign(p,_),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=new Map;function zi(r){ji(r instanceof Function,"Expected a class definition");let t=A_.get(r);return t?(ji(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,A_.set(r,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}m0.type="NONE";const S_=m0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(r,t,n){return`firebase:${r}:${t}:${n}`}class Va{constructor(t,n,a){this.persistence=t,this.auth=n,this.userKey=a;const{config:l,name:c}=this.auth;this.fullUserKey=gc(this.userKey,l.apiKey,c),this.fullPersistenceKey=gc("persistence",l.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Rc(this.auth,{idToken:t}).catch(()=>{});return n?xn._fromGetAccountInfoResponse(this.auth,n,t):null}return xn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,a="authUser"){if(!n.length)return new Va(zi(S_),t,a);const l=(await Promise.all(n.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let c=l[0]||zi(S_);const d=gc(a,t.config.apiKey,t.name);let g=null;for(const _ of n)try{const A=await _._get(d);if(A){let D;if(typeof A=="string"){const M=await Rc(t,{idToken:A}).catch(()=>{});if(!M)break;D=await xn._fromGetAccountInfoResponse(t,M,A)}else D=xn._fromJSON(t,A);_!==c&&(g=D),c=_;break}}catch{}const p=l.filter(_=>_._shouldAllowMigration);return!c._shouldAllowMigration||!p.length?new Va(c,t,a):(c=p[0],g&&await c._set(d,g.toJSON()),await Promise.all(n.map(async _=>{if(_!==c)try{await _._remove(d)}catch{}})),new Va(c,t,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_0(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(g0(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(E0(t))return"Blackberry";if(T0(t))return"Webos";if(p0(t))return"Safari";if((t.includes("chrome/")||y0(t))&&!t.includes("edge/"))return"Chrome";if(v0(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=r.match(n);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function g0(r=Fe()){return/firefox\//i.test(r)}function p0(r=Fe()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function y0(r=Fe()){return/crios\//i.test(r)}function _0(r=Fe()){return/iemobile/i.test(r)}function v0(r=Fe()){return/android/i.test(r)}function E0(r=Fe()){return/blackberry/i.test(r)}function T0(r=Fe()){return/webos/i.test(r)}function cm(r=Fe()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function rb(r=Fe()){var t;return cm(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function sb(){return yS()&&document.documentMode===10}function A0(r=Fe()){return cm(r)||v0(r)||T0(r)||E0(r)||/windows phone/i.test(r)||_0(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(r,t=[]){let n;switch(r){case"Browser":n=b_(Fe());break;case"Worker":n=`${b_(Fe())}-${r}`;break;default:n=r}const a=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fa}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const a=c=>new Promise((d,g)=>{try{const p=t(c);d(p)}catch(p){g(p)}});a.onAbort=n,this.queue.push(a);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const a of this.queue)await a(t),a.onAbort&&n.push(a.onAbort)}catch(a){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ob(r,t={}){return Lr(r,"GET","/v2/passwordPolicy",xr(r,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=6;class ub{constructor(t){var n,a,l,c;const d=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:lb,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(a=t.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(c=t.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,a,l,c,d,g;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,p),this.validatePasswordCharacterOptions(t,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(a=p.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsUppercaseLetter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNumericCharacter)!==null&&d!==void 0?d:!0),p.isValid&&(p.isValid=(g=p.containsNonAlphanumericCharacter)!==null&&g!==void 0?g:!0),p}validatePasswordLengthOptions(t,n){const a=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;a&&(n.meetsMinPasswordLength=t.length>=a),l&&(n.meetsMaxPasswordLength=t.length<=l)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let a;for(let l=0;l<t.length;l++)a=t.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(t,n,a,l,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(t,n,a,l){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=a,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new w_(this),this.idTokenSubscription=new w_(this),this.beforeStateQueue=new ab(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=zi(n)),this._initializationPromise=this.queue(async()=>{var a,l,c;if(!this._deleted&&(this.persistenceManager=await Va.create(this,t),(a=this._resolvePersistenceManagerAvailable)===null||a===void 0||a.call(this),!this._deleted)){if(!((l=this._popupRedirectResolver)===null||l===void 0)&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Rc(this,{idToken:t}),a=await xn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(a)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(In(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(g,g))}):this.directlySetCurrentUser(null)}const a=await this.assertedPersistence.getCurrentUser();let l=a,c=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,g=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(t);(!d||d===g)&&(p!=null&&p.user)&&(l=p.user,c=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(l)}catch(d){l=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return ft(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ic(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=j1()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(In(this.app))return Promise.reject(Bi(this));const n=t?Bn(t):null;return n&&ft(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&ft(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return In(this.app)?Promise.reject(Bi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return In(this.app)?Promise.reject(Bi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await ob(this),n=new ub(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ns("auth","Firebase",t())}onAuthStateChanged(t,n,a){return this.registerStateListener(this.authStateSubscription,t,n,a)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,a){return this.registerStateListener(this.idTokenSubscription,t,n,a)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const a=this.onAuthStateChanged(()=>{a(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(a.tenantId=this.tenantId),await ib(this,a)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const a=await this.getOrInitRedirectPersistenceManager(n);return t===null?a.removeCurrentUser():a.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&zi(t)||this._popupRedirectResolver;ft(n,this,"argument-error"),this.redirectPersistenceManager=await Va.create(this,[zi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,a;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,a,l){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let d=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(ft(g,this,"internal-error"),g.then(()=>{d||c(this.currentUser)}),typeof n=="function"){const p=t.addObserver(n,a,l);return()=>{d=!0,p()}}else{const p=t.addObserver(n);return()=>{d=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ft(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=S0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const a=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());a&&(n["X-Firebase-Client"]=a);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var t;if(In(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&z1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vs(r){return Bn(r)}class w_{constructor(t){this.auth=t,this.observer=null,this.addObserver=bS(n=>this.observer=n)}get next(){return ft(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hb(r){Hc=r}function b0(r){return Hc.loadJS(r)}function fb(){return Hc.recaptchaEnterpriseScript}function db(){return Hc.gapiScript}function mb(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class gb{constructor(){this.enterprise=new pb}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class pb{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const yb="recaptcha-enterprise",w0="NO_RECAPTCHA";class _b{constructor(t){this.type=yb,this.auth=Vs(t)}async verify(t="verify",n=!1){async function a(c){if(!n){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(d,g)=>{X1(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)g(new Error("recaptcha Enterprise site key undefined"));else{const _=new Y1(p);return c.tenantId==null?c._agentRecaptchaConfig=_:c._tenantRecaptchaConfigs[c.tenantId]=_,d(_.siteKey)}}).catch(p=>{g(p)})})}function l(c,d,g){const p=window.grecaptcha;E_(p)?p.enterprise.ready(()=>{p.enterprise.execute(c,{action:t}).then(_=>{d(_)}).catch(()=>{d(w0)})}):g(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new gb().execute("siteKey",{action:"verify"}):new Promise((c,d)=>{a(this.auth).then(g=>{if(!n&&E_(window.grecaptcha))l(g,c,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let p=fb();p.length!==0&&(p+=g),b0(p).then(()=>{l(g,c,d)}).catch(_=>{d(_)})}}).catch(g=>{d(g)})})}}async function R_(r,t,n,a=!1,l=!1){const c=new _b(r);let d;if(l)d=w0;else try{d=await c.verify(n)}catch{d=await c.verify(n,!0)}const g=Object.assign({},t);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in g){const p=g.phoneEnrollmentInfo.phoneNumber,_=g.phoneEnrollmentInfo.recaptchaToken;Object.assign(g,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:_,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in g){const p=g.phoneSignInInfo.recaptchaToken;Object.assign(g,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return g}return a?Object.assign(g,{captchaResp:d}):Object.assign(g,{captchaResponse:d}),Object.assign(g,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(g,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),g}async function Pd(r,t,n,a,l){var c;if(!((c=r._getRecaptchaConfig())===null||c===void 0)&&c.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await R_(r,t,n,n==="getOobCode");return a(r,d)}else return a(r,t).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const g=await R_(r,t,n,n==="getOobCode");return a(r,g)}else return Promise.reject(d)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(r,t){const n=Ms(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),c=n.getOptions();if(Dr(c,t??{}))return l;Un(l,"already-initialized")}return n.initialize({options:t})}function Eb(r,t){const n=(t==null?void 0:t.persistence)||[],a=(Array.isArray(n)?n:[n]).map(zi);t!=null&&t.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(a,t==null?void 0:t.popupRedirectResolver)}function Tb(r,t,n){const a=Vs(r);ft(/^https?:\/\//.test(t),a,"invalid-emulator-scheme");const l=!1,c=R0(t),{host:d,port:g}=Ab(t),p=g===null?"":`:${g}`,_={url:`${c}//${d}${p}/`},A=Object.freeze({host:d,port:g,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!a._canInitEmulator){ft(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),ft(Dr(_,a.config.emulator)&&Dr(A,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=_,a.emulatorConfig=A,a.settings.appVerificationDisabledForTesting=!0,Il(d)?($v(`${c}//${d}${p}`),Zv("Auth",!0)):Sb()}function R0(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function Ab(r){const t=R0(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const a=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(a);if(l){const c=l[1];return{host:c,port:I_(a.substr(c.length+1))}}else{const[c,d]=a.split(":");return{host:c,port:I_(d)}}}function I_(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function Sb(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Ui("not implemented")}_getIdTokenResponse(t){return Ui("not implemented")}_linkToIdToken(t,n){return Ui("not implemented")}_getReauthenticationResolver(t){return Ui("not implemented")}}async function bb(r,t){return Lr(r,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wb(r,t){return Ol(r,"POST","/v1/accounts:signInWithPassword",xr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rb(r,t){return Ol(r,"POST","/v1/accounts:signInWithEmailLink",xr(r,t))}async function Ib(r,t){return Ol(r,"POST","/v1/accounts:signInWithEmailLink",xr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al extends hm{constructor(t,n,a,l=null){super("password",a),this._email=t,this._password=n,this._tenantId=l}static _fromEmailAndPassword(t,n){return new Al(t,n,"password")}static _fromEmailAndCode(t,n,a=null){return new Al(t,n,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pd(t,n,"signInWithPassword",wb);case"emailLink":return Rb(t,{email:this._email,oobCode:this._password});default:Un(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const a={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pd(t,a,"signUpPassword",bb);case"emailLink":return Ib(t,{idToken:n,email:this._email,oobCode:this._password});default:Un(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ka(r,t){return Ol(r,"POST","/v1/accounts:signInWithIdp",xr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb="http://localhost";class Rs extends hm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Rs(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:a,signInMethod:l}=n,c=am(n,["providerId","signInMethod"]);if(!a||!l)return null;const d=new Rs(a,l);return d.idToken=c.idToken||void 0,d.accessToken=c.accessToken||void 0,d.secret=c.secret,d.nonce=c.nonce,d.pendingToken=c.pendingToken||null,d}_getIdTokenResponse(t){const n=this.buildRequest();return ka(t,n)}_linkToIdToken(t,n){const a=this.buildRequest();return a.idToken=n,ka(t,a)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,ka(t,n)}buildRequest(){const t={requestUri:Cb,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Cl(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ob(r){const t=ll(ul(r)).link,n=t?ll(ul(t)).deep_link_id:null,a=ll(ul(r)).deep_link_id;return(a?ll(ul(a)).link:null)||a||n||t||r}class fm{constructor(t){var n,a,l,c,d,g;const p=ll(ul(t)),_=(n=p.apiKey)!==null&&n!==void 0?n:null,A=(a=p.oobCode)!==null&&a!==void 0?a:null,D=Db((l=p.mode)!==null&&l!==void 0?l:null);ft(_&&A&&D,"argument-error"),this.apiKey=_,this.operation=D,this.code=A,this.continueUrl=(c=p.continueUrl)!==null&&c!==void 0?c:null,this.languageCode=(d=p.lang)!==null&&d!==void 0?d:null,this.tenantId=(g=p.tenantId)!==null&&g!==void 0?g:null}static parseLink(t){const n=Ob(t);try{return new fm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){this.providerId=Ka.PROVIDER_ID}static credential(t,n){return Al._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const a=fm.parseLink(n);return ft(a,"argument-error"),Al._fromEmailAndCode(t,a.code,a.tenantId)}}Ka.PROVIDER_ID="password";Ka.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ka.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl extends I0{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Nl{constructor(){super("facebook.com")}static credential(t){return Rs._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Er.credentialFromTaggedObject(t)}static credentialFromError(t){return Er.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Er.credential(t.oauthAccessToken)}catch{return null}}}Er.FACEBOOK_SIGN_IN_METHOD="facebook.com";Er.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends Nl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Rs._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Tr.credentialFromTaggedObject(t)}static credentialFromError(t){return Tr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:a}=t;if(!n&&!a)return null;try{return Tr.credential(n,a)}catch{return null}}}Tr.GOOGLE_SIGN_IN_METHOD="google.com";Tr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends Nl{constructor(){super("github.com")}static credential(t){return Rs._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ar.credentialFromTaggedObject(t)}static credentialFromError(t){return Ar.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ar.credential(t.oauthAccessToken)}catch{return null}}}Ar.GITHUB_SIGN_IN_METHOD="github.com";Ar.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Nl{constructor(){super("twitter.com")}static credential(t,n){return Rs._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Sr.credentialFromTaggedObject(t)}static credentialFromError(t){return Sr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:a}=t;if(!n||!a)return null;try{return Sr.credential(n,a)}catch{return null}}}Sr.TWITTER_SIGN_IN_METHOD="twitter.com";Sr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nb(r,t){return Ol(r,"POST","/v1/accounts:signUp",xr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,a,l=!1){const c=await xn._fromIdTokenResponse(t,a,l),d=C_(a);return new Is({user:c,providerId:d,_tokenResponse:a,operationType:n})}static async _forOperation(t,n,a){await t._updateTokensIfNecessary(a,!0);const l=C_(a);return new Is({user:t,providerId:l,_tokenResponse:a,operationType:n})}}function C_(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends zn{constructor(t,n,a,l){var c;super(n.code,n.message),this.operationType=a,this.user=l,Object.setPrototypeOf(this,Cc.prototype),this.customData={appName:t.name,tenantId:(c=t.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(t,n,a,l){return new Cc(t,n,a,l)}}function C0(r,t,n,a){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Cc._fromErrorAndOperation(r,c,t,a):c})}async function Mb(r,t,n=!1){const a=await Tl(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return Is._forOperation(r,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vb(r,t,n=!1){const{auth:a}=r;if(In(a.app))return Promise.reject(Bi(a));const l="reauthenticate";try{const c=await Tl(r,C0(a,l,t,r),n);ft(c.idToken,a,"internal-error");const d=um(c.idToken);ft(d,a,"internal-error");const{sub:g}=d;return ft(r.uid===g,a,"user-mismatch"),Is._forOperation(r,l,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&Un(a,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D0(r,t,n=!1){if(In(r.app))return Promise.reject(Bi(r));const a="signIn",l=await C0(r,a,t),c=await Is._fromIdTokenResponse(r,a,l);return n||await r._updateCurrentUser(c.user),c}async function kb(r,t){return D0(Vs(r),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O0(r){const t=Vs(r);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Pb(r,t,n){if(In(r.app))return Promise.reject(Bi(r));const a=Vs(r),d=await Pd(a,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Nb).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&O0(r),p}),g=await Is._fromIdTokenResponse(a,"signIn",d);return await a._updateCurrentUser(g.user),g}function xb(r,t,n){return In(r.app)?Promise.reject(Bi(r)):kb(Bn(r),Ka.credential(t,n)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&O0(r),a})}function Lb(r,t,n,a){return Bn(r).onIdTokenChanged(t,n,a)}function Ub(r,t,n){return Bn(r).beforeAuthStateChanged(t,n)}function zb(r,t,n,a){return Bn(r).onAuthStateChanged(t,n,a)}const Dc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Dc,"1"),this.storage.removeItem(Dc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb=1e3,qb=10;class M0 extends N0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=A0(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const a=this.storage.getItem(n),l=this.localCache[n];a!==l&&t(n,l,a)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((d,g,p)=>{this.notifyListeners(d,p)});return}const a=t.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(a);!n&&this.localCache[a]===d||this.notifyListeners(a,d)},c=this.storage.getItem(a);sb()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(l,qb):l()}notifyListeners(t,n){this.localCache[t]=n;const a=this.listeners[t];if(a)for(const l of Array.from(a))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:a}),!0)})},Bb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}M0.type="LOCAL";const jb=M0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0 extends N0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}V0.type="SESSION";const k0=V0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(l=>l.isListeningto(t));if(n)return n;const a=new Gc(t);return this.receivers.push(a),a}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:a,eventType:l,data:c}=n.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:a,eventType:l});const g=Array.from(d).map(async _=>_(n.origin,c)),p=await Hb(g);n.ports[0].postMessage({status:"done",eventId:a,eventType:l,response:p})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(r="",t=10){let n="";for(let a=0;a<t;a++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,a=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,d;return new Promise((g,p)=>{const _=dm("",20);l.port1.start();const A=setTimeout(()=>{p(new Error("unsupported_event"))},a);d={messageChannel:l,onMessage(D){const M=D;if(M.data.eventId===_)switch(M.data.status){case"ack":clearTimeout(A),c=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),g(M.data.response);break;default:clearTimeout(A),clearTimeout(c),p(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:t,eventId:_,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(){return window}function Fb(r){oi().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(){return typeof oi().WorkerGlobalScope<"u"&&typeof oi().importScripts=="function"}async function Kb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Qb(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function Yb(){return P0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0="firebaseLocalStorageDb",Xb=1,Oc="firebaseLocalStorage",L0="fbase_key";class Ml{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fc(r,t){return r.transaction([Oc],t?"readwrite":"readonly").objectStore(Oc)}function $b(){const r=indexedDB.deleteDatabase(x0);return new Ml(r).toPromise()}function xd(){const r=indexedDB.open(x0,Xb);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const a=r.result;try{a.createObjectStore(Oc,{keyPath:L0})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const a=r.result;a.objectStoreNames.contains(Oc)?t(a):(a.close(),await $b(),t(await xd()))})})}async function D_(r,t,n){const a=Fc(r,!0).put({[L0]:t,value:n});return new Ml(a).toPromise()}async function Zb(r,t){const n=Fc(r,!1).get(t),a=await new Ml(n).toPromise();return a===void 0?null:a.value}function O_(r,t){const n=Fc(r,!0).delete(t);return new Ml(n).toPromise()}const Jb=800,Wb=3;class U0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xd(),this.db)}async _withRetries(t){let n=0;for(;;)try{const a=await this._openDb();return await t(a)}catch(a){if(n++>Wb)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return P0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gc._getInstance(Yb()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Kb(),!this.activeServiceWorker)return;this.sender=new Gb(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((t=a[0])===null||t===void 0)&&t.fulfilled&&!((n=a[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Qb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await xd();return await D_(t,Dc,"1"),await O_(t,Dc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(a=>D_(a,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(a=>Zb(a,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>O_(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(l=>{const c=Fc(l,!1).getAll();return new Ml(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],a=new Set;if(t.length!==0)for(const{fbase_key:l,value:c}of t)a.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!a.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(t,n){this.localCache[t]=n;const a=this.listeners[t];if(a)for(const l of Array.from(a))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}U0.type="LOCAL";const tw=U0;new Dl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(r,t){return t?zi(t):(ft(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm extends hm{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ka(t,this._buildIdpRequest())}_linkToIdToken(t,n){return ka(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return ka(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function nw(r){return D0(r.auth,new mm(r),r.bypassAuthState)}function iw(r){const{auth:t,user:n}=r;return ft(n,t,"internal-error"),Vb(n,new mm(r),r.bypassAuthState)}async function rw(r){const{auth:t,user:n}=r;return ft(n,t,"internal-error"),Mb(n,new mm(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(t,n,a,l,c=!1){this.auth=t,this.resolver=a,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:a,postBody:l,tenantId:c,error:d,type:g}=t;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:n,sessionId:a,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(p))}catch(_){this.reject(_)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return nw;case"linkViaPopup":case"linkViaRedirect":return rw;case"reauthViaPopup":case"reauthViaRedirect":return iw;default:Un(this.auth,"internal-error")}}resolve(t){ji(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ji(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=new Dl(2e3,1e4);class Na extends z0{constructor(t,n,a,l,c){super(t,n,l,c),this.provider=a,this.authWindow=null,this.pollId=null,Na.currentPopupAction&&Na.currentPopupAction.cancel(),Na.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ft(t,this.auth,"internal-error"),t}async onExecution(){ji(this.filter.length===1,"Popup operations only handle one event");const t=dm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ai(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ai(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Na.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,a;if(!((a=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ai(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,sw.get())};t()}}Na.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw="pendingRedirect",pc=new Map;class ow extends z0{constructor(t,n,a=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,a),this.eventId=null}async execute(){let t=pc.get(this.auth._key());if(!t){try{const a=await lw(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(a)}catch(n){t=()=>Promise.reject(n)}pc.set(this.auth._key(),t)}return this.bypassAuthState||pc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lw(r,t){const n=hw(t),a=cw(r);if(!await a._isAvailable())return!1;const l=await a._get(n)==="true";return await a._remove(n),l}function uw(r,t){pc.set(r._key(),t)}function cw(r){return zi(r._redirectPersistence)}function hw(r){return gc(aw,r.config.apiKey,r.name)}async function fw(r,t,n=!1){if(In(r.app))return Promise.reject(Bi(r));const a=Vs(r),l=ew(a,t),d=await new ow(a,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await a._persistUserIfCurrent(d.user),await a._setRedirectUser(null,t)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=10*60*1e3;class mw{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(t,a)&&(n=!0,this.sendToConsumer(t,a),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!gw(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var a;if(t.error&&!B0(t)){const l=((a=t.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";n.onError(ai(this.auth,l))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const a=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&a}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=dw&&this.cachedEventUids.clear(),this.cachedEventUids.has(N_(t))}saveEventToCache(t){this.cachedEventUids.add(N_(t)),this.lastProcessedEventTime=Date.now()}}function N_(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function B0({type:r,error:t}){return r==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function gw(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return B0(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pw(r,t={}){return Lr(r,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_w=/^https?/;async function vw(r){if(r.config.emulator)return;const{authorizedDomains:t}=await pw(r);for(const n of t)try{if(Ew(n))return}catch{}Un(r,"unauthorized-domain")}function Ew(r){const t=Vd(),{protocol:n,hostname:a}=new URL(t);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&a===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===a}if(!_w.test(n))return!1;if(yw.test(r))return a===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=new Dl(3e4,6e4);function M_(){const r=oi().___jsl;if(r!=null&&r.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function Aw(r){return new Promise((t,n)=>{var a,l,c;function d(){M_(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{M_(),n(ai(r,"network-request-failed"))},timeout:Tw.get()})}if(!((l=(a=oi().gapi)===null||a===void 0?void 0:a.iframes)===null||l===void 0)&&l.Iframe)t(gapi.iframes.getContext());else if(!((c=oi().gapi)===null||c===void 0)&&c.load)d();else{const g=mb("iframefcb");return oi()[g]=()=>{gapi.load?d():n(ai(r,"network-request-failed"))},b0(`${db()}?onload=${g}`).catch(p=>n(p))}}).catch(t=>{throw yc=null,t})}let yc=null;function Sw(r){return yc=yc||Aw(r),yc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=new Dl(5e3,15e3),ww="__/auth/iframe",Rw="emulator/auth/iframe",Iw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dw(r){const t=r.config;ft(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?lm(t,Rw):`https://${r.config.authDomain}/${ww}`,a={apiKey:t.apiKey,appName:r.name,v:Fa},l=Cw.get(r.config.apiHost);l&&(a.eid=l);const c=r._getFrameworks();return c.length&&(a.fw=c.join(",")),`${n}?${Cl(a).slice(1)}`}async function Ow(r){const t=await Sw(r),n=oi().gapi;return ft(n,r,"internal-error"),t.open({where:document.body,url:Dw(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Iw,dontclear:!0},a=>new Promise(async(l,c)=>{await a.restyle({setHideOnLeave:!1});const d=ai(r,"network-request-failed"),g=oi().setTimeout(()=>{c(d)},bw.get());function p(){oi().clearTimeout(g),l(a)}a.ping(p).then(p,()=>{c(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mw=500,Vw=600,kw="_blank",Pw="http://localhost";class V_{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xw(r,t,n,a=Mw,l=Vw){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-a)/2,0).toString();let g="";const p=Object.assign(Object.assign({},Nw),{width:a.toString(),height:l.toString(),top:c,left:d}),_=Fe().toLowerCase();n&&(g=y0(_)?kw:n),g0(_)&&(t=t||Pw,p.scrollbars="yes");const A=Object.entries(p).reduce((M,[q,X])=>`${M}${q}=${X},`,"");if(rb(_)&&g!=="_self")return Lw(t||"",g),new V_(null);const D=window.open(t||"",g,A);ft(D,r,"popup-blocked");try{D.focus()}catch{}return new V_(D)}function Lw(r,t){const n=document.createElement("a");n.href=r,n.target=t;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw="__/auth/handler",zw="emulator/auth/handler",Bw=encodeURIComponent("fac");async function k_(r,t,n,a,l,c){ft(r.config.authDomain,r,"auth-domain-config-required"),ft(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:a,v:Fa,eventId:l};if(t instanceof I0){t.setDefaultLanguage(r.languageCode),d.providerId=t.providerId||"",SS(t.getCustomParameters())||(d.customParameters=JSON.stringify(t.getCustomParameters()));for(const[A,D]of Object.entries({}))d[A]=D}if(t instanceof Nl){const A=t.getScopes().filter(D=>D!=="");A.length>0&&(d.scopes=A.join(","))}r.tenantId&&(d.tid=r.tenantId);const g=d;for(const A of Object.keys(g))g[A]===void 0&&delete g[A];const p=await r._getAppCheckToken(),_=p?`#${Bw}=${encodeURIComponent(p)}`:"";return`${qw(r)}?${Cl(g).slice(1)}${_}`}function qw({config:r}){return r.emulator?lm(r,zw):`https://${r.authDomain}/${Uw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="webStorageSupport";class jw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=k0,this._completeRedirectFn=fw,this._overrideRedirectResult=uw}async _openPopup(t,n,a,l){var c;ji((c=this.eventManagers[t._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const d=await k_(t,n,a,Vd(),l);return xw(t,d,dm())}async _openRedirect(t,n,a,l){await this._originValidation(t);const c=await k_(t,n,a,Vd(),l);return Fb(c),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:l,promise:c}=this.eventManagers[n];return l?Promise.resolve(l):(ji(c,"If manager is not set, promise should be"),c)}const a=this.initAndGetManager(t);return this.eventManagers[n]={promise:a},a.catch(()=>{delete this.eventManagers[n]}),a}async initAndGetManager(t){const n=await Ow(t),a=new mw(t);return n.register("authEvent",l=>(ft(l==null?void 0:l.authEvent,t,"invalid-auth-event"),{status:a.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:a},this.iframes[t._key()]=n,a}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(vd,{type:vd},l=>{var c;const d=(c=l==null?void 0:l[0])===null||c===void 0?void 0:c[vd];d!==void 0&&n(!!d),Un(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vw(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return A0()||p0()||cm()}}const Hw=jw;var P_="@firebase/auth",x_="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(a=>{t((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ft(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Kw(r){ui(new Ln("auth",(t,{options:n})=>{const a=t.getProvider("app").getImmediate(),l=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:d,authDomain:g}=a.options;ft(d&&!d.includes(":"),"invalid-api-key",{appName:a.name});const p={apiKey:d,authDomain:g,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:S0(r)},_=new cb(a,l,c,p);return Eb(_,n),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,a)=>{t.getProvider("auth-internal").initialize()})),ui(new Ln("auth-internal",t=>{const n=Vs(t.getProvider("auth").getImmediate());return(a=>new Gw(a))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cn(P_,x_,Fw(r)),Cn(P_,x_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=5*60,Yw=Xv("authIdTokenMaxAge")||Qw;let L_=null;const Xw=r=>async t=>{const n=t&&await t.getIdTokenResult(),a=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(a&&a>Yw)return;const l=n==null?void 0:n.token;L_!==l&&(L_=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function q0(r=sm()){const t=Ms(r,"auth");if(t.isInitialized())return t.getImmediate();const n=vb(r,{popupRedirectResolver:Hw,persistence:[tw,jb,k0]}),a=Xv("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(a,location.origin);if(location.origin===c.origin){const d=Xw(c.toString());Ub(n,d,()=>d(n.currentUser)),Lb(n,g=>d(g))}}const l=Qv("auth");return l&&Tb(n,`http://${l}`),n}function $w(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}hb({loadJS(r){return new Promise((t,n)=>{const a=document.createElement("script");a.setAttribute("src",r),a.onload=t,a.onerror=l=>{const c=ai("internal-error");c.customData=l,n(c)},a.type="text/javascript",a.charset="UTF-8",$w().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Kw("Browser");function Zw(){const[r,t]=Pn.useState(""),[n,a]=Pn.useState(""),[l,c]=Pn.useState(null),d=q0(),g=async _=>{_.preventDefault(),c(null);try{await xb(d,r,n),alert("Kirjautuminen onnistui!")}catch(A){c(A.message)}},p=async _=>{_.preventDefault(),c(null);try{await Pb(d,r,n),alert("Käyttäjä luotu!")}catch(A){c(A.message)}};return Et.jsxs("div",{style:{maxWidth:400,margin:"auto"},children:[Et.jsx("h2",{children:"Kirjaudu sisään"}),Et.jsxs("form",{children:[Et.jsx("input",{type:"email",placeholder:"Sähköposti",value:r,onChange:_=>t(_.target.value),required:!0,style:{width:"100%",padding:"8px",marginBottom:"8px"}}),Et.jsx("input",{type:"password",placeholder:"Salasana",value:n,onChange:_=>a(_.target.value),required:!0,style:{width:"100%",padding:"8px",marginBottom:"8px"}}),l&&Et.jsx("p",{style:{color:"red"},children:l}),Et.jsx("button",{onClick:g,style:{padding:"8px",width:"100%",marginBottom:"8px"},children:"Kirjaudu sisään"}),Et.jsx("button",{onClick:p,style:{padding:"8px",width:"100%"},children:"Rekisteröidy"})]})]})}var U_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cr,j0;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(N,S){function w(){}w.prototype=S.prototype,N.D=S.prototype,N.prototype=new w,N.prototype.constructor=N,N.C=function(O,V,P){for(var R=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)R[Ne-2]=arguments[Ne];return S.prototype[V].apply(O,R)}}function n(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(a,n),a.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(N,S,w){w||(w=0);var O=Array(16);if(typeof S=="string")for(var V=0;16>V;++V)O[V]=S.charCodeAt(w++)|S.charCodeAt(w++)<<8|S.charCodeAt(w++)<<16|S.charCodeAt(w++)<<24;else for(V=0;16>V;++V)O[V]=S[w++]|S[w++]<<8|S[w++]<<16|S[w++]<<24;S=N.g[0],w=N.g[1],V=N.g[2];var P=N.g[3],R=S+(P^w&(V^P))+O[0]+3614090360&4294967295;S=w+(R<<7&4294967295|R>>>25),R=P+(V^S&(w^V))+O[1]+3905402710&4294967295,P=S+(R<<12&4294967295|R>>>20),R=V+(w^P&(S^w))+O[2]+606105819&4294967295,V=P+(R<<17&4294967295|R>>>15),R=w+(S^V&(P^S))+O[3]+3250441966&4294967295,w=V+(R<<22&4294967295|R>>>10),R=S+(P^w&(V^P))+O[4]+4118548399&4294967295,S=w+(R<<7&4294967295|R>>>25),R=P+(V^S&(w^V))+O[5]+1200080426&4294967295,P=S+(R<<12&4294967295|R>>>20),R=V+(w^P&(S^w))+O[6]+2821735955&4294967295,V=P+(R<<17&4294967295|R>>>15),R=w+(S^V&(P^S))+O[7]+4249261313&4294967295,w=V+(R<<22&4294967295|R>>>10),R=S+(P^w&(V^P))+O[8]+1770035416&4294967295,S=w+(R<<7&4294967295|R>>>25),R=P+(V^S&(w^V))+O[9]+2336552879&4294967295,P=S+(R<<12&4294967295|R>>>20),R=V+(w^P&(S^w))+O[10]+4294925233&4294967295,V=P+(R<<17&4294967295|R>>>15),R=w+(S^V&(P^S))+O[11]+2304563134&4294967295,w=V+(R<<22&4294967295|R>>>10),R=S+(P^w&(V^P))+O[12]+1804603682&4294967295,S=w+(R<<7&4294967295|R>>>25),R=P+(V^S&(w^V))+O[13]+4254626195&4294967295,P=S+(R<<12&4294967295|R>>>20),R=V+(w^P&(S^w))+O[14]+2792965006&4294967295,V=P+(R<<17&4294967295|R>>>15),R=w+(S^V&(P^S))+O[15]+1236535329&4294967295,w=V+(R<<22&4294967295|R>>>10),R=S+(V^P&(w^V))+O[1]+4129170786&4294967295,S=w+(R<<5&4294967295|R>>>27),R=P+(w^V&(S^w))+O[6]+3225465664&4294967295,P=S+(R<<9&4294967295|R>>>23),R=V+(S^w&(P^S))+O[11]+643717713&4294967295,V=P+(R<<14&4294967295|R>>>18),R=w+(P^S&(V^P))+O[0]+3921069994&4294967295,w=V+(R<<20&4294967295|R>>>12),R=S+(V^P&(w^V))+O[5]+3593408605&4294967295,S=w+(R<<5&4294967295|R>>>27),R=P+(w^V&(S^w))+O[10]+38016083&4294967295,P=S+(R<<9&4294967295|R>>>23),R=V+(S^w&(P^S))+O[15]+3634488961&4294967295,V=P+(R<<14&4294967295|R>>>18),R=w+(P^S&(V^P))+O[4]+3889429448&4294967295,w=V+(R<<20&4294967295|R>>>12),R=S+(V^P&(w^V))+O[9]+568446438&4294967295,S=w+(R<<5&4294967295|R>>>27),R=P+(w^V&(S^w))+O[14]+3275163606&4294967295,P=S+(R<<9&4294967295|R>>>23),R=V+(S^w&(P^S))+O[3]+4107603335&4294967295,V=P+(R<<14&4294967295|R>>>18),R=w+(P^S&(V^P))+O[8]+1163531501&4294967295,w=V+(R<<20&4294967295|R>>>12),R=S+(V^P&(w^V))+O[13]+2850285829&4294967295,S=w+(R<<5&4294967295|R>>>27),R=P+(w^V&(S^w))+O[2]+4243563512&4294967295,P=S+(R<<9&4294967295|R>>>23),R=V+(S^w&(P^S))+O[7]+1735328473&4294967295,V=P+(R<<14&4294967295|R>>>18),R=w+(P^S&(V^P))+O[12]+2368359562&4294967295,w=V+(R<<20&4294967295|R>>>12),R=S+(w^V^P)+O[5]+4294588738&4294967295,S=w+(R<<4&4294967295|R>>>28),R=P+(S^w^V)+O[8]+2272392833&4294967295,P=S+(R<<11&4294967295|R>>>21),R=V+(P^S^w)+O[11]+1839030562&4294967295,V=P+(R<<16&4294967295|R>>>16),R=w+(V^P^S)+O[14]+4259657740&4294967295,w=V+(R<<23&4294967295|R>>>9),R=S+(w^V^P)+O[1]+2763975236&4294967295,S=w+(R<<4&4294967295|R>>>28),R=P+(S^w^V)+O[4]+1272893353&4294967295,P=S+(R<<11&4294967295|R>>>21),R=V+(P^S^w)+O[7]+4139469664&4294967295,V=P+(R<<16&4294967295|R>>>16),R=w+(V^P^S)+O[10]+3200236656&4294967295,w=V+(R<<23&4294967295|R>>>9),R=S+(w^V^P)+O[13]+681279174&4294967295,S=w+(R<<4&4294967295|R>>>28),R=P+(S^w^V)+O[0]+3936430074&4294967295,P=S+(R<<11&4294967295|R>>>21),R=V+(P^S^w)+O[3]+3572445317&4294967295,V=P+(R<<16&4294967295|R>>>16),R=w+(V^P^S)+O[6]+76029189&4294967295,w=V+(R<<23&4294967295|R>>>9),R=S+(w^V^P)+O[9]+3654602809&4294967295,S=w+(R<<4&4294967295|R>>>28),R=P+(S^w^V)+O[12]+3873151461&4294967295,P=S+(R<<11&4294967295|R>>>21),R=V+(P^S^w)+O[15]+530742520&4294967295,V=P+(R<<16&4294967295|R>>>16),R=w+(V^P^S)+O[2]+3299628645&4294967295,w=V+(R<<23&4294967295|R>>>9),R=S+(V^(w|~P))+O[0]+4096336452&4294967295,S=w+(R<<6&4294967295|R>>>26),R=P+(w^(S|~V))+O[7]+1126891415&4294967295,P=S+(R<<10&4294967295|R>>>22),R=V+(S^(P|~w))+O[14]+2878612391&4294967295,V=P+(R<<15&4294967295|R>>>17),R=w+(P^(V|~S))+O[5]+4237533241&4294967295,w=V+(R<<21&4294967295|R>>>11),R=S+(V^(w|~P))+O[12]+1700485571&4294967295,S=w+(R<<6&4294967295|R>>>26),R=P+(w^(S|~V))+O[3]+2399980690&4294967295,P=S+(R<<10&4294967295|R>>>22),R=V+(S^(P|~w))+O[10]+4293915773&4294967295,V=P+(R<<15&4294967295|R>>>17),R=w+(P^(V|~S))+O[1]+2240044497&4294967295,w=V+(R<<21&4294967295|R>>>11),R=S+(V^(w|~P))+O[8]+1873313359&4294967295,S=w+(R<<6&4294967295|R>>>26),R=P+(w^(S|~V))+O[15]+4264355552&4294967295,P=S+(R<<10&4294967295|R>>>22),R=V+(S^(P|~w))+O[6]+2734768916&4294967295,V=P+(R<<15&4294967295|R>>>17),R=w+(P^(V|~S))+O[13]+1309151649&4294967295,w=V+(R<<21&4294967295|R>>>11),R=S+(V^(w|~P))+O[4]+4149444226&4294967295,S=w+(R<<6&4294967295|R>>>26),R=P+(w^(S|~V))+O[11]+3174756917&4294967295,P=S+(R<<10&4294967295|R>>>22),R=V+(S^(P|~w))+O[2]+718787259&4294967295,V=P+(R<<15&4294967295|R>>>17),R=w+(P^(V|~S))+O[9]+3951481745&4294967295,N.g[0]=N.g[0]+S&4294967295,N.g[1]=N.g[1]+(V+(R<<21&4294967295|R>>>11))&4294967295,N.g[2]=N.g[2]+V&4294967295,N.g[3]=N.g[3]+P&4294967295}a.prototype.u=function(N,S){S===void 0&&(S=N.length);for(var w=S-this.blockSize,O=this.B,V=this.h,P=0;P<S;){if(V==0)for(;P<=w;)l(this,N,P),P+=this.blockSize;if(typeof N=="string"){for(;P<S;)if(O[V++]=N.charCodeAt(P++),V==this.blockSize){l(this,O),V=0;break}}else for(;P<S;)if(O[V++]=N[P++],V==this.blockSize){l(this,O),V=0;break}}this.h=V,this.o+=S},a.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var S=1;S<N.length-8;++S)N[S]=0;var w=8*this.o;for(S=N.length-8;S<N.length;++S)N[S]=w&255,w/=256;for(this.u(N),N=Array(16),S=w=0;4>S;++S)for(var O=0;32>O;O+=8)N[w++]=this.g[S]>>>O&255;return N};function c(N,S){var w=g;return Object.prototype.hasOwnProperty.call(w,N)?w[N]:w[N]=S(N)}function d(N,S){this.h=S;for(var w=[],O=!0,V=N.length-1;0<=V;V--){var P=N[V]|0;O&&P==S||(w[V]=P,O=!1)}this.g=w}var g={};function p(N){return-128<=N&&128>N?c(N,function(S){return new d([S|0],0>S?-1:0)}):new d([N|0],0>N?-1:0)}function _(N){if(isNaN(N)||!isFinite(N))return D;if(0>N)return J(_(-N));for(var S=[],w=1,O=0;N>=w;O++)S[O]=N/w|0,w*=4294967296;return new d(S,0)}function A(N,S){if(N.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(N.charAt(0)=="-")return J(A(N.substring(1),S));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=_(Math.pow(S,8)),O=D,V=0;V<N.length;V+=8){var P=Math.min(8,N.length-V),R=parseInt(N.substring(V,V+P),S);8>P?(P=_(Math.pow(S,P)),O=O.j(P).add(_(R))):(O=O.j(w),O=O.add(_(R)))}return O}var D=p(0),M=p(1),q=p(16777216);r=d.prototype,r.m=function(){if(it(this))return-J(this).m();for(var N=0,S=1,w=0;w<this.g.length;w++){var O=this.i(w);N+=(0<=O?O:4294967296+O)*S,S*=4294967296}return N},r.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(X(this))return"0";if(it(this))return"-"+J(this).toString(N);for(var S=_(Math.pow(N,6)),w=this,O="";;){var V=Dt(w,S).g;w=Nt(w,V.j(S));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(N);if(w=V,X(w))return P+O;for(;6>P.length;)P="0"+P;O=P+O}},r.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function X(N){if(N.h!=0)return!1;for(var S=0;S<N.g.length;S++)if(N.g[S]!=0)return!1;return!0}function it(N){return N.h==-1}r.l=function(N){return N=Nt(this,N),it(N)?-1:X(N)?0:1};function J(N){for(var S=N.g.length,w=[],O=0;O<S;O++)w[O]=~N.g[O];return new d(w,~N.h).add(M)}r.abs=function(){return it(this)?J(this):this},r.add=function(N){for(var S=Math.max(this.g.length,N.g.length),w=[],O=0,V=0;V<=S;V++){var P=O+(this.i(V)&65535)+(N.i(V)&65535),R=(P>>>16)+(this.i(V)>>>16)+(N.i(V)>>>16);O=R>>>16,P&=65535,R&=65535,w[V]=R<<16|P}return new d(w,w[w.length-1]&-2147483648?-1:0)};function Nt(N,S){return N.add(J(S))}r.j=function(N){if(X(this)||X(N))return D;if(it(this))return it(N)?J(this).j(J(N)):J(J(this).j(N));if(it(N))return J(this.j(J(N)));if(0>this.l(q)&&0>N.l(q))return _(this.m()*N.m());for(var S=this.g.length+N.g.length,w=[],O=0;O<2*S;O++)w[O]=0;for(O=0;O<this.g.length;O++)for(var V=0;V<N.g.length;V++){var P=this.i(O)>>>16,R=this.i(O)&65535,Ne=N.i(V)>>>16,ne=N.i(V)&65535;w[2*O+2*V]+=R*ne,yt(w,2*O+2*V),w[2*O+2*V+1]+=P*ne,yt(w,2*O+2*V+1),w[2*O+2*V+1]+=R*Ne,yt(w,2*O+2*V+1),w[2*O+2*V+2]+=P*Ne,yt(w,2*O+2*V+2)}for(O=0;O<S;O++)w[O]=w[2*O+1]<<16|w[2*O];for(O=S;O<2*S;O++)w[O]=0;return new d(w,0)};function yt(N,S){for(;(N[S]&65535)!=N[S];)N[S+1]+=N[S]>>>16,N[S]&=65535,S++}function ht(N,S){this.g=N,this.h=S}function Dt(N,S){if(X(S))throw Error("division by zero");if(X(N))return new ht(D,D);if(it(N))return S=Dt(J(N),S),new ht(J(S.g),J(S.h));if(it(S))return S=Dt(N,J(S)),new ht(J(S.g),S.h);if(30<N.g.length){if(it(N)||it(S))throw Error("slowDivide_ only works with positive integers.");for(var w=M,O=S;0>=O.l(N);)w=pt(w),O=pt(O);var V=Ot(w,1),P=Ot(O,1);for(O=Ot(O,2),w=Ot(w,2);!X(O);){var R=P.add(O);0>=R.l(N)&&(V=V.add(w),P=R),O=Ot(O,1),w=Ot(w,1)}return S=Nt(N,V.j(S)),new ht(V,S)}for(V=D;0<=N.l(S);){for(w=Math.max(1,Math.floor(N.m()/S.m())),O=Math.ceil(Math.log(w)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),P=_(w),R=P.j(S);it(R)||0<R.l(N);)w-=O,P=_(w),R=P.j(S);X(P)&&(P=M),V=V.add(P),N=Nt(N,R)}return new ht(V,N)}r.A=function(N){return Dt(this,N).h},r.and=function(N){for(var S=Math.max(this.g.length,N.g.length),w=[],O=0;O<S;O++)w[O]=this.i(O)&N.i(O);return new d(w,this.h&N.h)},r.or=function(N){for(var S=Math.max(this.g.length,N.g.length),w=[],O=0;O<S;O++)w[O]=this.i(O)|N.i(O);return new d(w,this.h|N.h)},r.xor=function(N){for(var S=Math.max(this.g.length,N.g.length),w=[],O=0;O<S;O++)w[O]=this.i(O)^N.i(O);return new d(w,this.h^N.h)};function pt(N){for(var S=N.g.length+1,w=[],O=0;O<S;O++)w[O]=N.i(O)<<1|N.i(O-1)>>>31;return new d(w,N.h)}function Ot(N,S){var w=S>>5;S%=32;for(var O=N.g.length-w,V=[],P=0;P<O;P++)V[P]=0<S?N.i(P+w)>>>S|N.i(P+w+1)<<32-S:N.i(P+w);return new d(V,N.h)}a.prototype.digest=a.prototype.v,a.prototype.reset=a.prototype.s,a.prototype.update=a.prototype.u,j0=a,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=_,d.fromString=A,Cr=d}).apply(typeof U_<"u"?U_:typeof self<"u"?self:typeof window<"u"?window:{});var lc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var H0,cl,G0,_c,Ld,F0,K0,Q0;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,y){return u==Array.prototype||u==Object.prototype||(u[m]=y.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof lc=="object"&&lc];for(var m=0;m<u.length;++m){var y=u[m];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var a=n(this);function l(u,m){if(m)t:{var y=a;u=u.split(".");for(var T=0;T<u.length-1;T++){var x=u[T];if(!(x in y))break t;y=y[x]}u=u[u.length-1],T=y[u],m=m(T),m!=T&&m!=null&&t(y,u,{configurable:!0,writable:!0,value:m})}}function c(u,m){u instanceof String&&(u+="");var y=0,T=!1,x={next:function(){if(!T&&y<u.length){var j=y++;return{value:m(j,u[j]),done:!1}}return T=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}l("Array.prototype.values",function(u){return u||function(){return c(this,function(m,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},g=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function _(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function A(u,m,y){return u.call.apply(u.bind,arguments)}function D(u,m,y){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,T),u.apply(m,x)}}return function(){return u.apply(m,arguments)}}function M(u,m,y){return M=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:D,M.apply(null,arguments)}function q(u,m){var y=Array.prototype.slice.call(arguments,1);return function(){var T=y.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function X(u,m){function y(){}y.prototype=m.prototype,u.aa=m.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(T,x,j){for(var Z=Array(arguments.length-2),Mt=2;Mt<arguments.length;Mt++)Z[Mt-2]=arguments[Mt];return m.prototype[x].apply(T,Z)}}function it(u){const m=u.length;if(0<m){const y=Array(m);for(let T=0;T<m;T++)y[T]=u[T];return y}return[]}function J(u,m){for(let y=1;y<arguments.length;y++){const T=arguments[y];if(p(T)){const x=u.length||0,j=T.length||0;u.length=x+j;for(let Z=0;Z<j;Z++)u[x+Z]=T[Z]}else u.push(T)}}class Nt{constructor(m,y){this.i=m,this.j=y,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function yt(u){return/^[\s\xa0]*$/.test(u)}function ht(){var u=g.navigator;return u&&(u=u.userAgent)?u:""}function Dt(u){return Dt[" "](u),u}Dt[" "]=function(){};var pt=ht().indexOf("Gecko")!=-1&&!(ht().toLowerCase().indexOf("webkit")!=-1&&ht().indexOf("Edge")==-1)&&!(ht().indexOf("Trident")!=-1||ht().indexOf("MSIE")!=-1)&&ht().indexOf("Edge")==-1;function Ot(u,m,y){for(const T in u)m.call(y,u[T],T,u)}function N(u,m){for(const y in u)m.call(void 0,u[y],y,u)}function S(u){const m={};for(const y in u)m[y]=u[y];return m}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(u,m){let y,T;for(let x=1;x<arguments.length;x++){T=arguments[x];for(y in T)u[y]=T[y];for(let j=0;j<w.length;j++)y=w[j],Object.prototype.hasOwnProperty.call(T,y)&&(u[y]=T[y])}}function V(u){var m=1;u=u.split(":");const y=[];for(;0<m&&u.length;)y.push(u.shift()),m--;return u.length&&y.push(u.join(":")),y}function P(u){g.setTimeout(()=>{throw u},0)}function R(){var u=zt;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Ne{constructor(){this.h=this.g=null}add(m,y){const T=ne.get();T.set(m,y),this.h?this.h.next=T:this.g=T,this.h=T}}var ne=new Nt(()=>new H,u=>u.reset());class H{constructor(){this.next=this.g=this.h=null}set(m,y){this.h=m,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let W,at=!1,zt=new Ne,I=()=>{const u=g.Promise.resolve(void 0);W=()=>{u.then(Y)}};var Y=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(y){P(y)}var m=ne;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}at=!1};function tt(){this.s=this.s,this.C=this.C}tt.prototype.s=!1,tt.prototype.ma=function(){this.s||(this.s=!0,this.N())},tt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}$.prototype.h=function(){this.defaultPrevented=!0};var ot=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};g.addEventListener("test",y,m),g.removeEventListener("test",y,m)}catch{}return u}();function St(u,m){if($.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(pt){t:{try{Dt(m.nodeName);var x=!0;break t}catch{}x=!1}x||(m=null)}}else y=="mouseover"?m=u.fromElement:y=="mouseout"&&(m=u.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:gt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&St.aa.h.call(this)}}X(St,$);var gt={2:"touch",3:"pen",4:"mouse"};St.prototype.h=function(){St.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var be="closure_listenable_"+(1e6*Math.random()|0),$t=0;function qn(u,m,y,T,x){this.listener=u,this.proxy=null,this.src=m,this.type=y,this.capture=!!T,this.ha=x,this.key=++$t,this.da=this.fa=!1}function Gi(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function fi(u){this.src=u,this.g={},this.h=0}fi.prototype.add=function(u,m,y,T,x){var j=u.toString();u=this.g[j],u||(u=this.g[j]=[],this.h++);var Z=zr(u,m,T,x);return-1<Z?(m=u[Z],y||(m.fa=!1)):(m=new qn(m,this.src,j,!!T,x),m.fa=y,u.push(m)),m};function Ur(u,m){var y=m.type;if(y in u.g){var T=u.g[y],x=Array.prototype.indexOf.call(T,m,void 0),j;(j=0<=x)&&Array.prototype.splice.call(T,x,1),j&&(Gi(m),u.g[y].length==0&&(delete u.g[y],u.h--))}}function zr(u,m,y,T){for(var x=0;x<u.length;++x){var j=u[x];if(!j.da&&j.listener==m&&j.capture==!!y&&j.ha==T)return x}return-1}var Br="closure_lm_"+(1e6*Math.random()|0),Za={};function Ll(u,m,y,T,x){if(Array.isArray(m)){for(var j=0;j<m.length;j++)Ll(u,m[j],y,T,x);return null}return y=Ul(y),u&&u[be]?u.K(m,y,_(T)?!!T.capture:!1,x):mn(u,m,y,!1,T,x)}function mn(u,m,y,T,x,j){if(!m)throw Error("Invalid event type");var Z=_(x)?!!x.capture:!!x,Mt=xs(u);if(Mt||(u[Br]=Mt=new fi(u)),y=Mt.add(m,y,T,Z,j),y.proxy)return y;if(T=ah(),y.proxy=T,T.src=u,T.listener=y,u.addEventListener)ot||(x=Z),x===void 0&&(x=!1),u.addEventListener(m.toString(),T,x);else if(u.attachEvent)u.attachEvent(qr(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return y}function ah(){function u(y){return m.call(u.src,u.listener,y)}const m=oh;return u}function Ja(u,m,y,T,x){if(Array.isArray(m))for(var j=0;j<m.length;j++)Ja(u,m[j],y,T,x);else T=_(T)?!!T.capture:!!T,y=Ul(y),u&&u[be]?(u=u.i,m=String(m).toString(),m in u.g&&(j=u.g[m],y=zr(j,y,T,x),-1<y&&(Gi(j[y]),Array.prototype.splice.call(j,y,1),j.length==0&&(delete u.g[m],u.h--)))):u&&(u=xs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=zr(m,y,T,x)),(y=-1<u?m[u]:null)&&Ps(y))}function Ps(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[be])Ur(m.i,u);else{var y=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(y,T,u.capture):m.detachEvent?m.detachEvent(qr(y),T):m.addListener&&m.removeListener&&m.removeListener(T),(y=xs(m))?(Ur(y,u),y.h==0&&(y.src=null,m[Br]=null)):Gi(u)}}}function qr(u){return u in Za?Za[u]:Za[u]="on"+u}function oh(u,m){if(u.da)u=!0;else{m=new St(m,this);var y=u.listener,T=u.ha||u.src;u.fa&&Ps(u),u=y.call(T,m)}return u}function xs(u){return u=u[Br],u instanceof fi?u:null}var Wa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ul(u){return typeof u=="function"?u:(u[Wa]||(u[Wa]=function(m){return u.handleEvent(m)}),u[Wa])}function ie(){tt.call(this),this.i=new fi(this),this.M=this,this.F=null}X(ie,tt),ie.prototype[be]=!0,ie.prototype.removeEventListener=function(u,m,y,T){Ja(this,u,m,y,T)};function jt(u,m){var y,T=u.F;if(T)for(y=[];T;T=T.F)y.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new $(m,u);else if(m instanceof $)m.target=m.target||u;else{var x=m;m=new $(T,u),O(m,x)}if(x=!0,y)for(var j=y.length-1;0<=j;j--){var Z=m.g=y[j];x=rn(Z,T,!0,m)&&x}if(Z=m.g=u,x=rn(Z,T,!0,m)&&x,x=rn(Z,T,!1,m)&&x,y)for(j=0;j<y.length;j++)Z=m.g=y[j],x=rn(Z,T,!1,m)&&x}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var y=u.g[m],T=0;T<y.length;T++)Gi(y[T]);delete u.g[m],u.h--}}this.F=null},ie.prototype.K=function(u,m,y,T){return this.i.add(String(u),m,!1,y,T)},ie.prototype.L=function(u,m,y,T){return this.i.add(String(u),m,!0,y,T)};function rn(u,m,y,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var x=!0,j=0;j<m.length;++j){var Z=m[j];if(Z&&!Z.da&&Z.capture==y){var Mt=Z.listener,_e=Z.ha||Z.src;Z.fa&&Ur(u.i,Z),x=Mt.call(_e,T)!==!1&&x}}return x&&!T.defaultPrevented}function ze(u,m,y){if(typeof u=="function")y&&(u=M(u,y));else if(u&&typeof u.handleEvent=="function")u=M(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:g.setTimeout(u,m||0)}function zl(u){u.g=ze(()=>{u.g=null,u.i&&(u.i=!1,zl(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class lh extends tt{constructor(m,y){super(),this.m=m,this.l=y,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:zl(this)}N(){super.N(),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jr(u){tt.call(this),this.h=u,this.g={}}X(jr,tt);var Hr=[];function Gr(u){Ot(u.g,function(m,y){this.g.hasOwnProperty(y)&&Ps(m)},u),u.g={}}jr.prototype.N=function(){jr.aa.N.call(this),Gr(this)},jr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Dn=g.JSON.stringify,Ls=g.JSON.parse,Fr=class{stringify(u){return g.JSON.stringify(u,void 0)}parse(u){return g.JSON.parse(u,void 0)}};function to(){}to.prototype.h=null;function eo(u){return u.h||(u.h=u.i())}function no(){}var di={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function mi(){$.call(this,"d")}X(mi,$);function io(){$.call(this,"c")}X(io,$);var jn={},ro=null;function Fi(){return ro=ro||new ie}jn.La="serverreachability";function Us(u){$.call(this,jn.La,u)}X(Us,$);function Ki(u){const m=Fi();jt(m,new Us(m))}jn.STAT_EVENT="statevent";function Bl(u,m){$.call(this,jn.STAT_EVENT,u),this.stat=m}X(Bl,$);function Jt(u){const m=Fi();jt(m,new Bl(m,u))}jn.Ma="timingevent";function ye(u,m){$.call(this,jn.Ma,u),this.size=m}X(ye,$);function fe(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return g.setTimeout(function(){u()},m)}function gn(){this.g=!0}gn.prototype.xa=function(){this.g=!1};function so(u,m,y,T,x,j){u.info(function(){if(u.g)if(j)for(var Z="",Mt=j.split("&"),_e=0;_e<Mt.length;_e++){var Vt=Mt[_e].split("=");if(1<Vt.length){var Re=Vt[0];Vt=Vt[1];var ve=Re.split("_");Z=2<=ve.length&&ve[1]=="type"?Z+(Re+"="+Vt+"&"):Z+(Re+"=redacted&")}}else Z=null;else Z=j;return"XMLHTTP REQ ("+T+") [attempt "+x+"]: "+m+`
`+y+`
`+Z})}function uh(u,m,y,T,x,j,Z){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+x+"]: "+m+`
`+y+`
`+j+" "+Z})}function Qi(u,m,y,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Kr(u,y)+(T?" "+T:"")})}function ql(u,m){u.info(function(){return"TIMEOUT: "+m})}gn.prototype.info=function(){};function Kr(u,m){if(!u.g)return m;if(!m)return null;try{var y=JSON.parse(m);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var T=y[u];if(!(2>T.length)){var x=T[1];if(Array.isArray(x)&&!(1>x.length)){var j=x[0];if(j!="noop"&&j!="stop"&&j!="close")for(var Z=1;Z<x.length;Z++)x[Z]=""}}}}return Dn(y)}catch{return m}}var Yi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},gi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Hn;function Gn(){}X(Gn,to),Gn.prototype.g=function(){return new XMLHttpRequest},Gn.prototype.i=function(){return{}},Hn=new Gn;function Ke(u,m,y,T){this.j=u,this.i=m,this.l=y,this.R=T||1,this.U=new jr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new oe}function oe(){this.i=null,this.g="",this.h=!1}var ao={},zs={};function On(u,m,y){u.L=1,u.v=Zr(sn(m)),u.m=y,u.P=!0,pi(u,null)}function pi(u,m){u.F=Date.now(),Qr(u),u.A=sn(u.v);var y=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),fo(y.i,"t",T),u.C=0,y=u.j.J,u.h=new oe,u.g=iu(u.j,y?m:null,!u.m),0<u.O&&(u.M=new lh(M(u.Y,u,u.g),u.O)),m=u.U,y=u.g,T=u.ca;var x="readystatechange";Array.isArray(x)||(x&&(Hr[0]=x.toString()),x=Hr);for(var j=0;j<x.length;j++){var Z=Ll(y,x[j],T||m.handleEvent,!1,m.h||m);if(!Z)break;m.g[Z.key]=Z}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Ki(),so(u.i,u.u,u.A,u.l,u.R,u.m)}Ke.prototype.ca=function(u){u=u.target;const m=this.M;m&&vn(u)==3?m.j():this.Y(u)},Ke.prototype.Y=function(u){try{if(u==this.g)t:{const ve=vn(this.g);var m=this.g.Ba();const bi=this.g.Z();if(!(3>ve)&&(ve!=3||this.g&&(this.h.h||this.g.oa()||Xl(this.g)))){this.J||ve!=4||m==7||(m==8||0>=bi?Ki(3):Ki(2)),Xi(this);var y=this.g.Z();this.X=y;e:if(jl(this)){var T=Xl(this.g);u="";var x=T.length,j=vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Me(this),Fn(this);var Z="";break e}this.h.i=new g.TextDecoder}for(m=0;m<x;m++)this.h.h=!0,u+=this.h.i.decode(T[m],{stream:!(j&&m==x-1)});T.length=0,this.h.g+=u,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=y==200,uh(this.i,this.u,this.A,this.l,this.R,ve,y),this.o){if(this.T&&!this.K){e:{if(this.g){var Mt,_e=this.g;if((Mt=_e.g?_e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!yt(Mt)){var Vt=Mt;break e}}Vt=null}if(y=Vt)Qi(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yr(this,y);else{this.o=!1,this.s=3,Jt(12),Me(this),Fn(this);break t}}if(this.P){y=!0;let Ve;for(;!this.J&&this.C<Z.length;)if(Ve=Hl(this,Z),Ve==zs){ve==4&&(this.s=4,Jt(14),y=!1),Qi(this.i,this.l,null,"[Incomplete Response]");break}else if(Ve==ao){this.s=4,Jt(15),Qi(this.i,this.l,Z,"[Invalid Chunk]"),y=!1;break}else Qi(this.i,this.l,Ve,null),Yr(this,Ve);if(jl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ve!=4||Z.length!=0||this.h.h||(this.s=1,Jt(16),y=!1),this.o=this.o&&y,!y)Qi(this.i,this.l,Z,"[Invalid Chunked Response]"),Me(this),Fn(this);else if(0<Z.length&&!this.W){this.W=!0;var Re=this.j;Re.g==this&&Re.ba&&!Re.M&&(Re.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),ss(Re),Re.M=!0,Jt(11))}}else Qi(this.i,this.l,Z,null),Yr(this,Z);ve==4&&Me(this),this.o&&!this.J&&(ve==4?tu(this.j,this):(this.o=!1,Qr(this)))}else mh(this.g),y==400&&0<Z.indexOf("Unknown SID")?(this.s=3,Jt(12)):(this.s=0,Jt(13)),Me(this),Fn(this)}}}catch{}finally{}};function jl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Hl(u,m){var y=u.C,T=m.indexOf(`
`,y);return T==-1?zs:(y=Number(m.substring(y,T)),isNaN(y)?ao:(T+=1,T+y>m.length?zs:(m=m.slice(T,T+y),u.C=T+y,m)))}Ke.prototype.cancel=function(){this.J=!0,Me(this)};function Qr(u){u.S=Date.now()+u.I,Gl(u,u.I)}function Gl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=fe(M(u.ba,u),m)}function Xi(u){u.B&&(g.clearTimeout(u.B),u.B=null)}Ke.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ql(this.i,this.A),this.L!=2&&(Ki(),Jt(17)),Me(this),this.s=2,Fn(this)):Gl(this,this.S-u)};function Fn(u){u.j.G==0||u.J||tu(u.j,u)}function Me(u){Xi(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Gr(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function Yr(u,m){try{var y=u.j;if(y.G!=0&&(y.g==u||oo(y.h,u))){if(!u.K&&oo(y.h,u)&&y.G==3){try{var T=y.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var x=T;if(x[0]==0){t:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)Zs(y),Xs(y);else break t;_o(y),Jt(18)}}else y.za=x[1],0<y.za-y.T&&37500>x[2]&&y.F&&y.v==0&&!y.C&&(y.C=fe(M(y.Za,y),6e3));if(1>=qs(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Si(y,11)}else if((u.K||y.g==u)&&Zs(y),!yt(m))for(x=y.Da.g.parse(m),m=0;m<x.length;m++){let Vt=x[m];if(y.T=Vt[0],Vt=Vt[1],y.G==2)if(Vt[0]=="c"){y.K=Vt[1],y.ia=Vt[2];const Re=Vt[3];Re!=null&&(y.la=Re,y.j.info("VER="+y.la));const ve=Vt[4];ve!=null&&(y.Aa=ve,y.j.info("SVER="+y.Aa));const bi=Vt[5];bi!=null&&typeof bi=="number"&&0<bi&&(T=1.5*bi,y.L=T,y.j.info("backChannelRequestTimeoutMs_="+T)),T=y;const Ve=u.g;if(Ve){const Jn=Ve.g?Ve.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jn){var j=T.h;j.g||Jn.indexOf("spdy")==-1&&Jn.indexOf("quic")==-1&&Jn.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(js(j,j.h),j.h=null))}if(T.D){const Eo=Ve.g?Ve.g.getResponseHeader("X-HTTP-Session-Id"):null;Eo&&(T.ya=Eo,Ft(T.I,T.D,Eo))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),T=y;var Z=u;if(T.qa=nu(T,T.J?T.ia:null,T.W),Z.K){Qe(T.h,Z);var Mt=Z,_e=T.L;_e&&(Mt.I=_e),Mt.B&&(Xi(Mt),Qr(Mt)),T.g=Z}else Jl(T);0<y.i.length&&$s(y)}else Vt[0]!="stop"&&Vt[0]!="close"||Si(y,7);else y.G==3&&(Vt[0]=="stop"||Vt[0]=="close"?Vt[0]=="stop"?Si(y,7):po(y):Vt[0]!="noop"&&y.l&&y.l.ta(Vt),y.v=0)}}Ki(4)}catch{}}var Fl=class{constructor(u,m){this.g=u,this.map=m}};function yi(u){this.l=u||10,g.PerformanceNavigationTiming?(u=g.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(g.chrome&&g.chrome.loadTimes&&g.chrome.loadTimes()&&g.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Bs(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function qs(u){return u.h?1:u.g?u.g.size:0}function oo(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function js(u,m){u.g?u.g.add(m):u.h=m}function Qe(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}yi.prototype.cancel=function(){if(this.i=lo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function lo(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const y of u.g.values())m=m.concat(y.D);return m}return it(u.i)}function ch(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],y=u.length,T=0;T<y;T++)m.push(u[T]);return m}m=[],y=0;for(T in u)m[y++]=u[T];return m}function Hs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var y=0;y<u;y++)m.push(y);return m}m=[],y=0;for(const T in u)m[y++]=T;return m}}}function uo(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var y=Hs(u),T=ch(u),x=T.length,j=0;j<x;j++)m.call(void 0,T[j],y&&y[j],u)}var Xr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hh(u,m){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var T=u[y].indexOf("="),x=null;if(0<=T){var j=u[y].substring(0,T);x=u[y].substring(T+1)}else j=u[y];m(j,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function de(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof de){this.h=u.h,$r(this,u.j),this.o=u.o,this.g=u.g,$i(this,u.s),this.l=u.l;var m=u.i,y=new vi;y.i=m.i,m.g&&(y.g=new Map(m.g),y.h=m.h),_i(this,y),this.m=u.m}else u&&(m=String(u).match(Xr))?(this.h=!1,$r(this,m[1]||"",!0),this.o=pn(m[2]||""),this.g=pn(m[3]||"",!0),$i(this,m[4]),this.l=pn(m[5]||"",!0),_i(this,m[6]||"",!0),this.m=pn(m[7]||"")):(this.h=!1,this.i=new vi(null,this.h))}de.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Jr(m,co,!0),":");var y=this.g;return(y||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Jr(m,co,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Jr(y,y.charAt(0)=="/"?fh:ho,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Jr(y,Gs)),u.join("")};function sn(u){return new de(u)}function $r(u,m,y){u.j=y?pn(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function $i(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function _i(u,m,y){m instanceof vi?(u.i=m,Ql(u.i,u.h)):(y||(m=Jr(m,dh)),u.i=new vi(m,u.h))}function Ft(u,m,y){u.i.set(m,y)}function Zr(u){return Ft(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function pn(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Jr(u,m,y){return typeof u=="string"?(u=encodeURI(u).replace(m,Kl),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Kl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var co=/[#\/\?@]/g,ho=/[#\?:]/g,fh=/[#\?]/g,dh=/[#\?@]/g,Gs=/#/g;function vi(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function yn(u){u.g||(u.g=new Map,u.h=0,u.i&&hh(u.i,function(m,y){u.add(decodeURIComponent(m.replace(/\+/g," ")),y)}))}r=vi.prototype,r.add=function(u,m){yn(this),this.i=null,u=Kn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(m),this.h+=1,this};function Ei(u,m){yn(u),m=Kn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Ti(u,m){return yn(u),m=Kn(u,m),u.g.has(m)}r.forEach=function(u,m){yn(this),this.g.forEach(function(y,T){y.forEach(function(x){u.call(m,x,T,this)},this)},this)},r.na=function(){yn(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),y=[];for(let T=0;T<m.length;T++){const x=u[T];for(let j=0;j<x.length;j++)y.push(m[T])}return y},r.V=function(u){yn(this);let m=[];if(typeof u=="string")Ti(this,u)&&(m=m.concat(this.g.get(Kn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)m=m.concat(u[y])}return m},r.set=function(u,m){return yn(this),this.i=null,u=Kn(this,u),Ti(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function fo(u,m,y){Ei(u,m),0<y.length&&(u.i=null,u.g.set(Kn(u,m),it(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var y=0;y<m.length;y++){var T=m[y];const j=encodeURIComponent(String(T)),Z=this.V(T);for(T=0;T<Z.length;T++){var x=j;Z[T]!==""&&(x+="="+encodeURIComponent(String(Z[T]))),u.push(x)}}return this.i=u.join("&")};function Kn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Ql(u,m){m&&!u.j&&(yn(u),u.i=null,u.g.forEach(function(y,T){var x=T.toLowerCase();T!=x&&(Ei(this,T),fo(this,x,y))},u)),u.j=m}function Wr(u,m){const y=new gn;if(g.Image){const T=new Image;T.onload=q(_n,y,"TestLoadImage: loaded",!0,m,T),T.onerror=q(_n,y,"TestLoadImage: error",!1,m,T),T.onabort=q(_n,y,"TestLoadImage: abort",!1,m,T),T.ontimeout=q(_n,y,"TestLoadImage: timeout",!1,m,T),g.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function Nn(u,m){const y=new gn,T=new AbortController,x=setTimeout(()=>{T.abort(),_n(y,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(j=>{clearTimeout(x),j.ok?_n(y,"TestPingServer: ok",!0,m):_n(y,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(x),_n(y,"TestPingServer: error",!1,m)})}function _n(u,m,y,T,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),T(y)}catch{}}function ts(){this.g=new Fr}function Qn(u,m,y){const T=y||"";try{uo(u,function(x,j){let Z=x;_(x)&&(Z=Dn(x)),m.push(T+j+"="+encodeURIComponent(Z))})}catch(x){throw m.push(T+"type="+encodeURIComponent("_badmap")),x}}function Zi(u){this.l=u.Ub||null,this.j=u.eb||!1}X(Zi,to),Zi.prototype.g=function(){return new Ai(this.l,this.j)},Zi.prototype.i=function(u){return function(){return u}}({});function Ai(u,m){ie.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}X(Ai,ie),r=Ai.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Xn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||g).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Xn(this)),this.g&&(this.readyState=3,Xn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof g.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;mo(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function mo(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Yn(this):Xn(this),this.readyState==3&&mo(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Yn(this))},r.Qa=function(u){this.g&&(this.response=u,Yn(this))},r.ga=function(){this.g&&Yn(this)};function Yn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Xn(u)}r.setRequestHeader=function(u,m){this.u.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var y=m.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=m.next();return u.join(`\r
`)};function Xn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function go(u){let m="";return Ot(u,function(y,T){m+=T,m+=":",m+=y,m+=`\r
`}),m}function we(u,m,y){t:{for(T in y){var T=!1;break t}T=!0}T||(y=go(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):Ft(u,m,y))}function qt(u){ie.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}X(qt,ie);var Fs=/^https?$/i,es=["POST","PUT"];r=qt.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,m,y,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Hn.g(),this.v=this.o?eo(this.o):eo(Hn),this.g.onreadystatechange=M(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(j){Yl(this,j);return}if(u=y||"",y=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var x in T)y.set(x,T[x]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const j of T.keys())y.set(j,T.get(j));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),x=g.FormData&&u instanceof g.FormData,!(0<=Array.prototype.indexOf.call(es,m,void 0))||T||x||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,Z]of y)this.g.setRequestHeader(j,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ns(this),this.u=!0,this.g.send(u),this.u=!1}catch(j){Yl(this,j)}};function Yl(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Ks(u),$n(u)}function Ks(u){u.A||(u.A=!0,jt(u,"complete"),jt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,jt(this,"complete"),jt(this,"abort"),$n(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$n(this,!0)),qt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Qs(this):this.bb())},r.bb=function(){Qs(this)};function Qs(u){if(u.h&&typeof d<"u"&&(!u.v[1]||vn(u)!=4||u.Z()!=2)){if(u.u&&vn(u)==4)ze(u.Ea,0,u);else if(jt(u,"readystatechange"),vn(u)==4){u.h=!1;try{const Z=u.Z();t:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var y;if(!(y=m)){var T;if(T=Z===0){var x=String(u.D).match(Xr)[1]||null;!x&&g.self&&g.self.location&&(x=g.self.location.protocol.slice(0,-1)),T=!Fs.test(x?x.toLowerCase():"")}y=T}if(y)jt(u,"complete"),jt(u,"success");else{u.m=6;try{var j=2<vn(u)?u.g.statusText:""}catch{j=""}u.l=j+" ["+u.Z()+"]",Ks(u)}}finally{$n(u)}}}}function $n(u,m){if(u.g){ns(u);const y=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||jt(u,"ready");try{y.onreadystatechange=T}catch{}}}function ns(u){u.I&&(g.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function vn(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<vn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Ls(m)}};function Xl(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function mh(u){const m={};u=(u.g&&2<=vn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(yt(u[T]))continue;var y=V(u[T]);const x=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=m[x]||[];m[x]=j,j.push(y)}N(m,function(T){return T.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function is(u,m,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||m}function Ys(u){this.Aa=0,this.i=[],this.j=new gn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=is("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=is("baseRetryDelayMs",5e3,u),this.cb=is("retryDelaySeedMs",1e4,u),this.Wa=is("forwardChannelMaxRetries",2,u),this.wa=is("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new yi(u&&u.concurrentRequestLimit),this.Da=new ts,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ys.prototype,r.la=8,r.G=1,r.connect=function(u,m,y,T){Jt(0),this.W=u,this.H=m||{},y&&T!==void 0&&(this.H.OSID=y,this.H.OAID=T),this.F=this.X,this.I=nu(this,null,this.W),$s(this)};function po(u){if($l(u),u.G==3){var m=u.U++,y=sn(u.I);if(Ft(y,"SID",u.K),Ft(y,"RID",m),Ft(y,"TYPE","terminate"),rs(u,y),m=new Ke(u,u.j,m),m.L=2,m.v=Zr(sn(y)),y=!1,g.navigator&&g.navigator.sendBeacon)try{y=g.navigator.sendBeacon(m.v.toString(),"")}catch{}!y&&g.Image&&(new Image().src=m.v,y=!0),y||(m.g=iu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Qr(m)}eu(u)}function Xs(u){u.g&&(ss(u),u.g.cancel(),u.g=null)}function $l(u){Xs(u),u.u&&(g.clearTimeout(u.u),u.u=null),Zs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&g.clearTimeout(u.s),u.s=null)}function $s(u){if(!Bs(u.h)&&!u.s){u.s=!0;var m=u.Ga;W||I(),at||(W(),at=!0),zt.add(m,u),u.B=0}}function gh(u,m){return qs(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=fe(M(u.Ga,u,m),vo(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const x=new Ke(this,this.j,u);let j=this.o;if(this.S&&(j?(j=S(j),O(j,this.S)):j=this.S),this.m!==null||this.O||(x.H=j,j=null),this.P)t:{for(var m=0,y=0;y<this.i.length;y++){e:{var T=this.i[y];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=y;break t}if(m===4096||y===this.i.length-1){m=y+1;break t}}m=1e3}else m=1e3;m=Zl(this,x,m),y=sn(this.I),Ft(y,"RID",u),Ft(y,"CVER",22),this.D&&Ft(y,"X-HTTP-Session-Id",this.D),rs(this,y),j&&(this.O?m="headers="+encodeURIComponent(String(go(j)))+"&"+m:this.m&&we(y,this.m,j)),js(this.h,x),this.Ua&&Ft(y,"TYPE","init"),this.P?(Ft(y,"$req",m),Ft(y,"SID","null"),x.T=!0,On(x,y,null)):On(x,y,m),this.G=2}}else this.G==3&&(u?yo(this,u):this.i.length==0||Bs(this.h)||yo(this))};function yo(u,m){var y;m?y=m.l:y=u.U++;const T=sn(u.I);Ft(T,"SID",u.K),Ft(T,"RID",y),Ft(T,"AID",u.T),rs(u,T),u.m&&u.o&&we(T,u.m,u.o),y=new Ke(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Zl(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),js(u.h,y),On(y,T,m)}function rs(u,m){u.H&&Ot(u.H,function(y,T){Ft(m,T,y)}),u.l&&uo({},function(y,T){Ft(m,T,y)})}function Zl(u,m,y){y=Math.min(u.i.length,y);var T=u.l?M(u.l.Na,u.l,u):null;t:{var x=u.i;let j=-1;for(;;){const Z=["count="+y];j==-1?0<y?(j=x[0].g,Z.push("ofs="+j)):j=0:Z.push("ofs="+j);let Mt=!0;for(let _e=0;_e<y;_e++){let Vt=x[_e].g;const Re=x[_e].map;if(Vt-=j,0>Vt)j=Math.max(0,x[_e].g-100),Mt=!1;else try{Qn(Re,Z,"req"+Vt+"_")}catch{T&&T(Re)}}if(Mt){T=Z.join("&");break t}}}return u=u.i.splice(0,y),m.D=u,T}function Jl(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;W||I(),at||(W(),at=!0),zt.add(m,u),u.v=0}}function _o(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=fe(M(u.Fa,u),vo(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Wl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=fe(M(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Jt(10),Xs(this),Wl(this))};function ss(u){u.A!=null&&(g.clearTimeout(u.A),u.A=null)}function Wl(u){u.g=new Ke(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=sn(u.qa);Ft(m,"RID","rpc"),Ft(m,"SID",u.K),Ft(m,"AID",u.T),Ft(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Ft(m,"TO",u.ja),Ft(m,"TYPE","xmlhttp"),rs(u,m),u.m&&u.o&&we(m,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Zr(sn(m)),y.m=null,y.P=!0,pi(y,u)}r.Za=function(){this.C!=null&&(this.C=null,Xs(this),_o(this),Jt(19))};function Zs(u){u.C!=null&&(g.clearTimeout(u.C),u.C=null)}function tu(u,m){var y=null;if(u.g==m){Zs(u),ss(u),u.g=null;var T=2}else if(oo(u.h,m))y=m.D,Qe(u.h,m),T=1;else return;if(u.G!=0){if(m.o)if(T==1){y=m.m?m.m.length:0,m=Date.now()-m.F;var x=u.B;T=Fi(),jt(T,new ye(T,y)),$s(u)}else Jl(u);else if(x=m.s,x==3||x==0&&0<m.X||!(T==1&&gh(u,m)||T==2&&_o(u)))switch(y&&0<y.length&&(m=u.h,m.i=m.i.concat(y)),x){case 1:Si(u,5);break;case 4:Si(u,10);break;case 3:Si(u,6);break;default:Si(u,2)}}}function vo(u,m){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*m}function Si(u,m){if(u.j.info("Error code "+m),m==2){var y=M(u.fb,u),T=u.Xa;const x=!T;T=new de(T||"//www.google.com/images/cleardot.gif"),g.location&&g.location.protocol=="http"||$r(T,"https"),Zr(T),x?Wr(T.toString(),y):Nn(T.toString(),y)}else Jt(2);u.G=0,u.l&&u.l.sa(m),eu(u),$l(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Jt(2)):(this.j.info("Failed to ping google.com"),Jt(1))};function eu(u){if(u.G=0,u.ka=[],u.l){const m=lo(u.h);(m.length!=0||u.i.length!=0)&&(J(u.ka,m),J(u.ka,u.i),u.h.i.length=0,it(u.i),u.i.length=0),u.l.ra()}}function nu(u,m,y){var T=y instanceof de?sn(y):new de(y);if(T.g!="")m&&(T.g=m+"."+T.g),$i(T,T.s);else{var x=g.location;T=x.protocol,m=m?m+"."+x.hostname:x.hostname,x=+x.port;var j=new de(null);T&&$r(j,T),m&&(j.g=m),x&&$i(j,x),y&&(j.l=y),T=j}return y=u.D,m=u.ya,y&&m&&Ft(T,y,m),Ft(T,"VER",u.la),rs(u,T),T}function iu(u,m,y){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new qt(new Zi({eb:y})):new qt(u.pa),m.Ha(u.J),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ru(){}r=ru.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Js(){}Js.prototype.g=function(u,m){return new Ye(u,m)};function Ye(u,m){ie.call(this),this.g=new Ys(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!yt(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!yt(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Zn(this)}X(Ye,ie),Ye.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ye.prototype.close=function(){po(this.g)},Ye.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Dn(u),u=y);m.i.push(new Fl(m.Ya++,u)),m.G==3&&$s(m)},Ye.prototype.N=function(){this.g.l=null,delete this.j,po(this.g),delete this.g,Ye.aa.N.call(this)};function su(u){mi.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){t:{for(const y in m){u=y;break t}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}X(su,mi);function au(){io.call(this),this.status=1}X(au,io);function Zn(u){this.g=u}X(Zn,ru),Zn.prototype.ua=function(){jt(this.g,"a")},Zn.prototype.ta=function(u){jt(this.g,new su(u))},Zn.prototype.sa=function(u){jt(this.g,new au)},Zn.prototype.ra=function(){jt(this.g,"b")},Js.prototype.createWebChannel=Js.prototype.g,Ye.prototype.send=Ye.prototype.o,Ye.prototype.open=Ye.prototype.m,Ye.prototype.close=Ye.prototype.close,Q0=function(){return new Js},K0=function(){return Fi()},F0=jn,Ld={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Yi.NO_ERROR=0,Yi.TIMEOUT=8,Yi.HTTP_ERROR=6,_c=Yi,gi.COMPLETE="complete",G0=gi,no.EventType=di,di.OPEN="a",di.CLOSE="b",di.ERROR="c",di.MESSAGE="d",ie.prototype.listen=ie.prototype.K,cl=no,qt.prototype.listenOnce=qt.prototype.L,qt.prototype.getLastError=qt.prototype.Ka,qt.prototype.getLastErrorCode=qt.prototype.Ba,qt.prototype.getStatus=qt.prototype.Z,qt.prototype.getResponseJson=qt.prototype.Oa,qt.prototype.getResponseText=qt.prototype.oa,qt.prototype.send=qt.prototype.ea,qt.prototype.setWithCredentials=qt.prototype.Ha,H0=qt}).apply(typeof lc<"u"?lc:typeof self<"u"?self:typeof window<"u"?window:{});const z_="@firebase/firestore",B_="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}He.UNAUTHENTICATED=new He(null),He.GOOGLE_CREDENTIALS=new He("google-credentials-uid"),He.FIRST_PARTY=new He("first-party-uid"),He.MOCK_USER=new He("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qa="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new jc("@firebase/firestore");function Ia(){return Cs.logLevel}function nt(r,...t){if(Cs.logLevel<=Ct.DEBUG){const n=t.map(gm);Cs.debug(`Firestore (${Qa}): ${r}`,...n)}}function Hi(r,...t){if(Cs.logLevel<=Ct.ERROR){const n=t.map(gm);Cs.error(`Firestore (${Qa}): ${r}`,...n)}}function Ua(r,...t){if(Cs.logLevel<=Ct.WARN){const n=t.map(gm);Cs.warn(`Firestore (${Qa}): ${r}`,...n)}}function gm(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(r,t,n){let a="Unexpected state";typeof t=="string"?a=t:n=t,Y0(r,a,n)}function Y0(r,t,n){let a=`FIRESTORE (${Qa}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(n!==void 0)try{a+=" CONTEXT: "+JSON.stringify(n)}catch{a+=" CONTEXT: "+n}throw Hi(a),new Error(a)}function ee(r,t,n,a){let l="Unexpected state";typeof n=="string"?l=n:a=n,r||Y0(t,l,a)}function xt(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ct extends zn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Jw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(He.UNAUTHENTICATED))}shutdown(){}}class Ww{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class tR{constructor(t){this.t=t,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){ee(this.o===void 0,42304);let a=this.i;const l=p=>this.i!==a?(a=this.i,n(p)):Promise.resolve();let c=new bs;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new bs,t.enqueueRetryable(()=>l(this.currentUser))};const d=()=>{const p=c;t.enqueueRetryable(async()=>{await p.promise,await l(this.currentUser)})},g=p=>{nt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit(p=>g(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?g(p):(nt("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new bs)}},0),d()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(a=>this.i!==t?(nt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(ee(typeof a.accessToken=="string",31837,{l:a}),new X0(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ee(t===null||typeof t=="string",2055,{h:t}),new He(t)}}class eR{constructor(t,n,a){this.P=t,this.T=n,this.I=a,this.type="FirstParty",this.user=He.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class nR{constructor(t,n,a){this.P=t,this.T=n,this.I=a}getToken(){return Promise.resolve(new eR(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(He.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class q_{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iR{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,In(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){ee(this.o===void 0,3512);const a=c=>{c.error!=null&&nt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const d=c.token!==this.m;return this.m=c.token,nt("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?n(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable(()=>a(c))};const l=c=>{nt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>l(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?l(c):nt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new q_(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(ee(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new q_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rR(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let a=0;a<r;a++)n[a]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const l=rR(40);for(let c=0;c<l.length;++c)a.length<20&&l[c]<n&&(a+=t.charAt(l[c]%62))}return a}}function wt(r,t){return r<t?-1:r>t?1:0}function Ud(r,t){let n=0;for(;n<r.length&&n<t.length;){const a=r.codePointAt(n),l=t.codePointAt(n);if(a!==l){if(a<128&&l<128)return wt(a,l);{const c=$0(),d=aR(c.encode(j_(r,n)),c.encode(j_(t,n)));return d!==0?d:wt(a,l)}}n+=a>65535?2:1}return wt(r.length,t.length)}function j_(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function aR(r,t){for(let n=0;n<r.length&&n<t.length;++n)if(r[n]!==t[n])return wt(r[n],t[n]);return wt(r.length,t.length)}function za(r,t,n){return r.length===t.length&&r.every((a,l)=>n(a,t[l]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=-62135596800,G_=1e6;class en{static now(){return en.fromMillis(Date.now())}static fromDate(t){return en.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),a=Math.floor((t-1e3*n)*G_);return new en(n,a)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new ct(et.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ct(et.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<H_)throw new ct(et.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ct(et.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/G_}_compareTo(t){return this.seconds===t.seconds?wt(this.nanoseconds,t.nanoseconds):wt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-H_;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{static fromTimestamp(t){return new _t(t)}static min(){return new _t(new en(0,0))}static max(){return new _t(new en(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_="__name__";class ri{constructor(t,n,a){n===void 0?n=0:n>t.length&&vt(637,{offset:n,range:t.length}),a===void 0?a=t.length-n:a>t.length-n&&vt(1746,{length:a,range:t.length-n}),this.segments=t,this.offset=n,this.len=a}get length(){return this.len}isEqual(t){return ri.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ri?t.forEach(a=>{n.push(a)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,a=this.limit();n<a;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const a=Math.min(t.length,n.length);for(let l=0;l<a;l++){const c=ri.compareSegments(t.get(l),n.get(l));if(c!==0)return c}return wt(t.length,n.length)}static compareSegments(t,n){const a=ri.isNumericId(t),l=ri.isNumericId(n);return a&&!l?-1:!a&&l?1:a&&l?ri.extractNumericId(t).compare(ri.extractNumericId(n)):Ud(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Cr.fromString(t.substring(4,t.length-2))}}class ae extends ri{construct(t,n,a){return new ae(t,n,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const a of t){if(a.indexOf("//")>=0)throw new ct(et.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);n.push(...a.split("/").filter(l=>l.length>0))}return new ae(n)}static emptyPath(){return new ae([])}}const oR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends ri{construct(t,n,a){return new $e(t,n,a)}static isValidIdentifier(t){return oR.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===F_}static keyField(){return new $e([F_])}static fromServerFormat(t){const n=[];let a="",l=0;const c=()=>{if(a.length===0)throw new ct(et.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(a),a=""};let d=!1;for(;l<t.length;){const g=t[l];if(g==="\\"){if(l+1===t.length)throw new ct(et.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[l+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ct(et.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);a+=p,l+=2}else g==="`"?(d=!d,l++):g!=="."||d?(a+=g,l++):(c(),l++)}if(c(),d)throw new ct(et.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new $e(n)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.path=t}static fromPath(t){return new mt(ae.fromString(t))}static fromName(t){return new mt(ae.fromString(t).popFirst(5))}static empty(){return new mt(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ae.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return ae.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new mt(new ae(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=-1;function lR(r,t){const n=r.toTimestamp().seconds,a=r.toTimestamp().nanoseconds+1,l=_t.fromTimestamp(a===1e9?new en(n+1,0):new en(n,a));return new Or(l,mt.empty(),t)}function uR(r){return new Or(r.readTime,r.key,Sl)}class Or{constructor(t,n,a){this.readTime=t,this.documentKey=n,this.largestBatchId=a}static min(){return new Or(_t.min(),mt.empty(),Sl)}static max(){return new Or(_t.max(),mt.empty(),Sl)}}function cR(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=mt.comparator(r.documentKey,t.documentKey),n!==0?n:wt(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kc(r){if(r.code!==et.FAILED_PRECONDITION||r.message!==hR)throw r;nt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&vt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new Q((a,l)=>{this.nextCallback=c=>{this.wrapSuccess(t,c).next(a,l)},this.catchCallback=c=>{this.wrapFailure(n,c).next(a,l)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof Q?n:Q.resolve(n)}catch(n){return Q.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):Q.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):Q.reject(n)}static resolve(t){return new Q((n,a)=>{n(t)})}static reject(t){return new Q((n,a)=>{a(t)})}static waitFor(t){return new Q((n,a)=>{let l=0,c=0,d=!1;t.forEach(g=>{++l,g.next(()=>{++c,d&&c===l&&n()},p=>a(p))}),d=!0,c===l&&n()})}static or(t){let n=Q.resolve(!1);for(const a of t)n=n.next(l=>l?Q.resolve(l):a());return n}static forEach(t,n){const a=[];return t.forEach((l,c)=>{a.push(n.call(this,l,c))}),this.waitFor(a)}static mapArray(t,n){return new Q((a,l)=>{const c=t.length,d=new Array(c);let g=0;for(let p=0;p<c;p++){const _=p;n(t[_]).next(A=>{d[_]=A,++g,g===c&&a(d)},A=>l(A))}})}static doWhile(t,n){return new Q((a,l)=>{const c=()=>{t()===!0?n().next(()=>{c()},l):a()};c()})}}function dR(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ya(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=a=>this.ue(a),this.ce=a=>n.writeSequenceNumber(a))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}Qc.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=-1;function Yc(r){return r==null}function zd(r){return r===0&&1/r==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="";function gR(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=K_(t)),t=pR(r.get(n),t);return K_(t)}function pR(r,t){let n=t;const a=r.length;for(let l=0;l<a;l++){const c=r.charAt(l);switch(c){case"\0":n+="";break;case Z0:n+="";break;default:n+=c}}return n}function K_(r){return r+Z0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function Vl(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function yR(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,n){this.comparator=t,this.root=n||Le.EMPTY}insert(t,n){return new he(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(t){return new he(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Le.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const a=this.comparator(t,n.key);if(a===0)return n.value;a<0?n=n.left:a>0&&(n=n.right)}return null}indexOf(t){let n=0,a=this.root;for(;!a.isEmpty();){const l=this.comparator(t,a.key);if(l===0)return n+a.left.size;l<0?a=a.left:(n+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,a)=>(t(n,a),!1))}toString(){const t=[];return this.inorderTraversal((n,a)=>(t.push(`${n}:${a}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new uc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new uc(this.root,t,this.comparator,!1)}getReverseIterator(){return new uc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new uc(this.root,t,this.comparator,!0)}}class uc{constructor(t,n,a,l){this.isReverse=l,this.nodeStack=[];let c=1;for(;!t.isEmpty();)if(c=n?a(t.key,n):1,n&&l&&(c*=-1),c<0)t=this.isReverse?t.left:t.right;else{if(c===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Le{constructor(t,n,a,l,c){this.key=t,this.value=n,this.color=a??Le.RED,this.left=l??Le.EMPTY,this.right=c??Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,a,l,c){return new Le(t??this.key,n??this.value,a??this.color,l??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,a){let l=this;const c=a(t,l.key);return l=c<0?l.copy(null,null,null,l.left.insert(t,n,a),null):c===0?l.copy(null,n,null,null,null):l.copy(null,null,null,null,l.right.insert(t,n,a)),l.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let a,l=this;if(n(t,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(t,n),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),n(t,l.key)===0){if(l.right.isEmpty())return Le.EMPTY;a=l.right.min(),l=l.copy(a.key,a.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(t,n))}return l.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw vt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw vt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw vt(27949);return t+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1;Le.EMPTY=new class{constructor(){this.size=0}get key(){throw vt(57766)}get value(){throw vt(16141)}get color(){throw vt(16727)}get left(){throw vt(29726)}get right(){throw vt(36894)}copy(t,n,a,l,c){return this}insert(t,n,a){return new Le(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t){this.comparator=t,this.data=new he(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,a)=>(t(n),!1))}forEachInRange(t,n){const a=this.data.getIteratorFrom(t[0]);for(;a.hasNext();){const l=a.getNext();if(this.comparator(l.key,t[1])>=0)return;n(l.key)}}forEachWhile(t,n){let a;for(a=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();a.hasNext();)if(!t(a.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Y_(this.data.getIterator())}getIteratorFrom(t){return new Y_(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(a=>{n=n.add(a)}),n}isEqual(t){if(!(t instanceof Se)||this.size!==t.size)return!1;const n=this.data.getIterator(),a=t.data.getIterator();for(;n.hasNext();){const l=n.getNext().key,c=a.getNext().key;if(this.comparator(l,c)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Se(this.comparator);return n.data=t,n}}class Y_{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(t){this.fields=t,t.sort($e.comparator)}static empty(){return new br([])}unionWith(t){let n=new Se($e.comparator);for(const a of this.fields)n=n.add(a);for(const a of t)n=n.add(a);return new br(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return za(this.fields,t.fields,(n,a)=>n.isEqual(a))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(l){try{return atob(l)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new J0("Invalid base64 string: "+c):c}}(t);return new Ue(n)}static fromUint8Array(t){const n=function(l){let c="";for(let d=0;d<l.length;++d)c+=String.fromCharCode(l[d]);return c}(t);return new Ue(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const a=new Uint8Array(n.length);for(let l=0;l<n.length;l++)a[l]=n.charCodeAt(l);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return wt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ue.EMPTY_BYTE_STRING=new Ue("");const _R=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nr(r){if(ee(!!r,39018),typeof r=="string"){let t=0;const n=_R.exec(r);if(ee(!!n,46558,{timestamp:r}),n[1]){let l=n[1];l=(l+"000000000").substr(0,9),t=Number(l)}const a=new Date(r);return{seconds:Math.floor(a.getTime()/1e3),nanos:t}}return{seconds:ce(r.seconds),nanos:ce(r.nanos)}}function ce(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Mr(r){return typeof r=="string"?Ue.fromBase64String(r):Ue.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0="server_timestamp",tE="__type__",eE="__previous_value__",nE="__local_write_time__";function pm(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[tE])===null||n===void 0?void 0:n.stringValue)===W0}function Xc(r){const t=r.mapValue.fields[eE];return pm(t)?Xc(t):t}function bl(r){const t=Nr(r.mapValue.fields[nE].timestampValue);return new en(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(t,n,a,l,c,d,g,p,_,A){this.databaseId=t,this.appId=n,this.persistenceKey=a,this.host=l,this.ssl=c,this.forceLongPolling=d,this.autoDetectLongPolling=g,this.longPollingOptions=p,this.useFetchStreams=_,this.isUsingEmulator=A}}const Nc="(default)";class wl{constructor(t,n){this.projectId=t,this.database=n||Nc}static empty(){return new wl("","")}get isDefaultDatabase(){return this.database===Nc}isEqual(t){return t instanceof wl&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER="__type__",TR="__max__",cc={mapValue:{}},AR="__vector__",Bd="value";function Vr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?pm(r)?4:bR(r)?9007199254740991:SR(r)?10:11:vt(28295,{value:r})}function ci(r,t){if(r===t)return!0;const n=Vr(r);if(n!==Vr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return bl(r).isEqual(bl(t));case 3:return function(l,c){if(typeof l.timestampValue=="string"&&typeof c.timestampValue=="string"&&l.timestampValue.length===c.timestampValue.length)return l.timestampValue===c.timestampValue;const d=Nr(l.timestampValue),g=Nr(c.timestampValue);return d.seconds===g.seconds&&d.nanos===g.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(l,c){return Mr(l.bytesValue).isEqual(Mr(c.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(l,c){return ce(l.geoPointValue.latitude)===ce(c.geoPointValue.latitude)&&ce(l.geoPointValue.longitude)===ce(c.geoPointValue.longitude)}(r,t);case 2:return function(l,c){if("integerValue"in l&&"integerValue"in c)return ce(l.integerValue)===ce(c.integerValue);if("doubleValue"in l&&"doubleValue"in c){const d=ce(l.doubleValue),g=ce(c.doubleValue);return d===g?zd(d)===zd(g):isNaN(d)&&isNaN(g)}return!1}(r,t);case 9:return za(r.arrayValue.values||[],t.arrayValue.values||[],ci);case 10:case 11:return function(l,c){const d=l.mapValue.fields||{},g=c.mapValue.fields||{};if(Q_(d)!==Q_(g))return!1;for(const p in d)if(d.hasOwnProperty(p)&&(g[p]===void 0||!ci(d[p],g[p])))return!1;return!0}(r,t);default:return vt(52216,{left:r})}}function Rl(r,t){return(r.values||[]).find(n=>ci(n,t))!==void 0}function Ba(r,t){if(r===t)return 0;const n=Vr(r),a=Vr(t);if(n!==a)return wt(n,a);switch(n){case 0:case 9007199254740991:return 0;case 1:return wt(r.booleanValue,t.booleanValue);case 2:return function(c,d){const g=ce(c.integerValue||c.doubleValue),p=ce(d.integerValue||d.doubleValue);return g<p?-1:g>p?1:g===p?0:isNaN(g)?isNaN(p)?0:-1:1}(r,t);case 3:return X_(r.timestampValue,t.timestampValue);case 4:return X_(bl(r),bl(t));case 5:return Ud(r.stringValue,t.stringValue);case 6:return function(c,d){const g=Mr(c),p=Mr(d);return g.compareTo(p)}(r.bytesValue,t.bytesValue);case 7:return function(c,d){const g=c.split("/"),p=d.split("/");for(let _=0;_<g.length&&_<p.length;_++){const A=wt(g[_],p[_]);if(A!==0)return A}return wt(g.length,p.length)}(r.referenceValue,t.referenceValue);case 8:return function(c,d){const g=wt(ce(c.latitude),ce(d.latitude));return g!==0?g:wt(ce(c.longitude),ce(d.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return $_(r.arrayValue,t.arrayValue);case 10:return function(c,d){var g,p,_,A;const D=c.fields||{},M=d.fields||{},q=(g=D[Bd])===null||g===void 0?void 0:g.arrayValue,X=(p=M[Bd])===null||p===void 0?void 0:p.arrayValue,it=wt(((_=q==null?void 0:q.values)===null||_===void 0?void 0:_.length)||0,((A=X==null?void 0:X.values)===null||A===void 0?void 0:A.length)||0);return it!==0?it:$_(q,X)}(r.mapValue,t.mapValue);case 11:return function(c,d){if(c===cc.mapValue&&d===cc.mapValue)return 0;if(c===cc.mapValue)return 1;if(d===cc.mapValue)return-1;const g=c.fields||{},p=Object.keys(g),_=d.fields||{},A=Object.keys(_);p.sort(),A.sort();for(let D=0;D<p.length&&D<A.length;++D){const M=Ud(p[D],A[D]);if(M!==0)return M;const q=Ba(g[p[D]],_[A[D]]);if(q!==0)return q}return wt(p.length,A.length)}(r.mapValue,t.mapValue);default:throw vt(23264,{Pe:n})}}function X_(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return wt(r,t);const n=Nr(r),a=Nr(t),l=wt(n.seconds,a.seconds);return l!==0?l:wt(n.nanos,a.nanos)}function $_(r,t){const n=r.values||[],a=t.values||[];for(let l=0;l<n.length&&l<a.length;++l){const c=Ba(n[l],a[l]);if(c)return c}return wt(n.length,a.length)}function qa(r){return qd(r)}function qd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const a=Nr(n);return`time(${a.seconds},${a.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return Mr(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return mt.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let a="[",l=!0;for(const c of n.values||[])l?l=!1:a+=",",a+=qd(c);return a+"]"}(r.arrayValue):"mapValue"in r?function(n){const a=Object.keys(n.fields||{}).sort();let l="{",c=!0;for(const d of a)c?c=!1:l+=",",l+=`${d}:${qd(n.fields[d])}`;return l+"}"}(r.mapValue):vt(61005,{value:r})}function vc(r){switch(Vr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Xc(r);return t?16+vc(t):16;case 5:return 2*r.stringValue.length;case 6:return Mr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(a){return(a.values||[]).reduce((l,c)=>l+vc(c),0)}(r.arrayValue);case 10:case 11:return function(a){let l=0;return Vl(a.fields,(c,d)=>{l+=c.length+vc(d)}),l}(r.mapValue);default:throw vt(13486,{value:r})}}function jd(r){return!!r&&"integerValue"in r}function ym(r){return!!r&&"arrayValue"in r}function Z_(r){return!!r&&"nullValue"in r}function J_(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ed(r){return!!r&&"mapValue"in r}function SR(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[ER])===null||n===void 0?void 0:n.stringValue)===AR}function gl(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Vl(r.mapValue.fields,(n,a)=>t.mapValue.fields[n]=gl(a)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=gl(r.arrayValue.values[n]);return t}return Object.assign({},r)}function bR(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===TR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t){this.value=t}static empty(){return new si({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let a=0;a<t.length-1;++a)if(n=(n.mapValue.fields||{})[t.get(a)],!Ed(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=gl(n)}setAll(t){let n=$e.emptyPath(),a={},l=[];t.forEach((d,g)=>{if(!n.isImmediateParentOf(g)){const p=this.getFieldsMap(n);this.applyChanges(p,a,l),a={},l=[],n=g.popLast()}d?a[g.lastSegment()]=gl(d):l.push(g.lastSegment())});const c=this.getFieldsMap(n);this.applyChanges(c,a,l)}delete(t){const n=this.field(t.popLast());Ed(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ci(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let a=0;a<t.length;++a){let l=n.mapValue.fields[t.get(a)];Ed(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},n.mapValue.fields[t.get(a)]=l),n=l}return n.mapValue.fields}applyChanges(t,n,a){Vl(n,(l,c)=>t[l]=c);for(const l of a)delete t[l]}clone(){return new si(gl(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t,n,a,l,c,d,g){this.key=t,this.documentType=n,this.version=a,this.readTime=l,this.createTime=c,this.data=d,this.documentState=g}static newInvalidDocument(t){return new Ge(t,0,_t.min(),_t.min(),_t.min(),si.empty(),0)}static newFoundDocument(t,n,a,l){return new Ge(t,1,n,_t.min(),a,l,0)}static newNoDocument(t,n){return new Ge(t,2,n,_t.min(),_t.min(),si.empty(),0)}static newUnknownDocument(t,n){return new Ge(t,3,n,_t.min(),_t.min(),si.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(_t.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=si.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=si.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_t.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ge&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t,n){this.position=t,this.inclusive=n}}function W_(r,t,n){let a=0;for(let l=0;l<r.position.length;l++){const c=t[l],d=r.position[l];if(c.field.isKeyField()?a=mt.comparator(mt.fromName(d.referenceValue),n.key):a=Ba(d,n.data.field(c.field)),c.dir==="desc"&&(a*=-1),a!==0)break}return a}function tv(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!ci(r.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,n="asc"){this.field=t,this.dir=n}}function wR(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{}class Ae extends iE{constructor(t,n,a){super(),this.field=t,this.op=n,this.value=a}static create(t,n,a){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,a):new IR(t,n,a):n==="array-contains"?new OR(t,a):n==="in"?new NR(t,a):n==="not-in"?new MR(t,a):n==="array-contains-any"?new VR(t,a):new Ae(t,n,a)}static createKeyFieldInFilter(t,n,a){return n==="in"?new CR(t,a):new DR(t,a)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ba(n,this.value)):n!==null&&Vr(this.value)===Vr(n)&&this.matchesComparison(Ba(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return vt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hi extends iE{constructor(t,n){super(),this.filters=t,this.op=n,this.Te=null}static create(t,n){return new hi(t,n)}matches(t){return rE(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function rE(r){return r.op==="and"}function sE(r){return RR(r)&&rE(r)}function RR(r){for(const t of r.filters)if(t instanceof hi)return!1;return!0}function Hd(r){if(r instanceof Ae)return r.field.canonicalString()+r.op.toString()+qa(r.value);if(sE(r))return r.filters.map(t=>Hd(t)).join(",");{const t=r.filters.map(n=>Hd(n)).join(",");return`${r.op}(${t})`}}function aE(r,t){return r instanceof Ae?function(a,l){return l instanceof Ae&&a.op===l.op&&a.field.isEqual(l.field)&&ci(a.value,l.value)}(r,t):r instanceof hi?function(a,l){return l instanceof hi&&a.op===l.op&&a.filters.length===l.filters.length?a.filters.reduce((c,d,g)=>c&&aE(d,l.filters[g]),!0):!1}(r,t):void vt(19439)}function oE(r){return r instanceof Ae?function(n){return`${n.field.canonicalString()} ${n.op} ${qa(n.value)}`}(r):r instanceof hi?function(n){return n.op.toString()+" {"+n.getFilters().map(oE).join(" ,")+"}"}(r):"Filter"}class IR extends Ae{constructor(t,n,a){super(t,n,a),this.key=mt.fromName(a.referenceValue)}matches(t){const n=mt.comparator(t.key,this.key);return this.matchesComparison(n)}}class CR extends Ae{constructor(t,n){super(t,"in",n),this.keys=lE("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class DR extends Ae{constructor(t,n){super(t,"not-in",n),this.keys=lE("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function lE(r,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(a=>mt.fromName(a.referenceValue))}class OR extends Ae{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return ym(n)&&Rl(n.arrayValue,this.value)}}class NR extends Ae{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Rl(this.value.arrayValue,n)}}class MR extends Ae{constructor(t,n){super(t,"not-in",n)}matches(t){if(Rl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Rl(this.value.arrayValue,n)}}class VR extends Ae{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!ym(n)||!n.arrayValue.values)&&n.arrayValue.values.some(a=>Rl(this.value.arrayValue,a))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(t,n=null,a=[],l=[],c=null,d=null,g=null){this.path=t,this.collectionGroup=n,this.orderBy=a,this.filters=l,this.limit=c,this.startAt=d,this.endAt=g,this.Ie=null}}function ev(r,t=null,n=[],a=[],l=null,c=null,d=null){return new kR(r,t,n,a,l,c,d)}function _m(r){const t=xt(r);if(t.Ie===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(a=>Hd(a)).join(","),n+="|ob:",n+=t.orderBy.map(a=>function(c){return c.field.canonicalString()+c.dir}(a)).join(","),Yc(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(a=>qa(a)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(a=>qa(a)).join(",")),t.Ie=n}return t.Ie}function vm(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!wR(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!aE(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!tv(r.startAt,t.startAt)&&tv(r.endAt,t.endAt)}function Gd(r){return mt.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t,n=null,a=[],l=[],c=null,d="F",g=null,p=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=a,this.filters=l,this.limit=c,this.limitType=d,this.startAt=g,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function PR(r,t,n,a,l,c,d,g){return new $c(r,t,n,a,l,c,d,g)}function uE(r){return new $c(r)}function nv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function xR(r){return r.collectionGroup!==null}function pl(r){const t=xt(r);if(t.Ee===null){t.Ee=[];const n=new Set;for(const c of t.explicitOrderBy)t.Ee.push(c),n.add(c.field.canonicalString());const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(d){let g=new Se($e.comparator);return d.filters.forEach(p=>{p.getFlattenedFilters().forEach(_=>{_.isInequality()&&(g=g.add(_.field))})}),g})(t).forEach(c=>{n.has(c.canonicalString())||c.isKeyField()||t.Ee.push(new Vc(c,a))}),n.has($e.keyField().canonicalString())||t.Ee.push(new Vc($e.keyField(),a))}return t.Ee}function li(r){const t=xt(r);return t.de||(t.de=LR(t,pl(r))),t.de}function LR(r,t){if(r.limitType==="F")return ev(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(l=>{const c=l.dir==="desc"?"asc":"desc";return new Vc(l.field,c)});const n=r.endAt?new Mc(r.endAt.position,r.endAt.inclusive):null,a=r.startAt?new Mc(r.startAt.position,r.startAt.inclusive):null;return ev(r.path,r.collectionGroup,t,r.filters,r.limit,n,a)}}function Fd(r,t,n){return new $c(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function Zc(r,t){return vm(li(r),li(t))&&r.limitType===t.limitType}function cE(r){return`${_m(li(r))}|lt:${r.limitType}`}function Ca(r){return`Query(target=${function(n){let a=n.path.canonicalString();return n.collectionGroup!==null&&(a+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(a+=`, filters: [${n.filters.map(l=>oE(l)).join(", ")}]`),Yc(n.limit)||(a+=", limit: "+n.limit),n.orderBy.length>0&&(a+=`, orderBy: [${n.orderBy.map(l=>function(d){return`${d.field.canonicalString()} (${d.dir})`}(l)).join(", ")}]`),n.startAt&&(a+=", startAt: ",a+=n.startAt.inclusive?"b:":"a:",a+=n.startAt.position.map(l=>qa(l)).join(",")),n.endAt&&(a+=", endAt: ",a+=n.endAt.inclusive?"a:":"b:",a+=n.endAt.position.map(l=>qa(l)).join(",")),`Target(${a})`}(li(r))}; limitType=${r.limitType})`}function Jc(r,t){return t.isFoundDocument()&&function(a,l){const c=l.key.path;return a.collectionGroup!==null?l.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(c):mt.isDocumentKey(a.path)?a.path.isEqual(c):a.path.isImmediateParentOf(c)}(r,t)&&function(a,l){for(const c of pl(a))if(!c.field.isKeyField()&&l.data.field(c.field)===null)return!1;return!0}(r,t)&&function(a,l){for(const c of a.filters)if(!c.matches(l))return!1;return!0}(r,t)&&function(a,l){return!(a.startAt&&!function(d,g,p){const _=W_(d,g,p);return d.inclusive?_<=0:_<0}(a.startAt,pl(a),l)||a.endAt&&!function(d,g,p){const _=W_(d,g,p);return d.inclusive?_>=0:_>0}(a.endAt,pl(a),l))}(r,t)}function UR(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function hE(r){return(t,n)=>{let a=!1;for(const l of pl(r)){const c=zR(l,t,n);if(c!==0)return c;a=a||l.field.isKeyField()}return 0}}function zR(r,t,n){const a=r.field.isKeyField()?mt.comparator(t.key,n.key):function(c,d,g){const p=d.data.field(c),_=g.data.field(c);return p!==null&&_!==null?Ba(p,_):vt(42886)}(r.field,t,n);switch(r.dir){case"asc":return a;case"desc":return-1*a;default:return vt(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),a=this.inner[n];if(a!==void 0){for(const[l,c]of a)if(this.equalsFn(l,t))return c}}has(t){return this.get(t)!==void 0}set(t,n){const a=this.mapKeyFn(t),l=this.inner[a];if(l===void 0)return this.inner[a]=[[t,n]],void this.innerSize++;for(let c=0;c<l.length;c++)if(this.equalsFn(l[c][0],t))return void(l[c]=[t,n]);l.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),a=this.inner[n];if(a===void 0)return!1;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],t))return a.length===1?delete this.inner[n]:a.splice(l,1),this.innerSize--,!0;return!1}forEach(t){Vl(this.inner,(n,a)=>{for(const[l,c]of a)t(l,c)})}isEmpty(){return yR(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR=new he(mt.comparator);function kr(){return BR}const fE=new he(mt.comparator);function hl(...r){let t=fE;for(const n of r)t=t.insert(n.key,n);return t}function qR(r){let t=fE;return r.forEach((n,a)=>t=t.insert(n,a.overlayedDocument)),t}function As(){return yl()}function dE(){return yl()}function yl(){return new ks(r=>r.toString(),(r,t)=>r.isEqual(t))}const jR=new Se(mt.comparator);function Lt(...r){let t=jR;for(const n of r)t=t.add(n);return t}const HR=new Se(wt);function GR(){return HR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zd(t)?"-0":t}}function KR(r){return{integerValue:""+r}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(){this._=void 0}}function QR(r,t,n){return r instanceof Kd?function(l,c){const d={fields:{[tE]:{stringValue:W0},[nE]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return c&&pm(c)&&(c=Xc(c)),c&&(d.fields[eE]=c),{mapValue:d}}(n,t):r instanceof kc?mE(r,t):r instanceof Pc?gE(r,t):function(l,c){const d=XR(l,c),g=iv(d)+iv(l.Re);return jd(d)&&jd(l.Re)?KR(g):FR(l.serializer,g)}(r,t)}function YR(r,t,n){return r instanceof kc?mE(r,t):r instanceof Pc?gE(r,t):n}function XR(r,t){return r instanceof Qd?function(a){return jd(a)||function(c){return!!c&&"doubleValue"in c}(a)}(t)?t:{integerValue:0}:null}class Kd extends Wc{}class kc extends Wc{constructor(t){super(),this.elements=t}}function mE(r,t){const n=pE(t);for(const a of r.elements)n.some(l=>ci(l,a))||n.push(a);return{arrayValue:{values:n}}}class Pc extends Wc{constructor(t){super(),this.elements=t}}function gE(r,t){let n=pE(t);for(const a of r.elements)n=n.filter(l=>!ci(l,a));return{arrayValue:{values:n}}}class Qd extends Wc{constructor(t,n){super(),this.serializer=t,this.Re=n}}function iv(r){return ce(r.integerValue||r.doubleValue)}function pE(r){return ym(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function $R(r,t){return r.field.isEqual(t.field)&&function(a,l){return a instanceof kc&&l instanceof kc||a instanceof Pc&&l instanceof Pc?za(a.elements,l.elements,ci):a instanceof Qd&&l instanceof Qd?ci(a.Re,l.Re):a instanceof Kd&&l instanceof Kd}(r.transform,t.transform)}class ws{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ws}static exists(t){return new ws(void 0,t)}static updateTime(t){return new ws(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ec(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Em{}function yE(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new JR(r.key,ws.none()):new Tm(r.key,r.data,ws.none());{const n=r.data,a=si.empty();let l=new Se($e.comparator);for(let c of t.fields)if(!l.has(c)){let d=n.field(c);d===null&&c.length>1&&(c=c.popLast(),d=n.field(c)),d===null?a.delete(c):a.set(c,d),l=l.add(c)}return new th(r.key,a,new br(l.toArray()),ws.none())}}function ZR(r,t,n){r instanceof Tm?function(l,c,d){const g=l.value.clone(),p=sv(l.fieldTransforms,c,d.transformResults);g.setAll(p),c.convertToFoundDocument(d.version,g).setHasCommittedMutations()}(r,t,n):r instanceof th?function(l,c,d){if(!Ec(l.precondition,c))return void c.convertToUnknownDocument(d.version);const g=sv(l.fieldTransforms,c,d.transformResults),p=c.data;p.setAll(_E(l)),p.setAll(g),c.convertToFoundDocument(d.version,p).setHasCommittedMutations()}(r,t,n):function(l,c,d){c.convertToNoDocument(d.version).setHasCommittedMutations()}(0,t,n)}function _l(r,t,n,a){return r instanceof Tm?function(c,d,g,p){if(!Ec(c.precondition,d))return g;const _=c.value.clone(),A=av(c.fieldTransforms,p,d);return _.setAll(A),d.convertToFoundDocument(d.version,_).setHasLocalMutations(),null}(r,t,n,a):r instanceof th?function(c,d,g,p){if(!Ec(c.precondition,d))return g;const _=av(c.fieldTransforms,p,d),A=d.data;return A.setAll(_E(c)),A.setAll(_),d.convertToFoundDocument(d.version,A).setHasLocalMutations(),g===null?null:g.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map(D=>D.field))}(r,t,n,a):function(c,d,g){return Ec(c.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):g}(r,t,n)}function rv(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(a,l){return a===void 0&&l===void 0||!(!a||!l)&&za(a,l,(c,d)=>$R(c,d))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Tm extends Em{constructor(t,n,a,l=[]){super(),this.key=t,this.value=n,this.precondition=a,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class th extends Em{constructor(t,n,a,l,c=[]){super(),this.key=t,this.data=n,this.fieldMask=a,this.precondition=l,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function _E(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const a=r.data.field(n);t.set(n,a)}}),t}function sv(r,t,n){const a=new Map;ee(r.length===n.length,32656,{Ve:n.length,me:r.length});for(let l=0;l<n.length;l++){const c=r[l],d=c.transform,g=t.data.field(c.field);a.set(c.field,YR(d,g,n[l]))}return a}function av(r,t,n){const a=new Map;for(const l of r){const c=l.transform,d=n.data.field(l.field);a.set(l.field,QR(c,d,t))}return a}class JR extends Em{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(t,n,a,l){this.batchId=t,this.localWriteTime=n,this.baseMutations=a,this.mutations=l}applyToRemoteDocument(t,n){const a=n.mutationResults;for(let l=0;l<this.mutations.length;l++){const c=this.mutations[l];c.key.isEqual(t.key)&&ZR(c,t,a[l])}}applyToLocalView(t,n){for(const a of this.baseMutations)a.key.isEqual(t.key)&&(n=_l(a,t,n,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(t.key)&&(n=_l(a,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const a=dE();return this.mutations.forEach(l=>{const c=t.get(l.key),d=c.overlayedDocument;let g=this.applyToLocalView(d,c.mutatedFields);g=n.has(l.key)?null:g;const p=yE(d,g);p!==null&&a.set(l.key,p),d.isValidDocument()||d.convertToNoDocument(_t.min())}),a}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Lt())}isEqual(t){return this.batchId===t.batchId&&za(this.mutations,t.mutations,(n,a)=>rv(n,a))&&za(this.baseMutations,t.baseMutations,(n,a)=>rv(n,a))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe,Pt;function vE(r){if(r===void 0)return Hi("GRPC error has no .code"),et.UNKNOWN;switch(r){case pe.OK:return et.OK;case pe.CANCELLED:return et.CANCELLED;case pe.UNKNOWN:return et.UNKNOWN;case pe.DEADLINE_EXCEEDED:return et.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return et.RESOURCE_EXHAUSTED;case pe.INTERNAL:return et.INTERNAL;case pe.UNAVAILABLE:return et.UNAVAILABLE;case pe.UNAUTHENTICATED:return et.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return et.INVALID_ARGUMENT;case pe.NOT_FOUND:return et.NOT_FOUND;case pe.ALREADY_EXISTS:return et.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return et.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return et.FAILED_PRECONDITION;case pe.ABORTED:return et.ABORTED;case pe.OUT_OF_RANGE:return et.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return et.UNIMPLEMENTED;case pe.DATA_LOSS:return et.DATA_LOSS;default:return vt(39323,{code:r})}}(Pt=pe||(pe={}))[Pt.OK=0]="OK",Pt[Pt.CANCELLED=1]="CANCELLED",Pt[Pt.UNKNOWN=2]="UNKNOWN",Pt[Pt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pt[Pt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pt[Pt.NOT_FOUND=5]="NOT_FOUND",Pt[Pt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pt[Pt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pt[Pt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pt[Pt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pt[Pt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pt[Pt.ABORTED=10]="ABORTED",Pt[Pt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pt[Pt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pt[Pt.INTERNAL=13]="INTERNAL",Pt[Pt.UNAVAILABLE=14]="UNAVAILABLE",Pt[Pt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=new Cr([4294967295,4294967295],0);function ov(r){const t=$0().encode(r),n=new j0;return n.update(t),new Uint8Array(n.digest())}function lv(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),a=t.getUint32(4,!0),l=t.getUint32(8,!0),c=t.getUint32(12,!0);return[new Cr([n,a],0),new Cr([l,c],0)]}class Am{constructor(t,n,a){if(this.bitmap=t,this.padding=n,this.hashCount=a,n<0||n>=8)throw new fl(`Invalid padding: ${n}`);if(a<0)throw new fl(`Invalid hash count: ${a}`);if(t.length>0&&this.hashCount===0)throw new fl(`Invalid hash count: ${a}`);if(t.length===0&&n!==0)throw new fl(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*t.length-n,this.ye=Cr.fromNumber(this.pe)}we(t,n,a){let l=t.add(n.multiply(Cr.fromNumber(a)));return l.compare(nI)===1&&(l=new Cr([l.getBits(0),l.getBits(1)],0)),l.modulo(this.ye).toNumber()}Se(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const n=ov(t),[a,l]=lv(n);for(let c=0;c<this.hashCount;c++){const d=this.we(a,l,c);if(!this.Se(d))return!1}return!0}static create(t,n,a){const l=t%8==0?0:8-t%8,c=new Uint8Array(Math.ceil(t/8)),d=new Am(c,l,n);return a.forEach(g=>d.insert(g)),d}insert(t){if(this.pe===0)return;const n=ov(t),[a,l]=lv(n);for(let c=0;c<this.hashCount;c++){const d=this.we(a,l,c);this.be(d)}}be(t){const n=Math.floor(t/8),a=t%8;this.bitmap[n]|=1<<a}}class fl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t,n,a,l,c){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=a,this.documentUpdates=l,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(t,n,a){const l=new Map;return l.set(t,kl.createSynthesizedTargetChangeForCurrentChange(t,n,a)),new eh(_t.min(),l,new he(wt),kr(),Lt())}}class kl{constructor(t,n,a,l,c){this.resumeToken=t,this.current=n,this.addedDocuments=a,this.modifiedDocuments=l,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(t,n,a){return new kl(a,n,Lt(),Lt(),Lt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t,n,a,l){this.De=t,this.removedTargetIds=n,this.key=a,this.ve=l}}class EE{constructor(t,n){this.targetId=t,this.Ce=n}}class TE{constructor(t,n,a=Ue.EMPTY_BYTE_STRING,l=null){this.state=t,this.targetIds=n,this.resumeToken=a,this.cause=l}}class uv{constructor(){this.Fe=0,this.Me=cv(),this.xe=Ue.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=Lt(),n=Lt(),a=Lt();return this.Me.forEach((l,c)=>{switch(c){case 0:t=t.add(l);break;case 2:n=n.add(l);break;case 1:a=a.add(l);break;default:vt(38017,{changeType:c})}}),new kl(this.xe,this.Oe,t,n,a)}Qe(){this.Ne=!1,this.Me=cv()}$e(t,n){this.Ne=!0,this.Me=this.Me.insert(t,n)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,ee(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class iI{constructor(t){this.ze=t,this.je=new Map,this.He=kr(),this.Je=hc(),this.Ye=hc(),this.Ze=new he(wt)}Xe(t){for(const n of t.De)t.ve&&t.ve.isFoundDocument()?this.et(n,t.ve):this.tt(n,t.key,t.ve);for(const n of t.removedTargetIds)this.tt(n,t.key,t.ve)}nt(t){this.forEachTarget(t,n=>{const a=this.rt(n);switch(t.state){case 0:this.it(n)&&a.ke(t.resumeToken);break;case 1:a.We(),a.Be||a.Qe(),a.ke(t.resumeToken);break;case 2:a.We(),a.Be||this.removeTarget(n);break;case 3:this.it(n)&&(a.Ge(),a.ke(t.resumeToken));break;case 4:this.it(n)&&(this.st(n),a.ke(t.resumeToken));break;default:vt(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.je.forEach((a,l)=>{this.it(l)&&n(l)})}ot(t){const n=t.targetId,a=t.Ce.count,l=this._t(n);if(l){const c=l.target;if(Gd(c))if(a===0){const d=new mt(c.path);this.tt(n,d,Ge.newNoDocument(d,_t.min()))}else ee(a===1,20013,{expectedCount:a});else{const d=this.ut(n);if(d!==a){const g=this.ct(t),p=g?this.lt(g,t,d):1;if(p!==0){this.st(n);const _=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,_)}}}}}ct(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:a="",padding:l=0},hashCount:c=0}=n;let d,g;try{d=Mr(a).toUint8Array()}catch(p){if(p instanceof J0)return Ua("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{g=new Am(d,l,c)}catch(p){return Ua(p instanceof fl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return g.pe===0?null:g}lt(t,n,a){return n.Ce.count===a-this.Tt(t,n.targetId)?0:2}Tt(t,n){const a=this.ze.getRemoteKeysForTarget(n);let l=0;return a.forEach(c=>{const d=this.ze.Pt(),g=`projects/${d.projectId}/databases/${d.database}/documents/${c.path.canonicalString()}`;t.mightContain(g)||(this.tt(n,c,null),l++)}),l}It(t){const n=new Map;this.je.forEach((c,d)=>{const g=this._t(d);if(g){if(c.current&&Gd(g.target)){const p=new mt(g.target.path);this.Et(p).has(d)||this.dt(d,p)||this.tt(d,p,Ge.newNoDocument(p,t))}c.Le&&(n.set(d,c.qe()),c.Qe())}});let a=Lt();this.Ye.forEach((c,d)=>{let g=!0;d.forEachWhile(p=>{const _=this._t(p);return!_||_.purpose==="TargetPurposeLimboResolution"||(g=!1,!1)}),g&&(a=a.add(c))}),this.He.forEach((c,d)=>d.setReadTime(t));const l=new eh(t,n,this.Ze,this.He,a);return this.He=kr(),this.Je=hc(),this.Ye=hc(),this.Ze=new he(wt),l}et(t,n){if(!this.it(t))return;const a=this.dt(t,n.key)?2:0;this.rt(t).$e(n.key,a),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(t)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(t))}tt(t,n,a){if(!this.it(t))return;const l=this.rt(t);this.dt(t,n)?l.$e(n,1):l.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(t)),this.Ye=this.Ye.insert(n,this.At(n).add(t)),a&&(this.He=this.He.insert(n,a))}removeTarget(t){this.je.delete(t)}ut(t){const n=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let n=this.je.get(t);return n||(n=new uv,this.je.set(t,n)),n}At(t){let n=this.Ye.get(t);return n||(n=new Se(wt),this.Ye=this.Ye.insert(t,n)),n}Et(t){let n=this.Je.get(t);return n||(n=new Se(wt),this.Je=this.Je.insert(t,n)),n}it(t){const n=this._t(t)!==null;return n||nt("WatchChangeAggregator","Detected inactive target",t),n}_t(t){const n=this.je.get(t);return n&&n.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new uv),this.ze.getRemoteKeysForTarget(t).forEach(n=>{this.tt(t,n,null)})}dt(t,n){return this.ze.getRemoteKeysForTarget(t).has(n)}}function hc(){return new he(mt.comparator)}function cv(){return new he(mt.comparator)}const rI={asc:"ASCENDING",desc:"DESCENDING"},sI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},aI={and:"AND",or:"OR"};class oI{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Yd(r,t){return r.useProto3Json||Yc(t)?t:{value:t}}function lI(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function uI(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Pa(r){return ee(!!r,49232),_t.fromTimestamp(function(n){const a=Nr(n);return new en(a.seconds,a.nanos)}(r))}function cI(r,t){return Xd(r,t).canonicalString()}function Xd(r,t){const n=function(l){return new ae(["projects",l.projectId,"databases",l.database])}(r).child("documents");return t===void 0?n:n.child(t)}function AE(r){const t=ae.fromString(r);return ee(IE(t),10190,{key:t.toString()}),t}function Td(r,t){const n=AE(t);if(n.get(1)!==r.databaseId.projectId)throw new ct(et.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new ct(et.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new mt(bE(n))}function SE(r,t){return cI(r.databaseId,t)}function hI(r){const t=AE(r);return t.length===4?ae.emptyPath():bE(t)}function hv(r){return new ae(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function bE(r){return ee(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function fI(r,t){let n;if("targetChange"in t){t.targetChange;const a=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:vt(39313,{state:_})}(t.targetChange.targetChangeType||"NO_CHANGE"),l=t.targetChange.targetIds||[],c=function(_,A){return _.useProto3Json?(ee(A===void 0||typeof A=="string",58123),Ue.fromBase64String(A||"")):(ee(A===void 0||A instanceof Buffer||A instanceof Uint8Array,16193),Ue.fromUint8Array(A||new Uint8Array))}(r,t.targetChange.resumeToken),d=t.targetChange.cause,g=d&&function(_){const A=_.code===void 0?et.UNKNOWN:vE(_.code);return new ct(A,_.message||"")}(d);n=new TE(a,l,c,g||null)}else if("documentChange"in t){t.documentChange;const a=t.documentChange;a.document,a.document.name,a.document.updateTime;const l=Td(r,a.document.name),c=Pa(a.document.updateTime),d=a.document.createTime?Pa(a.document.createTime):_t.min(),g=new si({mapValue:{fields:a.document.fields}}),p=Ge.newFoundDocument(l,c,d,g),_=a.targetIds||[],A=a.removedTargetIds||[];n=new Tc(_,A,p.key,p)}else if("documentDelete"in t){t.documentDelete;const a=t.documentDelete;a.document;const l=Td(r,a.document),c=a.readTime?Pa(a.readTime):_t.min(),d=Ge.newNoDocument(l,c),g=a.removedTargetIds||[];n=new Tc([],g,d.key,d)}else if("documentRemove"in t){t.documentRemove;const a=t.documentRemove;a.document;const l=Td(r,a.document),c=a.removedTargetIds||[];n=new Tc([],c,l,null)}else{if(!("filter"in t))return vt(11601,{Vt:t});{t.filter;const a=t.filter;a.targetId;const{count:l=0,unchangedNames:c}=a,d=new eI(l,c),g=a.targetId;n=new EE(g,d)}}return n}function dI(r,t){return{documents:[SE(r,t.path)]}}function mI(r,t){const n={structuredQuery:{}},a=t.path;let l;t.collectionGroup!==null?(l=a,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(l=a.popLast(),n.structuredQuery.from=[{collectionId:a.lastSegment()}]),n.parent=SE(r,l);const c=function(_){if(_.length!==0)return RE(hi.create(_,"and"))}(t.filters);c&&(n.structuredQuery.where=c);const d=function(_){if(_.length!==0)return _.map(A=>function(M){return{field:Da(M.field),direction:yI(M.dir)}}(A))}(t.orderBy);d&&(n.structuredQuery.orderBy=d);const g=Yd(r,t.limit);return g!==null&&(n.structuredQuery.limit=g),t.startAt&&(n.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(t.endAt)),{gt:n,parent:l}}function gI(r){let t=hI(r.parent);const n=r.structuredQuery,a=n.from?n.from.length:0;let l=null;if(a>0){ee(a===1,65062);const A=n.from[0];A.allDescendants?l=A.collectionId:t=t.child(A.collectionId)}let c=[];n.where&&(c=function(D){const M=wE(D);return M instanceof hi&&sE(M)?M.getFilters():[M]}(n.where));let d=[];n.orderBy&&(d=function(D){return D.map(M=>function(X){return new Vc(Oa(X.field),function(J){switch(J){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(X.direction))}(M))}(n.orderBy));let g=null;n.limit&&(g=function(D){let M;return M=typeof D=="object"?D.value:D,Yc(M)?null:M}(n.limit));let p=null;n.startAt&&(p=function(D){const M=!!D.before,q=D.values||[];return new Mc(q,M)}(n.startAt));let _=null;return n.endAt&&(_=function(D){const M=!D.before,q=D.values||[];return new Mc(q,M)}(n.endAt)),PR(t,l,d,c,g,"F",p,_)}function pI(r,t){const n=function(l){switch(l){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return vt(28987,{purpose:l})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function wE(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const a=Oa(n.unaryFilter.field);return Ae.create(a,"==",{doubleValue:NaN});case"IS_NULL":const l=Oa(n.unaryFilter.field);return Ae.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=Oa(n.unaryFilter.field);return Ae.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=Oa(n.unaryFilter.field);return Ae.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return vt(61313);default:return vt(60726)}}(r):r.fieldFilter!==void 0?function(n){return Ae.create(Oa(n.fieldFilter.field),function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return vt(58110);default:return vt(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return hi.create(n.compositeFilter.filters.map(a=>wE(a)),function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return vt(1026)}}(n.compositeFilter.op))}(r):vt(30097,{filter:r})}function yI(r){return rI[r]}function _I(r){return sI[r]}function vI(r){return aI[r]}function Da(r){return{fieldPath:r.canonicalString()}}function Oa(r){return $e.fromServerFormat(r.fieldPath)}function RE(r){return r instanceof Ae?function(n){if(n.op==="=="){if(J_(n.value))return{unaryFilter:{field:Da(n.field),op:"IS_NAN"}};if(Z_(n.value))return{unaryFilter:{field:Da(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(J_(n.value))return{unaryFilter:{field:Da(n.field),op:"IS_NOT_NAN"}};if(Z_(n.value))return{unaryFilter:{field:Da(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Da(n.field),op:_I(n.op),value:n.value}}}(r):r instanceof hi?function(n){const a=n.getFilters().map(l=>RE(l));return a.length===1?a[0]:{compositeFilter:{op:vI(n.op),filters:a}}}(r):vt(54877,{filter:r})}function IE(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t,n,a,l,c=_t.min(),d=_t.min(),g=Ue.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=n,this.purpose=a,this.sequenceNumber=l,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=g,this.expectedCount=p}withSequenceNumber(t){return new wr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(t){this.wt=t}}function TI(r){const t=gI({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Fd(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(){this.Cn=new SI}addToCollectionParentIndex(t,n){return this.Cn.add(n),Q.resolve()}getCollectionParents(t,n){return Q.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return Q.resolve()}deleteFieldIndex(t,n){return Q.resolve()}deleteAllFieldIndexes(t){return Q.resolve()}createTargetIndexes(t,n){return Q.resolve()}getDocumentsMatchingTarget(t,n){return Q.resolve(null)}getIndexType(t,n){return Q.resolve(0)}getFieldIndexes(t,n){return Q.resolve([])}getNextCollectionGroupToUpdate(t){return Q.resolve(null)}getMinOffset(t,n){return Q.resolve(Or.min())}getMinOffsetFromCollectionGroup(t,n){return Q.resolve(Or.min())}updateCollectionGroup(t,n,a){return Q.resolve()}updateIndexEntries(t,n){return Q.resolve()}}class SI{constructor(){this.index={}}add(t){const n=t.lastSegment(),a=t.popLast(),l=this.index[n]||new Se(ae.comparator),c=!l.has(a);return this.index[n]=l.add(a),c}has(t){const n=t.lastSegment(),a=t.popLast(),l=this.index[n];return l&&l.has(a)}getEntries(t){return(this.index[t]||new Se(ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},CE=41943040;class tn{static withCacheSize(t){return new tn(t,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,a){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.DEFAULT_COLLECTION_PERCENTILE=10,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tn.DEFAULT=new tn(CE,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tn.DISABLED=new tn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new ja(0)}static lr(){return new ja(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv="LruGarbageCollector",bI=1048576;function mv([r,t],[n,a]){const l=wt(r,n);return l===0?wt(t,a):l}class wI{constructor(t){this.Er=t,this.buffer=new Se(mv),this.dr=0}Ar(){return++this.dr}Rr(t){const n=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const a=this.buffer.last();mv(n,a)<0&&(this.buffer=this.buffer.delete(a).add(n))}}get maxValue(){return this.buffer.last()[0]}}class RI{constructor(t,n,a){this.garbageCollector=t,this.asyncQueue=n,this.localStore=a,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){nt(dv,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ya(n)?nt(dv,"Ignoring IndexedDB error during garbage collection: ",n):await Kc(n)}await this.mr(3e5)})}}class II{constructor(t,n){this.gr=t,this.params=n}calculateTargetCount(t,n){return this.gr.pr(t).next(a=>Math.floor(n/100*a))}nthSequenceNumber(t,n){if(n===0)return Q.resolve(Qc.le);const a=new wI(n);return this.gr.forEachTarget(t,l=>a.Rr(l.sequenceNumber)).next(()=>this.gr.yr(t,l=>a.Rr(l))).next(()=>a.maxValue)}removeTargets(t,n,a){return this.gr.removeTargets(t,n,a)}removeOrphanedDocuments(t,n){return this.gr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(nt("LruGarbageCollector","Garbage collection skipped; disabled"),Q.resolve(fv)):this.getCacheSize(t).next(a=>a<this.params.cacheSizeCollectionThreshold?(nt("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fv):this.wr(t,n))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,n){let a,l,c,d,g,p,_;const A=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(D=>(D>this.params.maximumSequenceNumbersToCollect?(nt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${D}`),l=this.params.maximumSequenceNumbersToCollect):l=D,d=Date.now(),this.nthSequenceNumber(t,l))).next(D=>(a=D,g=Date.now(),this.removeTargets(t,a,n))).next(D=>(c=D,p=Date.now(),this.removeOrphanedDocuments(t,a))).next(D=>(_=Date.now(),Ia()<=Ct.DEBUG&&nt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-A}ms
	Determined least recently used ${l} in `+(g-d)+`ms
	Removed ${c} targets in `+(p-g)+`ms
	Removed ${D} documents in `+(_-p)+`ms
Total Duration: ${_-A}ms`),Q.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:c,documentsRemoved:D})))}}function CI(r,t){return new II(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(){this.changes=new ks(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Ge.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const a=this.changes.get(n);return a!==void 0?Q.resolve(a):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(t,n,a,l){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=a,this.indexManager=l}getDocument(t,n){let a=null;return this.documentOverlayCache.getOverlay(t,n).next(l=>(a=l,this.remoteDocumentCache.getEntry(t,n))).next(l=>(a!==null&&_l(a.mutation,l,br.empty(),en.now()),l))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(a=>this.getLocalViewOfDocuments(t,a,Lt()).next(()=>a))}getLocalViewOfDocuments(t,n,a=Lt()){const l=As();return this.populateOverlays(t,l,n).next(()=>this.computeViews(t,n,l,a).next(c=>{let d=hl();return c.forEach((g,p)=>{d=d.insert(g,p.overlayedDocument)}),d}))}getOverlayedDocuments(t,n){const a=As();return this.populateOverlays(t,a,n).next(()=>this.computeViews(t,n,a,Lt()))}populateOverlays(t,n,a){const l=[];return a.forEach(c=>{n.has(c)||l.push(c)}),this.documentOverlayCache.getOverlays(t,l).next(c=>{c.forEach((d,g)=>{n.set(d,g)})})}computeViews(t,n,a,l){let c=kr();const d=yl(),g=function(){return yl()}();return n.forEach((p,_)=>{const A=a.get(_.key);l.has(_.key)&&(A===void 0||A.mutation instanceof th)?c=c.insert(_.key,_):A!==void 0?(d.set(_.key,A.mutation.getFieldMask()),_l(A.mutation,_,A.mutation.getFieldMask(),en.now())):d.set(_.key,br.empty())}),this.recalculateAndSaveOverlays(t,c).next(p=>(p.forEach((_,A)=>d.set(_,A)),n.forEach((_,A)=>{var D;return g.set(_,new OI(A,(D=d.get(_))!==null&&D!==void 0?D:null))}),g))}recalculateAndSaveOverlays(t,n){const a=yl();let l=new he((d,g)=>d-g),c=Lt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(d=>{for(const g of d)g.keys().forEach(p=>{const _=n.get(p);if(_===null)return;let A=a.get(p)||br.empty();A=g.applyToLocalView(_,A),a.set(p,A);const D=(l.get(g.batchId)||Lt()).add(p);l=l.insert(g.batchId,D)})}).next(()=>{const d=[],g=l.getReverseIterator();for(;g.hasNext();){const p=g.getNext(),_=p.key,A=p.value,D=dE();A.forEach(M=>{if(!c.has(M)){const q=yE(n.get(M),a.get(M));q!==null&&D.set(M,q),c=c.add(M)}}),d.push(this.documentOverlayCache.saveOverlays(t,_,D))}return Q.waitFor(d)}).next(()=>a)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(a=>this.recalculateAndSaveOverlays(t,a))}getDocumentsMatchingQuery(t,n,a,l){return function(d){return mt.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):xR(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,a,l):this.getDocumentsMatchingCollectionQuery(t,n,a,l)}getNextDocuments(t,n,a,l){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,a,l).next(c=>{const d=l-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,a.largestBatchId,l-c.size):Q.resolve(As());let g=Sl,p=c;return d.next(_=>Q.forEach(_,(A,D)=>(g<D.largestBatchId&&(g=D.largestBatchId),c.get(A)?Q.resolve():this.remoteDocumentCache.getEntry(t,A).next(M=>{p=p.insert(A,M)}))).next(()=>this.populateOverlays(t,_,c)).next(()=>this.computeViews(t,p,_,Lt())).next(A=>({batchId:g,changes:qR(A)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new mt(n)).next(a=>{let l=hl();return a.isFoundDocument()&&(l=l.insert(a.key,a)),l})}getDocumentsMatchingCollectionGroupQuery(t,n,a,l){const c=n.collectionGroup;let d=hl();return this.indexManager.getCollectionParents(t,c).next(g=>Q.forEach(g,p=>{const _=function(D,M){return new $c(M,null,D.explicitOrderBy.slice(),D.filters.slice(),D.limit,D.limitType,D.startAt,D.endAt)}(n,p.child(c));return this.getDocumentsMatchingCollectionQuery(t,_,a,l).next(A=>{A.forEach((D,M)=>{d=d.insert(D,M)})})}).next(()=>d))}getDocumentsMatchingCollectionQuery(t,n,a,l){let c;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,a.largestBatchId).next(d=>(c=d,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,a,c,l))).next(d=>{c.forEach((p,_)=>{const A=_.getKey();d.get(A)===null&&(d=d.insert(A,Ge.newInvalidDocument(A)))});let g=hl();return d.forEach((p,_)=>{const A=c.get(p);A!==void 0&&_l(A.mutation,_,br.empty(),en.now()),Jc(n,_)&&(g=g.insert(p,_))}),g})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,n){return Q.resolve(this.kr.get(n))}saveBundleMetadata(t,n){return this.kr.set(n.id,function(l){return{id:l.id,version:l.version,createTime:Pa(l.createTime)}}(n)),Q.resolve()}getNamedQuery(t,n){return Q.resolve(this.qr.get(n))}saveNamedQuery(t,n){return this.qr.set(n.name,function(l){return{name:l.name,query:TI(l.bundledQuery),readTime:Pa(l.readTime)}}(n)),Q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(){this.overlays=new he(mt.comparator),this.Qr=new Map}getOverlay(t,n){return Q.resolve(this.overlays.get(n))}getOverlays(t,n){const a=As();return Q.forEach(n,l=>this.getOverlay(t,l).next(c=>{c!==null&&a.set(l,c)})).next(()=>a)}saveOverlays(t,n,a){return a.forEach((l,c)=>{this.bt(t,n,c)}),Q.resolve()}removeOverlaysForBatchId(t,n,a){const l=this.Qr.get(a);return l!==void 0&&(l.forEach(c=>this.overlays=this.overlays.remove(c)),this.Qr.delete(a)),Q.resolve()}getOverlaysForCollection(t,n,a){const l=As(),c=n.length+1,d=new mt(n.child("")),g=this.overlays.getIteratorFrom(d);for(;g.hasNext();){const p=g.getNext().value,_=p.getKey();if(!n.isPrefixOf(_.path))break;_.path.length===c&&p.largestBatchId>a&&l.set(p.getKey(),p)}return Q.resolve(l)}getOverlaysForCollectionGroup(t,n,a,l){let c=new he((_,A)=>_-A);const d=this.overlays.getIterator();for(;d.hasNext();){const _=d.getNext().value;if(_.getKey().getCollectionGroup()===n&&_.largestBatchId>a){let A=c.get(_.largestBatchId);A===null&&(A=As(),c=c.insert(_.largestBatchId,A)),A.set(_.getKey(),_)}}const g=As(),p=c.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((_,A)=>g.set(_,A)),!(g.size()>=l)););return Q.resolve(g)}bt(t,n,a){const l=this.overlays.get(a.key);if(l!==null){const d=this.Qr.get(l.largestBatchId).delete(a.key);this.Qr.set(l.largestBatchId,d)}this.overlays=this.overlays.insert(a.key,new tI(n,a));let c=this.Qr.get(n);c===void 0&&(c=Lt(),this.Qr.set(n,c)),this.Qr.set(n,c.add(a.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(){this.sessionToken=Ue.EMPTY_BYTE_STRING}getSessionToken(t){return Q.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,Q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.$r=new Se(Oe.Ur),this.Kr=new Se(Oe.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,n){const a=new Oe(t,n);this.$r=this.$r.add(a),this.Kr=this.Kr.add(a)}Gr(t,n){t.forEach(a=>this.addReference(a,n))}removeReference(t,n){this.zr(new Oe(t,n))}jr(t,n){t.forEach(a=>this.removeReference(a,n))}Hr(t){const n=new mt(new ae([])),a=new Oe(n,t),l=new Oe(n,t+1),c=[];return this.Kr.forEachInRange([a,l],d=>{this.zr(d),c.push(d.key)}),c}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const n=new mt(new ae([])),a=new Oe(n,t),l=new Oe(n,t+1);let c=Lt();return this.Kr.forEachInRange([a,l],d=>{c=c.add(d.key)}),c}containsKey(t){const n=new Oe(t,0),a=this.$r.firstAfterOrEqual(n);return a!==null&&t.isEqual(a.key)}}class Oe{constructor(t,n){this.key=t,this.Zr=n}static Ur(t,n){return mt.comparator(t.key,n.key)||wt(t.Zr,n.Zr)}static Wr(t,n){return wt(t.Zr,n.Zr)||mt.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new Se(Oe.Ur)}checkEmpty(t){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,a,l){const c=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new WR(c,n,a,l);this.mutationQueue.push(d);for(const g of l)this.Xr=this.Xr.add(new Oe(g.key,c)),this.indexManager.addToCollectionParentIndex(t,g.key.path.popLast());return Q.resolve(d)}lookupMutationBatch(t,n){return Q.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(t,n){const a=n+1,l=this.ti(a),c=l<0?0:l;return Q.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?mR:this.nr-1)}getAllMutationBatches(t){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const a=new Oe(n,0),l=new Oe(n,Number.POSITIVE_INFINITY),c=[];return this.Xr.forEachInRange([a,l],d=>{const g=this.ei(d.Zr);c.push(g)}),Q.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(t,n){let a=new Se(wt);return n.forEach(l=>{const c=new Oe(l,0),d=new Oe(l,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([c,d],g=>{a=a.add(g.Zr)})}),Q.resolve(this.ni(a))}getAllMutationBatchesAffectingQuery(t,n){const a=n.path,l=a.length+1;let c=a;mt.isDocumentKey(c)||(c=c.child(""));const d=new Oe(new mt(c),0);let g=new Se(wt);return this.Xr.forEachWhile(p=>{const _=p.key.path;return!!a.isPrefixOf(_)&&(_.length===l&&(g=g.add(p.Zr)),!0)},d),Q.resolve(this.ni(g))}ni(t){const n=[];return t.forEach(a=>{const l=this.ei(a);l!==null&&n.push(l)}),n}removeMutationBatch(t,n){ee(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let a=this.Xr;return Q.forEach(n.mutations,l=>{const c=new Oe(l.key,n.batchId);return a=a.delete(c),this.referenceDelegate.markPotentiallyOrphaned(t,l.key)}).next(()=>{this.Xr=a})}sr(t){}containsKey(t,n){const a=new Oe(n,0),l=this.Xr.firstAfterOrEqual(a);return Q.resolve(n.isEqual(l&&l.key))}performConsistencyCheck(t){return this.mutationQueue.length,Q.resolve()}ri(t,n){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const n=this.ti(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(t){this.ii=t,this.docs=function(){return new he(mt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const a=n.key,l=this.docs.get(a),c=l?l.size:0,d=this.ii(n);return this.docs=this.docs.insert(a,{document:n.mutableCopy(),size:d}),this.size+=d-c,this.indexManager.addToCollectionParentIndex(t,a.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const a=this.docs.get(n);return Q.resolve(a?a.document.mutableCopy():Ge.newInvalidDocument(n))}getEntries(t,n){let a=kr();return n.forEach(l=>{const c=this.docs.get(l);a=a.insert(l,c?c.document.mutableCopy():Ge.newInvalidDocument(l))}),Q.resolve(a)}getDocumentsMatchingQuery(t,n,a,l){let c=kr();const d=n.path,g=new mt(d.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(g);for(;p.hasNext();){const{key:_,value:{document:A}}=p.getNext();if(!d.isPrefixOf(_.path))break;_.path.length>d.length+1||cR(uR(A),a)<=0||(l.has(A.key)||Jc(n,A))&&(c=c.insert(A.key,A.mutableCopy()))}return Q.resolve(c)}getAllFromCollectionGroup(t,n,a,l){vt(9500)}si(t,n){return Q.forEach(this.docs,a=>n(a))}newChangeBuffer(t){return new LI(this)}getSize(t){return Q.resolve(this.size)}}class LI extends DI{constructor(t){super(),this.Br=t}applyChanges(t){const n=[];return this.changes.forEach((a,l)=>{l.isValidDocument()?n.push(this.Br.addEntry(t,l)):this.Br.removeEntry(a)}),Q.waitFor(n)}getFromCache(t,n){return this.Br.getEntry(t,n)}getAllFromCache(t,n){return this.Br.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(t){this.persistence=t,this.oi=new ks(n=>_m(n),vm),this.lastRemoteSnapshotVersion=_t.min(),this.highestTargetId=0,this._i=0,this.ai=new Sm,this.targetCount=0,this.ui=ja.cr()}forEachTarget(t,n){return this.oi.forEach((a,l)=>n(l)),Q.resolve()}getLastRemoteSnapshotVersion(t){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Q.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(t,n,a){return a&&(this.lastRemoteSnapshotVersion=a),n>this._i&&(this._i=n),Q.resolve()}Tr(t){this.oi.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ui=new ja(n),this.highestTargetId=n),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,n){return this.Tr(n),this.targetCount+=1,Q.resolve()}updateTargetData(t,n){return this.Tr(n),Q.resolve()}removeTargetData(t,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,Q.resolve()}removeTargets(t,n,a){let l=0;const c=[];return this.oi.forEach((d,g)=>{g.sequenceNumber<=n&&a.get(g.targetId)===null&&(this.oi.delete(d),c.push(this.removeMatchingKeysForTargetId(t,g.targetId)),l++)}),Q.waitFor(c).next(()=>l)}getTargetCount(t){return Q.resolve(this.targetCount)}getTargetData(t,n){const a=this.oi.get(n)||null;return Q.resolve(a)}addMatchingKeys(t,n,a){return this.ai.Gr(n,a),Q.resolve()}removeMatchingKeys(t,n,a){this.ai.jr(n,a);const l=this.persistence.referenceDelegate,c=[];return l&&n.forEach(d=>{c.push(l.markPotentiallyOrphaned(t,d))}),Q.waitFor(c)}removeMatchingKeysForTargetId(t,n){return this.ai.Hr(n),Q.resolve()}getMatchingKeysForTargetId(t,n){const a=this.ai.Yr(n);return Q.resolve(a)}containsKey(t,n){return Q.resolve(this.ai.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(t,n){this.ci={},this.overlays={},this.li=new Qc(0),this.hi=!1,this.hi=!0,this.Pi=new kI,this.referenceDelegate=t(this),this.Ti=new UI(this),this.indexManager=new AI,this.remoteDocumentCache=function(l){return new xI(l)}(a=>this.referenceDelegate.Ii(a)),this.serializer=new EI(n),this.Ei=new MI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new VI,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let a=this.ci[t.toKey()];return a||(a=new PI(n,this.referenceDelegate),this.ci[t.toKey()]=a),a}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,n,a){nt("MemoryPersistence","Starting transaction:",t);const l=new zI(this.li.next());return this.referenceDelegate.di(),a(l).next(c=>this.referenceDelegate.Ai(l).next(()=>c)).toPromise().then(c=>(l.raiseOnCommittedEvent(),c))}Ri(t,n){return Q.or(Object.values(this.ci).map(a=>()=>a.containsKey(t,n)))}}class zI extends fR{constructor(t){super(),this.currentSequenceNumber=t}}class bm{constructor(t){this.persistence=t,this.Vi=new Sm,this.mi=null}static fi(t){return new bm(t)}get gi(){if(this.mi)return this.mi;throw vt(60996)}addReference(t,n,a){return this.Vi.addReference(a,n),this.gi.delete(a.toString()),Q.resolve()}removeReference(t,n,a){return this.Vi.removeReference(a,n),this.gi.add(a.toString()),Q.resolve()}markPotentiallyOrphaned(t,n){return this.gi.add(n.toString()),Q.resolve()}removeTarget(t,n){this.Vi.Hr(n.targetId).forEach(l=>this.gi.add(l.toString()));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(t,n.targetId).next(l=>{l.forEach(c=>this.gi.add(c.toString()))}).next(()=>a.removeTargetData(t,n))}di(){this.mi=new Set}Ai(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.gi,a=>{const l=mt.fromPath(a);return this.pi(t,l).next(c=>{c||n.removeEntry(l,_t.min())})}).next(()=>(this.mi=null,n.apply(t)))}updateLimboDocument(t,n){return this.pi(t,n).next(a=>{a?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(t){return 0}pi(t,n){return Q.or([()=>Q.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ri(t,n)])}}class xc{constructor(t,n){this.persistence=t,this.yi=new ks(a=>gR(a.path),(a,l)=>a.isEqual(l)),this.garbageCollector=CI(this,n)}static fi(t,n){return new xc(t,n)}di(){}Ai(t){return Q.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}pr(t){const n=this.Sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(a=>n.next(l=>a+l))}Sr(t){let n=0;return this.yr(t,a=>{n++}).next(()=>n)}yr(t,n){return Q.forEach(this.yi,(a,l)=>this.Dr(t,a,l).next(c=>c?Q.resolve():n(l)))}removeTargets(t,n,a){return this.persistence.getTargetCache().removeTargets(t,n,a)}removeOrphanedDocuments(t,n){let a=0;const l=this.persistence.getRemoteDocumentCache(),c=l.newChangeBuffer();return l.si(t,d=>this.Dr(t,d,n).next(g=>{g||(a++,c.removeEntry(d,_t.min()))})).next(()=>c.apply(t)).next(()=>a)}markPotentiallyOrphaned(t,n){return this.yi.set(n,t.currentSequenceNumber),Q.resolve()}removeTarget(t,n){const a=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,a)}addReference(t,n,a){return this.yi.set(a,t.currentSequenceNumber),Q.resolve()}removeReference(t,n,a){return this.yi.set(a,t.currentSequenceNumber),Q.resolve()}updateLimboDocument(t,n){return this.yi.set(n,t.currentSequenceNumber),Q.resolve()}Ii(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=vc(t.data.value)),n}Dr(t,n,a){return Q.or([()=>this.persistence.Ri(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const l=this.yi.get(n);return Q.resolve(l!==void 0&&l>a)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(t,n,a,l){this.targetId=t,this.fromCache=n,this.ds=a,this.As=l}static Rs(t,n){let a=Lt(),l=Lt();for(const c of n.docChanges)switch(c.type){case 0:a=a.add(c.doc.key);break;case 1:l=l.add(c.doc.key)}return new wm(t,n.fromCache,a,l)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return _S()?8:dR(Fe())>0?6:4}()}initialize(t,n){this.ys=t,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(t,n,a,l){const c={result:null};return this.ws(t,n).next(d=>{c.result=d}).next(()=>{if(!c.result)return this.Ss(t,n,l,a).next(d=>{c.result=d})}).next(()=>{if(c.result)return;const d=new BI;return this.bs(t,n,d).next(g=>{if(c.result=g,this.fs)return this.Ds(t,n,d,g.size)})}).next(()=>c.result)}Ds(t,n,a,l){return a.documentReadCount<this.gs?(Ia()<=Ct.DEBUG&&nt("QueryEngine","SDK will not create cache indexes for query:",Ca(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),Q.resolve()):(Ia()<=Ct.DEBUG&&nt("QueryEngine","Query:",Ca(n),"scans",a.documentReadCount,"local documents and returns",l,"documents as results."),a.documentReadCount>this.ps*l?(Ia()<=Ct.DEBUG&&nt("QueryEngine","The SDK decides to create cache indexes for query:",Ca(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,li(n))):Q.resolve())}ws(t,n){if(nv(n))return Q.resolve(null);let a=li(n);return this.indexManager.getIndexType(t,a).next(l=>l===0?null:(n.limit!==null&&l===1&&(n=Fd(n,null,"F"),a=li(n)),this.indexManager.getDocumentsMatchingTarget(t,a).next(c=>{const d=Lt(...c);return this.ys.getDocuments(t,d).next(g=>this.indexManager.getMinOffset(t,a).next(p=>{const _=this.vs(n,g);return this.Cs(n,_,d,p.readTime)?this.ws(t,Fd(n,null,"F")):this.Fs(t,_,n,p)}))})))}Ss(t,n,a,l){return nv(n)||l.isEqual(_t.min())?Q.resolve(null):this.ys.getDocuments(t,a).next(c=>{const d=this.vs(n,c);return this.Cs(n,d,a,l)?Q.resolve(null):(Ia()<=Ct.DEBUG&&nt("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),Ca(n)),this.Fs(t,d,n,lR(l,Sl)).next(g=>g))})}vs(t,n){let a=new Se(hE(t));return n.forEach((l,c)=>{Jc(t,c)&&(a=a.add(c))}),a}Cs(t,n,a,l){if(t.limit===null)return!1;if(a.size!==n.size)return!0;const c=t.limitType==="F"?n.last():n.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(l)>0)}bs(t,n,a){return Ia()<=Ct.DEBUG&&nt("QueryEngine","Using full collection scan to execute query:",Ca(n)),this.ys.getDocumentsMatchingQuery(t,n,Or.min(),a)}Fs(t,n,a,l){return this.ys.getDocumentsMatchingQuery(t,a,l).next(c=>(n.forEach(d=>{c=c.insert(d.key,d)}),c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="LocalStore",jI=3e8;class HI{constructor(t,n,a,l){this.persistence=t,this.Ms=n,this.serializer=l,this.xs=new he(wt),this.Os=new ks(c=>_m(c),vm),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(a)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new NI(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.xs))}}function GI(r,t,n,a){return new HI(r,t,n,a)}async function OE(r,t){const n=xt(r);return await n.persistence.runTransaction("Handle user change","readonly",a=>{let l;return n.mutationQueue.getAllMutationBatches(a).next(c=>(l=c,n.Ls(t),n.mutationQueue.getAllMutationBatches(a))).next(c=>{const d=[],g=[];let p=Lt();for(const _ of l){d.push(_.batchId);for(const A of _.mutations)p=p.add(A.key)}for(const _ of c){g.push(_.batchId);for(const A of _.mutations)p=p.add(A.key)}return n.localDocuments.getDocuments(a,p).next(_=>({ks:_,removedBatchIds:d,addedBatchIds:g}))})})}function NE(r){const t=xt(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ti.getLastRemoteSnapshotVersion(n))}function FI(r,t){const n=xt(r),a=t.snapshotVersion;let l=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",c=>{const d=n.Bs.newChangeBuffer({trackRemovals:!0});l=n.xs;const g=[];t.targetChanges.forEach((A,D)=>{const M=l.get(D);if(!M)return;g.push(n.Ti.removeMatchingKeys(c,A.removedDocuments,D).next(()=>n.Ti.addMatchingKeys(c,A.addedDocuments,D)));let q=M.withSequenceNumber(c.currentSequenceNumber);t.targetMismatches.get(D)!==null?q=q.withResumeToken(Ue.EMPTY_BYTE_STRING,_t.min()).withLastLimboFreeSnapshotVersion(_t.min()):A.resumeToken.approximateByteSize()>0&&(q=q.withResumeToken(A.resumeToken,a)),l=l.insert(D,q),function(it,J,Nt){return it.resumeToken.approximateByteSize()===0||J.snapshotVersion.toMicroseconds()-it.snapshotVersion.toMicroseconds()>=jI?!0:Nt.addedDocuments.size+Nt.modifiedDocuments.size+Nt.removedDocuments.size>0}(M,q,A)&&g.push(n.Ti.updateTargetData(c,q))});let p=kr(),_=Lt();if(t.documentUpdates.forEach(A=>{t.resolvedLimboDocuments.has(A)&&g.push(n.persistence.referenceDelegate.updateLimboDocument(c,A))}),g.push(KI(c,d,t.documentUpdates).next(A=>{p=A.qs,_=A.Qs})),!a.isEqual(_t.min())){const A=n.Ti.getLastRemoteSnapshotVersion(c).next(D=>n.Ti.setTargetsMetadata(c,c.currentSequenceNumber,a));g.push(A)}return Q.waitFor(g).next(()=>d.apply(c)).next(()=>n.localDocuments.getLocalViewOfDocuments(c,p,_)).next(()=>p)}).then(c=>(n.xs=l,c))}function KI(r,t,n){let a=Lt(),l=Lt();return n.forEach(c=>a=a.add(c)),t.getEntries(r,a).next(c=>{let d=kr();return n.forEach((g,p)=>{const _=c.get(g);p.isFoundDocument()!==_.isFoundDocument()&&(l=l.add(g)),p.isNoDocument()&&p.version.isEqual(_t.min())?(t.removeEntry(g,p.readTime),d=d.insert(g,p)):!_.isValidDocument()||p.version.compareTo(_.version)>0||p.version.compareTo(_.version)===0&&_.hasPendingWrites?(t.addEntry(p),d=d.insert(g,p)):nt(Rm,"Ignoring outdated watch update for ",g,". Current version:",_.version," Watch version:",p.version)}),{qs:d,Qs:l}})}function QI(r,t){const n=xt(r);return n.persistence.runTransaction("Allocate target","readwrite",a=>{let l;return n.Ti.getTargetData(a,t).next(c=>c?(l=c,Q.resolve(l)):n.Ti.allocateTargetId(a).next(d=>(l=new wr(t,d,"TargetPurposeListen",a.currentSequenceNumber),n.Ti.addTargetData(a,l).next(()=>l))))}).then(a=>{const l=n.xs.get(a.targetId);return(l===null||a.snapshotVersion.compareTo(l.snapshotVersion)>0)&&(n.xs=n.xs.insert(a.targetId,a),n.Os.set(t,a.targetId)),a})}async function $d(r,t,n){const a=xt(r),l=a.xs.get(t),c=n?"readwrite":"readwrite-primary";try{n||await a.persistence.runTransaction("Release target",c,d=>a.persistence.referenceDelegate.removeTarget(d,l))}catch(d){if(!Ya(d))throw d;nt(Rm,`Failed to update sequence numbers for target ${t}: ${d}`)}a.xs=a.xs.remove(t),a.Os.delete(l.target)}function gv(r,t,n){const a=xt(r);let l=_t.min(),c=Lt();return a.persistence.runTransaction("Execute query","readwrite",d=>function(p,_,A){const D=xt(p),M=D.Os.get(A);return M!==void 0?Q.resolve(D.xs.get(M)):D.Ti.getTargetData(_,A)}(a,d,li(t)).next(g=>{if(g)return l=g.lastLimboFreeSnapshotVersion,a.Ti.getMatchingKeysForTargetId(d,g.targetId).next(p=>{c=p})}).next(()=>a.Ms.getDocumentsMatchingQuery(d,t,n?l:_t.min(),n?c:Lt())).next(g=>(YI(a,UR(t),g),{documents:g,$s:c})))}function YI(r,t,n){let a=r.Ns.get(t)||_t.min();n.forEach((l,c)=>{c.readTime.compareTo(a)>0&&(a=c.readTime)}),r.Ns.set(t,a)}class pv{constructor(){this.activeTargetIds=GR()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class XI{constructor(){this.xo=new pv,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,a){}addLocalQueryTarget(t,n=!0){return n&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,n,a){this.Oo[t]=n}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new pv,Promise.resolve()}handleUserChange(t,n,a){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{No(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv="ConnectivityMonitor";class _v{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){nt(yv,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){nt(yv,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fc=null;function Zd(){return fc===null?fc=function(){return 268435456+Math.round(2147483648*Math.random())}():fc++,"0x"+fc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="RestConnection",ZI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class JI{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+t.host,this.Wo=`projects/${a}/databases/${l}`,this.Go=this.databaseId.database===Nc?`project_id=${a}`:`project_id=${a}&database_id=${l}`}zo(t,n,a,l,c){const d=Zd(),g=this.jo(t,n.toUriEncodedString());nt(Ad,`Sending RPC '${t}' ${d}:`,g,a);const p={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(p,l,c);const{host:_}=new URL(g),A=Il(_);return this.Jo(t,g,p,a,A).then(D=>(nt(Ad,`Received RPC '${t}' ${d}: `,D),D),D=>{throw Ua(Ad,`RPC '${t}' ${d} failed with error: `,D,"url: ",g,"request:",a),D})}Yo(t,n,a,l,c,d){return this.zo(t,n,a,l,c)}Ho(t,n,a){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qa}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((l,c)=>t[c]=l),a&&a.headers.forEach((l,c)=>t[c]=l)}jo(t,n){const a=ZI[t];return`${this.Ko}/v1/${n}:${a}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="WebChannelConnection";class tC extends JI{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,a,l,c){const d=Zd();return new Promise((g,p)=>{const _=new H0;_.setWithCredentials(!0),_.listenOnce(G0.COMPLETE,()=>{try{switch(_.getLastErrorCode()){case _c.NO_ERROR:const D=_.getResponseJson();nt(je,`XHR for RPC '${t}' ${d} received:`,JSON.stringify(D)),g(D);break;case _c.TIMEOUT:nt(je,`RPC '${t}' ${d} timed out`),p(new ct(et.DEADLINE_EXCEEDED,"Request time out"));break;case _c.HTTP_ERROR:const M=_.getStatus();if(nt(je,`RPC '${t}' ${d} failed with status:`,M,"response text:",_.getResponseText()),M>0){let q=_.getResponseJson();Array.isArray(q)&&(q=q[0]);const X=q==null?void 0:q.error;if(X&&X.status&&X.message){const it=function(Nt){const yt=Nt.toLowerCase().replace(/_/g,"-");return Object.values(et).indexOf(yt)>=0?yt:et.UNKNOWN}(X.status);p(new ct(it,X.message))}else p(new ct(et.UNKNOWN,"Server responded with status "+_.getStatus()))}else p(new ct(et.UNAVAILABLE,"Connection failed."));break;default:vt(9055,{l_:t,streamId:d,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{nt(je,`RPC '${t}' ${d} completed.`)}});const A=JSON.stringify(l);nt(je,`RPC '${t}' ${d} sending request:`,l),_.send(n,"POST",A,a,15)})}T_(t,n,a){const l=Zd(),c=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],d=Q0(),g=K0(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(p.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Ho(p.initMessageHeaders,n,a),p.encodeInitMessageHeaders=!0;const A=c.join("");nt(je,`Creating RPC '${t}' stream ${l}: ${A}`,p);const D=d.createWebChannel(A,p);let M=!1,q=!1;const X=new WI({Zo:J=>{q?nt(je,`Not sending because RPC '${t}' stream ${l} is closed:`,J):(M||(nt(je,`Opening RPC '${t}' stream ${l} transport.`),D.open(),M=!0),nt(je,`RPC '${t}' stream ${l} sending:`,J),D.send(J))},Xo:()=>D.close()}),it=(J,Nt,yt)=>{J.listen(Nt,ht=>{try{yt(ht)}catch(Dt){setTimeout(()=>{throw Dt},0)}})};return it(D,cl.EventType.OPEN,()=>{q||(nt(je,`RPC '${t}' stream ${l} transport opened.`),X.__())}),it(D,cl.EventType.CLOSE,()=>{q||(q=!0,nt(je,`RPC '${t}' stream ${l} transport closed`),X.u_())}),it(D,cl.EventType.ERROR,J=>{q||(q=!0,Ua(je,`RPC '${t}' stream ${l} transport errored. Name:`,J.name,"Message:",J.message),X.u_(new ct(et.UNAVAILABLE,"The operation could not be completed")))}),it(D,cl.EventType.MESSAGE,J=>{var Nt;if(!q){const yt=J.data[0];ee(!!yt,16349);const ht=yt,Dt=(ht==null?void 0:ht.error)||((Nt=ht[0])===null||Nt===void 0?void 0:Nt.error);if(Dt){nt(je,`RPC '${t}' stream ${l} received error:`,Dt);const pt=Dt.status;let Ot=function(w){const O=pe[w];if(O!==void 0)return vE(O)}(pt),N=Dt.message;Ot===void 0&&(Ot=et.INTERNAL,N="Unknown error status: "+pt+" with message "+Dt.message),q=!0,X.u_(new ct(Ot,N)),D.close()}else nt(je,`RPC '${t}' stream ${l} received:`,yt),X.c_(yt)}}),it(g,F0.STAT_EVENT,J=>{J.stat===Ld.PROXY?nt(je,`RPC '${t}' stream ${l} detected buffering proxy`):J.stat===Ld.NOPROXY&&nt(je,`RPC '${t}' stream ${l} detected no buffering proxy`)}),setTimeout(()=>{X.a_()},0),X}}function Sd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(r){return new oI(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(t,n,a=1e3,l=1.5,c=6e4){this.xi=t,this.timerId=n,this.I_=a,this.E_=l,this.d_=c,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(t){this.cancel();const n=Math.floor(this.A_+this.g_()),a=Math.max(0,Date.now()-this.V_),l=Math.max(0,n-a);l>0&&nt("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.A_} ms, delay with jitter: ${n} ms, last attempt: ${a} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,l,()=>(this.V_=Date.now(),t())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv="PersistentStream";class eC{constructor(t,n,a,l,c,d,g,p){this.xi=t,this.y_=a,this.w_=l,this.connection=c,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=g,this.listener=p,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new VE(t,n)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(t){this.k_(),this.stream.send(t)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(t,n){this.k_(),this.q_(),this.C_.cancel(),this.S_++,t!==4?this.C_.reset():n&&n.code===et.RESOURCE_EXHAUSTED?(Hi(n.toString()),Hi("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):n&&n.code===et.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(n)}Q_(){}auth(){this.state=1;const t=this.U_(this.S_),n=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,l])=>{this.S_===n&&this.K_(a,l)},a=>{t(()=>{const l=new ct(et.UNKNOWN,"Fetching auth token failed: "+a.message);return this.W_(l)})})}K_(t,n){const a=this.U_(this.S_);this.stream=this.G_(t,n),this.stream.e_(()=>{a(()=>this.listener.e_())}),this.stream.n_(()=>{a(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(l=>{a(()=>this.W_(l))}),this.stream.onMessage(l=>{a(()=>++this.v_==1?this.z_(l):this.onNext(l))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(t){return nt(vv,`close with error: ${t}`),this.stream=null,this.close(4,t)}U_(t){return n=>{this.xi.enqueueAndForget(()=>this.S_===t?n():(nt(vv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nC extends eC{constructor(t,n,a,l,c,d){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,a,l,d),this.serializer=c}G_(t,n){return this.connection.T_("Listen",t,n)}z_(t){return this.onNext(t)}onNext(t){this.C_.reset();const n=fI(this.serializer,t),a=function(c){if(!("targetChange"in c))return _t.min();const d=c.targetChange;return d.targetIds&&d.targetIds.length?_t.min():d.readTime?Pa(d.readTime):_t.min()}(t);return this.listener.j_(n,a)}H_(t){const n={};n.database=hv(this.serializer),n.addTarget=function(c,d){let g;const p=d.target;if(g=Gd(p)?{documents:dI(c,p)}:{query:mI(c,p).gt},g.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){g.resumeToken=uI(c,d.resumeToken);const _=Yd(c,d.expectedCount);_!==null&&(g.expectedCount=_)}else if(d.snapshotVersion.compareTo(_t.min())>0){g.readTime=lI(c,d.snapshotVersion.toTimestamp());const _=Yd(c,d.expectedCount);_!==null&&(g.expectedCount=_)}return g}(this.serializer,t);const a=pI(this.serializer,t);a&&(n.labels=a),this.L_(n)}J_(t){const n={};n.database=hv(this.serializer),n.removeTarget=t,this.L_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{}class rC extends iC{constructor(t,n,a,l){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=a,this.serializer=l,this.na=!1}ra(){if(this.na)throw new ct(et.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,n,a,l){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.zo(t,Xd(n,a),l,c,d)).catch(c=>{throw c.name==="FirebaseError"?(c.code===et.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ct(et.UNKNOWN,c.toString())})}Yo(t,n,a,l,c){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,g])=>this.connection.Yo(t,Xd(n,a),l,d,g,c)).catch(d=>{throw d.name==="FirebaseError"?(d.code===et.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new ct(et.UNKNOWN,d.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class sC{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(t){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.aa("Offline")))}set(t){this.la(),this.ia=0,t==="Online"&&(this.oa=!1),this.aa(t)}aa(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ua(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Hi(n),this.oa=!1):nt("OnlineStateTracker",n)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="RemoteStore";class aC{constructor(t,n,a,l,c){this.localStore=t,this.datastore=n,this.asyncQueue=a,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=c,this.Ea.No(d=>{a.enqueueAndForget(async()=>{xl(this)&&(nt(Ha,"Restarting streams for network reachability change."),await async function(p){const _=xt(p);_.Ta.add(4),await Pl(_),_.da.set("Unknown"),_.Ta.delete(4),await nh(_)}(this))})}),this.da=new sC(a,l)}}async function nh(r){if(xl(r))for(const t of r.Ia)await t(!0)}async function Pl(r){for(const t of r.Ia)await t(!1)}function kE(r,t){const n=xt(r);n.Pa.has(t.targetId)||(n.Pa.set(t.targetId,t),Om(n)?Dm(n):Xa(n).M_()&&Cm(n,t))}function Im(r,t){const n=xt(r),a=Xa(n);n.Pa.delete(t),a.M_()&&PE(n,t),n.Pa.size===0&&(a.M_()?a.N_():xl(n)&&n.da.set("Unknown"))}function Cm(r,t){if(r.Aa.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(_t.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Xa(r).H_(t)}function PE(r,t){r.Aa.Ke(t),Xa(r).J_(t)}function Dm(r){r.Aa=new iI({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>r.Pa.get(t)||null,Pt:()=>r.datastore.serializer.databaseId}),Xa(r).start(),r.da._a()}function Om(r){return xl(r)&&!Xa(r).F_()&&r.Pa.size>0}function xl(r){return xt(r).Ta.size===0}function xE(r){r.Aa=void 0}async function oC(r){r.da.set("Online")}async function lC(r){r.Pa.forEach((t,n)=>{Cm(r,t)})}async function uC(r,t){xE(r),Om(r)?(r.da.ca(t),Dm(r)):r.da.set("Unknown")}async function cC(r,t,n){if(r.da.set("Online"),t instanceof TE&&t.state===2&&t.cause)try{await async function(l,c){const d=c.cause;for(const g of c.targetIds)l.Pa.has(g)&&(await l.remoteSyncer.rejectListen(g,d),l.Pa.delete(g),l.Aa.removeTarget(g))}(r,t)}catch(a){nt(Ha,"Failed to remove targets %s: %s ",t.targetIds.join(","),a),await Ev(r,a)}else if(t instanceof Tc?r.Aa.Xe(t):t instanceof EE?r.Aa.ot(t):r.Aa.nt(t),!n.isEqual(_t.min()))try{const a=await NE(r.localStore);n.compareTo(a)>=0&&await function(c,d){const g=c.Aa.It(d);return g.targetChanges.forEach((p,_)=>{if(p.resumeToken.approximateByteSize()>0){const A=c.Pa.get(_);A&&c.Pa.set(_,A.withResumeToken(p.resumeToken,d))}}),g.targetMismatches.forEach((p,_)=>{const A=c.Pa.get(p);if(!A)return;c.Pa.set(p,A.withResumeToken(Ue.EMPTY_BYTE_STRING,A.snapshotVersion)),PE(c,p);const D=new wr(A.target,p,_,A.sequenceNumber);Cm(c,D)}),c.remoteSyncer.applyRemoteEvent(g)}(r,n)}catch(a){nt(Ha,"Failed to raise snapshot:",a),await Ev(r,a)}}async function Ev(r,t,n){if(!Ya(t))throw t;r.Ta.add(1),await Pl(r),r.da.set("Offline"),n||(n=()=>NE(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{nt(Ha,"Retrying IndexedDB access"),await n(),r.Ta.delete(1),await nh(r)})}async function Tv(r,t){const n=xt(r);n.asyncQueue.verifyOperationInProgress(),nt(Ha,"RemoteStore received new credentials");const a=xl(n);n.Ta.add(3),await Pl(n),a&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ta.delete(3),await nh(n)}async function hC(r,t){const n=xt(r);t?(n.Ta.delete(2),await nh(n)):t||(n.Ta.add(2),await Pl(n),n.da.set("Unknown"))}function Xa(r){return r.Ra||(r.Ra=function(n,a,l){const c=xt(n);return c.ra(),new nC(a,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)}(r.datastore,r.asyncQueue,{e_:oC.bind(null,r),n_:lC.bind(null,r),i_:uC.bind(null,r),j_:cC.bind(null,r)}),r.Ia.push(async t=>{t?(r.Ra.O_(),Om(r)?Dm(r):r.da.set("Unknown")):(await r.Ra.stop(),xE(r))})),r.Ra}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(t,n,a,l,c){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=a,this.op=l,this.removalCallback=c,this.deferred=new bs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(d=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,a,l,c){const d=Date.now()+a,g=new Nm(t,n,d,l,c);return g.start(a),g}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ct(et.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function LE(r,t){if(Hi("AsyncQueue",`${t}: ${r}`),Ya(r))return new ct(et.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{static emptySet(t){return new xa(t.comparator)}constructor(t){this.comparator=t?(n,a)=>t(n,a)||mt.comparator(n.key,a.key):(n,a)=>mt.comparator(n.key,a.key),this.keyedMap=hl(),this.sortedSet=new he(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,a)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof xa)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),a=t.sortedSet.getIterator();for(;n.hasNext();){const l=n.getNext().key,c=a.getNext().key;if(!l.isEqual(c))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const a=new xa;return a.comparator=this.comparator,a.keyedMap=t,a.sortedSet=n,a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(){this.ma=new he(mt.comparator)}track(t){const n=t.doc.key,a=this.ma.get(n);a?t.type!==0&&a.type===3?this.ma=this.ma.insert(n,t):t.type===3&&a.type!==1?this.ma=this.ma.insert(n,{type:a.type,doc:t.doc}):t.type===2&&a.type===2?this.ma=this.ma.insert(n,{type:2,doc:t.doc}):t.type===2&&a.type===0?this.ma=this.ma.insert(n,{type:0,doc:t.doc}):t.type===1&&a.type===0?this.ma=this.ma.remove(n):t.type===1&&a.type===2?this.ma=this.ma.insert(n,{type:1,doc:a.doc}):t.type===0&&a.type===1?this.ma=this.ma.insert(n,{type:2,doc:t.doc}):vt(63341,{Vt:t,fa:a}):this.ma=this.ma.insert(n,t)}ga(){const t=[];return this.ma.inorderTraversal((n,a)=>{t.push(a)}),t}}class Ga{constructor(t,n,a,l,c,d,g,p,_){this.query=t,this.docs=n,this.oldDocs=a,this.docChanges=l,this.mutatedKeys=c,this.fromCache=d,this.syncStateChanged=g,this.excludesMetadataChanges=p,this.hasCachedResults=_}static fromInitialDocuments(t,n,a,l,c){const d=[];return n.forEach(g=>{d.push({type:0,doc:g})}),new Ga(t,n,xa.emptySet(n),d,a,l,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Zc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,a=t.docChanges;if(n.length!==a.length)return!1;for(let l=0;l<n.length;l++)if(n[l].type!==a[l].type||!n[l].doc.isEqual(a[l].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(t=>t.Sa())}}class dC{constructor(){this.queries=Sv(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(n,a){const l=xt(n),c=l.queries;l.queries=Sv(),c.forEach((d,g)=>{for(const p of g.ya)p.onError(a)})})(this,new ct(et.ABORTED,"Firestore shutting down"))}}function Sv(){return new ks(r=>cE(r),Zc)}async function mC(r,t){const n=xt(r);let a=3;const l=t.query;let c=n.queries.get(l);c?!c.wa()&&t.Sa()&&(a=2):(c=new fC,a=t.Sa()?0:1);try{switch(a){case 0:c.pa=await n.onListen(l,!0);break;case 1:c.pa=await n.onListen(l,!1);break;case 2:await n.onFirstRemoteStoreListen(l)}}catch(d){const g=LE(d,`Initialization of query '${Ca(t.query)}' failed`);return void t.onError(g)}n.queries.set(l,c),c.ya.push(t),t.Da(n.onlineState),c.pa&&t.va(c.pa)&&Mm(n)}async function gC(r,t){const n=xt(r),a=t.query;let l=3;const c=n.queries.get(a);if(c){const d=c.ya.indexOf(t);d>=0&&(c.ya.splice(d,1),c.ya.length===0?l=t.Sa()?0:1:!c.wa()&&t.Sa()&&(l=2))}switch(l){case 0:return n.queries.delete(a),n.onUnlisten(a,!0);case 1:return n.queries.delete(a),n.onUnlisten(a,!1);case 2:return n.onLastRemoteStoreUnlisten(a);default:return}}function pC(r,t){const n=xt(r);let a=!1;for(const l of t){const c=l.query,d=n.queries.get(c);if(d){for(const g of d.ya)g.va(l)&&(a=!0);d.pa=l}}a&&Mm(n)}function yC(r,t,n){const a=xt(r),l=a.queries.get(t);if(l)for(const c of l.ya)c.onError(n);a.queries.delete(t)}function Mm(r){r.ba.forEach(t=>{t.next()})}var Jd,bv;(bv=Jd||(Jd={})).Ca="default",bv.Cache="cache";class _C{constructor(t,n,a){this.query=t,this.Fa=n,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=a||{}}va(t){if(!this.options.includeMetadataChanges){const a=[];for(const l of t.docChanges)l.type!==3&&a.push(l);t=new Ga(t.query,t.docs,t.oldDocs,a,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Ma?this.Oa(t)&&(this.Fa.next(t),n=!0):this.Na(t,this.onlineState)&&(this.Ba(t),n=!0),this.xa=t,n}onError(t){this.Fa.error(t)}Da(t){this.onlineState=t;let n=!1;return this.xa&&!this.Ma&&this.Na(this.xa,t)&&(this.Ba(this.xa),n=!0),n}Na(t,n){if(!t.fromCache||!this.Sa())return!0;const a=n!=="Offline";return(!this.options.La||!a)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Oa(t){if(t.docChanges.length>0)return!0;const n=this.xa&&this.xa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ba(t){t=Ga.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Ma=!0,this.Fa.next(t)}Sa(){return this.options.source!==Jd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(t){this.key=t}}class zE{constructor(t){this.key=t}}class vC{constructor(t,n){this.query=t,this.Ga=n,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=Lt(),this.mutatedKeys=Lt(),this.Ha=hE(t),this.Ja=new xa(this.Ha)}get Ya(){return this.Ga}Za(t,n){const a=n?n.Xa:new Av,l=n?n.Ja:this.Ja;let c=n?n.mutatedKeys:this.mutatedKeys,d=l,g=!1;const p=this.query.limitType==="F"&&l.size===this.query.limit?l.last():null,_=this.query.limitType==="L"&&l.size===this.query.limit?l.first():null;if(t.inorderTraversal((A,D)=>{const M=l.get(A),q=Jc(this.query,D)?D:null,X=!!M&&this.mutatedKeys.has(M.key),it=!!q&&(q.hasLocalMutations||this.mutatedKeys.has(q.key)&&q.hasCommittedMutations);let J=!1;M&&q?M.data.isEqual(q.data)?X!==it&&(a.track({type:3,doc:q}),J=!0):this.eu(M,q)||(a.track({type:2,doc:q}),J=!0,(p&&this.Ha(q,p)>0||_&&this.Ha(q,_)<0)&&(g=!0)):!M&&q?(a.track({type:0,doc:q}),J=!0):M&&!q&&(a.track({type:1,doc:M}),J=!0,(p||_)&&(g=!0)),J&&(q?(d=d.add(q),c=it?c.add(A):c.delete(A)):(d=d.delete(A),c=c.delete(A)))}),this.query.limit!==null)for(;d.size>this.query.limit;){const A=this.query.limitType==="F"?d.last():d.first();d=d.delete(A.key),c=c.delete(A.key),a.track({type:1,doc:A})}return{Ja:d,Xa:a,Cs:g,mutatedKeys:c}}eu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,a,l){const c=this.Ja;this.Ja=t.Ja,this.mutatedKeys=t.mutatedKeys;const d=t.Xa.ga();d.sort((A,D)=>function(q,X){const it=J=>{switch(J){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return vt(20277,{Vt:J})}};return it(q)-it(X)}(A.type,D.type)||this.Ha(A.doc,D.doc)),this.tu(a),l=l!=null&&l;const g=n&&!l?this.nu():[],p=this.ja.size===0&&this.current&&!l?1:0,_=p!==this.za;return this.za=p,d.length!==0||_?{snapshot:new Ga(this.query,t.Ja,c,d,t.mutatedKeys,p===0,_,!1,!!a&&a.resumeToken.approximateByteSize()>0),ru:g}:{ru:g}}Da(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new Av,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(t){return!this.Ga.has(t)&&!!this.Ja.has(t)&&!this.Ja.get(t).hasLocalMutations}tu(t){t&&(t.addedDocuments.forEach(n=>this.Ga=this.Ga.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ga=this.Ga.delete(n)),this.current=t.current)}nu(){if(!this.current)return[];const t=this.ja;this.ja=Lt(),this.Ja.forEach(a=>{this.iu(a.key)&&(this.ja=this.ja.add(a.key))});const n=[];return t.forEach(a=>{this.ja.has(a)||n.push(new zE(a))}),this.ja.forEach(a=>{t.has(a)||n.push(new UE(a))}),n}su(t){this.Ga=t.$s,this.ja=Lt();const n=this.Za(t.documents);return this.applyChanges(n,!0)}ou(){return Ga.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const Vm="SyncEngine";class EC{constructor(t,n,a){this.query=t,this.targetId=n,this.view=a}}class TC{constructor(t){this.key=t,this._u=!1}}class AC{constructor(t,n,a,l,c,d){this.localStore=t,this.remoteStore=n,this.eventManager=a,this.sharedClientState=l,this.currentUser=c,this.maxConcurrentLimboResolutions=d,this.au={},this.uu=new ks(g=>cE(g),Zc),this.cu=new Map,this.lu=new Set,this.hu=new he(mt.comparator),this.Pu=new Map,this.Tu=new Sm,this.Iu={},this.Eu=new Map,this.du=ja.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function SC(r,t,n=!0){const a=GE(r);let l;const c=a.uu.get(t);return c?(a.sharedClientState.addLocalQueryTarget(c.targetId),l=c.view.ou()):l=await BE(a,t,n,!0),l}async function bC(r,t){const n=GE(r);await BE(n,t,!0,!1)}async function BE(r,t,n,a){const l=await QI(r.localStore,li(t)),c=l.targetId,d=r.sharedClientState.addLocalQueryTarget(c,n);let g;return a&&(g=await wC(r,t,c,d==="current",l.resumeToken)),r.isPrimaryClient&&n&&kE(r.remoteStore,l),g}async function wC(r,t,n,a,l){r.Ru=(D,M,q)=>async function(it,J,Nt,yt){let ht=J.view.Za(Nt);ht.Cs&&(ht=await gv(it.localStore,J.query,!1).then(({documents:N})=>J.view.Za(N,ht)));const Dt=yt&&yt.targetChanges.get(J.targetId),pt=yt&&yt.targetMismatches.get(J.targetId)!=null,Ot=J.view.applyChanges(ht,it.isPrimaryClient,Dt,pt);return Rv(it,J.targetId,Ot.ru),Ot.snapshot}(r,D,M,q);const c=await gv(r.localStore,t,!0),d=new vC(t,c.$s),g=d.Za(c.documents),p=kl.createSynthesizedTargetChangeForCurrentChange(n,a&&r.onlineState!=="Offline",l),_=d.applyChanges(g,r.isPrimaryClient,p);Rv(r,n,_.ru);const A=new EC(t,n,d);return r.uu.set(t,A),r.cu.has(n)?r.cu.get(n).push(t):r.cu.set(n,[t]),_.snapshot}async function RC(r,t,n){const a=xt(r),l=a.uu.get(t),c=a.cu.get(l.targetId);if(c.length>1)return a.cu.set(l.targetId,c.filter(d=>!Zc(d,t))),void a.uu.delete(t);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(l.targetId),a.sharedClientState.isActiveQueryTarget(l.targetId)||await $d(a.localStore,l.targetId,!1).then(()=>{a.sharedClientState.clearQueryState(l.targetId),n&&Im(a.remoteStore,l.targetId),Wd(a,l.targetId)}).catch(Kc)):(Wd(a,l.targetId),await $d(a.localStore,l.targetId,!0))}async function IC(r,t){const n=xt(r),a=n.uu.get(t),l=n.cu.get(a.targetId);n.isPrimaryClient&&l.length===1&&(n.sharedClientState.removeLocalQueryTarget(a.targetId),Im(n.remoteStore,a.targetId))}async function qE(r,t){const n=xt(r);try{const a=await FI(n.localStore,t);t.targetChanges.forEach((l,c)=>{const d=n.Pu.get(c);d&&(ee(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1,22616),l.addedDocuments.size>0?d._u=!0:l.modifiedDocuments.size>0?ee(d._u,14607):l.removedDocuments.size>0&&(ee(d._u,42227),d._u=!1))}),await HE(n,a,t)}catch(a){await Kc(a)}}function wv(r,t,n){const a=xt(r);if(a.isPrimaryClient&&n===0||!a.isPrimaryClient&&n===1){const l=[];a.uu.forEach((c,d)=>{const g=d.view.Da(t);g.snapshot&&l.push(g.snapshot)}),function(d,g){const p=xt(d);p.onlineState=g;let _=!1;p.queries.forEach((A,D)=>{for(const M of D.ya)M.Da(g)&&(_=!0)}),_&&Mm(p)}(a.eventManager,t),l.length&&a.au.j_(l),a.onlineState=t,a.isPrimaryClient&&a.sharedClientState.setOnlineState(t)}}async function CC(r,t,n){const a=xt(r);a.sharedClientState.updateQueryState(t,"rejected",n);const l=a.Pu.get(t),c=l&&l.key;if(c){let d=new he(mt.comparator);d=d.insert(c,Ge.newNoDocument(c,_t.min()));const g=Lt().add(c),p=new eh(_t.min(),new Map,new he(wt),d,g);await qE(a,p),a.hu=a.hu.remove(c),a.Pu.delete(t),km(a)}else await $d(a.localStore,t,!1).then(()=>Wd(a,t,n)).catch(Kc)}function Wd(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const a of r.cu.get(t))r.uu.delete(a),n&&r.au.Vu(a,n);r.cu.delete(t),r.isPrimaryClient&&r.Tu.Hr(t).forEach(a=>{r.Tu.containsKey(a)||jE(r,a)})}function jE(r,t){r.lu.delete(t.path.canonicalString());const n=r.hu.get(t);n!==null&&(Im(r.remoteStore,n),r.hu=r.hu.remove(t),r.Pu.delete(n),km(r))}function Rv(r,t,n){for(const a of n)a instanceof UE?(r.Tu.addReference(a.key,t),DC(r,a)):a instanceof zE?(nt(Vm,"Document no longer in limbo: "+a.key),r.Tu.removeReference(a.key,t),r.Tu.containsKey(a.key)||jE(r,a.key)):vt(19791,{mu:a})}function DC(r,t){const n=t.key,a=n.path.canonicalString();r.hu.get(n)||r.lu.has(a)||(nt(Vm,"New document in limbo: "+n),r.lu.add(a),km(r))}function km(r){for(;r.lu.size>0&&r.hu.size<r.maxConcurrentLimboResolutions;){const t=r.lu.values().next().value;r.lu.delete(t);const n=new mt(ae.fromString(t)),a=r.du.next();r.Pu.set(a,new TC(n)),r.hu=r.hu.insert(n,a),kE(r.remoteStore,new wr(li(uE(n.path)),a,"TargetPurposeLimboResolution",Qc.le))}}async function HE(r,t,n){const a=xt(r),l=[],c=[],d=[];a.uu.isEmpty()||(a.uu.forEach((g,p)=>{d.push(a.Ru(p,t,n).then(_=>{var A;if((_||n)&&a.isPrimaryClient){const D=_?!_.fromCache:(A=n==null?void 0:n.targetChanges.get(p.targetId))===null||A===void 0?void 0:A.current;a.sharedClientState.updateQueryState(p.targetId,D?"current":"not-current")}if(_){l.push(_);const D=wm.Rs(p.targetId,_);c.push(D)}}))}),await Promise.all(d),a.au.j_(l),await async function(p,_){const A=xt(p);try{await A.persistence.runTransaction("notifyLocalViewChanges","readwrite",D=>Q.forEach(_,M=>Q.forEach(M.ds,q=>A.persistence.referenceDelegate.addReference(D,M.targetId,q)).next(()=>Q.forEach(M.As,q=>A.persistence.referenceDelegate.removeReference(D,M.targetId,q)))))}catch(D){if(!Ya(D))throw D;nt(Rm,"Failed to update sequence numbers: "+D)}for(const D of _){const M=D.targetId;if(!D.fromCache){const q=A.xs.get(M),X=q.snapshotVersion,it=q.withLastLimboFreeSnapshotVersion(X);A.xs=A.xs.insert(M,it)}}}(a.localStore,c))}async function OC(r,t){const n=xt(r);if(!n.currentUser.isEqual(t)){nt(Vm,"User change. New user:",t.toKey());const a=await OE(n.localStore,t);n.currentUser=t,function(c,d){c.Eu.forEach(g=>{g.forEach(p=>{p.reject(new ct(et.CANCELLED,d))})}),c.Eu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await HE(n,a.ks)}}function NC(r,t){const n=xt(r),a=n.Pu.get(t);if(a&&a._u)return Lt().add(a.key);{let l=Lt();const c=n.cu.get(t);if(!c)return l;for(const d of c){const g=n.uu.get(d);l=l.unionWith(g.view.Ya)}return l}}function GE(r){const t=xt(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=qE.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=NC.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=CC.bind(null,t),t.au.j_=pC.bind(null,t.eventManager),t.au.Vu=yC.bind(null,t.eventManager),t}class Lc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ME(t.databaseInfo.databaseId),this.sharedClientState=this.pu(t),this.persistence=this.yu(t),await this.persistence.start(),this.localStore=this.wu(t),this.gcScheduler=this.Su(t,this.localStore),this.indexBackfillerScheduler=this.bu(t,this.localStore)}Su(t,n){return null}bu(t,n){return null}wu(t){return GI(this.persistence,new qI,t.initialUser,this.serializer)}yu(t){return new DE(bm.fi,this.serializer)}pu(t){return new XI}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Lc.provider={build:()=>new Lc};class MC extends Lc{constructor(t){super(),this.cacheSizeBytes=t}Su(t,n){ee(this.persistence.referenceDelegate instanceof xc,46915);const a=this.persistence.referenceDelegate.garbageCollector;return new RI(a,t.asyncQueue,n)}yu(t){const n=this.cacheSizeBytes!==void 0?tn.withCacheSize(this.cacheSizeBytes):tn.DEFAULT;return new DE(a=>xc.fi(a,n),this.serializer)}}class tm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>wv(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=OC.bind(null,this.syncEngine),await hC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new dC}()}createDatastore(t){const n=ME(t.databaseInfo.databaseId),a=function(c){return new tC(c)}(t.databaseInfo);return function(c,d,g,p){return new rC(c,d,g,p)}(t.authCredentials,t.appCheckCredentials,a,n)}createRemoteStore(t){return function(a,l,c,d,g){return new aC(a,l,c,d,g)}(this.localStore,this.datastore,t.asyncQueue,n=>wv(this.syncEngine,n,0),function(){return _v.C()?new _v:new $I}())}createSyncEngine(t,n){return function(l,c,d,g,p,_,A){const D=new AC(l,c,d,g,p,_);return A&&(D.Au=!0),D}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(l){const c=xt(l);nt(Ha,"RemoteStore shutting down."),c.Ta.add(5),await Pl(c),c.Ea.shutdown(),c.da.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}tm.provider={build:()=>new tm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.vu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.vu(this.observer.error,t):Hi("Uncaught Error in snapshot listener:",t.toString()))}Cu(){this.muted=!0}vu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="FirestoreClient";class kC{constructor(t,n,a,l,c){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=a,this.databaseInfo=l,this.user=He.UNAUTHENTICATED,this.clientId=sR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(a,async d=>{nt(Pr,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d}),this.appCheckCredentials.start(a,d=>(nt(Pr,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new bs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const a=LE(n,"Failed to shutdown persistence");t.reject(a)}}),t.promise}}async function bd(r,t){r.asyncQueue.verifyOperationInProgress(),nt(Pr,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let a=n.initialUser;r.setCredentialChangeListener(async l=>{a.isEqual(l)||(await OE(t.localStore,l),a=l)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Iv(r,t){r.asyncQueue.verifyOperationInProgress();const n=await PC(r);nt(Pr,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(a=>Tv(t.remoteStore,a)),r.setAppCheckTokenChangeListener((a,l)=>Tv(t.remoteStore,l)),r._onlineComponents=t}async function PC(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){nt(Pr,"Using user provided OfflineComponentProvider");try{await bd(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(l){return l.name==="FirebaseError"?l.code===et.FAILED_PRECONDITION||l.code===et.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11}(n))throw n;Ua("Error using user provided cache. Falling back to memory cache: "+n),await bd(r,new Lc)}}else nt(Pr,"Using default OfflineComponentProvider"),await bd(r,new MC(void 0));return r._offlineComponents}async function xC(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(nt(Pr,"Using user provided OnlineComponentProvider"),await Iv(r,r._uninitializedComponentsProvider._online)):(nt(Pr,"Using default OnlineComponentProvider"),await Iv(r,new tm))),r._onlineComponents}async function LC(r){const t=await xC(r),n=t.eventManager;return n.onListen=SC.bind(null,t.syncEngine),n.onUnlisten=RC.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=bC.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=IC.bind(null,t.syncEngine),n}function UC(r,t,n={}){const a=new bs;return r.asyncQueue.enqueueAndForget(async()=>function(c,d,g,p,_){const A=new VC({next:M=>{A.Cu(),d.enqueueAndForget(()=>gC(c,D)),M.fromCache&&p.source==="server"?_.reject(new ct(et.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(M)},error:M=>_.reject(M)}),D=new _C(g,A,{includeMetadataChanges:!0,La:!0});return mC(c,D)}(await LC(r),r.asyncQueue,t,n,a)),a.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=new Map;function zC(r,t,n,a){if(t===!0&&a===!0)throw new ct(et.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function Dv(r){if(mt.isDocumentKey(r))throw new ct(et.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function BC(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(a){return a.constructor?a.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":vt(12329,{type:typeof r})}function em(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new ct(et.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=BC(r);throw new ct(et.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE="firestore.googleapis.com",Ov=!0;class Nv{constructor(t){var n,a;if(t.host===void 0){if(t.ssl!==void 0)throw new ct(et.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=KE,this.ssl=Ov}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:Ov;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=CE;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<bI)throw new ct(et.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}zC("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=FE((a=t.experimentalLongPollingOptions)!==null&&a!==void 0?a:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new ct(et.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new ct(et.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new ct(et.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(a,l){return a.timeoutSeconds===l.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Pm{constructor(t,n,a,l){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=a,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ct(et.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new ct(et.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nv(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new Jw;switch(a.type){case"firstParty":return new nR(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new ct(et.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const a=Cv.get(n);a&&(nt("ComponentProvider","Removing Datastore"),Cv.delete(n),a.terminate())}(this),Promise.resolve()}}function qC(r,t,n,a={}){var l;r=em(r,Pm);const c=Il(t),d=r._getSettings(),g=Object.assign(Object.assign({},d),{emulatorOptions:r._getEmulatorOptions()}),p=`${t}:${n}`;c&&($v(`https://${p}`),Zv("Firestore",!0)),d.host!==KE&&d.host!==p&&Ua("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},d),{host:p,ssl:c,emulatorOptions:a});if(!Dr(_,g)&&(r._setSettings(_),a.mockUserToken)){let A,D;if(typeof a.mockUserToken=="string")A=a.mockUserToken,D=He.MOCK_USER;else{A=cS(a.mockUserToken,(l=r._app)===null||l===void 0?void 0:l.options.projectId);const M=a.mockUserToken.sub||a.mockUserToken.user_id;if(!M)throw new ct(et.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");D=new He(M)}r._authCredentials=new Ww(new X0(A,D))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t,n,a){this.converter=n,this._query=a,this.type="query",this.firestore=t}withConverter(t){return new ih(this.firestore,t,this._query)}}class $a{constructor(t,n,a){this.converter=n,this._key=a,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new La(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new $a(this.firestore,t,this._key)}}class La extends ih{constructor(t,n,a){super(t,n,uE(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new $a(this.firestore,null,new mt(t))}withConverter(t){return new La(this.firestore,t,this._path)}}function jC(r,t,...n){if(r=Bn(r),r instanceof Pm){const a=ae.fromString(t,...n);return Dv(a),new La(r,null,a)}{if(!(r instanceof $a||r instanceof La))throw new ct(et.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=r._path.child(ae.fromString(t,...n));return Dv(a),new La(r.firestore,null,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="AsyncQueue";class Vv{constructor(t=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new VE(this,"async_queue_retry"),this.ec=()=>{const a=Sd();a&&nt(Mv,"Visibility state changed to "+a.visibilityState),this.C_.p_()},this.tc=t;const n=Sd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.nc(),this.rc(t)}enterRestrictedMode(t){if(!this.ju){this.ju=!0,this.Zu=t||!1;const n=Sd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ec)}}enqueue(t){if(this.nc(),this.ju)return new Promise(()=>{});const n=new bs;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.zu.push(t),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(t){if(!Ya(t))throw t;nt(Mv,"Operation failed with retryable error: "+t)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(t){const n=this.tc.then(()=>(this.Yu=!0,t().catch(a=>{throw this.Ju=a,this.Yu=!1,Hi("INTERNAL UNHANDLED ERROR: ",kv(a)),a}).then(a=>(this.Yu=!1,a))));return this.tc=n,n}enqueueAfterDelay(t,n,a){this.nc(),this.Xu.indexOf(t)>-1&&(n=0);const l=Nm.createAndSchedule(this,t,n,a,c=>this.oc(c));return this.Hu.push(l),l}nc(){this.Ju&&vt(47125,{_c:kv(this.Ju)})}verifyOperationInProgress(){}async ac(){let t;do t=this.tc,await t;while(t!==this.tc)}uc(t){for(const n of this.Hu)if(n.timerId===t)return!0;return!1}cc(t){return this.ac().then(()=>{this.Hu.sort((n,a)=>n.targetTimeMs-a.targetTimeMs);for(const n of this.Hu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ac()})}lc(t){this.Xu.push(t)}oc(t){const n=this.Hu.indexOf(t);this.Hu.splice(n,1)}}function kv(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class QE extends Pm{constructor(t,n,a,l){super(t,n,a,l),this.type="firestore",this._queue=new Vv,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Vv(t),this._firestoreClient=void 0,await t}}}function HC(r,t){const n=typeof r=="object"?r:sm(),a=typeof r=="string"?r:Nc,l=Ms(n,"firestore").getImmediate({identifier:a});if(!l._initialized){const c=lS("firestore");c&&qC(l,...c)}return l}function GC(r){if(r._terminated)throw new ct(et.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||FC(r),r._firestoreClient}function FC(r){var t,n,a;const l=r._freezeSettings(),c=function(g,p,_,A){return new vR(g,p,_,A.host,A.ssl,A.experimentalForceLongPolling,A.experimentalAutoDetectLongPolling,FE(A.experimentalLongPollingOptions),A.useFetchStreams,A.isUsingEmulator)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,l);r._componentsProvider||!((n=l.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((a=l.localCache)===null||a===void 0)&&a._onlineComponentProvider)&&(r._componentsProvider={_offline:l.localCache._offlineComponentProvider,_online:l.localCache._onlineComponentProvider}),r._firestoreClient=new kC(r._authCredentials,r._appCheckCredentials,r._queue,c,r._componentsProvider&&function(g){const p=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(p),_online:p}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Uc(Ue.fromBase64String(t))}catch(n){throw new ct(et.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Uc(Ue.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new ct(et.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new ct(et.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new ct(et.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return wt(this._lat,t._lat)||wt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(a,l){if(a.length!==l.length)return!1;for(let c=0;c<a.length;++c)if(a[c]!==l[c])return!1;return!0}(this._values,t._values)}}const YC=new RegExp("[~\\*/\\[\\]]");function XC(r,t,n){if(t.search(YC)>=0)throw Pv(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new YE(...t.split("."))._internalPath}catch{throw Pv(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function Pv(r,t,n,a,l){let c=`Function ${t}() called with invalid data`;c+=". ";let d="";return new ct(et.INVALID_ARGUMENT,c+r+d)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(t,n,a,l,c){this._firestore=t,this._userDataWriter=n,this._key=a,this._document=l,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new $a(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new $C(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field($E("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $C extends XE{data(){return super.data()}}function $E(r,t){return typeof t=="string"?XC(r,t):t instanceof YE?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ct(et.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class JC{convertValue(t,n="none"){switch(Vr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ce(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Mr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw vt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const a={};return Vl(t,(l,c)=>{a[l]=this.convertValue(c,n)}),a}convertVectorValue(t){var n,a,l;const c=(l=(a=(n=t.fields)===null||n===void 0?void 0:n[Bd].arrayValue)===null||a===void 0?void 0:a.values)===null||l===void 0?void 0:l.map(d=>ce(d.doubleValue));return new QC(c)}convertGeoPoint(t){return new KC(ce(t.latitude),ce(t.longitude))}convertArray(t,n){return(t.values||[]).map(a=>this.convertValue(a,n))}convertServerTimestamp(t,n){switch(n){case"previous":const a=Xc(t);return a==null?null:this.convertValue(a,n);case"estimate":return this.convertTimestamp(bl(t));default:return null}}convertTimestamp(t){const n=Nr(t);return new en(n.seconds,n.nanos)}convertDocumentKey(t,n){const a=ae.fromString(t);ee(IE(a),9688,{name:t});const l=new wl(a.get(1),a.get(3)),c=new mt(a.popFirst(5));return l.isEqual(n)||Hi(`Document ${c} contains a document reference within a different database (${l.projectId}/${l.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class WC extends XE{constructor(t,n,a,l,c,d){super(t,n,a,l,d),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ac(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const a=this._document.data.field($E("DocumentSnapshot.get",t));if(a!==null)return this._userDataWriter.convertValue(a,n.serverTimestamps)}}}class Ac extends WC{data(t={}){return super.data(t)}}class t2{constructor(t,n,a,l){this._firestore=t,this._userDataWriter=n,this._snapshot=l,this.metadata=new dc(l.hasPendingWrites,l.fromCache),this.query=a}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(a=>{t.call(n,new Ac(this._firestore,this._userDataWriter,a.key,a,new dc(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ct(et.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(l,c){if(l._snapshot.oldDocs.isEmpty()){let d=0;return l._snapshot.docChanges.map(g=>{const p=new Ac(l._firestore,l._userDataWriter,g.doc.key,g.doc,new dc(l._snapshot.mutatedKeys.has(g.doc.key),l._snapshot.fromCache),l.query.converter);return g.doc,{type:"added",doc:p,oldIndex:-1,newIndex:d++}})}{let d=l._snapshot.oldDocs;return l._snapshot.docChanges.filter(g=>c||g.type!==3).map(g=>{const p=new Ac(l._firestore,l._userDataWriter,g.doc.key,g.doc,new dc(l._snapshot.mutatedKeys.has(g.doc.key),l._snapshot.fromCache),l.query.converter);let _=-1,A=-1;return g.type!==0&&(_=d.indexOf(g.doc.key),d=d.delete(g.doc.key)),g.type!==1&&(d=d.add(g.doc),A=d.indexOf(g.doc.key)),{type:e2(g.type),doc:p,oldIndex:_,newIndex:A}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function e2(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return vt(61501,{type:r})}}class n2 extends JC{constructor(t){super(),this.firestore=t}convertBytes(t){return new Uc(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new $a(this.firestore,null,n)}}function i2(r){r=em(r,ih);const t=em(r.firestore,QE),n=GC(t),a=new n2(t);return ZC(r._query),UC(n,r._query).then(l=>new t2(t,a,r,l))}(function(t,n=!0){(function(l){Qa=l})(Fa),ui(new Ln("firestore",(a,{instanceIdentifier:l,options:c})=>{const d=a.getProvider("app").getImmediate(),g=new QE(new tR(a.getProvider("auth-internal")),new iR(d,a.getProvider("app-check-internal")),function(_,A){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ct(et.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wl(_.options.projectId,A)}(d,l),d);return c=Object.assign({useFetchStreams:n},c),g._setSettings(c),g},"PUBLIC").setMultipleInstances(!0)),Cn(z_,B_,t),Cn(z_,B_,"esm2017")})();var r2="firebase",s2="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cn(r2,s2,"app");const ZE="@firebase/installations",xm="0.6.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=1e4,WE=`w:${xm}`,tT="FIS_v2",a2="https://firebaseinstallations.googleapis.com/v1",o2=60*60*1e3,l2="installations",u2="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ds=new Ns(l2,u2,c2);function eT(r){return r instanceof zn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT({projectId:r}){return`${a2}/projects/${r}/installations`}function iT(r){return{token:r.token,requestStatus:2,expiresIn:f2(r.expiresIn),creationTime:Date.now()}}async function rT(r,t){const a=(await t.json()).error;return Ds.create("request-failed",{requestName:r,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function sT({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function h2(r,{refreshToken:t}){const n=sT(r);return n.append("Authorization",d2(t)),n}async function aT(r){const t=await r();return t.status>=500&&t.status<600?r():t}function f2(r){return Number(r.replace("s","000"))}function d2(r){return`${tT} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m2({appConfig:r,heartbeatServiceProvider:t},{fid:n}){const a=nT(r),l=sT(r),c=t.getImmediate({optional:!0});if(c){const _=await c.getHeartbeatsHeader();_&&l.append("x-firebase-client",_)}const d={fid:n,authVersion:tT,appId:r.appId,sdkVersion:WE},g={method:"POST",headers:l,body:JSON.stringify(d)},p=await aT(()=>fetch(a,g));if(p.ok){const _=await p.json();return{fid:_.fid||n,registrationStatus:2,refreshToken:_.refreshToken,authToken:iT(_.authToken)}}else throw await rT("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(r){return new Promise(t=>{setTimeout(t,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g2(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2=/^[cdef][\w-]{21}$/,nm="";function y2(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=_2(r);return p2.test(n)?n:nm}catch{return nm}}function _2(r){return g2(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=new Map;function uT(r,t){const n=rh(r);cT(n,t),v2(n,t)}function cT(r,t){const n=lT.get(r);if(n)for(const a of n)a(t)}function v2(r,t){const n=E2();n&&n.postMessage({key:r,fid:t}),T2()}let Ss=null;function E2(){return!Ss&&"BroadcastChannel"in self&&(Ss=new BroadcastChannel("[Firebase] FID Change"),Ss.onmessage=r=>{cT(r.data.key,r.data.fid)}),Ss}function T2(){lT.size===0&&Ss&&(Ss.close(),Ss=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2="firebase-installations-database",S2=1,Os="firebase-installations-store";let wd=null;function Lm(){return wd||(wd=i0(A2,S2,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Os)}}})),wd}async function zc(r,t){const n=rh(r),l=(await Lm()).transaction(Os,"readwrite"),c=l.objectStore(Os),d=await c.get(n);return await c.put(t,n),await l.done,(!d||d.fid!==t.fid)&&uT(r,t.fid),t}async function hT(r){const t=rh(r),a=(await Lm()).transaction(Os,"readwrite");await a.objectStore(Os).delete(t),await a.done}async function sh(r,t){const n=rh(r),l=(await Lm()).transaction(Os,"readwrite"),c=l.objectStore(Os),d=await c.get(n),g=t(d);return g===void 0?await c.delete(n):await c.put(g,n),await l.done,g&&(!d||d.fid!==g.fid)&&uT(r,g.fid),g}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Um(r){let t;const n=await sh(r.appConfig,a=>{const l=b2(a),c=w2(r,l);return t=c.registrationPromise,c.installationEntry});return n.fid===nm?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function b2(r){const t=r||{fid:y2(),registrationStatus:0};return fT(t)}function w2(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(Ds.create("app-offline"));return{installationEntry:t,registrationPromise:l}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=R2(r,n);return{installationEntry:n,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:I2(r)}:{installationEntry:t}}async function R2(r,t){try{const n=await m2(r,t);return zc(r.appConfig,n)}catch(n){throw eT(n)&&n.customData.serverCode===409?await hT(r.appConfig):await zc(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function I2(r){let t=await xv(r.appConfig);for(;t.registrationStatus===1;)await oT(100),t=await xv(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:a}=await Um(r);return a||n}return t}function xv(r){return sh(r,t=>{if(!t)throw Ds.create("installation-not-found");return fT(t)})}function fT(r){return C2(r)?{fid:r.fid,registrationStatus:0}:r}function C2(r){return r.registrationStatus===1&&r.registrationTime+JE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D2({appConfig:r,heartbeatServiceProvider:t},n){const a=O2(r,n),l=h2(r,n),c=t.getImmediate({optional:!0});if(c){const _=await c.getHeartbeatsHeader();_&&l.append("x-firebase-client",_)}const d={installation:{sdkVersion:WE,appId:r.appId}},g={method:"POST",headers:l,body:JSON.stringify(d)},p=await aT(()=>fetch(a,g));if(p.ok){const _=await p.json();return iT(_)}else throw await rT("Generate Auth Token",p)}function O2(r,{fid:t}){return`${nT(r)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zm(r,t=!1){let n;const a=await sh(r.appConfig,c=>{if(!dT(c))throw Ds.create("not-registered");const d=c.authToken;if(!t&&V2(d))return c;if(d.requestStatus===1)return n=N2(r,t),c;{if(!navigator.onLine)throw Ds.create("app-offline");const g=P2(c);return n=M2(r,g),g}});return n?await n:a.authToken}async function N2(r,t){let n=await Lv(r.appConfig);for(;n.authToken.requestStatus===1;)await oT(100),n=await Lv(r.appConfig);const a=n.authToken;return a.requestStatus===0?zm(r,t):a}function Lv(r){return sh(r,t=>{if(!dT(t))throw Ds.create("not-registered");const n=t.authToken;return x2(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function M2(r,t){try{const n=await D2(r,t),a=Object.assign(Object.assign({},t),{authToken:n});return await zc(r.appConfig,a),n}catch(n){if(eT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await hT(r.appConfig);else{const a=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await zc(r.appConfig,a)}throw n}}function dT(r){return r!==void 0&&r.registrationStatus===2}function V2(r){return r.requestStatus===2&&!k2(r)}function k2(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+o2}function P2(r){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:t})}function x2(r){return r.requestStatus===1&&r.requestTime+JE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L2(r){const t=r,{installationEntry:n,registrationPromise:a}=await Um(t);return a?a.catch(console.error):zm(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U2(r,t=!1){const n=r;return await z2(n),(await zm(n,t)).token}async function z2(r){const{registrationPromise:t}=await Um(r);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B2(r){if(!r||!r.options)throw Rd("App Configuration");if(!r.name)throw Rd("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw Rd(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Rd(r){return Ds.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT="installations",q2="installations-internal",j2=r=>{const t=r.getProvider("app").getImmediate(),n=B2(t),a=Ms(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},H2=r=>{const t=r.getProvider("app").getImmediate(),n=Ms(t,mT).getImmediate();return{getId:()=>L2(n),getToken:l=>U2(n,l)}};function G2(){ui(new Ln(mT,j2,"PUBLIC")),ui(new Ln(q2,H2,"PRIVATE"))}G2();Cn(ZE,xm);Cn(ZE,xm,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="analytics",F2="firebase_id",K2="origin",Q2=60*1e3,Y2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Bm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new jc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},dn=new Ns("analytics","Analytics",X2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $2(r){if(!r.startsWith(Bm)){const t=dn.create("invalid-gtag-resource",{gtagURL:r});return nn.warn(t.message),""}return r}function gT(r){return Promise.all(r.map(t=>t.catch(n=>n)))}function Z2(r,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,t)),n}function J2(r,t){const n=Z2("firebase-js-sdk-policy",{createScriptURL:$2}),a=document.createElement("script"),l=`${Bm}?l=${r}&id=${t}`;a.src=n?n==null?void 0:n.createScriptURL(l):l,a.async=!0,document.head.appendChild(a)}function W2(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function tD(r,t,n,a,l,c){const d=a[l];try{if(d)await t[d];else{const p=(await gT(n)).find(_=>_.measurementId===l);p&&await t[p.appId]}}catch(g){nn.error(g)}r("config",l,c)}async function eD(r,t,n,a,l){try{let c=[];if(l&&l.send_to){let d=l.send_to;Array.isArray(d)||(d=[d]);const g=await gT(n);for(const p of d){const _=g.find(D=>D.measurementId===p),A=_&&t[_.appId];if(A)c.push(A);else{c=[];break}}}c.length===0&&(c=Object.values(t)),await Promise.all(c),r("event",a,l||{})}catch(c){nn.error(c)}}function nD(r,t,n,a){async function l(c,...d){try{if(c==="event"){const[g,p]=d;await eD(r,t,n,g,p)}else if(c==="config"){const[g,p]=d;await tD(r,t,n,a,g,p)}else if(c==="consent"){const[g,p]=d;r("consent",g,p)}else if(c==="get"){const[g,p,_]=d;r("get",g,p,_)}else if(c==="set"){const[g]=d;r("set",g)}else r(c,...d)}catch(g){nn.error(g)}}return l}function iD(r,t,n,a,l){let c=function(...d){window[a].push(arguments)};return window[l]&&typeof window[l]=="function"&&(c=window[l]),window[l]=nD(c,r,t,n),{gtagCore:c,wrappedGtag:window[l]}}function rD(r){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Bm)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD=30,aD=1e3;class oD{constructor(t={},n=aD){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const pT=new oD;function lD(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function uD(r){var t;const{appId:n,apiKey:a}=r,l={method:"GET",headers:lD(a)},c=Y2.replace("{app-id}",n),d=await fetch(c,l);if(d.status!==200&&d.status!==304){let g="";try{const p=await d.json();!((t=p.error)===null||t===void 0)&&t.message&&(g=p.error.message)}catch{}throw dn.create("config-fetch-failed",{httpStatus:d.status,responseMessage:g})}return d.json()}async function cD(r,t=pT,n){const{appId:a,apiKey:l,measurementId:c}=r.options;if(!a)throw dn.create("no-app-id");if(!l){if(c)return{measurementId:c,appId:a};throw dn.create("no-api-key")}const d=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},g=new dD;return setTimeout(async()=>{g.abort()},Q2),yT({appId:a,apiKey:l,measurementId:c},d,g,t)}async function yT(r,{throttleEndTimeMillis:t,backoffCount:n},a,l=pT){var c;const{appId:d,measurementId:g}=r;try{await hD(a,t)}catch(p){if(g)return nn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${g} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:d,measurementId:g};throw p}try{const p=await uD(r);return l.deleteThrottleMetadata(d),p}catch(p){const _=p;if(!fD(_)){if(l.deleteThrottleMetadata(d),g)return nn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${g} provided in the "measurementId" field in the local Firebase config. [${_==null?void 0:_.message}]`),{appId:d,measurementId:g};throw p}const A=Number((c=_==null?void 0:_.customData)===null||c===void 0?void 0:c.httpStatus)===503?c_(n,l.intervalMillis,sD):c_(n,l.intervalMillis),D={throttleEndTimeMillis:Date.now()+A,backoffCount:n+1};return l.setThrottleMetadata(d,D),nn.debug(`Calling attemptFetch again in ${A} millis`),yT(r,D,a,l)}}function hD(r,t){return new Promise((n,a)=>{const l=Math.max(t-Date.now(),0),c=setTimeout(n,l);r.addEventListener(()=>{clearTimeout(c),a(dn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function fD(r){if(!(r instanceof zn)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class dD{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function mD(r,t,n,a,l){if(l&&l.global){r("event",n,a);return}else{const c=await t,d=Object.assign(Object.assign({},a),{send_to:c});r("event",n,d)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gD(){if(Wv())try{await t0()}catch(r){return nn.warn(dn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return nn.warn(dn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function pD(r,t,n,a,l,c,d){var g;const p=cD(r);p.then(q=>{n[q.measurementId]=q.appId,r.options.measurementId&&q.measurementId!==r.options.measurementId&&nn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${q.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(q=>nn.error(q)),t.push(p);const _=gD().then(q=>{if(q)return a.getId()}),[A,D]=await Promise.all([p,_]);rD(c)||J2(c,A.measurementId),l("js",new Date);const M=(g=d==null?void 0:d.config)!==null&&g!==void 0?g:{};return M[K2]="firebase",M.update=!0,D!=null&&(M[F2]=D),l("config",A.measurementId,M),A.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(t){this.app=t}_delete(){return delete vl[this.app.options.appId],Promise.resolve()}}let vl={},Uv=[];const zv={};let Id="dataLayer",_D="gtag",Bv,_T,qv=!1;function vD(){const r=[];if(Jv()&&r.push("This is a browser extension environment."),vS()||r.push("Cookies are not available."),r.length>0){const t=r.map((a,l)=>`(${l+1}) ${a}`).join(" "),n=dn.create("invalid-analytics-context",{errorInfo:t});nn.warn(n.message)}}function ED(r,t,n){vD();const a=r.options.appId;if(!a)throw dn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)nn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw dn.create("no-api-key");if(vl[a]!=null)throw dn.create("already-exists",{id:a});if(!qv){W2(Id);const{wrappedGtag:c,gtagCore:d}=iD(vl,Uv,zv,Id,_D);_T=c,Bv=d,qv=!0}return vl[a]=pD(r,Uv,zv,t,Bv,Id,n),new yD(r)}function TD(r=sm()){r=Bn(r);const t=Ms(r,Bc);return t.isInitialized()?t.getImmediate():AD(r)}function AD(r,t={}){const n=Ms(r,Bc);if(n.isInitialized()){const l=n.getImmediate();if(Dr(t,n.getOptions()))return l;throw dn.create("already-initialized")}return n.initialize({options:t})}function SD(r,t,n,a){r=Bn(r),mD(_T,vl[r.app.options.appId],t,n,a).catch(l=>nn.error(l))}const jv="@firebase/analytics",Hv="0.10.16";function bD(){ui(new Ln(Bc,(t,{options:n})=>{const a=t.getProvider("app").getImmediate(),l=t.getProvider("installations-internal").getImmediate();return ED(a,l,n)},"PUBLIC")),ui(new Ln("analytics-internal",r,"PRIVATE")),Cn(jv,Hv),Cn(jv,Hv,"esm2017");function r(t){try{const n=t.getProvider(Bc).getImmediate();return{logEvent:(a,l,c)=>SD(n,a,l,c)}}catch(n){throw dn.create("interop-component-reg-failed",{reason:n})}}}bD();const wD={apiKey:"AIzaSyBZUli0z9b6LpsuTDa9S5if6O0vM6eaeiI",authDomain:"harjoitus-26e21.firebaseapp.com",projectId:"harjoitus-26e21",storageBucket:"harjoitus-26e21.firebasestorage.app",messagingSenderId:"709385207330",appId:"1:709385207330:web:b0f653e8976bd66387147b",measurementId:"G-B3F53D0CPM"},vT=r0(wD);TD(vT);const RD=HC(vT);function ID(){const[r,t]=Pn.useState(""),[n,a]=Pn.useState(null),[l,c]=Pn.useState([]),[d,g]=Pn.useState([]),p=async()=>{try{const X=(await i2(jC(RD,"reseptit"))).docs.map(it=>({id:it.id,...it.data()}));g(X)}catch(q){console.error("Virhe reseptejä haettaessa:",q)}};Pn.useEffect(()=>{p()},[]);const _=d.filter(q=>q.ingredient.toLowerCase().includes(r.toLowerCase())),A=q=>{q.preventDefault()},D=q=>{const X=q.filter(it=>!l.includes(it));c([...l,...X])},M=q=>{c(l.filter(X=>X!==q))};return Et.jsxs("div",{style:{padding:"1rem",maxWidth:"800px",margin:"auto"},children:[Et.jsx("h1",{children:"Jossun reseptisovellus"}),Et.jsxs("form",{onSubmit:A,style:{marginBottom:"1rem"},children:[Et.jsx("input",{type:"text",placeholder:"Esim. kana, tofu, makaroni...",value:r,onChange:q=>t(q.target.value),style:{padding:"0.5rem",width:"70%",marginRight:"0.5rem"}}),Et.jsx("button",{type:"submit",style:{padding:"0.5rem 1rem"},children:"Hae reseptejä"})]}),n?Et.jsxs("div",{style:{padding:"1rem"},children:[Et.jsx("button",{onClick:()=>a(null),style:{marginBottom:"1rem"},children:"← Takaisin etusivulle"}),Et.jsx("h2",{children:n.title}),n.image&&Et.jsx("img",{src:n.image,alt:n.title,style:{width:"100%",borderRadius:"8px",marginBottom:"0.5rem"}}),Et.jsx("h3",{children:"Ainekset:"}),Et.jsx("ul",{children:n.ingredients.map((q,X)=>Et.jsx("li",{children:q},X))}),Et.jsx("button",{onClick:()=>D(n.ingredients),style:{margin:"1rem 0",padding:"0.5rem 1rem"},children:"Lisää kaikki ostoslistaan"}),Et.jsx("h3",{children:"Ohjeet:"}),Et.jsx("ol",{children:n.instructions.map((q,X)=>Et.jsx("li",{children:q},X))}),Et.jsxs("div",{style:{marginTop:"2rem",padding:"1rem",border:"1px solid #ccc",borderRadius:"8px",backgroundColor:"#f9f9f9"},children:[Et.jsx("h3",{children:"Ostoslista"}),l.length===0?Et.jsx("p",{children:"Ostoslista on tyhjä."}):Et.jsx("ul",{children:l.map((q,X)=>Et.jsxs("li",{style:{marginBottom:"0.5rem"},children:[q,Et.jsx("button",{onClick:()=>M(q),style:{marginLeft:"0.5rem",color:"red",cursor:"pointer"},children:"✕"})]},X))})]})]}):Et.jsx("div",{children:_.length===0?Et.jsx("p",{children:"Ei reseptejä näytettävänä. Kirjoita hakusana ja hae."}):Et.jsx("ul",{style:{listStyle:"none",padding:0},children:_.map(q=>Et.jsxs("li",{style:{marginBottom:"2rem",border:"1px solid #ccc",borderRadius:"8px",padding:"1rem",cursor:"pointer"},onClick:()=>a(q),children:[Et.jsx("h2",{children:q.title}),q.image&&Et.jsx("img",{src:q.image,alt:q.title,style:{width:"100%",borderRadius:"8px",marginBottom:"0.5rem"}}),Et.jsxs("p",{children:[Et.jsx("strong",{children:"Proteiini/Hiilihydraatti:"})," ",q.ingredient]})]},q.id))})})]})}function CD(){const[r,t]=Pn.useState(null),n=q0();return Pn.useEffect(()=>{const a=zb(n,l=>{t(l)});return()=>a()},[n]),r?Et.jsx(ID,{}):Et.jsx(Zw,{onLogin:()=>{}})}WA.createRoot(document.getElementById("root")).render(Et.jsx(Pn.StrictMode,{children:Et.jsx(CD,{})}));
