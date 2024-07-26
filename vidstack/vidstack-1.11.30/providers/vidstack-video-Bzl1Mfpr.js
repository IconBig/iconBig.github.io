import{o as h,l as a,D as l,G as m}from"../chunks/vidstack-B1PqmCkk.js";import{h as u,j as d,k as f}from"../chunks/vidstack-BC0sXP__.js";import{HTMLMediaProvider as g}from"./vidstack-html-D1TP8Img.js";import{H as P}from"../chunks/vidstack-CmPcDiqw.js";import{a as b,T as n}from"../chunks/vidstack-D4TaANKI.js";import"../chunks/vidstack-DjjE3HN8.js";import"../chunks/vidstack-Ch6gqkZw.js";import"../chunks/vidstack-ClIUVQwo.js";import"../chunks/vidstack-Ds9fx5AB.js";class k{constructor(t,e){this.m=t,this.b=e,t.textTracks.onaddtrack=this.Yd.bind(this),h(this.ce.bind(this))}Yd(t){const e=t.track;if(!e||v(this.m,e))return;const i=new b({id:e.id,kind:e.kind,label:e.label??"",language:e.language,type:"vtt"});i[n._]={track:e},i[n.ma]=2,i[n.Mf]=!0;let r=0;const o=p=>{if(e.cues)for(let c=r;c<e.cues.length;c++)i.addCue(e.cues[c],p),r++};o(t),e.oncuechange=o,this.b.textTracks.add(i,t),i.setMode(e.mode,t)}ce(){this.m.textTracks.onaddtrack=null;for(const t of this.b.textTracks){const e=t[n._]?.track;e?.oncuechange&&(e.oncuechange=null)}}}function v(s,t){return Array.from(s.children).find(e=>e.track===t)}class y{constructor(t,e){this.m=t,this.a=e,this.E=(i,r)=>{this.a.delegate.c("picture-in-picture-change",i,r)},a(this.m,"enterpictureinpicture",this.Gi.bind(this)),a(this.m,"leavepictureinpicture",this.Hi.bind(this))}get active(){return document.pictureInPictureElement===this.m}get supported(){return u(this.m)}async enter(){return this.m.requestPictureInPicture()}exit(){return document.exitPictureInPicture()}Gi(t){this.E(!0,t)}Hi(t){this.E(!1,t)}}class x{constructor(t,e){this.m=t,this.a=e,this.U="inline",a(this.m,"webkitpresentationmodechanged",this.hb.bind(this))}get pb(){return d(this.m)}async fd(t){this.U!==t&&this.m.webkitSetPresentationMode(t)}hb(t){const e=this.U;this.U=this.m.webkitPresentationMode,this.a.player?.dispatch(new l("video-presentation-change",{detail:this.U,trigger:t})),["fullscreen","picture-in-picture"].forEach(i=>{(this.U===i||e===i)&&this.a.delegate.c(`${i}-change`,this.U===i,t)})}}class T{constructor(t){this.Oa=t}get active(){return this.Oa.U==="fullscreen"}get supported(){return this.Oa.pb}async enter(){this.Oa.fd("fullscreen")}async exit(){this.Oa.fd("inline")}}class O{constructor(t){this.Oa=t}get active(){return this.Oa.U==="picture-in-picture"}get supported(){return this.Oa.pb}async enter(){this.Oa.fd("picture-in-picture")}async exit(){this.Oa.fd("inline")}}class w extends g{constructor(t,e){super(t,e),this.$$PROVIDER_TYPE="VIDEO",m(()=>{if(this.airPlay=new P(t,e),d(t)){const i=new x(t,e);this.fullscreen=new T(i),this.pictureInPicture=new O(i)}else u(t)&&(this.pictureInPicture=new y(t,e))},this.scope)}get type(){return"video"}setup(){super.setup(),f(this.video)&&new k(this.video,this.b),this.b.textRenderers.Xf(this.video),h(()=>{this.b.textRenderers.Xf(null)}),this.type==="video"&&this.b.delegate.c("provider-setup",this)}get video(){return this.a}}export{w as VideoProvider};
