import{Z as p,s as l,e as o,p as u,i as g,g as d,l as f,a as m}from"../chunks/vidstack-B1PqmCkk.js";import{Q as b}from"../chunks/vidstack-dclo3F73.js";import{T as h}from"../chunks/vidstack-BRxZ8PR0.js";import{a as k}from"../chunks/vidstack-D4TaANKI.js";import{L as n}from"../chunks/vidstack-ClIUVQwo.js";import{R as v}from"../chunks/vidstack-Ch6gqkZw.js";import{p as y}from"../chunks/vidstack-Ds9fx5AB.js";import{E as w}from"../chunks/vidstack-W2762mNx.js";import{resolveVimeoVideoId as T,getVimeoVideoInfo as j}from"../chunks/vidstack-CV_nEHqD.js";import"../chunks/vidstack-BC0sXP__.js";const $=["bufferend","bufferstart","durationchange","ended","enterpictureinpicture","error","fullscreenchange","leavepictureinpicture","loaded","playProgress","loadProgress","pause","play","playbackratechange","qualitychange","seeked","seeking","timeupdate","volumechange","waiting"];class R extends w{constructor(t,e){super(t),this.b=e,this.$$PROVIDER_TYPE="VIMEO",this.scope=p(),this.ha=l(""),this.tc=l(!1),this.ve=null,this.K=null,this.Tn=!1,this.Aa=new h(0,0),this.fa=new v(this.kc.bind(this)),this.Yi=null,this.hd=null,this.Rn=new Map,this.ue=null,this.cookies=!1,this.title=!0,this.byline=!0,this.portrait=!0,this.color="00ADEF",this.jd=!1;const s=this;this.fullscreen={get active(){return s.Tn},supported:!0,enter:()=>this.t("requestFullscreen"),exit:()=>this.t("exitFullscreen")}}get c(){return this.b.delegate.c}get type(){return"vimeo"}get currentSrc(){return this.K}get videoId(){return this.ha()}get hash(){return this.ve}get isPro(){return this.tc()}preconnect(){y(this.Nb())}setup(){super.setup(),o(this.we.bind(this)),o(this.Zi.bind(this)),o(this._i.bind(this)),this.c("provider-setup",this)}destroy(){this.z(),this.fullscreen=void 0;const t="provider destroyed";for(const e of this.Rn.values())for(const{reject:s}of e)s(t);this.Rn.clear(),this.t("destroy")}async play(){return this.t("play")}async pause(){return this.t("pause")}setMuted(t){this.t("setMuted",t)}setCurrentTime(t){this.t("seekTo",t),this.c("seeking",t)}setVolume(t){this.t("setVolume",t),this.t("setMuted",u(this.b.$state.muted))}setPlaybackRate(t){this.t("setPlaybackRate",t)}async loadSource(t){if(!g(t.src)){this.K=null,this.ve=null,this.ha.set("");return}const{videoId:e,hash:s}=T(t.src);this.ha.set(e??""),this.ve=s??null,this.K=t}we(){this.z();const t=this.ha();if(!t){this.sc.set("");return}this.sc.set(`${this.Nb()}/video/${t}`),this.c("load-start")}Zi(){const t=this.ha();if(!t)return;const e=d(),s=new AbortController;return this.ue=e,j(t,s,this.ve).then(i=>{e.resolve(i)}).catch(i=>{e.reject()}),()=>{e.reject(),s.abort()}}_i(){const t=this.tc(),{$state:e,qualities:s}=this.b;if(e.canSetPlaybackRate.set(t),s[n.Od](!t),t)return f(s,"change",()=>{if(s.auto)return;const i=s.selected?.id;i&&this.t("setQuality",i)})}Nb(){return"https://player.vimeo.com"}mg(){const{keyDisabled:t}=this.b.$props,{playsInline:e,nativeControls:s}=this.b.$state,i=s();return{title:this.title,byline:this.byline,color:this.color,portrait:this.portrait,controls:i,h:this.hash,keyboard:i&&!t(),transparent:!0,playsinline:e(),dnt:!this.cookies}}kc(){this.t("getCurrentTime")}mc(t,e){if(this.jd&&t===0)return;const{realCurrentTime:s,realDuration:i,paused:a,bufferedEnd:r}=this.b.$state;if(s()===t)return;const c=s();this.c("time-change",t,e),Math.abs(c-t)>1.5&&(this.c("seeking",t,e),!a()&&r()<t&&this.c("waiting",void 0,e)),i()-t<.01&&(this.c("end",void 0,e),this.jd=!0,setTimeout(()=>{this.jd=!1},500))}ob(t,e){this.c("seeked",t,e)}tb(t){const e=this.ha();this.ue?.promise.then(s=>{if(!s)return;const{title:i,poster:a,duration:r,pro:c}=s;this.tc.set(c),this.c("title-change",i,t),this.c("poster-change",a,t),this.c("duration-change",r,t),this.kd(r,t)}).catch(()=>{e===this.ha()&&(this.t("getVideoTitle"),this.t("getDuration"))})}kd(t,e){const{nativeControls:s}=this.b.$state,i=s();this.Aa=new h(0,t);const a={buffered:new h(0,0),seekable:this.Aa,duration:t};this.b.delegate.Ga(a,e),i||this.t("_hideOverlay"),this.t("getQualities"),this.t("getChapters")}$i(t,e,s){switch(t){case"getVideoTitle":const i=e;this.c("title-change",i,s);break;case"getDuration":const a=e;this.b.$state.canPlay()?this.c("duration-change",a,s):this.kd(a,s);break;case"getCurrentTime":this.mc(e,s);break;case"getBuffered":m(e)&&e.length&&this.ng(e[e.length-1][1],s);break;case"setMuted":this.Na(u(this.b.$state.volume),e,s);break;case"getChapters":this.aj(e);break;case"getQualities":this.ld(e,s);break}this.Sn(t)?.resolve()}bj(){for(const t of $)this.t("addEventListener",t)}ib(t){this.fa.$(),this.c("pause",void 0,t)}gc(t){this.fa.Xa(),this.c("play",void 0,t)}cj(t){const{paused:e}=this.b.$state;!e()&&!this.jd&&this.c("playing",void 0,t)}ng(t,e){const s={buffered:new h(0,t),seekable:this.Aa};this.c("progress",s,e)}dj(t){this.c("waiting",void 0,t)}ej(t){const{paused:e}=this.b.$state;e()||this.c("playing",void 0,t)}ee(t){const{paused:e}=this.b.$state;e()&&this.c("play",void 0,t),this.c("waiting",void 0,t)}Na(t,e,s){const i={volume:t,muted:e};this.c("volume-change",i,s)}aj(t){if(this.og(),!t.length)return;const e=new k({kind:"chapters",default:!0}),{realDuration:s}=this.b.$state;for(let i=0;i<t.length;i++){const a=t[i],r=t[i+1];e.addCue(new window.VTTCue(a.startTime,r?.startTime??s(),a.title))}this.hd=e,this.b.textTracks.add(e)}og(){this.hd&&(this.b.textTracks.remove(this.hd),this.hd=null)}ld(t,e){this.b.qualities[b.Ia]=t.some(s=>s.id==="auto")?()=>this.t("setQuality","auto"):void 0;for(const s of t){if(s.id==="auto")continue;const i=+s.id.slice(0,-1);isNaN(i)||this.b.qualities[n.da]({id:s.id,width:i*(16/9),height:i,codec:"avc1,h.264",bitrate:-1},e)}this.Za(t.find(s=>s.active),e)}Za({id:t}={},e){if(!t)return;const s=t==="auto",i=this.b.qualities.getById(t);s?(this.b.qualities[b.Wa](s,e),this.b.qualities[n.ea](void 0,!0,e)):this.b.qualities[n.ea](i??void 0,!0,e)}fj(t,e,s){switch(t){case"ready":this.bj();break;case"loaded":this.tb(s);break;case"play":this.gc(s);break;case"playProgress":this.cj(s);break;case"pause":this.ib(s);break;case"loadProgress":this.ng(e.seconds,s);break;case"waiting":this.ee(s);break;case"bufferstart":this.dj(s);break;case"bufferend":this.ej(s);break;case"volumechange":this.Na(e.volume,u(this.b.$state.muted),s);break;case"durationchange":this.Aa=new h(0,e.duration),this.c("duration-change",e.duration,s);break;case"playbackratechange":this.c("rate-change",e.playbackRate,s);break;case"qualitychange":this.Za(e,s);break;case"fullscreenchange":this.Tn=e.fullscreen,this.c("fullscreen-change",e.fullscreen,s);break;case"enterpictureinpicture":this.c("picture-in-picture-change",!0,s);break;case"leavepictureinpicture":this.c("picture-in-picture-change",!1,s);break;case"ended":this.c("end",void 0,s);break;case"error":this.Q(e,s);break;case"seek":case"seeked":this.ob(e.seconds,s);break}}Q(t,e){const{message:s,method:i}=t;i==="setPlaybackRate"&&this.tc.set(!1),i&&this.Sn(i)?.reject(s)}te(t,e){t.event?this.fj(t.event,t.data,e):t.method&&this.$i(t.method,t.value,e)}gd(){}async t(t,e){let s=d(),i=this.Rn.get(t);return i||this.Rn.set(t,i=[]),i.push(s),this.se({method:t,value:e}),s.promise}z(){this.fa.$(),this.Aa=new h(0,0),this.ue=null,this.Yi=null,this.tc.set(!1),this.og()}Sn(t){return this.Rn.get(t)?.shift()}}export{R as VimeoProvider};
