(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const h of l)if(h.type==="childList")for(const f of h.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const h={};return l.integrity&&(h.integrity=l.integrity),l.referrerPolicy&&(h.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?h.credentials="include":l.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function i(l){if(l.ep)return;l.ep=!0;const h=n(l);fetch(l.href,h)}})();(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function e(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(i){if(i.ep)return;i.ep=!0;const l=e(i);fetch(i.href,l)}})();var Ky={exports:{}},sl={};/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Qy;function HS(){if(Qy)return sl;Qy=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(i,l,h){var f=null;if(h!==void 0&&(f=""+h),l.key!==void 0&&(f=""+l.key),"key"in l){h={};for(var g in l)g!=="key"&&(h[g]=l[g])}else h=l;return l=h.ref,{$$typeof:a,type:i,key:f,ref:l!==void 0?l:null,props:h}}return sl.Fragment=e,sl.jsx=n,sl.jsxs=n,sl}var Gy;function BS(){return Gy||(Gy=1,Ky.exports=HS()),Ky.exports}var be=BS(),Xy={exports:{}},we={};/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Jy;function WS(){if(Jy)return we;Jy=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),C=Symbol.iterator;function V(A){return A===null||typeof A!="object"?null:(A=C&&A[C]||A["@@iterator"],typeof A=="function"?A:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,ae={};function te(A,Q,Z){this.props=A,this.context=Q,this.refs=ae,this.updater=Z||q}te.prototype.isReactComponent={},te.prototype.setState=function(A,Q){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,Q,"setState")},te.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function Ae(){}Ae.prototype=te.prototype;function Se(A,Q,Z){this.props=A,this.context=Q,this.refs=ae,this.updater=Z||q}var ye=Se.prototype=new Ae;ye.constructor=Se,G(ye,te.prototype),ye.isPureReactComponent=!0;var Oe=Array.isArray,pe={H:null,A:null,T:null,S:null,V:null},Re=Object.prototype.hasOwnProperty;function N(A,Q,Z,X,oe,Ee){return Z=Ee.ref,{$$typeof:a,type:A,key:Q,ref:Z!==void 0?Z:null,props:Ee}}function E(A,Q){return N(A.type,Q,void 0,void 0,void 0,A.props)}function T(A){return typeof A=="object"&&A!==null&&A.$$typeof===a}function R(A){var Q={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(Z){return Q[Z]})}var D=/\/+/g;function O(A,Q){return typeof A=="object"&&A!==null&&A.key!=null?R(""+A.key):Q.toString(36)}function I(){}function Rt(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(I,I):(A.status="pending",A.then(function(Q){A.status==="pending"&&(A.status="fulfilled",A.value=Q)},function(Q){A.status==="pending"&&(A.status="rejected",A.reason=Q)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function nt(A,Q,Z,X,oe){var Ee=typeof A;(Ee==="undefined"||Ee==="boolean")&&(A=null);var ge=!1;if(A===null)ge=!0;else switch(Ee){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(A.$$typeof){case a:case e:ge=!0;break;case k:return ge=A._init,nt(ge(A._payload),Q,Z,X,oe)}}if(ge)return oe=oe(A),ge=X===""?"."+O(A,0):X,Oe(oe)?(Z="",ge!=null&&(Z=ge.replace(D,"$&/")+"/"),nt(oe,Q,Z,"",function(Vn){return Vn})):oe!=null&&(T(oe)&&(oe=E(oe,Z+(oe.key==null||A&&A.key===oe.key?"":(""+oe.key).replace(D,"$&/")+"/")+ge)),Q.push(oe)),1;ge=0;var Et=X===""?".":X+":";if(Oe(A))for(var Xe=0;Xe<A.length;Xe++)X=A[Xe],Ee=Et+O(X,Xe),ge+=nt(X,Q,Z,Ee,oe);else if(Xe=V(A),typeof Xe=="function")for(A=Xe.call(A),Xe=0;!(X=A.next()).done;)X=X.value,Ee=Et+O(X,Xe++),ge+=nt(X,Q,Z,Ee,oe);else if(Ee==="object"){if(typeof A.then=="function")return nt(Rt(A),Q,Z,X,oe);throw Q=String(A),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return ge}function $(A,Q,Z){if(A==null)return A;var X=[],oe=0;return nt(A,X,"","",function(Ee){return Q.call(Z,Ee,oe++)}),X}function Y(A){if(A._status===-1){var Q=A._result;Q=Q(),Q.then(function(Z){(A._status===0||A._status===-1)&&(A._status=1,A._result=Z)},function(Z){(A._status===0||A._status===-1)&&(A._status=2,A._result=Z)}),A._status===-1&&(A._status=0,A._result=Q)}if(A._status===1)return A._result.default;throw A._result}var se=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function Ue(){}return we.Children={map:$,forEach:function(A,Q,Z){$(A,function(){Q.apply(this,arguments)},Z)},count:function(A){var Q=0;return $(A,function(){Q++}),Q},toArray:function(A){return $(A,function(Q){return Q})||[]},only:function(A){if(!T(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},we.Component=te,we.Fragment=n,we.Profiler=l,we.PureComponent=Se,we.StrictMode=i,we.Suspense=m,we.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=pe,we.__COMPILER_RUNTIME={__proto__:null,c:function(A){return pe.H.useMemoCache(A)}},we.cache=function(A){return function(){return A.apply(null,arguments)}},we.cloneElement=function(A,Q,Z){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var X=G({},A.props),oe=A.key,Ee=void 0;if(Q!=null)for(ge in Q.ref!==void 0&&(Ee=void 0),Q.key!==void 0&&(oe=""+Q.key),Q)!Re.call(Q,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&Q.ref===void 0||(X[ge]=Q[ge]);var ge=arguments.length-2;if(ge===1)X.children=Z;else if(1<ge){for(var Et=Array(ge),Xe=0;Xe<ge;Xe++)Et[Xe]=arguments[Xe+2];X.children=Et}return N(A.type,oe,void 0,void 0,Ee,X)},we.createContext=function(A){return A={$$typeof:f,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:h,_context:A},A},we.createElement=function(A,Q,Z){var X,oe={},Ee=null;if(Q!=null)for(X in Q.key!==void 0&&(Ee=""+Q.key),Q)Re.call(Q,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(oe[X]=Q[X]);var ge=arguments.length-2;if(ge===1)oe.children=Z;else if(1<ge){for(var Et=Array(ge),Xe=0;Xe<ge;Xe++)Et[Xe]=arguments[Xe+2];oe.children=Et}if(A&&A.defaultProps)for(X in ge=A.defaultProps,ge)oe[X]===void 0&&(oe[X]=ge[X]);return N(A,Ee,void 0,void 0,null,oe)},we.createRef=function(){return{current:null}},we.forwardRef=function(A){return{$$typeof:g,render:A}},we.isValidElement=T,we.lazy=function(A){return{$$typeof:k,_payload:{_status:-1,_result:A},_init:Y}},we.memo=function(A,Q){return{$$typeof:b,type:A,compare:Q===void 0?null:Q}},we.startTransition=function(A){var Q=pe.T,Z={};pe.T=Z;try{var X=A(),oe=pe.S;oe!==null&&oe(Z,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(Ue,se)}catch(Ee){se(Ee)}finally{pe.T=Q}},we.unstable_useCacheRefresh=function(){return pe.H.useCacheRefresh()},we.use=function(A){return pe.H.use(A)},we.useActionState=function(A,Q,Z){return pe.H.useActionState(A,Q,Z)},we.useCallback=function(A,Q){return pe.H.useCallback(A,Q)},we.useContext=function(A){return pe.H.useContext(A)},we.useDebugValue=function(){},we.useDeferredValue=function(A,Q){return pe.H.useDeferredValue(A,Q)},we.useEffect=function(A,Q,Z){var X=pe.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return X.useEffect(A,Q)},we.useId=function(){return pe.H.useId()},we.useImperativeHandle=function(A,Q,Z){return pe.H.useImperativeHandle(A,Q,Z)},we.useInsertionEffect=function(A,Q){return pe.H.useInsertionEffect(A,Q)},we.useLayoutEffect=function(A,Q){return pe.H.useLayoutEffect(A,Q)},we.useMemo=function(A,Q){return pe.H.useMemo(A,Q)},we.useOptimistic=function(A,Q){return pe.H.useOptimistic(A,Q)},we.useReducer=function(A,Q,Z){return pe.H.useReducer(A,Q,Z)},we.useRef=function(A){return pe.H.useRef(A)},we.useState=function(A){return pe.H.useState(A)},we.useSyncExternalStore=function(A,Q,Z){return pe.H.useSyncExternalStore(A,Q,Z)},we.useTransition=function(){return pe.H.useTransition()},we.version="19.1.0",we}var Yy;function Zf(){return Yy||(Yy=1,Xy.exports=WS()),Xy.exports}var Ln=Zf(),of={exports:{}},ol={},Zy={exports:{}},ev={};/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var tv;function KS(){return tv||(tv=1,function(a){function e($,Y){var se=$.length;$.push(Y);e:for(;0<se;){var Ue=se-1>>>1,A=$[Ue];if(0<l(A,Y))$[Ue]=Y,$[se]=A,se=Ue;else break e}}function n($){return $.length===0?null:$[0]}function i($){if($.length===0)return null;var Y=$[0],se=$.pop();if(se!==Y){$[0]=se;e:for(var Ue=0,A=$.length,Q=A>>>1;Ue<Q;){var Z=2*(Ue+1)-1,X=$[Z],oe=Z+1,Ee=$[oe];if(0>l(X,se))oe<A&&0>l(Ee,X)?($[Ue]=Ee,$[oe]=se,Ue=oe):($[Ue]=X,$[Z]=se,Ue=Z);else if(oe<A&&0>l(Ee,se))$[Ue]=Ee,$[oe]=se,Ue=oe;else break e}}return Y}function l($,Y){var se=$.sortIndex-Y.sortIndex;return se!==0?se:$.id-Y.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;a.unstable_now=function(){return h.now()}}else{var f=Date,g=f.now();a.unstable_now=function(){return f.now()-g}}var m=[],b=[],k=1,C=null,V=3,q=!1,G=!1,ae=!1,te=!1,Ae=typeof setTimeout=="function"?setTimeout:null,Se=typeof clearTimeout=="function"?clearTimeout:null,ye=typeof setImmediate<"u"?setImmediate:null;function Oe($){for(var Y=n(b);Y!==null;){if(Y.callback===null)i(b);else if(Y.startTime<=$)i(b),Y.sortIndex=Y.expirationTime,e(m,Y);else break;Y=n(b)}}function pe($){if(ae=!1,Oe($),!G)if(n(m)!==null)G=!0,Re||(Re=!0,O());else{var Y=n(b);Y!==null&&nt(pe,Y.startTime-$)}}var Re=!1,N=-1,E=5,T=-1;function R(){return te?!0:!(a.unstable_now()-T<E)}function D(){if(te=!1,Re){var $=a.unstable_now();T=$;var Y=!0;try{e:{G=!1,ae&&(ae=!1,Se(N),N=-1),q=!0;var se=V;try{t:{for(Oe($),C=n(m);C!==null&&!(C.expirationTime>$&&R());){var Ue=C.callback;if(typeof Ue=="function"){C.callback=null,V=C.priorityLevel;var A=Ue(C.expirationTime<=$);if($=a.unstable_now(),typeof A=="function"){C.callback=A,Oe($),Y=!0;break t}C===n(m)&&i(m),Oe($)}else i(m);C=n(m)}if(C!==null)Y=!0;else{var Q=n(b);Q!==null&&nt(pe,Q.startTime-$),Y=!1}}break e}finally{C=null,V=se,q=!1}Y=void 0}}finally{Y?O():Re=!1}}}var O;if(typeof ye=="function")O=function(){ye(D)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Rt=I.port2;I.port1.onmessage=D,O=function(){Rt.postMessage(null)}}else O=function(){Ae(D,0)};function nt($,Y){N=Ae(function(){$(a.unstable_now())},Y)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function($){$.callback=null},a.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<$?Math.floor(1e3/$):5},a.unstable_getCurrentPriorityLevel=function(){return V},a.unstable_next=function($){switch(V){case 1:case 2:case 3:var Y=3;break;default:Y=V}var se=V;V=Y;try{return $()}finally{V=se}},a.unstable_requestPaint=function(){te=!0},a.unstable_runWithPriority=function($,Y){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var se=V;V=$;try{return Y()}finally{V=se}},a.unstable_scheduleCallback=function($,Y,se){var Ue=a.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?Ue+se:Ue):se=Ue,$){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=se+A,$={id:k++,callback:Y,priorityLevel:$,startTime:se,expirationTime:A,sortIndex:-1},se>Ue?($.sortIndex=se,e(b,$),n(m)===null&&$===n(b)&&(ae?(Se(N),N=-1):ae=!0,nt(pe,se-Ue))):($.sortIndex=A,e(m,$),G||q||(G=!0,Re||(Re=!0,O()))),$},a.unstable_shouldYield=R,a.unstable_wrapCallback=function($){var Y=V;return function(){var se=V;V=Y;try{return $.apply(this,arguments)}finally{V=se}}}}(ev)),ev}var nv;function QS(){return nv||(nv=1,Zy.exports=KS()),Zy.exports}var lf={exports:{}},Vt={};/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var rv;function GS(){if(rv)return Vt;rv=1;var a=Zf();function e(m){var b="https://react.dev/errors/"+m;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)b+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+m+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var i={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function h(m,b,k){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:C==null?null:""+C,children:m,containerInfo:b,implementation:k}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(m,b){if(m==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return Vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Vt.createPortal=function(m,b){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(e(299));return h(m,b,null,k)},Vt.flushSync=function(m){var b=f.T,k=i.p;try{if(f.T=null,i.p=2,m)return m()}finally{f.T=b,i.p=k,i.d.f()}},Vt.preconnect=function(m,b){typeof m=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,i.d.C(m,b))},Vt.prefetchDNS=function(m){typeof m=="string"&&i.d.D(m)},Vt.preinit=function(m,b){if(typeof m=="string"&&b&&typeof b.as=="string"){var k=b.as,C=g(k,b.crossOrigin),V=typeof b.integrity=="string"?b.integrity:void 0,q=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;k==="style"?i.d.S(m,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:C,integrity:V,fetchPriority:q}):k==="script"&&i.d.X(m,{crossOrigin:C,integrity:V,fetchPriority:q,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},Vt.preinitModule=function(m,b){if(typeof m=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var k=g(b.as,b.crossOrigin);i.d.M(m,{crossOrigin:k,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&i.d.M(m)},Vt.preload=function(m,b){if(typeof m=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var k=b.as,C=g(k,b.crossOrigin);i.d.L(m,k,{crossOrigin:C,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},Vt.preloadModule=function(m,b){if(typeof m=="string")if(b){var k=g(b.as,b.crossOrigin);i.d.m(m,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:k,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else i.d.m(m)},Vt.requestFormReset=function(m){i.d.r(m)},Vt.unstable_batchedUpdates=function(m,b){return m(b)},Vt.useFormState=function(m,b,k){return f.H.useFormState(m,b,k)},Vt.useFormStatus=function(){return f.H.useHostTransitionStatus()},Vt.version="19.1.0",Vt}var av;function XS(){if(av)return lf.exports;av=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),lf.exports=GS(),lf.exports}/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var iv;function JS(){if(iv)return ol;iv=1;var a=QS(),e=Zf(),n=XS();function i(t){var r="https://react.dev/errors/"+t;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function h(t){var r=t,s=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(s=r.return),t=r.return;while(t)}return r.tag===3?s:null}function f(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function g(t){if(h(t)!==t)throw Error(i(188))}function m(t){var r=t.alternate;if(!r){if(r=h(t),r===null)throw Error(i(188));return r!==t?null:t}for(var s=t,o=r;;){var c=s.return;if(c===null)break;var d=c.alternate;if(d===null){if(o=c.return,o!==null){s=o;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===s)return g(c),t;if(d===o)return g(c),r;d=d.sibling}throw Error(i(188))}if(s.return!==o.return)s=c,o=d;else{for(var v=!1,w=c.child;w;){if(w===s){v=!0,s=c,o=d;break}if(w===o){v=!0,o=c,s=d;break}w=w.sibling}if(!v){for(w=d.child;w;){if(w===s){v=!0,s=d,o=c;break}if(w===o){v=!0,o=d,s=c;break}w=w.sibling}if(!v)throw Error(i(189))}}if(s.alternate!==o)throw Error(i(190))}if(s.tag!==3)throw Error(i(188));return s.stateNode.current===s?t:r}function b(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t;for(t=t.child;t!==null;){if(r=b(t),r!==null)return r;t=t.sibling}return null}var k=Object.assign,C=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),ae=Symbol.for("react.strict_mode"),te=Symbol.for("react.profiler"),Ae=Symbol.for("react.provider"),Se=Symbol.for("react.consumer"),ye=Symbol.for("react.context"),Oe=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),Re=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),D=Symbol.iterator;function O(t){return t===null||typeof t!="object"?null:(t=D&&t[D]||t["@@iterator"],typeof t=="function"?t:null)}var I=Symbol.for("react.client.reference");function Rt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===I?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case G:return"Fragment";case te:return"Profiler";case ae:return"StrictMode";case pe:return"Suspense";case Re:return"SuspenseList";case T:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case q:return"Portal";case ye:return(t.displayName||"Context")+".Provider";case Se:return(t._context.displayName||"Context")+".Consumer";case Oe:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case N:return r=t.displayName||null,r!==null?r:Rt(t.type)||"Memo";case E:r=t._payload,t=t._init;try{return Rt(t(r))}catch{}}return null}var nt=Array.isArray,$=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},Ue=[],A=-1;function Q(t){return{current:t}}function Z(t){0>A||(t.current=Ue[A],Ue[A]=null,A--)}function X(t,r){A++,Ue[A]=t.current,t.current=r}var oe=Q(null),Ee=Q(null),ge=Q(null),Et=Q(null);function Xe(t,r){switch(X(ge,r),X(Ee,t),X(oe,null),r.nodeType){case 9:case 11:t=(t=r.documentElement)&&(t=t.namespaceURI)?Sy(t):0;break;default:if(t=r.tagName,r=r.namespaceURI)r=Sy(r),t=ky(r,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(oe),X(oe,t)}function Vn(){Z(oe),Z(Ee),Z(ge)}function Hr(t){t.memoizedState!==null&&X(Et,t);var r=oe.current,s=ky(r,t.type);r!==s&&(X(Ee,t),X(oe,s))}function hr(t){Ee.current===t&&(Z(oe),Z(Ee)),Et.current===t&&(Z(Et),tl._currentValue=se)}var Ua=Object.prototype.hasOwnProperty,ja=a.unstable_scheduleCallback,za=a.unstable_cancelCallback,Js=a.unstable_shouldYield,Fl=a.unstable_requestPaint,pn=a.unstable_now,sh=a.unstable_getCurrentPriorityLevel,Ys=a.unstable_ImmediatePriority,Li=a.unstable_UserBlockingPriority,Va=a.unstable_NormalPriority,oh=a.unstable_LowPriority,Mi=a.unstable_IdlePriority,Zs=a.log,Ul=a.unstable_setDisableYieldValue,rt=null,qe=null;function rn(t){if(typeof Zs=="function"&&Ul(t),qe&&typeof qe.setStrictMode=="function")try{qe.setStrictMode(rt,t)}catch{}}var jt=Math.clz32?Math.clz32:qa,jl=Math.log,lh=Math.LN2;function qa(t){return t>>>=0,t===0?32:31-(jl(t)/lh|0)|0}var $a=256,Ha=4194304;function Pn(t){var r=t&42;if(r!==0)return r;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Fi(t,r,s){var o=t.pendingLanes;if(o===0)return 0;var c=0,d=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~d,o!==0?c=Pn(o):(v&=w,v!==0?c=Pn(v):s||(s=w&~t,s!==0&&(c=Pn(s))))):(w=o&~d,w!==0?c=Pn(w):v!==0?c=Pn(v):s||(s=o&~t,s!==0&&(c=Pn(s)))),c===0?0:r!==0&&r!==c&&(r&d)===0&&(d=c&-c,s=r&-r,d>=s||d===32&&(s&4194048)!==0)?r:c}function Ba(t,r){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&r)===0}function eo(t,r){switch(t){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function to(){var t=$a;return $a<<=1,($a&4194048)===0&&($a=256),t}function no(){var t=Ha;return Ha<<=1,(Ha&62914560)===0&&(Ha=4194304),t}function dr(t){for(var r=[],s=0;31>s;s++)r.push(t);return r}function fr(t,r){t.pendingLanes|=r,r!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ro(t,r,s,o,c,d){var v=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var w=t.entanglements,_=t.expirationTimes,F=t.hiddenUpdates;for(s=v&~s;0<s;){var H=31-jt(s),W=1<<H;w[H]=0,_[H]=-1;var U=F[H];if(U!==null)for(F[H]=null,H=0;H<U.length;H++){var j=U[H];j!==null&&(j.lane&=-536870913)}s&=~W}o!==0&&qn(t,o,0),d!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=d&~(v&~r))}function qn(t,r,s){t.pendingLanes|=r,t.suspendedLanes&=~r;var o=31-jt(r);t.entangledLanes|=r,t.entanglements[o]=t.entanglements[o]|1073741824|s&4194090}function ao(t,r){var s=t.entangledLanes|=r;for(t=t.entanglements;s;){var o=31-jt(s),c=1<<o;c&r|t[o]&r&&(t[o]|=r),s&=~c}}function Br(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ui(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Wr(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:Vy(t.type))}function zl(t,r){var s=Y.p;try{return Y.p=t,r()}finally{Y.p=s}}var Ye=Math.random().toString(36).slice(2),mt="__reactFiber$"+Ye,dt="__reactProps$"+Ye,gn="__reactContainer$"+Ye,io="__reactEvents$"+Ye,uh="__reactListeners$"+Ye,Kr="__reactHandles$"+Ye,Vl="__reactResources$"+Ye,Wa="__reactMarker$"+Ye;function Qr(t){delete t[mt],delete t[dt],delete t[io],delete t[uh],delete t[Kr]}function pr(t){var r=t[mt];if(r)return r;for(var s=t.parentNode;s;){if(r=s[gn]||s[mt]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(t=Iy(t);t!==null;){if(s=t[mt])return s;t=Iy(t)}return r}t=s,s=t.parentNode}return null}function $n(t){if(t=t[mt]||t[gn]){var r=t.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return t}return null}function Hn(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t.stateNode;throw Error(i(33))}function Wt(t){var r=t[Vl];return r||(r=t[Vl]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function ot(t){t[Wa]=!0}var so=new Set,ji={};function Rn(t,r){gr(t,r),gr(t+"Capture",r)}function gr(t,r){for(ji[t]=r,t=0;t<r.length;t++)so.add(r[t])}var ql=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$l={},Ka={};function Hl(t){return Ua.call(Ka,t)?!0:Ua.call($l,t)?!1:ql.test(t)?Ka[t]=!0:($l[t]=!0,!1)}function Gr(t,r,s){if(Hl(r))if(s===null)t.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(r);return;case"boolean":var o=r.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(r);return}}t.setAttribute(r,""+s)}}function Bn(t,r,s){if(s===null)t.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttribute(r,""+s)}}function Nt(t,r,s,o){if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(r,s,""+o)}}var Qa,Bl;function mr(t){if(Qa===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);Qa=r&&r[1]||"",Bl=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qa+t+Bl}var zi=!1;function Vi(t,r){if(!t||zi)return"";zi=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(r){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(j){var U=j}Reflect.construct(t,[],W)}else{try{W.call()}catch(j){U=j}t.call(W.prototype)}}else{try{throw Error()}catch(j){U=j}(W=t())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(j){if(j&&U&&typeof j.stack=="string")return[j.stack,U.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),v=d[0],w=d[1];if(v&&w){var _=v.split(`
`),F=w.split(`
`);for(c=o=0;o<_.length&&!_[o].includes("DetermineComponentFrameRoot");)o++;for(;c<F.length&&!F[c].includes("DetermineComponentFrameRoot");)c++;if(o===_.length||c===F.length)for(o=_.length-1,c=F.length-1;1<=o&&0<=c&&_[o]!==F[c];)c--;for(;1<=o&&0<=c;o--,c--)if(_[o]!==F[c]){if(o!==1||c!==1)do if(o--,c--,0>c||_[o]!==F[c]){var H=`
`+_[o].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=o&&0<=c);break}}}finally{zi=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?mr(s):""}function oo(t){switch(t.tag){case 26:case 27:case 5:return mr(t.type);case 16:return mr("Lazy");case 13:return mr("Suspense");case 19:return mr("SuspenseList");case 0:case 15:return Vi(t.type,!1);case 11:return Vi(t.type.render,!1);case 1:return Vi(t.type,!0);case 31:return mr("Activity");default:return""}}function qi(t){try{var r="";do r+=oo(t),t=t.return;while(t);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Kt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lo(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ch(t){var r=lo(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),o=""+t[r];if(!t.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,d=s.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return c.call(this)},set:function(v){o=""+v,d.call(this,v)}}),Object.defineProperty(t,r,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function $i(t){t._valueTracker||(t._valueTracker=ch(t))}function uo(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var s=r.getValue(),o="";return t&&(o=lo(t)?t.checked?"true":"false":t.value),t=o,t!==s?(r.setValue(t),!0):!1}function Ga(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var hh=/[\n"\\]/g;function yt(t){return t.replace(hh,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function an(t,r,s,o,c,d,v,w){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),r!=null?v==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+Kt(r)):t.value!==""+Kt(r)&&(t.value=""+Kt(r)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),r!=null?Xr(t,v,Kt(r)):s!=null?Xr(t,v,Kt(s)):o!=null&&t.removeAttribute("value"),c==null&&d!=null&&(t.defaultChecked=!!d),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+Kt(w):t.removeAttribute("name")}function Xa(t,r,s,o,c,d,v,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),r!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||r!=null))return;s=s!=null?""+Kt(s):"",r=r!=null?""+Kt(r):s,w||r===t.value||(t.value=r),t.defaultValue=r}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v)}function Xr(t,r,s){r==="number"&&Ga(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function yr(t,r,s,o){if(t=t.options,r){r={};for(var c=0;c<s.length;c++)r["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=r.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&o&&(t[s].defaultSelected=!0)}else{for(s=""+Kt(s),r=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}r!==null||t[c].disabled||(r=t[c])}r!==null&&(r.selected=!0)}}function Be(t,r,s){if(r!=null&&(r=""+Kt(r),r!==t.value&&(t.value=r),s==null)){t.defaultValue!==r&&(t.defaultValue=r);return}t.defaultValue=s!=null?""+Kt(s):""}function Ja(t,r,s,o){if(r==null){if(o!=null){if(s!=null)throw Error(i(92));if(nt(o)){if(1<o.length)throw Error(i(93));o=o[0]}s=o}s==null&&(s=""),r=s}s=Kt(r),t.defaultValue=s,o=t.textContent,o===s&&o!==""&&o!==null&&(t.value=o)}function mn(t,r){if(r){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=r;return}}t.textContent=r}var Ya=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wl(t,r,s){var o=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="":o?t.setProperty(r,s):typeof s!="number"||s===0||Ya.has(r)?r==="float"?t.cssFloat=s:t[r]=(""+s).trim():t[r]=s+"px"}function co(t,r,s){if(r!=null&&typeof r!="object")throw Error(i(62));if(t=t.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||r!=null&&r.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in r)o=r[c],r.hasOwnProperty(c)&&s[c]!==o&&Wl(t,c,o)}else for(var d in r)r.hasOwnProperty(d)&&Wl(t,d,r[d])}function ho(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hi(t){return fh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var vr=null;function yn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var br=null,wr=null;function fo(t){var r=$n(t);if(r&&(t=r.stateNode)){var s=t[dt]||null;e:switch(t=r.stateNode,r.type){case"input":if(an(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+yt(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var o=s[r];if(o!==t&&o.form===t.form){var c=o[dt]||null;if(!c)throw Error(i(90));an(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(r=0;r<s.length;r++)o=s[r],o.form===t.form&&uo(o)}break e;case"textarea":Be(t,s.value,s.defaultValue);break e;case"select":r=s.value,r!=null&&yr(t,!!s.multiple,r,!1)}}}var Wn=!1;function Kl(t,r,s){if(Wn)return t(r,s);Wn=!0;try{var o=t(r);return o}finally{if(Wn=!1,(br!==null||wr!==null)&&(zu(),br&&(r=br,t=wr,wr=br=null,fo(r),t)))for(r=0;r<t.length;r++)fo(t[r])}}function Za(t,r){var s=t.stateNode;if(s===null)return null;var o=s[dt]||null;if(o===null)return null;s=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(i(231,r,typeof s));return s}var Nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vn=!1;if(Nn)try{var ei={};Object.defineProperty(ei,"passive",{get:function(){vn=!0}}),window.addEventListener("test",ei,ei),window.removeEventListener("test",ei,ei)}catch{vn=!1}var Kn=null,Jr=null,Sr=null;function po(){if(Sr)return Sr;var t,r=Jr,s=r.length,o,c="value"in Kn?Kn.value:Kn.textContent,d=c.length;for(t=0;t<s&&r[t]===c[t];t++);var v=s-t;for(o=1;o<=v&&r[s-o]===c[d-o];o++);return Sr=c.slice(t,1<o?1-o:void 0)}function Qn(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Gn(){return!0}function go(){return!1}function _t(t){function r(s,o,c,d,v){this._reactName=s,this._targetInst=c,this.type=o,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(s=t[w],this[w]=s?s(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Gn:go,this.isPropagationStopped=go,this}return k(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Gn)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Gn)},persist:function(){},isPersistent:Gn}),r}var Ve={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bi=_t(Ve),ti=k({},Ve,{view:0,detail:0}),Ql=_t(ti),Wi,Ki,Xn,ni=k({},ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ii,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xn&&(Xn&&t.type==="mousemove"?(Wi=t.screenX-Xn.screenX,Ki=t.screenY-Xn.screenY):Ki=Wi=0,Xn=t),Wi)},movementY:function(t){return"movementY"in t?t.movementY:Ki}}),bn=_t(ni),Gl=k({},ni,{dataTransfer:0}),ph=_t(Gl),ri=k({},ti,{relatedTarget:0}),Qi=_t(ri),mo=k({},Ve,{animationName:0,elapsedTime:0,pseudoElement:0}),Gi=_t(mo),Xl=k({},Ve,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xi=_t(Xl),gh=k({},Ve,{data:0}),yo=_t(gh),ai={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jl={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vo(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Yl[t])?!!r[t]:!1}function ii(){return vo}var Zl=k({},ti,{key:function(t){if(t.key){var r=ai[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=Qn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jl[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ii,charCode:function(t){return t.type==="keypress"?Qn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ji=_t(Zl),eu=k({},ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bo=_t(eu),kr=k({},ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ii}),tu=_t(kr),nu=k({},Ve,{propertyName:0,elapsedTime:0,pseudoElement:0}),ru=_t(nu),au=k({},ni,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yi=_t(au),Qt=k({},Ve,{newState:0,oldState:0}),iu=_t(Qt),su=[9,13,27,32],Jn=Nn&&"CompositionEvent"in window,u=null;Nn&&"documentMode"in document&&(u=document.documentMode);var p=Nn&&"TextEvent"in window&&!u,y=Nn&&(!Jn||u&&8<u&&11>=u),S=" ",L=!1;function z(t,r){switch(t){case"keyup":return su.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function J(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Me=!1;function vt(t,r){switch(t){case"compositionend":return J(r);case"keypress":return r.which!==32?null:(L=!0,S);case"textInput":return t=r.data,t===S&&L?null:t;default:return null}}function je(t,r){if(Me)return t==="compositionend"||!Jn&&z(t,r)?(t=po(),Sr=Jr=Kn=null,Me=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return y&&r.locale!=="ko"?null:r.data;default:return null}}var Tt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dt(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Tt[t.type]:r==="textarea"}function Er(t,r,s,o){br?wr?wr.push(o):wr=[o]:br=o,r=Wu(r,"onChange"),0<r.length&&(s=new Bi("onChange","change",null,s,o),t.push({event:s,listeners:r}))}var xt=null,Yn=null;function wo(t){my(t,0)}function ou(t){var r=Hn(t);if(uo(r))return t}function Fp(t,r){if(t==="change")return r}var Up=!1;if(Nn){var mh;if(Nn){var yh="oninput"in document;if(!yh){var jp=document.createElement("div");jp.setAttribute("oninput","return;"),yh=typeof jp.oninput=="function"}mh=yh}else mh=!1;Up=mh&&(!document.documentMode||9<document.documentMode)}function zp(){xt&&(xt.detachEvent("onpropertychange",Vp),Yn=xt=null)}function Vp(t){if(t.propertyName==="value"&&ou(Yn)){var r=[];Er(r,Yn,t,yn(t)),Kl(wo,r)}}function w1(t,r,s){t==="focusin"?(zp(),xt=r,Yn=s,xt.attachEvent("onpropertychange",Vp)):t==="focusout"&&zp()}function S1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ou(Yn)}function k1(t,r){if(t==="click")return ou(r)}function E1(t,r){if(t==="input"||t==="change")return ou(r)}function _1(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var sn=typeof Object.is=="function"?Object.is:_1;function So(t,r){if(sn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var s=Object.keys(t),o=Object.keys(r);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var c=s[o];if(!Ua.call(r,c)||!sn(t[c],r[c]))return!1}return!0}function qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $p(t,r){var s=qp(t);t=0;for(var o;s;){if(s.nodeType===3){if(o=t+s.textContent.length,t<=r&&o>=r)return{node:s,offset:r-t};t=o}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=qp(s)}}function Hp(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Hp(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Bp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var r=Ga(t.document);r instanceof t.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)t=r.contentWindow;else break;r=Ga(t.document)}return r}function vh(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}var T1=Nn&&"documentMode"in document&&11>=document.documentMode,Zi=null,bh=null,ko=null,wh=!1;function Wp(t,r,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;wh||Zi==null||Zi!==Ga(o)||(o=Zi,"selectionStart"in o&&vh(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ko&&So(ko,o)||(ko=o,o=Wu(bh,"onSelect"),0<o.length&&(r=new Bi("onSelect","select",null,r,s),t.push({event:r,listeners:o}),r.target=Zi)))}function si(t,r){var s={};return s[t.toLowerCase()]=r.toLowerCase(),s["Webkit"+t]="webkit"+r,s["Moz"+t]="moz"+r,s}var es={animationend:si("Animation","AnimationEnd"),animationiteration:si("Animation","AnimationIteration"),animationstart:si("Animation","AnimationStart"),transitionrun:si("Transition","TransitionRun"),transitionstart:si("Transition","TransitionStart"),transitioncancel:si("Transition","TransitionCancel"),transitionend:si("Transition","TransitionEnd")},Sh={},Kp={};Nn&&(Kp=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function oi(t){if(Sh[t])return Sh[t];if(!es[t])return t;var r=es[t],s;for(s in r)if(r.hasOwnProperty(s)&&s in Kp)return Sh[t]=r[s];return t}var Qp=oi("animationend"),Gp=oi("animationiteration"),Xp=oi("animationstart"),I1=oi("transitionrun"),C1=oi("transitionstart"),A1=oi("transitioncancel"),Jp=oi("transitionend"),Yp=new Map,kh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");kh.push("scrollEnd");function Dn(t,r){Yp.set(t,r),Rn(r,[t])}var Zp=new WeakMap;function wn(t,r){if(typeof t=="object"&&t!==null){var s=Zp.get(t);return s!==void 0?s:(r={value:t,source:r,stack:qi(r)},Zp.set(t,r),r)}return{value:t,source:r,stack:qi(r)}}var Sn=[],ts=0,Eh=0;function lu(){for(var t=ts,r=Eh=ts=0;r<t;){var s=Sn[r];Sn[r++]=null;var o=Sn[r];Sn[r++]=null;var c=Sn[r];Sn[r++]=null;var d=Sn[r];if(Sn[r++]=null,o!==null&&c!==null){var v=o.pending;v===null?c.next=c:(c.next=v.next,v.next=c),o.pending=c}d!==0&&eg(s,c,d)}}function uu(t,r,s,o){Sn[ts++]=t,Sn[ts++]=r,Sn[ts++]=s,Sn[ts++]=o,Eh|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function _h(t,r,s,o){return uu(t,r,s,o),cu(t)}function ns(t,r){return uu(t,null,null,r),cu(t)}function eg(t,r,s){t.lanes|=s;var o=t.alternate;o!==null&&(o.lanes|=s);for(var c=!1,d=t.return;d!==null;)d.childLanes|=s,o=d.alternate,o!==null&&(o.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(c=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,c&&r!==null&&(c=31-jt(s),t=d.hiddenUpdates,o=t[c],o===null?t[c]=[r]:o.push(r),r.lane=s|536870912),d):null}function cu(t){if(50<Ko)throw Ko=0,Rd=null,Error(i(185));for(var r=t.return;r!==null;)t=r,r=t.return;return t.tag===3?t.stateNode:null}var rs={};function P1(t,r,s,o){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(t,r,s,o){return new P1(t,r,s,o)}function Th(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _r(t,r){var s=t.alternate;return s===null?(s=on(t.tag,r,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=r,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,r=t.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function tg(t,r){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=r,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,r=s.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),t}function hu(t,r,s,o,c,d){var v=0;if(o=t,typeof t=="function")Th(t)&&(v=1);else if(typeof t=="string")v=NS(t,s,oe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case T:return t=on(31,s,r,c),t.elementType=T,t.lanes=d,t;case G:return li(s.children,c,d,r);case ae:v=8,c|=24;break;case te:return t=on(12,s,r,c|2),t.elementType=te,t.lanes=d,t;case pe:return t=on(13,s,r,c),t.elementType=pe,t.lanes=d,t;case Re:return t=on(19,s,r,c),t.elementType=Re,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ae:case ye:v=10;break e;case Se:v=9;break e;case Oe:v=11;break e;case N:v=14;break e;case E:v=16,o=null;break e}v=29,s=Error(i(130,t===null?"null":typeof t,"")),o=null}return r=on(v,s,r,c),r.elementType=t,r.type=o,r.lanes=d,r}function li(t,r,s,o){return t=on(7,t,o,r),t.lanes=s,t}function Ih(t,r,s){return t=on(6,t,null,r),t.lanes=s,t}function Ch(t,r,s){return r=on(4,t.children!==null?t.children:[],t.key,r),r.lanes=s,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}var as=[],is=0,du=null,fu=0,kn=[],En=0,ui=null,Tr=1,Ir="";function ci(t,r){as[is++]=fu,as[is++]=du,du=t,fu=r}function ng(t,r,s){kn[En++]=Tr,kn[En++]=Ir,kn[En++]=ui,ui=t;var o=Tr;t=Ir;var c=32-jt(o)-1;o&=~(1<<c),s+=1;var d=32-jt(r)+c;if(30<d){var v=c-c%5;d=(o&(1<<v)-1).toString(32),o>>=v,c-=v,Tr=1<<32-jt(r)+c|s<<c|o,Ir=d+t}else Tr=1<<d|s<<c|o,Ir=t}function Ah(t){t.return!==null&&(ci(t,1),ng(t,1,0))}function Ph(t){for(;t===du;)du=as[--is],as[is]=null,fu=as[--is],as[is]=null;for(;t===ui;)ui=kn[--En],kn[En]=null,Ir=kn[--En],kn[En]=null,Tr=kn[--En],kn[En]=null}var Gt=null,at=null,ze=!1,hi=null,Zn=!1,Rh=Error(i(519));function di(t){var r=Error(i(418,""));throw To(wn(r,t)),Rh}function rg(t){var r=t.stateNode,s=t.type,o=t.memoizedProps;switch(r[mt]=t,r[dt]=o,s){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(s=0;s<Go.length;s++)Ce(Go[s],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":Ce("invalid",r),Xa(r,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),$i(r);break;case"select":Ce("invalid",r);break;case"textarea":Ce("invalid",r),Ja(r,o.value,o.defaultValue,o.children),$i(r)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||o.suppressHydrationWarning===!0||wy(r.textContent,s)?(o.popover!=null&&(Ce("beforetoggle",r),Ce("toggle",r)),o.onScroll!=null&&Ce("scroll",r),o.onScrollEnd!=null&&Ce("scrollend",r),o.onClick!=null&&(r.onclick=Ku),r=!0):r=!1,r||di(t)}function ag(t){for(Gt=t.return;Gt;)switch(Gt.tag){case 5:case 13:Zn=!1;return;case 27:case 3:Zn=!0;return;default:Gt=Gt.return}}function Eo(t){if(t!==Gt)return!1;if(!ze)return ag(t),ze=!0,!1;var r=t.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Wd(t.type,t.memoizedProps)),s=!s),s&&at&&di(t),ag(t),r===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(r===0){at=On(t.nextSibling);break e}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;t=t.nextSibling}at=null}}else r===27?(r=at,fa(t.type)?(t=Xd,Xd=null,at=t):at=r):at=Gt?On(t.stateNode.nextSibling):null;return!0}function _o(){at=Gt=null,ze=!1}function ig(){var t=hi;return t!==null&&(Zt===null?Zt=t:Zt.push.apply(Zt,t),hi=null),t}function To(t){hi===null?hi=[t]:hi.push(t)}var Nh=Q(null),fi=null,Cr=null;function Yr(t,r,s){X(Nh,r._currentValue),r._currentValue=s}function Ar(t){t._currentValue=Nh.current,Z(Nh)}function Dh(t,r,s){for(;t!==null;){var o=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),t===s)break;t=t.return}}function xh(t,r,s,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var d=c.dependencies;if(d!==null){var v=c.child;d=d.firstContext;e:for(;d!==null;){var w=d;d=c;for(var _=0;_<r.length;_++)if(w.context===r[_]){d.lanes|=s,w=d.alternate,w!==null&&(w.lanes|=s),Dh(d.return,s,t),o||(v=null);break e}d=w.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(i(341));v.lanes|=s,d=v.alternate,d!==null&&(d.lanes|=s),Dh(v,s,t),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===t){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function Io(t,r,s,o){t=null;for(var c=r,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(i(387));if(v=v.memoizedProps,v!==null){var w=c.type;sn(c.pendingProps.value,v.value)||(t!==null?t.push(w):t=[w])}}else if(c===Et.current){if(v=c.alternate,v===null)throw Error(i(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(tl):t=[tl])}c=c.return}t!==null&&xh(r,t,s,o),r.flags|=262144}function pu(t){for(t=t.firstContext;t!==null;){if(!sn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function pi(t){fi=t,Cr=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function zt(t){return sg(fi,t)}function gu(t,r){return fi===null&&pi(t),sg(t,r)}function sg(t,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},Cr===null){if(t===null)throw Error(i(308));Cr=r,t.dependencies={lanes:0,firstContext:r},t.flags|=524288}else Cr=Cr.next=r;return s}var R1=typeof AbortController<"u"?AbortController:function(){var t=[],r=this.signal={aborted:!1,addEventListener:function(s,o){t.push(o)}};this.abort=function(){r.aborted=!0,t.forEach(function(s){return s()})}},N1=a.unstable_scheduleCallback,D1=a.unstable_NormalPriority,bt={$$typeof:ye,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Oh(){return{controller:new R1,data:new Map,refCount:0}}function Co(t){t.refCount--,t.refCount===0&&N1(D1,function(){t.controller.abort()})}var Ao=null,Lh=0,ss=0,os=null;function x1(t,r){if(Ao===null){var s=Ao=[];Lh=0,ss=Fd(),os={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Lh++,r.then(og,og),r}function og(){if(--Lh===0&&Ao!==null){os!==null&&(os.status="fulfilled");var t=Ao;Ao=null,ss=0,os=null;for(var r=0;r<t.length;r++)(0,t[r])()}}function O1(t,r){var s=[],o={status:"pending",value:null,reason:null,then:function(c){s.push(c)}};return t.then(function(){o.status="fulfilled",o.value=r;for(var c=0;c<s.length;c++)(0,s[c])(r)},function(c){for(o.status="rejected",o.reason=c,c=0;c<s.length;c++)(0,s[c])(void 0)}),o}var lg=$.S;$.S=function(t,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&x1(t,r),lg!==null&&lg(t,r)};var gi=Q(null);function Mh(){var t=gi.current;return t!==null?t:Je.pooledCache}function mu(t,r){r===null?X(gi,gi.current):X(gi,r.pool)}function ug(){var t=Mh();return t===null?null:{parent:bt._currentValue,pool:t}}var Po=Error(i(460)),cg=Error(i(474)),yu=Error(i(542)),Fh={then:function(){}};function hg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function vu(){}function dg(t,r,s){switch(s=t[s],s===void 0?t.push(r):s!==r&&(r.then(vu,vu),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,pg(t),t;default:if(typeof r.status=="string")r.then(vu,vu);else{if(t=Je,t!==null&&100<t.shellSuspendCounter)throw Error(i(482));t=r,t.status="pending",t.then(function(o){if(r.status==="pending"){var c=r;c.status="fulfilled",c.value=o}},function(o){if(r.status==="pending"){var c=r;c.status="rejected",c.reason=o}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,pg(t),t}throw Ro=r,Po}}var Ro=null;function fg(){if(Ro===null)throw Error(i(459));var t=Ro;return Ro=null,t}function pg(t){if(t===Po||t===yu)throw Error(i(483))}var Zr=!1;function Uh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function jh(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ea(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ta(t,r,s){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,($e&2)!==0){var c=o.pending;return c===null?r.next=r:(r.next=c.next,c.next=r),o.pending=r,r=cu(t),eg(t,null,s),r}return uu(t,o,r,s),cu(t)}function No(t,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var o=r.lanes;o&=t.pendingLanes,s|=o,r.lanes=s,ao(t,s)}}function zh(t,r){var s=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var c=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var v={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?c=d=v:d=d.next=v,s=s.next}while(s!==null);d===null?c=d=r:d=d.next=r}else c=d=r;s={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=r:t.next=r,s.lastBaseUpdate=r}var Vh=!1;function Do(){if(Vh){var t=os;if(t!==null)throw t}}function xo(t,r,s,o){Vh=!1;var c=t.updateQueue;Zr=!1;var d=c.firstBaseUpdate,v=c.lastBaseUpdate,w=c.shared.pending;if(w!==null){c.shared.pending=null;var _=w,F=_.next;_.next=null,v===null?d=F:v.next=F,v=_;var H=t.alternate;H!==null&&(H=H.updateQueue,w=H.lastBaseUpdate,w!==v&&(w===null?H.firstBaseUpdate=F:w.next=F,H.lastBaseUpdate=_))}if(d!==null){var W=c.baseState;v=0,H=F=_=null,w=d;do{var U=w.lane&-536870913,j=U!==w.lane;if(j?(Ne&U)===U:(o&U)===U){U!==0&&U===ss&&(Vh=!0),H!==null&&(H=H.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var de=t,le=w;U=r;var Qe=s;switch(le.tag){case 1:if(de=le.payload,typeof de=="function"){W=de.call(Qe,W,U);break e}W=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=le.payload,U=typeof de=="function"?de.call(Qe,W,U):de,U==null)break e;W=k({},W,U);break e;case 2:Zr=!0}}U=w.callback,U!==null&&(t.flags|=64,j&&(t.flags|=8192),j=c.callbacks,j===null?c.callbacks=[U]:j.push(U))}else j={lane:U,tag:w.tag,payload:w.payload,callback:w.callback,next:null},H===null?(F=H=j,_=W):H=H.next=j,v|=U;if(w=w.next,w===null){if(w=c.shared.pending,w===null)break;j=w,w=j.next,j.next=null,c.lastBaseUpdate=j,c.shared.pending=null}}while(!0);H===null&&(_=W),c.baseState=_,c.firstBaseUpdate=F,c.lastBaseUpdate=H,d===null&&(c.shared.lanes=0),ua|=v,t.lanes=v,t.memoizedState=W}}function gg(t,r){if(typeof t!="function")throw Error(i(191,t));t.call(r)}function mg(t,r){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)gg(s[t],r)}var ls=Q(null),bu=Q(0);function yg(t,r){t=Mr,X(bu,t),X(ls,r),Mr=t|r.baseLanes}function qh(){X(bu,Mr),X(ls,ls.current)}function $h(){Mr=bu.current,Z(ls),Z(bu)}var na=0,ke=null,We=null,ft=null,wu=!1,us=!1,mi=!1,Su=0,Oo=0,cs=null,L1=0;function lt(){throw Error(i(321))}function Hh(t,r){if(r===null)return!1;for(var s=0;s<r.length&&s<t.length;s++)if(!sn(t[s],r[s]))return!1;return!0}function Bh(t,r,s,o,c,d){return na=d,ke=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,$.H=t===null||t.memoizedState===null?em:tm,mi=!1,d=s(o,c),mi=!1,us&&(d=bg(r,s,o,c)),vg(t),d}function vg(t){$.H=Cu;var r=We!==null&&We.next!==null;if(na=0,ft=We=ke=null,wu=!1,Oo=0,cs=null,r)throw Error(i(300));t===null||It||(t=t.dependencies,t!==null&&pu(t)&&(It=!0))}function bg(t,r,s,o){ke=t;var c=0;do{if(us&&(cs=null),Oo=0,us=!1,25<=c)throw Error(i(301));if(c+=1,ft=We=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}$.H=q1,d=r(s,o)}while(us);return d}function M1(){var t=$.H,r=t.useState()[0];return r=typeof r.then=="function"?Lo(r):r,t=t.useState()[0],(We!==null?We.memoizedState:null)!==t&&(ke.flags|=1024),r}function Wh(){var t=Su!==0;return Su=0,t}function Kh(t,r,s){r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~s}function Qh(t){if(wu){for(t=t.memoizedState;t!==null;){var r=t.queue;r!==null&&(r.pending=null),t=t.next}wu=!1}na=0,ft=We=ke=null,us=!1,Oo=Su=0,cs=null}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?ke.memoizedState=ft=t:ft=ft.next=t,ft}function pt(){if(We===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var r=ft===null?ke.memoizedState:ft.next;if(r!==null)ft=r,We=t;else{if(t===null)throw ke.alternate===null?Error(i(467)):Error(i(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},ft===null?ke.memoizedState=ft=t:ft=ft.next=t}return ft}function Gh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(t){var r=Oo;return Oo+=1,cs===null&&(cs=[]),t=dg(cs,t,r),r=ke,(ft===null?r.memoizedState:ft.next)===null&&(r=r.alternate,$.H=r===null||r.memoizedState===null?em:tm),t}function ku(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Lo(t);if(t.$$typeof===ye)return zt(t)}throw Error(i(438,String(t)))}function Xh(t){var r=null,s=ke.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var o=ke.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(r={data:o.data.map(function(c){return c.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=Gh(),ke.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(t),o=0;o<t;o++)s[o]=R;return r.index++,s}function Pr(t,r){return typeof r=="function"?r(t):r}function Eu(t){var r=pt();return Jh(r,We,t)}function Jh(t,r,s){var o=t.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=s;var c=t.baseQueue,d=o.pending;if(d!==null){if(c!==null){var v=c.next;c.next=d.next,d.next=v}r.baseQueue=c=d,o.pending=null}if(d=t.baseState,c===null)t.memoizedState=d;else{r=c.next;var w=v=null,_=null,F=r,H=!1;do{var W=F.lane&-536870913;if(W!==F.lane?(Ne&W)===W:(na&W)===W){var U=F.revertLane;if(U===0)_!==null&&(_=_.next={lane:0,revertLane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),W===ss&&(H=!0);else if((na&U)===U){F=F.next,U===ss&&(H=!0);continue}else W={lane:0,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},_===null?(w=_=W,v=d):_=_.next=W,ke.lanes|=U,ua|=U;W=F.action,mi&&s(d,W),d=F.hasEagerState?F.eagerState:s(d,W)}else U={lane:W,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},_===null?(w=_=U,v=d):_=_.next=U,ke.lanes|=W,ua|=W;F=F.next}while(F!==null&&F!==r);if(_===null?v=d:_.next=w,!sn(d,t.memoizedState)&&(It=!0,H&&(s=os,s!==null)))throw s;t.memoizedState=d,t.baseState=v,t.baseQueue=_,o.lastRenderedState=d}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Yh(t){var r=pt(),s=r.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=t;var o=s.dispatch,c=s.pending,d=r.memoizedState;if(c!==null){s.pending=null;var v=c=c.next;do d=t(d,v.action),v=v.next;while(v!==c);sn(d,r.memoizedState)||(It=!0),r.memoizedState=d,r.baseQueue===null&&(r.baseState=d),s.lastRenderedState=d}return[d,o]}function wg(t,r,s){var o=ke,c=pt(),d=ze;if(d){if(s===void 0)throw Error(i(407));s=s()}else s=r();var v=!sn((We||c).memoizedState,s);v&&(c.memoizedState=s,It=!0),c=c.queue;var w=Eg.bind(null,o,c,t);if(Mo(2048,8,w,[t]),c.getSnapshot!==r||v||ft!==null&&ft.memoizedState.tag&1){if(o.flags|=2048,hs(9,_u(),kg.bind(null,o,c,s,r),null),Je===null)throw Error(i(349));d||(na&124)!==0||Sg(o,r,s)}return s}function Sg(t,r,s){t.flags|=16384,t={getSnapshot:r,value:s},r=ke.updateQueue,r===null?(r=Gh(),ke.updateQueue=r,r.stores=[t]):(s=r.stores,s===null?r.stores=[t]:s.push(t))}function kg(t,r,s,o){r.value=s,r.getSnapshot=o,_g(r)&&Tg(t)}function Eg(t,r,s){return s(function(){_g(r)&&Tg(t)})}function _g(t){var r=t.getSnapshot;t=t.value;try{var s=r();return!sn(t,s)}catch{return!0}}function Tg(t){var r=ns(t,2);r!==null&&dn(r,t,2)}function Zh(t){var r=Jt();if(typeof t=="function"){var s=t;if(t=s(),mi){rn(!0);try{s()}finally{rn(!1)}}}return r.memoizedState=r.baseState=t,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pr,lastRenderedState:t},r}function Ig(t,r,s,o){return t.baseState=s,Jh(t,We,typeof o=="function"?o:Pr)}function F1(t,r,s,o,c){if(Iu(t))throw Error(i(485));if(t=r.action,t!==null){var d={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};$.T!==null?s(!0):d.isTransition=!1,o(d),s=r.pending,s===null?(d.next=r.pending=d,Cg(r,d)):(d.next=s.next,r.pending=s.next=d)}}function Cg(t,r){var s=r.action,o=r.payload,c=t.state;if(r.isTransition){var d=$.T,v={};$.T=v;try{var w=s(c,o),_=$.S;_!==null&&_(v,w),Ag(t,r,w)}catch(F){ed(t,r,F)}finally{$.T=d}}else try{d=s(c,o),Ag(t,r,d)}catch(F){ed(t,r,F)}}function Ag(t,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Pg(t,r,o)},function(o){return ed(t,r,o)}):Pg(t,r,s)}function Pg(t,r,s){r.status="fulfilled",r.value=s,Rg(r),t.state=s,r=t.pending,r!==null&&(s=r.next,s===r?t.pending=null:(s=s.next,r.next=s,Cg(t,s)))}function ed(t,r,s){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do r.status="rejected",r.reason=s,Rg(r),r=r.next;while(r!==o)}t.action=null}function Rg(t){t=t.listeners;for(var r=0;r<t.length;r++)(0,t[r])()}function Ng(t,r){return r}function Dg(t,r){if(ze){var s=Je.formState;if(s!==null){e:{var o=ke;if(ze){if(at){t:{for(var c=at,d=Zn;c.nodeType!==8;){if(!d){c=null;break t}if(c=On(c.nextSibling),c===null){c=null;break t}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){at=On(c.nextSibling),o=c.data==="F!";break e}}di(o)}o=!1}o&&(r=s[0])}}return s=Jt(),s.memoizedState=s.baseState=r,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ng,lastRenderedState:r},s.queue=o,s=Jg.bind(null,ke,o),o.dispatch=s,o=Zh(!1),d=id.bind(null,ke,!1,o.queue),o=Jt(),c={state:r,dispatch:null,action:t,pending:null},o.queue=c,s=F1.bind(null,ke,c,d,s),c.dispatch=s,o.memoizedState=t,[r,s,!1]}function xg(t){var r=pt();return Og(r,We,t)}function Og(t,r,s){if(r=Jh(t,r,Ng)[0],t=Eu(Pr)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var o=Lo(r)}catch(v){throw v===Po?yu:v}else o=r;r=pt();var c=r.queue,d=c.dispatch;return s!==r.memoizedState&&(ke.flags|=2048,hs(9,_u(),U1.bind(null,c,s),null)),[o,d,t]}function U1(t,r){t.action=r}function Lg(t){var r=pt(),s=We;if(s!==null)return Og(r,s,t);pt(),r=r.memoizedState,s=pt();var o=s.queue.dispatch;return s.memoizedState=t,[r,o,!1]}function hs(t,r,s,o){return t={tag:t,create:s,deps:o,inst:r,next:null},r=ke.updateQueue,r===null&&(r=Gh(),ke.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=t.next=t:(o=s.next,s.next=t,t.next=o,r.lastEffect=t),t}function _u(){return{destroy:void 0,resource:void 0}}function Mg(){return pt().memoizedState}function Tu(t,r,s,o){var c=Jt();o=o===void 0?null:o,ke.flags|=t,c.memoizedState=hs(1|r,_u(),s,o)}function Mo(t,r,s,o){var c=pt();o=o===void 0?null:o;var d=c.memoizedState.inst;We!==null&&o!==null&&Hh(o,We.memoizedState.deps)?c.memoizedState=hs(r,d,s,o):(ke.flags|=t,c.memoizedState=hs(1|r,d,s,o))}function Fg(t,r){Tu(8390656,8,t,r)}function Ug(t,r){Mo(2048,8,t,r)}function jg(t,r){return Mo(4,2,t,r)}function zg(t,r){return Mo(4,4,t,r)}function Vg(t,r){if(typeof r=="function"){t=t();var s=r(t);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function qg(t,r,s){s=s!=null?s.concat([t]):null,Mo(4,4,Vg.bind(null,r,t),s)}function td(){}function $g(t,r){var s=pt();r=r===void 0?null:r;var o=s.memoizedState;return r!==null&&Hh(r,o[1])?o[0]:(s.memoizedState=[t,r],t)}function Hg(t,r){var s=pt();r=r===void 0?null:r;var o=s.memoizedState;if(r!==null&&Hh(r,o[1]))return o[0];if(o=t(),mi){rn(!0);try{t()}finally{rn(!1)}}return s.memoizedState=[o,r],o}function nd(t,r,s){return s===void 0||(na&1073741824)!==0?t.memoizedState=r:(t.memoizedState=s,t=Km(),ke.lanes|=t,ua|=t,s)}function Bg(t,r,s,o){return sn(s,r)?s:ls.current!==null?(t=nd(t,s,o),sn(t,r)||(It=!0),t):(na&42)===0?(It=!0,t.memoizedState=s):(t=Km(),ke.lanes|=t,ua|=t,r)}function Wg(t,r,s,o,c){var d=Y.p;Y.p=d!==0&&8>d?d:8;var v=$.T,w={};$.T=w,id(t,!1,r,s);try{var _=c(),F=$.S;if(F!==null&&F(w,_),_!==null&&typeof _=="object"&&typeof _.then=="function"){var H=O1(_,o);Fo(t,r,H,hn(t))}else Fo(t,r,o,hn(t))}catch(W){Fo(t,r,{then:function(){},status:"rejected",reason:W},hn())}finally{Y.p=d,$.T=v}}function j1(){}function rd(t,r,s,o){if(t.tag!==5)throw Error(i(476));var c=Kg(t).queue;Wg(t,c,r,se,s===null?j1:function(){return Qg(t),s(o)})}function Kg(t){var r=t.memoizedState;if(r!==null)return r;r={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pr,lastRenderedState:se},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pr,lastRenderedState:s},next:null},t.memoizedState=r,t=t.alternate,t!==null&&(t.memoizedState=r),r}function Qg(t){var r=Kg(t).next.queue;Fo(t,r,{},hn())}function ad(){return zt(tl)}function Gg(){return pt().memoizedState}function Xg(){return pt().memoizedState}function z1(t){for(var r=t.return;r!==null;){switch(r.tag){case 24:case 3:var s=hn();t=ea(s);var o=ta(r,t,s);o!==null&&(dn(o,r,s),No(o,r,s)),r={cache:Oh()},t.payload=r;return}r=r.return}}function V1(t,r,s){var o=hn();s={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Iu(t)?Yg(r,s):(s=_h(t,r,s,o),s!==null&&(dn(s,t,o),Zg(s,r,o)))}function Jg(t,r,s){var o=hn();Fo(t,r,s,o)}function Fo(t,r,s,o){var c={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Iu(t))Yg(r,c);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=r.lastRenderedReducer,d!==null))try{var v=r.lastRenderedState,w=d(v,s);if(c.hasEagerState=!0,c.eagerState=w,sn(w,v))return uu(t,r,c,0),Je===null&&lu(),!1}catch{}finally{}if(s=_h(t,r,c,o),s!==null)return dn(s,t,o),Zg(s,r,o),!0}return!1}function id(t,r,s,o){if(o={lane:2,revertLane:Fd(),action:o,hasEagerState:!1,eagerState:null,next:null},Iu(t)){if(r)throw Error(i(479))}else r=_h(t,s,o,2),r!==null&&dn(r,t,2)}function Iu(t){var r=t.alternate;return t===ke||r!==null&&r===ke}function Yg(t,r){us=wu=!0;var s=t.pending;s===null?r.next=r:(r.next=s.next,s.next=r),t.pending=r}function Zg(t,r,s){if((s&4194048)!==0){var o=r.lanes;o&=t.pendingLanes,s|=o,r.lanes=s,ao(t,s)}}var Cu={readContext:zt,use:ku,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useLayoutEffect:lt,useInsertionEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useSyncExternalStore:lt,useId:lt,useHostTransitionStatus:lt,useFormState:lt,useActionState:lt,useOptimistic:lt,useMemoCache:lt,useCacheRefresh:lt},em={readContext:zt,use:ku,useCallback:function(t,r){return Jt().memoizedState=[t,r===void 0?null:r],t},useContext:zt,useEffect:Fg,useImperativeHandle:function(t,r,s){s=s!=null?s.concat([t]):null,Tu(4194308,4,Vg.bind(null,r,t),s)},useLayoutEffect:function(t,r){return Tu(4194308,4,t,r)},useInsertionEffect:function(t,r){Tu(4,2,t,r)},useMemo:function(t,r){var s=Jt();r=r===void 0?null:r;var o=t();if(mi){rn(!0);try{t()}finally{rn(!1)}}return s.memoizedState=[o,r],o},useReducer:function(t,r,s){var o=Jt();if(s!==void 0){var c=s(r);if(mi){rn(!0);try{s(r)}finally{rn(!1)}}}else c=r;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=V1.bind(null,ke,t),[o.memoizedState,t]},useRef:function(t){var r=Jt();return t={current:t},r.memoizedState=t},useState:function(t){t=Zh(t);var r=t.queue,s=Jg.bind(null,ke,r);return r.dispatch=s,[t.memoizedState,s]},useDebugValue:td,useDeferredValue:function(t,r){var s=Jt();return nd(s,t,r)},useTransition:function(){var t=Zh(!1);return t=Wg.bind(null,ke,t.queue,!0,!1),Jt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,r,s){var o=ke,c=Jt();if(ze){if(s===void 0)throw Error(i(407));s=s()}else{if(s=r(),Je===null)throw Error(i(349));(Ne&124)!==0||Sg(o,r,s)}c.memoizedState=s;var d={value:s,getSnapshot:r};return c.queue=d,Fg(Eg.bind(null,o,d,t),[t]),o.flags|=2048,hs(9,_u(),kg.bind(null,o,d,s,r),null),s},useId:function(){var t=Jt(),r=Je.identifierPrefix;if(ze){var s=Ir,o=Tr;s=(o&~(1<<32-jt(o)-1)).toString(32)+s,r="«"+r+"R"+s,s=Su++,0<s&&(r+="H"+s.toString(32)),r+="»"}else s=L1++,r="«"+r+"r"+s.toString(32)+"»";return t.memoizedState=r},useHostTransitionStatus:ad,useFormState:Dg,useActionState:Dg,useOptimistic:function(t){var r=Jt();r.memoizedState=r.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=id.bind(null,ke,!0,s),s.dispatch=r,[t,r]},useMemoCache:Xh,useCacheRefresh:function(){return Jt().memoizedState=z1.bind(null,ke)}},tm={readContext:zt,use:ku,useCallback:$g,useContext:zt,useEffect:Ug,useImperativeHandle:qg,useInsertionEffect:jg,useLayoutEffect:zg,useMemo:Hg,useReducer:Eu,useRef:Mg,useState:function(){return Eu(Pr)},useDebugValue:td,useDeferredValue:function(t,r){var s=pt();return Bg(s,We.memoizedState,t,r)},useTransition:function(){var t=Eu(Pr)[0],r=pt().memoizedState;return[typeof t=="boolean"?t:Lo(t),r]},useSyncExternalStore:wg,useId:Gg,useHostTransitionStatus:ad,useFormState:xg,useActionState:xg,useOptimistic:function(t,r){var s=pt();return Ig(s,We,t,r)},useMemoCache:Xh,useCacheRefresh:Xg},q1={readContext:zt,use:ku,useCallback:$g,useContext:zt,useEffect:Ug,useImperativeHandle:qg,useInsertionEffect:jg,useLayoutEffect:zg,useMemo:Hg,useReducer:Yh,useRef:Mg,useState:function(){return Yh(Pr)},useDebugValue:td,useDeferredValue:function(t,r){var s=pt();return We===null?nd(s,t,r):Bg(s,We.memoizedState,t,r)},useTransition:function(){var t=Yh(Pr)[0],r=pt().memoizedState;return[typeof t=="boolean"?t:Lo(t),r]},useSyncExternalStore:wg,useId:Gg,useHostTransitionStatus:ad,useFormState:Lg,useActionState:Lg,useOptimistic:function(t,r){var s=pt();return We!==null?Ig(s,We,t,r):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Xh,useCacheRefresh:Xg},ds=null,Uo=0;function Au(t){var r=Uo;return Uo+=1,ds===null&&(ds=[]),dg(ds,t,r)}function jo(t,r){r=r.props.ref,t.ref=r!==void 0?r:null}function Pu(t,r){throw r.$$typeof===C?Error(i(525)):(t=Object.prototype.toString.call(r),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t)))}function nm(t){var r=t._init;return r(t._payload)}function rm(t){function r(x,P){if(t){var M=x.deletions;M===null?(x.deletions=[P],x.flags|=16):M.push(P)}}function s(x,P){if(!t)return null;for(;P!==null;)r(x,P),P=P.sibling;return null}function o(x){for(var P=new Map;x!==null;)x.key!==null?P.set(x.key,x):P.set(x.index,x),x=x.sibling;return P}function c(x,P){return x=_r(x,P),x.index=0,x.sibling=null,x}function d(x,P,M){return x.index=M,t?(M=x.alternate,M!==null?(M=M.index,M<P?(x.flags|=67108866,P):M):(x.flags|=67108866,P)):(x.flags|=1048576,P)}function v(x){return t&&x.alternate===null&&(x.flags|=67108866),x}function w(x,P,M,B){return P===null||P.tag!==6?(P=Ih(M,x.mode,B),P.return=x,P):(P=c(P,M),P.return=x,P)}function _(x,P,M,B){var re=M.type;return re===G?H(x,P,M.props.children,B,M.key):P!==null&&(P.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===E&&nm(re)===P.type)?(P=c(P,M.props),jo(P,M),P.return=x,P):(P=hu(M.type,M.key,M.props,null,x.mode,B),jo(P,M),P.return=x,P)}function F(x,P,M,B){return P===null||P.tag!==4||P.stateNode.containerInfo!==M.containerInfo||P.stateNode.implementation!==M.implementation?(P=Ch(M,x.mode,B),P.return=x,P):(P=c(P,M.children||[]),P.return=x,P)}function H(x,P,M,B,re){return P===null||P.tag!==7?(P=li(M,x.mode,B,re),P.return=x,P):(P=c(P,M),P.return=x,P)}function W(x,P,M){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=Ih(""+P,x.mode,M),P.return=x,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case V:return M=hu(P.type,P.key,P.props,null,x.mode,M),jo(M,P),M.return=x,M;case q:return P=Ch(P,x.mode,M),P.return=x,P;case E:var B=P._init;return P=B(P._payload),W(x,P,M)}if(nt(P)||O(P))return P=li(P,x.mode,M,null),P.return=x,P;if(typeof P.then=="function")return W(x,Au(P),M);if(P.$$typeof===ye)return W(x,gu(x,P),M);Pu(x,P)}return null}function U(x,P,M,B){var re=P!==null?P.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return re!==null?null:w(x,P,""+M,B);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case V:return M.key===re?_(x,P,M,B):null;case q:return M.key===re?F(x,P,M,B):null;case E:return re=M._init,M=re(M._payload),U(x,P,M,B)}if(nt(M)||O(M))return re!==null?null:H(x,P,M,B,null);if(typeof M.then=="function")return U(x,P,Au(M),B);if(M.$$typeof===ye)return U(x,P,gu(x,M),B);Pu(x,M)}return null}function j(x,P,M,B,re){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return x=x.get(M)||null,w(P,x,""+B,re);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case V:return x=x.get(B.key===null?M:B.key)||null,_(P,x,B,re);case q:return x=x.get(B.key===null?M:B.key)||null,F(P,x,B,re);case E:var _e=B._init;return B=_e(B._payload),j(x,P,M,B,re)}if(nt(B)||O(B))return x=x.get(M)||null,H(P,x,B,re,null);if(typeof B.then=="function")return j(x,P,M,Au(B),re);if(B.$$typeof===ye)return j(x,P,M,gu(P,B),re);Pu(P,B)}return null}function de(x,P,M,B){for(var re=null,_e=null,ie=P,ue=P=0,At=null;ie!==null&&ue<M.length;ue++){ie.index>ue?(At=ie,ie=null):At=ie.sibling;var Fe=U(x,ie,M[ue],B);if(Fe===null){ie===null&&(ie=At);break}t&&ie&&Fe.alternate===null&&r(x,ie),P=d(Fe,P,ue),_e===null?re=Fe:_e.sibling=Fe,_e=Fe,ie=At}if(ue===M.length)return s(x,ie),ze&&ci(x,ue),re;if(ie===null){for(;ue<M.length;ue++)ie=W(x,M[ue],B),ie!==null&&(P=d(ie,P,ue),_e===null?re=ie:_e.sibling=ie,_e=ie);return ze&&ci(x,ue),re}for(ie=o(ie);ue<M.length;ue++)At=j(ie,x,ue,M[ue],B),At!==null&&(t&&At.alternate!==null&&ie.delete(At.key===null?ue:At.key),P=d(At,P,ue),_e===null?re=At:_e.sibling=At,_e=At);return t&&ie.forEach(function(va){return r(x,va)}),ze&&ci(x,ue),re}function le(x,P,M,B){if(M==null)throw Error(i(151));for(var re=null,_e=null,ie=P,ue=P=0,At=null,Fe=M.next();ie!==null&&!Fe.done;ue++,Fe=M.next()){ie.index>ue?(At=ie,ie=null):At=ie.sibling;var va=U(x,ie,Fe.value,B);if(va===null){ie===null&&(ie=At);break}t&&ie&&va.alternate===null&&r(x,ie),P=d(va,P,ue),_e===null?re=va:_e.sibling=va,_e=va,ie=At}if(Fe.done)return s(x,ie),ze&&ci(x,ue),re;if(ie===null){for(;!Fe.done;ue++,Fe=M.next())Fe=W(x,Fe.value,B),Fe!==null&&(P=d(Fe,P,ue),_e===null?re=Fe:_e.sibling=Fe,_e=Fe);return ze&&ci(x,ue),re}for(ie=o(ie);!Fe.done;ue++,Fe=M.next())Fe=j(ie,x,ue,Fe.value,B),Fe!==null&&(t&&Fe.alternate!==null&&ie.delete(Fe.key===null?ue:Fe.key),P=d(Fe,P,ue),_e===null?re=Fe:_e.sibling=Fe,_e=Fe);return t&&ie.forEach(function($S){return r(x,$S)}),ze&&ci(x,ue),re}function Qe(x,P,M,B){if(typeof M=="object"&&M!==null&&M.type===G&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case V:e:{for(var re=M.key;P!==null;){if(P.key===re){if(re=M.type,re===G){if(P.tag===7){s(x,P.sibling),B=c(P,M.props.children),B.return=x,x=B;break e}}else if(P.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===E&&nm(re)===P.type){s(x,P.sibling),B=c(P,M.props),jo(B,M),B.return=x,x=B;break e}s(x,P);break}else r(x,P);P=P.sibling}M.type===G?(B=li(M.props.children,x.mode,B,M.key),B.return=x,x=B):(B=hu(M.type,M.key,M.props,null,x.mode,B),jo(B,M),B.return=x,x=B)}return v(x);case q:e:{for(re=M.key;P!==null;){if(P.key===re)if(P.tag===4&&P.stateNode.containerInfo===M.containerInfo&&P.stateNode.implementation===M.implementation){s(x,P.sibling),B=c(P,M.children||[]),B.return=x,x=B;break e}else{s(x,P);break}else r(x,P);P=P.sibling}B=Ch(M,x.mode,B),B.return=x,x=B}return v(x);case E:return re=M._init,M=re(M._payload),Qe(x,P,M,B)}if(nt(M))return de(x,P,M,B);if(O(M)){if(re=O(M),typeof re!="function")throw Error(i(150));return M=re.call(M),le(x,P,M,B)}if(typeof M.then=="function")return Qe(x,P,Au(M),B);if(M.$$typeof===ye)return Qe(x,P,gu(x,M),B);Pu(x,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,P!==null&&P.tag===6?(s(x,P.sibling),B=c(P,M),B.return=x,x=B):(s(x,P),B=Ih(M,x.mode,B),B.return=x,x=B),v(x)):s(x,P)}return function(x,P,M,B){try{Uo=0;var re=Qe(x,P,M,B);return ds=null,re}catch(ie){if(ie===Po||ie===yu)throw ie;var _e=on(29,ie,null,x.mode);return _e.lanes=B,_e.return=x,_e}finally{}}}var fs=rm(!0),am=rm(!1),_n=Q(null),Rr=null;function ra(t){var r=t.alternate;X(wt,wt.current&1),X(_n,t),Rr===null&&(r===null||ls.current!==null||r.memoizedState!==null)&&(Rr=t)}function im(t){if(t.tag===22){if(X(wt,wt.current),X(_n,t),Rr===null){var r=t.alternate;r!==null&&r.memoizedState!==null&&(Rr=t)}}else aa()}function aa(){X(wt,wt.current),X(_n,_n.current)}function Nr(t){Z(_n),Rr===t&&(Rr=null),Z(wt)}var wt=Q(0);function Ru(t){for(var r=t;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Gd(s)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function sd(t,r,s,o){r=t.memoizedState,s=s(o,r),s=s==null?r:k({},r,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var od={enqueueSetState:function(t,r,s){t=t._reactInternals;var o=hn(),c=ea(o);c.payload=r,s!=null&&(c.callback=s),r=ta(t,c,o),r!==null&&(dn(r,t,o),No(r,t,o))},enqueueReplaceState:function(t,r,s){t=t._reactInternals;var o=hn(),c=ea(o);c.tag=1,c.payload=r,s!=null&&(c.callback=s),r=ta(t,c,o),r!==null&&(dn(r,t,o),No(r,t,o))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var s=hn(),o=ea(s);o.tag=2,r!=null&&(o.callback=r),r=ta(t,o,s),r!==null&&(dn(r,t,s),No(r,t,s))}};function sm(t,r,s,o,c,d,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,v):r.prototype&&r.prototype.isPureReactComponent?!So(s,o)||!So(c,d):!0}function om(t,r,s,o){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,o),r.state!==t&&od.enqueueReplaceState(r,r.state,null)}function yi(t,r){var s=r;if("ref"in r){s={};for(var o in r)o!=="ref"&&(s[o]=r[o])}if(t=t.defaultProps){s===r&&(s=k({},s));for(var c in t)s[c]===void 0&&(s[c]=t[c])}return s}var Nu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function lm(t){Nu(t)}function um(t){console.error(t)}function cm(t){Nu(t)}function Du(t,r){try{var s=t.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(o){setTimeout(function(){throw o})}}function hm(t,r,s){try{var o=t.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ld(t,r,s){return s=ea(s),s.tag=3,s.payload={element:null},s.callback=function(){Du(t,r)},s}function dm(t){return t=ea(t),t.tag=3,t}function fm(t,r,s,o){var c=s.type.getDerivedStateFromError;if(typeof c=="function"){var d=o.value;t.payload=function(){return c(d)},t.callback=function(){hm(r,s,o)}}var v=s.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){hm(r,s,o),typeof c!="function"&&(ca===null?ca=new Set([this]):ca.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function $1(t,r,s,o,c){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(r=s.alternate,r!==null&&Io(r,s,c,!0),s=_n.current,s!==null){switch(s.tag){case 13:return Rr===null?Dd():s.alternate===null&&it===0&&(it=3),s.flags&=-257,s.flags|=65536,s.lanes=c,o===Fh?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([o]):r.add(o),Od(t,o,c)),!1;case 22:return s.flags|=65536,o===Fh?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([o]):s.add(o)),Od(t,o,c)),!1}throw Error(i(435,s.tag))}return Od(t,o,c),Dd(),!1}if(ze)return r=_n.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=c,o!==Rh&&(t=Error(i(422),{cause:o}),To(wn(t,s)))):(o!==Rh&&(r=Error(i(423),{cause:o}),To(wn(r,s))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=wn(o,s),c=ld(t.stateNode,o,c),zh(t,c),it!==4&&(it=2)),!1;var d=Error(i(520),{cause:o});if(d=wn(d,s),Wo===null?Wo=[d]:Wo.push(d),it!==4&&(it=2),r===null)return!0;o=wn(o,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,t=c&-c,s.lanes|=t,t=ld(s.stateNode,o,t),zh(s,t),!1;case 1:if(r=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ca===null||!ca.has(d))))return s.flags|=65536,c&=-c,s.lanes|=c,c=dm(c),fm(c,t,s,o),zh(s,c),!1}s=s.return}while(s!==null);return!1}var pm=Error(i(461)),It=!1;function Ot(t,r,s,o){r.child=t===null?am(r,null,s,o):fs(r,t.child,s,o)}function gm(t,r,s,o,c){s=s.render;var d=r.ref;if("ref"in o){var v={};for(var w in o)w!=="ref"&&(v[w]=o[w])}else v=o;return pi(r),o=Bh(t,r,s,v,d,c),w=Wh(),t!==null&&!It?(Kh(t,r,c),Dr(t,r,c)):(ze&&w&&Ah(r),r.flags|=1,Ot(t,r,o,c),r.child)}function mm(t,r,s,o,c){if(t===null){var d=s.type;return typeof d=="function"&&!Th(d)&&d.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=d,ym(t,r,d,o,c)):(t=hu(s.type,null,o,r,r.mode,c),t.ref=r.ref,t.return=r,r.child=t)}if(d=t.child,!md(t,c)){var v=d.memoizedProps;if(s=s.compare,s=s!==null?s:So,s(v,o)&&t.ref===r.ref)return Dr(t,r,c)}return r.flags|=1,t=_r(d,o),t.ref=r.ref,t.return=r,r.child=t}function ym(t,r,s,o,c){if(t!==null){var d=t.memoizedProps;if(So(d,o)&&t.ref===r.ref)if(It=!1,r.pendingProps=o=d,md(t,c))(t.flags&131072)!==0&&(It=!0);else return r.lanes=t.lanes,Dr(t,r,c)}return ud(t,r,s,o,c)}function vm(t,r,s){var o=r.pendingProps,c=o.children,d=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((r.flags&128)!==0){if(o=d!==null?d.baseLanes|s:s,t!==null){for(c=r.child=t.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;r.childLanes=d&~o}else r.childLanes=0,r.child=null;return bm(t,r,o,s)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},t!==null&&mu(r,d!==null?d.cachePool:null),d!==null?yg(r,d):qh(),im(r);else return r.lanes=r.childLanes=536870912,bm(t,r,d!==null?d.baseLanes|s:s,s)}else d!==null?(mu(r,d.cachePool),yg(r,d),aa(),r.memoizedState=null):(t!==null&&mu(r,null),qh(),aa());return Ot(t,r,c,s),r.child}function bm(t,r,s,o){var c=Mh();return c=c===null?null:{parent:bt._currentValue,pool:c},r.memoizedState={baseLanes:s,cachePool:c},t!==null&&mu(r,null),qh(),im(r),t!==null&&Io(t,r,o,!0),null}function xu(t,r){var s=r.ref;if(s===null)t!==null&&t.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(i(284));(t===null||t.ref!==s)&&(r.flags|=4194816)}}function ud(t,r,s,o,c){return pi(r),s=Bh(t,r,s,o,void 0,c),o=Wh(),t!==null&&!It?(Kh(t,r,c),Dr(t,r,c)):(ze&&o&&Ah(r),r.flags|=1,Ot(t,r,s,c),r.child)}function wm(t,r,s,o,c,d){return pi(r),r.updateQueue=null,s=bg(r,o,s,c),vg(t),o=Wh(),t!==null&&!It?(Kh(t,r,d),Dr(t,r,d)):(ze&&o&&Ah(r),r.flags|=1,Ot(t,r,s,d),r.child)}function Sm(t,r,s,o,c){if(pi(r),r.stateNode===null){var d=rs,v=s.contextType;typeof v=="object"&&v!==null&&(d=zt(v)),d=new s(o,d),r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=od,r.stateNode=d,d._reactInternals=r,d=r.stateNode,d.props=o,d.state=r.memoizedState,d.refs={},Uh(r),v=s.contextType,d.context=typeof v=="object"&&v!==null?zt(v):rs,d.state=r.memoizedState,v=s.getDerivedStateFromProps,typeof v=="function"&&(sd(r,s,v,o),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&od.enqueueReplaceState(d,d.state,null),xo(r,o,d,c),Do(),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308),o=!0}else if(t===null){d=r.stateNode;var w=r.memoizedProps,_=yi(s,w);d.props=_;var F=d.context,H=s.contextType;v=rs,typeof H=="object"&&H!==null&&(v=zt(H));var W=s.getDerivedStateFromProps;H=typeof W=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=r.pendingProps!==w,H||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||F!==v)&&om(r,d,o,v),Zr=!1;var U=r.memoizedState;d.state=U,xo(r,o,d,c),Do(),F=r.memoizedState,w||U!==F||Zr?(typeof W=="function"&&(sd(r,s,W,o),F=r.memoizedState),(_=Zr||sm(r,s,_,o,U,F,v))?(H||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=F),d.props=o,d.state=F,d.context=v,o=_):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{d=r.stateNode,jh(t,r),v=r.memoizedProps,H=yi(s,v),d.props=H,W=r.pendingProps,U=d.context,F=s.contextType,_=rs,typeof F=="object"&&F!==null&&(_=zt(F)),w=s.getDerivedStateFromProps,(F=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==W||U!==_)&&om(r,d,o,_),Zr=!1,U=r.memoizedState,d.state=U,xo(r,o,d,c),Do();var j=r.memoizedState;v!==W||U!==j||Zr||t!==null&&t.dependencies!==null&&pu(t.dependencies)?(typeof w=="function"&&(sd(r,s,w,o),j=r.memoizedState),(H=Zr||sm(r,s,H,o,U,j,_)||t!==null&&t.dependencies!==null&&pu(t.dependencies))?(F||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,j,_),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,j,_)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&U===t.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&U===t.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=j),d.props=o,d.state=j,d.context=_,o=H):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&U===t.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&U===t.memoizedState||(r.flags|=1024),o=!1)}return d=o,xu(t,r),o=(r.flags&128)!==0,d||o?(d=r.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:d.render(),r.flags|=1,t!==null&&o?(r.child=fs(r,t.child,null,c),r.child=fs(r,null,s,c)):Ot(t,r,s,c),r.memoizedState=d.state,t=r.child):t=Dr(t,r,c),t}function km(t,r,s,o){return _o(),r.flags|=256,Ot(t,r,s,o),r.child}var cd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hd(t){return{baseLanes:t,cachePool:ug()}}function dd(t,r,s){return t=t!==null?t.childLanes&~s:0,r&&(t|=Tn),t}function Em(t,r,s){var o=r.pendingProps,c=!1,d=(r.flags&128)!==0,v;if((v=d)||(v=t!==null&&t.memoizedState===null?!1:(wt.current&2)!==0),v&&(c=!0,r.flags&=-129),v=(r.flags&32)!==0,r.flags&=-33,t===null){if(ze){if(c?ra(r):aa(),ze){var w=at,_;if(_=w){e:{for(_=w,w=Zn;_.nodeType!==8;){if(!w){w=null;break e}if(_=On(_.nextSibling),_===null){w=null;break e}}w=_}w!==null?(r.memoizedState={dehydrated:w,treeContext:ui!==null?{id:Tr,overflow:Ir}:null,retryLane:536870912,hydrationErrors:null},_=on(18,null,null,0),_.stateNode=w,_.return=r,r.child=_,Gt=r,at=null,_=!0):_=!1}_||di(r)}if(w=r.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return Gd(w)?r.lanes=32:r.lanes=536870912,null;Nr(r)}return w=o.children,o=o.fallback,c?(aa(),c=r.mode,w=Ou({mode:"hidden",children:w},c),o=li(o,c,s,null),w.return=r,o.return=r,w.sibling=o,r.child=w,c=r.child,c.memoizedState=hd(s),c.childLanes=dd(t,v,s),r.memoizedState=cd,o):(ra(r),fd(r,w))}if(_=t.memoizedState,_!==null&&(w=_.dehydrated,w!==null)){if(d)r.flags&256?(ra(r),r.flags&=-257,r=pd(t,r,s)):r.memoizedState!==null?(aa(),r.child=t.child,r.flags|=128,r=null):(aa(),c=o.fallback,w=r.mode,o=Ou({mode:"visible",children:o.children},w),c=li(c,w,s,null),c.flags|=2,o.return=r,c.return=r,o.sibling=c,r.child=o,fs(r,t.child,null,s),o=r.child,o.memoizedState=hd(s),o.childLanes=dd(t,v,s),r.memoizedState=cd,r=c);else if(ra(r),Gd(w)){if(v=w.nextSibling&&w.nextSibling.dataset,v)var F=v.dgst;v=F,o=Error(i(419)),o.stack="",o.digest=v,To({value:o,source:null,stack:null}),r=pd(t,r,s)}else if(It||Io(t,r,s,!1),v=(s&t.childLanes)!==0,It||v){if(v=Je,v!==null&&(o=s&-s,o=(o&42)!==0?1:Br(o),o=(o&(v.suspendedLanes|s))!==0?0:o,o!==0&&o!==_.retryLane))throw _.retryLane=o,ns(t,o),dn(v,t,o),pm;w.data==="$?"||Dd(),r=pd(t,r,s)}else w.data==="$?"?(r.flags|=192,r.child=t.child,r=null):(t=_.treeContext,at=On(w.nextSibling),Gt=r,ze=!0,hi=null,Zn=!1,t!==null&&(kn[En++]=Tr,kn[En++]=Ir,kn[En++]=ui,Tr=t.id,Ir=t.overflow,ui=r),r=fd(r,o.children),r.flags|=4096);return r}return c?(aa(),c=o.fallback,w=r.mode,_=t.child,F=_.sibling,o=_r(_,{mode:"hidden",children:o.children}),o.subtreeFlags=_.subtreeFlags&65011712,F!==null?c=_r(F,c):(c=li(c,w,s,null),c.flags|=2),c.return=r,o.return=r,o.sibling=c,r.child=o,o=c,c=r.child,w=t.child.memoizedState,w===null?w=hd(s):(_=w.cachePool,_!==null?(F=bt._currentValue,_=_.parent!==F?{parent:F,pool:F}:_):_=ug(),w={baseLanes:w.baseLanes|s,cachePool:_}),c.memoizedState=w,c.childLanes=dd(t,v,s),r.memoizedState=cd,o):(ra(r),s=t.child,t=s.sibling,s=_r(s,{mode:"visible",children:o.children}),s.return=r,s.sibling=null,t!==null&&(v=r.deletions,v===null?(r.deletions=[t],r.flags|=16):v.push(t)),r.child=s,r.memoizedState=null,s)}function fd(t,r){return r=Ou({mode:"visible",children:r},t.mode),r.return=t,t.child=r}function Ou(t,r){return t=on(22,t,null,r),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function pd(t,r,s){return fs(r,t.child,null,s),t=fd(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function _m(t,r,s){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r),Dh(t.return,r,s)}function gd(t,r,s,o,c){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:c}:(d.isBackwards=r,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=s,d.tailMode=c)}function Tm(t,r,s){var o=r.pendingProps,c=o.revealOrder,d=o.tail;if(Ot(t,r,o.children,s),o=wt.current,(o&2)!==0)o=o&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_m(t,s,r);else if(t.tag===19)_m(t,s,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(X(wt,o),c){case"forwards":for(s=r.child,c=null;s!==null;)t=s.alternate,t!==null&&Ru(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=r.child,r.child=null):(c=s.sibling,s.sibling=null),gd(r,!1,c,s,d);break;case"backwards":for(s=null,c=r.child,r.child=null;c!==null;){if(t=c.alternate,t!==null&&Ru(t)===null){r.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}gd(r,!0,s,null,d);break;case"together":gd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Dr(t,r,s){if(t!==null&&(r.dependencies=t.dependencies),ua|=r.lanes,(s&r.childLanes)===0)if(t!==null){if(Io(t,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(t!==null&&r.child!==t.child)throw Error(i(153));if(r.child!==null){for(t=r.child,s=_r(t,t.pendingProps),r.child=s,s.return=r;t.sibling!==null;)t=t.sibling,s=s.sibling=_r(t,t.pendingProps),s.return=r;s.sibling=null}return r.child}function md(t,r){return(t.lanes&r)!==0?!0:(t=t.dependencies,!!(t!==null&&pu(t)))}function H1(t,r,s){switch(r.tag){case 3:Xe(r,r.stateNode.containerInfo),Yr(r,bt,t.memoizedState.cache),_o();break;case 27:case 5:Hr(r);break;case 4:Xe(r,r.stateNode.containerInfo);break;case 10:Yr(r,r.type,r.memoizedProps.value);break;case 13:var o=r.memoizedState;if(o!==null)return o.dehydrated!==null?(ra(r),r.flags|=128,null):(s&r.child.childLanes)!==0?Em(t,r,s):(ra(r),t=Dr(t,r,s),t!==null?t.sibling:null);ra(r);break;case 19:var c=(t.flags&128)!==0;if(o=(s&r.childLanes)!==0,o||(Io(t,r,s,!1),o=(s&r.childLanes)!==0),c){if(o)return Tm(t,r,s);r.flags|=128}if(c=r.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),X(wt,wt.current),o)break;return null;case 22:case 23:return r.lanes=0,vm(t,r,s);case 24:Yr(r,bt,t.memoizedState.cache)}return Dr(t,r,s)}function Im(t,r,s){if(t!==null)if(t.memoizedProps!==r.pendingProps)It=!0;else{if(!md(t,s)&&(r.flags&128)===0)return It=!1,H1(t,r,s);It=(t.flags&131072)!==0}else It=!1,ze&&(r.flags&1048576)!==0&&ng(r,fu,r.index);switch(r.lanes=0,r.tag){case 16:e:{t=r.pendingProps;var o=r.elementType,c=o._init;if(o=c(o._payload),r.type=o,typeof o=="function")Th(o)?(t=yi(o,t),r.tag=1,r=Sm(null,r,o,t,s)):(r.tag=0,r=ud(null,r,o,t,s));else{if(o!=null){if(c=o.$$typeof,c===Oe){r.tag=11,r=gm(null,r,o,t,s);break e}else if(c===N){r.tag=14,r=mm(null,r,o,t,s);break e}}throw r=Rt(o)||o,Error(i(306,r,""))}}return r;case 0:return ud(t,r,r.type,r.pendingProps,s);case 1:return o=r.type,c=yi(o,r.pendingProps),Sm(t,r,o,c,s);case 3:e:{if(Xe(r,r.stateNode.containerInfo),t===null)throw Error(i(387));o=r.pendingProps;var d=r.memoizedState;c=d.element,jh(t,r),xo(r,o,null,s);var v=r.memoizedState;if(o=v.cache,Yr(r,bt,o),o!==d.cache&&xh(r,[bt],s,!0),Do(),o=v.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:v.cache},r.updateQueue.baseState=d,r.memoizedState=d,r.flags&256){r=km(t,r,o,s);break e}else if(o!==c){c=wn(Error(i(424)),r),To(c),r=km(t,r,o,s);break e}else{switch(t=r.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(at=On(t.firstChild),Gt=r,ze=!0,hi=null,Zn=!0,s=am(r,null,o,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(_o(),o===c){r=Dr(t,r,s);break e}Ot(t,r,o,s)}r=r.child}return r;case 26:return xu(t,r),t===null?(s=Ry(r.type,null,r.pendingProps,null))?r.memoizedState=s:ze||(s=r.type,t=r.pendingProps,o=Qu(ge.current).createElement(s),o[mt]=r,o[dt]=t,Mt(o,s,t),ot(o),r.stateNode=o):r.memoizedState=Ry(r.type,t.memoizedProps,r.pendingProps,t.memoizedState),null;case 27:return Hr(r),t===null&&ze&&(o=r.stateNode=Cy(r.type,r.pendingProps,ge.current),Gt=r,Zn=!0,c=at,fa(r.type)?(Xd=c,at=On(o.firstChild)):at=c),Ot(t,r,r.pendingProps.children,s),xu(t,r),t===null&&(r.flags|=4194304),r.child;case 5:return t===null&&ze&&((c=o=at)&&(o=vS(o,r.type,r.pendingProps,Zn),o!==null?(r.stateNode=o,Gt=r,at=On(o.firstChild),Zn=!1,c=!0):c=!1),c||di(r)),Hr(r),c=r.type,d=r.pendingProps,v=t!==null?t.memoizedProps:null,o=d.children,Wd(c,d)?o=null:v!==null&&Wd(c,v)&&(r.flags|=32),r.memoizedState!==null&&(c=Bh(t,r,M1,null,null,s),tl._currentValue=c),xu(t,r),Ot(t,r,o,s),r.child;case 6:return t===null&&ze&&((t=s=at)&&(s=bS(s,r.pendingProps,Zn),s!==null?(r.stateNode=s,Gt=r,at=null,t=!0):t=!1),t||di(r)),null;case 13:return Em(t,r,s);case 4:return Xe(r,r.stateNode.containerInfo),o=r.pendingProps,t===null?r.child=fs(r,null,o,s):Ot(t,r,o,s),r.child;case 11:return gm(t,r,r.type,r.pendingProps,s);case 7:return Ot(t,r,r.pendingProps,s),r.child;case 8:return Ot(t,r,r.pendingProps.children,s),r.child;case 12:return Ot(t,r,r.pendingProps.children,s),r.child;case 10:return o=r.pendingProps,Yr(r,r.type,o.value),Ot(t,r,o.children,s),r.child;case 9:return c=r.type._context,o=r.pendingProps.children,pi(r),c=zt(c),o=o(c),r.flags|=1,Ot(t,r,o,s),r.child;case 14:return mm(t,r,r.type,r.pendingProps,s);case 15:return ym(t,r,r.type,r.pendingProps,s);case 19:return Tm(t,r,s);case 31:return o=r.pendingProps,s=r.mode,o={mode:o.mode,children:o.children},t===null?(s=Ou(o,s),s.ref=r.ref,r.child=s,s.return=r,r=s):(s=_r(t.child,o),s.ref=r.ref,r.child=s,s.return=r,r=s),r;case 22:return vm(t,r,s);case 24:return pi(r),o=zt(bt),t===null?(c=Mh(),c===null&&(c=Je,d=Oh(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=s),c=d),r.memoizedState={parent:o,cache:c},Uh(r),Yr(r,bt,c)):((t.lanes&s)!==0&&(jh(t,r),xo(r,null,null,s),Do()),c=t.memoizedState,d=r.memoizedState,c.parent!==o?(c={parent:o,cache:o},r.memoizedState=c,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=c),Yr(r,bt,o)):(o=d.cache,Yr(r,bt,o),o!==c.cache&&xh(r,[bt],s,!0))),Ot(t,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(i(156,r.tag))}function xr(t){t.flags|=4}function Cm(t,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ly(r)){if(r=_n.current,r!==null&&((Ne&4194048)===Ne?Rr!==null:(Ne&62914560)!==Ne&&(Ne&536870912)===0||r!==Rr))throw Ro=Fh,cg;t.flags|=8192}}function Lu(t,r){r!==null&&(t.flags|=4),t.flags&16384&&(r=t.tag!==22?no():536870912,t.lanes|=r,ys|=r)}function zo(t,r){if(!ze)switch(t.tailMode){case"hidden":r=t.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function et(t){var r=t.alternate!==null&&t.alternate.child===t.child,s=0,o=0;if(r)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=s,r}function B1(t,r,s){var o=r.pendingProps;switch(Ph(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(r),null;case 1:return et(r),null;case 3:return s=r.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),Ar(bt),Vn(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Eo(r)?xr(r):t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,ig())),et(r),null;case 26:return s=r.memoizedState,t===null?(xr(r),s!==null?(et(r),Cm(r,s)):(et(r),r.flags&=-16777217)):s?s!==t.memoizedState?(xr(r),et(r),Cm(r,s)):(et(r),r.flags&=-16777217):(t.memoizedProps!==o&&xr(r),et(r),r.flags&=-16777217),null;case 27:hr(r),s=ge.current;var c=r.type;if(t!==null&&r.stateNode!=null)t.memoizedProps!==o&&xr(r);else{if(!o){if(r.stateNode===null)throw Error(i(166));return et(r),null}t=oe.current,Eo(r)?rg(r):(t=Cy(c,o,s),r.stateNode=t,xr(r))}return et(r),null;case 5:if(hr(r),s=r.type,t!==null&&r.stateNode!=null)t.memoizedProps!==o&&xr(r);else{if(!o){if(r.stateNode===null)throw Error(i(166));return et(r),null}if(t=oe.current,Eo(r))rg(r);else{switch(c=Qu(ge.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?c.createElement(s,{is:o.is}):c.createElement(s)}}t[mt]=r,t[dt]=o;e:for(c=r.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===r)break e;for(;c.sibling===null;){if(c.return===null||c.return===r)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}r.stateNode=t;e:switch(Mt(t,s,o),s){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&xr(r)}}return et(r),r.flags&=-16777217,null;case 6:if(t&&r.stateNode!=null)t.memoizedProps!==o&&xr(r);else{if(typeof o!="string"&&r.stateNode===null)throw Error(i(166));if(t=ge.current,Eo(r)){if(t=r.stateNode,s=r.memoizedProps,o=null,c=Gt,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[mt]=r,t=!!(t.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||wy(t.nodeValue,s)),t||di(r)}else t=Qu(t).createTextNode(o),t[mt]=r,r.stateNode=t}return et(r),null;case 13:if(o=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Eo(r),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(i(318));if(c=r.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(i(317));c[mt]=r}else _o(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;et(r),c=!1}else c=ig(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return r.flags&256?(Nr(r),r):(Nr(r),null)}if(Nr(r),(r.flags&128)!==0)return r.lanes=s,r;if(s=o!==null,t=t!==null&&t.memoizedState!==null,s){o=r.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==c&&(o.flags|=2048)}return s!==t&&s&&(r.child.flags|=8192),Lu(r,r.updateQueue),et(r),null;case 4:return Vn(),t===null&&Vd(r.stateNode.containerInfo),et(r),null;case 10:return Ar(r.type),et(r),null;case 19:if(Z(wt),c=r.memoizedState,c===null)return et(r),null;if(o=(r.flags&128)!==0,d=c.rendering,d===null)if(o)zo(c,!1);else{if(it!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(d=Ru(t),d!==null){for(r.flags|=128,zo(c,!1),t=d.updateQueue,r.updateQueue=t,Lu(r,t),r.subtreeFlags=0,t=s,s=r.child;s!==null;)tg(s,t),s=s.sibling;return X(wt,wt.current&1|2),r.child}t=t.sibling}c.tail!==null&&pn()>Uu&&(r.flags|=128,o=!0,zo(c,!1),r.lanes=4194304)}else{if(!o)if(t=Ru(d),t!==null){if(r.flags|=128,o=!0,t=t.updateQueue,r.updateQueue=t,Lu(r,t),zo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!ze)return et(r),null}else 2*pn()-c.renderingStartTime>Uu&&s!==536870912&&(r.flags|=128,o=!0,zo(c,!1),r.lanes=4194304);c.isBackwards?(d.sibling=r.child,r.child=d):(t=c.last,t!==null?t.sibling=d:r.child=d,c.last=d)}return c.tail!==null?(r=c.tail,c.rendering=r,c.tail=r.sibling,c.renderingStartTime=pn(),r.sibling=null,t=wt.current,X(wt,o?t&1|2:t&1),r):(et(r),null);case 22:case 23:return Nr(r),$h(),o=r.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(r.flags|=8192):o&&(r.flags|=8192),o?(s&536870912)!==0&&(r.flags&128)===0&&(et(r),r.subtreeFlags&6&&(r.flags|=8192)):et(r),s=r.updateQueue,s!==null&&Lu(r,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==s&&(r.flags|=2048),t!==null&&Z(gi),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),Ar(bt),et(r),null;case 25:return null;case 30:return null}throw Error(i(156,r.tag))}function W1(t,r){switch(Ph(r),r.tag){case 1:return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Ar(bt),Vn(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 26:case 27:case 5:return hr(r),null;case 13:if(Nr(r),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(i(340));_o()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return Z(wt),null;case 4:return Vn(),null;case 10:return Ar(r.type),null;case 22:case 23:return Nr(r),$h(),t!==null&&Z(gi),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 24:return Ar(bt),null;case 25:return null;default:return null}}function Am(t,r){switch(Ph(r),r.tag){case 3:Ar(bt),Vn();break;case 26:case 27:case 5:hr(r);break;case 4:Vn();break;case 13:Nr(r);break;case 19:Z(wt);break;case 10:Ar(r.type);break;case 22:case 23:Nr(r),$h(),t!==null&&Z(gi);break;case 24:Ar(bt)}}function Vo(t,r){try{var s=r.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var c=o.next;s=c;do{if((s.tag&t)===t){o=void 0;var d=s.create,v=s.inst;o=d(),v.destroy=o}s=s.next}while(s!==c)}}catch(w){Ge(r,r.return,w)}}function ia(t,r,s){try{var o=r.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&t)===t){var v=o.inst,w=v.destroy;if(w!==void 0){v.destroy=void 0,c=r;var _=s,F=w;try{F()}catch(H){Ge(c,_,H)}}}o=o.next}while(o!==d)}}catch(H){Ge(r,r.return,H)}}function Pm(t){var r=t.updateQueue;if(r!==null){var s=t.stateNode;try{mg(r,s)}catch(o){Ge(t,t.return,o)}}}function Rm(t,r,s){s.props=yi(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(o){Ge(t,r,o)}}function qo(t,r){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof s=="function"?t.refCleanup=s(o):s.current=o}}catch(c){Ge(t,r,c)}}function er(t,r){var s=t.ref,o=t.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(c){Ge(t,r,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(c){Ge(t,r,c)}else s.current=null}function Nm(t){var r=t.type,s=t.memoizedProps,o=t.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break e;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(c){Ge(t,t.return,c)}}function yd(t,r,s){try{var o=t.stateNode;fS(o,t.type,s,r),o[dt]=r}catch(c){Ge(t,t.return,c)}}function Dm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&fa(t.type)||t.tag===4}function vd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Dm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&fa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bd(t,r,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(t),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=Ku));else if(o!==4&&(o===27&&fa(t.type)&&(s=t.stateNode,r=null),t=t.child,t!==null))for(bd(t,r,s),t=t.sibling;t!==null;)bd(t,r,s),t=t.sibling}function Mu(t,r,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,r?s.insertBefore(t,r):s.appendChild(t);else if(o!==4&&(o===27&&fa(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Mu(t,r,s),t=t.sibling;t!==null;)Mu(t,r,s),t=t.sibling}function xm(t){var r=t.stateNode,s=t.memoizedProps;try{for(var o=t.type,c=r.attributes;c.length;)r.removeAttributeNode(c[0]);Mt(r,o,s),r[mt]=t,r[dt]=s}catch(d){Ge(t,t.return,d)}}var Or=!1,ut=!1,wd=!1,Om=typeof WeakSet=="function"?WeakSet:Set,Ct=null;function K1(t,r){if(t=t.containerInfo,Hd=ec,t=Bp(t),vh(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var c=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var v=0,w=-1,_=-1,F=0,H=0,W=t,U=null;t:for(;;){for(var j;W!==s||c!==0&&W.nodeType!==3||(w=v+c),W!==d||o!==0&&W.nodeType!==3||(_=v+o),W.nodeType===3&&(v+=W.nodeValue.length),(j=W.firstChild)!==null;)U=W,W=j;for(;;){if(W===t)break t;if(U===s&&++F===c&&(w=v),U===d&&++H===o&&(_=v),(j=W.nextSibling)!==null)break;W=U,U=W.parentNode}W=j}s=w===-1||_===-1?null:{start:w,end:_}}else s=null}s=s||{start:0,end:0}}else s=null;for(Bd={focusedElem:t,selectionRange:s},ec=!1,Ct=r;Ct!==null;)if(r=Ct,t=r.child,(r.subtreeFlags&1024)!==0&&t!==null)t.return=r,Ct=t;else for(;Ct!==null;){switch(r=Ct,d=r.alternate,t=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=r,c=d.memoizedProps,d=d.memoizedState,o=s.stateNode;try{var de=yi(s.type,c,s.elementType===s.type);t=o.getSnapshotBeforeUpdate(de,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(le){Ge(s,s.return,le)}}break;case 3:if((t&1024)!==0){if(t=r.stateNode.containerInfo,s=t.nodeType,s===9)Qd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Qd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(i(163))}if(t=r.sibling,t!==null){t.return=r.return,Ct=t;break}Ct=r.return}}function Lm(t,r,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:sa(t,s),o&4&&Vo(5,s);break;case 1:if(sa(t,s),o&4)if(t=s.stateNode,r===null)try{t.componentDidMount()}catch(v){Ge(s,s.return,v)}else{var c=yi(s.type,r.memoizedProps);r=r.memoizedState;try{t.componentDidUpdate(c,r,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Ge(s,s.return,v)}}o&64&&Pm(s),o&512&&qo(s,s.return);break;case 3:if(sa(t,s),o&64&&(t=s.updateQueue,t!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{mg(t,r)}catch(v){Ge(s,s.return,v)}}break;case 27:r===null&&o&4&&xm(s);case 26:case 5:sa(t,s),r===null&&o&4&&Nm(s),o&512&&qo(s,s.return);break;case 12:sa(t,s);break;case 13:sa(t,s),o&4&&Um(t,s),o&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=nS.bind(null,s),wS(t,s))));break;case 22:if(o=s.memoizedState!==null||Or,!o){r=r!==null&&r.memoizedState!==null||ut,c=Or;var d=ut;Or=o,(ut=r)&&!d?oa(t,s,(s.subtreeFlags&8772)!==0):sa(t,s),Or=c,ut=d}break;case 30:break;default:sa(t,s)}}function Mm(t){var r=t.alternate;r!==null&&(t.alternate=null,Mm(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&Qr(r)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ze=null,Yt=!1;function Lr(t,r,s){for(s=s.child;s!==null;)Fm(t,r,s),s=s.sibling}function Fm(t,r,s){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(rt,s)}catch{}switch(s.tag){case 26:ut||er(s,r),Lr(t,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:ut||er(s,r);var o=Ze,c=Yt;fa(s.type)&&(Ze=s.stateNode,Yt=!1),Lr(t,r,s),Jo(s.stateNode),Ze=o,Yt=c;break;case 5:ut||er(s,r);case 6:if(o=Ze,c=Yt,Ze=null,Lr(t,r,s),Ze=o,Yt=c,Ze!==null)if(Yt)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(s.stateNode)}catch(d){Ge(s,r,d)}else try{Ze.removeChild(s.stateNode)}catch(d){Ge(s,r,d)}break;case 18:Ze!==null&&(Yt?(t=Ze,Ty(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),il(t)):Ty(Ze,s.stateNode));break;case 4:o=Ze,c=Yt,Ze=s.stateNode.containerInfo,Yt=!0,Lr(t,r,s),Ze=o,Yt=c;break;case 0:case 11:case 14:case 15:ut||ia(2,s,r),ut||ia(4,s,r),Lr(t,r,s);break;case 1:ut||(er(s,r),o=s.stateNode,typeof o.componentWillUnmount=="function"&&Rm(s,r,o)),Lr(t,r,s);break;case 21:Lr(t,r,s);break;case 22:ut=(o=ut)||s.memoizedState!==null,Lr(t,r,s),ut=o;break;default:Lr(t,r,s)}}function Um(t,r){if(r.memoizedState===null&&(t=r.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{il(t)}catch(s){Ge(r,r.return,s)}}function Q1(t){switch(t.tag){case 13:case 19:var r=t.stateNode;return r===null&&(r=t.stateNode=new Om),r;case 22:return t=t.stateNode,r=t._retryCache,r===null&&(r=t._retryCache=new Om),r;default:throw Error(i(435,t.tag))}}function Sd(t,r){var s=Q1(t);r.forEach(function(o){var c=rS.bind(null,t,o);s.has(o)||(s.add(o),o.then(c,c))})}function ln(t,r){var s=r.deletions;if(s!==null)for(var o=0;o<s.length;o++){var c=s[o],d=t,v=r,w=v;e:for(;w!==null;){switch(w.tag){case 27:if(fa(w.type)){Ze=w.stateNode,Yt=!1;break e}break;case 5:Ze=w.stateNode,Yt=!1;break e;case 3:case 4:Ze=w.stateNode.containerInfo,Yt=!0;break e}w=w.return}if(Ze===null)throw Error(i(160));Fm(d,v,c),Ze=null,Yt=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)jm(r,t),r=r.sibling}var xn=null;function jm(t,r){var s=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ln(r,t),un(t),o&4&&(ia(3,t,t.return),Vo(3,t),ia(5,t,t.return));break;case 1:ln(r,t),un(t),o&512&&(ut||s===null||er(s,s.return)),o&64&&Or&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var c=xn;if(ln(r,t),un(t),o&512&&(ut||s===null||er(s,s.return)),o&4){var d=s!==null?s.memoizedState:null;if(o=t.memoizedState,s===null)if(o===null)if(t.stateNode===null){e:{o=t.type,s=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":d=c.getElementsByTagName("title")[0],(!d||d[Wa]||d[mt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(o),c.head.insertBefore(d,c.querySelector("head > title"))),Mt(d,o,s),d[mt]=t,ot(d),o=d;break e;case"link":var v=xy("link","href",c).get(o+(s.href||""));if(v){for(var w=0;w<v.length;w++)if(d=v[w],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){v.splice(w,1);break t}}d=c.createElement(o),Mt(d,o,s),c.head.appendChild(d);break;case"meta":if(v=xy("meta","content",c).get(o+(s.content||""))){for(w=0;w<v.length;w++)if(d=v[w],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){v.splice(w,1);break t}}d=c.createElement(o),Mt(d,o,s),c.head.appendChild(d);break;default:throw Error(i(468,o))}d[mt]=t,ot(d),o=d}t.stateNode=o}else Oy(c,t.type,t.stateNode);else t.stateNode=Dy(c,o,t.memoizedProps);else d!==o?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,o===null?Oy(c,t.type,t.stateNode):Dy(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&yd(t,t.memoizedProps,s.memoizedProps)}break;case 27:ln(r,t),un(t),o&512&&(ut||s===null||er(s,s.return)),s!==null&&o&4&&yd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ln(r,t),un(t),o&512&&(ut||s===null||er(s,s.return)),t.flags&32){c=t.stateNode;try{mn(c,"")}catch(j){Ge(t,t.return,j)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,yd(t,c,s!==null?s.memoizedProps:c)),o&1024&&(wd=!0);break;case 6:if(ln(r,t),un(t),o&4){if(t.stateNode===null)throw Error(i(162));o=t.memoizedProps,s=t.stateNode;try{s.nodeValue=o}catch(j){Ge(t,t.return,j)}}break;case 3:if(Ju=null,c=xn,xn=Gu(r.containerInfo),ln(r,t),xn=c,un(t),o&4&&s!==null&&s.memoizedState.isDehydrated)try{il(r.containerInfo)}catch(j){Ge(t,t.return,j)}wd&&(wd=!1,zm(t));break;case 4:o=xn,xn=Gu(t.stateNode.containerInfo),ln(r,t),un(t),xn=o;break;case 12:ln(r,t),un(t);break;case 13:ln(r,t),un(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Cd=pn()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Sd(t,o)));break;case 22:c=t.memoizedState!==null;var _=s!==null&&s.memoizedState!==null,F=Or,H=ut;if(Or=F||c,ut=H||_,ln(r,t),ut=H,Or=F,un(t),o&8192)e:for(r=t.stateNode,r._visibility=c?r._visibility&-2:r._visibility|1,c&&(s===null||_||Or||ut||vi(t)),s=null,r=t;;){if(r.tag===5||r.tag===26){if(s===null){_=s=r;try{if(d=_.stateNode,c)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{w=_.stateNode;var W=_.memoizedProps.style,U=W!=null&&W.hasOwnProperty("display")?W.display:null;w.style.display=U==null||typeof U=="boolean"?"":(""+U).trim()}}catch(j){Ge(_,_.return,j)}}}else if(r.tag===6){if(s===null){_=r;try{_.stateNode.nodeValue=c?"":_.memoizedProps}catch(j){Ge(_,_.return,j)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===t)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}o&4&&(o=t.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,Sd(t,s))));break;case 19:ln(r,t),un(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Sd(t,o)));break;case 30:break;case 21:break;default:ln(r,t),un(t)}}function un(t){var r=t.flags;if(r&2){try{for(var s,o=t.return;o!==null;){if(Dm(o)){s=o;break}o=o.return}if(s==null)throw Error(i(160));switch(s.tag){case 27:var c=s.stateNode,d=vd(t);Mu(t,d,c);break;case 5:var v=s.stateNode;s.flags&32&&(mn(v,""),s.flags&=-33);var w=vd(t);Mu(t,w,v);break;case 3:case 4:var _=s.stateNode.containerInfo,F=vd(t);bd(t,F,_);break;default:throw Error(i(161))}}catch(H){Ge(t,t.return,H)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function zm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var r=t;zm(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),t=t.sibling}}function sa(t,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Lm(t,r.alternate,r),r=r.sibling}function vi(t){for(t=t.child;t!==null;){var r=t;switch(r.tag){case 0:case 11:case 14:case 15:ia(4,r,r.return),vi(r);break;case 1:er(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&Rm(r,r.return,s),vi(r);break;case 27:Jo(r.stateNode);case 26:case 5:er(r,r.return),vi(r);break;case 22:r.memoizedState===null&&vi(r);break;case 30:vi(r);break;default:vi(r)}t=t.sibling}}function oa(t,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var o=r.alternate,c=t,d=r,v=d.flags;switch(d.tag){case 0:case 11:case 15:oa(c,d,s),Vo(4,d);break;case 1:if(oa(c,d,s),o=d,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(F){Ge(o,o.return,F)}if(o=d,c=o.updateQueue,c!==null){var w=o.stateNode;try{var _=c.shared.hiddenCallbacks;if(_!==null)for(c.shared.hiddenCallbacks=null,c=0;c<_.length;c++)gg(_[c],w)}catch(F){Ge(o,o.return,F)}}s&&v&64&&Pm(d),qo(d,d.return);break;case 27:xm(d);case 26:case 5:oa(c,d,s),s&&o===null&&v&4&&Nm(d),qo(d,d.return);break;case 12:oa(c,d,s);break;case 13:oa(c,d,s),s&&v&4&&Um(c,d);break;case 22:d.memoizedState===null&&oa(c,d,s),qo(d,d.return);break;case 30:break;default:oa(c,d,s)}r=r.sibling}}function kd(t,r){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(t=r.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Co(s))}function Ed(t,r){t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&Co(t))}function tr(t,r,s,o){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Vm(t,r,s,o),r=r.sibling}function Vm(t,r,s,o){var c=r.flags;switch(r.tag){case 0:case 11:case 15:tr(t,r,s,o),c&2048&&Vo(9,r);break;case 1:tr(t,r,s,o);break;case 3:tr(t,r,s,o),c&2048&&(t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&Co(t)));break;case 12:if(c&2048){tr(t,r,s,o),t=r.stateNode;try{var d=r.memoizedProps,v=d.id,w=d.onPostCommit;typeof w=="function"&&w(v,r.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(_){Ge(r,r.return,_)}}else tr(t,r,s,o);break;case 13:tr(t,r,s,o);break;case 23:break;case 22:d=r.stateNode,v=r.alternate,r.memoizedState!==null?d._visibility&2?tr(t,r,s,o):$o(t,r):d._visibility&2?tr(t,r,s,o):(d._visibility|=2,ps(t,r,s,o,(r.subtreeFlags&10256)!==0)),c&2048&&kd(v,r);break;case 24:tr(t,r,s,o),c&2048&&Ed(r.alternate,r);break;default:tr(t,r,s,o)}}function ps(t,r,s,o,c){for(c=c&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var d=t,v=r,w=s,_=o,F=v.flags;switch(v.tag){case 0:case 11:case 15:ps(d,v,w,_,c),Vo(8,v);break;case 23:break;case 22:var H=v.stateNode;v.memoizedState!==null?H._visibility&2?ps(d,v,w,_,c):$o(d,v):(H._visibility|=2,ps(d,v,w,_,c)),c&&F&2048&&kd(v.alternate,v);break;case 24:ps(d,v,w,_,c),c&&F&2048&&Ed(v.alternate,v);break;default:ps(d,v,w,_,c)}r=r.sibling}}function $o(t,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=t,o=r,c=o.flags;switch(o.tag){case 22:$o(s,o),c&2048&&kd(o.alternate,o);break;case 24:$o(s,o),c&2048&&Ed(o.alternate,o);break;default:$o(s,o)}r=r.sibling}}var Ho=8192;function gs(t){if(t.subtreeFlags&Ho)for(t=t.child;t!==null;)qm(t),t=t.sibling}function qm(t){switch(t.tag){case 26:gs(t),t.flags&Ho&&t.memoizedState!==null&&xS(xn,t.memoizedState,t.memoizedProps);break;case 5:gs(t);break;case 3:case 4:var r=xn;xn=Gu(t.stateNode.containerInfo),gs(t),xn=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Ho,Ho=16777216,gs(t),Ho=r):gs(t));break;default:gs(t)}}function $m(t){var r=t.alternate;if(r!==null&&(t=r.child,t!==null)){r.child=null;do r=t.sibling,t.sibling=null,t=r;while(t!==null)}}function Bo(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var o=r[s];Ct=o,Bm(o,t)}$m(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Hm(t),t=t.sibling}function Hm(t){switch(t.tag){case 0:case 11:case 15:Bo(t),t.flags&2048&&ia(9,t,t.return);break;case 3:Bo(t);break;case 12:Bo(t);break;case 22:var r=t.stateNode;t.memoizedState!==null&&r._visibility&2&&(t.return===null||t.return.tag!==13)?(r._visibility&=-3,Fu(t)):Bo(t);break;default:Bo(t)}}function Fu(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var o=r[s];Ct=o,Bm(o,t)}$m(t)}for(t=t.child;t!==null;){switch(r=t,r.tag){case 0:case 11:case 15:ia(8,r,r.return),Fu(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,Fu(r));break;default:Fu(r)}t=t.sibling}}function Bm(t,r){for(;Ct!==null;){var s=Ct;switch(s.tag){case 0:case 11:case 15:ia(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Co(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,Ct=o;else e:for(s=t;Ct!==null;){o=Ct;var c=o.sibling,d=o.return;if(Mm(o),o===s){Ct=null;break e}if(c!==null){c.return=d,Ct=c;break e}Ct=d}}}var G1={getCacheForType:function(t){var r=zt(bt),s=r.data.get(t);return s===void 0&&(s=t(),r.data.set(t,s)),s}},X1=typeof WeakMap=="function"?WeakMap:Map,$e=0,Je=null,Ie=null,Ne=0,He=0,cn=null,la=!1,ms=!1,_d=!1,Mr=0,it=0,ua=0,bi=0,Td=0,Tn=0,ys=0,Wo=null,Zt=null,Id=!1,Cd=0,Uu=1/0,ju=null,ca=null,Lt=0,ha=null,vs=null,bs=0,Ad=0,Pd=null,Wm=null,Ko=0,Rd=null;function hn(){if(($e&2)!==0&&Ne!==0)return Ne&-Ne;if($.T!==null){var t=ss;return t!==0?t:Fd()}return Wr()}function Km(){Tn===0&&(Tn=(Ne&536870912)===0||ze?to():536870912);var t=_n.current;return t!==null&&(t.flags|=32),Tn}function dn(t,r,s){(t===Je&&(He===2||He===9)||t.cancelPendingCommit!==null)&&(ws(t,0),da(t,Ne,Tn,!1)),fr(t,s),(($e&2)===0||t!==Je)&&(t===Je&&(($e&2)===0&&(bi|=s),it===4&&da(t,Ne,Tn,!1)),nr(t))}function Qm(t,r,s){if(($e&6)!==0)throw Error(i(327));var o=!s&&(r&124)===0&&(r&t.expiredLanes)===0||Ba(t,r),c=o?Z1(t,r):xd(t,r,!0),d=o;do{if(c===0){ms&&!o&&da(t,r,0,!1);break}else{if(s=t.current.alternate,d&&!J1(s)){c=xd(t,r,!1),d=!1;continue}if(c===2){if(d=r,t.errorRecoveryDisabledLanes&d)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){r=v;e:{var w=t;c=Wo;var _=w.current.memoizedState.isDehydrated;if(_&&(ws(w,v).flags|=256),v=xd(w,v,!1),v!==2){if(_d&&!_){w.errorRecoveryDisabledLanes|=d,bi|=d,c=4;break e}d=Zt,Zt=c,d!==null&&(Zt===null?Zt=d:Zt.push.apply(Zt,d))}c=v}if(d=!1,c!==2)continue}}if(c===1){ws(t,0),da(t,r,0,!0);break}e:{switch(o=t,d=c,d){case 0:case 1:throw Error(i(345));case 4:if((r&4194048)!==r)break;case 6:da(o,r,Tn,!la);break e;case 2:Zt=null;break;case 3:case 5:break;default:throw Error(i(329))}if((r&62914560)===r&&(c=Cd+300-pn(),10<c)){if(da(o,r,Tn,!la),Fi(o,0,!0)!==0)break e;o.timeoutHandle=Ey(Gm.bind(null,o,s,Zt,ju,Id,r,Tn,bi,ys,la,d,2,-0,0),c);break e}Gm(o,s,Zt,ju,Id,r,Tn,bi,ys,la,d,0,-0,0)}}break}while(!0);nr(t)}function Gm(t,r,s,o,c,d,v,w,_,F,H,W,U,j){if(t.timeoutHandle=-1,W=r.subtreeFlags,(W&8192||(W&16785408)===16785408)&&(el={stylesheets:null,count:0,unsuspend:DS},qm(r),W=OS(),W!==null)){t.cancelPendingCommit=W(ny.bind(null,t,r,d,s,o,c,v,w,_,H,1,U,j)),da(t,d,v,!F);return}ny(t,r,d,s,o,c,v,w,_)}function J1(t){for(var r=t;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var c=s[o],d=c.getSnapshot;c=c.value;try{if(!sn(d(),c))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function da(t,r,s,o){r&=~Td,r&=~bi,t.suspendedLanes|=r,t.pingedLanes&=~r,o&&(t.warmLanes|=r),o=t.expirationTimes;for(var c=r;0<c;){var d=31-jt(c),v=1<<d;o[d]=-1,c&=~v}s!==0&&qn(t,s,r)}function zu(){return($e&6)===0?(Qo(0),!1):!0}function Nd(){if(Ie!==null){if(He===0)var t=Ie.return;else t=Ie,Cr=fi=null,Qh(t),ds=null,Uo=0,t=Ie;for(;t!==null;)Am(t.alternate,t),t=t.return;Ie=null}}function ws(t,r){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,gS(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Nd(),Je=t,Ie=s=_r(t.current,null),Ne=r,He=0,cn=null,la=!1,ms=Ba(t,r),_d=!1,ys=Tn=Td=bi=ua=it=0,Zt=Wo=null,Id=!1,(r&8)!==0&&(r|=r&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=r;0<o;){var c=31-jt(o),d=1<<c;r|=t[c],o&=~d}return Mr=r,lu(),s}function Xm(t,r){ke=null,$.H=Cu,r===Po||r===yu?(r=fg(),He=3):r===cg?(r=fg(),He=4):He=r===pm?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,cn=r,Ie===null&&(it=1,Du(t,wn(r,t.current)))}function Jm(){var t=$.H;return $.H=Cu,t===null?Cu:t}function Ym(){var t=$.A;return $.A=G1,t}function Dd(){it=4,la||(Ne&4194048)!==Ne&&_n.current!==null||(ms=!0),(ua&134217727)===0&&(bi&134217727)===0||Je===null||da(Je,Ne,Tn,!1)}function xd(t,r,s){var o=$e;$e|=2;var c=Jm(),d=Ym();(Je!==t||Ne!==r)&&(ju=null,ws(t,r)),r=!1;var v=it;e:do try{if(He!==0&&Ie!==null){var w=Ie,_=cn;switch(He){case 8:Nd(),v=6;break e;case 3:case 2:case 9:case 6:_n.current===null&&(r=!0);var F=He;if(He=0,cn=null,Ss(t,w,_,F),s&&ms){v=0;break e}break;default:F=He,He=0,cn=null,Ss(t,w,_,F)}}Y1(),v=it;break}catch(H){Xm(t,H)}while(!0);return r&&t.shellSuspendCounter++,Cr=fi=null,$e=o,$.H=c,$.A=d,Ie===null&&(Je=null,Ne=0,lu()),v}function Y1(){for(;Ie!==null;)Zm(Ie)}function Z1(t,r){var s=$e;$e|=2;var o=Jm(),c=Ym();Je!==t||Ne!==r?(ju=null,Uu=pn()+500,ws(t,r)):ms=Ba(t,r);e:do try{if(He!==0&&Ie!==null){r=Ie;var d=cn;t:switch(He){case 1:He=0,cn=null,Ss(t,r,d,1);break;case 2:case 9:if(hg(d)){He=0,cn=null,ey(r);break}r=function(){He!==2&&He!==9||Je!==t||(He=7),nr(t)},d.then(r,r);break e;case 3:He=7;break e;case 4:He=5;break e;case 7:hg(d)?(He=0,cn=null,ey(r)):(He=0,cn=null,Ss(t,r,d,7));break;case 5:var v=null;switch(Ie.tag){case 26:v=Ie.memoizedState;case 5:case 27:var w=Ie;if(!v||Ly(v)){He=0,cn=null;var _=w.sibling;if(_!==null)Ie=_;else{var F=w.return;F!==null?(Ie=F,Vu(F)):Ie=null}break t}}He=0,cn=null,Ss(t,r,d,5);break;case 6:He=0,cn=null,Ss(t,r,d,6);break;case 8:Nd(),it=6;break e;default:throw Error(i(462))}}eS();break}catch(H){Xm(t,H)}while(!0);return Cr=fi=null,$.H=o,$.A=c,$e=s,Ie!==null?0:(Je=null,Ne=0,lu(),it)}function eS(){for(;Ie!==null&&!Js();)Zm(Ie)}function Zm(t){var r=Im(t.alternate,t,Mr);t.memoizedProps=t.pendingProps,r===null?Vu(t):Ie=r}function ey(t){var r=t,s=r.alternate;switch(r.tag){case 15:case 0:r=wm(s,r,r.pendingProps,r.type,void 0,Ne);break;case 11:r=wm(s,r,r.pendingProps,r.type.render,r.ref,Ne);break;case 5:Qh(r);default:Am(s,r),r=Ie=tg(r,Mr),r=Im(s,r,Mr)}t.memoizedProps=t.pendingProps,r===null?Vu(t):Ie=r}function Ss(t,r,s,o){Cr=fi=null,Qh(r),ds=null,Uo=0;var c=r.return;try{if($1(t,c,r,s,Ne)){it=1,Du(t,wn(s,t.current)),Ie=null;return}}catch(d){if(c!==null)throw Ie=c,d;it=1,Du(t,wn(s,t.current)),Ie=null;return}r.flags&32768?(ze||o===1?t=!0:ms||(Ne&536870912)!==0?t=!1:(la=t=!0,(o===2||o===9||o===3||o===6)&&(o=_n.current,o!==null&&o.tag===13&&(o.flags|=16384))),ty(r,t)):Vu(r)}function Vu(t){var r=t;do{if((r.flags&32768)!==0){ty(r,la);return}t=r.return;var s=B1(r.alternate,r,Mr);if(s!==null){Ie=s;return}if(r=r.sibling,r!==null){Ie=r;return}Ie=r=t}while(r!==null);it===0&&(it=5)}function ty(t,r){do{var s=W1(t.alternate,t);if(s!==null){s.flags&=32767,Ie=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(t=t.sibling,t!==null)){Ie=t;return}Ie=t=s}while(t!==null);it=6,Ie=null}function ny(t,r,s,o,c,d,v,w,_){t.cancelPendingCommit=null;do qu();while(Lt!==0);if(($e&6)!==0)throw Error(i(327));if(r!==null){if(r===t.current)throw Error(i(177));if(d=r.lanes|r.childLanes,d|=Eh,ro(t,s,d,v,w,_),t===Je&&(Ie=Je=null,Ne=0),vs=r,ha=t,bs=s,Ad=d,Pd=c,Wm=o,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,aS(Va,function(){return oy(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||o){o=$.T,$.T=null,c=Y.p,Y.p=2,v=$e,$e|=4;try{K1(t,r,s)}finally{$e=v,Y.p=c,$.T=o}}Lt=1,ry(),ay(),iy()}}function ry(){if(Lt===1){Lt=0;var t=ha,r=vs,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=$.T,$.T=null;var o=Y.p;Y.p=2;var c=$e;$e|=4;try{jm(r,t);var d=Bd,v=Bp(t.containerInfo),w=d.focusedElem,_=d.selectionRange;if(v!==w&&w&&w.ownerDocument&&Hp(w.ownerDocument.documentElement,w)){if(_!==null&&vh(w)){var F=_.start,H=_.end;if(H===void 0&&(H=F),"selectionStart"in w)w.selectionStart=F,w.selectionEnd=Math.min(H,w.value.length);else{var W=w.ownerDocument||document,U=W&&W.defaultView||window;if(U.getSelection){var j=U.getSelection(),de=w.textContent.length,le=Math.min(_.start,de),Qe=_.end===void 0?le:Math.min(_.end,de);!j.extend&&le>Qe&&(v=Qe,Qe=le,le=v);var x=$p(w,le),P=$p(w,Qe);if(x&&P&&(j.rangeCount!==1||j.anchorNode!==x.node||j.anchorOffset!==x.offset||j.focusNode!==P.node||j.focusOffset!==P.offset)){var M=W.createRange();M.setStart(x.node,x.offset),j.removeAllRanges(),le>Qe?(j.addRange(M),j.extend(P.node,P.offset)):(M.setEnd(P.node,P.offset),j.addRange(M))}}}}for(W=[],j=w;j=j.parentNode;)j.nodeType===1&&W.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<W.length;w++){var B=W[w];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}ec=!!Hd,Bd=Hd=null}finally{$e=c,Y.p=o,$.T=s}}t.current=r,Lt=2}}function ay(){if(Lt===2){Lt=0;var t=ha,r=vs,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=$.T,$.T=null;var o=Y.p;Y.p=2;var c=$e;$e|=4;try{Lm(t,r.alternate,r)}finally{$e=c,Y.p=o,$.T=s}}Lt=3}}function iy(){if(Lt===4||Lt===3){Lt=0,Fl();var t=ha,r=vs,s=bs,o=Wm;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Lt=5:(Lt=0,vs=ha=null,sy(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(ca=null),Ui(s),r=r.stateNode,qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(rt,r,void 0,(r.current.flags&128)===128)}catch{}if(o!==null){r=$.T,c=Y.p,Y.p=2,$.T=null;try{for(var d=t.onRecoverableError,v=0;v<o.length;v++){var w=o[v];d(w.value,{componentStack:w.stack})}}finally{$.T=r,Y.p=c}}(bs&3)!==0&&qu(),nr(t),c=t.pendingLanes,(s&4194090)!==0&&(c&42)!==0?t===Rd?Ko++:(Ko=0,Rd=t):Ko=0,Qo(0)}}function sy(t,r){(t.pooledCacheLanes&=r)===0&&(r=t.pooledCache,r!=null&&(t.pooledCache=null,Co(r)))}function qu(t){return ry(),ay(),iy(),oy()}function oy(){if(Lt!==5)return!1;var t=ha,r=Ad;Ad=0;var s=Ui(bs),o=$.T,c=Y.p;try{Y.p=32>s?32:s,$.T=null,s=Pd,Pd=null;var d=ha,v=bs;if(Lt=0,vs=ha=null,bs=0,($e&6)!==0)throw Error(i(331));var w=$e;if($e|=4,Hm(d.current),Vm(d,d.current,v,s),$e=w,Qo(0,!1),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(rt,d)}catch{}return!0}finally{Y.p=c,$.T=o,sy(t,r)}}function ly(t,r,s){r=wn(s,r),r=ld(t.stateNode,r,2),t=ta(t,r,2),t!==null&&(fr(t,2),nr(t))}function Ge(t,r,s){if(t.tag===3)ly(t,t,s);else for(;r!==null;){if(r.tag===3){ly(r,t,s);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ca===null||!ca.has(o))){t=wn(s,t),s=dm(2),o=ta(r,s,2),o!==null&&(fm(s,o,r,t),fr(o,2),nr(o));break}}r=r.return}}function Od(t,r,s){var o=t.pingCache;if(o===null){o=t.pingCache=new X1;var c=new Set;o.set(r,c)}else c=o.get(r),c===void 0&&(c=new Set,o.set(r,c));c.has(s)||(_d=!0,c.add(s),t=tS.bind(null,t,r,s),r.then(t,t))}function tS(t,r,s){var o=t.pingCache;o!==null&&o.delete(r),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Je===t&&(Ne&s)===s&&(it===4||it===3&&(Ne&62914560)===Ne&&300>pn()-Cd?($e&2)===0&&ws(t,0):Td|=s,ys===Ne&&(ys=0)),nr(t)}function uy(t,r){r===0&&(r=no()),t=ns(t,r),t!==null&&(fr(t,r),nr(t))}function nS(t){var r=t.memoizedState,s=0;r!==null&&(s=r.retryLane),uy(t,s)}function rS(t,r){var s=0;switch(t.tag){case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(i(314))}o!==null&&o.delete(r),uy(t,s)}function aS(t,r){return ja(t,r)}var $u=null,ks=null,Ld=!1,Hu=!1,Md=!1,wi=0;function nr(t){t!==ks&&t.next===null&&(ks===null?$u=ks=t:ks=ks.next=t),Hu=!0,Ld||(Ld=!0,sS())}function Qo(t,r){if(!Md&&Hu){Md=!0;do for(var s=!1,o=$u;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var d=0;else{var v=o.suspendedLanes,w=o.pingedLanes;d=(1<<31-jt(42|t)+1)-1,d&=c&~(v&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,fy(o,d))}else d=Ne,d=Fi(o,o===Je?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ba(o,d)||(s=!0,fy(o,d));o=o.next}while(s);Md=!1}}function iS(){cy()}function cy(){Hu=Ld=!1;var t=0;wi!==0&&(pS()&&(t=wi),wi=0);for(var r=pn(),s=null,o=$u;o!==null;){var c=o.next,d=hy(o,r);d===0?(o.next=null,s===null?$u=c:s.next=c,c===null&&(ks=s)):(s=o,(t!==0||(d&3)!==0)&&(Hu=!0)),o=c}Qo(t)}function hy(t,r){for(var s=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var v=31-jt(d),w=1<<v,_=c[v];_===-1?((w&s)===0||(w&o)!==0)&&(c[v]=eo(w,r)):_<=r&&(t.expiredLanes|=w),d&=~w}if(r=Je,s=Ne,s=Fi(t,t===r?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,s===0||t===r&&(He===2||He===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&za(o),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ba(t,s)){if(r=s&-s,r===t.callbackPriority)return r;switch(o!==null&&za(o),Ui(s)){case 2:case 8:s=Li;break;case 32:s=Va;break;case 268435456:s=Mi;break;default:s=Va}return o=dy.bind(null,t),s=ja(s,o),t.callbackPriority=r,t.callbackNode=s,r}return o!==null&&o!==null&&za(o),t.callbackPriority=2,t.callbackNode=null,2}function dy(t,r){if(Lt!==0&&Lt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(qu()&&t.callbackNode!==s)return null;var o=Ne;return o=Fi(t,t===Je?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Qm(t,o,r),hy(t,pn()),t.callbackNode!=null&&t.callbackNode===s?dy.bind(null,t):null)}function fy(t,r){if(qu())return null;Qm(t,r,!0)}function sS(){mS(function(){($e&6)!==0?ja(Ys,iS):cy()})}function Fd(){return wi===0&&(wi=to()),wi}function py(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Hi(""+t)}function gy(t,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,t.id&&s.setAttribute("form",t.id),r.parentNode.insertBefore(s,r),t=new FormData(t),s.parentNode.removeChild(s),t}function oS(t,r,s,o,c){if(r==="submit"&&s&&s.stateNode===c){var d=py((c[dt]||null).action),v=o.submitter;v&&(r=(r=v[dt]||null)?py(r.formAction):v.getAttribute("formAction"),r!==null&&(d=r,v=null));var w=new Bi("action","action",null,o,c);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(wi!==0){var _=v?gy(c,v):new FormData(c);rd(s,{pending:!0,data:_,method:c.method,action:d},null,_)}}else typeof d=="function"&&(w.preventDefault(),_=v?gy(c,v):new FormData(c),rd(s,{pending:!0,data:_,method:c.method,action:d},d,_))},currentTarget:c}]})}}for(var Ud=0;Ud<kh.length;Ud++){var jd=kh[Ud],lS=jd.toLowerCase(),uS=jd[0].toUpperCase()+jd.slice(1);Dn(lS,"on"+uS)}Dn(Qp,"onAnimationEnd"),Dn(Gp,"onAnimationIteration"),Dn(Xp,"onAnimationStart"),Dn("dblclick","onDoubleClick"),Dn("focusin","onFocus"),Dn("focusout","onBlur"),Dn(I1,"onTransitionRun"),Dn(C1,"onTransitionStart"),Dn(A1,"onTransitionCancel"),Dn(Jp,"onTransitionEnd"),gr("onMouseEnter",["mouseout","mouseover"]),gr("onMouseLeave",["mouseout","mouseover"]),gr("onPointerEnter",["pointerout","pointerover"]),gr("onPointerLeave",["pointerout","pointerover"]),Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Go));function my(t,r){r=(r&4)!==0;for(var s=0;s<t.length;s++){var o=t[s],c=o.event;o=o.listeners;e:{var d=void 0;if(r)for(var v=o.length-1;0<=v;v--){var w=o[v],_=w.instance,F=w.currentTarget;if(w=w.listener,_!==d&&c.isPropagationStopped())break e;d=w,c.currentTarget=F;try{d(c)}catch(H){Nu(H)}c.currentTarget=null,d=_}else for(v=0;v<o.length;v++){if(w=o[v],_=w.instance,F=w.currentTarget,w=w.listener,_!==d&&c.isPropagationStopped())break e;d=w,c.currentTarget=F;try{d(c)}catch(H){Nu(H)}c.currentTarget=null,d=_}}}}function Ce(t,r){var s=r[io];s===void 0&&(s=r[io]=new Set);var o=t+"__bubble";s.has(o)||(yy(r,t,2,!1),s.add(o))}function zd(t,r,s){var o=0;r&&(o|=4),yy(s,t,o,r)}var Bu="_reactListening"+Math.random().toString(36).slice(2);function Vd(t){if(!t[Bu]){t[Bu]=!0,so.forEach(function(s){s!=="selectionchange"&&(cS.has(s)||zd(s,!1,t),zd(s,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[Bu]||(r[Bu]=!0,zd("selectionchange",!1,r))}}function yy(t,r,s,o){switch(Vy(r)){case 2:var c=FS;break;case 8:c=US;break;default:c=tf}s=c.bind(null,r,s,t),c=void 0,!vn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(r,s,{capture:!0,passive:c}):t.addEventListener(r,s,!0):c!==void 0?t.addEventListener(r,s,{passive:c}):t.addEventListener(r,s,!1)}function qd(t,r,s,o,c){var d=o;if((r&1)===0&&(r&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var w=o.stateNode.containerInfo;if(w===c)break;if(v===4)for(v=o.return;v!==null;){var _=v.tag;if((_===3||_===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;w!==null;){if(v=pr(w),v===null)return;if(_=v.tag,_===5||_===6||_===26||_===27){o=d=v;continue e}w=w.parentNode}}o=o.return}Kl(function(){var F=d,H=yn(s),W=[];e:{var U=Yp.get(t);if(U!==void 0){var j=Bi,de=t;switch(t){case"keypress":if(Qn(s)===0)break e;case"keydown":case"keyup":j=Ji;break;case"focusin":de="focus",j=Qi;break;case"focusout":de="blur",j=Qi;break;case"beforeblur":case"afterblur":j=Qi;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=bn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=ph;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=tu;break;case Qp:case Gp:case Xp:j=Gi;break;case Jp:j=ru;break;case"scroll":case"scrollend":j=Ql;break;case"wheel":j=Yi;break;case"copy":case"cut":case"paste":j=Xi;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=bo;break;case"toggle":case"beforetoggle":j=iu}var le=(r&4)!==0,Qe=!le&&(t==="scroll"||t==="scrollend"),x=le?U!==null?U+"Capture":null:U;le=[];for(var P=F,M;P!==null;){var B=P;if(M=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||M===null||x===null||(B=Za(P,x),B!=null&&le.push(Xo(P,B,M))),Qe)break;P=P.return}0<le.length&&(U=new j(U,de,null,s,H),W.push({event:U,listeners:le}))}}if((r&7)===0){e:{if(U=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",U&&s!==vr&&(de=s.relatedTarget||s.fromElement)&&(pr(de)||de[gn]))break e;if((j||U)&&(U=H.window===H?H:(U=H.ownerDocument)?U.defaultView||U.parentWindow:window,j?(de=s.relatedTarget||s.toElement,j=F,de=de?pr(de):null,de!==null&&(Qe=h(de),le=de.tag,de!==Qe||le!==5&&le!==27&&le!==6)&&(de=null)):(j=null,de=F),j!==de)){if(le=bn,B="onMouseLeave",x="onMouseEnter",P="mouse",(t==="pointerout"||t==="pointerover")&&(le=bo,B="onPointerLeave",x="onPointerEnter",P="pointer"),Qe=j==null?U:Hn(j),M=de==null?U:Hn(de),U=new le(B,P+"leave",j,s,H),U.target=Qe,U.relatedTarget=M,B=null,pr(H)===F&&(le=new le(x,P+"enter",de,s,H),le.target=M,le.relatedTarget=Qe,B=le),Qe=B,j&&de)t:{for(le=j,x=de,P=0,M=le;M;M=Es(M))P++;for(M=0,B=x;B;B=Es(B))M++;for(;0<P-M;)le=Es(le),P--;for(;0<M-P;)x=Es(x),M--;for(;P--;){if(le===x||x!==null&&le===x.alternate)break t;le=Es(le),x=Es(x)}le=null}else le=null;j!==null&&vy(W,U,j,le,!1),de!==null&&Qe!==null&&vy(W,Qe,de,le,!0)}}e:{if(U=F?Hn(F):window,j=U.nodeName&&U.nodeName.toLowerCase(),j==="select"||j==="input"&&U.type==="file")var re=Fp;else if(Dt(U))if(Up)re=E1;else{re=S1;var _e=w1}else j=U.nodeName,!j||j.toLowerCase()!=="input"||U.type!=="checkbox"&&U.type!=="radio"?F&&ho(F.elementType)&&(re=Fp):re=k1;if(re&&(re=re(t,F))){Er(W,re,s,H);break e}_e&&_e(t,U,F),t==="focusout"&&F&&U.type==="number"&&F.memoizedProps.value!=null&&Xr(U,"number",U.value)}switch(_e=F?Hn(F):window,t){case"focusin":(Dt(_e)||_e.contentEditable==="true")&&(Zi=_e,bh=F,ko=null);break;case"focusout":ko=bh=Zi=null;break;case"mousedown":wh=!0;break;case"contextmenu":case"mouseup":case"dragend":wh=!1,Wp(W,s,H);break;case"selectionchange":if(T1)break;case"keydown":case"keyup":Wp(W,s,H)}var ie;if(Jn)e:{switch(t){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else Me?z(t,s)&&(ue="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(ue="onCompositionStart");ue&&(y&&s.locale!=="ko"&&(Me||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&Me&&(ie=po()):(Kn=H,Jr="value"in Kn?Kn.value:Kn.textContent,Me=!0)),_e=Wu(F,ue),0<_e.length&&(ue=new yo(ue,t,null,s,H),W.push({event:ue,listeners:_e}),ie?ue.data=ie:(ie=J(s),ie!==null&&(ue.data=ie)))),(ie=p?vt(t,s):je(t,s))&&(ue=Wu(F,"onBeforeInput"),0<ue.length&&(_e=new yo("onBeforeInput","beforeinput",null,s,H),W.push({event:_e,listeners:ue}),_e.data=ie)),oS(W,t,F,s,H)}my(W,r)})}function Xo(t,r,s){return{instance:t,listener:r,currentTarget:s}}function Wu(t,r){for(var s=r+"Capture",o=[];t!==null;){var c=t,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=Za(t,s),c!=null&&o.unshift(Xo(t,c,d)),c=Za(t,r),c!=null&&o.push(Xo(t,c,d))),t.tag===3)return o;t=t.return}return[]}function Es(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function vy(t,r,s,o,c){for(var d=r._reactName,v=[];s!==null&&s!==o;){var w=s,_=w.alternate,F=w.stateNode;if(w=w.tag,_!==null&&_===o)break;w!==5&&w!==26&&w!==27||F===null||(_=F,c?(F=Za(s,d),F!=null&&v.unshift(Xo(s,F,_))):c||(F=Za(s,d),F!=null&&v.push(Xo(s,F,_)))),s=s.return}v.length!==0&&t.push({event:r,listeners:v})}var hS=/\r\n?/g,dS=/\u0000|\uFFFD/g;function by(t){return(typeof t=="string"?t:""+t).replace(hS,`
`).replace(dS,"")}function wy(t,r){return r=by(r),by(t)===r}function Ku(){}function Ke(t,r,s,o,c,d){switch(s){case"children":typeof o=="string"?r==="body"||r==="textarea"&&o===""||mn(t,o):(typeof o=="number"||typeof o=="bigint")&&r!=="body"&&mn(t,""+o);break;case"className":Bn(t,"class",o);break;case"tabIndex":Bn(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Bn(t,s,o);break;case"style":co(t,o,d);break;case"data":if(r!=="object"){Bn(t,"data",o);break}case"src":case"href":if(o===""&&(r!=="a"||s!=="href")){t.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=Hi(""+o),t.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(r!=="input"&&Ke(t,r,"name",c.name,c,null),Ke(t,r,"formEncType",c.formEncType,c,null),Ke(t,r,"formMethod",c.formMethod,c,null),Ke(t,r,"formTarget",c.formTarget,c,null)):(Ke(t,r,"encType",c.encType,c,null),Ke(t,r,"method",c.method,c,null),Ke(t,r,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=Hi(""+o),t.setAttribute(s,o);break;case"onClick":o!=null&&(t.onclick=Ku);break;case"onScroll":o!=null&&Ce("scroll",t);break;case"onScrollEnd":o!=null&&Ce("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(i(61));if(s=o.__html,s!=null){if(c.children!=null)throw Error(i(60));t.innerHTML=s}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}s=Hi(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""+o):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":o===!0?t.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,o):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(s,o):t.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(s):t.setAttribute(s,o);break;case"popover":Ce("beforetoggle",t),Ce("toggle",t),Gr(t,"popover",o);break;case"xlinkActuate":Nt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Nt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Nt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Nt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Nt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Nt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Gr(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=dh.get(s)||s,Gr(t,s,o))}}function $d(t,r,s,o,c,d){switch(s){case"style":co(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(i(61));if(s=o.__html,s!=null){if(c.children!=null)throw Error(i(60));t.innerHTML=s}}break;case"children":typeof o=="string"?mn(t,o):(typeof o=="number"||typeof o=="bigint")&&mn(t,""+o);break;case"onScroll":o!=null&&Ce("scroll",t);break;case"onScrollEnd":o!=null&&Ce("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Ku);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ji.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(c=s.endsWith("Capture"),r=s.slice(2,c?s.length-7:void 0),d=t[dt]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(r,d,c),typeof o=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(r,o,c);break e}s in t?t[s]=o:o===!0?t.setAttribute(s,""):Gr(t,s,o)}}}function Mt(t,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",t),Ce("load",t);var o=!1,c=!1,d;for(d in s)if(s.hasOwnProperty(d)){var v=s[d];if(v!=null)switch(d){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:Ke(t,r,d,v,s,null)}}c&&Ke(t,r,"srcSet",s.srcSet,s,null),o&&Ke(t,r,"src",s.src,s,null);return;case"input":Ce("invalid",t);var w=d=v=c=null,_=null,F=null;for(o in s)if(s.hasOwnProperty(o)){var H=s[o];if(H!=null)switch(o){case"name":c=H;break;case"type":v=H;break;case"checked":_=H;break;case"defaultChecked":F=H;break;case"value":d=H;break;case"defaultValue":w=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(i(137,r));break;default:Ke(t,r,o,H,s,null)}}Xa(t,d,w,_,F,v,c,!1),$i(t);return;case"select":Ce("invalid",t),o=v=d=null;for(c in s)if(s.hasOwnProperty(c)&&(w=s[c],w!=null))switch(c){case"value":d=w;break;case"defaultValue":v=w;break;case"multiple":o=w;default:Ke(t,r,c,w,s,null)}r=d,s=v,t.multiple=!!o,r!=null?yr(t,!!o,r,!1):s!=null&&yr(t,!!o,s,!0);return;case"textarea":Ce("invalid",t),d=c=o=null;for(v in s)if(s.hasOwnProperty(v)&&(w=s[v],w!=null))switch(v){case"value":o=w;break;case"defaultValue":c=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(i(91));break;default:Ke(t,r,v,w,s,null)}Ja(t,o,c,d),$i(t);return;case"option":for(_ in s)if(s.hasOwnProperty(_)&&(o=s[_],o!=null))switch(_){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ke(t,r,_,o,s,null)}return;case"dialog":Ce("beforetoggle",t),Ce("toggle",t),Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":Ce("load",t);break;case"video":case"audio":for(o=0;o<Go.length;o++)Ce(Go[o],t);break;case"image":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"embed":case"source":case"link":Ce("error",t),Ce("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(F in s)if(s.hasOwnProperty(F)&&(o=s[F],o!=null))switch(F){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:Ke(t,r,F,o,s,null)}return;default:if(ho(r)){for(H in s)s.hasOwnProperty(H)&&(o=s[H],o!==void 0&&$d(t,r,H,o,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(o=s[w],o!=null&&Ke(t,r,w,o,s,null))}function fS(t,r,s,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,v=null,w=null,_=null,F=null,H=null;for(j in s){var W=s[j];if(s.hasOwnProperty(j)&&W!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":_=W;default:o.hasOwnProperty(j)||Ke(t,r,j,null,o,W)}}for(var U in o){var j=o[U];if(W=s[U],o.hasOwnProperty(U)&&(j!=null||W!=null))switch(U){case"type":d=j;break;case"name":c=j;break;case"checked":F=j;break;case"defaultChecked":H=j;break;case"value":v=j;break;case"defaultValue":w=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(i(137,r));break;default:j!==W&&Ke(t,r,U,j,o,W)}}an(t,v,w,_,F,H,d,c);return;case"select":j=v=w=U=null;for(d in s)if(_=s[d],s.hasOwnProperty(d)&&_!=null)switch(d){case"value":break;case"multiple":j=_;default:o.hasOwnProperty(d)||Ke(t,r,d,null,o,_)}for(c in o)if(d=o[c],_=s[c],o.hasOwnProperty(c)&&(d!=null||_!=null))switch(c){case"value":U=d;break;case"defaultValue":w=d;break;case"multiple":v=d;default:d!==_&&Ke(t,r,c,d,o,_)}r=w,s=v,o=j,U!=null?yr(t,!!s,U,!1):!!o!=!!s&&(r!=null?yr(t,!!s,r,!0):yr(t,!!s,s?[]:"",!1));return;case"textarea":j=U=null;for(w in s)if(c=s[w],s.hasOwnProperty(w)&&c!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ke(t,r,w,null,o,c)}for(v in o)if(c=o[v],d=s[v],o.hasOwnProperty(v)&&(c!=null||d!=null))switch(v){case"value":U=c;break;case"defaultValue":j=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(i(91));break;default:c!==d&&Ke(t,r,v,c,o,d)}Be(t,U,j);return;case"option":for(var de in s)if(U=s[de],s.hasOwnProperty(de)&&U!=null&&!o.hasOwnProperty(de))switch(de){case"selected":t.selected=!1;break;default:Ke(t,r,de,null,o,U)}for(_ in o)if(U=o[_],j=s[_],o.hasOwnProperty(_)&&U!==j&&(U!=null||j!=null))switch(_){case"selected":t.selected=U&&typeof U!="function"&&typeof U!="symbol";break;default:Ke(t,r,_,U,o,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in s)U=s[le],s.hasOwnProperty(le)&&U!=null&&!o.hasOwnProperty(le)&&Ke(t,r,le,null,o,U);for(F in o)if(U=o[F],j=s[F],o.hasOwnProperty(F)&&U!==j&&(U!=null||j!=null))switch(F){case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(i(137,r));break;default:Ke(t,r,F,U,o,j)}return;default:if(ho(r)){for(var Qe in s)U=s[Qe],s.hasOwnProperty(Qe)&&U!==void 0&&!o.hasOwnProperty(Qe)&&$d(t,r,Qe,void 0,o,U);for(H in o)U=o[H],j=s[H],!o.hasOwnProperty(H)||U===j||U===void 0&&j===void 0||$d(t,r,H,U,o,j);return}}for(var x in s)U=s[x],s.hasOwnProperty(x)&&U!=null&&!o.hasOwnProperty(x)&&Ke(t,r,x,null,o,U);for(W in o)U=o[W],j=s[W],!o.hasOwnProperty(W)||U===j||U==null&&j==null||Ke(t,r,W,U,o,j)}var Hd=null,Bd=null;function Qu(t){return t.nodeType===9?t:t.ownerDocument}function Sy(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ky(t,r){if(t===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&r==="foreignObject"?0:t}function Wd(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Kd=null;function pS(){var t=window.event;return t&&t.type==="popstate"?t===Kd?!1:(Kd=t,!0):(Kd=null,!1)}var Ey=typeof setTimeout=="function"?setTimeout:void 0,gS=typeof clearTimeout=="function"?clearTimeout:void 0,_y=typeof Promise=="function"?Promise:void 0,mS=typeof queueMicrotask=="function"?queueMicrotask:typeof _y<"u"?function(t){return _y.resolve(null).then(t).catch(yS)}:Ey;function yS(t){setTimeout(function(){throw t})}function fa(t){return t==="head"}function Ty(t,r){var s=r,o=0,c=0;do{var d=s.nextSibling;if(t.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(0<o&&8>o){s=o;var v=t.ownerDocument;if(s&1&&Jo(v.documentElement),s&2&&Jo(v.body),s&4)for(s=v.head,Jo(s),v=s.firstChild;v;){var w=v.nextSibling,_=v.nodeName;v[Wa]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&v.rel.toLowerCase()==="stylesheet"||s.removeChild(v),v=w}}if(c===0){t.removeChild(d),il(r);return}c--}else s==="$"||s==="$?"||s==="$!"?c++:o=s.charCodeAt(0)-48;else o=0;s=d}while(s);il(r)}function Qd(t){var r=t.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Qd(s),Qr(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function vS(t,r,s,o){for(;t.nodeType===1;){var c=s;if(t.nodeName.toLowerCase()!==r.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Wa])switch(r){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence")||d!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(r==="input"&&t.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=On(t.nextSibling),t===null)break}return null}function bS(t,r,s){if(r==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=On(t.nextSibling),t===null))return null;return t}function Gd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function wS(t,r){var s=t.ownerDocument;if(t.data!=="$?"||s.readyState==="complete")r();else{var o=function(){r(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function On(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return t}var Xd=null;function Iy(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return t;r--}else s==="/$"&&r++}t=t.previousSibling}return null}function Cy(t,r,s){switch(r=Qu(s),t){case"html":if(t=r.documentElement,!t)throw Error(i(452));return t;case"head":if(t=r.head,!t)throw Error(i(453));return t;case"body":if(t=r.body,!t)throw Error(i(454));return t;default:throw Error(i(451))}}function Jo(t){for(var r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Qr(t)}var In=new Map,Ay=new Set;function Gu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Fr=Y.d;Y.d={f:SS,r:kS,D:ES,C:_S,L:TS,m:IS,X:AS,S:CS,M:PS};function SS(){var t=Fr.f(),r=zu();return t||r}function kS(t){var r=$n(t);r!==null&&r.tag===5&&r.type==="form"?Qg(r):Fr.r(t)}var _s=typeof document>"u"?null:document;function Py(t,r,s){var o=_s;if(o&&typeof r=="string"&&r){var c=yt(r);c='link[rel="'+t+'"][href="'+c+'"]',typeof s=="string"&&(c+='[crossorigin="'+s+'"]'),Ay.has(c)||(Ay.add(c),t={rel:t,crossOrigin:s,href:r},o.querySelector(c)===null&&(r=o.createElement("link"),Mt(r,"link",t),ot(r),o.head.appendChild(r)))}}function ES(t){Fr.D(t),Py("dns-prefetch",t,null)}function _S(t,r){Fr.C(t,r),Py("preconnect",t,r)}function TS(t,r,s){Fr.L(t,r,s);var o=_s;if(o&&t&&r){var c='link[rel="preload"][as="'+yt(r)+'"]';r==="image"&&s&&s.imageSrcSet?(c+='[imagesrcset="'+yt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(c+='[imagesizes="'+yt(s.imageSizes)+'"]')):c+='[href="'+yt(t)+'"]';var d=c;switch(r){case"style":d=Ts(t);break;case"script":d=Is(t)}In.has(d)||(t=k({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:t,as:r},s),In.set(d,t),o.querySelector(c)!==null||r==="style"&&o.querySelector(Yo(d))||r==="script"&&o.querySelector(Zo(d))||(r=o.createElement("link"),Mt(r,"link",t),ot(r),o.head.appendChild(r)))}}function IS(t,r){Fr.m(t,r);var s=_s;if(s&&t){var o=r&&typeof r.as=="string"?r.as:"script",c='link[rel="modulepreload"][as="'+yt(o)+'"][href="'+yt(t)+'"]',d=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Is(t)}if(!In.has(d)&&(t=k({rel:"modulepreload",href:t},r),In.set(d,t),s.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Zo(d)))return}o=s.createElement("link"),Mt(o,"link",t),ot(o),s.head.appendChild(o)}}}function CS(t,r,s){Fr.S(t,r,s);var o=_s;if(o&&t){var c=Wt(o).hoistableStyles,d=Ts(t);r=r||"default";var v=c.get(d);if(!v){var w={loading:0,preload:null};if(v=o.querySelector(Yo(d)))w.loading=5;else{t=k({rel:"stylesheet",href:t,"data-precedence":r},s),(s=In.get(d))&&Jd(t,s);var _=v=o.createElement("link");ot(_),Mt(_,"link",t),_._p=new Promise(function(F,H){_.onload=F,_.onerror=H}),_.addEventListener("load",function(){w.loading|=1}),_.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Xu(v,r,o)}v={type:"stylesheet",instance:v,count:1,state:w},c.set(d,v)}}}function AS(t,r){Fr.X(t,r);var s=_s;if(s&&t){var o=Wt(s).hoistableScripts,c=Is(t),d=o.get(c);d||(d=s.querySelector(Zo(c)),d||(t=k({src:t,async:!0},r),(r=In.get(c))&&Yd(t,r),d=s.createElement("script"),ot(d),Mt(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function PS(t,r){Fr.M(t,r);var s=_s;if(s&&t){var o=Wt(s).hoistableScripts,c=Is(t),d=o.get(c);d||(d=s.querySelector(Zo(c)),d||(t=k({src:t,async:!0,type:"module"},r),(r=In.get(c))&&Yd(t,r),d=s.createElement("script"),ot(d),Mt(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function Ry(t,r,s,o){var c=(c=ge.current)?Gu(c):null;if(!c)throw Error(i(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=Ts(s.href),s=Wt(c).hoistableStyles,o=s.get(r),o||(o={type:"style",instance:null,count:0,state:null},s.set(r,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Ts(s.href);var d=Wt(c).hoistableStyles,v=d.get(t);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,v),(d=c.querySelector(Yo(t)))&&!d._p&&(v.instance=d,v.state.loading=5),In.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},In.set(t,s),d||RS(c,t,s,v.state))),r&&o===null)throw Error(i(528,""));return v}if(r&&o!==null)throw Error(i(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Is(s),s=Wt(c).hoistableScripts,o=s.get(r),o||(o={type:"script",instance:null,count:0,state:null},s.set(r,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,t))}}function Ts(t){return'href="'+yt(t)+'"'}function Yo(t){return'link[rel="stylesheet"]['+t+"]"}function Ny(t){return k({},t,{"data-precedence":t.precedence,precedence:null})}function RS(t,r,s,o){t.querySelector('link[rel="preload"][as="style"]['+r+"]")?o.loading=1:(r=t.createElement("link"),o.preload=r,r.addEventListener("load",function(){return o.loading|=1}),r.addEventListener("error",function(){return o.loading|=2}),Mt(r,"link",s),ot(r),t.head.appendChild(r))}function Is(t){return'[src="'+yt(t)+'"]'}function Zo(t){return"script[async]"+t}function Dy(t,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var o=t.querySelector('style[data-href~="'+yt(s.href)+'"]');if(o)return r.instance=o,ot(o),o;var c=k({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),ot(o),Mt(o,"style",c),Xu(o,s.precedence,t),r.instance=o;case"stylesheet":c=Ts(s.href);var d=t.querySelector(Yo(c));if(d)return r.state.loading|=4,r.instance=d,ot(d),d;o=Ny(s),(c=In.get(c))&&Jd(o,c),d=(t.ownerDocument||t).createElement("link"),ot(d);var v=d;return v._p=new Promise(function(w,_){v.onload=w,v.onerror=_}),Mt(d,"link",o),r.state.loading|=4,Xu(d,s.precedence,t),r.instance=d;case"script":return d=Is(s.src),(c=t.querySelector(Zo(d)))?(r.instance=c,ot(c),c):(o=s,(c=In.get(d))&&(o=k({},s),Yd(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),ot(c),Mt(c,"link",o),t.head.appendChild(c),r.instance=c);case"void":return null;default:throw Error(i(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(o=r.instance,r.state.loading|=4,Xu(o,s.precedence,t));return r.instance}function Xu(t,r,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,d=c,v=0;v<o.length;v++){var w=o[v];if(w.dataset.precedence===r)d=w;else if(d!==c)break}d?d.parentNode.insertBefore(t,d.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(t,r.firstChild))}function Jd(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.title==null&&(t.title=r.title)}function Yd(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.integrity==null&&(t.integrity=r.integrity)}var Ju=null;function xy(t,r,s){if(Ju===null){var o=new Map,c=Ju=new Map;c.set(s,o)}else c=Ju,o=c.get(s),o||(o=new Map,c.set(s,o));if(o.has(t))return o;for(o.set(t,null),s=s.getElementsByTagName(t),c=0;c<s.length;c++){var d=s[c];if(!(d[Wa]||d[mt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(r)||"";v=t+v;var w=o.get(v);w?w.push(d):o.set(v,[d])}}return o}function Oy(t,r,s){t=t.ownerDocument||t,t.head.insertBefore(s,r==="title"?t.querySelector("head > title"):null)}function NS(t,r,s){if(s===1||r.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return t=r.disabled,typeof r.precedence=="string"&&t==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function Ly(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var el=null;function DS(){}function xS(t,r,s){if(el===null)throw Error(i(475));var o=el;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var c=Ts(s.href),d=t.querySelector(Yo(c));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=Yu.bind(o),t.then(o,o)),r.state.loading|=4,r.instance=d,ot(d);return}d=t.ownerDocument||t,s=Ny(s),(c=In.get(c))&&Jd(s,c),d=d.createElement("link"),ot(d);var v=d;v._p=new Promise(function(w,_){v.onload=w,v.onerror=_}),Mt(d,"link",s),r.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(r,t),(t=r.state.preload)&&(r.state.loading&3)===0&&(o.count++,r=Yu.bind(o),t.addEventListener("load",r),t.addEventListener("error",r))}}function OS(){if(el===null)throw Error(i(475));var t=el;return t.stylesheets&&t.count===0&&Zd(t,t.stylesheets),0<t.count?function(r){var s=setTimeout(function(){if(t.stylesheets&&Zd(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(s)}}:null}function Yu(){if(this.count--,this.count===0){if(this.stylesheets)Zd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Zu=null;function Zd(t,r){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Zu=new Map,r.forEach(LS,t),Zu=null,Yu.call(t))}function LS(t,r){if(!(r.state.loading&4)){var s=Zu.get(t);if(s)var o=s.get(null);else{s=new Map,Zu.set(t,s);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var v=c[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(s.set(v.dataset.precedence,v),o=v)}o&&s.set(null,o)}c=r.instance,v=c.getAttribute("data-precedence"),d=s.get(v)||o,d===o&&s.set(null,c),s.set(v,c),this.count++,o=Yu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),d?d.parentNode.insertBefore(c,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),r.state.loading|=4}}var tl={$$typeof:ye,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function MS(t,r,s,o,c,d,v,w){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=dr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dr(0),this.hiddenUpdates=dr(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function My(t,r,s,o,c,d,v,w,_,F,H,W){return t=new MS(t,r,s,v,w,_,F,W),r=1,d===!0&&(r|=24),d=on(3,null,null,r),t.current=d,d.stateNode=t,r=Oh(),r.refCount++,t.pooledCache=r,r.refCount++,d.memoizedState={element:o,isDehydrated:s,cache:r},Uh(d),t}function Fy(t){return t?(t=rs,t):rs}function Uy(t,r,s,o,c,d){c=Fy(c),o.context===null?o.context=c:o.pendingContext=c,o=ea(r),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=ta(t,o,r),s!==null&&(dn(s,t,r),No(s,t,r))}function jy(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<r?s:r}}function ef(t,r){jy(t,r),(t=t.alternate)&&jy(t,r)}function zy(t){if(t.tag===13){var r=ns(t,67108864);r!==null&&dn(r,t,67108864),ef(t,67108864)}}var ec=!0;function FS(t,r,s,o){var c=$.T;$.T=null;var d=Y.p;try{Y.p=2,tf(t,r,s,o)}finally{Y.p=d,$.T=c}}function US(t,r,s,o){var c=$.T;$.T=null;var d=Y.p;try{Y.p=8,tf(t,r,s,o)}finally{Y.p=d,$.T=c}}function tf(t,r,s,o){if(ec){var c=nf(o);if(c===null)qd(t,r,o,tc,s),qy(t,o);else if(zS(c,t,r,s,o))o.stopPropagation();else if(qy(t,o),r&4&&-1<jS.indexOf(t)){for(;c!==null;){var d=$n(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Pn(d.pendingLanes);if(v!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;v;){var _=1<<31-jt(v);w.entanglements[1]|=_,v&=~_}nr(d),($e&6)===0&&(Uu=pn()+500,Qo(0))}}break;case 13:w=ns(d,2),w!==null&&dn(w,d,2),zu(),ef(d,2)}if(d=nf(o),d===null&&qd(t,r,o,tc,s),d===c)break;c=d}c!==null&&o.stopPropagation()}else qd(t,r,o,null,s)}}function nf(t){return t=yn(t),rf(t)}var tc=null;function rf(t){if(tc=null,t=pr(t),t!==null){var r=h(t);if(r===null)t=null;else{var s=r.tag;if(s===13){if(t=f(r),t!==null)return t;t=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null)}}return tc=t,null}function Vy(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sh()){case Ys:return 2;case Li:return 8;case Va:case oh:return 32;case Mi:return 268435456;default:return 32}default:return 32}}var af=!1,pa=null,ga=null,ma=null,nl=new Map,rl=new Map,ya=[],jS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qy(t,r){switch(t){case"focusin":case"focusout":pa=null;break;case"dragenter":case"dragleave":ga=null;break;case"mouseover":case"mouseout":ma=null;break;case"pointerover":case"pointerout":nl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":rl.delete(r.pointerId)}}function al(t,r,s,o,c,d){return t===null||t.nativeEvent!==d?(t={blockedOn:r,domEventName:s,eventSystemFlags:o,nativeEvent:d,targetContainers:[c]},r!==null&&(r=$n(r),r!==null&&zy(r)),t):(t.eventSystemFlags|=o,r=t.targetContainers,c!==null&&r.indexOf(c)===-1&&r.push(c),t)}function zS(t,r,s,o,c){switch(r){case"focusin":return pa=al(pa,t,r,s,o,c),!0;case"dragenter":return ga=al(ga,t,r,s,o,c),!0;case"mouseover":return ma=al(ma,t,r,s,o,c),!0;case"pointerover":var d=c.pointerId;return nl.set(d,al(nl.get(d)||null,t,r,s,o,c)),!0;case"gotpointercapture":return d=c.pointerId,rl.set(d,al(rl.get(d)||null,t,r,s,o,c)),!0}return!1}function $y(t){var r=pr(t.target);if(r!==null){var s=h(r);if(s!==null){if(r=s.tag,r===13){if(r=f(s),r!==null){t.blockedOn=r,zl(t.priority,function(){if(s.tag===13){var o=hn();o=Br(o);var c=ns(s,o);c!==null&&dn(c,s,o),ef(s,o)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nc(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var s=nf(t.nativeEvent);if(s===null){s=t.nativeEvent;var o=new s.constructor(s.type,s);vr=o,s.target.dispatchEvent(o),vr=null}else return r=$n(s),r!==null&&zy(r),t.blockedOn=s,!1;r.shift()}return!0}function Hy(t,r,s){nc(t)&&s.delete(r)}function VS(){af=!1,pa!==null&&nc(pa)&&(pa=null),ga!==null&&nc(ga)&&(ga=null),ma!==null&&nc(ma)&&(ma=null),nl.forEach(Hy),rl.forEach(Hy)}function rc(t,r){t.blockedOn===r&&(t.blockedOn=null,af||(af=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,VS)))}var ac=null;function By(t){ac!==t&&(ac=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){ac===t&&(ac=null);for(var r=0;r<t.length;r+=3){var s=t[r],o=t[r+1],c=t[r+2];if(typeof o!="function"){if(rf(o||s)===null)continue;break}var d=$n(s);d!==null&&(t.splice(r,3),r-=3,rd(d,{pending:!0,data:c,method:s.method,action:o},o,c))}}))}function il(t){function r(_){return rc(_,t)}pa!==null&&rc(pa,t),ga!==null&&rc(ga,t),ma!==null&&rc(ma,t),nl.forEach(r),rl.forEach(r);for(var s=0;s<ya.length;s++){var o=ya[s];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ya.length&&(s=ya[0],s.blockedOn===null);)$y(s),s.blockedOn===null&&ya.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var c=s[o],d=s[o+1],v=c[dt]||null;if(typeof d=="function")v||By(s);else if(v){var w=null;if(d&&d.hasAttribute("formAction")){if(c=d,v=d[dt]||null)w=v.formAction;else if(rf(c)!==null)continue}else w=v.action;typeof w=="function"?s[o+1]=w:(s.splice(o,3),o-=3),By(s)}}}function sf(t){this._internalRoot=t}ic.prototype.render=sf.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(i(409));var s=r.current,o=hn();Uy(s,o,t,r,null,null)},ic.prototype.unmount=sf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Uy(t.current,2,null,t,null,null),zu(),r[gn]=null}};function ic(t){this._internalRoot=t}ic.prototype.unstable_scheduleHydration=function(t){if(t){var r=Wr();t={blockedOn:null,target:t,priority:r};for(var s=0;s<ya.length&&r!==0&&r<ya[s].priority;s++);ya.splice(s,0,t),s===0&&$y(t)}};var Wy=e.version;if(Wy!=="19.1.0")throw Error(i(527,Wy,"19.1.0"));Y.findDOMNode=function(t){var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=m(r),t=t!==null?b(t):null,t=t===null?null:t.stateNode,t};var qS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:$,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{rt=sc.inject(qS),qe=sc}catch{}}return ol.createRoot=function(t,r){if(!l(t))throw Error(i(299));var s=!1,o="",c=lm,d=um,v=cm,w=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onUncaughtError!==void 0&&(c=r.onUncaughtError),r.onCaughtError!==void 0&&(d=r.onCaughtError),r.onRecoverableError!==void 0&&(v=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(w=r.unstable_transitionCallbacks)),r=My(t,1,!1,null,null,s,o,c,d,v,w,null),t[gn]=r.current,Vd(t),new sf(r)},ol.hydrateRoot=function(t,r,s){if(!l(t))throw Error(i(299));var o=!1,c="",d=lm,v=um,w=cm,_=null,F=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(v=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(_=s.unstable_transitionCallbacks),s.formState!==void 0&&(F=s.formState)),r=My(t,1,!0,r,s??null,o,c,d,v,w,_,F),r.context=Fy(null),s=r.current,o=hn(),o=Br(o),c=ea(o),c.callback=null,ta(s,c,o),s=o,r.current.lanes=s,fr(r,s),nr(r),t[gn]=r.current,Vd(t),new ic(r)},ol.version="19.1.0",ol}var sv;function YS(){if(sv)return of.exports;sv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),of.exports=JS(),of.exports}var ZS=YS();const ek=()=>{};var ov={};/**
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
*/const Hb=function(a){const e=[];let n=0;for(let i=0;i<a.length;i++){let l=a.charCodeAt(i);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&i+1<a.length&&(a.charCodeAt(i+1)&64512)===56320?(l=65536+((l&1023)<<10)+(a.charCodeAt(++i)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},tk=function(a){const e=[];let n=0,i=0;for(;n<a.length;){const l=a[n++];if(l<128)e[i++]=String.fromCharCode(l);else if(l>191&&l<224){const h=a[n++];e[i++]=String.fromCharCode((l&31)<<6|h&63)}else if(l>239&&l<365){const h=a[n++],f=a[n++],g=a[n++],m=((l&7)<<18|(h&63)<<12|(f&63)<<6|g&63)-65536;e[i++]=String.fromCharCode(55296+(m>>10)),e[i++]=String.fromCharCode(56320+(m&1023))}else{const h=a[n++],f=a[n++];e[i++]=String.fromCharCode((l&15)<<12|(h&63)<<6|f&63)}}return e.join("")},Bb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(a,e){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let l=0;l<a.length;l+=3){const h=a[l],f=l+1<a.length,g=f?a[l+1]:0,m=l+2<a.length,b=m?a[l+2]:0,k=h>>2,C=(h&3)<<4|g>>4;let V=(g&15)<<2|b>>6,q=b&63;m||(q=64,f||(V=64)),i.push(n[k],n[C],n[V],n[q])}return i.join("")},encodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(a):this.encodeByteArray(Hb(a),e)},decodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(a):tk(this.decodeStringToByteArray(a,e))},decodeStringToByteArray(a,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let l=0;l<a.length;){const h=n[a.charAt(l++)],f=l<a.length?n[a.charAt(l)]:0;++l;const g=l<a.length?n[a.charAt(l)]:64;++l;const m=l<a.length?n[a.charAt(l)]:64;if(++l,h==null||f==null||g==null||m==null)throw new nk;const b=h<<2|f>>4;if(i.push(b),g!==64){const k=f<<4&240|g>>2;if(i.push(k),m!==64){const C=g<<6&192|m;i.push(C)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}};class nk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rk=function(a){const e=Hb(a);return Bb.encodeByteArray(e,!0)},Ec=function(a){return rk(a).replace(/\./g,"")},Wb=function(a){try{return Bb.decodeString(a,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
*/function ak(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
*/const ik=()=>ak().__FIREBASE_DEFAULTS__,sk=()=>{if(typeof process>"u"||typeof ov>"u")return;const a=ov.__FIREBASE_DEFAULTS__;if(a)return JSON.parse(a)},ok=()=>{if(typeof document>"u")return;let a;try{a=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=a&&Wb(a[1]);return e&&JSON.parse(e)},Vc=()=>{try{return ek()||ik()||sk()||ok()}catch(a){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${a}`);return}},Kb=a=>{var e,n;return(n=(e=Vc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[a]},lk=a=>{const e=Kb(a);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Qb=()=>{var a;return(a=Vc())===null||a===void 0?void 0:a.config},Gb=a=>{var e;return(e=Vc())===null||e===void 0?void 0:e[`_${a}`]};/**
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
*/class uk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
*/function Cl(a){return a.endsWith(".cloudworkstations.dev")}async function Xb(a){return(await fetch(a,{credentials:"include"})).ok}/**
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
*/function ck(a,e){if(a.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",l=a.iat||0,h=a.sub||a.user_id;if(!h)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:l,exp:l+3600,auth_time:l,sub:h,user_id:h,firebase:{sign_in_provider:"custom",identities:{}}},a);return[Ec(JSON.stringify(n)),Ec(JSON.stringify(f)),""].join(".")}const fl={};function hk(){const a={prod:[],emulator:[]};for(const e of Object.keys(fl))fl[e]?a.emulator.push(e):a.prod.push(e);return a}function dk(a){let e=document.getElementById(a),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",a),n=!0),{created:n,element:e}}let lv=!1;function Jb(a,e){if(typeof window>"u"||typeof document>"u"||!Cl(window.location.host)||fl[a]===e||fl[a]||lv)return;fl[a]=e;function n(C){return`__firebase__banner__${C}`}const i="__firebase__banner",l=hk().prod.length>0;function h(){const C=document.getElementById(i);C&&C.remove()}function f(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function g(C,V){C.setAttribute("width","24"),C.setAttribute("id",V),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function m(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{lv=!0,h()},C}function b(C,V){C.setAttribute("id",V),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function k(){const C=dk(i),V=n("text"),q=document.getElementById(V)||document.createElement("span"),G=n("learnmore"),ae=document.getElementById(G)||document.createElement("a"),te=n("preprendIcon"),Ae=document.getElementById(te)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const Se=C.element;f(Se),b(ae,G);const ye=m();g(Ae,te),Se.append(Ae,q,ae,ye),document.body.appendChild(Se)}l?(q.innerText="Preview backend disconnected.",Ae.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Ae.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,q.innerText="Preview backend running in this workspace."),q.setAttribute("id",V)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",k):k()}/**
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
*/function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function pk(){var a;const e=(a=Vc())===null||a===void 0?void 0:a.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Yb(){const a=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof a=="object"&&a.id!==void 0}function mk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yk(){const a=Bt();return a.indexOf("MSIE ")>=0||a.indexOf("Trident/")>=0}function vk(){return!pk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zb(){try{return typeof indexedDB=="object"}catch{return!1}}function e0(){return new Promise((a,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(i);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(i),a(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var h;e(((h=l.error)===null||h===void 0?void 0:h.message)||"")}}catch(n){e(n)}})}function bk(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
*/const wk="FirebaseError";class jn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=wk,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ni.prototype.create)}}class Ni{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},l=`${this.service}/${e}`,h=this.errors[e],f=h?Sk(h,i):"Error",g=`${this.serviceName}: ${f} (${l}).`;return new jn(l,g,i)}}function Sk(a,e){return a.replace(kk,(n,i)=>{const l=e[i];return l!=null?String(l):`<${i}?>`})}const kk=/\{\$([^}]+)}/g;function Ek(a){for(const e in a)if(Object.prototype.hasOwnProperty.call(a,e))return!1;return!0}function Pa(a,e){if(a===e)return!0;const n=Object.keys(a),i=Object.keys(e);for(const l of n){if(!i.includes(l))return!1;const h=a[l],f=e[l];if(uv(h)&&uv(f)){if(!Pa(h,f))return!1}else if(h!==f)return!1}for(const l of i)if(!n.includes(l))return!1;return!0}function uv(a){return a!==null&&typeof a=="object"}/**
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
*/function Al(a){const e=[];for(const[n,i]of Object.entries(a))Array.isArray(i)?i.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ll(a){const e={};return a.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,l]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(l)}}),e}function ul(a){const e=a.indexOf("?");if(!e)return"";const n=a.indexOf("#",e);return a.substring(e,n>0?n:void 0)}function _k(a,e){const n=new Tk(a,e);return n.subscribe.bind(n)}class Tk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let l;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Ik(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:i},l.next===void 0&&(l.next=uf),l.error===void 0&&(l.error=uf),l.complete===void 0&&(l.complete=uf);const h=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),h}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ik(a,e){if(typeof a!="object"||a===null)return!1;for(const n of e)if(n in a&&typeof a[n]=="function")return!0;return!1}function uf(){}/**
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
*/const Ck=1e3,Ak=2,Pk=4*60*60*1e3,Rk=.5;function cv(a,e=Ck,n=Ak){const i=e*Math.pow(n,a),l=Math.round(Rk*i*(Math.random()-.5)*2);return Math.min(Pk,i+l)}/**
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
*/function zn(a){return a&&a._delegate?a._delegate:a}class Fn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
*/const Si="[DEFAULT]";/**
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
*/class Nk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new uk;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&i.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(h){if(l)return null;throw h}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xk(e))try{this.getOrInitializeService({instanceIdentifier:Si})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const h=this.getOrInitializeService({instanceIdentifier:l});i.resolve(h)}catch{}}}}clearInstance(e=Si){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Si){return this.instances.has(e)}getOptions(e=Si){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[h,f]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(h);i===g&&f.resolve(l)}return l}onInit(e,n){var i;const l=this.normalizeInstanceIdentifier(n),h=(i=this.onInitCallbacks.get(l))!==null&&i!==void 0?i:new Set;h.add(e),this.onInitCallbacks.set(l,h);const f=this.instances.get(l);return f&&e(f,l),()=>{h.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const l of i)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Dk(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Si){return this.component?this.component.multipleInstances?e:Si:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dk(a){return a===Si?void 0:a}function xk(a){return a.instantiationMode==="EAGER"}/**
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
*/class Ok{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Nk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
*/var Pe;(function(a){a[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT"})(Pe||(Pe={}));const Lk={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},Mk=Pe.INFO,Fk={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},Uk=(a,e,...n)=>{if(e<a.logLevel)return;const i=new Date().toISOString(),l=Fk[e];if(l)console[l](`[${i}]  ${a.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qc{constructor(e){this.name=e,this._logLevel=Mk,this._logHandler=Uk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const jk=(a,e)=>e.some(n=>a instanceof n);let hv,dv;function zk(){return hv||(hv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vk(){return dv||(dv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const t0=new WeakMap,_f=new WeakMap,n0=new WeakMap,cf=new WeakMap,ep=new WeakMap;function qk(a){const e=new Promise((n,i)=>{const l=()=>{a.removeEventListener("success",h),a.removeEventListener("error",f)},h=()=>{n(Ia(a.result)),l()},f=()=>{i(a.error),l()};a.addEventListener("success",h),a.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&t0.set(n,a)}).catch(()=>{}),ep.set(e,a),e}function $k(a){if(_f.has(a))return;const e=new Promise((n,i)=>{const l=()=>{a.removeEventListener("complete",h),a.removeEventListener("error",f),a.removeEventListener("abort",f)},h=()=>{n(),l()},f=()=>{i(a.error||new DOMException("AbortError","AbortError")),l()};a.addEventListener("complete",h),a.addEventListener("error",f),a.addEventListener("abort",f)});_f.set(a,e)}let Tf={get(a,e,n){if(a instanceof IDBTransaction){if(e==="done")return _f.get(a);if(e==="objectStoreNames")return a.objectStoreNames||n0.get(a);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ia(a[e])},set(a,e,n){return a[e]=n,!0},has(a,e){return a instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in a}};function Hk(a){Tf=a(Tf)}function Bk(a){return a===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=a.call(hf(this),e,...n);return n0.set(i,e.sort?e.sort():[e]),Ia(i)}:Vk().includes(a)?function(...e){return a.apply(hf(this),e),Ia(t0.get(this))}:function(...e){return Ia(a.apply(hf(this),e))}}function Wk(a){return typeof a=="function"?Bk(a):(a instanceof IDBTransaction&&$k(a),jk(a,zk())?new Proxy(a,Tf):a)}function Ia(a){if(a instanceof IDBRequest)return qk(a);if(cf.has(a))return cf.get(a);const e=Wk(a);return e!==a&&(cf.set(a,e),ep.set(e,a)),e}const hf=a=>ep.get(a);function r0(a,e,{blocked:n,upgrade:i,blocking:l,terminated:h}={}){const f=indexedDB.open(a,e),g=Ia(f);return i&&f.addEventListener("upgradeneeded",m=>{i(Ia(f.result),m.oldVersion,m.newVersion,Ia(f.transaction),m)}),n&&f.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),g.then(m=>{h&&m.addEventListener("close",()=>h()),l&&m.addEventListener("versionchange",b=>l(b.oldVersion,b.newVersion,b))}).catch(()=>{}),g}const Kk=["get","getKey","getAll","getAllKeys","count"],Qk=["put","add","delete","clear"],df=new Map;function fv(a,e){if(!(a instanceof IDBDatabase&&!(e in a)&&typeof e=="string"))return;if(df.get(e))return df.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,l=Qk.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(l||Kk.includes(n)))return;const h=async function(f,...g){const m=this.transaction(f,l?"readwrite":"readonly");let b=m.store;return i&&(b=b.index(g.shift())),(await Promise.all([b[n](...g),l&&m.done]))[0]};return df.set(e,h),h}Hk(a=>({...a,get:(e,n,i)=>fv(e,n)||a.get(e,n,i),has:(e,n)=>!!fv(e,n)||a.has(e,n)}));/**
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
*/class Gk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Xk(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function Xk(a){const e=a.getComponent();return(e==null?void 0:e.type)==="VERSION"}const If="@firebase/app",pv="0.13.0";/**
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
*/const Vr=new qc("@firebase/app"),Jk="@firebase/app-compat",Yk="@firebase/analytics-compat",Zk="@firebase/analytics",eE="@firebase/app-check-compat",tE="@firebase/app-check",nE="@firebase/auth",rE="@firebase/auth-compat",aE="@firebase/database",iE="@firebase/data-connect",sE="@firebase/database-compat",oE="@firebase/functions",lE="@firebase/functions-compat",uE="@firebase/installations",cE="@firebase/installations-compat",hE="@firebase/messaging",dE="@firebase/messaging-compat",fE="@firebase/performance",pE="@firebase/performance-compat",gE="@firebase/remote-config",mE="@firebase/remote-config-compat",yE="@firebase/storage",vE="@firebase/storage-compat",bE="@firebase/firestore",wE="@firebase/ai",SE="@firebase/firestore-compat",kE="firebase",EE="11.8.0";/**
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
*/const Cf="[DEFAULT]",_E={[If]:"fire-core",[Jk]:"fire-core-compat",[Zk]:"fire-analytics",[Yk]:"fire-analytics-compat",[tE]:"fire-app-check",[eE]:"fire-app-check-compat",[nE]:"fire-auth",[rE]:"fire-auth-compat",[aE]:"fire-rtdb",[iE]:"fire-data-connect",[sE]:"fire-rtdb-compat",[oE]:"fire-fn",[lE]:"fire-fn-compat",[uE]:"fire-iid",[cE]:"fire-iid-compat",[hE]:"fire-fcm",[dE]:"fire-fcm-compat",[fE]:"fire-perf",[pE]:"fire-perf-compat",[gE]:"fire-rc",[mE]:"fire-rc-compat",[yE]:"fire-gcs",[vE]:"fire-gcs-compat",[bE]:"fire-fst",[SE]:"fire-fst-compat",[wE]:"fire-vertex","fire-js":"fire-js",[kE]:"fire-js-all"};/**
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
*/const _c=new Map,TE=new Map,Af=new Map;function gv(a,e){try{a.container.addComponent(e)}catch(n){Vr.debug(`Component ${e.name} failed to register with FirebaseApp ${a.name}`,n)}}function lr(a){const e=a.name;if(Af.has(e))return Vr.debug(`There were multiple attempts to register component ${e}.`),!1;Af.set(e,a);for(const n of _c.values())gv(n,a);for(const n of TE.values())gv(n,a);return!0}function Di(a,e){const n=a.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),a.container.getProvider(e)}function Cn(a){return a==null?!1:a.settings!==void 0}/**
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
*/const IE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ca=new Ni("app","Firebase",IE);/**
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
*/class CE{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ca.create("app-deleted",{appName:this._name})}}/**
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
*/const Bs=EE;function a0(a,e={}){let n=a;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Cf,automaticDataCollectionEnabled:!0},e),l=i.name;if(typeof l!="string"||!l)throw Ca.create("bad-app-name",{appName:String(l)});if(n||(n=Qb()),!n)throw Ca.create("no-options");const h=_c.get(l);if(h){if(Pa(n,h.options)&&Pa(i,h.config))return h;throw Ca.create("duplicate-app",{appName:l})}const f=new Ok(l);for(const m of Af.values())f.addComponent(m);const g=new CE(n,i,f);return _c.set(l,g),g}function tp(a=Cf){const e=_c.get(a);if(!e&&a===Cf&&Qb())return a0();if(!e)throw Ca.create("no-app",{appName:a});return e}function An(a,e,n){var i;let l=(i=_E[a])!==null&&i!==void 0?i:a;n&&(l+=`-${n}`);const h=l.match(/\s|\//),f=e.match(/\s|\//);if(h||f){const g=[`Unable to register library "${l}" with version "${e}":`];h&&g.push(`library name "${l}" contains illegal characters (whitespace or "/")`),h&&f&&g.push("and"),f&&g.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vr.warn(g.join(" "));return}lr(new Fn(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
*/const AE="firebase-heartbeat-database",PE=1,wl="firebase-heartbeat-store";let ff=null;function i0(){return ff||(ff=r0(AE,PE,{upgrade:(a,e)=>{switch(e){case 0:try{a.createObjectStore(wl)}catch(n){console.warn(n)}}}}).catch(a=>{throw Ca.create("idb-open",{originalErrorMessage:a.message})})),ff}async function RE(a){try{const e=(await i0()).transaction(wl),n=await e.objectStore(wl).get(s0(a));return await e.done,n}catch(e){if(e instanceof jn)Vr.warn(e.message);else{const n=Ca.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vr.warn(n.message)}}}async function mv(a,e){try{const n=(await i0()).transaction(wl,"readwrite");await n.objectStore(wl).put(e,s0(a)),await n.done}catch(n){if(n instanceof jn)Vr.warn(n.message);else{const i=Ca.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vr.warn(i.message)}}}function s0(a){return`${a.name}!${a.options.appId}`}/**
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
*/const NE=1024,DE=30;class xE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LE(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=yv();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:i}),this._heartbeatsCache.heartbeats.length>DE){const h=ME(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Vr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yv(),{heartbeatsToSend:i,unsentEntries:l}=OE(this._heartbeatsCache.heartbeats),h=Ec(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),h}catch(n){return Vr.warn(n),""}}}function yv(){return new Date().toISOString().substring(0,10)}function OE(a,e=NE){const n=[];let i=a.slice();for(const l of a){const h=n.find(f=>f.agent===l.agent);if(h){if(h.dates.push(l.date),vv(n)>e){h.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),vv(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class LE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zb()?e0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await RE(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function vv(a){return Ec(JSON.stringify({version:2,heartbeats:a})).length}function ME(a){if(a.length===0)return-1;let e=0,n=a[0].date;for(let i=1;i<a.length;i++)a[i].date<n&&(n=a[i].date,e=i);return e}/**
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
*/function FE(a){lr(new Fn("platform-logger",e=>new Gk(e),"PRIVATE")),lr(new Fn("heartbeat",e=>new xE(e),"PRIVATE")),An(If,pv,a),An(If,pv,"esm2017"),An("fire-js","")}FE("");function np(a,e){var n={};for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&e.indexOf(i)<0&&(n[i]=a[i]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,i=Object.getOwnPropertySymbols(a);l<i.length;l++)e.indexOf(i[l])<0&&Object.prototype.propertyIsEnumerable.call(a,i[l])&&(n[i[l]]=a[i[l]]);return n}function o0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UE=o0,l0=new Ni("auth","Firebase",o0());/**
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
*/const Tc=new qc("@firebase/auth");function jE(a,...e){Tc.logLevel<=Pe.WARN&&Tc.warn(`Auth (${Bs}): ${a}`,...e)}function pc(a,...e){Tc.logLevel<=Pe.ERROR&&Tc.error(`Auth (${Bs}): ${a}`,...e)}/**
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
*/function Un(a,...e){throw rp(a,...e)}function ir(a,...e){return rp(a,...e)}function u0(a,e,n){const i=Object.assign(Object.assign({},UE()),{[e]:n});return new Ni("auth","Firebase",i).create(e,{appName:a.name})}function zr(a){return u0(a,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rp(a,...e){if(typeof a!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=a.name),a._errorFactory.create(n,...i)}return l0.create(a,...e)}function he(a,e,...n){if(!a)throw rp(e,...n)}function Ur(a){const e="INTERNAL ASSERTION FAILED: "+a;throw pc(e),new Error(e)}function qr(a,e){a||Ur(e)}/**
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
*/function Pf(){var a;return typeof self<"u"&&((a=self.location)===null||a===void 0?void 0:a.href)||""}function zE(){return bv()==="http:"||bv()==="https:"}function bv(){var a;return typeof self<"u"&&((a=self.location)===null||a===void 0?void 0:a.protocol)||null}/**
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
*/function VE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zE()||Yb()||"connection"in navigator)?navigator.onLine:!0}function qE(){if(typeof navigator>"u")return null;const a=navigator;return a.languages&&a.languages[0]||a.language||null}/**
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
*/class Pl{constructor(e,n){this.shortDelay=e,this.longDelay=n,qr(n>e,"Short delay should be less than long delay!"),this.isMobile=fk()||mk()}get(){return VE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
*/function ap(a,e){qr(a.emulator,"Emulator should always be set here");const{url:n}=a.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
*/class c0{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ur("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ur("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ur("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
*/const $E={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
*/const HE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],BE=new Pl(3e4,6e4);function Ma(a,e){return a.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:a.tenantId}):e}async function Fa(a,e,n,i,l={}){return h0(a,l,async()=>{let h={},f={};i&&(e==="GET"?f=i:h={body:JSON.stringify(i)});const g=Al(Object.assign({key:a.config.apiKey},f)).slice(1),m=await a._getAdditionalHeaders();m["Content-Type"]="application/json",a.languageCode&&(m["X-Firebase-Locale"]=a.languageCode);const b=Object.assign({method:e,headers:m},h);return gk()||(b.referrerPolicy="no-referrer"),a.emulatorConfig&&Cl(a.emulatorConfig.host)&&(b.credentials="include"),c0.fetch()(await d0(a,a.config.apiHost,n,g),b)})}async function h0(a,e,n){a._canInitEmulator=!1;const i=Object.assign(Object.assign({},$E),e);try{const l=new KE(a),h=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const f=await h.json();if("needConfirmation"in f)throw oc(a,"account-exists-with-different-credential",f);if(h.ok&&!("errorMessage"in f))return f;{const g=h.ok?f.errorMessage:f.error.message,[m,b]=g.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw oc(a,"credential-already-in-use",f);if(m==="EMAIL_EXISTS")throw oc(a,"email-already-in-use",f);if(m==="USER_DISABLED")throw oc(a,"user-disabled",f);const k=i[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(b)throw u0(a,k,b);Un(a,k)}}catch(l){if(l instanceof jn)throw l;Un(a,"network-request-failed",{message:String(l)})}}async function Rl(a,e,n,i,l={}){const h=await Fa(a,e,n,i,l);return"mfaPendingCredential"in h&&Un(a,"multi-factor-auth-required",{_serverResponse:h}),h}async function d0(a,e,n,i){const l=`${e}${n}?${i}`,h=a,f=h.config.emulator?ap(a.config,l):`${a.config.apiScheme}://${l}`;return HE.includes(n)&&(await h._persistenceManagerAvailable,h._getPersistenceType()==="COOKIE")?h._getPersistence()._getFinalTarget(f).toString():f}function WE(a){switch(a){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class KE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(ir(this.auth,"network-request-failed")),BE.get())})}}function oc(a,e,n){const i={appName:a.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const l=ir(a,e,i);return l.customData._tokenResponse=n,l}function wv(a){return a!==void 0&&a.enterprise!==void 0}class QE{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return WE(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function GE(a,e){return Fa(a,"GET","/v2/recaptchaConfig",Ma(a,e))}/**
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
*/async function XE(a,e){return Fa(a,"POST","/v1/accounts:delete",e)}async function Ic(a,e){return Fa(a,"POST","/v1/accounts:lookup",e)}/**
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
*/function pl(a){if(a)try{const e=new Date(Number(a));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JE(a,e=!1){const n=zn(a),i=await n.getIdToken(e),l=ip(i);he(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const h=typeof l.firebase=="object"?l.firebase:void 0,f=h==null?void 0:h.sign_in_provider;return{claims:l,token:i,authTime:pl(pf(l.auth_time)),issuedAtTime:pl(pf(l.iat)),expirationTime:pl(pf(l.exp)),signInProvider:f||null,signInSecondFactor:(h==null?void 0:h.sign_in_second_factor)||null}}function pf(a){return Number(a)*1e3}function ip(a){const[e,n,i]=a.split(".");if(e===void 0||n===void 0||i===void 0)return pc("JWT malformed, contained fewer than 3 sections"),null;try{const l=Wb(n);return l?JSON.parse(l):(pc("Failed to decode base64 JWT payload"),null)}catch(l){return pc("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Sv(a){const e=ip(a);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
*/async function Sl(a,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof jn&&YE(i)&&a.auth.currentUser===a&&await a.auth.signOut(),i}}function YE({code:a}){return a==="auth/user-disabled"||a==="auth/user-token-expired"}/**
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
*/class ZE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
*/class Rf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pl(this.lastLoginAt),this.creationTime=pl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
*/async function Cc(a){var e;const n=a.auth,i=await a.getIdToken(),l=await Sl(a,Ic(n,{idToken:i}));he(l==null?void 0:l.users.length,n,"internal-error");const h=l.users[0];a._notifyReloadListener(h);const f=!((e=h.providerUserInfo)===null||e===void 0)&&e.length?f0(h.providerUserInfo):[],g=t_(a.providerData,f),m=a.isAnonymous,b=!(a.email&&h.passwordHash)&&!(g!=null&&g.length),k=m?b:!1,C={uid:h.localId,displayName:h.displayName||null,photoURL:h.photoUrl||null,email:h.email||null,emailVerified:h.emailVerified||!1,phoneNumber:h.phoneNumber||null,tenantId:h.tenantId||null,providerData:g,metadata:new Rf(h.createdAt,h.lastLoginAt),isAnonymous:k};Object.assign(a,C)}async function e_(a){const e=zn(a);await Cc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function t_(a,e){return[...a.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function f0(a){return a.map(e=>{var{providerId:n}=e,i=np(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
*/async function n_(a,e){const n=await h0(a,{},async()=>{const i=Al({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:h}=a.config,f=await d0(a,l,"/v1/token",`key=${h}`),g=await a._getAdditionalHeaders();return g["Content-Type"]="application/x-www-form-urlencoded",c0.fetch()(f,{method:"POST",headers:g,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function r_(a,e){return Fa(a,"POST","/v2/accounts:revokeToken",Ma(a,e))}/**
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
*/class Ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){he(e.length!==0,"internal-error");const n=Sv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:l,expiresIn:h}=await n_(e,n);this.updateTokensAndExpiration(i,l,Number(h))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:l,expirationTime:h}=n,f=new Ds;return i&&(he(typeof i=="string","internal-error",{appName:e}),f.refreshToken=i),l&&(he(typeof l=="string","internal-error",{appName:e}),f.accessToken=l),h&&(he(typeof h=="number","internal-error",{appName:e}),f.expirationTime=h),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ds,this.toJSON())}_performRefresh(){return Ur("not implemented")}}/**
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
*/function ba(a,e){he(typeof a=="string"||typeof a>"u","internal-error",{appName:e})}class Mn{constructor(e){var{uid:n,auth:i,stsTokenManager:l}=e,h=np(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=h.displayName||null,this.email=h.email||null,this.emailVerified=h.emailVerified||!1,this.phoneNumber=h.phoneNumber||null,this.photoURL=h.photoURL||null,this.isAnonymous=h.isAnonymous||!1,this.tenantId=h.tenantId||null,this.providerData=h.providerData?[...h.providerData]:[],this.metadata=new Rf(h.createdAt||void 0,h.lastLoginAt||void 0)}async getIdToken(e){const n=await Sl(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return JE(this,e)}reload(){return e_(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Cc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Cn(this.auth.app))return Promise.reject(zr(this.auth));const e=await this.getIdToken();return await Sl(this,XE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,l,h,f,g,m,b,k;const C=(i=n.displayName)!==null&&i!==void 0?i:void 0,V=(l=n.email)!==null&&l!==void 0?l:void 0,q=(h=n.phoneNumber)!==null&&h!==void 0?h:void 0,G=(f=n.photoURL)!==null&&f!==void 0?f:void 0,ae=(g=n.tenantId)!==null&&g!==void 0?g:void 0,te=(m=n._redirectEventId)!==null&&m!==void 0?m:void 0,Ae=(b=n.createdAt)!==null&&b!==void 0?b:void 0,Se=(k=n.lastLoginAt)!==null&&k!==void 0?k:void 0,{uid:ye,emailVerified:Oe,isAnonymous:pe,providerData:Re,stsTokenManager:N}=n;he(ye&&N,e,"internal-error");const E=Ds.fromJSON(this.name,N);he(typeof ye=="string",e,"internal-error"),ba(C,e.name),ba(V,e.name),he(typeof Oe=="boolean",e,"internal-error"),he(typeof pe=="boolean",e,"internal-error"),ba(q,e.name),ba(G,e.name),ba(ae,e.name),ba(te,e.name),ba(Ae,e.name),ba(Se,e.name);const T=new Mn({uid:ye,auth:e,email:V,emailVerified:Oe,displayName:C,isAnonymous:pe,photoURL:G,phoneNumber:q,tenantId:ae,stsTokenManager:E,createdAt:Ae,lastLoginAt:Se});return Re&&Array.isArray(Re)&&(T.providerData=Re.map(R=>Object.assign({},R))),te&&(T._redirectEventId=te),T}static async _fromIdTokenResponse(e,n,i=!1){const l=new Ds;l.updateFromServerResponse(n);const h=new Mn({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:i});return await Cc(h),h}static async _fromGetAccountInfoResponse(e,n,i){const l=n.users[0];he(l.localId!==void 0,"internal-error");const h=l.providerUserInfo!==void 0?f0(l.providerUserInfo):[],f=!(l.email&&l.passwordHash)&&!(h!=null&&h.length),g=new Ds;g.updateFromIdToken(i);const m=new Mn({uid:l.localId,auth:e,stsTokenManager:g,isAnonymous:f}),b={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:h,metadata:new Rf(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(h!=null&&h.length)};return Object.assign(m,b),m}}/**
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
*/const kv=new Map;function jr(a){qr(a instanceof Function,"Expected a class definition");let e=kv.get(a);return e?(qr(e instanceof a,"Instance stored in cache mismatched with class"),e):(e=new a,kv.set(a,e),e)}/**
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
*/class p0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}p0.type="NONE";const Ev=p0;/**
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
*/function gc(a,e,n){return`firebase:${a}:${e}:${n}`}class xs{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:l,name:h}=this.auth;this.fullUserKey=gc(this.userKey,l.apiKey,h),this.fullPersistenceKey=gc("persistence",l.apiKey,h),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ic(this.auth,{idToken:e}).catch(()=>{});return n?Mn._fromGetAccountInfoResponse(this.auth,n,e):null}return Mn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new xs(jr(Ev),e,i);const l=(await Promise.all(n.map(async b=>{if(await b._isAvailable())return b}))).filter(b=>b);let h=l[0]||jr(Ev);const f=gc(i,e.config.apiKey,e.name);let g=null;for(const b of n)try{const k=await b._get(f);if(k){let C;if(typeof k=="string"){const V=await Ic(e,{idToken:k}).catch(()=>{});if(!V)break;C=await Mn._fromGetAccountInfoResponse(e,V,k)}else C=Mn._fromJSON(e,k);b!==h&&(g=C),h=b;break}}catch{}const m=l.filter(b=>b._shouldAllowMigration);return!h._shouldAllowMigration||!m.length?new xs(h,e,i):(h=m[0],g&&await h._set(f,g.toJSON()),await Promise.all(n.map(async b=>{if(b!==h)try{await b._remove(f)}catch{}})),new xs(h,e,i))}}/**
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
*/function _v(a){const e=a.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(v0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(g0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(w0(e))return"Blackberry";if(S0(e))return"Webos";if(m0(e))return"Safari";if((e.includes("chrome/")||y0(e))&&!e.includes("edge/"))return"Chrome";if(b0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=a.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function g0(a=Bt()){return/firefox\//i.test(a)}function m0(a=Bt()){const e=a.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function y0(a=Bt()){return/crios\//i.test(a)}function v0(a=Bt()){return/iemobile/i.test(a)}function b0(a=Bt()){return/android/i.test(a)}function w0(a=Bt()){return/blackberry/i.test(a)}function S0(a=Bt()){return/webos/i.test(a)}function sp(a=Bt()){return/iphone|ipad|ipod/i.test(a)||/macintosh/i.test(a)&&/mobile/i.test(a)}function a_(a=Bt()){var e;return sp(a)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function i_(){return yk()&&document.documentMode===10}function k0(a=Bt()){return sp(a)||b0(a)||S0(a)||w0(a)||/windows phone/i.test(a)||v0(a)}/**
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
*/function E0(a,e=[]){let n;switch(a){case"Browser":n=_v(Bt());break;case"Worker":n=`${_v(Bt())}-${a}`;break;default:n=a}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bs}/${i}`}/**
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
*/class s_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=h=>new Promise((f,g)=>{try{const m=e(h);f(m)}catch(m){g(m)}});i.onAbort=n,this.queue.push(i);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
*/async function o_(a,e={}){return Fa(a,"GET","/v2/passwordPolicy",Ma(a,e))}/**
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
*/const l_=6;class u_{constructor(e){var n,i,l,h;const f=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:l_,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(h=e.forceUpgradeOnSignin)!==null&&h!==void 0?h:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,l,h,f,g;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(n=m.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),m.isValid&&(m.isValid=(i=m.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),m.isValid&&(m.isValid=(l=m.containsLowercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(h=m.containsUppercaseLetter)!==null&&h!==void 0?h:!0),m.isValid&&(m.isValid=(f=m.containsNumericCharacter)!==null&&f!==void 0?f:!0),m.isValid&&(m.isValid=(g=m.containsNonAlphanumericCharacter)!==null&&g!==void 0?g:!0),m}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let l=0;l<e.length;l++)i=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,l,h){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=h))}}/**
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
*/class c_{constructor(e,n,i,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tv(this),this.idTokenSubscription=new Tv(this),this.beforeStateQueue=new s_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(h=>this._resolvePersistenceManagerAvailable=h)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jr(n)),this._initializationPromise=this.queue(async()=>{var i,l,h;if(!this._deleted&&(this.persistenceManager=await xs.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((l=this._popupRedirectResolver)===null||l===void 0)&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((h=this.currentUser)===null||h===void 0?void 0:h.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ic(this,{idToken:e}),i=await Mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Cn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(g,g))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let l=i,h=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,g=l==null?void 0:l._redirectEventId,m=await this.tryRedirectSignIn(e);(!f||f===g)&&m!=null&&m.user&&(l=m.user,h=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(h)try{await this.beforeStateQueue.runMiddleware(l)}catch(f){l=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Cn(this.app))return Promise.reject(zr(this));const n=e?zn(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Cn(this.app)?Promise.reject(zr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Cn(this.app)?Promise.reject(zr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await o_(this),n=new u_(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ni("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await r_(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jr(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[jr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,l){if(this._deleted)return()=>{};const h=typeof n=="function"?n:n.next.bind(n);let f=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(g,this,"internal-error"),g.then(()=>{f||h(this.currentUser)}),typeof n=="function"){const m=e.addObserver(n,i,l);return()=>{f=!0,m()}}else{const m=e.addObserver(n);return()=>{f=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=E0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;if(Cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&jE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xi(a){return zn(a)}class Tv{constructor(e){this.auth=e,this.observer=null,this.addObserver=_k(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
*/let $c={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function h_(a){$c=a}function _0(a){return $c.loadJS(a)}function d_(){return $c.recaptchaEnterpriseScript}function f_(){return $c.gapiScript}function p_(a){return`__${a}${Math.floor(Math.random()*1e6)}`}class g_{constructor(){this.enterprise=new m_}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class m_{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const y_="recaptcha-enterprise",T0="NO_RECAPTCHA";class v_{constructor(e){this.type=y_,this.auth=xi(e)}async verify(e="verify",n=!1){async function i(h){if(!n){if(h.tenantId==null&&h._agentRecaptchaConfig!=null)return h._agentRecaptchaConfig.siteKey;if(h.tenantId!=null&&h._tenantRecaptchaConfigs[h.tenantId]!==void 0)return h._tenantRecaptchaConfigs[h.tenantId].siteKey}return new Promise(async(f,g)=>{GE(h,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)g(new Error("recaptcha Enterprise site key undefined"));else{const b=new QE(m);return h.tenantId==null?h._agentRecaptchaConfig=b:h._tenantRecaptchaConfigs[h.tenantId]=b,f(b.siteKey)}}).catch(m=>{g(m)})})}function l(h,f,g){const m=window.grecaptcha;wv(m)?m.enterprise.ready(()=>{m.enterprise.execute(h,{action:e}).then(b=>{f(b)}).catch(()=>{f(T0)})}):g(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new g_().execute("siteKey",{action:"verify"}):new Promise((h,f)=>{i(this.auth).then(g=>{if(!n&&wv(window.grecaptcha))l(g,h,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let m=d_();m.length!==0&&(m+=g),_0(m).then(()=>{l(g,h,f)}).catch(b=>{f(b)})}}).catch(g=>{f(g)})})}}async function Iv(a,e,n,i=!1,l=!1){const h=new v_(a);let f;if(l)f=T0;else try{f=await h.verify(n)}catch{f=await h.verify(n,!0)}const g=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in g){const m=g.phoneEnrollmentInfo.phoneNumber,b=g.phoneEnrollmentInfo.recaptchaToken;Object.assign(g,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:b,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in g){const m=g.phoneSignInInfo.recaptchaToken;Object.assign(g,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return g}return i?Object.assign(g,{captchaResp:f}):Object.assign(g,{captchaResponse:f}),Object.assign(g,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(g,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),g}async function Nf(a,e,n,i,l){var h;if(!((h=a._getRecaptchaConfig())===null||h===void 0)&&h.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await Iv(a,e,n,n==="getOobCode");return i(a,f)}else return i(a,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const g=await Iv(a,e,n,n==="getOobCode");return i(a,g)}else return Promise.reject(f)})}/**
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
*/function b_(a,e){const n=Di(a,"auth");if(n.isInitialized()){const i=n.getImmediate(),l=n.getOptions();if(Pa(l,e??{}))return i;Un(i,"already-initialized")}return n.initialize({options:e})}function w_(a,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(jr);e!=null&&e.errorMap&&a._updateErrorMap(e.errorMap),a._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function S_(a,e,n){const i=xi(a);he(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const l=!1,h=I0(e),{host:f,port:g}=k_(e),m=g===null?"":`:${g}`,b={url:`${h}//${f}${m}/`},k=Object.freeze({host:f,port:g,protocol:h.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!i._canInitEmulator){he(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),he(Pa(b,i.config.emulator)&&Pa(k,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=b,i.emulatorConfig=k,i.settings.appVerificationDisabledForTesting=!0,Cl(f)?(Xb(`${h}//${f}${m}`),Jb("Auth",!0)):E_()}function I0(a){const e=a.indexOf(":");return e<0?"":a.substr(0,e+1)}function k_(a){const e=I0(a),n=/(\/\/)?([^?#/]+)/.exec(a.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(i);if(l){const h=l[1];return{host:h,port:Cv(i.substr(h.length+1))}}else{const[h,f]=i.split(":");return{host:h,port:Cv(f)}}}function Cv(a){if(!a)return null;const e=Number(a);return isNaN(e)?null:e}function E_(){function a(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",a):a())}/**
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
*/class op{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ur("not implemented")}_getIdTokenResponse(e){return Ur("not implemented")}_linkToIdToken(e,n){return Ur("not implemented")}_getReauthenticationResolver(e){return Ur("not implemented")}}async function __(a,e){return Fa(a,"POST","/v1/accounts:signUp",e)}/**
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
*/async function T_(a,e){return Rl(a,"POST","/v1/accounts:signInWithPassword",Ma(a,e))}/**
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
*/async function I_(a,e){return Rl(a,"POST","/v1/accounts:signInWithEmailLink",Ma(a,e))}async function C_(a,e){return Rl(a,"POST","/v1/accounts:signInWithEmailLink",Ma(a,e))}/**
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
*/class kl extends op{constructor(e,n,i,l=null){super("password",i),this._email=e,this._password=n,this._tenantId=l}static _fromEmailAndPassword(e,n){return new kl(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new kl(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&n!=null&&n.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nf(e,n,"signInWithPassword",T_);case"emailLink":return I_(e,{email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nf(e,i,"signUpPassword",__);case"emailLink":return C_(e,{idToken:n,email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
*/async function Os(a,e){return Rl(a,"POST","/v1/accounts:signInWithIdp",Ma(a,e))}/**
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
*/const A_="http://localhost";class Ii extends op{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ii(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:l}=n,h=np(n,["providerId","signInMethod"]);if(!i||!l)return null;const f=new Ii(i,l);return f.idToken=h.idToken||void 0,f.accessToken=h.accessToken||void 0,f.secret=h.secret,f.nonce=h.nonce,f.pendingToken=h.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return Os(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Os(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Os(e,n)}buildRequest(){const e={requestUri:A_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Al(n)}return e}}/**
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
*/function P_(a){switch(a){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function R_(a){const e=ll(ul(a)).link,n=e?ll(ul(e)).deep_link_id:null,i=ll(ul(a)).deep_link_id;return(i?ll(ul(i)).link:null)||i||n||e||a}class lp{constructor(e){var n,i,l,h,f,g;const m=ll(ul(e)),b=(n=m.apiKey)!==null&&n!==void 0?n:null,k=(i=m.oobCode)!==null&&i!==void 0?i:null,C=P_((l=m.mode)!==null&&l!==void 0?l:null);he(b&&k&&C,"argument-error"),this.apiKey=b,this.operation=C,this.code=k,this.continueUrl=(h=m.continueUrl)!==null&&h!==void 0?h:null,this.languageCode=(f=m.lang)!==null&&f!==void 0?f:null,this.tenantId=(g=m.tenantId)!==null&&g!==void 0?g:null}static parseLink(e){const n=R_(e);try{return new lp(n)}catch{return null}}}/**
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
*/class Ws{constructor(){this.providerId=Ws.PROVIDER_ID}static credential(e,n){return kl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=lp.parseLink(n);return he(i,"argument-error"),kl._fromEmailAndCode(e,i.code,i.tenantId)}}Ws.PROVIDER_ID="password";Ws.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ws.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
*/class C0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
*/class Nl extends C0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
*/class wa extends Nl{constructor(){super("facebook.com")}static credential(e){return Ii._fromParams({providerId:wa.PROVIDER_ID,signInMethod:wa.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wa.credentialFromTaggedObject(e)}static credentialFromError(e){return wa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wa.credential(e.oauthAccessToken)}catch{return null}}}wa.FACEBOOK_SIGN_IN_METHOD="facebook.com";wa.PROVIDER_ID="facebook.com";/**
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
*/class Sa extends Nl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ii._fromParams({providerId:Sa.PROVIDER_ID,signInMethod:Sa.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Sa.credentialFromTaggedObject(e)}static credentialFromError(e){return Sa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Sa.credential(n,i)}catch{return null}}}Sa.GOOGLE_SIGN_IN_METHOD="google.com";Sa.PROVIDER_ID="google.com";/**
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
*/class ka extends Nl{constructor(){super("github.com")}static credential(e){return Ii._fromParams({providerId:ka.PROVIDER_ID,signInMethod:ka.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ka.credentialFromTaggedObject(e)}static credentialFromError(e){return ka.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ka.credential(e.oauthAccessToken)}catch{return null}}}ka.GITHUB_SIGN_IN_METHOD="github.com";ka.PROVIDER_ID="github.com";/**
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
*/class Ea extends Nl{constructor(){super("twitter.com")}static credential(e,n){return Ii._fromParams({providerId:Ea.PROVIDER_ID,signInMethod:Ea.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ea.credentialFromTaggedObject(e)}static credentialFromError(e){return Ea.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Ea.credential(n,i)}catch{return null}}}Ea.TWITTER_SIGN_IN_METHOD="twitter.com";Ea.PROVIDER_ID="twitter.com";/**
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
*/async function N_(a,e){return Rl(a,"POST","/v1/accounts:signUp",Ma(a,e))}/**
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
*/class Ci{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,l=!1){const h=await Mn._fromIdTokenResponse(e,i,l),f=Av(i);return new Ci({user:h,providerId:f,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const l=Av(i);return new Ci({user:e,providerId:l,_tokenResponse:i,operationType:n})}}function Av(a){return a.providerId?a.providerId:"phoneNumber"in a?"phone":null}/**
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
*/class Ac extends jn{constructor(e,n,i,l){var h;super(n.code,n.message),this.operationType=i,this.user=l,Object.setPrototypeOf(this,Ac.prototype),this.customData={appName:e.name,tenantId:(h=e.tenantId)!==null&&h!==void 0?h:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,l){return new Ac(e,n,i,l)}}function A0(a,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(a):n._getIdTokenResponse(a)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Ac._fromErrorAndOperation(a,l,e,i):l})}async function D_(a,e,n=!1){const i=await Sl(a,e._linkToIdToken(a.auth,await a.getIdToken()),n);return Ci._forOperation(a,"link",i)}/**
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
*/async function x_(a,e,n=!1){const{auth:i}=a;if(Cn(i.app))return Promise.reject(zr(i));const l="reauthenticate";try{const h=await Sl(a,A0(i,l,e,a),n);he(h.idToken,i,"internal-error");const f=ip(h.idToken);he(f,i,"internal-error");const{sub:g}=f;return he(a.uid===g,i,"user-mismatch"),Ci._forOperation(a,l,h)}catch(h){throw(h==null?void 0:h.code)==="auth/user-not-found"&&Un(i,"user-mismatch"),h}}/**
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
*/async function P0(a,e,n=!1){if(Cn(a.app))return Promise.reject(zr(a));const i="signIn",l=await A0(a,i,e),h=await Ci._fromIdTokenResponse(a,i,l);return n||await a._updateCurrentUser(h.user),h}async function O_(a,e){return P0(xi(a),e)}/**
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
*/async function R0(a){const e=xi(a);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function L_(a,e,n){if(Cn(a.app))return Promise.reject(zr(a));const i=xi(a),l=await Nf(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",N_).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&R0(a),f}),h=await Ci._fromIdTokenResponse(i,"signIn",l);return await i._updateCurrentUser(h.user),h}function M_(a,e,n){return Cn(a.app)?Promise.reject(zr(a)):O_(zn(a),Ws.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&R0(a),i})}function F_(a,e,n,i){return zn(a).onIdTokenChanged(e,n,i)}function U_(a,e,n){return zn(a).beforeAuthStateChanged(e,n)}function j_(a,e,n,i){return zn(a).onAuthStateChanged(e,n,i)}const Pc="__sak";/**
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
*/class N0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pc,"1"),this.storage.removeItem(Pc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
*/const z_=1e3,V_=10;class D0 extends N0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=k0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),l=this.localCache[n];i!==l&&e(n,l,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,g,m)=>{this.notifyListeners(f,m)});return}const i=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const f=this.storage.getItem(i);!n&&this.localCache[i]===f||this.notifyListeners(i,f)},h=this.storage.getItem(i);i_()&&h!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,V_):l()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const l of Array.from(i))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},z_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}D0.type="LOCAL";const q_=D0;/**
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
*/class x0 extends N0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}x0.type="SESSION";const O0=x0;/**
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
*/function $_(a){return Promise.all(a.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
*/class Hc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const i=new Hc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:l,data:h}=n.data,f=this.handlersMap[l];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:l});const g=Array.from(f).map(async b=>b(n.origin,h)),m=await $_(g);n.ports[0].postMessage({status:"done",eventId:i,eventType:l,response:m})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hc.receivers=[];/**
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
*/function up(a="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return a+n}/**
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
*/class H_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let h,f;return new Promise((g,m)=>{const b=up("",20);l.port1.start();const k=setTimeout(()=>{m(new Error("unsupported_event"))},i);f={messageChannel:l,onMessage(C){const V=C;if(V.data.eventId===b)switch(V.data.status){case"ack":clearTimeout(k),h=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(h),g(V.data.response);break;default:clearTimeout(k),clearTimeout(h),m(new Error("invalid_response"));break}}},this.handlers.add(f),l.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:b,data:n},[l.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
*/function sr(){return window}function B_(a){sr().location.href=a}/**
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
*/function L0(){return typeof sr().WorkerGlobalScope<"u"&&typeof sr().importScripts=="function"}async function W_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function K_(){var a;return((a=navigator==null?void 0:navigator.serviceWorker)===null||a===void 0?void 0:a.controller)||null}function Q_(){return L0()?self:null}/**
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
*/const M0="firebaseLocalStorageDb",G_=1,Rc="firebaseLocalStorage",F0="fbase_key";class Dl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bc(a,e){return a.transaction([Rc],e?"readwrite":"readonly").objectStore(Rc)}function X_(){const a=indexedDB.deleteDatabase(M0);return new Dl(a).toPromise()}function Df(){const a=indexedDB.open(M0,G_);return new Promise((e,n)=>{a.addEventListener("error",()=>{n(a.error)}),a.addEventListener("upgradeneeded",()=>{const i=a.result;try{i.createObjectStore(Rc,{keyPath:F0})}catch(l){n(l)}}),a.addEventListener("success",async()=>{const i=a.result;i.objectStoreNames.contains(Rc)?e(i):(i.close(),await X_(),e(await Df()))})})}async function Pv(a,e,n){const i=Bc(a,!0).put({[F0]:e,value:n});return new Dl(i).toPromise()}async function J_(a,e){const n=Bc(a,!1).get(e),i=await new Dl(n).toPromise();return i===void 0?null:i.value}function Rv(a,e){const n=Bc(a,!0).delete(e);return new Dl(n).toPromise()}const Y_=800,Z_=3;class U0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Df(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Z_)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return L0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hc._getInstance(Q_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await W_(),!this.activeServiceWorker)return;this.sender=new H_(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||K_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Df();return await Pv(e,Pc,"1"),await Rv(e,Pc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Pv(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>J_(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const h=Bc(l,!1).getAll();return new Dl(h).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:l,value:h}of e)i.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(h)&&(this.notifyListeners(l,h),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!i.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const l of Array.from(i))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Y_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}U0.type="LOCAL";const eT=U0;new Pl(3e4,6e4);/**
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
*/function tT(a,e){return e?jr(e):(he(a._popupRedirectResolver,a,"argument-error"),a._popupRedirectResolver)}/**
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
*/class cp extends op{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Os(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Os(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Os(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nT(a){return P0(a.auth,new cp(a),a.bypassAuthState)}function rT(a){const{auth:e,user:n}=a;return he(n,e,"internal-error"),x_(n,new cp(a),a.bypassAuthState)}async function aT(a){const{auth:e,user:n}=a;return he(n,e,"internal-error"),D_(n,new cp(a),a.bypassAuthState)}/**
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
*/class j0{constructor(e,n,i,l,h=!1){this.auth=e,this.resolver=i,this.user=l,this.bypassAuthState=h,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:l,tenantId:h,error:f,type:g}=e;if(f){this.reject(f);return}const m={auth:this.auth,requestUri:n,sessionId:i,tenantId:h||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(m))}catch(b){this.reject(b)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nT;case"linkViaPopup":case"linkViaRedirect":return aT;case"reauthViaPopup":case"reauthViaRedirect":return rT;default:Un(this.auth,"internal-error")}}resolve(e){qr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
*/const iT=new Pl(2e3,1e4);class Ns extends j0{constructor(e,n,i,l,h){super(e,n,l,h),this.provider=i,this.authWindow=null,this.pollId=null,Ns.currentPopupAction&&Ns.currentPopupAction.cancel(),Ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){qr(this.filter.length===1,"Popup operations only handle one event");const e=up();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ir(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ir(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ir(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iT.get())};e()}}Ns.currentPopupAction=null;/**
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
*/const sT="pendingRedirect",mc=new Map;class oT extends j0{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=mc.get(this.auth._key());if(!e){try{const n=await lT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(n){e=()=>Promise.reject(n)}mc.set(this.auth._key(),e)}return this.bypassAuthState||mc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lT(a,e){const n=hT(e),i=cT(a);if(!await i._isAvailable())return!1;const l=await i._get(n)==="true";return await i._remove(n),l}function uT(a,e){mc.set(a._key(),e)}function cT(a){return jr(a._redirectPersistence)}function hT(a){return gc(sT,a.config.apiKey,a.name)}async function dT(a,e,n=!1){if(Cn(a.app))return Promise.reject(zr(a));const i=xi(a),l=tT(i,e),h=await new oT(i,l,n).execute();return h&&!n&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
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
*/const fT=10*60*1e3;class pT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!z0(e)){const l=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(ir(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nv(e))}saveEventToCache(e){this.cachedEventUids.add(Nv(e)),this.lastProcessedEventTime=Date.now()}}function Nv(a){return[a.type,a.eventId,a.sessionId,a.tenantId].filter(e=>e).join("-")}function z0({type:a,error:e}){return a==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gT(a){switch(a.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return z0(a);default:return!1}}/**
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
*/async function mT(a,e={}){return Fa(a,"GET","/v1/projects",e)}/**
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
*/const yT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vT=/^https?/;async function bT(a){if(a.config.emulator)return;const{authorizedDomains:e}=await mT(a);for(const n of e)try{if(wT(n))return}catch{}Un(a,"unauthorized-domain")}function wT(a){const e=Pf(),{protocol:n,hostname:i}=new URL(e);if(a.startsWith("chrome-extension://")){const h=new URL(a);return h.hostname===""&&i===""?n==="chrome-extension:"&&a.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&h.hostname===i}if(!vT.test(n))return!1;if(yT.test(a))return i===a;const l=a.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(i)}/**
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
*/const ST=new Pl(3e4,6e4);function Dv(){const a=sr().___jsl;if(a!=null&&a.H){for(const e of Object.keys(a.H))if(a.H[e].r=a.H[e].r||[],a.H[e].L=a.H[e].L||[],a.H[e].r=[...a.H[e].L],a.CP)for(let n=0;n<a.CP.length;n++)a.CP[n]=null}}function kT(a){return new Promise((e,n)=>{var i,l,h;function f(){Dv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dv(),n(ir(a,"network-request-failed"))},timeout:ST.get()})}if(!((l=(i=sr().gapi)===null||i===void 0?void 0:i.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((h=sr().gapi)===null||h===void 0)&&h.load)f();else{const g=p_("iframefcb");return sr()[g]=()=>{gapi.load?f():n(ir(a,"network-request-failed"))},_0(`${f_()}?onload=${g}`).catch(m=>n(m))}}).catch(e=>{throw yc=null,e})}let yc=null;function ET(a){return yc=yc||kT(a),yc}/**
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
*/const _T=new Pl(5e3,15e3),TT="__/auth/iframe",IT="emulator/auth/iframe",CT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PT(a){const e=a.config;he(e.authDomain,a,"auth-domain-config-required");const n=e.emulator?ap(e,IT):`https://${a.config.authDomain}/${TT}`,i={apiKey:e.apiKey,appName:a.name,v:Bs},l=AT.get(a.config.apiHost);l&&(i.eid=l);const h=a._getFrameworks();return h.length&&(i.fw=h.join(",")),`${n}?${Al(i).slice(1)}`}async function RT(a){const e=await ET(a),n=sr().gapi;return he(n,a,"internal-error"),e.open({where:document.body,url:PT(a),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CT,dontclear:!0},i=>new Promise(async(l,h)=>{await i.restyle({setHideOnLeave:!1});const f=ir(a,"network-request-failed"),g=sr().setTimeout(()=>{h(f)},_T.get());function m(){sr().clearTimeout(g),l(i)}i.ping(m).then(m,()=>{h(f)})}))}/**
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
*/const NT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DT=500,xT=600,OT="_blank",LT="http://localhost";class xv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MT(a,e,n,i=DT,l=xT){const h=Math.max((window.screen.availHeight-l)/2,0).toString(),f=Math.max((window.screen.availWidth-i)/2,0).toString();let g="";const m=Object.assign(Object.assign({},NT),{width:i.toString(),height:l.toString(),top:h,left:f}),b=Bt().toLowerCase();n&&(g=y0(b)?OT:n),g0(b)&&(e=e||LT,m.scrollbars="yes");const k=Object.entries(m).reduce((V,[q,G])=>`${V}${q}=${G},`,"");if(a_(b)&&g!=="_self")return FT(e||"",g),new xv(null);const C=window.open(e||"",g,k);he(C,a,"popup-blocked");try{C.focus()}catch{}return new xv(C)}function FT(a,e){const n=document.createElement("a");n.href=a,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
*/const UT="__/auth/handler",jT="emulator/auth/handler",zT=encodeURIComponent("fac");async function Ov(a,e,n,i,l,h){he(a.config.authDomain,a,"auth-domain-config-required"),he(a.config.apiKey,a,"invalid-api-key");const f={apiKey:a.config.apiKey,appName:a.name,authType:n,redirectUrl:i,v:Bs,eventId:l};if(e instanceof C0){e.setDefaultLanguage(a.languageCode),f.providerId=e.providerId||"",Ek(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[k,C]of Object.entries({}))f[k]=C}if(e instanceof Nl){const k=e.getScopes().filter(C=>C!=="");k.length>0&&(f.scopes=k.join(","))}a.tenantId&&(f.tid=a.tenantId);const g=f;for(const k of Object.keys(g))g[k]===void 0&&delete g[k];const m=await a._getAppCheckToken(),b=m?`#${zT}=${encodeURIComponent(m)}`:"";return`${VT(a)}?${Al(g).slice(1)}${b}`}function VT({config:a}){return a.emulator?ap(a,jT):`https://${a.authDomain}/${UT}`}/**
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
*/const gf="webStorageSupport";class qT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=O0,this._completeRedirectFn=dT,this._overrideRedirectResult=uT}async _openPopup(e,n,i,l){var h;qr((h=this.eventManagers[e._key()])===null||h===void 0?void 0:h.manager,"_initialize() not called before _openPopup()");const f=await Ov(e,n,i,Pf(),l);return MT(e,f,up())}async _openRedirect(e,n,i,l){await this._originValidation(e);const h=await Ov(e,n,i,Pf(),l);return B_(h),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:h}=this.eventManagers[n];return l?Promise.resolve(l):(qr(h,"If manager is not set, promise should be"),h)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await RT(e),i=new pT(e);return n.register("authEvent",l=>(he(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:i.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gf,{type:gf},i=>{var l;const h=(l=i==null?void 0:i[0])===null||l===void 0?void 0:l[gf];h!==void 0&&n(!!h),Un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return k0()||m0()||sp()}}const $T=qT;var Lv="@firebase/auth",Mv="1.10.6";/**
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
*/class HT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
*/function BT(a){switch(a){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function WT(a){lr(new Fn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),h=e.getProvider("app-check-internal"),{apiKey:f,authDomain:g}=i.options;he(f&&!f.includes(":"),"invalid-api-key",{appName:i.name});const m={apiKey:f,authDomain:g,clientPlatform:a,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:E0(a)},b=new c_(i,l,h,m);return w_(b,n),b},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),lr(new Fn("auth-internal",e=>{const n=xi(e.getProvider("auth").getImmediate());return(i=>new HT(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(Lv,Mv,BT(a)),An(Lv,Mv,"esm2017")}/**
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
*/const KT=5*60,QT=Gb("authIdTokenMaxAge")||KT;let Fv=null;const GT=a=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>QT)return;const l=n==null?void 0:n.token;Fv!==l&&(Fv=l,await fetch(a,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function V0(a=tp()){const e=Di(a,"auth");if(e.isInitialized())return e.getImmediate();const n=b_(a,{popupRedirectResolver:$T,persistence:[eT,q_,O0]}),i=Gb("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const h=new URL(i,location.origin);if(location.origin===h.origin){const f=GT(h.toString());U_(n,f,()=>f(n.currentUser)),F_(n,g=>f(g))}}const l=Kb("auth");return l&&S_(n,`http://${l}`),n}function XT(){var a,e;return(e=(a=document.getElementsByTagName("head"))===null||a===void 0?void 0:a[0])!==null&&e!==void 0?e:document}h_({loadJS(a){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",a),i.onload=e,i.onerror=l=>{const h=ir("internal-error");h.customData=l,n(h)},i.type="text/javascript",i.charset="UTF-8",XT().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});WT("Browser");function JT(){const[a,e]=Ln.useState(""),[n,i]=Ln.useState(""),[l,h]=Ln.useState(null),f=V0(),g=async b=>{b.preventDefault(),h(null);try{await M_(f,a,n),alert("Kirjautuminen onnistui!")}catch(k){h(k.message)}},m=async b=>{b.preventDefault(),h(null);try{await L_(f,a,n),alert("Käyttäjä luotu!")}catch(k){h(k.message)}};return be.jsxs("div",{style:{maxWidth:400,margin:"auto"},children:[be.jsx("h2",{children:"Kirjaudu sisään"}),be.jsxs("form",{children:[be.jsx("input",{type:"email",placeholder:"Sähköposti",value:a,onChange:b=>e(b.target.value),required:!0,style:{width:"100%",padding:"8px",marginBottom:"8px"}}),be.jsx("input",{type:"password",placeholder:"Salasana",value:n,onChange:b=>i(b.target.value),required:!0,style:{width:"100%",padding:"8px",marginBottom:"8px"}}),l&&be.jsx("p",{style:{color:"red"},children:l}),be.jsx("button",{onClick:g,style:{padding:"8px",width:"100%",marginBottom:"8px"},children:"Kirjaudu sisään"}),be.jsx("button",{onClick:m,style:{padding:"8px",width:"100%"},children:"Rekisteröidy"})]})]})}var Uv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Aa,q0;(function(){var a;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,E){function T(){}T.prototype=E.prototype,N.D=E.prototype,N.prototype=new T,N.prototype.constructor=N,N.C=function(R,D,O){for(var I=Array(arguments.length-2),Rt=2;Rt<arguments.length;Rt++)I[Rt-2]=arguments[Rt];return E.prototype[D].apply(R,I)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(N,E,T){T||(T=0);var R=Array(16);if(typeof E=="string")for(var D=0;16>D;++D)R[D]=E.charCodeAt(T++)|E.charCodeAt(T++)<<8|E.charCodeAt(T++)<<16|E.charCodeAt(T++)<<24;else for(D=0;16>D;++D)R[D]=E[T++]|E[T++]<<8|E[T++]<<16|E[T++]<<24;E=N.g[0],T=N.g[1],D=N.g[2];var O=N.g[3],I=E+(O^T&(D^O))+R[0]+3614090360&4294967295;E=T+(I<<7&4294967295|I>>>25),I=O+(D^E&(T^D))+R[1]+3905402710&4294967295,O=E+(I<<12&4294967295|I>>>20),I=D+(T^O&(E^T))+R[2]+606105819&4294967295,D=O+(I<<17&4294967295|I>>>15),I=T+(E^D&(O^E))+R[3]+3250441966&4294967295,T=D+(I<<22&4294967295|I>>>10),I=E+(O^T&(D^O))+R[4]+4118548399&4294967295,E=T+(I<<7&4294967295|I>>>25),I=O+(D^E&(T^D))+R[5]+1200080426&4294967295,O=E+(I<<12&4294967295|I>>>20),I=D+(T^O&(E^T))+R[6]+2821735955&4294967295,D=O+(I<<17&4294967295|I>>>15),I=T+(E^D&(O^E))+R[7]+4249261313&4294967295,T=D+(I<<22&4294967295|I>>>10),I=E+(O^T&(D^O))+R[8]+1770035416&4294967295,E=T+(I<<7&4294967295|I>>>25),I=O+(D^E&(T^D))+R[9]+2336552879&4294967295,O=E+(I<<12&4294967295|I>>>20),I=D+(T^O&(E^T))+R[10]+4294925233&4294967295,D=O+(I<<17&4294967295|I>>>15),I=T+(E^D&(O^E))+R[11]+2304563134&4294967295,T=D+(I<<22&4294967295|I>>>10),I=E+(O^T&(D^O))+R[12]+1804603682&4294967295,E=T+(I<<7&4294967295|I>>>25),I=O+(D^E&(T^D))+R[13]+4254626195&4294967295,O=E+(I<<12&4294967295|I>>>20),I=D+(T^O&(E^T))+R[14]+2792965006&4294967295,D=O+(I<<17&4294967295|I>>>15),I=T+(E^D&(O^E))+R[15]+1236535329&4294967295,T=D+(I<<22&4294967295|I>>>10),I=E+(D^O&(T^D))+R[1]+4129170786&4294967295,E=T+(I<<5&4294967295|I>>>27),I=O+(T^D&(E^T))+R[6]+3225465664&4294967295,O=E+(I<<9&4294967295|I>>>23),I=D+(E^T&(O^E))+R[11]+643717713&4294967295,D=O+(I<<14&4294967295|I>>>18),I=T+(O^E&(D^O))+R[0]+3921069994&4294967295,T=D+(I<<20&4294967295|I>>>12),I=E+(D^O&(T^D))+R[5]+3593408605&4294967295,E=T+(I<<5&4294967295|I>>>27),I=O+(T^D&(E^T))+R[10]+38016083&4294967295,O=E+(I<<9&4294967295|I>>>23),I=D+(E^T&(O^E))+R[15]+3634488961&4294967295,D=O+(I<<14&4294967295|I>>>18),I=T+(O^E&(D^O))+R[4]+3889429448&4294967295,T=D+(I<<20&4294967295|I>>>12),I=E+(D^O&(T^D))+R[9]+568446438&4294967295,E=T+(I<<5&4294967295|I>>>27),I=O+(T^D&(E^T))+R[14]+3275163606&4294967295,O=E+(I<<9&4294967295|I>>>23),I=D+(E^T&(O^E))+R[3]+4107603335&4294967295,D=O+(I<<14&4294967295|I>>>18),I=T+(O^E&(D^O))+R[8]+1163531501&4294967295,T=D+(I<<20&4294967295|I>>>12),I=E+(D^O&(T^D))+R[13]+2850285829&4294967295,E=T+(I<<5&4294967295|I>>>27),I=O+(T^D&(E^T))+R[2]+4243563512&4294967295,O=E+(I<<9&4294967295|I>>>23),I=D+(E^T&(O^E))+R[7]+1735328473&4294967295,D=O+(I<<14&4294967295|I>>>18),I=T+(O^E&(D^O))+R[12]+2368359562&4294967295,T=D+(I<<20&4294967295|I>>>12),I=E+(T^D^O)+R[5]+4294588738&4294967295,E=T+(I<<4&4294967295|I>>>28),I=O+(E^T^D)+R[8]+2272392833&4294967295,O=E+(I<<11&4294967295|I>>>21),I=D+(O^E^T)+R[11]+1839030562&4294967295,D=O+(I<<16&4294967295|I>>>16),I=T+(D^O^E)+R[14]+4259657740&4294967295,T=D+(I<<23&4294967295|I>>>9),I=E+(T^D^O)+R[1]+2763975236&4294967295,E=T+(I<<4&4294967295|I>>>28),I=O+(E^T^D)+R[4]+1272893353&4294967295,O=E+(I<<11&4294967295|I>>>21),I=D+(O^E^T)+R[7]+4139469664&4294967295,D=O+(I<<16&4294967295|I>>>16),I=T+(D^O^E)+R[10]+3200236656&4294967295,T=D+(I<<23&4294967295|I>>>9),I=E+(T^D^O)+R[13]+681279174&4294967295,E=T+(I<<4&4294967295|I>>>28),I=O+(E^T^D)+R[0]+3936430074&4294967295,O=E+(I<<11&4294967295|I>>>21),I=D+(O^E^T)+R[3]+3572445317&4294967295,D=O+(I<<16&4294967295|I>>>16),I=T+(D^O^E)+R[6]+76029189&4294967295,T=D+(I<<23&4294967295|I>>>9),I=E+(T^D^O)+R[9]+3654602809&4294967295,E=T+(I<<4&4294967295|I>>>28),I=O+(E^T^D)+R[12]+3873151461&4294967295,O=E+(I<<11&4294967295|I>>>21),I=D+(O^E^T)+R[15]+530742520&4294967295,D=O+(I<<16&4294967295|I>>>16),I=T+(D^O^E)+R[2]+3299628645&4294967295,T=D+(I<<23&4294967295|I>>>9),I=E+(D^(T|~O))+R[0]+4096336452&4294967295,E=T+(I<<6&4294967295|I>>>26),I=O+(T^(E|~D))+R[7]+1126891415&4294967295,O=E+(I<<10&4294967295|I>>>22),I=D+(E^(O|~T))+R[14]+2878612391&4294967295,D=O+(I<<15&4294967295|I>>>17),I=T+(O^(D|~E))+R[5]+4237533241&4294967295,T=D+(I<<21&4294967295|I>>>11),I=E+(D^(T|~O))+R[12]+1700485571&4294967295,E=T+(I<<6&4294967295|I>>>26),I=O+(T^(E|~D))+R[3]+2399980690&4294967295,O=E+(I<<10&4294967295|I>>>22),I=D+(E^(O|~T))+R[10]+4293915773&4294967295,D=O+(I<<15&4294967295|I>>>17),I=T+(O^(D|~E))+R[1]+2240044497&4294967295,T=D+(I<<21&4294967295|I>>>11),I=E+(D^(T|~O))+R[8]+1873313359&4294967295,E=T+(I<<6&4294967295|I>>>26),I=O+(T^(E|~D))+R[15]+4264355552&4294967295,O=E+(I<<10&4294967295|I>>>22),I=D+(E^(O|~T))+R[6]+2734768916&4294967295,D=O+(I<<15&4294967295|I>>>17),I=T+(O^(D|~E))+R[13]+1309151649&4294967295,T=D+(I<<21&4294967295|I>>>11),I=E+(D^(T|~O))+R[4]+4149444226&4294967295,E=T+(I<<6&4294967295|I>>>26),I=O+(T^(E|~D))+R[11]+3174756917&4294967295,O=E+(I<<10&4294967295|I>>>22),I=D+(E^(O|~T))+R[2]+718787259&4294967295,D=O+(I<<15&4294967295|I>>>17),I=T+(O^(D|~E))+R[9]+3951481745&4294967295,N.g[0]=N.g[0]+E&4294967295,N.g[1]=N.g[1]+(D+(I<<21&4294967295|I>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+O&4294967295}i.prototype.u=function(N,E){E===void 0&&(E=N.length);for(var T=E-this.blockSize,R=this.B,D=this.h,O=0;O<E;){if(D==0)for(;O<=T;)l(this,N,O),O+=this.blockSize;if(typeof N=="string"){for(;O<E;)if(R[D++]=N.charCodeAt(O++),D==this.blockSize){l(this,R),D=0;break}}else for(;O<E;)if(R[D++]=N[O++],D==this.blockSize){l(this,R),D=0;break}}this.h=D,this.o+=E},i.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var E=1;E<N.length-8;++E)N[E]=0;var T=8*this.o;for(E=N.length-8;E<N.length;++E)N[E]=T&255,T/=256;for(this.u(N),N=Array(16),E=T=0;4>E;++E)for(var R=0;32>R;R+=8)N[T++]=this.g[E]>>>R&255;return N};function h(N,E){var T=g;return Object.prototype.hasOwnProperty.call(T,N)?T[N]:T[N]=E(N)}function f(N,E){this.h=E;for(var T=[],R=!0,D=N.length-1;0<=D;D--){var O=N[D]|0;R&&O==E||(T[D]=O,R=!1)}this.g=T}var g={};function m(N){return-128<=N&&128>N?h(N,function(E){return new f([E|0],0>E?-1:0)}):new f([N|0],0>N?-1:0)}function b(N){if(isNaN(N)||!isFinite(N))return C;if(0>N)return te(b(-N));for(var E=[],T=1,R=0;N>=T;R++)E[R]=N/T|0,T*=4294967296;return new f(E,0)}function k(N,E){if(N.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(N.charAt(0)=="-")return te(k(N.substring(1),E));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=b(Math.pow(E,8)),R=C,D=0;D<N.length;D+=8){var O=Math.min(8,N.length-D),I=parseInt(N.substring(D,D+O),E);8>O?(O=b(Math.pow(E,O)),R=R.j(O).add(b(I))):(R=R.j(T),R=R.add(b(I)))}return R}var C=m(0),V=m(1),q=m(16777216);a=f.prototype,a.m=function(){if(ae(this))return-te(this).m();for(var N=0,E=1,T=0;T<this.g.length;T++){var R=this.i(T);N+=(0<=R?R:4294967296+R)*E,E*=4294967296}return N},a.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(G(this))return"0";if(ae(this))return"-"+te(this).toString(N);for(var E=b(Math.pow(N,6)),T=this,R="";;){var D=Oe(T,E).g;T=Ae(T,D.j(E));var O=((0<T.g.length?T.g[0]:T.h)>>>0).toString(N);if(T=D,G(T))return O+R;for(;6>O.length;)O="0"+O;R=O+R}},a.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function G(N){if(N.h!=0)return!1;for(var E=0;E<N.g.length;E++)if(N.g[E]!=0)return!1;return!0}function ae(N){return N.h==-1}a.l=function(N){return N=Ae(this,N),ae(N)?-1:G(N)?0:1};function te(N){for(var E=N.g.length,T=[],R=0;R<E;R++)T[R]=~N.g[R];return new f(T,~N.h).add(V)}a.abs=function(){return ae(this)?te(this):this},a.add=function(N){for(var E=Math.max(this.g.length,N.g.length),T=[],R=0,D=0;D<=E;D++){var O=R+(this.i(D)&65535)+(N.i(D)&65535),I=(O>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);R=I>>>16,O&=65535,I&=65535,T[D]=I<<16|O}return new f(T,T[T.length-1]&-2147483648?-1:0)};function Ae(N,E){return N.add(te(E))}a.j=function(N){if(G(this)||G(N))return C;if(ae(this))return ae(N)?te(this).j(te(N)):te(te(this).j(N));if(ae(N))return te(this.j(te(N)));if(0>this.l(q)&&0>N.l(q))return b(this.m()*N.m());for(var E=this.g.length+N.g.length,T=[],R=0;R<2*E;R++)T[R]=0;for(R=0;R<this.g.length;R++)for(var D=0;D<N.g.length;D++){var O=this.i(R)>>>16,I=this.i(R)&65535,Rt=N.i(D)>>>16,nt=N.i(D)&65535;T[2*R+2*D]+=I*nt,Se(T,2*R+2*D),T[2*R+2*D+1]+=O*nt,Se(T,2*R+2*D+1),T[2*R+2*D+1]+=I*Rt,Se(T,2*R+2*D+1),T[2*R+2*D+2]+=O*Rt,Se(T,2*R+2*D+2)}for(R=0;R<E;R++)T[R]=T[2*R+1]<<16|T[2*R];for(R=E;R<2*E;R++)T[R]=0;return new f(T,0)};function Se(N,E){for(;(N[E]&65535)!=N[E];)N[E+1]+=N[E]>>>16,N[E]&=65535,E++}function ye(N,E){this.g=N,this.h=E}function Oe(N,E){if(G(E))throw Error("division by zero");if(G(N))return new ye(C,C);if(ae(N))return E=Oe(te(N),E),new ye(te(E.g),te(E.h));if(ae(E))return E=Oe(N,te(E)),new ye(te(E.g),E.h);if(30<N.g.length){if(ae(N)||ae(E))throw Error("slowDivide_ only works with positive integers.");for(var T=V,R=E;0>=R.l(N);)T=pe(T),R=pe(R);var D=Re(T,1),O=Re(R,1);for(R=Re(R,2),T=Re(T,2);!G(R);){var I=O.add(R);0>=I.l(N)&&(D=D.add(T),O=I),R=Re(R,1),T=Re(T,1)}return E=Ae(N,D.j(E)),new ye(D,E)}for(D=C;0<=N.l(E);){for(T=Math.max(1,Math.floor(N.m()/E.m())),R=Math.ceil(Math.log(T)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),O=b(T),I=O.j(E);ae(I)||0<I.l(N);)T-=R,O=b(T),I=O.j(E);G(O)&&(O=V),D=D.add(O),N=Ae(N,I)}return new ye(D,N)}a.A=function(N){return Oe(this,N).h},a.and=function(N){for(var E=Math.max(this.g.length,N.g.length),T=[],R=0;R<E;R++)T[R]=this.i(R)&N.i(R);return new f(T,this.h&N.h)},a.or=function(N){for(var E=Math.max(this.g.length,N.g.length),T=[],R=0;R<E;R++)T[R]=this.i(R)|N.i(R);return new f(T,this.h|N.h)},a.xor=function(N){for(var E=Math.max(this.g.length,N.g.length),T=[],R=0;R<E;R++)T[R]=this.i(R)^N.i(R);return new f(T,this.h^N.h)};function pe(N){for(var E=N.g.length+1,T=[],R=0;R<E;R++)T[R]=N.i(R)<<1|N.i(R-1)>>>31;return new f(T,N.h)}function Re(N,E){var T=E>>5;E%=32;for(var R=N.g.length-T,D=[],O=0;O<R;O++)D[O]=0<E?N.i(O+T)>>>E|N.i(O+T+1)<<32-E:N.i(O+T);return new f(D,N.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,q0=i,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=b,f.fromString=k,Aa=f}).apply(typeof Uv<"u"?Uv:typeof self<"u"?self:typeof window<"u"?window:{});var lc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $0,cl,H0,vc,xf,B0,W0,K0;(function(){var a,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,y){return u==Array.prototype||u==Object.prototype||(u[p]=y.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof lc=="object"&&lc];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var i=n(this);function l(u,p){if(p)e:{var y=i;u=u.split(".");for(var S=0;S<u.length-1;S++){var L=u[S];if(!(L in y))break e;y=y[L]}u=u[u.length-1],S=y[u],p=p(S),p!=S&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}function h(u,p){u instanceof String&&(u+="");var y=0,S=!1,L={next:function(){if(!S&&y<u.length){var z=y++;return{value:p(z,u[z]),done:!1}}return S=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}l("Array.prototype.values",function(u){return u||function(){return h(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},g=this||self;function m(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function b(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function k(u,p,y){return u.call.apply(u.bind,arguments)}function C(u,p,y){if(!u)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,S),u.apply(p,L)}}return function(){return u.apply(p,arguments)}}function V(u,p,y){return V=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?k:C,V.apply(null,arguments)}function q(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var S=y.slice();return S.push.apply(S,arguments),u.apply(this,S)}}function G(u,p){function y(){}y.prototype=p.prototype,u.aa=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(S,L,z){for(var J=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)J[Me-2]=arguments[Me];return p.prototype[L].apply(S,J)}}function ae(u){const p=u.length;if(0<p){const y=Array(p);for(let S=0;S<p;S++)y[S]=u[S];return y}return[]}function te(u,p){for(let y=1;y<arguments.length;y++){const S=arguments[y];if(m(S)){const L=u.length||0,z=S.length||0;u.length=L+z;for(let J=0;J<z;J++)u[L+J]=S[J]}else u.push(S)}}class Ae{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function Se(u){return/^[\s\xa0]*$/.test(u)}function ye(){var u=g.navigator;return u&&(u=u.userAgent)?u:""}function Oe(u){return Oe[" "](u),u}Oe[" "]=function(){};var pe=ye().indexOf("Gecko")!=-1&&!(ye().toLowerCase().indexOf("webkit")!=-1&&ye().indexOf("Edge")==-1)&&!(ye().indexOf("Trident")!=-1||ye().indexOf("MSIE")!=-1)&&ye().indexOf("Edge")==-1;function Re(u,p,y){for(const S in u)p.call(y,u[S],S,u)}function N(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function E(u){const p={};for(const y in u)p[y]=u[y];return p}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(u,p){let y,S;for(let L=1;L<arguments.length;L++){S=arguments[L];for(y in S)u[y]=S[y];for(let z=0;z<T.length;z++)y=T[z],Object.prototype.hasOwnProperty.call(S,y)&&(u[y]=S[y])}}function D(u){var p=1;u=u.split(":");const y=[];for(;0<p&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function O(u){g.setTimeout(()=>{throw u},0)}function I(){var u=Ue;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class Rt{constructor(){this.h=this.g=null}add(p,y){const S=nt.get();S.set(p,y),this.h?this.h.next=S:this.g=S,this.h=S}}var nt=new Ae(()=>new $,u=>u.reset());class ${constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Y,se=!1,Ue=new Rt,A=()=>{const u=g.Promise.resolve(void 0);Y=()=>{u.then(Q)}};var Q=()=>{for(var u;u=I();){try{u.h.call(u.g)}catch(y){O(y)}var p=nt;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}se=!1};function Z(){this.s=this.s,this.C=this.C}Z.prototype.s=!1,Z.prototype.ma=function(){this.s||(this.s=!0,this.N())},Z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function X(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}X.prototype.h=function(){this.defaultPrevented=!0};var oe=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};g.addEventListener("test",y,p),g.removeEventListener("test",y,p)}catch{}return u}();function Ee(u,p){if(X.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,S=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(pe){e:{try{Oe(p.nodeName);var L=!0;break e}catch{}L=!1}L||(p=null)}}else y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement);this.relatedTarget=p,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:ge[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ee.aa.h.call(this)}}G(Ee,X);var ge={2:"touch",3:"pen",4:"mouse"};Ee.prototype.h=function(){Ee.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Et="closure_listenable_"+(1e6*Math.random()|0),Xe=0;function Vn(u,p,y,S,L){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!S,this.ha=L,this.key=++Xe,this.da=this.fa=!1}function Hr(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function hr(u){this.src=u,this.g={},this.h=0}hr.prototype.add=function(u,p,y,S,L){var z=u.toString();u=this.g[z],u||(u=this.g[z]=[],this.h++);var J=ja(u,p,S,L);return-1<J?(p=u[J],y||(p.fa=!1)):(p=new Vn(p,this.src,z,!!S,L),p.fa=y,u.push(p)),p};function Ua(u,p){var y=p.type;if(y in u.g){var S=u.g[y],L=Array.prototype.indexOf.call(S,p,void 0),z;(z=0<=L)&&Array.prototype.splice.call(S,L,1),z&&(Hr(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function ja(u,p,y,S){for(var L=0;L<u.length;++L){var z=u[L];if(!z.da&&z.listener==p&&z.capture==!!y&&z.ha==S)return L}return-1}var za="closure_lm_"+(1e6*Math.random()|0),Js={};function Fl(u,p,y,S,L){if(Array.isArray(p)){for(var z=0;z<p.length;z++)Fl(u,p[z],y,S,L);return null}return y=Ul(y),u&&u[Et]?u.K(p,y,b(S)?!!S.capture:!1,L):pn(u,p,y,!1,S,L)}function pn(u,p,y,S,L,z){if(!p)throw Error("Invalid event type");var J=b(L)?!!L.capture:!!L,Me=Mi(u);if(Me||(u[za]=Me=new hr(u)),y=Me.add(p,y,S,J,z),y.proxy)return y;if(S=sh(),y.proxy=S,S.src=u,S.listener=y,u.addEventListener)oe||(L=J),L===void 0&&(L=!1),u.addEventListener(p.toString(),S,L);else if(u.attachEvent)u.attachEvent(Va(p.toString()),S);else if(u.addListener&&u.removeListener)u.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return y}function sh(){function u(y){return p.call(u.src,u.listener,y)}const p=oh;return u}function Ys(u,p,y,S,L){if(Array.isArray(p))for(var z=0;z<p.length;z++)Ys(u,p[z],y,S,L);else S=b(S)?!!S.capture:!!S,y=Ul(y),u&&u[Et]?(u=u.i,p=String(p).toString(),p in u.g&&(z=u.g[p],y=ja(z,y,S,L),-1<y&&(Hr(z[y]),Array.prototype.splice.call(z,y,1),z.length==0&&(delete u.g[p],u.h--)))):u&&(u=Mi(u))&&(p=u.g[p.toString()],u=-1,p&&(u=ja(p,y,S,L)),(y=-1<u?p[u]:null)&&Li(y))}function Li(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Et])Ua(p.i,u);else{var y=u.type,S=u.proxy;p.removeEventListener?p.removeEventListener(y,S,u.capture):p.detachEvent?p.detachEvent(Va(y),S):p.addListener&&p.removeListener&&p.removeListener(S),(y=Mi(p))?(Ua(y,u),y.h==0&&(y.src=null,p[za]=null)):Hr(u)}}}function Va(u){return u in Js?Js[u]:Js[u]="on"+u}function oh(u,p){if(u.da)u=!0;else{p=new Ee(p,this);var y=u.listener,S=u.ha||u.src;u.fa&&Li(u),u=y.call(S,p)}return u}function Mi(u){return u=u[za],u instanceof hr?u:null}var Zs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ul(u){return typeof u=="function"?u:(u[Zs]||(u[Zs]=function(p){return u.handleEvent(p)}),u[Zs])}function rt(){Z.call(this),this.i=new hr(this),this.M=this,this.F=null}G(rt,Z),rt.prototype[Et]=!0,rt.prototype.removeEventListener=function(u,p,y,S){Ys(this,u,p,y,S)};function qe(u,p){var y,S=u.F;if(S)for(y=[];S;S=S.F)y.push(S);if(u=u.M,S=p.type||p,typeof p=="string")p=new X(p,u);else if(p instanceof X)p.target=p.target||u;else{var L=p;p=new X(S,u),R(p,L)}if(L=!0,y)for(var z=y.length-1;0<=z;z--){var J=p.g=y[z];L=rn(J,S,!0,p)&&L}if(J=p.g=u,L=rn(J,S,!0,p)&&L,L=rn(J,S,!1,p)&&L,y)for(z=0;z<y.length;z++)J=p.g=y[z],L=rn(J,S,!1,p)&&L}rt.prototype.N=function(){if(rt.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var y=u.g[p],S=0;S<y.length;S++)Hr(y[S]);delete u.g[p],u.h--}}this.F=null},rt.prototype.K=function(u,p,y,S){return this.i.add(String(u),p,!1,y,S)},rt.prototype.L=function(u,p,y,S){return this.i.add(String(u),p,!0,y,S)};function rn(u,p,y,S){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var L=!0,z=0;z<p.length;++z){var J=p[z];if(J&&!J.da&&J.capture==y){var Me=J.listener,vt=J.ha||J.src;J.fa&&Ua(u.i,J),L=Me.call(vt,S)!==!1&&L}}return L&&!S.defaultPrevented}function jt(u,p,y){if(typeof u=="function")y&&(u=V(u,y));else if(u&&typeof u.handleEvent=="function")u=V(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:g.setTimeout(u,p||0)}function jl(u){u.g=jt(()=>{u.g=null,u.i&&(u.i=!1,jl(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class lh extends Z{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:jl(this)}N(){super.N(),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qa(u){Z.call(this),this.h=u,this.g={}}G(qa,Z);var $a=[];function Ha(u){Re(u.g,function(p,y){this.g.hasOwnProperty(y)&&Li(p)},u),u.g={}}qa.prototype.N=function(){qa.aa.N.call(this),Ha(this)},qa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pn=g.JSON.stringify,Fi=g.JSON.parse,Ba=class{stringify(u){return g.JSON.stringify(u,void 0)}parse(u){return g.JSON.parse(u,void 0)}};function eo(){}eo.prototype.h=null;function to(u){return u.h||(u.h=u.i())}function no(){}var dr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fr(){X.call(this,"d")}G(fr,X);function ro(){X.call(this,"c")}G(ro,X);var qn={},ao=null;function Br(){return ao=ao||new rt}qn.La="serverreachability";function Ui(u){X.call(this,qn.La,u)}G(Ui,X);function Wr(u){const p=Br();qe(p,new Ui(p))}qn.STAT_EVENT="statevent";function zl(u,p){X.call(this,qn.STAT_EVENT,u),this.stat=p}G(zl,X);function Ye(u){const p=Br();qe(p,new zl(p,u))}qn.Ma="timingevent";function mt(u,p){X.call(this,qn.Ma,u),this.size=p}G(mt,X);function dt(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return g.setTimeout(function(){u()},p)}function gn(){this.g=!0}gn.prototype.xa=function(){this.g=!1};function io(u,p,y,S,L,z){u.info(function(){if(u.g)if(z)for(var J="",Me=z.split("&"),vt=0;vt<Me.length;vt++){var je=Me[vt].split("=");if(1<je.length){var Tt=je[0];je=je[1];var Dt=Tt.split("_");J=2<=Dt.length&&Dt[1]=="type"?J+(Tt+"="+je+"&"):J+(Tt+"=redacted&")}}else J=null;else J=z;return"XMLHTTP REQ ("+S+") [attempt "+L+"]: "+p+`
`+y+`
`+J})}function uh(u,p,y,S,L,z,J){u.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+L+"]: "+p+`
`+y+`
`+z+" "+J})}function Kr(u,p,y,S){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Wa(u,y)+(S?" "+S:"")})}function Vl(u,p){u.info(function(){return"TIMEOUT: "+p})}gn.prototype.info=function(){};function Wa(u,p){if(!u.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var S=y[u];if(!(2>S.length)){var L=S[1];if(Array.isArray(L)&&!(1>L.length)){var z=L[0];if(z!="noop"&&z!="stop"&&z!="close")for(var J=1;J<L.length;J++)L[J]=""}}}}return Pn(y)}catch{return p}}var Qr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},pr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$n;function Hn(){}G(Hn,eo),Hn.prototype.g=function(){return new XMLHttpRequest},Hn.prototype.i=function(){return{}},$n=new Hn;function Wt(u,p,y,S){this.j=u,this.i=p,this.l=y,this.R=S||1,this.U=new qa(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ot}function ot(){this.i=null,this.g="",this.h=!1}var so={},ji={};function Rn(u,p,y){u.L=1,u.v=Ja(an(p)),u.m=y,u.P=!0,gr(u,null)}function gr(u,p){u.F=Date.now(),Ka(u),u.A=an(u.v);var y=u.A,S=u.R;Array.isArray(S)||(S=[String(S)]),fo(y.i,"t",S),u.C=0,y=u.j.J,u.h=new ot,u.g=ru(u.j,y?p:null,!u.m),0<u.O&&(u.M=new lh(V(u.Y,u,u.g),u.O)),p=u.U,y=u.g,S=u.ca;var L="readystatechange";Array.isArray(L)||(L&&($a[0]=L.toString()),L=$a);for(var z=0;z<L.length;z++){var J=Fl(y,L[z],S||p.handleEvent,!1,p.h||p);if(!J)break;p.g[J.key]=J}p=u.H?E(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),Wr(),io(u.i,u.u,u.A,u.l,u.R,u.m)}Wt.prototype.ca=function(u){u=u.target;const p=this.M;p&&bn(u)==3?p.j():this.Y(u)},Wt.prototype.Y=function(u){try{if(u==this.g)e:{const Dt=bn(this.g);var p=this.g.Ba();const Er=this.g.Z();if(!(3>Dt)&&(Dt!=3||this.g&&(this.h.h||this.g.oa()||Gl(this.g)))){this.J||Dt!=4||p==7||(p==8||0>=Er?Wr(3):Wr(2)),Gr(this);var y=this.g.Z();this.X=y;t:if(ql(this)){var S=Gl(this.g);u="";var L=S.length,z=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nt(this),Bn(this);var J="";break t}this.h.i=new g.TextDecoder}for(p=0;p<L;p++)this.h.h=!0,u+=this.h.i.decode(S[p],{stream:!(z&&p==L-1)});S.length=0,this.h.g+=u,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=y==200,uh(this.i,this.u,this.A,this.l,this.R,Dt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,vt=this.g;if((Me=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Se(Me)){var je=Me;break t}}je=null}if(y=je)Kr(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qa(this,y);else{this.o=!1,this.s=3,Ye(12),Nt(this),Bn(this);break e}}if(this.P){y=!0;let xt;for(;!this.J&&this.C<J.length;)if(xt=$l(this,J),xt==ji){Dt==4&&(this.s=4,Ye(14),y=!1),Kr(this.i,this.l,null,"[Incomplete Response]");break}else if(xt==so){this.s=4,Ye(15),Kr(this.i,this.l,J,"[Invalid Chunk]"),y=!1;break}else Kr(this.i,this.l,xt,null),Qa(this,xt);if(ql(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Dt!=4||J.length!=0||this.h.h||(this.s=1,Ye(16),y=!1),this.o=this.o&&y,!y)Kr(this.i,this.l,J,"[Invalid Chunked Response]"),Nt(this),Bn(this);else if(0<J.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),ii(Tt),Tt.M=!0,Ye(11))}}else Kr(this.i,this.l,J,null),Qa(this,J);Dt==4&&Nt(this),this.o&&!this.J&&(Dt==4?eu(this.j,this):(this.o=!1,Ka(this)))}else ph(this.g),y==400&&0<J.indexOf("Unknown SID")?(this.s=3,Ye(12)):(this.s=0,Ye(13)),Nt(this),Bn(this)}}}catch{}finally{}};function ql(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function $l(u,p){var y=u.C,S=p.indexOf(`
`,y);return S==-1?ji:(y=Number(p.substring(y,S)),isNaN(y)?so:(S+=1,S+y>p.length?ji:(p=p.slice(S,S+y),u.C=S+y,p)))}Wt.prototype.cancel=function(){this.J=!0,Nt(this)};function Ka(u){u.S=Date.now()+u.I,Hl(u,u.I)}function Hl(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=dt(V(u.ba,u),p)}function Gr(u){u.B&&(g.clearTimeout(u.B),u.B=null)}Wt.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Vl(this.i,this.A),this.L!=2&&(Wr(),Ye(17)),Nt(this),this.s=2,Bn(this)):Hl(this,this.S-u)};function Bn(u){u.j.G==0||u.J||eu(u.j,u)}function Nt(u){Gr(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Ha(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function Qa(u,p){try{var y=u.j;if(y.G!=0&&(y.g==u||oo(y.h,u))){if(!u.K&&oo(y.h,u)&&y.G==3){try{var S=y.Da.g.parse(p)}catch{S=null}if(Array.isArray(S)&&S.length==3){var L=S;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)Ji(y),Gi(y);else break e;vo(y),Ye(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=dt(V(y.Za,y),6e3));if(1>=Vi(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else kr(y,11)}else if((u.K||y.g==u)&&Ji(y),!Se(p))for(L=y.Da.g.parse(p),p=0;p<L.length;p++){let je=L[p];if(y.T=je[0],je=je[1],y.G==2)if(je[0]=="c"){y.K=je[1],y.ia=je[2];const Tt=je[3];Tt!=null&&(y.la=Tt,y.j.info("VER="+y.la));const Dt=je[4];Dt!=null&&(y.Aa=Dt,y.j.info("SVER="+y.Aa));const Er=je[5];Er!=null&&typeof Er=="number"&&0<Er&&(S=1.5*Er,y.L=S,y.j.info("backChannelRequestTimeoutMs_="+S)),S=y;const xt=u.g;if(xt){const Yn=xt.g?xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yn){var z=S.h;z.g||Yn.indexOf("spdy")==-1&&Yn.indexOf("quic")==-1&&Yn.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(qi(z,z.h),z.h=null))}if(S.D){const wo=xt.g?xt.g.getResponseHeader("X-HTTP-Session-Id"):null;wo&&(S.ya=wo,Be(S.I,S.D,wo))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),S=y;var J=u;if(S.qa=nu(S,S.J?S.ia:null,S.W),J.K){Kt(S.h,J);var Me=J,vt=S.L;vt&&(Me.I=vt),Me.B&&(Gr(Me),Ka(Me)),S.g=J}else Yl(S);0<y.i.length&&Xi(y)}else je[0]!="stop"&&je[0]!="close"||kr(y,7);else y.G==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?kr(y,7):mo(y):je[0]!="noop"&&y.l&&y.l.ta(je),y.v=0)}}Wr(4)}catch{}}var Bl=class{constructor(u,p){this.g=u,this.map=p}};function mr(u){this.l=u||10,g.PerformanceNavigationTiming?(u=g.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(g.chrome&&g.chrome.loadTimes&&g.chrome.loadTimes()&&g.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function zi(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Vi(u){return u.h?1:u.g?u.g.size:0}function oo(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function qi(u,p){u.g?u.g.add(p):u.h=p}function Kt(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}mr.prototype.cancel=function(){if(this.i=lo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function lo(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.D);return p}return ae(u.i)}function ch(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(m(u)){for(var p=[],y=u.length,S=0;S<y;S++)p.push(u[S]);return p}p=[],y=0;for(S in u)p[y++]=u[S];return p}function $i(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(m(u)||typeof u=="string"){var p=[];u=u.length;for(var y=0;y<u;y++)p.push(y);return p}p=[],y=0;for(const S in u)p[y++]=S;return p}}}function uo(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(m(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var y=$i(u),S=ch(u),L=S.length,z=0;z<L;z++)p.call(void 0,S[z],y&&y[z],u)}var Ga=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hh(u,p){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var S=u[y].indexOf("="),L=null;if(0<=S){var z=u[y].substring(0,S);L=u[y].substring(S+1)}else z=u[y];p(z,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function yt(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof yt){this.h=u.h,Xa(this,u.j),this.o=u.o,this.g=u.g,Xr(this,u.s),this.l=u.l;var p=u.i,y=new vr;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),yr(this,y),this.m=u.m}else u&&(p=String(u).match(Ga))?(this.h=!1,Xa(this,p[1]||"",!0),this.o=mn(p[2]||""),this.g=mn(p[3]||"",!0),Xr(this,p[4]),this.l=mn(p[5]||"",!0),yr(this,p[6]||"",!0),this.m=mn(p[7]||"")):(this.h=!1,this.i=new vr(null,this.h))}yt.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Ya(p,co,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Ya(p,co,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Ya(y,y.charAt(0)=="/"?dh:ho,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Ya(y,Hi)),u.join("")};function an(u){return new yt(u)}function Xa(u,p,y){u.j=y?mn(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Xr(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function yr(u,p,y){p instanceof vr?(u.i=p,Kl(u.i,u.h)):(y||(p=Ya(p,fh)),u.i=new vr(p,u.h))}function Be(u,p,y){u.i.set(p,y)}function Ja(u){return Be(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function mn(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ya(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,Wl),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Wl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var co=/[#\/\?@]/g,ho=/[#\?:]/g,dh=/[#\?]/g,fh=/[#\?@]/g,Hi=/#/g;function vr(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function yn(u){u.g||(u.g=new Map,u.h=0,u.i&&hh(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}a=vr.prototype,a.add=function(u,p){yn(this),this.i=null,u=Wn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function br(u,p){yn(u),p=Wn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function wr(u,p){return yn(u),p=Wn(u,p),u.g.has(p)}a.forEach=function(u,p){yn(this),this.g.forEach(function(y,S){y.forEach(function(L){u.call(p,L,S,this)},this)},this)},a.na=function(){yn(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let S=0;S<p.length;S++){const L=u[S];for(let z=0;z<L.length;z++)y.push(p[S])}return y},a.V=function(u){yn(this);let p=[];if(typeof u=="string")wr(this,u)&&(p=p.concat(this.g.get(Wn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)p=p.concat(u[y])}return p},a.set=function(u,p){return yn(this),this.i=null,u=Wn(this,u),wr(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},a.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function fo(u,p,y){br(u,p),0<y.length&&(u.i=null,u.g.set(Wn(u,p),ae(y)),u.h+=y.length)}a.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var S=p[y];const z=encodeURIComponent(String(S)),J=this.V(S);for(S=0;S<J.length;S++){var L=z;J[S]!==""&&(L+="="+encodeURIComponent(String(J[S]))),u.push(L)}}return this.i=u.join("&")};function Wn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Kl(u,p){p&&!u.j&&(yn(u),u.i=null,u.g.forEach(function(y,S){var L=S.toLowerCase();S!=L&&(br(this,S),fo(this,L,y))},u)),u.j=p}function Za(u,p){const y=new gn;if(g.Image){const S=new Image;S.onload=q(vn,y,"TestLoadImage: loaded",!0,p,S),S.onerror=q(vn,y,"TestLoadImage: error",!1,p,S),S.onabort=q(vn,y,"TestLoadImage: abort",!1,p,S),S.ontimeout=q(vn,y,"TestLoadImage: timeout",!1,p,S),g.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=u}else p(!1)}function Nn(u,p){const y=new gn,S=new AbortController,L=setTimeout(()=>{S.abort(),vn(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:S.signal}).then(z=>{clearTimeout(L),z.ok?vn(y,"TestPingServer: ok",!0,p):vn(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),vn(y,"TestPingServer: error",!1,p)})}function vn(u,p,y,S,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),S(y)}catch{}}function ei(){this.g=new Ba}function Kn(u,p,y){const S=y||"";try{uo(u,function(L,z){let J=L;b(L)&&(J=Pn(L)),p.push(S+z+"="+encodeURIComponent(J))})}catch(L){throw p.push(S+"type="+encodeURIComponent("_badmap")),L}}function Jr(u){this.l=u.Ub||null,this.j=u.eb||!1}G(Jr,eo),Jr.prototype.g=function(){return new Sr(this.l,this.j)},Jr.prototype.i=function(u){return function(){return u}}({});function Sr(u,p){rt.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}G(Sr,rt),a=Sr.prototype,a.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Gn(this)},a.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||g).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},a.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qn(this)),this.readyState=0},a.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Gn(this)),this.g&&(this.readyState=3,Gn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof g.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;po(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function po(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}a.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Qn(this):Gn(this),this.readyState==3&&po(this)}},a.Ra=function(u){this.g&&(this.response=this.responseText=u,Qn(this))},a.Qa=function(u){this.g&&(this.response=u,Qn(this))},a.ga=function(){this.g&&Qn(this)};function Qn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Gn(u)}a.setRequestHeader=function(u,p){this.u.append(u,p)},a.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},a.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function Gn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Sr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function go(u){let p="";return Re(u,function(y,S){p+=S,p+=":",p+=y,p+=`\r
`}),p}function _t(u,p,y){e:{for(S in y){var S=!1;break e}S=!0}S||(y=go(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):Be(u,p,y))}function Ve(u){rt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}G(Ve,rt);var Bi=/^https?$/i,ti=["POST","PUT"];a=Ve.prototype,a.Ha=function(u){this.J=u},a.ea=function(u,p,y,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$n.g(),this.v=this.o?to(this.o):to($n),this.g.onreadystatechange=V(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(z){Ql(this,z);return}if(u=y||"",y=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var L in S)y.set(L,S[L]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const z of S.keys())y.set(z,S.get(z));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(y.keys()).find(z=>z.toLowerCase()=="content-type"),L=g.FormData&&u instanceof g.FormData,!(0<=Array.prototype.indexOf.call(ti,p,void 0))||S||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,J]of y)this.g.setRequestHeader(z,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ni(this),this.u=!0,this.g.send(u),this.u=!1}catch(z){Ql(this,z)}};function Ql(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Wi(u),Xn(u)}function Wi(u){u.A||(u.A=!0,qe(u,"complete"),qe(u,"error"))}a.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,qe(this,"complete"),qe(this,"abort"),Xn(this))},a.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xn(this,!0)),Ve.aa.N.call(this)},a.Ea=function(){this.s||(this.B||this.u||this.j?Ki(this):this.bb())},a.bb=function(){Ki(this)};function Ki(u){if(u.h&&typeof f<"u"&&(!u.v[1]||bn(u)!=4||u.Z()!=2)){if(u.u&&bn(u)==4)jt(u.Ea,0,u);else if(qe(u,"readystatechange"),bn(u)==4){u.h=!1;try{const J=u.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var S;if(S=J===0){var L=String(u.D).match(Ga)[1]||null;!L&&g.self&&g.self.location&&(L=g.self.location.protocol.slice(0,-1)),S=!Bi.test(L?L.toLowerCase():"")}y=S}if(y)qe(u,"complete"),qe(u,"success");else{u.m=6;try{var z=2<bn(u)?u.g.statusText:""}catch{z=""}u.l=z+" ["+u.Z()+"]",Wi(u)}}finally{Xn(u)}}}}function Xn(u,p){if(u.g){ni(u);const y=u.g,S=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||qe(u,"ready");try{y.onreadystatechange=S}catch{}}}function ni(u){u.I&&(g.clearTimeout(u.I),u.I=null)}a.isActive=function(){return!!this.g};function bn(u){return u.g?u.g.readyState:0}a.Z=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}},a.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},a.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Fi(p)}};function Gl(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function ph(u){const p={};u=(u.g&&2<=bn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<u.length;S++){if(Se(u[S]))continue;var y=D(u[S]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const z=p[L]||[];p[L]=z,z.push(y)}N(p,function(S){return S.join(", ")})}a.Ba=function(){return this.m},a.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ri(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function Qi(u){this.Aa=0,this.i=[],this.j=new gn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ri("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ri("baseRetryDelayMs",5e3,u),this.cb=ri("retryDelaySeedMs",1e4,u),this.Wa=ri("forwardChannelMaxRetries",2,u),this.wa=ri("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new mr(u&&u.concurrentRequestLimit),this.Da=new ei,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}a=Qi.prototype,a.la=8,a.G=1,a.connect=function(u,p,y,S){Ye(0),this.W=u,this.H=p||{},y&&S!==void 0&&(this.H.OSID=y,this.H.OAID=S),this.F=this.X,this.I=nu(this,null,this.W),Xi(this)};function mo(u){if(Xl(u),u.G==3){var p=u.U++,y=an(u.I);if(Be(y,"SID",u.K),Be(y,"RID",p),Be(y,"TYPE","terminate"),ai(u,y),p=new Wt(u,u.j,p),p.L=2,p.v=Ja(an(y)),y=!1,g.navigator&&g.navigator.sendBeacon)try{y=g.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&g.Image&&(new Image().src=p.v,y=!0),y||(p.g=ru(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Ka(p)}tu(u)}function Gi(u){u.g&&(ii(u),u.g.cancel(),u.g=null)}function Xl(u){Gi(u),u.u&&(g.clearTimeout(u.u),u.u=null),Ji(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&g.clearTimeout(u.s),u.s=null)}function Xi(u){if(!zi(u.h)&&!u.s){u.s=!0;var p=u.Ga;Y||A(),se||(Y(),se=!0),Ue.add(p,u),u.B=0}}function gh(u,p){return Vi(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=dt(V(u.Ga,u,p),bo(u,u.B)),u.B++,!0)}a.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const L=new Wt(this,this.j,u);let z=this.o;if(this.S&&(z?(z=E(z),R(z,this.S)):z=this.S),this.m!==null||this.O||(L.H=z,z=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var S=this.i[y];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(p+=S,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=Jl(this,L,p),y=an(this.I),Be(y,"RID",u),Be(y,"CVER",22),this.D&&Be(y,"X-HTTP-Session-Id",this.D),ai(this,y),z&&(this.O?p="headers="+encodeURIComponent(String(go(z)))+"&"+p:this.m&&_t(y,this.m,z)),qi(this.h,L),this.Ua&&Be(y,"TYPE","init"),this.P?(Be(y,"$req",p),Be(y,"SID","null"),L.T=!0,Rn(L,y,null)):Rn(L,y,p),this.G=2}}else this.G==3&&(u?yo(this,u):this.i.length==0||zi(this.h)||yo(this))};function yo(u,p){var y;p?y=p.l:y=u.U++;const S=an(u.I);Be(S,"SID",u.K),Be(S,"RID",y),Be(S,"AID",u.T),ai(u,S),u.m&&u.o&&_t(S,u.m,u.o),y=new Wt(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),p&&(u.i=p.D.concat(u.i)),p=Jl(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),qi(u.h,y),Rn(y,S,p)}function ai(u,p){u.H&&Re(u.H,function(y,S){Be(p,S,y)}),u.l&&uo({},function(y,S){Be(p,S,y)})}function Jl(u,p,y){y=Math.min(u.i.length,y);var S=u.l?V(u.l.Na,u.l,u):null;e:{var L=u.i;let z=-1;for(;;){const J=["count="+y];z==-1?0<y?(z=L[0].g,J.push("ofs="+z)):z=0:J.push("ofs="+z);let Me=!0;for(let vt=0;vt<y;vt++){let je=L[vt].g;const Tt=L[vt].map;if(je-=z,0>je)z=Math.max(0,L[vt].g-100),Me=!1;else try{Kn(Tt,J,"req"+je+"_")}catch{S&&S(Tt)}}if(Me){S=J.join("&");break e}}}return u=u.i.splice(0,y),p.D=u,S}function Yl(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;Y||A(),se||(Y(),se=!0),Ue.add(p,u),u.v=0}}function vo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=dt(V(u.Fa,u),bo(u,u.v)),u.v++,!0)}a.Fa=function(){if(this.u=null,Zl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=dt(V(this.ab,this),u)}},a.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ye(10),Gi(this),Zl(this))};function ii(u){u.A!=null&&(g.clearTimeout(u.A),u.A=null)}function Zl(u){u.g=new Wt(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=an(u.qa);Be(p,"RID","rpc"),Be(p,"SID",u.K),Be(p,"AID",u.T),Be(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&Be(p,"TO",u.ja),Be(p,"TYPE","xmlhttp"),ai(u,p),u.m&&u.o&&_t(p,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Ja(an(p)),y.m=null,y.P=!0,gr(y,u)}a.Za=function(){this.C!=null&&(this.C=null,Gi(this),vo(this),Ye(19))};function Ji(u){u.C!=null&&(g.clearTimeout(u.C),u.C=null)}function eu(u,p){var y=null;if(u.g==p){Ji(u),ii(u),u.g=null;var S=2}else if(oo(u.h,p))y=p.D,Kt(u.h,p),S=1;else return;if(u.G!=0){if(p.o)if(S==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var L=u.B;S=Br(),qe(S,new mt(S,y)),Xi(u)}else Yl(u);else if(L=p.s,L==3||L==0&&0<p.X||!(S==1&&gh(u,p)||S==2&&vo(u)))switch(y&&0<y.length&&(p=u.h,p.i=p.i.concat(y)),L){case 1:kr(u,5);break;case 4:kr(u,10);break;case 3:kr(u,6);break;default:kr(u,2)}}}function bo(u,p){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*p}function kr(u,p){if(u.j.info("Error code "+p),p==2){var y=V(u.fb,u),S=u.Xa;const L=!S;S=new yt(S||"//www.google.com/images/cleardot.gif"),g.location&&g.location.protocol=="http"||Xa(S,"https"),Ja(S),L?Za(S.toString(),y):Nn(S.toString(),y)}else Ye(2);u.G=0,u.l&&u.l.sa(p),tu(u),Xl(u)}a.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Ye(2)):(this.j.info("Failed to ping google.com"),Ye(1))};function tu(u){if(u.G=0,u.ka=[],u.l){const p=lo(u.h);(p.length!=0||u.i.length!=0)&&(te(u.ka,p),te(u.ka,u.i),u.h.i.length=0,ae(u.i),u.i.length=0),u.l.ra()}}function nu(u,p,y){var S=y instanceof yt?an(y):new yt(y);if(S.g!="")p&&(S.g=p+"."+S.g),Xr(S,S.s);else{var L=g.location;S=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;var z=new yt(null);S&&Xa(z,S),p&&(z.g=p),L&&Xr(z,L),y&&(z.l=y),S=z}return y=u.D,p=u.ya,y&&p&&Be(S,y,p),Be(S,"VER",u.la),ai(u,S),S}function ru(u,p,y){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Ve(new Jr({eb:y})):new Ve(u.pa),p.Ha(u.J),p}a.isActive=function(){return!!this.l&&this.l.isActive(this)};function au(){}a=au.prototype,a.ua=function(){},a.ta=function(){},a.sa=function(){},a.ra=function(){},a.isActive=function(){return!0},a.Na=function(){};function Yi(){}Yi.prototype.g=function(u,p){return new Qt(u,p)};function Qt(u,p){rt.call(this),this.g=new Qi(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!Se(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!Se(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Jn(this)}G(Qt,rt),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){mo(this.g)},Qt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Pn(u),u=y);p.i.push(new Bl(p.Ya++,u)),p.G==3&&Xi(p)},Qt.prototype.N=function(){this.g.l=null,delete this.j,mo(this.g),delete this.g,Qt.aa.N.call(this)};function iu(u){fr.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}G(iu,fr);function su(){ro.call(this),this.status=1}G(su,ro);function Jn(u){this.g=u}G(Jn,au),Jn.prototype.ua=function(){qe(this.g,"a")},Jn.prototype.ta=function(u){qe(this.g,new iu(u))},Jn.prototype.sa=function(u){qe(this.g,new su)},Jn.prototype.ra=function(){qe(this.g,"b")},Yi.prototype.createWebChannel=Yi.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,K0=function(){return new Yi},W0=function(){return Br()},B0=qn,xf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Qr.NO_ERROR=0,Qr.TIMEOUT=8,Qr.HTTP_ERROR=6,vc=Qr,pr.COMPLETE="complete",H0=pr,no.EventType=dr,dr.OPEN="a",dr.CLOSE="b",dr.ERROR="c",dr.MESSAGE="d",rt.prototype.listen=rt.prototype.K,cl=no,Ve.prototype.listenOnce=Ve.prototype.L,Ve.prototype.getLastError=Ve.prototype.Ka,Ve.prototype.getLastErrorCode=Ve.prototype.Ba,Ve.prototype.getStatus=Ve.prototype.Z,Ve.prototype.getResponseJson=Ve.prototype.Oa,Ve.prototype.getResponseText=Ve.prototype.oa,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Ha,$0=Ve}).apply(typeof lc<"u"?lc:typeof self<"u"?self:typeof window<"u"?window:{});const jv="@firebase/firestore",zv="4.7.16";/**
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
*/class $t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
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
*/let Ks="11.8.1";/**
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
*/const Ai=new qc("@firebase/firestore");function Cs(){return Ai.logLevel}function ne(a,...e){if(Ai.logLevel<=Pe.DEBUG){const n=e.map(hp);Ai.debug(`Firestore (${Ks}): ${a}`,...n)}}function $r(a,...e){if(Ai.logLevel<=Pe.ERROR){const n=e.map(hp);Ai.error(`Firestore (${Ks}): ${a}`,...n)}}function Us(a,...e){if(Ai.logLevel<=Pe.WARN){const n=e.map(hp);Ai.warn(`Firestore (${Ks}): ${a}`,...n)}}function hp(a){if(typeof a=="string")return a;try{/**
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
*/return function(e){return JSON.stringify(e)}(a)}catch{return a}}/**
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
*/function ve(a,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,Q0(a,i,n)}function Q0(a,e,n){let i=`FIRESTORE (${Ks}) INTERNAL ASSERTION FAILED: ${e} (ID: ${a.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw $r(i),new Error(i)}function tt(a,e,n,i){let l="Unexpected state";typeof n=="string"?l=n:i=n,a||Q0(e,l,i)}function xe(a,e){return a}/**
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
*/const ee={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
*/class _i{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
*/class G0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class YT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($t.UNAUTHENTICATED))}shutdown(){}}class ZT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class eI{constructor(e){this.t=e,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){tt(this.o===void 0,42304);let i=this.i;const l=m=>this.i!==i?(i=this.i,n(m)):Promise.resolve();let h=new _i;this.o=()=>{this.i++,this.currentUser=this.u(),h.resolve(),h=new _i,e.enqueueRetryable(()=>l(this.currentUser))};const f=()=>{const m=h;e.enqueueRetryable(async()=>{await m.promise,await l(this.currentUser)})},g=m=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(m=>g(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?g(m):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),h.resolve(),h=new _i)}},0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(tt(typeof i.accessToken=="string",31837,{l:i}),new G0(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return tt(e===null||typeof e=="string",2055,{h:e}),new $t(e)}}class tI{constructor(e,n,i){this.P=e,this.T=n,this.I=i,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class nI{constructor(e,n,i){this.P=e,this.T=n,this.I=i}getToken(){return Promise.resolve(new tI(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Cn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){tt(this.o===void 0,3512);const i=h=>{h.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${h.error.message}`);const f=h.token!==this.m;return this.m=h.token,ne("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(h.token):Promise.resolve()};this.o=h=>{e.enqueueRetryable(()=>i(h))};const l=h=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=h,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(h=>l(h)),setTimeout(()=>{if(!this.appCheck){const h=this.V.getImmediate({optional:!0});h?l(h):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Vv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(tt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Vv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
*/function aI(a){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(a);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<a;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
*/function X0(){return new TextEncoder}/**
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
*/class iI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const l=aI(40);for(let h=0;h<l.length;++h)i.length<20&&l[h]<n&&(i+=e.charAt(l[h]%62))}return i}}function Te(a,e){return a<e?-1:a>e?1:0}function Of(a,e){let n=0;for(;n<a.length&&n<e.length;){const i=a.codePointAt(n),l=e.codePointAt(n);if(i!==l){if(i<128&&l<128)return Te(i,l);{const h=X0(),f=sI(h.encode(qv(a,n)),h.encode(qv(e,n)));return f!==0?f:Te(i,l)}}n+=i>65535?2:1}return Te(a.length,e.length)}function qv(a,e){return a.codePointAt(e)>65535?a.substring(e,e+2):a.substring(e,e+1)}function sI(a,e){for(let n=0;n<a.length&&n<e.length;++n)if(a[n]!==e[n])return Te(a[n],e[n]);return Te(a.length,e.length)}function js(a,e,n){return a.length===e.length&&a.every((i,l)=>n(i,e[l]))}/**
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
*/const $v=-62135596800,Hv=1e6;class tn{static now(){return tn.fromMillis(Date.now())}static fromDate(e){return tn.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*Hv);return new tn(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ce(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ce(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<$v)throw new ce(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Hv}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-$v;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
*/class me{static fromTimestamp(e){return new me(e)}static min(){return new me(new tn(0,0))}static max(){return new me(new tn(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
*/const Bv="__name__";class rr{constructor(e,n,i){n===void 0?n=0:n>e.length&&ve(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&ve(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return rr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof rr?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let l=0;l<i;l++){const h=rr.compareSegments(e.get(l),n.get(l));if(h!==0)return h}return Te(e.length,n.length)}static compareSegments(e,n){const i=rr.isNumericId(e),l=rr.isNumericId(n);return i&&!l?-1:!i&&l?1:i&&l?rr.extractNumericId(e).compare(rr.extractNumericId(n)):Of(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Aa.fromString(e.substring(4,e.length-2))}}class st extends rr{construct(e,n,i){return new st(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new ce(ee.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(l=>l.length>0))}return new st(n)}static emptyPath(){return new st([])}}const oI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xt extends rr{construct(e,n,i){return new Xt(e,n,i)}static isValidIdentifier(e){return oI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bv}static keyField(){return new Xt([Bv])}static fromServerFormat(e){const n=[];let i="",l=0;const h=()=>{if(i.length===0)throw new ce(ee.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let f=!1;for(;l<e.length;){const g=e[l];if(g==="\\"){if(l+1===e.length)throw new ce(ee.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[l+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new ce(ee.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=m,l+=2}else g==="`"?(f=!f,l++):g!=="."||f?(i+=g,l++):(h(),l++)}if(h(),f)throw new ce(ee.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xt(n)}static emptyPath(){return new Xt([])}}/**
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
*/class fe{constructor(e){this.path=e}static fromPath(e){return new fe(st.fromString(e))}static fromName(e){return new fe(st.fromString(e).popFirst(5))}static empty(){return new fe(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return st.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new st(e.slice()))}}/**
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
*/const El=-1;function lI(a,e){const n=a.toTimestamp().seconds,i=a.toTimestamp().nanoseconds+1,l=me.fromTimestamp(i===1e9?new tn(n+1,0):new tn(n,i));return new Ra(l,fe.empty(),e)}function uI(a){return new Ra(a.readTime,a.key,El)}class Ra{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Ra(me.min(),fe.empty(),El)}static max(){return new Ra(me.max(),fe.empty(),El)}}function cI(a,e){let n=a.readTime.compareTo(e.readTime);return n!==0?n:(n=fe.comparator(a.documentKey,e.documentKey),n!==0?n:Te(a.largestBatchId,e.largestBatchId))}/**
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
*/const hI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
*/async function Wc(a){if(a.code!==ee.FAILED_PRECONDITION||a.message!==hI)throw a;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
*/class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new K((i,l)=>{this.nextCallback=h=>{this.wrapSuccess(e,h).next(i,l)},this.catchCallback=h=>{this.wrapFailure(n,h).next(i,l)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof K?n:K.resolve(n)}catch(n){return K.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):K.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):K.reject(n)}static resolve(e){return new K((n,i)=>{n(e)})}static reject(e){return new K((n,i)=>{i(e)})}static waitFor(e){return new K((n,i)=>{let l=0,h=0,f=!1;e.forEach(g=>{++l,g.next(()=>{++h,f&&h===l&&n()},m=>i(m))}),f=!0,h===l&&n()})}static or(e){let n=K.resolve(!1);for(const i of e)n=n.next(l=>l?K.resolve(l):i());return n}static forEach(e,n){const i=[];return e.forEach((l,h)=>{i.push(n.call(this,l,h))}),this.waitFor(i)}static mapArray(e,n){return new K((i,l)=>{const h=e.length,f=new Array(h);let g=0;for(let m=0;m<h;m++){const b=m;n(e[b]).next(k=>{f[b]=k,++g,g===h&&i(f)},k=>l(k))}})}static doWhile(e,n){return new K((i,l)=>{const h=()=>{e()===!0?n().next(()=>{h()},l):i()};h()})}}function fI(a){const e=a.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Qs(a){return a.name==="IndexedDbTransactionError"}/**
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
*/class Kc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ue(i),this.ce=i=>n.writeSequenceNumber(i))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Kc.le=-1;/**
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
*/const pI=-1;function Qc(a){return a==null}function Lf(a){return a===0&&1/a==-1/0}/**
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
*/const J0="";function gI(a){let e="";for(let n=0;n<a.length;n++)e.length>0&&(e=Wv(e)),e=mI(a.get(n),e);return Wv(e)}function mI(a,e){let n=e;const i=a.length;for(let l=0;l<i;l++){const h=a.charAt(l);switch(h){case"\0":n+="";break;case J0:n+="";break;default:n+=h}}return n}function Wv(a){return a+J0+""}/**
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
*/function Kv(a){let e=0;for(const n in a)Object.prototype.hasOwnProperty.call(a,n)&&e++;return e}function xl(a,e){for(const n in a)Object.prototype.hasOwnProperty.call(a,n)&&e(n,a[n])}function yI(a){for(const e in a)if(Object.prototype.hasOwnProperty.call(a,e))return!1;return!0}/**
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
*/class ht{constructor(e,n){this.comparator=e,this.root=n||Ft.EMPTY}insert(e,n){return new ht(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ft.BLACK,null,null))}remove(e){return new ht(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const l=this.comparator(e,i.key);if(l===0)return n+i.left.size;l<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uc(this.root,e,this.comparator,!1)}getReverseIterator(){return new uc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uc(this.root,e,this.comparator,!0)}}class uc{constructor(e,n,i,l){this.isReverse=l,this.nodeStack=[];let h=1;for(;!e.isEmpty();)if(h=n?i(e.key,n):1,n&&l&&(h*=-1),h<0)e=this.isReverse?e.left:e.right;else{if(h===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ft{constructor(e,n,i,l,h){this.key=e,this.value=n,this.color=i??Ft.RED,this.left=l??Ft.EMPTY,this.right=h??Ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,l,h){return new Ft(e??this.key,n??this.value,i??this.color,l??this.left,h??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let l=this;const h=i(e,l.key);return l=h<0?l.copy(null,null,null,l.left.insert(e,n,i),null):h===0?l.copy(null,n,null,null,null):l.copy(null,null,null,null,l.right.insert(e,n,i)),l.fixUp()}removeMin(){if(this.left.isEmpty())return Ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,l=this;if(n(e,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(e,n),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),n(e,l.key)===0){if(l.right.isEmpty())return Ft.EMPTY;i=l.right.min(),l=l.copy(i.key,i.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(e,n))}return l.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}Ft.EMPTY=null,Ft.RED=!0,Ft.BLACK=!1;Ft.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(a,e,n,i,l){return this}insert(a,e,n){return new Ft(a,e)}remove(a,e){return this}isEmpty(){return!0}inorderTraversal(a){return!1}reverseTraversal(a){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
*/class kt{constructor(e){this.comparator=e,this.data=new ht(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const l=i.getNext();if(this.comparator(l.key,e[1])>=0)return;n(l.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qv(this.data.getIterator())}getIteratorFrom(e){return new Qv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const l=n.getNext().key,h=i.getNext().key;if(this.comparator(l,h)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new kt(this.comparator);return n.data=e,n}}class Qv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
*/class _a{constructor(e){this.fields=e,e.sort(Xt.comparator)}static empty(){return new _a([])}unionWith(e){let n=new kt(Xt.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new _a(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return js(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
*/class Y0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
*/class Ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Y0("Invalid base64 string: "+l):l}}(e);return new Ut(n)}static fromUint8Array(e){const n=function(i){let l="";for(let h=0;h<i.length;++h)l+=String.fromCharCode(i[h]);return l}(e);return new Ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ut.EMPTY_BYTE_STRING=new Ut("");const vI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Na(a){if(tt(!!a,39018),typeof a=="string"){let e=0;const n=vI.exec(a);if(tt(!!n,46558,{timestamp:a}),n[1]){let l=n[1];l=(l+"000000000").substr(0,9),e=Number(l)}const i=new Date(a);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ct(a.seconds),nanos:ct(a.nanos)}}function ct(a){return typeof a=="number"?a:typeof a=="string"?Number(a):0}function Da(a){return typeof a=="string"?Ut.fromBase64String(a):Ut.fromUint8Array(a)}/**
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
*/const Z0="server_timestamp",ew="__type__",tw="__previous_value__",nw="__local_write_time__";function dp(a){var e,n;return((n=(((e=a==null?void 0:a.mapValue)===null||e===void 0?void 0:e.fields)||{})[ew])===null||n===void 0?void 0:n.stringValue)===Z0}function Gc(a){const e=a.mapValue.fields[tw];return dp(e)?Gc(e):e}function _l(a){const e=Na(a.mapValue.fields[nw].timestampValue);return new tn(e.seconds,e.nanos)}/**
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
*/class bI{constructor(e,n,i,l,h,f,g,m,b,k){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=l,this.ssl=h,this.forceLongPolling=f,this.autoDetectLongPolling=g,this.longPollingOptions=m,this.useFetchStreams=b,this.isUsingEmulator=k}}const Nc="(default)";class Tl{constructor(e,n){this.projectId=e,this.database=n||Nc}static empty(){return new Tl("","")}get isDefaultDatabase(){return this.database===Nc}isEqual(e){return e instanceof Tl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
*/const wI="__type__",SI="__max__",cc={mapValue:{}},kI="__vector__",Mf="value";function xa(a){return"nullValue"in a?0:"booleanValue"in a?1:"integerValue"in a||"doubleValue"in a?2:"timestampValue"in a?3:"stringValue"in a?5:"bytesValue"in a?6:"referenceValue"in a?7:"geoPointValue"in a?8:"arrayValue"in a?9:"mapValue"in a?dp(a)?4:_I(a)?9007199254740991:EI(a)?10:11:ve(28295,{value:a})}function ur(a,e){if(a===e)return!0;const n=xa(a);if(n!==xa(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return a.booleanValue===e.booleanValue;case 4:return _l(a).isEqual(_l(e));case 3:return function(i,l){if(typeof i.timestampValue=="string"&&typeof l.timestampValue=="string"&&i.timestampValue.length===l.timestampValue.length)return i.timestampValue===l.timestampValue;const h=Na(i.timestampValue),f=Na(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos}(a,e);case 5:return a.stringValue===e.stringValue;case 6:return function(i,l){return Da(i.bytesValue).isEqual(Da(l.bytesValue))}(a,e);case 7:return a.referenceValue===e.referenceValue;case 8:return function(i,l){return ct(i.geoPointValue.latitude)===ct(l.geoPointValue.latitude)&&ct(i.geoPointValue.longitude)===ct(l.geoPointValue.longitude)}(a,e);case 2:return function(i,l){if("integerValue"in i&&"integerValue"in l)return ct(i.integerValue)===ct(l.integerValue);if("doubleValue"in i&&"doubleValue"in l){const h=ct(i.doubleValue),f=ct(l.doubleValue);return h===f?Lf(h)===Lf(f):isNaN(h)&&isNaN(f)}return!1}(a,e);case 9:return js(a.arrayValue.values||[],e.arrayValue.values||[],ur);case 10:case 11:return function(i,l){const h=i.mapValue.fields||{},f=l.mapValue.fields||{};if(Kv(h)!==Kv(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!ur(h[g],f[g])))return!1;return!0}(a,e);default:return ve(52216,{left:a})}}function Il(a,e){return(a.values||[]).find(n=>ur(n,e))!==void 0}function zs(a,e){if(a===e)return 0;const n=xa(a),i=xa(e);if(n!==i)return Te(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(a.booleanValue,e.booleanValue);case 2:return function(l,h){const f=ct(l.integerValue||l.doubleValue),g=ct(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1}(a,e);case 3:return Gv(a.timestampValue,e.timestampValue);case 4:return Gv(_l(a),_l(e));case 5:return Of(a.stringValue,e.stringValue);case 6:return function(l,h){const f=Da(l),g=Da(h);return f.compareTo(g)}(a.bytesValue,e.bytesValue);case 7:return function(l,h){const f=l.split("/"),g=h.split("/");for(let m=0;m<f.length&&m<g.length;m++){const b=Te(f[m],g[m]);if(b!==0)return b}return Te(f.length,g.length)}(a.referenceValue,e.referenceValue);case 8:return function(l,h){const f=Te(ct(l.latitude),ct(h.latitude));return f!==0?f:Te(ct(l.longitude),ct(h.longitude))}(a.geoPointValue,e.geoPointValue);case 9:return Xv(a.arrayValue,e.arrayValue);case 10:return function(l,h){var f,g,m,b;const k=l.fields||{},C=h.fields||{},V=(f=k[Mf])===null||f===void 0?void 0:f.arrayValue,q=(g=C[Mf])===null||g===void 0?void 0:g.arrayValue,G=Te(((m=V==null?void 0:V.values)===null||m===void 0?void 0:m.length)||0,((b=q==null?void 0:q.values)===null||b===void 0?void 0:b.length)||0);return G!==0?G:Xv(V,q)}(a.mapValue,e.mapValue);case 11:return function(l,h){if(l===cc.mapValue&&h===cc.mapValue)return 0;if(l===cc.mapValue)return 1;if(h===cc.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),m=h.fields||{},b=Object.keys(m);g.sort(),b.sort();for(let k=0;k<g.length&&k<b.length;++k){const C=Of(g[k],b[k]);if(C!==0)return C;const V=zs(f[g[k]],m[b[k]]);if(V!==0)return V}return Te(g.length,b.length)}(a.mapValue,e.mapValue);default:throw ve(23264,{Pe:n})}}function Gv(a,e){if(typeof a=="string"&&typeof e=="string"&&a.length===e.length)return Te(a,e);const n=Na(a),i=Na(e),l=Te(n.seconds,i.seconds);return l!==0?l:Te(n.nanos,i.nanos)}function Xv(a,e){const n=a.values||[],i=e.values||[];for(let l=0;l<n.length&&l<i.length;++l){const h=zs(n[l],i[l]);if(h)return h}return Te(n.length,i.length)}function Vs(a){return Ff(a)}function Ff(a){return"nullValue"in a?"null":"booleanValue"in a?""+a.booleanValue:"integerValue"in a?""+a.integerValue:"doubleValue"in a?""+a.doubleValue:"timestampValue"in a?function(e){const n=Na(e);return`time(${n.seconds},${n.nanos})`}(a.timestampValue):"stringValue"in a?a.stringValue:"bytesValue"in a?function(e){return Da(e).toBase64()}(a.bytesValue):"referenceValue"in a?function(e){return fe.fromName(e).toString()}(a.referenceValue):"geoPointValue"in a?function(e){return`geo(${e.latitude},${e.longitude})`}(a.geoPointValue):"arrayValue"in a?function(e){let n="[",i=!0;for(const l of e.values||[])i?i=!1:n+=",",n+=Ff(l);return n+"]"}(a.arrayValue):"mapValue"in a?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",l=!0;for(const h of n)l?l=!1:i+=",",i+=`${h}:${Ff(e.fields[h])}`;return i+"}"}(a.mapValue):ve(61005,{value:a})}function bc(a){switch(xa(a)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Gc(a);return e?16+bc(e):16;case 5:return 2*a.stringValue.length;case 6:return Da(a.bytesValue).approximateByteSize();case 7:return a.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,l)=>i+bc(l),0)}(a.arrayValue);case 10:case 11:return function(n){let i=0;return xl(n.fields,(l,h)=>{i+=l.length+bc(h)}),i}(a.mapValue);default:throw ve(13486,{value:a})}}function Uf(a){return!!a&&"integerValue"in a}function fp(a){return!!a&&"arrayValue"in a}function Jv(a){return!!a&&"nullValue"in a}function Yv(a){return!!a&&"doubleValue"in a&&isNaN(Number(a.doubleValue))}function mf(a){return!!a&&"mapValue"in a}function EI(a){var e,n;return((n=(((e=a==null?void 0:a.mapValue)===null||e===void 0?void 0:e.fields)||{})[wI])===null||n===void 0?void 0:n.stringValue)===kI}function gl(a){if(a.geoPointValue)return{geoPointValue:Object.assign({},a.geoPointValue)};if(a.timestampValue&&typeof a.timestampValue=="object")return{timestampValue:Object.assign({},a.timestampValue)};if(a.mapValue){const e={mapValue:{fields:{}}};return xl(a.mapValue.fields,(n,i)=>e.mapValue.fields[n]=gl(i)),e}if(a.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(a.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gl(a.arrayValue.values[n]);return e}return Object.assign({},a)}function _I(a){return(((a.mapValue||{}).fields||{}).__type__||{}).stringValue===SI}/**
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
*/class ar{constructor(e){this.value=e}static empty(){return new ar({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!mf(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=gl(n)}setAll(e){let n=Xt.emptyPath(),i={},l=[];e.forEach((f,g)=>{if(!n.isImmediateParentOf(g)){const m=this.getFieldsMap(n);this.applyChanges(m,i,l),i={},l=[],n=g.popLast()}f?i[g.lastSegment()]=gl(f):l.push(g.lastSegment())});const h=this.getFieldsMap(n);this.applyChanges(h,i,l)}delete(e){const n=this.field(e.popLast());mf(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ur(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let l=n.mapValue.fields[e.get(i)];mf(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=l),n=l}return n.mapValue.fields}applyChanges(e,n,i){xl(n,(l,h)=>e[l]=h);for(const l of i)delete e[l]}clone(){return new ar(gl(this.value))}}/**
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
*/class Ht{constructor(e,n,i,l,h,f,g){this.key=e,this.documentType=n,this.version=i,this.readTime=l,this.createTime=h,this.data=f,this.documentState=g}static newInvalidDocument(e){return new Ht(e,0,me.min(),me.min(),me.min(),ar.empty(),0)}static newFoundDocument(e,n,i,l){return new Ht(e,1,n,me.min(),i,l,0)}static newNoDocument(e,n){return new Ht(e,2,n,me.min(),me.min(),ar.empty(),0)}static newUnknownDocument(e,n){return new Ht(e,3,n,me.min(),me.min(),ar.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ar.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ar.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
*/class Dc{constructor(e,n){this.position=e,this.inclusive=n}}function Zv(a,e,n){let i=0;for(let l=0;l<a.position.length;l++){const h=e[l],f=a.position[l];if(h.field.isKeyField()?i=fe.comparator(fe.fromName(f.referenceValue),n.key):i=zs(f,n.data.field(h.field)),h.dir==="desc"&&(i*=-1),i!==0)break}return i}function eb(a,e){if(a===null)return e===null;if(e===null||a.inclusive!==e.inclusive||a.position.length!==e.position.length)return!1;for(let n=0;n<a.position.length;n++)if(!ur(a.position[n],e.position[n]))return!1;return!0}/**
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
*/class xc{constructor(e,n="asc"){this.field=e,this.dir=n}}function TI(a,e){return a.dir===e.dir&&a.field.isEqual(e.field)}/**
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
*/class rw{}class St extends rw{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new CI(e,n,i):n==="array-contains"?new RI(e,i):n==="in"?new NI(e,i):n==="not-in"?new DI(e,i):n==="array-contains-any"?new xI(e,i):new St(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new AI(e,i):new PI(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(zs(n,this.value)):n!==null&&xa(this.value)===xa(n)&&this.matchesComparison(zs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cr extends rw{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new cr(e,n)}matches(e){return aw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function aw(a){return a.op==="and"}function iw(a){return II(a)&&aw(a)}function II(a){for(const e of a.filters)if(e instanceof cr)return!1;return!0}function jf(a){if(a instanceof St)return a.field.canonicalString()+a.op.toString()+Vs(a.value);if(iw(a))return a.filters.map(e=>jf(e)).join(",");{const e=a.filters.map(n=>jf(n)).join(",");return`${a.op}(${e})`}}function sw(a,e){return a instanceof St?function(n,i){return i instanceof St&&n.op===i.op&&n.field.isEqual(i.field)&&ur(n.value,i.value)}(a,e):a instanceof cr?function(n,i){return i instanceof cr&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((l,h,f)=>l&&sw(h,i.filters[f]),!0):!1}(a,e):void ve(19439)}function ow(a){return a instanceof St?function(e){return`${e.field.canonicalString()} ${e.op} ${Vs(e.value)}`}(a):a instanceof cr?function(e){return e.op.toString()+" {"+e.getFilters().map(ow).join(" ,")+"}"}(a):"Filter"}class CI extends St{constructor(e,n,i){super(e,n,i),this.key=fe.fromName(i.referenceValue)}matches(e){const n=fe.comparator(e.key,this.key);return this.matchesComparison(n)}}class AI extends St{constructor(e,n){super(e,"in",n),this.keys=lw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class PI extends St{constructor(e,n){super(e,"not-in",n),this.keys=lw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lw(a,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>fe.fromName(i.referenceValue))}class RI extends St{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return fp(n)&&Il(n.arrayValue,this.value)}}class NI extends St{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Il(this.value.arrayValue,n)}}class DI extends St{constructor(e,n){super(e,"not-in",n)}matches(e){if(Il(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Il(this.value.arrayValue,n)}}class xI extends St{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!fp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Il(this.value.arrayValue,i))}}/**
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
*/class OI{constructor(e,n=null,i=[],l=[],h=null,f=null,g=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=l,this.limit=h,this.startAt=f,this.endAt=g,this.Ie=null}}function tb(a,e=null,n=[],i=[],l=null,h=null,f=null){return new OI(a,e,n,i,l,h,f)}function pp(a){const e=xe(a);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>jf(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Qc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Vs(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Vs(i)).join(",")),e.Ie=n}return e.Ie}function gp(a,e){if(a.limit!==e.limit||a.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<a.orderBy.length;n++)if(!TI(a.orderBy[n],e.orderBy[n]))return!1;if(a.filters.length!==e.filters.length)return!1;for(let n=0;n<a.filters.length;n++)if(!sw(a.filters[n],e.filters[n]))return!1;return a.collectionGroup===e.collectionGroup&&!!a.path.isEqual(e.path)&&!!eb(a.startAt,e.startAt)&&eb(a.endAt,e.endAt)}function zf(a){return fe.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}/**
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
*/class Xc{constructor(e,n=null,i=[],l=[],h=null,f="F",g=null,m=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=l,this.limit=h,this.limitType=f,this.startAt=g,this.endAt=m,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function LI(a,e,n,i,l,h,f,g){return new Xc(a,e,n,i,l,h,f,g)}function uw(a){return new Xc(a)}function nb(a){return a.filters.length===0&&a.limit===null&&a.startAt==null&&a.endAt==null&&(a.explicitOrderBy.length===0||a.explicitOrderBy.length===1&&a.explicitOrderBy[0].field.isKeyField())}function MI(a){return a.collectionGroup!==null}function ml(a){const e=xe(a);if(e.Ee===null){e.Ee=[];const n=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),n.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(l){let h=new kt(Xt.comparator);return l.filters.forEach(f=>{f.getFlattenedFilters().forEach(g=>{g.isInequality()&&(h=h.add(g.field))})}),h})(e).forEach(l=>{n.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new xc(l,i))}),n.has(Xt.keyField().canonicalString())||e.Ee.push(new xc(Xt.keyField(),i))}return e.Ee}function or(a){const e=xe(a);return e.de||(e.de=FI(e,ml(a))),e.de}function FI(a,e){if(a.limitType==="F")return tb(a.path,a.collectionGroup,e,a.filters,a.limit,a.startAt,a.endAt);{e=e.map(l=>{const h=l.dir==="desc"?"asc":"desc";return new xc(l.field,h)});const n=a.endAt?new Dc(a.endAt.position,a.endAt.inclusive):null,i=a.startAt?new Dc(a.startAt.position,a.startAt.inclusive):null;return tb(a.path,a.collectionGroup,e,a.filters,a.limit,n,i)}}function Vf(a,e,n){return new Xc(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),e,n,a.startAt,a.endAt)}function Jc(a,e){return gp(or(a),or(e))&&a.limitType===e.limitType}function cw(a){return`${pp(or(a))}|lt:${a.limitType}`}function As(a){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>ow(i)).join(", ")}]`),Qc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Vs(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Vs(i)).join(",")),`Target(${n})`}(or(a))}; limitType=${a.limitType})`}function Yc(a,e){return e.isFoundDocument()&&function(n,i){const l=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(l):fe.isDocumentKey(n.path)?n.path.isEqual(l):n.path.isImmediateParentOf(l)}(a,e)&&function(n,i){for(const l of ml(n))if(!l.field.isKeyField()&&i.data.field(l.field)===null)return!1;return!0}(a,e)&&function(n,i){for(const l of n.filters)if(!l.matches(i))return!1;return!0}(a,e)&&function(n,i){return!(n.startAt&&!function(l,h,f){const g=Zv(l,h,f);return l.inclusive?g<=0:g<0}(n.startAt,ml(n),i)||n.endAt&&!function(l,h,f){const g=Zv(l,h,f);return l.inclusive?g>=0:g>0}(n.endAt,ml(n),i))}(a,e)}function UI(a){return a.collectionGroup||(a.path.length%2==1?a.path.lastSegment():a.path.get(a.path.length-2))}function hw(a){return(e,n)=>{let i=!1;for(const l of ml(a)){const h=jI(l,e,n);if(h!==0)return h;i=i||l.field.isKeyField()}return 0}}function jI(a,e,n){const i=a.field.isKeyField()?fe.comparator(e.key,n.key):function(l,h,f){const g=h.data.field(l),m=f.data.field(l);return g!==null&&m!==null?zs(g,m):ve(42886)}(a.field,e,n);switch(a.dir){case"asc":return i;case"desc":return-1*i;default:return ve(19790,{direction:a.dir})}}/**
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
*/class Oi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[l,h]of i)if(this.equalsFn(l,e))return h}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),l=this.inner[i];if(l===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let h=0;h<l.length;h++)if(this.equalsFn(l[h][0],e))return void(l[h]=[e,n]);l.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let l=0;l<i.length;l++)if(this.equalsFn(i[l][0],e))return i.length===1?delete this.inner[n]:i.splice(l,1),this.innerSize--,!0;return!1}forEach(e){xl(this.inner,(n,i)=>{for(const[l,h]of i)e(l,h)})}isEmpty(){return yI(this.inner)}size(){return this.innerSize}}/**
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
*/const zI=new ht(fe.comparator);function Oa(){return zI}const dw=new ht(fe.comparator);function hl(...a){let e=dw;for(const n of a)e=e.insert(n.key,n);return e}function VI(a){let e=dw;return a.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function ki(){return yl()}function fw(){return yl()}function yl(){return new Oi(a=>a.toString(),(a,e)=>a.isEqual(e))}const qI=new kt(fe.comparator);function Le(...a){let e=qI;for(const n of a)e=e.add(n);return e}const $I=new kt(Te);function HI(){return $I}/**
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
*/function BI(a,e){if(a.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lf(e)?"-0":e}}function WI(a){return{integerValue:""+a}}/**
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
*/class Zc{constructor(){this._=void 0}}function KI(a,e,n){return a instanceof qf?function(i,l){const h={fields:{[ew]:{stringValue:Z0},[nw]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return l&&dp(l)&&(l=Gc(l)),l&&(h.fields[tw]=l),{mapValue:h}}(n,e):a instanceof Oc?pw(a,e):a instanceof Lc?gw(a,e):function(i,l){const h=GI(i,l),f=rb(h)+rb(i.Re);return Uf(h)&&Uf(i.Re)?WI(f):BI(i.serializer,f)}(a,e)}function QI(a,e,n){return a instanceof Oc?pw(a,e):a instanceof Lc?gw(a,e):n}function GI(a,e){return a instanceof $f?function(n){return Uf(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class qf extends Zc{}class Oc extends Zc{constructor(e){super(),this.elements=e}}function pw(a,e){const n=mw(e);for(const i of a.elements)n.some(l=>ur(l,i))||n.push(i);return{arrayValue:{values:n}}}class Lc extends Zc{constructor(e){super(),this.elements=e}}function gw(a,e){let n=mw(e);for(const i of a.elements)n=n.filter(l=>!ur(l,i));return{arrayValue:{values:n}}}class $f extends Zc{constructor(e,n){super(),this.serializer=e,this.Re=n}}function rb(a){return ct(a.integerValue||a.doubleValue)}function mw(a){return fp(a)&&a.arrayValue.values?a.arrayValue.values.slice():[]}function XI(a,e){return a.field.isEqual(e.field)&&function(n,i){return n instanceof Oc&&i instanceof Oc||n instanceof Lc&&i instanceof Lc?js(n.elements,i.elements,ur):n instanceof $f&&i instanceof $f?ur(n.Re,i.Re):n instanceof qf&&i instanceof qf}(a.transform,e.transform)}class Ti{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ti}static exists(e){return new Ti(void 0,e)}static updateTime(e){return new Ti(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wc(a,e){return a.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(a.updateTime):a.exists===void 0||a.exists===e.isFoundDocument()}class mp{}function yw(a,e){if(!a.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return a.isNoDocument()?new YI(a.key,Ti.none()):new yp(a.key,a.data,Ti.none());{const n=a.data,i=ar.empty();let l=new kt(Xt.comparator);for(let h of e.fields)if(!l.has(h)){let f=n.field(h);f===null&&h.length>1&&(h=h.popLast(),f=n.field(h)),f===null?i.delete(h):i.set(h,f),l=l.add(h)}return new eh(a.key,i,new _a(l.toArray()),Ti.none())}}function JI(a,e,n){a instanceof yp?function(i,l,h){const f=i.value.clone(),g=ib(i.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()}(a,e,n):a instanceof eh?function(i,l,h){if(!wc(i.precondition,l))return void l.convertToUnknownDocument(h.version);const f=ib(i.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(vw(i)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(a,e,n):function(i,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,n)}function vl(a,e,n,i){return a instanceof yp?function(l,h,f,g){if(!wc(l.precondition,h))return f;const m=l.value.clone(),b=sb(l.fieldTransforms,g,h);return m.setAll(b),h.convertToFoundDocument(h.version,m).setHasLocalMutations(),null}(a,e,n,i):a instanceof eh?function(l,h,f,g){if(!wc(l.precondition,h))return f;const m=sb(l.fieldTransforms,g,h),b=h.data;return b.setAll(vw(l)),b.setAll(m),h.convertToFoundDocument(h.version,b).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(k=>k.field))}(a,e,n,i):function(l,h,f){return wc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f}(a,e,n)}function ab(a,e){return a.type===e.type&&!!a.key.isEqual(e.key)&&!!a.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&js(n,i,(l,h)=>XI(l,h))}(a.fieldTransforms,e.fieldTransforms)&&(a.type===0?a.value.isEqual(e.value):a.type!==1||a.data.isEqual(e.data)&&a.fieldMask.isEqual(e.fieldMask))}class yp extends mp{constructor(e,n,i,l=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class eh extends mp{constructor(e,n,i,l,h=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=l,this.fieldTransforms=h,this.type=1}getFieldMask(){return this.fieldMask}}function vw(a){const e=new Map;return a.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=a.data.field(n);e.set(n,i)}}),e}function ib(a,e,n){const i=new Map;tt(a.length===n.length,32656,{Ve:n.length,me:a.length});for(let l=0;l<n.length;l++){const h=a[l],f=h.transform,g=e.data.field(h.field);i.set(h.field,QI(f,g,n[l]))}return i}function sb(a,e,n){const i=new Map;for(const l of a){const h=l.transform,f=n.data.field(l.field);i.set(l.field,KI(h,f,e))}return i}class YI extends mp{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
*/class ZI{constructor(e,n,i,l){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=l}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let l=0;l<this.mutations.length;l++){const h=this.mutations[l];h.key.isEqual(e.key)&&JI(h,e,i[l])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=vl(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=vl(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=fw();return this.mutations.forEach(l=>{const h=e.get(l.key),f=h.overlayedDocument;let g=this.applyToLocalView(f,h.mutatedFields);g=n.has(l.key)?null:g;const m=yw(f,g);m!==null&&i.set(l.key,m),f.isValidDocument()||f.convertToNoDocument(me.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Le())}isEqual(e){return this.batchId===e.batchId&&js(this.mutations,e.mutations,(n,i)=>ab(n,i))&&js(this.baseMutations,e.baseMutations,(n,i)=>ab(n,i))}}/**
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
*/class eC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
*/class tC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
*/var gt,De;function bw(a){if(a===void 0)return $r("GRPC error has no .code"),ee.UNKNOWN;switch(a){case gt.OK:return ee.OK;case gt.CANCELLED:return ee.CANCELLED;case gt.UNKNOWN:return ee.UNKNOWN;case gt.DEADLINE_EXCEEDED:return ee.DEADLINE_EXCEEDED;case gt.RESOURCE_EXHAUSTED:return ee.RESOURCE_EXHAUSTED;case gt.INTERNAL:return ee.INTERNAL;case gt.UNAVAILABLE:return ee.UNAVAILABLE;case gt.UNAUTHENTICATED:return ee.UNAUTHENTICATED;case gt.INVALID_ARGUMENT:return ee.INVALID_ARGUMENT;case gt.NOT_FOUND:return ee.NOT_FOUND;case gt.ALREADY_EXISTS:return ee.ALREADY_EXISTS;case gt.PERMISSION_DENIED:return ee.PERMISSION_DENIED;case gt.FAILED_PRECONDITION:return ee.FAILED_PRECONDITION;case gt.ABORTED:return ee.ABORTED;case gt.OUT_OF_RANGE:return ee.OUT_OF_RANGE;case gt.UNIMPLEMENTED:return ee.UNIMPLEMENTED;case gt.DATA_LOSS:return ee.DATA_LOSS;default:return ve(39323,{code:a})}}(De=gt||(gt={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
*/const nC=new Aa([4294967295,4294967295],0);function ob(a){const e=X0().encode(a),n=new q0;return n.update(e),new Uint8Array(n.digest())}function lb(a){const e=new DataView(a.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),l=e.getUint32(8,!0),h=e.getUint32(12,!0);return[new Aa([n,i],0),new Aa([l,h],0)]}class vp{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new dl(`Invalid padding: ${n}`);if(i<0)throw new dl(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new dl(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new dl(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=Aa.fromNumber(this.pe)}we(e,n,i){let l=e.add(n.multiply(Aa.fromNumber(i)));return l.compare(nC)===1&&(l=new Aa([l.getBits(0),l.getBits(1)],0)),l.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=ob(e),[i,l]=lb(n);for(let h=0;h<this.hashCount;h++){const f=this.we(i,l,h);if(!this.Se(f))return!1}return!0}static create(e,n,i){const l=e%8==0?0:8-e%8,h=new Uint8Array(Math.ceil(e/8)),f=new vp(h,l,n);return i.forEach(g=>f.insert(g)),f}insert(e){if(this.pe===0)return;const n=ob(e),[i,l]=lb(n);for(let h=0;h<this.hashCount;h++){const f=this.we(i,l,h);this.be(f)}}be(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class dl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
*/class th{constructor(e,n,i,l,h){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=l,this.resolvedLimboDocuments=h}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const l=new Map;return l.set(e,Ol.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new th(me.min(),l,new ht(Te),Oa(),Le())}}class Ol{constructor(e,n,i,l,h){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=l,this.removedDocuments=h}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new Ol(i,n,Le(),Le(),Le())}}/**
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
*/class Sc{constructor(e,n,i,l){this.De=e,this.removedTargetIds=n,this.key=i,this.ve=l}}class ww{constructor(e,n){this.targetId=e,this.Ce=n}}class Sw{constructor(e,n,i=Ut.EMPTY_BYTE_STRING,l=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=l}}class ub{constructor(){this.Fe=0,this.Me=cb(),this.xe=Ut.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Le(),n=Le(),i=Le();return this.Me.forEach((l,h)=>{switch(h){case 0:e=e.add(l);break;case 2:n=n.add(l);break;case 1:i=i.add(l);break;default:ve(38017,{changeType:h})}}),new Ol(this.xe,this.Oe,e,n,i)}Qe(){this.Ne=!1,this.Me=cb()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,tt(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class rC{constructor(e){this.ze=e,this.je=new Map,this.He=Oa(),this.Je=hc(),this.Ye=hc(),this.Ze=new ht(Te)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const i=this.rt(n);switch(e.state){case 0:this.it(n)&&i.ke(e.resumeToken);break;case 1:i.We(),i.Be||i.Qe(),i.ke(e.resumeToken);break;case 2:i.We(),i.Be||this.removeTarget(n);break;case 3:this.it(n)&&(i.Ge(),i.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),i.ke(e.resumeToken));break;default:ve(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((i,l)=>{this.it(l)&&n(l)})}ot(e){const n=e.targetId,i=e.Ce.count,l=this._t(n);if(l){const h=l.target;if(zf(h))if(i===0){const f=new fe(h.path);this.tt(n,f,Ht.newNoDocument(f,me.min()))}else tt(i===1,20013,{expectedCount:i});else{const f=this.ut(n);if(f!==i){const g=this.ct(e),m=g?this.lt(g,e,f):1;if(m!==0){this.st(n);const b=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,b)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:l=0},hashCount:h=0}=n;let f,g;try{f=Da(i).toUint8Array()}catch(m){if(m instanceof Y0)return Us("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{g=new vp(f,l,h)}catch(m){return Us(m instanceof dl?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return g.pe===0?null:g}lt(e,n,i){return n.Ce.count===i-this.Tt(e,n.targetId)?0:2}Tt(e,n){const i=this.ze.getRemoteKeysForTarget(n);let l=0;return i.forEach(h=>{const f=this.ze.Pt(),g=`projects/${f.projectId}/databases/${f.database}/documents/${h.path.canonicalString()}`;e.mightContain(g)||(this.tt(n,h,null),l++)}),l}It(e){const n=new Map;this.je.forEach((h,f)=>{const g=this._t(f);if(g){if(h.current&&zf(g.target)){const m=new fe(g.target.path);this.Et(m).has(f)||this.dt(f,m)||this.tt(f,m,Ht.newNoDocument(m,e))}h.Le&&(n.set(f,h.qe()),h.Qe())}});let i=Le();this.Ye.forEach((h,f)=>{let g=!0;f.forEachWhile(m=>{const b=this._t(m);return!b||b.purpose==="TargetPurposeLimboResolution"||(g=!1,!1)}),g&&(i=i.add(h))}),this.He.forEach((h,f)=>f.setReadTime(e));const l=new th(e,n,this.Ze,this.He,i);return this.He=Oa(),this.Je=hc(),this.Ye=hc(),this.Ze=new ht(Te),l}et(e,n){if(!this.it(e))return;const i=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,i),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,i){if(!this.it(e))return;const l=this.rt(e);this.dt(e,n)?l.$e(n,1):l.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),i&&(this.He=this.He.insert(n,i))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new ub,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new kt(Te),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new kt(Te),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new ub),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function hc(){return new ht(fe.comparator)}function cb(){return new ht(fe.comparator)}const aC={asc:"ASCENDING",desc:"DESCENDING"},iC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sC={and:"AND",or:"OR"};class oC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Hf(a,e){return a.useProto3Json||Qc(e)?e:{value:e}}function lC(a,e){return a.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uC(a,e){return a.useProto3Json?e.toBase64():e.toUint8Array()}function Ls(a){return tt(!!a,49232),me.fromTimestamp(function(e){const n=Na(e);return new tn(n.seconds,n.nanos)}(a))}function cC(a,e){return Bf(a,e).canonicalString()}function Bf(a,e){const n=function(i){return new st(["projects",i.projectId,"databases",i.database])}(a).child("documents");return e===void 0?n:n.child(e)}function kw(a){const e=st.fromString(a);return tt(Cw(e),10190,{key:e.toString()}),e}function yf(a,e){const n=kw(e);if(n.get(1)!==a.databaseId.projectId)throw new ce(ee.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+a.databaseId.projectId);if(n.get(3)!==a.databaseId.database)throw new ce(ee.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+a.databaseId.database);return new fe(_w(n))}function Ew(a,e){return cC(a.databaseId,e)}function hC(a){const e=kw(a);return e.length===4?st.emptyPath():_w(e)}function hb(a){return new st(["projects",a.databaseId.projectId,"databases",a.databaseId.database]).canonicalString()}function _w(a){return tt(a.length>4&&a.get(4)==="documents",29091,{key:a.toString()}),a.popFirst(5)}function dC(a,e){let n;if("targetChange"in e){e.targetChange;const i=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:ve(39313,{state:m})}(e.targetChange.targetChangeType||"NO_CHANGE"),l=e.targetChange.targetIds||[],h=function(m,b){return m.useProto3Json?(tt(b===void 0||typeof b=="string",58123),Ut.fromBase64String(b||"")):(tt(b===void 0||b instanceof Buffer||b instanceof Uint8Array,16193),Ut.fromUint8Array(b||new Uint8Array))}(a,e.targetChange.resumeToken),f=e.targetChange.cause,g=f&&function(m){const b=m.code===void 0?ee.UNKNOWN:bw(m.code);return new ce(b,m.message||"")}(f);n=new Sw(i,l,h,g||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const l=yf(a,i.document.name),h=Ls(i.document.updateTime),f=i.document.createTime?Ls(i.document.createTime):me.min(),g=new ar({mapValue:{fields:i.document.fields}}),m=Ht.newFoundDocument(l,h,f,g),b=i.targetIds||[],k=i.removedTargetIds||[];n=new Sc(b,k,m.key,m)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const l=yf(a,i.document),h=i.readTime?Ls(i.readTime):me.min(),f=Ht.newNoDocument(l,h),g=i.removedTargetIds||[];n=new Sc([],g,f.key,f)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const l=yf(a,i.document),h=i.removedTargetIds||[];n=new Sc([],h,l,null)}else{if(!("filter"in e))return ve(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:l=0,unchangedNames:h}=i,f=new tC(l,h),g=i.targetId;n=new ww(g,f)}}return n}function fC(a,e){return{documents:[Ew(a,e.path)]}}function pC(a,e){const n={structuredQuery:{}},i=e.path;let l;e.collectionGroup!==null?(l=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(l=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=Ew(a,l);const h=function(m){if(m.length!==0)return Iw(cr.create(m,"and"))}(e.filters);h&&(n.structuredQuery.where=h);const f=function(m){if(m.length!==0)return m.map(b=>function(k){return{field:Ps(k.field),direction:yC(k.dir)}}(b))}(e.orderBy);f&&(n.structuredQuery.orderBy=f);const g=Hf(a,e.limit);return g!==null&&(n.structuredQuery.limit=g),e.startAt&&(n.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{gt:n,parent:l}}function gC(a){let e=hC(a.parent);const n=a.structuredQuery,i=n.from?n.from.length:0;let l=null;if(i>0){tt(i===1,65062);const k=n.from[0];k.allDescendants?l=k.collectionId:e=e.child(k.collectionId)}let h=[];n.where&&(h=function(k){const C=Tw(k);return C instanceof cr&&iw(C)?C.getFilters():[C]}(n.where));let f=[];n.orderBy&&(f=function(k){return k.map(C=>function(V){return new xc(Rs(V.field),function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(C))}(n.orderBy));let g=null;n.limit&&(g=function(k){let C;return C=typeof k=="object"?k.value:k,Qc(C)?null:C}(n.limit));let m=null;n.startAt&&(m=function(k){const C=!!k.before,V=k.values||[];return new Dc(V,C)}(n.startAt));let b=null;return n.endAt&&(b=function(k){const C=!k.before,V=k.values||[];return new Dc(V,C)}(n.endAt)),LI(e,l,f,h,g,"F",m,b)}function mC(a,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Tw(a){return a.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Rs(e.unaryFilter.field);return St.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Rs(e.unaryFilter.field);return St.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Rs(e.unaryFilter.field);return St.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Rs(e.unaryFilter.field);return St.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}}(a):a.fieldFilter!==void 0?function(e){return St.create(Rs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(a):a.compositeFilter!==void 0?function(e){return cr.create(e.compositeFilter.filters.map(n=>Tw(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return ve(1026)}}(e.compositeFilter.op))}(a):ve(30097,{filter:a})}function yC(a){return aC[a]}function vC(a){return iC[a]}function bC(a){return sC[a]}function Ps(a){return{fieldPath:a.canonicalString()}}function Rs(a){return Xt.fromServerFormat(a.fieldPath)}function Iw(a){return a instanceof St?function(e){if(e.op==="=="){if(Yv(e.value))return{unaryFilter:{field:Ps(e.field),op:"IS_NAN"}};if(Jv(e.value))return{unaryFilter:{field:Ps(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Yv(e.value))return{unaryFilter:{field:Ps(e.field),op:"IS_NOT_NAN"}};if(Jv(e.value))return{unaryFilter:{field:Ps(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ps(e.field),op:vC(e.op),value:e.value}}}(a):a instanceof cr?function(e){const n=e.getFilters().map(i=>Iw(i));return n.length===1?n[0]:{compositeFilter:{op:bC(e.op),filters:n}}}(a):ve(54877,{filter:a})}function Cw(a){return a.length>=4&&a.get(0)==="projects"&&a.get(2)==="databases"}/**
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
*/class Ta{constructor(e,n,i,l,h=me.min(),f=me.min(),g=Ut.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=l,this.snapshotVersion=h,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=g,this.expectedCount=m}withSequenceNumber(e){return new Ta(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ta(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ta(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ta(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
*/class wC{constructor(e){this.wt=e}}function SC(a){const e=gC({parent:a.parent,structuredQuery:a.structuredQuery});return a.limitType==="LAST"?Vf(e,e.limit,"L"):e}/**
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
*/class kC{constructor(){this.Cn=new EC}addToCollectionParentIndex(e,n){return this.Cn.add(n),K.resolve()}getCollectionParents(e,n){return K.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return K.resolve()}deleteFieldIndex(e,n){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,n){return K.resolve()}getDocumentsMatchingTarget(e,n){return K.resolve(null)}getIndexType(e,n){return K.resolve(0)}getFieldIndexes(e,n){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,n){return K.resolve(Ra.min())}getMinOffsetFromCollectionGroup(e,n){return K.resolve(Ra.min())}updateCollectionGroup(e,n,i){return K.resolve()}updateIndexEntries(e,n){return K.resolve()}}class EC{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),l=this.index[n]||new kt(st.comparator),h=!l.has(i);return this.index[n]=l.add(i),h}has(e){const n=e.lastSegment(),i=e.popLast(),l=this.index[n];return l&&l.has(i)}getEntries(e){return(this.index[e]||new kt(st.comparator)).toArray()}}/**
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
*/const db={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Aw=41943040;class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
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
*/en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(Aw,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
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
*/class qs{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new qs(0)}static lr(){return new qs(-1)}}/**
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
*/const fb="LruGarbageCollector",_C=1048576;function pb([a,e],[n,i]){const l=Te(a,n);return l===0?Te(e,i):l}class TC{constructor(e){this.Er=e,this.buffer=new kt(pb),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();pb(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class IC{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){ne(fb,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Qs(n)?ne(fb,"Ignoring IndexedDB error during garbage collection: ",n):await Wc(n)}await this.mr(3e5)})}}class CC{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(i=>Math.floor(n/100*i))}nthSequenceNumber(e,n){if(n===0)return K.resolve(Kc.le);const i=new TC(n);return this.gr.forEachTarget(e,l=>i.Rr(l.sequenceNumber)).next(()=>this.gr.yr(e,l=>i.Rr(l))).next(()=>i.maxValue)}removeTargets(e,n,i){return this.gr.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(db)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),db):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let i,l,h,f,g,m,b;const k=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(C=>(C>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${C}`),l=this.params.maximumSequenceNumbersToCollect):l=C,f=Date.now(),this.nthSequenceNumber(e,l))).next(C=>(i=C,g=Date.now(),this.removeTargets(e,i,n))).next(C=>(h=C,m=Date.now(),this.removeOrphanedDocuments(e,i))).next(C=>(b=Date.now(),Cs()<=Pe.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-k}ms
	Determined least recently used ${l} in `+(g-f)+`ms
	Removed ${h} targets in `+(m-g)+`ms
	Removed ${C} documents in `+(b-m)+`ms
Total Duration: ${b-k}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:h,documentsRemoved:C})))}}function AC(a,e){return new CC(a,e)}/**
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
*/class PC{constructor(){this.changes=new Oi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?K.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
*/class RC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
*/class NC{constructor(e,n,i,l){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=l}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(l=>(i=l,this.remoteDocumentCache.getEntry(e,n))).next(l=>(i!==null&&vl(i.mutation,l,_a.empty(),tn.now()),l))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,Le()).next(()=>i))}getLocalViewOfDocuments(e,n,i=Le()){const l=ki();return this.populateOverlays(e,l,n).next(()=>this.computeViews(e,n,l,i).next(h=>{let f=hl();return h.forEach((g,m)=>{f=f.insert(g,m.overlayedDocument)}),f}))}getOverlayedDocuments(e,n){const i=ki();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,Le()))}populateOverlays(e,n,i){const l=[];return i.forEach(h=>{n.has(h)||l.push(h)}),this.documentOverlayCache.getOverlays(e,l).next(h=>{h.forEach((f,g)=>{n.set(f,g)})})}computeViews(e,n,i,l){let h=Oa();const f=yl(),g=function(){return yl()}();return n.forEach((m,b)=>{const k=i.get(b.key);l.has(b.key)&&(k===void 0||k.mutation instanceof eh)?h=h.insert(b.key,b):k!==void 0?(f.set(b.key,k.mutation.getFieldMask()),vl(k.mutation,b,k.mutation.getFieldMask(),tn.now())):f.set(b.key,_a.empty())}),this.recalculateAndSaveOverlays(e,h).next(m=>(m.forEach((b,k)=>f.set(b,k)),n.forEach((b,k)=>{var C;return g.set(b,new RC(k,(C=f.get(b))!==null&&C!==void 0?C:null))}),g))}recalculateAndSaveOverlays(e,n){const i=yl();let l=new ht((f,g)=>f-g),h=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(f=>{for(const g of f)g.keys().forEach(m=>{const b=n.get(m);if(b===null)return;let k=i.get(m)||_a.empty();k=g.applyToLocalView(b,k),i.set(m,k);const C=(l.get(g.batchId)||Le()).add(m);l=l.insert(g.batchId,C)})}).next(()=>{const f=[],g=l.getReverseIterator();for(;g.hasNext();){const m=g.getNext(),b=m.key,k=m.value,C=fw();k.forEach(V=>{if(!h.has(V)){const q=yw(n.get(V),i.get(V));q!==null&&C.set(V,q),h=h.add(V)}}),f.push(this.documentOverlayCache.saveOverlays(e,b,C))}return K.waitFor(f)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,l){return function(h){return fe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):MI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,l):this.getDocumentsMatchingCollectionQuery(e,n,i,l)}getNextDocuments(e,n,i,l){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,l).next(h=>{const f=l-h.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,l-h.size):K.resolve(ki());let g=El,m=h;return f.next(b=>K.forEach(b,(k,C)=>(g<C.largestBatchId&&(g=C.largestBatchId),h.get(k)?K.resolve():this.remoteDocumentCache.getEntry(e,k).next(V=>{m=m.insert(k,V)}))).next(()=>this.populateOverlays(e,b,h)).next(()=>this.computeViews(e,m,b,Le())).next(k=>({batchId:g,changes:VI(k)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new fe(n)).next(i=>{let l=hl();return i.isFoundDocument()&&(l=l.insert(i.key,i)),l})}getDocumentsMatchingCollectionGroupQuery(e,n,i,l){const h=n.collectionGroup;let f=hl();return this.indexManager.getCollectionParents(e,h).next(g=>K.forEach(g,m=>{const b=function(k,C){return new Xc(C,null,k.explicitOrderBy.slice(),k.filters.slice(),k.limit,k.limitType,k.startAt,k.endAt)}(n,m.child(h));return this.getDocumentsMatchingCollectionQuery(e,b,i,l).next(k=>{k.forEach((C,V)=>{f=f.insert(C,V)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(e,n,i,l){let h;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(f=>(h=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,h,l))).next(f=>{h.forEach((m,b)=>{const k=b.getKey();f.get(k)===null&&(f=f.insert(k,Ht.newInvalidDocument(k)))});let g=hl();return f.forEach((m,b)=>{const k=h.get(m);k!==void 0&&vl(k.mutation,b,_a.empty(),tn.now()),Yc(n,b)&&(g=g.insert(m,b))}),g})}}/**
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
*/class DC{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return K.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ls(i.createTime)}}(n)),K.resolve()}getNamedQuery(e,n){return K.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(i){return{name:i.name,query:SC(i.bundledQuery),readTime:Ls(i.readTime)}}(n)),K.resolve()}}/**
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
*/class xC{constructor(){this.overlays=new ht(fe.comparator),this.Qr=new Map}getOverlay(e,n){return K.resolve(this.overlays.get(n))}getOverlays(e,n){const i=ki();return K.forEach(n,l=>this.getOverlay(e,l).next(h=>{h!==null&&i.set(l,h)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((l,h)=>{this.bt(e,n,h)}),K.resolve()}removeOverlaysForBatchId(e,n,i){const l=this.Qr.get(i);return l!==void 0&&(l.forEach(h=>this.overlays=this.overlays.remove(h)),this.Qr.delete(i)),K.resolve()}getOverlaysForCollection(e,n,i){const l=ki(),h=n.length+1,f=new fe(n.child("")),g=this.overlays.getIteratorFrom(f);for(;g.hasNext();){const m=g.getNext().value,b=m.getKey();if(!n.isPrefixOf(b.path))break;b.path.length===h&&m.largestBatchId>i&&l.set(m.getKey(),m)}return K.resolve(l)}getOverlaysForCollectionGroup(e,n,i,l){let h=new ht((b,k)=>b-k);const f=this.overlays.getIterator();for(;f.hasNext();){const b=f.getNext().value;if(b.getKey().getCollectionGroup()===n&&b.largestBatchId>i){let k=h.get(b.largestBatchId);k===null&&(k=ki(),h=h.insert(b.largestBatchId,k)),k.set(b.getKey(),b)}}const g=ki(),m=h.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((b,k)=>g.set(b,k)),!(g.size()>=l)););return K.resolve(g)}bt(e,n,i){const l=this.overlays.get(i.key);if(l!==null){const f=this.Qr.get(l.largestBatchId).delete(i.key);this.Qr.set(l.largestBatchId,f)}this.overlays=this.overlays.insert(i.key,new eC(n,i));let h=this.Qr.get(n);h===void 0&&(h=Le(),this.Qr.set(n,h)),this.Qr.set(n,h.add(i.key))}}/**
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
*/class OC{constructor(){this.sessionToken=Ut.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,K.resolve()}}/**
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
*/class bp{constructor(){this.$r=new kt(Pt.Ur),this.Kr=new kt(Pt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const i=new Pt(e,n);this.$r=this.$r.add(i),this.Kr=this.Kr.add(i)}Gr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.zr(new Pt(e,n))}jr(e,n){e.forEach(i=>this.removeReference(i,n))}Hr(e){const n=new fe(new st([])),i=new Pt(n,e),l=new Pt(n,e+1),h=[];return this.Kr.forEachInRange([i,l],f=>{this.zr(f),h.push(f.key)}),h}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new fe(new st([])),i=new Pt(n,e),l=new Pt(n,e+1);let h=Le();return this.Kr.forEachInRange([i,l],f=>{h=h.add(f.key)}),h}containsKey(e){const n=new Pt(e,0),i=this.$r.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class Pt{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return fe.comparator(e.key,n.key)||Te(e.Zr,n.Zr)}static Wr(e,n){return Te(e.Zr,n.Zr)||fe.comparator(e.key,n.key)}}/**
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
*/class LC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new kt(Pt.Ur)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,l){const h=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new ZI(h,n,i,l);this.mutationQueue.push(f);for(const g of l)this.Xr=this.Xr.add(new Pt(g.key,h)),this.indexManager.addToCollectionParentIndex(e,g.key.path.popLast());return K.resolve(f)}lookupMutationBatch(e,n){return K.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,l=this.ti(i),h=l<0?0:l;return K.resolve(this.mutationQueue.length>h?this.mutationQueue[h]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?pI:this.nr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new Pt(n,0),l=new Pt(n,Number.POSITIVE_INFINITY),h=[];return this.Xr.forEachInRange([i,l],f=>{const g=this.ei(f.Zr);h.push(g)}),K.resolve(h)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new kt(Te);return n.forEach(l=>{const h=new Pt(l,0),f=new Pt(l,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([h,f],g=>{i=i.add(g.Zr)})}),K.resolve(this.ni(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,l=i.length+1;let h=i;fe.isDocumentKey(h)||(h=h.child(""));const f=new Pt(new fe(h),0);let g=new kt(Te);return this.Xr.forEachWhile(m=>{const b=m.key.path;return!!i.isPrefixOf(b)&&(b.length===l&&(g=g.add(m.Zr)),!0)},f),K.resolve(this.ni(g))}ni(e){const n=[];return e.forEach(i=>{const l=this.ei(i);l!==null&&n.push(l)}),n}removeMutationBatch(e,n){tt(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Xr;return K.forEach(n.mutations,l=>{const h=new Pt(l.key,n.batchId);return i=i.delete(h),this.referenceDelegate.markPotentiallyOrphaned(e,l.key)}).next(()=>{this.Xr=i})}sr(e){}containsKey(e,n){const i=new Pt(n,0),l=this.Xr.firstAfterOrEqual(i);return K.resolve(n.isEqual(l&&l.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
*/class MC{constructor(e){this.ii=e,this.docs=function(){return new ht(fe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,l=this.docs.get(i),h=l?l.size:0,f=this.ii(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:f}),this.size+=f-h,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return K.resolve(i?i.document.mutableCopy():Ht.newInvalidDocument(n))}getEntries(e,n){let i=Oa();return n.forEach(l=>{const h=this.docs.get(l);i=i.insert(l,h?h.document.mutableCopy():Ht.newInvalidDocument(l))}),K.resolve(i)}getDocumentsMatchingQuery(e,n,i,l){let h=Oa();const f=n.path,g=new fe(f.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(g);for(;m.hasNext();){const{key:b,value:{document:k}}=m.getNext();if(!f.isPrefixOf(b.path))break;b.path.length>f.length+1||cI(uI(k),i)<=0||(l.has(k.key)||Yc(n,k))&&(h=h.insert(k.key,k.mutableCopy()))}return K.resolve(h)}getAllFromCollectionGroup(e,n,i,l){ve(9500)}si(e,n){return K.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new FC(this)}getSize(e){return K.resolve(this.size)}}class FC extends PC{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((i,l)=>{l.isValidDocument()?n.push(this.Br.addEntry(e,l)):this.Br.removeEntry(i)}),K.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
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
*/class UC{constructor(e){this.persistence=e,this.oi=new Oi(n=>pp(n),gp),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this._i=0,this.ai=new bp,this.targetCount=0,this.ui=qs.cr()}forEachTarget(e,n){return this.oi.forEach((i,l)=>n(l)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this._i&&(this._i=n),K.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new qs(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,K.resolve()}updateTargetData(e,n){return this.Tr(n),K.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,n,i){let l=0;const h=[];return this.oi.forEach((f,g)=>{g.sequenceNumber<=n&&i.get(g.targetId)===null&&(this.oi.delete(f),h.push(this.removeMatchingKeysForTargetId(e,g.targetId)),l++)}),K.waitFor(h).next(()=>l)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,n){const i=this.oi.get(n)||null;return K.resolve(i)}addMatchingKeys(e,n,i){return this.ai.Gr(n,i),K.resolve()}removeMatchingKeys(e,n,i){this.ai.jr(n,i);const l=this.persistence.referenceDelegate,h=[];return l&&n.forEach(f=>{h.push(l.markPotentiallyOrphaned(e,f))}),K.waitFor(h)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),K.resolve()}getMatchingKeysForTargetId(e,n){const i=this.ai.Yr(n);return K.resolve(i)}containsKey(e,n){return K.resolve(this.ai.containsKey(n))}}/**
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
*/class Pw{constructor(e,n){this.ci={},this.overlays={},this.li=new Kc(0),this.hi=!1,this.hi=!0,this.Pi=new OC,this.referenceDelegate=e(this),this.Ti=new UC(this),this.indexManager=new kC,this.remoteDocumentCache=function(i){return new MC(i)}(i=>this.referenceDelegate.Ii(i)),this.serializer=new wC(n),this.Ei=new DC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.ci[e.toKey()];return i||(i=new LC(n,this.referenceDelegate),this.ci[e.toKey()]=i),i}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,i){ne("MemoryPersistence","Starting transaction:",e);const l=new jC(this.li.next());return this.referenceDelegate.di(),i(l).next(h=>this.referenceDelegate.Ai(l).next(()=>h)).toPromise().then(h=>(l.raiseOnCommittedEvent(),h))}Ri(e,n){return K.or(Object.values(this.ci).map(i=>()=>i.containsKey(e,n)))}}class jC extends dI{constructor(e){super(),this.currentSequenceNumber=e}}class wp{constructor(e){this.persistence=e,this.Vi=new bp,this.mi=null}static fi(e){return new wp(e)}get gi(){if(this.mi)return this.mi;throw ve(60996)}addReference(e,n,i){return this.Vi.addReference(i,n),this.gi.delete(i.toString()),K.resolve()}removeReference(e,n,i){return this.Vi.removeReference(i,n),this.gi.add(i.toString()),K.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),K.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(l=>this.gi.add(l.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(l=>{l.forEach(h=>this.gi.add(h.toString()))}).next(()=>i.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.gi,i=>{const l=fe.fromPath(i);return this.pi(e,l).next(h=>{h||n.removeEntry(l,me.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(i=>{i?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return K.or([()=>K.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class Mc{constructor(e,n){this.persistence=e,this.yi=new Oi(i=>gI(i.path),(i,l)=>i.isEqual(l)),this.garbageCollector=AC(this,n)}static fi(e,n){return new Mc(e,n)}di(){}Ai(e){return K.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>n.next(l=>i+l))}Sr(e){let n=0;return this.yr(e,i=>{n++}).next(()=>n)}yr(e,n){return K.forEach(this.yi,(i,l)=>this.Dr(e,i,l).next(h=>h?K.resolve():n(l)))}removeTargets(e,n,i){return this.persistence.getTargetCache().removeTargets(e,n,i)}removeOrphanedDocuments(e,n){let i=0;const l=this.persistence.getRemoteDocumentCache(),h=l.newChangeBuffer();return l.si(e,f=>this.Dr(e,f,n).next(g=>{g||(i++,h.removeEntry(f,me.min()))})).next(()=>h.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),K.resolve()}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,n,i){return this.yi.set(i,e.currentSequenceNumber),K.resolve()}removeReference(e,n,i){return this.yi.set(i,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),K.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=bc(e.data.value)),n}Dr(e,n,i){return K.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const l=this.yi.get(n);return K.resolve(l!==void 0&&l>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
*/class Sp{constructor(e,n,i,l){this.targetId=e,this.fromCache=n,this.ds=i,this.As=l}static Rs(e,n){let i=Le(),l=Le();for(const h of n.docChanges)switch(h.type){case 0:i=i.add(h.doc.key);break;case 1:l=l.add(h.doc.key)}return new Sp(e,n.fromCache,i,l)}}/**
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
*/class zC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
*/class VC{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return vk()?8:fI(Bt())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,i,l){const h={result:null};return this.ws(e,n).next(f=>{h.result=f}).next(()=>{if(!h.result)return this.Ss(e,n,l,i).next(f=>{h.result=f})}).next(()=>{if(h.result)return;const f=new zC;return this.bs(e,n,f).next(g=>{if(h.result=g,this.fs)return this.Ds(e,n,f,g.size)})}).next(()=>h.result)}Ds(e,n,i,l){return i.documentReadCount<this.gs?(Cs()<=Pe.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",As(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),K.resolve()):(Cs()<=Pe.DEBUG&&ne("QueryEngine","Query:",As(n),"scans",i.documentReadCount,"local documents and returns",l,"documents as results."),i.documentReadCount>this.ps*l?(Cs()<=Pe.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",As(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,or(n))):K.resolve())}ws(e,n){if(nb(n))return K.resolve(null);let i=or(n);return this.indexManager.getIndexType(e,i).next(l=>l===0?null:(n.limit!==null&&l===1&&(n=Vf(n,null,"F"),i=or(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(h=>{const f=Le(...h);return this.ys.getDocuments(e,f).next(g=>this.indexManager.getMinOffset(e,i).next(m=>{const b=this.vs(n,g);return this.Cs(n,b,f,m.readTime)?this.ws(e,Vf(n,null,"F")):this.Fs(e,b,n,m)}))})))}Ss(e,n,i,l){return nb(n)||l.isEqual(me.min())?K.resolve(null):this.ys.getDocuments(e,i).next(h=>{const f=this.vs(n,h);return this.Cs(n,f,i,l)?K.resolve(null):(Cs()<=Pe.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),As(n)),this.Fs(e,f,n,lI(l,El)).next(g=>g))})}vs(e,n){let i=new kt(hw(e));return n.forEach((l,h)=>{Yc(e,h)&&(i=i.add(h))}),i}Cs(e,n,i,l){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const h=e.limitType==="F"?n.last():n.first();return!!h&&(h.hasPendingWrites||h.version.compareTo(l)>0)}bs(e,n,i){return Cs()<=Pe.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",As(n)),this.ys.getDocumentsMatchingQuery(e,n,Ra.min(),i)}Fs(e,n,i,l){return this.ys.getDocumentsMatchingQuery(e,i,l).next(h=>(n.forEach(f=>{h=h.insert(f.key,f)}),h))}}/**
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
*/const kp="LocalStore",qC=3e8;class $C{constructor(e,n,i,l){this.persistence=e,this.Ms=n,this.serializer=l,this.xs=new ht(Te),this.Os=new Oi(h=>pp(h),gp),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(i)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NC(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function HC(a,e,n,i){return new $C(a,e,n,i)}async function Rw(a,e){const n=xe(a);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let l;return n.mutationQueue.getAllMutationBatches(i).next(h=>(l=h,n.Ls(e),n.mutationQueue.getAllMutationBatches(i))).next(h=>{const f=[],g=[];let m=Le();for(const b of l){f.push(b.batchId);for(const k of b.mutations)m=m.add(k.key)}for(const b of h){g.push(b.batchId);for(const k of b.mutations)m=m.add(k.key)}return n.localDocuments.getDocuments(i,m).next(b=>({ks:b,removedBatchIds:f,addedBatchIds:g}))})})}function Nw(a){const e=xe(a);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function BC(a,e){const n=xe(a),i=e.snapshotVersion;let l=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",h=>{const f=n.Bs.newChangeBuffer({trackRemovals:!0});l=n.xs;const g=[];e.targetChanges.forEach((k,C)=>{const V=l.get(C);if(!V)return;g.push(n.Ti.removeMatchingKeys(h,k.removedDocuments,C).next(()=>n.Ti.addMatchingKeys(h,k.addedDocuments,C)));let q=V.withSequenceNumber(h.currentSequenceNumber);e.targetMismatches.get(C)!==null?q=q.withResumeToken(Ut.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):k.resumeToken.approximateByteSize()>0&&(q=q.withResumeToken(k.resumeToken,i)),l=l.insert(C,q),function(G,ae,te){return G.resumeToken.approximateByteSize()===0||ae.snapshotVersion.toMicroseconds()-G.snapshotVersion.toMicroseconds()>=qC?!0:te.addedDocuments.size+te.modifiedDocuments.size+te.removedDocuments.size>0}(V,q,k)&&g.push(n.Ti.updateTargetData(h,q))});let m=Oa(),b=Le();if(e.documentUpdates.forEach(k=>{e.resolvedLimboDocuments.has(k)&&g.push(n.persistence.referenceDelegate.updateLimboDocument(h,k))}),g.push(WC(h,f,e.documentUpdates).next(k=>{m=k.qs,b=k.Qs})),!i.isEqual(me.min())){const k=n.Ti.getLastRemoteSnapshotVersion(h).next(C=>n.Ti.setTargetsMetadata(h,h.currentSequenceNumber,i));g.push(k)}return K.waitFor(g).next(()=>f.apply(h)).next(()=>n.localDocuments.getLocalViewOfDocuments(h,m,b)).next(()=>m)}).then(h=>(n.xs=l,h))}function WC(a,e,n){let i=Le(),l=Le();return n.forEach(h=>i=i.add(h)),e.getEntries(a,i).next(h=>{let f=Oa();return n.forEach((g,m)=>{const b=h.get(g);m.isFoundDocument()!==b.isFoundDocument()&&(l=l.add(g)),m.isNoDocument()&&m.version.isEqual(me.min())?(e.removeEntry(g,m.readTime),f=f.insert(g,m)):!b.isValidDocument()||m.version.compareTo(b.version)>0||m.version.compareTo(b.version)===0&&b.hasPendingWrites?(e.addEntry(m),f=f.insert(g,m)):ne(kp,"Ignoring outdated watch update for ",g,". Current version:",b.version," Watch version:",m.version)}),{qs:f,Qs:l}})}function KC(a,e){const n=xe(a);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let l;return n.Ti.getTargetData(i,e).next(h=>h?(l=h,K.resolve(l)):n.Ti.allocateTargetId(i).next(f=>(l=new Ta(e,f,"TargetPurposeListen",i.currentSequenceNumber),n.Ti.addTargetData(i,l).next(()=>l))))}).then(i=>{const l=n.xs.get(i.targetId);return(l===null||i.snapshotVersion.compareTo(l.snapshotVersion)>0)&&(n.xs=n.xs.insert(i.targetId,i),n.Os.set(e,i.targetId)),i})}async function Wf(a,e,n){const i=xe(a),l=i.xs.get(e),h=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",h,f=>i.persistence.referenceDelegate.removeTarget(f,l))}catch(f){if(!Qs(f))throw f;ne(kp,`Failed to update sequence numbers for target ${e}: ${f}`)}i.xs=i.xs.remove(e),i.Os.delete(l.target)}function gb(a,e,n){const i=xe(a);let l=me.min(),h=Le();return i.persistence.runTransaction("Execute query","readwrite",f=>function(g,m,b){const k=xe(g),C=k.Os.get(b);return C!==void 0?K.resolve(k.xs.get(C)):k.Ti.getTargetData(m,b)}(i,f,or(e)).next(g=>{if(g)return l=g.lastLimboFreeSnapshotVersion,i.Ti.getMatchingKeysForTargetId(f,g.targetId).next(m=>{h=m})}).next(()=>i.Ms.getDocumentsMatchingQuery(f,e,n?l:me.min(),n?h:Le())).next(g=>(QC(i,UI(e),g),{documents:g,$s:h})))}function QC(a,e,n){let i=a.Ns.get(e)||me.min();n.forEach((l,h)=>{h.readTime.compareTo(i)>0&&(i=h.readTime)}),a.Ns.set(e,i)}class mb{constructor(){this.activeTargetIds=HI()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GC{constructor(){this.xo=new mb,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,i){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new mb,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
*/class XC{No(e){}shutdown(){}}/**
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
*/const yb="ConnectivityMonitor";class vb{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){ne(yb,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){ne(yb,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
*/let dc=null;function Kf(){return dc===null?dc=function(){return 268435456+Math.round(2147483648*Math.random())}():dc++,"0x"+dc.toString(16)}/**
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
*/const vf="RestConnection",JC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class YC{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${i}/databases/${l}`,this.Go=this.databaseId.database===Nc?`project_id=${i}`:`project_id=${i}&database_id=${l}`}zo(e,n,i,l,h){const f=Kf(),g=this.jo(e,n.toUriEncodedString());ne(vf,`Sending RPC '${e}' ${f}:`,g,i);const m={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(m,l,h);const{host:b}=new URL(g),k=Cl(b);return this.Jo(e,g,m,i,k).then(C=>(ne(vf,`Received RPC '${e}' ${f}: `,C),C),C=>{throw Us(vf,`RPC '${e}' ${f} failed with error: `,C,"url: ",g,"request:",i),C})}Yo(e,n,i,l,h,f){return this.zo(e,n,i,l,h)}Ho(e,n,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ks}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((l,h)=>e[h]=l),i&&i.headers.forEach((l,h)=>e[h]=l)}jo(e,n){const i=JC[e];return`${this.Ko}/v1/${n}:${i}`}terminate(){}}/**
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
*/class ZC{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
*/const qt="WebChannelConnection";class e2 extends YC{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,i,l,h){const f=Kf();return new Promise((g,m)=>{const b=new $0;b.setWithCredentials(!0),b.listenOnce(H0.COMPLETE,()=>{try{switch(b.getLastErrorCode()){case vc.NO_ERROR:const C=b.getResponseJson();ne(qt,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(C)),g(C);break;case vc.TIMEOUT:ne(qt,`RPC '${e}' ${f} timed out`),m(new ce(ee.DEADLINE_EXCEEDED,"Request time out"));break;case vc.HTTP_ERROR:const V=b.getStatus();if(ne(qt,`RPC '${e}' ${f} failed with status:`,V,"response text:",b.getResponseText()),V>0){let q=b.getResponseJson();Array.isArray(q)&&(q=q[0]);const G=q==null?void 0:q.error;if(G&&G.status&&G.message){const ae=function(te){const Ae=te.toLowerCase().replace(/_/g,"-");return Object.values(ee).indexOf(Ae)>=0?Ae:ee.UNKNOWN}(G.status);m(new ce(ae,G.message))}else m(new ce(ee.UNKNOWN,"Server responded with status "+b.getStatus()))}else m(new ce(ee.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{l_:e,streamId:f,h_:b.getLastErrorCode(),P_:b.getLastError()})}}finally{ne(qt,`RPC '${e}' ${f} completed.`)}});const k=JSON.stringify(l);ne(qt,`RPC '${e}' ${f} sending request:`,l),b.send(n,"POST",k,i,15)})}T_(e,n,i){const l=Kf(),h=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=K0(),g=W0(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},b=this.longPollingOptions.timeoutSeconds;b!==void 0&&(m.longPollingTimeout=Math.round(1e3*b)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Ho(m.initMessageHeaders,n,i),m.encodeInitMessageHeaders=!0;const k=h.join("");ne(qt,`Creating RPC '${e}' stream ${l}: ${k}`,m);const C=f.createWebChannel(k,m);let V=!1,q=!1;const G=new ZC({Zo:te=>{q?ne(qt,`Not sending because RPC '${e}' stream ${l} is closed:`,te):(V||(ne(qt,`Opening RPC '${e}' stream ${l} transport.`),C.open(),V=!0),ne(qt,`RPC '${e}' stream ${l} sending:`,te),C.send(te))},Xo:()=>C.close()}),ae=(te,Ae,Se)=>{te.listen(Ae,ye=>{try{Se(ye)}catch(Oe){setTimeout(()=>{throw Oe},0)}})};return ae(C,cl.EventType.OPEN,()=>{q||(ne(qt,`RPC '${e}' stream ${l} transport opened.`),G.__())}),ae(C,cl.EventType.CLOSE,()=>{q||(q=!0,ne(qt,`RPC '${e}' stream ${l} transport closed`),G.u_())}),ae(C,cl.EventType.ERROR,te=>{q||(q=!0,Us(qt,`RPC '${e}' stream ${l} transport errored. Name:`,te.name,"Message:",te.message),G.u_(new ce(ee.UNAVAILABLE,"The operation could not be completed")))}),ae(C,cl.EventType.MESSAGE,te=>{var Ae;if(!q){const Se=te.data[0];tt(!!Se,16349);const ye=Se,Oe=(ye==null?void 0:ye.error)||((Ae=ye[0])===null||Ae===void 0?void 0:Ae.error);if(Oe){ne(qt,`RPC '${e}' stream ${l} received error:`,Oe);const pe=Oe.status;let Re=function(E){const T=gt[E];if(T!==void 0)return bw(T)}(pe),N=Oe.message;Re===void 0&&(Re=ee.INTERNAL,N="Unknown error status: "+pe+" with message "+Oe.message),q=!0,G.u_(new ce(Re,N)),C.close()}else ne(qt,`RPC '${e}' stream ${l} received:`,Se),G.c_(Se)}}),ae(g,B0.STAT_EVENT,te=>{te.stat===xf.PROXY?ne(qt,`RPC '${e}' stream ${l} detected buffering proxy`):te.stat===xf.NOPROXY&&ne(qt,`RPC '${e}' stream ${l} detected no buffering proxy`)}),setTimeout(()=>{G.a_()},0),G}}function bf(){return typeof document<"u"?document:null}/**
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
*/function Dw(a){return new oC(a,!0)}/**
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
*/class xw{constructor(e,n,i=1e3,l=1.5,h=6e4){this.xi=e,this.timerId=n,this.I_=i,this.E_=l,this.d_=h,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const n=Math.floor(this.A_+this.g_()),i=Math.max(0,Date.now()-this.V_),l=Math.max(0,n-i);l>0&&ne("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.A_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,l,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
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
*/const bb="PersistentStream";class t2{constructor(e,n,i,l,h,f,g,m){this.xi=e,this.y_=i,this.w_=l,this.connection=h,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=g,this.listener=m,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new xw(e,n)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,n){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():n&&n.code===ee.RESOURCE_EXHAUSTED?($r(n.toString()),$r("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):n&&n.code===ee.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),n=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,l])=>{this.S_===n&&this.K_(i,l)},i=>{e(()=>{const l=new ce(ee.UNKNOWN,"Fetching auth token failed: "+i.message);return this.W_(l)})})}K_(e,n){const i=this.U_(this.S_);this.stream=this.G_(e,n),this.stream.e_(()=>{i(()=>this.listener.e_())}),this.stream.n_(()=>{i(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(l=>{i(()=>this.W_(l))}),this.stream.onMessage(l=>{i(()=>++this.v_==1?this.z_(l):this.onNext(l))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return ne(bb,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return n=>{this.xi.enqueueAndForget(()=>this.S_===e?n():(ne(bb,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class n2 extends t2{constructor(e,n,i,l,h,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,l,f),this.serializer=h}G_(e,n){return this.connection.T_("Listen",e,n)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const n=dC(this.serializer,e),i=function(l){if(!("targetChange"in l))return me.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?me.min():h.readTime?Ls(h.readTime):me.min()}(e);return this.listener.j_(n,i)}H_(e){const n={};n.database=hb(this.serializer),n.addTarget=function(l,h){let f;const g=h.target;if(f=zf(g)?{documents:fC(l,g)}:{query:pC(l,g).gt},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=uC(l,h.resumeToken);const m=Hf(l,h.expectedCount);m!==null&&(f.expectedCount=m)}else if(h.snapshotVersion.compareTo(me.min())>0){f.readTime=lC(l,h.snapshotVersion.toTimestamp());const m=Hf(l,h.expectedCount);m!==null&&(f.expectedCount=m)}return f}(this.serializer,e);const i=mC(this.serializer,e);i&&(n.labels=i),this.L_(n)}J_(e){const n={};n.database=hb(this.serializer),n.removeTarget=e,this.L_(n)}}/**
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
*/class r2{}class a2 extends r2{constructor(e,n,i,l){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=l,this.na=!1}ra(){if(this.na)throw new ce(ee.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,i,l){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,f])=>this.connection.zo(e,Bf(n,i),l,h,f)).catch(h=>{throw h.name==="FirebaseError"?(h.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ce(ee.UNKNOWN,h.toString())})}Yo(e,n,i,l,h){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,g])=>this.connection.Yo(e,Bf(n,i),l,f,g,h)).catch(f=>{throw f.name==="FirebaseError"?(f.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new ce(ee.UNKNOWN,f.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class i2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?($r(n),this.oa=!1):ne("OnlineStateTracker",n)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
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
*/const $s="RemoteStore";class s2{constructor(e,n,i,l,h){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=h,this.Ea.No(f=>{i.enqueueAndForget(async()=>{Ml(this)&&(ne($s,"Restarting streams for network reachability change."),await async function(g){const m=xe(g);m.Ta.add(4),await Ll(m),m.da.set("Unknown"),m.Ta.delete(4),await nh(m)}(this))})}),this.da=new i2(i,l)}}async function nh(a){if(Ml(a))for(const e of a.Ia)await e(!0)}async function Ll(a){for(const e of a.Ia)await e(!1)}function Ow(a,e){const n=xe(a);n.Pa.has(e.targetId)||(n.Pa.set(e.targetId,e),Ip(n)?Tp(n):Gs(n).M_()&&_p(n,e))}function Ep(a,e){const n=xe(a),i=Gs(n);n.Pa.delete(e),i.M_()&&Lw(n,e),n.Pa.size===0&&(i.M_()?i.N_():Ml(n)&&n.da.set("Unknown"))}function _p(a,e){if(a.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const n=a.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Gs(a).H_(e)}function Lw(a,e){a.Aa.Ke(e),Gs(a).J_(e)}function Tp(a){a.Aa=new rC({getRemoteKeysForTarget:e=>a.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>a.Pa.get(e)||null,Pt:()=>a.datastore.serializer.databaseId}),Gs(a).start(),a.da._a()}function Ip(a){return Ml(a)&&!Gs(a).F_()&&a.Pa.size>0}function Ml(a){return xe(a).Ta.size===0}function Mw(a){a.Aa=void 0}async function o2(a){a.da.set("Online")}async function l2(a){a.Pa.forEach((e,n)=>{_p(a,e)})}async function u2(a,e){Mw(a),Ip(a)?(a.da.ca(e),Tp(a)):a.da.set("Unknown")}async function c2(a,e,n){if(a.da.set("Online"),e instanceof Sw&&e.state===2&&e.cause)try{await async function(i,l){const h=l.cause;for(const f of l.targetIds)i.Pa.has(f)&&(await i.remoteSyncer.rejectListen(f,h),i.Pa.delete(f),i.Aa.removeTarget(f))}(a,e)}catch(i){ne($s,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await wb(a,i)}else if(e instanceof Sc?a.Aa.Xe(e):e instanceof ww?a.Aa.ot(e):a.Aa.nt(e),!n.isEqual(me.min()))try{const i=await Nw(a.localStore);n.compareTo(i)>=0&&await function(l,h){const f=l.Aa.It(h);return f.targetChanges.forEach((g,m)=>{if(g.resumeToken.approximateByteSize()>0){const b=l.Pa.get(m);b&&l.Pa.set(m,b.withResumeToken(g.resumeToken,h))}}),f.targetMismatches.forEach((g,m)=>{const b=l.Pa.get(g);if(!b)return;l.Pa.set(g,b.withResumeToken(Ut.EMPTY_BYTE_STRING,b.snapshotVersion)),Lw(l,g);const k=new Ta(b.target,g,m,b.sequenceNumber);_p(l,k)}),l.remoteSyncer.applyRemoteEvent(f)}(a,n)}catch(i){ne($s,"Failed to raise snapshot:",i),await wb(a,i)}}async function wb(a,e,n){if(!Qs(e))throw e;a.Ta.add(1),await Ll(a),a.da.set("Offline"),n||(n=()=>Nw(a.localStore)),a.asyncQueue.enqueueRetryable(async()=>{ne($s,"Retrying IndexedDB access"),await n(),a.Ta.delete(1),await nh(a)})}async function Sb(a,e){const n=xe(a);n.asyncQueue.verifyOperationInProgress(),ne($s,"RemoteStore received new credentials");const i=Ml(n);n.Ta.add(3),await Ll(n),i&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ta.delete(3),await nh(n)}async function h2(a,e){const n=xe(a);e?(n.Ta.delete(2),await nh(n)):e||(n.Ta.add(2),await Ll(n),n.da.set("Unknown"))}function Gs(a){return a.Ra||(a.Ra=function(e,n,i){const l=xe(e);return l.ra(),new n2(n,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,i)}(a.datastore,a.asyncQueue,{e_:o2.bind(null,a),n_:l2.bind(null,a),i_:u2.bind(null,a),j_:c2.bind(null,a)}),a.Ia.push(async e=>{e?(a.Ra.O_(),Ip(a)?Tp(a):a.da.set("Unknown")):(await a.Ra.stop(),Mw(a))})),a.Ra}/**
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
*/class Cp{constructor(e,n,i,l,h){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=l,this.removalCallback=h,this.deferred=new _i,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,l,h){const f=Date.now()+i,g=new Cp(e,n,f,l,h);return g.start(i),g}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(ee.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fw(a,e){if($r("AsyncQueue",`${e}: ${a}`),Qs(a))return new ce(ee.UNAVAILABLE,`${e}: ${a}`);throw a}/**
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
*/class Ms{static emptySet(e){return new Ms(e.comparator)}constructor(e){this.comparator=e?(n,i)=>e(n,i)||fe.comparator(n.key,i.key):(n,i)=>fe.comparator(n.key,i.key),this.keyedMap=hl(),this.sortedSet=new ht(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ms)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const l=n.getNext().key,h=i.getNext().key;if(!l.isEqual(h))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Ms;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
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
*/class kb{constructor(){this.ma=new ht(fe.comparator)}track(e){const n=e.doc.key,i=this.ma.get(n);i?e.type!==0&&i.type===3?this.ma=this.ma.insert(n,e):e.type===3&&i.type!==1?this.ma=this.ma.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ma=this.ma.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ma=this.ma.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ma=this.ma.remove(n):e.type===1&&i.type===2?this.ma=this.ma.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ma=this.ma.insert(n,{type:2,doc:e.doc}):ve(63341,{Vt:e,fa:i}):this.ma=this.ma.insert(n,e)}ga(){const e=[];return this.ma.inorderTraversal((n,i)=>{e.push(i)}),e}}class Hs{constructor(e,n,i,l,h,f,g,m,b){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=l,this.mutatedKeys=h,this.fromCache=f,this.syncStateChanged=g,this.excludesMetadataChanges=m,this.hasCachedResults=b}static fromInitialDocuments(e,n,i,l,h){const f=[];return n.forEach(g=>{f.push({type:0,doc:g})}),new Hs(e,n,Ms.emptySet(n),f,i,l,!0,!1,h)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let l=0;l<n.length;l++)if(n[l].type!==i[l].type||!n[l].doc.isEqual(i[l].doc))return!1;return!0}}/**
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
*/class d2{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class f2{constructor(){this.queries=Eb(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(e,n){const i=xe(e),l=i.queries;i.queries=Eb(),l.forEach((h,f)=>{for(const g of f.ya)g.onError(n)})})(this,new ce(ee.ABORTED,"Firestore shutting down"))}}function Eb(){return new Oi(a=>cw(a),Jc)}async function p2(a,e){const n=xe(a);let i=3;const l=e.query;let h=n.queries.get(l);h?!h.wa()&&e.Sa()&&(i=2):(h=new d2,i=e.Sa()?0:1);try{switch(i){case 0:h.pa=await n.onListen(l,!0);break;case 1:h.pa=await n.onListen(l,!1);break;case 2:await n.onFirstRemoteStoreListen(l)}}catch(f){const g=Fw(f,`Initialization of query '${As(e.query)}' failed`);return void e.onError(g)}n.queries.set(l,h),h.ya.push(e),e.Da(n.onlineState),h.pa&&e.va(h.pa)&&Ap(n)}async function g2(a,e){const n=xe(a),i=e.query;let l=3;const h=n.queries.get(i);if(h){const f=h.ya.indexOf(e);f>=0&&(h.ya.splice(f,1),h.ya.length===0?l=e.Sa()?0:1:!h.wa()&&e.Sa()&&(l=2))}switch(l){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function m2(a,e){const n=xe(a);let i=!1;for(const l of e){const h=l.query,f=n.queries.get(h);if(f){for(const g of f.ya)g.va(l)&&(i=!0);f.pa=l}}i&&Ap(n)}function y2(a,e,n){const i=xe(a),l=i.queries.get(e);if(l)for(const h of l.ya)h.onError(n);i.queries.delete(e)}function Ap(a){a.ba.forEach(e=>{e.next()})}var Qf,_b;(_b=Qf||(Qf={})).Ca="default",_b.Cache="cache";class v2{constructor(e,n,i){this.query=e,this.Fa=n,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=i||{}}va(e){if(!this.options.includeMetadataChanges){const i=[];for(const l of e.docChanges)l.type!==3&&i.push(l);e=new Hs(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),n=!0):this.Na(e,this.onlineState)&&(this.Ba(e),n=!0),this.xa=e,n}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let n=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),n=!0),n}Na(e,n){if(!e.fromCache||!this.Sa())return!0;const i=n!=="Offline";return(!this.options.La||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const n=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ba(e){e=Hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==Qf.Cache}}/**
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
*/class Uw{constructor(e){this.key=e}}class jw{constructor(e){this.key=e}}class b2{constructor(e,n){this.query=e,this.Ga=n,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=Le(),this.mutatedKeys=Le(),this.Ha=hw(e),this.Ja=new Ms(this.Ha)}get Ya(){return this.Ga}Za(e,n){const i=n?n.Xa:new kb,l=n?n.Ja:this.Ja;let h=n?n.mutatedKeys:this.mutatedKeys,f=l,g=!1;const m=this.query.limitType==="F"&&l.size===this.query.limit?l.last():null,b=this.query.limitType==="L"&&l.size===this.query.limit?l.first():null;if(e.inorderTraversal((k,C)=>{const V=l.get(k),q=Yc(this.query,C)?C:null,G=!!V&&this.mutatedKeys.has(V.key),ae=!!q&&(q.hasLocalMutations||this.mutatedKeys.has(q.key)&&q.hasCommittedMutations);let te=!1;V&&q?V.data.isEqual(q.data)?G!==ae&&(i.track({type:3,doc:q}),te=!0):this.eu(V,q)||(i.track({type:2,doc:q}),te=!0,(m&&this.Ha(q,m)>0||b&&this.Ha(q,b)<0)&&(g=!0)):!V&&q?(i.track({type:0,doc:q}),te=!0):V&&!q&&(i.track({type:1,doc:V}),te=!0,(m||b)&&(g=!0)),te&&(q?(f=f.add(q),h=ae?h.add(k):h.delete(k)):(f=f.delete(k),h=h.delete(k)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const k=this.query.limitType==="F"?f.last():f.first();f=f.delete(k.key),h=h.delete(k.key),i.track({type:1,doc:k})}return{Ja:f,Xa:i,Cs:g,mutatedKeys:h}}eu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i,l){const h=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const f=e.Xa.ga();f.sort((k,C)=>function(V,q){const G=ae=>{switch(ae){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{Vt:ae})}};return G(V)-G(q)}(k.type,C.type)||this.Ha(k.doc,C.doc)),this.tu(i),l=l!=null&&l;const g=n&&!l?this.nu():[],m=this.ja.size===0&&this.current&&!l?1:0,b=m!==this.za;return this.za=m,f.length!==0||b?{snapshot:new Hs(this.query,e.Ja,h,f,e.mutatedKeys,m===0,b,!1,!!i&&i.resumeToken.approximateByteSize()>0),ru:g}:{ru:g}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new kb,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(n=>this.Ga=this.Ga.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ga=this.Ga.delete(n)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=Le(),this.Ja.forEach(i=>{this.iu(i.key)&&(this.ja=this.ja.add(i.key))});const n=[];return e.forEach(i=>{this.ja.has(i)||n.push(new jw(i))}),this.ja.forEach(i=>{e.has(i)||n.push(new Uw(i))}),n}su(e){this.Ga=e.$s,this.ja=Le();const n=this.Za(e.documents);return this.applyChanges(n,!0)}ou(){return Hs.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const Pp="SyncEngine";class w2{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class S2{constructor(e){this.key=e,this._u=!1}}class k2{constructor(e,n,i,l,h,f){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=l,this.currentUser=h,this.maxConcurrentLimboResolutions=f,this.au={},this.uu=new Oi(g=>cw(g),Jc),this.cu=new Map,this.lu=new Set,this.hu=new ht(fe.comparator),this.Pu=new Map,this.Tu=new bp,this.Iu={},this.Eu=new Map,this.du=qs.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function E2(a,e,n=!0){const i=Hw(a);let l;const h=i.uu.get(e);return h?(i.sharedClientState.addLocalQueryTarget(h.targetId),l=h.view.ou()):l=await zw(i,e,n,!0),l}async function _2(a,e){const n=Hw(a);await zw(n,e,!0,!1)}async function zw(a,e,n,i){const l=await KC(a.localStore,or(e)),h=l.targetId,f=a.sharedClientState.addLocalQueryTarget(h,n);let g;return i&&(g=await T2(a,e,h,f==="current",l.resumeToken)),a.isPrimaryClient&&n&&Ow(a.remoteStore,l),g}async function T2(a,e,n,i,l){a.Ru=(C,V,q)=>async function(G,ae,te,Ae){let Se=ae.view.Za(te);Se.Cs&&(Se=await gb(G.localStore,ae.query,!1).then(({documents:Re})=>ae.view.Za(Re,Se)));const ye=Ae&&Ae.targetChanges.get(ae.targetId),Oe=Ae&&Ae.targetMismatches.get(ae.targetId)!=null,pe=ae.view.applyChanges(Se,G.isPrimaryClient,ye,Oe);return Ib(G,ae.targetId,pe.ru),pe.snapshot}(a,C,V,q);const h=await gb(a.localStore,e,!0),f=new b2(e,h.$s),g=f.Za(h.documents),m=Ol.createSynthesizedTargetChangeForCurrentChange(n,i&&a.onlineState!=="Offline",l),b=f.applyChanges(g,a.isPrimaryClient,m);Ib(a,n,b.ru);const k=new w2(e,n,f);return a.uu.set(e,k),a.cu.has(n)?a.cu.get(n).push(e):a.cu.set(n,[e]),b.snapshot}async function I2(a,e,n){const i=xe(a),l=i.uu.get(e),h=i.cu.get(l.targetId);if(h.length>1)return i.cu.set(l.targetId,h.filter(f=>!Jc(f,e))),void i.uu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(l.targetId),i.sharedClientState.isActiveQueryTarget(l.targetId)||await Wf(i.localStore,l.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(l.targetId),n&&Ep(i.remoteStore,l.targetId),Gf(i,l.targetId)}).catch(Wc)):(Gf(i,l.targetId),await Wf(i.localStore,l.targetId,!0))}async function C2(a,e){const n=xe(a),i=n.uu.get(e),l=n.cu.get(i.targetId);n.isPrimaryClient&&l.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),Ep(n.remoteStore,i.targetId))}async function Vw(a,e){const n=xe(a);try{const i=await BC(n.localStore,e);e.targetChanges.forEach((l,h)=>{const f=n.Pu.get(h);f&&(tt(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1,22616),l.addedDocuments.size>0?f._u=!0:l.modifiedDocuments.size>0?tt(f._u,14607):l.removedDocuments.size>0&&(tt(f._u,42227),f._u=!1))}),await $w(n,i,e)}catch(i){await Wc(i)}}function Tb(a,e,n){const i=xe(a);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const l=[];i.uu.forEach((h,f)=>{const g=f.view.Da(e);g.snapshot&&l.push(g.snapshot)}),function(h,f){const g=xe(h);g.onlineState=f;let m=!1;g.queries.forEach((b,k)=>{for(const C of k.ya)C.Da(f)&&(m=!0)}),m&&Ap(g)}(i.eventManager,e),l.length&&i.au.j_(l),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function A2(a,e,n){const i=xe(a);i.sharedClientState.updateQueryState(e,"rejected",n);const l=i.Pu.get(e),h=l&&l.key;if(h){let f=new ht(fe.comparator);f=f.insert(h,Ht.newNoDocument(h,me.min()));const g=Le().add(h),m=new th(me.min(),new Map,new ht(Te),f,g);await Vw(i,m),i.hu=i.hu.remove(h),i.Pu.delete(e),Rp(i)}else await Wf(i.localStore,e,!1).then(()=>Gf(i,e,n)).catch(Wc)}function Gf(a,e,n=null){a.sharedClientState.removeLocalQueryTarget(e);for(const i of a.cu.get(e))a.uu.delete(i),n&&a.au.Vu(i,n);a.cu.delete(e),a.isPrimaryClient&&a.Tu.Hr(e).forEach(i=>{a.Tu.containsKey(i)||qw(a,i)})}function qw(a,e){a.lu.delete(e.path.canonicalString());const n=a.hu.get(e);n!==null&&(Ep(a.remoteStore,n),a.hu=a.hu.remove(e),a.Pu.delete(n),Rp(a))}function Ib(a,e,n){for(const i of n)i instanceof Uw?(a.Tu.addReference(i.key,e),P2(a,i)):i instanceof jw?(ne(Pp,"Document no longer in limbo: "+i.key),a.Tu.removeReference(i.key,e),a.Tu.containsKey(i.key)||qw(a,i.key)):ve(19791,{mu:i})}function P2(a,e){const n=e.key,i=n.path.canonicalString();a.hu.get(n)||a.lu.has(i)||(ne(Pp,"New document in limbo: "+n),a.lu.add(i),Rp(a))}function Rp(a){for(;a.lu.size>0&&a.hu.size<a.maxConcurrentLimboResolutions;){const e=a.lu.values().next().value;a.lu.delete(e);const n=new fe(st.fromString(e)),i=a.du.next();a.Pu.set(i,new S2(n)),a.hu=a.hu.insert(n,i),Ow(a.remoteStore,new Ta(or(uw(n.path)),i,"TargetPurposeLimboResolution",Kc.le))}}async function $w(a,e,n){const i=xe(a),l=[],h=[],f=[];i.uu.isEmpty()||(i.uu.forEach((g,m)=>{f.push(i.Ru(m,e,n).then(b=>{var k;if((b||n)&&i.isPrimaryClient){const C=b?!b.fromCache:(k=n==null?void 0:n.targetChanges.get(m.targetId))===null||k===void 0?void 0:k.current;i.sharedClientState.updateQueryState(m.targetId,C?"current":"not-current")}if(b){l.push(b);const C=Sp.Rs(m.targetId,b);h.push(C)}}))}),await Promise.all(f),i.au.j_(l),await async function(g,m){const b=xe(g);try{await b.persistence.runTransaction("notifyLocalViewChanges","readwrite",k=>K.forEach(m,C=>K.forEach(C.ds,V=>b.persistence.referenceDelegate.addReference(k,C.targetId,V)).next(()=>K.forEach(C.As,V=>b.persistence.referenceDelegate.removeReference(k,C.targetId,V)))))}catch(k){if(!Qs(k))throw k;ne(kp,"Failed to update sequence numbers: "+k)}for(const k of m){const C=k.targetId;if(!k.fromCache){const V=b.xs.get(C),q=V.snapshotVersion,G=V.withLastLimboFreeSnapshotVersion(q);b.xs=b.xs.insert(C,G)}}}(i.localStore,h))}async function R2(a,e){const n=xe(a);if(!n.currentUser.isEqual(e)){ne(Pp,"User change. New user:",e.toKey());const i=await Rw(n.localStore,e);n.currentUser=e,function(l,h){l.Eu.forEach(f=>{f.forEach(g=>{g.reject(new ce(ee.CANCELLED,h))})}),l.Eu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await $w(n,i.ks)}}function N2(a,e){const n=xe(a),i=n.Pu.get(e);if(i&&i._u)return Le().add(i.key);{let l=Le();const h=n.cu.get(e);if(!h)return l;for(const f of h){const g=n.uu.get(f);l=l.unionWith(g.view.Ya)}return l}}function Hw(a){const e=xe(a);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=N2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=A2.bind(null,e),e.au.j_=m2.bind(null,e.eventManager),e.au.Vu=y2.bind(null,e.eventManager),e}class Fc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Dw(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,n){return null}bu(e,n){return null}wu(e){return HC(this.persistence,new VC,e.initialUser,this.serializer)}yu(e){return new Pw(wp.fi,this.serializer)}pu(e){return new GC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fc.provider={build:()=>new Fc};class D2 extends Fc{constructor(e){super(),this.cacheSizeBytes=e}Su(e,n){tt(this.persistence.referenceDelegate instanceof Mc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new IC(i,e.asyncQueue,n)}yu(e){const n=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new Pw(i=>Mc.fi(i,n),this.serializer)}}class Xf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Tb(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=R2.bind(null,this.syncEngine),await h2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new f2}()}createDatastore(e){const n=Dw(e.databaseInfo.databaseId),i=function(l){return new e2(l)}(e.databaseInfo);return function(l,h,f,g){return new a2(l,h,f,g)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(n,i,l,h,f){return new s2(n,i,l,h,f)}(this.localStore,this.datastore,e.asyncQueue,n=>Tb(this.syncEngine,n,0),function(){return vb.C()?new vb:new XC}())}createSyncEngine(e,n){return function(i,l,h,f,g,m,b){const k=new k2(i,l,h,f,g,m);return b&&(k.Au=!0),k}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const l=xe(i);ne($s,"RemoteStore shutting down."),l.Ta.add(5),await Ll(l),l.Ea.shutdown(),l.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Xf.provider={build:()=>new Xf};/**
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
*/class x2{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):$r("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
*/const La="FirestoreClient";class O2{constructor(e,n,i,l,h){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=l,this.user=$t.UNAUTHENTICATED,this.clientId=iI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=h,this.authCredentials.start(i,async f=>{ne(La,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(i,f=>(ne(La,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _i;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Fw(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function wf(a,e){a.asyncQueue.verifyOperationInProgress(),ne(La,"Initializing OfflineComponentProvider");const n=a.configuration;await e.initialize(n);let i=n.initialUser;a.setCredentialChangeListener(async l=>{i.isEqual(l)||(await Rw(e.localStore,l),i=l)}),e.persistence.setDatabaseDeletedListener(()=>a.terminate()),a._offlineComponents=e}async function Cb(a,e){a.asyncQueue.verifyOperationInProgress();const n=await L2(a);ne(La,"Initializing OnlineComponentProvider"),await e.initialize(n,a.configuration),a.setCredentialChangeListener(i=>Sb(e.remoteStore,i)),a.setAppCheckTokenChangeListener((i,l)=>Sb(e.remoteStore,l)),a._onlineComponents=e}async function L2(a){if(!a._offlineComponents)if(a._uninitializedComponentsProvider){ne(La,"Using user provided OfflineComponentProvider");try{await wf(a,a._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===ee.FAILED_PRECONDITION||i.code===ee.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Us("Error using user provided cache. Falling back to memory cache: "+n),await wf(a,new Fc)}}else ne(La,"Using default OfflineComponentProvider"),await wf(a,new D2(void 0));return a._offlineComponents}async function M2(a){return a._onlineComponents||(a._uninitializedComponentsProvider?(ne(La,"Using user provided OnlineComponentProvider"),await Cb(a,a._uninitializedComponentsProvider._online)):(ne(La,"Using default OnlineComponentProvider"),await Cb(a,new Xf))),a._onlineComponents}async function F2(a){const e=await M2(a),n=e.eventManager;return n.onListen=E2.bind(null,e.syncEngine),n.onUnlisten=I2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=_2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=C2.bind(null,e.syncEngine),n}function U2(a,e,n={}){const i=new _i;return a.asyncQueue.enqueueAndForget(async()=>function(l,h,f,g,m){const b=new x2({next:C=>{b.Cu(),h.enqueueAndForget(()=>g2(l,k)),C.fromCache&&g.source==="server"?m.reject(new ce(ee.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(C)},error:C=>m.reject(C)}),k=new v2(f,b,{includeMetadataChanges:!0,La:!0});return p2(l,k)}(await F2(a),a.asyncQueue,e,n,i)),i.promise}/**
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
*/function Bw(a){const e={};return a.timeoutSeconds!==void 0&&(e.timeoutSeconds=a.timeoutSeconds),e}/**
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
*/const Ab=new Map;function j2(a,e,n,i){if(e===!0&&i===!0)throw new ce(ee.INVALID_ARGUMENT,`${a} and ${n} cannot be used together.`)}function Pb(a){if(fe.isDocumentKey(a))throw new ce(ee.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${a} has ${a.length}.`)}function z2(a){if(a===void 0)return"undefined";if(a===null)return"null";if(typeof a=="string")return a.length>20&&(a=`${a.substring(0,20)}...`),JSON.stringify(a);if(typeof a=="number"||typeof a=="boolean")return""+a;if(typeof a=="object"){if(a instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(a);return e?`a custom ${e} object`:"an object"}}return typeof a=="function"?"a function":ve(12329,{type:typeof a})}function Jf(a,e){if("_delegate"in a&&(a=a._delegate),!(a instanceof e)){if(e.name===a.constructor.name)throw new ce(ee.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=z2(a);throw new ce(ee.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return a}/**
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
*/const Ww="firestore.googleapis.com",Rb=!0;class Nb{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ww,this.ssl=Rb}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Rb;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Aw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<_C)throw new ce(ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}j2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bw((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ce(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ce(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ce(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Np{constructor(e,n,i,l){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nb({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nb(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new YT;switch(n.type){case"firstParty":return new nI(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ce(ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ab.get(e);n&&(ne("ComponentProvider","Removing Datastore"),Ab.delete(e),n.terminate())}(this),Promise.resolve()}}function V2(a,e,n,i={}){var l;a=Jf(a,Np);const h=Cl(e),f=a._getSettings(),g=Object.assign(Object.assign({},f),{emulatorOptions:a._getEmulatorOptions()}),m=`${e}:${n}`;h&&(Xb(`https://${m}`),Jb("Firestore",!0)),f.host!==Ww&&f.host!==m&&Us("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const b=Object.assign(Object.assign({},f),{host:m,ssl:h,emulatorOptions:i});if(!Pa(b,g)&&(a._setSettings(b),i.mockUserToken)){let k,C;if(typeof i.mockUserToken=="string")k=i.mockUserToken,C=$t.MOCK_USER;else{k=ck(i.mockUserToken,(l=a._app)===null||l===void 0?void 0:l.options.projectId);const V=i.mockUserToken.sub||i.mockUserToken.user_id;if(!V)throw new ce(ee.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");C=new $t(V)}a._authCredentials=new ZT(new G0(k,C))}}/**
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
*/class rh{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new rh(this.firestore,e,this._query)}}class Xs{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xs(this.firestore,e,this._key)}}class Fs extends rh{constructor(e,n,i){super(e,n,uw(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xs(this.firestore,null,new fe(e))}withConverter(e){return new Fs(this.firestore,e,this._path)}}function q2(a,e,...n){if(a=zn(a),a instanceof Np){const i=st.fromString(e,...n);return Pb(i),new Fs(a,null,i)}{if(!(a instanceof Xs||a instanceof Fs))throw new ce(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=a._path.child(st.fromString(e,...n));return Pb(i),new Fs(a.firestore,null,i)}}/**
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
*/const Db="AsyncQueue";class xb{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new xw(this,"async_queue_retry"),this.ec=()=>{const i=bf();i&&ne(Db,"Visibility state changed to "+i.visibilityState),this.C_.p_()},this.tc=e;const n=bf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const n=bf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const n=new _i;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!Qs(e))throw e;ne(Db,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const n=this.tc.then(()=>(this.Yu=!0,e().catch(i=>{throw this.Ju=i,this.Yu=!1,$r("INTERNAL UNHANDLED ERROR: ",Ob(i)),i}).then(i=>(this.Yu=!1,i))));return this.tc=n,n}enqueueAfterDelay(e,n,i){this.nc(),this.Xu.indexOf(e)>-1&&(n=0);const l=Cp.createAndSchedule(this,e,n,i,h=>this.oc(h));return this.Hu.push(l),l}nc(){this.Ju&&ve(47125,{_c:Ob(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const n of this.Hu)if(n.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Hu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const n=this.Hu.indexOf(e);this.Hu.splice(n,1)}}function Ob(a){let e=a.message||"";return a.stack&&(e=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),e}class Kw extends Np{constructor(e,n,i,l){super(e,n,i,l),this.type="firestore",this._queue=new xb,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xb(e),this._firestoreClient=void 0,await e}}}function $2(a,e){const n=typeof a=="object"?a:tp(),i=typeof a=="string"?a:Nc,l=Di(n,"firestore").getImmediate({identifier:i});if(!l._initialized){const h=lk("firestore");h&&V2(l,...h)}return l}function H2(a){if(a._terminated)throw new ce(ee.FAILED_PRECONDITION,"The client has already been terminated.");return a._firestoreClient||B2(a),a._firestoreClient}function B2(a){var e,n,i;const l=a._freezeSettings(),h=function(f,g,m,b){return new bI(f,g,m,b.host,b.ssl,b.experimentalForceLongPolling,b.experimentalAutoDetectLongPolling,Bw(b.experimentalLongPollingOptions),b.useFetchStreams,b.isUsingEmulator)}(a._databaseId,((e=a._app)===null||e===void 0?void 0:e.options.appId)||"",a._persistenceKey,l);a._componentsProvider||!((n=l.localCache)===null||n===void 0)&&n._offlineComponentProvider&&!((i=l.localCache)===null||i===void 0)&&i._onlineComponentProvider&&(a._componentsProvider={_offline:l.localCache._offlineComponentProvider,_online:l.localCache._onlineComponentProvider}),a._firestoreClient=new O2(a._authCredentials,a._appCheckCredentials,a._queue,h,a._componentsProvider&&function(f){const g=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(g),_online:g}}(a._componentsProvider))}/**
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
*/class Uc{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Uc(Ut.fromBase64String(e))}catch(n){throw new ce(ee.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Uc(Ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
*/class Qw{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ce(ee.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
*/class W2{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ce(ee.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ce(ee.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
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
*/class K2{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let l=0;l<n.length;++l)if(n[l]!==i[l])return!1;return!0}(this._values,e._values)}}const Q2=new RegExp("[~\\*/\\[\\]]");function G2(a,e,n){if(e.search(Q2)>=0)throw Lb(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,a);try{return new Qw(...e.split("."))._internalPath}catch{throw Lb(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,a)}}function Lb(a,e,n,i,l){let h=`Function ${e}() called with invalid data`;h+=". ";let f="";return new ce(ee.INVALID_ARGUMENT,h+a+f)}/**
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
*/class Gw{constructor(e,n,i,l,h){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=l,this._converter=h}get id(){return this._key.path.lastSegment()}get ref(){return new Xs(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new X2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Xw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class X2 extends Gw{data(){return super.data()}}function Xw(a,e){return typeof e=="string"?G2(a,e):e instanceof Qw?e._internalPath:e._delegate._internalPath}/**
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
*/function J2(a){if(a.limitType==="L"&&a.explicitOrderBy.length===0)throw new ce(ee.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Y2{convertValue(e,n="none"){switch(xa(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Da(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return xl(e,(l,h)=>{i[l]=this.convertValue(h,n)}),i}convertVectorValue(e){var n,i,l;const h=(l=(i=(n=e.fields)===null||n===void 0?void 0:n[Mf].arrayValue)===null||i===void 0?void 0:i.values)===null||l===void 0?void 0:l.map(f=>ct(f.doubleValue));return new K2(h)}convertGeoPoint(e){return new W2(ct(e.latitude),ct(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Gc(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(_l(e));default:return null}}convertTimestamp(e){const n=Na(e);return new tn(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=st.fromString(e);tt(Cw(i),9688,{name:e});const l=new Tl(i.get(1),i.get(3)),h=new fe(i.popFirst(5));return l.isEqual(n)||$r(`Document ${h} contains a document reference within a different database (${l.projectId}/${l.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),h}}/**
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
*/class fc{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Z2 extends Gw{constructor(e,n,i,l,h,f){super(e,n,i,l,f),this._firestore=e,this._firestoreImpl=e,this.metadata=h}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new kc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Xw("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class kc extends Z2{data(e={}){return super.data(e)}}class eA{constructor(e,n,i,l){this._firestore=e,this._userDataWriter=n,this._snapshot=l,this.metadata=new fc(l.hasPendingWrites,l.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new kc(this._firestore,this._userDataWriter,i.key,i,new fc(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ce(ee.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,l){if(i._snapshot.oldDocs.isEmpty()){let h=0;return i._snapshot.docChanges.map(f=>{const g=new kc(i._firestore,i._userDataWriter,f.doc.key,f.doc,new fc(i._snapshot.mutatedKeys.has(f.doc.key),i._snapshot.fromCache),i.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(f=>l||f.type!==3).map(f=>{const g=new kc(i._firestore,i._userDataWriter,f.doc.key,f.doc,new fc(i._snapshot.mutatedKeys.has(f.doc.key),i._snapshot.fromCache),i.query.converter);let m=-1,b=-1;return f.type!==0&&(m=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),b=h.indexOf(f.doc.key)),{type:tA(f.type),doc:g,oldIndex:m,newIndex:b}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function tA(a){switch(a){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:a})}}class nA extends Y2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Uc(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Xs(this.firestore,null,n)}}function rA(a){a=Jf(a,rh);const e=Jf(a.firestore,Kw),n=H2(e),i=new nA(e);return J2(a._query),U2(n,a._query).then(l=>new eA(e,i,a,l))}(function(a,e=!0){(function(n){Ks=n})(Bs),lr(new Fn("firestore",(n,{instanceIdentifier:i,options:l})=>{const h=n.getProvider("app").getImmediate(),f=new Kw(new eI(n.getProvider("auth-internal")),new rI(h,n.getProvider("app-check-internal")),function(g,m){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ce(ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tl(g.options.projectId,m)}(h,i),h);return l=Object.assign({useFetchStreams:e},l),f._setSettings(l),f},"PUBLIC").setMultipleInstances(!0)),An(jv,zv,a),An(jv,zv,"esm2017")})();var aA="firebase",iA="11.8.1";/**
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
*/An(aA,iA,"app");const Jw="@firebase/installations",Dp="0.6.17";/**
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
*/const Yw=1e4,Zw=`w:${Dp}`,e1="FIS_v2",sA="https://firebaseinstallations.googleapis.com/v1",oA=60*60*1e3,lA="installations",uA="Installations";/**
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
*/const cA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Pi=new Ni(lA,uA,cA);function t1(a){return a instanceof jn&&a.code.includes("request-failed")}/**
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
*/function n1({projectId:a}){return`${sA}/projects/${a}/installations`}function r1(a){return{token:a.token,requestStatus:2,expiresIn:dA(a.expiresIn),creationTime:Date.now()}}async function a1(a,e){const n=(await e.json()).error;return Pi.create("request-failed",{requestName:a,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function i1({apiKey:a}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":a})}function hA(a,{refreshToken:e}){const n=i1(a);return n.append("Authorization",fA(e)),n}async function s1(a){const e=await a();return e.status>=500&&e.status<600?a():e}function dA(a){return Number(a.replace("s","000"))}function fA(a){return`${e1} ${a}`}/**
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
*/async function pA({appConfig:a,heartbeatServiceProvider:e},{fid:n}){const i=n1(a),l=i1(a),h=e.getImmediate({optional:!0});if(h){const b=await h.getHeartbeatsHeader();b&&l.append("x-firebase-client",b)}const f={fid:n,authVersion:e1,appId:a.appId,sdkVersion:Zw},g={method:"POST",headers:l,body:JSON.stringify(f)},m=await s1(()=>fetch(i,g));if(m.ok){const b=await m.json();return{fid:b.fid||n,registrationStatus:2,refreshToken:b.refreshToken,authToken:r1(b.authToken)}}else throw await a1("Create Installation",m)}/**
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
*/function o1(a){return new Promise(e=>{setTimeout(e,a)})}/**
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
*/function gA(a){return btoa(String.fromCharCode(...a)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
*/const mA=/^[cdef][\w-]{21}$/,Yf="";function yA(){try{const a=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(a),a[0]=112+a[0]%16;const e=vA(a);return mA.test(e)?e:Yf}catch{return Yf}}function vA(a){return gA(a).substr(0,22)}/**
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
*/function ah(a){return`${a.appName}!${a.appId}`}/**
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
*/const l1=new Map;function u1(a,e){const n=ah(a);c1(n,e),bA(n,e)}function c1(a,e){const n=l1.get(a);if(n)for(const i of n)i(e)}function bA(a,e){const n=wA();n&&n.postMessage({key:a,fid:e}),SA()}let Ei=null;function wA(){return!Ei&&"BroadcastChannel"in self&&(Ei=new BroadcastChannel("[Firebase] FID Change"),Ei.onmessage=a=>{c1(a.data.key,a.data.fid)}),Ei}function SA(){l1.size===0&&Ei&&(Ei.close(),Ei=null)}/**
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
*/const kA="firebase-installations-database",EA=1,Ri="firebase-installations-store";let Sf=null;function xp(){return Sf||(Sf=r0(kA,EA,{upgrade:(a,e)=>{switch(e){case 0:a.createObjectStore(Ri)}}})),Sf}async function jc(a,e){const n=ah(a),i=(await xp()).transaction(Ri,"readwrite"),l=i.objectStore(Ri),h=await l.get(n);return await l.put(e,n),await i.done,(!h||h.fid!==e.fid)&&u1(a,e.fid),e}async function h1(a){const e=ah(a),n=(await xp()).transaction(Ri,"readwrite");await n.objectStore(Ri).delete(e),await n.done}async function ih(a,e){const n=ah(a),i=(await xp()).transaction(Ri,"readwrite"),l=i.objectStore(Ri),h=await l.get(n),f=e(h);return f===void 0?await l.delete(n):await l.put(f,n),await i.done,f&&(!h||h.fid!==f.fid)&&u1(a,f.fid),f}/**
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
*/async function Op(a){let e;const n=await ih(a.appConfig,i=>{const l=_A(i),h=TA(a,l);return e=h.registrationPromise,h.installationEntry});return n.fid===Yf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function _A(a){const e=a||{fid:yA(),registrationStatus:0};return d1(e)}function TA(a,e){if(e.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(Pi.create("app-offline"));return{installationEntry:e,registrationPromise:l}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=IA(a,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:CA(a)}:{installationEntry:e}}async function IA(a,e){try{const n=await pA(a,e);return jc(a.appConfig,n)}catch(n){throw t1(n)&&n.customData.serverCode===409?await h1(a.appConfig):await jc(a.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function CA(a){let e=await Mb(a.appConfig);for(;e.registrationStatus===1;)await o1(100),e=await Mb(a.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Op(a);return i||n}return e}function Mb(a){return ih(a,e=>{if(!e)throw Pi.create("installation-not-found");return d1(e)})}function d1(a){return AA(a)?{fid:a.fid,registrationStatus:0}:a}function AA(a){return a.registrationStatus===1&&a.registrationTime+Yw<Date.now()}/**
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
*/async function PA({appConfig:a,heartbeatServiceProvider:e},n){const i=RA(a,n),l=hA(a,n),h=e.getImmediate({optional:!0});if(h){const b=await h.getHeartbeatsHeader();b&&l.append("x-firebase-client",b)}const f={installation:{sdkVersion:Zw,appId:a.appId}},g={method:"POST",headers:l,body:JSON.stringify(f)},m=await s1(()=>fetch(i,g));if(m.ok){const b=await m.json();return r1(b)}else throw await a1("Generate Auth Token",m)}function RA(a,{fid:e}){return`${n1(a)}/${e}/authTokens:generate`}/**
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
*/async function Lp(a,e=!1){let n;const i=await ih(a.appConfig,l=>{if(!f1(l))throw Pi.create("not-registered");const h=l.authToken;if(!e&&xA(h))return l;if(h.requestStatus===1)return n=NA(a,e),l;{if(!navigator.onLine)throw Pi.create("app-offline");const f=LA(l);return n=DA(a,f),f}});return n?await n:i.authToken}async function NA(a,e){let n=await Fb(a.appConfig);for(;n.authToken.requestStatus===1;)await o1(100),n=await Fb(a.appConfig);const i=n.authToken;return i.requestStatus===0?Lp(a,e):i}function Fb(a){return ih(a,e=>{if(!f1(e))throw Pi.create("not-registered");const n=e.authToken;return MA(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function DA(a,e){try{const n=await PA(a,e),i=Object.assign(Object.assign({},e),{authToken:n});return await jc(a.appConfig,i),n}catch(n){if(t1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await h1(a.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await jc(a.appConfig,i)}throw n}}function f1(a){return a!==void 0&&a.registrationStatus===2}function xA(a){return a.requestStatus===2&&!OA(a)}function OA(a){const e=Date.now();return e<a.creationTime||a.creationTime+a.expiresIn<e+oA}function LA(a){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},a),{authToken:e})}function MA(a){return a.requestStatus===1&&a.requestTime+Yw<Date.now()}/**
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
*/async function FA(a){const e=a,{installationEntry:n,registrationPromise:i}=await Op(e);return i?i.catch(console.error):Lp(e).catch(console.error),n.fid}/**
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
*/async function UA(a,e=!1){const n=a;return await jA(n),(await Lp(n,e)).token}async function jA(a){const{registrationPromise:e}=await Op(a);e&&await e}/**
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
*/function zA(a){if(!a||!a.options)throw kf("App Configuration");if(!a.name)throw kf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!a.options[n])throw kf(n);return{appName:a.name,projectId:a.options.projectId,apiKey:a.options.apiKey,appId:a.options.appId}}function kf(a){return Pi.create("missing-app-config-values",{valueName:a})}/**
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
*/const p1="installations",VA="installations-internal",qA=a=>{const e=a.getProvider("app").getImmediate(),n=zA(e),i=Di(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},$A=a=>{const e=a.getProvider("app").getImmediate(),n=Di(e,p1).getImmediate();return{getId:()=>FA(n),getToken:i=>UA(n,i)}};function HA(){lr(new Fn(p1,qA,"PUBLIC")),lr(new Fn(VA,$A,"PRIVATE"))}HA();An(Jw,Dp);An(Jw,Dp,"esm2017");/**
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
*/const zc="analytics",BA="firebase_id",WA="origin",KA=60*1e3,QA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Mp="https://www.googletagmanager.com/gtag/js";/**
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
*/const nn=new qc("@firebase/analytics");/**
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
*/const GA={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},fn=new Ni("analytics","Analytics",GA);/**
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
*/function XA(a){if(!a.startsWith(Mp)){const e=fn.create("invalid-gtag-resource",{gtagURL:a});return nn.warn(e.message),""}return a}function g1(a){return Promise.all(a.map(e=>e.catch(n=>n)))}function JA(a,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(a,e)),n}function YA(a,e){const n=JA("firebase-js-sdk-policy",{createScriptURL:XA}),i=document.createElement("script"),l=`${Mp}?l=${a}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(l):l,i.async=!0,document.head.appendChild(i)}function ZA(a){let e=[];return Array.isArray(window[a])?e=window[a]:window[a]=e,e}async function eP(a,e,n,i,l,h){const f=i[l];try{if(f)await e[f];else{const g=(await g1(n)).find(m=>m.measurementId===l);g&&await e[g.appId]}}catch(g){nn.error(g)}a("config",l,h)}async function tP(a,e,n,i,l){try{let h=[];if(l&&l.send_to){let f=l.send_to;Array.isArray(f)||(f=[f]);const g=await g1(n);for(const m of f){const b=g.find(C=>C.measurementId===m),k=b&&e[b.appId];if(k)h.push(k);else{h=[];break}}}h.length===0&&(h=Object.values(e)),await Promise.all(h),a("event",i,l||{})}catch(h){nn.error(h)}}function nP(a,e,n,i){async function l(h,...f){try{if(h==="event"){const[g,m]=f;await tP(a,e,n,g,m)}else if(h==="config"){const[g,m]=f;await eP(a,e,n,i,g,m)}else if(h==="consent"){const[g,m]=f;a("consent",g,m)}else if(h==="get"){const[g,m,b]=f;a("get",g,m,b)}else if(h==="set"){const[g]=f;a("set",g)}else a(h,...f)}catch(g){nn.error(g)}}return l}function rP(a,e,n,i,l){let h=function(...f){window[i].push(arguments)};return window[l]&&typeof window[l]=="function"&&(h=window[l]),window[l]=nP(h,a,e,n),{gtagCore:h,wrappedGtag:window[l]}}function aP(a){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Mp)&&n.src.includes(a))return n;return null}/**
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
*/const iP=30,sP=1e3;class oP{constructor(e={},n=sP){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const m1=new oP;function lP(a){return new Headers({Accept:"application/json","x-goog-api-key":a})}async function uP(a){var e;const{appId:n,apiKey:i}=a,l={method:"GET",headers:lP(i)},h=QA.replace("{app-id}",n),f=await fetch(h,l);if(f.status!==200&&f.status!==304){let g="";try{const m=await f.json();!((e=m.error)===null||e===void 0)&&e.message&&(g=m.error.message)}catch{}throw fn.create("config-fetch-failed",{httpStatus:f.status,responseMessage:g})}return f.json()}async function cP(a,e=m1,n){const{appId:i,apiKey:l,measurementId:h}=a.options;if(!i)throw fn.create("no-app-id");if(!l){if(h)return{measurementId:h,appId:i};throw fn.create("no-api-key")}const f=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},g=new fP;return setTimeout(async()=>{g.abort()},KA),y1({appId:i,apiKey:l,measurementId:h},f,g,e)}async function y1(a,{throttleEndTimeMillis:e,backoffCount:n},i,l=m1){var h;const{appId:f,measurementId:g}=a;try{await hP(i,e)}catch(m){if(g)return nn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${g} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:f,measurementId:g};throw m}try{const m=await uP(a);return l.deleteThrottleMetadata(f),m}catch(m){const b=m;if(!dP(b)){if(l.deleteThrottleMetadata(f),g)return nn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${g} provided in the "measurementId" field in the local Firebase config. [${b==null?void 0:b.message}]`),{appId:f,measurementId:g};throw m}const k=Number((h=b==null?void 0:b.customData)===null||h===void 0?void 0:h.httpStatus)===503?cv(n,l.intervalMillis,iP):cv(n,l.intervalMillis),C={throttleEndTimeMillis:Date.now()+k,backoffCount:n+1};return l.setThrottleMetadata(f,C),nn.debug(`Calling attemptFetch again in ${k} millis`),y1(a,C,i,l)}}function hP(a,e){return new Promise((n,i)=>{const l=Math.max(e-Date.now(),0),h=setTimeout(n,l);a.addEventListener(()=>{clearTimeout(h),i(fn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function dP(a){if(!(a instanceof jn)||!a.customData)return!1;const e=Number(a.customData.httpStatus);return e===429||e===500||e===503||e===504}class fP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function pP(a,e,n,i,l){if(l&&l.global){a("event",n,i);return}else{const h=await e,f=Object.assign(Object.assign({},i),{send_to:h});a("event",n,f)}}/**
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
*/async function gP(){if(Zb())try{await e0()}catch(a){return nn.warn(fn.create("indexeddb-unavailable",{errorInfo:a==null?void 0:a.toString()}).message),!1}else return nn.warn(fn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function mP(a,e,n,i,l,h,f){var g;const m=cP(a);m.then(q=>{n[q.measurementId]=q.appId,a.options.measurementId&&q.measurementId!==a.options.measurementId&&nn.warn(`The measurement ID in the local Firebase config (${a.options.measurementId}) does not match the measurement ID fetched from the server (${q.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(q=>nn.error(q)),e.push(m);const b=gP().then(q=>{if(q)return i.getId()}),[k,C]=await Promise.all([m,b]);aP(h)||YA(h,k.measurementId),l("js",new Date);const V=(g=f==null?void 0:f.config)!==null&&g!==void 0?g:{};return V[WA]="firebase",V.update=!0,C!=null&&(V[BA]=C),l("config",k.measurementId,V),k.measurementId}/**
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
*/class yP{constructor(e){this.app=e}_delete(){return delete bl[this.app.options.appId],Promise.resolve()}}let bl={},Ub=[];const jb={};let Ef="dataLayer",vP="gtag",zb,v1,Vb=!1;function bP(){const a=[];if(Yb()&&a.push("This is a browser extension environment."),bk()||a.push("Cookies are not available."),a.length>0){const e=a.map((i,l)=>`(${l+1}) ${i}`).join(" "),n=fn.create("invalid-analytics-context",{errorInfo:e});nn.warn(n.message)}}function wP(a,e,n){bP();const i=a.options.appId;if(!i)throw fn.create("no-app-id");if(!a.options.apiKey)if(a.options.measurementId)nn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${a.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw fn.create("no-api-key");if(bl[i]!=null)throw fn.create("already-exists",{id:i});if(!Vb){ZA(Ef);const{wrappedGtag:l,gtagCore:h}=rP(bl,Ub,jb,Ef,vP);v1=l,zb=h,Vb=!0}return bl[i]=mP(a,Ub,jb,e,zb,Ef,n),new yP(a)}function SP(a=tp()){a=zn(a);const e=Di(a,zc);return e.isInitialized()?e.getImmediate():kP(a)}function kP(a,e={}){const n=Di(a,zc);if(n.isInitialized()){const i=n.getImmediate();if(Pa(e,n.getOptions()))return i;throw fn.create("already-initialized")}return n.initialize({options:e})}function EP(a,e,n,i){a=zn(a),pP(v1,bl[a.app.options.appId],e,n,i).catch(l=>nn.error(l))}const qb="@firebase/analytics",$b="0.10.16";function _P(){lr(new Fn(zc,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),l=e.getProvider("installations-internal").getImmediate();return wP(i,l,n)},"PUBLIC")),lr(new Fn("analytics-internal",a,"PRIVATE")),An(qb,$b),An(qb,$b,"esm2017");function a(e){try{const n=e.getProvider(zc).getImmediate();return{logEvent:(i,l,h)=>EP(n,i,l,h)}}catch(n){throw fn.create("interop-component-reg-failed",{reason:n})}}}_P();const TP={apiKey:"AIzaSyBZUli0z9b6LpsuTDa9S5if6O0vM6eaeiI",authDomain:"harjoitus-26e21.firebaseapp.com",projectId:"harjoitus-26e21",storageBucket:"harjoitus-26e21.firebasestorage.app",messagingSenderId:"709385207330",appId:"1:709385207330:web:b0f653e8976bd66387147b",measurementId:"G-B3F53D0CPM"},b1=a0(TP);SP(b1);const IP=$2(b1);function CP(){const[a,e]=Ln.useState(""),[n,i]=Ln.useState(null),[l,h]=Ln.useState([]),[f,g]=Ln.useState([]),m=async()=>{try{const q=(await rA(q2(IP,"reseptit"))).docs.map(G=>({id:G.id,...G.data()}));g(q)}catch(q){console.error("Virhe reseptejä haettaessa:",q)}};Ln.useEffect(()=>{m()},[]);const b=f.filter(q=>q.ingredient.toLowerCase().includes(a.toLowerCase())),k=q=>{q.preventDefault()},C=q=>{const G=q.filter(ae=>!l.includes(ae));h([...l,...G])},V=q=>{h(l.filter(G=>G!==q))};return be.jsxs("div",{style:{padding:"1rem",maxWidth:"800px",margin:"auto"},children:[be.jsx("h1",{children:"Jossun reseptisovellus"}),be.jsxs("form",{onSubmit:k,style:{marginBottom:"1rem"},children:[be.jsx("input",{type:"text",placeholder:"Esim. kana, tofu, makaroni...",value:a,onChange:q=>e(q.target.value),style:{padding:"0.5rem",width:"70%",marginRight:"0.5rem"}}),be.jsx("button",{type:"submit",style:{padding:"0.5rem 1rem"},children:"Hae reseptejä"})]}),n?be.jsxs("div",{style:{padding:"1rem"},children:[be.jsx("button",{onClick:()=>i(null),style:{marginBottom:"1rem"},children:"← Takaisin etusivulle"}),be.jsx("h2",{children:n.title}),n.image&&be.jsx("img",{src:n.image,alt:n.title,style:{width:"100%",borderRadius:"8px",marginBottom:"0.5rem"}}),be.jsx("h3",{children:"Ainekset:"}),be.jsx("ul",{children:n.ingredients.map((q,G)=>be.jsx("li",{children:q},G))}),be.jsx("button",{onClick:()=>C(n.ingredients),style:{margin:"1rem 0",padding:"0.5rem 1rem"},children:"Lisää kaikki ostoslistaan"}),be.jsx("h3",{children:"Ohjeet:"}),be.jsx("ol",{children:n.instructions.map((q,G)=>be.jsx("li",{children:q},G))}),be.jsxs("div",{style:{marginTop:"2rem",padding:"1rem",border:"1px solid #ccc",borderRadius:"8px",backgroundColor:"#f9f9f9"},children:[be.jsx("h3",{children:"Ostoslista"}),l.length===0?be.jsx("p",{children:"Ostoslista on tyhjä."}):be.jsx("ul",{children:l.map((q,G)=>be.jsxs("li",{style:{marginBottom:"0.5rem"},children:[q,be.jsx("button",{onClick:()=>V(q),style:{marginLeft:"0.5rem",color:"red",cursor:"pointer"},children:"✕"})]},G))})]})]}):be.jsx("div",{children:b.length===0?be.jsx("p",{children:"Ei reseptejä näytettävänä. Kirjoita hakusana ja hae."}):be.jsx("ul",{style:{listStyle:"none",padding:0},children:b.map(q=>be.jsxs("li",{style:{marginBottom:"2rem",border:"1px solid #ccc",borderRadius:"8px",padding:"1rem",cursor:"pointer"},onClick:()=>i(q),children:[be.jsx("h2",{children:q.title}),q.image&&be.jsx("img",{src:q.image,alt:q.title,style:{width:"100%",borderRadius:"8px",marginBottom:"0.5rem"}}),be.jsxs("p",{children:[be.jsx("strong",{children:"Proteiini/Hiilihydraatti:"})," ",q.ingredient]})]},q.id))})})]})}function AP(){const[a,e]=Ln.useState(null),n=V0();return Ln.useEffect(()=>{const i=j_(n,l=>{e(l)});return()=>i()},[n]),a?be.jsx(CP,{}):be.jsx(JT,{onLogin:()=>{}})}ZS.createRoot(document.getElementById("root")).render(be.jsx(Ln.StrictMode,{children:be.jsx(AP,{})}));
