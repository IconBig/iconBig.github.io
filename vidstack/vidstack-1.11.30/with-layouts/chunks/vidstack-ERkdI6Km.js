import{a as i,j as a}from"./vidstack-DgnIG4vb.js";class l{get length(){return this.ta.length}constructor(t,r){i(t)?this.ta=t:!a(t)&&!a(r)?this.ta=[[t,r]]:this.ta=[]}start(t){return this.ta[t][0]??1/0}end(t){return this.ta[t][1]??1/0}}function u(e){if(!e.length)return null;let t=e.start(0);for(let r=1;r<e.length;r++){const n=e.start(r);n<t&&(t=n)}return t}function h(e){if(!e.length)return null;let t=e.end(0);for(let r=1;r<e.length;r++){const n=e.end(r);n>t&&(t=n)}return t}function o(e){if(e.length<=1)return e;e.sort((n,s)=>n[0]-s[0]);let t=[],r=e[0];for(let n=1;n<e.length;n++){const s=e[n];r[1]>=s[0]-1?r=[r[0],Math.max(r[1],s[1])]:(t.push(r),r=s)}return t.push(r),t}function g(e,t,r){let n=t[0],s=t[1];return r<n?[r,-1]:r===n?t:n===-1?(t[0]=r,t):(r>n&&(t[1]=r,s===-1&&e.push(t)),o(e),t)}export{l as T,h as a,u as g,g as u};
