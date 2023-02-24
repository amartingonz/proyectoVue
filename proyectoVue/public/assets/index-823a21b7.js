(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Th(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Ih(t){if(J(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Qe(s)?xb(s):Ih(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Qe(t))return t;if(Pe(t))return t}}const Ob=/;(?![^(]*\))/g,Db=/:([^]+)/,Pb=/\/\*.*?\*\//gs;function xb(t){const e={};return t.replace(Pb,"").split(Ob).forEach(n=>{if(n){const s=n.split(Db);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ch(t){let e="";if(Qe(t))e=t;else if(J(t))for(let n=0;n<t.length;n++){const s=Ch(t[n]);s&&(e+=s+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Mb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lb=Th(Mb);function Nm(t){return!!t||t===""}const yr=t=>Qe(t)?t:t==null?"":J(t)||Pe(t)&&(t.toString===xm||!te(t.toString))?JSON.stringify(t,Om,2):String(t),Om=(t,e)=>e&&e.__v_isRef?Om(t,e.value):Ei(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Dm(e)?{[`Set(${e.size})`]:[...e.values()]}:Pe(e)&&!J(e)&&!Mm(e)?String(e):e,Ae={},wi=[],sn=()=>{},Fb=()=>!1,Ub=/^on[^a-z]/,pc=t=>Ub.test(t),Sh=t=>t.startsWith("onUpdate:"),vt=Object.assign,Rh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Bb=Object.prototype.hasOwnProperty,he=(t,e)=>Bb.call(t,e),J=Array.isArray,Ei=t=>gc(t)==="[object Map]",Dm=t=>gc(t)==="[object Set]",te=t=>typeof t=="function",Qe=t=>typeof t=="string",Ah=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",Pm=t=>Pe(t)&&te(t.then)&&te(t.catch),xm=Object.prototype.toString,gc=t=>xm.call(t),Vb=t=>gc(t).slice(8,-1),Mm=t=>gc(t)==="[object Object]",kh=t=>Qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fa=Th(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),mc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$b=/-(\w)/g,Tn=mc(t=>t.replace($b,(e,n)=>n?n.toUpperCase():"")),jb=/\B([A-Z])/g,Ki=mc(t=>t.replace(jb,"-$1").toLowerCase()),_c=mc(t=>t.charAt(0).toUpperCase()+t.slice(1)),El=mc(t=>t?`on${_c(t)}`:""),jr=(t,e)=>!Object.is(t,e),pa=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Aa=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},iu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Df;const Hb=()=>Df||(Df=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Pt;class Wb{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){Pt=this}off(){Pt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function qb(t,e=Pt){e&&e.active&&e.effects.push(t)}function Lm(){return Pt}function Kb(t){Pt&&Pt.cleanups.push(t)}const Nh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Fm=t=>(t.w&us)>0,Um=t=>(t.n&us)>0,zb=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=us},Gb=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Fm(i)&&!Um(i)?i.delete(t):e[n++]=i,i.w&=~us,i.n&=~us}e.length=n}},ru=new WeakMap;let vr=0,us=1;const ou=30;let Jt;const Fs=Symbol(""),au=Symbol("");class Oh{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,qb(this,s)}run(){if(!this.active)return this.fn();let e=Jt,n=is;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Jt,Jt=this,is=!0,us=1<<++vr,vr<=ou?zb(this):Pf(this),this.fn()}finally{vr<=ou&&Gb(this),us=1<<--vr,Jt=this.parent,is=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Jt===this?this.deferStop=!0:this.active&&(Pf(this),this.onStop&&this.onStop(),this.active=!1)}}function Pf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let is=!0;const Bm=[];function zi(){Bm.push(is),is=!1}function Gi(){const t=Bm.pop();is=t===void 0?!0:t}function Ot(t,e,n){if(is&&Jt){let s=ru.get(t);s||ru.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Nh()),Vm(i)}}function Vm(t,e){let n=!1;vr<=ou?Um(t)||(t.n|=us,n=!Fm(t)):n=!t.has(Jt),n&&(t.add(Jt),Jt.deps.push(t))}function Vn(t,e,n,s,i,r){const o=ru.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&J(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":J(t)?kh(n)&&a.push(o.get("length")):(a.push(o.get(Fs)),Ei(t)&&a.push(o.get(au)));break;case"delete":J(t)||(a.push(o.get(Fs)),Ei(t)&&a.push(o.get(au)));break;case"set":Ei(t)&&a.push(o.get(Fs));break}if(a.length===1)a[0]&&cu(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);cu(Nh(c))}}function cu(t,e){const n=J(t)?t:[...t];for(const s of n)s.computed&&xf(s);for(const s of n)s.computed||xf(s)}function xf(t,e){(t!==Jt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Qb=Th("__proto__,__v_isRef,__isVue"),$m=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ah)),Yb=Dh(),Xb=Dh(!1,!0),Jb=Dh(!0),Mf=Zb();function Zb(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=pe(this);for(let r=0,o=this.length;r<o;r++)Ot(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(pe)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){zi();const s=pe(this)[e].apply(this,n);return Gi(),s}}),t}function eT(t){const e=pe(this);return Ot(e,"has",t),e.hasOwnProperty(t)}function Dh(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?mT:Km:e?qm:Wm).get(s))return s;const o=J(s);if(!t){if(o&&he(Mf,i))return Reflect.get(Mf,i,r);if(i==="hasOwnProperty")return eT}const a=Reflect.get(s,i,r);return(Ah(i)?$m.has(i):Qb(i))||(t||Ot(s,"get",i),e)?a:Ue(a)?o&&kh(i)?a:a.value:Pe(a)?t?zm(a):go(a):a}}const tT=jm(),nT=jm(!0);function jm(t=!1){return function(n,s,i,r){let o=n[s];if(Ni(o)&&Ue(o)&&!Ue(i))return!1;if(!t&&(!ka(i)&&!Ni(i)&&(o=pe(o),i=pe(i)),!J(n)&&Ue(o)&&!Ue(i)))return o.value=i,!0;const a=J(n)&&kh(s)?Number(s)<n.length:he(n,s),c=Reflect.set(n,s,i,r);return n===pe(r)&&(a?jr(i,o)&&Vn(n,"set",s,i):Vn(n,"add",s,i)),c}}function sT(t,e){const n=he(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Vn(t,"delete",e,void 0),s}function iT(t,e){const n=Reflect.has(t,e);return(!Ah(e)||!$m.has(e))&&Ot(t,"has",e),n}function rT(t){return Ot(t,"iterate",J(t)?"length":Fs),Reflect.ownKeys(t)}const Hm={get:Yb,set:tT,deleteProperty:sT,has:iT,ownKeys:rT},oT={get:Jb,set(t,e){return!0},deleteProperty(t,e){return!0}},aT=vt({},Hm,{get:Xb,set:nT}),Ph=t=>t,yc=t=>Reflect.getPrototypeOf(t);function Go(t,e,n=!1,s=!1){t=t.__v_raw;const i=pe(t),r=pe(e);n||(e!==r&&Ot(i,"get",e),Ot(i,"get",r));const{has:o}=yc(i),a=s?Ph:n?Lh:Hr;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Qo(t,e=!1){const n=this.__v_raw,s=pe(n),i=pe(t);return e||(t!==i&&Ot(s,"has",t),Ot(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Yo(t,e=!1){return t=t.__v_raw,!e&&Ot(pe(t),"iterate",Fs),Reflect.get(t,"size",t)}function Lf(t){t=pe(t);const e=pe(this);return yc(e).has.call(e,t)||(e.add(t),Vn(e,"add",t,t)),this}function Ff(t,e){e=pe(e);const n=pe(this),{has:s,get:i}=yc(n);let r=s.call(n,t);r||(t=pe(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?jr(e,o)&&Vn(n,"set",t,e):Vn(n,"add",t,e),this}function Uf(t){const e=pe(this),{has:n,get:s}=yc(e);let i=n.call(e,t);i||(t=pe(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Vn(e,"delete",t,void 0),r}function Bf(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&Vn(t,"clear",void 0,void 0),n}function Xo(t,e){return function(s,i){const r=this,o=r.__v_raw,a=pe(o),c=e?Ph:t?Lh:Hr;return!t&&Ot(a,"iterate",Fs),o.forEach((l,u)=>s.call(i,c(l),c(u),r))}}function Jo(t,e,n){return function(...s){const i=this.__v_raw,r=pe(i),o=Ei(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...s),u=n?Ph:e?Lh:Hr;return!e&&Ot(r,"iterate",c?au:Fs),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Gn(t){return function(...e){return t==="delete"?!1:this}}function cT(){const t={get(r){return Go(this,r)},get size(){return Yo(this)},has:Qo,add:Lf,set:Ff,delete:Uf,clear:Bf,forEach:Xo(!1,!1)},e={get(r){return Go(this,r,!1,!0)},get size(){return Yo(this)},has:Qo,add:Lf,set:Ff,delete:Uf,clear:Bf,forEach:Xo(!1,!0)},n={get(r){return Go(this,r,!0)},get size(){return Yo(this,!0)},has(r){return Qo.call(this,r,!0)},add:Gn("add"),set:Gn("set"),delete:Gn("delete"),clear:Gn("clear"),forEach:Xo(!0,!1)},s={get(r){return Go(this,r,!0,!0)},get size(){return Yo(this,!0)},has(r){return Qo.call(this,r,!0)},add:Gn("add"),set:Gn("set"),delete:Gn("delete"),clear:Gn("clear"),forEach:Xo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Jo(r,!1,!1),n[r]=Jo(r,!0,!1),e[r]=Jo(r,!1,!0),s[r]=Jo(r,!0,!0)}),[t,n,e,s]}const[lT,uT,hT,dT]=cT();function xh(t,e){const n=e?t?dT:hT:t?uT:lT;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(he(n,i)&&i in s?n:s,i,r)}const fT={get:xh(!1,!1)},pT={get:xh(!1,!0)},gT={get:xh(!0,!1)},Wm=new WeakMap,qm=new WeakMap,Km=new WeakMap,mT=new WeakMap;function _T(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yT(t){return t.__v_skip||!Object.isExtensible(t)?0:_T(Vb(t))}function go(t){return Ni(t)?t:Mh(t,!1,Hm,fT,Wm)}function vT(t){return Mh(t,!1,aT,pT,qm)}function zm(t){return Mh(t,!0,oT,gT,Km)}function Mh(t,e,n,s,i){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=yT(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function bi(t){return Ni(t)?bi(t.__v_raw):!!(t&&t.__v_isReactive)}function Ni(t){return!!(t&&t.__v_isReadonly)}function ka(t){return!!(t&&t.__v_isShallow)}function Gm(t){return bi(t)||Ni(t)}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function Qm(t){return Aa(t,"__v_skip",!0),t}const Hr=t=>Pe(t)?go(t):t,Lh=t=>Pe(t)?zm(t):t;function Ym(t){is&&Jt&&(t=pe(t),Vm(t.dep||(t.dep=Nh())))}function Xm(t,e){t=pe(t);const n=t.dep;n&&cu(n)}function Ue(t){return!!(t&&t.__v_isRef===!0)}function rn(t){return Zm(t,!1)}function Jm(t){return Zm(t,!0)}function Zm(t,e){return Ue(t)?t:new wT(t,e)}class wT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:pe(e),this._value=n?e:Hr(e)}get value(){return Ym(this),this._value}set value(e){const n=this.__v_isShallow||ka(e)||Ni(e);e=n?e:pe(e),jr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Hr(e),Xm(this))}}function de(t){return Ue(t)?t.value:t}const ET={get:(t,e,n)=>de(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ue(i)&&!Ue(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function e_(t){return bi(t)?t:new Proxy(t,ET)}var t_;class bT{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[t_]=!1,this._dirty=!0,this.effect=new Oh(e,()=>{this._dirty||(this._dirty=!0,Xm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=pe(this);return Ym(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}t_="__v_isReadonly";function TT(t,e,n=!1){let s,i;const r=te(t);return r?(s=t,i=sn):(s=t.get,i=t.set),new bT(s,i,r||!i,n)}function rs(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){vc(r,e,n)}return i}function Wt(t,e,n,s){if(te(t)){const r=rs(t,e,n,s);return r&&Pm(r)&&r.catch(o=>{vc(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Wt(t[r],e,n,s));return i}function vc(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){rs(c,null,10,[t,o,a]);return}}IT(t,n,i,s)}function IT(t,e,n,s=!0){console.error(t)}let Wr=!1,lu=!1;const pt=[];let mn=0;const Ti=[];let Dn=null,As=0;const n_=Promise.resolve();let Fh=null;function s_(t){const e=Fh||n_;return t?e.then(this?t.bind(this):t):e}function CT(t){let e=mn+1,n=pt.length;for(;e<n;){const s=e+n>>>1;qr(pt[s])<t?e=s+1:n=s}return e}function Uh(t){(!pt.length||!pt.includes(t,Wr&&t.allowRecurse?mn+1:mn))&&(t.id==null?pt.push(t):pt.splice(CT(t.id),0,t),i_())}function i_(){!Wr&&!lu&&(lu=!0,Fh=n_.then(o_))}function ST(t){const e=pt.indexOf(t);e>mn&&pt.splice(e,1)}function RT(t){J(t)?Ti.push(...t):(!Dn||!Dn.includes(t,t.allowRecurse?As+1:As))&&Ti.push(t),i_()}function Vf(t,e=Wr?mn+1:0){for(;e<pt.length;e++){const n=pt[e];n&&n.pre&&(pt.splice(e,1),e--,n())}}function r_(t){if(Ti.length){const e=[...new Set(Ti)];if(Ti.length=0,Dn){Dn.push(...e);return}for(Dn=e,Dn.sort((n,s)=>qr(n)-qr(s)),As=0;As<Dn.length;As++)Dn[As]();Dn=null,As=0}}const qr=t=>t.id==null?1/0:t.id,AT=(t,e)=>{const n=qr(t)-qr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function o_(t){lu=!1,Wr=!0,pt.sort(AT);const e=sn;try{for(mn=0;mn<pt.length;mn++){const n=pt[mn];n&&n.active!==!1&&rs(n,null,14)}}finally{mn=0,pt.length=0,r_(),Wr=!1,Fh=null,(pt.length||Ti.length)&&o_()}}function kT(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ae;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Ae;d&&(i=n.map(p=>Qe(p)?p.trim():p)),h&&(i=n.map(iu))}let a,c=s[a=El(e)]||s[a=El(Tn(e))];!c&&r&&(c=s[a=El(Ki(e))]),c&&Wt(c,t,6,i);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Wt(l,t,6,i)}}function a_(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!te(t)){const c=l=>{const u=a_(l,e,!0);u&&(a=!0,vt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(Pe(t)&&s.set(t,null),null):(J(r)?r.forEach(c=>o[c]=null):vt(o,r),Pe(t)&&s.set(t,o),o)}function wc(t,e){return!t||!pc(e)?!1:(e=e.slice(2).replace(/Once$/,""),he(t,e[0].toLowerCase()+e.slice(1))||he(t,Ki(e))||he(t,e))}let Mt=null,Ec=null;function Na(t){const e=Mt;return Mt=t,Ec=t&&t.type.__scopeId||null,e}function mo(t){Ec=t}function _o(){Ec=null}function On(t,e=Mt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Yf(-1);const r=Na(e);let o;try{o=t(...i)}finally{Na(r),s._d&&Yf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function bl(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:g,inheritAttrs:_}=t;let v,b;const A=Na(t);try{if(n.shapeFlag&4){const O=i||s;v=gn(u.call(O,O,h,r,p,d,g)),b=c}else{const O=e;v=gn(O.length>1?O(r,{attrs:c,slots:a,emit:l}):O(r,null)),b=e.props?c:NT(c)}}catch(O){kr.length=0,vc(O,t,1),v=Me(an)}let I=v;if(b&&_!==!1){const O=Object.keys(b),{shapeFlag:z}=I;O.length&&z&7&&(o&&O.some(Sh)&&(b=OT(b,o)),I=hs(I,b))}return n.dirs&&(I=hs(I),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&(I.transition=n.transition),v=I,Na(A),v}const NT=t=>{let e;for(const n in t)(n==="class"||n==="style"||pc(n))&&((e||(e={}))[n]=t[n]);return e},OT=(t,e)=>{const n={};for(const s in t)(!Sh(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function DT(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?$f(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!wc(l,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?$f(s,o,l):!0:!!o;return!1}function $f(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!wc(n,r))return!0}return!1}function PT({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const xT=t=>t.__isSuspense;function MT(t,e){e&&e.pendingBranch?J(t)?e.effects.push(...t):e.effects.push(t):RT(t)}function ga(t,e){if(Fe){let n=Fe.provides;const s=Fe.parent&&Fe.parent.provides;s===n&&(n=Fe.provides=Object.create(s)),n[t]=e}}function on(t,e,n=!1){const s=Fe||Mt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&te(e)?e.call(s.proxy):e}}const Zo={};function Rr(t,e,n){return c_(t,e,n)}function c_(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Ae){const a=Lm()===(Fe==null?void 0:Fe.scope)?Fe:null;let c,l=!1,u=!1;if(Ue(t)?(c=()=>t.value,l=ka(t)):bi(t)?(c=()=>t,s=!0):J(t)?(u=!0,l=t.some(I=>bi(I)||ka(I)),c=()=>t.map(I=>{if(Ue(I))return I.value;if(bi(I))return Os(I);if(te(I))return rs(I,a,2)})):te(t)?e?c=()=>rs(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Wt(t,a,3,[d])}:c=sn,e&&s){const I=c;c=()=>Os(I())}let h,d=I=>{h=b.onStop=()=>{rs(I,a,4)}},p;if(zr)if(d=sn,e?n&&Wt(e,a,3,[c(),u?[]:void 0,d]):c(),i==="sync"){const I=kI();p=I.__watcherHandles||(I.__watcherHandles=[])}else return sn;let g=u?new Array(t.length).fill(Zo):Zo;const _=()=>{if(b.active)if(e){const I=b.run();(s||l||(u?I.some((O,z)=>jr(O,g[z])):jr(I,g)))&&(h&&h(),Wt(e,a,3,[I,g===Zo?void 0:u&&g[0]===Zo?[]:g,d]),g=I)}else b.run()};_.allowRecurse=!!e;let v;i==="sync"?v=_:i==="post"?v=()=>Rt(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),v=()=>Uh(_));const b=new Oh(c,v);e?n?_():g=b.run():i==="post"?Rt(b.run.bind(b),a&&a.suspense):b.run();const A=()=>{b.stop(),a&&a.scope&&Rh(a.scope.effects,b)};return p&&p.push(A),A}function LT(t,e,n){const s=this.proxy,i=Qe(t)?t.includes(".")?l_(s,t):()=>s[t]:t.bind(s,s);let r;te(e)?r=e:(r=e.handler,n=e);const o=Fe;Oi(this);const a=c_(i,r.bind(s),n);return o?Oi(o):Bs(),a}function l_(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Os(t,e){if(!Pe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ue(t))Os(t.value,e);else if(J(t))for(let n=0;n<t.length;n++)Os(t[n],e);else if(Dm(t)||Ei(t))t.forEach(n=>{Os(n,e)});else if(Mm(t))for(const n in t)Os(t[n],e);return t}function FT(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return p_(()=>{t.isMounted=!0}),g_(()=>{t.isUnmounting=!0}),t}const $t=[Function,Array],UT={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$t,onEnter:$t,onAfterEnter:$t,onEnterCancelled:$t,onBeforeLeave:$t,onLeave:$t,onAfterLeave:$t,onLeaveCancelled:$t,onBeforeAppear:$t,onAppear:$t,onAfterAppear:$t,onAppearCancelled:$t},setup(t,{slots:e}){const n=Sc(),s=FT();let i;return()=>{const r=e.default&&h_(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const _ of r)if(_.type!==an){o=_;break}}const a=pe(t),{mode:c}=a;if(s.isLeaving)return Tl(o);const l=jf(o);if(!l)return Tl(o);const u=uu(l,a,s,n);hu(l,u);const h=n.subTree,d=h&&jf(h);let p=!1;const{getTransitionKey:g}=l.type;if(g){const _=g();i===void 0?i=_:_!==i&&(i=_,p=!0)}if(d&&d.type!==an&&(!ks(l,d)||p)){const _=uu(d,a,s,n);if(hu(d,_),c==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Tl(o);c==="in-out"&&l.type!==an&&(_.delayLeave=(v,b,A)=>{const I=u_(s,d);I[String(d.key)]=d,v._leaveCb=()=>{b(),v._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=A})}return o}}},BT=UT;function u_(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function uu(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:_,onAppear:v,onAfterAppear:b,onAppearCancelled:A}=e,I=String(t.key),O=u_(n,t),z=(j,Te)=>{j&&Wt(j,s,9,Te)},re=(j,Te)=>{const ye=Te[1];z(j,Te),J(j)?j.every(ct=>ct.length<=1)&&ye():j.length<=1&&ye()},ge={mode:r,persisted:o,beforeEnter(j){let Te=a;if(!n.isMounted)if(i)Te=_||a;else return;j._leaveCb&&j._leaveCb(!0);const ye=O[I];ye&&ks(t,ye)&&ye.el._leaveCb&&ye.el._leaveCb(),z(Te,[j])},enter(j){let Te=c,ye=l,ct=u;if(!n.isMounted)if(i)Te=v||c,ye=b||l,ct=A||u;else return;let lt=!1;const Gt=j._enterCb=kn=>{lt||(lt=!0,kn?z(ct,[j]):z(ye,[j]),ge.delayedLeave&&ge.delayedLeave(),j._enterCb=void 0)};Te?re(Te,[j,Gt]):Gt()},leave(j,Te){const ye=String(t.key);if(j._enterCb&&j._enterCb(!0),n.isUnmounting)return Te();z(h,[j]);let ct=!1;const lt=j._leaveCb=Gt=>{ct||(ct=!0,Te(),Gt?z(g,[j]):z(p,[j]),j._leaveCb=void 0,O[ye]===t&&delete O[ye])};O[ye]=t,d?re(d,[j,lt]):lt()},clone(j){return uu(j,e,n,s)}};return ge}function Tl(t){if(bc(t))return t=hs(t),t.children=null,t}function jf(t){return bc(t)?t.children?t.children[0]:void 0:t}function hu(t,e){t.shapeFlag&6&&t.component?hu(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function h_(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===xt?(o.patchFlag&128&&i++,s=s.concat(h_(o.children,e,a))):(e||o.type!==an)&&s.push(a!=null?hs(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function d_(t){return te(t)?{setup:t,name:t.name}:t}const ma=t=>!!t.type.__asyncLoader,bc=t=>t.type.__isKeepAlive;function VT(t,e){f_(t,"a",e)}function $T(t,e){f_(t,"da",e)}function f_(t,e,n=Fe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Tc(e,s,n),n){let i=n.parent;for(;i&&i.parent;)bc(i.parent.vnode)&&jT(s,e,n,i),i=i.parent}}function jT(t,e,n,s){const i=Tc(e,t,s,!0);m_(()=>{Rh(s[e],i)},n)}function Tc(t,e,n=Fe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;zi(),Oi(n);const a=Wt(e,n,t,o);return Bs(),Gi(),a});return s?i.unshift(r):i.push(r),r}}const Kn=t=>(e,n=Fe)=>(!zr||t==="sp")&&Tc(t,(...s)=>e(...s),n),HT=Kn("bm"),p_=Kn("m"),WT=Kn("bu"),qT=Kn("u"),g_=Kn("bum"),m_=Kn("um"),__=Kn("sp"),KT=Kn("rtg"),zT=Kn("rtc");function GT(t,e=Fe){Tc("ec",t,e)}function Us(t,e){const n=Mt;if(n===null)return t;const s=Rc(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,c,l=Ae]=e[r];o&&(te(o)&&(o={mounted:o,updated:o}),o.deep&&Os(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Ts(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(zi(),Wt(c,n,8,[t.el,a,t,e]),Gi())}}const y_="components";function QT(t,e){return XT(y_,t,!0,e)||t}const YT=Symbol();function XT(t,e,n=!0,s=!1){const i=Mt||Fe;if(i){const r=i.type;if(t===y_){const a=RI(r,!1);if(a&&(a===e||a===Tn(e)||a===_c(Tn(e))))return r}const o=Hf(i[t]||r[t],e)||Hf(i.appContext[t],e);return!o&&s?r:o}}function Hf(t,e){return t&&(t[e]||t[Tn(e)]||t[_c(Tn(e))])}function JT(t,e,n,s){let i;const r=n&&n[s];if(J(t)||Qe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Pe(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const du=t=>t?k_(t)?Rc(t)||t.proxy:du(t.parent):null,Ar=vt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>du(t.parent),$root:t=>du(t.root),$emit:t=>t.emit,$options:t=>Bh(t),$forceUpdate:t=>t.f||(t.f=()=>Uh(t.update)),$nextTick:t=>t.n||(t.n=s_.bind(t.proxy)),$watch:t=>LT.bind(t)}),Il=(t,e)=>t!==Ae&&!t.__isScriptSetup&&he(t,e),ZT={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Il(s,e))return o[e]=1,s[e];if(i!==Ae&&he(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&he(l,e))return o[e]=3,r[e];if(n!==Ae&&he(n,e))return o[e]=4,n[e];fu&&(o[e]=0)}}const u=Ar[e];let h,d;if(u)return e==="$attrs"&&Ot(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ae&&he(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,he(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Il(i,e)?(i[e]=n,!0):s!==Ae&&he(s,e)?(s[e]=n,!0):he(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Ae&&he(t,o)||Il(e,o)||(a=r[0])&&he(a,o)||he(s,o)||he(Ar,o)||he(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:he(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let fu=!0;function eI(t){const e=Bh(t),n=t.proxy,s=t.ctx;fu=!1,e.beforeCreate&&Wf(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:_,deactivated:v,beforeDestroy:b,beforeUnmount:A,destroyed:I,unmounted:O,render:z,renderTracked:re,renderTriggered:ge,errorCaptured:j,serverPrefetch:Te,expose:ye,inheritAttrs:ct,components:lt,directives:Gt,filters:kn}=e;if(l&&tI(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Ie in o){const we=o[Ie];te(we)&&(s[Ie]=we.bind(n))}if(i){const Ie=i.call(n,n);Pe(Ie)&&(t.data=go(Ie))}if(fu=!0,r)for(const Ie in r){const we=r[Ie],Qt=te(we)?we.bind(n,n):te(we.get)?we.get.bind(n,n):sn,bs=!te(we)&&te(we.set)?we.set.bind(n):sn,Yt=jt({get:Qt,set:bs});Object.defineProperty(s,Ie,{enumerable:!0,configurable:!0,get:()=>Yt.value,set:St=>Yt.value=St})}if(a)for(const Ie in a)v_(a[Ie],s,n,Ie);if(c){const Ie=te(c)?c.call(n):c;Reflect.ownKeys(Ie).forEach(we=>{ga(we,Ie[we])})}u&&Wf(u,t,"c");function Ve(Ie,we){J(we)?we.forEach(Qt=>Ie(Qt.bind(n))):we&&Ie(we.bind(n))}if(Ve(HT,h),Ve(p_,d),Ve(WT,p),Ve(qT,g),Ve(VT,_),Ve($T,v),Ve(GT,j),Ve(zT,re),Ve(KT,ge),Ve(g_,A),Ve(m_,O),Ve(__,Te),J(ye))if(ye.length){const Ie=t.exposed||(t.exposed={});ye.forEach(we=>{Object.defineProperty(Ie,we,{get:()=>n[we],set:Qt=>n[we]=Qt})})}else t.exposed||(t.exposed={});z&&t.render===sn&&(t.render=z),ct!=null&&(t.inheritAttrs=ct),lt&&(t.components=lt),Gt&&(t.directives=Gt)}function tI(t,e,n=sn,s=!1){J(t)&&(t=pu(t));for(const i in t){const r=t[i];let o;Pe(r)?"default"in r?o=on(r.from||i,r.default,!0):o=on(r.from||i):o=on(r),Ue(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Wf(t,e,n){Wt(J(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function v_(t,e,n,s){const i=s.includes(".")?l_(n,s):()=>n[s];if(Qe(t)){const r=e[t];te(r)&&Rr(i,r)}else if(te(t))Rr(i,t.bind(n));else if(Pe(t))if(J(t))t.forEach(r=>v_(r,e,n,s));else{const r=te(t.handler)?t.handler.bind(n):e[t.handler];te(r)&&Rr(i,r,t)}}function Bh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(l=>Oa(c,l,o,!0)),Oa(c,e,o)),Pe(e)&&r.set(e,c),c}function Oa(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Oa(t,r,n,!0),i&&i.forEach(o=>Oa(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=nI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const nI={data:qf,props:Cs,emits:Cs,methods:Cs,computed:Cs,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:Cs,directives:Cs,watch:iI,provide:qf,inject:sI};function qf(t,e){return e?t?function(){return vt(te(t)?t.call(this,this):t,te(e)?e.call(this,this):e)}:e:t}function sI(t,e){return Cs(pu(t),pu(e))}function pu(t){if(J(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function Cs(t,e){return t?vt(vt(Object.create(null),t),e):e}function iI(t,e){if(!t)return e;if(!e)return t;const n=vt(Object.create(null),t);for(const s in e)n[s]=Tt(t[s],e[s]);return n}function rI(t,e,n,s=!1){const i={},r={};Aa(r,Cc,1),t.propsDefaults=Object.create(null),w_(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:vT(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function oI(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=pe(i),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(wc(t.emitsOptions,d))continue;const p=e[d];if(c)if(he(r,d))p!==r[d]&&(r[d]=p,l=!0);else{const g=Tn(d);i[g]=gu(c,a,g,p,t,!1)}else p!==r[d]&&(r[d]=p,l=!0)}}}else{w_(t,e,i,r)&&(l=!0);let u;for(const h in a)(!e||!he(e,h)&&((u=Ki(h))===h||!he(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=gu(c,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!he(e,h))&&(delete r[h],l=!0)}l&&Vn(t,"set","$attrs")}function w_(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(fa(c))continue;const l=e[c];let u;i&&he(i,u=Tn(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:wc(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(r){const c=pe(n),l=a||Ae;for(let u=0;u<r.length;u++){const h=r[u];n[h]=gu(i,c,h,l[h],t,!he(l,h))}}return o}function gu(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=he(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&te(c)){const{propsDefaults:l}=i;n in l?s=l[n]:(Oi(i),s=l[n]=c.call(null,e),Bs())}else s=c}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Ki(n))&&(s=!0))}return s}function E_(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let c=!1;if(!te(t)){const u=h=>{c=!0;const[d,p]=E_(h,e,!0);vt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return Pe(t)&&s.set(t,wi),wi;if(J(r))for(let u=0;u<r.length;u++){const h=Tn(r[u]);Kf(h)&&(o[h]=Ae)}else if(r)for(const u in r){const h=Tn(u);if(Kf(h)){const d=r[u],p=o[h]=J(d)||te(d)?{type:d}:Object.assign({},d);if(p){const g=Qf(Boolean,p.type),_=Qf(String,p.type);p[0]=g>-1,p[1]=_<0||g<_,(g>-1||he(p,"default"))&&a.push(h)}}}const l=[o,a];return Pe(t)&&s.set(t,l),l}function Kf(t){return t[0]!=="$"}function zf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Gf(t,e){return zf(t)===zf(e)}function Qf(t,e){return J(e)?e.findIndex(n=>Gf(n,t)):te(e)&&Gf(e,t)?0:-1}const b_=t=>t[0]==="_"||t==="$stable",Vh=t=>J(t)?t.map(gn):[gn(t)],aI=(t,e,n)=>{if(e._n)return e;const s=On((...i)=>Vh(e(...i)),n);return s._c=!1,s},T_=(t,e,n)=>{const s=t._ctx;for(const i in t){if(b_(i))continue;const r=t[i];if(te(r))e[i]=aI(i,r,s);else if(r!=null){const o=Vh(r);e[i]=()=>o}}},I_=(t,e)=>{const n=Vh(e);t.slots.default=()=>n},cI=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=pe(e),Aa(e,"_",n)):T_(e,t.slots={})}else t.slots={},e&&I_(t,e);Aa(t.slots,Cc,1)},lI=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Ae;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(vt(i,e),!n&&a===1&&delete i._):(r=!e.$stable,T_(e,i)),o=e}else e&&(I_(t,e),o={default:1});if(r)for(const a in i)!b_(a)&&!(a in o)&&delete i[a]};function C_(){return{app:null,config:{isNativeTag:Fb,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uI=0;function hI(t,e){return function(s,i=null){te(s)||(s=Object.assign({},s)),i!=null&&!Pe(i)&&(i=null);const r=C_(),o=new Set;let a=!1;const c=r.app={_uid:uI++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:NI,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&te(l.install)?(o.add(l),l.install(c,...u)):te(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const d=Me(s,i);return d.appContext=r,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Rc(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c}};return c}}function mu(t,e,n,s,i=!1){if(J(t)){t.forEach((d,p)=>mu(d,e&&(J(e)?e[p]:e),n,s,i));return}if(ma(s)&&!i)return;const r=s.shapeFlag&4?Rc(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ae?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Qe(l)?(u[l]=null,he(h,l)&&(h[l]=null)):Ue(l)&&(l.value=null)),te(c))rs(c,a,12,[o,u]);else{const d=Qe(c),p=Ue(c);if(d||p){const g=()=>{if(t.f){const _=d?he(h,c)?h[c]:u[c]:c.value;i?J(_)&&Rh(_,r):J(_)?_.includes(r)||_.push(r):d?(u[c]=[r],he(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,he(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Rt(g,n)):g()}}}const Rt=MT;function dI(t){return fI(t)}function fI(t,e){const n=Hb();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=sn,insertStaticContent:g}=t,_=(f,m,y,w=null,T=null,N=null,M=!1,k=null,D=!!m.dynamicChildren)=>{if(f===m)return;f&&!ks(f,m)&&(w=x(f),St(f,T,N,!0),f=null),m.patchFlag===-2&&(D=!1,m.dynamicChildren=null);const{type:C,ref:H,shapeFlag:U}=m;switch(C){case Ic:v(f,m,y,w);break;case an:b(f,m,y,w);break;case _a:f==null&&A(m,y,w,M);break;case xt:lt(f,m,y,w,T,N,M,k,D);break;default:U&1?z(f,m,y,w,T,N,M,k,D):U&6?Gt(f,m,y,w,T,N,M,k,D):(U&64||U&128)&&C.process(f,m,y,w,T,N,M,k,D,ue)}H!=null&&T&&mu(H,f&&f.ref,N,m||f,!m)},v=(f,m,y,w)=>{if(f==null)s(m.el=a(m.children),y,w);else{const T=m.el=f.el;m.children!==f.children&&l(T,m.children)}},b=(f,m,y,w)=>{f==null?s(m.el=c(m.children||""),y,w):m.el=f.el},A=(f,m,y,w)=>{[f.el,f.anchor]=g(f.children,m,y,w,f.el,f.anchor)},I=({el:f,anchor:m},y,w)=>{let T;for(;f&&f!==m;)T=d(f),s(f,y,w),f=T;s(m,y,w)},O=({el:f,anchor:m})=>{let y;for(;f&&f!==m;)y=d(f),i(f),f=y;i(m)},z=(f,m,y,w,T,N,M,k,D)=>{M=M||m.type==="svg",f==null?re(m,y,w,T,N,M,k,D):Te(f,m,T,N,M,k,D)},re=(f,m,y,w,T,N,M,k)=>{let D,C;const{type:H,props:U,shapeFlag:W,transition:X,dirs:se}=f;if(D=f.el=o(f.type,N,U&&U.is,U),W&8?u(D,f.children):W&16&&j(f.children,D,null,w,T,N&&H!=="foreignObject",M,k),se&&Ts(f,null,w,"created"),ge(D,f,f.scopeId,M,w),U){for(const Ee in U)Ee!=="value"&&!fa(Ee)&&r(D,Ee,null,U[Ee],N,f.children,w,T,F);"value"in U&&r(D,"value",null,U.value),(C=U.onVnodeBeforeMount)&&pn(C,w,f)}se&&Ts(f,null,w,"beforeMount");const Ce=(!T||T&&!T.pendingBranch)&&X&&!X.persisted;Ce&&X.beforeEnter(D),s(D,m,y),((C=U&&U.onVnodeMounted)||Ce||se)&&Rt(()=>{C&&pn(C,w,f),Ce&&X.enter(D),se&&Ts(f,null,w,"mounted")},T)},ge=(f,m,y,w,T)=>{if(y&&p(f,y),w)for(let N=0;N<w.length;N++)p(f,w[N]);if(T){let N=T.subTree;if(m===N){const M=T.vnode;ge(f,M,M.scopeId,M.slotScopeIds,T.parent)}}},j=(f,m,y,w,T,N,M,k,D=0)=>{for(let C=D;C<f.length;C++){const H=f[C]=k?Jn(f[C]):gn(f[C]);_(null,H,m,y,w,T,N,M,k)}},Te=(f,m,y,w,T,N,M)=>{const k=m.el=f.el;let{patchFlag:D,dynamicChildren:C,dirs:H}=m;D|=f.patchFlag&16;const U=f.props||Ae,W=m.props||Ae;let X;y&&Is(y,!1),(X=W.onVnodeBeforeUpdate)&&pn(X,y,m,f),H&&Ts(m,f,y,"beforeUpdate"),y&&Is(y,!0);const se=T&&m.type!=="foreignObject";if(C?ye(f.dynamicChildren,C,k,y,w,se,N):M||we(f,m,k,null,y,w,se,N,!1),D>0){if(D&16)ct(k,m,U,W,y,w,T);else if(D&2&&U.class!==W.class&&r(k,"class",null,W.class,T),D&4&&r(k,"style",U.style,W.style,T),D&8){const Ce=m.dynamicProps;for(let Ee=0;Ee<Ce.length;Ee++){const $e=Ce[Ee],Xt=U[$e],ui=W[$e];(ui!==Xt||$e==="value")&&r(k,$e,Xt,ui,T,f.children,y,w,F)}}D&1&&f.children!==m.children&&u(k,m.children)}else!M&&C==null&&ct(k,m,U,W,y,w,T);((X=W.onVnodeUpdated)||H)&&Rt(()=>{X&&pn(X,y,m,f),H&&Ts(m,f,y,"updated")},w)},ye=(f,m,y,w,T,N,M)=>{for(let k=0;k<m.length;k++){const D=f[k],C=m[k],H=D.el&&(D.type===xt||!ks(D,C)||D.shapeFlag&70)?h(D.el):y;_(D,C,H,null,w,T,N,M,!0)}},ct=(f,m,y,w,T,N,M)=>{if(y!==w){if(y!==Ae)for(const k in y)!fa(k)&&!(k in w)&&r(f,k,y[k],null,M,m.children,T,N,F);for(const k in w){if(fa(k))continue;const D=w[k],C=y[k];D!==C&&k!=="value"&&r(f,k,C,D,M,m.children,T,N,F)}"value"in w&&r(f,"value",y.value,w.value)}},lt=(f,m,y,w,T,N,M,k,D)=>{const C=m.el=f?f.el:a(""),H=m.anchor=f?f.anchor:a("");let{patchFlag:U,dynamicChildren:W,slotScopeIds:X}=m;X&&(k=k?k.concat(X):X),f==null?(s(C,y,w),s(H,y,w),j(m.children,y,H,T,N,M,k,D)):U>0&&U&64&&W&&f.dynamicChildren?(ye(f.dynamicChildren,W,y,T,N,M,k),(m.key!=null||T&&m===T.subTree)&&S_(f,m,!0)):we(f,m,y,H,T,N,M,k,D)},Gt=(f,m,y,w,T,N,M,k,D)=>{m.slotScopeIds=k,f==null?m.shapeFlag&512?T.ctx.activate(m,y,w,M,D):kn(m,y,w,T,N,M,D):lr(f,m,D)},kn=(f,m,y,w,T,N,M)=>{const k=f.component=bI(f,w,T);if(bc(f)&&(k.ctx.renderer=ue),TI(k),k.asyncDep){if(T&&T.registerDep(k,Ve),!f.el){const D=k.subTree=Me(an);b(null,D,m,y)}return}Ve(k,f,m,y,T,N,M)},lr=(f,m,y)=>{const w=m.component=f.component;if(DT(f,m,y))if(w.asyncDep&&!w.asyncResolved){Ie(w,m,y);return}else w.next=m,ST(w.update),w.update();else m.el=f.el,w.vnode=m},Ve=(f,m,y,w,T,N,M)=>{const k=()=>{if(f.isMounted){let{next:H,bu:U,u:W,parent:X,vnode:se}=f,Ce=H,Ee;Is(f,!1),H?(H.el=se.el,Ie(f,H,M)):H=se,U&&pa(U),(Ee=H.props&&H.props.onVnodeBeforeUpdate)&&pn(Ee,X,H,se),Is(f,!0);const $e=bl(f),Xt=f.subTree;f.subTree=$e,_(Xt,$e,h(Xt.el),x(Xt),f,T,N),H.el=$e.el,Ce===null&&PT(f,$e.el),W&&Rt(W,T),(Ee=H.props&&H.props.onVnodeUpdated)&&Rt(()=>pn(Ee,X,H,se),T)}else{let H;const{el:U,props:W}=m,{bm:X,m:se,parent:Ce}=f,Ee=ma(m);if(Is(f,!1),X&&pa(X),!Ee&&(H=W&&W.onVnodeBeforeMount)&&pn(H,Ce,m),Is(f,!0),U&&ne){const $e=()=>{f.subTree=bl(f),ne(U,f.subTree,f,T,null)};Ee?m.type.__asyncLoader().then(()=>!f.isUnmounted&&$e()):$e()}else{const $e=f.subTree=bl(f);_(null,$e,y,w,f,T,N),m.el=$e.el}if(se&&Rt(se,T),!Ee&&(H=W&&W.onVnodeMounted)){const $e=m;Rt(()=>pn(H,Ce,$e),T)}(m.shapeFlag&256||Ce&&ma(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&f.a&&Rt(f.a,T),f.isMounted=!0,m=y=w=null}},D=f.effect=new Oh(k,()=>Uh(C),f.scope),C=f.update=()=>D.run();C.id=f.uid,Is(f,!0),C()},Ie=(f,m,y)=>{m.component=f;const w=f.vnode.props;f.vnode=m,f.next=null,oI(f,m.props,w,y),lI(f,m.children,y),zi(),Vf(),Gi()},we=(f,m,y,w,T,N,M,k,D=!1)=>{const C=f&&f.children,H=f?f.shapeFlag:0,U=m.children,{patchFlag:W,shapeFlag:X}=m;if(W>0){if(W&128){bs(C,U,y,w,T,N,M,k,D);return}else if(W&256){Qt(C,U,y,w,T,N,M,k,D);return}}X&8?(H&16&&F(C,T,N),U!==C&&u(y,U)):H&16?X&16?bs(C,U,y,w,T,N,M,k,D):F(C,T,N,!0):(H&8&&u(y,""),X&16&&j(U,y,w,T,N,M,k,D))},Qt=(f,m,y,w,T,N,M,k,D)=>{f=f||wi,m=m||wi;const C=f.length,H=m.length,U=Math.min(C,H);let W;for(W=0;W<U;W++){const X=m[W]=D?Jn(m[W]):gn(m[W]);_(f[W],X,y,null,T,N,M,k,D)}C>H?F(f,T,N,!0,!1,U):j(m,y,w,T,N,M,k,D,U)},bs=(f,m,y,w,T,N,M,k,D)=>{let C=0;const H=m.length;let U=f.length-1,W=H-1;for(;C<=U&&C<=W;){const X=f[C],se=m[C]=D?Jn(m[C]):gn(m[C]);if(ks(X,se))_(X,se,y,null,T,N,M,k,D);else break;C++}for(;C<=U&&C<=W;){const X=f[U],se=m[W]=D?Jn(m[W]):gn(m[W]);if(ks(X,se))_(X,se,y,null,T,N,M,k,D);else break;U--,W--}if(C>U){if(C<=W){const X=W+1,se=X<H?m[X].el:w;for(;C<=W;)_(null,m[C]=D?Jn(m[C]):gn(m[C]),y,se,T,N,M,k,D),C++}}else if(C>W)for(;C<=U;)St(f[C],T,N,!0),C++;else{const X=C,se=C,Ce=new Map;for(C=se;C<=W;C++){const Dt=m[C]=D?Jn(m[C]):gn(m[C]);Dt.key!=null&&Ce.set(Dt.key,C)}let Ee,$e=0;const Xt=W-se+1;let ui=!1,kf=0;const ur=new Array(Xt);for(C=0;C<Xt;C++)ur[C]=0;for(C=X;C<=U;C++){const Dt=f[C];if($e>=Xt){St(Dt,T,N,!0);continue}let fn;if(Dt.key!=null)fn=Ce.get(Dt.key);else for(Ee=se;Ee<=W;Ee++)if(ur[Ee-se]===0&&ks(Dt,m[Ee])){fn=Ee;break}fn===void 0?St(Dt,T,N,!0):(ur[fn-se]=C+1,fn>=kf?kf=fn:ui=!0,_(Dt,m[fn],y,null,T,N,M,k,D),$e++)}const Nf=ui?pI(ur):wi;for(Ee=Nf.length-1,C=Xt-1;C>=0;C--){const Dt=se+C,fn=m[Dt],Of=Dt+1<H?m[Dt+1].el:w;ur[C]===0?_(null,fn,y,Of,T,N,M,k,D):ui&&(Ee<0||C!==Nf[Ee]?Yt(fn,y,Of,2):Ee--)}}},Yt=(f,m,y,w,T=null)=>{const{el:N,type:M,transition:k,children:D,shapeFlag:C}=f;if(C&6){Yt(f.component.subTree,m,y,w);return}if(C&128){f.suspense.move(m,y,w);return}if(C&64){M.move(f,m,y,ue);return}if(M===xt){s(N,m,y);for(let U=0;U<D.length;U++)Yt(D[U],m,y,w);s(f.anchor,m,y);return}if(M===_a){I(f,m,y);return}if(w!==2&&C&1&&k)if(w===0)k.beforeEnter(N),s(N,m,y),Rt(()=>k.enter(N),T);else{const{leave:U,delayLeave:W,afterLeave:X}=k,se=()=>s(N,m,y),Ce=()=>{U(N,()=>{se(),X&&X()})};W?W(N,se,Ce):Ce()}else s(N,m,y)},St=(f,m,y,w=!1,T=!1)=>{const{type:N,props:M,ref:k,children:D,dynamicChildren:C,shapeFlag:H,patchFlag:U,dirs:W}=f;if(k!=null&&mu(k,null,y,f,!0),H&256){m.ctx.deactivate(f);return}const X=H&1&&W,se=!ma(f);let Ce;if(se&&(Ce=M&&M.onVnodeBeforeUnmount)&&pn(Ce,m,f),H&6)E(f.component,y,w);else{if(H&128){f.suspense.unmount(y,w);return}X&&Ts(f,null,m,"beforeUnmount"),H&64?f.type.remove(f,m,y,T,ue,w):C&&(N!==xt||U>0&&U&64)?F(C,m,y,!1,!0):(N===xt&&U&384||!T&&H&16)&&F(D,m,y),w&&li(f)}(se&&(Ce=M&&M.onVnodeUnmounted)||X)&&Rt(()=>{Ce&&pn(Ce,m,f),X&&Ts(f,null,m,"unmounted")},y)},li=f=>{const{type:m,el:y,anchor:w,transition:T}=f;if(m===xt){zo(y,w);return}if(m===_a){O(f);return}const N=()=>{i(y),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(f.shapeFlag&1&&T&&!T.persisted){const{leave:M,delayLeave:k}=T,D=()=>M(y,N);k?k(f.el,N,D):D()}else N()},zo=(f,m)=>{let y;for(;f!==m;)y=d(f),i(f),f=y;i(m)},E=(f,m,y)=>{const{bum:w,scope:T,update:N,subTree:M,um:k}=f;w&&pa(w),T.stop(),N&&(N.active=!1,St(M,f,m,y)),k&&Rt(k,m),Rt(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},F=(f,m,y,w=!1,T=!1,N=0)=>{for(let M=N;M<f.length;M++)St(f[M],m,y,w,T)},x=f=>f.shapeFlag&6?x(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),$=(f,m,y)=>{f==null?m._vnode&&St(m._vnode,null,null,!0):_(m._vnode||null,f,m,null,null,null,y),Vf(),r_(),m._vnode=f},ue={p:_,um:St,m:Yt,r:li,mt:kn,mc:j,pc:we,pbc:ye,n:x,o:t};let xe,ne;return e&&([xe,ne]=e(ue)),{render:$,hydrate:xe,createApp:hI($,xe)}}function Is({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function S_(t,e,n=!1){const s=t.children,i=e.children;if(J(s)&&J(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Jn(i[r]),a.el=o.el),n||S_(o,a)),a.type===Ic&&(a.el=o.el)}}function pI(t){const e=t.slice(),n=[0];let s,i,r,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(i=n[n.length-1],t[i]<l){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const gI=t=>t.__isTeleport,xt=Symbol(void 0),Ic=Symbol(void 0),an=Symbol(void 0),_a=Symbol(void 0),kr=[];let tn=null;function It(t=!1){kr.push(tn=t?null:[])}function mI(){kr.pop(),tn=kr[kr.length-1]||null}let Kr=1;function Yf(t){Kr+=t}function R_(t){return t.dynamicChildren=Kr>0?tn||wi:null,mI(),Kr>0&&tn&&tn.push(t),t}function cn(t,e,n,s,i,r){return R_(L(t,e,n,s,i,r,!0))}function ya(t,e,n,s,i){return R_(Me(t,e,n,s,i,!0))}function _u(t){return t?t.__v_isVNode===!0:!1}function ks(t,e){return t.type===e.type&&t.key===e.key}const Cc="__vInternal",A_=({key:t})=>t??null,va=({ref:t,ref_key:e,ref_for:n})=>t!=null?Qe(t)||Ue(t)||te(t)?{i:Mt,r:t,k:e,f:!!n}:t:null;function L(t,e=null,n=null,s=0,i=null,r=t===xt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&A_(e),ref:e&&va(e),scopeId:Ec,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Mt};return a?(jh(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Qe(n)?8:16),Kr>0&&!o&&tn&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&tn.push(c),c}const Me=_I;function _I(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===YT)&&(t=an),_u(t)){const a=hs(t,e,!0);return n&&jh(a,n),Kr>0&&!r&&tn&&(a.shapeFlag&6?tn[tn.indexOf(t)]=a:tn.push(a)),a.patchFlag|=-2,a}if(AI(t)&&(t=t.__vccOpts),e){e=yI(e);let{class:a,style:c}=e;a&&!Qe(a)&&(e.class=Ch(a)),Pe(c)&&(Gm(c)&&!J(c)&&(c=vt({},c)),e.style=Ih(c))}const o=Qe(t)?1:xT(t)?128:gI(t)?64:Pe(t)?4:te(t)?2:0;return L(t,e,n,s,i,o,r,!0)}function yI(t){return t?Gm(t)||Cc in t?vt({},t):t:null}function hs(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?vI(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&A_(a),ref:e&&e.ref?n&&i?J(i)?i.concat(va(e)):[i,va(e)]:va(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hs(t.ssContent),ssFallback:t.ssFallback&&hs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Je(t=" ",e=0){return Me(Ic,null,t,e)}function $h(t,e){const n=Me(_a,null,t);return n.staticCount=e,n}function ea(t="",e=!1){return e?(It(),ya(an,null,t)):Me(an,null,t)}function gn(t){return t==null||typeof t=="boolean"?Me(an):J(t)?Me(xt,null,t.slice()):typeof t=="object"?Jn(t):Me(Ic,null,String(t))}function Jn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hs(t)}function jh(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(J(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),jh(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Cc in e)?e._ctx=Mt:i===3&&Mt&&(Mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else te(e)?(e={default:e,_ctx:Mt},n=32):(e=String(e),s&64?(n=16,e=[Je(e)]):n=8);t.children=e,t.shapeFlag|=n}function vI(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Ch([e.class,s.class]));else if(i==="style")e.style=Ih([e.style,s.style]);else if(pc(i)){const r=e[i],o=s[i];o&&r!==o&&!(J(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function pn(t,e,n,s=null){Wt(t,e,7,[n,s])}const wI=C_();let EI=0;function bI(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||wI,r={uid:EI++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Wb(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:E_(s,i),emitsOptions:a_(s,i),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:s.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=kT.bind(null,r),t.ce&&t.ce(r),r}let Fe=null;const Sc=()=>Fe||Mt,Oi=t=>{Fe=t,t.scope.on()},Bs=()=>{Fe&&Fe.scope.off(),Fe=null};function k_(t){return t.vnode.shapeFlag&4}let zr=!1;function TI(t,e=!1){zr=e;const{props:n,children:s}=t.vnode,i=k_(t);rI(t,n,i,e),cI(t,s);const r=i?II(t,e):void 0;return zr=!1,r}function II(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Qm(new Proxy(t.ctx,ZT));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?SI(t):null;Oi(t),zi();const r=rs(s,t,0,[t.props,i]);if(Gi(),Bs(),Pm(r)){if(r.then(Bs,Bs),e)return r.then(o=>{Xf(t,o,e)}).catch(o=>{vc(o,t,0)});t.asyncDep=r}else Xf(t,r,e)}else N_(t,e)}function Xf(t,e,n){te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=e_(e)),N_(t,n)}let Jf;function N_(t,e,n){const s=t.type;if(!t.render){if(!e&&Jf&&!s.render){const i=s.template||Bh(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=vt(vt({isCustomElement:r,delimiters:a},o),c);s.render=Jf(i,l)}}t.render=s.render||sn}Oi(t),zi(),eI(t),Gi(),Bs()}function CI(t){return new Proxy(t.attrs,{get(e,n){return Ot(t,"get","$attrs"),e[n]}})}function SI(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=CI(t))},slots:t.slots,emit:t.emit,expose:e}}function Rc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(e_(Qm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ar)return Ar[n](t)},has(e,n){return n in e||n in Ar}}))}function RI(t,e=!0){return te(t)?t.displayName||t.name:t.name||e&&t.__name}function AI(t){return te(t)&&"__vccOpts"in t}const jt=(t,e)=>TT(t,e,zr);function O_(t,e,n){const s=arguments.length;return s===2?Pe(e)&&!J(e)?_u(e)?Me(t,null,[e]):Me(t,e):Me(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&_u(n)&&(n=[n]),Me(t,e,n))}const D_=Symbol(""),kI=()=>on(D_),NI="3.2.47",OI="http://www.w3.org/2000/svg",Ns=typeof document<"u"?document:null,Zf=Ns&&Ns.createElement("template"),DI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Ns.createElementNS(OI,t):Ns.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Ns.createTextNode(t),createComment:t=>Ns.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ns.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Zf.innerHTML=s?`<svg>${t}</svg>`:t;const a=Zf.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function PI(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function xI(t,e,n){const s=t.style,i=Qe(n);if(n&&!i){if(e&&!Qe(e))for(const r in e)n[r]==null&&yu(s,r,"");for(const r in n)yu(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const ep=/\s*!important$/;function yu(t,e,n){if(J(n))n.forEach(s=>yu(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=MI(t,e);ep.test(n)?t.setProperty(Ki(s),n.replace(ep,""),"important"):t[s]=n}}const tp=["Webkit","Moz","ms"],Cl={};function MI(t,e){const n=Cl[e];if(n)return n;let s=Tn(e);if(s!=="filter"&&s in t)return Cl[e]=s;s=_c(s);for(let i=0;i<tp.length;i++){const r=tp[i]+s;if(r in t)return Cl[e]=r}return e}const np="http://www.w3.org/1999/xlink";function LI(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(np,e.slice(6,e.length)):t.setAttributeNS(np,e,n);else{const r=Lb(e);n==null||r&&!Nm(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function FI(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Nm(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function fi(t,e,n,s){t.addEventListener(e,n,s)}function UI(t,e,n,s){t.removeEventListener(e,n,s)}function BI(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=VI(e);if(s){const l=r[e]=HI(s,i);fi(t,a,l,c)}else o&&(UI(t,a,o,c),r[e]=void 0)}}const sp=/(?:Once|Passive|Capture)$/;function VI(t){let e;if(sp.test(t)){e={};let s;for(;s=t.match(sp);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ki(t.slice(2)),e]}let Sl=0;const $I=Promise.resolve(),jI=()=>Sl||($I.then(()=>Sl=0),Sl=Date.now());function HI(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Wt(WI(s,n.value),e,5,[s])};return n.value=t,n.attached=jI(),n}function WI(t,e){if(J(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const ip=/^on[a-z]/,qI=(t,e,n,s,i=!1,r,o,a,c)=>{e==="class"?PI(t,s,i):e==="style"?xI(t,n,s):pc(e)?Sh(e)||BI(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):KI(t,e,s,i))?FI(t,e,s,r,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),LI(t,e,s,i))};function KI(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&ip.test(e)&&te(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ip.test(e)&&Qe(n)?!1:e in t}const zI={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};BT.props;const rp=t=>{const e=t.props["onUpdate:modelValue"]||!1;return J(e)?n=>pa(e,n):e};function GI(t){t.target.composing=!0}function op(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Vs={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=rp(i);const r=s||i.props&&i.props.type==="number";fi(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=iu(a)),t._assign(a)}),n&&fi(t,"change",()=>{t.value=t.value.trim()}),e||(fi(t,"compositionstart",GI),fi(t,"compositionend",op),fi(t,"change",op))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=rp(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&iu(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},QI=vt({patchProp:qI},DI);let ap;function YI(){return ap||(ap=dI(QI))}const XI=(...t)=>{const e=YI().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=JI(s);if(!i)return;const r=e._component;!te(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function JI(t){return Qe(t)?document.querySelector(t):t}const ZI="/assets/logo-da9b9095.svg";/**
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
 */const P_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const P=function(t,e){if(!t)throw Qi(e)},Qi=function(t){return new Error("Firebase Database ("+P_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const x_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},e0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ac={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(x_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):e0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw Error();const d=r<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const g=l<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},M_=function(t){const e=x_(t);return Ac.encodeByteArray(e,!0)},Da=function(t){return M_(t).replace(/\./g,"")},Pa=function(t){try{return Ac.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function t0(t){return L_(void 0,t)}function L_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!n0(n)||(t[n]=L_(t[n],e[n]));return t}function n0(t){return t!=="__proto__"}/**
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
 */function s0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const i0=()=>s0().__FIREBASE_DEFAULTS__,r0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},o0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pa(t[1]);return e&&JSON.parse(e)},kc=()=>{try{return i0()||r0()||o0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},F_=t=>{var e,n;return(n=(e=kc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},U_=t=>{const e=F_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},a0=()=>{var t;return(t=kc())===null||t===void 0?void 0:t.config},B_=t=>{var e;return(e=kc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Gr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function V_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Da(JSON.stringify(n)),Da(JSON.stringify(o)),a].join(".")}/**
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
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function c0(){var t;const e=(t=kc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function l0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function u0(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function j_(){return P_.NODE_ADMIN===!0}function H_(){try{return typeof indexedDB=="object"}catch{return!1}}function h0(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const d0="FirebaseError";class An extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=d0,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yi.prototype.create)}}class Yi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?f0(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new An(i,a,s)}}function f0(t,e){return t.replace(p0,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const p0=/\{\$([^}]+)}/g;/**
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
 */function Qr(t){return JSON.parse(t)}function rt(t){return JSON.stringify(t)}/**
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
 */const W_=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Qr(Pa(r[0])||""),n=Qr(Pa(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},g0=function(t){const e=W_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},m0=function(t){const e=W_(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function zn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Di(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function vu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xa(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Ma(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(cp(r)&&cp(o)){if(!Ma(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function cp(t){return t!==null&&typeof t=="object"}/**
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
 */function Xi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function wr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Er(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class _0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+l+c+u+s[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function y0(t,e){const n=new v0(t,e);return n.subscribe.bind(n)}class v0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");w0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Rl),i.error===void 0&&(i.error=Rl),i.complete===void 0&&(i.complete=Rl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function w0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rl(){}function E0(t,e){return`${t} failed: ${e} argument `}/**
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
 */const b0=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,P(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Nc=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Be(t){return t&&t._delegate?t._delegate:t}class hn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ss="[DEFAULT]";/**
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
 */class T0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Gr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(C0(e))try{this.getOrInitializeService({instanceIdentifier:Ss})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ss){return this.instances.has(e)}getOptions(e=Ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:I0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ss){return this.component?this.component.multipleInstances?e:Ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function I0(t){return t===Ss?void 0:t}function C0(t){return t.instantiationMode==="EAGER"}/**
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
 */class S0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new T0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const R0={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},A0=fe.INFO,k0={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},N0=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=k0[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yo{constructor(e){this.name=e,this._logLevel=A0,this._logHandler=N0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?R0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const O0=(t,e)=>e.some(n=>t instanceof n);let lp,up;function D0(){return lp||(lp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function P0(){return up||(up=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const q_=new WeakMap,wu=new WeakMap,K_=new WeakMap,Al=new WeakMap,Wh=new WeakMap;function x0(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(os(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&q_.set(n,t)}).catch(()=>{}),Wh.set(e,t),e}function M0(t){if(wu.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});wu.set(t,e)}let Eu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||K_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return os(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function L0(t){Eu=t(Eu)}function F0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(kl(this),e,...n);return K_.set(s,e.sort?e.sort():[e]),os(s)}:P0().includes(t)?function(...e){return t.apply(kl(this),e),os(q_.get(this))}:function(...e){return os(t.apply(kl(this),e))}}function U0(t){return typeof t=="function"?F0(t):(t instanceof IDBTransaction&&M0(t),O0(t,D0())?new Proxy(t,Eu):t)}function os(t){if(t instanceof IDBRequest)return x0(t);if(Al.has(t))return Al.get(t);const e=U0(t);return e!==t&&(Al.set(t,e),Wh.set(e,t)),e}const kl=t=>Wh.get(t);function B0(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=os(o);return s&&o.addEventListener("upgradeneeded",c=>{s(os(o.result),c.oldVersion,c.newVersion,os(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const V0=["get","getKey","getAll","getAllKeys","count"],$0=["put","add","delete","clear"],Nl=new Map;function hp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nl.get(e))return Nl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=$0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||V0.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Nl.set(e,r),r}L0(t=>({...t,get:(e,n,s)=>hp(e,n)||t.get(e,n,s),has:(e,n)=>!!hp(e,n)||t.has(e,n)}));/**
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
 */class j0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(H0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function H0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bu="@firebase/app",dp="0.9.3";/**
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
 */const Ks=new yo("@firebase/app"),W0="@firebase/app-compat",q0="@firebase/analytics-compat",K0="@firebase/analytics",z0="@firebase/app-check-compat",G0="@firebase/app-check",Q0="@firebase/auth",Y0="@firebase/auth-compat",X0="@firebase/database",J0="@firebase/database-compat",Z0="@firebase/functions",eC="@firebase/functions-compat",tC="@firebase/installations",nC="@firebase/installations-compat",sC="@firebase/messaging",iC="@firebase/messaging-compat",rC="@firebase/performance",oC="@firebase/performance-compat",aC="@firebase/remote-config",cC="@firebase/remote-config-compat",lC="@firebase/storage",uC="@firebase/storage-compat",hC="@firebase/firestore",dC="@firebase/firestore-compat",fC="firebase",pC="9.17.1";/**
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
 */const Tu="[DEFAULT]",gC={[bu]:"fire-core",[W0]:"fire-core-compat",[K0]:"fire-analytics",[q0]:"fire-analytics-compat",[G0]:"fire-app-check",[z0]:"fire-app-check-compat",[Q0]:"fire-auth",[Y0]:"fire-auth-compat",[X0]:"fire-rtdb",[J0]:"fire-rtdb-compat",[Z0]:"fire-fn",[eC]:"fire-fn-compat",[tC]:"fire-iid",[nC]:"fire-iid-compat",[sC]:"fire-fcm",[iC]:"fire-fcm-compat",[rC]:"fire-perf",[oC]:"fire-perf-compat",[aC]:"fire-rc",[cC]:"fire-rc-compat",[lC]:"fire-gcs",[uC]:"fire-gcs-compat",[hC]:"fire-fst",[dC]:"fire-fst-compat","fire-js":"fire-js",[fC]:"fire-js-all"};/**
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
 */const La=new Map,Iu=new Map;function mC(t,e){try{t.container.addComponent(e)}catch(n){Ks.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function In(t){const e=t.name;if(Iu.has(e))return Ks.debug(`There were multiple attempts to register component ${e}.`),!1;Iu.set(e,t);for(const n of La.values())mC(n,t);return!0}function Oc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const _C={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},as=new Yi("app","Firebase",_C);/**
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
 */class yC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw as.create("app-deleted",{appName:this._name})}}/**
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
 */const ni=pC;function z_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Tu,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw as.create("bad-app-name",{appName:String(i)});if(n||(n=a0()),!n)throw as.create("no-options");const r=La.get(i);if(r){if(Ma(n,r.options)&&Ma(s,r.config))return r;throw as.create("duplicate-app",{appName:i})}const o=new S0(i);for(const c of Iu.values())o.addComponent(c);const a=new yC(n,s,o);return La.set(i,a),a}function Dc(t=Tu){const e=La.get(t);if(!e&&t===Tu)return z_();if(!e)throw as.create("no-app",{appName:t});return e}function Ut(t,e,n){var s;let i=(s=gC[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ks.warn(a.join(" "));return}In(new hn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const vC="firebase-heartbeat-database",wC=1,Yr="firebase-heartbeat-store";let Ol=null;function G_(){return Ol||(Ol=B0(vC,wC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Yr)}}}).catch(t=>{throw as.create("idb-open",{originalErrorMessage:t.message})})),Ol}async function EC(t){try{return(await G_()).transaction(Yr).objectStore(Yr).get(Q_(t))}catch(e){if(e instanceof An)Ks.warn(e.message);else{const n=as.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ks.warn(n.message)}}}async function fp(t,e){try{const s=(await G_()).transaction(Yr,"readwrite");return await s.objectStore(Yr).put(e,Q_(t)),s.done}catch(n){if(n instanceof An)Ks.warn(n.message);else{const s=as.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ks.warn(s.message)}}}function Q_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const bC=1024,TC=30*24*60*60*1e3;class IC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=pp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=TC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=pp(),{heartbeatsToSend:n,unsentEntries:s}=CC(this._heartbeatsCache.heartbeats),i=Da(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function pp(){return new Date().toISOString().substring(0,10)}function CC(t,e=bC){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),gp(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),gp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class SC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return H_()?h0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await EC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function gp(t){return Da(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function RC(t){In(new hn("platform-logger",e=>new j0(e),"PRIVATE")),In(new hn("heartbeat",e=>new IC(e),"PRIVATE")),Ut(bu,dp,t),Ut(bu,dp,"esm2017"),Ut("fire-js","")}RC("");var AC="firebase",kC="9.17.1";/**
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
 */Ut(AC,kC,"app");var NC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},B,qh=qh||{},Y=NC||self;function Fa(){}function Pc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function vo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function OC(t){return Object.prototype.hasOwnProperty.call(t,Dl)&&t[Dl]||(t[Dl]=++DC)}var Dl="closure_uid_"+(1e9*Math.random()>>>0),DC=0;function PC(t,e,n){return t.call.apply(t.bind,arguments)}function xC(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function _t(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_t=PC:_t=xC,_t.apply(null,arguments)}function ta(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function at(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function _s(){this.s=this.s,this.o=this.o}var MC=0;_s.prototype.s=!1;_s.prototype.na=function(){!this.s&&(this.s=!0,this.M(),MC!=0)&&OC(this)};_s.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Y_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Kh(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function mp(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Pc(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function yt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}yt.prototype.h=function(){this.defaultPrevented=!0};var LC=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",Fa,e),Y.removeEventListener("test",Fa,e)}catch{}return t}();function Ua(t){return/^[\s\xa0]*$/.test(t)}var _p=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Pl(t,e){return t<e?-1:t>e?1:0}function xc(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function _n(t){return xc().indexOf(t)!=-1}function zh(t){return zh[" "](t),t}zh[" "]=Fa;function FC(t){var e=VC;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var UC=_n("Opera"),Pi=_n("Trident")||_n("MSIE"),X_=_n("Edge"),Cu=X_||Pi,J_=_n("Gecko")&&!(xc().toLowerCase().indexOf("webkit")!=-1&&!_n("Edge"))&&!(_n("Trident")||_n("MSIE"))&&!_n("Edge"),BC=xc().toLowerCase().indexOf("webkit")!=-1&&!_n("Edge");function Z_(){var t=Y.document;return t?t.documentMode:void 0}var Ba;e:{var xl="",Ml=function(){var t=xc();if(J_)return/rv:([^\);]+)(\)|;)/.exec(t);if(X_)return/Edge\/([\d\.]+)/.exec(t);if(Pi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(BC)return/WebKit\/(\S+)/.exec(t);if(UC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ml&&(xl=Ml?Ml[1]:""),Pi){var Ll=Z_();if(Ll!=null&&Ll>parseFloat(xl)){Ba=String(Ll);break e}}Ba=xl}var VC={};function $C(){return FC(function(){let t=0;const e=_p(String(Ba)).split("."),n=_p("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Pl(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Pl(i[2].length==0,r[2].length==0)||Pl(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var Su;if(Y.document&&Pi){var yp=Z_();Su=yp||parseInt(Ba,10)||void 0}else Su=void 0;var jC=Su;function Xr(t,e){if(yt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(J_){e:{try{zh(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:HC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Xr.X.h.call(this)}}at(Xr,yt);var HC={2:"touch",3:"pen",4:"mouse"};Xr.prototype.h=function(){Xr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var wo="closure_listenable_"+(1e6*Math.random()|0),WC=0;function qC(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++WC,this.ba=this.ea=!1}function Mc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Gh(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ey(t){const e={};for(const n in t)e[n]=t[n];return e}const vp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ty(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<vp.length;r++)n=vp[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Lc(t){this.src=t,this.g={},this.h=0}Lc.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Au(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new qC(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function Ru(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Y_(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Mc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Au(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var Qh="closure_lm_"+(1e6*Math.random()|0),Fl={};function ny(t,e,n,s,i){if(s&&s.once)return iy(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ny(t,e[r],n,s,i);return null}return n=Jh(n),t&&t[wo]?t.N(e,n,vo(s)?!!s.capture:!!s,i):sy(t,e,n,!1,s,i)}function sy(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=vo(i)?!!i.capture:!!i,a=Xh(t);if(a||(t[Qh]=a=new Lc(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=KC(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)LC||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(oy(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function KC(){function t(n){return e.call(t.src,t.listener,n)}const e=zC;return t}function iy(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)iy(t,e[r],n,s,i);return null}return n=Jh(n),t&&t[wo]?t.O(e,n,vo(s)?!!s.capture:!!s,i):sy(t,e,n,!0,s,i)}function ry(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)ry(t,e[r],n,s,i);else s=vo(s)?!!s.capture:!!s,n=Jh(n),t&&t[wo]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Au(r,n,s,i),-1<n&&(Mc(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Xh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Au(e,n,s,i)),(n=-1<t?e[t]:null)&&Yh(n))}function Yh(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[wo])Ru(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(oy(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Xh(e))?(Ru(n,t),n.h==0&&(n.src=null,e[Qh]=null)):Mc(t)}}}function oy(t){return t in Fl?Fl[t]:Fl[t]="on"+t}function zC(t,e){if(t.ba)t=!0;else{e=new Xr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Yh(t),t=n.call(s,e)}return t}function Xh(t){return t=t[Qh],t instanceof Lc?t:null}var Ul="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jh(t){return typeof t=="function"?t:(t[Ul]||(t[Ul]=function(e){return t.handleEvent(e)}),t[Ul])}function st(){_s.call(this),this.i=new Lc(this),this.P=this,this.I=null}at(st,_s);st.prototype[wo]=!0;st.prototype.removeEventListener=function(t,e,n,s){ry(this,t,e,n,s)};function ot(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new yt(e,t);else if(e instanceof yt)e.target=e.target||t;else{var i=e;e=new yt(s,t),ty(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=na(o,s,!0,e)&&i}if(o=e.g=t,i=na(o,s,!0,e)&&i,i=na(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=na(o,s,!1,e)&&i}st.prototype.M=function(){if(st.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Mc(n[s]);delete t.g[e],t.h--}}this.I=null};st.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};st.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function na(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Ru(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Zh=Y.JSON.stringify;function GC(){var t=ly;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class QC{constructor(){this.h=this.g=null}add(e,n){const s=ay.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var ay=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new YC,t=>t.reset());class YC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function XC(t){Y.setTimeout(()=>{throw t},0)}function cy(t,e){ku||JC(),Nu||(ku(),Nu=!0),ly.add(t,e)}var ku;function JC(){var t=Y.Promise.resolve(void 0);ku=function(){t.then(ZC)}}var Nu=!1,ly=new QC;function ZC(){for(var t;t=GC();){try{t.h.call(t.g)}catch(n){XC(n)}var e=ay;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Nu=!1}function Fc(t,e){st.call(this),this.h=t||1,this.g=e||Y,this.j=_t(this.lb,this),this.l=Date.now()}at(Fc,st);B=Fc.prototype;B.ca=!1;B.R=null;B.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ot(this,"tick"),this.ca&&(ed(this),this.start()))}};B.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ed(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}B.M=function(){Fc.X.M.call(this),ed(this),delete this.g};function td(t,e,n){if(typeof t=="function")n&&(t=_t(t,n));else if(t&&typeof t.handleEvent=="function")t=_t(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function uy(t){t.g=td(()=>{t.g=null,t.i&&(t.i=!1,uy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class eS extends _s{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:uy(this)}M(){super.M(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jr(t){_s.call(this),this.h=t,this.g={}}at(Jr,_s);var wp=[];function hy(t,e,n,s){Array.isArray(n)||(n&&(wp[0]=n.toString()),n=wp);for(var i=0;i<n.length;i++){var r=ny(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function dy(t){Gh(t.g,function(e,n){this.g.hasOwnProperty(n)&&Yh(e)},t),t.g={}}Jr.prototype.M=function(){Jr.X.M.call(this),dy(this)};Jr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Uc(){this.g=!0}Uc.prototype.Aa=function(){this.g=!1};function tS(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function nS(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function _i(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+iS(t,n)+(s?" "+s:"")})}function sS(t,e){t.info(function(){return"TIMEOUT: "+e})}Uc.prototype.info=function(){};function iS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Zh(n)}catch{return e}}var si={},Ep=null;function Bc(){return Ep=Ep||new st}si.Pa="serverreachability";function fy(t){yt.call(this,si.Pa,t)}at(fy,yt);function Zr(t){const e=Bc();ot(e,new fy(e))}si.STAT_EVENT="statevent";function py(t,e){yt.call(this,si.STAT_EVENT,t),this.stat=e}at(py,yt);function Ct(t){const e=Bc();ot(e,new py(e,t))}si.Qa="timingevent";function gy(t,e){yt.call(this,si.Qa,t),this.size=e}at(gy,yt);function Eo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var Vc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},my={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function nd(){}nd.prototype.h=null;function bp(t){return t.h||(t.h=t.i())}function _y(){}var bo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function sd(){yt.call(this,"d")}at(sd,yt);function id(){yt.call(this,"c")}at(id,yt);var Ou;function $c(){}at($c,nd);$c.prototype.g=function(){return new XMLHttpRequest};$c.prototype.i=function(){return{}};Ou=new $c;function To(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Jr(this),this.O=rS,t=Cu?125:void 0,this.T=new Fc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new yy}function yy(){this.i=null,this.g="",this.h=!1}var rS=45e3,Du={},Va={};B=To.prototype;B.setTimeout=function(t){this.O=t};function Pu(t,e,n){t.K=1,t.v=Hc($n(e)),t.s=n,t.P=!0,vy(t,null)}function vy(t,e){t.F=Date.now(),Io(t),t.A=$n(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Ry(n.i,"t",s),t.C=0,n=t.l.H,t.h=new yy,t.g=Gy(t.l,n?e:null,!t.s),0<t.N&&(t.L=new eS(_t(t.La,t,t.g),t.N)),hy(t.S,t.g,"readystatechange",t.ib),e=t.H?ey(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Zr(),tS(t.j,t.u,t.A,t.m,t.U,t.s)}B.ib=function(t){t=t.target;const e=this.L;e&&Pn(t)==3?e.l():this.La(t)};B.La=function(t){try{if(t==this.g)e:{const u=Pn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Cu||this.g&&(this.h.h||this.g.fa()||Sp(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Zr(3):Zr(2)),jc(this);var n=this.g.aa();this.Y=n;t:if(wy(this)){var s=Sp(this.g);t="";var i=s.length,r=Pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ds(this),Nr(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,nS(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ua(a)){var l=a;break t}}l=null}if(n=l)_i(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,xu(this,n);else{this.i=!1,this.o=3,Ct(12),Ds(this),Nr(this);break e}}this.P?(Ey(this,u,o),Cu&&this.i&&u==3&&(hy(this.S,this.T,"tick",this.hb),this.T.start())):(_i(this.j,this.m,o,null),xu(this,o)),u==4&&Ds(this),this.i&&!this.I&&(u==4?Wy(this.l,this):(this.i=!1,Io(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ct(12)):(this.o=0,Ct(13)),Ds(this),Nr(this)}}}catch{}finally{}};function wy(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Ey(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=oS(t,n),i==Va){e==4&&(t.o=4,Ct(14),s=!1),_i(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Du){t.o=4,Ct(15),_i(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else _i(t.j,t.m,i,null),xu(t,i);wy(t)&&i!=Va&&i!=Du&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ct(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),hd(e),e.K=!0,Ct(11))):(_i(t.j,t.m,n,"[Invalid Chunked Response]"),Ds(t),Nr(t))}B.hb=function(){if(this.g){var t=Pn(this.g),e=this.g.fa();this.C<e.length&&(jc(this),Ey(this,t,e),this.i&&t!=4&&Io(this))}};function oS(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Va:(n=Number(e.substring(n,s)),isNaN(n)?Du:(s+=1,s+n>e.length?Va:(e=e.substr(s,n),t.C=s+n,e)))}B.cancel=function(){this.I=!0,Ds(this)};function Io(t){t.V=Date.now()+t.O,by(t,t.O)}function by(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Eo(_t(t.gb,t),e)}function jc(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}B.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(sS(this.j,this.A),this.K!=2&&(Zr(),Ct(17)),Ds(this),this.o=2,Nr(this)):by(this,this.V-t)};function Nr(t){t.l.G==0||t.I||Wy(t.l,t)}function Ds(t){jc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ed(t.T),dy(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function xu(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Mu(n.h,t))){if(!t.J&&Mu(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ha(n),Kc(n);else break e;ud(n),Ct(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Eo(_t(n.cb,n),6e3));if(1>=Ny(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ps(n,11)}else if((t.J||n.g==t)&&Ha(n),!Ua(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=s.h;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(rd(r,r.h),r.h=null))}if(s.D){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.za=_,Oe(s.F,s.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=zy(s,s.H?s.ka:null,s.V),o.J){Oy(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(jc(a),Io(a)),s.g=o}else jy(s);0<n.i.length&&zc(n)}else l[0]!="stop"&&l[0]!="close"||Ps(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ps(n,7):ld(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Zr(4)}catch{}}function aS(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Pc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function cS(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Pc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Ty(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Pc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=cS(t),s=aS(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var Iy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function $s(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof $s){this.h=e!==void 0?e:t.h,$a(this,t.j),this.s=t.s,this.g=t.g,ja(this,t.m),this.l=t.l,e=t.i;var n=new eo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Tp(this,n),this.o=t.o}else t&&(n=String(t).match(Iy))?(this.h=!!e,$a(this,n[1]||"",!0),this.s=br(n[2]||""),this.g=br(n[3]||"",!0),ja(this,n[4]),this.l=br(n[5]||"",!0),Tp(this,n[6]||"",!0),this.o=br(n[7]||"")):(this.h=!!e,this.i=new eo(null,this.h))}$s.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Tr(e,Ip,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Tr(e,Ip,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Tr(n,n.charAt(0)=="/"?dS:hS,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Tr(n,pS)),t.join("")};function $n(t){return new $s(t)}function $a(t,e,n){t.j=n?br(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ja(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Tp(t,e,n){e instanceof eo?(t.i=e,gS(t.i,t.h)):(n||(e=Tr(e,fS)),t.i=new eo(e,t.h))}function Oe(t,e,n){t.i.set(e,n)}function Hc(t){return Oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function br(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Tr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,uS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function uS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ip=/[#\/\?@]/g,hS=/[#\?:]/g,dS=/[#\?]/g,fS=/[#\?@]/g,pS=/#/g;function eo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ys(t){t.g||(t.g=new Map,t.h=0,t.i&&lS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}B=eo.prototype;B.add=function(t,e){ys(this),this.i=null,t=Ji(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Cy(t,e){ys(t),e=Ji(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Sy(t,e){return ys(t),e=Ji(t,e),t.g.has(e)}B.forEach=function(t,e){ys(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};B.oa=function(){ys(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};B.W=function(t){ys(this);let e=[];if(typeof t=="string")Sy(this,t)&&(e=e.concat(this.g.get(Ji(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};B.set=function(t,e){return ys(this),this.i=null,t=Ji(this,t),Sy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};B.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Ry(t,e,n){Cy(t,e),0<n.length&&(t.i=null,t.g.set(Ji(t,e),Kh(n)),t.h+=n.length)}B.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Ji(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function gS(t,e){e&&!t.j&&(ys(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Cy(this,s),Ry(this,i,n))},t)),t.j=e}var mS=class{constructor(e,n){this.h=e,this.g=n}};function Ay(t){this.l=t||_S,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ga&&Y.g.Ga()&&Y.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _S=10;function ky(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ny(t){return t.h?1:t.g?t.g.size:0}function Mu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function rd(t,e){t.g?t.g.add(e):t.h=e}function Oy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ay.prototype.cancel=function(){if(this.i=Dy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Dy(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Kh(t.i)}function od(){}od.prototype.stringify=function(t){return Y.JSON.stringify(t,void 0)};od.prototype.parse=function(t){return Y.JSON.parse(t,void 0)};function yS(){this.g=new od}function vS(t,e,n){const s=n||"";try{Ty(t,function(i,r){let o=i;vo(i)&&(o=Zh(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function wS(t,e){const n=new Uc;if(Y.Image){const s=new Image;s.onload=ta(sa,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ta(sa,n,s,"TestLoadImage: error",!1,e),s.onabort=ta(sa,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ta(sa,n,s,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function sa(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Co(t){this.l=t.ac||null,this.j=t.jb||!1}at(Co,nd);Co.prototype.g=function(){return new Wc(this.l,this.j)};Co.prototype.i=function(t){return function(){return t}}({});function Wc(t,e){st.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ad,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}at(Wc,st);var ad=0;B=Wc.prototype;B.open=function(t,e){if(this.readyState!=ad)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,to(this)};B.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Y).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};B.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,So(this)),this.readyState=ad};B.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,to(this)),this.g&&(this.readyState=3,to(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Py(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Py(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}B.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?So(this):to(this),this.readyState==3&&Py(this)}};B.Va=function(t){this.g&&(this.response=this.responseText=t,So(this))};B.Ua=function(t){this.g&&(this.response=t,So(this))};B.ga=function(){this.g&&So(this)};function So(t){t.readyState=4,t.l=null,t.j=null,t.A=null,to(t)}B.setRequestHeader=function(t,e){this.v.append(t,e)};B.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};B.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function to(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Wc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ES=Y.JSON.parse;function Le(t){st.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=xy,this.K=this.L=!1}at(Le,st);var xy="",bS=/^https?$/i,TS=["POST","PUT"];B=Le.prototype;B.Ka=function(t){this.L=t};B.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ou.g(),this.C=this.u?bp(this.u):bp(Ou),this.g.onreadystatechange=_t(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Cp(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=Y.FormData&&t instanceof Y.FormData,!(0<=Y_(TS,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Fy(this),0<this.B&&((this.K=IS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_t(this.qa,this)):this.A=td(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Cp(this,r)}};function IS(t){return Pi&&$C()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}B.qa=function(){typeof qh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ot(this,"timeout"),this.abort(8))};function Cp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,My(t),qc(t)}function My(t){t.D||(t.D=!0,ot(t,"complete"),ot(t,"error"))}B.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ot(this,"complete"),ot(this,"abort"),qc(this))};B.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),qc(this,!0)),Le.X.M.call(this)};B.Ha=function(){this.s||(this.F||this.v||this.l?Ly(this):this.fb())};B.fb=function(){Ly(this)};function Ly(t){if(t.h&&typeof qh<"u"&&(!t.C[1]||Pn(t)!=4||t.aa()!=2)){if(t.v&&Pn(t)==4)td(t.Ha,0,t);else if(ot(t,"readystatechange"),Pn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(Iy)[1]||null;if(!i&&Y.self&&Y.self.location){var r=Y.self.location.protocol;i=r.substr(0,r.length-1)}s=!bS.test(i?i.toLowerCase():"")}n=s}if(n)ot(t,"complete"),ot(t,"success");else{t.m=6;try{var o=2<Pn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",My(t)}}finally{qc(t)}}}}function qc(t,e){if(t.g){Fy(t);const n=t.g,s=t.C[0]?Fa:null;t.g=null,t.C=null,e||ot(t,"ready");try{n.onreadystatechange=s}catch{}}}function Fy(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}function Pn(t){return t.g?t.g.readyState:0}B.aa=function(){try{return 2<Pn(this)?this.g.status:-1}catch{return-1}};B.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};B.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ES(e)}};function Sp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case xy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}B.Ea=function(){return this.m};B.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Uy(t){let e="";return Gh(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function cd(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Uy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Oe(t,e,n))}function hr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function By(t){this.Ca=0,this.i=[],this.j=new Uc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=hr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=hr("baseRetryDelayMs",5e3,t),this.bb=hr("retryDelaySeedMs",1e4,t),this.$a=hr("forwardChannelMaxRetries",2,t),this.ta=hr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ay(t&&t.concurrentRequestLimit),this.Fa=new yS,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}B=By.prototype;B.ma=8;B.G=1;function ld(t){if(Vy(t),t.G==3){var e=t.U++,n=$n(t.F);Oe(n,"SID",t.I),Oe(n,"RID",e),Oe(n,"TYPE","terminate"),Ro(t,n),e=new To(t,t.j,e,void 0),e.K=2,e.v=Hc($n(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon&&(n=Y.navigator.sendBeacon(e.v.toString(),"")),!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=Gy(e.l,null),e.g.da(e.v)),e.F=Date.now(),Io(e)}Ky(t)}function Kc(t){t.g&&(hd(t),t.g.cancel(),t.g=null)}function Vy(t){Kc(t),t.u&&(Y.clearTimeout(t.u),t.u=null),Ha(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function zc(t){ky(t.h)||t.m||(t.m=!0,cy(t.Ja,t),t.C=0)}function CS(t,e){return Ny(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Eo(_t(t.Ja,t,e),qy(t,t.C)),t.C++,!0)}B.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new To(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=ey(r),ty(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=$y(this,i,e),n=$n(this.F),Oe(n,"RID",t),Oe(n,"CVER",22),this.D&&Oe(n,"X-HTTP-Session-Id",this.D),Ro(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Uy(r)))+"&"+e:this.o&&cd(n,this.o,r)),rd(this.h,i),this.Ya&&Oe(n,"TYPE","init"),this.O?(Oe(n,"$req",e),Oe(n,"SID","null"),i.Z=!0,Pu(i,n,null)):Pu(i,n,e),this.G=2}}else this.G==3&&(t?Rp(this,t):this.i.length==0||ky(this.h)||Rp(this))};function Rp(t,e){var n;e?n=e.m:n=t.U++;const s=$n(t.F);Oe(s,"SID",t.I),Oe(s,"RID",n),Oe(s,"AID",t.T),Ro(t,s),t.o&&t.s&&cd(s,t.o,t.s),n=new To(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=$y(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),rd(t.h,n),Pu(n,s,e)}function Ro(t,e){t.ia&&Gh(t.ia,function(n,s){Oe(e,s,n)}),t.l&&Ty({},function(n,s){Oe(e,s,n)})}function $y(t,e,n){n=Math.min(t.i.length,n);var s=t.l?_t(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{vS(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function jy(t){t.g||t.u||(t.Z=1,cy(t.Ia,t),t.A=0)}function ud(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Eo(_t(t.Ia,t),qy(t,t.A)),t.A++,!0)}B.Ia=function(){if(this.u=null,Hy(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Eo(_t(this.eb,this),t)}};B.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ct(10),Kc(this),Hy(this))};function hd(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function Hy(t){t.g=new To(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=$n(t.sa);Oe(e,"RID","rpc"),Oe(e,"SID",t.I),Oe(e,"CI",t.L?"0":"1"),Oe(e,"AID",t.T),Oe(e,"TYPE","xmlhttp"),Ro(t,e),t.o&&t.s&&cd(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Hc($n(e)),n.s=null,n.P=!0,vy(n,t)}B.cb=function(){this.v!=null&&(this.v=null,Kc(this),ud(this),Ct(19))};function Ha(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function Wy(t,e){var n=null;if(t.g==e){Ha(t),hd(t),t.g=null;var s=2}else if(Mu(t.h,e))n=e.D,Oy(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Bc(),ot(s,new gy(s,n)),zc(t)}else jy(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&CS(t,e)||s==2&&ud(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ps(t,5);break;case 4:Ps(t,10);break;case 3:Ps(t,6);break;default:Ps(t,2)}}}function qy(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ps(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=_t(t.kb,t);n||(n=new $s("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||$a(n,"https"),Hc(n)),wS(n.toString(),s)}else Ct(2);t.G=0,t.l&&t.l.va(e),Ky(t),Vy(t)}B.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function Ky(t){if(t.G=0,t.la=[],t.l){const e=Dy(t.h);(e.length!=0||t.i.length!=0)&&(mp(t.la,e),mp(t.la,t.i),t.h.i.length=0,Kh(t.i),t.i.length=0),t.l.ua()}}function zy(t,e,n){var s=n instanceof $s?$n(n):new $s(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),ja(s,s.m);else{var i=Y.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new $s(null,void 0);s&&$a(r,s),e&&(r.g=e),i&&ja(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Oe(s,n,e),Oe(s,"VER",t.ma),Ro(t,s),s}function Gy(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Le(new Co({jb:!0})):new Le(t.ra),e.Ka(t.H),e}function Qy(){}B=Qy.prototype;B.xa=function(){};B.wa=function(){};B.va=function(){};B.ua=function(){};B.Ra=function(){};function Wa(){if(Pi&&!(10<=Number(jC)))throw Error("Environmental error: no available transport.")}Wa.prototype.g=function(t,e){return new Vt(t,e)};function Vt(t,e){st.call(this),this.g=new By(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ua(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ua(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Zi(this)}at(Vt,st);Vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ct(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=zy(t,null,t.V),zc(t)};Vt.prototype.close=function(){ld(this.g)};Vt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Zh(t),t=n);e.i.push(new mS(e.ab++,t)),e.G==3&&zc(e)};Vt.prototype.M=function(){this.g.l=null,delete this.j,ld(this.g),delete this.g,Vt.X.M.call(this)};function Yy(t){sd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}at(Yy,sd);function Xy(){id.call(this),this.status=1}at(Xy,id);function Zi(t){this.g=t}at(Zi,Qy);Zi.prototype.xa=function(){ot(this.g,"a")};Zi.prototype.wa=function(t){ot(this.g,new Yy(t))};Zi.prototype.va=function(t){ot(this.g,new Xy)};Zi.prototype.ua=function(){ot(this.g,"b")};Wa.prototype.createWebChannel=Wa.prototype.g;Vt.prototype.send=Vt.prototype.u;Vt.prototype.open=Vt.prototype.m;Vt.prototype.close=Vt.prototype.close;Vc.NO_ERROR=0;Vc.TIMEOUT=8;Vc.HTTP_ERROR=6;my.COMPLETE="complete";_y.EventType=bo;bo.OPEN="a";bo.CLOSE="b";bo.ERROR="c";bo.MESSAGE="d";st.prototype.listen=st.prototype.N;Le.prototype.listenOnce=Le.prototype.O;Le.prototype.getLastError=Le.prototype.Oa;Le.prototype.getLastErrorCode=Le.prototype.Ea;Le.prototype.getStatus=Le.prototype.aa;Le.prototype.getResponseJson=Le.prototype.Sa;Le.prototype.getResponseText=Le.prototype.fa;Le.prototype.send=Le.prototype.da;Le.prototype.setWithCredentials=Le.prototype.Ka;var SS=function(){return new Wa},RS=function(){return Bc()},Bl=Vc,AS=my,kS=si,Ap={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},NS=Co,ia=_y,OS=Le;const kp="@firebase/firestore";/**
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
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
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
 */let er="9.17.1";/**
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
 */const zs=new yo("@firebase/firestore");function Np(){return zs.logLevel}function V(t,...e){if(zs.logLevel<=fe.DEBUG){const n=e.map(dd);zs.debug(`Firestore (${er}): ${t}`,...n)}}function jn(t,...e){if(zs.logLevel<=fe.ERROR){const n=e.map(dd);zs.error(`Firestore (${er}): ${t}`,...n)}}function Lu(t,...e){if(zs.logLevel<=fe.WARN){const n=e.map(dd);zs.warn(`Firestore (${er}): ${t}`,...n)}}function dd(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${er}) INTERNAL ASSERTION FAILED: `+t;throw jn(e),new Error(e)}function Se(t,e){t||Q()}function ee(t,e){return t}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends An{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Jy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class DS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class PS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class xS{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Un,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Un)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Se(typeof s.accessToken=="string"),new Jy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new ut(e)}}class MS{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Se(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class LS{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new MS(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class FS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class US{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.A=n.token,new FS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function BS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Zy{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=BS(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function me(t,e){return t<e?-1:t>e?1:0}function xi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class We{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new We(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new We(0,0))}static max(){return new Z(new We(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class no{constructor(e,n,s){n===void 0?n=0:n>e.length&&Q(),s===void 0?s=e.length-n:s>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return no.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof no?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends no{construct(e,n,s){return new De(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new q(S.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const VS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends no{construct(e,n,s){return new gt(e,n,s)}static isValidIdentifier(e){return VS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new q(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new q(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new q(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new q(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(De.fromString(e))}static fromName(e){return new K(De.fromString(e).popFirst(5))}static empty(){return new K(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new De(e.slice()))}}function $S(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(s===1e9?new We(n+1,0):new We(n,s));return new ds(i,K.empty(),e)}function jS(t){return new ds(t.readTime,t.key,-1)}class ds{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ds(Z.min(),K.empty(),-1)}static max(){return new ds(Z.max(),K.empty(),-1)}}function HS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
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
 */const WS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ao(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==WS)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,s)=>{n(e)})}static reject(e){return new R((n,s)=>{s(e)})}static waitFor(e){return new R((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=R.resolve(!1);for(const s of e)n=n.next(i=>i?R.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new R((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new R((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function ko(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class fd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}fd.at=-1;/**
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
 */class KS{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class so{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new so("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof so&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Op(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ii(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ev(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function Gc(t){return t==null}function qa(t){return t===0&&1/t==-1/0}function zS(t){return typeof t=="number"&&Number.isInteger(t)&&!qa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class Et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Et(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const GS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fs(t){if(Se(!!t),typeof t=="string"){let e=0;const n=GS.exec(t);if(Se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mi(t){return typeof t=="string"?Et.fromBase64String(t):Et.fromUint8Array(t)}/**
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
 */function tv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function nv(t){const e=t.mapValue.fields.__previous_value__;return tv(e)?nv(e):e}function io(t){const e=fs(t.mapValue.fields.__local_write_time__.timestampValue);return new We(e.seconds,e.nanos)}/**
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
 */const ra={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Gs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?tv(t)?4:QS(t)?9007199254740991:10:Q()}function Cn(t,e){if(t===e)return!0;const n=Gs(t);if(n!==Gs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return io(t).isEqual(io(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=fs(s.timestampValue),o=fs(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Mi(s.bytesValue).isEqual(Mi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return He(s.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return He(s.integerValue)===He(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=He(s.doubleValue),o=He(i.doubleValue);return r===o?qa(r)===qa(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return xi(t.arrayValue.values||[],e.arrayValue.values||[],Cn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Op(r)!==Op(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Cn(r[a],o[a])))return!1;return!0}(t,e);default:return Q()}}function ro(t,e){return(t.values||[]).find(n=>Cn(n,e))!==void 0}function Li(t,e){if(t===e)return 0;const n=Gs(t),s=Gs(e);if(n!==s)return me(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=He(i.integerValue||i.doubleValue),a=He(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Dp(t.timestampValue,e.timestampValue);case 4:return Dp(io(t),io(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Mi(i),a=Mi(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=me(o[c],a[c]);if(l!==0)return l}return me(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=me(He(i.latitude),He(r.latitude));return o!==0?o:me(He(i.longitude),He(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Li(o[c],a[c]);if(l)return l}return me(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===ra.mapValue&&r===ra.mapValue)return 0;if(i===ra.mapValue)return 1;if(r===ra.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=me(a[u],l[u]);if(h!==0)return h;const d=Li(o[a[u]],c[l[u]]);if(d!==0)return d}return me(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Q()}}function Dp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=fs(t),s=fs(e),i=me(n.seconds,s.seconds);return i!==0?i:me(n.nanos,s.nanos)}function Fi(t){return Fu(t)}function Fu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=fs(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Mi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,K.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Fu(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Fu(s.fields[a])}`;return r+"}"}(t.mapValue):Q();var e,n}function Uu(t){return!!t&&"integerValue"in t}function pd(t){return!!t&&"arrayValue"in t}function Pp(t){return!!t&&"nullValue"in t}function xp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wa(t){return!!t&&"mapValue"in t}function Or(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ii(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Or(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Or(t.arrayValue.values[n]);return e}return Object.assign({},t)}function QS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ka{constructor(e,n){this.position=e,this.inclusive=n}}function Mp(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=K.comparator(K.fromName(o.referenceValue),n.key):s=Li(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Lp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class sv{}class ze extends sv{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new XS(e,n,s):n==="array-contains"?new eR(e,s):n==="in"?new tR(e,s):n==="not-in"?new nR(e,s):n==="array-contains-any"?new sR(e,s):new ze(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new JS(e,s):new ZS(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Li(n,this.value)):n!==null&&Gs(this.value)===Gs(n)&&this.matchesComparison(Li(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Sn extends sv{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Sn(e,n)}matches(e){return iv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function iv(t){return t.op==="and"}function rv(t){return YS(t)&&iv(t)}function YS(t){for(const e of t.filters)if(e instanceof Sn)return!1;return!0}function Bu(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+Fi(t.value);if(rv(t))return t.filters.map(e=>Bu(e)).join(",");{const e=t.filters.map(n=>Bu(n)).join(",");return`${t.op}(${e})`}}function ov(t,e){return t instanceof ze?function(n,s){return s instanceof ze&&n.op===s.op&&n.field.isEqual(s.field)&&Cn(n.value,s.value)}(t,e):t instanceof Sn?function(n,s){return s instanceof Sn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&ov(r,s.filters[o]),!0):!1}(t,e):void Q()}function av(t){return t instanceof ze?function(e){return`${e.field.canonicalString()} ${e.op} ${Fi(e.value)}`}(t):t instanceof Sn?function(e){return e.op.toString()+" {"+e.getFilters().map(av).join(" ,")+"}"}(t):"Filter"}class XS extends ze{constructor(e,n,s){super(e,n,s),this.key=K.fromName(s.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class JS extends ze{constructor(e,n){super(e,"in",n),this.keys=cv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ZS extends ze{constructor(e,n){super(e,"not-in",n),this.keys=cv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>K.fromName(s.referenceValue))}class eR extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pd(n)&&ro(n.arrayValue,this.value)}}class tR extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ro(this.value.arrayValue,n)}}class nR extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(ro(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ro(this.value.arrayValue,n)}}class sR extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ro(this.value.arrayValue,s))}}/**
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
 */class Dr{constructor(e,n="asc"){this.field=e,this.dir=n}}function iR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ye{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new Ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oa(this.root,e,this.comparator,!1)}getReverseIterator(){return new oa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oa(this.root,e,this.comparator,!0)}}class oa{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??it.RED,this.left=i??it.EMPTY,this.right=r??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new it(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return it.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,e,n,s,i){return this}insert(t,e,n){return new it(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ge{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fp(this.data.getIterator())}getIteratorFrom(e){return new Fp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class Fp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Lt{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new Ge(gt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!wa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Or(n)}setAll(e){let n=gt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Or(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());wa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];wa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){ii(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new At(Or(this.value))}}function lv(t){const e=[];return ii(t.fields,(n,s)=>{const i=new gt([n]);if(wa(s)){const r=lv(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Lt(e)}/**
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
 */class ht{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ht(e,0,Z.min(),Z.min(),Z.min(),At.empty(),0)}static newFoundDocument(e,n,s,i){return new ht(e,1,n,Z.min(),s,i,0)}static newNoDocument(e,n){return new ht(e,2,n,Z.min(),Z.min(),At.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,Z.min(),Z.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class rR{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Up(t,e=null,n=[],s=[],i=null,r=null,o=null){return new rR(t,e,n,s,i,r,o)}function gd(t){const e=ee(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Bu(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Gc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Fi(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Fi(s)).join(",")),e.ft=n}return e.ft}function md(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!iR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ov(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Lp(t.startAt,e.startAt)&&Lp(t.endAt,e.endAt)}function Vu(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Qc{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function oR(t,e,n,s,i,r,o,a){return new Qc(t,e,n,s,i,r,o,a)}function Yc(t){return new Qc(t)}function Bp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function aR(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function cR(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function lR(t){return t.collectionGroup!==null}function Ii(t){const e=ee(t);if(e.dt===null){e.dt=[];const n=cR(e),s=aR(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Dr(n)),e.dt.push(new Dr(gt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Dr(gt.keyField(),r))}}}return e.dt}function Hn(t){const e=ee(t);if(!e._t)if(e.limitType==="F")e._t=Up(e.path,e.collectionGroup,Ii(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Ii(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Dr(r.field,o))}const s=e.endAt?new Ka(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ka(e.startAt.position,e.startAt.inclusive):null;e._t=Up(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e._t}function $u(t,e,n){return new Qc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xc(t,e){return md(Hn(t),Hn(e))&&t.limitType===e.limitType}function uv(t){return`${gd(Hn(t))}|lt:${t.limitType}`}function ju(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>av(s)).join(", ")}]`),Gc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Fi(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Fi(s)).join(",")),`Target(${n})`}(Hn(t))}; limitType=${t.limitType})`}function Jc(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):K.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Ii(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Mp(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Ii(n),s)||n.endAt&&!function(i,r,o){const a=Mp(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Ii(n),s))}(t,e)}function uR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function hv(t){return(e,n)=>{let s=!1;for(const i of Ii(t)){const r=hR(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function hR(t,e,n){const s=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Li(a,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Q()}}/**
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
 */function dv(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qa(e)?"-0":e}}function fv(t){return{integerValue:""+t}}function dR(t,e){return zS(e)?fv(e):dv(t,e)}/**
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
 */class Zc{constructor(){this._=void 0}}function fR(t,e,n){return t instanceof za?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof oo?gv(t,e):t instanceof ao?mv(t,e):function(s,i){const r=pv(s,i),o=Vp(r)+Vp(s.gt);return Uu(r)&&Uu(s.gt)?fv(o):dv(s.yt,o)}(t,e)}function pR(t,e,n){return t instanceof oo?gv(t,e):t instanceof ao?mv(t,e):n}function pv(t,e){return t instanceof Ga?Uu(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class za extends Zc{}class oo extends Zc{constructor(e){super(),this.elements=e}}function gv(t,e){const n=_v(e);for(const s of t.elements)n.some(i=>Cn(i,s))||n.push(s);return{arrayValue:{values:n}}}class ao extends Zc{constructor(e){super(),this.elements=e}}function mv(t,e){let n=_v(e);for(const s of t.elements)n=n.filter(i=>!Cn(i,s));return{arrayValue:{values:n}}}class Ga extends Zc{constructor(e,n){super(),this.yt=e,this.gt=n}}function Vp(t){return He(t.integerValue||t.doubleValue)}function _v(t){return pd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function gR(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof oo&&s instanceof oo||n instanceof ao&&s instanceof ao?xi(n.elements,s.elements,Cn):n instanceof Ga&&s instanceof Ga?Cn(n.gt,s.gt):n instanceof za&&s instanceof za}(t.transform,e.transform)}class mR{constructor(e,n){this.version=e,this.transformResults=n}}class ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ea(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class el{}function yv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _d(t.key,ln.none()):new No(t.key,t.data,ln.none());{const n=t.data,s=At.empty();let i=new Ge(gt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new vs(t.key,s,new Lt(i.toArray()),ln.none())}}function _R(t,e,n){t instanceof No?function(s,i,r){const o=s.value.clone(),a=jp(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof vs?function(s,i,r){if(!Ea(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=jp(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(vv(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Pr(t,e,n,s){return t instanceof No?function(i,r,o,a){if(!Ea(i.precondition,r))return o;const c=i.value.clone(),l=Hp(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof vs?function(i,r,o,a){if(!Ea(i.precondition,r))return o;const c=Hp(i.fieldTransforms,a,r),l=r.data;return l.setAll(vv(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return Ea(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function yR(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=pv(s.transform,i||null);r!=null&&(n===null&&(n=At.empty()),n.set(s.field,r))}return n||null}function $p(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&xi(n,s,(i,r)=>gR(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class No extends el{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class vs extends el{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function vv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function jp(t,e,n){const s=new Map;Se(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,pR(o,a,n[i]))}return s}function Hp(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,fR(r,o,e))}return s}class _d extends el{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vR extends el{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class wR{constructor(e){this.count=e}}/**
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
 */var je,ae;function ER(t){switch(t){default:return Q();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function wv(t){if(t===void 0)return jn("GRPC error has no .code"),S.UNKNOWN;switch(t){case je.OK:return S.OK;case je.CANCELLED:return S.CANCELLED;case je.UNKNOWN:return S.UNKNOWN;case je.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case je.INTERNAL:return S.INTERNAL;case je.UNAVAILABLE:return S.UNAVAILABLE;case je.UNAUTHENTICATED:return S.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case je.NOT_FOUND:return S.NOT_FOUND;case je.ALREADY_EXISTS:return S.ALREADY_EXISTS;case je.PERMISSION_DENIED:return S.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case je.ABORTED:return S.ABORTED;case je.OUT_OF_RANGE:return S.OUT_OF_RANGE;case je.UNIMPLEMENTED:return S.UNIMPLEMENTED;case je.DATA_LOSS:return S.DATA_LOSS;default:return Q()}}(ae=je||(je={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class tr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ii(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return ev(this.inner)}size(){return this.innerSize}}/**
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
 */const bR=new Ye(K.comparator);function Wn(){return bR}const Ev=new Ye(K.comparator);function Ir(...t){let e=Ev;for(const n of t)e=e.insert(n.key,n);return e}function bv(t){let e=Ev;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function xs(){return xr()}function Tv(){return xr()}function xr(){return new tr(t=>t.toString(),(t,e)=>t.isEqual(e))}const TR=new Ye(K.comparator),IR=new Ge(K.comparator);function ie(...t){let e=IR;for(const n of t)e=e.add(n);return e}const CR=new Ge(me);function Iv(){return CR}/**
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
 */class tl{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Oo.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new tl(Z.min(),i,Iv(),Wn(),ie())}}class Oo{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Oo(s,n,ie(),ie(),ie())}}/**
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
 */class ba{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class Cv{constructor(e,n){this.targetId=e,this.Et=n}}class Sv{constructor(e,n,s=Et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Wp{constructor(){this.At=0,this.Rt=Kp(),this.bt=Et.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=ie(),n=ie(),s=ie();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Q()}}),new Oo(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=Kp()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class SR{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Wn(),this.qt=qp(),this.Ut=new Ge(me)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,s=e.Et.count,i=this.Yt(n);if(i){const r=i.target;if(Vu(r))if(s===0){const o=new K(r.path);this.Qt(n,o,ht.newNoDocument(o,Z.min()))}else Se(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Vu(a.target)){const c=new K(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,ht.newNoDocument(c,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=ie();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new tl(e,n,this.Ut,this.Lt,s);return this.Lt=Wn(),this.qt=qp(),this.Ut=new Ge(me),i}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Wp,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ge(me),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Wp),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function qp(){return new Ye(K.comparator)}function Kp(){return new Ye(K.comparator)}/**
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
 */const RR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),AR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),kR=(()=>({and:"AND",or:"OR"}))();class NR{constructor(e,n){this.databaseId=e,this.wt=n}}function Qa(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rv(t,e){return t.wt?e.toBase64():e.toUint8Array()}function OR(t,e){return Qa(t,e.toTimestamp())}function wn(t){return Se(!!t),Z.fromTimestamp(function(e){const n=fs(e);return new We(n.seconds,n.nanos)}(t))}function yd(t,e){return function(n){return new De(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Av(t){const e=De.fromString(t);return Se(Dv(e)),e}function Hu(t,e){return yd(t.databaseId,e.path)}function Vl(t,e){const n=Av(e);if(n.get(1)!==t.databaseId.projectId)throw new q(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(kv(n))}function Wu(t,e){return yd(t.databaseId,e)}function DR(t){const e=Av(t);return e.length===4?De.emptyPath():kv(e)}function qu(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kv(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function zp(t,e,n){return{name:Hu(t,e),fields:n.value.mapValue.fields}}function PR(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.wt?(Se(l===void 0||typeof l=="string"),Et.fromBase64String(l||"")):(Se(l===void 0||l instanceof Uint8Array),Et.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?S.UNKNOWN:wv(c.code);return new q(l,c.message||"")}(o);n=new Sv(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Vl(t,s.document.name),r=wn(s.document.updateTime),o=s.document.createTime?wn(s.document.createTime):Z.min(),a=new At({mapValue:{fields:s.document.fields}}),c=ht.newFoundDocument(i,r,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new ba(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Vl(t,s.document),r=s.readTime?wn(s.readTime):Z.min(),o=ht.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ba([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Vl(t,s.document),r=s.removedTargetIds||[];n=new ba([],r,i,null)}else{if(!("filter"in e))return Q();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new wR(i),o=s.targetId;n=new Cv(o,r)}}return n}function xR(t,e){let n;if(e instanceof No)n={update:zp(t,e.key,e.value)};else if(e instanceof _d)n={delete:Hu(t,e.key)};else if(e instanceof vs)n={update:zp(t,e.key,e.data),updateMask:HR(e.fieldMask)};else{if(!(e instanceof vR))return Q();n={verify:Hu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof za)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof oo)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ao)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ga)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw Q()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:OR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q()}(t,e.precondition)),n}function MR(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?wn(s.updateTime):wn(i);return r.isEqual(Z.min())&&(r=wn(i)),new mR(r,s.transformResults||[])}(n,e))):[]}function LR(t,e){return{documents:[Wu(t,e.path)]}}function FR(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Wu(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Wu(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return Ov(Sn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:pi(u.field),direction:VR(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,l){return c.wt||Gc(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function UR(t){let e=DR(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Se(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=Nv(u);return h instanceof Sn&&rv(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Dr(gi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Gc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Ka(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Ka(d,h)}(n.endAt)),oR(e,i,o,r,a,"F",c,l)}function BR(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Q()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Nv(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=gi(e.unaryFilter.field);return ze.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=gi(e.unaryFilter.field);return ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=gi(e.unaryFilter.field);return ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=gi(e.unaryFilter.field);return ze.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(e){return ze.create(gi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Sn.create(e.compositeFilter.filters.map(n=>Nv(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Q()}}(e.compositeFilter.op))}(t):Q()}function VR(t){return RR[t]}function $R(t){return AR[t]}function jR(t){return kR[t]}function pi(t){return{fieldPath:t.canonicalString()}}function gi(t){return gt.fromServerFormat(t.fieldPath)}function Ov(t){return t instanceof ze?function(e){if(e.op==="=="){if(xp(e.value))return{unaryFilter:{field:pi(e.field),op:"IS_NAN"}};if(Pp(e.value))return{unaryFilter:{field:pi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(xp(e.value))return{unaryFilter:{field:pi(e.field),op:"IS_NOT_NAN"}};if(Pp(e.value))return{unaryFilter:{field:pi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pi(e.field),op:$R(e.op),value:e.value}}}(t):t instanceof Sn?function(e){const n=e.getFilters().map(s=>Ov(s));return n.length===1?n[0]:{compositeFilter:{op:jR(e.op),filters:n}}}(t):Q()}function HR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Dv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class WR{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&_R(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Pr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Pr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Tv();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=yv(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(Z.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&xi(this.mutations,e.mutations,(n,s)=>$p(n,s))&&xi(this.baseMutations,e.baseMutations,(n,s)=>$p(n,s))}}class vd{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Se(e.mutations.length===s.length);let i=TR;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new vd(e,n,s,i)}}/**
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
 */class qR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class js{constructor(e,n,s,i,r=Z.min(),o=Z.min(),a=Et.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new js(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new js(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new js(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class KR{constructor(e){this.ie=e}}function zR(t){const e=UR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$u(e,e.limit,"L"):e}/**
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
 */class GR{constructor(){this.Je=new QR}addToCollectionParentIndex(e,n){return this.Je.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(ds.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(ds.min())}updateCollectionGroup(e,n,s){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class QR{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Ge(De.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Ge(De.comparator)).toArray()}}/**
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
 */class Ui{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ui(0)}static vn(){return new Ui(-1)}}/**
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
 */class YR{constructor(){this.changes=new tr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?R.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class XR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class JR{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Pr(s.mutation,i,Lt.empty(),We.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ie()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ie()){const i=xs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Ir();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=xs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ie()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Wn();const o=xr(),a=xr();return n.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof vs)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Pr(u.mutation,l,u.mutation.getFieldMask(),We.now())):o.set(l.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new XR(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=xr();let i=new Ye((o,a)=>o-a),r=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Lt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||ie()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Tv();u.forEach(d=>{if(!r.has(d)){const p=yv(n.get(d),s.get(d));p!==null&&h.set(d,p),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return R.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return K.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):lR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):R.resolve(xs());let a=-1,c=r;return o.next(l=>R.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,ie())).next(u=>({batchId:a,changes:bv(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(s=>{let i=Ir();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Ir();return this.indexManager.getCollectionParents(e,i).next(o=>R.forEach(o,a=>{const c=function(l,u){return new Qc(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,ht.newInvalidDocument(l)))});let o=Ir();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Pr(l.mutation,c,Lt.empty(),We.now()),Jc(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class ZR{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return R.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:wn(s.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:zR(s.bundledQuery),readTime:wn(s.readTime)}}(n)),R.resolve()}}/**
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
 */class eA{constructor(){this.overlays=new Ye(K.comparator),this.es=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const s=xs();return R.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.oe(e,n,r)}),R.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),R.resolve()}getOverlaysForCollection(e,n,s){const i=xs(),r=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return R.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Ye((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=xs(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=xs(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return R.resolve(a)}oe(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new qR(n,s));let r=this.es.get(n);r===void 0&&(r=ie(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
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
 */class wd{constructor(){this.ns=new Ge(et.ss),this.rs=new Ge(et.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new et(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new et(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new K(new De([])),s=new et(n,e),i=new et(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new K(new De([])),s=new et(n,e),i=new et(n,e+1);let r=ie();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new et(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class et{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return K.comparator(e.key,n.key)||me(e._s,n._s)}static os(e,n){return me(e._s,n._s)||K.comparator(e.key,n.key)}}/**
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
 */class tA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ge(et.ss)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new WR(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new et(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return R.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new et(n,0),i=new et(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),R.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ge(me);return n.forEach(i=>{const r=new et(i,0),o=new et(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),R.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;K.isDocumentKey(r)||(r=r.child(""));const o=new et(new K(r),0);let a=new Ge(me);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c._s)),!0)},o),R.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Se(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return R.forEach(n.mutations,i=>{const r=new et(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new et(n,0),i=this.gs.firstAfterOrEqual(s);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class nA{constructor(e){this.Es=e,this.docs=new Ye(K.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return R.resolve(s?s.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let s=Wn();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():ht.newInvalidDocument(i))}),R.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Wn();const o=n.path,a=new K(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||HS(jS(u),s)<=0||(i.has(u.key)||Jc(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return R.resolve(r)}getAllFromCollectionGroup(e,n,s,i){Q()}As(e,n){return R.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new sA(this)}getSize(e){return R.resolve(this.size)}}class sA extends YR{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),R.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class iA{constructor(e){this.persistence=e,this.Rs=new tr(n=>gd(n),md),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.bs=0,this.Ps=new wd,this.targetCount=0,this.vs=Ui.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),R.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Ui(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Dn(n),R.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),R.waitFor(r).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return R.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),R.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),R.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return R.resolve(s)}containsKey(e,n){return R.resolve(this.Ps.containsKey(n))}}/**
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
 */class rA{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new fd(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new iA(this),this.indexManager=new GR,this.remoteDocumentCache=function(s){return new nA(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new KR(n),this.Ns=new ZR(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new tA(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){V("MemoryPersistence","Starting transaction:",e);const i=new oA(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return R.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class oA extends qS{constructor(e){super(),this.currentSequenceNumber=e}}class Ed{constructor(e){this.persistence=e,this.Fs=new wd,this.$s=null}static Bs(e){return new Ed(e)}get Ls(){if(this.$s)return this.$s;throw Q()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),R.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),R.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Ls,s=>{const i=K.fromPath(s);return this.qs(e,i).next(r=>{r||n.removeEntry(i,Z.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return R.or([()=>R.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class bd{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=ie(),i=ie();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new bd(e,n.fromCache,s,i)}}/**
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
 */class aA{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(Bp(n))return R.resolve(null);let s=Hn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=$u(n,null,"F"),s=Hn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=ie(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,$u(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,s,i){return Bp(n)||i.isEqual(Z.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(Np()<=fe.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ju(n)),this.Bi(e,o,n,$S(i,-1)))})}Fi(e,n){let s=new Ge(hv(e));return n.forEach((i,r)=>{Jc(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return Np()<=fe.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",ju(n)),this.Ni.getDocumentsMatchingQuery(e,n,ds.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class cA{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new Ye(me),this.Ui=new tr(r=>gd(r),md),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JR(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function lA(t,e,n,s){return new cA(t,e,n,s)}async function Pv(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=ie();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function uA(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=R.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(g=>{const _=c.docVersions.get(p);Se(_!==null),g.version.compareTo(_)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ie();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function xv(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function hA(t,e){const n=ee(t),s=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(r,u.addedDocuments,h)));let p=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Et.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),i=i.insert(h,p),function(g,_,v){return g.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(d,p,u)&&a.push(n.Cs.updateTargetData(r,p))});let c=Wn(),l=ie();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(dA(r,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(Z.min())){const u=n.Cs.getLastRemoteSnapshotVersion(r).next(h=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return R.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.qi=i,r))}function dA(t,e,n){let s=ie(),i=ie();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Wn();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(Z.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:i}})}function fA(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function pA(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,R.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new js(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.qi.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function Ku(t,e,n){const s=ee(t),i=s.qi.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ko(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(i.target)}function Gp(t,e,n){const s=ee(t);let i=Z.min(),r=ie();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ee(a),h=u.Ui.get(l);return h!==void 0?R.resolve(u.qi.get(h)):u.Cs.getTargetData(c,l)}(s,o,Hn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?r:ie())).next(a=>(gA(s,uR(e),a),{documents:a,Hi:r})))}function gA(t,e,n){let s=t.Ki.get(e)||Z.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class Qp{constructor(){this.activeTargetIds=Iv()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mA{constructor(){this.Lr=new Qp,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Qp,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class _A{Ur(e){}shutdown(){}}/**
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
 */class Yp{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const yA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class vA{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class wA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);V("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(c=>(V("RestConnection","Received: ",c),c),c=>{throw Lu("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+er,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=yA[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new OS;a.setWithCredentials(!0),a.listenOnce(AS.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Bl.NO_ERROR:const l=a.getResponseJson();V("Connection","XHR received:",JSON.stringify(l)),r(l);break;case Bl.TIMEOUT:V("Connection",'RPC "'+e+'" timed out'),o(new q(S.DEADLINE_EXCEEDED,"Request time out"));break;case Bl.HTTP_ERROR:const u=a.getStatus();if(V("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(g){const _=g.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(_)>=0?_:S.UNKNOWN}(d.status);o(new q(p,d.message))}else o(new q(S.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new q(S.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{V("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=SS(),o=RS(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new NS({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=i.join("");V("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let u=!1,h=!1;const d=new vA({Hr:g=>{h?V("Connection","Not sending because WebChannel is closed:",g):(u||(V("Connection","Opening WebChannel transport."),l.open(),u=!0),V("Connection","WebChannel sending:",g),l.send(g))},Jr:()=>l.close()}),p=(g,_,v)=>{g.listen(_,b=>{try{v(b)}catch(A){setTimeout(()=>{throw A},0)}})};return p(l,ia.EventType.OPEN,()=>{h||V("Connection","WebChannel transport opened.")}),p(l,ia.EventType.CLOSE,()=>{h||(h=!0,V("Connection","WebChannel transport closed"),d.io())}),p(l,ia.EventType.ERROR,g=>{h||(h=!0,Lu("Connection","WebChannel transport errored:",g),d.io(new q(S.UNAVAILABLE,"The operation could not be completed")))}),p(l,ia.EventType.MESSAGE,g=>{var _;if(!h){const v=g.data[0];Se(!!v);const b=v,A=b.error||((_=b[0])===null||_===void 0?void 0:_.error);if(A){V("Connection","WebChannel received error:",A);const I=A.status;let O=function(re){const ge=je[re];if(ge!==void 0)return wv(ge)}(I),z=A.message;O===void 0&&(O=S.INTERNAL,z="Unknown error status: "+I+" with message "+A.message),h=!0,d.io(new q(O,z)),l.close()}else V("Connection","WebChannel received:",v),d.ro(v)}}),p(o,kS.STAT_EVENT,g=>{g.stat===Ap.PROXY?V("Connection","Detected buffering proxy"):g.stat===Ap.NOPROXY&&V("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function $l(){return typeof document<"u"?document:null}/**
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
 */function nl(t){return new NR(t,!0)}class Mv{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class Lv{constructor(e,n,s,i,r,o,a,c){this.Hs=e,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Mv(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(jn(n.toString()),jn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===n&&this.Go(s,i)},s=>{e(()=>{const i=new q(S.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class EA extends Lv{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.yt=r}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=PR(this.yt,e),s=function(i){if(!("targetChange"in i))return Z.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?Z.min():r.readTime?wn(r.readTime):Z.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=qu(this.yt),n.addTarget=function(i,r){let o;const a=r.target;return o=Vu(a)?{documents:LR(i,a)}:{query:FR(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Rv(i,r.resumeToken):r.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=Qa(i,r.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=BR(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=qu(this.yt),n.removeTarget=e,this.Bo(n)}}class bA extends Lv{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=MR(e.writeResults,e.commitTime),s=wn(e.commitTime);return this.listener.Zo(s,n)}return Se(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=qu(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>xR(this.yt,s))};this.Bo(n)}}/**
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
 */class TA extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=i,this.nu=!1}su(){if(this.nu)throw new q(S.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(S.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(S.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class IA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(jn(n),this.ou=!1):V("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class CA{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{ri(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ee(a);c._u.add(4),await Do(c),c.gu.set("Unknown"),c._u.delete(4),await sl(c)}(this))})}),this.gu=new IA(s,i)}}async function sl(t){if(ri(t))for(const e of t.wu)await e(!0)}async function Do(t){for(const e of t.wu)await e(!1)}function Fv(t,e){const n=ee(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Cd(n)?Id(n):nr(n).ko()&&Td(n,e))}function Uv(t,e){const n=ee(t),s=nr(n);n.du.delete(e),s.ko()&&Bv(n,e),n.du.size===0&&(s.ko()?s.Fo():ri(n)&&n.gu.set("Unknown"))}function Td(t,e){t.yu.Ot(e.targetId),nr(t).zo(e)}function Bv(t,e){t.yu.Ot(e),nr(t).Ho(e)}function Id(t){t.yu=new SR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),nr(t).start(),t.gu.uu()}function Cd(t){return ri(t)&&!nr(t).No()&&t.du.size>0}function ri(t){return ee(t)._u.size===0}function Vv(t){t.yu=void 0}async function SA(t){t.du.forEach((e,n)=>{Td(t,e)})}async function RA(t,e){Vv(t),Cd(t)?(t.gu.hu(e),Id(t)):t.gu.set("Unknown")}async function AA(t,e,n){if(t.gu.set("Online"),e instanceof Sv&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ya(t,s)}else if(e instanceof ba?t.yu.Kt(e):e instanceof Cv?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(Z.min()))try{const s=await xv(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.yu.Zt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.du.get(c);l&&i.du.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.du.get(a);if(!c)return;i.du.set(a,c.withResumeToken(Et.EMPTY_BYTE_STRING,c.snapshotVersion)),Bv(i,a);const l=new js(c.target,a,1,c.sequenceNumber);Td(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){V("RemoteStore","Failed to raise snapshot:",s),await Ya(t,s)}}async function Ya(t,e,n){if(!ko(e))throw e;t._u.add(1),await Do(t),t.gu.set("Offline"),n||(n=()=>xv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await sl(t)})}function $v(t,e){return e().catch(n=>Ya(t,n,e))}async function il(t){const e=ee(t),n=ps(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;kA(e);)try{const i=await fA(e.localStore,s);if(i===null){e.fu.length===0&&n.Fo();break}s=i.batchId,NA(e,i)}catch(i){await Ya(e,i)}jv(e)&&Hv(e)}function kA(t){return ri(t)&&t.fu.length<10}function NA(t,e){t.fu.push(e);const n=ps(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function jv(t){return ri(t)&&!ps(t).No()&&t.fu.length>0}function Hv(t){ps(t).start()}async function OA(t){ps(t).eu()}async function DA(t){const e=ps(t);for(const n of t.fu)e.Xo(n.mutations)}async function PA(t,e,n){const s=t.fu.shift(),i=vd.from(s,e,n);await $v(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await il(t)}async function xA(t,e){e&&ps(t).Yo&&await async function(n,s){if(i=s.code,ER(i)&&i!==S.ABORTED){const r=n.fu.shift();ps(n).Mo(),await $v(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await il(n)}var i}(t,e),jv(t)&&Hv(t)}async function Xp(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const s=ri(n);n._u.add(3),await Do(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await sl(n)}async function MA(t,e){const n=ee(t);e?(n._u.delete(2),await sl(n)):e||(n._u.add(2),await Do(n),n.gu.set("Unknown"))}function nr(t){return t.pu||(t.pu=function(e,n,s){const i=ee(e);return i.su(),new EA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(t.datastore,t.asyncQueue,{Yr:SA.bind(null,t),Zr:RA.bind(null,t),Wo:AA.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Cd(t)?Id(t):t.gu.set("Unknown")):(await t.pu.stop(),Vv(t))})),t.pu}function ps(t){return t.Iu||(t.Iu=function(e,n,s){const i=ee(e);return i.su(),new bA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(t.datastore,t.asyncQueue,{Yr:OA.bind(null,t),Zr:xA.bind(null,t),tu:DA.bind(null,t),Zo:PA.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await il(t)):(await t.Iu.stop(),t.fu.length>0&&(V("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class Sd{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Sd(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rd(t,e){if(jn("AsyncQueue",`${e}: ${t}`),ko(t))return new q(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ci{constructor(e){this.comparator=e?(n,s)=>e(n,s)||K.comparator(n.key,s.key):(n,s)=>K.comparator(n.key,s.key),this.keyedMap=Ir(),this.sortedSet=new Ye(this.comparator)}static emptySet(e){return new Ci(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ci)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ci;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Jp{constructor(){this.Tu=new Ye(K.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):Q():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Bi{constructor(e,n,s,i,r,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Bi(e,n,Ci.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class LA{constructor(){this.Au=void 0,this.listeners=[]}}class FA{constructor(){this.queries=new tr(e=>uv(e),Xc),this.onlineState="Unknown",this.Ru=new Set}}async function Ad(t,e){const n=ee(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new LA),i)try{r.Au=await n.onListen(s)}catch(o){const a=Rd(o,`Initialization of query '${ju(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&Nd(n)}async function kd(t,e){const n=ee(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function UA(t,e){const n=ee(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&Nd(n)}function BA(t,e,n){const s=ee(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Nd(t){t.Ru.forEach(e=>{e.next()})}class Od{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Bi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Bi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class Wv{constructor(e){this.key=e}}class qv{constructor(e){this.key=e}}class VA{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ie(),this.mutatedKeys=ie(),this.Gu=hv(e),this.Qu=new Ci(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new Jp,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),p=Jc(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;d&&p?d.data.isEqual(p.data)?g!==_&&(s.track({type:3,doc:p}),v=!0):this.Hu(d,p)||(s.track({type:2,doc:p}),v=!0,(c&&this.Gu(p,c)>0||l&&this.Gu(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),v=!0):d&&!p&&(s.track({type:1,doc:d}),v=!0,(c||l)&&(a=!0)),v&&(p?(o=o.add(p),r=_?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Eu();r.sort((l,u)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return p(h)-p(d)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,r.length!==0||c?{snapshot:new Bi(this.query,e.Qu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Jp,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ie(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new qv(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Wv(s))}),n}tc(e){this.qu=e.Hi,this.Ku=ie();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Bi.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class $A{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class jA{constructor(e){this.key=e,this.nc=!1}}class HA{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new tr(a=>uv(a),Xc),this.rc=new Map,this.oc=new Set,this.uc=new Ye(K.comparator),this.cc=new Map,this.ac=new wd,this.hc={},this.lc=new Map,this.fc=Ui.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function WA(t,e){const n=ek(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await pA(n.localStore,Hn(e));n.isPrimaryClient&&Fv(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await qA(n,e,s,a==="current",o.resumeToken)}return i}async function qA(t,e,n,s,i){t._c=(h,d,p)=>async function(g,_,v,b){let A=_.view.Wu(v);A.$i&&(A=await Gp(g.localStore,_.query,!1).then(({documents:z})=>_.view.Wu(z,A)));const I=b&&b.targetChanges.get(_.targetId),O=_.view.applyChanges(A,g.isPrimaryClient,I);return eg(g,_.targetId,O.Xu),O.snapshot}(t,h,d,p);const r=await Gp(t.localStore,e,!0),o=new VA(e,r.Hi),a=o.Wu(r.documents),c=Oo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);eg(t,n,l.Xu);const u=new $A(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function KA(t,e){const n=ee(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!Xc(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ku(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Uv(n.remoteStore,s.targetId),zu(n,s.targetId)}).catch(Ao)):(zu(n,s.targetId),await Ku(n.localStore,s.targetId,!0))}async function zA(t,e,n){const s=tk(t);try{const i=await function(r,o){const a=ee(r),c=We.now(),l=o.reduce((d,p)=>d.add(p.key),ie());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Wn(),g=ie();return a.Gi.getEntries(d,l).next(_=>{p=_,p.forEach((v,b)=>{b.isValidDocument()||(g=g.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(_=>{u=_;const v=[];for(const b of o){const A=yR(b,u.get(b.key).overlayedDocument);A!=null&&v.push(new vs(b.key,A,lv(A.value.mapValue),ln.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,v,o)}).next(_=>{h=_;const v=_.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(d,_.batchId,v)})}).then(()=>({batchId:h.batchId,changes:bv(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.hc[r.currentUser.toKey()];c||(c=new Ye(me)),c=c.insert(o,a),r.hc[r.currentUser.toKey()]=c}(s,i.batchId,n),await Po(s,i.changes),await il(s.remoteStore)}catch(i){const r=Rd(i,"Failed to persist write");n.reject(r)}}async function Kv(t,e){const n=ee(t);try{const s=await hA(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(Se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?Se(o.nc):i.removedDocuments.size>0&&(Se(o.nc),o.nc=!1))}),await Po(n,s,e)}catch(s){await Ao(s)}}function Zp(t,e,n){const s=ee(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=ee(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Nd(a)}(s.eventManager,e),i.length&&s.sc.Wo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function GA(t,e,n){const s=ee(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new Ye(K.comparator);o=o.insert(r,ht.newNoDocument(r,Z.min()));const a=ie().add(r),c=new tl(Z.min(),new Map,new Ge(me),o,a);await Kv(s,c),s.uc=s.uc.remove(r),s.cc.delete(e),Dd(s)}else await Ku(s.localStore,e,!1).then(()=>zu(s,e,n)).catch(Ao)}async function QA(t,e){const n=ee(t),s=e.batch.batchId;try{const i=await uA(n.localStore,e);Gv(n,s,null),zv(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Po(n,i)}catch(i){await Ao(i)}}async function YA(t,e,n){const s=ee(t);try{const i=await function(r,o){const a=ee(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Se(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Gv(s,e,n),zv(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Po(s,i)}catch(i){await Ao(i)}}function zv(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Gv(t,e,n){const s=ee(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function zu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Qv(t,s)})}function Qv(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Uv(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Dd(t))}function eg(t,e,n){for(const s of n)s instanceof Wv?(t.ac.addReference(s.key,e),XA(t,s)):s instanceof qv?(V("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Qv(t,s.key)):Q()}function XA(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(V("SyncEngine","New document in limbo: "+n),t.oc.add(s),Dd(t))}function Dd(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new K(De.fromString(e)),s=t.fc.next();t.cc.set(s,new jA(n)),t.uc=t.uc.insert(n,s),Fv(t.remoteStore,new js(Hn(Yc(n.path)),s,2,fd.at))}}async function Po(t,e,n){const s=ee(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=bd.Ci(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,c){const l=ee(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>R.forEach(c,h=>R.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>R.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!ko(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.qi.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);l.qi=l.qi.insert(h,g)}}}(s.localStore,r))}async function JA(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const s=await Pv(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new q(S.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Po(n,s.ji)}}function ZA(t,e){const n=ee(t),s=n.cc.get(e);if(s&&s.nc)return ie().add(s.key);{let i=ie();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function ek(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Kv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GA.bind(null,e),e.sc.Wo=UA.bind(null,e.eventManager),e.sc.wc=BA.bind(null,e.eventManager),e}function tk(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YA.bind(null,e),e}class nk{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=nl(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return lA(this.persistence,new aA,e.initialUser,this.yt)}yc(e){return new rA(Ed.Bs,this.yt)}gc(e){return new mA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class sk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Zp(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=JA.bind(null,this.syncEngine),await MA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new FA}createDatastore(e){const n=nl(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new wA(i));var i;return function(r,o,a,c){return new TA(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Zp(this.syncEngine,a,0),o=Yp.C()?new Yp:new _A,new CA(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,l){const u=new HA(s,i,r,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ee(e);V("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Do(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Yv(t,e,n){if(!n)throw new q(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ik(t,e,n,s){if(e===!0&&s===!0)throw new q(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function tg(t){if(!K.isDocumentKey(t))throw new q(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ng(t){if(K.isDocumentKey(t))throw new q(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Pd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function qt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pd(t);throw new q(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const sg=new Map;class ig{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new q(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ik("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class rl{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ig({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ig(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new DS;switch(n.type){case"gapi":const s=n.client;return new LS(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new q(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=sg.get(e);n&&(V("ComponentProvider","Removing Datastore"),sg.delete(e),n.terminate())}(this),Promise.resolve()}}function rk(t,e,n,s={}){var i;const r=(t=qt(t,rl))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Lu("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=ut.MOCK_USER;else{o=V_(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new q(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ut(c)}t._authCredentials=new PS(new Jy(o,a))}}/**
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
 */class Nt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}}class xo{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new xo(this.firestore,e,this._query)}}class cs extends xo{constructor(e,n,s){super(e,n,Yc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new K(e))}withConverter(e){return new cs(this.firestore,e,this._path)}}function rg(t,e,...n){if(t=Be(t),Yv("collection","path",e),t instanceof rl){const s=De.fromString(e,...n);return ng(s),new cs(t,null,s)}{if(!(t instanceof Nt||t instanceof cs))throw new q(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(De.fromString(e,...n));return ng(s),new cs(t.firestore,null,s)}}function Gu(t,e,...n){if(t=Be(t),arguments.length===1&&(e=Zy.R()),Yv("doc","path",e),t instanceof rl){const s=De.fromString(e,...n);return tg(s),new Nt(t,null,new K(s))}{if(!(t instanceof Nt||t instanceof cs))throw new q(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(De.fromString(e,...n));return tg(s),new Nt(t.firestore,t instanceof cs?t.converter:null,new K(s))}}/**
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
 */class xd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):jn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class ok{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=Zy.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{V("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(V("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Rd(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ak(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Pv(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function ck(t,e){t.asyncQueue.verifyOperationInProgress();const n=await lk(t);V("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Xp(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Xp(e.remoteStore,r)),t.onlineComponents=e}async function lk(t){return t.offlineComponents||(V("FirestoreClient","Using default OfflineComponentProvider"),await ak(t,new nk)),t.offlineComponents}async function Xv(t){return t.onlineComponents||(V("FirestoreClient","Using default OnlineComponentProvider"),await ck(t,new sk)),t.onlineComponents}function uk(t){return Xv(t).then(e=>e.syncEngine)}async function Xa(t){const e=await Xv(t),n=e.eventManager;return n.onListen=WA.bind(null,e.syncEngine),n.onUnlisten=KA.bind(null,e.syncEngine),n}function hk(t,e,n={}){const s=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new xd({next:h=>{r.enqueueAndForget(()=>kd(i,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new q(S.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new q(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Od(Yc(o.path),l,{includeMetadataChanges:!0,Nu:!0});return Ad(i,u)}(await Xa(t),t.asyncQueue,e,n,s)),s.promise}function dk(t,e,n={}){const s=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new xd({next:h=>{r.enqueueAndForget(()=>kd(i,u)),h.fromCache&&a.source==="server"?c.reject(new q(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Od(o,l,{includeMetadataChanges:!0,Nu:!0});return Ad(i,u)}(await Xa(t),t.asyncQueue,e,n,s)),s.promise}class fk{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Mv(this,"async_queue_retry"),this.Wc=()=>{const n=$l();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=$l();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=$l();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Un;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!ko(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw jn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Sd.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&Q()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function og(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class gs extends rl{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new fk,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Zv(this),this._firestoreClient.terminate()}}function Jv(t,e){const n=typeof t=="object"?t:Dc(),s=typeof t=="string"?t:e||"(default)",i=Oc(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=U_("firestore");r&&rk(i,...r)}return i}function ol(t){return t._firestoreClient||Zv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Zv(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new KS(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ok(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class Vi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vi(Et.fromBase64String(e))}catch(n){throw new q(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vi(Et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class al{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Md{constructor(e){this._methodName=e}}/**
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
 */class cl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
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
 */const pk=/^__.*__$/;class gk{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new vs(e,this.data,this.fieldMask,n,this.fieldTransforms):new No(e,this.data,n,this.fieldTransforms)}}class ew{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new vs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function tw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Ld{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Ld(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Ja(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(tw(this.sa)&&pk.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class mk{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||nl(e)}da(e,n,s,i=!1){return new Ld({sa:e,methodName:n,fa:s,path:gt.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function nw(t){const e=t._freezeSettings(),n=nl(t._databaseId);return new mk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _k(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);Fd("Data must be an object, but it was:",o,s);const a=sw(s,o);let c,l;if(r.merge)c=new Lt(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=Qu(e,h,n);if(!o.contains(d))throw new q(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);rw(u,d)||u.push(d)}c=new Lt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new gk(new At(a),c,l)}class ll extends Md{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ll}}function yk(t,e,n,s){const i=t.da(1,e,n);Fd("Data must be an object, but it was:",i,s);const r=[],o=At.empty();ii(s,(c,l)=>{const u=Ud(e,c,n);l=Be(l);const h=i.ca(u);if(l instanceof ll)r.push(u);else{const d=ul(l,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Lt(r);return new ew(o,a,i.fieldTransforms)}function vk(t,e,n,s,i,r){const o=t.da(1,e,n),a=[Qu(e,s,n)],c=[i];if(r.length%2!=0)throw new q(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Qu(e,r[d])),c.push(r[d+1]);const l=[],u=At.empty();for(let d=a.length-1;d>=0;--d)if(!rw(l,a[d])){const p=a[d];let g=c[d];g=Be(g);const _=o.ca(p);if(g instanceof ll)l.push(p);else{const v=ul(g,_);v!=null&&(l.push(p),u.set(p,v))}}const h=new Lt(l);return new ew(u,h,o.fieldTransforms)}function ul(t,e){if(iw(t=Be(t)))return Fd("Unsupported field value:",e,t),sw(t,e);if(t instanceof Md)return function(n,s){if(!tw(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=ul(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Be(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return dR(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=We.fromDate(n);return{timestampValue:Qa(s.yt,i)}}if(n instanceof We){const i=new We(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Qa(s.yt,i)}}if(n instanceof cl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Vi)return{bytesValue:Rv(s.yt,n._byteString)};if(n instanceof Nt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:yd(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Pd(n)}`)}(t,e)}function sw(t,e){const n={};return ev(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ii(t,(s,i)=>{const r=ul(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function iw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof cl||t instanceof Vi||t instanceof Nt||t instanceof Md)}function Fd(t,e,n){if(!iw(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Pd(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Qu(t,e,n){if((e=Be(e))instanceof al)return e._internalPath;if(typeof e=="string")return Ud(t,e);throw Ja("Field path arguments must be of type string or ",t,!1,void 0,n)}const wk=new RegExp("[~\\*/\\[\\]]");function Ud(t,e,n){if(e.search(wk)>=0)throw Ja(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new al(...e.split("."))._internalPath}catch{throw Ja(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ja(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new q(S.INVALID_ARGUMENT,a+t+c)}function rw(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ow{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ek(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(aw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ek extends ow{data(){return super.data()}}function aw(t,e){return typeof e=="string"?Ud(t,e):e instanceof al?e._internalPath:e._delegate._internalPath}/**
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
 */function cw(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bk{convertValue(e,n="none"){switch(Gs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){const s={};return ii(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new cl(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=nv(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(io(e));default:return null}}convertTimestamp(e){const n=fs(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=De.fromString(e);Se(Dv(s));const i=new so(s.get(1),s.get(3)),r=new K(s.popFirst(5));return i.isEqual(n)||jn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function Tk(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class Cr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lw extends ow{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ta(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(aw("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ta extends lw{data(e={}){return super.data(e)}}class uw{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Cr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ta(this._firestore,this._userDataWriter,s.key,s,new Cr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new Ta(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Cr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ta(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Cr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:Ik(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ik(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
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
 */function hw(t){t=qt(t,Nt);const e=qt(t.firestore,gs);return hk(ol(e),t._key).then(n=>dw(e,t,n))}class Bd extends bk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function Ck(t){t=qt(t,xo);const e=qt(t.firestore,gs),n=ol(e),s=new Bd(e);return cw(t._query),dk(n,t._query).then(i=>new uw(e,s,t,i))}function Sk(t,e,n,...s){t=qt(t,Nt);const i=qt(t.firestore,gs),r=nw(i);let o;return o=typeof(e=Be(e))=="string"||e instanceof al?vk(r,"updateDoc",t._key,e,n,s):yk(r,"updateDoc",t._key,e),$d(i,[o.toMutation(t._key,ln.exists(!0))])}function Rk(t){return $d(qt(t.firestore,gs),[new _d(t._key,ln.none())])}function Ak(t,e){const n=qt(t.firestore,gs),s=Gu(t),i=Tk(t.converter,e);return $d(n,[_k(nw(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,ln.exists(!1))]).then(()=>s)}function Vd(t,...e){var n,s,i;t=Be(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||og(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(og(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof Nt)l=qt(t.firestore,gs),u=Yc(t._key.path),c={next:h=>{e[o]&&e[o](dw(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=qt(t,xo);l=qt(h.firestore,gs),u=h._query;const d=new Bd(l);c={next:p=>{e[o]&&e[o](new uw(l,d,h,p))},error:e[o+1],complete:e[o+2]},cw(t._query)}return function(h,d,p,g){const _=new xd(g),v=new Od(d,_,p);return h.asyncQueue.enqueueAndForget(async()=>Ad(await Xa(h),v)),()=>{_.bc(),h.asyncQueue.enqueueAndForget(async()=>kd(await Xa(h),v))}}(ol(l),u,a,c)}function $d(t,e){return function(n,s){const i=new Un;return n.asyncQueue.enqueueAndForget(async()=>zA(await uk(n),s,i)),i.promise}(ol(t),e)}function dw(t,e,n){const s=n.docs.get(e._key),i=new Bd(t);return new lw(t,i,e._key,s,new Cr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){er=n})(ni),In(new hn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new gs(new xS(n.getProvider("auth-internal")),new US(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new q(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new so(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ut(kp,"3.8.3",t),Ut(kp,"3.8.3","esm2017")})();function jd(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function fw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kk=fw,pw=new Yi("auth","Firebase",fw());/**
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
 */const ag=new yo("@firebase/auth");function Ia(t,...e){ag.logLevel<=fe.ERROR&&ag.error(`Auth (${ni}): ${t}`,...e)}/**
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
 */function Kt(t,...e){throw Hd(t,...e)}function En(t,...e){return Hd(t,...e)}function gw(t,e,n){const s=Object.assign(Object.assign({},kk()),{[e]:n});return new Yi("auth","Firebase",s).create(e,{appName:t.name})}function Nk(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Kt(t,"argument-error"),gw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hd(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return pw.create(t,...e)}function G(t,e,...n){if(!t)throw Hd(e,...n)}function xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ia(e),new Error(e)}function qn(t,e){t||xn(e)}/**
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
 */const cg=new Map;function Mn(t){qn(t instanceof Function,"Expected a class definition");let e=cg.get(t);return e?(qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cg.set(t,e),e)}/**
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
 */function Ok(t,e){const n=Oc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Ma(r,e??{}))return i;Kt(i,"already-initialized")}return n.initialize({options:e})}function Dk(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Yu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Pk(){return lg()==="http:"||lg()==="https:"}function lg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function xk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Pk()||l0()||"connection"in navigator)?navigator.onLine:!0}function Mk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Mo{constructor(e,n){this.shortDelay=e,this.longDelay=n,qn(n>e,"Short delay should be less than long delay!"),this.isMobile=Hh()||$_()}get(){return xk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Wd(t,e){qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class mw{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Lk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Fk=new Mo(3e4,6e4);function Lo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fo(t,e,n,s,i={}){return _w(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Xi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),mw.fetch()(yw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function _w(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Lk),e);try{const i=new Uk(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw aa(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw aa(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw aa(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw aa(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw gw(t,u,l);Kt(t,u)}}catch(i){if(i instanceof An)throw i;Kt(t,"network-request-failed")}}async function Uo(t,e,n,s,i={}){const r=await Fo(t,e,n,s,i);return"mfaPendingCredential"in r&&Kt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function yw(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Wd(t.config,i):`${t.config.apiScheme}://${i}`}class Uk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(En(this.auth,"network-request-failed")),Fk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function aa(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=En(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function Bk(t,e){return Fo(t,"POST","/v1/accounts:delete",e)}async function Vk(t,e){return Fo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Mr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $k(t,e=!1){const n=Be(t),s=await n.getIdToken(e),i=qd(s);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Mr(jl(i.auth_time)),issuedAtTime:Mr(jl(i.iat)),expirationTime:Mr(jl(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function jl(t){return Number(t)*1e3}function qd(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ia("JWT malformed, contained fewer than 3 sections"),null;try{const i=Pa(n);return i?JSON.parse(i):(Ia("Failed to decode base64 JWT payload"),null)}catch(i){return Ia("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jk(t){const e=qd(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function co(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof An&&Hk(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Hk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Wk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mr(this.lastLoginAt),this.creationTime=Mr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Za(t){var e;const n=t.auth,s=await t.getIdToken(),i=await co(t,Vk(n,{idToken:s}));G(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?zk(r.providerUserInfo):[],a=Kk(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new vw(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function qk(t){const e=Be(t);await Za(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kk(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function zk(t){return t.map(e=>{var{providerId:n}=e,s=jd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Gk(t,e){const n=await _w(t,{},async()=>{const s=Xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=yw(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",mw.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class lo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Gk(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new lo;return s&&(G(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(G(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lo,this.toJSON())}_performRefresh(){return xn("not implemented")}}/**
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
 */function Qn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Hs{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=jd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Wk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new vw(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await co(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $k(this,e)}reload(){return qk(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Hs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Za(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await co(this,Bk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,A=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:I,emailVerified:O,isAnonymous:z,providerData:re,stsTokenManager:ge}=n;G(I&&ge,e,"internal-error");const j=lo.fromJSON(this.name,ge);G(typeof I=="string",e,"internal-error"),Qn(h,e.name),Qn(d,e.name),G(typeof O=="boolean",e,"internal-error"),G(typeof z=="boolean",e,"internal-error"),Qn(p,e.name),Qn(g,e.name),Qn(_,e.name),Qn(v,e.name),Qn(b,e.name),Qn(A,e.name);const Te=new Hs({uid:I,auth:e,email:d,emailVerified:O,displayName:h,isAnonymous:z,photoURL:g,phoneNumber:p,tenantId:_,stsTokenManager:j,createdAt:b,lastLoginAt:A});return re&&Array.isArray(re)&&(Te.providerData=re.map(ye=>Object.assign({},ye))),v&&(Te._redirectEventId=v),Te}static async _fromIdTokenResponse(e,n,s=!1){const i=new lo;i.updateFromServerResponse(n);const r=new Hs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Za(r),r}}/**
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
 */class ww{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ww.type="NONE";const ug=ww;/**
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
 */function Ca(t,e,n){return`firebase:${t}:${e}:${n}`}class Si{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ca(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ca("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Hs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Si(Mn(ug),e,s);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||Mn(ug);const o=Ca(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Hs._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Si(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Si(r,e,s))}}/**
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
 */function hg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Tw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ew(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cw(e))return"Blackberry";if(Sw(e))return"Webos";if(Kd(e))return"Safari";if((e.includes("chrome/")||bw(e))&&!e.includes("edge/"))return"Chrome";if(Iw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ew(t=wt()){return/firefox\//i.test(t)}function Kd(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bw(t=wt()){return/crios\//i.test(t)}function Tw(t=wt()){return/iemobile/i.test(t)}function Iw(t=wt()){return/android/i.test(t)}function Cw(t=wt()){return/blackberry/i.test(t)}function Sw(t=wt()){return/webos/i.test(t)}function hl(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Qk(t=wt()){var e;return hl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Yk(){return u0()&&document.documentMode===10}function Rw(t=wt()){return hl(t)||Iw(t)||Sw(t)||Cw(t)||/windows phone/i.test(t)||Tw(t)}function Xk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Aw(t,e=[]){let n;switch(t){case"Browser":n=hg(wt());break;case"Worker":n=`${hg(wt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ni}/${s}`}/**
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
 */class Jk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class Zk{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dg(this),this.idTokenSubscription=new dg(this),this.beforeStateQueue=new Jk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pw,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Si.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Za(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Mk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Be(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Si.create(this,[Mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return G(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Aw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function sr(t){return Be(t)}class dg{constructor(e){this.auth=e,this.observer=null,this.addObserver=y0(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function eN(t,e,n){const s=sr(t);G(s._canInitEmulator,s,"emulator-config-failed"),G(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=kw(e),{host:o,port:a}=tN(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||nN()}function kw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tN(t){const e=kw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:fg(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:fg(o)}}}function fg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class zd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xn("not implemented")}_getIdTokenResponse(e){return xn("not implemented")}_linkToIdToken(e,n){return xn("not implemented")}_getReauthenticationResolver(e){return xn("not implemented")}}async function sN(t,e){return Fo(t,"POST","/v1/accounts:update",e)}/**
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
 */async function iN(t,e){return Uo(t,"POST","/v1/accounts:signInWithPassword",Lo(t,e))}/**
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
 */async function rN(t,e){return Uo(t,"POST","/v1/accounts:signInWithEmailLink",Lo(t,e))}async function oN(t,e){return Uo(t,"POST","/v1/accounts:signInWithEmailLink",Lo(t,e))}/**
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
 */class uo extends zd{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new uo(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new uo(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return iN(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rN(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return sN(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return oN(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ri(t,e){return Uo(t,"POST","/v1/accounts:signInWithIdp",Lo(t,e))}/**
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
 */const aN="http://localhost";class Qs extends zd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=jd(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Qs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ri(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ri(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ri(e,n)}buildRequest(){const e={requestUri:aN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xi(n)}return e}}/**
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
 */function cN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lN(t){const e=wr(Er(t)).link,n=e?wr(Er(e)).deep_link_id:null,s=wr(Er(t)).deep_link_id;return(s?wr(Er(s)).link:null)||s||n||e||t}class Gd{constructor(e){var n,s,i,r,o,a;const c=wr(Er(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=cN((i=c.mode)!==null&&i!==void 0?i:null);G(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=lN(e);try{return new Gd(n)}catch{return null}}}/**
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
 */class ir{constructor(){this.providerId=ir.PROVIDER_ID}static credential(e,n){return uo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Gd.parseLink(n);return G(s,"argument-error"),uo._fromEmailAndCode(e,s.code,s.tenantId)}}ir.PROVIDER_ID="password";ir.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ir.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Qd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bo extends Qd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class es extends Bo{constructor(){super("facebook.com")}static credential(e){return Qs._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return es.credential(e.oauthAccessToken)}catch{return null}}}es.FACEBOOK_SIGN_IN_METHOD="facebook.com";es.PROVIDER_ID="facebook.com";/**
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
 */class Zt extends Bo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qs._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Zt.credential(n,s)}catch{return null}}}Zt.GOOGLE_SIGN_IN_METHOD="google.com";Zt.PROVIDER_ID="google.com";/**
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
 */class ts extends Bo{constructor(){super("github.com")}static credential(e){return Qs._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ts.credentialFromTaggedObject(e)}static credentialFromError(e){return ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ts.credential(e.oauthAccessToken)}catch{return null}}}ts.GITHUB_SIGN_IN_METHOD="github.com";ts.PROVIDER_ID="github.com";/**
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
 */class ns extends Bo{constructor(){super("twitter.com")}static credential(e,n){return Qs._fromParams({providerId:ns.PROVIDER_ID,signInMethod:ns.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ns.credentialFromTaggedObject(e)}static credentialFromError(e){return ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ns.credential(n,s)}catch{return null}}}ns.TWITTER_SIGN_IN_METHOD="twitter.com";ns.PROVIDER_ID="twitter.com";/**
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
 */async function uN(t,e){return Uo(t,"POST","/v1/accounts:signUp",Lo(t,e))}/**
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
 */class Ys{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Hs._fromIdTokenResponse(e,s,i),o=pg(s);return new Ys({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=pg(s);return new Ys({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function pg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ec extends An{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ec.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new ec(e,n,s,i)}}function Nw(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ec._fromErrorAndOperation(t,r,e,s):r})}async function hN(t,e,n=!1){const s=await co(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ys._forOperation(t,"link",s)}/**
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
 */async function dN(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await co(t,Nw(s,i,e,t),n);G(r.idToken,s,"internal-error");const o=qd(r.idToken);G(o,s,"internal-error");const{sub:a}=o;return G(t.uid===a,s,"user-mismatch"),Ys._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Kt(s,"user-mismatch"),r}}/**
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
 */async function Ow(t,e,n=!1){const s="signIn",i=await Nw(t,s,e),r=await Ys._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function fN(t,e){return Ow(sr(t),e)}async function pN(t,e,n){const s=sr(t),i=await uN(s,{returnSecureToken:!0,email:e,password:n}),r=await Ys._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function gN(t,e,n){return fN(Be(t),ir.credential(e,n))}function mN(t,e,n,s){return Be(t).onIdTokenChanged(e,n,s)}function _N(t,e,n){return Be(t).beforeAuthStateChanged(e,n)}function Dw(t,e,n,s){return Be(t).onAuthStateChanged(e,n,s)}const tc="__sak";/**
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
 */class Pw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(tc,"1"),this.storage.removeItem(tc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function yN(){const t=wt();return Kd(t)||hl(t)}const vN=1e3,wN=10;class xw extends Pw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yN()&&Xk(),this.fallbackToPolling=Rw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Yk()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wN):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},vN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xw.type="LOCAL";const EN=xw;/**
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
 */class Mw extends Pw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Mw.type="SESSION";const Lw=Mw;/**
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
 */function bN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class dl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new dl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await bN(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dl.receivers=[];/**
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
 */function Yd(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class TN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Yd("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function bn(){return window}function IN(t){bn().location.href=t}/**
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
 */function Fw(){return typeof bn().WorkerGlobalScope<"u"&&typeof bn().importScripts=="function"}async function CN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function RN(){return Fw()?self:null}/**
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
 */const Uw="firebaseLocalStorageDb",AN=1,nc="firebaseLocalStorage",Bw="fbase_key";class Vo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fl(t,e){return t.transaction([nc],e?"readwrite":"readonly").objectStore(nc)}function kN(){const t=indexedDB.deleteDatabase(Uw);return new Vo(t).toPromise()}function Xu(){const t=indexedDB.open(Uw,AN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(nc,{keyPath:Bw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(nc)?e(s):(s.close(),await kN(),e(await Xu()))})})}async function gg(t,e,n){const s=fl(t,!0).put({[Bw]:e,value:n});return new Vo(s).toPromise()}async function NN(t,e){const n=fl(t,!1).get(e),s=await new Vo(n).toPromise();return s===void 0?null:s.value}function mg(t,e){const n=fl(t,!0).delete(e);return new Vo(n).toPromise()}const ON=800,DN=3;class Vw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>DN)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dl._getInstance(RN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await CN(),!this.activeServiceWorker)return;this.sender=new TN(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xu();return await gg(e,tc,"1"),await mg(e,tc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>gg(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>NN(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=fl(i,!1).getAll();return new Vo(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ON)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vw.type="LOCAL";const PN=Vw;/**
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
 */function xN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function MN(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=En("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",xN().appendChild(s)})}function LN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Mo(3e4,6e4);/**
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
 */function $w(t,e){return e?Mn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Xd extends zd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ri(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ri(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function FN(t){return Ow(t.auth,new Xd(t),t.bypassAuthState)}function UN(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),dN(n,new Xd(t),t.bypassAuthState)}async function BN(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),hN(n,new Xd(t),t.bypassAuthState)}/**
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
 */class jw{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FN;case"linkViaPopup":case"linkViaRedirect":return BN;case"reauthViaPopup":case"reauthViaRedirect":return UN;default:Kt(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const VN=new Mo(2e3,1e4);async function $N(t,e,n){const s=sr(t);Nk(t,e,Qd);const i=$w(s,n);return new Ms(s,"signInViaPopup",e,i).executeNotNull()}class Ms extends jw{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ms.currentPopupAction&&Ms.currentPopupAction.cancel(),Ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=Yd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(En(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(En(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(En(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,VN.get())};e()}}Ms.currentPopupAction=null;/**
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
 */const jN="pendingRedirect",Sa=new Map;class HN extends jw{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Sa.get(this.auth._key());if(!e){try{const s=await WN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Sa.set(this.auth._key(),e)}return this.bypassAuthState||Sa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WN(t,e){const n=zN(e),s=KN(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function qN(t,e){Sa.set(t._key(),e)}function KN(t){return Mn(t._redirectPersistence)}function zN(t){return Ca(jN,t.config.apiKey,t.name)}async function GN(t,e,n=!1){const s=sr(t),i=$w(s,e),o=await new HN(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const QN=10*60*1e3;class YN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Hw(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(En(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QN&&this.cachedEventUids.clear(),this.cachedEventUids.has(_g(e))}saveEventToCache(e){this.cachedEventUids.add(_g(e)),this.lastProcessedEventTime=Date.now()}}function _g(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hw(t);default:return!1}}/**
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
 */async function JN(t,e={}){return Fo(t,"GET","/v1/projects",e)}/**
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
 */const ZN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eO=/^https?/;async function tO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await JN(t);for(const n of e)try{if(nO(n))return}catch{}Kt(t,"unauthorized-domain")}function nO(t){const e=Yu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!eO.test(n))return!1;if(ZN.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const sO=new Mo(3e4,6e4);function yg(){const t=bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function iO(t){return new Promise((e,n)=>{var s,i,r;function o(){yg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yg(),n(En(t,"network-request-failed"))},timeout:sO.get()})}if(!((i=(s=bn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=bn().gapi)===null||r===void 0)&&r.load)o();else{const a=LN("iframefcb");return bn()[a]=()=>{gapi.load?o():n(En(t,"network-request-failed"))},MN(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ra=null,e})}let Ra=null;function rO(t){return Ra=Ra||iO(t),Ra}/**
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
 */const oO=new Mo(5e3,15e3),aO="__/auth/iframe",cO="emulator/auth/iframe",lO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hO(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wd(e,cO):`https://${t.config.authDomain}/${aO}`,s={apiKey:e.apiKey,appName:t.name,v:ni},i=uO.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Xi(s).slice(1)}`}async function dO(t){const e=await rO(t),n=bn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:hO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lO,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=En(t,"network-request-failed"),a=bn().setTimeout(()=>{r(o)},oO.get());function c(){bn().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const fO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pO=500,gO=600,mO="_blank",_O="http://localhost";class vg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yO(t,e,n,s=pO,i=gO){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},fO),{width:s.toString(),height:i.toString(),top:r,left:o}),l=wt().toLowerCase();n&&(a=bw(l)?mO:n),Ew(l)&&(e=e||_O,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(Qk(l)&&a!=="_self")return vO(e||"",a),new vg(null);const h=window.open(e||"",a,u);G(h,t,"popup-blocked");try{h.focus()}catch{}return new vg(h)}function vO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const wO="__/auth/handler",EO="emulator/auth/handler";function wg(t,e,n,s,i,r){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ni,eventId:i};if(e instanceof Qd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(r||{}))o[c]=l}if(e instanceof Bo){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${bO(t)}?${Xi(a).slice(1)}`}function bO({config:t}){return t.emulator?Wd(t,EO):`https://${t.authDomain}/${wO}`}/**
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
 */const Hl="webStorageSupport";class TO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lw,this._completeRedirectFn=GN,this._overrideRedirectResult=qN}async _openPopup(e,n,s,i){var r;qn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=wg(e,n,s,Yu(),i);return yO(e,o,Yd())}async _openRedirect(e,n,s,i){return await this._originValidation(e),IN(wg(e,n,s,Yu(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(qn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await dO(e),s=new YN(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hl,{type:Hl},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Hl];o!==void 0&&n(!!o),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Rw()||Kd()||hl()}}const IO=TO;var Eg="@firebase/auth",bg="0.21.3";/**
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
 */class CO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function SO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function RO(t){In(new hn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,c)=>{G(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),G(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Aw(t)},u=new Zk(a,c,l);return Dk(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),In(new hn("auth-internal",e=>{const n=sr(e.getProvider("auth").getImmediate());return(s=>new CO(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ut(Eg,bg,SO(t)),Ut(Eg,bg,"esm2017")}/**
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
 */const AO=5*60,kO=B_("authIdTokenMaxAge")||AO;let Tg=null;const NO=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>kO)return;const i=n==null?void 0:n.token;Tg!==i&&(Tg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function OO(t=Dc()){const e=Oc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ok(t,{popupRedirectResolver:IO,persistence:[PN,EN,Lw]}),s=B_("authTokenSyncURL");if(s){const r=NO(s);_N(n,r,()=>r(n.currentUser)),mN(n,o=>r(o))}const i=F_("auth");return i&&eN(n,`http://${i}`),n}RO("Browser");const Ww=z_({apiKey:"AIzaSyDZaSbXcSW_jHkXuP0KN-8gn_4YayPB6pE",authDomain:"proyectovue-ca4b7.firebaseapp.com",projectId:"proyectovue-ca4b7",storageBucket:"proyectovue-ca4b7.appspot.com",messagingSenderId:"429312023256",appId:"1:429312023256:web:65503b69ae43d0b98595ad"});Jv(Ww);const $i=OO(Ww);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const mi=typeof window<"u";function DO(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ve=Object.assign;function Wl(t,e){const n={};for(const s in e){const i=e[s];n[s]=dn(i)?i.map(t):t(i)}return n}const Lr=()=>{},dn=Array.isArray,PO=/\/$/,xO=t=>t.replace(PO,"");function ql(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=UO(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function MO(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ig(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function LO(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ji(e.matched[s],n.matched[i])&&qw(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ji(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function qw(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!FO(t[n],e[n]))return!1;return!0}function FO(t,e){return dn(t)?Cg(t,e):dn(e)?Cg(e,t):t===e}function Cg(t,e){return dn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function UO(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var ho;(function(t){t.pop="pop",t.push="push"})(ho||(ho={}));var Fr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Fr||(Fr={}));function BO(t){if(!t)if(mi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),xO(t)}const VO=/^[^#]+#/;function $O(t,e){return t.replace(VO,"#")+e}function jO(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const pl=()=>({left:window.pageXOffset,top:window.pageYOffset});function HO(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=jO(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Sg(t,e){return(history.state?history.state.position-e:-1)+t}const Ju=new Map;function WO(t,e){Ju.set(t,e)}function qO(t){const e=Ju.get(t);return Ju.delete(t),e}let KO=()=>location.protocol+"//"+location.host;function Kw(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Ig(c,"")}return Ig(n,t)+s+i}function zO(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const p=Kw(t,location),g=n.value,_=e.value;let v=0;if(d){if(n.value=p,e.value=d,o&&o===g){o=null;return}v=_?d.position-_.position:0}else s(p);i.forEach(b=>{b(n.value,g,{delta:v,type:ho.pop,direction:v?v>0?Fr.forward:Fr.back:Fr.unknown})})};function c(){o=n.value}function l(d){i.push(d);const p=()=>{const g=i.indexOf(d);g>-1&&i.splice(g,1)};return r.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(ve({},d.state,{scroll:pl()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Rg(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?pl():null}}function GO(t){const{history:e,location:n}=window,s={value:Kw(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:KO()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),i.value=l}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(c,l){const u=ve({},e.state,Rg(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});r(c,u,!0),s.value=c}function a(c,l){const u=ve({},i.value,e.state,{forward:c,scroll:pl()});r(u.current,u,!0);const h=ve({},Rg(s.value,c,null),{position:u.position+1},l);r(c,h,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function QO(t){t=BO(t);const e=GO(t),n=zO(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ve({location:"",base:t,go:s,createHref:$O.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function YO(t){return typeof t=="string"||t&&typeof t=="object"}function zw(t){return typeof t=="string"||typeof t=="symbol"}const Yn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Gw=Symbol("");var Ag;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ag||(Ag={}));function Hi(t,e){return ve(new Error,{type:t,[Gw]:!0},e)}function Nn(t,e){return t instanceof Error&&Gw in t&&(e==null||!!(t.type&e))}const kg="[^/]+?",XO={sensitive:!1,strict:!1,start:!0,end:!0},JO=/[.+*?^${}()[\]/\\]/g;function ZO(t,e){const n=ve({},XO,e),s=[];let i=n.start?"^":"";const r=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(JO,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:_,optional:v,regexp:b}=d;r.push({name:g,repeatable:_,optional:v});const A=b||kg;if(A!==kg){p+=10;try{new RegExp(`(${A})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${g}" (${A}): `+O.message)}}let I=_?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;h||(I=v&&l.length<2?`(?:/${I})`:"/"+I),v&&(I+="?"),i+=I,p+=20,v&&(p+=-8),_&&(p+=-20),A===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",g=r[d-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:_,optional:v}=p,b=g in l?l[g]:"";if(dn(b)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const A=dn(b)?b.join("/"):b;if(!A)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=A}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function eD(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function tD(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=eD(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Ng(s))return 1;if(Ng(i))return-1}return i.length-s.length}function Ng(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const nD={type:0,value:""},sD=/[a-zA-Z0-9_]/;function iD(t){if(!t)return[[]];if(t==="/")return[[nD]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,l="",u="";function h(){l&&(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:sD.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function rD(t,e,n){const s=ZO(iD(t.path),n),i=ve(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function oD(t,e){const n=[],s=new Map;e=Pg({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const p=!d,g=aD(u);g.aliasOf=d&&d.record;const _=Pg(e,u),v=[g];if("alias"in u){const I=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of I)v.push(ve({},g,{components:d?d.record.components:g.components,path:O,aliasOf:d?d.record:g}))}let b,A;for(const I of v){const{path:O}=I;if(h&&O[0]!=="/"){const z=h.record.path,re=z[z.length-1]==="/"?"":"/";I.path=h.record.path+(O&&re+O)}if(b=rD(I,h,_),d?d.alias.push(b):(A=A||b,A!==b&&A.alias.push(b),p&&u.name&&!Dg(b)&&o(u.name)),g.children){const z=g.children;for(let re=0;re<z.length;re++)r(z[re],b,d&&d.children[re])}d=d||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return A?()=>{o(A)}:Lr}function o(u){if(zw(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&tD(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Qw(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Dg(u)&&s.set(u.record.name,u)}function l(u,h){let d,p={},g,_;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Hi(1,{location:u});_=d.record.name,p=ve(Og(h.params,d.keys.filter(A=>!A.optional).map(A=>A.name)),u.params&&Og(u.params,d.keys.map(A=>A.name))),g=d.stringify(p)}else if("path"in u)g=u.path,d=n.find(A=>A.re.test(g)),d&&(p=d.parse(g),_=d.record.name);else{if(d=h.name?s.get(h.name):n.find(A=>A.re.test(h.path)),!d)throw Hi(1,{location:u,currentLocation:h});_=d.record.name,p=ve({},h.params,u.params),g=d.stringify(p)}const v=[];let b=d;for(;b;)v.unshift(b.record),b=b.parent;return{name:_,path:g,params:p,matched:v,meta:lD(v)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Og(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function aD(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:cD(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function cD(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Dg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lD(t){return t.reduce((e,n)=>ve(e,n.meta),{})}function Pg(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Qw(t,e){return e.children.some(n=>n===t||Qw(t,n))}const Yw=/#/g,uD=/&/g,hD=/\//g,dD=/=/g,fD=/\?/g,Xw=/\+/g,pD=/%5B/g,gD=/%5D/g,Jw=/%5E/g,mD=/%60/g,Zw=/%7B/g,_D=/%7C/g,eE=/%7D/g,yD=/%20/g;function Jd(t){return encodeURI(""+t).replace(_D,"|").replace(pD,"[").replace(gD,"]")}function vD(t){return Jd(t).replace(Zw,"{").replace(eE,"}").replace(Jw,"^")}function Zu(t){return Jd(t).replace(Xw,"%2B").replace(yD,"+").replace(Yw,"%23").replace(uD,"%26").replace(mD,"`").replace(Zw,"{").replace(eE,"}").replace(Jw,"^")}function wD(t){return Zu(t).replace(dD,"%3D")}function ED(t){return Jd(t).replace(Yw,"%23").replace(fD,"%3F")}function bD(t){return t==null?"":ED(t).replace(hD,"%2F")}function sc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function TD(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Xw," "),o=r.indexOf("="),a=sc(o<0?r:r.slice(0,o)),c=o<0?null:sc(r.slice(o+1));if(a in e){let l=e[a];dn(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function xg(t){let e="";for(let n in t){const s=t[n];if(n=wD(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(dn(s)?s.map(r=>r&&Zu(r)):[s&&Zu(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function ID(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=dn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const CD=Symbol(""),Mg=Symbol(""),Zd=Symbol(""),tE=Symbol(""),eh=Symbol("");function dr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Zn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Hi(4,{from:n,to:e})):h instanceof Error?a(h):YO(h)?a(Hi(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},l=t.call(s&&s.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Kl(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(SD(a)){const l=(a.__vccOpts||a)[e];l&&i.push(Zn(l,n,s,r,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=DO(l)?l.default:l;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Zn(d,n,s,r,o)()}))}}return i}function SD(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Lg(t){const e=on(Zd),n=on(tE),s=jt(()=>e.resolve(de(t.to))),i=jt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ji.bind(null,u));if(d>-1)return d;const p=Fg(c[l-2]);return l>1&&Fg(u)===p&&h[h.length-1].path!==p?h.findIndex(ji.bind(null,c[l-2])):d}),r=jt(()=>i.value>-1&&kD(n.params,s.value.params)),o=jt(()=>i.value>-1&&i.value===n.matched.length-1&&qw(n.params,s.value.params));function a(c={}){return AD(c)?e[de(t.replace)?"replace":"push"](de(t.to)).catch(Lr):Promise.resolve()}return{route:s,href:jt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const RD=d_({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Lg,setup(t,{slots:e}){const n=go(Lg(t)),{options:s}=on(Zd),i=jt(()=>({[Ug(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ug(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:O_("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Xn=RD;function AD(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function kD(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!dn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Fg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ug=(t,e,n)=>t??e??n,ND=d_({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=on(eh),i=jt(()=>t.route||s.value),r=on(Mg,0),o=jt(()=>{let l=de(r);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=jt(()=>i.value.matched[o.value]);ga(Mg,jt(()=>o.value+1)),ga(CD,a),ga(eh,i);const c=rn();return Rr(()=>[c.value,a.value,t.name],([l,u,h],[d,p,g])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!ji(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(_=>_(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Bg(n.default,{Component:d,route:l});const p=h.props[u],g=p?p===!0?l.params:typeof p=="function"?p(l):p:null,v=O_(d,ve({},g,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Bg(n.default,{Component:v,route:l})||v}}});function Bg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const nE=ND;function OD(t){const e=oD(t.routes,t),n=t.parseQuery||TD,s=t.stringifyQuery||xg,i=t.history,r=dr(),o=dr(),a=dr(),c=Jm(Yn);let l=Yn;mi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Wl.bind(null,E=>""+E),h=Wl.bind(null,bD),d=Wl.bind(null,sc);function p(E,F){let x,$;return zw(E)?(x=e.getRecordMatcher(E),$=F):$=E,e.addRoute($,x)}function g(E){const F=e.getRecordMatcher(E);F&&e.removeRoute(F)}function _(){return e.getRoutes().map(E=>E.record)}function v(E){return!!e.getRecordMatcher(E)}function b(E,F){if(F=ve({},F||c.value),typeof E=="string"){const f=ql(n,E,F.path),m=e.resolve({path:f.path},F),y=i.createHref(f.fullPath);return ve(f,m,{params:d(m.params),hash:sc(f.hash),redirectedFrom:void 0,href:y})}let x;if("path"in E)x=ve({},E,{path:ql(n,E.path,F.path).path});else{const f=ve({},E.params);for(const m in f)f[m]==null&&delete f[m];x=ve({},E,{params:h(E.params)}),F.params=h(F.params)}const $=e.resolve(x,F),ue=E.hash||"";$.params=u(d($.params));const xe=MO(s,ve({},E,{hash:vD(ue),path:$.path})),ne=i.createHref(xe);return ve({fullPath:xe,hash:ue,query:s===xg?ID(E.query):E.query||{}},$,{redirectedFrom:void 0,href:ne})}function A(E){return typeof E=="string"?ql(n,E,c.value.path):ve({},E)}function I(E,F){if(l!==E)return Hi(8,{from:F,to:E})}function O(E){return ge(E)}function z(E){return O(ve(A(E),{replace:!0}))}function re(E){const F=E.matched[E.matched.length-1];if(F&&F.redirect){const{redirect:x}=F;let $=typeof x=="function"?x(E):x;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=A($):{path:$},$.params={}),ve({query:E.query,hash:E.hash,params:"path"in $?{}:E.params},$)}}function ge(E,F){const x=l=b(E),$=c.value,ue=E.state,xe=E.force,ne=E.replace===!0,f=re(x);if(f)return ge(ve(A(f),{state:typeof f=="object"?ve({},ue,f.state):ue,force:xe,replace:ne}),F||x);const m=x;m.redirectedFrom=F;let y;return!xe&&LO(s,$,x)&&(y=Hi(16,{to:m,from:$}),bs($,$,!0,!1)),(y?Promise.resolve(y):Te(m,$)).catch(w=>Nn(w)?Nn(w,2)?w:Qt(w):Ie(w,m,$)).then(w=>{if(w){if(Nn(w,2))return ge(ve({replace:ne},A(w.to),{state:typeof w.to=="object"?ve({},ue,w.to.state):ue,force:xe}),F||m)}else w=ct(m,$,!0,ne,ue);return ye(m,$,w),w})}function j(E,F){const x=I(E,F);return x?Promise.reject(x):Promise.resolve()}function Te(E,F){let x;const[$,ue,xe]=DD(E,F);x=Kl($.reverse(),"beforeRouteLeave",E,F);for(const f of $)f.leaveGuards.forEach(m=>{x.push(Zn(m,E,F))});const ne=j.bind(null,E,F);return x.push(ne),hi(x).then(()=>{x=[];for(const f of r.list())x.push(Zn(f,E,F));return x.push(ne),hi(x)}).then(()=>{x=Kl(ue,"beforeRouteUpdate",E,F);for(const f of ue)f.updateGuards.forEach(m=>{x.push(Zn(m,E,F))});return x.push(ne),hi(x)}).then(()=>{x=[];for(const f of E.matched)if(f.beforeEnter&&!F.matched.includes(f))if(dn(f.beforeEnter))for(const m of f.beforeEnter)x.push(Zn(m,E,F));else x.push(Zn(f.beforeEnter,E,F));return x.push(ne),hi(x)}).then(()=>(E.matched.forEach(f=>f.enterCallbacks={}),x=Kl(xe,"beforeRouteEnter",E,F),x.push(ne),hi(x))).then(()=>{x=[];for(const f of o.list())x.push(Zn(f,E,F));return x.push(ne),hi(x)}).catch(f=>Nn(f,8)?f:Promise.reject(f))}function ye(E,F,x){for(const $ of a.list())$(E,F,x)}function ct(E,F,x,$,ue){const xe=I(E,F);if(xe)return xe;const ne=F===Yn,f=mi?history.state:{};x&&($||ne?i.replace(E.fullPath,ve({scroll:ne&&f&&f.scroll},ue)):i.push(E.fullPath,ue)),c.value=E,bs(E,F,x,ne),Qt()}let lt;function Gt(){lt||(lt=i.listen((E,F,x)=>{if(!zo.listening)return;const $=b(E),ue=re($);if(ue){ge(ve(ue,{replace:!0}),$).catch(Lr);return}l=$;const xe=c.value;mi&&WO(Sg(xe.fullPath,x.delta),pl()),Te($,xe).catch(ne=>Nn(ne,12)?ne:Nn(ne,2)?(ge(ne.to,$).then(f=>{Nn(f,20)&&!x.delta&&x.type===ho.pop&&i.go(-1,!1)}).catch(Lr),Promise.reject()):(x.delta&&i.go(-x.delta,!1),Ie(ne,$,xe))).then(ne=>{ne=ne||ct($,xe,!1),ne&&(x.delta&&!Nn(ne,8)?i.go(-x.delta,!1):x.type===ho.pop&&Nn(ne,20)&&i.go(-1,!1)),ye($,xe,ne)}).catch(Lr)}))}let kn=dr(),lr=dr(),Ve;function Ie(E,F,x){Qt(E);const $=lr.list();return $.length?$.forEach(ue=>ue(E,F,x)):console.error(E),Promise.reject(E)}function we(){return Ve&&c.value!==Yn?Promise.resolve():new Promise((E,F)=>{kn.add([E,F])})}function Qt(E){return Ve||(Ve=!E,Gt(),kn.list().forEach(([F,x])=>E?x(E):F()),kn.reset()),E}function bs(E,F,x,$){const{scrollBehavior:ue}=t;if(!mi||!ue)return Promise.resolve();const xe=!x&&qO(Sg(E.fullPath,0))||($||!x)&&history.state&&history.state.scroll||null;return s_().then(()=>ue(E,F,xe)).then(ne=>ne&&HO(ne)).catch(ne=>Ie(ne,E,F))}const Yt=E=>i.go(E);let St;const li=new Set,zo={currentRoute:c,listening:!0,addRoute:p,removeRoute:g,hasRoute:v,getRoutes:_,resolve:b,options:t,push:O,replace:z,go:Yt,back:()=>Yt(-1),forward:()=>Yt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:lr.add,isReady:we,install(E){const F=this;E.component("RouterLink",Xn),E.component("RouterView",nE),E.config.globalProperties.$router=F,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>de(c)}),mi&&!St&&c.value===Yn&&(St=!0,O(i.location).catch(ue=>{}));const x={};for(const ue in Yn)x[ue]=jt(()=>c.value[ue]);E.provide(Zd,F),E.provide(tE,go(x)),E.provide(eh,c);const $=E.unmount;li.add(E),E.unmount=function(){li.delete(E),li.size<1&&(l=Yn,lt&&lt(),lt=null,c.value=Yn,St=!1,Ve=!1),$()}}};return zo}function hi(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function DD(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(l=>ji(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ji(l,c))||i.push(c))}return[n,s,i]}const ws=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},rr=t=>(mo("data-v-9cf73bec"),t=t(),_o(),t),PD=rr(()=>L("img",{alt:"Vue logo",class:"logo",src:ZI,width:"125",height:"125"},null,-1)),xD=rr(()=>L("br",null,null,-1)),MD=rr(()=>L("p",null,"Alejandro Martín González",-1)),LD=rr(()=>L("a",{href:"#"},"Politica de Privacidad",-1)),FD=rr(()=>L("br",null,null,-1)),UD=rr(()=>L("a",{href:"#"},"649019746",-1)),BD={__name:"App",setup(t){let e=rn("");Dw($i,s=>{s&&(s.uid,e.value=s.email)});function n(){$i.signOut().then(()=>{e.value="",router.push("/inicio")}).catch(s=>{})}return(s,i)=>{const r=QT("v-footer");return It(),cn(xt,null,[L("header",null,[PD,L("nav",null,[Je(yr(de(e))+" | ",1),Me(de(Xn),{to:"/"},{default:On(()=>[Je("Inicio")]),_:1}),Je(" | "),Me(de(Xn),{to:"/ofimatica"},{default:On(()=>[Je("Ofimatica")]),_:1}),Je(" | "),Me(de(Xn),{to:"/programacion"},{default:On(()=>[Je("Programación")]),_:1}),Je(" | "),Me(de(Xn),{to:"/sistemas"},{default:On(()=>[Je("Sistemas Operativos")]),_:1}),Je(" | "),de(e)==""?(It(),ya(de(Xn),{key:0,to:"/registro"},{default:On(()=>[Je("Registro")]),_:1})):ea("",!0),Je(" | "),de(e)==""?(It(),ya(de(Xn),{key:1,to:"/login"},{default:On(()=>[Je("Login")]),_:1})):ea("",!0),Je(" | "),de(e)!=""?(It(),ya(de(Xn),{key:2,to:"/administracion"},{default:On(()=>[Je("Administración")]),_:1})):ea("",!0),Je(" | "),de(e)!=""?(It(),cn("button",{key:3,onClick:n},"Cerrar Sesion")):ea("",!0)])]),L("main",null,[Me(de(nE))]),xD,Me(r,null,{default:On(()=>[MD,LD,FD,UD]),_:1})],64)}}},VD=ws(BD,[["__scopeId","data-v-9cf73bec"]]);const $D="/assets/oak-d9ad3793.png";const jD={},gl=t=>(mo("data-v-2728a371"),t=t(),_o(),t),HD={class:"greetings"},WD=gl(()=>L("h1",{class:"green"},"Inicio",-1)),qD=gl(()=>L("p",null,"Somos una empresa de cursos en línea enfocada en la enseñanza de habilidades de informática y tecnología. Ofrecemos una amplia variedad de cursos diseñados por expertos en la materia, disponibles en múltiples formatos y accesibles desde cualquier dispositivo. Nuestro objetivo es brindar una experiencia de aprendizaje en línea efectiva y de alta calidad para nuestros estudiantes.",-1)),KD=gl(()=>L("img",{src:$D,alt:"",srcset:""},null,-1)),zD=gl(()=>L("a",{href:"https://proyectovue-ca4b7.web.app/pdf/manual_de_uso.pdf",target:"_blank"},"MANUAL DE USO",-1)),GD=[WD,qD,KD,zD];function QD(t,e){return It(),cn("div",HD,GD)}const YD=ws(jD,[["render",QD],["__scopeId","data-v-2728a371"]]);const $o=t=>(mo("data-v-af7a7834"),t=t(),_o(),t),XD={class:"greetings"},JD=$o(()=>L("br",null,null,-1)),ZD=$o(()=>L("br",null,null,-1)),e1=$o(()=>L("br",null,null,-1)),t1=$o(()=>L("br",null,null,-1)),n1=$o(()=>L("br",null,null,-1)),s1={__name:"registro",setup(t){var e=rn(""),n=rn("");function s(){pN($i,e.value,n.value).then(i=>{i.user}).catch(i=>{i.code,i.message})}return(i,r)=>(It(),cn("div",XD,[JD,Je(" Usuario: "),ZD,Us(L("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=o=>Ue(e)?e.value=o:e=o)},null,512),[[Vs,de(e)]]),e1,Je(" Password: "),t1,Us(L("input",{type:"password","onUpdate:modelValue":r[1]||(r[1]=o=>Ue(n)?n.value=o:n=o)},null,512),[[Vs,de(n)]]),n1,L("button",{type:"submit",onClick:r[2]||(r[2]=o=>s())},"Crear")]))}},i1=ws(s1,[["__scopeId","data-v-af7a7834"]]),r1="/assets/access-224e1f55.png",o1="/assets/word-3e9ca337.png",a1="/assets/excel-033cf403.png";const c1={},l1={class:"greetings"},u1=$h('<h1 class="green" data-v-f478afed>Ofimatica</h1><div class="listado" data-v-f478afed><ul data-v-f478afed><li data-v-f478afed>Nombre: Curso de Access</li><li data-v-f478afed>Duración: 20h</li><li data-v-f478afed><img src="'+r1+'" alt="" srcset="" data-v-f478afed></li><li data-v-f478afed><button data-v-f478afed>Inscribirse</button></li><li data-v-f478afed><a href="https://proyectovue-ca4b7.web.app/pdf/ofimatica/Access.pdf" target="_blank" data-v-f478afed>Obtener Información</a></li></ul><ul data-v-f478afed><li data-v-f478afed>Nombre: Curso de Word</li><li data-v-f478afed>Duración: 17h</li><li data-v-f478afed><img src="'+o1+'" alt="" srcset="" data-v-f478afed></li><li data-v-f478afed><button data-v-f478afed>Inscribirse</button></li><li data-v-f478afed><a href="https://proyectovue-ca4b7.web.app/pdf/ofimatica/Word.pdf" target="_blank" data-v-f478afed>Obtener Información</a></li></ul><ul data-v-f478afed><li data-v-f478afed>Nombre: Curso de Excel</li><li data-v-f478afed>Duración: 16h</li><li data-v-f478afed><img src="'+a1+'" alt="" srcset="" data-v-f478afed></li><li data-v-f478afed><button data-v-f478afed>Inscribirse</button></li><li data-v-f478afed><a href="https://proyectovue-ca4b7.web.app/pdf/ofimatica/Excel.pdf" target="_blank" data-v-f478afed>Obtener Información</a></li></ul></div>',2),h1=[u1];function d1(t,e){return It(),cn("div",l1,h1)}const sE=ws(c1,[["render",d1],["__scopeId","data-v-f478afed"]]),f1="/assets/python-f28da9a3.png",p1="/assets/java-8662af59.png",g1="/assets/js-48d02175.png";const m1={},_1={class:"greetings"},y1=$h('<h1 class="green" data-v-08b45b40>Programación</h1><div class="listado" data-v-08b45b40><ul data-v-08b45b40><li data-v-08b45b40>Nombre: Curso de Python</li><li data-v-08b45b40>Duración: 20h</li><li data-v-08b45b40><img src="'+f1+'" alt="" srcset="" data-v-08b45b40></li><li data-v-08b45b40><button data-v-08b45b40>Inscribirse</button></li><li data-v-08b45b40><a href="https://proyectovue-ca4b7.web.app/pdf/programacion/Python.pdf" target="_blank" data-v-08b45b40>Obtener Información</a></li></ul><ul data-v-08b45b40><li data-v-08b45b40>Nombre: Curso de Java </li><li data-v-08b45b40>Duración: 17h</li><li data-v-08b45b40><img src="'+p1+'" alt="" srcset="" data-v-08b45b40></li><li data-v-08b45b40><button data-v-08b45b40>Inscribirse</button></li><li data-v-08b45b40><a href="https://proyectovue-ca4b7.web.app/pdf/programacion/Java.pdf" target="_blank" data-v-08b45b40>Obtener Información</a></li></ul><ul data-v-08b45b40><li data-v-08b45b40>Nombre: Curso de JavaScript</li><li data-v-08b45b40>Duración: 16h</li><li data-v-08b45b40><img src="'+g1+'" alt="" srcset="" data-v-08b45b40></li><li data-v-08b45b40><button data-v-08b45b40>Inscribirse</button></li><li data-v-08b45b40><a href="https://proyectovue-ca4b7.web.app/pdf/programacion/JavaScript.pdf" target="_blank" data-v-08b45b40>Obtener Información</a></li></ul></div>',2),v1=[y1];function w1(t,e){return It(),cn("div",_1,v1)}const iE=ws(m1,[["render",w1],["__scopeId","data-v-08b45b40"]]),E1="/assets/android-f22d14b0.png",b1="/assets/linux-c0e017ee.png",T1="/assets/w11-b9536019.png";const I1={},C1={class:"greetings"},S1=$h('<h1 class="green" data-v-ca8f5c2b>Sistemas Operativos</h1><div class="listado" data-v-ca8f5c2b><ul data-v-ca8f5c2b><li data-v-ca8f5c2b>Nombre: Curso de Android</li><li data-v-ca8f5c2b>Duración: 20h</li><li data-v-ca8f5c2b><img src="'+E1+'" alt="" srcset="" data-v-ca8f5c2b></li><li data-v-ca8f5c2b><button data-v-ca8f5c2b>Inscribirse</button></li><li data-v-ca8f5c2b><a href="https://proyectovue-ca4b7.web.app/pdf/sistemas/Android.pdf" target="_blank" data-v-ca8f5c2b>Obtener Información</a></li></ul><ul data-v-ca8f5c2b><li data-v-ca8f5c2b>Nombre: Curso de Linux</li><li data-v-ca8f5c2b>Duración: 17h</li><li data-v-ca8f5c2b><img src="'+b1+'" alt="" srcset="" data-v-ca8f5c2b></li><li data-v-ca8f5c2b><button data-v-ca8f5c2b>Inscribirse</button></li><li data-v-ca8f5c2b><a href="https://proyectovue-ca4b7.web.app/pdf/sistemas/Linux.pdf" target="_blank" data-v-ca8f5c2b>Obtener Información</a></li></ul><ul data-v-ca8f5c2b><li data-v-ca8f5c2b>Nombre: Curso de Windows</li><li data-v-ca8f5c2b>Duración: 16h</li><li data-v-ca8f5c2b><img src="'+T1+'" alt="" srcset="" data-v-ca8f5c2b></li><li data-v-ca8f5c2b><button data-v-ca8f5c2b>Inscribirse</button></li><li data-v-ca8f5c2b><a href="https://proyectovue-ca4b7.web.app/pdf/sistemas/Windows.pdf" target="_blank" data-v-ca8f5c2b>Obtener Información</a></li></ul></div>',2),R1=[S1];function A1(t,e){return It(),cn("div",C1,R1)}const rE=ws(I1,[["render",A1],["__scopeId","data-v-ca8f5c2b"]]);const Es=t=>(mo("data-v-8f54af7e"),t=t(),_o(),t),k1={class:"greetings"},N1=Es(()=>L("label",{for:"usuario"},"Usuario: ",-1)),O1=Es(()=>L("br",null,null,-1)),D1=Es(()=>L("br",null,null,-1)),P1=Es(()=>L("label",{for:"password"},"Password: ",-1)),x1=Es(()=>L("br",null,null,-1)),M1=Es(()=>L("br",null,null,-1)),L1=Es(()=>L("br",null,null,-1)),F1=Es(()=>L("br",null,null,-1)),U1={__name:"login",setup(t){let e=rn(""),n=rn("");function s(){gN($i,e.value,n.value).then(r=>{r.user,console.log(r.user)}).catch(r=>{r.code,r.message,console.log(r.message)})}function i(){$N($i,new Zt).then(r=>{Zt.credentialFromResult(r).accessToken,r.user}).catch(r=>{r.code,r.message,r.customData.email,Zt.credentialFromError(r)})}return(r,o)=>(It(),cn("div",k1,[N1,O1,Us(L("input",{type:"text",name:"usuario",id:"usuario","onUpdate:modelValue":o[0]||(o[0]=a=>Ue(e)?e.value=a:e=a)},null,512),[[Vs,de(e)]]),D1,P1,x1,Us(L("input",{type:"password",name:"password",id:"password","onUpdate:modelValue":o[1]||(o[1]=a=>Ue(n)?n.value=a:n=a)},null,512),[[Vs,de(n)]]),M1,L("button",{onClick:s},"Login con Correo"),L1,L("button",{onClick:i,id:"google"},"Login con Google"),F1]))}},B1=ws(U1,[["__scopeId","data-v-8f54af7e"]]),V1="/assets/defecto-b075c76d.png";/**
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
 */const oE="firebasestorage.googleapis.com",aE="storageBucket",$1=2*60*1e3,j1=10*60*1e3;/**
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
 */class Ke extends An{constructor(e,n,s=0){super(zl(e),`Firebase Storage: ${n} (${zl(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ke.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return zl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var qe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(qe||(qe={}));function zl(t){return"storage/"+t}function ef(){const t="An unknown error occurred, please check the error payload for server response.";return new Ke(qe.UNKNOWN,t)}function H1(t){return new Ke(qe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function W1(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ke(qe.UNAUTHENTICATED,t)}function q1(){return new Ke(qe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function K1(t){return new Ke(qe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function z1(){return new Ke(qe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function G1(){return new Ke(qe.CANCELED,"User canceled the upload/download.")}function Q1(t){return new Ke(qe.INVALID_URL,"Invalid URL '"+t+"'.")}function Y1(t){return new Ke(qe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function X1(){return new Ke(qe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+aE+"' property when initializing the app?")}function J1(){return new Ke(qe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Z1(t){return new Ke(qe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function th(t){return new Ke(qe.INVALID_ARGUMENT,t)}function cE(){return new Ke(qe.APP_DELETED,"The Firebase app was deleted.")}function eP(t){return new Ke(qe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ur(t,e){return new Ke(qe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function fr(t){throw new Ke(qe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Ft{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Ft.makeFromUrl(e,n)}catch{return new Ft(e,"")}if(s.path==="")return s;throw Y1(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(O){O.path_=decodeURIComponent(O.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},_=n===oE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",b=new RegExp(`^https?://${_}/${i}/${v}`,"i"),I=[{regex:a,indices:c,postModify:r},{regex:p,indices:g,postModify:l},{regex:b,indices:{bucket:1,path:2},postModify:l}];for(let O=0;O<I.length;O++){const z=I[O],re=z.regex.exec(e);if(re){const ge=re[z.indices.bucket];let j=re[z.indices.path];j||(j=""),s=new Ft(ge,j),z.postModify(s);break}}if(s==null)throw Q1(e);return s}}class tP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function nP(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...v){l||(l=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,t(p,c())},v)}function d(){r&&clearTimeout(r)}function p(v,...b){if(l){d();return}if(v){d(),u.call(null,v,...b);return}if(c()||o){d(),u.call(null,v,...b);return}s<64&&(s*=2);let I;a===1?(a=2,I=0):I=(s+Math.random())*1e3,h(I)}let g=!1;function _(v){g||(g=!0,d(),!l&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,_(!0)},n),_}function sP(t){t(!1)}/**
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
 */function iP(t){return t!==void 0}function rP(t){return typeof t=="object"&&!Array.isArray(t)}function lE(t){return typeof t=="string"||t instanceof String}function Vg(t){return tf()&&t instanceof Blob}function tf(){return typeof Blob<"u"&&!c0()}function $g(t,e,n,s){if(s<e)throw th(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw th(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function oP(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function aP(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Ws;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ws||(Ws={}));/**
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
 */function cP(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class lP{constructor(e,n,s,i,r,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new ca(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Ws.NO_ERROR,c=r.getStatus();if(!a||cP(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Ws.ABORT;s(!1,new ca(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new ca(l,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());iP(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=ef();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?cE():G1();o(c)}else{const c=z1();o(c)}};this.canceled_?n(!1,new ca(!1,null,!0)):this.backoffId_=nP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&sP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ca{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function uP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function hP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function dP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function fP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function pP(t,e,n,s,i,r,o=!0){const a=aP(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return dP(l,e),uP(l,n),hP(l,r),fP(l,s),new lP(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function gP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function mP(...t){const e=gP();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(tf())return new Blob(t);throw new Ke(qe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function _P(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function yP(t){if(typeof atob>"u")throw Z1("base-64");return atob(t)}/**
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
 */const yn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Gl{constructor(e,n){this.data=e,this.contentType=n||null}}function vP(t,e){switch(t){case yn.RAW:return new Gl(uE(e));case yn.BASE64:case yn.BASE64URL:return new Gl(hE(t,e));case yn.DATA_URL:return new Gl(EP(e),bP(e))}throw ef()}function uE(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function wP(t){let e;try{e=decodeURIComponent(t)}catch{throw Ur(yn.DATA_URL,"Malformed data URL.")}return uE(e)}function hE(t,e){switch(t){case yn.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw Ur(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case yn.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw Ur(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=yP(e)}catch(i){throw i.message.includes("polyfill")?i:Ur(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class dE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ur(yn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=TP(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function EP(t){const e=new dE(t);return e.base64?hE(yn.BASE64,e.rest):wP(e.rest)}function bP(t){return new dE(t).contentType}function TP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class ss{constructor(e,n){let s=0,i="";Vg(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Vg(this.data_)){const s=this.data_,i=_P(s,e,n);return i===null?null:new ss(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new ss(s,!0)}}static getBlob(...e){if(tf()){const n=e.map(s=>s instanceof ss?s.data_:s);return new ss(mP.apply(null,n))}else{const n=e.map(o=>lE(o)?vP(yn.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new ss(i,!0)}}uploadData(){return this.data_}}/**
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
 */function IP(t){let e;try{e=JSON.parse(t)}catch{return null}return rP(e)?e:null}/**
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
 */function CP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function SP(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function fE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function RP(t,e){return e}class bt{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||RP}}let la=null;function AP(t){return!lE(t)||t.length<2?t:fE(t)}function kP(){if(la)return la;const t=[];t.push(new bt("bucket")),t.push(new bt("generation")),t.push(new bt("metageneration")),t.push(new bt("name","fullPath",!0));function e(r,o){return AP(o)}const n=new bt("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new bt("size");return i.xform=s,t.push(i),t.push(new bt("timeCreated")),t.push(new bt("updated")),t.push(new bt("md5Hash",null,!0)),t.push(new bt("cacheControl",null,!0)),t.push(new bt("contentDisposition",null,!0)),t.push(new bt("contentEncoding",null,!0)),t.push(new bt("contentLanguage",null,!0)),t.push(new bt("contentType",null,!0)),t.push(new bt("metadata","customMetadata",!0)),la=t,la}function NP(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new Ft(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function OP(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return NP(s,t),s}function DP(t,e,n){const s=IP(e);return s===null?null:OP(t,s,n)}function PP(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class xP{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function MP(t){if(!t)throw ef()}function LP(t,e){function n(s,i){const r=DP(t,i,e);return MP(r!==null),r}return n}function FP(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=q1():i=W1():n.getStatus()===402?i=H1(t.bucket):n.getStatus()===403?i=K1(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function UP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function BP(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=UP(null,e)),s}function VP(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let I="";for(let O=0;O<2;O++)I=I+Math.random().toString().slice(2);return I}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=BP(e,s,i),u=PP(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",p=ss.getBlob(h,s,d);if(p===null)throw J1();const g={name:l.fullPath},_=oP(r,t.host,t._protocol),v="POST",b=t.maxUploadRetryTime,A=new xP(_,v,LP(t,n),b);return A.urlParams=g,A.headers=o,A.body=p.uploadData(),A.errorHandler=FP(e),A}class $P{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ws.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ws.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ws.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw fr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw fr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw fr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw fr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw fr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class jP extends $P{initXhr(){this.xhr_.responseType="text"}}function HP(){return new jP}/**
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
 */class Xs{constructor(e,n){this._service=e,n instanceof Ft?this._location=n:this._location=Ft.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Xs(e,n)}get root(){const e=new Ft(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fE(this._location.path)}get storage(){return this._service}get parent(){const e=CP(this._location.path);if(e===null)return null;const n=new Ft(this._location.bucket,e);return new Xs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw eP(e)}}function WP(t,e,n){t._throwIfRoot("uploadBytes");const s=VP(t.storage,t._location,kP(),new ss(e,!0),n);return t.storage.makeRequestWithTokens(s,HP).then(i=>({metadata:i,ref:t}))}function qP(t,e){const n=SP(t._location.path,e),s=new Ft(t._location.bucket,n);return new Xs(t.storage,s)}/**
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
 */function KP(t){return/^[A-Za-z]+:\/\//.test(t)}function zP(t,e){return new Xs(t,e)}function pE(t,e){if(t instanceof nf){const n=t;if(n._bucket==null)throw X1();const s=new Xs(n,n._bucket);return e!=null?pE(s,e):s}else return e!==void 0?qP(t,e):t}function GP(t,e){if(e&&KP(e)){if(t instanceof nf)return zP(t,e);throw th("To use ref(service, url), the first argument must be a Storage instance.")}else return pE(t,e)}function jg(t,e){const n=e==null?void 0:e[aE];return n==null?null:Ft.makeFromBucketSpec(n,t)}function QP(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:V_(i,t.app.options.projectId))}class nf{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=oE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$1,this._maxUploadRetryTime=j1,this._requests=new Set,i!=null?this._bucket=Ft.makeFromBucketSpec(i,this._host):this._bucket=jg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ft.makeFromBucketSpec(this._url,e):this._bucket=jg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$g("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$g("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Xs(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new tP(cE());{const o=pP(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Hg="@firebase/storage",Wg="0.11.1";/**
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
 */const gE="storage";function YP(t,e,n){return t=Be(t),WP(t,e,n)}function XP(t,e){return t=Be(t),GP(t,e)}function JP(t=Dc(),e){t=Be(t);const s=Oc(t,gE).getImmediate({identifier:e}),i=U_("storage");return i&&ZP(s,...i),s}function ZP(t,e,n,s={}){QP(t,e,n,s)}function ex(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new nf(n,s,i,e,ni)}function tx(){In(new hn(gE,ex,"PUBLIC").setMultipleInstances(!0)),Ut(Hg,Wg,""),Ut(Hg,Wg,"esm2017")}tx();/**
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
 */const nx=new Map,sx={activated:!1,tokenObservers:[]};function Rn(t){return nx.get(t)||Object.assign({},sx)}const qg={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class ix{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Gr,await rx(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Gr,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function rx(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const ox={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},ic=new Yi("appCheck","AppCheck",ox);function ax(t){if(!Rn(t).activated)throw ic.create("use-before-activation",{appName:t.name})}/**
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
 */const cx="firebase-app-check-database",lx=1,nh="firebase-app-check-store";let ua=null;function ux(){return ua||(ua=new Promise((t,e)=>{try{const n=indexedDB.open(cx,lx);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(ic.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(nh,{keyPath:"compositeKey"})}}}catch(n){e(ic.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ua)}function hx(t,e){return dx(fx(t),e)}async function dx(t,e){const s=(await ux()).transaction(nh,"readwrite"),r=s.objectStore(nh).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=c=>{o()},s.onerror=c=>{var l;a(ic.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function fx(t){return`${t.options.appId}-${t.name}`}/**
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
 */const sh=new yo("@firebase/app-check");function Kg(t,e){return H_()?hx(t,e).catch(n=>{sh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const px={error:"UNKNOWN_ERROR"};function gx(t){return Ac.encodeString(JSON.stringify(t),!1)}async function ih(t,e=!1){const n=t.app;ax(n);const s=Rn(n);let i=s.token,r;if(i&&!Sr(i)&&(s.token=void 0,i=void 0),!i){const c=await s.cachedTokenPromise;c&&(Sr(c)?i=c:await Kg(n,void 0))}if(!e&&i&&Sr(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await Rn(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?sh.warn(c.message):sh.error(c),r=c}let a;return i?r?Sr(i)?a={token:i.token,internalError:r}:a=Gg(r):(a={token:i.token},s.token=i,await Kg(n,i)):a=Gg(r),o&&yx(n,a),a}function mx(t,e,n,s){const{app:i}=t,r=Rn(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Sr(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),zg(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>zg(t))}function mE(t,e){const n=Rn(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function zg(t){const{app:e}=t,n=Rn(e);let s=n.tokenRefresher;s||(s=_x(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function _x(t){const{app:e}=t;return new ix(async()=>{const n=Rn(e);let s;if(n.token?s=await ih(t,!0):s=await ih(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=Rn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},qg.RETRIAL_MIN_WAIT,qg.RETRIAL_MAX_WAIT)}function yx(t,e){const n=Rn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Sr(t){return t.expireTimeMillis-Date.now()>0}function Gg(t){return{token:gx(px),error:t}}/**
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
 */class vx{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Rn(this.app);for(const n of e)mE(this.app,n.next);return Promise.resolve()}}function wx(t,e){return new vx(t,e)}function Ex(t){return{getToken:e=>ih(t,e),addTokenListener:e=>mx(t,"INTERNAL",e),removeTokenListener:e=>mE(t.app,e)}}const bx="@firebase/app-check",Tx="0.6.3",Ix="app-check",Qg="app-check-internal";function Cx(){In(new hn(Ix,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return wx(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Qg).initialize()})),In(new hn(Qg,t=>{const e=t.getProvider("app-check").getImmediate();return Ex(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ut(bx,Tx)}Cx();const Sx=Symbol("firebaseApp");function sf(t){return Sc()&&on(Sx,null)||Dc(t)}const Ln=()=>{};function rf(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function Rx(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function oi(t){return!!t&&typeof t=="object"}const Ax=Object.prototype;function kx(t){return oi(t)&&Object.getPrototypeOf(t)===Ax}function of(t){return oi(t)&&t.type==="document"}function Nx(t){return oi(t)&&t.type==="collection"}function Ox(t){return of(t)||Nx(t)}function Dx(t){return oi(t)&&t.type==="query"}function Px(t){return oi(t)&&"ref"in t}function xx(t){return oi(t)&&typeof t.bucket=="string"}function Mx(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function Lx(){return!!(Sc()&&on(D_,null))}const Yg="@firebase/database",Xg="0.14.3";/**
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
 */let _E="";function Fx(t){_E=t}/**
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
 */class Ux{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),rt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Qr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Bx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return zn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const yE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ux(e)}}catch{}return new Bx},Ls=yE("localStorage"),rh=yE("sessionStorage");/**
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
 */const Ai=new yo("@firebase/database"),Vx=function(){let t=1;return function(){return t++}}(),vE=function(t){const e=b0(t),n=new _0;n.update(e);const s=n.digest();return Ac.encodeByteArray(s)},jo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=jo.apply(null,s):typeof s=="object"?e+=rt(s):e+=s,e+=" "}return e};let qs=null,Jg=!0;const $x=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ai.logLevel=fe.VERBOSE,qs=Ai.log.bind(Ai),e&&rh.set("logging_enabled",!0)):typeof t=="function"?qs=t:(qs=null,rh.remove("logging_enabled"))},dt=function(...t){if(Jg===!0&&(Jg=!1,qs===null&&rh.get("logging_enabled")===!0&&$x(!0)),qs){const e=jo.apply(null,t);qs(e)}},Ho=function(t){return function(...e){dt(t,...e)}},oh=function(...t){const e="FIREBASE INTERNAL ERROR: "+jo(...t);Ai.error(e)},Js=function(...t){const e=`FIREBASE FATAL ERROR: ${jo(...t)}`;throw Ai.error(e),new Error(e)},Bt=function(...t){const e="FIREBASE WARNING: "+jo(...t);Ai.warn(e)},jx=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Bt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},wE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Hx=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Wi="[MIN_NAME]",Zs="[MAX_NAME]",or=function(t,e){if(t===e)return 0;if(t===Wi||e===Zs)return-1;if(e===Wi||t===Zs)return 1;{const n=Zg(t),s=Zg(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Wx=function(t,e){return t===e?0:t<e?-1:1},pr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+rt(e))},af=function(t){if(typeof t!="object"||t===null)return rt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=rt(e[s]),n+=":",n+=af(t[e[s]]);return n+="}",n},EE=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function zt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const bE=function(t){P(!wE(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},qx=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Kx=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},zx=new RegExp("^-?(0*)\\d{1,10}$"),Gx=-2147483648,Qx=2147483647,Zg=function(t){if(zx.test(t)){const e=Number(t);if(e>=Gx&&e<=Qx)return e}return null},Wo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Bt("Exception was thrown by user callback.",n),e},Math.floor(0))}},Yx=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Br=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Xx{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Bt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Jx{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(dt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Bt(e)}}class ah{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ah.OWNER="owner";/**
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
 */const cf="5",TE="v",IE="s",CE="r",SE="f",RE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,AE="ls",kE="p",ch="ac",NE="websocket",OE="long_polling";/**
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
 */class Zx{constructor(e,n,s,i,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ls.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ls.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function eM(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function DE(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let s;if(e===NE)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===OE)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);eM(t)&&(n.ns=t.namespace);const i=[];return zt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class tM{constructor(){this.counters_={}}incrementCounter(e,n=1){zn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return t0(this.counters_)}}/**
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
 */const Ql={},Yl={};function lf(t){const e=t.toString();return Ql[e]||(Ql[e]=new tM),Ql[e]}function nM(t,e){const n=t.toString();return Yl[n]||(Yl[n]=e()),Yl[n]}/**
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
 */class sM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Wo(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const em="start",iM="close",rM="pLPCommand",oM="pRTLPCB",PE="id",xE="pw",ME="ser",aM="cb",cM="seg",lM="ts",uM="d",hM="dframe",LE=1870,FE=30,dM=LE-FE,fM=25e3,pM=3e4;class yi{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ho(e),this.stats_=lf(n),this.urlFn=c=>(this.appCheckToken&&(c[ch]=this.appCheckToken),DE(n,OE,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new sM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(pM)),Hx(()=>{if(this.isClosed_)return;this.scriptTagHolder=new uf((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===em)this.id=a,this.password=c;else if(o===iM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[em]="t",s[ME]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[aM]=this.scriptTagHolder.uniqueCallbackIdentifier),s[TE]=cf,this.transportSessionId&&(s[IE]=this.transportSessionId),this.lastSessionId&&(s[AE]=this.lastSessionId),this.applicationId&&(s[kE]=this.applicationId),this.appCheckToken&&(s[ch]=this.appCheckToken),typeof location<"u"&&location.hostname&&RE.test(location.hostname)&&(s[CE]=SE);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){yi.forceAllow_=!0}static forceDisallow(){yi.forceDisallow_=!0}static isAvailable(){return yi.forceAllow_?!0:!yi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!qx()&&!Kx()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=M_(n),i=EE(s,dM);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[hM]="t",s[PE]=e,s[xE]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=rt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class uf{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Vx(),window[rM+this.uniqueCallbackIdentifier]=e,window[oM+this.uniqueCallbackIdentifier]=n,this.myIFrame=uf.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){dt("frame writing exception"),a.stack&&dt(a.stack),dt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||dt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[PE]=this.myID,e[xE]=this.myPW,e[ME]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+FE+s.length<=LE;){const o=this.pendingSegs.shift();s=s+"&"+cM+i+"="+o.seg+"&"+lM+i+"="+o.ts+"&"+uM+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(fM)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{dt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const gM=16384,mM=45e3;let rc=null;typeof MozWebSocket<"u"?rc=MozWebSocket:typeof WebSocket<"u"&&(rc=WebSocket);class en{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ho(this.connId),this.stats_=lf(n),this.connURL=en.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[TE]=cf,typeof location<"u"&&location.hostname&&RE.test(location.hostname)&&(o[CE]=SE),n&&(o[IE]=n),s&&(o[AE]=s),i&&(o[ch]=i),r&&(o[kE]=r),DE(e,NE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ls.set("previous_websocket_failure",!0);try{let s;j_(),this.mySock=new rc(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){en.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&rc!==null&&!en.forceDisallow_}static previouslyFailed(){return Ls.isInMemoryStorage||Ls.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ls.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Qr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=EE(n,gM);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(mM))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}en.responsesRequiredToBeHealthy=2;en.healthyTimeout=3e4;/**
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
 */class fo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[yi,en]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=en&&en.isAvailable();let s=n&&!en.previouslyFailed();if(e.webSocketOnly&&(n||Bt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[en];else{const i=this.transports_=[];for(const r of fo.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);fo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}fo.globalTransportInitialized_=!1;/**
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
 */const _M=6e4,yM=5e3,vM=10*1024,wM=100*1024,Xl="t",tm="d",EM="s",nm="r",bM="e",sm="o",im="a",rm="n",om="p",TM="h";class IM{constructor(e,n,s,i,r,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ho("c:"+this.id+":"),this.transportManager_=new fo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Br(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>wM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>vM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Xl in e){const n=e[Xl];n===im?this.upgradeIfSecondaryHealthy_():n===nm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===sm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=pr("t",e),s=pr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:om,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:im,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:rm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=pr("t",e),s=pr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=pr(Xl,e);if(tm in e){const s=e[tm];if(n===TM){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===rm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===EM?this.onConnectionShutdown_(s):n===nm?this.onReset_(s):n===bM?oh("Server Error: "+s):n===sm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):oh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),cf!==s&&Bt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Br(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(_M))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Br(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(yM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:om,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ls.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class UE{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class BE{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class oc extends BE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Hh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new oc}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const am=32,cm=768;class Ne{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function be(){return new Ne("")}function ce(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ms(t){return t.pieces_.length-t.pieceNum_}function ke(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ne(t.pieces_,e)}function VE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function CM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function $E(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function jE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ne(e,0)}function nt(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ne)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Ne(n,0)}function oe(t){return t.pieceNum_>=t.pieces_.length}function Ht(t,e){const n=ce(t),s=ce(e);if(n===null)return e;if(n===s)return Ht(ke(t),ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function HE(t,e){if(ms(t)!==ms(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function nn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(ms(t)>ms(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class SM{constructor(e,n){this.errorPrefix_=n,this.parts_=$E(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Nc(this.parts_[s]);WE(this)}}function RM(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Nc(e),WE(t)}function AM(t){const e=t.parts_.pop();t.byteLength_-=Nc(e),t.parts_.length>0&&(t.byteLength_-=1)}function WE(t){if(t.byteLength_>cm)throw new Error(t.errorPrefix_+"has a key path longer than "+cm+" bytes ("+t.byteLength_+").");if(t.parts_.length>am)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+am+") or object contains a cycle "+Rs(t))}function Rs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class hf extends BE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new hf}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const gr=1e3,kM=60*5*1e3,lm=30*1e3,NM=1.3,OM=3e4,DM="server_kill",um=3;class Bn extends UE{constructor(e,n,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Bn.nextPersistentConnectionId_++,this.log_=Ho("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=gr,this.maxReconnectDelay_=kM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!j_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");hf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&oc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(rt(r)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Gr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Bn.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&zn(e,"w")){const s=Di(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Bt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||m0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=lm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=g0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+rt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):oh("Unrecognized action received from server: "+rt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=gr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=gr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>OM&&(this.reconnectDelay_=gr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*NM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Bn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(h){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?dt("getToken() completed but was canceled"):(dt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new IM(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{Bt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(DM)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Bt(h),c())}}}interrupt(e){dt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){dt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vu(this.interruptReasons_)&&(this.reconnectDelay_=gr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>af(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Ne(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){dt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=um&&(this.reconnectDelay_=lm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){dt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=um&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+_E.replace(/\./g,"-")]=1,Hh()?e["framework.cordova"]=1:$_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=oc.getInstance().currentlyOnline();return vu(this.interruptReasons_)&&e}}Bn.nextPersistentConnectionId_=0;Bn.nextConnectionId_=0;/**
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
 */class le{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new le(e,n)}}/**
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
 */class ml{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new le(Wi,e),i=new le(Wi,n);return this.compare(s,i)!==0}minPost(){return le.MIN}}/**
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
 */let ha;class qE extends ml{static get __EMPTY_NODE(){return ha}static set __EMPTY_NODE(e){ha=e}compare(e,n){return or(e.name,n.name)}isDefinedOn(e){throw Qi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return le.MIN}maxPost(){return new le(Zs,ha)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new le(e,ha)}toString(){return".key"}}const ki=new qE;/**
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
 */class da{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class tt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??tt.RED,this.left=i??kt.EMPTY_NODE,this.right=r??kt.EMPTY_NODE}copy(e,n,s,i,r){return new tt(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return kt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return kt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}tt.RED=!0;tt.BLACK=!1;class PM{copy(e,n,s,i,r){return this}insert(e,n,s){return new tt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class kt{constructor(e,n=kt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new kt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,tt.BLACK,null,null))}remove(e){return new kt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,tt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new da(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new da(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new da(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new da(this.root_,null,this.comparator_,!0,e)}}kt.EMPTY_NODE=new PM;/**
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
 */function xM(t,e){return or(t.name,e.name)}function df(t,e){return or(t,e)}/**
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
 */let lh;function MM(t){lh=t}const KE=function(t){return typeof t=="number"?"number:"+bE(t):"string:"+t},zE=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&zn(e,".sv"),"Priority must be a string or number.")}else P(t===lh||t.isEmpty(),"priority of unexpected type.");P(t===lh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let hm;class Ze{constructor(e,n=Ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),zE(this.priorityNode_)}static set __childrenNodeConstructor(e){hm=e}static get __childrenNodeConstructor(){return hm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ze(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ze.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return oe(e)?this:ce(e)===".priority"?this.priorityNode_:Ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ce(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(P(s!==".priority"||ms(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+KE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=bE(this.value_):e+=this.value_,this.lazyHash_=vE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ze.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ze.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ze.VALUE_TYPE_ORDER.indexOf(n),r=Ze.VALUE_TYPE_ORDER.indexOf(s);return P(i>=0,"Unknown leaf type: "+n),P(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let GE,QE;function LM(t){GE=t}function FM(t){QE=t}class UM extends ml{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?or(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return le.MIN}maxPost(){return new le(Zs,new Ze("[PRIORITY-POST]",QE))}makePost(e,n){const s=GE(e);return new le(n,new Ze("[PRIORITY-POST]",s))}toString(){return".priority"}}const mt=new UM;/**
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
 */const BM=Math.log(2);class VM{constructor(e){const n=r=>parseInt(Math.log(r)/BM,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ac=function(t,e,n,s){t.sort(e);const i=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=t[c],d=n?n(h):h,new tt(d,h.node,tt.BLACK,null,null);{const p=parseInt(u/2,10)+c,g=i(c,p),_=i(p+1,l);return h=t[p],d=n?n(h):h,new tt(d,h.node,tt.BLACK,g,_)}},r=function(c){let l=null,u=null,h=t.length;const d=function(g,_){const v=h-g,b=h;h-=g;const A=i(v+1,b),I=t[v],O=n?n(I):I;p(new tt(O,I.node,_,null,A))},p=function(g){l?(l.left=g,l=g):(u=g,l=g)};for(let g=0;g<c.count;++g){const _=c.nextBitIsOne(),v=Math.pow(2,c.count-(g+1));_?d(v,tt.BLACK):(d(v,tt.BLACK),d(v,tt.RED))}return u},o=new VM(t.length),a=r(o);return new kt(s||e,a)};/**
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
 */let Jl;const di={};class Fn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(di&&mt,"ChildrenNode.ts has not been loaded"),Jl=Jl||new Fn({".priority":di},{".priority":mt}),Jl}get(e){const n=Di(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof kt?n:null}hasIndex(e){return zn(this.indexSet_,e.toString())}addIndex(e,n){P(e!==ki,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(le.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=ac(s,e.getCompare()):a=di;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Fn(u,l)}addToIndexes(e,n){const s=xa(this.indexes_,(i,r)=>{const o=Di(this.indexSet_,r);if(P(o,"Missing index implementation for "+r),i===di)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(le.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),ac(a,o.getCompare())}else return di;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new le(e.name,a))),c.insert(e,e.node)}});return new Fn(s,this.indexSet_)}removeFromIndexes(e,n){const s=xa(this.indexes_,i=>{if(i===di)return i;{const r=n.get(e.name);return r?i.remove(new le(e.name,r)):i}});return new Fn(s,this.indexSet_)}}/**
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
 */let mr;class _e{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&zE(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return mr||(mr=new _e(new kt(df),null,Fn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||mr}updatePriority(e){return this.children_.isEmpty()?this:new _e(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?mr:n}}getChild(e){const n=ce(e);return n===null?this:this.getImmediateChild(n).getChild(ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new le(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?mr:this.priorityNode_;return new _e(i,o,r)}}updateChild(e,n){const s=ce(e);if(s===null)return n;{P(ce(e)!==".priority"||ms(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ke(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(mt,(o,a)=>{n[o]=a.val(e),s++,r&&_e.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+KE(this.getPriority().val())+":"),this.forEachChild(mt,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":vE(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new le(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new le(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new le(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,le.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,le.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===qo?-1:0}withIndex(e){if(e===ki||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new _e(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ki||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(mt),i=n.getIterator(mt);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ki?null:this.indexMap_.get(e.toString())}}_e.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class $M extends _e{constructor(){super(new kt(df),_e.EMPTY_NODE,Fn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return _e.EMPTY_NODE}isEmpty(){return!1}}const qo=new $M;Object.defineProperties(le,{MIN:{value:new le(Wi,_e.EMPTY_NODE)},MAX:{value:new le(Zs,qo)}});qE.__EMPTY_NODE=_e.EMPTY_NODE;Ze.__childrenNodeConstructor=_e;MM(qo);FM(qo);/**
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
 */const jM=!0;function ft(t,e=null){if(t===null)return _e.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ze(n,ft(e))}if(!(t instanceof Array)&&jM){const n=[];let s=!1;if(zt(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=ft(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new le(o,c)))}}),n.length===0)return _e.EMPTY_NODE;const r=ac(n,xM,o=>o.name,df);if(s){const o=ac(n,mt.getCompare());return new _e(r,ft(e),new Fn({".priority":o},{".priority":mt}))}else return new _e(r,ft(e),Fn.Default)}else{let n=_e.EMPTY_NODE;return zt(t,(s,i)=>{if(zn(t,s)&&s.substring(0,1)!=="."){const r=ft(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ft(e))}}LM(ft);/**
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
 */class HM extends ml{constructor(e){super(),this.indexPath_=e,P(!oe(e)&&ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?or(e.name,n.name):r}makePost(e,n){const s=ft(e),i=_e.EMPTY_NODE.updateChild(this.indexPath_,s);return new le(n,i)}maxPost(){const e=_e.EMPTY_NODE.updateChild(this.indexPath_,qo);return new le(Zs,e)}toString(){return $E(this.indexPath_,0).join("/")}}/**
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
 */class WM extends ml{compare(e,n){const s=e.node.compareTo(n.node);return s===0?or(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return le.MIN}maxPost(){return le.MAX}makePost(e,n){const s=ft(e);return new le(n,s)}toString(){return".value"}}const qM=new WM;/**
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
 */function KM(t){return{type:"value",snapshotNode:t}}function zM(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function GM(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function dm(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function QM(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class ff{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=mt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Wi}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===mt}copy(){const e=new ff;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function fm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===mt?n="$priority":t.index_===qM?n="$value":t.index_===ki?n="$key":(P(t.index_ instanceof HM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=rt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=rt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+rt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=rt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+rt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function pm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==mt&&(e.i=t.index_.toString()),e}/**
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
 */class cc extends UE{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ho("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=cc.getListenId_(e,s),a={};this.listens_[o]=a;const c=fm(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,s),Di(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",i(d,null)}})}unlisten(e,n){const s=cc.getListenId_(e,n);delete this.listens_[s]}get(e){const n=fm(e._queryParams),s=e._path.toString(),i=new Gr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Xi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Qr(a.responseText)}catch{Bt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Bt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class YM{constructor(){this.rootNode_=_e.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function lc(){return{value:null,children:new Map}}function YE(t,e,n){if(oe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ce(e);t.children.has(s)||t.children.set(s,lc());const i=t.children.get(s);e=ke(e),YE(i,e,n)}}function uh(t,e,n){t.value!==null?n(e,t.value):XM(t,(s,i)=>{const r=new Ne(e.toString()+"/"+s);uh(i,r,n)})}function XM(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class JM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&zt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const gm=10*1e3,ZM=30*1e3,eL=5*60*1e3;class tL{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new JM(e);const s=gm+(ZM-gm)*Math.random();Br(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;zt(e,(i,r)=>{r>0&&zn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Br(this.reportStats_.bind(this),Math.floor(Math.random()*2*eL))}}/**
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
 */var vn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(vn||(vn={}));function XE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function JE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ZE(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class uc{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=vn.ACK_USER_WRITE,this.source=XE()}operationForChild(e){if(oe(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ne(e));return new uc(be(),n,this.revert)}}else return P(ce(this.path)===e,"operationForChild called for unrelated child."),new uc(ke(this.path),this.affectedTree,this.revert)}}/**
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
 */class ei{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=vn.OVERWRITE}operationForChild(e){return oe(this.path)?new ei(this.source,be(),this.snap.getImmediateChild(e)):new ei(this.source,ke(this.path),this.snap)}}/**
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
 */class po{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=vn.MERGE}operationForChild(e){if(oe(this.path)){const n=this.children.subtree(new Ne(e));return n.isEmpty()?null:n.value?new ei(this.source,be(),n.value):new po(this.source,be(),n)}else return P(ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new po(this.source,ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class pf{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(oe(e))return this.isFullyInitialized()&&!this.filtered_;const n=ce(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function nL(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(QM(o.childName,o.snapshotNode))}),_r(t,i,"child_removed",e,s,n),_r(t,i,"child_added",e,s,n),_r(t,i,"child_moved",r,s,n),_r(t,i,"child_changed",e,s,n),_r(t,i,"value",e,s,n),i}function _r(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,c)=>iL(t,a,c)),o.forEach(a=>{const c=sL(t,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function sL(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function iL(t,e,n){if(e.childName==null||n.childName==null)throw Qi("Should only compare child_ events.");const s=new le(e.childName,e.snapshotNode),i=new le(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function eb(t,e){return{eventCache:t,serverCache:e}}function Vr(t,e,n,s){return eb(new pf(e,n,s),t.serverCache)}function tb(t,e,n,s){return eb(t.eventCache,new pf(e,n,s))}function hh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ti(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Zl;const rL=()=>(Zl||(Zl=new kt(Wx)),Zl);class Re{constructor(e,n=rL()){this.value=e,this.children=n}static fromObject(e){let n=new Re(null);return zt(e,(s,i)=>{n=n.set(new Ne(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:be(),value:this.value};if(oe(e))return null;{const s=ce(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ke(e),n);return r!=null?{path:nt(new Ne(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(oe(e))return this;{const n=ce(e),s=this.children.get(n);return s!==null?s.subtree(ke(e)):new Re(null)}}set(e,n){if(oe(e))return new Re(n,this.children);{const s=ce(e),r=(this.children.get(s)||new Re(null)).set(ke(e),n),o=this.children.insert(s,r);return new Re(this.value,o)}}remove(e){if(oe(e))return this.children.isEmpty()?new Re(null):new Re(null,this.children);{const n=ce(e),s=this.children.get(n);if(s){const i=s.remove(ke(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Re(null):new Re(this.value,r)}else return this}}get(e){if(oe(e))return this.value;{const n=ce(e),s=this.children.get(n);return s?s.get(ke(e)):null}}setTree(e,n){if(oe(e))return n;{const s=ce(e),r=(this.children.get(s)||new Re(null)).setTree(ke(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Re(this.value,o)}}fold(e){return this.fold_(be(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(nt(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,be(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(oe(e))return null;{const r=ce(e),o=this.children.get(r);return o?o.findOnPath_(ke(e),nt(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,be(),n)}foreachOnPath_(e,n,s){if(oe(e))return this;{this.value&&s(n,this.value);const i=ce(e),r=this.children.get(i);return r?r.foreachOnPath_(ke(e),nt(n,i),s):new Re(null)}}foreach(e){this.foreach_(be(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(nt(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class un{constructor(e){this.writeTree_=e}static empty(){return new un(new Re(null))}}function $r(t,e,n){if(oe(e))return new un(new Re(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ht(i,e);return r=r.updateChild(o,n),new un(t.writeTree_.set(i,r))}else{const i=new Re(n),r=t.writeTree_.setTree(e,i);return new un(r)}}}function mm(t,e,n){let s=t;return zt(n,(i,r)=>{s=$r(s,nt(e,i),r)}),s}function _m(t,e){if(oe(e))return un.empty();{const n=t.writeTree_.setTree(e,new Re(null));return new un(n)}}function dh(t,e){return ai(t,e)!=null}function ai(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ht(n.path,e)):null}function ym(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(mt,(s,i)=>{e.push(new le(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new le(s,i.value))}),e}function ls(t,e){if(oe(e))return t;{const n=ai(t,e);return n!=null?new un(new Re(n)):new un(t.writeTree_.subtree(e))}}function fh(t){return t.writeTree_.isEmpty()}function qi(t,e){return nb(be(),t.writeTree_,e)}function nb(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(P(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=nb(nt(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(nt(t,".priority"),s)),n}}/**
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
 */function sb(t,e){return cb(e,t)}function oL(t,e,n,s,i){P(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=$r(t.visibleWrites,e,n)),t.lastWriteId=s}function aL(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function cL(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&lL(a,s.path)?i=!1:nn(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return uL(t),!0;if(s.snap)t.visibleWrites=_m(t.visibleWrites,s.path);else{const a=s.children;zt(a,c=>{t.visibleWrites=_m(t.visibleWrites,nt(s.path,c))})}return!0}else return!1}function lL(t,e){if(t.snap)return nn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&nn(nt(t.path,n),e))return!0;return!1}function uL(t){t.visibleWrites=ib(t.allWrites,hL,be()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function hL(t){return t.visible}function ib(t,e,n){let s=un.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)nn(n,o)?(a=Ht(n,o),s=$r(s,a,r.snap)):nn(o,n)&&(a=Ht(o,n),s=$r(s,be(),r.snap.getChild(a)));else if(r.children){if(nn(n,o))a=Ht(n,o),s=mm(s,a,r.children);else if(nn(o,n))if(a=Ht(o,n),oe(a))s=mm(s,be(),r.children);else{const c=Di(r.children,ce(a));if(c){const l=c.getChild(ke(a));s=$r(s,be(),l)}}}else throw Qi("WriteRecord should have .snap or .children")}}return s}function rb(t,e,n,s,i){if(!s&&!i){const r=ai(t.visibleWrites,e);if(r!=null)return r;{const o=ls(t.visibleWrites,e);if(fh(o))return n;if(n==null&&!dh(o,be()))return null;{const a=n||_e.EMPTY_NODE;return qi(o,a)}}}else{const r=ls(t.visibleWrites,e);if(!i&&fh(r))return n;if(!i&&n==null&&!dh(r,be()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(nn(l.path,e)||nn(e,l.path))},a=ib(t.allWrites,o,e),c=n||_e.EMPTY_NODE;return qi(a,c)}}}function dL(t,e,n){let s=_e.EMPTY_NODE;const i=ai(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(mt,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=ls(t.visibleWrites,e);return n.forEachChild(mt,(o,a)=>{const c=qi(ls(r,new Ne(o)),a);s=s.updateImmediateChild(o,c)}),ym(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ls(t.visibleWrites,e);return ym(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function fL(t,e,n,s,i){P(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=nt(e,n);if(dh(t.visibleWrites,r))return null;{const o=ls(t.visibleWrites,r);return fh(o)?i.getChild(n):qi(o,i.getChild(n))}}function pL(t,e,n,s){const i=nt(e,n),r=ai(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=ls(t.visibleWrites,i);return qi(o,s.getNode().getImmediateChild(n))}else return null}function gL(t,e){return ai(t.visibleWrites,e)}function mL(t,e,n,s,i,r,o){let a;const c=ls(t.visibleWrites,e),l=ai(c,be());if(l!=null)a=l;else if(n!=null)a=qi(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=d.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=d.getNext();return u}else return[]}function _L(){return{visibleWrites:un.empty(),allWrites:[],lastWriteId:-1}}function ph(t,e,n,s){return rb(t.writeTree,t.treePath,e,n,s)}function ob(t,e){return dL(t.writeTree,t.treePath,e)}function vm(t,e,n,s){return fL(t.writeTree,t.treePath,e,n,s)}function hc(t,e){return gL(t.writeTree,nt(t.treePath,e))}function yL(t,e,n,s,i,r){return mL(t.writeTree,t.treePath,e,n,s,i,r)}function gf(t,e,n){return pL(t.writeTree,t.treePath,e,n)}function ab(t,e){return cb(nt(t.treePath,e),t.writeTree)}function cb(t,e){return{treePath:t,writeTree:e}}/**
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
 */class vL{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,dm(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,GM(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,zM(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,dm(s,e.snapshotNode,i.oldSnap));else throw Qi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class wL{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const lb=new wL;class mf{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new pf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return gf(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ti(this.viewCache_),r=yL(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function EL(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function bL(t,e,n,s,i){const r=new vL;let o,a;if(n.type===vn.OVERWRITE){const l=n;l.source.fromUser?o=gh(t,e,l.path,l.snap,s,i,r):(P(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!oe(l.path),o=dc(t,e,l.path,l.snap,s,i,a,r))}else if(n.type===vn.MERGE){const l=n;l.source.fromUser?o=IL(t,e,l.path,l.children,s,i,r):(P(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=mh(t,e,l.path,l.children,s,i,a,r))}else if(n.type===vn.ACK_USER_WRITE){const l=n;l.revert?o=RL(t,e,l.path,s,i,r):o=CL(t,e,l.path,l.affectedTree,s,i,r)}else if(n.type===vn.LISTEN_COMPLETE)o=SL(t,e,n.path,s,r);else throw Qi("Unknown operation type: "+n.type);const c=r.getChanges();return TL(e,o,c),{viewCache:o,changes:c}}function TL(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=hh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(KM(hh(e)))}}function ub(t,e,n,s,i,r){const o=e.eventCache;if(hc(s,n)!=null)return e;{let a,c;if(oe(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=ti(e),u=l instanceof _e?l:_e.EMPTY_NODE,h=ob(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=ph(s,ti(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=ce(n);if(l===".priority"){P(ms(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=vm(s,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ke(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=vm(s,n,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=gf(s,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,i,r):a=o.getNode()}}return Vr(e,a,o.isFullyInitialized()||oe(n),t.filter.filtersNodes())}}function dc(t,e,n,s,i,r,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(oe(n))l=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const p=c.getNode().updateChild(n,s);l=u.updateFullNode(c.getNode(),p,null)}else{const p=ce(n);if(!c.isCompleteForPath(n)&&ms(n)>1)return e;const g=ke(n),v=c.getNode().getImmediateChild(p).updateChild(g,s);p===".priority"?l=u.updatePriority(c.getNode(),v):l=u.updateChild(c.getNode(),p,v,g,lb,null)}const h=tb(e,l,c.isFullyInitialized()||oe(n),u.filtersNodes()),d=new mf(i,h,r);return ub(t,h,n,i,d,a)}function gh(t,e,n,s,i,r,o){const a=e.eventCache;let c,l;const u=new mf(i,e,r);if(oe(n))l=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Vr(e,l,!0,t.filter.filtersNodes());else{const h=ce(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),s),c=Vr(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=ke(n),p=a.getNode().getImmediateChild(h);let g;if(oe(d))g=s;else{const _=u.getCompleteChild(h);_!=null?VE(d)===".priority"&&_.getChild(jE(d)).isEmpty()?g=_:g=_.updateChild(d,s):g=_e.EMPTY_NODE}if(p.equals(g))c=e;else{const _=t.filter.updateChild(a.getNode(),h,g,d,u,o);c=Vr(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function wm(t,e){return t.eventCache.isCompleteForChild(e)}function IL(t,e,n,s,i,r,o){let a=e;return s.foreach((c,l)=>{const u=nt(n,c);wm(e,ce(u))&&(a=gh(t,a,u,l,i,r,o))}),s.foreach((c,l)=>{const u=nt(n,c);wm(e,ce(u))||(a=gh(t,a,u,l,i,r,o))}),a}function Em(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function mh(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;oe(n)?l=s:l=new Re(null).setTree(n,s);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),g=Em(t,p,d);c=dc(t,c,new Ne(h),g,i,r,o,a)}}),l.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const g=e.serverCache.getNode().getImmediateChild(h),_=Em(t,g,d);c=dc(t,c,new Ne(h),_,i,r,o,a)}}),c}function CL(t,e,n,s,i,r,o){if(hc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(oe(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return dc(t,e,n,c.getNode().getChild(n),i,r,a,o);if(oe(n)){let l=new Re(null);return c.getNode().forEachChild(ki,(u,h)=>{l=l.set(new Ne(u),h)}),mh(t,e,n,l,i,r,a,o)}else return e}else{let l=new Re(null);return s.foreach((u,h)=>{const d=nt(n,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),mh(t,e,n,l,i,r,a,o)}}function SL(t,e,n,s,i){const r=e.serverCache,o=tb(e,r.getNode(),r.isFullyInitialized()||oe(n),r.isFiltered());return ub(t,o,n,s,lb,i)}function RL(t,e,n,s,i,r){let o;if(hc(s,n)!=null)return e;{const a=new mf(s,e,i),c=e.eventCache.getNode();let l;if(oe(n)||ce(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ph(s,ti(e));else{const h=e.serverCache.getNode();P(h instanceof _e,"serverChildren would be complete if leaf node"),u=ob(s,h)}u=u,l=t.filter.updateFullNode(c,u,r)}else{const u=ce(n);let h=gf(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,ke(n),a,r):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,_e.EMPTY_NODE,ke(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ph(s,ti(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||hc(s,be())!=null,Vr(e,l,o,t.filter.filtersNodes())}}function AL(t,e){const n=ti(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!oe(e)&&!n.getImmediateChild(ce(e)).isEmpty())?n.getChild(e):null}function bm(t,e,n,s){e.type===vn.MERGE&&e.source.queryId!==null&&(P(ti(t.viewCache_),"We should always have a full cache before handling merges"),P(hh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=bL(t.processor_,i,e,n,s);return EL(t.processor_,r.viewCache),P(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,kL(t,r.changes,r.viewCache.eventCache.getNode(),null)}function kL(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return nL(t.eventGenerator_,e,n,i)}/**
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
 */let Tm;function NL(t){P(!Tm,"__referenceConstructor has already been defined"),Tm=t}function _f(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return P(r!=null,"SyncTree gave us an op for an invalid query."),bm(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(bm(o,e,n,s));return r}}function yf(t,e){let n=null;for(const s of t.views.values())n=n||AL(s,e);return n}/**
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
 */let Im;function OL(t){P(!Im,"__referenceConstructor has already been defined"),Im=t}class Cm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Re(null),this.pendingWriteTree_=_L(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function DL(t,e,n,s,i){return oL(t.pendingWriteTree_,e,n,s,i),i?yl(t,new ei(XE(),e,n)):[]}function vi(t,e,n=!1){const s=aL(t.pendingWriteTree_,e);if(cL(t.pendingWriteTree_,e)){let r=new Re(null);return s.snap!=null?r=r.set(be(),!0):zt(s.children,o=>{r=r.set(new Ne(o),!0)}),yl(t,new uc(s.path,r,n))}else return[]}function _l(t,e,n){return yl(t,new ei(JE(),e,n))}function PL(t,e,n){const s=Re.fromObject(n);return yl(t,new po(JE(),e,s))}function xL(t,e,n,s){const i=pb(t,s);if(i!=null){const r=gb(i),o=r.path,a=r.queryId,c=Ht(o,e),l=new ei(ZE(a),c,n);return mb(t,o,l)}else return[]}function ML(t,e,n,s){const i=pb(t,s);if(i){const r=gb(i),o=r.path,a=r.queryId,c=Ht(o,e),l=Re.fromObject(n),u=new po(ZE(a),c,l);return mb(t,o,u)}else return[]}function hb(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Ht(o,e),l=yf(a,c);if(l)return l});return rb(i,e,r,n,!0)}function yl(t,e){return db(e,t.syncPointTree_,null,sb(t.pendingWriteTree_,be()))}function db(t,e,n,s){if(oe(t.path))return fb(t,e,n,s);{const i=e.get(be());n==null&&i!=null&&(n=yf(i,be()));let r=[];const o=ce(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=ab(s,o);r=r.concat(db(a,c,l,u))}return i&&(r=r.concat(_f(i,t,s,n))),r}}function fb(t,e,n,s){const i=e.get(be());n==null&&i!=null&&(n=yf(i,be()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=ab(s,o),u=t.operationForChild(o);u&&(r=r.concat(fb(u,a,c,l)))}),i&&(r=r.concat(_f(i,t,s,n))),r}function pb(t,e){return t.tagToQueryMap.get(e)}function gb(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ne(t.substr(0,e))}}function mb(t,e,n){const s=t.syncPointTree_.get(e);P(s,"Missing sync point for query tag that we're tracking");const i=sb(t.pendingWriteTree_,e);return _f(s,n,i,null)}/**
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
 */class vf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new vf(n)}node(){return this.node_}}class wf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=nt(this.path_,e);return new wf(this.syncTree_,n)}node(){return hb(this.syncTree_,this.path_)}}const LL=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Sm=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return FL(t[".sv"],e,n);if(typeof t[".sv"]=="object")return UL(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},FL=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},UL=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&P(!1,"Unexpected increment value: "+s);const i=e.node();if(P(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},BL=function(t,e,n,s){return Ef(e,new wf(n,t),s)},VL=function(t,e,n){return Ef(t,new vf(e),n)};function Ef(t,e,n){const s=t.getPriority().val(),i=Sm(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Sm(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ze(a,ft(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ze(i))),o.forEachChild(mt,(a,c)=>{const l=Ef(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
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
 */class bf{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Tf(t,e){let n=e instanceof Ne?e:new Ne(e),s=t,i=ce(n);for(;i!==null;){const r=Di(s.node.children,i)||{children:{},childCount:0};s=new bf(i,s,r),n=ke(n),i=ce(n)}return s}function ar(t){return t.node.value}function _b(t,e){t.node.value=e,_h(t)}function yb(t){return t.node.childCount>0}function $L(t){return ar(t)===void 0&&!yb(t)}function vl(t,e){zt(t.node.children,(n,s)=>{e(new bf(n,t,s))})}function vb(t,e,n,s){n&&!s&&e(t),vl(t,i=>{vb(i,e,!0,s)}),n&&s&&e(t)}function jL(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ko(t){return new Ne(t.parent===null?t.name:Ko(t.parent)+"/"+t.name)}function _h(t){t.parent!==null&&HL(t.parent,t.name,t)}function HL(t,e,n){const s=$L(n),i=zn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,_h(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,_h(t))}/**
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
 */const WL=/[\[\].#$\/\u0000-\u001F\u007F]/,qL=/[\[\].#$\u0000-\u001F\u007F]/,eu=10*1024*1024,wb=function(t){return typeof t=="string"&&t.length!==0&&!WL.test(t)},KL=function(t){return typeof t=="string"&&t.length!==0&&!qL.test(t)},zL=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),KL(t)},Eb=function(t,e,n){const s=n instanceof Ne?new SM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Rs(s));if(typeof e=="function")throw new Error(t+"contains a function "+Rs(s)+" with contents = "+e.toString());if(wE(e))throw new Error(t+"contains "+e.toString()+" "+Rs(s));if(typeof e=="string"&&e.length>eu/3&&Nc(e)>eu)throw new Error(t+"contains a string greater than "+eu+" utf8 bytes "+Rs(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(zt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!wb(o)))throw new Error(t+" contains an invalid key ("+o+") "+Rs(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);RM(s,o),Eb(t,a,s),AM(s)}),i&&r)throw new Error(t+' contains ".value" child '+Rs(s)+" in addition to actual children.")}},GL=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!wb(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!zL(n))throw new Error(E0(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class QL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function YL(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!HE(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function ci(t,e,n){YL(t,n),XL(t,s=>nn(s,e)||nn(e,s))}function XL(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(JL(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function JL(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();qs&&dt("event: "+n.toString()),Wo(s)}}}/**
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
 */const ZL="repo_interrupt",eF=25;class tF{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new QL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=lc(),this.transactionQueueTree_=new bf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function nF(t,e,n){if(t.stats_=lf(t.repoInfo_),t.forceRestClient_||Yx())t.server_=new cc(t.repoInfo_,(s,i,r,o)=>{Rm(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Am(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{rt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Bn(t.repoInfo_,e,(s,i,r,o)=>{Rm(t,s,i,r,o)},s=>{Am(t,s)},s=>{iF(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=nM(t.repoInfo_,()=>new tL(t.stats_,t.server_)),t.infoData_=new YM,t.infoSyncTree_=new Cm({startListening:(s,i,r,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=_l(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),If(t,"connected",!1),t.serverSyncTree_=new Cm({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);ci(t.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function sF(t){const n=t.infoData_.getNode(new Ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function bb(t){return LL({timestamp:sF(t)})}function Rm(t,e,n,s,i){t.dataUpdateCount++;const r=new Ne(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=xa(n,l=>ft(l));o=ML(t.serverSyncTree_,r,c,i)}else{const c=ft(n);o=xL(t.serverSyncTree_,r,c,i)}else if(s){const c=xa(n,l=>ft(l));o=PL(t.serverSyncTree_,r,c)}else{const c=ft(n);o=_l(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Sf(t,r)),ci(t.eventQueue_,a,o)}function Am(t,e){If(t,"connected",e),e===!1&&oF(t)}function iF(t,e){zt(e,(n,s)=>{If(t,n,s)})}function If(t,e,n){const s=new Ne("/.info/"+e),i=ft(n);t.infoData_.updateSnapshot(s,i);const r=_l(t.infoSyncTree_,s,i);ci(t.eventQueue_,s,r)}function rF(t){return t.nextWriteId_++}function oF(t){Tb(t,"onDisconnectEvents");const e=bb(t),n=lc();uh(t.onDisconnect_,be(),(i,r)=>{const o=BL(i,r,t.serverSyncTree_,e);YE(n,i,o)});let s=[];uh(n,be(),(i,r)=>{s=s.concat(_l(t.serverSyncTree_,i,r));const o=uF(t,i);Sf(t,o)}),t.onDisconnect_=lc(),ci(t.eventQueue_,be(),s)}function aF(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ZL)}function Tb(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),dt(n,...e)}function Ib(t,e,n){return hb(t.serverSyncTree_,e,n)||_e.EMPTY_NODE}function Cf(t,e=t.transactionQueueTree_){if(e||wl(t,e),ar(e)){const n=Sb(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&cF(t,Ko(e),n)}else yb(e)&&vl(e,n=>{Cf(t,n)})}function cF(t,e,n){const s=n.map(l=>l.currentWriteId),i=Ib(t,e,s);let r=i;const o=i.hash();for(let l=0;l<n.length;l++){const u=n[l];P(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ht(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{Tb(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(vi(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();wl(t,Tf(t.transactionQueueTree_,e)),Cf(t,t.transactionQueueTree_),ci(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Wo(h[d])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Bt("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}Sf(t,e)}},o)}function Sf(t,e){const n=Cb(t,e),s=Ko(n),i=Sb(t,n);return lF(t,i,s),s}function lF(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Ht(n,c.path);let u=!1,h;if(P(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(vi(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=eF)u=!0,h="maxretry",i=i.concat(vi(t.serverSyncTree_,c.currentWriteId,!0));else{const d=Ib(t,c.path,o);c.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){Eb("transaction failed: Data returned ",p,c.path);let g=ft(p);typeof p=="object"&&p!=null&&zn(p,".priority")||(g=g.updatePriority(d.getPriority()));const v=c.currentWriteId,b=bb(t),A=VL(g,d,b);c.currentOutputSnapshotRaw=g,c.currentOutputSnapshotResolved=A,c.currentWriteId=rF(t),o.splice(o.indexOf(v),1),i=i.concat(DL(t.serverSyncTree_,c.path,A,c.currentWriteId,c.applyLocally)),i=i.concat(vi(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",i=i.concat(vi(t.serverSyncTree_,c.currentWriteId,!0))}ci(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}wl(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Wo(s[a]);Cf(t,t.transactionQueueTree_)}function Cb(t,e){let n,s=t.transactionQueueTree_;for(n=ce(e);n!==null&&ar(s)===void 0;)s=Tf(s,n),e=ke(e),n=ce(e);return s}function Sb(t,e){const n=[];return Rb(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Rb(t,e,n){const s=ar(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);vl(e,i=>{Rb(t,i,n)})}function wl(t,e){const n=ar(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,_b(e,n.length>0?n:void 0)}vl(e,s=>{wl(t,s)})}function uF(t,e){const n=Ko(Cb(t,e)),s=Tf(t.transactionQueueTree_,e);return jL(s,i=>{tu(t,i)}),tu(t,s),vb(s,i=>{tu(t,i)}),n}function tu(t,e){const n=ar(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(vi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?_b(e,void 0):n.length=r+1,ci(t.eventQueue_,Ko(e),i);for(let o=0;o<s.length;o++)Wo(s[o])}}/**
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
 */function hF(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function dF(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Bt(`Invalid query segment '${n}' in query '${t}'`)}return e}const km=function(t,e){const n=fF(t),s=n.namespace;n.domain==="firebase.com"&&Js(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Js("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||jx();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Zx(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Ne(n.pathString)}},fF=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=hF(t.substring(u,h)));const d=dF(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const p=e.slice(0,l);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class Rf{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return oe(this._path)?null:VE(this._path)}get ref(){return new cr(this._repo,this._path)}get _queryIdentifier(){const e=pm(this._queryParams),n=af(e);return n==="{}"?"default":n}get _queryObject(){return pm(this._queryParams)}isEqual(e){if(e=Be(e),!(e instanceof Rf))return!1;const n=this._repo===e._repo,s=HE(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+CM(this._path)}}class cr extends Rf{constructor(e,n){super(e,n,new ff,!1)}get parent(){const e=jE(this._path);return e===null?null:new cr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}NL(cr);OL(cr);/**
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
 */const pF="FIREBASE_DATABASE_EMULATOR_HOST",yh={};let gF=!1;function mF(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Js("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),dt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=km(r,i),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[pF]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=km(r,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new ah(ah.OWNER):new Jx(t.name,t.options,e);GL("Invalid Firebase Database URL",o),oe(o.path)||Js("Database URL must point to the root of a Firebase Database (not including a child path).");const h=yF(a,t,u,new Xx(t.name,n));return new vF(h,t)}function _F(t,e){const n=yh[e];(!n||n[t.key]!==t)&&Js(`Database ${e}(${t.repoInfo_}) has already been deleted.`),aF(t),delete n[t.key]}function yF(t,e,n,s){let i=yh[e.name];i||(i={},yh[e.name]=i);let r=i[t.toURLString()];return r&&Js("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new tF(t,gF,n,s),i[t.toURLString()]=r,r}class vF{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(nF(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new cr(this._repo,be())),this._rootInternal}_delete(){return this._rootInternal!==null&&(_F(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Js("Cannot call "+e+" on a deleted database.")}}/**
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
 */function wF(t){Fx(ni),In(new hn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return mF(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Ut(Yg,Xg,t),Ut(Yg,Xg,"esm2017")}Bn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Bn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};wF();const nu=new WeakMap;function Ab(t,e){return nu.has(e)||nu.set(e,t||{f:{},r:{},s:{},u:{}}),nu.get(e)}function EF(t,e,n,s){if(!t)return n;const[i,r]=kb(t);if(!i)return n;const o=Ab(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function bF(t,e,n,s){if(!t)return;const[i,r]=kb(t);if(!i)return;const o=Ab(void 0,s)[i],a=e||r;if(a)return n.then(c=>{o[a]=c}),a}function kb(t){return Ox(t)||Dx(t)?["f",t.path]:Px(t)?["r",t.toString()]:xx(t)?["s",t.toString()]:[]}const su=new WeakMap;function TF(t,e,n){const s=sf();su.has(s)||su.set(s,new Map);const i=su.get(s),r=bF(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):Ln}const IF={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function vh(t,e,n,s){if(!kx(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,c)=>{const l=n[c];return a[l.path]=l.data(),a},{});function o(a,c,l,u){c=c||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(p=>{const g=Object.getOwnPropertyDescriptor(a,p);g&&!g.enumerable&&Object.defineProperty(h,p,g)});for(const p in a){const g=a[p];if(g==null||g instanceof Date||g instanceof We||g instanceof cl)h[p]=g;else if(of(g)){const _=l+p;h[p]=_ in n?c[p]:g.path,d[_]=g.converter?g:g.withConverter(s.converter)}else if(Array.isArray(g)){h[p]=Array(g.length);for(let _=0;_<g.length;_++){const v=g[_];v&&v.path in r&&(h[p][_]=r[v.path])}o(g,c[p]||h[p],l+p+".",[h[p],d])}else oi(g)?(h[p]={},o(g,c[p],l+p+".",[h[p],d])):h[p]=g}}return o(t,e,"",i),i}const Af={reset:!1,wait:!0,maxRefDepth:2,converter:IF,snapshotOptions:{serverTimestamps:"estimate"}};function fc(t){for(const e in t)t[e].unsub()}function wh(t,e,n,s,i,r,o,a,c){const[l,u]=vh(s.data(t.snapshotOptions),rf(e,n),i,t);r.set(e,n,l),Eh(t,e,n,i,u,r,o,a,c)}function CF({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const c=Object.create(null);let l=Ln;return a.once?hw(t).then(u=>{u.exists()?wh(a,e,n,u,c,o,s,i,r):(o.set(e,n,null),i())}).catch(r):l=Vd(t,u=>{u.exists()?wh(a,e,n,u,c,o,s,i,r):(o.set(e,n,null),i())},r),()=>{l(),fc(c)}}function Eh(t,e,n,s,i,r,o,a,c){const l=Object.keys(i);if(Object.keys(s).filter(_=>l.indexOf(_)<0).forEach(_=>{s[_].unsub(),delete s[_]}),!l.length||++o>t.maxRefDepth)return a(n);let h=0;const d=l.length,p=Object.create(null);function g(_){_ in p&&++h>=d&&a(n)}l.forEach(_=>{const v=s[_],b=i[_],A=`${n}.${_}`;if(p[A]=!0,v)if(v.path!==b.path)v.unsub();else return;s[_]={data:()=>rf(e,A),unsub:CF({ref:b,target:e,path:A,depth:o,ops:r,resolve:g.bind(null,A),reject:c},t),path:b.path}})}function SF(t,e,n,s,i,r){const o=Object.assign({},Af,r),{snapshotListenOptions:a,snapshotOptions:c,wait:l,once:u}=o,h="value";let d=rn(l?[]:t.value);l||n.set(t,h,[]);const p=s;let g,_=Ln;const v=[],b={added:({newIndex:I,doc:O})=>{v.splice(I,0,Object.create(null));const z=v[I],[re,ge]=vh(O.data(c),void 0,z,o);n.add(de(d),I,re),Eh(o,d,`${h}.${I}`,z,ge,n,0,s.bind(null,O),i)},modified:({oldIndex:I,newIndex:O,doc:z})=>{const re=de(d),ge=v[I],j=re[I],[Te,ye]=vh(z.data(c),j,ge,o);v.splice(O,0,ge),n.remove(re,I),n.add(re,O,Te),Eh(o,d,`${h}.${O}`,ge,ye,n,0,s,i)},removed:({oldIndex:I})=>{const O=de(d);n.remove(O,I),fc(v.splice(I,1)[0])}};function A(I){const O=I.docChanges(a);if(!g&&O.length){g=!0;let z=0;const re=O.length,ge=Object.create(null);for(let j=0;j<re;j++)ge[O[j].doc.id]=!0;s=j=>{j&&j.id in ge&&++z>=re&&(l&&(n.set(t,h,de(d)),d=t),p(de(d)),s=Ln)}}O.forEach(z=>{b[z.type](z)}),O.length||(l&&(n.set(t,h,de(d)),d=t),s(de(d)))}return u?Ck(e).then(A).catch(i):_=Vd(e,A,i),I=>{if(_(),I){const O=typeof I=="function"?I():[];n.set(t,h,O)}v.forEach(fc)}}function RF(t,e,n,s,i,r){const o=Object.assign({},Af,r),a="value",c=Object.create(null);s=Mx(s,()=>rf(t,a));let l=Ln;function u(h){h.exists()?wh(o,t,a,h,c,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?hw(e).then(u).catch(i):l=Vd(e,u,i),h=>{if(l(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}fc(c)}}function AF(t,e){let n=Ln;const s=Object.assign({},Af,e),i=de(t),r=s.target||rn();Lx()&&(s.once=!0),r.value=EF(i,s.ssrKey,r.value,sf());let o=r.value===void 0;const a=rn(!1),c=rn(),l=Jm(),u=Lm();let h=Ln;function d(){let _=de(t);const v=new Promise((b,A)=>{if(n(s.reset),!_)return n=Ln,b(null);a.value=o,o=!0,_.converter||(_=_.withConverter(s.converter)),n=(of(_)?RF:SF)(r,_,kF,b,A,s)}).catch(b=>(l.value===v&&(c.value=b),Promise.reject(b))).finally(()=>{l.value===v&&(a.value=!1)});l.value=v}let p=Ln;Ue(t)&&(p=Rr(t,d)),d(),i&&(h=TF(l.value,i,s.ssrKey)),Sc()&&__(()=>l.value),u&&Kb(g);function g(_=s.reset){p(),h(),n(_)}return Object.defineProperties(r,{error:{get:()=>c},data:{get:()=>r},pending:{get:()=>a},promise:{get:()=>l},stop:{get:()=>g}})}const kF={set:(t,e,n)=>Rx(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function NF(t,e){return AF(t,{target:rn([]),...e})}function OF(t){return Jv(sf(t))}const Xe=t=>(mo("data-v-aa54668a"),t=t(),_o(),t),DF={class:"greetings"},PF=Xe(()=>L("h1",null,"Área Privada",-1)),xF=Xe(()=>L("h2",null,"Crear Curso",-1)),MF=Xe(()=>L("br",null,null,-1)),LF=Xe(()=>L("label",{for:"categoria"},"Categoria del Curso",-1)),FF=Xe(()=>L("br",null,null,-1)),UF=Xe(()=>L("br",null,null,-1)),BF=Xe(()=>L("label",{for:"nombre"},"Nombre del Curso",-1)),VF=Xe(()=>L("br",null,null,-1)),$F=Xe(()=>L("br",null,null,-1)),jF=Xe(()=>L("label",{for:"duracion"},"Duración del Curso",-1)),HF=Xe(()=>L("br",null,null,-1)),WF=Xe(()=>L("br",null,null,-1)),qF=Xe(()=>L("br",null,null,-1)),KF=Xe(()=>L("label",{for:"imagen"},"Imagen ",-1)),zF=Xe(()=>L("input",{type:"file",id:"imagen"},null,-1)),GF=Xe(()=>L("br",null,null,-1)),QF=Xe(()=>L("hr",null,null,-1)),YF=Xe(()=>L("li",null,"Nuevo Curso:",-1)),XF=Xe(()=>L("li",null,[L("img",{src:V1,alt:"imagen del curso"})],-1)),JF=["onClick"],ZF=["onClick"],eU={__name:"administracion",setup(t){var e=JP();const n=OF();function s(){const a=document.getElementById("imagen").files[0],c=XP(e,"cursos/"+a.name);YP(c,a).then(l=>{console.log("Archivo cargado con éxito"),Ak(rg(n,"cursos"),{nombre:document.getElementById("nombre").value,duracion:document.getElementById("duracion").value,categoria:document.getElementById("categoria").value,imagen:document.getElementById("categoria").src})}).catch(l=>{console.error("Error al cargar el archivo",l)})}function i(a){Rk(Gu(n,"cursos",a)).then(()=>{console.log("Curso eliminado correctamente")}).catch(c=>{console.error("Error al eliminar el curso",c)})}function r(a){const c=Gu(n,"cursos",a);Sk(c,{nombre:document.getElementById("nombre").value,duracion:document.getElementById("duracion").value,categoria:document.getElementById("categoria").value,imagen:document.getElementById("categoria").src}).then(()=>{console.log("Curso actualizado correctamente")}).catch(l=>{console.error("Error al actualizar el curso",l)})}const o=NF(rg(n,"cursos"));return(a,c)=>(It(),cn(xt,null,[Me(sE),Me(iE),Me(rE),L("div",DF,[PF,L("p",null,"Bienvenido "+yr(a.nombreUsuario),1),xF,MF,LF,FF,Us(L("input",{type:"text","onUpdate:modelValue":c[0]||(c[0]=l=>a.categoria=l),id:"categoria"},null,512),[[Vs,a.categoria]]),UF,BF,VF,Us(L("input",{type:"text","onUpdate:modelValue":c[1]||(c[1]=l=>a.nombre=l),id:"nombre"},null,512),[[Vs,a.nombre]]),$F,jF,HF,Us(L("input",{type:"text","onUpdate:modelValue":c[2]||(c[2]=l=>a.duracion=l),id:"duracion"},null,512),[[Vs,a.duracion]]),WF,qF,KF,zF,GF,L("button",{onClick:c[3]||(c[3]=l=>s())},"Crear Curso"),QF,(It(!0),cn(xt,null,JT(de(o),l=>(It(),cn("ul",{key:l.id,style:{"list-style":"none"},class:"listas"},[YF,L("li",null," Nombre: "+yr(l.nombre),1),L("li",null,"Duración: "+yr(l.duracion),1),L("li",null,"Categoria: "+yr(l.categoria),1),XF,L("li",null,[L("button",{onClick:u=>i(l.id)},"Borrar Curso",8,JF)]),L("li",null,[L("button",{onClick:u=>r(l.id)},"Editar Curso",8,ZF)])]))),128))])],64))}},tU=ws(eU,[["__scopeId","data-v-aa54668a"]]),nU=[{path:"/",component:YD},{path:"/ofimatica",component:sE},{path:"/programacion",component:iE},{path:"/sistemas",component:rE},{path:"/registro",component:i1},{path:"/login",component:B1},{path:"/administracion",component:tU}],bh=OD({history:QO(),routes:nU});Dw($i,t=>{t?(t.uid,bh.push("/administracion")):bh.push("/")});const Nb=XI(VD);Nb.use(bh);Nb.mount("#app");
