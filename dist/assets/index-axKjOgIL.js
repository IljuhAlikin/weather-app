(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();/**
* @vue/shared v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zr(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const q={},ke=[],kt=()=>{},xs=()=>!1,Bn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ta=t=>t.startsWith("onUpdate:"),ot=Object.assign,ea=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ks=Object.prototype.hasOwnProperty,U=(t,e)=>ks.call(t,e),L=Array.isArray,Ae=t=>Vn(t)==="[object Map]",Bi=t=>Vn(t)==="[object Set]",$=t=>typeof t=="function",nt=t=>typeof t=="string",Te=t=>typeof t=="symbol",Q=t=>t!==null&&typeof t=="object",Vi=t=>(Q(t)||$(t))&&$(t.then)&&$(t.catch),Wi=Object.prototype.toString,Vn=t=>Wi.call(t),As=t=>Vn(t).slice(8,-1),Yi=t=>Vn(t)==="[object Object]",na=t=>nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,On=Zr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Os=/-(\w)/g,Rt=Wn(t=>t.replace(Os,(e,n)=>n?n.toUpperCase():"")),Es=/\B([A-Z])/g,Me=Wn(t=>t.replace(Es,"-$1").toLowerCase()),Yn=Wn(t=>t.charAt(0).toUpperCase()+t.slice(1)),dr=Wn(t=>t?`on${Yn(t)}`:""),Qt=(t,e)=>!Object.is(t,e),En=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Nn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Er=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let $a;const Ki=()=>$a||($a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ra(t){if(L(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],a=nt(r)?Is(r):ra(r);if(a)for(const i in a)e[i]=a[i]}return e}else if(nt(t)||Q(t))return t}const Ss=/;(?![^(]*\))/g,Cs=/:([^]+)/,Ps=/\/\*[^]*?\*\//g;function Is(t){const e={};return t.replace(Ps,"").split(Ss).forEach(n=>{if(n){const r=n.split(Cs);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Kn(t){let e="";if(nt(t))e=t;else if(L(t))for(let n=0;n<t.length;n++){const r=Kn(t[n]);r&&(e+=r+" ")}else if(Q(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ts="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ms=Zr(Ts);function qi(t){return!!t||t===""}const it=t=>nt(t)?t:t==null?"":L(t)||Q(t)&&(t.toString===Wi||!$(t.toString))?JSON.stringify(t,Gi,2):String(t),Gi=(t,e)=>e&&e.__v_isRef?Gi(t,e.value):Ae(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,a],i)=>(n[mr(r,i)+" =>"]=a,n),{})}:Bi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>mr(n))}:Te(e)?mr(e):Q(e)&&!L(e)&&!Yi(e)?String(e):e,mr=(t,e="")=>{var n;return Te(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ot;class Ns{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ot,!e&&Ot&&(this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ot;try{return Ot=this,e()}finally{Ot=n}}}on(){Ot=this}off(){Ot=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Ls(t,e=Ot){e&&e.active&&e.effects.push(t)}function Rs(){return Ot}let ue;class aa{constructor(e,n,r,a){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,Ls(this,a)}get dirty(){if(this._dirtyLevel===1){this._dirtyLevel=0,this._queryings++,ge();for(const e of this.deps)if(e.computed&&(Fs(e.computed),this._dirtyLevel>=2))break;ve(),this._queryings--}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Xt,n=ue;try{return Xt=!0,ue=this,this._runnings++,ja(this),this.fn()}finally{za(this),this._runnings--,ue=n,Xt=e}}stop(){var e;this.active&&(ja(this),za(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Fs(t){return t.value}function ja(t){t._trackId++,t._depsLength=0}function za(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Xi(t.deps[e],t);t.deps.length=t._depsLength}}function Xi(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Xt=!0,Sr=0;const Ji=[];function ge(){Ji.push(Xt),Xt=!1}function ve(){const t=Ji.pop();Xt=t===void 0?!0:t}function ia(){Sr++}function oa(){for(Sr--;!Sr&&Cr.length;)Cr.shift()()}function Qi(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Xi(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Cr=[];function Zi(t,e,n){ia();for(const r of t.keys())if(!(!r.allowRecurse&&r._runnings)&&r._dirtyLevel<e&&(!r._runnings||e!==2)){const a=r._dirtyLevel;r._dirtyLevel=e,a===0&&(!r._queryings||e!==2)&&(r.trigger(),r.scheduler&&Cr.push(r.scheduler))}oa()}const to=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Pr=new WeakMap,de=Symbol(""),Ir=Symbol("");function gt(t,e,n){if(Xt&&ue){let r=Pr.get(t);r||Pr.set(t,r=new Map);let a=r.get(n);a||r.set(n,a=to(()=>r.delete(n))),Qi(ue,a)}}function zt(t,e,n,r,a,i){const o=Pr.get(t);if(!o)return;let s=[];if(e==="clear")s=[...o.values()];else if(n==="length"&&L(t)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||!Te(d)&&d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),e){case"add":L(t)?na(n)&&s.push(o.get("length")):(s.push(o.get(de)),Ae(t)&&s.push(o.get(Ir)));break;case"delete":L(t)||(s.push(o.get(de)),Ae(t)&&s.push(o.get(Ir)));break;case"set":Ae(t)&&s.push(o.get(de));break}ia();for(const l of s)l&&Zi(l,3);oa()}const $s=Zr("__proto__,__v_isRef,__isVue"),eo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Te)),Da=js();function js(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)gt(r,"get",i+"");const a=r[e](...n);return a===-1||a===!1?r[e](...n.map(V)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ge(),ia();const r=V(this)[e].apply(this,n);return oa(),ve(),r}}),t}function zs(t){const e=V(this);return gt(e,"has",t),e.hasOwnProperty(t)}class no{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(a?i?Qs:oo:i?io:ao).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=L(e);if(!a){if(o&&U(Da,n))return Reflect.get(Da,n,r);if(n==="hasOwnProperty")return zs}const s=Reflect.get(e,n,r);return(Te(n)?eo.has(n):$s(n))||(a||gt(e,"get",n),i)?s:vt(s)?o&&na(n)?s:s.value:Q(s)?a?so(s):Gn(s):s}}class ro extends no{constructor(e=!1){super(!1,e)}set(e,n,r,a){let i=e[n];if(!this._shallow){const l=Ce(i);if(!Ln(r)&&!Ce(r)&&(i=V(i),r=V(r)),!L(e)&&vt(i)&&!vt(r))return l?!1:(i.value=r,!0)}const o=L(e)&&na(n)?Number(n)<e.length:U(e,n),s=Reflect.set(e,n,r,a);return e===V(a)&&(o?Qt(r,i)&&zt(e,"set",n,r):zt(e,"add",n,r)),s}deleteProperty(e,n){const r=U(e,n);e[n];const a=Reflect.deleteProperty(e,n);return a&&r&&zt(e,"delete",n,void 0),a}has(e,n){const r=Reflect.has(e,n);return(!Te(n)||!eo.has(n))&&gt(e,"has",n),r}ownKeys(e){return gt(e,"iterate",L(e)?"length":de),Reflect.ownKeys(e)}}class Ds extends no{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Hs=new ro,Us=new Ds,Bs=new ro(!0),sa=t=>t,qn=t=>Reflect.getPrototypeOf(t);function cn(t,e,n=!1,r=!1){t=t.__v_raw;const a=V(t),i=V(e);n||(Qt(e,i)&&gt(a,"get",e),gt(a,"get",i));const{has:o}=qn(a),s=r?sa:n?ca:Ye;if(o.call(a,e))return s(t.get(e));if(o.call(a,i))return s(t.get(i));t!==a&&t.get(e)}function un(t,e=!1){const n=this.__v_raw,r=V(n),a=V(t);return e||(Qt(t,a)&&gt(r,"has",t),gt(r,"has",a)),t===a?n.has(t):n.has(t)||n.has(a)}function dn(t,e=!1){return t=t.__v_raw,!e&&gt(V(t),"iterate",de),Reflect.get(t,"size",t)}function Ha(t){t=V(t);const e=V(this);return qn(e).has.call(e,t)||(e.add(t),zt(e,"add",t,t)),this}function Ua(t,e){e=V(e);const n=V(this),{has:r,get:a}=qn(n);let i=r.call(n,t);i||(t=V(t),i=r.call(n,t));const o=a.call(n,t);return n.set(t,e),i?Qt(e,o)&&zt(n,"set",t,e):zt(n,"add",t,e),this}function Ba(t){const e=V(this),{has:n,get:r}=qn(e);let a=n.call(e,t);a||(t=V(t),a=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return a&&zt(e,"delete",t,void 0),i}function Va(){const t=V(this),e=t.size!==0,n=t.clear();return e&&zt(t,"clear",void 0,void 0),n}function mn(t,e){return function(r,a){const i=this,o=i.__v_raw,s=V(o),l=e?sa:t?ca:Ye;return!t&&gt(s,"iterate",de),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function hn(t,e,n){return function(...r){const a=this.__v_raw,i=V(a),o=Ae(i),s=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=a[t](...r),d=n?sa:e?ca:Ye;return!e&&gt(i,"iterate",l?Ir:de),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Wt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Vs(){const t={get(i){return cn(this,i)},get size(){return dn(this)},has:un,add:Ha,set:Ua,delete:Ba,clear:Va,forEach:mn(!1,!1)},e={get(i){return cn(this,i,!1,!0)},get size(){return dn(this)},has:un,add:Ha,set:Ua,delete:Ba,clear:Va,forEach:mn(!1,!0)},n={get(i){return cn(this,i,!0)},get size(){return dn(this,!0)},has(i){return un.call(this,i,!0)},add:Wt("add"),set:Wt("set"),delete:Wt("delete"),clear:Wt("clear"),forEach:mn(!0,!1)},r={get(i){return cn(this,i,!0,!0)},get size(){return dn(this,!0)},has(i){return un.call(this,i,!0)},add:Wt("add"),set:Wt("set"),delete:Wt("delete"),clear:Wt("clear"),forEach:mn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=hn(i,!1,!1),n[i]=hn(i,!0,!1),e[i]=hn(i,!1,!0),r[i]=hn(i,!0,!0)}),[t,n,e,r]}const[Ws,Ys,Ks,qs]=Vs();function la(t,e){const n=e?t?qs:Ks:t?Ys:Ws;return(r,a,i)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?r:Reflect.get(U(n,a)&&a in r?n:r,a,i)}const Gs={get:la(!1,!1)},Xs={get:la(!1,!0)},Js={get:la(!0,!1)},ao=new WeakMap,io=new WeakMap,oo=new WeakMap,Qs=new WeakMap;function Zs(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tl(t){return t.__v_skip||!Object.isExtensible(t)?0:Zs(As(t))}function Gn(t){return Ce(t)?t:fa(t,!1,Hs,Gs,ao)}function el(t){return fa(t,!1,Bs,Xs,io)}function so(t){return fa(t,!0,Us,Js,oo)}function fa(t,e,n,r,a){if(!Q(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=a.get(t);if(i)return i;const o=tl(t);if(o===0)return t;const s=new Proxy(t,o===2?r:n);return a.set(t,s),s}function Oe(t){return Ce(t)?Oe(t.__v_raw):!!(t&&t.__v_isReactive)}function Ce(t){return!!(t&&t.__v_isReadonly)}function Ln(t){return!!(t&&t.__v_isShallow)}function lo(t){return Oe(t)||Ce(t)}function V(t){const e=t&&t.__v_raw;return e?V(e):t}function fo(t){return Nn(t,"__v_skip",!0),t}const Ye=t=>Q(t)?Gn(t):t,ca=t=>Q(t)?so(t):t;class co{constructor(e,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new aa(()=>e(this._value),()=>Tr(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const e=V(this);return uo(e),(!e._cacheable||e.effect.dirty)&&Qt(e._value,e._value=e.effect.run())&&Tr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function nl(t,e,n=!1){let r,a;const i=$(t);return i?(r=t,a=kt):(r=t.get,a=t.set),new co(r,a,i||!a,n)}function uo(t){Xt&&ue&&(t=V(t),Qi(ue,t.dep||(t.dep=to(()=>t.dep=void 0,t instanceof co?t:void 0))))}function Tr(t,e=3,n){t=V(t);const r=t.dep;r&&Zi(r,e)}function vt(t){return!!(t&&t.__v_isRef===!0)}function mo(t){return rl(t,!1)}function rl(t,e){return vt(t)?t:new al(t,e)}class al{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:V(e),this._value=n?e:Ye(e)}get value(){return uo(this),this._value}set value(e){const n=this.__v_isShallow||Ln(e)||Ce(e);e=n?e:V(e),Qt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ye(e),Tr(this,3))}}function il(t){return vt(t)?t.value:t}const ol={get:(t,e,n)=>il(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const a=t[e];return vt(a)&&!vt(n)?(a.value=n,!0):Reflect.set(t,e,n,r)}};function ho(t){return Oe(t)?t:new Proxy(t,ol)}/**
* @vue/runtime-core v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Jt(t,e,n,r){let a;try{a=r?t(...r):t()}catch(i){Xn(i,e,n)}return a}function Ct(t,e,n,r){if($(t)){const i=Jt(t,e,n,r);return i&&Vi(i)&&i.catch(o=>{Xn(o,e,n)}),i}const a=[];for(let i=0;i<t.length;i++)a.push(Ct(t[i],e,n,r));return a}function Xn(t,e,n,r=!0){const a=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,s=`https://vuejs.org/errors/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](t,o,s)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Jt(l,null,10,[t,o,s]);return}}sl(t,n,a,r)}function sl(t,e,n,r=!0){console.error(t)}let Ke=!1,Mr=!1;const st=[];let Nt=0;const Ee=[];let Kt=null,se=0;const po=Promise.resolve();let ua=null;function ll(t){const e=ua||po;return t?e.then(this?t.bind(this):t):e}function fl(t){let e=Nt+1,n=st.length;for(;e<n;){const r=e+n>>>1,a=st[r],i=qe(a);i<t||i===t&&a.pre?e=r+1:n=r}return e}function da(t){(!st.length||!st.includes(t,Ke&&t.allowRecurse?Nt+1:Nt))&&(t.id==null?st.push(t):st.splice(fl(t.id),0,t),go())}function go(){!Ke&&!Mr&&(Mr=!0,ua=po.then(bo))}function cl(t){const e=st.indexOf(t);e>Nt&&st.splice(e,1)}function ul(t){L(t)?Ee.push(...t):(!Kt||!Kt.includes(t,t.allowRecurse?se+1:se))&&Ee.push(t),go()}function Wa(t,e,n=Ke?Nt+1:0){for(;n<st.length;n++){const r=st[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;st.splice(n,1),n--,r()}}}function vo(t){if(Ee.length){const e=[...new Set(Ee)].sort((n,r)=>qe(n)-qe(r));if(Ee.length=0,Kt){Kt.push(...e);return}for(Kt=e,se=0;se<Kt.length;se++)Kt[se]();Kt=null,se=0}}const qe=t=>t.id==null?1/0:t.id,dl=(t,e)=>{const n=qe(t)-qe(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function bo(t){Mr=!1,Ke=!0,st.sort(dl);try{for(Nt=0;Nt<st.length;Nt++){const e=st[Nt];e&&e.active!==!1&&Jt(e,null,14)}}finally{Nt=0,st.length=0,vo(),Ke=!1,ua=null,(st.length||Ee.length)&&bo()}}function ml(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||q;let a=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||q;v&&(a=n.map(k=>nt(k)?k.trim():k)),m&&(a=n.map(Er))}let s,l=r[s=dr(e)]||r[s=dr(Rt(e))];!l&&i&&(l=r[s=dr(Me(e))]),l&&Ct(l,t,6,a);const c=r[s+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,Ct(c,t,6,a)}}function yo(t,e,n=!1){const r=e.emitsCache,a=r.get(t);if(a!==void 0)return a;const i=t.emits;let o={},s=!1;if(!$(t)){const l=c=>{const d=yo(c,e,!0);d&&(s=!0,ot(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!s?(Q(t)&&r.set(t,null),null):(L(i)?i.forEach(l=>o[l]=null):ot(o,i),Q(t)&&r.set(t,o),o)}function Jn(t,e){return!t||!Bn(e)?!1:(e=e.slice(2).replace(/Once$/,""),U(t,e[0].toLowerCase()+e.slice(1))||U(t,Me(e))||U(t,e))}let ht=null,Qn=null;function Rn(t){const e=ht;return ht=t,Qn=t&&t.type.__scopeId||null,e}function _o(t){Qn=t}function wo(){Qn=null}function hl(t,e=ht,n){if(!e||t._n)return t;const r=(...a)=>{r._d&&ni(-1);const i=Rn(e);let o;try{o=t(...a)}finally{Rn(i),r._d&&ni(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function hr(t){const{type:e,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:k,ctx:j,inheritAttrs:N}=t;let H,x;const S=Rn(t);try{if(n.shapeFlag&4){const z=a||r,B=z;H=Mt(d.call(B,z,m,i,k,v,j)),x=l}else{const z=e;H=Mt(z.length>1?z(i,{attrs:l,slots:s,emit:c}):z(i,null)),x=e.props?l:pl(l)}}catch(z){Be.length=0,Xn(z,t,1),H=Y(me)}let I=H;if(x&&N!==!1){const z=Object.keys(x),{shapeFlag:B}=I;z.length&&B&7&&(o&&z.some(ta)&&(x=gl(x,o)),I=Pe(I,x))}return n.dirs&&(I=Pe(I),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&(I.transition=n.transition),H=I,Rn(S),H}const pl=t=>{let e;for(const n in t)(n==="class"||n==="style"||Bn(n))&&((e||(e={}))[n]=t[n]);return e},gl=(t,e)=>{const n={};for(const r in t)(!ta(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function vl(t,e,n){const{props:r,children:a,component:i}=t,{props:o,children:s,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ya(r,o,c):!!o;if(l&8){const d=e.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Jn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ya(r,o,c):!0:!!o;return!1}function Ya(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(e[i]!==t[i]&&!Jn(n,i))return!0}return!1}function bl({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const xo="components";function ko(t,e){return _l(xo,t,!0,e)||t}const yl=Symbol.for("v-ndc");function _l(t,e,n=!0,r=!1){const a=ht||lt;if(a){const i=a.type;if(t===xo){const s=bf(i,!1);if(s&&(s===e||s===Rt(e)||s===Yn(Rt(e))))return i}const o=Ka(a[t]||i[t],e)||Ka(a.appContext[t],e);return!o&&r?i:o}}function Ka(t,e){return t&&(t[e]||t[Rt(e)]||t[Yn(Rt(e))])}const wl=t=>t.__isSuspense;function xl(t,e){e&&e.pendingBranch?L(t)?e.effects.push(...t):e.effects.push(t):ul(t)}const kl=Symbol.for("v-scx"),Al=()=>Pn(kl),pn={};function Sn(t,e,n){return Ao(t,e,n)}function Ao(t,e,{immediate:n,deep:r,flush:a,once:i,onTrack:o,onTrigger:s}=q){if(e&&i){const F=e;e=(...et)=>{F(...et),B()}}const l=lt,c=F=>r===!0?F:le(F,r===!1?1:void 0);let d,m=!1,v=!1;if(vt(t)?(d=()=>t.value,m=Ln(t)):Oe(t)?(d=()=>c(t),m=!0):L(t)?(v=!0,m=t.some(F=>Oe(F)||Ln(F)),d=()=>t.map(F=>{if(vt(F))return F.value;if(Oe(F))return c(F);if($(F))return Jt(F,l,2)})):$(t)?e?d=()=>Jt(t,l,2):d=()=>(k&&k(),Ct(t,l,3,[j])):d=kt,e&&r){const F=d;d=()=>le(F())}let k,j=F=>{k=I.onStop=()=>{Jt(F,l,4),k=I.onStop=void 0}},N;if(nr)if(j=kt,e?n&&Ct(e,l,3,[d(),v?[]:void 0,j]):d(),a==="sync"){const F=Al();N=F.__watcherHandles||(F.__watcherHandles=[])}else return kt;let H=v?new Array(t.length).fill(pn):pn;const x=()=>{if(!(!I.active||!I.dirty))if(e){const F=I.run();(r||m||(v?F.some((et,ut)=>Qt(et,H[ut])):Qt(F,H)))&&(k&&k(),Ct(e,l,3,[F,H===pn?void 0:v&&H[0]===pn?[]:H,j]),H=F)}else I.run()};x.allowRecurse=!!e;let S;a==="sync"?S=x:a==="post"?S=()=>mt(x,l&&l.suspense):(x.pre=!0,l&&(x.id=l.uid),S=()=>da(x));const I=new aa(d,kt,S),z=Rs(),B=()=>{I.stop(),z&&ea(z.effects,I)};return e?n?x():H=I.run():a==="post"?mt(I.run.bind(I),l&&l.suspense):I.run(),N&&N.push(B),B}function Ol(t,e,n){const r=this.proxy,a=nt(t)?t.includes(".")?Oo(r,t):()=>r[t]:t.bind(r,r);let i;$(e)?i=e:(i=e.handler,n=e);const o=en(this),s=Ao(a,i.bind(r),n);return o(),s}function Oo(t,e){const n=e.split(".");return()=>{let r=t;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function le(t,e,n=0,r){if(!Q(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),vt(t))le(t.value,e,n,r);else if(L(t))for(let a=0;a<t.length;a++)le(t[a],e,n,r);else if(Bi(t)||Ae(t))t.forEach(a=>{le(a,e,n,r)});else if(Yi(t))for(const a in t)le(t[a],e,n,r);return t}function Eo(t,e){if(ht===null)return t;const n=rr(ht)||ht.proxy,r=t.dirs||(t.dirs=[]);for(let a=0;a<e.length;a++){let[i,o,s,l=q]=e[a];i&&($(i)&&(i={mounted:i,updated:i}),i.deep&&le(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:s,modifiers:l}))}return t}function ae(t,e,n,r){const a=t.dirs,i=e&&e.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(ge(),Ct(l,n,8,[t.el,s,t,e]),ve())}}/*! #__NO_SIDE_EFFECTS__ */function El(t,e){return $(t)?ot({name:t.name},e,{setup:t}):t}const Cn=t=>!!t.type.__asyncLoader,So=t=>t.type.__isKeepAlive;function Sl(t,e){Co(t,"a",e)}function Cl(t,e){Co(t,"da",e)}function Co(t,e,n=lt){const r=t.__wdc||(t.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(Zn(e,r,n),n){let a=n.parent;for(;a&&a.parent;)So(a.parent.vnode)&&Pl(r,e,n,a),a=a.parent}}function Pl(t,e,n,r){const a=Zn(e,t,r,!0);Po(()=>{ea(r[e],a)},n)}function Zn(t,e,n=lt,r=!1){if(n){const a=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ge();const s=en(n),l=Ct(e,n,t,o);return s(),ve(),l});return r?a.unshift(i):a.push(i),i}}const Bt=t=>(e,n=lt)=>(!nr||t==="sp")&&Zn(t,(...r)=>e(...r),n),Il=Bt("bm"),Tl=Bt("m"),Ml=Bt("bu"),Nl=Bt("u"),Ll=Bt("bum"),Po=Bt("um"),Rl=Bt("sp"),Fl=Bt("rtg"),$l=Bt("rtc");function jl(t,e=lt){Zn("ec",t,e)}function ma(t,e,n,r){let a;const i=n&&n[r];if(L(t)||nt(t)){a=new Array(t.length);for(let o=0,s=t.length;o<s;o++)a[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){a=new Array(t);for(let o=0;o<t;o++)a[o]=e(o+1,o,void 0,i&&i[o])}else if(Q(t))if(t[Symbol.iterator])a=Array.from(t,(o,s)=>e(o,s,void 0,i&&i[s]));else{const o=Object.keys(t);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=e(t[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Nr=t=>t?Uo(t)?rr(t)||t.proxy:Nr(t.parent):null,Ue=ot(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Nr(t.parent),$root:t=>Nr(t.root),$emit:t=>t.emit,$options:t=>ha(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,da(t.update)}),$nextTick:t=>t.n||(t.n=ll.bind(t.proxy)),$watch:t=>Ol.bind(t)}),pr=(t,e)=>t!==q&&!t.__isScriptSetup&&U(t,e),zl={get({_:t},e){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=t;let c;if(e[0]!=="$"){const k=o[e];if(k!==void 0)switch(k){case 1:return r[e];case 2:return a[e];case 4:return n[e];case 3:return i[e]}else{if(pr(r,e))return o[e]=1,r[e];if(a!==q&&U(a,e))return o[e]=2,a[e];if((c=t.propsOptions[0])&&U(c,e))return o[e]=3,i[e];if(n!==q&&U(n,e))return o[e]=4,n[e];Lr&&(o[e]=0)}}const d=Ue[e];let m,v;if(d)return e==="$attrs"&&gt(t,"get",e),d(t);if((m=s.__cssModules)&&(m=m[e]))return m;if(n!==q&&U(n,e))return o[e]=4,n[e];if(v=l.config.globalProperties,U(v,e))return v[e]},set({_:t},e,n){const{data:r,setupState:a,ctx:i}=t;return pr(a,e)?(a[e]=n,!0):r!==q&&U(r,e)?(r[e]=n,!0):U(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||t!==q&&U(t,o)||pr(e,o)||(s=i[0])&&U(s,o)||U(r,o)||U(Ue,o)||U(a.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:U(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function qa(t){return L(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Lr=!0;function Dl(t){const e=ha(t),n=t.proxy,r=t.ctx;Lr=!1,e.beforeCreate&&Ga(e.beforeCreate,t,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:k,updated:j,activated:N,deactivated:H,beforeDestroy:x,beforeUnmount:S,destroyed:I,unmounted:z,render:B,renderTracked:F,renderTriggered:et,errorCaptured:ut,serverPrefetch:xt,expose:Ft,inheritAttrs:Fe,components:on,directives:sn,filters:lr}=e;if(c&&Hl(c,r,null),o)for(const Z in o){const K=o[Z];$(K)&&(r[Z]=K.bind(n))}if(a){const Z=a.call(n,n);Q(Z)&&(t.data=Gn(Z))}if(Lr=!0,i)for(const Z in i){const K=i[Z],ne=$(K)?K.bind(n,n):$(K.get)?K.get.bind(n,n):kt,ln=!$(K)&&$(K.set)?K.set.bind(n):kt,re=oe({get:ne,set:ln});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>re.value,set:Pt=>re.value=Pt})}if(s)for(const Z in s)Io(s[Z],r,n,Z);if(l){const Z=$(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(K=>{Kl(K,Z[K])})}d&&Ga(d,t,"c");function ft(Z,K){L(K)?K.forEach(ne=>Z(ne.bind(n))):K&&Z(K.bind(n))}if(ft(Il,m),ft(Tl,v),ft(Ml,k),ft(Nl,j),ft(Sl,N),ft(Cl,H),ft(jl,ut),ft($l,F),ft(Fl,et),ft(Ll,S),ft(Po,z),ft(Rl,xt),L(Ft))if(Ft.length){const Z=t.exposed||(t.exposed={});Ft.forEach(K=>{Object.defineProperty(Z,K,{get:()=>n[K],set:ne=>n[K]=ne})})}else t.exposed||(t.exposed={});B&&t.render===kt&&(t.render=B),Fe!=null&&(t.inheritAttrs=Fe),on&&(t.components=on),sn&&(t.directives=sn)}function Hl(t,e,n=kt){L(t)&&(t=Rr(t));for(const r in t){const a=t[r];let i;Q(a)?"default"in a?i=Pn(a.from||r,a.default,!0):i=Pn(a.from||r):i=Pn(a),vt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ga(t,e,n){Ct(L(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Io(t,e,n,r){const a=r.includes(".")?Oo(n,r):()=>n[r];if(nt(t)){const i=e[t];$(i)&&Sn(a,i)}else if($(t))Sn(a,t.bind(n));else if(Q(t))if(L(t))t.forEach(i=>Io(i,e,n,r));else{const i=$(t.handler)?t.handler.bind(n):e[t.handler];$(i)&&Sn(a,i,t)}}function ha(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,s=i.get(e);let l;return s?l=s:!a.length&&!n&&!r?l=e:(l={},a.length&&a.forEach(c=>Fn(l,c,o,!0)),Fn(l,e,o)),Q(e)&&i.set(e,l),l}function Fn(t,e,n,r=!1){const{mixins:a,extends:i}=e;i&&Fn(t,i,n,!0),a&&a.forEach(o=>Fn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const s=Ul[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const Ul={data:Xa,props:Ja,emits:Ja,methods:De,computed:De,beforeCreate:ct,created:ct,beforeMount:ct,mounted:ct,beforeUpdate:ct,updated:ct,beforeDestroy:ct,beforeUnmount:ct,destroyed:ct,unmounted:ct,activated:ct,deactivated:ct,errorCaptured:ct,serverPrefetch:ct,components:De,directives:De,watch:Vl,provide:Xa,inject:Bl};function Xa(t,e){return e?t?function(){return ot($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function Bl(t,e){return De(Rr(t),Rr(e))}function Rr(t){if(L(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ct(t,e){return t?[...new Set([].concat(t,e))]:e}function De(t,e){return t?ot(Object.create(null),t,e):e}function Ja(t,e){return t?L(t)&&L(e)?[...new Set([...t,...e])]:ot(Object.create(null),qa(t),qa(e??{})):e}function Vl(t,e){if(!t)return e;if(!e)return t;const n=ot(Object.create(null),t);for(const r in e)n[r]=ct(t[r],e[r]);return n}function To(){return{app:null,config:{isNativeTag:xs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wl=0;function Yl(t,e){return function(r,a=null){$(r)||(r=ot({},r)),a!=null&&!Q(a)&&(a=null);const i=To(),o=new WeakSet;let s=!1;const l=i.app={_uid:Wl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:wf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&$(c.install)?(o.add(c),c.install(l,...d)):$(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=Y(r,a);return v.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),d&&e?e(v,c):t(v,c,m),s=!0,l._container=c,c.__vue_app__=l,rr(v.component)||v.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){$n=l;try{return c()}finally{$n=null}}};return l}}let $n=null;function Kl(t,e){if(lt){let n=lt.provides;const r=lt.parent&&lt.parent.provides;r===n&&(n=lt.provides=Object.create(r)),n[t]=e}}function Pn(t,e,n=!1){const r=lt||ht;if(r||$n){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:$n._context.provides;if(a&&t in a)return a[t];if(arguments.length>1)return n&&$(e)?e.call(r&&r.proxy):e}}function ql(t,e,n,r=!1){const a={},i={};Nn(i,er,1),t.propsDefaults=Object.create(null),Mo(t,e,a,i);for(const o in t.propsOptions[0])o in a||(a[o]=void 0);n?t.props=r?a:el(a):t.type.props?t.props=a:t.props=i,t.attrs=i}function Gl(t,e,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=t,s=V(a),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Jn(t.emitsOptions,v))continue;const k=e[v];if(l)if(U(i,v))k!==i[v]&&(i[v]=k,c=!0);else{const j=Rt(v);a[j]=Fr(l,s,j,k,t,!1)}else k!==i[v]&&(i[v]=k,c=!0)}}}else{Mo(t,e,a,i)&&(c=!0);let d;for(const m in s)(!e||!U(e,m)&&((d=Me(m))===m||!U(e,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Fr(l,s,m,void 0,t,!0)):delete a[m]);if(i!==s)for(const m in i)(!e||!U(e,m))&&(delete i[m],c=!0)}c&&zt(t,"set","$attrs")}function Mo(t,e,n,r){const[a,i]=t.propsOptions;let o=!1,s;if(e)for(let l in e){if(On(l))continue;const c=e[l];let d;a&&U(a,d=Rt(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Jn(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=V(n),c=s||q;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Fr(a,l,m,c[m],t,!U(c,m))}}return o}function Fr(t,e,n,r,a,i){const o=t[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$(l)){const{propsDefaults:c}=a;if(n in c)r=c[n];else{const d=en(a);r=c[n]=l.call(null,e),d()}}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Me(n))&&(r=!0))}return r}function No(t,e,n=!1){const r=e.propsCache,a=r.get(t);if(a)return a;const i=t.props,o={},s=[];let l=!1;if(!$(t)){const d=m=>{l=!0;const[v,k]=No(m,e,!0);ot(o,v),k&&s.push(...k)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Q(t)&&r.set(t,ke),ke;if(L(i))for(let d=0;d<i.length;d++){const m=Rt(i[d]);Qa(m)&&(o[m]=q)}else if(i)for(const d in i){const m=Rt(d);if(Qa(m)){const v=i[d],k=o[m]=L(v)||$(v)?{type:v}:ot({},v);if(k){const j=ei(Boolean,k.type),N=ei(String,k.type);k[0]=j>-1,k[1]=N<0||j<N,(j>-1||U(k,"default"))&&s.push(m)}}}const c=[o,s];return Q(t)&&r.set(t,c),c}function Qa(t){return t[0]!=="$"}function Za(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ti(t,e){return Za(t)===Za(e)}function ei(t,e){return L(e)?e.findIndex(n=>ti(n,t)):$(e)&&ti(e,t)?0:-1}const Lo=t=>t[0]==="_"||t==="$stable",pa=t=>L(t)?t.map(Mt):[Mt(t)],Xl=(t,e,n)=>{if(e._n)return e;const r=hl((...a)=>pa(e(...a)),n);return r._c=!1,r},Ro=(t,e,n)=>{const r=t._ctx;for(const a in t){if(Lo(a))continue;const i=t[a];if($(i))e[a]=Xl(a,i,r);else if(i!=null){const o=pa(i);e[a]=()=>o}}},Fo=(t,e)=>{const n=pa(e);t.slots.default=()=>n},Jl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=V(e),Nn(e,"_",n)):Ro(e,t.slots={})}else t.slots={},e&&Fo(t,e);Nn(t.slots,er,1)},Ql=(t,e,n)=>{const{vnode:r,slots:a}=t;let i=!0,o=q;if(r.shapeFlag&32){const s=e._;s?n&&s===1?i=!1:(ot(a,e),!n&&s===1&&delete a._):(i=!e.$stable,Ro(e,a)),o=e}else e&&(Fo(t,e),o={default:1});if(i)for(const s in a)!Lo(s)&&o[s]==null&&delete a[s]};function $r(t,e,n,r,a=!1){if(L(t)){t.forEach((v,k)=>$r(v,e&&(L(e)?e[k]:e),n,r,a));return}if(Cn(r)&&!a)return;const i=r.shapeFlag&4?rr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=t,c=e&&e.r,d=s.refs===q?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(nt(c)?(d[c]=null,U(m,c)&&(m[c]=null)):vt(c)&&(c.value=null)),$(l))Jt(l,s,12,[o,d]);else{const v=nt(l),k=vt(l);if(v||k){const j=()=>{if(t.f){const N=v?U(m,l)?m[l]:d[l]:l.value;a?L(N)&&ea(N,i):L(N)?N.includes(i)||N.push(i):v?(d[l]=[i],U(m,l)&&(m[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else v?(d[l]=o,U(m,l)&&(m[l]=o)):k&&(l.value=o,t.k&&(d[t.k]=o))};o?(j.id=-1,mt(j,n)):j()}}}const mt=xl;function Zl(t){return tf(t)}function tf(t,e){const n=Ki();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:k=kt,insertStaticContent:j}=t,N=(f,u,h,p=null,g=null,_=null,A=void 0,y=null,w=!!u.dynamicChildren)=>{if(f===u)return;f&&!je(f,u)&&(p=fn(f),Pt(f,g,_,!0),f=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:b,ref:E,shapeFlag:M}=u;switch(b){case tr:H(f,u,h,p);break;case me:x(f,u,h,p);break;case vr:f==null&&S(u,h,p,A);break;case yt:on(f,u,h,p,g,_,A,y,w);break;default:M&1?B(f,u,h,p,g,_,A,y,w):M&6?sn(f,u,h,p,g,_,A,y,w):(M&64||M&128)&&b.process(f,u,h,p,g,_,A,y,w,be)}E!=null&&g&&$r(E,f&&f.ref,_,u||f,!u)},H=(f,u,h,p)=>{if(f==null)r(u.el=s(u.children),h,p);else{const g=u.el=f.el;u.children!==f.children&&c(g,u.children)}},x=(f,u,h,p)=>{f==null?r(u.el=l(u.children||""),h,p):u.el=f.el},S=(f,u,h,p)=>{[f.el,f.anchor]=j(f.children,u,h,p,f.el,f.anchor)},I=({el:f,anchor:u},h,p)=>{let g;for(;f&&f!==u;)g=v(f),r(f,h,p),f=g;r(u,h,p)},z=({el:f,anchor:u})=>{let h;for(;f&&f!==u;)h=v(f),a(f),f=h;a(u)},B=(f,u,h,p,g,_,A,y,w)=>{u.type==="svg"?A="svg":u.type==="math"&&(A="mathml"),f==null?F(u,h,p,g,_,A,y,w):xt(f,u,g,_,A,y,w)},F=(f,u,h,p,g,_,A,y)=>{let w,b;const{props:E,shapeFlag:M,transition:T,dirs:R}=f;if(w=f.el=o(f.type,_,E&&E.is,E),M&8?d(w,f.children):M&16&&ut(f.children,w,null,p,g,gr(f,_),A,y),R&&ae(f,null,p,"created"),et(w,f,f.scopeId,A,p),E){for(const W in E)W!=="value"&&!On(W)&&i(w,W,null,E[W],_,f.children,p,g,$t);"value"in E&&i(w,"value",null,E.value,_),(b=E.onVnodeBeforeMount)&&Tt(b,p,f)}R&&ae(f,null,p,"beforeMount");const D=ef(g,T);D&&T.beforeEnter(w),r(w,u,h),((b=E&&E.onVnodeMounted)||D||R)&&mt(()=>{b&&Tt(b,p,f),D&&T.enter(w),R&&ae(f,null,p,"mounted")},g)},et=(f,u,h,p,g)=>{if(h&&k(f,h),p)for(let _=0;_<p.length;_++)k(f,p[_]);if(g){let _=g.subTree;if(u===_){const A=g.vnode;et(f,A,A.scopeId,A.slotScopeIds,g.parent)}}},ut=(f,u,h,p,g,_,A,y,w=0)=>{for(let b=w;b<f.length;b++){const E=f[b]=y?qt(f[b]):Mt(f[b]);N(null,E,u,h,p,g,_,A,y)}},xt=(f,u,h,p,g,_,A)=>{const y=u.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:E}=u;w|=f.patchFlag&16;const M=f.props||q,T=u.props||q;let R;if(h&&ie(h,!1),(R=T.onVnodeBeforeUpdate)&&Tt(R,h,u,f),E&&ae(u,f,h,"beforeUpdate"),h&&ie(h,!0),b?Ft(f.dynamicChildren,b,y,h,p,gr(u,g),_):A||K(f,u,y,null,h,p,gr(u,g),_,!1),w>0){if(w&16)Fe(y,u,M,T,h,p,g);else if(w&2&&M.class!==T.class&&i(y,"class",null,T.class,g),w&4&&i(y,"style",M.style,T.style,g),w&8){const D=u.dynamicProps;for(let W=0;W<D.length;W++){const J=D[W],at=M[J],At=T[J];(At!==at||J==="value")&&i(y,J,at,At,g,f.children,h,p,$t)}}w&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&Fe(y,u,M,T,h,p,g);((R=T.onVnodeUpdated)||E)&&mt(()=>{R&&Tt(R,h,u,f),E&&ae(u,f,h,"updated")},p)},Ft=(f,u,h,p,g,_,A)=>{for(let y=0;y<u.length;y++){const w=f[y],b=u[y],E=w.el&&(w.type===yt||!je(w,b)||w.shapeFlag&70)?m(w.el):h;N(w,b,E,null,p,g,_,A,!0)}},Fe=(f,u,h,p,g,_,A)=>{if(h!==p){if(h!==q)for(const y in h)!On(y)&&!(y in p)&&i(f,y,h[y],null,A,u.children,g,_,$t);for(const y in p){if(On(y))continue;const w=p[y],b=h[y];w!==b&&y!=="value"&&i(f,y,b,w,A,u.children,g,_,$t)}"value"in p&&i(f,"value",h.value,p.value,A)}},on=(f,u,h,p,g,_,A,y,w)=>{const b=u.el=f?f.el:s(""),E=u.anchor=f?f.anchor:s("");let{patchFlag:M,dynamicChildren:T,slotScopeIds:R}=u;R&&(y=y?y.concat(R):R),f==null?(r(b,h,p),r(E,h,p),ut(u.children||[],h,E,g,_,A,y,w)):M>0&&M&64&&T&&f.dynamicChildren?(Ft(f.dynamicChildren,T,h,g,_,A,y),(u.key!=null||g&&u===g.subTree)&&$o(f,u,!0)):K(f,u,h,E,g,_,A,y,w)},sn=(f,u,h,p,g,_,A,y,w)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?g.ctx.activate(u,h,p,A,w):lr(u,h,p,g,_,A,w):Ta(f,u,w)},lr=(f,u,h,p,g,_,A)=>{const y=f.component=mf(f,p,g);if(So(f)&&(y.ctx.renderer=be),hf(y),y.asyncDep){if(g&&g.registerDep(y,ft),!f.el){const w=y.subTree=Y(me);x(null,w,u,h)}}else ft(y,f,u,h,g,_,A)},Ta=(f,u,h)=>{const p=u.component=f.component;if(vl(f,u,h))if(p.asyncDep&&!p.asyncResolved){Z(p,u,h);return}else p.next=u,cl(p.update),p.effect.dirty=!0,p.update();else u.el=f.el,p.vnode=u},ft=(f,u,h,p,g,_,A)=>{const y=()=>{if(f.isMounted){let{next:E,bu:M,u:T,parent:R,vnode:D}=f;{const ye=jo(f);if(ye){E&&(E.el=D.el,Z(f,E,A)),ye.asyncDep.then(()=>{f.isUnmounted||y()});return}}let W=E,J;ie(f,!1),E?(E.el=D.el,Z(f,E,A)):E=D,M&&En(M),(J=E.props&&E.props.onVnodeBeforeUpdate)&&Tt(J,R,E,D),ie(f,!0);const at=hr(f),At=f.subTree;f.subTree=at,N(At,at,m(At.el),fn(At),f,g,_),E.el=at.el,W===null&&bl(f,at.el),T&&mt(T,g),(J=E.props&&E.props.onVnodeUpdated)&&mt(()=>Tt(J,R,E,D),g)}else{let E;const{el:M,props:T}=u,{bm:R,m:D,parent:W}=f,J=Cn(u);if(ie(f,!1),R&&En(R),!J&&(E=T&&T.onVnodeBeforeMount)&&Tt(E,W,u),ie(f,!0),M&&ur){const at=()=>{f.subTree=hr(f),ur(M,f.subTree,f,g,null)};J?u.type.__asyncLoader().then(()=>!f.isUnmounted&&at()):at()}else{const at=f.subTree=hr(f);N(null,at,h,p,f,g,_),u.el=at.el}if(D&&mt(D,g),!J&&(E=T&&T.onVnodeMounted)){const at=u;mt(()=>Tt(E,W,at),g)}(u.shapeFlag&256||W&&Cn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&mt(f.a,g),f.isMounted=!0,u=h=p=null}},w=f.effect=new aa(y,kt,()=>da(b),f.scope),b=f.update=()=>{w.dirty&&w.run()};b.id=f.uid,ie(f,!0),b()},Z=(f,u,h)=>{u.component=f;const p=f.vnode.props;f.vnode=u,f.next=null,Gl(f,u.props,p,h),Ql(f,u.children,h),ge(),Wa(f),ve()},K=(f,u,h,p,g,_,A,y,w=!1)=>{const b=f&&f.children,E=f?f.shapeFlag:0,M=u.children,{patchFlag:T,shapeFlag:R}=u;if(T>0){if(T&128){ln(b,M,h,p,g,_,A,y,w);return}else if(T&256){ne(b,M,h,p,g,_,A,y,w);return}}R&8?(E&16&&$t(b,g,_),M!==b&&d(h,M)):E&16?R&16?ln(b,M,h,p,g,_,A,y,w):$t(b,g,_,!0):(E&8&&d(h,""),R&16&&ut(M,h,p,g,_,A,y,w))},ne=(f,u,h,p,g,_,A,y,w)=>{f=f||ke,u=u||ke;const b=f.length,E=u.length,M=Math.min(b,E);let T;for(T=0;T<M;T++){const R=u[T]=w?qt(u[T]):Mt(u[T]);N(f[T],R,h,null,g,_,A,y,w)}b>E?$t(f,g,_,!0,!1,M):ut(u,h,p,g,_,A,y,w,M)},ln=(f,u,h,p,g,_,A,y,w)=>{let b=0;const E=u.length;let M=f.length-1,T=E-1;for(;b<=M&&b<=T;){const R=f[b],D=u[b]=w?qt(u[b]):Mt(u[b]);if(je(R,D))N(R,D,h,null,g,_,A,y,w);else break;b++}for(;b<=M&&b<=T;){const R=f[M],D=u[T]=w?qt(u[T]):Mt(u[T]);if(je(R,D))N(R,D,h,null,g,_,A,y,w);else break;M--,T--}if(b>M){if(b<=T){const R=T+1,D=R<E?u[R].el:p;for(;b<=T;)N(null,u[b]=w?qt(u[b]):Mt(u[b]),h,D,g,_,A,y,w),b++}}else if(b>T)for(;b<=M;)Pt(f[b],g,_,!0),b++;else{const R=b,D=b,W=new Map;for(b=D;b<=T;b++){const bt=u[b]=w?qt(u[b]):Mt(u[b]);bt.key!=null&&W.set(bt.key,b)}let J,at=0;const At=T-D+1;let ye=!1,La=0;const $e=new Array(At);for(b=0;b<At;b++)$e[b]=0;for(b=R;b<=M;b++){const bt=f[b];if(at>=At){Pt(bt,g,_,!0);continue}let It;if(bt.key!=null)It=W.get(bt.key);else for(J=D;J<=T;J++)if($e[J-D]===0&&je(bt,u[J])){It=J;break}It===void 0?Pt(bt,g,_,!0):($e[It-D]=b+1,It>=La?La=It:ye=!0,N(bt,u[It],h,null,g,_,A,y,w),at++)}const Ra=ye?nf($e):ke;for(J=Ra.length-1,b=At-1;b>=0;b--){const bt=D+b,It=u[bt],Fa=bt+1<E?u[bt+1].el:p;$e[b]===0?N(null,It,h,Fa,g,_,A,y,w):ye&&(J<0||b!==Ra[J]?re(It,h,Fa,2):J--)}}},re=(f,u,h,p,g=null)=>{const{el:_,type:A,transition:y,children:w,shapeFlag:b}=f;if(b&6){re(f.component.subTree,u,h,p);return}if(b&128){f.suspense.move(u,h,p);return}if(b&64){A.move(f,u,h,be);return}if(A===yt){r(_,u,h);for(let M=0;M<w.length;M++)re(w[M],u,h,p);r(f.anchor,u,h);return}if(A===vr){I(f,u,h);return}if(p!==2&&b&1&&y)if(p===0)y.beforeEnter(_),r(_,u,h),mt(()=>y.enter(_),g);else{const{leave:M,delayLeave:T,afterLeave:R}=y,D=()=>r(_,u,h),W=()=>{M(_,()=>{D(),R&&R()})};T?T(_,D,W):W()}else r(_,u,h)},Pt=(f,u,h,p=!1,g=!1)=>{const{type:_,props:A,ref:y,children:w,dynamicChildren:b,shapeFlag:E,patchFlag:M,dirs:T}=f;if(y!=null&&$r(y,null,h,f,!0),E&256){u.ctx.deactivate(f);return}const R=E&1&&T,D=!Cn(f);let W;if(D&&(W=A&&A.onVnodeBeforeUnmount)&&Tt(W,u,f),E&6)ws(f.component,h,p);else{if(E&128){f.suspense.unmount(h,p);return}R&&ae(f,null,u,"beforeUnmount"),E&64?f.type.remove(f,u,h,g,be,p):b&&(_!==yt||M>0&&M&64)?$t(b,u,h,!1,!0):(_===yt&&M&384||!g&&E&16)&&$t(w,u,h),p&&Ma(f)}(D&&(W=A&&A.onVnodeUnmounted)||R)&&mt(()=>{W&&Tt(W,u,f),R&&ae(f,null,u,"unmounted")},h)},Ma=f=>{const{type:u,el:h,anchor:p,transition:g}=f;if(u===yt){_s(h,p);return}if(u===vr){z(f);return}const _=()=>{a(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:A,delayLeave:y}=g,w=()=>A(h,_);y?y(f.el,_,w):w()}else _()},_s=(f,u)=>{let h;for(;f!==u;)h=v(f),a(f),f=h;a(u)},ws=(f,u,h)=>{const{bum:p,scope:g,update:_,subTree:A,um:y}=f;p&&En(p),g.stop(),_&&(_.active=!1,Pt(A,f,u,h)),y&&mt(y,u),mt(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},$t=(f,u,h,p=!1,g=!1,_=0)=>{for(let A=_;A<f.length;A++)Pt(f[A],u,h,p,g)},fn=f=>f.shapeFlag&6?fn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el);let fr=!1;const Na=(f,u,h)=>{f==null?u._vnode&&Pt(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,h),fr||(fr=!0,Wa(),vo(),fr=!1),u._vnode=f},be={p:N,um:Pt,m:re,r:Ma,mt:lr,mc:ut,pc:K,pbc:Ft,n:fn,o:t};let cr,ur;return e&&([cr,ur]=e(be)),{render:Na,hydrate:cr,createApp:Yl(Na,cr)}}function gr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ie({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ef(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function $o(t,e,n=!1){const r=t.children,a=e.children;if(L(r)&&L(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=qt(a[i]),s.el=o.el),n||$o(o,s)),s.type===tr&&(s.el=o.el)}}function nf(t){const e=t.slice(),n=[0];let r,a,i,o,s;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(a=n[n.length-1],t[a]<c){e[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,t[n[s]]<c?i=s+1:o=s;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function jo(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:jo(e)}const rf=t=>t.__isTeleport,yt=Symbol.for("v-fgt"),tr=Symbol.for("v-txt"),me=Symbol.for("v-cmt"),vr=Symbol.for("v-stc"),Be=[];let Et=null;function pt(t=!1){Be.push(Et=t?null:[])}function af(){Be.pop(),Et=Be[Be.length-1]||null}let Ge=1;function ni(t){Ge+=t}function zo(t){return t.dynamicChildren=Ge>0?Et||ke:null,af(),Ge>0&&Et&&Et.push(t),t}function _t(t,e,n,r,a,i){return zo(P(t,e,n,r,a,i,!0))}function of(t,e,n,r,a){return zo(Y(t,e,n,r,a,!0))}function jr(t){return t?t.__v_isVNode===!0:!1}function je(t,e){return t.type===e.type&&t.key===e.key}const er="__vInternal",Do=({key:t})=>t??null,In=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?nt(t)||vt(t)||$(t)?{i:ht,r:t,k:e,f:!!n}:t:null);function P(t,e=null,n=null,r=0,a=null,i=t===yt?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Do(e),ref:e&&In(e),scopeId:Qn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ht};return s?(ga(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=nt(n)?8:16),Ge>0&&!o&&Et&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Et.push(l),l}const Y=sf;function sf(t,e=null,n=null,r=0,a=null,i=!1){if((!t||t===yl)&&(t=me),jr(t)){const s=Pe(t,e,!0);return n&&ga(s,n),Ge>0&&!i&&Et&&(s.shapeFlag&6?Et[Et.indexOf(t)]=s:Et.push(s)),s.patchFlag|=-2,s}if(yf(t)&&(t=t.__vccOpts),e){e=lf(e);let{class:s,style:l}=e;s&&!nt(s)&&(e.class=Kn(s)),Q(l)&&(lo(l)&&!L(l)&&(l=ot({},l)),e.style=ra(l))}const o=nt(t)?1:wl(t)?128:rf(t)?64:Q(t)?4:$(t)?2:0;return P(t,e,n,r,a,o,i,!0)}function lf(t){return t?lo(t)||er in t?ot({},t):t:null}function Pe(t,e,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=t,s=e?cf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&Do(s),ref:e&&e.ref?n&&a?L(a)?a.concat(In(e)):[a,In(e)]:In(e):a,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==yt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pe(t.ssContent),ssFallback:t.ssFallback&&Pe(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ho(t=" ",e=0){return Y(tr,null,t,e)}function ff(t="",e=!1){return e?(pt(),of(me,null,t)):Y(me,null,t)}function Mt(t){return t==null||typeof t=="boolean"?Y(me):L(t)?Y(yt,null,t.slice()):typeof t=="object"?qt(t):Y(tr,null,String(t))}function qt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pe(t)}function ga(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(L(e))n=16;else if(typeof e=="object")if(r&65){const a=e.default;a&&(a._c&&(a._d=!1),ga(t,a()),a._c&&(a._d=!0));return}else{n=32;const a=e._;!a&&!(er in e)?e._ctx=ht:a===3&&ht&&(ht.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:ht},n=32):(e=String(e),r&64?(n=16,e=[Ho(e)]):n=8);t.children=e,t.shapeFlag|=n}function cf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const a in r)if(a==="class")e.class!==r.class&&(e.class=Kn([e.class,r.class]));else if(a==="style")e.style=ra([e.style,r.style]);else if(Bn(a)){const i=e[a],o=r[a];o&&i!==o&&!(L(i)&&i.includes(o))&&(e[a]=i?[].concat(i,o):o)}else a!==""&&(e[a]=r[a])}return e}function Tt(t,e,n,r=null){Ct(t,e,7,[n,r])}const uf=To();let df=0;function mf(t,e,n){const r=t.type,a=(e?e.appContext:t.appContext)||uf,i={uid:df++,vnode:t,type:r,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ns(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:No(r,a),emitsOptions:yo(r,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ml.bind(null,i),t.ce&&t.ce(i),i}let lt=null,jn,zr;{const t=Ki(),e=(n,r)=>{let a;return(a=t[n])||(a=t[n]=[]),a.push(r),i=>{a.length>1?a.forEach(o=>o(i)):a[0](i)}};jn=e("__VUE_INSTANCE_SETTERS__",n=>lt=n),zr=e("__VUE_SSR_SETTERS__",n=>nr=n)}const en=t=>{const e=lt;return jn(t),t.scope.on(),()=>{t.scope.off(),jn(e)}},ri=()=>{lt&&lt.scope.off(),jn(null)};function Uo(t){return t.vnode.shapeFlag&4}let nr=!1;function hf(t,e=!1){e&&zr(e);const{props:n,children:r}=t.vnode,a=Uo(t);ql(t,n,a,e),Jl(t,r);const i=a?pf(t,e):void 0;return e&&zr(!1),i}function pf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=fo(new Proxy(t.ctx,zl));const{setup:r}=n;if(r){const a=t.setupContext=r.length>1?vf(t):null,i=en(t);ge();const o=Jt(r,t,0,[t.props,a]);if(ve(),i(),Vi(o)){if(o.then(ri,ri),e)return o.then(s=>{ai(t,s,e)}).catch(s=>{Xn(s,t,0)});t.asyncDep=o}else ai(t,o,e)}else Bo(t,e)}function ai(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Q(e)&&(t.setupState=ho(e)),Bo(t,n)}let ii;function Bo(t,e,n){const r=t.type;if(!t.render){if(!e&&ii&&!r.render){const a=r.template||ha(t).template;if(a){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ot(ot({isCustomElement:i,delimiters:s},o),l);r.render=ii(a,c)}}t.render=r.render||kt}{const a=en(t);ge();try{Dl(t)}finally{ve(),a()}}}function gf(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return gt(t,"get","$attrs"),e[n]}}))}function vf(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return gf(t)},slots:t.slots,emit:t.emit,expose:e}}function rr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ho(fo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ue)return Ue[n](t)},has(e,n){return n in e||n in Ue}}))}function bf(t,e=!0){return $(t)?t.displayName||t.name:t.name||e&&t.__name}function yf(t){return $(t)&&"__vccOpts"in t}const oe=(t,e)=>nl(t,e,nr);function _f(t,e,n){const r=arguments.length;return r===2?Q(e)&&!L(e)?jr(e)?Y(t,null,[e]):Y(t,e):Y(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&jr(n)&&(n=[n]),Y(t,e,n))}const wf="3.4.10";/**
* @vue/runtime-dom v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const xf="http://www.w3.org/2000/svg",kf="http://www.w3.org/1998/Math/MathML",Gt=typeof document<"u"?document:null,oi=Gt&&Gt.createElement("template"),Af={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const a=e==="svg"?Gt.createElementNS(xf,t):e==="mathml"?Gt.createElementNS(kf,t):Gt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:t=>Gt.createTextNode(t),createComment:t=>Gt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Gt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,a,i){const o=n?n.previousSibling:e.lastChild;if(a&&(a===i||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{oi.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const s=oi.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Of=Symbol("_vtc");function Ef(t,e,n){const r=t[Of];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const va=Symbol("_vod"),Sf={beforeMount(t,{value:e},{transition:n}){t[va]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ze(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),ze(t,!0),r.enter(t)):r.leave(t,()=>{ze(t,!1)}):ze(t,e))},beforeUnmount(t,{value:e}){ze(t,e)}};function ze(t,e){t.style.display=e?t[va]:"none"}const Cf=Symbol("");function Pf(t,e,n){const r=t.style,a=r.display,i=nt(n);if(n&&!i){if(e&&!nt(e))for(const o in e)n[o]==null&&Dr(r,o,"");for(const o in n)Dr(r,o,n[o])}else if(i){if(e!==n){const o=r[Cf];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");va in t&&(r.display=a)}const si=/\s*!important$/;function Dr(t,e,n){if(L(n))n.forEach(r=>Dr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=If(t,e);si.test(n)?t.setProperty(Me(r),n.replace(si,""),"important"):t[r]=n}}const li=["Webkit","Moz","ms"],br={};function If(t,e){const n=br[e];if(n)return n;let r=Rt(e);if(r!=="filter"&&r in t)return br[e]=r;r=Yn(r);for(let a=0;a<li.length;a++){const i=li[a]+r;if(i in t)return br[e]=i}return e}const fi="http://www.w3.org/1999/xlink";function Tf(t,e,n,r,a){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(fi,e.slice(6,e.length)):t.setAttributeNS(fi,e,n);else{const i=Ms(e);n==null||i&&!qi(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Mf(t,e,n,r,a,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,a,i),t[e]=n??"";return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){t._value=n;const c=s==="OPTION"?t.getAttribute("value"):t.value,d=n??"";c!==d&&(t.value=d),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=qi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function _e(t,e,n,r){t.addEventListener(e,n,r)}function Nf(t,e,n,r){t.removeEventListener(e,n,r)}const ci=Symbol("_vei");function Lf(t,e,n,r,a=null){const i=t[ci]||(t[ci]={}),o=i[e];if(r&&o)o.value=r;else{const[s,l]=Rf(e);if(r){const c=i[e]=jf(r,a);_e(t,s,c,l)}else o&&(Nf(t,s,o,l),i[e]=void 0)}}const ui=/(?:Once|Passive|Capture)$/;function Rf(t){let e;if(ui.test(t)){e={};let r;for(;r=t.match(ui);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Me(t.slice(2)),e]}let yr=0;const Ff=Promise.resolve(),$f=()=>yr||(Ff.then(()=>yr=0),yr=Date.now());function jf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ct(zf(r,n.value),e,5,[r])};return n.value=t,n.attached=$f(),n}function zf(t,e){if(L(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>a=>!a._stopped&&r&&r(a))}else return e}const di=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Df=(t,e,n,r,a,i,o,s,l)=>{const c=a==="svg";e==="class"?Ef(t,r,c):e==="style"?Pf(t,n,r):Bn(e)?ta(e)||Lf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Hf(t,e,r,c))?Mf(t,e,r,i,o,s,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Tf(t,e,r,c))};function Hf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&di(e)&&$(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const a=t.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return di(e)&&nt(n)?!1:e in t}const mi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return L(e)?n=>En(e,n):e};function Uf(t){t.target.composing=!0}function hi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _r=Symbol("_assign"),Bf={created(t,{modifiers:{lazy:e,trim:n,number:r}},a){t[_r]=mi(a);const i=r||a.props&&a.props.type==="number";_e(t,e?"change":"input",o=>{if(o.target.composing)return;let s=t.value;n&&(s=s.trim()),i&&(s=Er(s)),t[_r](s)}),n&&_e(t,"change",()=>{t.value=t.value.trim()}),e||(_e(t,"compositionstart",Uf),_e(t,"compositionend",hi),_e(t,"change",hi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:a}},i){if(t[_r]=mi(i),t.composing)return;const o=a||t.type==="number"?Er(t.value):t.value,s=e??"";o!==s&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===s)||(t.value=s))}},Vf=ot({patchProp:Df},Af);let pi;function Wf(){return pi||(pi=Zl(Vf))}const Yf=(...t)=>{const e=Wf().createApp(...t),{mount:n}=e;return e.mount=r=>{const a=qf(r);if(!a)return;const i=e._component;!$(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,Kf(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},e};function Kf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function qf(t){return nt(t)?document.querySelector(t):t}const Ne=(t,e)=>{const n=t.__vccOpts||t;for(const[r,a]of e)n[r]=a;return n},Gf={},Xf=t=>(_o("data-v-2b34bbcb"),t=t(),wo(),t),Jf={class:"header"},Qf=Xf(()=>P("div",{class:"header__container"},[P("div",{class:"header__wrapper"})],-1)),Zf=[Qf];function tc(t,e){return pt(),_t("header",Jf,Zf)}const ec=Ne(Gf,[["render",tc],["__scopeId","data-v-2b34bbcb"]]),nc={class:"form__wrapper"},rc={class:"search__results"},ac={key:0},ic=["onClick"],oc={__name:"Search",emits:["place-data"],setup(t,{emit:e}){const n=e,r=Gn({query:"",timeout:null,results:null}),a=()=>{clearTimeout(r.timeout),r.timeout=setTimeout(async()=>{if(r.query!==""){const s=await(await fetch(`http://api.weatherapi.com/v1/search.json?key=6ba1c6c8793a451aaf6120152241801&q=${r.query}`)).json();r.results=s}else r.results=null},500)},i=async o=>{const l=await(await fetch(`http://api.weatherapi.com/v1/forecast.json?key=6ba1c6c8793a451aaf6120152241801&q=id:${o}&days=3&aqi=no&alerts=no`)).json();n("place-data",l),r.query="",r.results=null};return(o,s)=>(pt(),_t(yt,null,[P("form",null,[P("div",nc,[Eo(P("input",{type:"text",class:"form__input",placeholder:"Input a city","onUpdate:modelValue":s[0]||(s[0]=l=>r.query=l),onInput:a},null,544),[[Bf,r.query]])])]),P("div",rc,[r.results?(pt(),_t("div",ac,[(pt(!0),_t(yt,null,ma(r.results,l=>(pt(),_t("div",{key:l.id},[P("button",{onClick:c=>i(l.id),class:"search__button"},it(l.name)+", "+it(l.region)+", "+it(l.country),9,ic)]))),128))])):ff("",!0)])],64))}},sc=Ne(oc,[["__scopeId","data-v-f356e52a"]]),lc={class:"forecast"},fc={class:"forecast__table"},cc={class:"forecast__row"},uc={class:"forecast__day"},dc=["src"],mc={class:"forecast__temp"},hc={__name:"WeatherForecast",props:{day:Object},setup(t){return(e,n)=>(pt(),_t("div",lc,[P("div",fc,[P("div",cc,[P("div",uc,it(new Date(t.day.date).toLocaleDateString("en-us",{weekday:"long"})),1),P("img",{src:t.day.day.condition.icon,alt:"",class:"forecast__img"},null,8,dc),P("div",mc,it(Math.round(t.day.day.maxtemp_c))+" / "+it(Math.round(t.day.day.mintemp_c)),1)])])]))}},pc=Ne(hc,[["__scopeId","data-v-70b3bcd3"]]),Le=t=>(_o("data-v-89f82bcf"),t=t(),wo(),t),gc={class:"more"},vc={class:"more__wrapper"},bc={class:"more__item item-more"},yc={class:"item-more__content"},_c=Le(()=>P("p",null,"Wind speed",-1)),wc={class:"more__item item-more"},xc={class:"item-more__content"},kc=Le(()=>P("p",null,"Humidity",-1)),Ac={class:"more__item item-more"},Oc={class:"item-more__content"},Ec=Le(()=>P("p",null,"Precipitation",-1)),Sc={class:"more__item item-more"},Cc={class:"item-more__content"},Pc=Le(()=>P("p",null,"Direction",-1)),Ic={class:"more__item item-more"},Tc={class:"item-more__content"},Mc=Le(()=>P("p",null,"Feels",-1)),Nc={class:"more__item item-more"},Lc={class:"item-more__content"},Rc=Le(()=>P("p",null,"UV index",-1)),Fc={class:"more__footer"},$c={class:"more__last-updated"},jc={__name:"WeatherMore",props:{place:Object},setup(t){return(e,n)=>{const r=ko("font-awesome-icon");return pt(),_t("div",gc,[P("button",{onClick:n[0]||(n[0]=a=>e.$emit("close-info")),class:"close-button"},[Y(r,{icon:"fa-solid fa-xmark"})]),P("div",vc,[P("div",bc,[P("div",yc,[Y(r,{icon:["fas","wind"]}),P("p",null,it(t.place.current.wind_kph),1),_c])]),P("div",wc,[P("div",xc,[Y(r,{icon:"fa-solid fa-droplet"}),P("p",null,it(t.place.current.humidity),1),kc])]),P("div",Ac,[P("div",Oc,[Y(r,{icon:"fa-solid fa-umbrella"}),P("p",null,it(t.place.current.precip_mm),1),Ec])]),P("div",Sc,[P("div",Cc,[Y(r,{icon:["fas","arrows-to-circle"]}),P("p",null,it(t.place.current.wind_dir),1),Pc])]),P("div",Ic,[P("div",Tc,[Y(r,{icon:["fas","temperature-three-quarters"]}),P("p",null,it(Math.round(t.place.current.feelslike_c)),1),Mc])]),P("div",Nc,[P("div",Lc,[Y(r,{icon:"fa-solid fa-sun"}),P("p",null,it(t.place.current.uv),1),Rc])])]),P("div",Fc,[P("h3",$c," last update: "+it(t.place.current.last_updated),1),P("button",{onClick:n[1]||(n[1]=a=>e.$emit("remove-place")),class:"more__delete"},[Y(r,{icon:"fa-solid fa-trash"})])])])}}},zc=Ne(jc,[["__scopeId","data-v-89f82bcf"]]),Dc={class:"weather-card__header"},Hc=["src"],Uc={class:"weather-card__temp"},Bc={class:"weather-card__condition"},Vc={class:"more"},Wc={__name:"WeatherCard",props:{place:Object},setup(t){const e=mo(!1);return(n,r)=>{const a=ko("font-awesome-icon");return pt(),_t("div",{class:Kn(["weather-card",t.place.current.is_day===1?"bg-day":"bg-night"])},[P("div",Dc,[P("p",null,it(t.place.location.name),1),P("p",null,it(new Date(t.place.location.localtime).getHours())+":"+it(new Date(t.place.location.localtime).getMinutes()),1)]),P("img",{src:t.place.current.condition.icon,alt:"",class:"weather-card__img"},null,8,Hc),P("div",Uc,[P("p",null,it(Math.round(t.place.current.temp_c))+"°",1)]),P("div",Bc,[P("p",null,it(t.place.current.condition.text),1)]),(pt(!0),_t(yt,null,ma(t.place.forecast.forecastday,(i,o)=>(pt(),_t("div",{key:o},[Y(pc,{day:i},null,8,["day"])]))),128)),Eo(P("div",Vc,[Y(zc,{place:t.place,onCloseInfo:r[0]||(r[0]=i=>e.value=!1),onRemovePlace:r[1]||(r[1]=i=>n.$emit("delete-place",t.place.location.name))},null,8,["place"])],512),[[Sf,e.value]]),P("button",{onClick:r[2]||(r[2]=i=>e.value=!0),class:"show-more__button"},[Ho(" More "),Y(a,{icon:"fa-solid fa-arrow-right"})])],2)}}},Yc=Ne(Wc,[["__scopeId","data-v-f821cddc"]]),Kc={class:"container"},qc={class:"weather-wrapper"},Gc={__name:"App",setup(t){const e=mo([]),n=a=>{e.value.push(a)},r=a=>{e.value=e.value.filter(i=>i.location.name!==a)};return(a,i)=>(pt(),_t("main",null,[P("div",Kc,[Y(ec),P("div",null,[Y(sc,{onPlaceData:n})]),P("div",qc,[(pt(!0),_t(yt,null,ma(e.value,(o,s)=>(pt(),_t("div",{key:s,class:"weather-item"},[Y(Yc,{place:o,onDeletePlace:r},null,8,["place"])]))),128))])])]))}},Xc=Ne(Gc,[["__scopeId","data-v-c7f3db2b"]]);function gi(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?gi(Object(n),!0).forEach(function(r){rt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):gi(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function zn(t){"@babel/helpers - typeof";return zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zn(t)}function Jc(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function vi(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Qc(t,e,n){return e&&vi(t.prototype,e),n&&vi(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function rt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ba(t,e){return tu(t)||nu(t,e)||Vo(t,e)||au()}function nn(t){return Zc(t)||eu(t)||Vo(t)||ru()}function Zc(t){if(Array.isArray(t))return Hr(t)}function tu(t){if(Array.isArray(t))return t}function eu(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function nu(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Vo(t,e){if(t){if(typeof t=="string")return Hr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hr(t,e)}}function Hr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function ru(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function au(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var bi=function(){},ya={},Wo={},Yo=null,Ko={mark:bi,measure:bi};try{typeof window<"u"&&(ya=window),typeof document<"u"&&(Wo=document),typeof MutationObserver<"u"&&(Yo=MutationObserver),typeof performance<"u"&&(Ko=performance)}catch{}var iu=ya.navigator||{},yi=iu.userAgent,_i=yi===void 0?"":yi,Zt=ya,X=Wo,wi=Yo,gn=Ko;Zt.document;var Vt=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",qo=~_i.indexOf("MSIE")||~_i.indexOf("Trident/"),vn,bn,yn,_n,wn,Dt="___FONT_AWESOME___",Ur=16,Go="fa",Xo="svg-inline--fa",he="data-fa-i2svg",Br="data-fa-pseudo-element",ou="data-fa-pseudo-element-pending",_a="data-prefix",wa="data-icon",xi="fontawesome-i2svg",su="async",lu=["HTML","HEAD","STYLE","SCRIPT"],Jo=function(){try{return!0}catch{return!1}}(),G="classic",tt="sharp",xa=[G,tt];function rn(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[G]}})}var Xe=rn((vn={},rt(vn,G,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),rt(vn,tt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),vn)),Je=rn((bn={},rt(bn,G,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),rt(bn,tt,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),bn)),Qe=rn((yn={},rt(yn,G,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),rt(yn,tt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),yn)),fu=rn((_n={},rt(_n,G,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),rt(_n,tt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),_n)),cu=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Qo="fa-layers-text",uu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,du=rn((wn={},rt(wn,G,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),rt(wn,tt,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),wn)),Zo=[1,2,3,4,5,6,7,8,9,10],mu=Zo.concat([11,12,13,14,15,16,17,18,19,20]),hu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],fe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ze=new Set;Object.keys(Je[G]).map(Ze.add.bind(Ze));Object.keys(Je[tt]).map(Ze.add.bind(Ze));var pu=[].concat(xa,nn(Ze),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",fe.GROUP,fe.SWAP_OPACITY,fe.PRIMARY,fe.SECONDARY]).concat(Zo.map(function(t){return"".concat(t,"x")})).concat(mu.map(function(t){return"w-".concat(t)})),Ve=Zt.FontAwesomeConfig||{};function gu(t){var e=X.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function vu(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(X&&typeof X.querySelector=="function"){var bu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];bu.forEach(function(t){var e=ba(t,2),n=e[0],r=e[1],a=vu(gu(n));a!=null&&(Ve[r]=a)})}var ts={styleDefault:"solid",familyDefault:"classic",cssPrefix:Go,replacementClass:Xo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ve.familyPrefix&&(Ve.cssPrefix=Ve.familyPrefix);var Ie=O(O({},ts),Ve);Ie.autoReplaceSvg||(Ie.observeMutations=!1);var C={};Object.keys(ts).forEach(function(t){Object.defineProperty(C,t,{enumerable:!0,set:function(n){Ie[t]=n,We.forEach(function(r){return r(C)})},get:function(){return Ie[t]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(e){Ie.cssPrefix=e,We.forEach(function(n){return n(C)})},get:function(){return Ie.cssPrefix}});Zt.FontAwesomeConfig=C;var We=[];function yu(t){return We.push(t),function(){We.splice(We.indexOf(t),1)}}var Yt=Ur,Lt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function _u(t){if(!(!t||!Vt)){var e=X.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(e,r),t}}var wu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tn(){for(var t=12,e="";t-- >0;)e+=wu[Math.random()*62|0];return e}function Re(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ka(t){return t.classList?Re(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function es(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xu(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(es(t[n]),'" ')},"").trim()}function ar(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Aa(t){return t.size!==Lt.size||t.x!==Lt.x||t.y!==Lt.y||t.rotate!==Lt.rotate||t.flipX||t.flipY}function ku(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Au(t){var e=t.transform,n=t.width,r=n===void 0?Ur:n,a=t.height,i=a===void 0?Ur:a,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&qo?l+="translate(".concat(e.x/Yt-r/2,"em, ").concat(e.y/Yt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/Yt,"em), calc(-50% + ").concat(e.y/Yt,"em)) "):l+="translate(".concat(e.x/Yt,"em, ").concat(e.y/Yt,"em) "),l+="scale(".concat(e.size/Yt*(e.flipX?-1:1),", ").concat(e.size/Yt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Ou=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ns(){var t=Go,e=Xo,n=C.cssPrefix,r=C.replacementClass,a=Ou;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ki=!1;function wr(){C.autoAddCss&&!ki&&(_u(ns()),ki=!0)}var Eu={mixout:function(){return{dom:{css:ns,insertCss:wr}}},hooks:function(){return{beforeDOMElementCreation:function(){wr()},beforeI2svg:function(){wr()}}}},Ht=Zt||{};Ht[Dt]||(Ht[Dt]={});Ht[Dt].styles||(Ht[Dt].styles={});Ht[Dt].hooks||(Ht[Dt].hooks={});Ht[Dt].shims||(Ht[Dt].shims=[]);var St=Ht[Dt],rs=[],Su=function t(){X.removeEventListener("DOMContentLoaded",t),Dn=1,rs.map(function(e){return e()})},Dn=!1;Vt&&(Dn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),Dn||X.addEventListener("DOMContentLoaded",Su));function Cu(t){Vt&&(Dn?setTimeout(t,0):rs.push(t))}function an(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?es(t):"<".concat(e," ").concat(xu(r),">").concat(i.map(an).join(""),"</").concat(e,">")}function Ai(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Pu=function(e,n){return function(r,a,i,o){return e.call(n,r,a,i,o)}},xr=function(e,n,r,a){var i=Object.keys(e),o=i.length,s=a!==void 0?Pu(n,a):n,l,c,d;for(r===void 0?(l=1,d=e[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,e[c],c,e);return d};function Iu(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function Vr(t){var e=Iu(t);return e.length===1?e[0].toString(16):null}function Tu(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Oi(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function Wr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Oi(e);typeof St.hooks.addPack=="function"&&!a?St.hooks.addPack(t,Oi(e)):St.styles[t]=O(O({},St.styles[t]||{}),i),t==="fas"&&Wr("fa",e)}var xn,kn,An,we=St.styles,Mu=St.shims,Nu=(xn={},rt(xn,G,Object.values(Qe[G])),rt(xn,tt,Object.values(Qe[tt])),xn),Oa=null,as={},is={},os={},ss={},ls={},Lu=(kn={},rt(kn,G,Object.keys(Xe[G])),rt(kn,tt,Object.keys(Xe[tt])),kn);function Ru(t){return~pu.indexOf(t)}function Fu(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!Ru(a)?a:null}var fs=function(){var e=function(i){return xr(we,function(o,s,l){return o[l]=xr(s,i,{}),o},{})};as=e(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),is=e(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),ls=e(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in we||C.autoFetchSvg,r=xr(Mu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});os=r.names,ss=r.unicodes,Oa=ir(C.styleDefault,{family:C.familyDefault})};yu(function(t){Oa=ir(t.styleDefault,{family:C.familyDefault})});fs();function Ea(t,e){return(as[t]||{})[e]}function $u(t,e){return(is[t]||{})[e]}function ce(t,e){return(ls[t]||{})[e]}function cs(t){return os[t]||{prefix:null,iconName:null}}function ju(t){var e=ss[t],n=Ea("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function te(){return Oa}var Sa=function(){return{prefix:null,iconName:null,rest:[]}};function ir(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?G:n,a=Xe[r][t],i=Je[r][t]||Je[r][a],o=t in St.styles?t:null;return i||o||null}var Ei=(An={},rt(An,G,Object.keys(Qe[G])),rt(An,tt,Object.keys(Qe[tt])),An);function or(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(e={},rt(e,G,"".concat(C.cssPrefix,"-").concat(G)),rt(e,tt,"".concat(C.cssPrefix,"-").concat(tt)),e),o=null,s=G;(t.includes(i[G])||t.some(function(c){return Ei[G].includes(c)}))&&(s=G),(t.includes(i[tt])||t.some(function(c){return Ei[tt].includes(c)}))&&(s=tt);var l=t.reduce(function(c,d){var m=Fu(C.cssPrefix,d);if(we[d]?(d=Nu[s].includes(d)?fu[s][d]:d,o=d,c.prefix=d):Lu[s].indexOf(d)>-1?(o=d,c.prefix=ir(d,{family:s})):m?c.iconName=m:d!==C.replacementClass&&d!==i[G]&&d!==i[tt]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?cs(c.iconName):{},k=ce(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||k||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!we.far&&we.fas&&!C.autoFetchSvg&&(c.prefix="fas")}return c},Sa());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===tt&&(we.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=ce(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=te()||"fas"),l}var zu=function(){function t(){Jc(this,t),this.definitions={}}return Qc(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),Wr(s,o[s]);var l=Qe[G][s];l&&Wr(l,o[s]),fs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),t}(),Si=[],xe={},Se={},Du=Object.keys(Se);function Hu(t,e){var n=e.mixoutsTo;return Si=t,xe={},Object.keys(Se).forEach(function(r){Du.indexOf(r)===-1&&delete Se[r]}),Si.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),zn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){xe[o]||(xe[o]=[]),xe[o].push(i[o])})}r.provides&&r.provides(Se)}),n}function Yr(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=xe[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function pe(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=xe[t]||[];a.forEach(function(i){i.apply(null,n)})}function Ut(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Se[t]?Se[t].apply(null,e):void 0}function Kr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||te();if(e)return e=ce(n,e)||e,Ai(us.definitions,n,e)||Ai(St.styles,n,e)}var us=new zu,Uu=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,pe("noAuto")},Bu={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Vt?(pe("beforeI2svg",e),Ut("pseudoElements2svg",e),Ut("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,Cu(function(){Wu({autoReplaceSvgRoot:n}),pe("watch",e)})}},Vu={icon:function(e){if(e===null)return null;if(zn(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ce(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=ir(e[0]);return{prefix:r,iconName:ce(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(C.cssPrefix,"-"))>-1||e.match(cu))){var a=or(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||te(),iconName:ce(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var i=te();return{prefix:i,iconName:ce(i,e)||e}}}},wt={noAuto:Uu,config:C,dom:Bu,parse:Vu,library:us,findIconDefinition:Kr,toHtml:an},Wu=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(St.styles).length>0||C.autoFetchSvg)&&Vt&&C.autoReplaceSvg&&wt.dom.i2svg({node:r})};function sr(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return an(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Vt){var r=X.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Yu(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(Aa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=ar(O(O({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function Ku(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(C.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function Ca(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,d=t.titleId,m=t.extra,v=t.watchable,k=v===void 0?!1:v,j=r.found?r:n,N=j.width,H=j.height,x=a==="fak",S=[C.replacementClass,i?"".concat(C.cssPrefix,"-").concat(i):""].filter(function(xt){return m.classes.indexOf(xt)===-1}).filter(function(xt){return xt!==""||!!xt}).concat(m.classes).join(" "),I={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:S,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(H)})},z=x&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/H*16*.0625,"em")}:{};k&&(I.attributes[he]=""),l&&(I.children.push({tag:"title",attributes:{id:I.attributes["aria-labelledby"]||"title-".concat(d||tn())},children:[l]}),delete I.attributes.title);var B=O(O({},I),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O(O({},z),m.styles)}),F=r.found&&n.found?Ut("generateAbstractMask",B)||{children:[],attributes:{}}:Ut("generateAbstractIcon",B)||{children:[],attributes:{}},et=F.children,ut=F.attributes;return B.children=et,B.attributes=ut,s?Ku(B):Yu(B)}function Ci(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[he]="");var d=O({},o.styles);Aa(a)&&(d.transform=Au({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=ar(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[e]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function qu(t){var e=t.content,n=t.title,r=t.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=ar(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var kr=St.styles;function qr(t){var e=t[0],n=t[1],r=t.slice(4),a=ba(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(fe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(fe.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(fe.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Gu={found:!1,width:512,height:512};function Xu(t,e){!Jo&&!C.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Gr(t,e){var n=e;return e==="fa"&&C.styleDefault!==null&&(e=te()),new Promise(function(r,a){if(Ut("missingIconAbstract"),n==="fa"){var i=cs(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&kr[e]&&kr[e][t]){var o=kr[e][t];return r(qr(o))}Xu(t,e),r(O(O({},Gu),{},{icon:C.showMissingIcons&&t?Ut("missingIconAbstract")||{}:{}}))})}var Pi=function(){},Xr=C.measurePerformance&&gn&&gn.mark&&gn.measure?gn:{mark:Pi,measure:Pi},He='FA "6.5.1"',Ju=function(e){return Xr.mark("".concat(He," ").concat(e," begins")),function(){return ds(e)}},ds=function(e){Xr.mark("".concat(He," ").concat(e," ends")),Xr.measure("".concat(He," ").concat(e),"".concat(He," ").concat(e," begins"),"".concat(He," ").concat(e," ends"))},Pa={begin:Ju,end:ds},Tn=function(){};function Ii(t){var e=t.getAttribute?t.getAttribute(he):null;return typeof e=="string"}function Qu(t){var e=t.getAttribute?t.getAttribute(_a):null,n=t.getAttribute?t.getAttribute(wa):null;return e&&n}function Zu(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(C.replacementClass)}function td(){if(C.autoReplaceSvg===!0)return Mn.replace;var t=Mn[C.autoReplaceSvg];return t||Mn.replace}function ed(t){return X.createElementNS("http://www.w3.org/2000/svg",t)}function nd(t){return X.createElement(t)}function ms(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?ed:nd:n;if(typeof t=="string")return X.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){a.appendChild(ms(o,{ceFn:r}))}),a}function rd(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Mn={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(ms(a),n)}),n.getAttribute(he)===null&&C.keepOriginalSource){var r=X.createComment(rd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~ka(n).indexOf(C.replacementClass))return Mn.replace(e);var a=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===C.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return an(s)}).join(`
`);n.setAttribute(he,""),n.innerHTML=o}};function Ti(t){t()}function hs(t,e){var n=typeof e=="function"?e:Tn;if(t.length===0)n();else{var r=Ti;C.mutateApproach===su&&(r=Zt.requestAnimationFrame||Ti),r(function(){var a=td(),i=Pa.begin("mutate");t.map(a),i(),n()})}}var Ia=!1;function ps(){Ia=!0}function Jr(){Ia=!1}var Hn=null;function Mi(t){if(wi&&C.observeMutations){var e=t.treeCallback,n=e===void 0?Tn:e,r=t.nodeCallback,a=r===void 0?Tn:r,i=t.pseudoElementsCallback,o=i===void 0?Tn:i,s=t.observeMutationsRoot,l=s===void 0?X:s;Hn=new wi(function(c){if(!Ia){var d=te();Re(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ii(m.addedNodes[0])&&(C.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ii(m.target)&&~hu.indexOf(m.attributeName))if(m.attributeName==="class"&&Qu(m.target)){var v=or(ka(m.target)),k=v.prefix,j=v.iconName;m.target.setAttribute(_a,k||d),j&&m.target.setAttribute(wa,j)}else Zu(m.target)&&a(m.target)})}}),Vt&&Hn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ad(){Hn&&Hn.disconnect()}function id(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function od(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=or(ka(t));return a.prefix||(a.prefix=te()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=$u(a.prefix,t.innerText)||Ea(a.prefix,Vr(t.innerText))),!a.iconName&&C.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function sd(t){var e=Re(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return C.autoA11y&&(n?e["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||tn()):(e["aria-hidden"]="true",e.focusable="false")),e}function ld(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Lt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ni(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=od(t),r=n.iconName,a=n.prefix,i=n.rest,o=sd(t),s=Yr("parseNodeAttributes",{},t),l=e.styleParser?id(t):[];return O({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:Lt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var fd=St.styles;function gs(t){var e=C.autoReplaceSvg==="nest"?Ni(t,{styleParser:!1}):Ni(t);return~e.extra.classes.indexOf(Qo)?Ut("generateLayersText",t,e):Ut("generateSvgReplacementMutation",t,e)}var ee=new Set;xa.map(function(t){ee.add("fa-".concat(t))});Object.keys(Xe[G]).map(ee.add.bind(ee));Object.keys(Xe[tt]).map(ee.add.bind(ee));ee=nn(ee);function Li(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Vt)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(xi,"-").concat(m))},a=function(m){return n.remove("".concat(xi,"-").concat(m))},i=C.autoFetchSvg?ee:xa.map(function(d){return"fa-".concat(d)}).concat(Object.keys(fd));i.includes("fa")||i.push("fa");var o=[".".concat(Qo,":not([").concat(he,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(he,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Re(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Pa.begin("onTree"),c=s.reduce(function(d,m){try{var v=gs(m);v&&d.push(v)}catch(k){Jo||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){hs(v,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),d()})}).catch(function(v){l(),m(v)})})}function cd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;gs(t).then(function(n){n&&hs([n],e)})}function ud(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Kr(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Kr(a||{})),t(r,O(O({},n),{},{mask:a}))}}var dd=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Lt:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,k=n.titleId,j=k===void 0?null:k,N=n.classes,H=N===void 0?[]:N,x=n.attributes,S=x===void 0?{}:x,I=n.styles,z=I===void 0?{}:I;if(e){var B=e.prefix,F=e.iconName,et=e.icon;return sr(O({type:"icon"},e),function(){return pe("beforeDOMElementCreation",{iconDefinition:e,params:n}),C.autoA11y&&(v?S["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(j||tn()):(S["aria-hidden"]="true",S.focusable="false")),Ca({icons:{main:qr(et),mask:l?qr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:F,transform:O(O({},Lt),a),symbol:o,title:v,maskId:d,titleId:j,extra:{attributes:S,styles:z,classes:H}})})}},md={mixout:function(){return{icon:ud(dd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Li,n.nodeCallback=cd,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return Li(a,o)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,j){Promise.all([Gr(a,s),d.iconName?Gr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var H=ba(N,2),x=H[0],S=H[1];k([n,Ca({icons:{main:x,mask:S},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(j)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=ar(s);l.length>0&&(a.style=l);var c;return Aa(o)&&(c=Ut("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},hd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return sr({type:"layer"},function(){pe("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(nn(i)).join(" ")},children:o}]})}}}},pd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return sr({type:"counter",content:n},function(){return pe("beforeDOMElementCreation",{content:n,params:r}),qu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(nn(s))}})})}}}},gd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Lt:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,k=v===void 0?{}:v;return sr({type:"text",content:n},function(){return pe("beforeDOMElementCreation",{content:n,params:r}),Ci({content:n,transform:O(O({},Lt),i),title:s,extra:{attributes:m,styles:k,classes:["".concat(C.cssPrefix,"-layers-text")].concat(nn(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(qo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return C.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ci({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},vd=new RegExp('"',"ug"),Ri=[1105920,1112319];function bd(t){var e=t.replace(vd,""),n=Tu(e,0),r=n>=Ri[0]&&n<=Ri[1],a=e.length===2?e[0]===e[1]:!1;return{value:Vr(a?e[0]:e),isSecondary:r||a}}function Fi(t,e){var n="".concat(ou).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=Re(t.children),o=i.filter(function(et){return et.getAttribute(Br)===e})[0],s=Zt.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(uu),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?tt:G,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Je[v][l[2].toLowerCase()]:du[v][c],j=bd(m),N=j.value,H=j.isSecondary,x=l[0].startsWith("FontAwesome"),S=Ea(k,N),I=S;if(x){var z=ju(N);z.iconName&&z.prefix&&(S=z.iconName,k=z.prefix)}if(S&&!H&&(!o||o.getAttribute(_a)!==k||o.getAttribute(wa)!==I)){t.setAttribute(n,I),o&&t.removeChild(o);var B=ld(),F=B.extra;F.attributes[Br]=e,Gr(S,k).then(function(et){var ut=Ca(O(O({},B),{},{icons:{main:et,mask:Sa()},prefix:k,iconName:I,extra:F,watchable:!0})),xt=X.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(xt,t.firstChild):t.appendChild(xt),xt.outerHTML=ut.map(function(Ft){return an(Ft)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function yd(t){return Promise.all([Fi(t,"::before"),Fi(t,"::after")])}function _d(t){return t.parentNode!==document.head&&!~lu.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Br)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function $i(t){if(Vt)return new Promise(function(e,n){var r=Re(t.querySelectorAll("*")).filter(_d).map(yd),a=Pa.begin("searchPseudoElements");ps(),Promise.all(r).then(function(){a(),Jr(),e()}).catch(function(){a(),Jr(),n()})})}var wd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=$i,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;C.searchPseudoElements&&$i(a)}}},ji=!1,xd={mixout:function(){return{dom:{unwatch:function(){ps(),ji=!0}}}},hooks:function(){return{bootstrap:function(){Mi(Yr("mutationObserverCallbacks",{}))},noAuto:function(){ad()},watch:function(n){var r=n.observeMutationsRoot;ji?Jr():Mi(Yr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},zi=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},kd={mixout:function(){return{parse:{transform:function(n){return zi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=zi(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:m,path:v};return{tag:"g",attributes:O({},k.outer),children:[{tag:"g",attributes:O({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),k.path)}]}]}}}},Ar={x:0,y:0,width:"100%",height:"100%"};function Di(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ad(t){return t.tag==="g"?t.children:[t]}var Od={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?or(a.split(" ").map(function(o){return o.trim()})):Sa();return i.prefix||(i.prefix=te()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,k=ku({transform:l,containerWidth:m,iconWidth:c}),j={tag:"rect",attributes:O(O({},Ar),{},{fill:"white"})},N=d.children?{children:d.children.map(Di)}:{},H={tag:"g",attributes:O({},k.inner),children:[Di(O({tag:d.tag,attributes:O(O({},d.attributes),k.path)},N))]},x={tag:"g",attributes:O({},k.outer),children:[H]},S="mask-".concat(s||tn()),I="clip-".concat(s||tn()),z={tag:"mask",attributes:O(O({},Ar),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,x]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:Ad(v)},z]};return r.push(B,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(S,")")},Ar)}),{children:r,attributes:a}}}},Ed={provides:function(e){var n=!1;Zt.matchMedia&&(n=Zt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Sd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Cd=[Eu,md,hd,pd,gd,wd,xd,kd,Od,Ed,Sd];Hu(Cd,{mixoutsTo:wt});wt.noAuto;wt.config;var Pd=wt.library;wt.dom;var Qr=wt.parse;wt.findIconDefinition;wt.toHtml;var Id=wt.icon;wt.layer;wt.text;wt.counter;function Hi(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function jt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Hi(Object(n),!0).forEach(function(r){dt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Hi(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Un(t){"@babel/helpers - typeof";return Un=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Un(t)}function dt(t,e,n){return e=Ld(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Td(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function Md(t,e){if(t==null)return{};var n=Td(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Nd(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ld(t){var e=Nd(t,"string");return typeof e=="symbol"?e:String(e)}var Rd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vs={exports:{}};(function(t){(function(e){var n=function(x,S,I){if(!c(S)||m(S)||v(S)||k(S)||l(S))return S;var z,B=0,F=0;if(d(S))for(z=[],F=S.length;B<F;B++)z.push(n(x,S[B],I));else{z={};for(var et in S)Object.prototype.hasOwnProperty.call(S,et)&&(z[x(et,I)]=n(x,S[et],I))}return z},r=function(x,S){S=S||{};var I=S.separator||"_",z=S.split||/(?=[A-Z])/;return x.split(z).join(I)},a=function(x){return j(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(S,I){return I?I.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},i=function(x){var S=a(x);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(x,S){return r(x,S).toLowerCase()},s=Object.prototype.toString,l=function(x){return typeof x=="function"},c=function(x){return x===Object(x)},d=function(x){return s.call(x)=="[object Array]"},m=function(x){return s.call(x)=="[object Date]"},v=function(x){return s.call(x)=="[object RegExp]"},k=function(x){return s.call(x)=="[object Boolean]"},j=function(x){return x=x-0,x===x},N=function(x,S){var I=S&&"process"in S?S.process:S;return typeof I!="function"?x:function(z,B){return I(z,x,B)}},H={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(x,S){return n(N(a,S),x)},decamelizeKeys:function(x,S){return n(N(o,S),x,S)},pascalizeKeys:function(x,S){return n(N(i,S),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=H:e.humps=H})(Rd)})(vs);var Fd=vs.exports,$d=["class","style"];function jd(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=Fd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[a]=i,e},{})}function zd(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function bs(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return bs(l)}),a=Object.keys(t.attributes||{}).reduce(function(l,c){var d=t.attributes[c];switch(c){case"class":l.class=zd(d);break;case"style":l.style=jd(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Md(n,$d);return _f(t.tag,jt(jt(jt({},e),{},{class:a.class,style:jt(jt({},a.style),o)},a.attrs),s),r)}var ys=!1;try{ys=!0}catch{}function Dd(){if(!ys&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Or(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?dt({},t,e):{}}function Hd(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},dt(e,"fa-".concat(t.size),t.size!==null),dt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),dt(e,"fa-pull-".concat(t.pull),t.pull!==null),dt(e,"fa-swap-opacity",t.swapOpacity),dt(e,"fa-bounce",t.bounce),dt(e,"fa-shake",t.shake),dt(e,"fa-beat",t.beat),dt(e,"fa-fade",t.fade),dt(e,"fa-beat-fade",t.beatFade),dt(e,"fa-flash",t.flash),dt(e,"fa-spin-pulse",t.spinPulse),dt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ui(t){if(t&&Un(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Qr.icon)return Qr.icon(t);if(t===null)return null;if(Un(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Ud=El({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,a=oe(function(){return Ui(e.icon)}),i=oe(function(){return Or("classes",Hd(e))}),o=oe(function(){return Or("transform",typeof e.transform=="string"?Qr.transform(e.transform):e.transform)}),s=oe(function(){return Or("mask",Ui(e.mask))}),l=oe(function(){return Id(a.value,jt(jt(jt(jt({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Sn(l,function(d){if(!d)return Dd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=oe(function(){return l.value?bs(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Bd={prefix:"fas",iconName:"arrows-to-circle",icon:[640,512,[],"e4bd","M9.4 9.4C21.9-3.1 42.1-3.1 54.6 9.4L160 114.7V96c0-17.7 14.3-32 32-32s32 14.3 32 32v96c0 4.3-.9 8.5-2.4 12.2c-1.6 3.7-3.8 7.3-6.9 10.3l-.1 .1c-3.1 3-6.6 5.3-10.3 6.9c-3.8 1.6-7.9 2.4-12.2 2.4H96c-17.7 0-32-14.3-32-32s14.3-32 32-32h18.7L9.4 54.6C-3.1 42.1-3.1 21.9 9.4 9.4zM256 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM114.7 352H96c-17.7 0-32-14.3-32-32s14.3-32 32-32h96 0l.1 0c8.8 0 16.7 3.6 22.5 9.3l.1 .1c3 3.1 5.3 6.6 6.9 10.3c1.6 3.8 2.4 7.9 2.4 12.2v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V397.3L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L114.7 352zM416 96c0-17.7 14.3-32 32-32s32 14.3 32 32v18.7L585.4 9.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L525.3 160H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H448c-8.8 0-16.8-3.6-22.6-9.3l-.1-.1c-3-3.1-5.3-6.6-6.9-10.3s-2.4-7.8-2.4-12.2l0-.1v0V96zM525.3 352L630.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L480 397.3V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V320v0c0 0 0-.1 0-.1c0-4.3 .9-8.4 2.4-12.2c1.6-3.8 3.9-7.3 6.9-10.4c5.8-5.8 13.7-9.3 22.5-9.4c0 0 .1 0 .1 0h0 96c17.7 0 32 14.3 32 32s-14.3 32-32 32H525.3z"]},Vd={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},Wd={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},Yd={prefix:"fas",iconName:"temperature-three-quarters",icon:[320,512,["temperature-3","thermometer-3","thermometer-three-quarters"],"f2c8","M160 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V144c0-8.8 7.2-16 16-16s16 7.2 16 16V322.7c18.6 6.6 32 24.4 32 45.3z"]},Kd=Yd,qd={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},Gd={prefix:"fas",iconName:"droplet",icon:[384,512,[128167,"tint"],"f043","M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"]},Xd={prefix:"fas",iconName:"wind",icon:[512,512,[],"f72e","M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"]},Jd={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Qd={prefix:"fas",iconName:"umbrella",icon:[576,512,[],"f0e9","M288 0c17.7 0 32 14.3 32 32V49.7C451.8 63.4 557.7 161 573.9 285.9c2 15.6-17.3 24.4-27.8 12.7C532.1 283 504.8 272 480 272c-38.7 0-71 27.5-78.4 64.1c-1.7 8.7-8.7 15.9-17.6 15.9s-15.8-7.2-17.6-15.9C359 299.5 326.7 272 288 272s-71 27.5-78.4 64.1c-1.7 8.7-8.7 15.9-17.6 15.9s-15.8-7.2-17.6-15.9C167 299.5 134.7 272 96 272c-24.8 0-52.1 11-66.1 26.7C19.4 310.4 .1 301.5 2.1 285.9C18.3 161 124.2 63.4 256 49.7V32c0-17.7 14.3-32 32-32zm0 304c12.3 0 23.5 4.6 32 12.2V430.6c0 45-36.5 81.4-81.4 81.4c-30.8 0-59-17.4-72.8-45l-2.3-4.7c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l2.3 4.7c3 5.9 9 9.6 15.6 9.6c9.6 0 17.4-7.8 17.4-17.4V316.2c8.5-7.6 19.7-12.2 32-12.2z"]};Pd.add(Jd,Vd,Wd,Xd,Gd,Qd,Bd,Kd,qd);const Zd=Yf(Xc);Zd.component("font-awesome-icon",Ud).mount("#app");
