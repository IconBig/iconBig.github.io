import{a3 as c,g as a,i as t,K as i}from"./vidstack-DgnIG4vb.js";import{i as u,g as l}from"./vidstack-BPJ48Ie8.js";function d(r,n){const e=new URLSearchParams;for(const o of Object.keys(n))e.set(o,n[o]+"");return r+"?"+e.toString()}function m(r,n="preconnect"){const e=document.querySelector(`link[href="${r}"]`);if(!c(e))return!0;const o=document.createElement("link");return o.rel=n,o.href=r,o.crossOrigin="true",document.head.append(o),!0}const s={};function p(r){if(s[r])return s[r].promise;const n=a(),e=document.querySelector(`script[src="${r}"]`);if(!c(e))return n.resolve(),n.promise;const o=document.createElement("script");return o.src=r,o.onload=()=>{n.resolve(),delete s[r]},o.onerror=()=>{n.reject(),delete s[r]},setTimeout(()=>document.head.append(o),0),n.promise}function f(r){return r==="use-credentials"?"include":t(r)?"same-origin":void 0}function g({title:r,src:n,download:e}){const o=i(e)||e===""?n.src:t(e)?e:e?.url;return S({url:o,src:n,download:e})?{url:o,name:!i(e)&&!t(e)&&e?.filename||r.toLowerCase()||"media"}:null}function S({url:r,src:n,download:e}){return t(r)&&(e&&e!==!0||u(n)||l(n))}export{g as a,d as b,f as g,p as l,m as p};
